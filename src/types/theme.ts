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

import { DefaultTheme } from 'styled-components';
import theme, { ThemeMap, ThemeSet, ThemeValue, VariantMap, variants, VariantSet } from 'styled-theming';
export interface UtilTheme extends ThemeMap {
  dark: ThemeValue;
  light: ThemeValue;
}
export interface UtilitiesMap extends VariantMap<FullMap> {
  /**
   * @property {{ dark: '#000', light: "#FFF" }} default
   */
  default: { dark: '#000', light: "#FFF" };
  /**
   * @property {{ dark: "#FF0045", light: "#0055FF" }} primary
   */
  primary: { dark: "#FF0045", light: "#0055FF" };
  /**
   * @property {{ dark: "#FF9900", light: "#DD3DED"}} secondary
   */
  secondary: { dark: "#FF9900", light: "#DD3DED"};
  /**
   * @property {{dark: "#fff", light: "#000" }} other
   */
  inverse: {dark: "#FFF", light: "#000" };
  /**
   * @property {{dark: "#EE66FF", light: "#FF9900" }} fallback
   */
  fallback: {dark: "#EE66FF", light: "#FF9900" };
  /**
   * @property {{ dark: "#00FF00", light: "#FF00FF"}} accent
   */
  accent: { dark: "#00FF00", light: "#FF00FF"};
  /**
   * @property {{dark: "#666", light: "#999" }} border
   */
  border: {dark: "#666", light: "#999" };
  /**
   * @property {{dark: "#cccccc75", light: "#11111175" }} shadow
   */
  shadow: {dark: "#CCCCCC75", light: "#11111175" };
  /**
   * @property {{dark: "#888", light: "#444" }} hover
   */
  hover: {dark: "#888", light: "#444" };
}
export const utilMap: UtilitiesMap = {
  default: {
    dark: '#000',
    light: '#FFF'
  },
  inverse: {
    dark: '#FFF',
    light: '#000'
  },
  primary: {
    dark: '#FF0045',
    light: '#0055FF'
  },
  secondary: {
    dark: '#FF9900',
    light: '#DD3DED'
  },
  accent: {
    dark: '#00FF00',
    light: '#FF00FF'
  },
  border: {
    dark: '#666',
    light: '#999'
  },
  shadow: {
    dark: '#CCCCCC75',
    light: '#11111175'
  },
  hover: {
    dark: '#888',
    light: '#444'
  },
  fallback: {
    dark: '#EE66FF',
    light: '#FF9900'
  },
};
const variantSet: UtilitiesSet = theme.variants('mode', 'variant',  utilMap);
export interface UtilitiesSet extends VariantSet<'variant', keyof UtilitiesMap> {
  (props: { variant: keyof UtilitiesMap }): string;
}
export interface BackgroundSet extends VariantSet<'variant', keyof UtilitiesMap> {
  (props: { variant: keyof UtilitiesMap; }): string;
}
export interface ForegroundSet extends VariantSet<'variant', keyof UtilitiesMap> {
  (props: { variant: keyof UtilitiesMap; }): string;
}
export interface AccentSet extends VariantSet<'variant', keyof UtilitiesMap> {
  (props: { variant: keyof UtilitiesMap; }): string;
}
export interface FallbackSet extends VariantSet<'variant', keyof UtilitiesMap> {
  (props: { variant: keyof UtilitiesMap; }): string;
}
const backgroundSet: BackgroundSet = theme.variants('mode', 'variant',  utilMap);
const foregroundSet: ForegroundSet = theme.variants('mode', 'variant',  utilMap);
const accentSet: AccentSet = theme.variants('mode', 'variant',  utilMap);
const fallbackSet: FallbackSet = theme.variants('mode', 'variant',  utilMap);
export interface UtilitiesTheme {
  utilities: UtilitiesSet;
  background: BackgroundSet;
  foreground: ForegroundSet;
  accent: AccentSet;
  fallback: FallbackSet;
  theme: UtilitiesMap;
  _mode: 'light' | 'dark';
  get mode(): 'light' | 'dark';
}

export const Theme: UtilitiesTheme = {
  utilities: variantSet,
  background: backgroundSet,
  foreground: foregroundSet,
  accent: accentSet,
  fallback: fallbackSet,
  theme: utilMap,
  _mode: 'dark',
  get mode() {
    return this._mode = this._mode === 'light' ? 'dark' : 'light';
  }
};


export default Theme;
