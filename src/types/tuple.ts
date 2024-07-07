/**
 * @file tupleType.ts
 * @description
 * @author Matthew Allen Rackley
 * @copyright [Matthew Rackley's Github](https://www.github.com/matthewrackley "Matthew Rackley on github.com")
 */
import { Subtraction, Fifteen, Fifty, OneHundred } from './utilityTypes';
namespace Util {
  export type Tupleize<T extends readonly any[]> = { -readonly [K in keyof T]: T[K] };
  export type Tupler<T extends any[]> = T extends [...infer F, infer L] ? [...F, L] : never;
  export type TupleLength<T extends readonly any[]> = T['length'];
  export type TupleHead<T extends readonly any[]> = T[0];
  export type TupleTail<T extends readonly any[]> = T[1];
  export type TupleLast<T extends readonly any[]> = T[TupleLength<T>];
  export type TuplePush<T extends readonly any[], V> = [...T, V];
  export type TuplePop<T extends readonly any[]> = TupleHead<T>;
  export type TupleShift<T extends readonly any[]> = TupleTail<T>;
  export type TupleUnshift<T extends readonly any[], V> = TuplePush<T, V>;
  export type TupleConcat<T extends readonly any[], U extends readonly any[]> = [...T, ...U];
  export type TuplePrepend<T extends readonly any[], U extends readonly any[]> = TupleConcat<U, T>;
  export type TupleGet<T extends readonly any[], I extends number> = T[I];
  export type TupleSet<T extends readonly any[], I extends number, V> = [...TupleHead<T>, V, ...TupleTail<T>];
  export type TupleRemove<T extends readonly any[], I extends number> = TupleConcat<TupleHead<T>, TupleTail<T>>;
  export type TupleRemoveAll<T extends readonly any[], U extends readonly any[]> = TupleConcat<TupleHead<T>, TupleTail<T>>;
  export type TupleReverse<T extends readonly any[]> = [...T];
  export type TupleReverseInPlace<T extends readonly any[]> = [...T];
  export type TupleSlice<T extends readonly any[], S extends number, E extends number> = [...T];
  export type TupleSplice<T extends readonly any[], S extends number, E extends number, U extends readonly any[]> = [...T];
  export type TupleSort<T extends readonly any[]> = [...T];
  export type TupleSortInPlace<T extends readonly any[]> = [...T];
  export type TupleFill<T extends readonly any[], V> = [...T];
  export type TupleFillBy<T extends readonly any[], V> = [...T];
  export type TupleFlat<T extends readonly T[number][]> = [...T];
  export type AppendToStringArray<Arr extends string[], T extends string[], NewArr extends [...Arr, ...T]> = NewArr;
  export type MakeTuple<T extends any extends Array<infer U extends string | number> ? U : never> = T extends infer L extends string | number ? Array<L> extends Array<[...infer U]> ? readonly [...U] : [...[T]] : never;


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
  export type Tupleizer = typeof tupleizer;

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
  export function tupleizer<T extends Tuple<T>>(...args: T): T {
    return [...args];
  };


  export type TupleIterator<T extends Tuple<T>, N extends keyof T & number> = IterableIterator<GetNumericalIndex<T>[N]>;

  /**
   * @type GetNumericalIndex
   * @template T - The tuple to get the numerical index of.
   * @template I - The index of the tuple.
   * @description Used to get the numerical index of a tuple.
   * @example
   * type Example = GetNumericalIndex<[1,2,3,4,5,6,7,8,9,10]>;
   * // output: [[0, 1], [1, 2], [2, 3], [3, 4], [4, 5], ...etc, [9, 10]]
   * // note: the output is a tuple of tuples, where the first value is the index, and the second value is the value at that index.
   */
  export type GetNumericalIndex<T extends any[], I extends any[] = []> =
    T extends [infer F, ...infer R]
    ? GetNumericalIndex<R, [...I, [I['length'], F]]>
    : I;

