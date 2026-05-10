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
import React, { Fragment } from 'react';
import styled from 'styled-components';
import { Interpolation } from 'styled-components';
import { IStyledComponent, Styles, Substitute, SupportedHTMLElements } from 'styled-components/dist/types';
type StyleProps<K extends SetTarget<any>> = React.JSX.IntrinsicAttributes &  StyledAttributes<Exclude<K, GenComponents>> & {
  ref?: K extends SupportedHTMLElements ? React.RefObject<StyledElements[K]> : React.RefObject<K>;
  children?: React.ReactNode;
  [prop: string]: any;
}
type StyledAttributes<K extends SetTarget<any>> = K extends SupportedHTMLElements ? React.DetailedHTMLProps<DetailedElement[K] extends React.HTMLAttributes<StyledElements[K]> ? DetailedElement[K] : React.HTMLAttributes<StyledElements[K]>,StyledElements[K]> : K;
type StyledProps<K extends SetTarget<P>, P extends StyleProps<K>> = Styles<Substitute<StyledAttributes<K>, NoInfer<P>>>;
type InterpolationProps<K extends SetTarget<P>, P extends StyleProps<K>> = Interpolation<Substitute<StyledAttributes<K>, NoInfer<P>>>[];

type GenComponents<P extends StyleProps<any> = {}> = (React.ExoticComponent<P> & {
  defaultProps?: Partial<P> | undefined;
  displayName?: string | undefined;
}) | React.ComponentType<P>;
type SetTarget<P = {}> = GenComponents<P> | SupportedHTMLElements;

type PropOF<V extends StyleProps<any> | PropFunction<any, any>> = V;

type PropFunction<K extends SetTarget<P>, P extends StyleProps<K>> = (props: P & StyleProps<K>) => P & StyleProps<K>;

type DefaultHTMLFactory<K extends SupportedHTMLElements, P extends StyleProps<K>> = (props: P & StyleProps<K>) => React.DetailedReactHTMLElement<DetailedElement[K] extends React.HTMLAttributes<StyledElements[K] extends HTMLElement ? StyledElements[K] : HTMLElement> ? DetailedElement[K] : React.HTMLAttributes<StyledElements[K] extends HTMLElement ? StyledElements[K] : HTMLElement>, StyledElements[K] extends HTMLElement ? StyledElements[K] : HTMLElement>;

type Styleized<Target extends SetTarget<P>, P extends StyleProps<Target>> = IStyledComponent<'web', Substitute<StyledAttributes<Target>, P>> & React.ComponentPropsWithRef<Target> & StyleProps<Target> & (Target extends string
  ? {}
  : Omit<Target, keyof React.Component<any>>);
type Styleizer<Target extends SetTarget<P>, P extends StyleProps<Target>> = (initialStyles: StyledProps<Target, P>, ...interpolations: InterpolationProps<Target, P>) => Styleized<Target, P>;

export function setDefaultProps<
  K extends SetTarget<P & StyleProps<K>>,
  P extends StyleProps<K>
>(tagName: K, props: (P & StyleProps<K>) | PropFunction<K, P>) {
  let defaultProps: P & StyleProps<K> = props;
  let propFunction: PropFunction<K, P> = ((passedProps: P & StyleProps<K>) => passedProps) as PropFunction<K, P>;
  if (props instanceof Function) {
    propFunction = props;
  } else {
    defaultProps = props;
  }
  function HigherOrderElement (props: P & StyleProps<K>) {
    const childProps = { ...defaultProps, ...props };
    return (
    <Fragment>
      { React.createElement(tagName, propFunction(childProps), props.children) }
    </Fragment>
    )
  }
  HigherOrderElement.styled = (styles: StyledProps<K,P>, ...interpolations: InterpolationProps<K,P>) => styled(tagName)<P>(styles, ...interpolations);
  HigherOrderElement.withRef = {} as React.ForwardRefExoticComponent<React.PropsWithoutRef<P & StyleProps<K>> & React.RefAttributes<React.DetailedReactHTMLElement<DetailedElement[K], StyledElements[K]>>>;
  if (ref) {
    HigherOrderElement.withRef = React.forwardRef<React.DetailedReactHTMLElement<React.HTMLAttributes<StyledElements[K]>, StyledElements[K]>, P & StyleProps<K>>((props, ref) => {
      const { children, ...rest } = props;
      return React.cloneElement(HigherOrderElement(props), rest, children);
    });
  }
  Element.props = {} as Omit<P & DefaultProps<HTMLMapped<K>>, 'children'>;
  Element.propFn = prop;
  return <Element { Element.props} />;
}
const El = <P extends DefaultProps<HTMLDivElement>>(defaultProps: P) => setDefaultProps('div', (props) => props)(defaultProps);
const F: React.FC = (props) => {

  return (
    <El />
  );
}
function withDefaultProps<K extends keyof React.ReactHTML & keyof HTMLElementTagNameMap, P extends DefaultProps<HTMLElementTagNameMap[K]>>(tagName: K, props: P) {
  const { children, ...childProps } = props;
  Component.handler = setDefaultProps(childProps);
  Component.
  function Component (props: P & DefaultProps<HTMLElementTagNameMap[K]>) {
    // You can modify the props here if needed
    const updatedProps = handler((defaultProps) => ({
      ...defaultProps,
      className: `${defaultProps.className || ''} default-class`
    }));

    return React.createElement(tagName, props, children)
  };
  return Component;
}
const Component = withDefaultProps('a', {
  el: 'string',
});
const comp = <P extends object>(props: P) => (<Component {props}  />)

