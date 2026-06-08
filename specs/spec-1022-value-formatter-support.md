# Spec #1022 + #877 — Support `valueFormatter` in tooltips / migrate examples away from `tooltip.formatter`

## Context

This specification addresses two related issues:

- **Issue `#1022`**: https://github.com/Orange-OpenSource/ods-charts/issues/1022
- **Issue `#877`**: https://github.com/Orange-OpenSource/ods-charts/issues/877

### Issue #1022 — `valueFormatter` silently ignored

Apache ECharts 5.3.0 introduced `tooltip.valueFormatter` as a dedicated, lighter-weight alternative to `tooltip.formatter` for formatting the **value portion** of each tooltip entry. Unlike `formatter` (which replaces the entire tooltip HTML), `valueFormatter` only formats the scalar value displayed next to each series label.

ECharts supports `valueFormatter` at two levels:

- **Global** — `tooltip.valueFormatter`: applies to all series items.
- **Per-series** — `series[i].tooltip.valueFormatter`: applies only to series `i`, overriding the global one for that series.

**Signature:**

```ts
valueFormatter: (value: number | string, dataIndex: number) => string;
```

ODS Charts intercepts all `tooltip` configuration to render popovers through its own HTML pipeline. As a result, any `valueFormatter` set by the user in their chart options is **silently discarded**: ODS replaces the ECharts native `tooltip.formatter` with its own implementation. The user has no way to customize the displayed value without resorting to `ODSChartsPopoverDefinition.getPopupContentValue`, which is an ODS-specific API and not compatible with standard ECharts usage.

### Reduced test case (#1022)

https://stackblitz.com/edit/dsza8z1s?file=index.js

### Issue #877 — ODS documentation uses `tooltip.formatter` for value formatting

ODS Charts examples and documentation pages demonstrate value customization using `tooltip.formatter` (the full-template API), when the correct ECharts API since 5.3.0 is `tooltip.valueFormatter`. This creates a contradiction between ODS documentation and ECharts official guidance.

Affected documentation files:

| File                                          | Example                               | Current (incorrect)                                                                                               |
| --------------------------------------------- | ------------------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| `docs/src/content/use_cases/tooltip.md`       | "Specific value tooltip content"      | `tooltip.formatter` returning `<span style="color:red">value</span> °C`                                           |
| `docs/src/content/use_cases/add-unit.md`      | "Add unit in both Y axis and tooltip" | `tooltip.formatter` returning `value + ' °C'`                                                                     |
| `docs/src/content/use_cases/specify-color.md` | Functional color chart                | `tooltip.formatter` returning rounded integer                                                                     |
| `docs/src/content/use_cases/specify-color.md` | "Two colors for one series"           | `tooltip.formatter` returning conditional value + `'$'`                                                           |
| `docs/src/content/use_cases/dataset.md`       | "Dataset line chart"                  | `tooltip.formatter` in live code; prose already mentions `valueFormatter` but the runnable script does not use it |

## Objectives

- Detect `tooltip.valueFormatter` and `series[i].tooltip.valueFormatter` in user-provided chart options.
- Map them to the ODS internal value-formatting pipeline (`getPopupContentValue`).
- Preserve precedence relative to the existing `tooltip.formatter` and the `getPopupContentValue` set through `ODSChartsPopoverDefinition`.
- Remove all `valueFormatter` references from `dataOptions` before ECharts processes them (ODS owns the tooltip layer).
- Update all ODS documentation examples that use `tooltip.formatter` for value-only formatting to use `tooltip.valueFormatter` instead, aligning with ECharts best practice.
- Preserve the existing `tooltip.formatter` bridge for backward compatibility, but no longer recommend it in documentation for value-only formatting.

## Out of Scope

- Changing the public API of `ODSChartsPopoverDefinition`.
- Changing the HTML structure or CSS of ODS popovers.
- Supporting `valueFormatter` on axis-level tooltip (axis pointers do not display formatted values through ODS).
- Migrating uses of `tooltip.formatter` that genuinely replace the full tooltip template (not just the value) — those remain valid uses of `formatter`.

## Current Architecture (summary)

The entry point is **`ODSChartsPopover.addPopoverManagement()`** in
`src/theme/popover/ods-chart-popover.ts`.

Key relevant section (existing `formatter` handling, simplified):