  /**
   * @generator @function indexedNumberGenerator
   * @template T - The tuple to get the numerical index of.
   * @template N - The index of the tuple.
   * @param {T} tuple - The tuple to get the numerical index of.
   * @returns {TupleIterator<T, N>} The iterator for the tuple.
   */
  export function* indexedNumberGenerator<T extends Tuple<T>, N extends keyof T & number>(...tuple: T): TupleIterator<T, N> {
    let index = 0 as N;
    while (true) {
      yield [index, tuple[index++ as N]] as [N, T[N]] extends GetNumericalIndex<T>[N] ? [N, T[N]] : never;
    }
  }


  export type PrepareStructure<T, U> =
    // Check if both types are objects
    T extends object ? U extends object ?
    // Iterate over keys of T
    { [K in keyof T]:
      // Ensure the key exists on U and recurse
      K extends keyof U ? PrepareStructure<T[K], U[K]> : never
    } &
    // Iterate over keys of U to ensure no extra properties
    { [K in keyof U]:
      K extends keyof T ? PrepareStructure<U[K], T[K]> : never
    }
    // If both are arrays, compare item types
    : T extends any[] ? U extends any[] ? PrepareStructure<T[number], U[number]> : never
    // If one is an array and the other isn't, they're not the same
    : never
    // If T is not an object, check for direct type equality
    : [T] extends [U] ? U extends T ? true : false : never;

  export type SameTupleStructure<T, U> =
    [T] extends [U]
    ? U extends [unknown]
    ? (T extends [infer FT, ...infer RT]
      ? U extends [infer FU, ...infer RU]
      ? SameStructure<FT, FU> extends true
      ? SameStructure<RT, RU> extends true
      ? true
      : false
      : false
      : false
      : false)
    : true // If U is not an array, return true since T extends U (both are non-arrays)
    : false; // If T does not extend U, return false

  // Helper type to compare object structures
  export type SameObjectStructure<O1, O2> =
    O1 extends object
    ? O2 extends object
    ? {
      [K in keyof O1]: K extends keyof O2
      ? SameStructure<O1[K], O2[K]>
      : never
    } extends { [K in keyof O1]: true }
    ? true
    : false
    : false
    : false;

  // Overload SameStructure for objects
  export type SameStructure<T, U> =
    T extends object
    ? U extends object
    ? SameObjectStructure<T, U>
    : false
    : T extends [any, ...any[]]
    ? U extends [any, ...any[]]
    ? {
      [Index in keyof T]: Index extends keyof U
      ? SameStructure<T[Index], U[Index]>
      : never
    }[number] extends true
    ? true
    : false
    : false
    : T extends U
    ? true
    : false;
  type Obj1 = { a: number; hello: string; c: { d: true } };
  type Obj2 = { a: number; b: string; c: { d: true } };
  type Obj3 = { a: number; b: string; c: { e: boolean } };
  type tuple1 = [1, 2, 3, 4, 5];
  type tuple2 = [1, 2, 3, 4, 5];
  type tuple3 = [1, 2, 3, 4, 5, 6];
  export type SameObjectStructure2<O1, O2> =
    O1 extends object ? O2 extends object ? {
      [K in keyof O1]: K extends keyof O2 ? SameStructure<O1[K], O2[K]>
      : never
    } extends { [K in keyof O1]: true }
    ? true
    : false
    : false
    : false;

  type Test1 = SameStructure<Obj1, Obj2>; // Should be true
  type Test2 = SameStructure<Obj1, Obj3>; // Should be false because of different property names in nested object

  export type HandleArgumentsTuple<T extends any[], AV extends any[]> = (...args: [...TupleHelper<T>, ...TupleHelper<AV>]) => void;

  //___=============================>    <============================___\\
  //___|| ==================== ||            || =================== ||___\\
  //___=============================>    <============================___\\
  //@ts-ignore

  function objectt<T extends Literal<T>>(o: T) {
    return o;
  }
  type GetNum<T extends Fifteen = 10> = Subtraction<T>;
  function getNum<T extends Fifteen>(num: T) {
    return num - 1 as Subtraction<T>;
  };
  const val = getNum(10)
  const valuee = objectt({ cars: { toyota: { camry: { year: 2021, color: 'blue' } } } });


