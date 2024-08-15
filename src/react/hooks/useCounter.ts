/**
 * @file useCounter.ts
 * @description
 * @author Matthew Allen Rackley
 * @copyright [Matthew Rackley's Github](https://www.github.com/matthewrackley "Matthew Rackley on github.com")
 */

import React, { useEffect, useState } from 'react';

import { Counter } from '@classes/Counter';
interface UseCounter {
  <C extends string, CC extends string[]>(category: C, ...keys: CC): ;

}
function createCounter<C extends string, CC extends string[]>(category: C, ...keys: CC['length'] extends 0 | 1 ? CC['length'] extends 1 ? [parent: CC[0]] : [] : CC ) {
  return Counter.create(category, ...keys);
}
function useCounter<C extends string, CC extends string[] = []>(category: C, ...keys: CC['length'] extends 0 | 1 ? CC['length'] extends 1 ? [parent?: CC[0]] : [] : CC): Counter<any, C, CC>;
function useCounter<C extends string, CC extends string[] = []>(category: C): Counter<any, C>;
function useCounter<C extends string, CC extends string[] = []>(category: C, parent?: CC[0]): Counter<any, C, [CC[0]]>;
function useCounter<C extends string, CC extends string[] = []>(category: C, ...keys: CC): Counter<any, C, CC> ;
function useCounter<C extends string, CC extends string[] = []>(category: C, ...keys: CC) {
  let ComponentCounter = {} as Counter<any, C, CC['length'] extends 0 | 1 ? CC['length'] extends 1 ? [CC[0]] : [] : CC>;
  if (keys.length === 1) {
    const ComponentCounter = Counter.getCounter(category, keys[0]);
  } else if (keys.length === 0) {
    const ComponentCounter = Counter.getCounter(category);
  } else {
    const ComponentCounter = Counter.getCounter(category, ...keys);
  }

}
