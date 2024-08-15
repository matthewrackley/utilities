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

interface RGB {
  r: number;
  g: number;
  b: number;
  a?: number;
}
interface HSL {
  h: number;
  s: number;
  l: number;
  a?: number;
}
type HexColor = `#${string}`;
interface HSLBlends {
  primary: HSL;
  complementary: HSL;
  shadows: Shadows<HSL>;
  harmony: HarmonyBlend<HSL>;
  analogous: AnalogousBlend<HSL>;
  monochromatic: MonochromaticBlend<HSL>;
  triadic: TriadicBlend<HSL>;
  tetradic: TetradicBlend<HSL>;
  square: SquareBlend<HSL>;
  neutral: NeutralBlend<HSL>;
  shades: Shades<HSL>;
  tones: Tones<HSL>;
  tints: Tints<HSL>;
}
type ColorBlend<T extends 'RGB' | 'HSL'> = T extends 'RGB' ? RGBBlends : HSLBlends;
interface RGBBlends {
  primary: RGB;
  complementary: RGB;
  shadows: Shadows<RGB>;
  harmony: HarmonyBlend<RGB>;
  analogous: AnalogousBlend<RGB>;
  monochromatic: MonochromaticBlend<RGB>;
  triadic: TriadicBlend<RGB>;
  tetradic: TetradicBlend<RGB>;
  square: SquareBlend<RGB>;
  neutral: NeutralBlend<RGB>;
  shades: Shades<RGB>;
  tones: Tones<RGB>;
  tints: Tints<RGB>;
}
interface Blends<T extends HexColor> {
  primary: T;
  complementary: HexColor;
  shadows: Shadows;
  harmony: HarmonyBlend;
  analogous: AnalogousBlend;
  monochromatic: MonochromaticBlend;
  triadic: TriadicBlend;
  tetradic: TetradicBlend;
  square: SquareBlend;
  neutral: NeutralBlend;
  shades: Shades;
  tones: Tones;
  tints: Tints;
}
interface HarmonyBlend<T extends HexColor | RGB | HSL = HexColor> {
  secondary: T;
  tertiary: T;
}
interface TriadicBlend<T extends HexColor | RGB | HSL = HexColor> {
  secondary: T;
  tertiary: T;
}
interface TetradicBlend<T extends HexColor | RGB | HSL = HexColor> {
  secondary: T;
  tertiary: T;
  quaternary: T;
}
interface SquareBlend<T extends HexColor | RGB | HSL = HexColor> {
  secondary: T;
  tertiary: T;
  quaternary: T;
}
interface Shadows<T extends HexColor | RGB | HSL = HexColor> {
  secondary: T;
  tertiary: T;
  quaternary: T;
}
interface AnalogousBlend<T extends HexColor | RGB | HSL = HexColor> {
  secondary: T;
  tertiary: T;
  quaternary: T;
  quinary: T;
  senary: T;
}
interface NeutralBlend<T extends HexColor | RGB | HSL = HexColor> {
  secondary: T;
  tertiary: T;
  quaternary: T;
  quinary: T;
  senary: T;
}
interface MonochromaticBlend<T extends HexColor | RGB | HSL = HexColor> {
  secondary: T;
  tertiary: T;
  quaternary: T;
  quinary: T;
  senary: T;
  septenary: T;
}
interface Tints<T extends HexColor | RGB | HSL = HexColor> {
  secondary: T;
  tertiary: T;
  quaternary: T;
  quinary: T;
  senary: T;
  septenary: T;
  octonary: T;
}
interface Shades<T extends HexColor | RGB | HSL = HexColor> {
  secondary: T;
  tertiary: T;
  quaternary: T;
  quinary: T;
  senary: T;
  septenary: T;
  octonary: T;
}
interface Tones<T extends HexColor | RGB | HSL = HexColor> {
  secondary: T;
  tertiary: T;
  quaternary: T;
  quinary: T;
  senary: T;
  septenary: T;
  octonary: T;
}
function isOdd(num: number): boolean {
  return num % 2 === 1;
}