  export type Literals<T = any, Depth extends Fifteen = 15> = (string | number | symbol | boolean | object | NestedObject<T, Subtraction<Depth>> | [Literals<T, Subtraction<Depth>>, ...Literals<T, Subtraction<Depth>>[]]) |
  [(string | number | symbol | boolean | object | NestedObject<T, Subtraction<Depth>> | Literals<T, Subtraction<Depth>>), ...(string | number | symbol | boolean | object | NestedObject<T, Subtraction<Depth>> | Literals<T, Subtraction<Depth>>)[]];

  export type TupleDescriptor<T, D extends boolean = true> = {
    configurable: D extends false ? boolean : false;
    enumerable: D extends false ? boolean : true;
    writable: D extends false ? boolean : false;
    value: T;
    get?(): T;
    set?(v: T): T;
  }

  export type NumStrKey<T> = T extends number | string ? T : never;
  export type TupleHelper<T = any> = (Literals | TupleArray<T> | ArrayTuple<T> | TupleObject<T>)[];
  export type TupleLit<T extends Tuple<T>> = [...T];
  export type ObjectProto<O> = { [K in keyof O as NumStrKey<K>]: O[K] };
  export type Unscopables =
    | typeof Symbol.toPrimitive
    | typeof Symbol.length
    | typeof Symbol.toStringTag
    | typeof Symbol.metadata
    | typeof Symbol.unscopables
    | typeof Symbol.hasInstance
    | typeof Symbol.isConcatSpreadable
    | typeof Symbol.match
    | typeof Symbol.matchAll
    | typeof Symbol.replace
    | typeof Symbol.search
    | typeof Symbol.split
    | typeof Symbol.species
    | typeof Symbol.asyncIterator
    | typeof Symbol.iterator
    | typeof Symbol.toString
    | typeof Symbol.toLocaleString
    | typeof Symbol.valueOf
    | typeof Symbol.hasOwnProperty
    | typeof Symbol.isPrototypeOf
    | typeof Symbol.propertyIsEnumerable
    | typeof Symbol.constructor
    | typeof Symbol.prototype
    | typeof Symbol.asyncDispose
    | typeof Symbol.dispose
    | typeof Symbol.for
    | typeof Symbol.keyFor
    | typeof Symbol.arguments
    | typeof Symbol.caller
    | typeof Symbol.name
    | typeof Symbol.bind
    | typeof Symbol.apply
    | typeof Symbol.call
    | SymbolConstructor['iterator']
    | 'toString'
    | 'toLocaleString'
    | 'valueOf'
    | 'hasOwnProperty'
    | 'isPrototypeOf'
    | 'propertyIsEnumerable'
    | 'constructor'
    | 'prototype'
    | 'unscopables'
    | 'length'
    | 'toStringTag'
    | 'toPrimitive';

  export type ObjectWithDepth<T extends {} = {}, Depth extends number = 5> = {//@ts-ignore
    [K in keyof T]: Depth extends 0 ? unknown : ObjectWithDepth<T[K] extends Literal<T[K]> ? Literal<T[K]> : never, Subtract<Depth, 1>>;
  };
  function objecttt<T extends Literal<T>>(param: ObjectWithDepth<T>): ObjectWithDepth<T> {
    return param;
  }
  const vall = objecttt({ balloons: 'cars', cars: { balloons: 'cars' } });
  /**
   * @type {NestedObject<T>} - Creates a nested object type from a tuple.
   * @param {T} T - The tuple to create an object from.
   * @description
   * - Recursive type
   * - Helper type
   * - Parameter type
   */
  export type NestedObject<T, Depth extends number = 15> = { [K in keyof T]: T[K] extends object ? Depth extends 0 ? Literals<T[K], Depth> : NestedObject<T[K], Subtract<Depth, 1>> : T[K] };
  /**
   * @type {NonArrayLiteral<T>} - Creates a literal type for anything besides a tuple.
   * @param {T} T - The tuple to create a literal type from.
   * @description
   * - Helper type
   * - Parameter type
   */
  export type NonArrayLiteral<T, Depth extends number = 15> = { [K in keyof T]: T[K] extends (Literals<T, Subtract<Depth, 1>> | Literals<T, Subtract<Depth, 1>>[]) ? (Literals<T, Subtract<Depth, 1>> | Literals<T, Subtract<Depth, 1>>[]) : Tuple<T, Subtract<Depth, 1>> };
  /**
   * @type {Tuple<T>} - Creates a tuple type when used in a rest parameter.
   * @param {T} T - The tuple to create a tuple type from.
   * @note THIS TYPE MUST BE USED AS A REST SPREAD PARAMETER `[...T]`
   * @description
   * - Helper type
   * - Parameter type
   */
  export type Tuple<T = any, Depth extends number = 15> = [(Literals<T, Subtract<Depth, 1>> | NonArrayLiteral<T, Subtract<Depth, 1>> | TupleObject<T, Subtract<Depth, 1>>), ...(Literals<T, Subtract<Depth, 1>> | NonArrayLiteral<T, Subtract<Depth, 1>> | TupleObject<T, Subtract<Depth, 1>>)[]];