```ts
// 1. Mark the ODS-generated formatter so it is not reprocessed
if (popoverOptions?.tooltip?.formatter) {
  popoverOptions.tooltip.formatter.IsOdsChartsFormatter = true;
}

// 2. If the user provided their own formatter, bridge it to getPopupContentValue
if (dataOptions?.tooltip?.formatter) {
  if (!dataOptions.tooltip.formatter.IsOdsChartsFormatter) {
    if (!this.popoverDefinition.getPopupContentValue) {
      const formatter = dataOptions.tooltip.formatter;
      this.popoverDefinition.getPopupContentValue = (tooltipElement) => formatter([tooltipElement]);
    }
  }
  delete dataOptions.tooltip.formatter;
}
```

`getPopupContentValue` is called in `getTooltipElements()` for each series item after `itemValue` has been resolved:

```ts
if (undefined !== element.itemValue && this.popoverDefinition?.getPopupContentValue) {
  element.itemValue = this.popoverDefinition.getPopupContentValue(element);
}
```

## Functional Requirements

### 1) Global `tooltip.valueFormatter`

- If `dataOptions.tooltip.valueFormatter` is set:
  - And `this.popoverDefinition.getPopupContentValue` is **not** already set (either from `ODSChartsPopoverDefinition` or from the existing `tooltip.formatter` bridge), create a `getPopupContentValue` that calls `valueFormatter(tooltipElement.itemValue, tooltipElement.dataIndex)`.
  - Always delete `dataOptions.tooltip.valueFormatter` so ECharts never sees it.

### 2) Per-series `series[i].tooltip.valueFormatter`

- If `dataOptions.series[i].tooltip.valueFormatter` is set on one or more series:
  - Collect those functions into an internal map keyed by series index (`Map<number, (value, dataIndex) => string>`).
  - Always delete `series[i].tooltip.valueFormatter` from every series object so ECharts never sees them.
  - The map is used when building `getPopupContentValue` (see requirement 3).

### 3) Precedence rules (from highest to lowest)

| Priority | Source                                                                              | Condition                                                                 |
| -------- | ----------------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| 1        | `popoverDefinition.getPopupContentValue` set by the user via `externalizePopover()` | Always wins                                                               |
| 2        | `dataOptions.tooltip.formatter` bridge → `getPopupContentValue`                     | Set when `formatter` is present and `getPopupContentValue` is not yet set |
| 3        | Per-series `series[i].tooltip.valueFormatter`                                       | Applied only to the matching series                                       |
| 4        | Global `tooltip.valueFormatter`                                                     | Applied to all series without a per-series override                       |

Levels 3 and 4 are combined into a single `getPopupContentValue` closure, which:

1. Looks up the per-series map for `tooltipElement.seriesIndex`.
2. If found: returns `perSeriesFormatter(tooltipElement.itemValue, tooltipElement.dataIndex)`.
3. If not found and a global `valueFormatter` exists: returns `globalFormatter(tooltipElement.itemValue, tooltipElement.dataIndex)`.

This closure is only installed if `getPopupContentValue` is not yet set (priority 1 and 2 take precedence).

### 4) Interaction between `tooltip.formatter` and `tooltip.valueFormatter`

If the user provides **both** `tooltip.formatter` and `tooltip.valueFormatter`:

- `tooltip.formatter` is processed first (existing behavior).
- `getPopupContentValue` is therefore already set from the `formatter` bridge.
- `tooltip.valueFormatter` is still deleted from `dataOptions`, but the `valueFormatter` function is **not** applied (priority 2 wins over 4).

### 5) No-op when `externalizePopover` is disabled

The `valueFormatter` handling must be guarded under the same `if (this.popoverConfig.enabled)` branch as the existing `formatter` handling, so it is a no-op when popover management is turned off.

## Implementation Plan

### File: `src/theme/popover/ods-chart-popover.ts`

#### Step 1 — Collect per-series `valueFormatter`

In `addPopoverManagement()`, after resolving `legends` and inside the `if (this.popoverConfig.enabled)` block, add the following **before** the existing `formatter` handling:

```ts
// Collect per-series valueFormatter (ECharts 6)
const perSeriesValueFormatters = new Map<number, (value: any, dataIndex: number) => string>();
if (Array.isArray(dataOptions?.series)) {
  (dataOptions.series as any[]).forEach((series: any, index: number) => {
    if (series?.tooltip?.valueFormatter) {
      perSeriesValueFormatters.set(index, series.tooltip.valueFormatter);
      // Remove it so ECharts does not process it (ODS owns the tooltip)
      series.tooltip = cloneDeepObject(series.tooltip);
      delete series.tooltip.valueFormatter;
    }
  });
}
```

#### Step 2 — Handle global `tooltip.valueFormatter`

After the existing `tooltip.formatter` handling block, add:

```ts
// Handle tooltip.valueFormatter (ECharts 6)
const globalValueFormatter: ((value: any, dataIndex: number) => string) | undefined = dataOptions?.tooltip?.valueFormatter;

if (globalValueFormatter || perSeriesValueFormatters.size > 0) {
  if (dataOptions?.tooltip?.valueFormatter) {
    dataOptions.tooltip = cloneDeepObject(dataOptions.tooltip);
    delete dataOptions.tooltip.valueFormatter;
  }

  if (!this.popoverDefinition.getPopupContentValue) {
    this.popoverDefinition = cloneDeepObject(this.popoverDefinition);
    this.popoverDefinition.getPopupContentValue = (tooltipElement: ODSChartsPopoverItem) => {
      const perSeries = perSeriesValueFormatters.get(tooltipElement.seriesIndex);
      if (perSeries) {
        return perSeries(tooltipElement.itemValue, tooltipElement.dataIndex);
      }
      if (globalValueFormatter) {
        return globalValueFormatter(tooltipElement.itemValue, tooltipElement.dataIndex);
      }
      return tooltipElement.itemValue;
    };
  }
}
```

> **Note**: `cloneDeepObject` is already imported and used throughout this file. No new imports are required.

### No changes to `ods-chart-popover-definitions.ts`

The public API (`ODSChartsPopoverDefinition`, `ODSChartsPopoverItem`) does not need to change.  
`ODSChartsPopoverItem` already exposes `seriesIndex`, `itemValue`, and `dataIndex`, which are the three fields needed by `valueFormatter`.

---

### Documentation updates (issue #877)

The following documentation files must be updated to replace `tooltip.formatter` value-formatting patterns with `tooltip.valueFormatter`. The `tooltip.formatter` bridge in ODS Charts continues to work (backward compatibility), but must no longer be presented as the recommended approach for value formatting.

#### Migration pattern

**Before (deprecated for value formatting):**

```js
tooltip: {
  formatter: function (params) {
    return Math.round(params[0].value * 100) / 100 + ' °C';
  },
},
```

**After (ECharts 5.3.0+ recommended):**

```js
tooltip: {
  valueFormatter: (value) => Math.round(value * 100) / 100 + ' °C',
},
```

The key differences:

- `valueFormatter` receives the scalar `value` directly (not `params` array).
- `valueFormatter` receives `dataIndex` as the second argument (rarely needed).
- `valueFormatter` can return an HTML string (ECharts renders it inside the value cell).

#### `docs/src/content/use_cases/tooltip.md` — "Specific value tooltip content"

Update the prose description and the live code block (`div6_` script) to use `valueFormatter`:

```js
tooltip: {
  valueFormatter: (value) =>
    `<span style="color: red; font-size:x-large">${Math.round(value * 100) / 100}</span> °C`,
},
```

Update any explanatory text that currently references `tooltip.formatter` to refer to `tooltip.valueFormatter` instead.

#### `docs/src/content/use_cases/add-unit.md` — "Add unit in both Y axis and tooltip"

Replace the live code's `tooltip.formatter` with `tooltip.valueFormatter`:

```js
tooltip: {
  valueFormatter: (value) => Math.round(value * 100) / 100 + ' °C',
},
```

#### `docs/src/content/use_cases/specify-color.md` — functional color chart example

Replace:

```js
tooltip: {
  formatter: function (params) {
    return Math.round(params[0].value);
  },
},
```

With:

```js
tooltip: {
  valueFormatter: (value) => Math.round(value),
},
```

#### `docs/src/content/use_cases/specify-color.md` — "Two colors for one series" example

Replace:

```js
tooltip: {
  formatter: function (params) {
    return params[0].value ? Math.round(params[0].value * 100) / 100 + '$' : undefined;
  },
},
```

With:

