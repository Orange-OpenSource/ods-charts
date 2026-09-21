//
// Software Name: Orange Design System Charts
// SPDX-FileCopyrightText: Copyright (c) 2023 - 2026 Orange SA
// SPDX-License-Identifier: MIT
//
// This software is distributed under the MIT license.
//

// CRITICAL: Setup DOM BEFORE any imports
const { JSDOM } = require('jsdom');
const dom = new JSDOM('<!DOCTYPE html><html><head></head><body></body></html>');

Object.defineProperty(globalThis, 'window', { value: dom.window, writable: true });
Object.defineProperty(globalThis, 'document', { value: dom.window.document, writable: true });
Object.defineProperty(globalThis, 'navigator', { value: dom.window.navigator, writable: true });
(globalThis as any).HTMLElement = dom.window.HTMLElement;
(globalThis as any).Element = dom.window.Element;

import 'jasmine';
import { ODSChartsConfiguration, ODSChartsTypes } from './charts-type/charts-type';
import { ODSChartsColorsSet, ODSChartsTheme, ODSChartsVisualMapColorRangeMode } from './ods-chart-theme';

describe('ODSChartsConfiguration.getHeatmapChartConfiguration', () => {
  it('should provide heatmap visualMap defaults', () => {
    const config = ODSChartsConfiguration.getHeatmapChartConfiguration();

    expect(config.type).toBe(ODSChartsTypes.HEATMAP);
    expect(config.getDefaultConfiguration()).toEqual({
      grid: {
        top: '5px',
        left: '50px',
        right: '20px',
        bottom: '100px',
      },
      visualMap: {
        textStyle: {
          fontWeight: '400',
          fontSize: 14,
          color: 'var(--bs-body-color)',
          padding: [0, 0, 0, 5],
        },
        icon: 'rect',
        itemWidth: 12,
        itemHeight: 12,
        orient: 'horizontal',
        bottom: 20,
        left: 'center',
        padding: [0, 40, 10, 40],
        type: 'piecewise',
        itemSymbol: 'rect',
      },
    });
  });
});

describe('ODSChartsTheme visualMapColorRangeMode', () => {
  const getVisualMap = (visualMapColorRangeMode?: ODSChartsVisualMapColorRangeMode): any => {
    const themeManager = ODSChartsTheme.getThemeManager({
      colors: ODSChartsColorsSet.SEQUENTIAL_BLUE,
      chartConfiguration: ODSChartsConfiguration.getHeatmapChartConfiguration({
        ...(visualMapColorRangeMode ? { visualMapColorRangeMode } : {}),
      }),
    });

    themeManager.setDataOptions({
      xAxis: { type: 'category' },
      yAxis: { type: 'category' },
      visualMap: {
        pieces: [
          { min: 0, max: 1 },
          { min: 1, max: 2 },
          { min: 2, max: 3 },
        ],
      },
      series: [{ type: 'heatmap', data: [] }],
    });

    return themeManager.getChartOptions().visualMap;
  };

  it('should force colors to stay in the provided color set by default', () => {
    expect(getVisualMap().inRange.color.map((color: string) => color.toLowerCase())).toEqual(['#085ebd', '#237eca', '#3e9dd6']);
  });

  it('should not force visualMap inRange colors when color range generation is requested', () => {
    expect(getVisualMap(ODSChartsVisualMapColorRangeMode.GENERATE_COLOR_RANGE).inRange).toBeUndefined();
  });
});

describe('ODSChartsTheme native tooltip', () => {
  function getChartOptions(tooltip?: any) {
    const themeManager = ODSChartsTheme.getThemeManager();
    themeManager.setDataOptions({
      ...(tooltip ? { tooltip } : {}),
      xAxis: { type: 'category', data: ['Jan'] },
      yAxis: { type: 'value' },
      series: [{ type: 'bar', data: [10] }],
    });
    return themeManager.getChartOptions();
  }

  it('should expose the ODS native tooltip at the root of chart options', () => {
    const tooltip = getChartOptions().tooltip;

    expect(tooltip.backgroundColor).toBe('#fff');
    expect(tooltip.borderColor).toBe('#000');
    expect(tooltip.borderWidth).toBe(1);
    expect(tooltip.padding).toEqual([8, 8]);
    expect(tooltip.textStyle.color).toBe('#000');
    expect(tooltip.textStyle.fontSize).toBe('14px');
    expect(tooltip.axisPointer.type).toBe('line');
  });

  it('should let data options override the native tooltip defaults', () => {
    const tooltip = getChartOptions({
      backgroundColor: 'red',
      borderWidth: 2,
    }).tooltip;

    expect(tooltip.backgroundColor).toBe('red');
    expect(tooltip.borderWidth).toBe(2);
    expect(tooltip.axisPointer.type).toBe('line');
  });
});