  function getObject<T extends Tuple<T>>(...o: T) {
    return o;
  }
  const obj = getObject({ cars: { toyota: { camry: { year: 2021, color: 'blue' } } } });
  /**
   * @type {Literal<T>} - Creates a literal type from any possible type of Literal, used as a parameter type.
   * @param {T} T - The type to create a literal type from.
   * @description
   * - Helper type
   * - Parameter type
   * - General use Literal
   */
  export type Literal<T, Depth extends number = 15> = [(Literals<T, Subtract<Depth, 1>> | TupleObject<T, Subtract<Depth, 1>>), ...(Literals<T, Subtract<Depth, 1>> | TupleObject<T, Subtract<Depth, 1>>)[]] | NonArrayLiteral<T, Subtract<Depth, 1>>;

  export function isDescriptorMap<O extends { [K in keyof O]: O[K] }>(o: TupleDescriptorMap<O>): o is TupleDescriptorMap<O> {
    const keys = Object.keys(o) as (keyof TupleDescriptorMap<O>)[];
    if (o && typeof o === 'object' && keys.every((k): k is keyof TupleDescriptorMap<O> => typeof k === 'string')) {
      return keys.every((k): k is keyof TupleDescriptorMap<O> => o[k] && Object.hasOwn(o[k], 'value') && o[k].value);
    } else {
      return false;
    }
  }
  export function loopAssigner<O extends Literal<O>, T extends O>(o: O, assignTo: T) {
    for (const key of Object.keys(assignTo) as (keyof T | keyof O)[]) {
      if (typeof key === 'string') {
        if (isDescriptorMap<T>(o as TupleDescriptorMap<T>) === true) {
          (assignTo as TupleDescriptorMap<T>)[key].value = (o as T)[key as keyof TupleDescriptorMap<T>];
        } else {
          (assignTo as T extends O ? T : O)[key as keyof T extends keyof O ? keyof T : keyof O] = (o as T extends O ? T : O)[key as keyof T extends keyof O ? keyof T : keyof O];
        }
      } else {
        throw new Error('Invalid key type');
      }
    }
    return assignTo;
  }
  export type ExtraUnscopables<T, K extends T | undefined = undefined> = T extends Unscopables | K ? never : T;
  export type OmitUnscopables<O, T extends string> = Omit<O, ExtraUnscopables<T>>;
  export type OmittedTupleValues<T extends Tuple<T>> = { [K in keyof T as K extends 'instance' | 'value' | Unscopables ? never : K]: T[K] };
  export type TupleDescriptorMap<O extends { [K in keyof O & string]: O[K] }> = {
    [K in keyof O & string]: TupleDescriptor<O[K]>;
  }
  export type NumberKey<T> = keyof T extends number ? keyof T : never;
  export type NumIndex<T> = T extends number ? T : never;
  /**
   * @type {<TupleObject>} TupleObject - Creates a literal object type from a tuple.
   * @param {T} T - The tuple to create an object from.
   * @returns {TupleObject<T>} The literal object.
   */
  export type TupleObject<T, Depth extends number = 50> = keyof T extends number
    ? T[NumberKey<T>] extends object // note: T[number] can be a recursive object
    ? { [K in keyof T[NumberKey<T>]]: T[NumberKey<T>][K] extends
      | { [K2 in keyof T[NumberKey<T>][K]]: T[NumberKey<T>][K][K2] }
      | Literals<T>
      ? T[keyof T]
      : never
    } : never
    : never;
  export type TupleArray<T> = { [K in keyof T as ArrayKeys<K>]: ExtendsLiterals<T[K][keyof T[K]]> };
  export type ArrayTuple<T> = { [K in ArrayKeys<keyof T>]: ExtendsLiterals<T[K]> };
  export type ExtendsObjectProps<T, K extends keyof T[NumberKey<T>]> = T[NumberKey<T>][K] extends
    | { [K2 in keyof T[NumberKey<T>][K]]: T[NumberKey<T>][K][K2] }
    | Literals<T> ? T[keyof T] : never;
  export type ExtendsLiterals<T> = T extends Literals | TupleObject<T> ? T : never;
  export type ArrayKeys<T> = T extends number ? T : never;

