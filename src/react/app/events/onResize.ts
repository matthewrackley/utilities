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

import { useEffect } from 'react';


export const createCustomEvent = <T>(data: T) => {
  return new CustomEvent('onResize', {
    detail: {
      data
    }
  });
};


const useEvent = (type: string, selector: string) => {
  useEffect(() => {
    const targetElements = document.querySelectorAll(selector);

    targetElements.forEach((element) => {
      element.addEventListener(type, function (event) {
        console.log(`Custom Event triggered:\n`, event.target)
      })
    })

    const broadcastEvent = <T>(data: T) => {
      targetElements.forEach(element => {
          const customEvent = createCustomEvent(data);
          element.dispatchEvent(customEvent);
      });
    };
    targetElements.forEach((element) => {
      broadcastEvent(element)
    })

    return () => {
      targetElements.forEach((element) => {
        element.removeEventListener(type, function (this: Element, event) {
          console.log(`Custom event triggered on ${this.textContent}:`, (event as CustomEvent<{ data: any }>).detail.data);
        })
      })
    }
  })
}
