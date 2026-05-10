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


type PrimType = string | number | symbol | object | boolean | any[];
interface ExtendedArray<P extends PrimType> extends Array<P> {
  exists: ExtendedExists<P>;
  isVal: ExtendedIsVal<P>;
  nextVal: ExtendedSibling<P>;
  prevVal: ExtendedSibling<P>;
  curIndex: ExtendedIndex<P>;
  getVal: GetVal<P>;
  iStartsWith: ExtendedWith<P>;
  iEndsWith: ExtendedWith<P>;
  includes: ExtendedIncludes<P>;
  constructor(this: ExtendedArray<P>, ...items: P[]): ExtendedArray<P>;
}
type ExtendedExists<P extends PrimType> = <T extends PrimType[]>(this: ExtendedArray<P>, ...values: T) => this is (T[number] | P)[];
type ExtendedIsVal<P extends PrimType> = <T extends P[]>(this: ExtendedArray<P>, value: P, ...searchValues: T) => value is T[number];
type ExtendedSibling<P extends PrimType> = <R = P>(this: ExtendedArray<P>, currentValue: P, validator?: ((value: P | unknown) => value is R)) => R;
type ExtendedIndex<P extends PrimType> = (this: ExtendedArray<P>, currentValue: P) => number;
type ExtendedWith<P extends PrimType> = <T extends string>(this: ExtendedArray<P>, index: number, searchString: T, atPosition?: number) => boolean;
type ExtendedIncludes<P extends PrimType> = <T extends P>(this: ExtendedArray<P>, searchElement: P, fromIndex?: number) => searchElement is T;

interface GetVal<P extends PrimType> {
  <R extends P, A extends [validator: (value: P) => value is R, ...values: P[]] | P[]>(this: ExtendedArray<P>, ...values: A[0] extends ((value: P) => value is R) ? [validator?: ((value: P) => value is R), ...values: P[]] : A): A[0] extends ((value: P) => value is R) ? (R | null) : P;
  <R extends P, A extends [validator: (value: P) => value is R, ...values: P[]] | P[]>(this: ExtendedArray<P>, validator: (value: P) => R, ...values: P[]): R | null;
  <R extends P, A extends [validator: (value: P) => value is R, ...values: P[]] | P[]>(this: ExtendedArray<P>, ...values: P[]): P;
}

interface StrArrayObject {
  [key: string]: string[]
}
type ESTarget = 'ES3' | 'ES5' | 'ES6' | 'ES2015' | 'ES2016' | 'ES2017' | 'ES2018' | 'ES2019' | 'ES2020' | 'ES2021' | 'ES2022' | 'ESNext';
type ModuleType = 'none' | 'commonjs' | 'amd' | 'system' | 'umd' | 'es6' | 'es2015' | 'es2020' | 'es2022' | 'esnext' | 'node16' | 'nodenext';
type JSXType = 'preserve' | 'react-native' | 'react';
type ModuleResolution = 'node' | 'classic';

// Basic Options
interface BasicOptions {
  /**
   * Enable incremental compilation
   * @property {boolean} [incremental=false]
   */
  incremental: boolean,
  /**
   * Specify ECMAScript target version: 'ES3' (default), 'ES5', 'ES6'/ 'ES2015', 'ES2016', 'ES2017', 'ES2018', 'ES2019', 'ES2020', 'ES2021', 'ES2022', 'ESNext'
   * @property {ESTarget} [target="es5"]
   */
  target: ESTarget;
  /**
   * Specify module code generation: 'none', 'commonjs', 'amd', 'system', 'umd', 'es6', 'es2015', 'es2020', 'es2022', 'esnext', or 'node16'
   * @property {ModuleType} [module="commonjs"]
   */
  module: ModuleType,
  /**
   * Specify library files to be included in the compilation
   * @property {string[]} [lib=[]]
   */
  lib: string[],
  /**
   * Allow JavaScript files to be compiled
   * @property {boolean} [allowJs=true]
   */
  allowJs: boolean,
  /**
   * Report errors in .js files
   * @property {boolean} [checkJs=false]
   */
  checkJs: boolean,
  /**
   * Specify JSX code generation: 'preserve', 'react-native', 'react'
   * @property {JSXType} [jsx="preserve"]
   */
  jsx: JSXType,
  /**
   * Generates corresponding '.d.ts' file
   * @property {boolean} [declaration=true]
   */
  declaration: boolean,
  /**
   * Generates a sourcemap for each corresponding '.d.ts' file
   * @property {boolean} [declarationMap=true]
   */
  declarationMap: boolean,
  /**
   * Generates corresponding '.map' file
   * @property {boolean} [sourceMap=true]
   */
  sourceMap: boolean,
  /**
   * Concatenate and emit output to single file
   * @property {string} [outFile="./"]
   */
  outFile: string,
  /**
   * Redirect output structure to the directory
   * @property {string} [outDir="./"]
   */
  outDir: string,
  /**
   * Specify the root directory of input files
   * @property {string} [rootDir="./"]
   */
  rootDir: string,
  /**
   * Enable project compilation
   * @property {boolean} [composite=false]
   */
  composite: boolean,
  /**
   * Specify file to store incremental compilation information
   * @property {string} [tsBuildInfoFile="./"]
   */
  tsBuildInfoFile: string,
  /**
   * Do not emit comments to output
   * @property {boolean} [removeComments=true]
   */
  removeComments: boolean,
  /**
   * Do not emit outputs
   * @property {boolean} [noEmit=false]
   */
  noEmit: boolean,
  /**
   * Import emit helpers from 'tslib'
   * @property {boolean} [importHelpers=true]
   */
  importHelpers: boolean,
  /**
   * Provide full support for iterables in 'for-of', spread, and destructuring when targeting 'ES5' or 'ES3'
   * @property {boolean} [downlevelIteration=false]
   */
  downlevelIteration: boolean,
  /**
   * Transpile each file as a separate module (similar to 'ts.transpileModule')
   * @property {boolean} [isolatedModules=false]
   */
  isolatedModules: boolean,
}

