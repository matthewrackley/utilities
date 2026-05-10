/**
 * @file draggable.types.ts
 * @description
 * @author Matthew Allen Rackley
 * @copyright [Matthew Rackley's Github](https://www.github.com/matthewrackley "Matthew Rackley on github.com")
 */

type RndProps = import('react-rnd').Props
type Position = import('react-rnd').Position
type Rnd = import('react-rnd').Rnd
type DraggableEvent = import('react-draggable').DraggableEvent
type Ratio = Percentage | Fraction
interface PositionMap {
  x: SizeRange
  y: SizeRange
}
interface Size {
  width: number
  height: number
}
type SizeRange = [
  number,
  number,
  number,
  number,
  number,
  number,
  number,
  0,
  number,
  number,
  number,
  number,
  number,
  number,
  number,
]
interface SizeRanges {
  readonly width: SizeRange
  readonly height: SizeRange
}
type Percentage =
  | 0.04
  | 0.06
  | 0.07
  | 0.08
  | 0.16
  | 0.17
  | 0.18
  | 0.19
  | 0.27
  | 0.28
  | 0.29
  | 0.31
  | 0.38
  | 0.39
  | 0.41
  | 0.42
  | 0.49
  | 0.51
  | 0.52
  | 0.53
  | 0.61
  | 0.62
  | 0.63
  | 0.64
  | 0.72
  | 0.73
  | 0.74
  | 0.76
  | 0.83
  | 0.84
  | 0.86
  | 0.87
  | 0.94
  | 0.96
  | 0.97
  | 0.98
  | 0.01
  | 0.02
  | 0.03
  | 0.05
  | 0.09
  | 0.1
  | 0.11
  | 0.12
  | 0.13
  | 0.14
  | 0.15
  | 0.2
  | 0.21
  | 0.22
  | 0.23
  | 0.24
  | 0.25
  | 0.26
  | 0.3
  | 0.32
  | 0.33
  | 0.34
  | 0.4
  | 0.43
  | 0.44
  | 0.45
  | 0.46
  | 0.47
  | 0.48
  | 0.35
  | 0.36
  | 0.68
  | 0.69
  | 0.7
  | 0.71
  | 0.65
  | 0.66
  | 0.67
  | 0.37
  | 0.5
  | 0.54
  | 0.55
  | 0.56
  | 0.57
  | 0.58
  | 0.59
  | 0.6
  | 0.75
  | 0.77
  | 0.78
  | 0.79
  | 0.8
  | 0.81
  | 0.82
  | 0.85
  | 0.88
  | 0.89
  | 0.9
  | 0.91
  | 0.92
  | 0.93
  | 0.95
  | 0.99
  | 0.125
  | 0.175
  | 0.225
  | 0.025
  | 0.075
  | 0.275
  | 0.325
  | 0.375
  | 0.425
  | 0.625
  | 1.0
  | 0.675
  | 0.525
  | 0.475
  | 0.575
  | 0.725
  | 0.775
  | 0.825
  | 0.875
  | 0.925
  | 0.975
  | (typeof Fractions)[Fraction]

type Fraction = keyof typeof Fractions

enum Fractions {
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
    readonly bounds: Bounds
    readonly element: ContainerElement
  }
  child: import('react').Ref<import('react').ReactNode>
  container: Readonly<Size> &
    Readonly<Position> & {
      readonly bounds: Bounds
    }
}
type Decimals =
  | 0.01
  | 0.02
  | 0.03
  | 0.04
  | 0.05
  | 0.06
  | 0.07
  | 0.08
  | 0.09
  | 0.1
  | 0.11
  | 0.12
  | 0.13
  | 0.14
  | 0.15
  | 0.16
  | 0.17
  | 0.18
  | 0.19
  | 0.2
  | 0.21
  | 0.22
  | 0.23
  | 0.24
  | 0.25
  | 0.26
  | 0.27
  | 0.28
  | 0.29
  | 0.3
  | 0.31
  | 0.32
  | 0.33
  | 0.34
  | 0.35
  | 0.36
  | 0.37
  | 0.38
  | 0.39
  | 0.4
  | 0.41
  | 0.42
  | 0.43
  | 0.44
  | 0.45
  | 0.46
  | 0.47
  | 0.48
  | 0.49
  | 0.5
  | 0.51
  | 0.52
  | 0.53
  | 0.54
  | 0.55
  | 0.56
  | 0.57
  | 0.58
  | 0.59
  | 0.6
  | 0.61
  | 0.62
  | 0.63
  | 0.64
  | 0.65
  | 0.66
  | 0.67
  | 0.68
  | 0.69
  | 0.7
  | 0.71
  | 0.72
  | 0.73
  | 0.74
  | 0.75
  | 0.76
  | 0.77
  | 0.78
  | 0.79
  | 0.8
  | 0.81
  | 0.82
  | 0.83
  | 0.84
  | 0.85
  | 0.86
  | 0.87
  | 0.88
  | 0.89
  | 0.9
  | 0.91
  | 0.92
  | 0.93
  | 0.94
  | 0.95
  | 0.96
  | 0.97
  | 0.98
  | 0.99
  | 1.0

