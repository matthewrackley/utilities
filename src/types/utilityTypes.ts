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

/**
 * @file utilityTypes.ts
 * @description
 * @author Matthew Allen Rackley
 * @copyright [Matthew Rackley's Github](https://www.github.com/matthewrackley "Matthew Rackley on github.com")
 */
export namespace Util {
  export type LiteralTypes = (string | number | symbol | boolean | object | [LiteralTypes, ...LiteralTypes[]]) |
  [(string | number | symbol | boolean | object | LiteralTypes), ...(string | number | symbol | boolean | object | LiteralTypes)[]];
  export type LiteralStrings = (string | number | boolean | null);
  export type LiteralTypesO<T = any> = (string | number | symbol | boolean | { [K in keyof T]: T[K] extends LiteralTypesO<T[K]> ? T[K] : never }) | [(string | number | symbol | boolean | { [K in keyof T]: T[K] extends LiteralTypesO<T[K]> ? T[K] : never })[], ...(string | number | symbol | boolean | { [K in keyof T]: T[K] extends LiteralTypesO<T[K]> ? T[K] : never })[]];
  export interface StringLike<N extends String['length']> extends String {
    readonly length: N;
  };
  var stringLike: StringLike<any>;
  export type DataType = 'User' | 'Zone' | 'Date' | 'RegExp' | 'Error' | 'Promise' | 'DataView' | 'Math' | 'JSON' | 'Promise';
  //@ts-ignore
  export type InverseMapping<T extends { [K in keyof T]: T[K] }> = { [Key in keyof T]: { [K in (T[Key][number] | T[Key]) as K extends string ? K : never]: Key } }[keyof T];
  //@ts-ignore
  export type InverseObject<T extends { [K in keyof T]: T[K] }> = {
    [K in keyof T as T[K] extends T[K][keyof T[K]][] ? T[K][number] : T[K]]: K
  };
  export type GetProperty<T extends object, K extends keyof T> = T[K];
  export type RemoveProperty<T extends object, K extends keyof T> = Omit<T, K>;

  export type Interpolate<Segments extends any[]> = Segments extends [infer First, ...infer Rest]
    ? First extends string
    ? Rest extends string[]
    ? `${First}${Interpolate<Rest>}`
    : never
    : never
    : '';
  export type InterpolateBySep<Segments extends any[], Separator extends string> = Segments extends [infer First, ...infer Rest]
    ? First extends string
    ? Rest extends any[]
    ? `${First}${Rest['length'] extends 0 ? '' : Separator}${InterpolateBySep<Rest, Separator>}`
    : never
    : never
    : '';
  export type SeparatorInterpolation<
    Values extends string[],
    Separators extends string[],
    Previous extends string = ''
  > = Values extends [infer Current extends string, ...infer RemainingValues extends string[]]
    ? Separators extends [infer CurrentSeparator extends string, ...infer RemainingSeparators extends string[]]
    ? SeparatorInterpolation<RemainingValues, RemainingSeparators, `${Previous}${Current}${CurrentSeparator}`>
    : `${Previous}${Current}`
    : Previous;


  /**
   * @type {ArrayToString<A extends string[] | readonly string[], D extends string, P extends string = ''>} ArrayToString - Converts an array of strings to a string.
   * @param {A extends string[] | readonly string[]} A - The array to convert.
   * @param {D extends string} D - The seperator to join the array with.
   * @param {P extends string} [P=''] - The string to prepend to the array. Should be left blank.
   * @returns {ArrayToString<A, D, P>} The joined array.
   */
  export type ArrayToString<A extends string[] | readonly string[], D extends string, P extends string = ''> =
    A extends [infer F extends string, ...infer R extends string[]] | readonly [infer F extends string, ...infer R extends string[]]
    ? ArrayToString<R, D, `${P}${P extends '' ? '' : D}${F}`>
    : P;
  /**
   * @type {Opaque<Type, Token>} Opaque - Creates an opaque type.
   * An opaque type is a type that is a subtype of another type, but is not assignable to it.
   * This is useful for creating types that are not assignable to each other, but are the same type.
   * For example, you can use this type to mask a template literal
   * @param {Type} Type - The type to make opaque.
   * @param {Token} [Token=unknown] - The token to make the type opaque with.
   * @returns {Opaque<Type, Token>} The opaque type.
   */
  export type Opaque<Type, Token = unknown> = Type & { readonly __opaque__: Token };
  /**
   * @type {Join} Join - Joins an array of strings with a seperator, functionally can
   * replace the Array.prototype.join method.
   * @param {D} seperator - The seperator to join the array with.
   * @param {A} [array] - The array to join.
   * @returns {ArrayToString<A, D>} The joined array.
   */
  export type Join = <A extends string[] | readonly string[], D extends string | '' = ''>(array: A | [...A], seperator?: D) => ArrayToString<A, D>;
  /**
   * @constant {Join} joinArray - Joins an array of strings with a seperator, functionally can
   * replace the Array.prototype.join method.
   * @param {A | [...A]} [array] - The array to join.
   * @param {D | undefined} seperator - The seperator to join the array with.
   */
  export const joinArray: Join = function joinArray(array, seperator = '' as any) {
    let str = '' as any;
    if (seperator === undefined) seperator = '' as typeof seperator;
    (array as NonNullable<typeof array>).forEach((value, index) => {
      if (index < (array as NonNullable<typeof array>).length) {
        str += value;
      }
      if (index < (array as NonNullable<typeof array>).length - 1) {
        str += seperator;
      }
    });
    return str as ArrayToString<typeof array, NonNullable<typeof seperator>>;
  }
  export type RemoveChar<S extends string, C extends string> = S extends `${infer F}${C}${infer R}` ? RemoveChar<`${F}${R}`, C> : S;
  export type RemoveChars<S extends string[], C extends string> = {
    [K in keyof S]: RemoveChar<S[K], C>;
  };
  export type RemoveCharacter = typeof removeChar;
  export function removeChar<S extends string, C extends string>(str: S, char: C): RemoveChar<S, C> {
    const val = split(str);
    const arr = [...val].filter((c): c is typeof c => c !== char);
    const newStr = joinArray([...arr], '');
    return newStr as RemoveChar<S, C>;
  }

