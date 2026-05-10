/*
 *   Copyright (c) 2024 Matthew Allen Rackley
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


type BasicTypes = 'string' | 'number' | 'boolean';
type BasicType<T extends BasicTypes | string | number | boolean> = T extends BasicTypes ? T extends 'string' | 'number' ? T extends 'string' ? string : number : boolean : T;
type HandleFlags = {
  <T, F>(flagToSet: T | (T extends null ? F : T), ...searchElements: T extends null ? [defaultValue: F, ...searchElements: string[]] : string[]): [typeof flagToSet, string[]];
  config: HandleFlagsConfig;
  setup(config: HandleFlagsConfig): void;
}
/**
 * @function handleFlags
 * @type HandleFlags
 * @summary The flagHandler function takes in an application flag and it's related command-line arguments
 * @param {T | (T extends string | number | boolean ? BasicType<T> : BasicType<F>)} flagToSet The flag which is being set.
 * @param {T extends null ? F : never} flagType If `flagToSet` is null, set the type it is supposed to be.
 * @param {T extends null ? [flagType: F, ...searchElements: string[]] : string[]} searchElements The command-line flags to search for.
 * @returns {[T extends string | number | boolean ? BasicType<T> : BasicType<F> | null]} The modified flagToSet value and the modified command-line arguments.
 */
export const handleFlags: HandleFlags = function flagHandler<T, F>(flagToSet: T | (T extends null ? F : T), ...searchElements: T extends null ? [defaultValue: F, ...searchElements: string[]] : string[]): [typeof flagToSet, string[]] {
  let flagType = typeof flagToSet as 'string' | 'number' | 'boolean';
  let elements: string[] = searchElements as string[];
  if (flagToSet === null) {
    flagType = typeof searchElements[0] as 'string' | 'number' | 'boolean';
    elements = searchElements.slice(1) as string[];
    flagToSet = searchElements[0] as T extends null ? F : T;
  }
  cliArgs.forEach((arg, i) => {
    let match = arg.match(/^(?<flag>\-{1,2}\w+)=(?<quote>'|"|`)?(?<argument>.+)$/);
    let flag = arg;
    let argument = flagType === 'boolean' ? !flagToSet : arg[i + 1];
    if (match && match.groups) {
      let { quote, ...groups } = match.groups as { flag: `-${string}` | `--${string}`, quote?: '"' | "'" | "`", argument: string; };
      flag = groups.flag;
      argument = groups.argument;
      if (quote && argument.endsWith(quote)) {
        argument = argument.slice(0, -1);
      }
    }
    if (elements.includes(flag)) {
      if (flagType === 'string') flagToSet = argument as T;
      if (flagType === 'number') flagToSet = argument as T;
      if (flagType === 'boolean') flagToSet = Number(argument) as T;
    }
  });
  elements.push(String(flagToSet));
  cliArgs = cliArgs.filter((p) => !elements.includes(p));
  return [flagToSet, cliArgs] as [typeof flagToSet, string[]];
}
handleFlags.config = {
  args: process.argv.slice(2)
} as HandleFlagsConfig;
interface HandleFlagsConfig {
  args: string[]
}
handleFlags.setup = function (config: HandleFlagsConfig) {
  handleFlags.config.args = config.args;
}
export var cliArgs = handleFlags.config.args;

export default handleFlags;