describe('ODSChartsTheme.getSeriesColor', () => {
  // Baseline palette colors captured once with no dataOptions.
  let paletteColors: string[];

  beforeAll(() => {
    paletteColors = [...ODSChartsTheme.getThemeManager().displayedColors];
  });

  describe('TC-1 — color shared between an earlier and a later series (bug #1062)', () => {
    // Before the fix, sliceColor() removed the occurrence at index 0 when
    // processing series 2, shifting every intermediate color and corrupting series 0.

    it('should keep the correct color for series 0 when series 2 shares the same itemStyle color', () => {
      const COLOR = '#abcdef';
      const tm = ODSChartsTheme.getThemeManager();
      tm.setDataOptions({
        series: [
          { itemStyle: { color: COLOR } }, // series 0: specific color C
          {}, // series 1: palette color
          { itemStyle: { color: COLOR } }, // series 2: same specific color C
        ],
      });
      expect(tm.getSeriesColor(0)).toBe(COLOR);
      expect(tm.getSeriesColor(2)).toBe(COLOR);
    });

    it('should keep the correct color for series 0 when series 2 shares the same lineStyle color', () => {
      const COLOR = '#abcdef';
      const tm = ODSChartsTheme.getThemeManager();
      tm.setDataOptions({
        series: [
          { lineStyle: { color: COLOR } }, // series 0
          {}, // series 1
          { lineStyle: { color: COLOR } }, // series 2
        ],
      });
      expect(tm.getSeriesColor(0)).toBe(COLOR);
      expect(tm.getSeriesColor(2)).toBe(COLOR);
    });

    it('should not corrupt series 1 color when series 0 and series 2 share a color', () => {
      const COLOR = '#112233';
      const tm = ODSChartsTheme.getThemeManager();
      tm.setDataOptions({
        series: [{ itemStyle: { color: COLOR } }, {}, { itemStyle: { color: COLOR } }, {}],
      });
      expect(tm.getSeriesColor(0)).toBe(COLOR);
      expect(tm.getSeriesColor(2)).toBe(COLOR);
      expect(tm.getSeriesColor(1)).not.toBe(COLOR);
      expect(tm.getSeriesColor(3)).not.toBe(COLOR);
    });
  });

  describe('TC-2 — unique specific color (existing behaviour preserved)', () => {
    it('should assign a unique specific color to series 1 without affecting surrounding series', () => {
      const COLOR = '#fedcba'; // value that does not appear in the default palette
      const tm = ODSChartsTheme.getThemeManager();
      tm.setDataOptions({
        series: [
          {}, // series 0: palette
          { itemStyle: { color: COLOR } }, // series 1: specific color
          {}, // series 2: palette
        ],
      });
      expect(tm.getSeriesColor(0)).toBe(paletteColors[0]);
      expect(tm.getSeriesColor(1)).toBe(COLOR);
    });
  });

  describe('TC-3 — specific color matching a later palette entry (existing behaviour preserved)', () => {
    it('should remove the later-index palette occurrence and not assign it to series 2', () => {
      // paletteColors[2] naturally sits at index 2.
      // When series 0 is explicitly assigned that color, sliceColor() should
      // remove it from index 2 (>= seriesIndex 0) so that series 2 no longer
      // receives the same color as series 0.
      const COLOR = paletteColors[2];
      const tm = ODSChartsTheme.getThemeManager();
      tm.setDataOptions({
        series: [
          { itemStyle: { color: COLOR } }, // series 0 takes palette[2]
          {},
          {},
        ],
      });
      expect(tm.getSeriesColor(0)).toBe(COLOR);
      expect(tm.getSeriesColor(2)).not.toBe(COLOR);
    });
  });

  describe('TC-4 — getSeriesColor stability for repeated calls', () => {
    it('should return a stable and correct color for each series index', () => {
      // getLegendMarker/getPopoverMarker both delegate to getSeriesColor internally.
      // Verifying that getSeriesColor is stable ensures that any caller (including
      // markers) receives the correct color.
      const COLOR = '#aabbcc';
      const tm = ODSChartsTheme.getThemeManager();
      tm.setDataOptions({
        series: [{ itemStyle: { color: COLOR } }, {}, { itemStyle: { color: COLOR } }],
      });
      expect(tm.getSeriesColor(0)).toBe(tm.getSeriesColor(0));
      expect(tm.getSeriesColor(1)).toBe(tm.getSeriesColor(1));
      expect(tm.getSeriesColor(2)).toBe(tm.getSeriesColor(2));
      expect(tm.getSeriesColor(0)).toBe(COLOR);
      expect(tm.getSeriesColor(2)).toBe(COLOR);
    });
  });
});
