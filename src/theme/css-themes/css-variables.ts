//
// Software Name: Orange Design System Charts
// SPDX-FileCopyrightText: Copyright (c) 2023 - 2025 Orange SA
// SPDX-License-Identifier: MIT
//
// This software is distributed under the MIT license.
//

import { ODSChartsCSSThemesNames } from './css-themes';
import { ODS_CHARTS_CONTEXT } from '../colors/_ouds-colors-css-variables';
import { DEFAULT_ARROW_SIZE } from '../popover/ods-chart-popover-definitions';

/**
 * Added for None or Boosted 4 themes
 */
const EXISTING_IN_BOOSTED5_VARIABLES = `
[data-bs-theme=light] {
  color-scheme: light;
} 

:host, [data-bs-theme=light] {
  --ods-charts-blue: #4170d8;
  --ods-charts-indigo: #a885d8;
  --ods-charts-purple: #a885d8;
  --ods-charts-pink: #ffb4e6;
  --ods-charts-red: #cd3c14;
  --ods-charts-orange: #f16e00;
  --ods-charts-yellow: #fc0;
  --ods-charts-green: #228722;
  --ods-charts-teal: #50be87;
  --ods-charts-cyan: #4bb4e6;
  --ods-charts-black: #000;
  --ods-charts-white: #fff;
  --ods-charts-gray: #999;
  --ods-charts-gray-dark: #595959;
  --ods-charts-gray-100: #fafafa;
  --ods-charts-gray-200: #f6f6f6;
  --ods-charts-gray-300: #eee;
  --ods-charts-gray-400: #ddd;
  --ods-charts-gray-500: #ccc;
  --ods-charts-gray-600: #999;
  --ods-charts-gray-700: #666;
  --ods-charts-gray-800: #595959;
  --ods-charts-gray-900: #333;
  --ods-charts-gray-950: #141414;
  --ods-charts-body-color: #000;
  --ods-charts-body-color-rgb: 0, 0, 0;
  --ods-charts-body-bg: #fff;
  --ods-charts-body-bg-rgb: 255, 255, 255;
  --ods-charts-link-color: #000;
  --ods-charts-border-width: 0.125rem;
  --ods-charts-border-color: #000;
  --ods-charts-border-color-subtle: #ccc;

  --ods-charts-secondary-color: #666;
  --ods-charts-secondary-bg: #eee;
  --ods-charts-primary: #f16e00;
  --ods-charts-secondary: #000;
  --ods-charts-success: #228722;
  --ods-charts-info: #4170d8;
  --ods-charts-warning: #fc0;
  --ods-charts-danger: #cd3c14;
  --ods-charts-light: #ccc;
  --ods-charts-dark: #000;

  --ods-charts-warning-rgb: 255, 204, 0;
  --ods-charts-tertiary-color-rgb: 204, 204, 204;
  --ods-charts-tertiary-bg: #fafafa;
} 

[data-bs-theme=dark] {
  color-scheme: dark;
  --ods-charts-body-color: #fff;
  --ods-charts-body-color-rgb: 255, 255, 255;
  --ods-charts-body-bg: #141414;
  --ods-charts-body-bg-rgb: 20, 20, 20;
  --ods-charts-link-color: #fff;
  --ods-charts-border-color: #fff;
  --ods-charts-border-color-subtle: #666;

  --ods-charts-secondary-color: #999;
  --ods-charts-secondary-bg: #333;
  --ods-charts-primary: #ff7900;
  --ods-charts-secondary: #fff;
  --ods-charts-success: #6c6;
  --ods-charts-info: #69f;
  --ods-charts-warning: #fc0;
  --ods-charts-danger: #f66;
  --ods-charts-light: #ccc;
  --ods-charts-dark: #000;

  --ods-charts-warning-rgb: 255, 204, 0;
  --ods-charts-tertiary-color-rgb: 102, 102, 102;
  --ods-charts-tertiary-bg: #000;
}

.ods-charts-context{
  --bs-blue: var(--ods-charts-blue, #4170d8);
  --bs-indigo: var(--ods-charts-indigo, #a885d8);
  --bs-purple: var(--ods-charts-purple, #a885d8);
  --bs-pink: var(--ods-charts-pink, #ffb4e6);
  --bs-red: var(--ods-charts-red, #cd3c14);
  --bs-orange: var(--ods-charts-orange, #f16e00);
  --bs-yellow: var(--ods-charts-yellow, #fc0);
  --bs-green: var(--ods-charts-green, #228722);
  --bs-teal: var(--ods-charts-teal, #50be87);
  --bs-cyan: var(--ods-charts-cyan, #4bb4e6);
  --bs-black: var(--ods-charts-black, #000);
  --bs-white: var(--ods-charts-white, #fff);
  --bs-gray: var(--ods-charts-gray, #999);
  --bs-gray-dark: var(--ods-charts-gray-dark, #595959);
  --bs-gray-100: var(--ods-charts-gray-100, #fafafa);
  --bs-gray-200: var(--ods-charts-gray-200, #f6f6f6);
  --bs-gray-300: var(--ods-charts-gray-300, #eee);
  --bs-gray-400: var(--ods-charts-gray-400, #ddd);
  --bs-gray-500: var(--ods-charts-gray-500, #ccc);
  --bs-gray-600: var(--ods-charts-gray-600, #999);
  --bs-gray-700: var(--ods-charts-gray-700, #666);
  --bs-gray-800: var(--ods-charts-gray-800, #595959);
  --bs-gray-900: var(--ods-charts-gray-900, #333);
  --bs-gray-950: var(--ods-charts-gray-950, #141414);
  --bs-body-color: var(--ods-charts-body-color, #000);
  --bs-body-color-rgb: var(--ods-charts-body-color-rgb, 0, 0, 0);
  --bs-body-bg: var(--ods-charts-body-bg, #fff);
  --bs-body-bg-rgb: var(--ods-charts-body-bg-rgb, 255, 255, 255);
  --bs-link-color: var(--ods-charts-link-color, #000);
  --bs-border-width: var(--ods-charts-border-width, 0.125rem);
  --bs-border-color: var(--ods-charts-border-color, #000);
  --bs-border-color-subtle: var(--ods-charts-border-color-subtle, #ccc);

  --bs-secondary-color: var(--ods-charts-secondary-color, #666);
  --bs-secondary-bg: var(--ods-charts-secondary-bg, #eee);
  --bs-primary: var(--ods-charts-primary, #f16e00);
  --bs-secondary: var(--ods-charts-secondary, #000);
  --bs-success: var(--ods-charts-success, #228722);
  --bs-info: var(--ods-charts-info, #4170d8);
  --bs-warning: var(--ods-charts-warning, #fc0);
  --bs-danger: var(--ods-charts-danger, #cd3c14);
  --bs-light: var(--ods-charts-light, #ccc);
  --bs-dark: var(--ods-charts-dark, #000);
  --bs-warning-rgb: var(--ods-charts-warning-rgb, 255, 204, 0);
  --bs-tertiary-color-rgb: var(--ods-charts-tertiary-color-rgb, 204, 204, 204);
  --bs-tertiary-bg: var(--ods-charts-tertiary-bg, #fafafa);
}


[data-bs-theme] .ods-charts-context, .ods-charts-context[data-bs-theme] {
    color: var(--bs-body-color);
    background-color: var(--bs-body-bg);
}


[data-bs-theme] .ods-charts-context a, .ods-charts-context[data-bs-theme] a {
    color: var(--bs-link-color);
}
    
.ods-charts-context {
  --bs-body-font-weight: 400;
}
`;

