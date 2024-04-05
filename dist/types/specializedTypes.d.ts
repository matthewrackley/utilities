/**
 * @file specializedTypes.ts
 * @description
 * @author Matthew Allen Rackley
 * @copyright [Matthew Rackley's Github](https://www.github.com/matthewrackley "Matthew Rackley on github.com")
 */
import { DialCode, RegionCode } from '@countries/countries.types';
export type Email = `${string}@${string}.${string}`;
export type Url = `${'http://' | 'https://'}${string}.${string}.${string}` | `${'http://' | 'https://'}${string}.${string}`;
export type CSSMeasurement = `${number}%` | `${number}px` | `${number}em` | `${number}rem` | `${number}vh` | `${number}vw` | `${number}vmin` | `${number}vmax` | `${number}ch` | `${number}ex` | `${number}cm` | `${number}mm` | `${number}in` | `${number}pt` | `${number}pc` | `${number}px` | `${number}mm` | `${number}cm` | `${number}in` | `${number}px` | `${number}pt` | `${number}pc` | `${number}em` | `${number}ex` | `${number}ch` | `${number}rem` | `${number}vw` | `${number}vh` | `${number}vmin` | `${number}vmax`;
export type CSSColor = `#${string | number}` | `rgb(${number},${number},${number})` | `rgba(${number},${number},${number},${number})` | `hsl(${number},${number}%,${number}%)` | `hsla(${number},${number}%,${number}%,${number})`;
export interface PhoneNumber {
    dialCode: `+${DialCode<RegionCode>}`;
    phoneNumber: string;
}
