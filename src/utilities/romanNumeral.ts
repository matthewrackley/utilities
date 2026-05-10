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


export const romanToIntMap: { [rn: string]: number } = {
  'I': 1,
  'V': 5,
  'X': 10,
  'L': 50,
  'C': 100,
  'D': 500,
  'M': 1000
};

export const intToRomanMap: { [num: number]: string } = {
  1: 'I',
  4: 'IV',
  5: 'V',
  9: 'IX',
  10: 'X',
  40: 'XL',
  50: 'L',
  90: 'XC',
  100: 'C',
  400: 'CD',
  500: 'D',
  900: 'CM',
  1000: 'M'
};

export function romanToInt(roman: string): number {
  let num = 0;
  for (let i = 0; i < roman.length; i++) {
    const currentVal = romanToIntMap[roman[i]];
    const nextVal = romanToIntMap[roman[i + 1]];

    if (nextVal && currentVal < nextVal) {
      num += nextVal - currentVal;
      i++;
    } else {
      num += currentVal;
    }
  }
  return num;
}

export function intToRoman(num: number): string {
  let roman = '';
  const keys = Object.keys(intToRomanMap).map(Number).sort((a, b) => b - a);

  for (const key of keys) {
    while (num >= key) {
      roman += intToRomanMap[key];
      num -= key;
    }
  }
  return roman;
}

export function evaluateRomanNumeral(input: string): string {
  const romanNumerals = input.split(' ');
  const integers = romanNumerals.map(romanToInt);
  const totalValue = integers.reduce((sum, value) => sum + value, 0);
  return intToRoman(totalValue);
}

export const replacements: { [irn: string]: string  } = {
  'VIIII': 'IX',
  'IIII': 'IV',
  'LXXXX': 'XC',
  'XXXX': 'XL',
  'DCCCC': 'CM',
  'CCCC': 'CD',
  'IIIII': 'V',
  'VV': 'X',
  'XXXXX': 'L',
  'LL': 'C',
  'CCCCC': 'D',
  'DD': 'M'
}

export function fixRomanNumerals(input: string): string {
  const pattern = new RegExp((Object.keys(replacements).map(key => key.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&')).join('|')), 'g');
  return input.replace(pattern, match => replacements[match]);
}
export function randomRN (leng: number = 1)  {
  let romans: string[] = []
  for (let n = 0; n < leng; n++) {
    const charArray = ['I', 'V', 'X'];
    let result = '';
    let length = Math.ceil(Math.random() * 6);
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * charArray.length);
      const char = charArray[randomIndex];
      result += char;
      if (char === 'X') {
        result = `X${result.slice(0, -1)}`;
        charArray.splice(randomIndex, 1);
      } else if (char === 'V') {
        result = result.startsWith('X') ? `XV${result.slice(1, -1)}` : `V${result.slice(0, -1)}`;
        charArray.splice(randomIndex, 1);
      }
    }
    romans.push(fixRomanNumerals(result));
  }
  return evaluateRomanNumeral(romans.join(' '));
}
