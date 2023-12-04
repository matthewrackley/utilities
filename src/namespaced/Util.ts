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
  export type DeepFreeze<T> = T extends (infer U)[]
    ? DeepFreezeArray<U>
    : T extends object
    ? DeepFreezeObject<T>
    : T;
  export interface RandomString<N extends number> extends String { readonly length: N };
  export const randomString = <N extends number>(length: N) => {
    const randomString = new String(Math.random().toString(36).substring(2, length + 2)) as RandomString<typeof length>;
    return randomString;
  }
  export interface DeepFreezeArray<T> extends ReadonlyArray<DeepFreeze<T>> { }

  export type DeepFreezeObject<T> = {
    readonly [P in keyof T]: DeepFreeze<T[P]>;
  };

  export type DeepReadonly<T> = {
    readonly [P in keyof T]: DeepReadonly<T[P]>;
  };

  export type DeepFreezeRecursive<T> = DeepReadonly<DeepFreeze<T>>;
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
  export type UnionFromArray<T> = Extract<T, Array<string>>[number] | Extract<T, string>;
  export type ArrayUnion<T> = Extract<T, Array<string>>;
  export type DevNote = <T extends string>(message: T extends string ? T : never) => void & typeof message;
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
  export type MutableType<T> = {
    [K in keyof T]: T[K] extends ReadonlyArray<infer U> ? [...U[]] : T[K] extends ReadonlyMap<infer K, infer V> ? Map<K, V> : T[K] extends ReadonlySet<infer V> ? Set<V> : T[K] extends object ? MutableType<T[K]> : T[K];
  };
  type ObjectOf<T, K extends keyof T> = { [key in K]: T[key] };
  type ValueOf<T> = T[keyof T];
  type ReturnArray<K extends keyof T, T> = <V extends T[K]>(ind: K) => [keys: K, values: V];
  type CreateUnion<K extends keyof T, V extends T[K], T extends ObjectOf<T, K>> = (array: T) => <V extends T[keyof T]>(index: K) => [keys: K, values: V];
  type IndexByType<T, K extends keyof T> = <V extends T[keyof T]>(ind: K) => [keys: K, values: V];
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
      if (map.has(key)) {``
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

export type MutableType<T> = Util.MutableType<T>;
export type DeepFreezeRecursive<T> = Util.DeepFreezeRecursive<T>;
export type DeepFreeze<T> = Util.DeepFreeze<T>;
export type DeepReadonly<T> = Util.DeepReadonly<T>;
export type UnionFromArray<T> = Util.UnionFromArray<T>;
export type ArrayUnion<T> = Util.ArrayUnion<T>;
export type DevNote = Util.DevNote;
export type SimpleStringJoin<T extends string[]> = Util.SimpleStringJoin<T>;
export type StringJoin<T extends any[][]> = Util.StringJoin<T>;
export type Mutable<T> = Util.MutableType<T>;
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
} = Util;
export default Util;
