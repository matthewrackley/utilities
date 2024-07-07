/**
 * @file constructors.ts
 * @description
 * @author Matthew Allen Rackley
 * @copyright [Matthew Rackley's Github](https://www.github.com/matthewrackley "Matthew Rackley on github.com")
 */

function createInstance<T>(ctor: { new(...args: any): T }): T {
  return new ctor(...args);
}
