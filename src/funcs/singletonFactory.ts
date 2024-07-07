/**
 * @file singletonFactory.ts
 * @description
 * @author Matthew Allen Rackley
 * @copyright [Matthew Rackley's Github](https://www.github.com/matthewrackley "Matthew Rackley on github.com")
 */

import { Util, tupleizer } from "../types/utilityTypes";

function singletonFactory<T, A extends [Util.LiteralTypes, ...Util.LiteralTypes[]]>(constructor: new () => T, ...args: [A]): T {
  tupleizer(...args);
  const instance = new constructor();
  return (instance as unknown) as T;
}
