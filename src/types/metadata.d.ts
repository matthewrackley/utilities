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


declare namespace Metadata {
  type Config<P> = P extends [string, string] ? BaseObject<P> & {
    [K in P as K[0]]: K[1];
  } : never;
  type BaseObject<P> = P extends [string, string]
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

  type Pairs<P extends P[number][]> = P extends Pair<P[number]>[] ? P : never;
  /**
   * @type {Author} Author - The author of the package.
   */
  type Author<P> = P extends [string, string]
    ? P extends [P[0] extends 'author' ? P[0] : never, P[1] extends string ? P[1] : never]
      ? ['author', P[1]] & { __type: 'author' }
    : never
  : never;
  /**
   * @type {Description} Description - The description of the package.
   */
  type Description<P> = P extends [string, string]
    ? P extends [P[0] extends 'description' ? P[0] : never, P[1] extends string ? P[1] : never]
      ? ['description', P[1]] & { __type: 'description' }
    : never
  : never;
  /**
   * @type {Version} Version - The version of the package.
   */
  type Version<P> = P extends [string, string]
    ? P extends [P[0] extends 'version' ? P[0] : never, P[1] extends string ? P[1] : never]
      ? ['version', P[1]] & { __type: 'version' }
    : never
  : never;
  /**
   * @type {File} File - The file of the package.
   */
  type File<P> = P extends [string, string]
    ? P extends [P[0] extends 'file' ? P[0] : never, P[1] extends string ? P[1] : never]
      ? ['file', P[1]] & { __type: 'file' }
    : never
  : never;
  /**
   * @type {Name} Name - The name of the package.
   */
  type Name<P> = P extends [string, string]
    ? P extends [P[0] extends 'name' ? P[0] : never, P[1] extends string ? P[1] : never]
      ? ['name', P[1]] & { __type: 'name' }
    : never
  : never;
  /**
   * @type {Copyright} Copyright - The copyright of the package.
   */
  type Copyright<P> = P extends [string, string]
    ? P extends [P[0] extends 'copyright' ? P[0] : never, P[1] extends string ? P[1] : never]
      ? ['copyright', P[1]] & { __type: 'copyright' }
    : never
  : never;

  /**
   * @type {Pair} Pair - A key-value pair.
   * @template P - The key-value pair.
   */
  type Pair<P> = P extends [string, string]
    ? P extends [P[0] extends string ? P[0] : never, P[1] extends string ? P[1] : never]
      ? P
    : never
  : never;
  /**
   * @type MakeBasePair - Checks if an array is a base pair.
   * @template P - The key-value pair.
   * @returns {(P extends [K,V] ? MetaPair<P> : never)[]} The Final Array.
   */
  type MakeBasePair = <P>(...pair: Pair<P>[]) => BasePair<P>;//(P extends [string,string] ? MetaPair<P> : never)[];
  /**
   * @type BasePair - An array of key-value pairs with optional __type properties.
   * @template P - The key-value pair.
   */
  type BasePair<P> = Pair<P> extends [string, string]
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
  type MetaPair<P> = P extends [string, string]
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
  type CombineArrays<T extends any[], U extends any[]> = [...T, ...U];
}
