/*
 *   Copyright (c) 2024 Matthew Allen Rackley
 *   All rights reserved.

 *   Permission is hereby granted, free of charge, to any person obtaining a copy
 *   of this software and associated documentation files (the "Software"), to deal
 *   in the Software without restriction, including without limitation the rights
 *   to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 *   copies of the Software, and to permit persons to whom the Software is
 *   furnished to do so, subject to the following conditions:

 *   The above copyright notice and this permission notice shall be included in all
 *   copies or substantial portions of the Software.

 *   THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 *   IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 *   FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 *   AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 *   LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 *   OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 *   SOFTWARE.
 */

export namespace Util {
  export function getParameters<F extends (...args: any) => any>(func: F): Parameters<F> {
    const funcStr = func.toString();
    const result = funcStr.match(/\(([^)]*)\)/);
    if (result && result[1]) {
      return result[1].split(',').map(param => param.trim()) as Parameters<F>;
    }
    throw new Error(`Error: Either not a valid function passed, or no parameters supplied! Function: ${funcStr}`);
  }
  export function isArray<U, T extends U extends any[] ? U[number] : U>(value: T[] | U): value is T[] {
    return Array.isArray(value);
  }

  export function ifArray<U, R>(value: U, callback: (value: U extends any[] ? U[number] : U) => R): R | R[] {
    if (isArray(value)) {
      const returnArray: R[] = [];
      for (let i = 0; i < value.length; i++) {
        returnArray[i] = callback(value[i]);
      }
      return returnArray as R[];
    } else {
      return callback(value as U extends any[] ? never : U);
    }
  }
}
export const {
  getParameters,
  ifArray,
  isArray
} = Util;

export default Util;