// Strict Type-Checking Options
interface TypeCheckOptions {
  /**
   * Enable all strict type-checking options
   * @property {boolean} [strict=true]
   */
  strict: boolean,
  /**
   * Raise error on expressions and declarations with an implied 'any' type
   * @property {boolean} [noImplicitAny=true]
   */
  noImplicitAny: boolean,
  /**
   * Enable strict null checks
   * @property {boolean} [strictNullChecks=true]
   */
  strictNullChecks: boolean,
  /**
   * Enable strict checking of function types
   * @property {boolean} [strictFunctionTypes=true]
   */
  strictFunctionTypes: boolean,
  /**
   * Enable strict 'bind', 'call', and 'apply' methods on functions
   * @property {boolean} [strictBindCallApply=true]
   */
  strictBindCallApply: boolean,
  /**
   * Enable strict checking of property initialization in classes
   * @property {boolean} [strictPropertyInitialization=true]
   */
  strictPropertyInitialization: boolean,
  /**
   * Raise error on 'this' expressions with an implied 'any' type
   * @property {boolean} [noImplicitThis=true]
   */
  noImplicitThis: boolean,
  /**
   * Parse in strict mode and emit "use strict" for each source file
   * @property {boolean} [alwaysStrict=true]
   */
  alwaysStrict: boolean,
}

// Additional Checks
interface AdditionalCheckOptions {
  /**
   * Report errors on unused locals
   * @property {boolean} [noUnusedLocals=true]
   */
  noUnusedLocals: boolean,
  /**
   * Report errors on unused parameters
   * @property {boolean} [noUnusedParameters=true]
   */
  noUnusedParameters: boolean,
  /**
   * Report error when not all code paths in function return a value
   * @property {boolean} [noImplicitReturns=true]
   */
  noImplicitReturns: boolean,
  /**
   * Report errors for fallthrough cases in switch statement
   * @property {boolean} [noFallthroughCasesInSwitch=true]
   */
  noFallthroughCasesInSwitch: boolean,
}
// Module Resolution Options
interface ModuleResolutionOptions {
  /**
   * Specify module resolution strategy: 'node' (Node.js) or 'classic' (TypeScript pre-1.6)
   * @property {ModuleResolution} [moduleResolution="node"]
   */
  moduleResolution: ModuleResolution,
  /**
   * Base directory to resolve non-relative module names
   * @property {string} [baseUrl="./"]
   */
  baseUrl: string,
  /**
   * A series of entries which re-map imports to lookup locations relative to the 'baseUrl'
   * @property {StrArrayObject} [paths={}]
   */
  paths: StrArrayObject,
  /**
   * List of root folders whose combined content represents the structure of the project at runtime
   * @property {string[]} [rootDirs=[]]
   */
  rootDirs: string[],
  /**
   * List of folders to include type definitions from
   * @property {string[]} [typeRoots=[]]
   */
  typeRoots: string[],
  /**
   * Type declaration files to be included in compilation
   * @property {string[]} [types=[]]
   */
  types: string[],
  /**
   * Allow default imports from modules with no default export. This does not affect code emit, just typechecking.
   * @property {boolean} [allowSyntheticDefaultImports=true]
   */
  allowSyntheticDefaultImports: boolean,
  /**
   * Enables emit interoperability between CommonJS and ES Modules via creation of namespace objects for all imports. Implies 'allowSyntheticDefaultImports'.
   * @property {boolean} [esModuleInterop=true]
   */
  esModuleInterop: boolean,
  /**
   * Do not resolve the real path of symlinked files
   * @property {boolean} [preserveSymlinks=true]
   */
  preserveSymlinks: boolean,
  /**
   * Allow accessing UMD globals from modules
   * @property {boolean} [allowUmdGlobalAccess=true]
   */
  allowUmdGlobalAccess: boolean,
}
// Source Map Options
interface SourceMapOptions {
  /**
   * Specify the location where debugger should locate TypeScript files instead of source locations
   * @property {string} [sourceRoot="./"]
   */
  sourceRoot: string,
  /**
   * Specify the location where debugger should locate map files instead of generated locations
   * @property {string} [mapRoot="./"]
   */
  mapRoot: string,
  /**
   * Emit a single file with source maps instead of having a separate file
   * @property {boolean} [inlineSourceMap=false]
   */
  inlineSourceMap: boolean,
  /**
   * Emit the source alongside the sourcemaps within a single file; requires 'inlineSourceMap' or 'sourceMap' to be set
   * @property {boolean} [inlineSources=false]
   */
  inlineSources: boolean,
}

