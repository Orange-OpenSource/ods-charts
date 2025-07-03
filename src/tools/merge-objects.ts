//
// Software Name: Orange Design System Charts
// SPDX-FileCopyrightText: Copyright (c) 2023 - 2025 Orange SA
// SPDX-License-Identifier: MIT
//
// This software is distributed under the MIT license.
//

export function isVarArray(obj: any) {
  return obj && Array.isArray(obj);
}
export function isVarObject(obj: any) {
  return typeof obj === 'object' && !isVarArray(obj);
}
export function isVarFunction(obj: any) {
  return typeof obj === 'function';
}

export function mergeObjects(obj1: any, obj2: any, ...obj: any) {
  if (obj && isVarArray(obj) && 0 < obj.length) {
    return mergeObjects(mergeObjects(obj1, obj2), obj[0], ...obj.slice(1));
  }
  if ((isVarObject(obj1) && isVarObject(obj2)) || (isVarArray(obj1) && isVarArray(obj2))) {
    for (const obj2Key of Object.keys(obj2)) {
      if ((isVarObject(obj1[obj2Key]) && isVarObject(obj2[obj2Key])) || (isVarArray(obj1[obj2Key]) && isVarArray(obj2[obj2Key]))) {
        mergeObjects(obj1[obj2Key], obj2[obj2Key]);
      } else {
        obj1[obj2Key] = obj2[obj2Key];
      }
    }
  }
  return obj1;
}
