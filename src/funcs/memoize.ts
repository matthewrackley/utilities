/**
 * @file memoize.ts
 * @description
 * @author Matthew Allen Rackley
 * @copyright [Matthew Rackley's Github](https://www.github.com/matthewrackley "Matthew Rackley on github.com")
 */

/**
 * Represents a function type that takes an array of arguments of type `T` and returns a value of type `R`.
 * @template T - The type of the arguments.
 * @template R - The return type.
 */
export type Func<T extends any[], R> = (...args: T) => R;

/**
 * Represents a cache object that stores key-value pairs.
 * @template K - The type of the keys.
 * @template V - The type of the values.
 */
export type Cache<K,V> = Map<K, V>

/**
 * Memoizes a function to cache its results based on the provided arguments.
 *
 * @function memoize
 * @template T - The type of the function arguments.
 * @template R - The type of the function result.
 * @param {Func<T, R>} fn - The function to be memoized.
 * @returns {Func<T, R>} The memoized function.
 */
export function memoize<T extends any[], R>(fn: Func<T, R>): Func<T, R> {
  const cache: Cache<string, R> = new Map();

  return (...args: T): R => {
    const key: string = JSON.stringify(args);
    if (!cache.has(key)) {
      cache.set(key, fn(...args));
    }
    return cache.get(key) as R;
  };
}

export type Memoize<R> = <T extends any[]>(fn: Func<T, R>) => Func<T, R>;

export default memoize;
