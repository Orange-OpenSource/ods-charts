//
// Software Name: Orange Design System Charts
// SPDX-FileCopyrightText: Copyright (c) 2023 - 2026 Orange SA
// SPDX-License-Identifier: MIT
//
// This software is distributed under the MIT license.
//

// CRITICAL: Setup DOM BEFORE imports relying on browser globals.
const { JSDOM } = require('jsdom');
const dom = new JSDOM('<!DOCTYPE html><html><head></head><body></body></html>');

Object.defineProperty(globalThis, 'window', { value: dom.window, writable: true });
Object.defineProperty(globalThis, 'document', { value: dom.window.document, writable: true });
Object.defineProperty(globalThis, 'navigator', { value: dom.window.navigator, writable: true });
(globalThis as any).HTMLElement = dom.window.HTMLElement;
(globalThis as any).Element = dom.window.Element;
(globalThis as any).DOMParser = dom.window.DOMParser;

import 'jasmine';
import { ODSChartsPopover } from './ods-chart-popover';
import { ODSChartsPopoverAxisPointer, ODSChartsPopoverDefinition, ODSChartsPopoverItem, ODSChartsPopoverManagers } from './ods-chart-popover-definitions';
import { ODSChartsCSSThemes, ODSChartsCSSThemesNames } from '../css-themes/css-themes';
import { ODSChartsMode } from '../ods-chart-mode';

describe('ODSChartsPopover marker attribute', () => {
  afterEach(() => {
    const defaultTemplateStyle = document.getElementById('ods-chart-tooltip-default-template');
    if (defaultTemplateStyle) {
      defaultTemplateStyle.remove();
    }
    const noneThemeStyle = document.getElementById('ods-chart-popover-none-css');
    if (noneThemeStyle) {
      noneThemeStyle.remove();
    }
  });

  function createTestContext(popoverDefinition: ODSChartsPopoverDefinition) {
    const popover = ODSChartsPopover.addPopoverManagement(popoverDefinition, {
      enabled: true,
      tooltip: true,
      axisPointer: ODSChartsPopoverAxisPointer.none,
    });

    const dataOptions: any = {
      xAxis: { type: 'category', data: ['A'] },
      yAxis: {},
      series: [
        { name: 'Bar series', type: 'bar', data: [10] },
        { name: 'Line series', type: 'line', data: [20] },
      ],
      tooltip: { confine: true },
    };

    const themeOptions: any = {};

    popover.addPopoverManagement(dataOptions, themeOptions, ['#112233', '#445566'], ODSChartsCSSThemes.NONE, ODSChartsCSSThemesNames.NONE, ODSChartsMode.LIGHT);

    return { popover, themeOptions };
  }

  it('should populate marker on tooltip elements and use expected colors for bar and line', () => {
    let capturedElements: ODSChartsPopoverItem[] = [];

    const { themeOptions } = createTestContext({
      ...ODSChartsPopoverManagers.NONE,
      getPopupTemplate: (_categoryLabel, tooltipElements) => {
        capturedElements = tooltipElements;
        return '<div>tooltip</div>';
      },
    });

    const formatter = themeOptions.tooltip?.formatter;
    expect(typeof formatter).toBe('function');

    formatter([
      {
        axisValue: 'A',
        axisValueLabel: 'A',
        name: 'A',
        seriesName: 'Bar series',
        seriesType: 'bar',
        seriesIndex: 0,
        color: '#aa0000',
        value: 10,
      },
      {
        axisValue: 'A',
        axisValueLabel: 'A',
        name: 'A',
        seriesName: 'Line series',
        seriesType: 'line',
        seriesIndex: 1,
        color: '#00aa00',
        value: 20,
      },
    ]);

    expect(capturedElements.length).toBe(2);

    const barElement = capturedElements.find((elt) => elt.seriesName === 'Bar series') as ODSChartsPopoverItem;
    const lineElement = capturedElements.find((elt) => elt.seriesName === 'Line series') as ODSChartsPopoverItem;

    expect(barElement.marker).toContain('display: inline-block');
    expect(barElement.markerColor).toBe('#aa0000');
    expect(barElement.marker).toContain('background-color:#aa0000');

    expect(lineElement.marker).toContain('display: inline-block');
    expect(lineElement.markerColor).toBe('#445566');
    expect(lineElement.marker).toContain('background-color:#445566');
  });

  it('should keep marker consistent with helper-based alternative generation', () => {
    let capturedElements: ODSChartsPopoverItem[] = [];

    const { popover, themeOptions } = createTestContext({
      ...ODSChartsPopoverManagers.NONE,
      getPopupTemplate: (_categoryLabel, tooltipElements) => {
        capturedElements = tooltipElements;
        return '<div>tooltip</div>';
      },
    });

    themeOptions.tooltip.formatter([
      {
        axisValue: 'A',
        axisValueLabel: 'A',
        name: 'A',
        seriesName: 'Line series',
        seriesType: 'line',
        seriesIndex: 1,
        color: '#00aa00',
        value: 20,
      },
    ]);

    const lineElement = capturedElements[0];
    const expectedFromHelper = `<span style="display: inline-block">${popover.getSeriesMarker(ODSChartsCSSThemes.NONE, '#445566')}</span>`;

    expect(lineElement.marker).toBe(expectedFromHelper);
  });

  it('should expose marker to custom getPopupContentLine callbacks', () => {
    let markerReceived = '';

    const { themeOptions } = createTestContext({
      ...ODSChartsPopoverManagers.NONE,
      getPopupContentLine: (tooltipElement) => {
        markerReceived = tooltipElement.marker as any;
        return `<p>${tooltipElement.marker}${tooltipElement.itemValue}</p>`;
      },
    });

    themeOptions.tooltip.formatter([
      {
        axisValue: 'A',
        axisValueLabel: 'A',
        name: 'A',
        seriesName: 'Bar series',
        seriesType: 'bar',
        seriesIndex: 0,
        color: '#aa0000',
        value: 10,
      },
    ]);

    expect(markerReceived).toContain('display: inline-block');
    expect(markerReceived).toContain('background-color:#aa0000');
  });
});
