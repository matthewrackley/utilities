"use strict";
/**
 * @file utilityTypes.ts
 * @description
 * @author Matthew Allen Rackley
 * @copyright [Matthew Rackley's Github](https://www.github.com/matthewrackley "Matthew Rackley on github.com")
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeTuple = void 0;
;
;
//type Obj<T extends { [K in Key]: T[K] } = any, Key extends keyof T = keyof T> = T extends { [K in keyof T]: T[K] } ? T : never;
var obj2 = {
    val: 'test',
    num: 123,
    bool: true,
    obj: {
        val: 'test',
        num: 123,
        bool: true,
    },
};
var object2;
var objectProps = {
    head: 'test',
    body: 'test',
    tail: 'test',
};
var object = {
    val: 'test',
    num: 123,
    bool: true,
};
var recursiveArray = [1, 2, 3, 4, 5];
function tupleHasProperty(index) {
    return index;
}
var toTuple = function () {
    var prop = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        prop[_i] = arguments[_i];
    }
    return prop;
};
var tupleMaker = function () {
    var props = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        props[_i] = arguments[_i];
    }
    return props;
};
var valessa = tupleMaker('test', 123, { prop1: 'test', prop2: 123 });
function makeTuple() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return args;
}
exports.makeTuple = makeTuple;