interface Size {
  width: number
  height: number
}
interface Status {
  loading: boolean
  errorMessage: string
  adjustingWidth: boolean
  adjustingHeight: boolean
  isDragging: boolean
}
interface MouseData {
  currentX: number
  currentY: number
  lastMouseX: number
  lastMouseY: number
  deltaX: number
  deltaY: number
  distanceL: number
  distanceT: number
  distanceR: number
  distanceB: number
}
interface RndBndElements<T extends number> {
  count: T
  elements: RndBndElement[]
}
interface RndBndElement {
  left: number
  right: number
  top: number
  bottom: number
  width: number
  height: number
}

type SetState<State> = (state: Partial<State>) => void
// interface States {

interface StateGetsSets extends RndProps {
  /**
   * @method setStatus
   * @description Get the status of the component
   * @param {Partial<S>} status - The status of the component
   * @returns {void} Populates `this.state` with:
   * - `loading`, `errorMessage`, `adjustingWidth`, `adjustingHeight`, `isDragging`
   */
  setStatus<S extends Status>(status: Partial<S>): void
  /**
   * @method setSize
   * @description Get the size of the component
   * @param {Partial<S>} size - The size of the component
   * @returns {void} Populates `this.state.width` and `this.state.height`
   */
  setSize<S extends Size>(size: Partial<S>): void
  /**
   * @method setMouseData
   * @description Get the mouseData of the component
   * @param {Partial<S>} mouseData - The mouseData of the component
   * @returns {void} Populates `this.state` with:
   * - `lastMouseX`, `lastMouseY`, `deltaX`, `deltaY`, `distanceX`, `distanceY`
   */
  setMouseData<S extends MouseData>(mouseData: Partial<S>): void
  /**
   * @method setPosition
   * @description Get the position of the component
   * @param {Partial<S>} position - The position of the component
   * @returns {void} Populates `this.state.x` and `this.state.y`
   */
  setPosition<S extends Position>(position: Partial<S>): void
  /**
   * @method setDimensions
   * @description Get the data of the component
   * @param {Partial<S>} dimensions - The dimensions of the component
   * @returns {void} Populates `this.state` with:
   * - `width`, `height`, `x`, `y`
   */
  setDimensions<S extends Size & Position>(dimensions: Partial<S>): void
  /**
   * @property status
   * @description Get the status of the component
   */
  get status(): Readonly<Status>
  /**
   * @property size
   * @description Get the size of the component
   */
  get size(): Readonly<Size>
  /**
   * @property mouseData
   * @description Get the mouseData of the component
   */
  get mouseData(): Readonly<MouseData>
  /**
   * @property position
   * @description Get the position of the component
   */
  get position(): Readonly<Position>
  /**
   * @property dimensions
   * @description Get the dimensions of the component
   */
  get dimensions(): Readonly<Size & Position>
}
type SizePosition = Size & Position
type RndBndStates = Size & Position & Status & MouseData
type XandY = 'topLeft' | 'topRight' | 'bottomLeft' | 'bottomRight'
type XorY = 'top' | 'bottom' | 'left' | 'right'

type NonVoidAny = {} | null | undefined
interface ContainerProps {
  children?: import('react').ReactNode
}

/**
 * Represents the props for the RndBnd component.
 */
