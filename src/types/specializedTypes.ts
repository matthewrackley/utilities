/**
 * @file specializedTypes.ts
 * @description
 * @author Matthew Allen Rackley
 * @copyright [Matthew Rackley's Github](https://www.github.com/matthewrackley "Matthew Rackley on github.com")
 */

export type Email = `${string}@${string}.${string}`;
export type url = `${'http://' | 'https://'}${string}.${string}.${string}` | `${'http://' | 'https://'}${string}.${string}`;