  export type FilterNever<T> = {
    [K in keyof T as T[K] extends never ? never : K]: T[K];
  };
  export type FilterNestedNever<T> = {
    [K in keyof T]: {
      [P in keyof T[K]as T[K][P] extends never ? never : P]: T[K][P];
    }
  };
  export type FilterNeverWithDepth<T, Depth extends number> = {
    [K in keyof T]: Depth extends 0
    ? T[K]
    : T[K] extends object
    ? FilterNeverWithDepth<T[K], Subtract<Depth>>
    : T[K] extends never
    ? never
    : T[K];
  };

  export type CapitalizeStrings<T> = {
    [K in keyof T]: string;
  };
  export type MakeNormal<T> = T extends Readonly<T> | { readonly [x in any]: any }[keyof T] ? T | { -readonly [x in any]: any } : never;
  export type TypePlusParameter<Type, Param> = Type extends TypeParameter<Param> ? Type : never;
  export type TypeParameter<T> = T extends infer U ? U : never;
  export type UppercaseArray<T extends string[]> = {
    [K in keyof T]: T[K] extends string ? Uppercase<T[K]> : never;
  };
  export type LowercaseArray<T extends string[]> = {
    [K in keyof T]: T[K] extends string ? Lowercase<T[K]> : never;
  };
  export interface NumericalArray<T extends number[]> extends Array<T[number]> {
    readonly length: T[number];
    [index: number]: T[number];
  }
  export type MultiCase<T extends string> = Uppercase<T> | Lowercase<T>;
  export type AlphaNumeric<T extends string> = T extends `${infer F extends string}${infer R extends string}`
    ? (F extends AlphaNumericUnion ? `${F}${AlphaNumeric<R>}` : never)
    : T;
  export function isAlphaNumeric<N extends string>(str: Util.AlphaNumeric<N>): str is Util.AlphaNumeric<N> {
    return /[a-zA-Z0-9\-\_\.]+/.test(str)
  }
  export type AlphaNumericUnion = Split<Alphabet>[number] | Split<'0123456789'>[number] | '.' | '-';
  export type Alphabet = MultiCase<'abcdefghijklmnopqrstuvwxyz'>;
  export type Split<S extends string> = ReturnType<typeof split<S>>;
  export type SplitString = <S extends string, D extends string = "">(stringToSplit: S, separator?: D) => StringToArray<S, D>;
  /**
   * @constant {SplitString} split - Splits a string into an array of its characters.
   * @param {S} stringToSplit - The string to split into an array of characters.
   * @param {D} [separator=''] - The seperator to split the string with. Defaults to an empty string.
   * @returns {StringToArray<S, D>} The array of characters.
   */
  export const split: SplitString = (stringToSplit, separator) => {
    if (!separator) separator = '' as typeof separator;
    if (typeof separator !== 'string') throw new TypeError('The separator must be a string.');
    return stringToSplit.split(separator) as StringToArray<typeof stringToSplit, typeof separator>;
  };
  export type StringToArray<S extends string, D extends string> =
    S extends '' ? [] :
    S extends `${infer F}${D}${infer R}` ? [F, ...StringToArray<R, D>] :
    [S];

  export function add<N extends number>(num: N) {
    const val = `${num + 1}` as const;
    return (num + 1) as typeof num extends infer N extends number
      ? `${N}` extends `${infer N3 extends 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8}`
      ? ParseInt<`${Util.SimpleMath<N3>}`>
      : `${N}` extends `${infer N3 extends 9}`
      ? 10
      : `${N}` extends `${infer N3 extends Util.BelowTen}${infer N2 extends 0 | Util.BelowTen}`
      ? `${N3}${N2}` extends `${99}`
      ? 100
      : ParseInt<`${N2 extends 9 ? Util.SimpleMath<N3> : N3}${Util.SimpleMath<N2>}`>
      : `${N}` extends `${infer N3 extends Util.BelowTen}${infer N2 extends 0 | Util.BelowTen}${infer N1 extends 0 | Util.BelowTen}`
      ? ParseInt<`${N1 extends 9 ? N2 extends 9 ? Util.SimpleMath<N3> : N3 : N3}${N1 extends 9 ? Util.SimpleMath<N2> : N2}${Util.SimpleMath<N1>}`>
      : never
      : never;
  }
  export type AddLater<N extends number = 99> = N extends number ? AddOneSm<N> : never;

