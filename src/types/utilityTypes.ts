/**
 * @file utilityTypes.ts
 * @description
 * @author Matthew Allen Rackley
 * @copyright [Matthew Rackley's Github](https://www.github.com/matthewrackley "Matthew Rackley on github.com")
 */
namespace Util {
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
    ? FilterNeverWithDepth<T[K], Subtract<Depth, 1>>
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
        ? ParseInt<`${AddTen<N3>}`>
      : `${N}` extends `${infer N3 extends 9}`
        ? 10
      : `${N}` extends `${infer N3 extends Util.BelowTen}${infer N2 extends 0 | Util.BelowTen}`
        ? `${N3}${N2}` extends `${99}`
          ? 100
        : ParseInt<`${N2 extends 9 ? AddTen<N3> : N3}${AddTen<N2>}`>
      : `${N}` extends `${infer N3 extends Util.BelowTen}${infer N2 extends 0 | Util.BelowTen}${infer N1 extends 0 | Util.BelowTen}`
        ? ParseInt<`${N1 extends 9 ? N2 extends 9 ? AddTen<N3> : N3 : N3}${N1 extends 9 ? AddTen<N2> : N2}${AddTen<N1>}`>
      : never
    : never;
  }
  export type AddLater<N extends number = 99> = N extends number ? AddOne<N> : never;

  type Add<
    A extends number,
    B extends number
  > = `${A}` extends infer TA
    ? `${B}` extends infer TB
      ? `${A extends 0 ? '' : A}${B extends 0 ? '' : B}` extends infer R
        ? R extends ''
          ? 0
          : ParseInt<R>
        : never
      : never
    : never;

  function addNum<N extends number>(num: N): NumArray<N> {
    return (num + 1) as NumArray<N>;
  }



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

  export type HandleMath<N extends Util.OneThousand, T extends '+' | '-' = '+'> =
    `${N}` extends `${infer N3 extends Util.BelowTen}${infer N2 extends 0 | Util.BelowTen}${infer N1 extends 0 | Util.BelowTen}`
      ? T extends '-'
        ? Util.ParseInt<`${N1 extends 0 ? N2 extends 0 ? N3 extends 1 ? '' : Util.SimpleMath<N3, T> : N3 : N3}${N1 extends 0 ? Util.SimpleMath<N2, T> : N2}${Util.SimpleMath<N1, T>}`>
      : Util.ParseInt<`${N1 extends 9 ? N2 extends 9 ? Util.SimpleMath<N3, T> : N3 : N3}${N1 extends 9 ? Util.SimpleMath<N2, T> : N2}${Util.SimpleMath<N1, T>}`>
    : `${N}` extends `${infer N3 extends Util.BelowTen}${infer N2 extends 0 | Util.BelowTen}`
      ? T extends '-'
        ? Util.ParseInt<`${N2 extends 0 ? N3 extends 1 ? '' : Util.SimpleMath<N3, T> : N2}${Util.SimpleMath<N2, T>}`>
      : `${N3}${N2}` extends 99
        ? 100
      : Util.ParseInt<`${N2 extends 9 ? Util.SimpleMath<N3, T> : N3}${Util.SimpleMath<N2, T>}`>
    : `${N}` extends `${infer N3 extends 0 | Util.BelowTen}`
      ? T extends '-'
        ? Util.SimpleMath<N3, T>
      : N3 extends 9
        ? 10
      : Util.SimpleMath<N3, T>
    : never;
  export type OneThousand = Util.ParseInt<`${Util.BelowTen}${0 | Util.BelowTen}`> | Util.ParseInt<`${Util.BelowTen}${0 | Util.BelowTen}${0 | Util.BelowTen}`> | Util.ParseInt<`${0 | Util.BelowTen}`>;
  export type Addition<N extends Util.OneThousand> = Util.HandleMath<N, '+'>;
  export type Subtraction<N extends Util.OneThousand> = Util.HandleMath<N, '-'>;
  export type NumArray<N extends Util.OneThousand, T extends '+' | '-' = '+'> = {
    [K in Util.OneThousand]: Util.HandleMath<K, T>;
  }[N];

  export type HundredArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
    11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
    21, 22, 23, 24, 25, 26, 27, 28, 29, 30,
    31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
    41, 42, 43, 44, 45, 46, 47, 48, 49, 50,
    51, 52, 53, 54, 55, 56, 57, 58, 59, 60,
    61, 62, 63, 64, 65, 66, 67, 68, 69, 70,
    71, 72, 73, 74, 75, 76, 77, 78, 79, 80,
    81, 82, 83, 84, 85, 86, 87, 88, 89, 90,
    91, 92, 93, 94, 95, 96, 97, 98, 99];
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

  export type Subtract<T extends number, D extends number> =
    [...Array<T>, 0][D] extends infer R ? R extends number ? R : never : never;

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

  export function addition<N extends OneThousand>(num: N): Util.Addition<N> {
    return num + 1 as Util.Addition<N>;
  }
  export function subtraction<N extends OneThousand>(num: N): Util.Subtraction<N> {
    return num - 1 as Util.Subtraction<N>;
  }
  export type DeepFreezeRecursive<T> = DeepReadonly<DeepFreeze<T>>;
  export type DeepFreeze<T> = T extends (infer U)[]
    ? DeepFreezeArray<U>
    : T extends object
    ? DeepFreezeObject<T>
    : T;

  export type Constructor<T = {}> = new (...args: any[]) => T;
  export type UnionFromArray<T> = Extract<T, Array<string>>[number] | Extract<T, string>;
  export type ArrayUnion<T> = Extract<T, Array<string>>;
  export type ObjectOf<T, K extends keyof T> = { [key in K]: T[key] };
  export type ValueOf<T> = T[keyof T];
  export type ReturnArray<K extends keyof T, T> = <V extends T[K]>(ind: K) => [keys: K, values: V];
  export type CreateUnion<K extends keyof T, V extends T[K], T extends ObjectOf<T, K>> = (array: T) => (index: K) => [keys: K, values: V];
  export type IndexByType<T, K extends keyof T> = <V extends T[keyof T]>(ind: K) => [keys: K, values: V];
  export = {};
}
export namespace Metadata {
  export type Config<M extends [M extends string ? M : string, M extends string ? M : never][] extends Tuple<string, string>[] ? [M extends string ? M : string, M extends string ? M : never][] : never> = BaseObject<M> & {
    [K in M[number][0]as K extends keyof Config<M> & M[number][0] ? K : never]: Config<M>[K] extends M[number][1] ? M[number][1] : never;
  };
  export type BaseObject<Meta extends Tuple<string, string>[]> = {
    file?: Meta[number][0] extends 'file' ? Meta[number][1] : never;
    name: Meta[number][0] extends 'name' ? Meta[number][1] : never;
    author?: Meta[number][0] extends 'author' ? Meta[number][1] : never;
    version: Meta[number][0] extends 'version' ? Meta[number][1] : never;
    description: Meta[number][0] extends 'description' ? Meta[number][1] : never;
    copyright?: Meta[number][0] extends 'copyright' ? Meta[number][1] : never;
  } | {
    file: Meta[number][0] extends 'file' ? Meta[number][1] : never;
    name?: Meta[number][0] extends 'name' ? Meta[number][1] : never;
    author?: Meta[number][0] extends 'author' ? Meta[number][1] : never;
    version: Meta[number][0] extends 'version' ? Meta[number][1] : never;
    description: Meta[number][0] extends 'description' ? Meta[number][1] : never;
    copyright?: Meta[number][0] extends 'copyright' ? Meta[number][1] : never;
  };
  export type KeyValuePairs<K extends string, V> = [K, V][];
  export type Author<K extends string, V extends string> = K extends 'author' ? [K, V] : never;
  export type Description<K extends string, V extends string> = K extends 'description' ? [K, V] : never;
  export type Version<K extends string, V extends string> = K extends 'version' ? [K, V] : never;
  export type File<K extends string, V extends string> = K extends 'file' ? [K, V] : never;
  export type Name<K extends string, V extends string> = K extends 'name' ? [K, V] : never;
  export type Copyright<K extends string, V extends string> = K extends 'copyright' ? [K, V] : never;

