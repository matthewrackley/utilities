import { AddOneSm, Alphabet, UnionFromArray } from '../types/utilityTypes'
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

export const levels = [
  'critical',
  'error',
  'warn',
  'notice',
  'info',
  'http',
  'verbose',
  'debug',
  'silly',
  'metadata',
] as const
export function deepFreeze<T extends { [x: string]: T }>(object: T): Readonly<T> {
  Object.freeze(object)
  Object.getOwnPropertyNames(object).forEach(prop => {
    if (
      object.hasOwnProperty(prop) &&
      object[prop] !== null &&
      (typeof object[prop] === 'object' || typeof object[prop] === 'function') &&
      !Object.isFrozen(object[prop])
    ) {
      deepFreeze(object[prop])
    }
  })
  return object
}

export const randomString = <N extends number>(length: N) => {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    result += characters[randomIndex];
  }
  return result as unknown as Util.RandomString<N>;
}


export default randomString;
export function randomRealNumber() {
  return Math.floor(Math.random() * 10).toString() as
    | '0'
    | '1'
    | '2'
    | '3'
    | '4'
    | '5'
    | '6'
    | '7'
    | '8'
    | '9'
}

export function sanitizeString(str: string): string {
  return str.replace(/[^\w. ]/gi, function (c) {
    return '&#' + c.charCodeAt(0) + ';'
  })
}
export function safeJsonParse<T, X>(json: X | string): T | null {
  try {
    return JSON.parse(json as string) as T
  } catch (e) {
    return null
  }
}

export const notify = (message: string) => {
  // Log the message to the console as a note
  return console.log(
    `%cNote:%c ${message}`,
    'color: #D7B600; background-color: #48381F; padding: 2px 4px; border-radius: 4px; font-weight: bold;',
    'color: #D7B600; font-weight: bold;'
  ) as void & { __note: typeof console }
}

export function simpleStringJoin<T extends string[]>(...strings: T): Util.SimpleStringJoin<T> {
  return strings.join('') as Util.SimpleStringJoin<T>
}

export function stringJoin<T extends any[][]>(...tuples: T): Util.StringJoin<T> {
  return tuples.reduce((result, tuple) => [...result, ...tuple], []) as Util.StringJoin<T>
}

export function createUnion<T>(object: T) {
  return <V extends keyof T>(keys: V) => {
    //@ts-ignore
    let key = Object.keys(object) as (keyof T)[]
    if (!key.includes(keys)) return
    let values = object[keys]
    return values
  }
}
export function createKeysUnion<T>(object: T) {
  return <V extends T[keyof T]>(values: V) => {
    //@ts-ignore
    let keys = Object.keys(object as T) as (keyof T)[]
    for (let key of keys) {
      if (key in keys && object[key] === values) {
        return key
      }
    }
  }
}
export function getIterableValue<T>(obj: T): T extends Array<infer U> ? U : T[keyof T] {
  if (Array.isArray(obj)) {
    return obj[0] as T extends Array<infer U> ? U : T[keyof T]
  } else {
    //@ts-ignore
    const keys = Object.keys(obj) as (keyof T)[]
    return obj[keys[0]] as T extends Array<infer U> ? U : T[keyof T]
  }
}
export function* objectValuesIterator<T>(obj: { [key: string]: T }) {
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      yield obj[key]
    }
  }
}
export function* objectKeysIterator<T>(obj: { [key: string]: T }) {
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      yield key
    }
  }
}
export function* arrayIterator<T>(array: T[]) {
  for (const item of array) {
    if (array.includes(item)) {
      yield item
    }
  }
}
export function* mapIterator<T, K>(map: Map<T, K>) {
  for (const key of map.keys()) {
    if (map.has(key)) {
      yield map.get(key)
    }
  }
}
export function* mapKeysIterator<T, K>(map: Map<T, K>) {
  for (const key of map.keys()) {
    if (map.has(key)) {
      ;``
      yield key
    }
  }
}
export function* mapValuesIterator<T, K>(map: Map<T, K>) {
  for (const key of map.keys()) {
    for (const value of map.values()) {
      if (map.has(key)) {
        yield value
      }
    }
  }
}

export function* setIterator<T>(set: Set<T>) {
  for (const item of set) {
    if (set.has(item)) {
      yield item
    }
  }
}
export function* setGenerator<T>(array: T[]) {
  const set = new Set(array)
  for (const item of set) {
    if (set.has(item)) {
      yield item
    }
  }
}

export const makeInverted: Util.MakeInverted = (invertable, searchFor?) => {
  let inverted = {} as Util.InvertedObject<typeof invertable>
  for (const key in invertable) {
    if (invertable.hasOwnProperty(key)) {
      const values = invertable[key]
      for (const value of values) {
        inverted = {
          [value]: key,
        } as typeof inverted
      }
    }
  }
  if (Object.keys(inverted as any).includes(searchFor as any))
    return inverted[searchFor as NonNullable<typeof searchFor>] as Util.InvObjHelper<
      typeof invertable,
      typeof searchFor
    >
  return inverted as Util.InvObjHelper<typeof invertable, typeof searchFor>
}


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
export const reverseLookup: Util.ReverseLookup = <
  O extends { [K in keyof O]: [A, ...A[]] },
  Findable extends keyof Util.InvertedObject<O> | undefined = undefined,
  A extends O[keyof O] extends (infer U extends string)[] ? U : never = Util.ArrayLiteral<O>,
