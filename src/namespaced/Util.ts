/**
 *   Copyright (c) 2023 Matthew Allen Rackley
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

/**
 * @file Util.ts
 * @description
 * @author Matthew Allen Rackley
 * @copyright [Matthew Rackley's Github](https://www.github.com/matthewrackley "Matthew Rackley on github.com")
 */

export namespace Util {
  export const levels = ['critical', 'error', 'warn', 'notice', 'info', 'http', 'verbose', 'debug',
    'silly', 'metadata'] as const;
  type Levels = typeof levels extends readonly [...infer U] ? U : never;
  export function deepFreeze<T extends { [x: string]: T }>(object: T): Readonly<T> {
    Object.freeze(object);
    Object.getOwnPropertyNames(object).forEach((prop) => {
      if (object.hasOwnProperty(prop)
        && object[prop] !== null
        && (typeof object[prop] === "object" || typeof object[prop] === "function")
        && !Object.isFrozen(object[prop])) {
        deepFreeze(object[prop]);
      }
    });
    return object;
  }

  export interface RandomString<N extends number> extends String { readonly length: N };
  export const randomString = <N extends number>(length: N) => {
    const randomString = new String(Math.random().toString(36).substring(2, length + 2)) as RandomString<typeof length>;
    return randomString;
  }

  export function randomRealNumber() {
    return Math.floor(Math.random() * 10).toString() as '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9';
  }

  export function sanitizeString(str: string): string {
    return str.replace(/[^\w. ]/gi, function (c) {
      return '&#' + c.charCodeAt(0) + ';';
    });
  }
  export function safeJsonParse<T, X>(json: X | string): T | null {
    try {
      return JSON.parse(json as string) as T;
    } catch (e) {
      return null;
    }
  }

  export const notify: DevNote = (message) => {
    // Log the message to the console as a note
    return (() => console.log(`%cNote:%c ${message}`, 'color: #D7B600; background-color: #48381F; padding: 2px 4px; border-radius: 4px; font-weight: bold;', 'color: #D7B600; font-weight: bold;'))() as void & typeof message;
  }
  export type SimpleStringJoin<T extends string[]> = T extends [infer First extends string, ...infer Rest extends string[]]
    ? `${First}${Rest extends [] ? '' : SimpleStringJoin<Rest>}`
    : '';
  export function simpleStringJoin<T extends string[]>(...strings: T): SimpleStringJoin<T> {
    return strings.join('') as SimpleStringJoin<T>;
  }
  export type StringJoin<T extends any[][]> = T extends [infer First extends any[], ...infer Rest extends any[][]]
    ? [...First, ...Rest extends [] ? [] : StringJoin<Rest>]
    : [];
  export function stringJoin<T extends any[][]>(...tuples: T): StringJoin<T> {
    return tuples.reduce((result, tuple) => [...result, ...tuple], []) as StringJoin<T>;
  }

