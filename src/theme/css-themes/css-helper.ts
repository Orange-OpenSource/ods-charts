//
// Software Name: Orange Design System Charts
// SPDX-FileCopyrightText: Copyright (c) 2023 - 2025 Orange SA
// SPDX-License-Identifier: MIT
//
// This software is distributed under the MIT license.
//

import { conditionalCloneDeepObject } from '../../tools/conditional-clone-deep-object';
import { isVarArray, isVarObject } from '../../tools/merge-objects';
import { ODS_CHARTS_CSS_VARIABLES } from '../css-themes/css-variables';
import { ODSChartsMode } from '../ods-chart-theme';
import { ODSChartsCSSThemesNames } from './css-themes';

export class ODSChartsCssHelper {
  private _computedStyle: CSSStyleDeclaration | undefined | null = undefined;
  private _computedStyleInitialized: boolean = false;
  private cssVarsMapping: { [variable: string]: string } = {};

  constructor(
    private cssSelector: string,
    private mode: ODSChartsMode,
    private cssThemeName: ODSChartsCSSThemesNames
  ) {}

  /**
   * build a CSSStyleDeclaration build from a DOM element insert in the current charts holder.
   * It is used to calculate real time values for the css var.
   */
  private get computedStyle(): CSSStyleDeclaration | undefined {
    if (undefined === this._computedStyle) {
      if (this.cssSelector) {
        let contextElement = document.querySelector(this.cssSelector + '>.ods-charts-style-' + (this.mode ? this.mode : ODSChartsMode.DEFAULT));
        if (!contextElement) {
          const domElement: Element = (this.cssSelector ? document.querySelector(this.cssSelector) : null) as Element;
          if (domElement) {
            contextElement = document.createElement('div');
            if (this.mode && this.mode !== ODSChartsMode.DEFAULT) {
              contextElement.setAttribute('data-bs-theme', this.mode);
            }
            contextElement.classList.add('ods-charts-context');
            contextElement.classList.add('ods-charts-style-' + (this.mode ? this.mode : ODSChartsMode.DEFAULT));
            domElement.append(contextElement);
          }
        }
        if (contextElement) {
          this._computedStyle = window.getComputedStyle(contextElement);
        }
      }
      this._computedStyle = this._computedStyle ? this._computedStyle : null;
      if (!this._computedStyle) {
        console.error('unable to build computed style for chart css context', this.cssSelector, this.cssSelector);
      }
    }
    return this._computedStyle ? this._computedStyle : undefined;
  }

  /**
   * Init DOM elemnts for style. Add any specific style for the current theme.
   * Register a computed style will be initialised.
   * if `initComputedStyle()` return true, `removeComputedStyle()` must be called`after current treatment is done.
   * @returns true if the style was not initialised in a parent block which means `removeComputedStyle()` must be called`after current treatment is done.
   */
  public initComputedStyle(): boolean {
    if (!this._computedStyleInitialized) {
      if (!document.getElementById('ods-charts-style-' + this.cssThemeName) && ODS_CHARTS_CSS_VARIABLES[this.cssThemeName]) {
        const style = document.createElement('style');
        style.textContent = ODS_CHARTS_CSS_VARIABLES[this.cssThemeName];
        style.id = 'ods-charts-style-' + this.cssThemeName;
        document.querySelector('head')?.append(style);
      }
      this._computedStyleInitialized = true;
      return true;
    }
    return false;
  }

  /**
   * After replacing all the css var of used objects by their value calculated in the DOM,
   * remove the used temporay DOM element.
   * `removeComputedStyle()` must be called if and only if the previous `initComputedStyle()` call returns true.
   */
  public removeComputedStyle() {
    if (this.cssSelector) {
      const contextElement = document.querySelector(this.cssSelector + '>.ods-charts-style-' + (this.mode ? this.mode : ODSChartsMode.DEFAULT));
      if (contextElement) {
        contextElement.remove();
      }
    }
    this._computedStyle = undefined;
    this._computedStyleInitialized = false;
  }

  /**
   * give the calculated value of a property
   * @param name : the property name
   * @returns the value of that property in the style computed from the DOM
   */
  private getPropertyValue(name: string): string {
    const value = this.computedStyle ? this.computedStyle.getPropertyValue(name) : '';
    return value ? value : '';
  }

