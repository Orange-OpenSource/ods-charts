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
import { ODSChartsTheme } from './ods-chart-theme';

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
