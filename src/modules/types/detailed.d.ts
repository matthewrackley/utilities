/*
 *   Copyright (c) 2024 Matthew Allen Rackley
 *   All rights reserved.

 *   Permission is hereby granted, free of charge, to any person obtaining a copy
 *   of this software and associated documentation files (the "Software"), to deal
 *   in the Software without propsriction, including without limitation the rights
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
type FastOmit<T extends object, U extends string | number | symbol> = {
  [K in keyof T as K extends U ? never : K]: T[K]
}
type Substitute<A extends object, B extends object> = FastOmit<A, keyof B> & B;

/**
 * @type TagnameArray
 * @summary An array of all `keyof React.ReactHTML` tags
 */
type TagnameArray = ["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "search", "section", "select", "slot", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "var", "video", "wbr", "webview"];
/**
 * @type SVGTagnameArray
 * @summary An array of all `keyof React.ReactSVG` tags
 */
type SVGTagnameArray = ["animate", "circle", "clipPath", "defs", "desc", "ellipse", "feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence", "filter", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "metadata", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "switch", "symbol", "text", "textPath", "tspan", "use", "view"];
/**
 * @type TagArray
 * @summary An array of all `keyof React.ReactHTML` & `keyof React.ReactSVG` tags
 */
type TagArray = [...TagnameArray, ...SVGTagnameArray];
/**
 * @type Tagnames
 * @summary A union type of all `keyof React.ReactHTML`
 */
type Tagnames = keyof React.ReactHTML & string;
/**
 * @type SVGTagnames
 * @summary A union type of all `keyof React.ReactSVG`
 */
type SVGTagnames = keyof React.ReactSVG & string;
/**
 * @type Tags
 * @summary A union type of all `keyof React.ReactHTML` & `keyof React.ReactSVG`
 */
type Tags = Tagnames | SVGTagnames;

type BaseObject = {};

/**
 * @interface BaseProps
 * @template {Tags} Tag The tag used to implement the correct `React.RefObject`
 */
interface BaseProps<Tag extends Tags> {
  ref?: React.RefObject<Tag extends SVGTagnames ? BaseSVG<Tag> : Tag extends Tagnames ? BaseElement<Tag> : never>;
  [data: `data-${string}`]: any;
}
/**
 * @type UtilityProps
 * @template {Tags} Tag The tag used to implement the correct properties of the supporting Element
 * @template {object} [Props=BaseObject] The props to be used on the Component
 */
type UtilityProps<Tag extends Tags, Props extends object = BaseObject> = Substitute<Substitute<DetailedProps<Tag>, BaseProps<Tag>>, Props>;
/**
 * @type DetailPropMod
 * @template {Tags} [Tag=Tags] The tag used to identify the props
 * @template {object} [Props=BaseObject] The props to use on the resulting Component
 * @template {Props} [Attrs=Props] The props end result
 * @summary How to use:
 * - `props` - These are the props that come in from the component
 * @example
 *  (props: UtilityProps<Tag, Props>): Partial<UtilityProps<Tag, Attrs>> => {
 *    return {
 *      className: `util-a-${props.className || 'styled'}`
 *    };
 *  }
 */
type DetailPropMod<Tag extends Tags = Tags, Props extends object = BaseObject, Attrs extends Props = Props> = (props: UtilityProps<Tag, Props>) => Partial<UtilityProps<Tag, Attrs>>;

type WithModifiedProps = <Props extends object, C extends React.FC<any>>(WrappedComponent: C, modifyProps: (props: React.ComponentProps<C>) => React.JSX.LibraryManagedAttributes<C, Props>) => React.FC<Props>;
/**
 * @type DetailedElement
 * @template {Tags} Tag The tag by which to identify the Element
 * @template {object} [Props=BaseObject] The props to use on the Component
 */
type DetailedElement<Tag extends Tags, Props extends object = BaseObject> = Tag extends SVGTagnames ? DetailedSVGComponent<Tag, Props> : Tag extends Tagnames ? DetailedComponent<Tag, Props> : never;
/**
 * @interface DetailedComponent
 * @template {Tagnames} Tag The HTMLElement tagname used to identify the Element
 * @template {object} [Props=BaseObject] The props to use on the component
 */
interface DetailedComponent<Tag extends Tagnames, Props extends object = BaseObject> extends React.FC<UtilityProps<Tag, Props>> {
  (props: UtilityProps<Tag, Props>): React.JSX.Element;
  /**
   * @property {Tag} tag The tagname of the Element
   */
  tag: Tag;
  /**
   * @property {"HTML"} type Indicates that this is an HTMLElement Component.
   */
  type: "HTML";
  /**
   * @property {string} [id=`detailed-${this['tag']}-util${randomString(12)}`] The `id` of the Element, auto-generated unless `id` is provided or `generateID` is set to `false`.
   */
  id?: string | `detailed-${Tag}-util${string & { readonly length: 12; }}`;
  /**
   * @property {string} [className=`detailed-${this['tag']}-util`] The `className` of the Element, auto-generated unless `generateClass` is set to `false`.
   */
  className?: string;
  /**
   * @property {Stylizer<Tag, Props>} styled The styled component version.
   */
  styled: Stylizer<Tag, Props>
}
/**
 * @interface DetailedSVGComponent
 * @template {SVGTagnames} Tag The SVGElement tagname used to identify the Element
 * @template {object} [Props=BaseObject] The props to use on the component
 */
interface DetailedSVGComponent<Tag extends SVGTagnames, Props extends object = BaseObject> extends React.FC<UtilityProps<Tag, Props>> {
  (props: UtilityProps<Tag, Props>): React.JSX.Element;
  /**
   * @property {Tag} tag The tagname of the Element
   */
  tag: Tag;
  /**
   * @property {"SVG"} type Indicates that this is an SVGElement Component
   */
  type: "SVG";
  /**
   * @property {string} [id=`detailed-${this['tag']}-${randomString(12)}-util`] The `id` of the Element, auto-generated unless `id` is provided or `generateID` is set to `false`.
   */
  id?: string | `detailed-${Tag}-${string & { readonly length: 12; }}-util`;
  /**
   * @property {string} [className=`detailed-${this['tag']}-util`] The `className` of the Element, auto-generated unless `generateClass` is set to `false`.
   */
  className?: string;
}
/**
 * @type Stylizer
 * @template {Tagnames} Tag The HTMLElement tag used to identify the Element
 * @template {object} [Props=BaseObject] The props used on the Component
 * @template {object} [OuterProps=Props] Additional props used on the Component
 * @template {object} [Statics=BaseObject] Static properties on the Component
 */
type Stylizer<
  Tag extends Tagnames,
  Props extends object = BaseObject
  > = <
    OuterProps extends object = Props,
    Statics extends object = BaseObject
    >(
      initialStyles: import('styled-components/dist/types').Styles<Substitute<UtilityProps<Tag, Props>, NoInfer<OuterProps>>>,
      ...interpolations: import('styled-components/dist/types').Interpolation<Substitute<UtilityProps<Tag, Props>, NoInfer<OuterProps>>>[]
    ) => StylizedComponent<Tag, Props, OuterProps, Statics>;

/**
 * @type StylizedComponent
 * @template {Tagnames} Tag The HTMLElement tag used to identify the Element
 * @template {object} [Props=BaseObject] The props used on the Component
 * @template {object} [OuterProps=Props] Additional props used on the Component
 * @template {object} [Statics=BaseObject] Static properties on the Component
 */
type StylizedComponent<Tag extends Tagnames, Props extends object = BaseObject, OuterProps extends object = Props, Statics extends object = BaseObject> = import('styled-components/dist/types').IStyledComponent<"web", Substitute<UtilityProps<Tag, Props>, OuterProps>> & Statics & Omit<DetailedComponent<Tag, Props>, keyof React.Component<any, {}, any>>;
/**
 * @type BaseElement
 * @template {Tagnames} T The HTML tagname used to identify the Element
 */
type BaseElement<T extends Tagnames> = ReactElements[T];
/**
 * @type BaseSVG
 * @template {SVGTagnames} T The SVG tagname used to identify the Element
 */
type BaseSVG<T extends SVGTagnames> = SVGElementTagNameMap[T];
/**
 * @type DetailedProps
 * @template {Tags} Tag The tagname used to identify the Element
 * @summary Return the base props for the element
 */
type DetailedProps<Tag extends Tags = Tags> = {
  a: React.DetailedHTMLProps<React.AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>;
  abbr: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
  address: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
  area: React.DetailedHTMLProps<React.AreaHTMLAttributes<HTMLAreaElement>, HTMLAreaElement>;
  article: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
  aside: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
  audio: React.DetailedHTMLProps<React.AudioHTMLAttributes<HTMLAudioElement>, HTMLAudioElement>;
  b: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
  base: React.DetailedHTMLProps<React.BaseHTMLAttributes<HTMLBaseElement>, HTMLBaseElement>;
  bdi: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
  bdo: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
  big: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
  blockquote: React.DetailedHTMLProps<React.BlockquoteHTMLAttributes<HTMLQuoteElement>, HTMLQuoteElement>;
  body: React.DetailedHTMLProps<React.HTMLAttributes<HTMLBodyElement>, HTMLBodyElement>;
  br: React.DetailedHTMLProps<React.HTMLAttributes<HTMLBRElement>, HTMLBRElement>;
  button: React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;
  canvas: React.DetailedHTMLProps<React.CanvasHTMLAttributes<HTMLCanvasElement>, HTMLCanvasElement>;
  caption: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
  center: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
  cite: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
  code: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
  col: React.DetailedHTMLProps<React.ColHTMLAttributes<HTMLTableColElement>, HTMLTableColElement>;
  colgroup: React.DetailedHTMLProps<React.ColgroupHTMLAttributes<HTMLTableColElement>, HTMLTableColElement>;
  data: React.DetailedHTMLProps<React.DataHTMLAttributes<HTMLDataElement>, HTMLDataElement>;
  datalist: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDataListElement>, HTMLDataListElement>;
  dd: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
  del: React.DetailedHTMLProps<React.DelHTMLAttributes<HTMLModElement>, HTMLModElement>;
  details: React.DetailedHTMLProps<React.DetailsHTMLAttributes<HTMLDetailsElement>, HTMLDetailsElement>;
  dfn: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
  dialog: React.DetailedHTMLProps<React.DialogHTMLAttributes<HTMLDialogElement>, HTMLDialogElement>;
  div: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>;
  dl: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDListElement>, HTMLDListElement>;
  dt: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
  em: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
  embed: React.DetailedHTMLProps<React.EmbedHTMLAttributes<HTMLEmbedElement>, HTMLEmbedElement>;
  fieldset: React.DetailedHTMLProps<React.FieldsetHTMLAttributes<HTMLFieldSetElement>, HTMLFieldSetElement>;
  figcaption: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
  figure: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
  footer: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
  form: React.DetailedHTMLProps<React.FormHTMLAttributes<HTMLFormElement>, HTMLFormElement>;
  h1: React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>;
  h2: React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>;
  h3: React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>;
  h4: React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>;
  h5: React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>;
  h6: React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>;
  head: React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadElement>, HTMLHeadElement>;
  header: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
  hgroup: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
  hr: React.DetailedHTMLProps<React.HTMLAttributes<HTMLHRElement>, HTMLHRElement>;
  html: React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLHtmlElement>, HTMLHtmlElement>;
  i: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
  iframe: React.DetailedHTMLProps<React.IframeHTMLAttributes<HTMLIFrameElement>, HTMLIFrameElement>;
  img: React.DetailedHTMLProps<React.ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>;
  input: React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;
  ins: React.DetailedHTMLProps<React.InsHTMLAttributes<HTMLModElement>, HTMLModElement>;
  kbd: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
  keygen: React.DetailedHTMLProps<React.KeygenHTMLAttributes<HTMLElement>, HTMLElement>;
  label: React.DetailedHTMLProps<React.LabelHTMLAttributes<HTMLLabelElement>, HTMLLabelElement>;
  legend: React.DetailedHTMLProps<React.HTMLAttributes<HTMLLegendElement>, HTMLLegendElement>;
  li: React.DetailedHTMLProps<React.LiHTMLAttributes<HTMLLIElement>, HTMLLIElement>;
  link: React.DetailedHTMLProps<React.LinkHTMLAttributes<HTMLLinkElement>, HTMLLinkElement>;
  main: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
  map: React.DetailedHTMLProps<React.MapHTMLAttributes<HTMLMapElement>, HTMLMapElement>;
  mark: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
  menu: React.DetailedHTMLProps<React.MenuHTMLAttributes<HTMLMenuElement>, HTMLMenuElement>;
  menuitem: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
  meta: React.DetailedHTMLProps<React.MetaHTMLAttributes<HTMLMetaElement>, HTMLMetaElement>;
  meter: React.DetailedHTMLProps<React.MeterHTMLAttributes<HTMLMeterElement>, HTMLMeterElement>;
  nav: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
  noscript: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
  object: React.DetailedHTMLProps<React.ObjectHTMLAttributes<HTMLObjectElement>, HTMLObjectElement>;
  ol: React.DetailedHTMLProps<React.OlHTMLAttributes<HTMLOListElement>, HTMLOListElement>;
  optgroup: React.DetailedHTMLProps<React.OptgroupHTMLAttributes<HTMLOptGroupElement>, HTMLOptGroupElement>;
  option: React.DetailedHTMLProps<React.OptionHTMLAttributes<HTMLOptionElement>, HTMLOptionElement>;
  output: React.DetailedHTMLProps<React.OutputHTMLAttributes<HTMLOutputElement>, HTMLOutputElement>;
  p: React.DetailedHTMLProps<React.HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>;
  param: React.DetailedHTMLProps<React.ParamHTMLAttributes<HTMLParamElement>, HTMLParamElement>;
  picture: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
  pre: React.DetailedHTMLProps<React.HTMLAttributes<HTMLPreElement>, HTMLPreElement>;
  progress: React.DetailedHTMLProps<React.ProgressHTMLAttributes<HTMLProgressElement>, HTMLProgressElement>;
  q: React.DetailedHTMLProps<React.QuoteHTMLAttributes<HTMLQuoteElement>, HTMLQuoteElement>;
  rp: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
  rt: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
  ruby: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
  s: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
  samp: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
  script: React.DetailedHTMLProps<React.ScriptHTMLAttributes<HTMLScriptElement>, HTMLScriptElement>;
  search: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
  section: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
  select: React.DetailedHTMLProps<React.SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>;
  slot: React.DetailedHTMLProps<React.SlotHTMLAttributes<HTMLSlotElement>, HTMLSlotElement>;
  small: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
  source: React.DetailedHTMLProps<React.SourceHTMLAttributes<HTMLSourceElement>, HTMLSourceElement>;
  span: React.DetailedHTMLProps<React.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>;
  strong: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
  style: React.DetailedHTMLProps<React.StyleHTMLAttributes<HTMLStyleElement>, HTMLStyleElement>;
  sub: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
  summary: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
  sup: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
  table: React.DetailedHTMLProps<React.TableHTMLAttributes<HTMLTableElement>, HTMLTableElement>;
  tbody: React.DetailedHTMLProps<React.HTMLAttributes<HTMLTableSectionElement>, HTMLTableSectionElement>;
  td: React.DetailedHTMLProps<React.TdHTMLAttributes<HTMLTableCellElement>, HTMLTableCellElement>;
  template: React.DetailedHTMLProps<React.HTMLAttributes<HTMLTemplateElement>, HTMLTemplateElement>;
  textarea: React.DetailedHTMLProps<React.TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement>;
  tfoot: React.DetailedHTMLProps<React.HTMLAttributes<HTMLTableSectionElement>, HTMLTableSectionElement>;
  th: React.DetailedHTMLProps<React.ThHTMLAttributes<HTMLTableCellElement>, HTMLTableCellElement>;
  thead: React.DetailedHTMLProps<React.HTMLAttributes<HTMLTableSectionElement>, HTMLTableSectionElement>;
  time: React.DetailedHTMLProps<React.TimeHTMLAttributes<HTMLTimeElement>, HTMLTimeElement>;
  title: React.DetailedHTMLProps<React.HTMLAttributes<HTMLTitleElement>, HTMLTitleElement>;
  tr: React.DetailedHTMLProps<React.HTMLAttributes<HTMLTableRowElement>, HTMLTableRowElement>;
  track: React.DetailedHTMLProps<React.TrackHTMLAttributes<HTMLTrackElement>, HTMLTrackElement>;
  u: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
  ul: React.DetailedHTMLProps<React.HTMLAttributes<HTMLUListElement>, HTMLUListElement>;
  var: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
  video: React.DetailedHTMLProps<React.VideoHTMLAttributes<HTMLVideoElement>, HTMLVideoElement>;
  wbr: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
  webview: React.DetailedHTMLProps<React.WebViewHTMLAttributes<HTMLWebViewElement>, HTMLWebViewElement>;
  animate: React.SVGProps<SVGAnimateElement>;
  circle: React.SVGProps<SVGCircleElement>;
  clipPath: React.SVGProps<SVGClipPathElement>;
  defs: React.SVGProps<SVGDefsElement>;
  desc: React.SVGProps<SVGDescElement>;
  ellipse: React.SVGProps<SVGEllipseElement>;
  feBlend: React.SVGProps<SVGFEBlendElement>;
  feColorMatrix: React.SVGProps<SVGFEColorMatrixElement>;
  feComponentTransfer: React.SVGProps<SVGFEComponentTransferElement>;
  feComposite: React.SVGProps<SVGFECompositeElement>;
  feConvolveMatrix: React.SVGProps<SVGFEConvolveMatrixElement>;
  feDiffuseLighting: React.SVGProps<SVGFEDiffuseLightingElement>;
  feDisplacementMap: React.SVGProps<SVGFEDisplacementMapElement>;
  feDistantLight: React.SVGProps<SVGFEDistantLightElement>;
  feDropShadow: React.SVGProps<SVGFEDropShadowElement>;
  feFlood: React.SVGProps<SVGFEFloodElement>;
  feFuncA: React.SVGProps<SVGFEFuncAElement>;
  feFuncB: React.SVGProps<SVGFEFuncBElement>;
  feFuncG: React.SVGProps<SVGFEFuncGElement>;
  feFuncR: React.SVGProps<SVGFEFuncRElement>;
  feGaussianBlur: React.SVGProps<SVGFEGaussianBlurElement>;
  feImage: React.SVGProps<SVGFEImageElement>;
  feMerge: React.SVGProps<SVGFEMergeElement>;
  feMergeNode: React.SVGProps<SVGFEMergeNodeElement>;
  feMorphology: React.SVGProps<SVGFEMorphologyElement>;
  feOffset: React.SVGProps<SVGFEOffsetElement>;
  fePointLight: React.SVGProps<SVGFEPointLightElement>;
  feSpecularLighting: React.SVGProps<SVGFESpecularLightingElement>;
  feSpotLight: React.SVGProps<SVGFESpotLightElement>;
  feTile: React.SVGProps<SVGFETileElement>;
  feTurbulence: React.SVGProps<SVGFETurbulenceElement>;
  filter: React.SVGProps<SVGFilterElement>;
  foreignObject: React.SVGProps<SVGForeignObjectElement>;
  g: React.SVGProps<SVGGElement>;
  image: React.SVGProps<SVGImageElement>;
  line: React.SVGLineElementAttributes<SVGLineElement>;
  linearGradient: React.SVGProps<SVGLinearGradientElement>;
  marker: React.SVGProps<SVGMarkerElement>;
  mask: React.SVGProps<SVGMaskElement>;
  metadata: React.SVGProps<SVGMetadataElement>;
  path: React.SVGProps<SVGPathElement>;
  pattern: React.SVGProps<SVGPatternElement>;
  polygon: React.SVGProps<SVGPolygonElement>;
  polyline: React.SVGProps<SVGPolylineElement>;
  radialGradient: React.SVGProps<SVGRadialGradientElement>;
  rect: React.SVGProps<SVGRectElement>;
  stop: React.SVGProps<SVGStopElement>;
  svg: React.SVGProps<SVGSVGElement>;
  switch: React.SVGProps<SVGSwitchElement>;
  symbol: React.SVGProps<SVGSymbolElement>;
  text: React.SVGTextElementAttributes<SVGTextElement>;
  textPath: React.SVGProps<SVGTextPathElement>;
  tspan: React.SVGProps<SVGTSpanElement>;
  use: React.SVGProps<SVGUseElement>;
  view: React.SVGProps<SVGViewElement>;
}[Tag];
interface ReactElements {
  a: HTMLAnchorElement;
  abbr: HTMLElement;
  address: HTMLElement;
  area: HTMLAreaElement;
  article: HTMLElement;
  aside: HTMLElement;
  audio: HTMLAudioElement;
  b: HTMLElement;
  base: HTMLBaseElement;
  bdi: HTMLElement;
  bdo: HTMLElement;
  big: HTMLElement;
  blockquote: HTMLQuoteElement;
  body: HTMLBodyElement;
  br: HTMLBRElement;
  button: HTMLButtonElement;
  canvas: HTMLCanvasElement;
  caption: HTMLTableCaptionElement;
  center: HTMLElement;
  cite: HTMLElement;
  code: HTMLElement;
  col: HTMLTableColElement;
  colgroup: HTMLTableColElement;
  data: HTMLDataElement;
  datalist: HTMLDataListElement;
  dd: HTMLElement;
  del: HTMLModElement;
  details: HTMLDetailsElement;
  dfn: HTMLElement;
  dialog: HTMLDialogElement;
  div: HTMLDivElement;
  dl: HTMLDListElement;
  dt: HTMLElement;
  em: HTMLElement;
  embed: HTMLEmbedElement;
  fieldset: HTMLFieldSetElement;
  figcaption: HTMLElement;
  figure: HTMLElement;
  footer: HTMLElement;
  form: HTMLFormElement;
  h1: HTMLHeadingElement;
  h2: HTMLHeadingElement;
  h3: HTMLHeadingElement;
  h4: HTMLHeadingElement;
  h5: HTMLHeadingElement;
  h6: HTMLHeadingElement;
  head: HTMLHeadElement;
  header: HTMLElement;
  hgroup: HTMLElement;
  hr: HTMLHRElement;
  html: HTMLHtmlElement;
  i: HTMLElement;
  iframe: HTMLIFrameElement;
  img: HTMLImageElement;
  input: HTMLInputElement;
  ins: HTMLModElement;
  kbd: HTMLElement;
  keygen: HTMLElement;
  label: HTMLLabelElement;
  legend: HTMLLegendElement;
  li: HTMLLIElement;
  link: HTMLLinkElement;
  main: HTMLElement;
  map: HTMLMapElement;
  mark: HTMLElement;
  menu: HTMLMenuElement;
  menuitem: HTMLElement;
  meta: HTMLMetaElement;
  meter: HTMLMeterElement;
  nav: HTMLElement;
  noscript: HTMLElement;
  object: HTMLObjectElement;
  ol: HTMLOListElement;
  optgroup: HTMLOptGroupElement;
  option: HTMLOptionElement;
  output: HTMLOutputElement;
  p: HTMLParagraphElement;
  param: HTMLParamElement;
  picture: HTMLPictureElement;
  pre: HTMLPreElement;
  progress: HTMLProgressElement;
  q: HTMLQuoteElement;
  rp: HTMLElement;
  rt: HTMLElement;
  ruby: HTMLElement;
  s: HTMLElement;
  samp: HTMLElement;
  script: HTMLScriptElement;
  search: HTMLElement;
  section: HTMLElement;
  select: HTMLSelectElement;
  slot: HTMLSlotElement;
  small: HTMLElement;
  source: HTMLSourceElement;
  span: HTMLSpanElement;
  strong: HTMLElement;
  style: HTMLStyleElement;
  sub: HTMLElement;
  summary: HTMLElement;
  sup: HTMLElement;
  table: HTMLTableElement;
  tbody: HTMLTableSectionElement;
  td: HTMLTableCellElement;
  template: HTMLTemplateElement;
  textarea: HTMLTextAreaElement;
  tfoot: HTMLTableSectionElement;
  th: HTMLTableCellElement;
  thead: HTMLTableSectionElement;
  time: HTMLTimeElement;
  title: HTMLTitleElement;
  tr: HTMLTableRowElement;
  track: HTMLTrackElement;
  u: HTMLElement;
  ul: HTMLUListElement;
  var: HTMLElement;
  video: HTMLVideoElement;
  wbr: HTMLElement;
  webview: HTMLWebViewElement;
}
interface DetailCompConfig {
  generateClass?: boolean;
  generateID?: boolean;
}
interface DetailElementData<Tag extends Tags> {
  className: string;
  id: string;
  tag: Tag;
  type: "HTML" | "SVG";
}
/**
 * @type DetailElement
 * @template {Tags} Tag The Tagname used to identify the Element
 * @template {object} Props The base props for the Component
 * @template {Props} [Attrs=Props] The returned props for the Component
 * @summary The main function to get the DetailedElement
 */
type DetailElement<Tag extends Tags> = <Props extends object, Attrs extends Props = Props>(
  attrs?: DetailPropMod<Tag, Props, Attrs>,
  config?: DetailCompConfig
) => DetailedElement<Tag, Props>;
/**
 * @type DetailCompFunc
 * @summary The main function, used to dynamically grab the DCFunction
 */
type DetailCompFunc = <Tag extends Tags>(tag: Tag) => DetailElement<Tag>
/**
 * @type DetailedComponents
 * @summary Just like `styled-components`, you can also just used `detailed[tag]` | `detailed.tag`
 */
type DetailedComponents = {
  [K in Tags]: DetailElement<K>
}
/**
 * @interface Detailed
 * @summary Allows you to use either `DetailComponentFunction` or `DetailComponents` to grab a type from a single functional object
 */
interface Detailed extends DetailedComponents, DetailCompFunc {
  <Tag extends Tags>(tag: Tag): DetailElement<Tag>
}

interface DetailComponent<Tag extends Tags, Props extends object, State extends object> extends React.Component<UtilityProps<Tag, Props>, State> {
  tag: Tag;
  state: State;
  type: Tag extends Tagnames ? "HTML" : "SVG";
  constructor(props: UtilityProps<Tag, Props>);
  private makeStyled: <OuterProps extends object = Props, Statics extends object = BaseObject>(component: DetailedComponent<Tag, Props>, initialStyles: Parameters<DetailedComponent<Tag,Props>['styled']>[0], ...interpolations: Parameters<DetailedComponent<Tag,Props>['styled']>[1]) => StylizedComponent<Tag, Props, OuterProps, Statics>;
  styled: Tag extends Tagnames ? DetailedComponent<Tag, Props>['styled'] : never;
}
