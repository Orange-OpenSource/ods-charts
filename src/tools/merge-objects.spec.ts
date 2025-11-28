//
// Software Name: Orange Design System Charts
// SPDX-FileCopyrightText: Copyright (c) 2023 - 2025 Orange SA
// SPDX-License-Identifier: MIT
//
// This software is distributed under the MIT license.
//

import 'jasmine';
import { isVarArray, isVarObject, isVarFunction, mergeObjectsAndReplaceArrays, mergeObjectsAndArrays } from './merge-objects';

describe('isVarArray', () => {
  it('should return true for arrays', () => {
    expect(isVarArray([])).toBe(true);
    expect(isVarArray([1, 2, 3])).toBe(true);
    expect(isVarArray(['a', 'b'])).toBe(true);
  });

  it('should return false for non-arrays', () => {
    expect(isVarArray({})).toBe(false);
    expect(isVarArray('string')).toBe(false);
    expect(isVarArray(123)).toBe(false);
    expect(isVarArray(null)).toBe(false);
    expect(isVarArray(undefined)).toBe(false);
  });
});

describe('isVarObject', () => {
  it('should return true for objects', () => {
    expect(isVarObject({})).toBe(true);
    expect(isVarObject({ a: 1 })).toBe(true);
    expect(isVarObject({ nested: { obj: true } })).toBe(true);
  });

  it('should return false for arrays', () => {
    expect(isVarObject([])).toBe(false);
    expect(isVarObject([1, 2, 3])).toBe(false);
  });

  it('should return false for primitives', () => {
    expect(isVarObject('string')).toBe(false);
    expect(isVarObject(123)).toBe(false);
    expect(isVarObject(true)).toBe(false);
    expect(isVarObject(null)).toBe(false);
    expect(isVarObject(undefined)).toBe(false);
  });
});

describe('isVarFunction', () => {
  it('should return true for functions', () => {
    expect(isVarFunction(() => {})).toBe(true);
    expect(isVarFunction(function () {})).toBe(true);
    expect(isVarFunction(isVarFunction)).toBe(true);
  });

  it('should return false for non-functions', () => {
    expect(isVarFunction({})).toBe(false);
    expect(isVarFunction([])).toBe(false);
    expect(isVarFunction('string')).toBe(false);
    expect(isVarFunction(123)).toBe(false);
    expect(isVarFunction(null)).toBe(false);
    expect(isVarFunction(undefined)).toBe(false);
  });
});

