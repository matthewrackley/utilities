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

/**
 * @file countries.ts
 * @description
 * @author Matthew Allen Rackley
 * @copyright [Matthew Rackley's Github](https://www.github.com/matthewrackley "Matthew Rackley on github.com")
 */
import { Country } from "country-telephone-data";
import { getIterableValue } from "./Util";


/**
 * @file Data.ts
 * @description
 * @author Matthew Allen Rackley
 * @copyright All Rights Reserved © 2023 Pornova 18+ LLC
 */

  export type CodeToFlags = typeof codeToFlags;
  export const flag = getIterableValue(codeToFlags) as Flag;

  export type Flags = Array<Flag>;
  export const flags = Object.values(codeToFlags) as Flags;
  //export type RegionCodes = Array<Code>;
  export const regionCodes = Object.keys(codeToFlags)// as RegionCodes;
  export const code = getIterableValue(Object.keys(codeToFlags)) as Code;

  // export function codeRunner<T extends ArrayLike<T>>(
  //   object: T,
  //   fn: (c: Country) => any,
  //   holder: {} | [] = {}
  // ) {
  //   allCountries.forEach((c) => {
  //     const region = c[1];
  //     const hasCode = Object.values(object).some((o) => o.hasOwnProperty(region));
  //     const propNames = Object.getOwnPropertyNames(object);
  //     const hasProp = propNames.some((p) => p === region);
  //     if (!hasCode && !hasProp) {
  //       console.log(c[0], c[1]));
  //     }
  //   }, holder);
  // }
  export type Codes = ReturnType<typeof getCodes>;


  //   export const CountryData = allCountries.map((data) => {
  //     let region = data.iso2.toUpperCase() as RegionCode;
  //     var countryData = {} as CountryData;
  //     countryData = {
  //       ...countryData,
  //       [region]: {
  //         name: data.name,
  //         regex: /^(\+\d{1,3})?\s?(\(\d{1,4}\))?[\d\s()-]{1,20}$/,
  //         regionCode: region,
  //         flag: CodeToFlags[region] as Flag,
  //         format: data.format && data.format.replaceAll('.', '#'),
  //         // formatter: new AsYouTypeFormatter(region),
  //         dialCode: data.dialCode,
  //         priority: data.priority,
  //       },
  //     };
  //     return countryData;
  //   }).reduce((acc, cur) => {
  //     const key = Object.keys(cur)[0] as RegionCode;
  //     //@ts-ignore
  //     acc[key] = cur[key];
  //     return acc;
  //   }, {} as { [key in RegionCode]: CountryData });
  // }

export default Countries;
