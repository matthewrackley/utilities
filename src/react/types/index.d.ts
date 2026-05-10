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

type FullMap = "default" | "primary" | "secondary" | "fallback"  | "inverse" | "accent" | "border" | "shadow" | "hover";
interface Variant {
  variant: FullMap
}

type StyleDeclaration<Key extends keyof CSSStyleDeclaration> = {
  [K in Key]: CSSStyleDeclaration[K]
} & {
  getPropertyValue: (property: string) => string;
  getBoundingClientRect: () => DOMRect;
}
type StyleKey<Keys extends (keyof CSSStyleDeclaration)[] | (keyof CSSStyleDeclaration)> = Keys extends (keyof CSSStyleDeclaration)[] ? Keys[number] : Keys;
type StyleKeys<Keys extends (keyof CSSStyleDeclaration)[] | (keyof CSSStyleDeclaration)> = Keys extends (keyof CSSStyleDeclaration)[] ? Keys : Keys[];
type DeclaredStyle<Key extends (keyof CSSStyleDeclaration) | (keyof CSSStyleDeclaration)[]> = StyleDeclaration<StyleKey<Key>>;
type ComponentHandler<T extends Element | React.Component<any, React.ComponentState>, E extends Element> = T extends infer C extends React.Component<any, React.ComponentState> ? ((el: C) => E) : never;
type ComponentHandlerArray<
  T extends Element | React.Component<any, React.ComponentState>,
  K extends keyof CSSStyleDeclaration | (keyof CSSStyleDeclaration)[],
  E extends Element
> = T extends infer C extends React.Component<any, React.ComponentState>
  ? [handler: ((el: C) => E), ...propertyValues: K extends (keyof CSSStyleDeclaration)[] ? K : never]
  : never;

type UseComputedStyles = <
  T extends Element | React.Component<Props, React.ComponentState>,
  K extends keyof CSSStyleDeclaration | (keyof CSSStyleDeclaration)[],
  Props extends object,
  E extends Element
>(
  ref: React.RefObject<T>,
  ...propertyValues: T extends Element ? K[] : ComponentHandlerArray<T, K, E>
) => T extends infer L extends Element ? [DeclaredStyle<K>, L] : [DeclaredStyle<K>, E, T];

type HandleCountry = <E extends HTMLSelectElement | HTMLInputElement>(event: React.ChangeEvent<E>) => void;
type UseCountry = (initialCountry?: RegionCode) => [Country<RegionCode>, HandleCountry];

//___=============================>              <============================___\\
//___|| ==================== ||      FILEVIEWER      || =================== ||___\\
//___=============================>              <============================___\\

type FileList = string[];

interface FileData {
  directory: string;
  files: FileList;
}
interface Size {
  width: number;
  height: number;
}
interface CSSDefault {
  width: CSSSize;
  height: CSSSize;
  size: CSSSize;
}
interface DraggableState {
  width: CSSSize;
  height: CSSSize;
  x: number;
  y: number;
  loading: boolean;
  locked: boolean;
  errorMessage: string;
  components: React.ComponentType<any>[];
  adjustingWidth: boolean;
  adjustingHeight: boolean;
  lastMouseX: number;
  isDragging: boolean;
  lastMouseY: number;
  deltaX: number;
  deltaY: number;
  distanceL: number;
  distanceT: number;
  distanceR: number;
  distanceB: number;
  currentX: number;
  currentY: number;
}
interface Percents {
  width: Percentage;
  height: Percentage;
}
type HandleDelta = (event: DragEvent, delta: ResizableDelta) => void;
type DragEvent = React.MouseEvent<HTMLDivElement, MouseEvent> | React.TouchEvent<HTMLDivElement> | MouseEvent | TouchEvent;
type XandY = 'topLeft' | 'topRight' | 'bottomLeft' | 'bottomRight';
type XorY = 'top' | 'bottom' | 'left' | 'right';
type FVProps = {
  id: string;
  parent: ParentData;
  ld: LDData;
  child: ElementData;
  locked: boolean;
  childRef: React.RefObject<HTMLDivElement>;
  minSize?: Percents | 'fit-content';
  maxSize?: Percents | 'fill-parent' | 'fit-content';
  defaultSize?: Percents | Size | 'fit-content';
  children: React.ReactNode;
};