```js
tooltip: {
  valueFormatter: (value) => value ? Math.round(value * 100) / 100 + '$' : undefined,
},
```

The existing prose note that mentions `getPopupContentValue` as an alternative remains valid and should be kept, but the `formatter` code snippet it illustrates should be changed to `valueFormatter`.

#### `docs/src/content/use_cases/dataset.md` — "Dataset line chart"

The prose already mentions `valueFormatter` as the correct ECharts 6 form. The live runnable script must be updated to match:

```js
tooltip: {
  trigger: 'axis',
  valueFormatter: (value) => Math.round(value * 100) / 100 + ' °C',
},
```

Remove or update any remaining prose that shows the `formatter` form as an example.

## Acceptance Criteria

### Runtime behavior (issue #1022)

- A chart configured with `tooltip: { valueFormatter: (v) => v + ' units' }` displays `"42 units"` in the ODS popover instead of `"42"`.
- A chart where `series[0].tooltip.valueFormatter` formats differently from `series[1].tooltip.valueFormatter` displays the correct per-series formatting for each series.
- When the user sets `tooltip.valueFormatter` **and** `ODSChartsPopoverDefinition.getPopupContentValue` (via `externalizePopover`), the `getPopupContentValue` implementation wins and `valueFormatter` is ignored (but still deleted from `dataOptions`).
- When the user sets both `tooltip.formatter` and `tooltip.valueFormatter`, the `formatter` bridge wins over `valueFormatter`.
- A chart that uses neither `formatter` nor `valueFormatter` continues to work exactly as before (no regression).
- `valueFormatter` is always removed from `dataOptions` and `series[i].tooltip` before ECharts processes the options, regardless of the other conditions.
- A chart using the legacy `tooltip.formatter` bridge (returning `params[0].value`) continues to display the correct value (backward compatibility).

### Documentation (issue #877)

- All five affected documentation pages no longer show `tooltip.formatter` as the primary API for value-only formatting in their live runnable code blocks.
- All five pages show `tooltip.valueFormatter` with the correct `(value, dataIndex) => string` signature.
- The `dataset.md` prose and live script are consistent with each other (both use `valueFormatter`).
- No documentation page recommends `tooltip.formatter` for value formatting without noting that `valueFormatter` is preferred.

## Verification

### Runtime

- Reproduce the reduced test case from issue #1022 locally.
- Confirm that the value in the ODS tooltip is formatted by `valueFormatter`.
- Add or update a Jasmine spec in `src/theme/popover/` (or alongside the existing `*.spec.ts` pattern in `src/tools/`) to cover:
  - global `valueFormatter` applied to all series items;
  - per-series `valueFormatter` overriding the global one;
  - `getPopupContentValue` (via `popoverDefinition`) taking precedence over `valueFormatter`;
  - `tooltip.formatter` bridge taking precedence over `valueFormatter`;
  - `valueFormatter` deletion from `dataOptions` in all cases;
  - backward compatibility: existing `tooltip.formatter` usage still formats the displayed value.
- Run the existing test suite (`npm test`) and confirm no regressions.

### Documentation

- Open each of the five affected documentation pages in a browser and verify the live example renders the formatted value correctly using the updated `valueFormatter` code.
- Review the source of the five files to confirm no remaining `tooltip.formatter` usage exists for value-only formatting.

## Risks

- `cloneDeepObject` on `series[i].tooltip` modifies the object in-place inside `dataOptions.series`; callers who hold a reference to the same series object will see the `valueFormatter` removed. This is consistent with how `dataOptions.tooltip.formatter` is already treated.
- If a future ECharts version changes the `valueFormatter` signature, the bridge closure will need updating.
- Documentation examples that used `params[0].value` (array access) must be verified to produce the same output when migrated to `value` (scalar) — they should, since ODS already extracts the scalar `itemValue` before calling `getPopupContentValue`, and `valueFormatter` receives the same scalar.

## Definition of Done

- Spec approved.
- Code changes implemented in `src/theme/popover/ods-chart-popover.ts`.
- At least one automated test covers the feature.
- No regressions in the existing test suite.
- `valueFormatter` is absent from the options passed to ECharts (`echarts.setOption`) after ODS processing.
- All five documentation pages updated to use `valueFormatter` in their live runnable code blocks.
- Issues #1022 and #877 closed.
