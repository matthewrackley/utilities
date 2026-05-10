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

import { TlsOptions } from 'tls';
import { NumberSchema } from 'yup';

const getVal = <P extends PrimType>(): GetVal<P> => {
  function getVal<R extends P, A extends [validator: (value: P) => value is R, ...values: P[]] | P[]>(this: ExtendedArray<P>, ...values: A[0] extends ((value: P) => value is R) ? [validator?: ((value: P) => value is R), ...values: P[]] : A): A[0] extends ((value: P) => value is R) ? (R | null) : P;
  function getVal<R extends P, A extends [validator: (value: P) => value is R, ...values: P[]] | P[]>(this: ExtendedArray<P>, validator: (value: P) => R, ...values: P[]): R | null;
  function getVal<R extends P, A extends [validator: (value: P) => value is R, ...values: P[]] | P[]>(this: ExtendedArray<P>, ...values: P[]): P;
  function getVal(this: ExtendedArray<P>, ...args: any){
    const value = this[this.findIndex((v): v is P => args.includes(v)) + 1];
    const values = args as [<R extends P>(value: P) => value is R, ...P[]] | P[];
    const validator = values.pop() as typeof values[number];
    if (validator instanceof Function) {
      if (validator(value)) {
        return value as typeof values[0] extends ((value: any) => value is infer RT) ? RT : never;
      } else {
        return null as typeof values[0] extends ((value: any) => value is infer RT) ? null : never;
      }
    } else {
      values.push(validator);
      return value as P;
    }
  };
  return getVal as any;
}
class ExtendedArray<P extends PrimType> extends Array<P>, implements ExtendedArray<P> {
  constructor(...items: P[]) {
    super(...items)
  }

  exists: ExtendedExists<P> = function (...values): this is (typeof values[number] | P)[] {
    const bools = [false];
    for (let i = 0; i < values.length; i++) {
      bools[i] = this.includes(values[i] as P);
    }
    return bools.includes(true);
  }
  isVal: ExtendedIsVal<P> = function (value, ...searchValues): value is typeof searchValues[number] {
    return this.some(val => searchValues.includes(val)) && searchValues.includes(value);
  }
  nextVal: ExtendedSibling<P> = function (value, validator) {
    const val = this[this.findIndex((p) => p === value) + 1];
    if (validator && validator(val)) return val;
    return val as any;
  }
  prevVal: ExtendedSibling<P> = function (value, validator) {
    const val = this[this.findIndex((p) => p === value) - 1];
    if (validator && validator(val)) return val;
    return val as any;
  }
  curIndex: ExtendedIndex<P> = function (value: P) {
    return this.findIndex((p) => p === value);
  }

  getVal: GetVal<P> = getVal();
  iStartsWith: ExtendedWith<P> = function (index, searchString, atPosition): boolean {
    let value = this.at(index) && typeof this.at(index) === 'string' ? this.at(index)! as P & string : null;
    return value ? value.startsWith(searchString, atPosition) : false;
  }
  iEndsWith: ExtendedWith<P> = function (index, searchString, atPosition): boolean {
    let value = this.at(index) && typeof this.at(index) === 'string' ? this.at(index)! as P & string : null;
    return value ? value.endsWith(searchString, atPosition) : false;
  }
  includes: ExtendedIncludes<P> = Array.prototype.includes as ExtendedIncludes<P>;
};



