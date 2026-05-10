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
type Email = `${string}@${string}.${string}`;
type Url = `http${'s' | ''}://${`${string}.${string}` | `${string}.${string}.${string}`}`;

type CSSFunction<V1 extends CSSMeasurement = number, V2 extends CSSMeasurement | null = number, Clamp extends CSSMeasurement | null = number> =
  V2 extends CSSMeasurement
    ? Clamp extends CSSMeasurement
      ? CSSClamp<V1,V2,Clamp>
    : CSSCalc<V1, V2> | CSSMin<V1, V2> | CSSMax<V1, V2> | CSSClamp<V1,V2>
  : CSSFitContent<V1>;

type CSSCalc<V1 extends CSSMeasurement = number, V2 extends CSSMeasurement = number> = `calc(${V1}${' - ' | ' * ' | ' + ' | ' / '}${V2})`;
type CSSMin<V1 extends CSSMeasurement = number, V2 extends CSSMeasurement = number> = `min(${V1}, ${V2})`;
type CSSMax<V1 extends CSSMeasurement = number, V2 extends CSSMeasurement = number> = `max(${V1}, ${V2})`;
type CSSClamp<V1 extends CSSMeasurement = number, V2 extends CSSMeasurement = number, Clamp extends CSSMeasurement = number> = `clamp(${V1}, ${Clamp}, ${V2})`;
type CSSFitContent<V1 extends CSSMeasurement = number> = `fit-content(${V1})`;
/**
 * @type CSSMeasurement
 * @summary A union type representing the different units useable in measuring components via CSS
 * @description Units:
 * - {@linkcode CSSAbsoluteUnits Absolute Sizes}
 * - {@linkcode CSSRelativeUnits Relative Sizes}
 * > - {@linkcode CSSbyFontSize Font Sizes}
 * > - {@linkcode CSSbyViewPort ViewPort Sizes}
 * > - {@linkcode CSSbyOtherRelative Other Relative Sizes}
 * - {@linkcode CSSSpecialUnits Special Sizes}
 */
type CSSMeasurement = CSSSpecialUnits | CSSAbsoluteUnits | CSSRelativeUnits | number;
/**
 * @type CSSSize
 * @summary Either a measurement or a restraint
 * - {@linkcode CSSMeasurement CSS Measurements}
 * - {@linkcode CSSSizeRestraint CSS Size Restraints}
 */
type CSSSize = CSSMeasurement | CSSSizeRestraint;
/**
 * @type CSSSizeRestraint
 * @summary A size restraint that is determined natively by CSS
 */
type CSSSizeRestraint = 'fit-content' | 'auto' | 'inherit' | 'initial' | 'unset' | 'max-content' | 'min-content' | 'available' | 'stretch';
/**
 * @type CSSSpecialUnits
 * @summary Special Units of measure which aren't commonly used
 * @see {@linkcode CSSAngle Angle Measurements} | {@linkcode CSSFraction Fractional Measurement}
 */
type CSSSpecialUnits = CSSAngle | CSSFraction;
/**
 * @type CSSAbsoluteUnits
 * @summary Measurements that are static and do not change dynamically
 * - {@linkcode CSSPrintMedia Print Media}
 * - {@linkcode CSSRealUnits Real life Units}
 */
type CSSAbsoluteUnits = CSSPrintMedia | CSSRealUnits;
/**
 * @type CSSRelativeUnits
 * @summary CSS Sizes that are measured in a relative fashion
 * @see {@linkcode CSSbyFontSize Font-Sizes} {@linkcode CSSbyViewPort View Ports} {@linkcode CSSbyOtherRelative Other Relatives}
 */
type CSSRelativeUnits = CSSbyFontSize | CSSbyOtherRelative | CSSbyViewPort;
/**
 * @type CSSbyOtherRelative
 * @summary Other relative values for CSS Size
 * - [%](# "Percentage") - Percent value of its parent element
 * - [lh](# "line-height") - Relative to the line-height of the element
 */
type CSSbyOtherRelative = `${number}${'%' | 'lh'}`;
/**
 * @type CSSbyViewPort
 * @summary Size measurements based on Viewport dimensions
 * - [vh](# "View Height") - 1% of the viewport height
 * - [vw](# "View Width") - 1% of the viewport width
 * - [vmin](# "Viewports Minimum") - 1% of the viewports smaller dimension(w/h)
 * - [vmax](# "Viewports Maximum") - 1% of the viewports larger dimension(w/h)
 */
