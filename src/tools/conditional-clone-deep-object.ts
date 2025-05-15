//
// Software Name: Orange Design System Charts
// SPDX-FileCopyrightText: Copyright (c) 2023 - 2025 Orange SA
// SPDX-License-Identifier: MIT
//
// This software is distributed under the MIT license.
//

import { isVarArray, isVarObject } from './merge-objects';

export function lookForPaths(
  obj: any,
  condition: (value: any) => boolean,
  searchedTypes: string[] = ['string'],
  currentPath: string = '',
  foundPaths: string[] = []
): string[] {
  if (searchedTypes.includes(typeof obj) && condition(obj)) {
    foundPaths.push(currentPath);
  } else {
    if (isVarArray(obj)) {
      for (let index = 0; index < obj.length; index++) {
        lookForPaths(obj[index], condition, searchedTypes, currentPath + '[' + index + ']', foundPaths);
      }
    } else if (isVarObject(obj)) {
      for (const key of Object.keys(obj)) {
        lookForPaths(obj[key], condition, searchedTypes, ('' === currentPath ? '' : currentPath + '.') + key, foundPaths);
      }
    }
  }

  return foundPaths;
}

function recursiveCloneDeep(obj: any, pathsToCopy: string[], currentPath: string = '') {
  if (pathsToCopy.find((onePathToCopy: string) => onePathToCopy.startsWith(currentPath))) {
    if (isVarObject(obj)) {
      const result: any = {};
      for (const key of Object.keys(obj)) {
        result[key] = recursiveCloneDeep(obj[key], pathsToCopy, ('' === currentPath ? '' : currentPath + '.') + key);
      }
      return result;
    } else if (isVarArray(obj)) {
      const result: any = [];
      for (let index = 0; index < obj.length; index++) {
        result[index] = recursiveCloneDeep(obj[index], pathsToCopy, currentPath + '[' + index + ']');
      }
      return result;
    }
  }
  return obj;
}

export function conditionalCloneDeepObject(obj: any, condition: (value: any) => boolean, searchedTypes: string[] = ['string']): any {
  const pathsToCopy = lookForPaths(obj, condition, searchedTypes);

  if (0 < pathsToCopy.length) {
    return recursiveCloneDeep(obj, pathsToCopy);
  }
  return obj;
}
