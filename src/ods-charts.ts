//
// Software Name: Orange Design System Charts
// SPDX-FileCopyrightText: Copyright (c) 2023 - 2025 Orange SA
// SPDX-License-Identifier: MIT
//
// This software is distributed under the MIT license.
//

/**
 * @packageDocumentation
 *
 * This page is an index of the module's classes, interfaces and enumerations.
 *
 * Their use is introduced on the [home page](./#md:documentation).
 *
 */
import { ODSChartsTheme } from './theme/ods-chart-theme';

export * from './theme/ods-chart-theme';
export * from './theme/ODS.project';
export * from './theme/css-themes/css-themes';
export * from './theme/popover/ods-chart-popover-definitions';
export * from './theme/legends/ods-chart-legends-definitions';
export * from './theme/charts-type/charts-type';

export const getThemeManager = ODSChartsTheme.getThemeManager;