  export type ArrayExtensions<T extends Tuple<T>> = T extends Array<Tuple<T>[number]> ? {
    [K in keyof T extends number ? keyof T | 'value' : never as K extends keyof T | 'value' ? K : never]: K extends 'length' ? T['length'] : K extends 'value' ? T : K extends keyof T ? T[K] : never
  } & {
    readonly length: T['length']
    readonly value: T;
  } : never;
  export type TupleParams<O, T extends TupleHelper<T>> = [o: O, descriptorMap: TupleDescriptorMap<O>, tuple: [...T]];
  export type ObjectType<O extends { [x: string]: O[keyof O & string] extends Literals ? O[keyof O & string] : never }> = {
    [K in keyof O extends string ? keyof O : never]: O[K];
  };

  export type ObjectLiteral<T> = { [K in keyof T as K extends string ? K : never]: T[K] extends Literals ? T[K] : never };


  // var Tuple: Tuple = function <T extends TupleRest<T>>(...properties: T) {
  //   var tuple = Array(...properties) as Tuple & T;
  //   tuple.value = properties as Tuple & T;
  //   tuple = properties as Tuple & T;
  //   return tuple;
  // }
  // Tuple[Symbol.iterator] = function*<T extends TupleRest<T>, N extends keyof T & number>() {
  //   let prop: T[N];
  //   for (prop of Tuple.value as Tuple) {
  //     yield prop;
  //   }
  // }
  // Tuple[Symbol.toStringTag] = 'Tuple';


  export type TupleType<T extends Tuple<T>> = T & {
    new <T extends Tuple<T>>(...properties: T): TupleType<T>;
    constructor(...properties: T): TupleType<T>;
    readonly value: T;
    instance: TupleType<T>;
    readonly length: [...T]['length'],
    [Symbol.iterator]: typeof indexedNumberGenerator,
    [Symbol.toStringTag]: 'TupleType',
    create: <
      Obj extends Literal<Obj>,
      O extends Obj & { value: T, instance: T & Obj },
      Keys extends (keyof O & string)[],
      OT extends {
        [K in Keys[number]]: {
          configurable: boolean;
          enumerable: boolean;
          writable: boolean;
          value: O[K];
        }
      }
    >(o: Obj, descriptorMap: OT) => T & O;
  }

  export var TupleType = tupleType;