  export type Tuple<K extends string, V extends string> =
    K extends 'description'
    ? Description<K, V>
    : K extends 'version'
    ? Version<K, V>
    : K extends 'file'
    ? File<K, V>
    : K extends 'name'
    ? Name<K, V>
    : K extends 'author'
    ? Author<K, V>
    : K extends 'copyright'
    ? Copyright<K, V>
    : [K, V];

  export * as Metadata from Metadata;
}


export const { isAlphaNumeric, joinArray, makeTuple, removeChar, split, add, tupleHasProperty, createCallback, executeCallback, addition, subtraction } = Util;

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
import NumArray = Util.NumArray;
import HandleMath = Util.HandleMath;
import OneThousand = Util.OneThousand;
import HundredArray = Util.HundredArray;
import BelowOneHundred = Util.BelowOneHundred;
import TenArray = Util.TenArray;
import BelowTen = Util.BelowTen;
import Addition = Util.Addition;
import Subtraction = Util.Subtraction;
import MetaConfig = Metadata.Config;
import MetaPairs = Metadata.KeyValuePairs;
import MetaTuple = Metadata.Tuple;
import MetaAuthor = Metadata.Author;
import MetaDescription = Metadata.Description;
import MetaVersion = Metadata.Version;
import MetaFile = Metadata.File;
import MetaName = Metadata.Name;
import MetaCopyright = Metadata.Copyright;


export type {
  MetaConfig,
  MetaTuple,
  MetaCopyright,
  MetaAuthor,
  MetaDescription,
  MetaVersion,
  MetaFile,
  MetaName,
  MetaPairs,
  Metadata,
  Util,
  OneThousand,
  HundredArray,
  BelowOneHundred,
  TenArray,
  BelowTen,
  Addition,
  Subtraction,
  HandleMath,
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
  Subtract,
  TupleProperty,
  TupleHasProperty,
  TypeParameter,
  TypePlusParameter,
  UnionFromArray,
  ValueOf,
  RecursiveArray,
  RecursiveObject,
  NumArray
};

export default Util;
