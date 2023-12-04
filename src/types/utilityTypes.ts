/**
 * @file utilityTypes.ts
 * @description
 * @author Matthew Allen Rackley
 * @copyright [Matthew Rackley's Github](https://www.github.com/matthewrackley "Matthew Rackley on github.com")
 */

export interface StringLike<N extends String['length']> extends String {
  readonly length: N;
};

export type MakeNormal<T> = T extends Readonly<T> | { readonly [x in any]: any }[keyof T] ? T : never;