function ExtendedArray<P extends PrimType>(...items: P[]): ExtendedArray<P> {
  const extendedArray = [...items] as ExtendedArray<P>;
  extendedArray.exists = function <V extends any[]>(...values: V): this is (V[number] | P)[] {
    const bools = [false];
    for (let i = 0; i < values.length; i++) {
      bools[i] = this.includes(values[i]);
    }
    return bools.includes(true);
  };
  extendedArray.isVal = function (value, ...searchValues): value is typeof searchValues[number] {
    return this.some(val => searchValues.includes(val)) && searchValues.includes(value);
  };

  extendedArray.nextVal = function <R = P>(value: P, validator?: ((value: P | unknown) => value is R)): R {
    const val = this[this.findIndex((p) => p === value) + 1];
    return validator && validator(val) ? val as R : val as any;
  };
  extendedArray.prevVal = function <R = P>(value: P, validator?: ((value: P | unknown) => value is R)): R {
    const val = this[this.findIndex((p) => p === value) - 1];
    return validator && validator(val) ? val as R : val as any;
  };
  extendedArray.curIndex = function (value: P): number {
    return this.findIndex((p) => p === value);
  };
  function getVal<R extends P, A extends [validator: (value: P) => value is R, ...values: P[]] | P[]>(...values: A[0] extends ((value: P) => value is R) ? [validator?: ((value: P) => value is R), ...values: P[]] : A): A[0] extends ((value: P) => value is R) ? (R | null) : P;
  function getVal<R extends P, A extends [validator: (value: P) => value is R, ...values: P[]] | P[]>(validator: (value: P) => R, ...values: P[]): R | null;
  function getVal<R extends P, A extends [validator: (value: P) => value is R, ...values: P[]] | P[]>(...values: P[]): P;
  function getVal<R extends P, A extends [validator: (value: P) => value is R, ...values: P[]] | P[]>(...args: any): A[0] extends ((value: P) => value is R) ? (R | null) : P {
    const value = extendedArray[extendedArray.findIndex((v): v is P => args.includes(v)) + 1];
    const values = args as [<R extends P>(value: P) => value is R, ...P[]] | P[];
    const validator = values.pop() as typeof values[number];
    return (validator instanceof Function ? validator(value) ? value as R : null : value as P) as A[0] extends ((value: P) => value is R) ? (R | null) : P;
  };
  extendedArray.getVal = getVal;
  if (extendedArray.some((p) => typeof p === 'string')) {
    extendedArray.startsWith = function (value, ...searchStrings): value is `${typeof searchStrings[number]}${string}` extends (P extends string ? P : never) ? `${typeof searchStrings[number]}${string}` : never {
      return extendedArray.includes(value) && searchStrings.some((searchString) => value.startsWith(searchString));
    };
    extendedArray.endsWith = function (value, ...searchStrings): value is `${string}${typeof searchStrings[number]}` extends (P extends string ? P : never) ? `${string}${typeof searchStrings[number]}` : never {
      return searchStrings.some((searchString) => value.endsWith(searchString));
    };
    extendedArray.iStartsWith = function (index, searchString, atPosition): boolean {
      let value = this.at(index) && typeof this.at(index) === 'string' ? this.at(index)! as P & string : null;
      return value ? value.startsWith(searchString, atPosition) : false;
    };
    extendedArray.iEndsWith = function (index, searchString, atPosition): boolean {
      let value = this.at(index) && typeof this.at(index) === 'string' ? this.at(index)! as P & string : null;
      return value ? value.endsWith(searchString, atPosition) : false;
    };
  }
  extendedArray.includes = Array.prototype.includes as ExtendedArray<P>['includes'];
  return new.target ? new.target(...items) : extendedArray;
};

// Basic Options
const basicOptions: BasicOptions = {
  incremental: false,          // boolean: Enable incremental compilation
  target: "ES5",               // string: Specify ECMAScript target version: 'ES3' (default), 'ES5', 'ES6'/ 'ES2015', 'ES2016', 'ES2017', 'ES2018', 'ES2019', 'ES2020', 'ES2021', 'ES2022', 'ESNext'
  module: "commonjs",          // string: Specify module code generation: 'none', 'commonjs', 'amd', 'system', 'umd', 'es6', 'es2015', 'es2020', 'es2022', 'esnext', or 'node16'
  lib: [],                     // string[]: Specify library files to be included in the compilation
  allowJs: true,               // boolean: Allow JavaScript files to be compiled
  checkJs: false,              // boolean: Report errors in .js files
  jsx: "preserve",             // string: Specify JSX code generation: 'preserve', 'react-native', 'react'
  declaration: true,           // boolean: Generates corresponding '.d.ts' file
  declarationMap: true,        // boolean: Generates a sourcemap for each corresponding '.d.ts' file
  sourceMap: true,             // boolean: Generates corresponding '.map' file
  outFile: "./",               // string: Concatenate and emit output to single file
  outDir: "./",                // string: Redirect output structure to the directory
  rootDir: "./",               // string: Specify the root directory of input files
  composite: false,            // boolean: Enable project compilation
  tsBuildInfoFile: "./",       // string: Specify file to store incremental compilation information
  removeComments: true,        // boolean: Do not emit comments to output
  noEmit: false,               // boolean: Do not emit outputs
  importHelpers: true,         // boolean: Import emit helpers from 'tslib'
  downlevelIteration: false,   // boolean: Provide full support for iterables in 'for-of', spread, and destructuring when targeting 'ES5' or 'ES3'
  isolatedModules: false,      // boolean: Transpile each file as a separate module (similar to 'ts.transpileModule')
}
function handleBasicOptions(...args: ExtendedArray<string>) {
  for (let i = 0; i < args.length; i++) {
    let flag = args[i];
    let value = args[i + 1];
    if (args.isVal(flag, '--target', '-T')) {
      basicOptions.target = value as ESTarget;
    }
    if (args.isVal(flag, '--module', '-m')) {
      basicOptions.module = value as ModuleType;
    }
    if (args.isVal(flag, '-dli', '--downlevelIteration')) {
      basicOptions.downlevelIteration = Boolean(value);
    }
  }
  return basicOptions;
}


// Strict Type-Checking Options
const typeCheckOptions: TypeCheckOptions = {
  strict: true,                // boolean: Enable all strict type-checking options
  noImplicitAny: true,         // boolean: Raise error on expressions and declarations with an implied 'any' type
  strictNullChecks: true,      // boolean: Enable strict null checks
  strictFunctionTypes: true,   // boolean: Enable strict checking of function types
  strictBindCallApply: true,   // boolean: Enable strict 'bind', 'call', and 'apply' methods on functions
  strictPropertyInitialization: true, // boolean: Enable strict checking of property initialization in classes
  noImplicitThis: true,        // boolean: Raise error on 'this' expressions with an implied 'any' type
  alwaysStrict: true,          // boolean: Parse in strict mode and emit "use strict" for each source file
}

