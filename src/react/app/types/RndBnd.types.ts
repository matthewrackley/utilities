/**
 * @file draggable.types.ts
 * @description
 * @author Matthew Allen Rackley
 * @copyright [Matthew Rackley's Github](https://www.github.com/matthewrackley "Matthew Rackley on github.com")
 */

import React, { ComponentState } from 'react';
import { Props as RndProps, Position, Rnd } from 'react-rnd';
import { DraggableEvent } from 'react-draggable';

export = RndBnd;

declare namespace RndBnd {
  interface PositionMap {
    x: Range;
    y: Range;
  }
  interface Size {
    width: number;
    height: number;
  }
  type Range = [0, number, number, number, number, number, number, number];
  type SizeRange = {
    readonly width: Range;
    readonly height: Range;
  };
  type Percentage = 0.04 | 0.06 | 0.07 | 0.08 | 0.16 | 0.17 | 0.18 | 0.19
    | 0.27 | 0.28 | 0.29 | 0.31 | 0.38 | 0.39 | 0.41 | 0.42 | 0.49 | 0.51
    | 0.52 | 0.53 | 0.61 | 0.62 | 0.63 | 0.64 | 0.72 | 0.73 | 0.74 | 0.76
    | 0.83 | 0.84 | 0.86 | 0.87 | 0.94 | 0.96 | 0.97 | 0.98 | 0.01 | 0.02
    | 0.03 | 0.05 | 0.09 | 0.10 | 0.11 | 0.12 | 0.13 | 0.14 | 0.15 | 0.20
    | 0.21 | 0.22 | 0.23 | 0.24 | 0.25 | 0.26 | 0.30 | 0.32 | 0.33 | 0.34
    | 0.40 | 0.43 | 0.44 | 0.45 | 0.46 | 0.47 | 0.48 | 0.35 | 0.36 | 0.68
    | 0.69 | 0.70 | 0.71 | 0.65 | 0.66 | 0.67 | 0.37 | 0.50 | 0.54 | 0.55
    | 0.56 | 0.57 | 0.58 | 0.59 | 0.60 | 0.75 | 0.77 | 0.78 | 0.79 | 0.80
    | 0.81 | 0.82 | 0.85 | 0.88 | 0.89 | 0.90 | 0.91 | 0.92 | 0.93 | 0.95
    | 0.99 | 0.125 | 0.175 | 0.225 | 0.025 | 0.075 | 0.275 | 0.325 | 0.375 | 0.425 | 0.625
    | 1.00 | 0.675 | 0.525 | 0.475 | 0.575 | 0.725 | 0.775 | 0.825 | 0.875 | 0.925 | 0.975
    | keyof typeof Fractions;
  type Fraction = keyof typeof Fractions;

  const enum Fractions {
    '1/10' = 0.1,
    '1/11' = 0.09090909090909091,
    '1/12' = 0.08333333333333333,
    '1/128' = 0.0078125,
    '1/13' = 0.07692307692307693,
    '1/15' = 0.06666666666666667,
    '1/16' = 0.0625,
    '1/2' = 0.5,
    '1/28' = 0.03571428571428571,
    '1/3' = 0.3333333333333333,
    '1/32' = 0.03125,
    '1/4' = 0.25,
    '1/5' = 0.2,
    '1/6' = 0.16666666666666666,
    '1/64' = 0.015625,
    '1/7' = 0.14285714285714285,
    '1/8' = 0.125,
    '1/9' = 0.1111111111111111,
    '11/16' = 0.6875,
    '127/128' = 0.9921875,
    '13/16' = 0.8125,
    '15/16' = 0.9375,
    '2/3' = 0.6666666666666666,
    '2/5' = 0.4,
    '3/16' = 0.1875,
    '3/4' = 0.75,
    '3/5' = 0.6,
    '3/7' = 0.42857142857142855,
    '3/8' = 0.375,
    '31/32' = 0.96875,
    '5/16' = 0.3125,
    '5/8' = 0.625,
    '5/9' = 0.5555555555555556,
    '63/64' = 0.984375,
    '7/32' = 0.4375,
    '7/8' = 0.875,
    '9/16' = 0.5625,
  }

