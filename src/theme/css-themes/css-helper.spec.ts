//
// Software Name: Orange Design System Charts
// SPDX-FileCopyrightText: Copyright (c) 2023 - 2025 Orange SA
// SPDX-License-Identifier: MIT
//
// This software is distributed under the MIT license.
//

// CRITICAL: Setup DOM and echarts BEFORE any imports
const { JSDOM } = require('jsdom');
const dom = new JSDOM('<!DOCTYPE html><html><head></head><body></body></html>');

// Use defineProperty for read-only properties
Object.defineProperty(global, 'window', { value: dom.window, writable: true });
Object.defineProperty(global, 'document', { value: dom.window.document, writable: true });
Object.defineProperty(global, 'navigator', { value: dom.window.navigator, writable: true });
(global as any).HTMLElement = dom.window.HTMLElement;
(global as any).Element = dom.window.Element;

const echartsModule = require('echarts');
(global as any).echarts = echartsModule;

import 'jasmine';
import { ODSChartsCssHelper } from './css-helper';
import { ODSChartsMode } from '../ods-chart-mode';
import { ODSChartsCSSThemesNames } from './css-themes';

describe('ODSChartsCssHelper', () => {
  let cssHelper: ODSChartsCssHelper;
  let testContainer: HTMLElement;

  beforeEach(() => {
    // Create a test container in the DOM
    testContainer = document.createElement('div');
    testContainer.id = 'test-chart-container';
    testContainer.classList.add('test-chart-container');
    document.body.appendChild(testContainer);

    // Add some CSS variables for testing
    const style = document.createElement('style');
    style.id = 'test-css-vars';
    style.textContent = `
      .ods-charts-context {
        --test-color: #ff0000;
        --test-size: 14px;
        --test-nested: var(--test-color);
      }
      .ods-charts-context[data-bs-theme="dark"] {
        --test-color: #00ff00;
      }
    `;
    document.head.appendChild(style);

    cssHelper = new ODSChartsCssHelper('.test-chart-container', ODSChartsMode.LIGHT, ODSChartsCSSThemesNames.NONE);
  });

  afterEach(() => {
    // Clean up
    testContainer.remove();
    const testStyle = document.getElementById('test-css-vars');
    if (testStyle) {
      testStyle.remove();
    }
    const odsStyle = document.querySelector('[data-ods-charts-type="theme"]');
    if (odsStyle) {
      odsStyle.remove();
    }
  });

  describe('replaceAllCssVars', () => {
    it('should replace simple CSS variables in strings', () => {
      const config = {
        color: 'var(--test-color)',
      };
      const result = cssHelper.replaceAllCssVars(config);
      expect(result.color).toBe('#ff0000');
    });

    it('should replace CSS variables with fallback values', () => {
      const config = {
        color: 'var(--non-existent, #0000ff)',
      };
      const result = cssHelper.replaceAllCssVars(config);
      expect(result.color).toBe('#0000ff');
    });

    it('should handle nested objects', () => {
      const config = {
        style: {
          color: 'var(--test-color)',
          fontSize: 'var(--test-size)',
        },
      };
      const result = cssHelper.replaceAllCssVars(config);
      expect(result.style.color).toBe('#ff0000');
      expect(result.style.fontSize).toBe('14px');
    });

    it('should handle arrays with CSS variables', () => {
      const config = {
        colors: ['var(--test-color)', '#ffffff', 'var(--test-size)'],
      };
      const result = cssHelper.replaceAllCssVars(config);
      expect(result.colors[0]).toBe('#ff0000');
      expect(result.colors[1]).toBe('#ffffff');
      expect(result.colors[2]).toBe('14px');
    });

    it('should handle arrays with null values', () => {
      const config = {
        data: [10, 20, null, 40],
        colors: ['var(--test-color)', null, '#ffffff'],
      };
      const result = cssHelper.replaceAllCssVars(config);
      expect(result.data).toEqual([10, 20, null, 40]);
      expect(result.colors[0]).toBe('#ff0000');
      expect(result.colors[1]).toBe(null);
      expect(result.colors[2]).toBe('#ffffff');
    });

    it('should handle arrays with undefined values', () => {
      const config = {
        data: [10, undefined, 30],
        colors: ['var(--test-color)', undefined, '#ffffff'],
      };
      const result = cssHelper.replaceAllCssVars(config);
      expect(result.data).toEqual([10, undefined, 30]);
      expect(result.colors[0]).toBe('#ff0000');
      expect(result.colors[1]).toBe(undefined);
      expect(result.colors[2]).toBe('#ffffff');
    });

    it('should handle objects with null properties', () => {
      const config = {
        color: 'var(--test-color)',
        nullProp: null,
        nested: {
          value: null,
          color: 'var(--test-size)',
        },
      };
      const result = cssHelper.replaceAllCssVars(config);
      expect(result.color).toBe('#ff0000');
      expect(result.nullProp).toBe(null);
      expect(result.nested.value).toBe(null);
      expect(result.nested.color).toBe('14px');
    });

    it('should handle arrays of objects with null values', () => {
      const config = {
        series: [
          { name: 'Series 1', color: 'var(--test-color)', data: [10, null, 30] },
          { name: 'Series 2', color: null, data: [20, 40, null] },
        ],
      };
      const result = cssHelper.replaceAllCssVars(config);
      expect(result.series[0].color).toBe('#ff0000');
      expect(result.series[0].data).toEqual([10, null, 30]);
      expect(result.series[1].color).toBe(null);
      expect(result.series[1].data).toEqual([20, 40, null]);
    });

    it('should handle deeply nested structures with null values', () => {
      const config = {
        level1: {
          level2: {
            level3: {
              color: 'var(--test-color)',
              values: [1, null, 3, null, 5],
              nested: null,
            },
          },
        },
      };
      const result = cssHelper.replaceAllCssVars(config);
      expect(result.level1.level2.level3.color).toBe('#ff0000');
      expect(result.level1.level2.level3.values).toEqual([1, null, 3, null, 5]);
      expect(result.level1.level2.level3.nested).toBe(null);
    });

    it('should handle mixed arrays with primitives, objects, and null', () => {
      const config: any = {
        mixed: ['string', 123, null, { color: 'var(--test-color)' }, undefined, true],
      };
      const result = cssHelper.replaceAllCssVars(config);
      expect(result.mixed[0]).toBe('string');
      expect(result.mixed[1]).toBe(123);
      expect(result.mixed[2]).toBe(null);
      expect(result.mixed[3].color).toBe('#ff0000');
      expect(result.mixed[4]).toBe(undefined);
      expect(result.mixed[5]).toBe(true);
    });

    it('should not modify values without CSS variables', () => {
      const config = {
        color: '#ff0000',
        size: 14,
        values: [1, 2, null, 4],
      };
      const result = cssHelper.replaceAllCssVars(config);
      expect(result.color).toBe('#ff0000');
      expect(result.size).toBe(14);
      expect(result.values).toEqual([1, 2, null, 4]);
    });
  });

  describe('cloneAndReplaceAllCssVars', () => {
    it('should clone and replace CSS variables', () => {
      const original = {
        color: 'var(--test-color)',
        unchanged: '#ffffff',
      };
      const result = cssHelper.cloneAndReplaceAllCssVars(original);
      expect(result.color).toBe('#ff0000');
      expect(original.color).toBe('var(--test-color)'); // Original unchanged
    });

    it('should handle arrays with null values during cloning', () => {
      const original = {
        data: [10, null, 30],
        colors: ['var(--test-color)', null],
      };
      const result = cssHelper.cloneAndReplaceAllCssVars(original);
      expect(result.data).toEqual([10, null, 30]);
      expect(result.colors[0]).toBe('#ff0000');
      expect(result.colors[1]).toBe(null);
      expect(original.colors[0]).toBe('var(--test-color)'); // Original unchanged
    });
  });

  describe('changeThemeMode', () => {
    it('should update CSS variable values when theme mode changes', () => {
      const config = {
        color: 'var(--test-color)',
      };

      // Test with light mode
      cssHelper.initComputedStyle();
      let result = cssHelper.replaceAllCssVars(config);
      expect(result.color).toBe('#ff0000'); // Red in light mode
      cssHelper.removeComputedStyle();

      // Change to dark mode
      cssHelper.changeThemeMode(ODSChartsMode.DARK);
      cssHelper.initComputedStyle();
      const configDark = {
        color: 'var(--test-color)',
      };
      result = cssHelper.replaceAllCssVars(configDark);
      expect(result.color).toBe('#00ff00'); // Green in dark mode
      cssHelper.removeComputedStyle();
    });
  });
});