/**
 * Added for None theme
 */
const NONE_THEME_SPECIFIC_VARIABLES = `
.ods-charts-context {
  --bs-font-sans-serif:  "Helvetica Neue", Helvetica, "Noto Sans", "Liberation Sans", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
}
`;

/**
 * Added for Boosted 4 theme
 */
const BOOSTED4_THEME_SPECIFIC_VARIABLES = `
.ods-charts-context {
  --bs-font-sans-serif:  var(--font-family-sans-serif, "Helvetica Neue");
}

.ods-charts-context .popover {
  color: var(--bs-body-color);
  background-color: var(--bs-body-bg);
  border: 2px solid var(--bs-border-color-subtle);
}

.ods-charts-context .popover .popover-header {
  color: var(--bs-body-color);
  background-color: var(--bs-body-bg);
  padding-left: var(--ods-popover-header-padding-x, 9px);
  padding-right: var(--ods-popover-header-padding-x, 9px);
  padding-top: var(--ods-popover-header-padding-top, 5px);
  padding-bottom: var(--ods-popover-header-padding-bottom, 7px);
  font-size: var(--ods-popover-header-font-size, 14px);
  line-height: var(--ods-popover-header-line-height, 1.11);
  border:none;
}

.ods-charts-context .popover .popover-body {
  color: var(--bs-body-color);
  padding-left: var(--ods-popover-body-padding-x, 9px);
  padding-right: var(--ods-popover-body-padding-x, 9px);
  padding-top: var(--ods-popover-body-padding-top, 0);
  padding-bottom: var(--ods-popover-body-padding-bottom, 7px);
}

.ods-charts-context .popover .arrow {
  display: var(--ods-poppover-arrow-display, ${0 == DEFAULT_ARROW_SIZE ? 'none' : 'inherit'});
}

.ods-charts-context .popover-header::before {
    visibility: hidden;
}

.ods-charts-context .bs-popover-auto[x-placement^=bottom]>.arrow::after, 
.ods-charts-context .bs-popover-bottom>.arrow::after {
    border-bottom-color: var(--bs-body-bg);
}

.ods-charts-context .bs-popover-auto[x-placement^=top]>.arrow::after, 
.ods-charts-context .bs-popover-top>.arrow::after {
    border-top-color: var(--bs-body-bg);
}

.ods-charts-context .bs-popover-auto[x-placement^=left]>.arrow::after, 
.ods-charts-context .bs-popover-left >.arrow::after {
    border-left-color: var(--bs-body-bg);
}
    
.ods-charts-context .bs-popover-auto[x-placement^=right]>.arrow::after,
.ods-charts-context .bs-popover-right >.arrow::after {
    border-right-color: var(--bs-body-bg);
}
`;

