# Spec #1061 - Update ODSChartsPopoverItem marker attribute

## Context

This specification addresses issue `#1061`: https://github.com/Orange-OpenSource/ods-charts/issues/1061

When using `ODSChartsPopoverDefinition` to customize tooltip and popover content, the methods receive `ODSChartsPopoverItem` objects as parameters. These objects expose a `marker` attribute that is inherited from Apache ECharts' internal tooltip parameters but is not updated with the actual marker HTML that should be displayed in the ODS Charts context.

Users calling `themeManager.getPopoverMarker(seriesIndex)` get the correct marker HTML, but the `marker` attribute in `ODSChartsPopoverItem` contains the raw ECharts marker value, which differs from what is expected and needed for proper customization.

### Root Cause

In `ODSChartsPopover.getTooltipElements()`, when converting `InternalODSChartsPopoverItem` to `ODSChartsPopoverItem`:

- The method clones the internal popover item and merges specific properties (`markerColor`, `itemColor`, `seriesColor`, `itemValue`, `label`)
- However, the `marker` attribute is not explicitly updated
- This causes the `marker` attribute to retain the raw Apache ECharts marker value instead of the ODS-compliant HTML marker

### Examples

When a user customizes the popover using `ODSChartsPopoverDefinition.getPopupContentLine`:

```typescript
{
  getPopupContentLine: ({ seriesName, itemValue, seriesIndex, marker }) => {
    // user expects 'marker' to be the ODS-formatted HTML marker
    // but instead receives the raw ECharts marker value
    return `<p>${marker}${seriesName}: ${itemValue}</p>`;
  },
}
```

In contrast, calling `themeManager.getPopoverMarker()` provides the correct marker:

```typescript
// This returns the correct ODS marker HTML
const correctMarker = themeManager.getPopoverMarker(seriesIndex);
```

## Objectives

- Ensure the `marker` attribute in `ODSChartsPopoverItem` contains the proper HTML marker for display
- Maintain consistency between `ODSChartsPopoverItem.marker` and `themeManager.getPopoverMarker(seriesIndex)`
- Allow users to rely on the `marker` attribute in custom popover/tooltip handlers without needing to call additional methods
- Support both bar/item coloring (using `itemColor`) and line/series coloring (using `seriesColor`)

## Out of Scope

- Changing the public API of `ODSChartsPopoverItem`
- Modifying the behavior of `themeManager.getPopoverMarker()`
- Altering the structure of `ODSChartsPopoverDefinition`

## Backward Compatibility & Alternative Approaches

### Continued Support for themeManager.getPopoverMarker()

After this fix is implemented, **both approaches remain valid and functional**:

**Approach 1: Using the marker attribute (NEW - Simplified)**

```typescript
themeManager.externalizePopover(undefined, {
  ...ODSCharts.ODSChartsPopoverManagers.NONE,
  getPopupContentLine: ({ seriesName, itemValue, marker }) => {
    // marker is now automatically populated
    return `<p>${marker}This is my HTML code of one line for ${itemValue} of ${seriesName}</p>`;
  },
});
```

**Approach 2: Using themeManager.getPopoverMarker() (EXISTING - Still Valid)**

```typescript
themeManager.externalizePopover(undefined, {
  ...ODSCharts.ODSChartsPopoverManagers.NONE,
  getPopupContentLine: ({ seriesName, itemValue, seriesIndex }) => {
    // This approach continues to work as before
    return `<p>${themeManager.getPopoverMarker(seriesIndex)}This is my HTML code of one line for ${itemValue} of ${seriesName}</p>`;
  },
});
```

**Note**: Both approaches produce identical results. The first approach is recommended for new code as it eliminates the need for additional method calls and provides better encapsulation of the marker data within the `ODSChartsPopoverItem` object. Existing code using `themeManager.getPopoverMarker()` does not require any changes and will continue to work correctly.

## Documentation Updates

After implementation of this fix, the following documentation page must be updated:

### File: `docs/src/content/use_cases/tooltip.md`

**Section**: "Other specific content, specific line, with ODS Charts series marker"

**Current Example**:

```typescript
themeManager.externalizePopover(undefined, {
  ...ODSCharts.ODSChartsPopoverManagers.NONE,
  getPopupContentLine: ({ seriesName, itemValue, seriesIndex }) => {
    return `<p>${themeManager.getPopoverMarker(seriesIndex)}This is my HTML code of one line for ${itemValue} of ${seriesName}</p>`;
  },
});
```

**Required Update**:
Add a new documented example showing users that they can now use the `marker` attribute directly from `ODSChartsPopoverItem` instead of calling `themeManager.getPopoverMarker()`:

```typescript
themeManager.externalizePopover(undefined, {
  ...ODSCharts.ODSChartsPopoverManagers.NONE,
  getPopupContentLine: ({ seriesName, itemValue, marker }) => {
    // The marker attribute is now pre-populated with the ODS-formatted HTML marker
    return `<p>${marker}This is my HTML code of one line for ${itemValue} of ${seriesName}</p>`;
  },
});
```