type BlendType<T extends 'RGB' | 'HSL'> = T extends 'RGB' | 'HSL' ? T extends 'RGB' ? RGB : HSL : never;
export class ColorBlender<T extends HexColor> implements Blends<T> {
  primary: T
  complementary: HexColor
  harmony = {} as HarmonyBlend;
  analogous = {} as AnalogousBlend;
  monochromatic = {} as MonochromaticBlend;
  triadic = {} as TriadicBlend;
  tetradic = {} as TetradicBlend;
  square = {} as SquareBlend;
  shadows = {} as Shadows;
  neutral = {} as NeutralBlend;
  shades = {} as Shades;
  tones = {} as Tones;
  tints = {} as Tints;
  hslBlends = {} as HSLBlends;
  primaryHsl = {} as HSL;
  complementaryHsl = {} as HSL;
  harmonyHsl = {} as HarmonyBlend<HSL>;
  analogousHsl = {} as AnalogousBlend<HSL>;
  monochromaticHsl = {} as MonochromaticBlend<HSL>;
  triadicHsl = {} as TriadicBlend<HSL>;
  tetradicHsl = {} as TetradicBlend<HSL>;
  squareHsl = {} as SquareBlend<HSL>;
  shadowsHsl = {} as Shadows<HSL>;
  neutralHsl = {} as NeutralBlend<HSL>;
  shadesHsl = {} as Shades<HSL>;
  tonesHsl = {} as Tones<HSL>;
  tintsHsl = {} as Tints<HSL>;
  rgbBlends = {} as RGBBlends;
  primaryRgb = {} as RGB;
  complementaryRgb = {} as RGB;
  harmonyRgb = {} as HarmonyBlend<RGB>;
  analogousRgb = {} as AnalogousBlend<RGB>;
  monochromaticRgb = {} as MonochromaticBlend<RGB>;
  triadicRgb = {} as TriadicBlend<RGB>;
  tetradicRgb = {} as TetradicBlend<RGB>;
  squareRgb = {} as SquareBlend<RGB>;
  shadowsRgb = {} as Shadows<RGB>;
  neutralRgb = {} as NeutralBlend<RGB>;
  shadesRgb = {} as Shades<RGB>;
  tonesRgb = {} as Tones<RGB>;
  tintsRgb = {} as Tints<RGB>;
  /**
   * @method hexToRgb
   * @summary Converts a hex color to an RGB object.
   * @param {HexColor} hex - The hex color string.
   * @returns {RGB} The RGB representation.
   */
  private static hexToRgb(hex: HexColor): RGB {
    return {
      r: parseInt(hex.slice(1, 3), 16),
      g: parseInt(hex.slice(3, 5), 16),
      b: parseInt(hex.slice(5, 7), 16),
      a: parseFloat(`0.${parseInt(hex.slice(7, 9), 16)}`),
    };
  }
  /**
   * @method generateBlends
   * @summary Generates various blends of a given hex color.
   * @param {K} kind - The input hex color.
   * @param {Blends<T>} blends - The object containing various color blends.
   * @returns {Blends} An object containing various color blends.
   */
  private generateBlends<T extends HexColor, K extends 'RGB' | 'HSL'>(kind: K): ColorBlend<K> {
    const blends = this.blends;
    const handleHex = kind === 'RGB' ? ColorBlender.hexToRgb : ColorBlender.hexToHsl;
    const blend = (kind === 'RGB' ? 'Rgb' : 'Hsl') as K extends 'RGB' ? 'Rgb' : 'Hsl';
    const blendKind = `${kind.toLowerCase() as 'rgb' | 'hsl'}${'Blends'}` as const;
    for (const key of Object.keys(blends) as (keyof typeof blends)[]) {
      if (key === 'primary' || key === 'complementary') {//@ts-ignore
        this[`${key}${blend}`] = { ...handleHex(blends[key]) };
        this[blendKind][key] = this[`${key}${blend}`];
      }//@ts-ignore
      this[blendKind][key] = {} as typeof this[typeof blendKind][typeof key];
      for (const ordanate of Object.keys(blends[key]) as (keyof typeof blends[typeof key])[]) {
        this[`${key}${blend}`] = {
          ...this[`${key}${blend}`],
          [ordanate]: { ...handleHex(blends[key][ordanate]) },
        } as typeof this[`${typeof key}${typeof blend}`];
        this[blendKind][key][ordanate] = this[`${key}${blend}`][ordanate];
      }
    }
    const colorBlend = this[blendKind] as ColorBlend<K>;
    /**
    this[blendKind].complementary = handleHex(blends.complementary);
    colorBlend.primary = handleHex(blends.primary);
    colorBlend.complementary = handleHex(blends.complementary);
    for (const key of Object.keys(blends) as (keyof typeof colorBlend)[]) {
      if (key === 'primary' || key === 'complementary') continue;
      colorBlend[key] = {} as typeof colorBlend[typeof key];
      for (let ordanate of Object.keys(blends[key as keyof typeof blends]) as (keyof ColorBlend<K>[keyof ColorBlend<K>])[]) {
        colorBlend[key][ordanate] = {} as typeof colorBlend[typeof key][typeof ordanate];
      }
      for (let ordanate of Object.keys(blends.harmony) as (keyof HarmonyBlend)[]) {
        colorBlend.harmony[ordanate] = handleHex(blends.harmony[ordanate]);
        colorBlend.triadic[ordanate] = handleHex(blends.triadic[ordanate]);
        for ((ordanate as keyof TetradicBlend) of Object.keys(blends.tetradic) as (keyof TetradicBlend)[]) {
          colorBlend.tetradic[ordanate] = handleHex(blends.tetradic[ordanate]);
          colorBlend.square[ordanate] = handleHex(blends.square[ordanate]);
          colorBlend.shadows[ordanate] = handleHex(blends.shadows[ordanate]);
          for ((ordanate as keyof AnalogousBlend) of Object.keys(blends.analogous) as (keyof AnalogousBlend)[]) {
            colorBlend.analogous[ordanate] = handleHex(blends.analogous[ordanate]);
            colorBlend.neutral[ordanate] = handleHex(blends.neutral[ordanate]);
            for ((ordanate as keyof MonochromaticBlend) of Object.keys(blends.monochromatic) as (keyof MonochromaticBlend)[]) {
              colorBlend.monochromatic[ordanate] = handleHex(blends.monochromatic[ordanate]);
              for ((ordanate as keyof Tints) of Object.keys(blends.tints) as (keyof Tints)[]) {
                colorBlend.tints[ordanate] = handleHex(blends.tints[ordanate]);
                colorBlend.tones[ordanate] = handleHex(blends.tones[ordanate]);
                colorBlend.shades[ordanate] = handleHex(blends.shades[ordanate]);
              }
            }
          }
        }
      }
    }*/
    return colorBlend;
  }
  /**
   * @method hexToHsl
   * @summary Converts a hex color to an HSL object.
   * @param {HexColor} hex - The hex color string.
   * @returns {HSL} The HSL representation.
   */
  private static hexToHsl(hex: HexColor): HSL {
    let r = parseInt(hex.slice(1, 3), 16) / 255
    let g = parseInt(hex.slice(3, 5), 16) / 255
    let b = parseInt(hex.slice(5, 7), 16) / 255

    let max = Math.max(r, g, b)
    let min = Math.min(r, g, b)
    let h = 0,
      s = 0,
      l = (max + min) / 2

    if (max !== min) {
      let d = max - min
      s = l > 0.5 ? d / (2 - max - min) : d / (max + min)

      switch (max) {
        case r:
          h = (g - b) / d + (g < b ? 6 : 0)
          break
        case g:
          h = (b - r) / d + 2
          break
        case b:
          h = (r - g) / d + 4
          break
      }

      h *= 60
    }

    return { h, s: s * 100, l: l * 100 }
  }