/**
 * Added for Boosted 5 theme
 */
export const BOOSTED5_THEME_SPECIFIC_VARIABLES = `
.ods-charts-context .popover {
  --bs-popover-header-padding-y: var(--ods-popover-header-padding-y, initial);
  --bs-popover-header-padding-top: var(--ods-popover-header-padding-top, 5px);
  --bs-popover-header-padding-x: var(--ods-popover-header-padding-x, 9px);
  --bs-popover-header-padding-bottom: var(--ods-popover-header-padding-bottom, 7px);
  --bs-popover-body-padding-x: var(--ods-popover-body-padding-x, 9px);
  --bs-popover-body-padding-y: var(--ods-popover-body-padding-y, initial);
  --bs-popover-body-padding-top: var(--ods-popover-body-padding-top, 0);
  --bs-popover-body-padding-bottom: var(--ods-popover-body-padding-bottom, 7px);

  --bs-popover-header-font-size: var(--ods-popover-header-font-size, 14px);
  --bs-popover-header-line-height: var(--ods-popover-header-line-height, 1.11);
}
.ods-charts-context .popover .popover-arrow {
  display: var(--ods-poppover-arrow-display, ${0 == DEFAULT_ARROW_SIZE ? 'none' : 'inherit'});
}  
`;

/**
 * Added for all themes
 */