type CSSbyViewPort = `${number}${'vh' | 'vw' | 'vmin' | 'vmax'}`;
/**
 * @type CSSbyFontSize
 * @summary Measurements that are relative to the font-size
 * - [rem](# "Root Element") - Relative to the Root Elements font-size.
 * - [em](# "Element") - Relative to the current Elements font-size.
 * - [ch](# "Zero Char") - Relative to the width of the "0" (Zero) character.
 * - [ex](# "x-height") - Relative to the x-height of the element's font (height of lowercase "x")
 */
type CSSbyFontSize = `${number}${'em' | 'rem' | 'ch' | 'ex'}`;

/**
 * @type CSSAngle
 * @summary Measurements that are based around 360degrees
 * - [deg](# "degrees") - *Degrees*
 * - [rad](# "radians") - *2πrad = 360deg*
 * - [grad](# "gradians") - *400grad = 360deg*
 * - [turn](# "turn") - *1turn = 360deg*
 */
type CSSAngle = `${number}${'deg' | 'grad' | 'rad' | 'turn'}`;
/**
 * @type CSSFraction
 * @summary A fractional measurement based on the available space
 * - [fr](# "fraction") - *Fraction of the available space, used in CSS Grid Layout*
 */
type CSSFraction = `${number}fr`;

/**
 * @type CSSPrintMedia
 * @summary A measurement used in Print Media.
 * - [pt](# "Points") - 1/72 of an inch
 * - [pc](# "Picas") - 1/6 of an inch
 */
type CSSPrintMedia = `${number}${'pc' | 'pt'}`;

/**
 * @type CSSRealUnits
 * @summary Measurements used in day-day life
 * [px](# "Pixels") - Computer Pixels are day to day for coders!
 * [in](# "Inches") - Inches
 * [cm](# "Centimeters") - Centimeters
 * [mm](# "Millimeters") - Millimeters
 */
type CSSRealUnits = `${number}${'in' | 'cm' | 'mm' | 'px'}`;
type ArrayOrUnit<A extends any[], T extends number | null = number> = T extends null ? A : A[number];
type CSSUnitOfMeasurement<T extends number | null = number> = ArrayOrUnit<['deg', '%', 'px', 'cm', 'mm', 'in', 'fr', 'rad', 'grad', 'turn', 'pt', 'pc', 'em', 'rem', 'ch', 'ex', 'lh', 'vh', 'vw', 'vmin', 'vmax'], T>;

type CSSTime = `${number}ms` | `${number}s`;
type CSSFrequency = `${number}Hz` | `${number}kHz`;
type CSSResolution = `${number}dpi` | `${number}dpcm` | `${number}dppx`;
type CSSPosition = 'static' | 'relative' | 'absolute' | 'fixed' | 'sticky';
type CSSDisplay = 'block' | 'inline' | 'inline-block' | 'flex' | 'inline-flex' | 'grid' | 'inline-grid' | 'table' | 'table-cell' | 'table-row' | 'none';
type CSSBoxModel = 'content-box' | 'border-box';
type CSSOverflow = 'visible' | 'hidden' | 'scroll' | 'auto';
type CSSFloat = 'left' | 'right' | 'none';
type CSSClear = 'left' | 'right' | 'both' | 'none';
type CSSTextDecoration = 'underline' | 'dashed' | 'dotted' | 'double' | 'line-through' | 'overline' | 'solid' | 'wavy';
type CSSFontStyle = 'normal' | 'italic' | 'oblique';
type CSSFontWeight = 'normal' | 'bold' | 'bolder' | 'lighter' | '100' | '200' | '300' | '400' | '500' | '600' | '700' | '800' | '900';
type CSSFontVariant = 'normal' | 'small-caps';
type CSSFontStretch = 'normal' | 'ultra-condensed' | 'extra-condensed' | 'condensed' | 'semi-condensed' | 'semi-expanded' | 'expanded' | 'extra-expanded' | 'ultra-expanded';
type CSSFontFamily = 'serif' | 'sans-serif' | 'monospace' | 'cursive' | 'fantasy' | 'system-ui' | 'ui-serif' | 'ui-sans-serif' | 'ui-monospace' | 'ui-rounded' | 'emoji' | 'math' | 'fangsong' | 'inherit' | 'initial' | 'unset';
type CSSGeneric = 'initial' | 'inherit' | 'unset';
type CSSFontFallback<CFF extends CSSFontFamily[] | null = null> = CFF extends CSSFontFamily[] ? CSSFontFallbackHandler<CFF> : `${CSSFontFamily}, ${CSSFontFamily}`;