  export type Add<A extends number> = A extends infer N extends number
    ? `${N}` extends `${infer N3 extends 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8}`
      ? ParseInt<`${Util.SimpleMath<N3>}`>
    : `${N}` extends `${infer N3 extends 9}`
      ? 10
    : `${N}` extends `${infer N3 extends Util.BelowTen}${infer N2 extends 0 | Util.BelowTen}`
      ? `${N3}${N2}` extends `${99}`
        ? 100
      : ParseInt<`${N2 extends 9 ? Util.SimpleMath<N3> : N3}${Util.SimpleMath<N2>}`>
    : `${N}` extends `${infer N3 extends Util.BelowTen}${infer N2 extends 0 | Util.BelowTen}${infer N1 extends 0 | Util.BelowTen}`
      ? ParseInt<`${N1 extends 9 ? N2 extends 9 ? Util.SimpleMath<N3> : N3 : N3}${N1 extends 9 ? Util.SimpleMath<N2> : N2}${Util.SimpleMath<N1>}`>
    : never
  : never;

  export type Subtract<A extends number> = A extends infer N extends number
    ? `${N}` extends `${infer N3 extends 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9}`
      ? ParseInt<`${Util.SimpleMath<N3, '-'>}`>
    : `${N}` extends `${infer N3 extends 1}`
      ? 0
    : `${N}` extends `${infer N3 extends Util.BelowTen}${infer N2 extends 0 | Util.BelowTen}`
      ? `${N3}${N2}` extends `${10}`
        ? 9
      : ParseInt<`${N2 extends 0 ? Util.SimpleMath<N3, '-'> : N3}${Util.SimpleMath<N2, '-'>}`>
    : `${N}` extends `${infer N3 extends Util.BelowTen}${infer N2 extends 0 | Util.BelowTen}${infer N1 extends 0 | Util.BelowTen}`
      ? `${N3}${N2}${N1}` extends `${100}`
        ? 99
      : ParseInt<`${N1 extends 0 ? N2 extends 0 ? Util.SimpleMath<N3, '-'> : N3 : N3}${N1 extends 0 ? Util.SimpleMath<N2, '-'> : N2}${Util.SimpleMath<N1, '-'>}`>
    : never
  : never;


  export type Callback<T extends any[]> = (...args: T) => void;

  export function executeCallback<T extends any[]>(callback: Callback<T>, ...args: T): void {
    callback(...args);
  }

  export function createCallback<T extends any[]>(callback: Callback<T>): Callback<T> {
    return (...args: T) => {
      callback(...args);
    };
  }
  export type Func<T extends ((...args: Parameters<T>) => ReturnType<T>)> = (...args: Parameters<T>) => ReturnType<T>;
  export type CreateClosureStore = <BaseType>(base: BaseType) => ClosureStore<BaseType>;
  export type ClosureStore<BaseType> = <T extends [BaseType]>() => {
    <F extends Func<F>>(fn: (...args: T) => ReturnType<F>, ...args: T): ReturnType<F>;
  }

  type Closure<R, T extends Func<T>> = {
    update: (v: R, ...args: Parameters<T>) => void;
    init: T;
    get value(): R;
    set value(v: R);
    get data(): ReturnType<T>;
    set data(v: ReturnType<T>);
  }

  export type StringToNumber<S extends string> = S extends `${infer F extends number}${infer R}` ? F | StringToNumber<R> : never;

  export type AdditionHelper = {
    [K in BelowOneHundred as K extends 99 ? never : K]: Util.HundredArray[K];
  } & {
    0: 1;
    99: 0;
  }

  export type ParseInt<T> = T extends `${infer N extends number}` ? N : never

  export type ObjectHasProperty<Obj1, Obj2, Property extends keyof Obj1 | keyof Obj2 = keyof Obj1 | keyof Obj2> = Property extends keyof Obj1 ? Obj1[Property] : Property extends keyof Obj2 ? Obj2[Property] : never;
  export type AddTenHelper<T extends '+' | '-' = '+'> = {
    [K in Util.BelowTen]: K extends 9 ? T extends '-' ? 8 : 0 : TenArray<T>[K];
  } & {
    0: T extends '-' ? 9 : 1;
  };
  export type SimpleMath<N extends number | '', T extends '+' | '-' = '+'> = AddTenHelper<T>[N extends keyof AddTenHelper<T> ? N : never];
  export type AddOneSm<T> = AdditionHelper[T extends keyof AdditionHelper ? T : never];
  export type OneHundred = Util.ParseInt<`${Util.BelowTen}${0 | Util.BelowTen}`> | 100 | Util.ParseInt<`${0 | Util.BelowTen}`>;
  export type Fifty = Util.ParseInt<`${1 | 2 | 3 | 4}${0 | Util.BelowTen}`> | 50 | Util.ParseInt<`${0 | Util.BelowTen}`>;
  export type Fifteen = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15;
  // export type HandleMath<N extends Util.OneThousand, T extends '+' | '-' = '+'> =
  //   `${N}` extends `${infer N3 extends Util.BelowTen}${infer N2 extends 0 | Util.BelowTen}${infer N1 extends 0 | Util.BelowTen}`
  //     ? T extends '-'
  //       ? Util.ParseInt<`${N1 extends 0 ? N2 extends 0 ? N3 extends 1 ? '' : Util.SimpleMath<N3, T> : N3 : N3}${N1 extends 0 ? Util.SimpleMath<N2, T> : N2}${Util.SimpleMath<N1, T>}`>
  //     : Util.ParseInt<`${N1 extends 9 ? N2 extends 9 ? Util.SimpleMath<N3, T> : N3 : N3}${N1 extends 9 ? Util.SimpleMath<N2, T> : N2}${Util.SimpleMath<N1, T>}`>
  //   : `${N}` extends `${infer N3 extends Util.BelowTen}${infer N2 extends 0 | Util.BelowTen}`
  //     ? T extends '-'
  //       ? Util.ParseInt<`${N2 extends 0 ? N3 extends 1 ? '' : Util.SimpleMath<N3, T> : N2}${Util.SimpleMath<N2, T>}`>
  //     : `${N3}${N2}` extends 99
  //       ? 100
  //     : Util.ParseInt<`${N2 extends 9 ? Util.SimpleMath<N3, T> : N3}${Util.SimpleMath<N2, T>}`>
  //   : `${N}` extends `${infer N3 extends 0 | Util.BelowTen}`
  //     ? T extends '-'
  //       ? Util.SimpleMath<N3, T>
  //     : N3 extends 9
  //       ? 10
  //     : Util.SimpleMath<N3, T>
  //   : never;

