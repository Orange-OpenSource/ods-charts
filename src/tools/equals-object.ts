//
// Software Name: Orange Design System Charts
// SPDX-FileCopyrightText: Copyright (c) 2023 - 2025 Orange SA
// SPDX-License-Identifier: MIT
//
// This software is distributed under the MIT license.
//

import { isVarArray, isVarObject } from './merge-objects';

export function equalsObject(obj1: any, obj2: any): boolean {
  if (isVarObject(obj1)) {
    if (!isVarObject(obj2)) {
      return false;
    }
    if (!equalsObject(Object.keys(obj1), Object.keys(obj2))) {
      return false;
    }
    for (const key of Object.keys(obj1)) {
      if (!equalsObject(obj1[key], obj2[key])) {
        return false;
      }
    }
    return true;
  } else if (isVarArray(obj1)) {
    if (!isVarArray(obj2)) {
      return false;
    }
    if (obj1.length !== obj2.length) {
      return false;
    }
    for (let index = 0; index < obj1.length; index++) {
      if (!equalsObject(obj1[index], obj2[index])) {
        return false;
      }
    }
    return true;
  } else {
    return obj1 === obj2;
  }
}