This update should:

- Demonstrate the simplified approach using the `marker` attribute directly
- Highlight that no additional method calls are needed
- Provide both approaches (old and new/simplified) for clarity
- Explain that the marker attribute automatically matches the series/item color context

## Functional Requirements

### 1) Populate marker attribute in ODSChartsPopoverItem

When converting `InternalODSChartsPopoverItem` to `ODSChartsPopoverItem` in the `getTooltipElements()` method:

- The `marker` attribute must be set to the HTML marker string generated by `getSeriesMarker()`
- The marker color must be consistent with the `markerColor` attribute (determined by series type):
  - For line series: use `seriesColor`
  - For other series types: use `itemColor`

### 2) Marker HTML format

The marker HTML should follow the existing format used in the library:

```html
<span class="ods-charts-popover-color [css-classes]" style="background-color:[markerColor]; [css-styles];"> </span>
```

This format is consistent with the `getSeriesMarker()` method already present in the codebase.

### 3) Consistency across series types

For different series types, the marker color source should be:

- **Line series**: Use `seriesColor` (represents the line color)
- **Bar/Pie/Other series**: Use `itemColor` (represents the individual item color)

This matches the existing logic for calculating `markerColor` in the `getTooltipElements()` method.

## Implementation Notes

### Location

The fix should be applied in:

- File: `src/theme/popover/ods-chart-popover.ts`
- Class: `ODSChartsPopover`
- Methods: Constructor/field declarations, `addPopoverManagement()`, and `getTooltipElements()`

### Change Description

#### 1. Add cssTheme as an instance variable

In the `ODSChartsPopover` class, add a private field to store the current cssTheme:

```typescript
private cssTheme!: ODSChartsCSSThemeDefinition;
```

#### 2. Store cssTheme in addPopoverManagement()

In the `addPopoverManagement()` method, store the cssTheme parameter as an instance variable at the beginning:

```typescript
public addPopoverManagement(
  dataOptions: any,
  themeOptions: any,
  colors: string[],
  cssTheme: ODSChartsCSSThemeDefinition,  // existing parameter
  cssThemeName: string,
  currentMode: ODSChartsMode
) {
  this.cssTheme = cssTheme;  // NEW: Store cssTheme
  this.mode = currentMode;
  this.colors = colors;
  // ... rest of the method
}
```

#### 3. Update getTooltipElements() to populate marker

When creating the `ODSChartsPopoverItem` element from `InternalODSChartsPopoverItem` param:

Add the `marker` property to the merge operation:

```typescript
private getTooltipElements(
  params: InternalODSChartsPopoverItem[],
  legends: ODSChartsLegendData
): {
  categoryLabel: string;
  tooltipElements: ODSChartsPopoverItem[];
} {
  return {
    categoryLabel: /* ... existing code ... */,
    tooltipElements: params
      .map((param) => {
        // ... existing calculations ...
        const markerColor: string = 'line' === param.seriesType ? seriesColor : itemColor;

        const element: ODSChartsPopoverItem = mergeObjectsAndReplaceArrays(cloneDeepObject(param), {
          marker: this.getSeriesMarker(this.cssTheme, markerColor),  // NEW: Add this line
          markerColor: markerColor,
          itemColor: itemColor,
          seriesColor: seriesColor,
          itemValue: itemValue,
          label: legendLabel || '',
        });

        // ... rest of the mapping logic ...
        return element;
      })
      .filter((elt) => undefined !== elt.itemValue),
  };
}
```

### Dependencies

- The `getSeriesMarker()` method already exists and is used elsewhere in the codebase
- The `ODSChartsCSSThemeDefinition` type is already imported
- No external dependencies need to be added

## Testing Requirements

1. **Unit tests** should verify that:
   - The `marker` attribute is populated in `ODSChartsPopoverItem`
   - The marker HTML is correctly formatted with CSS classes and styles
   - Bar series use `itemColor` for markers
   - Line series use `seriesColor` for markers
   - Custom tooltip handlers receive the correct marker in `ODSChartsPopoverItem`

2. **Integration tests** should verify that:
   - Custom `getPopupContentLine` callbacks receive populated `marker` attributes
   - The marker displays correctly in the actual popover/tooltip UI
   - Different series types (bar, line, pie, etc.) show appropriate markers

3. **Regression tests** should ensure:
   - Existing default popover behavior remains unchanged
   - No breaking changes to the public API

## Success Criteria

- ✅ `ODSChartsPopoverItem.marker` is populated with ODS-formatted HTML marker
- ✅ Marker color matches the series/item color context
- ✅ Customer can use the `marker` attribute directly in custom popover templates
- ✅ No changes to public API
- ✅ All existing tests pass