  // export type HandleMathHundreds<N extends Util.OneHundred, T extends '+' | '-' = '+'> =
  //   `${N}` extends `${infer N1 extends 0 | Util.BelowTen}`
  //     ? T extends '-'
  //       ? Util.ParseInt<`${N1 extends 0 ? N1 : Util.SimpleMath<N1, T>}`>
  //     : Util.ParseInt<`${N1 extends 9 ? 10 : Util.SimpleMath<N1, T>}`>
  //   : `${N}` extends `${infer N2 extends Util.BelowTen}${infer N1 extends 0 | Util.BelowTen}`
  //     ? T extends '-'
  //       ? Util.ParseInt<`${N1 extends 0 ? N2 extends 1 ? '' : Util.SimpleMath<N2, T> : N2}${Util.SimpleMath<N1, T>}`>
  //     : Util.ParseInt<`${N1 extends 9 ? N2 extends 9 ? 1 : '' : ''}${N1 extends 9 ? Util.SimpleMath<N2, T> : N2}${Util.SimpleMath<N1, T>}`>
  //   : never;
  export type HandleMathFifties<N extends Util.Fifty, T extends '+' | '-' = '+'> =
    `${N}` extends `${infer N1 extends 0 | Util.BelowTen}`
      ? T extends '-'
        ? Util.ParseInt<`${N1 extends 0 ? N1 : Util.SimpleMath<N1, T>}`>
      : Util.ParseInt<`${N1 extends 9 ? 10 : Util.SimpleMath<N1, T>}`>
    : `${N}` extends `${infer N2 extends 1 | 2 | 3 | 4 | 5}${infer N1 extends 0 | Util.BelowTen}`
      ? T extends '-'
        ? Util.ParseInt<`${N1 extends 0 ? N2 extends 1 ? '' : Util.SimpleMath<N2, T> : N2}${Util.SimpleMath<N1, T>}`>
      : Util.ParseInt<`${N1 extends 9 ? N2 extends 4 | 5 ? 5 : Util.SimpleMath<N2, T> : N2}${N2 extends 5 ? 0 : Util.SimpleMath<N1, T>}`>
    : never;
  export type OneThousand = Util.ParseInt<`${Util.BelowTen}${0 | Util.BelowTen}`> | Util.ParseInt<`${Util.BelowTen}${0 | Util.BelowTen}${0 | Util.BelowTen}`> | Util.ParseInt<`${0 | Util.BelowTen}` >;
  // export type Addition<N extends Util.OneThousand> = Util.HandleMath<N, '+'>;
  // export type Subtraction<N extends Util.OneThousand> = Util.HandleMath<N, '-'>;
  // export type Addition100<N extends Util.OneHundred> = Util.HandleMathHundreds<N, '+'>;
  // export type Subtraction100<N extends Util.OneHundred> = Util.HandleMathHundreds<N, '-'>;
  export type Addition50<N extends Util.Fifty> = Util.HandleMathFifties<N, '+'>;
  export type Subtraction50<N extends Util.Fifty> = Util.HandleMathFifties<N, '-'>;
  export function addFifty<N extends Util.Fifty>(num: N): Util.Addition50<N> {
    return num + 1 as Util.Addition50<N>;
  }
  export function subtractFifty<N extends Util.Fifty>(num: N): Util.Subtraction50<N> {
    return num - 1 as Util.Subtraction50<N>;
  }
  // export type NumArray<N extends Util.OneThousand, T extends '+' | '-' = '+'> = {
  //   [K in Util.OneThousand]: Util.HandleMath<K, T>;
  // }[N];
  type test = Util.HandleMathFifties<0, '-'>;
  export type HundredArray<T extends '+' | '-' = '+'> = T extends '-'
    ? [0, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9,
    10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
    20, 21, 22, 23, 24, 25, 26, 27, 28, 29,
    30, 31, 32, 33, 34, 35, 36, 37, 38, 39,
    40, 41, 42, 43, 44, 45, 46, 47, 48, 49,
    50, 51, 52, 53, 54, 55, 56, 57, 58, 59,
    60, 61, 62, 63, 64, 65, 66, 67, 68, 69,
    70, 71, 72, 73, 74, 75, 76, 77, 78, 79,
    80, 81, 82, 83, 84, 85, 86, 87, 88, 89,
    90, 91, 92, 93, 94, 95, 96, 97, 98, 99]
    : [1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
    11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
    21, 22, 23, 24, 25, 26, 27, 28, 29, 30,
    31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
    41, 42, 43, 44, 45, 46, 47, 48, 49, 50,
    51, 52, 53, 54, 55, 56, 57, 58, 59, 60,
    61, 62, 63, 64, 65, 66, 67, 68, 69, 70,
    71, 72, 73, 74, 75, 76, 77, 78, 79, 80,
    81, 82, 83, 84, 85, 86, 87, 88, 89, 90,
    91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 100];
  export type FiftyArray<T extends '+' | '-' = '+'> = T extends '-'
    ? [0, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9,
    10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
    20, 21, 22, 23, 24, 25, 26, 27, 28, 29,
    30, 31, 32, 33, 34, 35, 36, 37, 38, 39,
    40, 41, 42, 43, 44, 45, 46, 47, 48, 49]
    : [1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
    11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
    21, 22, 23, 24, 25, 26, 27, 28, 29, 30,
    31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
    41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 50];
  export type Add50<N extends Util.Fifty> = Util.FiftyArray[N];
  export type Subtract50<N extends Util.Fifty> = Util.FiftyArray<'-'>[N];
  export type Add100<N extends Util.OneHundred> = Util.HundredArray[N];
  export type Subtract100<N extends Util.OneHundred> = Util.HundredArray<'-'>[N];
  export type Reset = 0;
  export type BelowOneHundred = Util.HundredArray[number];
  export type TenArray<T extends '+' | '-' = '+'> = T extends '-' ? [9, 0, 1, 2, 3, 4, 5, 6, 7] : [1, 2, 3, 4, 5, 6, 7, 8, 9];
  export type BelowTen = TenArray<'+'>[number];
  export type RecursiveObject<T> = {
    [K in keyof T]: T[K]
  };
  export type ObjectWithDepth<T extends {} = {}, Depth extends number = 5> = {//@ts-ignore
    [K in keyof T]: Depth extends 0 ? unknown : ObjectWithDepth<T[K], Subtract<Depth, 1>>;
  };
  //type Obj<T extends { [K in Key]: T[K] } = any, Key extends keyof T = keyof T> = T extends { [K in keyof T]: T[K] } ? T : never;


