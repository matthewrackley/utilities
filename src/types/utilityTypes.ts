/**
 * @file utilityTypes.ts
 * @description
 * @author Matthew Allen Rackley
 * @copyright [Matthew Rackley's Github](https://www.github.com/matthewrackley "Matthew Rackley on github.com")
 */

export namespace Util {
  export interface StringLike<N extends String['length']> extends String {
    readonly length: N;
  };
  export type DataType = 'User' | 'Zone' | 'Date' | 'RegExp' | 'Error' | 'Promise' | 'DataView' | 'Math' | 'JSON' | 'Promise';
  //@ts-ignore
  export type InverseMapping<T extends { [K in keyof T]: T[K] }> = { [Key in keyof T]: { [K in (T[Key][number] | T[Key]) as K extends string ? K : never]: Key } }[keyof T];
  //@ts-ignore
  export type InverseObject<T extends { [K in keyof T]: T[K] }> = {
    [K in keyof T as T[K] extends T[K][keyof T[K]][] ? T[K][number] : T[K]]: K
  };

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
  type Join = <A extends string[] | readonly string[], D extends string>(seperator: D, array?: A | [...A]) => ArrayToString<A, D>;
  /**
   * @constant {Join} join - Joins an array of strings with a seperator, functionally can
   * replace the Array.prototype.join method.
   * @param {D} seperator - The seperator to join the array with.
   * @param {A | [...A] | undefined} [array] - The array to join.
   */
  const join: Join = (seperator, array) => {
    let str = '' as string;
    (array as NonNullable<typeof array>).forEach((value, index) => {
      if (index < (array as NonNullable<typeof array>).length) {
        str += value;
      }
      if (index < (array as NonNullable<typeof array>).length - 1) {
        str += seperator;
      }
    });
    return str as ArrayToString<NonNullable<typeof array>, typeof seperator>;
  }
  const val = join('-', ['a', 'b', 'c']);
  const getInverseMapping = <T extends { [x: string]: T[keyof T] }>(obj: T) => {
    return obj as InverseMapping<T>;
  }
  const getInverseObject = <
    T extends { [x: string]: Array<T[keyof T][number]> },
    K extends T[keyof T][number] = T[keyof T][number] extends infer U extends string ? U : never
  >(obj: T) => {//@ts-ignore
    return obj as InverseObject<T>;
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
  export type MakeNormal<T> = T extends Readonly<T> | { readonly [x in any]: any }[keyof T] ? T | { -readonly [x in any]: any } : never;
  export type TypePlusParameter<Type, Param> = Type extends TypeParameter<Param> ? Type : never;
  export type TypeParameter<T> = T extends infer U ? U : never;
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
  const numericalArray = <T extends (number | string | symbol)[]>(...args: T) => args as T;
  const vall = numericalArray(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 'str');
  type MultiCase<T extends string> = Uppercase<T> | Lowercase<T>;
  type AlphaNumeric<T extends string> = T extends `${infer F}${infer R}`
    ? (F extends AlphaNumericUnion ? `${F}${AlphaNumeric<R>}` : never)
    : T;
  type vvv = AlphaNumeric<'what123'>;
  type AlphaNumericUnion = Split<Alphabet>[number] | Split<'0123456789'>[number] | '.' | '-';
  type Alphabet = MultiCase<'abcdefghijklmnopqrstuvwxyz'>;
  type Split<S extends string> = ReturnType<typeof split<S>>;

  type StringToNumber<S extends string> = S extends `${infer F extends number}${infer R}` ? F | StringToNumber<R> : never;

  type AdditionHelper = {
    [K in BelowOneHundred as K extends 99 ? never : K]: typeof belowOneHundred[K];
  } & {
    0: 1;
    99: 0;
  }

  export type ObjectHasProperty<Obj1, Obj2, Property extends keyof Obj1 | keyof Obj2 = keyof Obj1 | keyof Obj2> = Property extends keyof Obj1 ? Obj1[Property] : Property extends keyof Obj2 ? Obj2[Property] : never;
  type AddTenHelper<Stop extends boolean = false> = {
    [K in BelowTen as K extends 9 ? never : K]: typeof belowTen[K];
  } & {
      [K in BelowTen as Stop extends false ? 9 : never]: 0;
    } & {
      0: 1;
    };
  type AddTen<T, Stop extends boolean = false> = AddTenHelper<Stop>[T extends keyof AddTenHelper<Stop> ? T : never];
  type AddOne<T> = AdditionHelper[T extends keyof AdditionHelper ? T : never];
  type AddOnePatch<T extends number> =
    T extends infer N extends number
    ? `${N}` extends `${infer N1 extends number}${infer N2 extends number}${infer N3 extends number}`
    ? `${AddTen<N1>}${AddTen<N2>}${AddTen<N3>}`
    : N extends 99
    ? 100
    : `${N}` extends `${infer N1 extends 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9}${infer N2 extends 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8}`
    ? `${AddTen<N1>}${AddTen<N2>}`
    : AddTen<N>
    : never;
  const belowOneHundred = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
    11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
    21, 22, 23, 24, 25, 26, 27, 28, 29, 30,
    31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
    41, 42, 43, 44, 45, 46, 47, 48, 49, 50,
    51, 52, 53, 54, 55, 56, 57, 58, 59, 60,
    61, 62, 63, 64, 65, 66, 67, 68, 69, 70,
    71, 72, 73, 74, 75, 76, 77, 78, 79, 80,
    81, 82, 83, 84, 85, 86, 87, 88, 89, 90,
    91, 92, 93, 94, 95, 96, 97, 98, 99] as const;
  type BelowOneHundred = typeof belowOneHundred[number];
  const belowTen = [1, 2, 3, 4, 5, 6, 7, 8, 9] as const;
  type BelowTen = typeof belowTen[number];
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
  export type Tuple = Array<Tuple>;
  // function checkProperty<
  //   Obj extends SimpleObject<Obj, Property<Obj>>,
  //   Value extends Obj[Property<Obj>],
  //   Tuple extends [...Tuple[number][]]
  // >(obj: Obj, property: Property<typeof obj> | [...Property<typeof obj>[]], values: Value | [...Value[]], tuple?: Tuple) {
  //   if (Array.isArray(property)) {
  //     const keys = Object.keys(obj);

