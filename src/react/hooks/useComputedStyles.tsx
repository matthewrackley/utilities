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


import React, { useEffect, useState } from 'react';
import * as fs from 'node:fs';

export const useComputedStyles: UseComputedStyles = <
    T extends Element | React.Component<Props, React.ComponentState>,
    K extends keyof CSSStyleDeclaration | (keyof CSSStyleDeclaration)[],
    Props extends object,
    E extends Element
  >(
    ref: React.RefObject<T>,
    ...propertyValues: T extends Element ? K[] : ComponentHandlerArray<T, K, E>
  ) => {
  const css = {} as DeclaredStyle<K>;
  let handler = (() => void 0) as unknown as ComponentHandler<T, E>;
  let properties = [] as unknown as StyleKeys<K>;
  let reference = {} as T;
  let element = {} as T extends infer L extends Element ? L : E;
  let elStyles = [] as unknown as T extends infer L extends Element ? [DeclaredStyle<K>, L] : [DeclaredStyle<K>, E, T];
  if (propertyValues[0] instanceof Function) {
    const [h, ...p] = propertyValues as ComponentHandlerArray<T, K, E>;
    handler = h as ComponentHandler<T, E>;
    properties = [...p] as StyleKeys<K>;
    elStyles = [css, element as E, reference as T] as T extends infer L extends Element ? never : [DeclaredStyle<K>, E, T];
  } else {
    properties = propertyValues as T extends Element ? StyleKeys<K> : never;
    elStyles = [css, element] as unknown as T extends infer L extends Element ? [DeclaredStyle<K>, L] : never;
  }
  for (const key of properties) {
    css[key as StyleKey<K>] = {} as DeclaredStyle<K>[StyleKey<K>];
    css.getPropertyValue = ((property) => '') as DeclaredStyle<K>['getPropertyValue'];
    css.getBoundingClientRect = (()=> {}) as Element['getBoundingClientRect'];
  }
  const stylesEvent = new CustomEvent('styles', {
    bubbles: true,
    detail: {
      styles: css,

    }
  })
  const [styles, setStyles] = useState(elStyles);
  useEffect(() => {
    const getStyles = () => {
      if (ref.current) {
        reference = ref.current;
        if (reference instanceof Element) {
          element = reference as unknown as T extends infer L extends Element ? L : never;
        } else {
          element = handler(reference) as T extends infer L extends Element ? never : E;
        }
        const computedStyles = window.getComputedStyle(element)
        for (const key of properties) {
          css[key as StyleKey<K>] = computedStyles.getPropertyValue(key as string) as DeclaredStyle<K>[StyleKey<K>];
        }
        css.getPropertyValue = computedStyles.getPropertyValue
        css.getBoundingClientRect = element.getBoundingClientRect;
        setStyles((reference instanceof Element ? [css, element] : [css, element as E, reference as T]) as T extends infer L extends Element ? [DeclaredStyle<K>, L] : [DeclaredStyle<K>, E, T]);
      }
    };
    getStyles();
    if (element) {
      element.addEventListener('resize', getStyles);
    }

    return () => {
      if (element) {
        element.removeEventListener('resize', getStyles);
      }
    }
  }, [styles, reference, element]);
  return styles;
};
export default useComputedStyles;