  export type RecursiveArray<A extends [...any[]] = [...any[]]> = {
    [K in keyof A]: A[K];
  };
  export type Property<Obj extends {}> = keyof Obj;


  // type CreateConcise<Obj extends { [x: string]: Obj[R extends keyof Obj ? R : keyof Obj] }, FromThis extends [...any], R extends keyof Obj | Obj[keyof Obj] = keyof Obj> = {
  //   [Prop in keyof Obj as HasProperty<Obj, Prop, FromThis[number]> extends never ? never : Prop]: HasProperty<Obj, Prop, FromThis[number]>;
  // };
  export type Concurrent<Obj, R extends keyof Obj | Obj[keyof Obj] = keyof Obj> = { [K in keyof Obj as R extends keyof Obj ? R : K]: Obj[K] | R };
  export type ObjectFromUnion<O = {}> = <PKeys extends keyof O, PValues extends O[PKeys]>(keys: PKeys,) => {
    [P in PKeys]: PValues;
  };
  export type Hook<T extends any[]> = (...params: T) => any;

  export type TupleProperty<T extends [any, ...any[]]> = <V, N extends number>(index: N) => TupleHasProperty<V, T, typeof index>;
  export type TupleHasProperty<V, T extends [any, ...any[]], N extends number> = (tuple: T) => V extends T[number] ? T[V] : never;
  export function tupleHasProperty<T extends [...any[]]>(index: number): T[number] {
    return index as T[number];
  }
  export type Obj<T> = {
    [K in keyof T]: T[K];
  };

  export function makeTuple<T extends T[number][]>(...args: T) { return args; }

  export interface DeepFreezeArray<T> extends ReadonlyArray<DeepFreeze<T>> { }

  export type DeepFreezeObject<T> = {
    +readonly [P in keyof T]: DeepFreeze<T[P]>;
  };

  export type DeepReadonly<T> = {
    +readonly [P in keyof T]: DeepReadonly<T[P]>;
  };

  export function addition<N extends Util.Fifty>(num: N): Util.Add50<N> {
    return num + 1 as Util.Add50<N> extends Util.Fifty ? Util.Add50<N> : never;
  }
  export function addition100<N extends OneHundred>(num: N): Util.Add100<N> extends OneHundred ? Util.Add100<N> : never {
    return num + 1 as Util.Add100<N> extends OneHundred ? Util.Add100<N> : never;
  }
  export function subtraction<N extends Util.Fifty>(num: N): Util.Subtract50<N> {
    return num - 1 as Util.Subtract50<N> extends Util.Fifty ? Util.Subtract50<N> : never;
  }
  export function subtraction100<N extends OneHundred>(num: N): Util.Subtract100<N> extends OneHundred ? Util.Subtract100<N> : never{
    return num - 1 as Util.Subtract100<N> extends OneHundred ? Util.Subtract100<N> : never;
  }
  export type DeepFreezeRecursive<T> = DeepReadonly<DeepFreeze<T>>;
  export type DeepFreeze<T> = T extends (infer U)[]
    ? DeepFreezeArray<U>
    : T extends object
    ? DeepFreezeObject<T>
    : T;

  export interface SplitStr<T extends string> {
    value: T;
    substrings: T extends `${infer F}${infer R}` ? [F, ...SplitStr<R>['substrings']] : [];
    length: T extends `${infer F}${infer R}` ? [F, ...SplitStr<R>['substrings']]['length'] : 0;
  }