describe('mergeObjectsAndReplaceArrays', () => {
  it('should merge two simple objects', () => {
    const obj1 = { a: 1, b: 2 };
    const obj2 = { b: 3, c: 4 };
    const result = mergeObjectsAndReplaceArrays(obj1, obj2);
    expect(result).toEqual({ a: 1, b: 3, c: 4 });
  });

  it('should merge nested objects', () => {
    const obj1 = {
      a: 1,
      nested: {
        x: 10,
        y: 20,
      },
    };
    const obj2 = {
      nested: {
        y: 30,
        z: 40,
      },
      b: 2,
    };
    const result = mergeObjectsAndReplaceArrays(obj1, obj2);
    expect(result).toEqual({
      a: 1,
      nested: {
        x: 10,
        y: 30,
        z: 40,
      },
      b: 2,
    });
  });

  it('should merge arrays by replacement', () => {
    const obj1 = { arr: [1, 2, 3] };
    const obj2 = { arr: [10, 20] };
    const result = mergeObjectsAndReplaceArrays(obj1, obj2);
    expect(result).toEqual({ arr: [10, 20] });
  });

  it('should merge multiple objects', () => {
    const obj1 = { a: 1 };
    const obj2 = { b: 2 };
    const obj3 = { c: 3 };
    const obj4 = { d: 4 };
    const result = mergeObjectsAndReplaceArrays(obj1, obj2, obj3, obj4);
    expect(result).toEqual({ a: 1, b: 2, c: 3, d: 4 });
  });

  it('should merge deeply nested structures', () => {
    const obj1 = {
      level1: {
        level2: {
          level3: {
            value: 'original',
          },
        },
      },
    };
    const obj2 = {
      level1: {
        level2: {
          level3: {
            value: 'updated',
            newValue: 'new',
          },
        },
      },
    };
    const result = mergeObjectsAndReplaceArrays(obj1, obj2);
    expect(result).toEqual({
      level1: {
        level2: {
          level3: {
            value: 'updated',
            newValue: 'new',
          },
        },
      },
    });
  });

  it('should override primitive values', () => {
    const obj1 = { a: 1, b: 'string', c: true };
    const obj2 = { a: 10, b: 'updated', c: false };
    const result = mergeObjectsAndReplaceArrays(obj1, obj2);
    expect(result).toEqual({ a: 10, b: 'updated', c: false });
  });

  it('should handle empty objects', () => {
    const obj1 = {};
    const obj2 = { a: 1 };
    const result = mergeObjectsAndReplaceArrays(obj1, obj2);
    expect(result).toEqual({ a: 1 });
  });

  it('should handle merging with arrays containing objects', () => {
    const obj1 = {
      items: [
        { id: 1, name: 'item1' },
        { id: 2, name: 'item2' },
      ],
    };
    const obj2 = {
      items: [{ id: 1, name: 'updated' }],
    };
    const result = mergeObjectsAndReplaceArrays(obj1, obj2);
    expect(result).toEqual({
      items: [{ id: 1, name: 'updated' }],
    });
  });

  it('should mutate the first object', () => {
    const obj1: any = { a: 1 };
    const obj2 = { b: 2 };
    const result = mergeObjectsAndReplaceArrays(obj1, obj2);
    expect(result).toBe(obj1);
    expect(obj1).toEqual({ a: 1, b: 2 });
  });

  it('should handle complex mixed structures', () => {
    const obj1 = {
      config: {
        settings: {
          theme: 'dark',
          colors: ['red', 'blue'],
        },
        options: {
          enabled: true,
        },
      },
    };
    const obj2 = {
      config: {
        settings: {
          colors: ['green'],
          fontSize: 14,
        },
        options: {
          enabled: false,
          timeout: 3000,
        },
      },
    };
    const result = mergeObjectsAndReplaceArrays(obj1, obj2);
    expect(result).toEqual({
      config: {
        settings: {
          theme: 'dark',
          colors: ['green'],
          fontSize: 14,
        },
        options: {
          enabled: false,
          timeout: 3000,
        },
      },
    });
  });

  it('should handle null and undefined values', () => {
    const obj1 = { a: 1, b: null, c: undefined };
    const obj2 = { a: null, b: 2, d: undefined };
    const result = mergeObjectsAndReplaceArrays(obj1, obj2);
    expect(result).toEqual({ a: null, b: 2, c: undefined, d: undefined });
  });

  it('should work with small initial color set', () => {
    const obj1 = {
      color: ['#4bb4e6', '#50be87', '#ffb4e6', '#a885d8', '#ffd200'],
      visualMap: {
        color: ['#085ebd', '#3179c8', '#5a94d3', '#84afde', '#adc9e9', '#d6e4f4'],
      },
      markPoint: {
        label: {
          color: 'var(--bs-body-color, #000000)',
        },
        emphasis: {
          label: {
            color: 'var(--bs-body-color, #000000)',
          },
        },
      },
    };
    const obj2 = {
      color: ['var(--ouds-charts-color-highlight)', 'var(--ouds-charts-color-neutral)'],
    };
    const obj3 = {
      visualMapColor: ['var(--ouds-charts-color-highlight)', 'var(--ouds-charts-color-neutral)'],
    };

    const result = mergeObjectsAndReplaceArrays(obj1, obj2, obj3);
    expect(result.color).toEqual(['var(--ouds-charts-color-highlight)', 'var(--ouds-charts-color-neutral)']);
    expect(result.visualMapColor).toEqual(['var(--ouds-charts-color-highlight)', 'var(--ouds-charts-color-neutral)']);
  });
});

