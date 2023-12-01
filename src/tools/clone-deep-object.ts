//
// Software Name: Orange Design System Charts
// SPDX-FileCopyrightText: Copyright (c) 2023 Orange SA
// SPDX-License-Identifier: MIT
//
// This software is distributed under the MIT license.
//

import { isVarArray, isVarObject } from './merge-objects';

export function cloneDeepObject(obj: any): any {
  if (isVarObject(obj)) {
    const result: any = {};
    for (const key of Object.keys(obj)) {
      result[key] = cloneDeepObject(obj[key]);
    }
    return result;
  } else if (isVarArray(obj)) {
    const result: any = [];
    for (let index = 0; index < obj.length; index++) {
      result[index] = cloneDeepObject(obj[index]);
    }
    return result;
  } else {
    return obj;
  }
}