/** Experimental Options */
interface ExperimentalOptions {
  /**
   * Enables experimental support for ES7 decorators
   * @property {boolean} [experimentalDecorators=true]
   */
  experimentalDecorators: boolean,
  /**
   * Enables experimental support for emitting type metadata for decorators
   * @property {boolean} [emitDecoratorMetadata=true]
   */
  emitDecoratorMetadata: boolean,
}

// Advanced Options
interface AdvancedOptions {
  /**
   * Disallow inconsistently-cased references to the same file
   * @property {boolean} [forceConsistentCasingInFileNames=true]
   */
  forceConsistentCasingInFileNames: boolean,
  /**
   * List of language service plugins to include
   * @property {object[]} [plugins=[]]
   */
  plugins: object[],
  /**
   * Include modules imported with '.json' extension
   * @property {boolean} [resolveJsonModule=true]
   */
  resolveJsonModule: boolean,
  /**
   * Enable tracing of the name resolution process
   * @property {boolean} [traceResolution=false]
   */
  traceResolution: boolean,
  /**
   * Show diagnostic information
   * @property {boolean} [diagnostics=false]
   */
  diagnostics: boolean,
  /**
   * Show verbose diagnostic information
   * @property {boolean} [extendedDiagnostics=false]
   */
  extendedDiagnostics: boolean,
  /**
   * Print names of files part of the compilation
   * @property {boolean} [listFiles=false]
   */
  listFiles: boolean,
  /**
   * Print names of generated files after compilation
   * @property {boolean} [listEmittedFiles=false]
   */
  listEmittedFiles: boolean,
  /**
   * Stylize errors and messages using color and context
   * @property {boolean} [pretty=true]
   */
  pretty: boolean,
  /**
   * Skip type checking of declaration files
   * @property {boolean} [skipLibCheck=true]
   */
  skipLibCheck: boolean,
  /**
   * Skip type checking of default library declaration files
   * @property {boolean} [skipDefaultLibCheck=true]
   */
  skipDefaultLibCheck: boolean,
  /**
   * Disable size limit for JavaScript project
   * @property {boolean} [disableSizeLimit=false]
   */
  disableSizeLimit: boolean,
  /**
   * Specify emit/checking behavior for imports that are only used for types: 'remove', 'preserve', 'error'
   * @property {string} [importsNotUsedAsValues='remove']
   */
  importsNotUsedAsValues: string,
  /**
   * Preserve unused imported values in the JavaScript output that would otherwise be removed
   * @property {boolean} [preserveValueImports=false]
   */
  preserveValueImports: boolean,
  /**
   * Have recompiles in projects that use incremental and watch mode assume that changes within a file will only affect files directly depending on it
   * @property {boolean} [assumeChangesOnlyAffectDirectDependencies=false]
   */
  assumeChangesOnlyAffectDirectDependencies: boolean,
}