  export type Constructor<T = {}> = new (...args: any[]) => T;
  export type UnionFromArray<T> = Extract<T, Array<string>>[number] | Extract<T, string>;
  export type ArrayUnion<T> = Extract<T, Array<string>>;
  export type ObjectOf<T, K extends keyof T> = { [key in K]: T[key] };
  export type ValueOf<T> = T[keyof T];
  export type ReturnArray<K extends keyof T, T> = <V extends T[K]>(ind: K) => [keys: K, values: V];
  export type CreateUnion<K extends keyof T, V extends T[K], T extends ObjectOf<T, K>> = (array: T) => (index: K) => [keys: K, values: V];
  export type IndexByType<T, K extends keyof T> = <V extends T[keyof T]>(ind: K) => [keys: K, values: V];
}
export namespace Metadata {

  export type Config<P> = P extends [string, string] ? BaseObject<P> & {
    [K in P as K[0]]: K[1];
  } : never;
  export type BaseObject<P> = P extends [string, string]
    ? P extends [P[0] extends string ? P[0] : never, P[1] extends string ? P[1] : never] ? {
    version: P[1];
    description: P[1];
    author?: P[1];
    copyright?: P[1];
  } & ({
    file?: P[1];
    name: P[1];
  } | {
    file: P[1];
    name?: P[1];
  }) : never : never;

  type MainKeys = 'name' | 'version' | 'file' | 'author' | 'copyright' | 'description';

  export type Pairs<P extends P[number][]> = P extends Pair<P[number]>[] ? P : never;
  /**
   * @type {Author} Author - The author of the package.
   */
  export type Author<P> = P extends [string, string]
    ? P extends [P[0] extends 'author' ? P[0] : never, P[1] extends string ? P[1] : never]
      ? ['author', P[1]] & { __type: 'author' }
    : never
  : never;
  /**
   * @type {Description} Description - The description of the package.
   */
  export type Description<P> = P extends [string, string]
    ? P extends [P[0] extends 'description' ? P[0] : never, P[1] extends string ? P[1] : never]
      ? ['description', P[1]] & { __type: 'description' }
    : never
  : never;
  /**
   * @type {Version} Version - The version of the package.
   */
  export type Version<P> = P extends [string, string]
    ? P extends [P[0] extends 'version' ? P[0] : never, P[1] extends string ? P[1] : never]
      ? ['version', P[1]] & { __type: 'version' }
    : never
  : never;
  /**
   * @type {File} File - The file of the package.
   */
  export type File<P> = P extends [string, string]
    ? P extends [P[0] extends 'file' ? P[0] : never, P[1] extends string ? P[1] : never]
      ? ['file', P[1]] & { __type: 'file' }
    : never
  : never;
  /**
   * @type {Name} Name - The name of the package.
   */
  export type Name<P> = P extends [string, string]
    ? P extends [P[0] extends 'name' ? P[0] : never, P[1] extends string ? P[1] : never]
      ? ['name', P[1]] & { __type: 'name' }
    : never
  : never;
  /**
   * @type {Copyright} Copyright - The copyright of the package.
   */
  export type Copyright<P> = P extends [string, string]
    ? P extends [P[0] extends 'copyright' ? P[0] : never, P[1] extends string ? P[1] : never]
      ? ['copyright', P[1]] & { __type: 'copyright' }
    : never
  : never;

  /**
   * @type {Pair} Pair - A key-value pair.
   * @template P - The key-value pair.
   */
  export type Pair<P> = P extends [string, string]
    ? P extends [P[0] extends string ? P[0] : never, P[1] extends string ? P[1] : never]
      ? P
    : never
  : never;

  export type CombineArrays<T extends any[], U extends any[]> = [...T, ...U];
  /**
   * @function makeBasePair - Creates a base pair from key-value pairs.
   * @type {MakeBasePair} BasePair - An array of key-value pairs with optional __type properties.
   * @param {Pair<[string, string]>[]} pair - The key-value pair.
   * @returns {BasePair<[string, string]>} The base pair.
   */
  export const makeBasePair: MakeBasePair = <P>(...pair: Pair<P>[]) => {
    let array = [] as BasePair<P>;
    pair.forEach((p) => {
      if (isSinglePair(p)) array.push(p as { [K in Pair<P> as K[0]]: MetaPair<K>; }[Pair<P>[0]]);
    });
    if (!isPairs(array as Pair<P>[])) return null as never;
    return array as BasePair<P>;
  }
  const value = makeBasePair(['cowboy', 'balloons'], ['name', 'test'], ['version', '1.0.0'], ['author', 'Matthew Rackley'], ['description', 'A test package.']);
  /**
   * @type MakeBasePair - Checks if an array is a base pair.
   * @template P - The key-value pair.
   * @returns {(P extends [K,V] ? MetaPair<P> : never)[]} The Final Array.
   */
  export type MakeBasePair = <P>(...pair: Pair<P>[]) => BasePair<P>;//(P extends [string,string] ? MetaPair<P> : never)[];
  /**
   * @type BasePair - An array of key-value pairs with optional __type properties.
   * @template P - The key-value pair.
   */
  export type BasePair<P> = Pair<P> extends [string, string]
    ? Pair<P> extends [Pair<P>[0] extends string ? Pair<P>[0] : never, Pair<P>[1] extends string ? Pair<P>[1] : never]
      ? {
        [K in Pair<P> as K[0]]: MetaPair<K>;
      }[Pair<P>[0]][]
    : never
  : never;