  export function tupleType<T extends Tuple<T>>(...properties: T | []) {
    var tupleType = {} as TupleType<T>;
    tupleType = {
      ...properties,
      value: properties,
      length: [...properties]['length'],
      [Symbol.iterator]: () => indexedNumberGenerator(properties),
      [Symbol.toStringTag]: 'TupleType',
      instance: tupleType.instance,
      create: <
        Obj extends Literal<Obj>,
        O extends Obj & { value: T, instance: T & Obj },
        Keys extends (keyof O & string)[],
        OT extends {
          [K in Keys[number]]: {
            configurable: boolean;
            enumerable: boolean;
            writable: boolean;
            value: O[K];
          }
        }>(o: Obj, descriptorMap: OT) => {
        var tuple = properties as T & O;
        const keys = Object.keys(o) as (keyof typeof o & string)[];
        for (const key of keys) {
          if (typeof key === 'string') {
            tuple = {
              ...tuple,
              [key]: o[key]
            }
            Object.defineProperty(tuple, key, {
              configurable: descriptorMap[key].configurable ? descriptorMap[key].configurable : false,
              enumerable: descriptorMap[key].enumerable ? descriptorMap[key].enumerable : true,
              writable: descriptorMap[key].writable ? descriptorMap[key].writable : false,
            })
          }
        }
        return tuple;
      }
    } as TupleType<T>;
    return tupleType as TupleType<T>;
  };
}


import Tuple = Util.Tuple;
import TupleType = Util.TupleType;
import ObjectLiteral = Util.ObjectLiteral;
import NonArrayLiteral = Util.NonArrayLiteral;
import TupleHelper = Util.TupleHelper;
import TupleObject = Util.TupleObject;
import TupleArray = Util.TupleArray;
import ArrayTuple = Util.ArrayTuple;
import TupleDescriptorMap = Util.TupleDescriptorMap;
import TupleParams = Util.TupleParams;
import ObjectType = Util.ObjectType;
import Literal = Util.Literal;
import NestedObject = Util.NestedObject;
import Tupleize = Util.Tupleize;
import Tupler = Util.Tupler;
import TupleLength = Util.TupleLength;
import TupleHead = Util.TupleHead;
import TupleTail = Util.TupleTail;
import TupleLast = Util.TupleLast;
import TuplePush = Util.TuplePush;
import TuplePop = Util.TuplePop;
import TupleShift = Util.TupleShift;
import TupleUnshift = Util.TupleUnshift;
import TupleConcat = Util.TupleConcat;
import TuplePrepend = Util.TuplePrepend;
import TupleGet = Util.TupleGet;
import TupleSet = Util.TupleSet;
import TupleRemove = Util.TupleRemove;
import TupleRemoveAll = Util.TupleRemoveAll;
import TupleReverse = Util.TupleReverse;
import TupleReverseInPlace = Util.TupleReverseInPlace;
import TupleSlice = Util.TupleSlice;
import TupleSplice = Util.TupleSplice;
import TupleSort = Util.TupleSort;
import TupleSortInPlace = Util.TupleSortInPlace;
import TupleFill = Util.TupleFill;
import TupleFillBy = Util.TupleFillBy;
import TupleFlat = Util.TupleFlat;
import AppendToStringArray = Util.AppendToStringArray;
import MakeTuple = Util.MakeTuple;

export type {
  Tuple, ObjectLiteral, NonArrayLiteral, TupleHelper, TupleObject, TupleArray, ArrayTuple, TupleDescriptorMap, TupleParams, ObjectType, Literal, NestedObject, Tupleize, Tupler, TupleLength, TupleHead, TupleTail, TupleLast, TuplePush, TuplePop, TupleShift, TupleUnshift, TupleConcat, TuplePrepend, TupleGet, TupleSet, TupleRemove, TupleRemoveAll, TupleReverse, TupleReverseInPlace, TupleSlice, TupleSplice, TupleSort, TupleSortInPlace, TupleFill, TupleFillBy, TupleFlat, AppendToStringArray, MakeTuple
};
export {
  TupleType
};
export default Util;
//___=============================>         <============================___\\
//___|| ==================== ||      TYPES      || =================== ||___\\
//___=============================>         <============================___\\
//___=============================>             <============================___\\
//___|| ==================== ||      CONSTANTS      || =================== ||___\\
//___=============================>             <============================___\\
//___=============================>             <============================___\\
//___|| ==================== ||      FUNCTIONS      || =================== ||___\\
//___=============================>             <============================___\\
//___=============================>             <============================___\\
//___|| ==================== ||      EXPORTS      || =================== ||___\\
//___=============================>             <============================___\\

export const {
  indexedNumberGenerator,
  tupleType,
  isDescriptorMap,
  loopAssigner,
  tupleizer
} = Util
