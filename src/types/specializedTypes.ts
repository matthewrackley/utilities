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
 * @file specializedTypes.ts
 * @description
 * @author Matthew Allen Rackley
 * @copyright [Matthew Rackley's Github](https://www.github.com/matthewrackley "Matthew Rackley on github.com")
 */
import { DialCode, RegionCode } from '@countries/countries.types';
export type Email = `${string}@${string}.${string}`;
export type Url = `${'http://' | 'https://'}${string}.${string}.${string}` | `${'http://' | 'https://'}${string}.${string}`;
export type CSSMeasurement = `${number}%` | `${number}px` | `${number}em` | `${number}rem` | `${number}vh` | `${number}vw` | `${number}vmin` | `${number}vmax` | `${number}ch` | `${number}ex` | `${number}cm` | `${number}mm` | `${number}in` | `${number}pt` | `${number}pc` | `${number}px` | `${number}mm` | `${number}cm` | `${number}in` | `${number}px` | `${number}pt` | `${number}pc` | `${number}em` | `${number}ex` | `${number}ch` | `${number}rem` | `${number}vw` | `${number}vh` | `${number}vmin` | `${number}vmax`;
export type CSSAngle = `${number}deg` | `${number}grad` | `${number}rad` | `${number}turn`;
export type CSSTime = `${number}ms` | `${number}s`;
export type CSSFrequency = `${number}Hz` | `${number}kHz`;
export type CSSResolution = `${number}dpi` | `${number}dpcm` | `${number}dppx`;
export type CSSPosition = 'static' | 'relative' | 'absolute' | 'fixed' | 'sticky';
export type CSSDisplay = 'block' | 'inline' | 'inline-block' | 'flex' | 'inline-flex' | 'grid' | 'inline-grid' | 'table' | 'table-cell' | 'table-row' | 'none';
export type CSSBoxModel = 'content-box' | 'border-box';
export type CSSOverflow = 'visible' | 'hidden' | 'scroll' | 'auto';
export type CSSFloat = 'left' | 'right' | 'none';
export type CSSClear = 'left' | 'right' | 'both' | 'none';
export type CSSFontStyle = 'normal' | 'italic' | 'oblique';
export type CSSFontWeight = 'normal' | 'bold' | 'bolder' | 'lighter' | '100' | '200' | '300' | '400' | '500' | '600' | '700' | '800' | '900';
export type CSSFontVariant = 'normal' | 'small-caps';
export type CSSFontStretch = 'normal' | 'ultra-condensed' | 'extra-condensed' | 'condensed' | 'semi-condensed' | 'semi-expanded' | 'expanded' | 'extra-expanded' | 'ultra-expanded';
export type CSSFontFamily = 'serif' | 'sans-serif' | 'monospace' | 'cursive' | 'fantasy' | 'system-ui' | 'ui-serif' | 'ui-sans-serif' | 'ui-monospace' | 'ui-rounded' | 'emoji' | 'math' | 'fangsong' | 'inherit' | 'initial' | 'unset';
export type CSSFontFallback<CFF extends CSSFontFamily[] | null = null> = CFF extends CSSFontFamily[] ? CSSFontFallbackHandler<CFF> : `${CSSFontFamily}, ${CSSFontFamily}`;

type CSSFontFallbackHandler<CFF extends CSSFontFamily[]> = CFF extends [infer CF extends CSSFontFamily, ...infer Rest extends CSSFontFamily[]] ? [CF, ...Rest]['length'] extends 1 ? `${CSSFontFamily}, ${CF}` : `${CSSFontFamily}, ${CF}, ${CSSFontFallbackHandler<Rest>}` : never;
export type CSSFont<CFF extends CSSFontFamily[] | null = null> = CFF extends CSSFontFamily[] ? `${CSSFontStyle} ${CSSFontVariant} ${CSSFontWeight} ${CSSFontStretch} ${CSSFontFallbackHandler<CFF>}` : `${CSSFontStyle} ${CSSFontVariant} ${CSSFontWeight} ${CSSFontStretch} ${CSSFontFamily}`;


export type HexColor = `#${string | number}`;
export type RGBColor = `rgb(${number},${number},${number})`;
export type RGBAColor = `rgba(${number},${number},${number},${number})`;
export type HSLColor = `hsl(${number},${number}%,${number}%)`;
export type HSLAColor = `hsla(${number},${number}%,${number}%,${number})`;
export type CSSColor = HexColor | RGBColor | RGBAColor | HSLColor | HSLAColor | CSSNamedColors;
type CSSNamedColors = "black" | "silver" | "gray" | "white" | "maroon" | "red" | "purple" | "fuchsia" | "green" | "lime" | "olive" | "yellow" | "navy" | "blue" | "teal" | "aqua" | "aliceblue" | "antiquewhite" | "aqua" | "aquamarine" | "azure" | "beige" | "bisque" | "black" | "blanchedalmond" | "blue" | "blueviolet" | "brown" | "burlywood" | "cadetblue" | "chartreuse" | "chocolate" | "coral" | "cornflowerblue" | "cornsilk" | "crimson" | "cyan" | "aqua" | "darkblue" | "darkcyan" | "darkgoldenrod" | "darkgray" | "darkgreen" | "darkgrey" | "darkkhaki" | "darkmagenta" | "darkolivegreen" | "darkorange" | "darkorchid" | "darkred" | "darksalmon" | "darkseagreen" | "darkslateblue" | "darkslategray" | "darkslategrey" | "darkturquoise" | "darkviolet" | "deeppink" | "deepskyblue" | "dimgray" | "dimgrey" | "dodgerblue" | "firebrick" | "floralwhite" | "forestgreen" | "fuchsia" | "gainsboro" | "ghostwhite" | "gold" | "goldenrod" | "gray" | "green" | "greenyellow" | "grey" | "gray" | "honeydew" | "hotpink" | "indianred" | "indigo" | "ivory" | "khaki" | "lavender" | "lavenderblush" | "lawngreen" | "lemonchiffon" | "lightblue" | "lightcoral" | "lightcyan" | "lightgoldenrodyellow" | "lightgray" | "lightgreen" | "lightgrey" | "lightpink" | "lightsalmon" | "lightseagreen" | "lightskyblue" | "lightslategray" | "lightslategrey" | "lightsteelblue" | "lightyellow" | "lime" | "limegreen" | "linen" | "magenta" | "fuchsia" | "maroon" | "mediumaquamarine" | "mediumblue" | "mediumorchid" | "mediumpurple" | "mediumseagreen" | "mediumslateblue" | "mediumspringgreen" | "mediumturquoise" | "mediumvioletred" | "midnightblue" | "mintcream" | "mistyrose" | "moccasin" | "navajowhite" | "navy" | "oldlace" | "olive" | "olivedrab" | "orange" | "orangered" | "orchid" | "palegoldenrod" | "palegreen" | "paleturquoise" | "palevioletred" | "papayawhip" | "peachpuff" | "peru" | "pink" | "plum" | "powderblue" | "purple" | "rebeccapurple" | "red" | "rosybrown" | "royalblue" | "saddlebrown" | "salmon" | "sandybrown" | "seagreen" | "seashell" | "sienna" | "silver" | "skyblue" | "slateblue" | "slategray" | "slategrey" | "snow" | "springgreen" | "steelblue" | "tan" | "teal" | "thistle" | "tomato" | "transparent" | "turquoise" | "violet" | "wheat" | "white" | "whitesmoke" | "yellow" | "yellowgreen";

export interface PhoneNumber {
  dialCode: `+${DialCode<RegionCode>}`;
  phoneNumber: string;
}