  /**
   * Replace a css var by it value
   * @param css the string to be analysed
   * @returns the updated value
   */
  private replaceOneCssVar(css: any) {
    let returnedValue = css;
    if (this.cssSelector && 'string' === typeof returnedValue && !!this.computedStyle) {
      try {
        const matches = this.getCssVarMatch(returnedValue);
        if (matches) {
          for (const foundVar of matches) {
            if (!(foundVar in this.cssVarsMapping)) {
              const varPartsRex = /var\( ?([^, ]+) ?, ?([^\)]+) ?\)/;
              const varParts = foundVar.match(varPartsRex);
              if (varParts) {
                const varValue = this.getPropertyValue(varParts[1]);
                if (!varValue) {
                  console.error('missing css var ', foundVar);
                }
                this.cssVarsMapping[foundVar] = varValue ? varValue : varParts[2];
              } else {
                const varNameRex = /var\( ?(.+) ?\)/;
                const varName = foundVar.match(varNameRex);
                if (varName) {
                  const varValue = this.getPropertyValue(varName[1]);
                  if (varValue) {
                    this.cssVarsMapping[foundVar] = varValue;
                  } else {
                    console.error('missing css var ', foundVar);
                    this.cssVarsMapping[foundVar] = foundVar;
                  }
                } else {
                  console.error('missing css var ', foundVar);
                  this.cssVarsMapping[foundVar] = foundVar;
                }
              }
            }

            if (foundVar in this.cssVarsMapping) {
              returnedValue = returnedValue.replace(foundVar, this.cssVarsMapping[foundVar]);
            }
          }
        }
      } catch (error) {}
    }
    return returnedValue;
  }

  /**
   * replace any css var reference by its value
   * @param subTreeConfig: subTree in which css var must be replaced by their value
   * @returns the subTreeConfig updated
   */
  private replaceRecursivelyCssVars<T extends { [key: string]: any }>(subTreeConfig: T): T {
    var newConfig: { [key: string]: any } = subTreeConfig;
    for (const key of Object.keys(newConfig)) {
      if (isVarArray(newConfig[key])) {
        for (let index = 0; index < newConfig[key].length; index++) {
          if (isVarObject(newConfig[key][index]) || isVarArray(newConfig[key][index])) {
            newConfig[key][index] = this.replaceRecursivelyCssVars(newConfig[key][index]);
          } else if ('string' === typeof newConfig[key][index]) {
            newConfig[key][index] = this.replaceOneCssVar(newConfig[key][index]);
          }
        }
      } else if (isVarObject(newConfig[key])) {
        newConfig[key] = this.replaceRecursivelyCssVars(newConfig[key]);
      } else if ('string' === typeof newConfig[key]) {
        newConfig[key] = this.replaceOneCssVar(newConfig[key]);
      }
    }
    return newConfig as T;
  }

  /**
   * Return matches of a css var in the given string
   * @param value : string in whic looking for in css var
   * @returns : the regular expresion matches
   */
  private getCssVarMatch(value: string): RegExpMatchArray | null {
    const regex = /var\(([^,]*),?(.*)\)/g;
    return value.match(regex);
  }

  public changeThemeMode(mode: ODSChartsMode) {
    this.cssVarsMapping = {};
    this.mode = mode;
  }

  /**
   * Replace any css var reference (like `var(--bs-border-color-subtle)`) by its value.
   * @param themeConfiguration : object containing some css var string refernce
   * @returns : the themeCongiguration updated
   */
  public replaceAllCssVars<T extends { [key: string]: any }>(themeConfiguration: T): T {
    let result = themeConfiguration;

    const initStyleNotYetDone = this.initComputedStyle();
    try {
      if (!!this.computedStyle) {
        result = this.replaceRecursivelyCssVars(themeConfiguration);
      }
    } finally {
      if (initStyleNotYetDone) {
        this.removeComputedStyle();
      }
    }

    return result;
  }

  /**
   * Make a copy of any object parts that contains css var reference (like `var(--bs-border-color-subtle)`)
   * and replace those css vars by their value.
   * @param chartData : object containing some css var string reference
   * @returns the new object partially clone
   */
  public cloneAndReplaceAllCssVars<T extends { [key: string]: any }>(chartData: T): T {
    const initStyleNotYetDone = this.initComputedStyle();
    try {
      return this.replaceAllCssVars(conditionalCloneDeepObject(chartData, (value) => !!this.getCssVarMatch(value)));
    } finally {
      if (initStyleNotYetDone) {
        this.removeComputedStyle();
      }
    }
  }
}