// Additional Checks
const additionalCheckOptions: AdditionalCheckOptions = {
  noUnusedLocals: true,        // boolean: Report errors on unused locals
  noUnusedParameters: true,    // boolean: Report errors on unused parameters
  noImplicitReturns: true,     // boolean: Report error when not all code paths in function return a value
  noFallthroughCasesInSwitch: true, // boolean: Report errors for fallthrough cases in switch statement
}

// Module Resolution Options
const moduleResolutionOptions: ModuleResolutionOptions = {
  moduleResolution: "node",    // string: Specify module resolution strategy: 'node' (Node.js) or 'classic' (TypeScript pre-1.6)
  baseUrl: "./",               // string: Base directory to resolve non-relative module names
  paths: {},                   // StrArrayObject: A series of entries which re-map imports to lookup locations relative to the 'baseUrl'
  rootDirs: [],                // string[]: List of root folders whose combined content represents the structure of the project at runtime
  typeRoots: [],               // string[]: List of folders to include type definitions from
  types: [],                   // string[]: Type declaration files to be included in compilation
  allowSyntheticDefaultImports: true, // boolean: Allow default imports from modules with no default export. This does not affect code emit, just typechecking.
  esModuleInterop: true,       // boolean: Enables emit interoperability between CommonJS and ES Modules via creation of namespace objects for all imports. Implies 'allowSyntheticDefaultImports'.
  preserveSymlinks: true,      // boolean: Do not resolve the real path of symlinked files
  allowUmdGlobalAccess: true,  // boolean: Allow accessing UMD globals from modules
}

// Source Map Options
const sourceMapOptions: SourceMapOptions = {
  sourceRoot: "./",            // string: Specify the location where debugger should locate TypeScript files instead of source locations
  mapRoot: "./",               // string: Specify the location where debugger should locate map files instead of generated locations
  inlineSourceMap: false,      // boolean: Emit a single file with source maps instead of having a separate file
  inlineSources: false,        // boolean: Emit the source alongside the sourcemaps within a single file; requires 'inlineSourceMap' or 'sourceMap' to be set    // Experimental Options
}

// Experimental Options
const experimentalOptions: ExperimentalOptions = {
  experimentalDecorators: true, // boolean: Enables experimental support for ES7 decorators
  emitDecoratorMetadata: true, // boolean: Enables experimental support for emitting type metadata for decorators
}

// Advanced Options
const advancedOptions: AdvancedOptions = {
  forceConsistentCasingInFileNames: true, // boolean: Disallow inconsistently-cased references to the same file
  plugins: [],                 // object[]: List of language service plugins to include
  resolveJsonModule: true,     // boolean: Include modules imported with '.json' extension
  traceResolution: false,      // boolean: Enable tracing of the name resolution process
  diagnostics: false,          // boolean: Show diagnostic information
  extendedDiagnostics: false,  // boolean: Show verbose diagnostic information
  listFiles: false,            // boolean: Print names of files part of the compilation
  listEmittedFiles: false,     // boolean: Print names of generated files after compilation
  pretty: true,                // boolean: Stylize errors and messages using color and context
  skipLibCheck: true,          // boolean: Skip type checking of declaration files
  skipDefaultLibCheck: true,   // boolean: Skip type checking of default library declaration files
  disableSizeLimit: false,     // boolean: Disable size limit for JavaScript project
  importsNotUsedAsValues: "remove", // string: Specify emit/checking behavior for imports that are only used for types: 'remove', 'preserve', 'error'
  preserveValueImports: false, // boolean: Preserve unused imported values in the JavaScript output that would otherwise be removed
  assumeChangesOnlyAffectDirectDependencies: false // boolean: Have recompiles in projects that use incremental and watch mode assume that changes within a file will only affect files directly depending on it
}

const compilerOptions: CompilerOptions = {
  ...basicOptions,
  ...typeCheckOptions,
  ...additionalCheckOptions,
  ...moduleResolutionOptions,
  ...sourceMapOptions,
  ...experimentalOptions,
  ...advancedOptions
}