  /**
   * @method hslToHex
   * @summary Converts an HSL object to a hex color string.
   * @param {HSL} hsl - The HSL representation.
   * @returns {HexColor} The hex color string.
   */
  private static hslToHex({ h, s, l }: HSL): HexColor {
    s /= 100
    l /= 100
    const a = s * Math.min(l, 1 - l)
    const f = (n: number) => {
      const k = (n + h / 30) % 12
      const color = l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1)
      return Math.round(255 * color)
        .toString(16)
        .padStart(2, '0') // convert to Hex and prefix "0" if needed
    }
    return `#${f(0)}${f(8)}${f(4)}`
  }

  /**
   * @method adjustHue
   * @summary Adjusts the hue of an HSL color.
   * @param {HSL} hsl - The HSL representation.
   * @param {number} factor - The factor by which to adjust the hue.
   * @returns {HSL} The adjusted HSL color.
   */
  private static adjustHue(hsl: HSL, factor: number): HSL {
    return { ...hsl, h: (hsl.h + factor) % 360 }
  }

  /**
   * @method adjustSaturation
   * @summary Adjusts the saturation of an HSL color.
   * @param {HSL} hsl - The HSL representation.
   * @param {number} factor - The factor by which to adjust the saturation.
   * @returns {HSL} The adjusted HSL color.
   */
  private static adjustSaturation(hsl: HSL, factor: number): HSL {
    return { ...hsl, s: Math.min(100, Math.max(0, hsl.s + factor)) }
  }

  /**
   * @method adjustLightness
   * @summary Adjusts the lightness of an HSL color.
   * @param {HSL} hsl - The HSL representation.
   * @param {number} factor - The factor by which to adjust the lightness.
   * @returns {HSL} The adjusted HSL color.
   */
  private static adjustLightness(hsl: HSL, factor: number): HSL {
    return { ...hsl, l: Math.min(100, Math.max(0, hsl.l + factor)) }
  }
  private static toHslArray(length: number, primaryHsl: HSL, adjust: 'h' | 'l' | 's', factor: number | ((index: number, hsl?: HSL) => number)): HSL[] {
    return Array(length)
      .fill(primaryHsl)
      .map((hsl: HSL, i, a: HSL[]) => {
        const f = factor instanceof Function ? factor(i, hsl) : factor;
        if (adjust === 'h') return this.adjustHue(hsl, f);
        if (adjust === 's') return this.adjustSaturation(hsl, f);
        if (adjust === 'l') return this.adjustLightness(hsl, f);
        else throw new Error('Invalid adjust value');
      });
  }


  /**
   * @method getBlends
   * @summary Generates various blends of a given hex color.
   * @param {HexColor} color - The input hex color.
   * @returns {Blends} An object containing various color blends.
   */
  static getBlends<T extends HexColor>(color: T, instance: ColorBlender<T>): Blends<T> {
    const primaryHsl = this.hexToHsl(color);
    this.toHslArray(5, primaryHsl, 'h', (i) => (++i) * 30);
    const complementaryHsl: HSL = { ...primaryHsl, h: (primaryHsl.h + 180) % 360 };

    const analogousHsl: HSL[] = this.toHslArray(5, primaryHsl, 'h', (i) => (++i) * 30);
    const triadicHsl: HSL[] = this.toHslArray(2, primaryHsl, 'h', (i) => (++i) * 120);
    const tetradicHsl: HSL[] = this.toHslArray(3, primaryHsl, 'h', (i) => ((++i) / 1) * 60 * i);
    const squareHsl: HSL[] = this.toHslArray(3, primaryHsl, 'h', (i) => (i + 1) * 90);

    const splitComplementaryHsl: HSL[] = [
      { ...primaryHsl, h: (primaryHsl.h + 150) % 360 },
      { ...primaryHsl, h: (primaryHsl.h + 210) % 360 },
    ];
    Array(7)
      .fill(primaryHsl)
      .map((hsl, i) => {
        return this.adjustLightness(hsl, 6.25 * i);
      });
    const neutralHsl = this.toHslArray(5, primaryHsl, 'h', (i) => (15 * (i + 1)));
    const shadesHsl = this.toHslArray(7, primaryHsl, 'l', (i) => (
      ((100 / 8) * -(1 / 2)) * (++i) % 100 - Number(`${isOdd(i) ? 0.05 : 0}`)
    ));
    const tonesHsl = this.toHslArray(7, this.adjustSaturation(primaryHsl, -100), 's', (i) => (
      ((100 / 8) * (++i)) - (i === 1 ? 0 : i <= 3 ? i <= 5 ? i <= 7 ? 0.3 : 0.2 : 0.1 : 0)
    ));
    const tintsHsl = this.toHslArray(7, primaryHsl, 'l', (i) => (
      ((100 / 8) * (1 / 2)) * (++i) % 100 + Number(isOdd(i) ? 0.05 : 0)
    ));

    /**((100 / 8) * (1 / 2)) + 0.05),
  this.adjustLightness(primaryHsl, ((100 / 8) * ( 2 / 2 ))),
  this.adjustLightness(primaryHsl, ((100 / 8) * ( 3 / 2 )) + 0.05),
  this.adjustLightness(primaryHsl, ((100 / 8) * ( 4 / 2 )) + 0.1),
  this.adjustLightness(primaryHsl, ((100 / 8) * ( 5 / 2 )) - 0.05),
  this.adjustLightness(primaryHsl, ((100 / 8) * ( 6 / 2 ))),
  this.adjustLightness(primaryHsl, ((100 / 8) * ( 7 / 2 )) - 0.05),
];*/

    const monochromaticHsl = Array(6)
      .fill(primaryHsl)
      .map((hsl: HSL, i) => this.adjustLightness(hsl, (
        ((-30 + (10 * (i + 1))) === 0) ? (-20 + (10 * (i + 1))) : (-30 + (10 * (i + 1)))
      ))
      );
    const shadow = this.hslToHex(this.adjustLightness(primaryHsl, -50));
    instance.hslBlends = {
      primary: primaryHsl,
      complementary: complementaryHsl,
      shadows: {
        secondary: { ...this.adjustLightness(primaryHsl, -50), a: 0.35 },
        tertiary: { ...this.adjustLightness(primaryHsl, -50), a: 0.55 },
        quaternary: { ...this.adjustLightness(primaryHsl, -50), a: 0.85 },
      },
      harmony: {
        secondary: analogousHsl[0],
        tertiary: analogousHsl[1],
      },
      analogous: {
        secondary: analogousHsl[0],
        tertiary: analogousHsl[1],
        quaternary: analogousHsl[2],
        quinary: analogousHsl[3],
        senary: analogousHsl[4],
      },
      monochromatic: {
        secondary: monochromaticHsl[0],
        tertiary: monochromaticHsl[1],
        quaternary: monochromaticHsl[2],
        quinary: monochromaticHsl[3],
        senary: monochromaticHsl[4],
        septenary: monochromaticHsl[5],
      },
      triadic: {
        secondary: triadicHsl[0],
        tertiary: triadicHsl[1],
      },
      tetradic: {
        secondary: tetradicHsl[0],
        tertiary: tetradicHsl[1],
        quaternary: tetradicHsl[2],
      },
      square: {
        secondary: squareHsl[0],
        tertiary: squareHsl[1],
        quaternary: squareHsl[2],
      },
      shades: {
        secondary: shadesHsl[0],
        tertiary: shadesHsl[1],
        quaternary: shadesHsl[2],
        quinary: shadesHsl[3],
        senary: shadesHsl[4],
        septenary: shadesHsl[5],
        octonary: shadesHsl[6],
      },
      tones: {
        secondary: tonesHsl[6],
        tertiary: tonesHsl[5],
        quaternary: tonesHsl[4],
        quinary: tonesHsl[3],
        senary: tonesHsl[2],
        septenary: tonesHsl[1],
        octonary: tonesHsl[0],
      },
      tints: {
        secondary: tintsHsl[0],
        tertiary: tintsHsl[1],
        quaternary: tintsHsl[2],
        quinary: tintsHsl[3],
        senary: tintsHsl[4],
        septenary: tintsHsl[5],
        octonary: tintsHsl[6],
      },
      neutral: {
        secondary: neutralHsl[0],
        tertiary: neutralHsl[1],
        quaternary: neutralHsl[2],
        quinary: neutralHsl[3],
        senary: neutralHsl[4],
      },
    };


    instance.blends = {} as Blends<T>;
    instance.rgbBlends = {} as RGBBlends;
    for (const key of Object.keys(instance.hslBlends) as (keyof typeof instance.blends)[]) {
      if (key === 'primary' || key === 'complementary') {
        instance.blends[key] = this.hslToHex(instance.hslBlends[key]) as T;
        instance.rgbBlends[key] = this.hexToRgb(this.hslToHex(instance.hslBlends[key]));
        instance[`${key}Hsl`] = instance.hslBlends[key];
        instance[`${key}Rgb`] = instance.rgbBlends[key];
        instance[key] = instance.blends[key] as T;
      } else {//@ts-ignore
        instance.blends[key] = {} as Blends<T>[keyof Blends<T>];//@ts-ignore
        instance.rgbBlends[key] = {} as RGBBlends[keyof RGBBlends];//@ts-ignore
        instance[`${key}Hsl`] = instance.hslBlends[key];//@ts-ignore
        instance[`${key}Rgb`] = instance.rgbBlends[key];//@ts-ignore
        instance[key] = instance.blends[key];
        for (const ordanate of Object.keys(instance.hslBlends[key]) as (keyof typeof instance.blends[typeof key])[]) {
          instance.blends[key][ordanate] = this.hslToHex(instance.hslBlends[key][ordanate]);
          instance.rgbBlends[key][ordanate] = this.hexToRgb(this.hslToHex(instance.hslBlends[key][ordanate]));
          instance[`${key}Hsl`][ordanate] = instance.hslBlends[key][ordanate];
          instance[`${key}Rgb`][ordanate] = instance.rgbBlends[key][ordanate];
          instance[key][ordanate] = instance.blends[key][ordanate];
        }
      }
    }
    instance.hslBlends = instance.hslBlends;
    instance.rgbBlends = instance.rgbBlends;
    return instance.blends as Blends<T>;
  }
  blends: Blends<T>
  constructor(color: T) {
    this.primary = color;
    this.primaryHsl = ColorBlender.hexToHsl(color);
    this.primaryRgb = ColorBlender.hexToRgb(color);
    const blends = ColorBlender.getBlends(color, this as ColorBlender<T>);
    this.blends = blends;
    this.shadows = blends.shadows;
    this.complementary = blends.complementary;
    this.harmony = blends.harmony;
    this.analogous = blends.analogous;
    this.monochromatic = blends.monochromatic;
    this.triadic = blends.triadic;
    this.tetradic = blends.tetradic;
    this.square = blends.square;
    this.neutral = blends.neutral;
    this.shades = blends.shades;
    this.tones = blends.tones;
    this.tints = blends.tints;
  }
}

export default ColorBlender;
