//
// Software Name: Orange Design System Charts
// SPDX-FileCopyrightText: Copyright (c) 2023 - 2025 Orange SA
// SPDX-License-Identifier: MIT
//
// This software is distributed under the MIT license.
//

import 'jasmine';
import { conditionalCloneDeepObject, lookForPaths } from './conditional-clone-deep-object';

describe('lookForPaths', () => {
  let testedValue: any;
  beforeEach(() => {
    testedValue = {
      myobj: {
        mystring: 'mystring',
        myboolean: true,
        myobj2: {
          myArray: [
            {
              myElement: 'myElement',
              color: 'var(--bs-white)',
            },
            true,
            'myString',
          ],
        },
      },
      colors: ['var(--bs-white)', '#fff'],
      config: {
        color: 'var(--bs-white,"#fff")',
      },
    };
  });
  it('should work', () => {
    expect(lookForPaths(testedValue, (value) => false)).toEqual([]);
  });

  it('should detect paths', () => {
    expect(
      lookForPaths(testedValue, (value) => {
        const regex = /var\(([^,]*),?(.*)\)/g;
        return !!value.match(regex);
      })
    ).toEqual(['myobj.myobj2.myArray[0].color', 'colors[0]', 'config.color']);
  });
});

describe('conditionalCloneDeepObject', () => {
  let testedValue: any;
  beforeEach(() => {
    testedValue = {
      myobj: {
        mystring: 'mystring',
        myboolean: true,
        myobj2: {
          myArray: [
            {
              myElement: 'myElement',
              color: 'var(--bs-white)',
            },
            true,
            'myString',
            {
              myElement: 'mySecondElement',
              color: '#fff',
            },
          ],
        },
        myobj3: {
          myOtherValue: 'myOtherValue',
        },
      },
      colors: ['var(--bs-white)', '#fff'],
      config: {
        color: 'var(--bs-white,"#fff")',

        data: [0, 1, 2, 3, 4],
      },
    };
  });

  it('should work', () => {
    expect(conditionalCloneDeepObject(testedValue, (value) => false)).toEqual(testedValue);
  });

  it('should copy only needed parts', () => {
    const newValue = conditionalCloneDeepObject(testedValue, (value) => {
      const regex = /var\(([^,]*),?(.*)\)/g;
      return !!value.match(regex);
    });

    expect(testedValue).toEqual(newValue);

    newValue.myobj.mystring = '--mystring';
    newValue.myobj.myboolean = false;
    newValue.myobj.myobj2.myArray[0].myElement = '--myElement';
    newValue.myobj.myobj2.myArray[1] = false;
    newValue.myobj.myobj2.myArray[2] = '--myString';
    newValue.myobj.myobj2.myArray[3].myElement = '--mySecondElement';
    newValue.myobj.myobj3.myOtherValue = '--myOtherValue';
    newValue.colors[0] = '--var(--bs-white)';
    newValue.colors[1] = '--#fff';
    newValue.config.color = '--var(--bs-white,"#fff")';
    newValue.config.data[0] = 1;
    newValue.config.data[1] = 2;
    newValue.config.data[2] = 3;
    newValue.config.data[3] = 4;

    expect(newValue).toEqual({
      myobj: {
        mystring: '--mystring',
        myboolean: false,
        myobj2: {
          myArray: [
            {
              myElement: '--myElement',
              color: 'var(--bs-white)',
            },
            false,
            '--myString',
            {
              myElement: '--mySecondElement',
              color: '#fff',
            },
          ],
        },
        myobj3: {
          myOtherValue: '--myOtherValue',
        },
      },
      colors: ['--var(--bs-white)', '--#fff'],
      config: {
        color: '--var(--bs-white,"#fff")',

        data: [1, 2, 3, 4, 4],
      },
    });
    expect(testedValue).toEqual({
      myobj: {
        mystring: 'mystring',
        myboolean: true,
        myobj2: {
          myArray: [
            {
              myElement: 'myElement',
              color: 'var(--bs-white)',
            },
            true,
            'myString',
            {
              myElement: '--mySecondElement', // not copy
              color: '#fff',
            },
          ],
        },
        myobj3: {
          myOtherValue: '--myOtherValue', // not copy
        },
      },
      colors: ['var(--bs-white)', '#fff'], // copy
      config: {
        color: 'var(--bs-white,"#fff")', // copy

        data: [1, 2, 3, 4, 4], // not copy
      },
    });
  });
});
