//
// Software Name: Orange Design System Charts
// SPDX-FileCopyrightText: Copyright (c) 2023 - 2024 Orange SA
// SPDX-License-Identifier: MIT
//
// This software is distributed under the MIT license.
//

/**
 * @packageDocumentation
 *
 * Once the library integrated, via
 * - script &lt;script src="...ods-charts.js"&gt;
 * - or an import * as ODSCharts from 'ods-charts'
 *
 * use `ODSCharts.getThemeManager`({@link ODSChartsThemeOptions}) to get the {@link ODSChartsTheme}.
 *
 * The {@link ODSChartsTheme} is used to build the ODS theme and the charts options.
 *
 */
import { ODSChartsTheme } from './theme/ods-chart-theme';

export * from './theme/ods-chart-theme';
export * from './theme/ODS.project';
export * from './theme/css-themes/css-themes';
export * from './theme/popover/ods-chart-popover-definitions';
export * from './theme/legends/ods-chart-legends-definitions';

export const getThemeManager = ODSChartsTheme.getThemeManager;