interface StyledRndProps extends RndProps {
  lockClassName?: string;
  className?: string;
  style?: React.CSSProperties;
  children: React.ReactNode;
  $defaultCss: {
    position: CSSPosition;
    display: CSSDisplay;
    'max-width': CSSSize;
    'min-width': CSSSize;
  };
}
interface DefaultData {
  width: CSSSize | string;
  height: CSSSize | string;
  x: number;
  y: number;
  css?: {
    position: CSSPosition;
    display: CSSDisplay;
    'max-width': CSSSize;
    'min-width': CSSSize;
  };
}
interface ParentData {
  bounds: Bounds;
  size: Size;
  ref: React.RefObject<HTMLDivElement>;
}
type Direction = import('re-resizable').ResizeDirection;

type DraggableEvent = import('react-draggable').DraggableEvent;
type RndProps = import('react-rnd').Props;
type DraggableData = import('react-rnd').DraggableData;
type RndResizeCallback = import('react-rnd').RndResizeCallback;
type RndDragCallback = import('react-rnd').RndDragCallback;
type Position = import('react-rnd').Position;
type ResizableDelta = import('react-rnd').ResizableDelta;
type HandleClasses = import('react-rnd').HandleClasses;

//___=============================>               <============================___\\
//___|| ==================== ||      RESIZE AREA      || =================== ||___\\
//___=============================>               <============================___\\

type Proportion = '1/8' | '1/4' | '1/3' | '3/8' | '1/2' | '5/8' | '2/3' | '3/4' | '7/8' | '1';
type Shape = 'square' | 'rectangle' | 'title-box' | 'column' | 'row' | 'pillar';
interface SectionAttr {
  $shape: Shape;
  ref: React.RefObject<HTMLDivElement>;
  $proportion?: Proportion;
  $height?: string | number;
  $width?: string | number;
  $__count: number;
  get '$data-count'(): number;
  $maxCount?: number;
  $handleProportion?: <P extends Proportion = '1'>(number: number, proportion?: P) => number;
}
interface SectionProps {
  $shape: Shape;
  $parentRef?: React.RefObject<HTMLDivElement>;
  $childRef?: React.RefObject<HTMLDivElement>;
  $lockClassName?: string;
  get '$data-count'(): number;
  $proportion?: Proportion;
  $counter?: CounterCreator;
  children?: React.ReactNode;
  $handleProportion?: <P extends Proportion = '1'>(number: number, proportion?: P) => number;
}
type CounterCreator = typeof counter;
type Counter = () => number;

interface ChildProps {
  parentWidth: ParentData['size']['width'];
  parentHeight: ParentData['size']['height'];
  parentRef: React.RefObject<HTMLDivElement>;
}

type SimpleCSSSize = `${number}px` | `${number}%`;
interface ParentData {
  bounds: Bounds;
  size: Size;
  ref: React.RefObject<HTMLDivElement>;
}
interface LDHandleProps {
  className?: string;
  $lddata: LDData;
  children?: React.ReactNode;
  $variant?: FullMap;
}

interface LDData {
  id: string;
  width: CSSMeasurement;
  height: CSSMeasurement;
  transform: `${number}px`;
  left: number;
  top: number;
  bottom: number;
  right: number;
}
interface ElementData {
  id?: string;
  width: number;
  height: number;
  left: number;
  top: number;
  bottom: number;
  right: number;
  rect: DOMRect;
};

//___=============================>                    <============================___\\
//___|| ==================== ||      COUNTRY SELECTOR      || =================== ||___\\
//___=============================>                    <============================___\\

