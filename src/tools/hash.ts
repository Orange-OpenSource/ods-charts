//
// Software Name: Orange Design System Charts
// SPDX-FileCopyrightText: Copyright (c) 2023 - 2025 Orange SA
// SPDX-License-Identifier: MIT
//
// This software is distributed under the MIT license.
//

export function buildHash(text: any): string {
  var result = 0;
  if ('string' !== typeof text) {
    text = JSON.stringify(text);
  }
  if (text.length == 0) return '' + result;
  for (let index = 0; index < text.length; index++) {
    const charCode = text.charCodeAt(index);
    result = (result << 5) - result + charCode;
    result = result & result;
  }
  return '' + result;
}

export function getStringValue(text: any): string {
  return 'string' === typeof text ? text : buildHash(text);
}