interface CompilerOptions extends BasicOptions, TypeCheckOptions, AdditionalCheckOptions, ModuleResolutionOptions, SourceMapOptions, ExperimentalOptions, AdvancedOptions { }
interface TSConfig {
  compilerOptions?: Partial<CompilerOptions>;
  /**
   * List of glob patterns to include in the program
   * @property {string[]} [include=[".\/**\/*"]]
   */
  include?: string[];
  /**
   * List of glob patterns to exclude from the program
   * @property {string[]} [exclude=["node_modules"]]
   */
  exclude?: string[];
  /**
   *
   * @property {object[]} [references=[]]
   */
  references?: object[];
}
interface OpenCloseMap {
  '{': '}',
  '[': ']',
  '(': ')',
  '<': '>',
  '"': '"',
  "'": "'",
  "`": "`",
  get<T extends Exclude<keyof OpenCloseMap, 'get'>>(key: T): OpenCloseMap[T]
}
interface JSONStructure {
  [x: string]: GenericValue | ArrayValue | JSONStructure | JSONStructure[]
}
type OpenCloseSymbol = `{}` | `[]` | "()" | "<>" | '""' | "''" | "``";
type SingleSymbol = "string" | "number" | "boolean";
type GenericSymbol = SingleSymbol | 'object';
type StructureSymbol<T extends GenericValue = GenericValue> = GenericSymbol | OpenCloseSymbol | ArraySymbol<T>;
type StructureValue = GenericValue | ArrayValue;
type ObjectArray = (Primitive | object)[];
type ArrayValue = Primitive[] | object[] | ObjectArray;
type Primitive = string | number | boolean;
type GenericValue = Primitive | object;
type ArraySymbol<T extends GenericArray> =
  T extends GenericArray
    ? UnionLength<T[number]> extends 5
      ? T[number] extends string | number | boolean | object | GenericArray
        ? ["string", "number", "boolean", "object", "Array"]
      : never
    : UnionLength<T[number]> extends 4
      ? T[number] extends string | number | object | GenericArray
        ? ["string", "number", "object", "Array"]
      : T[number] extends string | boolean | object | GenericArray
        ? ["string", "boolean", "object", "Array"]
      : T[number] extends number | boolean | object | GenericArray
        ? ["number", "boolean", "object", "Array"]
      : T[number] extends string | number | boolean | GenericArray
        ? ["string", "number", "boolean", "Array"]
      : T[number] extends string | number | boolean | object
        ? ["string", "number", "boolean", "object"]
      : never
    : UnionLength<T> extends 3
      ? T[number] extends string | number | GenericArray
        ? ["string", "number", "Array"]
      : T[number] extends string | boolean | GenericArray
        ? ["string", "boolean", "Array"]
      : T[number] extends string | object | GenericArray
        ? ["string", "object", "Array"]
      : T[number] extends number | boolean | GenericArray
        ? ["number", "boolean", "Array"]
      : T[number] extends number | object | GenericArray
        ? ["number", "object", "Array"]
      : T[number] extends boolean | object | GenericArray
        ? ["boolean", "object", "Array"]
      : T[number] extends string | number | boolean
        ? ["string", "number", "boolean"]
      : T[number] extends string | number | object
        ? ["string", "number", "object"]
      : T[number] extends string | boolean | object
        ? ["string", "boolean", "object"]
      : T[number] extends number | boolean | object
        ? ["number", "boolean", "object"]
      : never
    : UnionLength<T> extends 2
      ? T[number] extends string | GenericArray
        ? ["string", "Array"]
      : T[number] extends number | GenericArray
        ? ["number", "Array"]
      : T[number] extends boolean | GenericArray
        ? ["boolean", "Array"]
      : T[number] extends object | GenericArray
        ? ["object", "Array"]
      : T[number] extends string | object
        ? ["string", "object"]
      : T[number] extends number | object
        ? ["number", "object"]
      : T[number] extends boolean | object
        ? ["boolean", "object"]
      : T[number] extends string | boolean
        ? ["string", "boolean"]
      : T[number] extends number | boolean
        ? ["number", "boolean"]
      : T[number] extends string | number
        ? ["string", "number"]
      : never
    : UnionLength<T> extends 1
      ? T[number] extends string
        ? ["string"]
      : T[number] extends number
        ? ["number"]
      : T[number] extends boolean
        ? ["boolean"]
      : T[number] extends object
        ? ["object"]
      : T[number] extends GenericArray
        ? ["Array"]
      : "[]"
    : never
  : never;

/**
 * @type UnionToIntersection
 * @template U The Union Type that is being transitioned into an Intersection Type
 * @example
 *  type Union = string | boolean | number;
 *  type Intersection = string & boolean & number;
 */
type UnionToIntersection<U> = (U extends any ? (k: U) => void : never) extends ((k: infer I) => void) ? I : never;
/**
 * @type LastOf
 * @template T The Union Type that is being handled as the LastOf
 */
type LastOf<T> = UnionToIntersection<T extends any ? (x: T) => void : never> extends (x: infer L) => void ? L : never;

