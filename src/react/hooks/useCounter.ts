/**
 * @file useCounter.ts
 * @description
 * @author Matthew Allen Rackley
 * @copyright [Matthew Rackley's Github](https://www.github.com/matthewrackley "Matthew Rackley on github.com")
 */

import React, { useEffect, useState } from 'react';

import Counter from '@classes/Counter';
interface UseCounter {
  <C extends string, CC extends string[]>(category: C, ...keys: CC): ;

}
function createCounter<C extends string, CC extends string[]>(category: C, ...keys: CC) {
  return Counter.getInstance(category, ...keys);
}
const useCounter = <B extends boolean, C extends string, CC extends string[]>(category: C, ...keys: CC) => {
  let init = true as B;
  const ComponentCounter = Counter.getInstance(category, ...keys);
  return ComponentCounter.get;
}