  interface Relatives {
    readonly parent: Readonly<Size> & {
      readonly bounds: Bounds;
      readonly element: ContainerElement;
    };
    child: React.Ref<React.ReactNode>;
  }

  interface Size {
    width: number;
    height: number;
  }
  interface Status {
    loading: boolean;
    errorMessage: string;
    adjustingWidth: boolean;
    adjustingHeight: boolean;
    isDragging: boolean;
  }
  interface MouseData extends Position {
    lastMouseX: number;
    lastMouseY: number;
    deltaX: number;
    deltaY: number;
    distanceX: number;
    distanceY: number;
  }

  type SetState<State> = ((state: Partial<State>) => void);
  // interface States {

  interface StateGetsSets extends RndProps, ComponentState {
    /**
     * @method setStatus
     * @description Get the status of the component
     * @param {Partial<S>} status - The status of the component
     * @returns {void} Populates `this.state` with:
     * - `loading`, `errorMessage`, `adjustingWidth`, `adjustingHeight`, `isDragging`
     */
    setStatus<S extends Status>(status: Partial<S>): void;
    /**
     * @method setSize
     * @description Get the size of the component
     * @param {Partial<S>} size - The size of the component
     * @returns {void} Populates `this.state.width` and `this.state.height`
     */
    setSize<S extends Size>(size: Partial<S>): void;
    /**
     * @method setMouseData
     * @description Get the mouseData of the component
     * @param {Partial<S>} mouseData - The mouseData of the component
     * @returns {void} Populates `this.state` with:
     * - `lastMouseX`, `lastMouseY`, `deltaX`, `deltaY`, `distanceX`, `distanceY`
     */
    setMouseData<S extends MouseData>(mouseData: Partial<S>): void;
    /**
     * @method setPosition
     * @description Get the position of the component
     * @param {Partial<S>} position - The position of the component
     * @returns {void} Populates `this.state.x` and `this.state.y`
     */
    setPosition<S extends Position>(position: Partial<S>): void;
    /**
     * @method setDimensions
     * @description Get the data of the component
     * @param {Partial<S>} dimensions - The dimensions of the component
     * @returns {void} Populates `this.state` with:
     * - `width`, `height`, `x`, `y`
     */
    setDimensions<S extends Size & Position>(dimensions: Partial<S>): void;
    /**
     * @property status
     * @description Get the status of the component
     */
    get status(): Readonly<Status>;
    /**
     * @property size
     * @description Get the size of the component
     */
    get size(): Readonly<Size>;
    /**
     * @property mouseData
     * @description Get the mouseData of the component
     */
    get mouseData(): Readonly<MouseData>;
    /**
     * @property position
     * @description Get the position of the component
     */
    get position(): Readonly<Position>;
    /**
     * @property dimensions
     * @description Get the dimensions of the component
     */
    get dimensions(): Readonly<Size & Position>;
  }
  type SizePosition = Size & Position;
  type RndBndStates = Size & Position & Status & MouseData;
  type XandY = 'topLeft' | 'topRight' | 'bottomLeft' | 'bottomRight';
  type XorY = 'top' | 'bottom' | 'left' | 'right';

  type NonVoidAny = {} | null | undefined;
  interface ContainerProps {
    children?: React.ReactNode;
  }

  interface RndBndProps extends RndProps {
    container: HTMLElement;
    rndRef: React.RefObject<Rnd>;
    parentRef: React.RefObject<ContainerElement> | null;
    childRef: React.RefObject<React.ReactNode> | null;
    getRelatives: <C extends ContainerElement>() => Relatives;
    binarySearchRange: (size: number, range: Range) => number;
    range: SizeRange;
    children?: React.ReactNode;
    onMouseMove?: (event: DraggableEvent, element?: this['rndRef']) => void;
    onClick?: (event: MouseEvent) => void;
    onDoubleClick?: (event: MouseEvent) => void;
    snapToGrid?: (position: Position) => void;
    defaultDimensions: (percents?: PercentOfParent) => DefaultDimensions;
    initialDimensions: (w: Percentage, h: Percentage) => Size & Position;
    getSize: (size: Size) => Size;
    getPosition: (position: Position) => Position;
  }
  interface Bounds {
    left: number;
    right: number;
    top: number;
    bottom: number;
  }
  type HTMLElements =
    | HTMLElement
    | HTMLDivElement
    | HTMLSpanElement
    | HTMLButtonElement
    | HTMLInputElement
    | HTMLFormElement
    | HTMLUListElement
    | HTMLLIElement
    | HTMLAnchorElement
    | HTMLTableElement
    | HTMLTableRowElement
    | HTMLTableCellElement
    | HTMLLinkElement
    | HTMLImageElement
    | HTMLParagraphElement
    | HTMLHeadingElement
    | HTMLSelectElement
    | HTMLTextAreaElement
    | HTMLOrSVGElement
    | HTMLVideoElement
    | HTMLAudioElement
    | HTMLCanvasElement
    | HTMLIFrameElement
    | HTMLMediaElement;