interface RndBndProps extends RndProps {
  [x: string]: any
  /**
   * @method setStatus
   * @description Get the status of the component
   * @param {Partial<S>} status - The status of the component
   * @returns {void} Populates `this.state` with:
   * - `loading`, `errorMessage`, `adjustingWidth`, `adjustingHeight`, `isDragging`
   */
  setStatus<S extends Status>(status: Partial<S>): void
  /**
   * @method setSize
   * @description Get the size of the component
   * @param {Partial<S>} size - The size of the component
   * @returns {void} Populates `this.state.width` and `this.state.height`
   */
  setSize<S extends Size>(size: Partial<S>): void
  /**
   * @method setMouseData
   * @description Get the mouseData of the component
   * @param {Partial<S>} mouseData - The mouseData of the component
   * @returns {void} Populates `this.state` with:
   * - `lastMouseX`, `lastMouseY`, `deltaX`, `deltaY`, `distanceX`, `distanceY`
   */
  setMouseData<S extends MouseData>(mouseData: Partial<S>): void
  /**
   * @method setPosition
   * @description Get the position of the component
   * @param {Partial<S>} position - The position of the component
   * @returns {void} Populates `this.state.x` and `this.state.y`
   */
  setPosition<S extends Position>(position: Partial<S>): void
  /**
   * @method setDimensions
   * @description Get the data of the component
   * @param {Partial<S>} dimensions - The dimensions of the component
   * @returns {void} Populates `this.state` with:
   * - `width`, `height`, `x`, `y`
   */
  setDimensions<S extends Size & Position>(dimensions: Partial<S>): void
  /**
   * @property status
   * @description Get the status of the component
   */
  get status(): Readonly<Status>
  /**
   * @property size
   * @description Get the size of the component
   */
  get size(): Readonly<Size>
  /**
   * @property mouseData
   * @description Get the mouseData of the component
   */
  get mouseData(): Readonly<MouseData>
  /**
   * @property position
   * @description Get the position of the component
   */
  get position(): Readonly<Position>
  /**
   * @property dimensions
   * @description Get the dimensions of the component
   */
  get dimensions(): Readonly<Size & Position>
  /**
   * @property {HTMLElement} container
   * @description Get the container element
   */
  containerElement: HTMLElement
  /**
   * @property {Rnd} rnd
   * @description The Rnd element
   */
  rnd: Rnd
  /**
   * @property {import('react').RefObject<ContainerElement>}
   * @description Get the parent element
   */
  parentRef: import('react').RefObject<ContainerElement> | null
  /**
   * @property {import('react').RefObject<import('react').ReactNode>}
   * @description Get the child element
   */
  childRef: import('react').RefObject<import('react').ReactNode> | null
  /**
   * @property binarySearchRange
   * @description Get the binary search range of the component.
   * @param {number} size - The size of the component.
   * @param {Range} range - The range of the component.
   * @returns {number} The binary search range.
   */
  binarySearchRange(size: number, range: Range): number
  /**
   * @property {RndBnd.SizeRange} range
   * @description Get the range of the component.
   */
  range: SizeRange
  /**
   * @property {import('react').ReactNode} children
   * @description Get the children of the component.
   */
  children?: import('react').ReactNode
  /**
   * @property onMouseMove
   * @description Event handler for mouse move event.
   * @param {DraggableEvent} event - The mouse event.
   * @param {this['rndRef']} element - The Rnd element.
   */
  onMouseMove?(event: DraggableEvent, element?: Rnd): void
  /**
   * @property onClick
   * @description Event handler for click event.
   * @param {MouseEvent} event - The mouse event.
   */
  onClick?(event: MouseEvent): void
  /**
   * @property onDoubleClick
   * @description Event handler for double click event.
   * @param {MouseEvent} event - The mouse event.
   */
  onDoubleClick?(event: MouseEvent): void
  /**
   * @property snapToGrid
   * @description Snaps the position to the grid.
   * @param {Position} position - The position to snap.
   */
  snapToGrid?(position: Position): void
  /**
   * @property defaultDimensions
   * @description Calculates the default dimensions.
   * @param {PercentOfParent} percents - The percentage of the parent.
   * @returns {DefaultDimensions} The default dimensions.
   */
  defaultDimensions(
    this: import('react').Component<RndBndProps, RndBndStates>,
    percents?: PercentOfParent
  ): DefaultDimensions

