//
// Software Name: Orange Design System Charts
// SPDX-FileCopyrightText: Copyright (c) 2023 - 2024 Orange SA
// SPDX-License-Identifier: MIT
//
// This software is distributed under the MIT license.
//

import { ODSChartsCSSThemesNames } from '../css-themes/css-themes';

/**
 * Added for None or Boosted 4 themes
 */
const BOOSTED5_VARIABLE = `
.ods-charts-context, [data-bs-theme="light"] .ods-charts-context, .ods-charts-context[data-bs-theme="light"], [data-bs-theme] .ods-charts-context[data-bs-theme="light"]  {
  color-scheme: light;
  --bs-blue: #4170d8;
  --bs-indigo: #a885d8;
  --bs-purple: #a885d8;
  --bs-pink: #ffb4e6;
  --bs-red: #cd3c14;
  --bs-orange: #f16e00;
  --bs-yellow: #fc0;
  --bs-green: #228722;
  --bs-teal: #50be87;
  --bs-cyan: #4bb4e6;
  --bs-black: #000;
  --bs-white: #fff;
  --bs-gray: #999;
  --bs-gray-dark: #595959;
  --bs-gray-100: #fafafa;
  --bs-gray-200: #f6f6f6;
  --bs-gray-300: #eee;
  --bs-gray-400: #ddd;
  --bs-gray-500: #ccc;
  --bs-gray-600: #999;
  --bs-gray-700: #666;
  --bs-gray-800: #595959;
  --bs-gray-900: #333;
  --bs-gray-950: #141414;
  --bs-body-color: #000;
  --bs-body-color-rgb: 0, 0, 0;
  --bs-body-bg: #fff;
  --bs-body-bg-rgb: 255, 255, 255;
  --bs-link-color: #000;
  --bs-border-width: 0.125rem;
  --bs-border-color: #000;
  --bs-border-color-subtle: #ccc;

  --bs-secondary-color: #666;
  --bs-secondary-bg: #eee;
  --bs-primary: #f16e00;
  --bs-secondary: #000;
  --bs-success: #228722;
  --bs-info: #4170d8;
  --bs-warning: #fc0;
  --bs-danger: #cd3c14;
  --bs-light: #ccc;
  --bs-dark: #000;

  --bs-warning-rgb: 255, 204, 0;
  --bs-tertiary-color-rgb: 204, 204, 204;
  --bs-tertiary-bg: #fafafa;
}

[data-bs-theme="dark"] .ods-charts-context, .ods-charts-context[data-bs-theme="dark"], [data-bs-theme] .ods-charts-context[data-bs-theme="dark"] {
  color-scheme: dark;
  --bs-body-color: #fff;
  --bs-body-color-rgb: 255, 255, 255;
  --bs-body-bg: #141414;
  --bs-body-bg-rgb: 20, 20, 20;
  --bs-link-color: #fff;
  --bs-border-color: #fff;
  --bs-border-color-subtle: #666;

  --bs-secondary-color: #999;
  --bs-secondary-bg: #333;
  --bs-primary: #ff7900;
  --bs-secondary: #fff;
  --bs-success: #6c6;
  --bs-info: #69f;
  --bs-warning: #fc0;
  --bs-danger: #f66;
  --bs-light: #ccc;
  --bs-dark: #000;

  --bs-warning-rgb: 255, 204, 0;
  --bs-tertiary-color-rgb: 102, 102, 102;
  --bs-tertiary-bg: #000;
}


[data-bs-theme] .ods-charts-context, .ods-charts-context[data-bs-theme] {
    color: var(--bs-body-color);
    background-color: var(--bs-body-bg);
}


[data-bs-theme] .ods-charts-context a, .ods-charts-context[data-bs-theme] a {
    color: var(--bs-link-color);
}
`;

/**
 * Added for all themes
 */
const NON_BOOSTED5_VARIABLE = `
.ods-charts-context, [data-bs-theme="light"] .ods-charts-context, .ods-charts-context[data-bs-theme="light"] {
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

}

[data-bs-theme="dark"] .ods-charts-context, .ods-charts-context[data-bs-theme="dark"] {
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
}
`;

export const ODS_CHARTS_CSS_VARIABLES: { [theme in ODSChartsCSSThemesNames]: string } = {
  BOOSTED4: `
  ${BOOSTED5_VARIABLE}
  ${NON_BOOSTED5_VARIABLE}
  `,
  BOOSTED5: `
  ${NON_BOOSTED5_VARIABLE}
  `,
  CUSTOM: `
  ${BOOSTED5_VARIABLE}
  ${NON_BOOSTED5_VARIABLE}
  `,
  NONE: `
  ${BOOSTED5_VARIABLE}
  ${NON_BOOSTED5_VARIABLE}
  `,
};