const tsConfig: TSConfig = {
  compilerOptions,
  include: [
    "src/**/*"
  ],
  exclude: [    // string[]: List of glob patterns to exclude from the program
    "node_modules",
  ],
  references: [] // object[]: List of project references
};
function isCLArg(arg: string): arg is `--${string}` | `-${string}` {
  return arg.startsWith('-') || arg.startsWith('--');
}
function isCLObject(arg: string): arg is `{${string}` | '{' {
  return arg.startsWith('{') || arg === '{'
}
function handleMultiValueParam(params: string[] | string, ...args: ExtendedArray<string>) {
  params = typeof params === 'string' ? [params] : params;
  let paramValues: string[] = [];
  for (let i = 0; i < args.length; i++) {
    if (isCLArg(args[i]) && args.isVal(args[i], ...params)) {
      for (let j = (i + 1); j < args.length && (!args[j].startsWith('-') && !args[j].startsWith('--')); j++) {
        paramValues.push(args[j]);
      }
    }
  }
  return paramValues;
}
const escapeValues = (str: string) => str.replace(/[{}+\[\](),]|(?<!\\)(?:[dDwWSsnrt0v#](?:\+|\*|\{\d+,?\d*\})|\/|[pP]\{.+\}|k\<\w+\>|u[a-fA-F0-9]{4}|x[a-fA-F0-9]{2}|[0-7]{3}|c[a-zA-Z]{1}|(?<![^\[])b\])/g, '\\$&').replace(/(?<!\\)[{}+\[\](),]/g, '\\$&');
function handleSplitting(str: string, ...splitVariable: string[]) {
  for (let i = 0; i < splitVariable.length; i++) {
    splitVariable[i] = escapeValues(splitVariable[i]);
  }
  return str.split(new RegExp(`(${splitVariable.join('|')})`)).filter((v) => !['', undefined].includes(v));
}
function processArray(arr: string[], targetValues: string[], callback: (index: number, value: string) => void) {
  const indices: number[] = [];

  // Find indices of target values
  arr.forEach((value, index) => {
    if (targetValues.includes(value)) {
      indices.push(index);
    }
  });

  // Perform operations using the stored indices
  indices.forEach(index => {
    callback(index, arr[index]);
  });
}

const ocMap: OpenCloseMap = {
  '{': '}',
  '[': ']',
  '(': ')',
  '<': '>',
  '"': '"',
  "'": "'",
  "`": "`",
  get(key) {
    return this[key];
  }
};


const openSymbols = Object.keys(ocMap) as ['{', '[', '(', '<', '"', "'", "`"];
const closeSymbols = Object.values(ocMap) as ['}', ']', ')', '>', '"', "'", "`"];
const symbolType = ["{}", "[]", "()", "<>", '""', "''", "``", "string", "number", "boolean", "object"];

//type ArraySymbol<T extends GenericValue = GenericValue> = T extends GenericValue ? ["string", "number", "boolean", "object"] : T extends Exclude<GenericValue, string> ? ["number", "boolean", "object"] : T extends Exclude<GenericValue, boolean> ? ["string", "number", "object"] : T extends Exclude<GenericValue, number> ? ["string", "boolean", "object"] : T extends Exclude<GenericValue, object> ? ["string", "number", "boolean"] : T extends Exclude<GenericValue, string | number> ? ["boolean", "object"] : T extends Exclude<GenericValue, string | boolean> ? ["number", "object"] : T extends Exclude<GenericValue, boolean | number> ? ["string", "object"] : T extends Exclude<GenericValue, string | object> ? ["number", "boolean"] : T extends Exclude<GenericValue, number | object> ? ["string", "boolean"] : T extends Exclude<GenericValue, boolean | object> ? ["string", "number"] : T extends string ? ["string"] : T extends boolean ? ["boolean"] : T extends number ? ["number"] : T extends object ? ["object"] : "[]";


// type ArraySymbol<T extends GenericValue> = T extends GenericValue
//   ? T extends string | number | boolean
//     ? T extends string | number
//       ? T extends string
//         ? ['string']
//       : ["string", "number"]
//     : ["string", "number", "boolean"]
//   : ["string", "number", "boolean", "object"]
// : T extends GenericValue
//   ? T extends string | boolean | object
//     ? T extends string | boolean
//       ? ["string", "boolean"]
//     : ["string", "boolean", "object"]
//   : T extends string | object
//     ? ["string", "object"]
//   : T extends number | boolean | object
//     ? T extends number | boolean
//       ? T extends number
//         ? ["number"]
//       : ["number", "boolean"]
//     : ["number", "boolean", "object"]
//   : T extends number | object
//     ? ["number", "object"]
//   : T extends boolean | object
//     ? T extends boolean
//       ? ["boolean"]
//     : ["object"]
//   : "[]"
// : never;


// T extends Exclude<GenericValue, string> ? ["number", "boolean", "object"] : T extends Exclude<GenericValue, boolean> ? ["string", "number", "object"] : T extends Exclude<GenericValue, number> ? ["string", "boolean", "object"] : T extends Exclude<GenericValue, object> ? ["string", "number", "boolean"] : T extends Exclude<GenericValue, string | number> ? ["boolean", "object"] : T extends Exclude<GenericValue, string | boolean> ? ["number", "object"] : T extends Exclude<GenericValue, boolean | number> ? ["string", "object"] : T extends Exclude<GenericValue, string | object> ? ["number", "boolean"] : T extends Exclude<GenericValue, number | object> ? ["string", "boolean"] : T extends Exclude<GenericValue, boolean | object> ? ["string", "number"] : T extends string ? ["string"] : T extends boolean ? ["boolean"] : T extends number ? ["number"] : T extends object ? ["object"] : "[]"
function getSymbol<T extends GenericValue>(value: T): TypeSymbol<T> {
  let result = 'string' as "string" | "boolean" | "number" | "object";
  if (typeof value === 'string') {
    result = "string";
  }
  if (typeof value === 'boolean') {
    result = "boolean";
  }
  if (typeof value === "number") {
    result = "number";
  }
  if (typeof value === "object" && value !== null) {
    result = "object";
  }
  return result as TypeSymbol<T>;
}
function isGenericArray(value: any): value is GenericArray {
  return Array.isArray(value)
    && value.some((v): v is GenericValue => (
      isPrimitive(v)
      || isObject(v)
      || isGenericArray(v)
    ));
}
function getArraySymbol<T extends GenericArray>(value: T) {
  let str = value.some((v): v is string => typeof v === 'string');
  let bool = value.some((v): v is boolean => typeof v === 'boolean');
  let num = value.some((v): v is number => typeof v === 'number');
  let obj = value.some((v): v is object => typeof v === 'object' && v !== null);
  let arr = value.some((v): v is GenericArray => isGenericArray(v))
  const symbolArray = [str, num, bool, obj, arr] as [boolean, boolean, boolean, boolean, boolean];
  const convArray = [str ? "string" : false, num ? "number" : false, bool ? "boolean" : false, obj ? "object" : false, arr ? "Array" : false] as const;
  const filteredArray = convArray.filter((v) => v !== false) as ArraySymbol<typeof value>;
  return filteredArray;
}
function isGeneric(value: any): value is Generic {
  return (
    isPrimitive(value)
    || isObject(value)
  ) || (Array.isArray(value) && isGenericArray(value));
}
function isPrimitive(value: any): value is Primitive {
  return typeof value === 'string'
    || typeof value === 'number'
    || typeof value === 'boolean';
}
function isObject(value: any): value is object {
  return typeof value === 'object' && value !== null;
}
abstract class Construction<T extends Generic> {
  value: T;
  type: ArraySymbol<T extends GenericArray ? T : never> | TypeSymbol<T>;
  index: number | [number, number];
  constructor(index: number | [number, number], ...value: (T extends GenericArray ? T : never) | [T], ) {
    this.index = index;
    const construct = {} as Construct<T>
    if (value.length === 1 && (isPrimitive(value[0]) || isObject(value[0]))) {
      construct.value = value[0] as T extends GenericValue ? T : never;
      construct.type = getSymbol(value[0]) as T extends GenericArray ? never : TypeSymbol<T>;
    }
    if (value.length > 1 && isGenericArray(value)) {
      construct.value = value as T extends GenericArray ? T : never;
      construct.type = getArraySymbol(value) as T extends GenericArray ? ArraySymbol<T> : never;
    }
    this.value = construct.value;
    this.type = construct.type;
  }
}
interface Construct<T extends Generic> {
  value: (T extends GenericArray ? T : never) | (T extends GenericValue ? T : never);
  type: ArraySymbol<T extends GenericArray ? T : never> | TypeSymbol<T>
}

class BaseStructure<T extends Generic> extends Construction<T> implements BaseConstruction<T> {
  value: T;
  type: T extends GenericArray ? ArraySymbol<T> : TypeSymbol<T>;
  index: T extends GenericArray | object ? [number, number] : number;
  map: T extends GenericArray ? Structure[] | null : null = null;
  static isStructure<T extends Generic>(structure: object): structure is BaseStructure<T> {
    return typeof structure === 'object'
      && structure !== null
      && 'type' in structure
      && 'value' in structure
      && isGeneric(structure.value)
      && 'index' in structure
      && (typeof structure.index === 'number'
      || (Array.isArray(structure.index)
        && structure.index.every((i) => typeof i === 'number'))
    ) && 'isStructure' in structure
      && typeof structure.isStructure === 'function'
      && ((Array.isArray(structure.value) && isGenericArray(structure.value))
        || isPrimitive(structure.value)
        || isObject(structure.value));
  };
  isStructure(this: object): this is BaseStructure<T> {
    return typeof this === 'object'
      && this !== null
      && 'type' in this
      && 'value' in this
      && isGeneric(this.value)
      && 'index' in this
      && (typeof this.index === 'number'
      || (Array.isArray(this.index)
        && this.index.every((i) => typeof i === 'number'))
    ) && 'isStructure' in this
      && typeof this.isStructure === 'function'
      && ((Array.isArray(this.value) && isGenericArray(this.value))
        || isPrimitive(this.value)
        || isObject(this.value));
  };
  constructor(index: number | [number, number], ...value: (T extends GenericArray ? T : never) | [T]) {
    super(index, ...value);
    const generics = {} as Generics<T>;
    if (value.length === 1 && isObject(value)) {
      generics.index = index as T extends GenericArray | object ? [number, number] : never;
      generics.value = value as T extends GenericArray ? never : T extends GenericValue ? T : never;
      generics.type = getSymbol(value) as T extends GenericArray ? never : TypeSymbol<T>;
    }
    if (value.length === 1 && isPrimitive(value)) {
      generics.index = index as T extends GenericArray | object ? never : number;
      generics.value = value[0] as T extends GenericArray ? never : T;
      generics.type = getSymbol(value[0]) as T extends GenericArray ? never : TypeSymbol<T>;
    }
    if (value.length > 1 && isGenericArray(value)) {
      generics.index = index as T extends GenericArray | object ? [number, number] : never;
      generics.value = value as T extends GenericArray ? T : never;
      generics.type = getArraySymbol(value) as T extends GenericArray ? ArraySymbol<T> : never;
    }
    this.index = generics.index;
    this.value = generics.value;
    this.type = generics.type;
  }
}
interface Generics<T extends Generic> {
  index: T extends GenericArray | object ? [number, number] : number;
  value: T extends GenericArray ? T : T;
  type: T extends GenericArray ? ArraySymbol<T> : TypeSymbol<T>;
}
class ValueStructure<T extends Primitive> extends Construction<T> implements ValueConstruction<T> {
  value: T;
  type: TypeSymbol<T>;
  index: number;
  map: null = null;
  isStructure(this: BaseStructure<T>): this is ValueStructure<T> {
    return typeof this === 'object'
      && this !== null
      && 'type' in this
      &&
      (
        this.type === "string"
        || this.type === 'number'
        || this.type === 'boolean'
      )
      && 'value' in this
      && isGeneric(this.value)
      && 'index' in this
      && typeof this.index === 'number'
      && 'isStructure' in this
      && typeof this.isStructure === 'function'
      && isPrimitive(this.value);
  }
  constructor(index: number, value: T) {
    super(index, value);
    this.value = value;
    this.index = index;
    this.type = getSymbol(value);
  }
}
class ObjectStructure<T extends object> extends Construction<T> implements ObjectConstruction<T> {
  value: T;
  type: TypeSymbol<T>;
  map: null = null;
  index: number;
  isStructure(this: BaseStructure<T>): this is ObjectStructure<T> {
    return typeof this === 'object'
      && this !== null
      && 'type' in this
      && this.type === 'object'
      && 'value' in this
      && isGeneric(this.value)
      && 'index' in this
      && Array.isArray(this.index)
      && this.index.length === 2
      && this.index.every((v): v is number => typeof v === 'number')
      && 'isStructure' in this
      && typeof this.isStructure === 'function'
      && isObject(this.value);
  }
  constructor(index: number, value: T) {
    super(index, value);
    this.index = index;
    this.value = value;
    this.type = getSymbol(value);
  }
}
class ArrayStructure<T extends GenericArray> extends Construction<T> implements ArrayConstruction<T> {
  value: T;
  type: ArraySymbol<T>;
  map: Structure[];
  index: [number, number];
  isStructure(this: BaseStructure<T>): this is ArrayStructure<T> {
    return typeof this === 'object'
      && this !== null
      && 'type' in this
      && Array.isArray(this.type)
      && this.type.length >= 1
      && this.type.length <= 5
      && this.type.every((v) => typeof v === 'string')
      && this.type.some((v) => v === "string"
        || v === "boolean"
        || v === "number"
        || v === "object"
        || v === "Array")
      && 'value' in this
      && isGeneric(this.value)
      && Array.isArray(this.value)
      && 'index' in this
      && Array.isArray(this.index)
      && this.index.length === 2
      && this.index.every((v): v is number => typeof v === 'number')
      && 'isStructure' in this
      && typeof this.isStructure === 'function'
      && isGenericArray(this.value);
  }
  constructor(index: [number, number], ...value: T) {
    super(index, ...value as T extends GenericArray ? T : never);
    this.index = index;
    this.value = value;
    this.type = getArraySymbol(value);
    this.map = [];
    for (let i = 0; i < value.length; i++) {
      if (Array.isArray(value[i]) && isGenericArray(value[i])) {
        this.map[i] = structureMapper(i, ...value[i] as GenericArray);
      } else {
        this.map[i] = structureMapper(i, value[i])
      }
    }
  }
}
function structureMapper<T extends Generic>(index: number, ...value: (T extends GenericArray ? T : never) | [T]) {
  if (!isGeneric(value)) throw new Error(`Value is not a valid Generic: ${value}`);
  if (value.length === 1 && isPrimitive(value[0]) && typeof index === 'number') {
    return new ValueStructure(index, value[0]);
  }
  if (value.length === 1 && isObject(value[0]) && typeof index === 'number') {

    return new ObjectStructure(index, value[0]);
  }
  if (value.length > 1 && isGenericArray(value)) {
    const endIndex = index + value.length - 1
    return new ArrayStructure([index, endIndex], ...value);
  }
  throw new Error(`Value does not match an average Structure: ${value}`);
}
function isStructureObj(structure: Structure): structure is StructureObject {
  return Array.isArray(structure.value)
    && Array.isArray(structure.index)
    && structure.value.every(v => typeof v === 'string')
    && structure.index.length === 2
    && structure.index.every((v): v is number => typeof v === 'number');
}
function isStructureObject(structure: Structure): structure is StructureObject {
  return 'type' in structure
    && 'map' in structure
    && symbolType.includes(structure.type)
    && Array.isArray(structure.map)
    && structure.map.every((s): s is Structure => isStructure(s));
}

function parseArrayStructure(array: string[], nested: boolean = false): StructureMap {
  const stack: number[] = [];
  const map: StructureMap = [];
  let structure = {} as Structure;
  let currentIndex = 0;
  const openSymbol = array.find((s): s is Exclude<keyof OpenCloseMap, 'get'> => s !== 'get' && openSymbols.includes(s as any));
  const closeSymbol = openSymbol ? ocMap.get(openSymbol) : openSymbol;
  for (let i = 0; i < array.length; i++) {
    if (array[i] === openSymbol) {
      stack.push(i);
    } else if (array[i] === closeSymbol && stack.length > 0) {
      const openIndex = stack.pop()!;
      if (stack.length === 0) {
        const nestedValues = array.slice(openIndex + 1, i) as any[];
        for (let n = 0; n < nestedValues.length; n++) {
          nestedValues[n] = parseString(nestedValues[n])
        }
        const nestedStructure: ArrayStructure<any[]> = {} as ArrayStructure<string[]>;
        nestedStructure.type = getArraySymbol(nestedValues);
        nestedStructure.index = [openIndex, i];
        nestedStructure.value = nestedValues;
        nestedStructure.map = parseArrayStructure(nestedValues);
        map[currentIndex++] = nestedStructure as StructureMap[typeof currentIndex] extends StructureObject ? StructureObject : never;
      }
    } else if (stack.length === 0) {
      map[currentIndex++] = { value: array[i], index: i }
    }
  }
  return map;
}


function processMultipleNeighbors(arr: string[], targetValues: string[], action: NeighborAction): void {
  const stack: StructureMap = [];

  const openSymbols = Object.keys(map) as ['{', '[', '(', '<', '"', "'", "`"];
  const closeSymbols = Object.values(map) as ['}', ']', ')', '>', '"', "'", "`"];
  const intermittents = [",", ".", ":", ";", " ", "\\t", "\\n", "\\r", "=", "+"] as const;
  let stacker: number[] = [];
  let nested = false;
  arr.map((v, i, a) => {
    let newArray: string[] = [];
    for (const os of openSymbols) {
      let cs = map[os];
      if (os === v) {
        stacker.push(i);
      } else if (v === cs && stacker.length > 0) {
        const openIndex = stacker.pop()!;
        if (!nested) {
          arr
          newArray = a.slice(openIndex, i + 1);
        }
      }
    } else if ()
  })
  for (let i = 0; i < openSymbols.length; i++) {
    const open = openSymbols[i];
    const close = closeSymbols[i];
    const openIndex = arr.indexOf(open);
    const closeIndex = arr.indexOf(close);

    if (openIndex !== -1 && closeIndex !== -1) {
      stack.push(openIndex);
      stack.push(closeIndex);
    }
  }
  for (const value of arr) {
    const index = arr.indexOf(value);
    if (targetValues.includes(value)) {
      const before = arr.slice(Math.max(0, index - numNeighbors), index);
      const after = arr.slice(index + 1, index + 1 + numNeighbors);
      action(before, value, after);
    }
  }
  arr.forEach((value, index) => {
    if (targetValues.includes(value)) {
      const before = arr.slice(Math.max(0, index - numNeighbors), index);
      const after = arr.slice(index + 1, index + 1 + numNeighbors);
      action(before, value, after);
    }
  });
}
function parseString(value: string): string | number | boolean {
  if (value.toLowerCase() === "true" || value.toLowerCase() === "false") {
    return Boolean(value);
  }
  const num = parseFloat(value);
  if (!isNaN(num) && isFinite(num)) {
    return Number(num);
  }
  return value;
}
function isValue<T extends string[]>(value: string, ...searchValues: T): value is T[number] {
  return searchValues.includes(value);
}
type NeighborAction = (before: string[], target: string, after: string[]) => void;
type JSONBasicValue = string | number | boolean;
type JSONArray = JSONBasicValue[] | JSONObject[];
interface JSONObject {
  [x: string]: JSONBasicValue | JSONArray | JSONObject;
};


function seperateKVs(...args: string[]) {
  const values = ExtendedArray(...args);
  const splitValues = ['{', '}', ':', '=', ','] as const;
  const seperated: string[] = [];
  let o = {} as JSONObject;
  let key = '';
  let value = '' as JSONObject[string];
  let arrayLength = 0;
  if (values.exists(...splitValues)) {
    let valueArray = values.filter((v): v is typeof values[number] extends typeof splitValues[number] ? never : typeof values[number] => !splitValues.includes(v as any));
    for (let i = 0; i < valueArray.length; i++) {
      const seperatedArr = seperateValueArray(i, arrayLength, ...values);
      if ((i - arrayLength) % 2 === 0) {
        o[valueArray[i]] = seperatedArr || parseString(valueArray[i + 1]);
      }
    }
  }
}
function handleValue(value: string, arrLength: number) {
  const splitValues = ['\\{', '\\}', ':', '=', ',', '\\[', '\\]'] as const;
  const values = ExtendedArray(...handleSplitting(str, ...splitValues));
  let start = true;
  let stop = false;
  let k = '';
  let v = '';
  function mapArrays(value: string[]) {
    let index = 0;
    let arrays: string[][]= []
    for (const splitter of splitValues) {
      let indexAt0 = index === 0 ? true : false;
      index = indexAt0 ? value.indexOf(splitter) : value.indexOf(splitter, index);

    }
    value.findIndex((v): v is typeof splitValues[number] => splitValues.includes(v as any))
  }
  values =
  for (let i = 0; i < values.length; i++) {
    start = !isValue(values[i], '{', '[', ',');
    while (start === true && stop === false) {
      stop = isValue(values[i], ':', ']', '=', '}');
      v += values[i];
    }
  }
}
function seperateValueArray(index: number, arrLength: number, ...args: string[]) {
  let j = index + 2;
  let handledArray: JSONBasicValue[] = [];
  if (((index - arrLength) % 2 === 0) && args[index + 1] === '[') {
    arrLength += 1;
    while (args[j] !== ']') {
      handledArray.push(parseString(args[j]));
      j++;
      arrLength++;
    }
    return handledArray as JSONArray;
  } else {
    return null;
  }
}
function handleObjectKV(...args: string[]) {
  if (args[0].startsWith('{')) {
    const initialValue = ExtendedArray(...handleSplitting(args[0], ':', ',', '[', ']', '='));
    let key = '';
    let value = '';
    let start = false;
    let stop = false;
    for (let i = 0; i < initialValue.length; i++) {
      if (initialValue[i] === '{') {
        initialValue.reduce((p, c, n, a) => {
          start = isValue(c, ',', '[', '{');
          if (start === true) {
            while (stop === false || n < initialValue.length) {
              p += c;
              stop = isValue(c, ':', ']', '=');
              n++
            }
            start = false;
            stop = false;
          } else {

          }
          stop = isValue(c, ':', ']', '=');
        })
        key = initialValue[]
      }
    }
  }
}
function handleObjectParams(params: string[] | string, ...args: string[]) {
  let objectString = '{';
  let jsonObject = {} as JSONObject;
  params = typeof params === 'string' ? [params] : params;
  const data = ExtendedArray(...args)
  for (let i = 0; i < data.length; i++) {
    if (isCLArg(data[i]) && data.isVal(data[i], ...params)) {
      if (data[i + 1].startsWith('{')) {
        const initialArray = handleSplitting(data[i + 1], ':', ',', '[', ']');
        for (let j = (i + 1); j < data.length && (!data[j].startsWith('-') && !data[j].startsWith('--')) && !data[j].endsWith('}'); j++) {
          let newArray = handleSplitting(data[j], ':', ',', '[', ']');
          let arrayLength = 0;
          for (let k = 0; k < newArray.length; k++) {
            if (newArray.includes(':')) {
              if (newArray[k + 1] === ':') {
                const key = newArray[k];
                const value = newArray[k + 2] === '[' ? (function () {
                  let arrayValue: string[] = [];
                  for (let l = (k + 3); l < newArray.length && newArray[l] !== ']'; l++) {
                    arrayValue.push(`"${newArray[l]}"`);
                  }
                  return arrayValue;
                })() : newArray[k + 2];
                jsonObject[key] = value === "true" || value === "false" ? Boolean(value) : value;
                objectString += `"${key}":`;
                objectString += value === "true" || value === "false" ? value : newArray[k + 2] === '[' ? `${value},` : `"${value}",`;
              }
            } else {
              if (k % 2 === 0 || (k - arrayLength) % 2 === 0) {
                const key = newArray[k];
                const value = newArray[k + 1] === '[' ? (function () {
                  let arrayValue: string[] = [];
                  for (let l = (k + 2); l < newArray.length && newArray[l] !== ']'; l++) {
                    arrayValue.push(`"${newArray[l]}"`);
                  }
                  arrayLength += arrayValue.length + 1;
                  return arrayValue;
                })() : newArray[k + 1];
                jsonObject[key] = value === "true" || value === "false" ? Boolean(value) : value;
                objectString += `"${key}":`;
                objectString += value === "true" || value === "false" ? value : newArray[k + 1] === '[' ? `${value},` : `"${value}",`;
              }
            }
            console.log(objectString);
          }
        }
      }
    }
  }
  let parsedObject = JSON.parse(objectString);
  return [parsedObject, jsonObject];
}
function handleModuleResolutionOptions(...args: ExtendedArray<string>) {
  moduleResolutionOptions.types = handleMultiValueParam(['--types', '-t'], ...args);

  for (let i = 0; i < args.length; i++) {
    let currentArg = args[i];
  }
}
