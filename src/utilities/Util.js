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
export var Util;
(function (Util) {
    Util.levels = ['critical', 'error', 'warn', 'notice', 'info', 'http', 'verbose', 'debug',
        'silly', 'metadata'];
    function deepFreeze(object) {
        Object.freeze(object);
        Object.getOwnPropertyNames(object).forEach((prop) => {
            if (object.hasOwnProperty(prop)
                && object[prop] !== null
                && (typeof object[prop] === "object" || typeof object[prop] === "function")
                && !Object.isFrozen(object[prop])) {
                deepFreeze(object[prop]);
            }
        });
        return object;
    }
    Util.deepFreeze = deepFreeze;
    ;
    Util.randomString = (length) => {
        const randomString = new String(Math.random().toString(36).substring(2, length + 2));
        return randomString;
    };
    function randomRealNumber() {
        return Math.floor(Math.random() * 10).toString();
    }
    Util.randomRealNumber = randomRealNumber;
    function sanitizeString(str) {
        return str.replace(/[^\w. ]/gi, function (c) {
            return '&#' + c.charCodeAt(0) + ';';
        });
    }
    Util.sanitizeString = sanitizeString;
    function safeJsonParse(json) {
        try {
            return JSON.parse(json);
        }
        catch (e) {
            return null;
        }
    }
    Util.safeJsonParse = safeJsonParse;
    Util.notify = (message) => {
        // Log the message to the console as a note
        return console.log(`%cNote:%c ${message}`, 'color: #D7B600; background-color: #48381F; padding: 2px 4px; border-radius: 4px; font-weight: bold;', 'color: #D7B600; font-weight: bold;');
    };
    function simpleStringJoin(...strings) {
        return strings.join('');
    }
    Util.simpleStringJoin = simpleStringJoin;
    function stringJoin(...tuples) {
        return tuples.reduce((result, tuple) => [...result, ...tuple], []);
    }
    Util.stringJoin = stringJoin;
    function createUnion(object) {
        return ((keys) => {
            //@ts-ignore
            let key = Object.keys(object);
            if (!key.includes(keys))
                return;
            let values = object[keys];
            return values;
        });
    }
    Util.createUnion = createUnion;
    function createKeysUnion(object) {
        return ((values) => {
            //@ts-ignore
            let keys = Object.keys(object);
            for (let key of keys) {
                if (key in keys && object[key] === values) {
                    return key;
                }
            }
        });
    }
    Util.createKeysUnion = createKeysUnion;
    function getIterableValue(obj) {
        if (Array.isArray(obj)) {
            return obj[0];
        }
        else {
            //@ts-ignore
            const keys = Object.keys(obj);
            return obj[keys[0]];
        }
    }
    Util.getIterableValue = getIterableValue;
    function* objectValuesIterator(obj) {
        for (const key in obj) {
            if (obj.hasOwnProperty(key)) {
                yield obj[key];
            }
        }
    }
    Util.objectValuesIterator = objectValuesIterator;
    function* objectKeysIterator(obj) {
        for (const key in obj) {
            if (obj.hasOwnProperty(key)) {
                yield key;
            }
        }
    }
    Util.objectKeysIterator = objectKeysIterator;
    function* arrayIterator(array) {
        for (const item of array) {
            if (array.includes(item)) {
                yield item;
            }
        }
    }
    Util.arrayIterator = arrayIterator;
    function* mapIterator(map) {
        for (const key of map.keys()) {
            if (map.has(key)) {
                yield map.get(key);
            }
        }
    }
    Util.mapIterator = mapIterator;
    function* mapKeysIterator(map) {
        for (const key of map.keys()) {
            if (map.has(key)) {
                ``;
                yield key;
            }
        }
    }
    Util.mapKeysIterator = mapKeysIterator;
    function* mapValuesIterator(map) {
        for (const key of map.keys()) {
            for (const value of map.values()) {
                if (map.has(key)) {
                    yield value;
                }
            }
        }
    }
    Util.mapValuesIterator = mapValuesIterator;
    function* setIterator(set) {
        for (const item of set) {
            if (set.has(item)) {
                yield item;
            }
        }
    }
    Util.setIterator = setIterator;
    function* setGenerator(array) {
        const set = new Set(array);
        for (const item of set) {
            if (set.has(item)) {
                yield item;
            }
        }
    }
    Util.setGenerator = setGenerator;
    Util.makeInverted = (invertable, searchFor) => {
        let inverted = {};
        for (const key in invertable) {
            if (invertable.hasOwnProperty(key)) {
                const values = invertable[key];
                for (const value of values) {
                    inverted = {
                        [value]: key,
                    };
                }
            }
        }
        if (Object.keys(inverted)
            .includes(searchFor))
            return inverted[searchFor];
        return inverted;
    };
    Util.invertedObject = Util.makeInverted({ a: ['c', 'val', 'cars'], b: ['d'] });
    /**
     * @function reverseLookup - Takes and inverts an object with an array of values.
     * @type ReverseLookup
     * @description Takes an object with an array of values and returns an object
     *  with the values as keys and the keys as values. If a value is passed in,
     *  it will return the key that matches the value.
     * @param {O} o - An object with an array of values
     * @param {Findable} selectedValue - An optional value to find in the object
     * @returns {{ [Key in keyof O as Findable extends O[Key][number] ? Findable : never]:
     * Key; } | keyof O} - An object with keys as values and values as keys
     */
    function reverseLookup(o, selectedValue = undefined) {
        var invObj = {};
        let result;
        for (const k in o) {
            if (o.hasOwnProperty(k)) {
                for (const v of o[k]) {
                    invObj = {
                        ...invObj,
                        [v]: k,
                    };
                }
            }
        }
        if (!selectedValue || selectedValue === undefined) {
            result = invObj;
        }
        else if (selectedValue && selectedValue !== undefined) {
            if (selectedValue === undefined)
                return null;
            for (let key of Object.keys(invObj)) {
                if (key === selectedValue) {
                    result = invObj[selectedValue];
                }
            }
        }
        return result;
    }
    Util.reverseLookup = reverseLookup;
    function isString(object, key) {
        return object && typeof object !== 'object' && typeof object === 'string';
    }
    Util.isString = isString;
    function isObject(object) {
        if (!object || object === null)
            return false;
        if (typeof object !== 'object')
            return false;
        if (!(Object.keys(object).every((key) => typeof key === 'string')))
            return false;
        if (!(Object.values(object).every((value) => typeof value === 'string')))
            return false;
        return object && typeof object === 'object';
    }
    Util.isObject = isObject;
    const val = reverseLookup({ a: ['c', 'val', 'cars'], b: ['d'] });
    /**
     * @function createObject<T>
     * @type CreateObject
     * @description Creates an object from a tuple of key value pairs
     * @param {[T]} params - A tuple of key value pairs --- Should be an object passed in
     * @returns An object with the keys and values from the tuple as a literal type
     */
    function createObject(...params) {
        let obj = {};
        for (const [k, v] of Object.entries(params)) { //@ts-ignore
            obj[k] = v;
        }
        return obj;
    }
    Util.createObject = createObject;
    function keyMapper(object, type) {
        if (type !== 'keys' && type !== 'values')
            return;
        let returnFunc = (type === 'keys') ? createUnion(object) : (type === 'values') ? createKeysUnion(object) : undefined;
        return returnFunc;
    }
    Util.keyMapper = keyMapper;
    ;
    Util.NBSP = (isHTML = false) => isHTML ? '&nbsp;' : '\u00A0';
    Util.Hyphen = (isHTML, type) => {
        if (isHTML) {
            return '&#8209;';
        }
        else {
            switch (type) {
                case 'S':
                    return '\u2010';
                case 'L':
                    return '\u2012';
                case 'XL':
                    return '\u2013';
                case 'XXL':
                    return '\u2014';
                case 'XXXL':
                    return '\u2015';
                case 'M':
                default:
                    return '\u2011';
            }
        }
    };
})(Util || (Util = {}));
;
export const { makeInverted, levels, Hyphen, NBSP, createUnion, createKeysUnion, keyMapper, stringJoin, getIterableValue, deepFreeze, randomRealNumber, safeJsonParse, sanitizeString, notify, randomString, simpleStringJoin, reverseLookup, createObject, isObject, isString } = Util;
export default Util;
