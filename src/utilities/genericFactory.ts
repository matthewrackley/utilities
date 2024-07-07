/**
 * @file genericFactory.ts
 * @description
 * @author Matthew Allen Rackley
 * @copyright [Matthew Rackley's Github](https://www.github.com/matthewrackley "Matthew Rackley on github.com")
 */

import { Literal, Tuple } from "@utilTypes/tuple";
import { AddOne } from "@utilTypes/utilityTypes";
type HookStore<O extends { [x: string]: O[keyof O] }> = O & {
  [K in keyof O]: O[K];
}

type Store<P> = {
  [K in keyof P & string]: P[K];
}

type StoreGenerator<
  Brand extends string,
  S extends HookStore<{[K in keyof S]: S[K]}>,
> = (<K extends string & keyof S>(data: S[K], key?: K, brand: Brand) => [S, K, StoreUpdater<S>]);
type StoreUpdater<Store extends HookStore<{[K in keyof Store]: Store[K]}>> = <Key extends string & keyof Store>(data: {
  value: Store[Key];
  key?: Key;
}) => [Store, StoreUpdater<Store>];
type StoreInitializer = <
  Brand extends string,
  Key extends string & keyof Store,
  Store extends HookStore<{[K in keyof Store]: Store[K]}>
  >(data: StoreData<Store, Brand, Key>) => [Store, StoreUpdater<Store>];
/**
 * @function initializeStore
 * @type {StoreInitializer}
 * @description This function is used to initialize a store inside of a factory function
 * @template Brand The brand of the store
 * @param {Store[Key]} storeData The data to initialize the store with
 * @param {Brand} brand The brand of the store
 * @param {Key} [storeKey=`store-${0}`] The key to store the data under
 * @returns {[Store, Key, StoreGenerator]} The store, the key, and the store generator
 */
const initializeStore: StoreInitializer = <
  Brand extends string,
  Key extends string & keyof Store,
  Store extends HookStore<{[K in keyof Store]: Store[K]}>
>(data: StoreData<Store, Brand, Key>) => {
  let i = 0 as 0;
  const store = {
    __brand: data.brand as Brand,
    ...(data.key ? { [data.key]: data.value } : { [`store-${i++}` as const]: data.value } as Store)
  } as Store;
  const storeKey = data.key;
  const generator: StoreUpdater<Store> = <Key extends string & keyof Store>(data: {
    store: Store;
    value: Store[Key];
    key?: Key = `store-${i++}` as const;
  }): [Store, StoreUpdater<Store>] => {
    if (data.key) {
      store[data.key] = data as Store[Key];
    } else {
      store[`store-${i++}` as const as Key] = data as Store[Key];
    }
    return [store, generator] as [Store, StoreUpdater<Store>];
  }
  return generator(data);
}
const isTemplate = <T extends `store-${number}`, K extends string>(template: T | K): template is T => template.startsWith('store-');
const val = initializeStore({ value: 'cars', brand: 'cars', key: 'car' });
interface StoreData<Store extends HookStore<{[K in keyof Store]: Store[K]}>, Brand extends string, Key extends string & keyof Store> {
  value: Store[Key];
  brand: Brand;
  key?: Key = `store-${0}`;
}


function useFactory<
  Key extends string & keyof Store,
  Brand extends string,
  Store extends HookStore<{[K in keyof Store]: Store[K]}>,
  F extends (<T1 extends Tuple<T1>>(...args: T1) => any),
  G extends (<T2 extends Tuple<T2>>(...args: T2) => any),
>(fn: (func: F, gen: G) => any, storeData: StoreData<Store, Brand, Key>) {
  const [store, generator] = initializeStore(storeData);
  const hook = (...args: Parameters<G>) => {
      store[generatorParams[0] as keyof typeof store] = generator({ value: });
      return [generator(generatorParams), generatorStore] as [ReturnType<G>, HookStore<A, K>];
    }
    generator(params[1]);
  }
}
