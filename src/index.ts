/**
 * @file index.ts
 * @description
 * @author Matthew Allen Rackley
 * @copyright All Rights Reserved © 2023 Matthew Allen Rackley
 */

/**
 *   Copyright © 2023 Matthew Allen Rackley
 *   All rights reserved.

 *   Permission is hereby granted, free of charge, to any person obtaining a copy
 *   of this software and associated documentation files (the "Software"), to deal
 *   in the Software without restriction, including without limitation the rights
 *   to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 *   copies of the Software, and to permit persons to whom the Software is
 *   furnished to do so, subject to the following conditions:

 *   The above copyright notice and this permission notice shall be included in all
 *   copies or substantial portions of the Software.

 *   THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 *   IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 *   FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 *   AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 *   LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 *   OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 *   SOFTWARE.
 */

import fs from 'fs';
import path from 'path';

//import * as jsonc from 'jsonc-parser/lib/esm/main.js';

const getJson = () => {
  return fs.readFileSync(path.resolve('/home/kali/dev/work/node/pornova18/package.json'), {
    encoding: 'utf-8',
  });
};
const jsonContent = getJson();
console.log(jsonContent);


// Parse the JSON content with comments
const jsonDocument = jsonc.parseTree(jsonContent, undefined, {
  allowTrailingComma: false,
  disallowComments: false
})!;
console.log(jsonDocument);

const getIteratedValue = <T>(iterable: Iterable<T> | IterableIterator<T>) => {
  let iterator = iterable[Symbol.iterator]();

  const result = iterator.next();
  const set = new Set<T>();
  let arr: (T)[] = [];
  if (!result.done) {
    arr.push(result.value);
    set.add(result.value);
  }
  while (true) {
    const next = iterator.next()
    if (next.done) {
      break;
    }
    arr.push(next.value);
    set.add(next.value);
  }
  return set;
}

const tregex = /(?<jsdoc>\/*\/\*\*[\s\S]*?\*\/)|(?<single>\/\/.*)|(?<block>\/\*.*?\*\/)/g;
const jsdoc = /(\/*\/\*\*[\s\S]*?\*\/)/g;
const singleLine = /(\/\/.*)/mg;
const block = /(\/\*[\s\S]*?\*\/)/g;
const singlePlusJsdoc = /(?<jsdoc>\/\*\*[\s\S]*?\*\/)|(?<single>\/\/.*)|(?<both>\g{single}?\g{jsdoc})/g;
//const allRegex = /((?<single>\/\/.*)|(?<jsdoc>\/*\/\*\*[\s\S]*?\*\/)|((\g{single}.*)?\g{jsdoc})|(?<block>\/\*.*?\*\/))/g;
const regex = /(?<single>\/\/[^*\/](.*?.*?[^\n*\/]*|[^\n*\/\s\S]*))|(?<jsdoc>\/\*\*[\s\S]*?\*\/)|(?<block>\/\*[^?][\s\S]*?\*\/)/g;