describe('mergeObjectsAndArrays', () => {
  it('should merge two simple objects', () => {
    const obj1 = { a: 1, b: 2 };
    const obj2 = { b: 3, c: 4 };
    const result = mergeObjectsAndArrays(obj1, obj2);
    expect(result).toEqual({ a: 1, b: 3, c: 4 });
  });

  it('should merge nested objects', () => {
    const obj1 = {
      a: 1,
      nested: {
        x: 10,
        y: 20,
      },
    };
    const obj2 = {
      nested: {
        y: 30,
        z: 40,
      },
      b: 2,
    };
    const result = mergeObjectsAndArrays(obj1, obj2);
    expect(result).toEqual({
      a: 1,
      nested: {
        x: 10,
        y: 30,
        z: 40,
      },
      b: 2,
    });
  });

  it('should merge arrays by index', () => {
    const obj1 = { arr: [1, 2, 3] };
    const obj2 = { arr: [10, 20] };
    const result = mergeObjectsAndArrays(obj1, obj2);
    expect(result).toEqual({ arr: [10, 20, 3] });
  });

  it('should extend array when obj2 has more elements', () => {
    const obj1 = { arr: [1, 2] };
    const obj2 = { arr: [10, 20, 30, 40] };
    const result = mergeObjectsAndArrays(obj1, obj2);
    expect(result).toEqual({ arr: [10, 20, 30, 40] });
  });

  it('should merge multiple objects', () => {
    const obj1 = { a: 1 };
    const obj2 = { b: 2 };
    const obj3 = { c: 3 };
    const obj4 = { d: 4 };
    const result = mergeObjectsAndArrays(obj1, obj2, obj3, obj4);
    expect(result).toEqual({ a: 1, b: 2, c: 3, d: 4 });
  });

  it('should merge deeply nested structures', () => {
    const obj1 = {
      level1: {
        level2: {
          level3: {
            value: 'original',
          },
        },
      },
    };
    const obj2 = {
      level1: {
        level2: {
          level3: {
            value: 'updated',
            newValue: 'new',
          },
        },
      },
    };
    const result = mergeObjectsAndArrays(obj1, obj2);
    expect(result).toEqual({
      level1: {
        level2: {
          level3: {
            value: 'updated',
            newValue: 'new',
          },
        },
      },
    });
  });

  it('should override primitive values', () => {
    const obj1 = { a: 1, b: 'string', c: true };
    const obj2 = { a: 10, b: 'updated', c: false };
    const result = mergeObjectsAndArrays(obj1, obj2);
    expect(result).toEqual({ a: 10, b: 'updated', c: false });
  });

  it('should handle empty objects', () => {
    const obj1 = {};
    const obj2 = { a: 1 };
    const result = mergeObjectsAndArrays(obj1, obj2);
    expect(result).toEqual({ a: 1 });
  });

  it('should handle merging with arrays containing objects by index', () => {
    const obj1 = {
      items: [
        { id: 1, name: 'item1' },
        { id: 2, name: 'item2' },
      ],
    };
    const obj2 = {
      items: [{ id: 1, name: 'updated' }],
    };
    const result = mergeObjectsAndArrays(obj1, obj2);
    expect(result).toEqual({
      items: [
        { id: 1, name: 'updated' },
        { id: 2, name: 'item2' },
      ],
    });
  });

  it('should merge nested arrays with objects', () => {
    const obj1 = {
      data: [
        { value: 10, label: 'A' },
        { value: 20, label: 'B' },
        { value: 30, label: 'C' },
      ],
    };
    const obj2 = {
      data: [{ value: 100 }, { value: 200 }],
    };
    const result = mergeObjectsAndArrays(obj1, obj2);
    expect(result).toEqual({
      data: [
        { value: 100, label: 'A' },
        { value: 200, label: 'B' },
        { value: 30, label: 'C' },
      ],
    });
  });

  it('should mutate the first object', () => {
    const obj1: any = { a: 1 };
    const obj2 = { b: 2 };
    const result = mergeObjectsAndArrays(obj1, obj2);
    expect(result).toBe(obj1);
    expect(obj1).toEqual({ a: 1, b: 2 });
  });

  it('should handle complex mixed structures with array merging', () => {
    const obj1 = {
      config: {
        settings: {
          theme: 'dark',
          colors: ['red', 'blue', 'yellow'],
        },
        options: {
          enabled: true,
        },
      },
    };
    const obj2 = {
      config: {
        settings: {
          colors: ['green', 'purple'],
          fontSize: 14,
        },
        options: {
          enabled: false,
          timeout: 3000,
        },
      },
    };
    const result = mergeObjectsAndArrays(obj1, obj2);
    expect(result).toEqual({
      config: {
        settings: {
          theme: 'dark',
          colors: ['green', 'purple', 'yellow'],
          fontSize: 14,
        },
        options: {
          enabled: false,
          timeout: 3000,
        },
      },
    });
  });

  it('should handle null and undefined values', () => {
    const obj1 = { a: 1, b: null, c: undefined };
    const obj2 = { a: null, b: 2, d: undefined };
    const result = mergeObjectsAndArrays(obj1, obj2);
    expect(result).toEqual({ a: null, b: 2, c: undefined, d: undefined });
  });

  it('should merge arrays with primitive values', () => {
    const obj1 = {
      numbers: [1, 2, 3, 4, 5],
      strings: ['a', 'b', 'c'],
    };
    const obj2 = {
      numbers: [10, 20],
      strings: ['x', 'y', 'z', 'w'],
    };
    const result = mergeObjectsAndArrays(obj1, obj2);
    expect(result).toEqual({
      numbers: [10, 20, 3, 4, 5],
      strings: ['x', 'y', 'z', 'w'],
    });
  });

  it('should merge deeply nested arrays', () => {
    const obj1 = {
      matrix: [
        [1, 2, 3],
        [4, 5, 6],
      ],
    };
    const obj2 = {
      matrix: [[10, 20], [40]],
    };
    const result = mergeObjectsAndArrays(obj1, obj2);
    expect(result).toEqual({
      matrix: [
        [10, 20, 3],
        [40, 5, 6],
      ],
    });
  });
});
