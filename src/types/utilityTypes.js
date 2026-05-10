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
export var Util;
(function (Util) {
    ;
    var stringLike;
    /**
     * @constant {Join} joinArray - Joins an array of strings with a seperator, functionally can
     * replace the Array.prototype.join method.
     * @param {A | [...A]} [array] - The array to join.
     * @param {D | undefined} seperator - The seperator to join the array with.
     */
    Util.joinArray = function joinArray(array, seperator = '') {
        let str = '';
        if (seperator === undefined)
            seperator = '';
        array.forEach((value, index) => {
            if (index < array.length) {
                str += value;
            }
            if (index < array.length - 1) {
                str += seperator;
            }
        });
        return str;
    };
    function removeChar(str, char) {
        const val = Util.split(str);
        const arr = [...val].filter((c) => c !== char);
        const newStr = Util.joinArray([...arr], '');
        return newStr;
    }
    Util.removeChar = removeChar;
    function isAlphaNumeric(str) {
        return /[a-zA-Z0-9\-\_\.]+/.test(str);
    }
    Util.isAlphaNumeric = isAlphaNumeric;
    /**
     * @constant {SplitString} split - Splits a string into an array of its characters.
     * @param {S} stringToSplit - The string to split into an array of characters.
     * @param {D} [separator=''] - The seperator to split the string with. Defaults to an empty string.
     * @returns {StringToArray<S, D>} The array of characters.
     */
    Util.split = (stringToSplit, separator) => {
        if (!separator)
            separator = '';
        if (typeof separator !== 'string')
            throw new TypeError('The separator must be a string.');
        return stringToSplit.split(separator);
    };
    function add(num) {
        const val = `${num + 1}`;
        return (num + 1);
    }
    Util.add = add;
    function executeCallback(callback, ...args) {
        callback(...args);
    }
    Util.executeCallback = executeCallback;
    function createCallback(callback) {
        return (...args) => {
            callback(...args);
        };
    }
    Util.createCallback = createCallback;
    function addFifty(num) {
        return num + 1;
    }
    Util.addFifty = addFifty;
    function subtractFifty(num) {
        return num - 1;
    }
    Util.subtractFifty = subtractFifty;
    function tupleHasProperty(index) {
        return index;
    }
    Util.tupleHasProperty = tupleHasProperty;
    function makeTuple(...args) { return args; }
    Util.makeTuple = makeTuple;
    function addition(num) {
        return num + 1;
    }
    Util.addition = addition;
    function addition100(num) {
        return num + 1;
    }
    Util.addition100 = addition100;
    function subtraction(num) {
        return num - 1;
    }
    Util.subtraction = subtraction;
    function subtraction100(num) {
        return num - 1;
    }
    Util.subtraction100 = subtraction100;
})(Util || (Util = {}));
export var Metadata;
(function (Metadata) {
    /**
     * @function makeBasePair - Creates a base pair from key-value pairs.
     * @type {MakeBasePair} BasePair - An array of key-value pairs with optional __type properties.
     * @param {Pair<[string, string]>[]} pair - The key-value pair.
     * @returns {BasePair<[string, string]>} The base pair.
     */
    Metadata.makeBasePair = (...pair) => {
        let array = [];
        pair.forEach((p) => {
            if (isSinglePair(p))
                array.push(p);
        });
        if (!isPairs(array))
            return null;
        return array;
    };
    const value = Metadata.makeBasePair(['cowboy', 'balloons'], ['name', 'test'], ['version', '1.0.0'], ['author', 'Matthew Rackley'], ['description', 'A test package.']);
    /**
     * @function isSinglePair - Checks if a pair is a common key-value pair.
     * @param {Pair<P>} pair - The pair to check.
     * @returns {pair is MetaPair<P>} Whether the pair is a common key-value pair.
     */
    function isSinglePair(pair) {
        if (!Array.isArray(pair))
            return false;
        const [k, v] = pair;
        if (typeof k !== 'string')
            return false;
        if (typeof v !== 'object' && typeof v !== 'string')
            return false;
        return ((isAuthorPair(pair) || isVersionPair(pair) || isFilePair(pair) || isNamePair(pair) || isDescriptionPair(pair) || isCopyrightPair(pair)) && pair.length === 2) || pair.length === 2;
    }
    Metadata.isSinglePair = isSinglePair;
    /**
     * @function isAuthorPair - Checks if a pair is an author pair.
     * @param {Pair<P>} pair - The pair to check.
     * @returns {pair is Author<P>} Whether the pair is an author pair.
     */
    function isAuthorPair(pair) {
        const [k, v] = pair;
        return k === 'author' && typeof v === 'string' && pair.length === 2;
    }
    Metadata.isAuthorPair = isAuthorPair;
    /**
     * @function isVersionPair - Checks if a pair is a version pair.
     * @param {Pair<P>} pair - The pair to check.
     * @returns {pair is Version<P>} Whether the pair is a version pair.
     */
    function isVersionPair(pair) {
        const [k, v] = pair;
        return k === 'version' && typeof v === 'string' && pair.length === 2;
    }
    Metadata.isVersionPair = isVersionPair;
    /**
     * @function isFilePair - Checks if a pair is a file pair.
     * @param {Pair<P>} pair - The pair to check.
     * @returns {pair is File<P>} Whether the pair is a file pair.
     */
    function isFilePair(pair) {
        const [k, v] = pair;
        return k === 'file' && typeof v === 'string' && pair.length === 2;
    }
    Metadata.isFilePair = isFilePair;
    /**
     * @function isNamePair - Checks if a pair is a name pair.
     * @param {Pair<P>} pair - The pair to check.
     * @returns {pair is Name<P>} Whether the pair is a name pair.
     */
    function isNamePair(pair) {
        const [k, v] = pair;
        return k === 'name' && typeof v === 'string' && pair.length === 2;
    }
    Metadata.isNamePair = isNamePair;
    /**
     * @function isDescriptionPair - Checks if a pair is a description pair.
     * @param {Pair<P>} pair - The pair to check.
     * @returns {pair is Description<P>} Whether the pair is a description pair.
     */
    function isDescriptionPair(pair) {
        const [k, v] = pair;
        return k === 'description' && typeof v === 'string' && pair.length === 2;
    }
    Metadata.isDescriptionPair = isDescriptionPair;
    /**
     * @function isCopyrightPair - Checks if a pair is a description pair.
     * @param {Pair<P>} pair - The pair to check.
     * @returns {pair is Description<P>} Whether the pair is a description pair.
     */
    function isCopyrightPair(pair) {
        const [k, v] = pair;
        return k === 'copyright' && typeof v === 'string' && pair.length === 2;
    }
    Metadata.isCopyrightPair = isCopyrightPair;
    function isPairs(pairArray) {
        let bool = [false, false, false];
        const boolTypes = ['"name" | "file"', 'version', 'description'];
        pairArray.forEach((pair) => {
            if (bool[0] === false && pair[0] === 'name')
                bool[0] = isNamePair(pair);
            if (bool[0] === false && pair[0] === 'file')
                bool[0] = isFilePair(pair);
            if (pair[0] === 'version')
                bool[1] = isVersionPair(pair);
            if (pair[0] === 'description')
                bool[2] = isDescriptionPair(pair);
        });
        if (bool.includes(false))
            throw new Error('Missing a required key-value pair.', {
                cause: `Missing Kind: ${boolTypes[bool.indexOf(false)]}`,
            });
        return pairArray.every((pair) => isSinglePair(pair)) && bool.every((b) => b === true);
    }
    Metadata.isPairs = isPairs;
})(Metadata || (Metadata = {}));
export const { isAlphaNumeric, joinArray, makeTuple, removeChar, split, add, tupleHasProperty, createCallback, executeCallback, addition, subtraction, addition100, subtraction100 } = Util;
export default Util;