type CSSFontFallbackHandler<CFF extends CSSFontFamily[]> = CFF extends [infer CF extends CSSFontFamily, ...infer Rest extends CSSFontFamily[]] ? [CF, ...Rest]['length'] extends 1 ? `${CSSFontFamily}, ${CF}` : `${CSSFontFamily}, ${CF}, ${CSSFontFallbackHandler<Rest>}` : never;
type CSSFont<CFF extends CSSFontFamily[] | null = null> = CFF extends CSSFontFamily[] ? `${CSSFontStyle} ${CSSFontVariant} ${CSSFontWeight} ${CSSFontStretch} ${CSSFontFallbackHandler<CFF>}` : `${CSSFontStyle} ${CSSFontVariant} ${CSSFontWeight} ${CSSFontStretch} ${CSSFontFamily}`;

type SimpleCSSColor = HexColor | CSSNamedColors;
type HexColor = `#${string | number}` & { length };
type RGBColor = `rgb(${number},${number},${number})`;
type RGBAColor = `rgba(${number},${number},${number},${number})`;
type HSLColor = `hsl(${number},${number}%,${number}%)`;
type HSLAColor = `hsla(${number},${number}%,${number}%,${number})`;
type CSSColor = HexColor | RGBColor | RGBAColor | HSLColor | HSLAColor | CSSNamedColors;
type CSSNamedColors = "black" | "silver" | "gray" | "white" | "maroon" | "red" | "purple" | "fuchsia" | "green" | "lime" | "olive" | "yellow" | "navy" | "blue" | "teal" | "aqua" | "aliceblue" | "antiquewhite" | "aqua" | "aquamarine" | "azure" | "beige" | "bisque" | "black" | "blanchedalmond" | "blue" | "blueviolet" | "brown" | "burlywood" | "cadetblue" | "chartreuse" | "chocolate" | "coral" | "cornflowerblue" | "cornsilk" | "crimson" | "cyan" | "aqua" | "darkblue" | "darkcyan" | "darkgoldenrod" | "darkgray" | "darkgreen" | "darkgrey" | "darkkhaki" | "darkmagenta" | "darkolivegreen" | "darkorange" | "darkorchid" | "darkred" | "darksalmon" | "darkseagreen" | "darkslateblue" | "darkslategray" | "darkslategrey" | "darkturquoise" | "darkviolet" | "deeppink" | "deepskyblue" | "dimgray" | "dimgrey" | "dodgerblue" | "firebrick" | "floralwhite" | "forestgreen" | "fuchsia" | "gainsboro" | "ghostwhite" | "gold" | "goldenrod" | "gray" | "green" | "greenyellow" | "grey" | "gray" | "honeydew" | "hotpink" | "indianred" | "indigo" | "ivory" | "khaki" | "lavender" | "lavenderblush" | "lawngreen" | "lemonchiffon" | "lightblue" | "lightcoral" | "lightcyan" | "lightgoldenrodyellow" | "lightgray" | "lightgreen" | "lightgrey" | "lightpink" | "lightsalmon" | "lightseagreen" | "lightskyblue" | "lightslategray" | "lightslategrey" | "lightsteelblue" | "lightyellow" | "lime" | "limegreen" | "linen" | "magenta" | "fuchsia" | "maroon" | "mediumaquamarine" | "mediumblue" | "mediumorchid" | "mediumpurple" | "mediumseagreen" | "mediumslateblue" | "mediumspringgreen" | "mediumturquoise" | "mediumvioletred" | "midnightblue" | "mintcream" | "mistyrose" | "moccasin" | "navajowhite" | "navy" | "oldlace" | "olive" | "olivedrab" | "orange" | "orangered" | "orchid" | "palegoldenrod" | "palegreen" | "paleturquoise" | "palevioletred" | "papayawhip" | "peachpuff" | "peru" | "pink" | "plum" | "powderblue" | "purple" | "rebeccapurple" | "red" | "rosybrown" | "royalblue" | "saddlebrown" | "salmon" | "sandybrown" | "seagreen" | "seashell" | "sienna" | "silver" | "skyblue" | "slateblue" | "slategray" | "slategrey" | "snow" | "springgreen" | "steelblue" | "tan" | "teal" | "thistle" | "tomato" | "transparent" | "turquoise" | "violet" | "wheat" | "white" | "whitesmoke" | "yellow" | "yellowgreen";