  //     if (keys.includes(obj[property as keyof Obj])) {
  //       return obj[property as keyof Obj];
  //     }
  //   }
  //   if (tuple) {
  //     if (tuple.includes(obj[property])) {
  //       return obj[property];
  //     }
  //   }
  //   return obj[property];
  // }


  // type CreateConcise<Obj extends { [x: string]: Obj[R extends keyof Obj ? R : keyof Obj] }, FromThis extends [...any], R extends keyof Obj | Obj[keyof Obj] = keyof Obj> = {
  //   [Prop in keyof Obj as HasProperty<Obj, Prop, FromThis[number]> extends never ? never : Prop]: HasProperty<Obj, Prop, FromThis[number]>;
  // };
  export type Concurrent<Obj, R extends keyof Obj | Obj[keyof Obj] = keyof Obj> = { [K in keyof Obj as R extends keyof Obj ? R : K]: Obj[K] | R };
  export type ObjectFromUnion<O = {}> = <PKeys extends keyof O, PValues extends O[PKeys]>(keys: PKeys,) => {
    [P in PKeys]: PValues;
  };

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
  export type TupleProperty<T extends [any, ...any[]]> = <V, N extends number>(index: N) => TupleHasProperty<V, T, typeof index>;
  export type TupleHasProperty<V, T extends [any, ...any[]], N extends number> = (tuple: T) => V extends T[number] ? T[V] : never;
  function tupleHasProperty<T extends [...any[]]>(index: number): T[number] {
    return index as T[number];
  }
  export type Obj<T> = {
    [K in keyof T]: T[K];
  };
  const toTuple = <T extends [...any[]], X extends keyof T>(...prop: T) => prop as X extends T[number] ? T : never;
  const tupleMaker = <
    T extends [...T[] extends infer U ? Obj<U> | U : never],
    K extends keyof T | T[number],
    Tuple extends [K, ...K[]] & T & K = T extends [K, ...K[]] & T & K ? T : never
  >(...props: Tuple extends [...K[]] & T ? Tuple : never) => props;


  export type TupleArray<T extends [...any[]]> = T[number];

  export function makeTuple<T extends T[number][]>(...args: T) { return args; }



  export interface DeepFreezeArray<T> extends ReadonlyArray<DeepFreeze<T>> { }

  export type DeepFreezeObject<T> = {
    readonly [P in keyof T]: DeepFreeze<T[P]>;
  };

  export type DeepReadonly<T> = {
    readonly [P in keyof T]: DeepReadonly<T[P]>;
  };

  export type DeepFreezeRecursive<T> = DeepReadonly<DeepFreeze<T>>;
  export type DeepFreeze<T> = T extends (infer U)[]
    ? DeepFreezeArray<U>
    : T extends object
    ? DeepFreezeObject<T>
    : T;


  export type UnionFromArray<T> = Extract<T, Array<string>>[number] | Extract<T, string>;
  export type ArrayUnion<T> = Extract<T, Array<string>>;
  export type ObjectOf<T, K extends keyof T> = { [key in K]: T[key] };
  export type ValueOf<T> = T[keyof T];
  export type ReturnArray<K extends keyof T, T> = <V extends T[K]>(ind: K) => [keys: K, values: V];
  export type CreateUnion<K extends keyof T, V extends T[K], T extends ObjectOf<T, K>> = (array: T) => <V extends T[keyof T]>(index: K) => [keys: K, values: V];
  export type IndexByType<T, K extends keyof T> = <V extends T[keyof T]>(ind: K) => [keys: K, values: V];
}
export default Util;