  /**
   * @type MetaPair - A key-value pair with a __type property or a normal key-value pair.
   * @template P - The key-value pair.
   */
  export type MetaPair<P> = P extends [string, string]
    ? P extends [P[0] extends string ? P[0] : never, P[1] extends string ? P[1] : never]
      ? P[0] extends MainKeys
        ? P[0] extends 'name'
          ? ['name', P[1]] & { __type: 'name' }
        : P[0] extends 'version'
          ? ['version', P[1]] & { __type: 'version' }
        : P[0] extends 'file'
          ? ['file', P[1]] & { __type: 'file' }
        : P[0] extends 'author'
          ? ['author', P[1]] & { __type: 'author' }
        : P[0] extends 'description'
          ? ['description', P[1]] & { __type: 'description' }
        : P[0] extends 'copyright'
          ? ['copyright', P[1]] & { __type: 'copyright' }
        : never
      : [P[0], P[1]]
    : never
  : never;
  /**
   * @function isSinglePair - Checks if a pair is a common key-value pair.
   * @param {Pair<P>} pair - The pair to check.
   * @returns {pair is MetaPair<P>} Whether the pair is a common key-value pair.
   */
  export function isSinglePair<P>(pair: Pair<P>): pair is MetaPair<P> extends Pair<P> ? MetaPair<P> : never {
    if (!Array.isArray(pair)) return false;
    const [k, v] = pair;
    if (typeof k !== 'string') return false;
    if (typeof v !== 'object' && typeof v !== 'string') return false;
    return ((isAuthorPair(pair) || isVersionPair(pair) || isFilePair(pair) || isNamePair(pair) || isDescriptionPair(pair) || isCopyrightPair(pair)) && pair.length === 2) || pair.length === 2;
  }
  /**
   * @function isAuthorPair - Checks if a pair is an author pair.
   * @param {Pair<P>} pair - The pair to check.
   * @returns {pair is Author<P>} Whether the pair is an author pair.
   */
  export function isAuthorPair<P>(pair: Pair<P>): pair is Author<P> extends Pair<P> ? Author<P> : never {
    const [k, v] = pair;
    return k === 'author' && typeof v === 'string' && pair.length === 2;
  }
  /**
   * @function isVersionPair - Checks if a pair is a version pair.
   * @param {Pair<P>} pair - The pair to check.
   * @returns {pair is Version<P>} Whether the pair is a version pair.
   */
  export function isVersionPair<P>(pair: Pair<P>): pair is Version<P> extends Pair<P> ? Version<P> : never {
    const [k, v] = pair;
    return k === 'version' && typeof v === 'string' && pair.length === 2;
  }
  /**
   * @function isFilePair - Checks if a pair is a file pair.
   * @param {Pair<P>} pair - The pair to check.
   * @returns {pair is File<P>} Whether the pair is a file pair.
   */
  export function isFilePair<P>(pair: Pair<P>): pair is File<P> extends Pair<P> ? File<P> : never {
    const [k, v] = pair as Pair<P>;
    return k === 'file' && typeof v === 'string' && pair.length === 2;
  }
  /**
   * @function isNamePair - Checks if a pair is a name pair.
   * @param {Pair<P>} pair - The pair to check.
   * @returns {pair is Name<P>} Whether the pair is a name pair.
   */
  export function isNamePair<P>(pair: Pair<P>): pair is Name<P> extends Pair<P> ? Name<P> : never {
    const [k, v] = pair;
    return k === 'name' && typeof v === 'string' && pair.length === 2;
  }
  /**
   * @function isDescriptionPair - Checks if a pair is a description pair.
   * @param {Pair<P>} pair - The pair to check.
   * @returns {pair is Description<P>} Whether the pair is a description pair.
   */
  export function isDescriptionPair<P>(pair: Pair<P>): pair is Description<P> extends Pair<P> ? Description<P> : never {
    const [k, v] = pair;
    return k === 'description' && typeof v === 'string' && pair.length === 2;
  }

  /**
   * @function isCopyrightPair - Checks if a pair is a description pair.
   * @param {Pair<P>} pair - The pair to check.
   * @returns {pair is Description<P>} Whether the pair is a description pair.
   */
  export function isCopyrightPair<P>(pair: Pair<P>): pair is Copyright<P> extends Pair<P> ? Copyright<P> : never {
    const [k, v] = pair;
    return k === 'copyright' && typeof v === 'string' && pair.length === 2;
  }
  export function isPairs<P>(pairArray: Pair<P>[]): pairArray is BasePair<P> extends typeof pairArray ? BasePair<P> : never {
    let bool = [false, false, false] as [boolean, boolean, boolean];
    const boolTypes = ['"name" | "file"', 'version', 'description'] as const;
    pairArray.forEach((pair: Pair<P>) => {
      if (bool[0] === false && pair[0] === 'name') bool[0] = isNamePair(pair as Pair<P>);
      if (bool[0] === false && pair[0] === 'file') bool[0] = isFilePair(pair as Pair<P>);
      if (pair[0] === 'version') bool[1] = isVersionPair(pair as Pair<P>);
      if (pair[0] === 'description') bool[2] = isDescriptionPair(pair as Pair<P>);
    });
    if (bool.includes(false)) throw new Error('Missing a required key-value pair.', {
      cause: `Missing Kind: ${boolTypes[bool.indexOf(false)]}`,
    })
    return pairArray.every((pair): pair is MetaPair<P> extends Pair<P> ? MetaPair<P> : never => isSinglePair(pair as Pair<P>)) && bool.every((b) => b === true);
  }
}