type UnionToTuple<T, L = LastOf<T>> = [T] extends [never] ? [] : [...UnionToTuple<Exclude<T, L>>, L];

type OmitType<T extends any[], U> = T extends [infer Head, ...infer Tail]
  ? [Head] extends [U]
    ? OmitType<Tail, U>
    : [Head, ...OmitType<Tail, U>]
  : [];

type ReplaceType<T extends any[], From, To> = T extends [infer Head, ...infer Tail]
  ? [Head] extends [From]
    ? [To, ...ReplaceType<Tail, From, To>]
    : [Head, ...ReplaceType<Tail, From, To>]
  : [];

type UnionLength<T> = OmitType<ReplaceType<UnionToTuple<T>, false, boolean>, true>['length'];

type Nine = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
type SubtractOne<N> = N extends number ? [9, 0, 1, 2, 3, 4, 5, 6, 7, 8][N] : never;

type HasMap<T extends object, U extends keyof T, Condition = any> = {
  [K in keyof T as K extends U ? T[K] extends Condition ? never : K : K]: T[K];
}
type FastOmit<T extends object, U extends string | number | symbol> = {
  [K in keyof T as K extends U ? never : K]: T[K]
}
type Substitute<A extends object, B extends object> = FastOmit<A, keyof B> & B;

type Generic = GenericArray | GenericValue;
type GenericArray = (GenericValue | GenericArray)[];
interface BaseConstruction<T extends Generic> {
  type: ArraySymbol<T extends GenericArray ? T : never> | TypeSymbol<T>;
  value: T;
  index: [number, number] | number;
  isStructure(this: object): this is BaseStructure<T>;
  map: T extends GenericArray ? Structure[] | null : null;
}
declare class BaseStructure<T extends Generic> implements BaseConstruction<T> {
  type: T extends GenericArray ? ArraySymbol<T> : TypeSymbol<T>;
  value: T;
  index: T extends GenericArray | object ? [number, number] : number;
  static isStructure<T extends Generic>(structure: object): structure is BaseStructure<T>;
  isStructure(this: object): this is BaseStructure<T>;
  map: T extends GenericArray ? Structure[] | null : null;
  constructor(value: T, index: T extends GenericArray | object ? [number, number] : number);
}
type TypeSymbol<T extends GenericValue> = T extends string ? 'string' : T extends boolean ? 'boolean' : T extends number ? 'number' : T extends object ? "object" : never;
interface ValueConstruction<T extends Primitive> extends BaseConstruction<T> {
  type: TypeSymbol<T>;
  value: T;
  index: number;
  isStructure(this: BaseStructure<T>): this is ValueStructure<T>;
  map: null;
}

declare class ValueStructure<T extends Primitive> extends BaseStructure<T> implements ValueConstruction<T> {
  type: TypeSymbol<T>;
  value: T;
  index: number;
  static isStructure<T extends Primitive>(structure: BaseStructure<T>): structure is ValueStructure<T>;
  isStructure(this: BaseStructure<T>): this is ValueStructure<T>;
  map: null;
  constructor(value: T, index: number);
}
interface ArrayConstruction<T extends GenericArray> extends BaseConstruction<T> {
  type: ArraySymbol<T>;
  value: T;
  index: [number, number];
  isStructure(this: BaseStructure<T>): this is ArrayStructure<T>;
  map: Structure[];
}
declare class ArrayStructure<T extends GenericArray> extends BaseStructure<T> implements ArrayConstruction<T> {
  type: ArraySymbol<T>;
  value: T;
  index: [number, number];
  static isStructure<T extends GenericArray>(structure: BaseStructure<T>): structure is ArrayStructure<T>;
  isStructure(this: BaseStructure<T>): this is ArrayStructure<T>;
  map: Structure[];
  constructor(index: [number, number], ...value: T)
}
interface ObjectConstruction<T extends object> extends BaseConstruction<T> {
  type: "object";
  index: number;
  value: T;
  isStructure(this: BaseStructure<T>): this is ObjectStructure<T>;
  map: null;
};
declare class ObjectStructure<T extends object> extends BaseStructure<T> implements ObjectConstruction<T> {
  type: "object";
  index: number;
  value: T;
  static isStructure<T extends object>(structure: BaseStructure<T>): structure is ObjectStructure<T>;
  isStructure(this: BaseStructure<T>): this is ObjectStructure<T>;
  map: null;
  constructor(index: number, value: T)
}
type Structure = ArrayStructure<GenericArray> | ValueStructure<Primitive> | ObjectStructure<object>;
interface StructureMap extends Array<Structure> {
  [x: number]: Structure;
};