  export function createUnion<T>(object: T) {
    return (<V extends keyof T>(keys: V) => {
      //@ts-ignore
      let key = Object.keys(object) as (keyof T)[];
      if (!key.includes(keys)) return;
      let values = object[keys];
      return values;
    });
  }
  export function createKeysUnion<T>(object: T) {
    return (<V extends T[keyof T]>(values: V) => {
      //@ts-ignore
      let keys = Object.keys(object as T) as (keyof T)[];
      for (let key of keys) {
        if (key in keys && object[key] === values) {
          return key;
        }
      }
    });
  }
  export function getIterableValue<T>(obj: T): T extends Array<infer U> ? U : T[keyof T] {
    if (Array.isArray(obj)) {
      return obj[0] as T extends Array<infer U> ? U : T[keyof T];
    } else {
      //@ts-ignore
      const keys = Object.keys(obj) as (keyof T)[];
      return obj[keys[0]] as T extends Array<infer U> ? U : T[keyof T];
    }
  }
  export function* objectValuesIterator<T>(obj: { [key: string]: T }) {
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        yield obj[key];
      }
    }
  }
  export function* objectKeysIterator<T>(obj: { [key: string]: T }) {
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        yield key;
      }
    }
  }
  export function* arrayIterator<T>(array: T[]) {
    for (const item of array) {
      if (array.includes(item)) {
        yield item;
      }
    }
  }
  export function* mapIterator<T, K>(map: Map<T, K>) {
    for (const key of map.keys()) {
      if (map.has(key)) {
        yield map.get(key);
      }
    }
  }
  export function* mapKeysIterator<T, K>(map: Map<T, K>) {
    for (const key of map.keys()) {
      if (map.has(key)) {
        ``
        yield key;
      }
    }
  }
  export function* mapValuesIterator<T, K>(map: Map<T, K>) {

    for (const key of map.keys()) {
      for (const value of map.values()) {
        if (map.has(key)) {
          yield value;
        }
      }
    }
  }

  export function* setIterator<T>(set: Set<T>) {
    for (const item of set) {
      if (set.has(item)) {
        yield item;
      }
    }
  }
  export function* setGenerator<T>(array: T[]) {
    const set = new Set(array);
    for (const item of set) {
      if (set.has(item)) {
        yield item;
      }
    }
  }
  export type ReverseLookup = typeof reverseLookup;
  /**
   * @function reverseLookup - Takes and inverts an object with an array of values.
   * @type ReverseLookup
   * @description Takes an object with an array of values and returns an object
   *  with the values as keys and the keys as values. If a value is passed in,
   *  it will return the key that matches the value.
   * @param {O} o - An object with an array of values
   * @param {Findable} selectedValue - An optional value to find in the object
   * @returns {{ [Key in keyof O as Findable extends O[Key][number] ? Findable : never]:
   * Key; } | keyof O} - An object with keys as values and values as keys
   */
  export function reverseLookup<
    O extends { [K in keyof O]: [A, ...A[]] },
    A extends O[keyof O] extends Array<infer U extends string> ? U : never,//[...(infer U extends string)[number][]] ? U : never,
    Findable extends A
  >(o: O, selectedValue?: Findable | undefined) {
    const invObj = {} as { [Key in keyof O as Findable extends O[Key][number] ? Findable : never]: Key };
    let returnVal = {} as unknown;
    for (const key in o) {
      if (o.hasOwnProperty(key)) {
        const valuesArray = o[key];
        for (const value of valuesArray) {
          invObj[value as A & keyof typeof invObj] = key as unknown as typeof invObj[A & keyof typeof invObj];
        }
      }
    }
    let bool: ReturnType<typeof isString<typeof returnVal, O, A, typeof invObj>> | ReturnType<typeof isObject>;
    const getValue = () => {
      let isS: true | undefined; isS = typeof returnVal === 'string';
      let isO: true | undefined; isO = typeof returnVal === 'object';
      if (!selectedValue || selectedValue === undefined) {
        bool = isObject<O, A, typeof invObj>(returnVal = invObj);
      } else if (selectedValue && selectedValue !== undefined) {
        if (selectedValue === undefined) return null as never;
        for (let key of Object.keys(invObj)) {
          if (key === selectedValue) {
            returnVal = invObj[selectedValue as Findable & keyof typeof invObj];
            isString<typeof returnVal, O, A, typeof invObj>(invObj, returnVal = invObj[selectedValue as Findable & keyof typeof invObj]);
          }
        }
      }//@ts-ignore

      if (isS) {
        return returnVal;
      } else if (isObject) {
        return returnVal;
      } else {
        throw new Error('The return value is not a string or an object');
      }
    }
    const value = getValue();
    if (!value) return null as never;
    return value;
  }
  function isString<
    O extends { [K in keyof O]: [A, ...A[]] },
    A extends O[keyof O] extends Array<infer U extends string> ? U : never,//[...(infer U extends string)[number][]] ? U : never,
    I extends { [Key in keyof O as A extends O[Key][number] ? A : never]: Key; },
    Value,
  >(object: I, key?: Value): key is Value {
    return object && typeof object !== 'object' && typeof object === 'string';
  }
  function isObject<
    O extends { [K in keyof O]: [A, ...A[]] } = { [K in keyof object]: Array<string> },
    A extends O[keyof O] extends Array<infer U extends string> ? U : never = O[keyof O] extends Array<infer U extends string> ? U : never,//[...(infer U extends string)[number][]] ? U : never,
    I = { [Key in keyof O as A extends O[Key][number] ? A : never]: Key; },
  >(object: I): object is I {
    if (!object || object === null) return false;
    if (typeof object !== 'object') return false;
    if (!((Object.keys(object) as (keyof O)[]).every((key): key is keyof O => typeof key === 'string'))) return false;
    if (!((Object.values(object) as O[keyof O][]).every((value): value is O[keyof O] => typeof value === 'string'))) return false;
    return object as I && typeof object === 'object';
  }
  const val = reverseLookup({ a: ['c', 'val', 'cars'], b: ['d'] }, 'd');
  /**
   * @type CreateObject
   * @description Creates an object from a tuple of key value pairs
   * @param params - A tuple of key value pairs --- Should be an object passed in
   * @returns An object with the keys and values from the tuple as a literal type
   */
  export type CreateObject = typeof createObject;
  export type CustomObject<T extends { [K in keyof T]: T[K] }> = ReturnType<typeof createObject<T>>;
  /**
   * @function createObject<T>
   * @type CreateObject
   * @description Creates an object from a tuple of key value pairs
   * @param {[T]} params - A tuple of key value pairs --- Should be an object passed in
   * @returns An object with the keys and values from the tuple as a literal type
   */
  export function createObject<
    T extends {
      [K in keyof T]: T[K] extends Array<infer V extends string | number | symbol>//@ts-ignore
      ? [...V extends T[K][number] ? V : never]
      : T[K] extends infer F extends Function ? S
      : T[K] extends object
      ? { [Key in keyof T[K]]: T[K][Key] extends infer V extends string | number | symbol ? V : never }
      : never
    }
  >(...params: [T]) {
    let obj = {} as { [K in keyof T]: T[K] };
    for (const [k, v] of Object.entries(params)) {//@ts-ignore
      obj[k] = v;
    }
    return obj;
  }

  export function keyMapper<T>(object: T, type: 'keys' | 'values') {
    if (type !== 'keys' && type !== 'values') return;
    let returnFunc = (type === 'keys') ? createUnion<T>(object) as ReturnType<typeof createUnion<T>> : (type === 'values') ? createKeysUnion<T>(object) : undefined as never;
    return returnFunc as typeof type extends 'keys' ? ReturnType<typeof createUnion<T>> : ReturnType<typeof createKeysUnion<T>>;
  };
  export type NBSP = '\u00A0' | '&nbsp;';
  export type Hyphen = '\u2010' | '\u2011' | '\u2012' | '\u2013' | '\u2014' | '\u2015' | '&#8209;';
  export const NBSP = (isHTML: boolean = false): NBSP => isHTML ? '&nbsp;' : '\u00A0';
  export const Hyphen = (isHTML?: boolean, type?: 'S' | 'M' | 'L' | 'XL' | 'XXL' | 'XXXL'): Hyphen => {
    if (isHTML) {
      return '&#8209;'
    } else {
      switch (type) {
        case 'S':
          return '\u2010';
        case 'M':
          return '\u2011';
        case 'L':
          return '\u2012';
        case 'XL':
          return '\u2013';
        case 'XXL':
          return '\u2014';
        case 'XXXL':
          return '\u2015';
        default:
          return '\u2011';
      }
    }
  }
  export type TuplesFromObject<T> = {
    [K in keyof T]: [K, T[K]];
  }[keyof T];
}
export type SimpleStringJoin<T extends string[]> = Util.SimpleStringJoin<T>;
export type StringJoin<T extends any[][]> = Util.StringJoin<T>;
export type RandomString<N extends number> = Util.RandomString<N>;

export const {
  levels,
  Hyphen,
  NBSP,
  createUnion,
  createKeysUnion,
  keyMapper,
  stringJoin,
  getIterableValue,
  deepFreeze,
  randomRealNumber,
  safeJsonParse,
  sanitizeString,
  notify,
  randomString,
  simpleStringJoin,
  reverseLookup,
  createObject, w
} = Util;
export default Util;
