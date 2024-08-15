/**
 * @file utilityTypes.ts
 * @description
 * @author Matthew Allen Rackley
 * @copyright [Matthew Rackley's Github](https://www.github.com/matthewrackley "Matthew Rackley on github.com")
 */
export declare namespace Util {
    type LiteralTypes = (string | number | symbol | boolean | object | [LiteralTypes, ...LiteralTypes[]]) | [
        (string | number | symbol | boolean | object | LiteralTypes),
        ...(string | number | symbol | boolean | object | LiteralTypes)[]
    ];
    type LiteralStrings = (string | number | boolean | null);
    type LiteralTypesO<T = any> = (string | number | symbol | boolean | {
        [K in keyof T]: T[K] extends LiteralTypesO<T[K]> ? T[K] : never;
    }) | [(string | number | symbol | boolean | {
        [K in keyof T]: T[K] extends LiteralTypesO<T[K]> ? T[K] : never;
    })[], ...(string | number | symbol | boolean | {
        [K in keyof T]: T[K] extends LiteralTypesO<T[K]> ? T[K] : never;
    })[]];
    interface StringLike<N extends String['length']> extends String {
        readonly length: N;
    }
    type DataType = 'User' | 'Zone' | 'Date' | 'RegExp' | 'Error' | 'Promise' | 'DataView' | 'Math' | 'JSON' | 'Promise';
    type InverseMapping<T extends {
        [K in keyof T]: T[K];
    }> = {
        [Key in keyof T]: {
            [K in (T[Key][number] | T[Key]) as K extends string ? K : never]: Key;
        };
    }[keyof T];
    type InverseObject<T extends {
        [K in keyof T]: T[K];
    }> = {
        [K in keyof T as T[K] extends T[K][keyof T[K]][] ? T[K][number] : T[K]]: K;
    };
    type GetProperty<T extends object, K extends keyof T> = T[K];
    type RemoveProperty<T extends object, K extends keyof T> = Omit<T, K>;
    type Interpolate<Segments extends any[]> = Segments extends [infer First, ...infer Rest] ? First extends string ? Rest extends string[] ? `${First}${Interpolate<Rest>}` : never : never : '';
    type InterpolateBySep<Segments extends any[], Separator extends string> = Segments extends [infer First, ...infer Rest] ? First extends string ? Rest extends any[] ? `${First}${Rest['length'] extends 0 ? '' : Separator}${InterpolateBySep<Rest, Separator>}` : never : never : '';
    type SeparatorInterpolation<Values extends string[], Separators extends string[], Previous extends string = ''> = Values extends [infer Current extends string, ...infer RemainingValues extends string[]] ? Separators extends [infer CurrentSeparator extends string, ...infer RemainingSeparators extends string[]] ? SeparatorInterpolation<RemainingValues, RemainingSeparators, `${Previous}${Current}${CurrentSeparator}`> : `${Previous}${Current}` : Previous;
    /**
     * @type {ArrayToString<A extends string[] | readonly string[], D extends string, P extends string = ''>} ArrayToString - Converts an array of strings to a string.
     * @param {A extends string[] | readonly string[]} A - The array to convert.
     * @param {D extends string} D - The seperator to join the array with.
     * @param {P extends string} [P=''] - The string to prepend to the array. Should be left blank.
     * @returns {ArrayToString<A, D, P>} The joined array.
     */
    type ArrayToString<A extends string[] | readonly string[], D extends string, P extends string = ''> = A extends [infer F extends string, ...infer R extends string[]] | readonly [infer F extends string, ...infer R extends string[]] ? ArrayToString<R, D, `${P}${P extends '' ? '' : D}${F}`> : P;
    /**
     * @type {Opaque<Type, Token>} Opaque - Creates an opaque type.
     * An opaque type is a type that is a subtype of another type, but is not assignable to it.
     * This is useful for creating types that are not assignable to each other, but are the same type.
     * For example, you can use this type to mask a template literal
     * @param {Type} Type - The type to make opaque.
     * @param {Token} [Token=unknown] - The token to make the type opaque with.
     * @returns {Opaque<Type, Token>} The opaque type.
     */
    type Opaque<Type, Token = unknown> = Type & {
        readonly __opaque__: Token;
    };
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
    const joinArray: Join;
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
            [P in keyof T[K] as T[K][P] extends never ? never : P]: T[K][P];
        };
    };
    type FilterNeverWithDepth<T, Depth extends number> = {
        [K in keyof T]: Depth extends 0 ? T[K] : T[K] extends object ? FilterNeverWithDepth<T[K], Subtract<Depth>> : T[K] extends never ? never : T[K];
    };
    type CapitalizeStrings<T> = {
        [K in keyof T]: string;
    };
    type MakeNormal<T> = T extends Readonly<T> | {
        readonly [x in any]: any;
    }[keyof T] ? T | {
        -readonly [x in any]: any;
    } : never;
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
    type MultiCase<T extends string> = Uppercase<T> | Lowercase<T>;
    type AlphaNumeric<T extends string> = T extends `${infer F extends string}${infer R extends string}` ? (F extends AlphaNumericUnion ? `${F}${AlphaNumeric<R>}` : never) : T;
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
    type StringToArray<S extends string, D extends string> = S extends '' ? [] : S extends `${infer F}${D}${infer R}` ? [F, ...StringToArray<R, D>] : [
        S
    ];
    function add<N extends number>(num: N): typeof num extends infer N_1 extends number ? `${N_1}` extends `${infer N3 extends 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8}` ? ParseInt<`${Util.SimpleMath<N3>}`> : `${N_1}` extends `${infer N3 extends 9}` ? 10 : `${N_1}` extends `${infer N3 extends Util.BelowTen}${infer N2 extends 0 | Util.BelowTen}` ? `${N3}${N2}` extends `${99}` ? 100 : ParseInt<`${N2 extends 9 ? Util.SimpleMath<N3> : N3}${Util.SimpleMath<N2>}`> : `${N_1}` extends `${infer N3 extends Util.BelowTen}${infer N2_1 extends 0 | Util.BelowTen}${infer N1 extends 0 | Util.BelowTen}` ? ParseInt<`${N1 extends 9 ? N2_1 extends 9 ? Util.SimpleMath<N3> : N3 : N3}${N1 extends 9 ? Util.SimpleMath<N2_1> : N2_1}${Util.SimpleMath<N1>}`> : never : never;
    type AddLater<N extends number = 99> = N extends number ? AddOneSm<N> : never;
    type Add<A extends number> = A extends infer N extends number ? `${N}` extends `${infer N3 extends 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8}` ? ParseInt<`${Util.SimpleMath<N3>}`> : `${N}` extends `${infer N3 extends 9}` ? 10 : `${N}` extends `${infer N3 extends Util.BelowTen}${infer N2 extends 0 | Util.BelowTen}` ? `${N3}${N2}` extends `${99}` ? 100 : ParseInt<`${N2 extends 9 ? Util.SimpleMath<N3> : N3}${Util.SimpleMath<N2>}`> : `${N}` extends `${infer N3 extends Util.BelowTen}${infer N2 extends 0 | Util.BelowTen}${infer N1 extends 0 | Util.BelowTen}` ? ParseInt<`${N1 extends 9 ? N2 extends 9 ? Util.SimpleMath<N3> : N3 : N3}${N1 extends 9 ? Util.SimpleMath<N2> : N2}${Util.SimpleMath<N1>}`> : never : never;
    type Subtract<A extends number> = A extends infer N extends number ? `${N}` extends `${infer N3 extends 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9}` ? ParseInt<`${Util.SimpleMath<N3, '-'>}`> : `${N}` extends `${infer N3 extends 1}` ? 0 : `${N}` extends `${infer N3 extends Util.BelowTen}${infer N2 extends 0 | Util.BelowTen}` ? `${N3}${N2}` extends `${10}` ? 9 : ParseInt<`${N2 extends 0 ? Util.SimpleMath<N3, '-'> : N3}${Util.SimpleMath<N2, '-'>}`> : `${N}` extends `${infer N3 extends Util.BelowTen}${infer N2 extends 0 | Util.BelowTen}${infer N1 extends 0 | Util.BelowTen}` ? `${N3}${N2}${N1}` extends `${100}` ? 99 : ParseInt<`${N1 extends 0 ? N2 extends 0 ? Util.SimpleMath<N3, '-'> : N3 : N3}${N1 extends 0 ? Util.SimpleMath<N2, '-'> : N2}${Util.SimpleMath<N1, '-'>}`> : never : never;
    type Callback<T extends any[]> = (...args: T) => void;
    function executeCallback<T extends any[]>(callback: Callback<T>, ...args: T): void;
    function createCallback<T extends any[]>(callback: Callback<T>): Callback<T>;
    type Func<T extends ((...args: Parameters<T>) => ReturnType<T>)> = (...args: Parameters<T>) => ReturnType<T>;
    type CreateClosureStore = <BaseType>(base: BaseType) => ClosureStore<BaseType>;
    type ClosureStore<BaseType> = <T extends [BaseType]>() => {
        <F extends Func<F>>(fn: (...args: T) => ReturnType<F>, ...args: T): ReturnType<F>;
    };
    type StringToNumber<S extends string> = S extends `${infer F extends number}${infer R}` ? F | StringToNumber<R> : never;
    type AdditionHelper = {
        [K in BelowOneHundred as K extends 99 ? never : K]: Util.HundredArray[K];
    } & {
        0: 1;
        99: 0;
    };
    type ParseInt<T> = T extends `${infer N extends number}` ? N : never;
    type ObjectHasProperty<Obj1, Obj2, Property extends keyof Obj1 | keyof Obj2 = keyof Obj1 | keyof Obj2> = Property extends keyof Obj1 ? Obj1[Property] : Property extends keyof Obj2 ? Obj2[Property] : never;
    type AddTenHelper<T extends '+' | '-' = '+'> = {
        [K in Util.BelowTen]: K extends 9 ? T extends '-' ? 8 : 0 : TenArray<T>[K];
    } & {
        0: T extends '-' ? 9 : 1;
    };
    type SimpleMath<N extends number | '', T extends '+' | '-' = '+'> = AddTenHelper<T>[N extends keyof AddTenHelper<T> ? N : never];
    type AddOneSm<T> = AdditionHelper[T extends keyof AdditionHelper ? T : never];
    type OneHundred = Util.ParseInt<`${Util.BelowTen}${0 | Util.BelowTen}`> | 100 | Util.ParseInt<`${0 | Util.BelowTen}`>;
    type Fifty = Util.ParseInt<`${1 | 2 | 3 | 4}${0 | Util.BelowTen}`> | 50 | Util.ParseInt<`${0 | Util.BelowTen}`>;
    type Fifteen = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15;
    type HandleMathFifties<N extends Util.Fifty, T extends '+' | '-' = '+'> = `${N}` extends `${infer N1 extends 0 | Util.BelowTen}` ? T extends '-' ? Util.ParseInt<`${N1 extends 0 ? N1 : Util.SimpleMath<N1, T>}`> : Util.ParseInt<`${N1 extends 9 ? 10 : Util.SimpleMath<N1, T>}`> : `${N}` extends `${infer N2 extends 1 | 2 | 3 | 4 | 5}${infer N1 extends 0 | Util.BelowTen}` ? T extends '-' ? Util.ParseInt<`${N1 extends 0 ? N2 extends 1 ? '' : Util.SimpleMath<N2, T> : N2}${Util.SimpleMath<N1, T>}`> : Util.ParseInt<`${N1 extends 9 ? N2 extends 4 | 5 ? 5 : Util.SimpleMath<N2, T> : N2}${N2 extends 5 ? 0 : Util.SimpleMath<N1, T>}`> : never;
    type OneThousand = Util.ParseInt<`${Util.BelowTen}${0 | Util.BelowTen}`> | Util.ParseInt<`${Util.BelowTen}${0 | Util.BelowTen}${0 | Util.BelowTen}`> | Util.ParseInt<`${0 | Util.BelowTen}`>;
    type Addition50<N extends Util.Fifty> = Util.HandleMathFifties<N, '+'>;
    type Subtraction50<N extends Util.Fifty> = Util.HandleMathFifties<N, '-'>;
    function addFifty<N extends Util.Fifty>(num: N): Util.Addition50<N>;
    function subtractFifty<N extends Util.Fifty>(num: N): Util.Subtraction50<N>;
    type HundredArray<T extends '+' | '-' = '+'> = T extends '-' ? [
        0,
        0,
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10,
        11,
        12,
        13,
        14,
        15,
        16,
        17,
        18,
        19,
        20,
        21,
        22,
        23,
        24,
        25,
        26,
        27,
        28,
        29,
        30,
        31,
        32,
        33,
        34,
        35,
        36,
        37,
        38,
        39,
        40,
        41,
        42,
        43,
        44,
        45,
        46,
        47,
        48,
        49,
        50,
        51,
        52,
        53,
        54,
        55,
        56,
        57,
        58,
        59,
        60,
        61,
        62,
        63,
        64,
        65,
        66,
        67,
        68,
        69,
        70,
        71,
        72,
        73,
        74,
        75,
        76,
        77,
        78,
        79,
        80,
        81,
        82,
        83,
        84,
        85,
        86,
        87,
        88,
        89,
        90,
        91,
        92,
        93,
        94,
        95,
        96,
        97,
        98,
        99
    ] : [
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10,
        11,
        12,
        13,
        14,
        15,
        16,
        17,
        18,
        19,
        20,
        21,
        22,
        23,
        24,
        25,
        26,
        27,
        28,
        29,
        30,
        31,
        32,
        33,
        34,
        35,
        36,
        37,
        38,
        39,
        40,
        41,
        42,
        43,
        44,
        45,
        46,
        47,
        48,
        49,
        50,
        51,
        52,
        53,
        54,
        55,
        56,
        57,
        58,
        59,
        60,
        61,
        62,
        63,
        64,
        65,
        66,
        67,
        68,
        69,
        70,
        71,
        72,
        73,
        74,
        75,
        76,
        77,
        78,
        79,
        80,
        81,
        82,
        83,
        84,
        85,
        86,
        87,
        88,
        89,
        90,
        91,
        92,
        93,
        94,
        95,
        96,
        97,
        98,
        99,
        100,
        100
    ];
    type FiftyArray<T extends '+' | '-' = '+'> = T extends '-' ? [
        0,
        0,
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10,
        11,
        12,
        13,
        14,
        15,
        16,
        17,
        18,
        19,
        20,
        21,
        22,
        23,
        24,
        25,
        26,
        27,
        28,
        29,
        30,
        31,
        32,
        33,
        34,
        35,
        36,
        37,
        38,
        39,
        40,
        41,
        42,
        43,
        44,
        45,
        46,
        47,
        48,
        49
    ] : [
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10,
        11,
        12,
        13,
        14,
        15,
        16,
        17,
        18,
        19,
        20,
        21,
        22,
        23,
        24,
        25,
        26,
        27,
        28,
        29,
        30,
        31,
        32,
        33,
        34,
        35,
        36,
        37,
        38,
        39,
        40,
        41,
        42,
        43,
        44,
        45,
        46,
        47,
        48,
        49,
        50,
        50
    ];
    type Add50<N extends Util.Fifty> = Util.FiftyArray[N];
    type Subtract50<N extends Util.Fifty> = Util.FiftyArray<'-'>[N];
    type Add100<N extends Util.OneHundred> = Util.HundredArray[N];
    type Subtract100<N extends Util.OneHundred> = Util.HundredArray<'-'>[N];
    type Reset = 0;
    type BelowOneHundred = Util.HundredArray[number];
    type TenArray<T extends '+' | '-' = '+'> = T extends '-' ? [9, 0, 1, 2, 3, 4, 5, 6, 7] : [1, 2, 3, 4, 5, 6, 7, 8, 9];
    type BelowTen = TenArray<'+'>[number];
    type RecursiveObject<T> = {
        [K in keyof T]: T[K];
    };
    type ObjectWithDepth<T extends {} = {}, Depth extends number = 5> = {
        [K in keyof T]: Depth extends 0 ? unknown : ObjectWithDepth<T[K], Subtract<Depth, 1>>;
    };
    type RecursiveArray<A extends [...any[]] = [...any[]]> = {
        [K in keyof A]: A[K];
    };
    type Property<Obj extends {}> = keyof Obj;
    type Concurrent<Obj, R extends keyof Obj | Obj[keyof Obj] = keyof Obj> = {
        [K in keyof Obj as R extends keyof Obj ? R : K]: Obj[K] | R;
    };
    type ObjectFromUnion<O = {}> = <PKeys extends keyof O, PValues extends O[PKeys]>(keys: PKeys) => {
        [P in PKeys]: PValues;
    };
    type Hook<T extends any[]> = (...params: T) => any;
    type TupleProperty<T extends [any, ...any[]]> = <V, N extends number>(index: N) => TupleHasProperty<V, T, typeof index>;
    type TupleHasProperty<V, T extends [any, ...any[]], N extends number> = (tuple: T) => V extends T[number] ? T[V] : never;
    function tupleHasProperty<T extends [...any[]]>(index: number): T[number];
    type Obj<T> = {
        [K in keyof T]: T[K];
    };
    function makeTuple<T extends T[number][]>(...args: T): T;
    interface DeepFreezeArray<T> extends ReadonlyArray<DeepFreeze<T>> {
    }
    type DeepFreezeObject<T> = {
        +readonly [P in keyof T]: DeepFreeze<T[P]>;
    };
    type DeepReadonly<T> = {
        +readonly [P in keyof T]: DeepReadonly<T[P]>;
    };
    function addition<N extends Util.Fifty>(num: N): Util.Add50<N>;
    function addition100<N extends OneHundred>(num: N): Util.Add100<N> extends OneHundred ? Util.Add100<N> : never;
    function subtraction<N extends Util.Fifty>(num: N): Util.Subtract50<N>;
    function subtraction100<N extends OneHundred>(num: N): Util.Subtract100<N> extends OneHundred ? Util.Subtract100<N> : never;
    type DeepFreezeRecursive<T> = DeepReadonly<DeepFreeze<T>>;
    type DeepFreeze<T> = T extends (infer U)[] ? DeepFreezeArray<U> : T extends object ? DeepFreezeObject<T> : T;
    interface SplitStr<T extends string> {
        value: T;
        substrings: T extends `${infer F}${infer R}` ? [F, ...SplitStr<R>['substrings']] : [];
        length: T extends `${infer F}${infer R}` ? [F, ...SplitStr<R>['substrings']]['length'] : 0;
    }
    type Constructor<T = {}> = new (...args: any[]) => T;
    type UnionFromArray<T> = Extract<T, Array<string>>[number] | Extract<T, string>;
    type ArrayUnion<T> = Extract<T, Array<string>>;
    type ObjectOf<T, K extends keyof T> = {
        [key in K]: T[key];
    };
    type ValueOf<T> = T[keyof T];
    type ReturnArray<K extends keyof T, T> = <V extends T[K]>(ind: K) => [keys: K, values: V];
    type CreateUnion<K extends keyof T, V extends T[K], T extends ObjectOf<T, K>> = (array: T) => (index: K) => [keys: K, values: V];
    type IndexByType<T, K extends keyof T> = <V extends T[keyof T]>(ind: K) => [keys: K, values: V];
}
export declare namespace Metadata {
    export type Config<P> = P extends [string, string] ? BaseObject<P> & {
        [K in P as K[0]]: K[1];
    } : never;
    export type BaseObject<P> = P extends [string, string] ? P extends [P[0] extends string ? P[0] : never, P[1] extends string ? P[1] : never] ? {
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
    export type Author<P> = P extends [string, string] ? P extends [P[0] extends 'author' ? P[0] : never, P[1] extends string ? P[1] : never] ? ['author', P[1]] & {
        __type: 'author';
    } : never : never;
    /**
     * @type {Description} Description - The description of the package.
     */
    export type Description<P> = P extends [string, string] ? P extends [P[0] extends 'description' ? P[0] : never, P[1] extends string ? P[1] : never] ? ['description', P[1]] & {
        __type: 'description';
    } : never : never;
    /**
     * @type {Version} Version - The version of the package.
     */
    export type Version<P> = P extends [string, string] ? P extends [P[0] extends 'version' ? P[0] : never, P[1] extends string ? P[1] : never] ? ['version', P[1]] & {
        __type: 'version';
    } : never : never;
    /**
     * @type {File} File - The file of the package.
     */
    export type File<P> = P extends [string, string] ? P extends [P[0] extends 'file' ? P[0] : never, P[1] extends string ? P[1] : never] ? ['file', P[1]] & {
        __type: 'file';
    } : never : never;
    /**
     * @type {Name} Name - The name of the package.
     */
    export type Name<P> = P extends [string, string] ? P extends [P[0] extends 'name' ? P[0] : never, P[1] extends string ? P[1] : never] ? ['name', P[1]] & {
        __type: 'name';
    } : never : never;
    /**
     * @type {Copyright} Copyright - The copyright of the package.
     */
    export type Copyright<P> = P extends [string, string] ? P extends [P[0] extends 'copyright' ? P[0] : never, P[1] extends string ? P[1] : never] ? ['copyright', P[1]] & {
        __type: 'copyright';
    } : never : never;
    /**
     * @type {Pair} Pair - A key-value pair.
     * @template P - The key-value pair.
     */
    export type Pair<P> = P extends [string, string] ? P extends [P[0] extends string ? P[0] : never, P[1] extends string ? P[1] : never] ? P : never : never;
    export type CombineArrays<T extends any[], U extends any[]> = [...T, ...U];
    /**
     * @function makeBasePair - Creates a base pair from key-value pairs.
     * @type {MakeBasePair} BasePair - An array of key-value pairs with optional __type properties.
     * @param {Pair<[string, string]>[]} pair - The key-value pair.
     * @returns {BasePair<[string, string]>} The base pair.
     */
    export const makeBasePair: MakeBasePair;
    /**
     * @type MakeBasePair - Checks if an array is a base pair.
     * @template P - The key-value pair.
     * @returns {(P extends [K,V] ? MetaPair<P> : never)[]} The Final Array.
     */
    export type MakeBasePair = <P>(...pair: Pair<P>[]) => BasePair<P>;
    /**
     * @type BasePair - An array of key-value pairs with optional __type properties.
     * @template P - The key-value pair.
     */
    export type BasePair<P> = Pair<P> extends [string, string] ? Pair<P> extends [Pair<P>[0] extends string ? Pair<P>[0] : never, Pair<P>[1] extends string ? Pair<P>[1] : never] ? {
        [K in Pair<P> as K[0]]: MetaPair<K>;
    }[Pair<P>[0]][] : never : never;
    /**
     * @type MetaPair - A key-value pair with a __type property or a normal key-value pair.
     * @template P - The key-value pair.
     */
    export type MetaPair<P> = P extends [string, string] ? P extends [P[0] extends string ? P[0] : never, P[1] extends string ? P[1] : never] ? P[0] extends MainKeys ? P[0] extends 'name' ? ['name', P[1]] & {
        __type: 'name';
    } : P[0] extends 'version' ? ['version', P[1]] & {
        __type: 'version';
    } : P[0] extends 'file' ? ['file', P[1]] & {
        __type: 'file';
    } : P[0] extends 'author' ? ['author', P[1]] & {
        __type: 'author';
    } : P[0] extends 'description' ? ['description', P[1]] & {
        __type: 'description';
    } : P[0] extends 'copyright' ? ['copyright', P[1]] & {
        __type: 'copyright';
    } : never : [P[0], P[1]] : never : never;
    /**
     * @function isSinglePair - Checks if a pair is a common key-value pair.
     * @param {Pair<P>} pair - The pair to check.
     * @returns {pair is MetaPair<P>} Whether the pair is a common key-value pair.
     */
    export function isSinglePair<P>(pair: Pair<P>): pair is MetaPair<P> extends Pair<P> ? MetaPair<P> : never;
    /**
     * @function isAuthorPair - Checks if a pair is an author pair.
     * @param {Pair<P>} pair - The pair to check.
     * @returns {pair is Author<P>} Whether the pair is an author pair.
     */
    export function isAuthorPair<P>(pair: Pair<P>): pair is Author<P> extends Pair<P> ? Author<P> : never;
    /**
     * @function isVersionPair - Checks if a pair is a version pair.
     * @param {Pair<P>} pair - The pair to check.
     * @returns {pair is Version<P>} Whether the pair is a version pair.
     */
    export function isVersionPair<P>(pair: Pair<P>): pair is Version<P> extends Pair<P> ? Version<P> : never;
    /**
     * @function isFilePair - Checks if a pair is a file pair.
     * @param {Pair<P>} pair - The pair to check.
     * @returns {pair is File<P>} Whether the pair is a file pair.
     */
    export function isFilePair<P>(pair: Pair<P>): pair is File<P> extends Pair<P> ? File<P> : never;
    /**
     * @function isNamePair - Checks if a pair is a name pair.
     * @param {Pair<P>} pair - The pair to check.
     * @returns {pair is Name<P>} Whether the pair is a name pair.
     */
    export function isNamePair<P>(pair: Pair<P>): pair is Name<P> extends Pair<P> ? Name<P> : never;
    /**
     * @function isDescriptionPair - Checks if a pair is a description pair.
     * @param {Pair<P>} pair - The pair to check.
     * @returns {pair is Description<P>} Whether the pair is a description pair.
     */
    export function isDescriptionPair<P>(pair: Pair<P>): pair is Description<P> extends Pair<P> ? Description<P> : never;
    /**
     * @function isCopyrightPair - Checks if a pair is a description pair.
     * @param {Pair<P>} pair - The pair to check.
     * @returns {pair is Description<P>} Whether the pair is a description pair.
     */
    export function isCopyrightPair<P>(pair: Pair<P>): pair is Copyright<P> extends Pair<P> ? Copyright<P> : never;
    export function isPairs<P>(pairArray: Pair<P>[]): pairArray is BasePair<P> extends typeof pairArray ? BasePair<P> : never;
    export {};
}
export declare const isAlphaNumeric: typeof Util.isAlphaNumeric, joinArray: Join, makeTuple: typeof Util.makeTuple, removeChar: typeof Util.removeChar, split: SplitString, add: typeof Util.add, tupleHasProperty: typeof Util.tupleHasProperty, createCallback: typeof Util.createCallback, executeCallback: typeof Util.executeCallback, addition: typeof Util.addition, subtraction: typeof Util.subtraction, addition100: typeof Util.addition100, subtraction100: typeof Util.subtraction100;
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
import OneThousand = Util.OneThousand;
import HundredArray = Util.HundredArray;
import BelowOneHundred = Util.BelowOneHundred;
import TenArray = Util.TenArray;
import BelowTen = Util.BelowTen;
import MetaConfig = Metadata.Config;
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
import Subtract50 = Util.Subtract50;
import Add50 = Util.Add50;
import Add = Util.Add;
export type { MetaConfig, OneHundred, Add50, Subtract50, Fifty, Fifteen, Add100, Subtract100, MetaCopyrightPair, MetaAuthorPair, MetaDescriptionPair, MetaVersionPair, MetaFilePair, MetaNamePair, OneThousand, HundredArray, BelowOneHundred, TenArray, BelowTen, Add, Subtract, AddOneSm, AddTenHelper, AdditionHelper, AlphaNumeric, Alphabet, AlphaNumericUnion, ArrayToString, CapitalizeStrings, Concurrent, CreateUnion, DeepFreeze, DeepFreezeArray, DeepFreezeObject, DeepFreezeRecursive, DeepReadonly, FilterNever, FilterNestedNever, FilterNeverWithDepth, Interpolate, InterpolateBySep, Join, LowercaseArray, MakeNormal, MultiCase, ObjectFromUnion, ObjectHasProperty, ObjectOf, Opaque, Property, RemoveChar, RemoveChars, ReturnArray, SeparatorInterpolation, Split, SplitString, StringToArray, StringToNumber, TupleProperty, TupleHasProperty, TypeParameter, TypePlusParameter, UnionFromArray, ValueOf, RecursiveArray, RecursiveObject, };
export default Util;