const ALL_THEMES_SPECIFIC_VARIABLES = `
:host, [data-bs-theme="light"] {
  color-scheme: light;

  --ods-yellow-100: #fff6b6;
  --ods-yellow-200: #ffe45b;
  --ods-yellow-300: #ffd200;
  --ods-yellow-400: #ffb400;
  --ods-yellow-500: #b98f11;
  --ods-yellow-600: #9d6e06;

  --ods-yellow: var(--ods-yellow-300);

  --ods-blue-100: #b5e8f7;
  --ods-blue-200: #80ceef;
  --ods-blue-300: #4bb4e6;
  --ods-blue-400: #3e9dd6;
  --ods-blue-500: #237ecA;
  --ods-blue-600: #085ebd;

  --ods-green-100: #B8EBD6;
  --ods-green-200: #84D5AF;
  --ods-green-300: #50BE87;
  --ods-green-400: #27A971;
  --ods-green-500: #198C51;
  --ods-green-600: #0A6E31;

  --ods-pink-100: #FFE8F7;
  --ods-pink-200: #FFCEEF;
  --ods-pink-300: #FFB4E6;
  --ods-pink-400: #FF8AD4;
  --ods-pink-500: #D573BB;
  --ods-pink-600: #BC4D9A;

  --ods-purple-100: #D9C2F0;
  --ods-purple-200: #C1A4E4;
  --ods-purple-300: #A885D8;
  --ods-purple-400: #9373BD;
  --ods-purple-500: #6E4AA7;
  --ods-purple-600: #492191;

  --ods-yellow-1: var(--ods-yellow-600);
  --ods-yellow-2: var(--ods-yellow-500);
  --ods-yellow-3: var(--ods-yellow-400);
  --ods-yellow-4: var(--ods-yellow-300);
  --ods-yellow-5: var(--ods-yellow-200);
  --ods-yellow-6: var(--ods-yellow-100);

  --ods-blue-1: var(--ods-blue-600);
  --ods-blue-2: var(--ods-blue-500);
  --ods-blue-3: var(--ods-blue-400);
  --ods-blue-4: var(--ods-blue-300);
  --ods-blue-5: var(--ods-blue-200);
  --ods-blue-6: var(--ods-blue-100);

  --ods-green-1: var(--ods-green-600);
  --ods-green-2: var(--ods-green-500);
  --ods-green-3: var(--ods-green-400);
  --ods-green-4: var(--ods-green-300);
  --ods-green-5: var(--ods-green-200);
  --ods-green-6: var(--ods-green-100);

  --ods-pink-1: var(--ods-pink-600);
  --ods-pink-2: var(--ods-pink-500);
  --ods-pink-3: var(--ods-pink-400);
  --ods-pink-4: var(--ods-pink-300);
  --ods-pink-5: var(--ods-pink-200);
  --ods-pink-6: var(--ods-pink-100);

  --ods-purple-1: var(--ods-purple-600);
  --ods-purple-2: var(--ods-purple-500);
  --ods-purple-3: var(--ods-purple-400);
  --ods-purple-4: var(--ods-purple-300);
  --ods-purple-5: var(--ods-purple-200);
  --ods-purple-6: var(--ods-purple-100);

  --ods-categorical-1: var(--ods-blue-600);
  --ods-categorical-2: var(--ods-green-400);
  --ods-categorical-3: var(--ods-pink-600);
  --ods-categorical-4: var(--ods-purple-400);
  --ods-categorical-5: var(--ods-yellow-600);
  --ods-categorical-6: var(--bs-gray-900);
  --ods-categorical-7: var(--ods-blue-400);
  --ods-categorical-8: var(--ods-green-600);
  --ods-categorical-9: var(--ods-pink-500);
  --ods-categorical-10: var(--ods-purple-600);
  --ods-categorical-11: var(--ods-yellow-500);
  --ods-categorical-12: var(--bs-gray-700);

  --ods-default-1: var(--ods-blue-600);
  --ods-default-2: var(--ods-green-600);
  --ods-default-3: var(--ods-pink-600);
  --ods-default-4: var(--ods-purple-600);
  --ods-default-5: var(--ods-yellow-500);
  --ods-default-6: var(--bs-gray-700);
  --ods-default-7: var(--ods-blue-400);
  --ods-default-8: var(--ods-green-400);
  --ods-default-9: var(--ods-pink-500);
  --ods-default-10: var(--ods-purple-400);
  --ods-default-11: var(--ods-yellow-600);
  --ods-default-12: var(--bs-gray-900);

  --ods-cyan-light: var(--ods-blue-100);
  --ods-teal-light: var(--ods-green-100);
  --ods-pink-light: var(--ods-pink-100);
  --ods-indigo-light: var(--ods-purple-100);
  --ods-yellow-light: var(--ods-yellow-100);

  --ods-cyan-dark: var(--ods-blue-600);
  --ods-teal-dark: var(--ods-green-600);
  --ods-pink-dark: var(--ods-pink-400);
  --ods-indigo-dark: var(--ods-purple-600);
  --ods-yellow-dark: var(--ods-yellow-400);

  --ods-functional-1: var(--bs-primary);
  --ods-functional-2: var(--bs-gray-300);
  --ods-functional-3: var(--bs-success);
  --ods-functional-4: var(--bs-warning);
  --ods-functional-5: var(--bs-danger);
  --ods-functional-6: var(--bs-info);

  --ods-dial-gauge-pointer: image://data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%22147%2065.2635%2023%20104.4226%22%20width%3D%2223px%22%20height%3D%22107.735px%22%3E%0A%20%20%3Cpath%20d%3D%22M%20123.034%2079.908%20L%20179.603%20150.618%20L%20193.745%20136.476%20L%20123.034%2079.908%20Z%22%20fill%3D%22%23000%22%20style%3D%22stroke-width%3A%201%3B%20transform-origin%3A%20158.389px%20115.263px%3B%22%20transform%3D%22matrix(0.70710701%2C%200.70710701%2C%20-0.70710701%2C%200.70710701%2C%200.00000871%2C%20-0.0000095)%22%2F%3E%0A%20%20%3Ccircle%20cx%3D%22131.469%22%20cy%3D%2290.553%22%20r%3D%2210%22%20fill%3D%22%23000%22%20style%3D%22stroke-width%3A%201%3B%20transform-origin%3A%20131.469px%2090.553px%3B%22%20transform%3D%22matrix(-0.70710701%2C%20-0.70710701%2C%200.70710701%2C%20-0.70710701%2C%2026.91516753%2C%2064.99089065)%22%2F%3E%0A%3C%2Fsvg%3E
}

[data-bs-theme="dark"] {
  color-scheme: dark;

  --ods-yellow-1: var(--ods-yellow-100);
  --ods-yellow-2: var(--ods-yellow-200);
  --ods-yellow-3: var(--ods-yellow-300);
  --ods-yellow-4: var(--ods-yellow-400);
  --ods-yellow-5: var(--ods-yellow-500);
  --ods-yellow-6: var(--ods-yellow-600);

  --ods-blue-1: var(--ods-blue-100);
  --ods-blue-2: var(--ods-blue-200);
  --ods-blue-3: var(--ods-blue-300);
  --ods-blue-4: var(--ods-blue-400);
  --ods-blue-5: var(--ods-blue-500);
  --ods-blue-6: var(--ods-blue-600);

  --ods-green-1: var(--ods-green-100);
  --ods-green-2: var(--ods-green-200);
  --ods-green-3: var(--ods-green-300);
  --ods-green-4: var(--ods-green-400);
  --ods-green-5: var(--ods-green-500);
  --ods-green-6: var(--ods-green-600);

  --ods-pink-1: var(--ods-pink-100);
  --ods-pink-2: var(--ods-pink-200);
  --ods-pink-3: var(--ods-pink-300);
  --ods-pink-4: var(--ods-pink-400);
  --ods-pink-5: var(--ods-pink-500);
  --ods-pink-6: var(--ods-pink-600);

  --ods-purple-1: var(--ods-purple-100);
  --ods-purple-2: var(--ods-purple-200);
  --ods-purple-3: var(--ods-purple-300);
  --ods-purple-4: var(--ods-purple-400);
  --ods-purple-5: var(--ods-purple-500);
  --ods-purple-6: var(--ods-purple-600);

  --ods-categorical-1: var(--ods-blue-500);
  --ods-categorical-2: var(--ods-green-300);
  --ods-categorical-3: var(--ods-pink-400);
  --ods-categorical-4: var(--ods-purple-300);
  --ods-categorical-5: var(--ods-yellow-400);
  --ods-categorical-6: var(--bs-gray-600);
  --ods-categorical-7: var(--ods-blue-300);
  --ods-categorical-8: var(--ods-green-500);
  --ods-categorical-9: var(--ods-pink-300);
  --ods-categorical-10: var(--ods-purple-500);
  --ods-categorical-11: var(--ods-yellow-300);
  --ods-categorical-12: var(--bs-gray-500);

  --ods-default-1: var(--ods-blue-500);
  --ods-default-2: var(--ods-green-500);
  --ods-default-3: var(--ods-pink-400);
  --ods-default-4: var(--ods-purple-500);
  --ods-default-5: var(--ods-yellow-300);
  --ods-default-6: var(--bs-gray-500);
  --ods-default-7: var(--ods-blue-300);
  --ods-default-8: var(--ods-green-300);
  --ods-default-9: var(--ods-pink-300);
  --ods-default-10: var(--ods-purple-300);
  --ods-default-11: var(--ods-yellow-400);
  --ods-default-12: var(--bs-gray-600);

  --ods-cyan-light: var(--ods-blue-600);
  --ods-teal-light: var(--ods-green-600);
  --ods-pink-light: var(--ods-pink-400);
  --ods-indigo-light: var(--ods-purple-600);
  --ods-yellow-light: var(--ods-yellow-400);

  --ods-cyan-dark: var(--ods-blue-100);
  --ods-teal-dark: var(--ods-green-100);
  --ods-pink-dark: var(--ods-pink-100);
  --ods-indigo-dark: var(--ods-purple-100);
  --ods-yellow-dark: var(--ods-yellow-100);

  --ods-functional-1: var(--bs-primary);
  --ods-functional-2: var(--bs-gray-700);
  --ods-functional-3: var(--bs-success);
  --ods-functional-4: var(--bs-warning);
  --ods-functional-5: var(--bs-danger);
  --ods-functional-6: var(--bs-info);

  --ods-dial-gauge-pointer: image://data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%22147%2065.2635%2023%20104.4226%22%20width%3D%2223px%22%20height%3D%22107.735px%22%3E%0A%20%20%3Cpath%20d%3D%22M%20123.034%2079.908%20L%20179.603%20150.618%20L%20193.745%20136.476%20L%20123.034%2079.908%20Z%22%20fill%3D%22%23fff%22%20style%3D%22stroke-width%3A%201%3B%20transform-origin%3A%20158.389px%20115.263px%3B%22%20transform%3D%22matrix(0.70710701%2C%200.70710701%2C%20-0.70710701%2C%200.70710701%2C%200.00000871%2C%20-0.0000095)%22%2F%3E%0A%20%20%3Ccircle%20cx%3D%22131.469%22%20cy%3D%2290.553%22%20r%3D%2210%22%20fill%3D%22%23fff%22%20style%3D%22stroke-width%3A%201%3B%20transform-origin%3A%20131.469px%2090.553px%3B%22%20transform%3D%22matrix(-0.70710701%2C%20-0.70710701%2C%200.70710701%2C%20-0.70710701%2C%2026.91516753%2C%2064.99089065)%22%2F%3E%0A%3C%2Fsvg%3E

}

.ods-charts-context {
  --ods-popover-header-padding-y: initial;
  --ods-popover-header-padding-top: 5px;
  --ods-popover-header-padding-x: 9px;
  --ods-popover-header-padding-bottom: 7px;
  --ods-popover-body-padding-x: 9px;
  --ods-popover-body-padding-y: initial;
  --ods-popover-body-padding-top: 0;
  --ods-popover-body-padding-bottom: 7px;
  
  --ods-popover-header-font-size: 14px;
  --ods-popover-header-line-height: 1.11;
  --ods-popover-header-font-weight: 700;

  --ods-popover-body-font-size: 14px;
  --ods-popover-body-line-height: 1.1;
  --ods-popover-body-font-weight: 400;

  --ods-poppover-arrow-display: ${0 == DEFAULT_ARROW_SIZE ? 'none' : 'inherit'};
}
`;

export const ODS_CHARTS_CSS_VARIABLES: { [theme in ODSChartsCSSThemesNames]: string } = {
  BOOSTED4: `
  ${ODS_CHARTS_CONTEXT}
  ${ALL_THEMES_SPECIFIC_VARIABLES}
  ${EXISTING_IN_BOOSTED5_VARIABLES}
  ${BOOSTED4_THEME_SPECIFIC_VARIABLES}
  `,
  BOOSTED5: `
  ${ODS_CHARTS_CONTEXT}
  ${ALL_THEMES_SPECIFIC_VARIABLES}
  ${BOOSTED5_THEME_SPECIFIC_VARIABLES}
  `,
  CUSTOM: `
  ${ODS_CHARTS_CONTEXT}
  ${ALL_THEMES_SPECIFIC_VARIABLES}
  ${EXISTING_IN_BOOSTED5_VARIABLES}
  ${NONE_THEME_SPECIFIC_VARIABLES}
  `,
  NONE: `
  ${ODS_CHARTS_CONTEXT}
  ${ALL_THEMES_SPECIFIC_VARIABLES}
  ${EXISTING_IN_BOOSTED5_VARIABLES}
  ${NONE_THEME_SPECIFIC_VARIABLES}
  `,
};