  type TupleOf<T, N extends number> = N extends N ? number extends N ? T[] : _TupleOf<T, N, []> : never;
  type _TupleOf<T, N extends number, R extends unknown[]> = R['length'] extends N ? R : _TupleOf<T, N, [T, ...R]>;
  type HTMLChildren<E extends [...Element[]] | undefined = undefined> = E extends [...infer El extends Element[]]
    ? [...El]['length'] extends 1
    ? El[number]
    : HTMLCollectionOf<[...El][number]>
    : HTMLCollection;

  interface RndBndElementCallback {
    <T extends ((...args: any) => any)>(element: ContainerElement, callback?: T): T extends (...args: any) => infer R ? R : never;
    <T>(element: ContainerElement): any;
  }

  /**
   * @type ContainerElement - A Container Element. IE: A div, span, form, table, etc.
   * @details - The elements that contain and implement the draggable element
   * - Can be the parent or the child.
   * HTMLDivElement | HTMLSpanElement | HTMLImageElement | HTMLFormElement | HTMLTableElement | HTMLMediaElement | HTMLMenuElement | HTMLIFrameElement | HTMLEmbedElement
   */
  type ContainerElement =
    | HTMLDivElement
    | HTMLSpanElement
    | HTMLImageElement
    | HTMLFormElement
    | HTMLTableElement
    | HTMLMediaElement
    | HTMLMenuElement
    | HTMLIFrameElement
    | HTMLEmbedElement;
  interface PercentOfParent {
    minWidth?: Percentage;
    minHeight?: Percentage;
    maxWidth?: Percentage;
    maxHeight?: Percentage;
  }
  interface DefaultDimensions {
    minWidth: number;
    minHeight: number;
    maxWidth: number;
    maxHeight: number;
  }
  type ChildComponent = React.ReactElement | React.ReactPortal | Iterable<ChildComponent>
  type ClassHOCFactory = <P = {}, X = {}>(
    Component: React.ComponentType<P>,
    additionalProps: Partial<X>,
  ) => React.ComponentPropsWithRef;
}

function withMyHOC<T>(Component: ComponentType<T>) {
  // The returned component also needs to be generic and handle refs
  const WithMyHOC = forwardRef<HTMLElement, T>((props, ref) => {
    // Render the wrapped component with the passed props and ref
    return <Component ref={ ref } {...props} />;
  });

WithMyHOC.displayName = `WithMyHOC(${getDisplayName(Component)})`;

return WithMyHOC;
}

// Function to get the display name of a component
function getDisplayName(WrappedComponent: ComponentType<any>): string {
  return WrappedComponent.displayName || WrappedComponent.name || 'Component';
}

// Example usage
interface MyComponentProps {
  // Define your prop types here
}

class MyComponent extends React.Component<MyComponentProps & { forwardedRef: Ref<HTMLElement> }> {
  render() {
    // Access the ref using this.props.forwardedRef
    return <div ref={ this.props.forwardedRef }> Hello, World! < /div>;
  }
}

// Wrap MyComponent with the HOC
const MyComponentWithHOC = withMyHOC(MyComponent);

// Parent component that renders the enhanced component and assigns a ref
class ParentComponent extends React.Component {
  myComponentRef = React.createRef<HTMLElement>();

  componentDidMount() {
    console.log(this.myComponentRef.current); // You can access the DOM node here
  }

  render() {
    // Pass the ref as a prop named "forwardedRef"
    return <MyComponentWithHOC ref={ this.myComponentRef } />;
  }
}