>(
  o: O,
  selectedValue: Findable = undefined as Findable
): Findable extends undefined ? Util.InvertedObject<O> : Util.InvertedObject<O, Findable> => {
  var invObj = {} as Util.InvertedObject<O>
  let result: any
  for (const k in o) {
    if (o.hasOwnProperty(k)) {
      for (const v of o[k]) {
        invObj = {
          ...invObj,
          [v]: k as keyof O,
        } as typeof invObj
      }
    }
  }
  if (!selectedValue || selectedValue === undefined) {
    result = invObj
  } else if (selectedValue && selectedValue !== undefined) {
    if (selectedValue === undefined) return null as never
    for (let key of Object.keys(invObj as any)) {
      if (key === selectedValue) {
        result = invObj[
          selectedValue as Findable extends keyof typeof invObj ? Findable : never
        ] as NonNullable<(typeof invObj)[Findable extends keyof typeof invObj ? Findable : never]>
      }
    }
  }
  return result as Findable extends undefined
    ? Util.InvertedObject<O>
    : Util.InvertedObject<O, Findable>
}

export function isString<
  O extends { [K in keyof O]: Util.TupleLiteral<O> },
  A extends Util.TupleLiteral<O>[number] | undefined, //@ts=ignore
  I extends {
    [Key in keyof O as A extends Util.TupleLiteral<O>[number]
      ? A
      : Util.TupleLiteral<O>[number]]: Key
  },
>(object: I, key?: A): key is A {
  return object && typeof object !== 'object' && typeof object === 'string'
}
export function isObject<
  O extends { [K in keyof O]: [A, ...A[]] } = { [K in keyof object]: Array<string> },
  A extends O[keyof O] extends Array<infer U extends string> ? U : never = O[keyof O] extends Array<
    infer U extends string
  >
    ? U
    : never, //[...(infer U extends string)[number][]] ? U : never,
  I = { [Key in keyof O as A extends O[Key][number] ? A : never]: Key },
>(object: I): object is I {
  if (!object || object === null) return false
  if (typeof object !== 'object') return false
  if (!(Object.keys(object) as (keyof O)[]).every((key): key is keyof O => typeof key === 'string'))
    return false
  if (
    !(Object.values(object) as O[keyof O][]).every(
      (value): value is O[keyof O] => typeof value === 'string'
    )
  )
    return false
  return (object as I) && typeof object === 'object'
}
/**
 * @type CreateObject
 * @description Creates an object from a tuple of key value pairs
 * @param params - A tuple of key value pairs --- Should be an object passed in
 * @returns An object with the keys and values from the tuple as a literal type
 */
export type CreateObject = typeof createObject
export type CustomObject<T extends { [K in keyof T]: T[K] }> = ReturnType<typeof createObject<T>>
/**
 * @function createObject<T>
 * @type CreateObject
 * @description Creates an object from a tuple of key value pairs
 * @param {[T]} params - A tuple of key value pairs --- Should be an object passed in
 * @returns An object with the keys and values from the tuple as a literal type
 */
export function createObject<
  T extends {
    [K in keyof T]: T[K] extends Array<infer V extends string | number | symbol> //@ts-ignore
      ? [...(V extends T[K][number] ? V : never)]
      : T[K] extends infer F extends Function
        ? F
        : T[K] extends object
          ? {
              [Key in keyof T[K]]: T[K][Key] extends infer V extends string | number | symbol
                ? V
                : never
            }
          : never
  },
>(...params: [T]) {
  let obj = {} as { [K in keyof T]: T[K] }
  for (const [k, v] of Object.entries(params)) {
    //@ts-ignore
    obj[k] = v
  }
  return obj
}

export const options: Intl.DateTimeFormatOptions = {
  year: 'numeric',
  month: '2-digit',
  day: '2-digit',
  hour: '2-digit',
  minute: '2-digit',
  second: '2-digit',
  timeZoneName: 'short'
}
export const optionsTime: Intl.DateTimeFormatOptions = {
  hour: '2-digit',
  minute: '2-digit',
  second: '2-digit',
  timeZoneName: 'short'
}
export const optionsDate: Intl.DateTimeFormatOptions = {
  year: 'numeric',
  month: '2-digit',
  day: '2-digit'
}

export function capitalize(word: string) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}

export const dateTimeFormatter = new Intl.DateTimeFormat('en-us', options);
export const dateFormatter = new Intl.DateTimeFormat('en-us', optionsDate);
export const timeFormatter = new Intl.DateTimeFormat('en-us', optionsTime);

export function keyMapper<T>(object: T, type: 'keys' | 'values') {
  if (type !== 'keys' && type !== 'values') return
  let returnFunc =
    type === 'keys'
      ? (createUnion<T>(object) as ReturnType<typeof createUnion<T>>)
      : type === 'values'
        ? createKeysUnion<T>(object)
        : (undefined as never)
  return returnFunc as typeof type extends 'keys'
    ? ReturnType<typeof createUnion<T>>
    : ReturnType<typeof createKeysUnion<T>>
}

export const NBSP = (isHTML: boolean = false): Util.NBSP => (isHTML ? '&nbsp;' : '\u00A0')
export const Hyphen = (
  isHTML?: boolean,
  type?: 'S' | 'M' | 'L' | 'XL' | 'XXL' | 'XXXL'
): Util.Hyphen => {
  if (isHTML) {
    return '&#8209;'
  } else {
    switch (type) {
      case 'S':
        return '\u2010'
      case 'L':
        return '\u2012'
      case 'XL':
        return '\u2013'
      case 'XXL':
        return '\u2014'
      case 'XXXL':
        return '\u2015'
      case 'M':
      default:
        return '\u2011'
    }
  }
}
export type TuplesFromObject<T> = {
  [K in keyof T]: [K, T[K]]
}[keyof T]