interface DetailedElement {
  object: React.ObjectHTMLAttributes<HTMLObjectElement>; // HTMLObjectElement
  g: React.SVGAttributes<SVGGElement>; // SVGGElement
  big: React.HTMLAttributes<HTMLElement>; // HTMLElement
  link: React.LinkHTMLAttributes<HTMLLinkElement>; // HTMLLinkElement
  small: React.HTMLAttributes<HTMLElement>; // HTMLElement
  sub: React.HTMLAttributes<HTMLElement>; // HTMLElement
  sup: React.HTMLAttributes<HTMLElement>; // HTMLElement
  a: React.AnchorHTMLAttributes<HTMLAnchorElement>; // HTMLAnchorElement
  abbr: React.HTMLAttributes<HTMLElement>; // HTMLElement
  address: React.HTMLAttributes<HTMLElement>; // HTMLElement
  area: React.AreaHTMLAttributes<HTMLAreaElement>; // HTMLAreaElement
  article: React.HTMLAttributes<HTMLElement>; // HTMLElement
  aside: React.HTMLAttributes<HTMLElement>; // HTMLElement
  audio: React.AudioHTMLAttributes<HTMLAudioElement>; // HTMLAudioElement
  b: React.HTMLAttributes<HTMLElement>; // HTMLElement
  base: React.BaseHTMLAttributes<HTMLBaseElement>; // HTMLBaseElement
  bdi: React.HTMLAttributes<HTMLElement>; // HTMLElement
  bdo: React.HTMLAttributes<HTMLElement>; // HTMLElement
  blockquote: React.BlockquoteHTMLAttributes<HTMLQuoteElement>; // HTMLQuoteElement
  body: React.HTMLAttributes<HTMLBodyElement>; // HTMLBodyElement
  br: React.HTMLAttributes<HTMLBRElement>; // HTMLBRElement
  button: React.ButtonHTMLAttributes<HTMLButtonElement>; // HTMLButtonElement
  canvas: React.CanvasHTMLAttributes<HTMLCanvasElement>; // HTMLCanvasElement
  caption: React.HTMLAttributes<HTMLElement>; // HTMLElement
  cite: React.HTMLAttributes<HTMLElement>; // HTMLElement
  code: React.HTMLAttributes<HTMLElement>; // HTMLElement
  col: React.ColHTMLAttributes<HTMLTableColElement>; // HTMLTableColElement
  colgroup: React.ColgroupHTMLAttributes<HTMLTableColElement>; // HTMLTableColElement
  data: React.DataHTMLAttributes<HTMLDataElement>; // HTMLDataElement
  datalist: React.HTMLAttributes<HTMLDataListElement>; // HTMLDataListElement
  dd: React.HTMLAttributes<HTMLElement>; // HTMLElement
  del: React.DelHTMLAttributes<HTMLModElement>; // HTMLModElement
  details: React.DetailsHTMLAttributes<HTMLDetailsElement>; // HTMLDetailsElement
  dfn: React.HTMLAttributes<HTMLElement>; // HTMLElement
  dialog: React.DialogHTMLAttributes<HTMLDialogElement>; // HTMLDialogElement
  div: React.HTMLAttributes<HTMLDivElement>; // HTMLDivElement
  dl: React.HTMLAttributes<HTMLDListElement>; // HTMLDListElement
  dt: React.HTMLAttributes<HTMLElement>; // HTMLElement
  em: React.HTMLAttributes<HTMLElement>; // HTMLElement
  embed: React.EmbedHTMLAttributes<HTMLEmbedElement>; // HTMLEmbedElement
  fieldset: React.FieldsetHTMLAttributes<HTMLFieldSetElement>; // HTMLFieldSetElement
  figcaption: React.HTMLAttributes<HTMLElement>; // HTMLElement
  figure: React.HTMLAttributes<HTMLElement>; // HTMLElement
  footer: React.HTMLAttributes<HTMLElement>; // HTMLElement
  form: React.FormHTMLAttributes<HTMLFormElement>; // HTMLFormElement
  h1: React.HTMLAttributes<HTMLHeadingElement>; // HTMLHeadingElement
  h2: React.HTMLAttributes<HTMLHeadingElement>; // HTMLHeadingElement
  h3: React.HTMLAttributes<HTMLHeadingElement>; // HTMLHeadingElement
  h4: React.HTMLAttributes<HTMLHeadingElement>; // HTMLHeadingElement
  h5: React.HTMLAttributes<HTMLHeadingElement>; // HTMLHeadingElement
  h6: React.HTMLAttributes<HTMLHeadingElement>; // HTMLHeadingElement
  header: React.HTMLAttributes<HTMLElement>; // HTMLElement
  hgroup: React.HTMLAttributes<HTMLElement>; // HTMLElement
  hr: React.HTMLAttributes<HTMLHRElement>; // HTMLHRElement
  html: React.HtmlHTMLAttributes<HTMLHtmlElement>; // HTMLHtmlElement
  i: React.HTMLAttributes<HTMLElement>; // HTMLElement
  iframe: React.IframeHTMLAttributes<HTMLIFrameElement>; // HTMLIFrameElement
  img: React.ImgHTMLAttributes<HTMLImageElement>; // HTMLImageElement
  input: React.InputHTMLAttributes<HTMLInputElement>; // HTMLInputElement
  ins: React.InsHTMLAttributes<HTMLModElement>; // HTMLModElement
  kbd: React.HTMLAttributes<HTMLElement>; // HTMLElement
  keygen: React.KeygenHTMLAttributes<HTMLElement>; // HTMLElement
  label: React.LabelHTMLAttributes<HTMLLabelElement>; // HTMLLabelElement
  legend: React.HTMLAttributes<HTMLLegendElement>; // HTMLLegendElement
  li: React.LiHTMLAttributes<HTMLLIElement>; // HTMLLIElement
  main: React.HTMLAttributes<HTMLElement>; // HTMLElement
  map: React.MapHTMLAttributes<HTMLMapElement>; // HTMLMapElement
  mark: React.HTMLAttributes<HTMLElement>; // HTMLElement
  menu: React.MenuHTMLAttributes<HTMLElement>; // HTMLElement
  menuitem: React.HTMLAttributes<HTMLElement>; // HTMLElement
  meta: React.MetaHTMLAttributes<HTMLMetaElement>; // HTMLMetaElement
  meter: React.MeterHTMLAttributes<HTMLMeterElement>; // HTMLMeterElement
  nav: React.HTMLAttributes<HTMLElement>; // HTMLElement
  noscript: React.HTMLAttributes<HTMLElement>; // HTMLElement
  ol: React.OlHTMLAttributes<HTMLOListElement>; // HTMLOListElement
  optgroup: React.OptgroupHTMLAttributes<HTMLOptGroupElement>; // HTMLOptGroupElement
  option: React.OptionHTMLAttributes<HTMLOptionElement>; // HTMLOptionElement
  output: React.OutputHTMLAttributes<HTMLOutputElement>; // HTMLOutputElement
  p: React.HTMLAttributes<HTMLParagraphElement>; // HTMLParagraphElement
  param: React.ParamHTMLAttributes<HTMLParamElement>; // HTMLParamElement
  picture: React.HTMLAttributes<HTMLElement>; // HTMLElement
  pre: React.HTMLAttributes<HTMLPreElement>; // HTMLPreElement
  progress: React.ProgressHTMLAttributes<HTMLProgressElement>; // HTMLProgressElement
  q: React.QuoteHTMLAttributes<HTMLQuoteElement>; // HTMLQuoteElement
  rp: React.HTMLAttributes<HTMLElement>; // HTMLElement
  rt: React.HTMLAttributes<HTMLElement>; // HTMLElement
  ruby: React.HTMLAttributes<HTMLElement>; // HTMLElement
  s: React.HTMLAttributes<HTMLElement>; // HTMLElement
  samp: React.HTMLAttributes<HTMLElement>; // HTMLElement
  script: React.ScriptHTMLAttributes<HTMLScriptElement>; // HTMLScriptElement
  section: React.HTMLAttributes<HTMLElement>; // HTMLElement
  select: React.SelectHTMLAttributes<HTMLSelectElement>; // HTMLSelectElement
  source: React.SourceHTMLAttributes<HTMLSourceElement>; // HTMLSourceElement
  span: React.HTMLAttributes<HTMLSpanElement>; // HTMLSpanElement
  strong: React.HTMLAttributes<HTMLElement>; // HTMLElement
  style: React.StyleHTMLAttributes<HTMLStyleElement>; // HTMLStyleElement
  summary: React.HTMLAttributes<HTMLElement>; // HTMLElement
  table: React.TableHTMLAttributes<HTMLTableElement>; // HTMLTableElement
  tbody: React.HTMLAttributes<HTMLTableSectionElement>; // HTMLTableSectionElement
  td: React.TdHTMLAttributes<HTMLTableDataCellElement>; // HTMLTableDataCellElement
  textarea: React.TextareaHTMLAttributes<HTMLTextAreaElement>; // HTMLTextAreaElement
  tfoot: React.HTMLAttributes<HTMLTableSectionElement>; // HTMLTableSectionElement
  th: React.ThHTMLAttributes<HTMLTableHeaderCellElement>; // HTMLTableHeaderCellElement
  thead: React.HTMLAttributes<HTMLTableSectionElement>; // HTMLTableSectionElement
  time: React.TimeHTMLAttributes<HTMLTimeElement>; // HTMLTimeElement
  tr: React.HTMLAttributes<HTMLTableRowElement>; // HTMLTableRowElement
  track: React.TrackHTMLAttributes<HTMLTrackElement>; // HTMLTrackElement
  u: React.HTMLAttributes<HTMLElement>; // HTMLElement
  ul: React.HTMLAttributes<HTMLUListElement>; // HTMLUListElement
  var: React.HTMLAttributes<HTMLElement>; // HTMLElement
  video: React.VideoHTMLAttributes<HTMLVideoElement>; // HTMLVideoElement
  wbr: React.HTMLAttributes<HTMLElement>; // HTMLElement
  svg: React.SVGAttributes<SVGSVGElement>; // SVGSVGElement
  circle: React.SVGAttributes<SVGCircleElement>; // SVGCircleElement
  clipPath: React.SVGAttributes<SVGClipPathElement>; // SVGClipPathElement
  defs: React.SVGAttributes<SVGDefsElement>; // SVGDefsElement
  ellipse: React.SVGAttributes<SVGEllipseElement>; // SVGEllipseElement
  foreignObject: React.SVGAttributes<SVGForeignObjectElement>; // SVGForeignObjectElement
  image: React.SVGAttributes<SVGImageElement>; // SVGImageElement
  line: React.SVGLineElementAttributes<SVGLineElement>; // SVGLineElemen
  linearGradient: React.SVGAttributes<SVGLinearGradientElement>; // SVGLinearGradientElement
  marker: React.SVGAttributes<SVGMarkerElement>; // SVGMarkerElement
  mask: React.SVGAttributes<SVGMaskElement>; // SVGMaskElement
  path: React.SVGAttributes<SVGPathElement>; // SVGPathElement
  pattern: React.SVGAttributes<SVGPatternElement>; // SVGPatternElement
  polygon: React.SVGAttributes<SVGPolygonElement>; // SVGPolygonElement
  polyline: React.SVGAttributes<SVGPolylineElement>; // SVGPolylineElement
  radialGradient: React.SVGAttributes<SVGRadialGradientElement>; // SVGRadialGradientElement
  rect: React.SVGAttributes<SVGRectElement>; // SVGRectElement
  stop: React.SVGAttributes<SVGStopElement>; // SVGStopElement
  text: React.SVGTextElementAttributes<SVGTextElement>; //SVGTextElement
  tspan: React.SVGAttributes<SVGTSpanElement>; // SVGTSpanElement
  use: React.SVGAttributes<SVGUseElement>; // SVGUseElement
}
interface StyledElements {
  object: HTMLObjectElement
  g: SVGGElement
  big: HTMLElement
  link: HTMLLinkElement
  small: HTMLElement
  sub: HTMLElement
  sup: HTMLElement
  a: HTMLAnchorElement
  abbr: HTMLElement
  address: HTMLElement
  area: HTMLAreaElement
  article: HTMLElement
  aside: HTMLElement
  audio: HTMLAudioElement
  b: HTMLElement
  base: HTMLBaseElement
  bdi: HTMLElement
  bdo: HTMLElement
  blockquote: HTMLQuoteElement
  body: HTMLBodyElement
  br: HTMLBRElement
  button: HTMLButtonElement
  canvas: HTMLCanvasElement
  caption: HTMLElement
  cite: HTMLElement
  code: HTMLElement
  col: HTMLTableColElement
  colgroup: HTMLTableColElement
  data: HTMLDataElement
  datalist: HTMLDataListElement
  dd: HTMLElement
  del: HTMLModElement
  details: HTMLDetailsElement
  dfn: HTMLElement
  dialog: HTMLDialogElement
  div: HTMLDivElement
  dl: HTMLDListElement
  dt: HTMLElement
  em: HTMLElement
  embed: HTMLEmbedElement
  fieldset: HTMLFieldSetElement
  figcaption: HTMLElement
  figure: HTMLElement
  footer: HTMLElement
  form: HTMLFormElement
  h1: HTMLHeadingElement
  h2: HTMLHeadingElement
  h3: HTMLHeadingElement
  h4: HTMLHeadingElement
  h5: HTMLHeadingElement
  h6: HTMLHeadingElement
  header: HTMLElement
  hgroup: HTMLElement
  hr: HTMLHRElement
  html: HTMLHtmlElement
  i: HTMLElement
  iframe: HTMLIFrameElement
  img: HTMLImageElement
  input: HTMLInputElement
  ins: HTMLModElement
  kbd: HTMLElement
  keygen: HTMLElement
  label: HTMLLabelElement
  legend: HTMLLegendElement
  li: HTMLLIElement
  main: HTMLElement
  map: HTMLMapElement
  mark: HTMLElement
  menu: HTMLElement
  menuitem: HTMLElement
  meta: HTMLMetaElement
  meter: HTMLMeterElement
  nav: HTMLElement
  noscript: HTMLElement
  ol: HTMLOListElement
  optgroup: HTMLOptGroupElement
  option: HTMLOptionElement
  output: HTMLOutputElement
  p: HTMLParagraphElement
  param: HTMLParamElement
  picture: HTMLElement
  pre: HTMLPreElement
  progress: HTMLProgressElement
  q: HTMLQuoteElement
  rp: HTMLElement
  rt: HTMLElement
  ruby: HTMLElement
  s: HTMLElement
  samp: HTMLElement
  script: HTMLScriptElement
  section: HTMLElement
  select: HTMLSelectElement
  source: HTMLSourceElement
  span: HTMLSpanElement
  strong: HTMLElement
  style: HTMLStyleElement
  summary: HTMLElement
  table: HTMLTableElement
  tbody: HTMLTableSectionElement
  td: HTMLTableDataCellElement
  textarea: HTMLTextAreaElement
  tfoot: HTMLTableSectionElement
  th: HTMLTableHeaderCellElement
  thead: HTMLTableSectionElement
  time: HTMLTimeElement
  tr: HTMLTableRowElement
  track: HTMLTrackElement
  u: HTMLElement
  ul: HTMLUListElement
  var: HTMLElement
  video: HTMLVideoElement
  wbr: HTMLElement
  svg: SVGSVGElement
  circle: SVGCircleElement
  clipPath: SVGClipPathElement
  defs: SVGDefsElement
  ellipse: SVGEllipseElement
  foreignObject: SVGForeignObjectElement
  image: SVGImageElement
  line: SVGLineElement
  linearGradient: SVGLinearGradientElement
  marker: SVGMarkerElement
  mask: SVGMaskElement
  path: SVGPathElement
  pattern: SVGPatternElement
  polygon: SVGPolygonElement
  polyline: SVGPolylineElement
  radialGradient: SVGRadialGradientElement
  rect: SVGRectElement
  stop: SVGStopElement
  text: SVGTextElement
  tspan: SVGTSpanElement
  use: SVGUseElement
};
