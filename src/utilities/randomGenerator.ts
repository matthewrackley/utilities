/**
 * @file randomGenerator.ts
 * @name randomGenerator
 * @version 1.0.0
 * @description A utility function that generates random strings for use in CSS and other applications.
 * @author Matthew Allen Rackley
 * @copyright [Matthew Rackley's Github](https://www.github.com/matthewrackley "Matthew Rackley on github.com")
 */
import fs from 'node:fs';

import { Literal } from '@utilTypes/tuple';

import { Metadata } from '../types/utilityTypes';

export function getMetadata(){
  let i = 1;
  const fileText = fs.readFileSync(__filename, { encoding: 'utf-8' });
  const regex = /\/\*\*([\s\S]*?)\*\//, kvRegex = /@(\w+|description|name|file|author|version|copyright)\s+(.*)/;
  return (<P extends [string, string]>() => {
    let meta = {} as Metadata.Config<P>;
    const jsdoc: Metadata.BasePair<P> = (() => {
      const basePair = (() => {
        return regex.exec(fileText)?.[1].split("\n").filter((line) => line.trim().replace("* ", '') !== '').map((line) => {
          const match = line.trim().replace("* ", '').match(kvRegex);
          if (!match) throw new Error(`Invalid JSDoc syntax on line ${i++ +1}:\nExpected format: "@key {value}"\nReceived: "${line.trim().replace('* ', '')}"`);
          if (match[1] === 'file') match[2] = match[2].replace(/\.(tsx?|jsx?|mjs|cjs|json|d\.ts)/g, '');
          return Metadata.isSinglePair([match[1], match[2]] as Metadata.Pair<P>) ? [match[1], match[2]] as Metadata.Pair<P> : null as never;
        })!;
      })();
      return Metadata.isPairs(basePair) ? basePair as Metadata.BasePair<P> : null as never;
    })();
    for (const [k, v] of jsdoc as [P[0], P[1]][]) {
      meta[k] = v as Metadata.Config<P>[P[0]];
      if (k === 'file') meta.file = v;
      if (k === 'author') meta.author = v;
      if (k === 'name') meta.name = v;
      if (k === 'version') meta.version = v;
      if (k === 'description') meta.description = v;
    }
    return meta;
  })()
};

const meta = getMetadata();
//___=============================>         <============================___\\
//___|| ==================== ||      TYPES      || =================== ||___\\
//___=============================>         <============================___\\

type RandomString<N extends number> = string & {
  readonly length: N;
};
type StringWithLength<N extends number> = string & { readonly length: N };

type RandomCharGenerator<N extends number> = () => [RandomString<N>, keyof RandomString<N>[]];
type CreateGenerator = <N extends number>(length?: N) => RandomCharGenerator<N>;
type UseBasename = <T extends string, ST extends string, N extends number = 5>(type: T, subType: ST, length?: N) => [BasenameHook<T, ST, N>, RandomString<N>[]];
type BasenameHook<T extends string, ST extends string, N extends number> = <B extends boolean = false>(forID?: B) => B extends true ? [`${typeof meta.name}-${Lowercase<ST>}-${Lowercase<T>}-${RandomString<N>}`, keyof RandomString<N>[]] : [`${typeof meta.name} ${Lowercase<ST>}-${Lowercase<T>}-${RandomString<N>}`, keyof RandomString<N>[]];

//___=============================>             <============================___\\
//___|| ==================== ||      CONSTANTS      || =================== ||___\\
//___=============================>             <============================___\\


const isLength = <N extends number>(length: N, string: RandomString<N>): string is RandomString<N> => string.length === length;

//___=============================>             <============================___\\
//___|| ==================== ||      FUNCTIONS      || =================== ||___\\
//___=============================>             <============================___\\
interface ArrayFactory<T extends [Literal<T[0]>, Literal<T[1]>], U extends [Literal<U[0]>, Literal<U[1]>]> {
  specificGenerator<A extends any[], R extends [Literal<R[0]>, Literal<R[1]>, ...Literal<R[2]>[]]>(...args: A): R;
  returnGenerator<A extends any[], R extends [Literal<R[0]>, Literal<R[1]>]>(...args: A): R;
}
export function randomGenerator<N extends number = 6>(length: N = 6 as N) {
  let cssArray: RandomString<N>[] = [];
  let arrIndex: keyof Array<RandomString<N>> = 0;

  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const randomGen: RandomCharGenerator<N> = () => {
    let result = '' as RandomString<N>;
    for (let i = 0; i < length; i++) {//@ts-ignore
      result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    if (result.length === length) {
      arrIndex = cssArray.push(result) - 1;
      return [result, arrIndex] as [typeof result, keyof Array<RandomString<N>>];
    } else {
      throw new Error('Length mismatch');
    }
  }
  var returnArray = [randomGen, cssArray] as [RandomCharGenerator<N>, RandomString<N>[]]
  return returnArray;
}
export const test = () => {
  const [useName, cssArray] = useNameBase('alphabet', 'cars', 8);

  useNameBase('alphabet', 'cars', 4)[0](true);
}
export function useNameBase<T extends string, ST extends string, N extends number = 5>(type: T, subType: ST, length: N = 5 as N) {
  const generatorArray = randomGenerator(length);
  const generator = generatorArray[0];
  const cssArray = generatorArray[1];
  const basenameHook: BasenameHook<T, ST, N> = <B extends boolean = false>(forID: B = false as B) => {
    let randomData = generator();
    let result = (forID === true
      ? [`${meta.name}-${subType.toLowerCase() as Lowercase<ST>}-${type.toLowerCase() as Lowercase<T>}-${randomData[0]}` as const, randomData[1]]
      : [`${meta.name} ${subType.toLowerCase() as Lowercase<ST>}-${type.toLowerCase() as Lowercase<T>}-${randomData[0]}` as const, randomData[1]]
    ) as B extends true ? [`${typeof meta.name}-${Lowercase<ST>}-${Lowercase<T>}-${RandomString<N>}`, keyof RandomString<N>[]] : [`${typeof meta.name} ${Lowercase<ST>}-${Lowercase<T>}-${RandomString<N>}`, keyof RandomString<N>[]];
    return result;
  }
  return [basenameHook, cssArray] as [BasenameHook<T, ST, N>, RandomString<N>[]];
}

export default useNameBase as UseBasename;