export const { isAlphaNumeric, joinArray, makeTuple, removeChar, split, add, tupleHasProperty, createCallback, executeCallback, addition, subtraction, addition100, subtraction100 } = Util;

import AddOneSm = Util.AddOneSm;
import AddTenHelper = Util.AddTenHelper;
import AdditionHelper = Util.AdditionHelper;
import AlphaNumeric = Util.AlphaNumeric;
import Alphabet = Util.Alphabet;
import AlphaNumericUnion = Util.AlphaNumericUnion;
import ArrayToString = Util.ArrayToString;
import CapitalizeStrings = Util.CapitalizeStrings;
import Concurrent = Util.Concurrent;
import CreateUnion = Util.CreateUnion;
import DeepFreeze = Util.DeepFreeze;
import DeepFreezeArray = Util.DeepFreezeArray;
import DeepFreezeObject = Util.DeepFreezeObject;
import DeepFreezeRecursive = Util.DeepFreezeRecursive;
import DeepReadonly = Util.DeepReadonly;
import FilterNever = Util.FilterNever;
import FilterNestedNever = Util.FilterNestedNever;
import FilterNeverWithDepth = Util.FilterNeverWithDepth;
import Interpolate = Util.Interpolate;
import InterpolateBySep = Util.InterpolateBySep;
import Join = Util.Join;
import LowercaseArray = Util.LowercaseArray;
import MakeNormal = Util.MakeNormal;
import MultiCase = Util.MultiCase;
import ObjectFromUnion = Util.ObjectFromUnion;
import ObjectOf = Util.ObjectOf;
import Opaque = Util.Opaque;
import Property = Util.Property;
import RemoveChar = Util.RemoveChar;
import RemoveChars = Util.RemoveChars;
import ReturnArray = Util.ReturnArray;
import SeparatorInterpolation = Util.SeparatorInterpolation;
import Split = Util.Split;
import SplitString = Util.SplitString;
import StringToArray = Util.StringToArray;
import StringToNumber = Util.StringToNumber;
import Subtract = Util.Subtract;
import TupleProperty = Util.TupleProperty;
import TupleHasProperty = Util.TupleHasProperty;
import TypeParameter = Util.TypeParameter;
import TypePlusParameter = Util.TypePlusParameter;
import UnionFromArray = Util.UnionFromArray;
import ValueOf = Util.ValueOf;
import RecursiveArray = Util.RecursiveArray;
import RecursiveObject = Util.RecursiveObject;
import ObjectHasProperty = Util.ObjectHasProperty;
// import NumArray = Util.NumArray;
// import HandleMath = Util.HandleMath;
import OneThousand = Util.OneThousand;
import HundredArray = Util.HundredArray;
import BelowOneHundred = Util.BelowOneHundred;
import TenArray = Util.TenArray;
import BelowTen = Util.BelowTen;
import MetaConfig = Metadata.Config;
// import MetaPairs = Metadata.KeyValuePairs;
// import MetaTuple = Metadata.Tuple;
import MetaAuthorPair = Metadata.Author;
import MetaDescriptionPair = Metadata.Description;
import MetaVersionPair = Metadata.Version;
import MetaFilePair = Metadata.File;
import MetaNamePair = Metadata.Name;
import MetaCopyrightPair = Metadata.Copyright;
import OneHundred = Util.OneHundred;
import Fifty = Util.Fifty;
import Fifteen = Util.Fifteen;
import Add100 = Util.Add100;
import Subtract100 = Util.Subtract100;
import Reset = Util.Reset;
import Subtract50 = Util.Subtract50;
import Add50 = Util.Add50;
import Add = Util.Add;



export type {
  MetaConfig,
  OneHundred,
  Add50,
  Subtract50,
  Fifty,
  Fifteen,
  Add100,
  Subtract100,
  MetaCopyrightPair,
  MetaAuthorPair,
  MetaDescriptionPair,
  MetaVersionPair,
  MetaFilePair,
  MetaNamePair,
  OneThousand,
  HundredArray,
  BelowOneHundred,
  TenArray,
  BelowTen,
  Add,
  Subtract,
  AddOneSm,
  AddTenHelper,
  AdditionHelper,
  AlphaNumeric,
  Alphabet,
  AlphaNumericUnion,
  ArrayToString,
  CapitalizeStrings,
  Concurrent,
  CreateUnion,
  DeepFreeze,
  DeepFreezeArray,
  DeepFreezeObject,
  DeepFreezeRecursive,
  DeepReadonly,
  FilterNever,
  FilterNestedNever,
  FilterNeverWithDepth,
  Interpolate,
  InterpolateBySep,
  Join,
  LowercaseArray,
  MakeNormal,
  MultiCase,
  ObjectFromUnion,
  ObjectHasProperty,
  ObjectOf,
  Opaque,
  Property,
  RemoveChar,
  RemoveChars,
  ReturnArray,
  SeparatorInterpolation,
  Split,
  SplitString,
  StringToArray,
  StringToNumber,
  TupleProperty,
  TupleHasProperty,
  TypeParameter,
  TypePlusParameter,
  UnionFromArray,
  ValueOf,
  RecursiveArray,
  RecursiveObject,
};

export default Util;
