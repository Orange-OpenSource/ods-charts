//
// Software Name: Orange Design System Charts
// SPDX-FileCopyrightText: Copyright (c) 2023 - 2025 Orange SA
// SPDX-License-Identifier: MIT
//
// This software is distributed under the MIT license.
//

import 'jasmine';
import { cloneDeepObject } from './clone-deep-object';

describe('cloneDeepObject', () => {
  let value: any;
  beforeEach(() => {
    value = {
      myobj: {
        mystring: 'mystring',
        myboolean: true,
        myobj2: {
          myArray: [
            {
              myElement: 'myElement',
            },
            true,
            'myString',
          ],
        },
      },
    };
  });
  it('should work', () => {
    expect(cloneDeepObject(value)).toEqual(value);
  });
  it('should not change value', () => {
    const value2 = cloneDeepObject(value);
    value2.newField = 'newField';
    value2.myobj.mystring = 'changed';
    value2.myobj.myobj2.myArray.push('added');
    expect(cloneDeepObject(value2)).toEqual({
      newField: 'newField',
      myobj: {
        mystring: 'changed',
        myboolean: true,
        myobj2: {
          myArray: [
            {
              myElement: 'myElement',
            },
            true,
            'myString',
            'added',
          ],
        },
      },
    });
    expect(cloneDeepObject(value)).toEqual({
      myobj: {
        mystring: 'mystring',
        myboolean: true,
        myobj2: {
          myArray: [
            {
              myElement: 'myElement',
            },
            true,
            'myString',
          ],
        },
      },
    });
  });
});
