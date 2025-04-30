//
// Software Name: Orange Design System Charts
// SPDX-FileCopyrightText: Copyright (c) 2023 - 2025 Orange SA
// SPDX-License-Identifier: MIT
//
// This software is distributed under the MIT license.
//

export enum MainAxisType {
  category = 'category',
  time = 'time',
}

export function isMainAxis(axis: { data?: any; type?: MainAxisType | string }) {
  return axis && (axis.data || (axis.type && Object.values(MainAxisType).includes(axis.type as MainAxisType)));
}
