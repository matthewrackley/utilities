/**
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

export = Util;
export as namespace Util;
declare namespace Util {
  type LiteralTypes = (string | number | symbol | boolean) |
  [(string | number | symbol | boolean), ...(string | number | symbol | boolean)[]];
  type LiteralStrings = (string | number | boolean | null);

  interface StringLike<N extends String['length']> extends String {
    readonly length: N;
  }
  var stringLike: StringLike<any>;
  type DataType = 'User' | 'Zone' | 'Date' | 'RegExp' | 'Error' | 'Promise' | 'DataView' | 'Math' | 'JSON' | 'Promise';
  //@ts-ignore
  type InverseMapping<T extends { [K in keyof T]: T[K] }> = { [Key in keyof T]: { [K in (T[Key][number] | T[Key]) as K extends string ? K : never]: Key } }[keyof T];
  //@ts-ignore
  type InverseObject<T extends { [K in keyof T]: T[K] }> = {
    [K in keyof T as T[K] extends T[K][keyof T[K]][] ? T[K][number] : T[K]]: K
  };
  type GetProperty<T extends object, K extends keyof T> = T[K];
  type RemoveProperty<T extends object, K extends keyof T> = Omit<T, K>;
  type Tupleize<T extends readonly any[]> = { -readonly [K in keyof T]: T[K] };
  type Tupler<T extends any[]> = T extends [...infer F, infer L] ? [...F, L] : never;
  type TupleLength<T extends readonly any[]> = T['length'];
  type TupleHead<T extends readonly any[]> = T[0];
  type TupleTail<T extends readonly any[]> = T[1];
  type TupleLast<T extends readonly any[]> = T[TupleLength<T>];
  type TuplePush<T extends readonly any[], V> = [...T, V];
  type TuplePop<T extends readonly any[]> = TupleHead<T>;
  type TupleShift<T extends readonly any[]> = TupleTail<T>;
  type TupleUnshift<T extends readonly any[], V> = TuplePush<T, V>;
  type TupleConcat<T extends readonly any[], U extends readonly any[]> = [...T, ...U];
  type TuplePrepend<T extends readonly any[], U extends readonly any[]> = TupleConcat<U, T>;
  type TupleGet<T extends readonly any[], I extends number> = T[I];
  type TupleSet<T extends readonly any[], I extends number, V> = [...TupleHead<T>, V, ...TupleTail<T>];
  type TupleRemove<T extends readonly any[], I extends number> = TupleConcat<TupleHead<T>, TupleTail<T>>;
  type TupleRemoveAll<T extends readonly any[], U extends readonly any[]> = TupleConcat<TupleHead<T>, TupleTail<T>>;
  type TupleReverse<T extends readonly any[]> = [...T];
  type TupleReverseInPlace<T extends readonly any[]> = [...T];
  type TupleSlice<T extends readonly any[], S extends number, E extends number> = [...T];
  type TupleSplice<T extends readonly any[], S extends number, E extends number, U extends readonly any[]> = [...T];
  type TupleSort<T extends readonly any[]> = [...T];
  type TupleSortInPlace<T extends readonly any[]> = [...T];
  type TupleFill<T extends readonly any[], V> = [...T];
  type TupleFillBy<T extends readonly any[], V> = [...T];
  type TupleFlat<T extends readonly T[number][]> = [...T];
  type MakeTuple<T extends any extends Array<infer U extends string | number> ? U : never> = T extends infer L extends string | number ? Array<L> extends Array<[...infer U]> ? readonly [...U] : [...[T]]: never;
  type valll = MakeTuple<1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10>;
  /**
   * @type {Tupleizer} Tupleizer - Creates a literal tuple type.
   * @param {[...T]} args - The arguments to create a tuple from.
   * @returns {[...T]} The literal tuple.
   * @description Generic Utility function that can easily create a
   * type literal tuple type. This is useful for beginner JS developers
   * who are used to using arrays as tuples, and want to use tuples in TS.
   * @author Matthew Allen Rackley
   * @copyright [Matthew Rackley's Github](https://www.github.com/matthewrackley "Matthew Rackley on github.com")
   * @license MIT
   */
  type Tupleizer = typeof tupleizer;
  /**
   * @function tupleizer - Creates a literal tuple type.
   * @template Key - The index of T. Defaults to keyof T.
   * @param {T} args The arguments to create a tuple from.
   * @returns {[...T]} The literal tuple.
   * @description Generic Utility function that can easily create a
   * type literal tuple type. This is useful for beginner JS developers
   * who are used to using arrays as tuples, and want to use tuples in TS.
   * @author Matthew Allen Rackley
   * @copyright [Matthew Rackley's Github](https://www.github.com/matthewrackley "Matthew Rackley on github.com")
   * @license MIT
   */
  function tupleizer<
    /** @template {Key} -!- The index of T. */
    Key extends keyof T extends number ? keyof T : never,
    T extends (
      LiteralTypes | // note: T[number] can be a string, symbol, number, or a tuple of the same
      (keyof T extends number
        ? T[Key] extends object ?
        {
          [K in keyof T[Key]]: T[Key][K] extends
          ({ [K2 in keyof T[Key][K]]: T[Key][K][K2] } | LiteralTypes)
          ? T[keyof T]
          : never
        }
        : never
        : never) | // note: T[number] can be a recursive object
      {
        [K in keyof T as K extends number ? K : never]:
        T[K][keyof T[K]] extends LiteralTypes ? T[K][keyof T[K]] : never
      } // This ensures that T[number] can be a recursive object
    )[] // This makes T a tuple
  >(...args: [...T]): [...T];

  type Interpolate<Segments extends any[]> = Segments extends [infer First, ...infer Rest]
  ? First extends string
    ? Rest extends string[]
      ? `${First}${Interpolate<Rest>}`
      : never
    : never
  : '';
  type InterpolateBySep<Segments extends any[], Separator extends string> = Segments extends [infer First, ...infer Rest]
  ? First extends string
    ? Rest extends any[]
      ? `${First}${Rest['length'] extends 0 ? '' : Separator}${InterpolateBySep<Rest, Separator>}`
      : never
    : never
  : '';
  type SeparatorInterpolation<
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
  type ArrayToString<A extends string[] | readonly string[], D extends string, P extends string = ''> =
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
  type Opaque<Type, Token = unknown> = Type & { readonly __opaque__: Token };
  /**
   * @type {Join} Join - Joins an array of strings with a seperator, functionally can
   * replace the Array.prototype.join method.
   * @param {D} seperator - The seperator to join the array with.
   * @param {A} [array] - The array to join.
   * @returns {ArrayToString<A, D>} The joined array.
   */
  type Join = <A extends string[] | readonly string[], D extends string | '' = ''>(array: A | [...A], seperator?: D) => ArrayToString<A, D>;
  /**
   * @constant {Join} joinArray - Joins an array of strings with a seperator, functionally can
   * replace the Array.prototype.join method.
   * @param {A | [...A]} [array] - The array to join.
   * @param {D | undefined} seperator - The seperator to join the array with.
   */
  function joinArray<A extends string[] | readonly string[], D extends string | '' = ''>(array: A | [...A], seperator?: D): ArrayToString<A, D>;
  type JoinArray = typeof joinArray;
  type RemoveChar<S extends string, C extends string> = S extends `${infer F}${C}${infer R}` ? RemoveChar<`${F}${R}`, C> : S;
  type RemoveChars<S extends string[], C extends string> = {
    [K in keyof S]: RemoveChar<S[K], C>;
  };
  type RemoveCharacter = typeof removeChar;
  function removeChar<S extends string, C extends string>(str: S, char: C): RemoveChar<S, C>;

  type FilterNever<T> = {
    [K in keyof T as T[K] extends never ? never : K]: T[K];
  };
  type FilterNestedNever<T> = {
    [K in keyof T]: {
      [P in keyof T[K]as T[K][P] extends never ? never : P]: T[K][P];
    }
  };
  type FilterNeverWithDepth<T, Depth extends number> = {
    [K in keyof T]: Depth extends 0
    ? T[K]
    : T[K] extends object
    ? FilterNeverWithDepth<T[K], Subtract<Depth, 1>>
    : T[K] extends never
    ? never
    : T[K];
  };

  type CapitalizeStrings<T> = {
    [K in keyof T]: string;
  };
  type MakeNormal<T> = T extends Readonly<T> | { readonly [x in any]: any }[keyof T] ? T | { -readonly [x in any]: any } : never;
  type TypePlusParameter<Type, Param> = Type extends TypeParameter<Param> ? Type : never;
  type TypeParameter<T> = T extends infer U ? U : never;
  type UppercaseArray<T extends string[]> = {
    [K in keyof T]: T[K] extends string ? Uppercase<T[K]> : never;
  };
  type LowercaseArray<T extends string[]> = {
    [K in keyof T]: T[K] extends string ? Lowercase<T[K]> : never;
  };
  interface NumericalArray<T extends number[]> extends Array<T[number]> {
    readonly length: T[number];
    [index: number]: T[number];
  }
  const tupal: <T extends (number | string | symbol)[]>(...args: T) => T;
  type MultiCase<T extends string> = Uppercase<T> | Lowercase<T>;
  type AlphaNumeric<T extends string> = T extends `${infer F extends string}${infer R extends string}`
    ? (F extends AlphaNumericUnion ? `${F}${AlphaNumeric<R>}` : never)
    : T;
  function isAlphaNumeric<N extends string>(str: Util.AlphaNumeric<N>): str is Util.AlphaNumeric<N>;
  type AlphaNumericUnion = Split<Alphabet>[number] | Split<'0123456789'>[number] | '.' | '-';
  type Alphabet = MultiCase<'abcdefghijklmnopqrstuvwxyz'>;
  type Split<S extends string> = ReturnType<typeof split<S>>;
  type SplitString = <S extends string, D extends string = "">(stringToSplit: S, separator?: D) => StringToArray<S, D>;
  /**
   * @constant {SplitString} split - Splits a string into an array of its characters.
   * @param {S} stringToSplit - The string to split into an array of characters.
   * @param {D} [separator=''] - The seperator to split the string with. Defaults to an empty string.
   * @returns {StringToArray<S, D>} The array of characters.
   */
  const split: SplitString;
  type StringToArray<S extends string, D extends string> =
    S extends '' ? [] :
    S extends `${infer F}${D}${infer R}` ? [F, ...StringToArray<R, D>] :
    [S];

  type StringToNumber<S extends string> = S extends `${infer F extends number}${infer R}` ? F | StringToNumber<R> : never;

  type AdditionHelper = {
    [K in BelowOneHundred as K extends 99 ? never : K]: HundredArray[K];
  } & {
    0: 1;
    99: 0;
  }

  type ObjectHasProperty<Obj1, Obj2, Property extends keyof Obj1 | keyof Obj2 = keyof Obj1 | keyof Obj2> = Property extends keyof Obj1 ? Obj1[Property] : Property extends keyof Obj2 ? Obj2[Property] : never;
  type AddTenHelper<Stop extends boolean = false> = {
    [K in BelowTen as K extends 9 ? never : K]: TenArray[K];
  } & {
      [K in BelowTen as Stop extends false ? 9 : never]: 0;
    } & {
      0: 1;
    };
  type AddTen<T, Stop extends boolean = false> = AddTenHelper<Stop>[T extends keyof AddTenHelper<Stop> ? T : never];
  type AddOneSm<T> = AdditionHelper[T extends keyof AdditionHelper ? T : never];
  type AddOne<T extends number> =
    T extends infer N extends number
      ? `${N}` extends `${infer N3 extends 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8}`
        ? `${AddTen<N3>}`
      : `${N}` extends `${infer N3 extends 9}`
        ? 10
      : `${N}` extends `${infer N3 extends number}${infer N2 extends number}`
        ? `${N3}${N2}` extends `${99}`
          ? 100
        : `${N2 extends 9 ? AddTen<N3> : N3}${AddTen<N2>}`
      : `${N}` extends `${infer N3 extends number}${infer N2 extends number}${infer N1 extends number}`
        ? `${N2 extends 9 ? AddTen<N3> : N3}${N1 extends 9 ? AddTen<N2> : N2}${AddTen<N1>}`
      : never
    : never;
    // : never;
    //     ? `${}`
    // : `${N}` extends `${infer N1 extends 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9}${infer N2 extends 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8}`
    // ? `${AddTen<N1>}${AddTen<N2>}`
    // : AddTen<N>
    // : never;
  type AA1 = AddOne<112>;
  type HundredArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
    11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
    21, 22, 23, 24, 25, 26, 27, 28, 29, 30,
    31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
    41, 42, 43, 44, 45, 46, 47, 48, 49, 50,
    51, 52, 53, 54, 55, 56, 57, 58, 59, 60,
    61, 62, 63, 64, 65, 66, 67, 68, 69, 70,
    71, 72, 73, 74, 75, 76, 77, 78, 79, 80,
    81, 82, 83, 84, 85, 86, 87, 88, 89, 90,
    91, 92, 93, 94, 95, 96, 97, 98, 99];
  type BelowOneHundred = HundredArray[number];
  type TenArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  type BelowTen = TenArray[number];
  type RecursiveObject<T> = {
    [K in keyof T]: T[K]
  };
  type ObjectWithDepth<T extends {} = {}, Depth extends number = 5> = {//@ts-ignore
    [K in keyof T]: Depth extends 0 ? unknown : ObjectWithDepth<T[K], Subtract<Depth, 1>>;
  };
  //type Obj<T extends { [K in Key]: T[K] } = any, Key extends keyof T = keyof T> = T extends { [K in keyof T]: T[K] } ? T : never;

  type Subtract<T extends number, D extends number> =
    [...Array<T>, 0][D] extends infer R ? R extends number ? R : never : never;

  type RecursiveArray<A extends [...any[]] = [...any[]]> = {
    [K in keyof A]: A[K];
  };
  type Property<Obj extends {}> = keyof Obj;
  type Tuple = Array<Tuple>;

  // type CreateConcise<Obj extends { [x: string]: Obj[R extends keyof Obj ? R : keyof Obj] }, FromThis extends [...any], R extends keyof Obj | Obj[keyof Obj] = keyof Obj> = {
  //   [Prop in keyof Obj as HasProperty<Obj, Prop, FromThis[number]> extends never ? never : Prop]: HasProperty<Obj, Prop, FromThis[number]>;
  // };
  type Concurrent<Obj, R extends keyof Obj | Obj[keyof Obj] = keyof Obj> = { [K in keyof Obj as R extends keyof Obj ? R : K]: Obj[K] | R };
  type ObjectFromUnion<O = {}> = <PKeys extends keyof O, PValues extends O[PKeys]>(keys: PKeys,) => {
    [P in PKeys]: PValues;
  };
  type Hook<T extends T[number][]> = (...params: T) => any;
  // function createConcise<R extends any = undefined, Obj extends Concurrent<Obj, R> = Concurrent<{}, R>, FromThis extends [...any[]], R extends keyof Obj | Obj[keyof Obj] = keyof Obj>(obj: Obj): CreateConcise<Obj, FromThis, R> {
  //   return obj;
  // }

  // type Concise<Dataset, Keys> = {
  //   [P in keyof Keys as HasProperty<Dataset, P> extends never ? never : P]: HasProperty<Dataset, P>;
  // };
  // type Country<R extends RegionCode> = {
  //   [P in keyof CountryPrototype<R> as HasProperty<R, P> extends never ? never : P]: HasProperty<R, P>;
  // };

  //type HasProperty<T extends TypeParameter<T>, K extends keyof any> = K extends keyof T ? T[K] : never;
  // type HasProperty<R extends RegionCode, K extends keyof { [Key in keyof K]: K[Key] }> =
  // CountryPrototype<R>[K] extends CountryArray<R>[number] ? CountryPrototype<R>[K] :
  // never;
  //ARRAY UTIL TYPES

  // type CountryTuple<R extends RegionCode> = Tuple<ExampleTuples<R>[number]>;
  type TupleProperty<T extends [any, ...any[]]> = <V, N extends number>(index: N) => TupleHasProperty<V, T, typeof index>;
  type TupleHasProperty<V, T extends [any, ...any[]], N extends number> = (tuple: T) => V extends T[number] ? T[V] : never;

  function tupleHasProperty<T extends [...any[]]>(index: number): T[number];
  type Obj<T> = {
    [K in keyof T]: T[K];
  };

  function makeTuple<T extends T[number][]>(...args: T): T;



  interface DeepFreezeArray<T> extends ReadonlyArray<DeepFreeze<T>> { }

  type DeepFreezeObject<T> = {
    readonly [P in keyof T]: DeepFreeze<T[P]>;
  };

  type DeepReadonly<T> = {
    readonly [P in keyof T]: DeepReadonly<T[P]>;
  };

  type DeepFreezeRecursive<T> = DeepReadonly<DeepFreeze<T>>;
  type DeepFreeze<T> = T extends (infer U)[]
    ? DeepFreezeArray<U>
    : T extends object
    ? DeepFreezeObject<T>
    : T;

  type Constructor<T = {}> = new (...args: any[]) => T;
  type UnionFromArray<T> = Extract<T, Array<string>>[number] | Extract<T, string>;
  type ArrayUnion<T> = Extract<T, Array<string>>;
  type ObjectOf<T, K extends keyof T> = { [key in K]: T[key] };
  type ValueOf<T> = T[keyof T];
  type ReturnArray<K extends keyof T, T> = <V extends T[K]>(ind: K) => [keys: K, values: V];
  type CreateUnion<K extends keyof T, V extends T[K], T extends ObjectOf<T, K>> = (array: T) => <V extends T[keyof T]>(index: K) => [keys: K, values: V];
  type IndexByType<T, K extends keyof T> = <V extends T[keyof T]>(ind: K) => [keys: K, values: V];
  type AppendCharToArray<T extends string[], C extends string> = {
    [K in keyof T]: `${C}${T[K]}`;
  };
}
