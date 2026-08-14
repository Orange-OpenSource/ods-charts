# spec-1062 — Wrong marker color

**Issue:** [#1062 Wrong marker color](https://github.com/Orange-OpenSource/ods-charts/issues/1062)  
**Component:** `ODSChartsTheme` — `sliceColor()` / `getDisplayedColors()`  
**Status:** Open

---

## Background

The public methods `getSeriesColor(seriesIndex)`, `getLegendMarker(seriesIndex)` and `getPopoverMarker(seriesIndex)` return a series color from the internal `displayedColors` array.

That array is built by `getDisplayedColors()`, which calls `sliceColor()` whenever a series has a specific color set via `lineStyle.color`, `itemStyle.color` or `color`.

---

## Problem

### Current behaviour of `sliceColor()`

```ts
private sliceColor(colors: string[], color: string, seriesIndex: number) {
  const previousColorIndex = colors.indexOf(color);
  if (previousColorIndex > -1) {
    colors.splice(previousColorIndex, 1); // ← removes the existing occurrence
  }
  colors.splice(seriesIndex, 0, color);  // ← inserts at the target index
}
```

When a color `C` is already present in `colors` at index `i < seriesIndex`, the method **removes** it before inserting it at `seriesIndex`.  
This shifts every element between `i` and `seriesIndex` one position to the left, corrupting the colors of all series whose indexes fall in that range.

### Reproducible scenario

A bar + line chart with:

| Series | Type | Specified color               |
| ------ | ---- | ----------------------------- |
| 0      | bar  | orange (palette)              |
| 1      | bar  | blue (palette)                |
| 2      | line | **orange** (same as series 0) |

Steps inside `getDisplayedColors()`:

1. Initial `colors` = `[orange, blue, green, …]`
2. Series 2 requests `orange` → `sliceColor(colors, 'orange', 2)`
3. `indexOf('orange')` = **0** (< 2) → `splice(0, 1)` removes orange at index 0
4. `colors` becomes `[blue, green, …]`
5. `splice(2, 0, 'orange')` inserts → `colors` = `[blue, green, orange, …]`

Result: `getSeriesColor(0)` now returns `blue` instead of `orange`.  
→ `getLegendMarker(0)` and `getPopoverMarker(0)` display the wrong color for series 0.

---

## Fix specification

### Rule

`sliceColor()` **must not remove** the existing occurrence of the color when it is located at an index **lower than** `seriesIndex` (i.e. it has already been assigned to a previously processed series).

It is perfectly valid for the same color to appear more than once in `displayedColors` — two series may intentionally share the same color.

### Expected behaviour after the fix

| Condition on `previousColorIndex` | Action                                                             |
| --------------------------------- | ------------------------------------------------------------------ |
| Not found (`-1`)                  | Insert at `seriesIndex` (unchanged)                                |
| `>= seriesIndex`                  | Remove the occurrence, then insert at `seriesIndex` (unchanged)    |
| `< seriesIndex`                   | **Do not remove** the occurrence; insert directly at `seriesIndex` |

### Fix pseudo-code

```ts
private sliceColor(colors: string[], color: string, seriesIndex: number) {
  const previousColorIndex = colors.indexOf(color);
  if (previousColorIndex > -1 && previousColorIndex >= seriesIndex) {
    // The occurrence exists at an index >= seriesIndex:
    // remove it to avoid a visible duplicate downstream.
    colors.splice(previousColorIndex, 1);
  }
  // If previousColorIndex < seriesIndex, do nothing:
  // the color is legitimately used by an earlier series.
  colors.splice(seriesIndex, 0, color);
}
```

---

## Test cases

### TC-1 — Color shared between an earlier and a later series

- **Setup:** 3 series — series 0 (bar, color `C`), series 2 (line, color `C`).
- **Expected:** `getSeriesColor(0)` = `C`, `getSeriesColor(2)` = `C`.
- **Before fix:** `getSeriesColor(0)` ≠ `C`.

### TC-2 — Unique specific color (existing behaviour preserved)

- **Setup:** Series 1 has a specific color `C` not present in the palette at indexes 0, 2, 3.
- **Expected:** `getSeriesColor(1)` = `C`; other series keep their palette colors.

### TC-3 — Specific color that matches a later palette entry (existing behaviour preserved)

- **Setup:** Series 0 has color `C`; series 2 would have received `C` from the palette.
- **Expected:** `getSeriesColor(0)` = `C`; the palette color at index 2 is shifted (already correct).

### TC-4 — `getLegendMarker` / `getPopoverMarker` consistent with `getSeriesColor`

- For every `seriesIndex`, the marker color returned by `getLegendMarker(i)` and `getPopoverMarker(i)` must match `getSeriesColor(i)`.

---

## Impacted files

| File                                                      | Change                      |
| --------------------------------------------------------- | --------------------------- |
| `src/theme/ods-chart-theme.ts`                            | Fix `sliceColor()`          |
| `src/theme/ods-chart-theme.spec.ts` (to create or extend) | Add test cases TC-1 to TC-4 |

---

## References

- [Stackblitz — reduced test case](https://stackblitz.com/edit/is2p8s3d?file=index.js,index.html)
- [GitHub issue #1062](https://github.com/Orange-OpenSource/ods-charts/issues/1062)
