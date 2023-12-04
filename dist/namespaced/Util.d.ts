/**
 *   Copyright (c) 2023 Matthew Allen Rackley
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
 * @file Util.ts
 * @description
 * @author Matthew Allen Rackley
 * @copyright [Matthew Rackley's Github](https://www.github.com/matthewrackley "Matthew Rackley on github.com")
 */
export declare namespace Util {
    const levels: readonly ["critical", "error", "warn", "notice", "info", "http", "verbose", "debug", "silly", "metadata"];
    function deepFreeze<T extends {
        [x: string]: T;
    }>(object: T): Readonly<T>;
    type DeepFreeze<T> = T extends (infer U)[] ? DeepFreezeArray<U> : T extends object ? DeepFreezeObject<T> : T;
    interface RandomString<N extends number> extends String {
        readonly length: N;
    }
    const randomString: <N extends number>(length: N) => RandomString<N>;
    interface DeepFreezeArray<T> extends ReadonlyArray<DeepFreeze<T>> {
    }
    type DeepFreezeObject<T> = {
        readonly [P in keyof T]: DeepFreeze<T[P]>;
    };
    type DeepReadonly<T> = {
        readonly [P in keyof T]: DeepReadonly<T[P]>;
    };
    type DeepFreezeRecursive<T> = DeepReadonly<DeepFreeze<T>>;
    function randomRealNumber(): "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9";
    function sanitizeString(str: string): string;
    function safeJsonParse<T, X>(json: X | string): T | null;
    type UnionFromArray<T> = Extract<T, Array<string>>[number] | Extract<T, string>;
    type ArrayUnion<T> = Extract<T, Array<string>>;
    type DevNote = <T extends string>(message: T extends string ? T : never) => void & typeof message;
    const notify: DevNote;
    type SimpleStringJoin<T extends string[]> = T extends [infer First extends string, ...infer Rest extends string[]] ? `${First}${Rest extends [] ? '' : SimpleStringJoin<Rest>}` : '';
    function simpleStringJoin<T extends string[]>(...strings: T): SimpleStringJoin<T>;
    type StringJoin<T extends any[][]> = T extends [infer First extends any[], ...infer Rest extends any[][]] ? [...First, ...Rest extends [] ? [] : StringJoin<Rest>] : [];
    function stringJoin<T extends any[][]>(...tuples: T): StringJoin<T>;
    function createUnion<T>(object: T): <V extends keyof T>(keys: V) => T[V] | undefined;
    function createKeysUnion<T>(object: T): <V extends T[keyof T]>(values: V) => keyof T | undefined;
    function getIterableValue<T>(obj: T): T extends Array<infer U> ? U : T[keyof T];
    function keyMapper<T>(object: T, type: 'keys' | 'values'): (<V extends T[keyof T]>(values: V) => keyof T | undefined) | undefined;
    type NBSP = '\u00A0' | '&nbsp;';
    type Hyphen = '\u2010' | '\u2011' | '\u2012' | '\u2013' | '\u2014' | '\u2015' | '&#8209;';
    const NBSP: (isHTML?: boolean) => NBSP;
    const Hyphen: (isHTML?: boolean, type?: 'S' | 'M' | 'L' | 'XL' | 'XXL' | 'XXXL') => Hyphen;
}
export declare const levels: readonly ["critical", "error", "warn", "notice", "info", "http", "verbose", "debug", "silly", "metadata"], Hyphen: (isHTML?: boolean, type?: 'S' | 'M' | 'L' | 'XL' | 'XXL' | 'XXXL') => Util.Hyphen, NBSP: (isHTML?: boolean) => Util.NBSP, createUnion: typeof Util.createUnion, createKeysUnion: typeof Util.createKeysUnion, keyMapper: typeof Util.keyMapper, stringJoin: typeof Util.stringJoin, getIterableValue: typeof Util.getIterableValue, deepFreeze: typeof Util.deepFreeze, randomRealNumber: typeof Util.randomRealNumber, safeJsonParse: typeof Util.safeJsonParse, sanitizeString: typeof Util.sanitizeString, notify: Util.DevNote, randomString: <N extends number>(length: N) => Util.RandomString<N>, simpleStringJoin: typeof Util.simpleStringJoin;
export default Util;