interface ZoneProps {
  zones: ZonesOf<ZoneRegions>;
  region: RegionCode;
  Select?: IStyledComponent<"web", Substitute<Substitute<Substitute<React.DetailedHTMLProps<React.SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>, Omit<React.DetailedHTMLProps<React.SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>, 'ref'> & {
    ref?: ((instance: HTMLSelectElement | null) => void) | React.RefObject<HTMLSelectElement> | null | undefined;
  }>, StyledSelectZoneProps>, StyledSelectZoneProps>>;
  Option?: IStyledComponent<"web", Substitute<Substitute<Substitute<React.DetailedHTMLProps<React.OptionHTMLAttributes<HTMLOptionElement>, HTMLOptionElement>, Omit<React.DetailedHTMLProps<React.OptionHTMLAttributes<HTMLOptionElement>, HTMLOptionElement>, 'ref'> & {
    ref?: ((instance: HTMLOptionElement | null) => void) | React.RefObject<HTMLOptionElement> | null | undefined;
  }>, StyledOptionZoneProps>, StyledOptionZoneProps>>;
  H3?: IStyledComponent<"web", Substitute<Substitute<Substitute<React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>, Omit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>, 'ref'> & {
    ref?: ((instance: HTMLHeadingElement | null) => void) | React.RefObject<HTMLHeadingElement> | null | undefined;
  }>, StyledH3Props>, StyledH3Props>>;
}
type DefaultPropsZone = Required<Omit<ZoneProps, "zones" | "region">>;

interface StyledSelectZoneProps {
  variant: FullMap;
  value: ZonesOf<ZoneRegions>[number];
  key: ZonesOf<ZoneRegions>[number];
  theme: typeof Theme;
  children: React.ReactNode;
}
interface StyledOptionZoneProps {
  variant: FullMap;
  value: ZonesOf<ZoneRegions>[number];
  key: ZonesOf<ZoneRegions>[number];
  theme: typeof Theme;
  children: React.ReactNode;
}
interface StyledH3Props {
  variant: FullMap;
  children: React.ReactNode;
}

interface CountryDisplayProps {
  region: RegionCode;
  displayArray: CDisplay[];
}
const enum CDisplay {
  Flag,
  Name,
  Local,
  Foreign,
  Context,
  DialCode,
  RegionCode,
  Seperator = '|',
  Dash = '-',
}
type DefaultPropsCountrySelector = Required<CountrySelectorProps>;
interface CountrySelectorProps {
  className?: string;
  region?: RegionCode;
  children?: React.ReactNode;
  Select?: IStyledComponent<"web", Substitute<Substitute<Substitute<React.DetailedHTMLProps<React.SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>, Omit<React.DetailedHTMLProps<React.SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>, 'ref'> & {
    ref?: ((instance: HTMLSelectElement | null) => void) | React.RefObject<HTMLSelectElement> | null | undefined;
  }>, StyledSelectProps>, StyledSelectProps>>;
  Option?: IStyledComponent<"web", Substitute<Substitute<Substitute<React.DetailedHTMLProps<React.OptionHTMLAttributes<HTMLOptionElement>, HTMLOptionElement>, Omit<React.DetailedHTMLProps<React.OptionHTMLAttributes<HTMLOptionElement>, HTMLOptionElement>, 'ref'> & {
    ref?: ((instance: HTMLOptionElement | null) => void) | React.RefObject<HTMLOptionElement> | null | undefined;
  }>, StyledOptionProps>, StyledOptionProps>>;
  Container?: IStyledComponent<"web", Substitute<Substitute<Substitute<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, Omit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, 'ref'> & {
    ref?: ((instance: HTMLDivElement | null) => void) | React.RefObject<HTMLDivElement> | null | undefined;
  }>, StyledContainerProps>, StyledContainerProps>>;
};
interface StyledSelectProps {
  variant: FullMap;
  value: RegionCode;
  key: RegionCode;
  theme: typeof Theme;
  children: React.ReactNode;
}
interface StyledOptionProps {
  variant: FullMap;
  value: RegionCode;
  key: RegionCode;
  theme: typeof Theme;
  children: React.ReactNode;
}
interface StyledContainerProps {
  variant: FullMap;
  children: React.ReactNode;
}

interface FileViewerData {
  id: string;
  component: RenderableComponent;
}
type RenderableComponent = 'Text' | 'Image' | 'Video';
