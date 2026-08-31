//
// Software Name: Orange Design System Charts
// SPDX-FileCopyrightText: Copyright (c) 2023 - 2026 Orange SA
// SPDX-License-Identifier: MIT
//
// This software is distributed under the MIT license.
//

const { JSDOM } = require('jsdom');
const dom = new JSDOM('<!DOCTYPE html><html><head></head><body><div id="chart-container" style="width: 100px; height: 100px;"></div></body></html>');

Object.defineProperty(globalThis, 'window', { value: dom.window, writable: true });
Object.defineProperty(globalThis, 'document', { value: dom.window.document, writable: true });
Object.defineProperty(globalThis, 'navigator', { value: dom.window.navigator, writable: true });
(globalThis as any).HTMLElement = dom.window.HTMLElement;
(globalThis as any).Element = dom.window.Element;

(globalThis as any).ResizeObserver = class ResizeObserver {
  constructor(_callback: any) {}
  observe() {}
  unobserve() {}
  disconnect() {}
};

import { ODSChartsResize } from './ods-chart-resize';

describe('ODSChartsResize', () => {
  let mockEChart: any;
  let resizeInstance: ODSChartsResize;

  beforeEach(() => {
    mockEChart = {
      getDom: () => document.getElementById('chart-container'),
      getOption: () => ({ animation: true, animationDuration: 500, animationEasing: 'linear' }),
      resize: jasmine.createSpy('resize'),
    };

    resizeInstance = ODSChartsResize.addResizeManagement(mockEChart, 'chart-container');
  });

  afterEach(() => {
    resizeInstance.removeResizeManagement();
  });

  it('should clean up timeout on removeResizeManagement', () => {
    resizeInstance.addResizeManagement();

    const resizeCallback = (resizeInstance as any).resizeChart.bind(resizeInstance);
    resizeCallback();

    resizeInstance.removeResizeManagement();

    const timeoutId = (resizeInstance as any).resizeTimeout;
    expect(timeoutId).toBeUndefined();
  });

  it('should resize chart when resizeChart is called', (done) => {
    resizeInstance.addResizeManagement();

    (resizeInstance as any).resizeChart();

    setTimeout(() => {
      expect(mockEChart.resize).toHaveBeenCalled();
      done();
    }, 50);
  });

  it('should not throw when removeResizeManagement is called multiple times', () => {
    resizeInstance.addResizeManagement();
    resizeInstance.removeResizeManagement();
    expect(() => resizeInstance.removeResizeManagement()).not.toThrow();
  });
});