  /**
   * @property {DefaultDimensions} defaults
   * @description The default dimensions.
   */
  defaults: DefaultDimensions
  /**
   * @property initialDimensions
   * @description Calculates the initial dimensions.
   * @param {Percentage} w - The width percentage.
   * @param {Percentage} h - The height percentage.
   * @returns {Size & Position} The initial dimensions.
   */
  initialDimensions(w?: Percentage, h?: Percentage): Size & Position
  /**
   * @property {Size & Position} initials
   * @description The initial dimensions.
   */
  initials: Size & Position
  /**
   * @property getSize
   * @description Gets the size.
   * @param {Size} size - The size.
   * @returns {Size} The size.
   */
  getSize(size: Size): Size
  /**
   * @property getPosition
   * @description Gets the position.
   * @param {Position} position - The position.
   * @returns {Position} The position.
   */
  getPosition(position: Position): Position
  /**
   * @property {Ratio} [initialWidth=0.55]
   * @description The initial width.
   * @default 0.55
   */
  initialWidth: Ratio
  /**
   * @property {Ratio} [initialHeight=0.55]
   * @description The initial height.
   * @default 0.55
   */
  initialHeight: Ratio
  /**
   * @property {Ratio} [maxWidth=1]
   * @description The maximum width.
   * @default 1
   */
  maxWidth: Ratio
  /**
   * @property {Ratio} [maxHeight=1]
   * @description The maximum height.
   * @default 1
   */
  maxHeight: Ratio
  /**
   * @property {Ratio} [minHeight=0.225]
   * @description The minimum height.
   * @default 0.225
   */
  minHeight: Ratio
  /**
   * @property {Ratio} [minWidth=0.225]
   * @description The minimum width.
   * @default 0.225
   */
  minWidth: Ratio
  /**
   * @property {RndBndElement[]} elements
   * @description The elements/childrens dimensions.
   * @default []
   */
  elements: RndBndElement[]
  /**
   * @method setElement
   * @description Sets an element.
   * @param {RndBndElement} element - The element.
   */
  setElement<T extends number>(element: RndBndElement): RndBndElements<T>
}
interface Bounds {
  left: number
  right: number
  top: number
  bottom: number
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
  | HTMLMediaElement

type TupleOf<T, N extends number> = N extends N
  ? number extends N
    ? T[]
    : _TupleOf<T, N, []>
  : never
type _TupleOf<T, N extends number, R extends unknown[]> = R['length'] extends N
  ? R
  : _TupleOf<T, N, [T, ...R]>
type HTMLChildren<E extends [...Element[]] | undefined = undefined> = E extends [
  ...infer El extends Element[],
]
  ? [...El]['length'] extends 1
    ? El[number]
    : HTMLCollectionOf<[...El][number]>
  : HTMLCollection

interface RndBndElementCallback {
  <T extends (...args: any) => any>(
    element: ContainerElement,
    ...args: any
  ): ReturnType<this> extends infer R ? R : never
  <T>(element: ContainerElement): any
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
  | HTMLEmbedElement
interface PercentOfParent {
  minWidth?: Ratio
  minHeight?: Ratio
  width?: Ratio
  height?: Ratio
  maxWidth?: Ratio
  maxHeight?: Ratio
}
interface DefaultDimensions {
  minWidth: number
  minHeight: number
  width: number
  height: number
  maxWidth: number
  maxHeight: number
}

type ChildComponent =
  | import('react').ReactElement
  | import('react').ReactPortal
  | Iterable<ChildComponent>
type ClassHOCFactory = <P = {}, X = {}, S = {}>(
  Component: import('react').ComponentType<P>,
  normalProps: P,
  additionalProps: X,
  states?: S
) => import('react').Component<P & X, S>

// Example usage
interface MyComponentProps {
  // Define your prop types here
}

type ExtendedProps<
  T extends import('react').ComponentClass<any, any> | keyof import('react').ComponentState,
  Props = {},
> = T extends import('react').ComponentClass<infer P, infer S>
  ? import('react').ComponentProps<T> & Props
  : never
type ExtendedState<
  T extends import('react').ClassType<any, any, any>,
  State extends object = {},
> = T extends import('react').ClassType<infer P, infer S, infer SS>
  ? ComponentState<P, T> & State
  : {}
type ComponentState<
  P,
  T extends
    | import('react').Component<P, import('react').ComponentState>
    | import('react').ComponentClass<P, import('react').ComponentState>,
> = T extends import('react').Component<P, infer S>
  ? S
  : T extends import('react').ComponentClass<P, infer S>
    ? S
    : {}

/*class MyNewComponent<P = {}, S = {}> extends MyWrappedComponent<P, S> {
  constructor(props: P, ) {
    super({ additional: props});
  }
}*/
