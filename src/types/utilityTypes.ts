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

  var stringLike: Util.StringLike<any>;
  /**
   * @constant {SplitString} split - Splits a string into an array of its characters.
   * @param {S} stringToSplit - The string to split into an array of characters.
   * @param {D} [separator=''] - The seperator to split the string with. Defaults to an empty string.
   * @returns {StringToArray<S, D>} The array of characters.
   */
  export const split: Util.SplitString = (stringToSplit, separator) => {
    if (!separator) separator = '' as typeof separator;
    if (typeof separator !== 'string') throw new TypeError('The separator must be a string.');
    return stringToSplit.split(separator) as StringToArray<typeof stringToSplit, typeof separator>;
  };
  export function tupleHasProperty<T extends [...any[]]>(index: number): T[number] {
    return index as T[number];
  }
  export function addFifty<N extends Util.Fifty>(num: N): Util.Addition50<N> {
    return num + 1 as Util.Addition50<N>;
  }
  export function subtractFifty<N extends Util.Fifty>(num: N): Util.Subtraction50<N> {
    return num - 1 as Util.Subtraction50<N>;
  }

  export function executeCallback<T extends any[]>(callback: Util.Callback<T>, ...args: T): void {
    callback(...args);
  }

  export function createCallback<T extends any[]>(callback: Util.Callback<T>): Util.Callback<T> {
    return (...args: T) => {
      callback(...args);
    };
  }
  export function makeTuple<T extends T[number][]>(...args: T) { return args; }

  export function addition<N extends Util.Fifty>(num: N): Util.Add50<N> {
    return num + 1 as Util.Add50<N> extends Util.Fifty ? Util.Add50<N> : never;
  }
  export function addition100<N extends Util.OneHundred>(num: N): Util.Add100<N> extends Util.OneHundred ? Util.Add100<N> : never {
    return num + 1 as Util.Add100<N> extends Util.OneHundred ? Util.Add100<N> : never;
  }
  export function subtraction<N extends Util.Fifty>(num: N): Util.Subtract50<N> {
    return num - 1 as Util.Subtract50<N> extends Util.Fifty ? Util.Subtract50<N> : never;
  }
  export function subtraction100<N extends Util.OneHundred>(num: N): Util.Subtract100<N> extends Util.OneHundred ? Util.Subtract100<N> : never{
    return num - 1 as Util.Subtract100<N> extends Util.OneHundred ? Util.Subtract100<N> : never;
  }

  export function add<N extends number>(num: N) {
    const val = `${num + 1}` as const;
    return (num + 1) as typeof num extends infer N extends number
      ? `${N}` extends `${infer N3 extends 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8}`
      ? Util.ParseInt<`${Util.SimpleMath<N3>}`>
      : `${N}` extends `${infer N3 extends 9}`
      ? 10
      : `${N}` extends `${infer N3 extends Util.BelowTen}${infer N2 extends 0 | Util.BelowTen}`
      ? `${N3}${N2}` extends `${99}`
      ? 100
      : Util.ParseInt<`${N2 extends 9 ? Util.SimpleMath<N3> : N3}${Util.SimpleMath<N2>}`>
      : `${N}` extends `${infer N3 extends Util.BelowTen}${infer N2 extends 0 | Util.BelowTen}${infer N1 extends 0 | Util.BelowTen}`
      ? Util.ParseInt<`${N1 extends 9 ? N2 extends 9 ? Util.SimpleMath<N3> : N3 : N3}${N1 extends 9 ? Util.SimpleMath<N2> : N2}${Util.SimpleMath<N1>}`>
      : never
      : never;
  }
  /**
   * @constant {Join} joinArray - Joins an array of strings with a seperator, functionally can
   * replace the Array.prototype.join method.
   * @param {A | [...A]} [array] - The array to join.
   * @param {D | undefined} seperator - The seperator to join the array with.
   */
  export const joinArray: Util.Join = function joinArray(array, seperator = '' as any) {
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
    return str as Util.ArrayToString<typeof array, NonNullable<typeof seperator>>;
  }
  export function isAlphaNumeric<N extends string>(str: Util.AlphaNumeric<N>): str is Util.AlphaNumeric<N> {
    return /[a-zA-Z0-9\-\_\.]+/.test(str)
  }
  export type RemoveCharacter = typeof removeChar;
  export function removeChar<S extends string, C extends string>(str: S, char: C): Util.RemoveChar<S, C> {
    const val = split(str);
    const arr = [...val].filter((c): c is typeof c => c !== char);
    const newStr = joinArray([...arr], '');
    return newStr as Util.RemoveChar<S, C>;
  }


  /**
   * @function makeBasePair - Creates a base pair from key-value pairs.
   * @type {MakeBasePair} BasePair - An array of key-value pairs with optional __type properties.
   * @param {Metadata.Pair<[string, string]>[]} pair - The key-value pair.
   * @returns {BasePair<[string, string]>} The base pair.
   */
  export const makeBasePair: Metadata.MakeBasePair = <P>(...pair: Metadata.Pair<P>[]) => {
    let array = [] as Metadata.BasePair<P>;
    pair.forEach((p) => {
      if (isSinglePair(p)) array.push(p as { [K in Metadata.Pair<P> as K[0]]: Metadata.MetaPair<K>; }[Metadata.Pair<P>[0]]);
    });
    if (!isPairs(array as Metadata.Pair<P>[])) return null as never;
    return array as Metadata.BasePair<P>;
  }
  const value = makeBasePair(['cowboy', 'balloons'], ['name', 'test'], ['version', '1.0.0'], ['author', 'Matthew Rackley'], ['description', 'A test package.']);

  /**
   * @function isSinglePair - Checks if a pair is a common key-value pair.
   * @param {Metadata.Pair<P>} pair - The pair to check.
   * @returns {pair is Metadata.MetaPair<P>} Whether the pair is a common key-value pair.
   */
  export function isSinglePair<P>(pair: Metadata.Pair<P>): pair is Metadata.MetaPair<P> extends Metadata.Pair<P> ? Metadata.MetaPair<P> : never {
    if (!Array.isArray(pair)) return false;
    const [k, v] = pair;
    if (typeof k !== 'string') return false;
    if (typeof v !== 'object' && typeof v !== 'string') return false;
    return ((isAuthorPair(pair) || isVersionPair(pair) || isFilePair(pair) || isNamePair(pair) || isDescriptionPair(pair) || isCopyrightPair(pair)) && pair.length === 2) || pair.length === 2;
  }
  /**
   * @function isAuthorPair - Checks if a pair is an author pair.
   * @param {Metadata.Pair<P>} pair - The pair to check.
   * @returns {pair is Author<P>} Whether the pair is an author pair.
   */
  export function isAuthorPair<P>(pair: Metadata.Pair<P>): pair is Metadata.Author<P> extends Metadata.Pair<P> ? Metadata.Author<P> : never {
    const [k, v] = pair;
    return k === 'author' && typeof v === 'string' && pair.length === 2;
  }
  /**
   * @function isVersionMetadata.Pair - Checks if a pair is a version pair.
   * @param {Metadata.Pair<P>} pair - The pair to check.
   * @returns {pair is Version<P>} Whether the pair is a version pair.
   */
  export function isVersionPair<P>(pair: Metadata.Pair<P>): pair is Metadata.Version<P> extends Metadata.Pair<P> ? Metadata.Version<P> : never {
    const [k, v] = pair;
    return k === 'version' && typeof v === 'string' && pair.length === 2;
  }
  /**
   * @function isFilePair - Checks if a pair is a file pair.
   * @param {Metadata.Pair<P>} pair - The pair to check.
   * @returns {pair is File<P>} Whether the pair is a file pair.
   */
  export function isFilePair<P>(pair: Metadata.Pair<P>): pair is Metadata.File<P> extends Metadata.Pair<P> ? Metadata.File<P> : never {
    const [k, v] = pair as Metadata.Pair<P>;
    return k === 'file' && typeof v === 'string' && pair.length === 2;
  }
  /**
   * @function isNamePair - Checks if a pair is a name pair.
   * @param {Metadata.Pair<P>} pair - The pair to check.
   * @returns {pair is Name<P>} Whether the pair is a name pair.
   */
  export function isNamePair<P>(pair: Metadata.Pair<P>): pair is Metadata.Name<P> extends Metadata.Pair<P> ? Metadata.Name<P> : never {
    const [k, v] = pair;
    return k === 'name' && typeof v === 'string' && pair.length === 2;
  }
  /**
   * @function isDescriptionMetadata.Pair - Checks if a pair is a description pair.
   * @param {Metadata.Pair<P>} pair - The pair to check.
   * @returns {pair is Description<P>} Whether the pair is a description pair.
   */
  export function isDescriptionPair<P>(pair: Metadata.Pair<P>): pair is Metadata.Description<P> extends Metadata.Pair<P> ? Metadata.Description<P> : never {
    const [k, v] = pair;
    return k === 'description' && typeof v === 'string' && pair.length === 2;
  }

  /**
   * @function isCopyrightMetadata.Pair - Checks if a pair is a description pair.
   * @param {Metadata.Pair<P>} pair - The pair to check.
   * @returns {pair is Description<P>} Whether the pair is a description pair.
   */
  export function isCopyrightPair<P>(pair: Metadata.Pair<P>): pair is Metadata.Copyright<P> extends Metadata.Pair<P> ? Metadata.Copyright<P> : never {
    const [k, v] = pair;
    return k === 'copyright' && typeof v === 'string' && pair.length === 2;
  }
  export function isPairs<P>(pairArray: Metadata.Pair<P>[]): pairArray is Metadata.BasePair<P> extends typeof pairArray ? Metadata.BasePair<P> : never {
    let bool = [false, false, false] as [boolean, boolean, boolean];
    const boolTypes = ['"name" | "file"', 'version', 'description'] as const;
    pairArray.forEach((pair: Metadata.Pair<P>) => {
      if (bool[0] === false && pair[0] === 'name') bool[0] = isNamePair(pair as Metadata.Pair<P>);
      if (bool[0] === false && pair[0] === 'file') bool[0] = isFilePair(pair as Metadata.Pair<P>);
      if (pair[0] === 'version') bool[1] = isVersionPair(pair as Metadata.Pair<P>);
      if (pair[0] === 'description') bool[2] = isDescriptionPair(pair as Metadata.Pair<P>);
    });
    if (bool.includes(false)) throw new Error('Missing a required key-value pair.', {
      cause: `Missing Kind: ${boolTypes[bool.indexOf(false)]}`,
    })
    return pairArray.every((pair): pair is Metadata.MetaPair<P> extends Metadata.Pair<P> ? Metadata.MetaPair<P> : never => isSinglePair(pair as Metadata.Pair<P>)) && bool.every((b) => b === true);
  }
