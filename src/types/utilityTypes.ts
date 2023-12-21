/**
 * @file utilityTypes.ts
 * @description
 * @author Matthew Allen Rackley
 * @copyright [Matthew Rackley's Github](https://www.github.com/matthewrackley "Matthew Rackley on github.com")
 */

export interface StringLike<N extends String['length']> extends String {
  readonly length: N;
};
type DataType = 'User' | 'Zone' | 'Date' | 'RegExp' | 'Error' | 'Promise' | 'DataView' | 'Math' | 'JSON' | 'Promise';
type DataSet<D extends DataType> = [
  [any, ...any],
  ...[...any]
];

export type FilterNever<T> = {
  [K in keyof T as T[K] extends never ? never : K]: T[K];
};
export type FilterNestedNever<T> = {
  [K in keyof T]: {
    [P in keyof T[K] as T[K][P] extends never ? never : P]: T[K][P];
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
interface MyObj<A extends [...any]> {
  [x: string]: A[number];
}
type RegionCode = "AS" | "AD" | "BM" | "CX";
export type MakeNormal<T> = T extends Readonly<T> | { readonly [x in any]: any }[keyof T] ? T | { -readonly [x in any]: any } : never;
type TypePlusParameter<Type, Param> = Type extends TypeParameter<Param> ? Type : never;
type TypeParameter<T> = T extends infer U ? U : never;

type ObjectHasProperty<Obj1, Obj2, Property extends keyof Obj1 | keyof Obj2 = keyof Obj1 | keyof Obj2> = Property extends keyof Obj1 ? Obj1[Property] : Property extends keyof Obj2 ? Obj2[Property] : never;

type RecursiveObject<T> = {
  [K in keyof T]: T[K]
};

interface SimpleObject<T extends {}, K extends keyof T = keyof T>  {
  [x: PropertyKey]: T[K];
};
type ObjectWithDepth<T extends {} = {}, Depth extends number = 5> = {//@ts-ignore
  [K in keyof T]: Depth extends 0 ? unknown : ObjectWithDepth<T[K], Subtract<Depth, 1>>;
};
//type Obj<T extends { [K in Key]: T[K] } = any, Key extends keyof T = keyof T> = T extends { [K in keyof T]: T[K] } ? T : never;
const obj2 = {
  val: 'test',
  num: 123,
  bool: true,
  obj: {
    val: 'test',
    num: 123,
    bool: true,
  },
};
var object2: ObjectWithDepth<{
  val: 'test',
  num: 123,
  bool: true,
  obj: {
    val: 'test',
    num: 123,
    bool: true,
  },
}>;
interface ObjectProps {
  head: string;
  body: string;
  tail: string;
}
const objectProps = {
  head: 'test' as 'test',
  body: 'test',
  tail: 'test',
};

type Subtract<T extends number, D extends number> =
  [...Array<T>, 0][D] extends infer R ? R extends number ? R : never : never;
var object = {
  val: 'test',
  num: 123,
  bool: true,
};
type RecursiveObject2 = typeof object;
type RecursiveArray<A extends [...any[]] = [...any[]]> = {
  [K in keyof A]: A[K];
};
const recursiveArray: RecursiveArray = [1, 2, 3, 4, 5];
type Property<Obj extends {}> = keyof Obj;
type ValueOf<T extends any> = T;
type Tuple = Array<Tuple>;
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
type Concurrent<Obj, R extends keyof Obj | Obj[keyof Obj] = keyof Obj> = { [K in keyof Obj as R extends keyof Obj ? R : K]: Obj[K] | R };
type ObjectFromUnion<O = {}> = <PKeys extends keyof O, PValues extends O[PKeys]>(keys: PKeys, ) => {
  [P in PKeys]: PValues;
};

// function createConcise<R extends any = undefined, Obj extends Concurrent<Obj, R> = Concurrent<{}, R>, FromThis extends [...any[]], R extends keyof Obj | Obj[keyof Obj] = keyof Obj>(obj: Obj): CreateConcise<Obj, FromThis, R> {
//   return obj;
// }
type UserData<N extends Names> = [
  [N extends 'Matt' ? N : never, 28, 'Texas', ['Discord', 'Snapchat', 'Instagram'], 'Marack', false],
  [N extends 'Ryan' ? N : never, 24, 'Florida', ['Discord', 'Facebook', '4chan'], 'Percy', true]
];
type Names = 'Matt' | 'Ryan';

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
function tupleHasProperty<T extends [...any[]]>(index: number): T[number] {
  return index as T[number];
}
type Obj<T> = {
  [K in keyof T]: T[K];
};
const toTuple = <T extends [...any[]], X extends keyof T>(...prop: T) => prop as X extends T[number] ? T : never;
const tupleMaker = <
  T extends [...T[] extends infer U ? Obj<U> | U : never],
  K extends keyof T | T[number],
  Tuple extends [...K[]] & T = T extends [...K[]] & T ? T : never
>(...props: Tuple extends [...K[]] & T ? Tuple : never) => props;
const valessa = tupleMaker('test', 123, { prop1: 'test', prop2: 123 });


type TupleArray<T extends [...any[]]> = T[number];

export function makeTuple<T extends T[number][]>(...args: T) { return args; }

type ExampleTuple = [string, number, { prop1: string; prop2: number }];
