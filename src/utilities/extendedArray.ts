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

const getVal = <P extends PrimType>(): GetVal<P> => {
  function getVal<R extends P, A extends [validator: (value: P) => value is R, ...values: P[]] | P[]>(this: ExtendedArray<P>, ...values: A[0] extends ((value: P) => value is R) ? [validator?: ((value: P) => value is R), ...values: P[]] : A): A[0] extends ((value: P) => value is R) ? (R | null) : P;
  function getVal<R extends P, A extends [validator: (value: P) => value is R, ...values: P[]] | P[]>(this: ExtendedArray<P>, validator: (value: P) => R, ...values: P[]): R | null;
  function getVal<R extends P, A extends [validator: (value: P) => value is R, ...values: P[]] | P[]>(this: ExtendedArray<P>, ...values: P[]): P;
  function getVal(this: ExtendedArray<P>, ...args: any){
    const value = this[this.findIndex((v): v is P => args.includes(v)) + 1];
    const values = args as [<R extends P>(value: P) => value is R, ...P[]] | P[];
    const validator = values.pop() as typeof values[number];
    if (validator instanceof Function) {
      if (validator(value)) {
        return value as typeof values[0] extends ((value: any) => value is infer RT) ? RT : never;
      } else {
        return null as typeof values[0] extends ((value: any) => value is infer RT) ? null : never;
      }
    } else {
      values.push(validator);
      return value as P;
    }
  };
  return getVal as any;
}
export class ExtendedArray<P extends PrimType> extends Array<P> implements Util.ArrayExtension<P> {
  constructor(...items: P[]) {
    super(...items)
  }

  exists: ExtendedExists<P> = function (...values): this is (typeof values[number] | P)[] {
    const bools = [false];
    for (let i = 0; i < values.length; i++) {
      bools[i] = this.includes(values[i] as P);
    }
    return bools.includes(true);
  }
  isVal: ExtendedIsVal<P> = function (value, ...searchValues): value is typeof searchValues[number] {
    return this.some(val => searchValues.includes(val)) && searchValues.includes(value);
  }
  nextVal: ExtendedSibling<P> = function (value, validator) {
    const val = this[this.findIndex((p) => p === value) + 1];
    if (validator && validator(val)) return val;
    return val as any;
  }
  prevVal: ExtendedSibling<P> = function (value, validator) {
    const val = this[this.findIndex((p) => p === value) - 1];
    if (validator && validator(val)) return val;
    return val as any;
  }
  curIndex: ExtendedIndex<P> = function (value: P) {
    return this.findIndex((p) => p === value);
  }

  getVal: GetVal<P> = getVal();
  iStartsWith: ExtendedWith<P> = function (index, searchString, atPosition): boolean {
    let value = this.at(index) && typeof this.at(index) === 'string' ? this.at(index)! as P & string : null;
    return value ? value.startsWith(searchString, atPosition) : false;
  }
  iEndsWith: ExtendedWith<P> = function (index, searchString, atPosition): boolean {
    let value = this.at(index) && typeof this.at(index) === 'string' ? this.at(index)! as P & string : null;
    return value ? value.endsWith(searchString, atPosition) : false;
  }
  includes: ExtendedIncludes<P> = Array.prototype.includes as ExtendedIncludes<P>;
};
export default ExtendedArray;
