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
import React from 'react';
import styled from 'styled-components';
import randomString from '@util/randomString';

export const svgTagnameArray: string[] = ["animate", "circle", "clipPath", "defs", "desc", "ellipse", "feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence", "filter", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "metadata", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "switch", "symbol", "text", "textPath", "tspan", "use", "view"];
export const tagnameArray: string[] = ["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "search", "section", "select", "slot", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "var", "video", "wbr", "webview"];
export const tagArray: TagArray = [...tagnameArray, ...svgTagnameArray] as TagArray;
export const withModifiedProps: WithModifiedProps = (WrappedComponent, modifyProps) => (props) => {
  const modifiedProps = modifyProps(props as React.ComponentProps<typeof WrappedComponent>);
  return <WrappedComponent {...modifiedProps} />
}
export function isTagname<Target extends Tagnames>(tag: Target | Tags): tag is Target {
  return tagnameArray.includes(tag);
}
export function isSVGTagname<Target extends SVGTagnames>(tag: Target | Tags): tag is Target {
  return svgTagnameArray.includes(tag);
}
export function isTag<Target extends Tags>(tag: Target | unknown): tag is Target {
  return typeof tag === 'string' && (tagArray as string[]).includes(tag);
}

export function isDetailedComponent<Target extends Tagnames>(Component: unknown): Component is DetailedComponent<Target, any> {
  return typeof Component === 'object'
    && Component !== null
    && 'tag' in Component
    && isTag<Target>(Component.tag)
    && isTagname<Target>(Component.tag);
}
export function isDetailedSVGComponent<Target extends SVGTagnames>(Component: unknown): Component is DetailedSVGComponent<Target, any> {
  return typeof Component === 'object'
    && Component !== null
    && 'tag' in Component
    && isTag<Target>(Component.tag)
    && isSVGTagname<Target>(Component.tag);
}
function handleTag<Tag extends Tags>(tag: Tag | string): Tag extends Tagnames ? "HTML" : Tag extends SVGTagnames ? "SVG" : never {
  if (isTag(tag)) {
    if (isTagname(tag)) {
      return "HTML" as Tag extends Tagnames ? "HTML" : never;
    } else if (isSVGTagname(tag)) {
      return "SVG" as Tag extends SVGTagnames ? "SVG" : never;
    } else {
      throw new Error(`Error: The tag passed is not in either array: ${tag}`);
    }
  } else {
    throw new Error(`Error: The tag passed is not a valid tag: ${tag}`);
  }
}
export const detailed: Detailed = (function () {
  const createElement: DetailCompFunc = (<Tag extends Tags>(tag: Tag): DetailComponent<Tag> => (
    <Props extends object, Attrs extends Props = Props>(
      attrs = ((props) => props) as DetailPropMod<Tag, Props, Attrs>,
      config = { generateClass: true, generateID: true } as DetailCompConfig
    ) => {
      if (!isTag(tag)) {
        throw new Error(`Error: The tag passed is not a valid tag: ${tag}`);
      }
      const elementData = {
        tag,
        id: config.generateID ? `detailed-${tag}-util${randomString(12)}` : undefined,
        className: config.generateClass ? `detailed-${tag}-util` : undefined,
        type: handleTag(tag)
      } as DetailElementData<Tag>;
      const Element: DetailedElement<Tag, Props> = ((props: UtilityProps<Tag, Props>) => {
        let { children, className, id = elementData.id, ...rest } = { ...props, ...attrs(props) } as UtilityProps<Tag, Attrs>;
        elementData.id = id;
        if (config.generateClass === true) {
          className = className ? `${className} ${elementData.className}-${className}` : elementData.className;
        }
        elementData.className = className;
        const theProps = { ...rest, className, id };
        return (
          <>
            { React.createElement(tag, theProps, children) }
          </>
        );
      }) as DetailedElement<Tag, Props>;
      Element.tag = tag;
      Element.id = elementData.id;
      Element.className = elementData.className;
      if (isDetailedComponent(Element)) {
        Element.type = "HTML";
        Element.styled = ((initialStyles, ...interpolations) => styled(Element)(initialStyles, ...interpolations)) as Stylizer<typeof Element.tag, Props>;
      } else if (isDetailedSVGComponent(Element)) {
        Element.type = "SVG";
      } else {
        throw new Error(`ERROR: Issue with "isDetailedComponent" | "isDetailedSVGComponent" | "${tag}"`);
      }
      return Element;
    }) as DetailElement<Tag>
  ) as DetailCompFunc;
  const detailed: Detailed = createElement as Detailed;
  for (const key of tagArray) {
    (detailed[key] as DetailElement<typeof key>) = createElement(key);
  }
  return detailed;
})();

export default detailed;
