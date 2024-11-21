/**
 * @file fileViewer.tsx
 * @description
 * @author Matthew Allen Rackley
 * @copyright [Matthew Rackley's Github](https://www.github.com/matthewrackley "Matthew Rackley on github.com")
 */

import React from 'react';
import { Rnd, DraggableData, type RndResizeCallback, type RndDragCallback, type RndResizeStartCallback, type RndDragEvent, Position, Props as RndProps } from 'react-rnd';
import RndBnd, { Fractions } from './types/RndBnd.types';
import { DraggableEvent } from 'react-draggable';
import { ResizeDirection, Resizable } from 're-resizable';
import { Route, Routes, useParams } from 'react-router-dom';
import ResizeArea, { type SimpleCSSSize, type ChildProps, ParentSize } from './resizeArea';
import DynamicLoader from './dynamicLoader';

type Percentage = RndBnd.Percentage;
type Bounds = RndBnd.Bounds;
type ChildComponent = RndBnd.ChildComponent;
type DefaultDimensions = RndBnd.DefaultDimensions;
type MouseData = RndBnd.MouseData;
type ContainerElement = RndBnd.ContainerElement;
type PercentOfParent = RndBnd.PercentOfParent;
type Range = RndBnd.Range;
type RndBndProps = RndBnd.RndBndProps;
type StateGetsSets = RndBnd.StateGetsSets;
type Status = RndBnd.Status;
type Size = RndBnd.Size;
type RndBndStates = RndBnd.RndBndStates;
type RndBndElementCallback = RndBnd.RndBndElementCallback;
type Fraction = RndBnd.Fraction;




export type FileList = string[];
export interface FileData {
  directory: string;
  files: FileList;
}


function setStatus<P = {}, T = {}>(this: Rnd, status: Partial<Status>) {
  this.setState({ ...this.state, ...status });
}



function withExtraProps(
  WrappedComponent: typeof Rnd,
  extraProps: RndBndProps
): React.ComponentType<RndProps & RndBndProps> {
  const rndRef = React.createRef;
  return class extends React.Component<RndProps & RndBndProps> {
    ref: React.Ref<Rnd>;
    constructor(props: RndProps & RndBndProps) {
      super(props);
      this.ref = React.createRef<Rnd>();
    }
    render() {

      this.ref;

      const combinedProps = { ...this.props, ...extraProps };
      return (
        <WrappedComponent
          ref={ this.ref }
        />
      )
    }
  };
}
// We must secure the existence o


//T extends 'bounds' ? Bounds : T extends 'parent' | 'child' ? HTMLElement : T extends 'children' ? HTMLElement[] : T extends 'size' ? Size : T extends 'position' ? Position : T extends ((...args: any) => infer V) ? V : void;

export const getBounds = (element: ContainerElement) => {

  const boundings = element.getBoundingClientRect();
  const bounds = {} as Bounds;
  bounds.left = boundings.left;
  bounds.right = boundings.right;
  bounds.top = boundings.top;
  bounds.bottom = boundings.bottom;
  return bounds;
}
export function getMouseData<RB extends RndBndProps>(this: React.Component<RB, RndBndStates>, ev: DraggableEvent, ref: React.RefObject<Rnd> = this.props.rndRef!): MouseData {
  let mouseData = {} as MouseData;
  const el = ref.current!.getSelfElement()!;
  const { left: parentLeft, right: parentRight, top: parentTop, bottom: parentBottom } = getBounds(el);
  const mouseX = (ev as React.MouseEvent).clientX;
  const mouseY = (ev as React.MouseEvent<HTMLElement>).clientY;
  mouseData.lastMouseX = this.state.lastMouseX;
  mouseData.lastMouseY = this.state.lastMouseY;
  mouseData.deltaX = mouseX - mouseData.lastMouseX;
  mouseData.deltaY = mouseY - mouseData.lastMouseY;
  mouseData.distanceX = parentRight - parentLeft;
  mouseData.distanceY = parentBottom - parentTop;
  const width = this.state.width;
  const height = this.state.height;
  const x = this.state.x;
  const y = this.state.y;
  return mouseData;
}
// The box is the container that the emelent is adjusting
// ┏━━━━━━━━━━━━━━━━━━━━┓
// ┃<          ^|^     >┃ x = x&y location of the mouse pointer
// ┃------------x-------┃ I want to measure the difference for the sides to figure out the distance between the mouse and the sides
// ┃leftDistance|      >┃The x to the left, top, right, and bottom borders
// ┃<           |       ┃
// ┃            |       ┃
// ┗━━━━━━━━━━━━━━━━━━━━┛
// Get the distance between the mouse and the sides of the box.
// const leftDistance = x - left;
// const rightDistance = right - x;
// const topDistance = y - top;
// const bottomDistance = bottom - y;
// const isDragging = true;
// const adjustingWidth = false;
// const adjustingHeight = false;
// const loading = false;
// const errorMessage = '';

// This can be done by:







const stateSetters: StateGetsSets = {
  setMouseData: function (mouseData: Partial<MouseData>) {
    this.setState({ ...this.state, ...mouseData });
  },
  setPosition: function (position: Partial<Position>) {
    this.setState({ ...this.state, ...position });
  },
  setSize: function (size: Partial<Size>) {
    this.setState({ ...this.state, ...size });
  },
  setStatus: function (status: Partial<Status>) {
    this.setState({ ...this.state, ...status });
  },
  setDimensions: function (dimensions: Partial<Size & Position>) {
    this.setState({ ...this.state, ...dimensions });
  },
  get status() {
    return {
      loading: this.state.loading,
      errorMessage: this.state.errorMessage,
      adjustingWidth: this.state.adjustingWidth,
      adjustingHeight: this.state.adjustingHeight,
      isDragging: this.state.isDragging
    } as Status;
  },
  get size() {
    return { width: this.state.width, height: this.state.height } as Size;
  },
  get position() {
    return { x: this.state.x, y: this.state.y } as Position;
  },
  get mouseData() {
    return {
      lastMouseX: this.state.lastMouseX,
      lastMouseY: this.state.lastMouseY,
      deltaX: this.state.deltaX,
      deltaY: this.state.deltaY,
      distanceX: this.state.distanceX,
      distanceY: this.state.distanceY
    } as MouseData;
  },
  get dimensions() {
    return { ...this.size, ...this.position } as Size & Position;
  }

}

// Create a typeguard to check that a property is an actual reference to an objec and not null or undefined
function isContainerProps(obj: any): obj is RndBnd.ContainerProps {
  return obj !== null && obj !== undefined && obj instanceof HTMLElement;
}
// Create a typeguard to check that a property is an actual React.RefObject<ContainerElement> |
// React.RefObject<React.ReactNode> and not null or undefined.
function isRef<T extends
  | null
  | undefined
  | React.RefObject<ContainerElement>
  | React.RefObject<React.ReactNode>
  | React.RefObject<Rnd>
>(obj: T extends infer Ref extends
  | React.RefObject<ContainerElement>
  | React.RefObject<React.ReactNode>
  | React.RefObject<Rnd>
  ? Ref
  : T): obj is typeof obj {
  return obj !== null && obj !== undefined;
}

function getRndBndProps(this: React.Component<RndBndProps, RndBndStates>, ref: React.RefObject<Rnd>): RndBndProps {
  if (!ref.current) throw new Error('The ref is not defined');
  const rnd = ref.current;
  const rndBndProps: RndBndProps = {
    setMouseData: function (this: React.Component<RndBndProps, RndBndStates>, mouseData: Partial<MouseData>) {
      this.setState((prev) => ({ ...prev, ...mouseData }));
    },
    setPosition: function (this: React.Component<RndBndProps, RndBndStates>, position: Partial<Position>) {
      this.setState((prev) => ({ ...prev, ...position }));
    },
    setSize: function (this: React.Component<RndBndProps, RndBndStates>, size: Partial<Size>) {
      this.setState((prev) => ({ ...prev, ...size }));
    },
    setStatus: function (this: React.Component<RndBndProps, RndBndStates>, status: Partial<Status>) {
      this.setState((prev) => ({ ...prev, ...status }));
    },
    setDimensions: function (this: React.Component<RndBndProps, RndBndStates>, dimensions: Partial<Size & Position>) {
      this.setState((prev) => ({ ...prev, ...dimensions }));
    },
    get status() {
      return {
        loading: this.state.loading,
        errorMessage: this.state.errorMessage,
        adjustingWidth: this.state.adjustingWidth,
        adjustingHeight: this.state.adjustingHeight,
        isDragging: this.state.isDragging
      } as Status;
    },
    get size() {
      return { width: this.state.width, height: this.state.height } as Size;
    },
    get position() {
      return { x: this.state.x, y: this.state.y } as Position;
    },
    get mouseData() {
      return {
        lastMouseX: this.state.lastMouseX,
        lastMouseY: this.state.lastMouseY,
        deltaX: this.state.deltaX,
        deltaY: this.state.deltaY,
        distanceX: this.state.distanceX,
        distanceY: this.state.distanceY
      } as MouseData;
    },
    get dimensions() {
      return { ...this.size, ...this.position } as Size & Position;
    },
    containerElement: rnd.getSelfElement()!,
    childRef: null,
    parentRef: null,
    rndRef: ref,
    get state() {
      return {
        x: this.state.x,
        y: this.state.y,
        width: this.state.width,
        height: this.state.height,
        lastMouseX: this.state.lastMouseX,
        lastMouseY: this.state.lastMouseY,
        deltaX: this.state.deltaX,
        deltaY: this.state.deltaY,
        distanceX: this.state.distanceX,
        distanceY: this.state.distanceY,
        loading: this.state.loading,
        errorMessage: this.state.errorMessage,
        adjustingWidth: this.state.adjustingWidth,
        adjustingHeight: this.state.adjustingHeight,
        isDragging: this.state.isDragging,
      } as Readonly<RndBndStates>;
    },
    setRef(e: Rnd) {
      this.rnd = e;
    },
    rnd: ref.current,

    parent: {
      width: this.props.containerElement.offsetParent?.clientWidth!,
      height: this.props.containerElement.offsetParent?.clientHeight!,
      bounds: getBounds(this.props.containerElement.offsetParent! as ContainerElement),
      element: this.props.containerElement.offsetParent! as ContainerElement
    },
    child: this.props.childRef,
    container: {
      width: this.props.containerElement.offsetWidth,
      height: this.props.containerElement.offsetHeight,
      x: this.props.containerElement.offsetLeft,
      y: this.props.containerElement.offsetTop,
      bounds: getBounds(this.props.containerElement)
    },
    binarySearchRange: (size: number, range: Range): number => {
      let low = 0;
      let high = range.length - 1;
      while (low <= high) {
        const mid = Math.floor((low + high) / 2);
        const midVal = range[mid];
        if (midVal === size || (size > range[mid - 1] && size < midVal)) {
          return mid;
        } else if (size < midVal) {
          high = mid - 1;
        } else {
          low = mid + 1;
        }
      }
      return -1; // Return -1 if no range is found, though this should not happen in your case
    },
    range: {
      width: [0, rnd.getParentSize().width * .1, rnd.getParentSize().width * .225, rnd.getParentSize().width * .375, rnd.getParentSize().width * .625, rnd.getParentSize().width * .775, rnd.getParentSize().width * .9, rnd.getParentSize().width],
      height: [0, rnd.getParentSize().height * .1, rnd.getParentSize().height * .225, rnd.getParentSize().height * .375, rnd.getParentSize().height * .625, rnd.getParentSize().height * .775, rnd.getParentSize().height * .9, rnd.getParentSize().height]
    },
    snapToGrid(this: React.Component<RndBndProps, RndBndStates>, position: Position): Position {
      const xDiffs = this.props.range.width.map(point => Math.abs(point - position.x));
      const yDiffs = this.props.range.height.map(point => Math.abs(point - position.y));
      const xClosest = Math.min(...xDiffs);
      const yClosest = Math.min(...yDiffs);
      return {
        x: this.props.range.width[xDiffs.indexOf(xClosest)],
        y: this.props.range.height[yDiffs.indexOf(yClosest)],
      }
    },
    getPosition(this: React.Component<RndBndProps, RndBndStates>, position: Position): Position {
      const xIndice = this.props.binarySearchRange(position.x, this.props.range.width);
      const yIndice = this.props.binarySearchRange(position.y, this.props.range.height);
      return {
        x: this.props.range.width[xIndice],
        y: this.props.range.height[yIndice],
      }
    },
    getSize(this: React.Component<RndBndProps, RndBndStates>, size: Size): Size {
      let yIndice = this.props.binarySearchRange(size.height, this.props.range.height);
      let xIndice = this.props.binarySearchRange(size.width, this.props.range.width);
      return {
        width: this.props.range.width[xIndice],
        height: this.props.range.height[yIndice]
      }
    },
    defaults: this.props.defaultDimensions(),
    defaultDimensions(percents = { minWidth: 0.225, minHeight: 0.225, maxWidth: 1, maxHeight: 1 }) {
      for (const key of Object.values(percents) as (typeof percents)[keyof typeof percents][]) {
        if (typeof key === 'number' && (key < 0 || key > 1)) throw new Error('Percentages must be between 0 and 1');
        if (typeof key === 'string' && isFraction(key)) {
          for (const [k, v] of Object.entries(percents) as [keyof PercentOfParent, Fraction][]) {
            if (percents[k] === key) percents[k] = Fractions[key];
          }
        }
      }
      this.defaults = {
        minWidth: rnd.getParentSize().width * (percents?.minWidth! as Percentage),
        minHeight: rnd.getParentSize().height * (percents?.minHeight! as Percentage),
        maxWidth: rnd.getParentSize().width * (percents?.maxWidth! as Percentage),
        maxHeight: rnd.getParentSize().height * (percents?.maxHeight! as Percentage)
      }
      return this.defaults;
    },

    initialDimensions(w = 0.55, h = 0.55): Size & Position {
      this.initials = {
        width: rnd.getParentSize().width * w,
        height: rnd.getParentSize().height * h,
        x: (rnd.getParentSize().width - (rnd.getParentSize().width * w)) / 2,
        y: (rnd.getParentSize().height - (rnd.getParentSize().height * h)) / 2,
      }
      return this.initials;
    },
    initials: this.props.initialDimensions(),
    handleResize(this: React.Component<RndBndProps, RndBndStates>, e: DraggableEvent, d: DraggableData) {
      const container = this.props.container;
      const left = (container.width - (container.width * 0.55)) / 2;
      const top = (container.height - (container.height * 0.55)) / 2;
      const right = (container.width - (container.width * 0.55));
      const bottom = (container.height - (container.height * 0.55));
      console.log(`Left: ${left}, Top: ${top}, Right: ${right}, Bottom: ${bottom}`);
      let newWidth = this.state.width as number;
      let newHeight = this.state.height as number;
      console.log(`Width: ${newWidth}, Height: ${newHeight}`);
      const minSize = {
        width: 0.225 * container.width,
        height: 0.225 * container.height,
      };


      if (d.deltaX !== 0 && d.x + parseFloat(String(this.state.width)) >= right) {
        this.setState((prev) => ({ ...prev, width: Math.max(minSize.width, parseFloat(String(this.state.width))) }));
        console.log(`New Width: ${this.state.width}\n`);
      }
      if (d.deltaY !== 0 && d.y + parseFloat(String(this.state.height)) >= bottom) {
        this.setState((prev) => ({ ...prev, height: Math.max(minSize.height, parseFloat(String(this.state.height))) }));
        console.log(`New Height: ${this.state.height}\n`);
      }
    },

    onMouseMove(this: React.Component<RndBndProps, RndBndStates>, e: DraggableEvent, el?: Rnd) {
      if (!this.state.isDragging) return;
      const { clientX, clientY } = e as React.MouseEvent;
      const { left, top, right, bottom } = this.props.container.bounds;
      let deltaX = clientX - this.state.lastMouseX;
      let deltaY = clientY - this.state.lastMouseY;
      console.log('Mouse is moving...', `\n Left: ${left}, Top: ${top}, Right: ${right}, Bottom: ${bottom},\nClientX: ${clientX}, ClientY: ${clientY},\nDeltaX: ${deltaX}, DeltaY: ${deltaY}`);
      this.setState((prev) => ({ ...prev, lastMouseX: clientX, lastMouseY: clientY, deltaX, deltaY }));
      console.log(`New Mouse X/Y: ${this.state.lastMouseX}/${this.state.lastMouseY}\nNew Delta X/Y: ${this.state.deltaX}/${this.state.deltaY}\n`);
      let newWidth = this.state.width;
      let newHeight = this.state.height;
      const withinSize = (inc: boolean = false) => {
        return !inc ? newWidth <= (this.props.parent.width * 0.225) : newWidth <= this.stateDefault.width;
      }
      const withinPosition = (side: 'right' | 'left' = 'left') => {
        const right = this.state.width + this.state.x;
        const left = this.state.x;
        return (side === 'left')
          ? left >= 0 && left <= (this.props.parent.width * .225)
          : right <= this.props.parent.width && right >= (this.props.parent.width * .625);
      }
      if (deltaX > 0) {
        // If the element is shrinking on the left side
        if (withinPosition() && withinSize()) {
          newWidth = Math.max(newWidth - Math.abs(deltaX), this.props.parent.width * 0.55)
        }
        // If the element is growing on the right side
        if (withinPosition('right') && withinSize(true)) {
          newWidth += Math.abs(deltaX);
        }
      }
      console.log(this.props.position);
      if (deltaX < 0) {
        // If the element is shrinking on the right side
        if (withinPosition('right') && withinSize()) {
          newWidth = Math.max(newWidth - Math.abs(deltaX), this.props.parent.width * 0.55);
          // If the element is growing on the left side
        } else if (withinPosition('left') && withinSize(true)) {
          newWidth += Math.abs(deltaX);
        }
      }
      this.setState({ width: newWidth, ...this.props.position });
    }

  }
  return rndBndProps;
}

function getRef() {
  const ref = React.createRef<Rnd>();
  if (ref.current) return ref.current;
}
const additionalProps: RndBndProps = getRef() ? {
  getRef: getRef,
  container: getRef(),
  binarySearchRange: (size: number, range: Range): number => {
    let low = 0;
    let high = range.length - 1;
    while (low <= high) {
      const mid = Math.floor((low + high) / 2);
      const midVal = range[mid];
      if (midVal === size || (size > range[mid - 1] && size < midVal)) {
        return mid;
      } else if (size < midVal) {
        high = mid - 1;
      } else {
        low = mid + 1;
      }
    }
    return -1; // Return -1 if no range is found, though this should not happen in your case
  },
  range: {
    width: [0, this.getParentSize().width * .1, this.getParentSize().width * .225, this.getParentSize().width * .375, this.getParentSize().width * .625, this.getParentSize().width * .775, this.getParentSize().width * .9, this.getParentSize().width],
    height: [0, this.getParentSize().height * .1, this.getParentSize().height * .225, this.getParentSize().height * .375, this.getParentSize().height * .625, this.getParentSize().height * .775, this.getParentSize().height * .9, this.getParentSize().height]
  },
  snapToGrid(position: Position): Position {
    const xDiffs = this.range.width.map(point => Math.abs(point - position.x));
    const yDiffs = this.range.height.map(point => Math.abs(point - position.y));
    const xClosest = Math.min(...xDiffs);
    const yClosest = Math.min(...yDiffs);
    return {
      x: this.range.width[xDiffs.indexOf(xClosest)],
      y: this.range.height[yDiffs.indexOf(yClosest)],
    };
  },
  getPosition(position: Position): Position {
    const xIndice = this.binarySearchRange(position.x, this.range.width);
    const yIndice = this.binarySearchRange(position.y, this.range.height);
    return {
      x: this.range.width[xIndice],
      y: this.range.height[yIndice],
    };
  },
} : {};
const RndWithRef = React.forwardRef<React.RefObject<Rnd>, RndProps>((props, ref) => {
  return (
    <Rnd ref={ ref } { ...props } />
  )

})
function makeDraggable<PR extends RndBndProps, S extends RndBndStates, P extends ContainerElement, C extends React.ReactNode>(DraggableComponent: typeof Rnd, additionalProps: PR, childRef: React.RefObject<C>, parentRef: React.RefObject<P>) {
  React.forwardRef<typeof childRef, RndBndProps>((props, ref) => {

    return (
      <Rnd ref={ React.createRef() } { ...Rnd.defaultProps }>
        { }
      </Rnd>
    )
  })
  return class Draggable<Props extends PR, State extends S> extends React.Component<Props, State> implements Props {
    setMouseData(this: React.Component<Props, State>, mouseData: Partial<MouseData>) {
      this.setState((prev) => ({ ...prev, ...mouseData }));
    };
    setPosition(this: React.Component<Props, State>, position: Partial<Position>) {
      this.setState((prev) => ({ ...prev, ...position }));
    };
    setSize(this: React.Component<Props, State>, size: Partial<Size>) {
      this.setState((prev) => ({ ...prev, ...size }));
    };
    setStatus(this: React.Component<Props, State>, status: Partial<Status>) {
      this.setState((prev) => ({ ...prev, ...status }));
    };
    setDimensions(this: React.Component<Props, State>, dimensions: Partial<Size & Position>) {
      this.setState((prev) => ({ ...prev, ...dimensions }));
    };
    get status() {
      return {
        loading: this.state.loading,
        errorMessage: this.state.errorMessage,
        adjustingWidth: this.state.adjustingWidth,
        adjustingHeight: this.state.adjustingHeight,
        isDragging: this.state.isDragging
      } as Status;
    };
    get size() {
      return { width: this.state.width, height: this.state.height } as Size;
    };
    get position() {
      return { x: this.state.x, y: this.state.y } as Position;
    };
    get mouseData() {
      return {
        lastMouseX: this.state.lastMouseX,
        lastMouseY: this.state.lastMouseY,
        deltaX: this.state.deltaX,
        deltaY: this.state.deltaY,
        distanceX: this.state.distanceX,
        distanceY: this.state.distanceY
      } as MouseData;
    };
    get dimensions() {
      return { ...this.size, ...this.position } as Size & Position;
    };
    rnd: Rnd;
    containerElement = this.props.rnd.getSelfElement()!;
    childRef = childRef;
    parentRef = parentRef;

    parent = {
      width: this.props.containerElement.offsetParent?.clientWidth!,
      height: this.props.containerElement.offsetParent?.clientHeight!,
      bounds: getBounds(this.props.containerElement.offsetParent! as ContainerElement),
      element: this.props.containerElement.offsetParent! as ContainerElement
    };
    child = this.childRef;
    container = {
      width: this.props.containerElement.offsetWidth,
      height: this.props.containerElement.offsetHeight,
      x: this.props.containerElement.offsetLeft,
      y: this.props.containerElement.offsetTop,
      bounds: getBounds(this.props.containerElement)
    };
    binarySearchRange(size: number, range: Range): number {
      let low = 0;
      let high = range.length - 1;
      while (low <= high) {
        const mid = Math.floor((low + high) / 2);
        const midVal = range[mid];
        if (midVal === size || (size > range[mid - 1] && size < midVal)) {
          return mid;
        } else if (size < midVal) {
          high = mid - 1;
        } else {
          low = mid + 1;
        }
      }
      return -1; // Return -1 if no range is found, though this should not happen in your case
    };
    range: RndBnd.SizeRange = {
      width: [0, this.props.rnd.getParentSize().width! * .1, this.props.rnd.getParentSize().width! * .225, this.props.rnd.getParentSize().width! * .375, this.props.rnd.getParentSize().width! * .625, this.props.rnd.getParentSize().width! * .775, this.props.rnd.getParentSize().width! * .9, this.props.rnd.getParentSize().width!],
      height: [0, this.props.rnd.getParentSize().height! * .1, this.props.rnd.getParentSize().height! * .225, this.props.rnd.getParentSize().height! * .375, this.props.rnd.getParentSize().height! * .625, this.props.rnd.getParentSize().height! * .775, this.props.rnd.getParentSize().height! * .9, this.props.rnd.getParentSize().height!]
    };
    snapToGrid(this: React.Component<Props, State>, position: Position): Position {
      const xDiffs = this.props.range.width.map(point => Math.abs(point - position.x));
      const yDiffs = this.props.range.height.map(point => Math.abs(point - position.y));
      const xClosest = Math.min(...xDiffs);
      const yClosest = Math.min(...yDiffs);
      return {
        x: this.props.range.width[xDiffs.indexOf(xClosest)],
        y: this.props.range.height[yDiffs.indexOf(yClosest)],
      }
    }
    getPosition(this: React.Component<Props, State>, position: Position): Position {
      const xIndice = this.props.binarySearchRange(position.x, this.props.range.width);
      const yIndice = this.props.binarySearchRange(position.y, this.props.range.height);
      return {
        x: this.props.range.width[xIndice],
        y: this.props.range.height[yIndice],
      }
    }
    getSize(this: React.Component<Props, State>, size: Size): Size {
      let yIndice = this.props.binarySearchRange(size.height, this.props.range.height);
      let xIndice = this.props.binarySearchRange(size.width, this.props.range.width);
      return {
        width: this.props.range.width[xIndice],
        height: this.props.range.height[yIndice]
      }
    }
    defaults = this.props.defaultDimensions();
    defaultDimensions(percents: PercentOfParent = { minWidth: 0.225, minHeight: 0.225, maxWidth: 1, maxHeight: 1 }) {
      for (const key of Object.values(percents) as (typeof percents)[keyof typeof percents][]) {
        if (typeof key === 'number' && (key < 0 || key > 1)) throw new Error('Percentages must be between 0 and 1');
        if (typeof key === 'string' && isFraction(key)) {
          for (const [k, v] of Object.entries(percents) as [keyof PercentOfParent, Fraction][]) {
            if (percents[k] === key) percents[k] = Fractions[key];
          }
        }
      }
      this.defaults = {
        minWidth: this.props.rnd.getParentSize().width * (percents?.minWidth! as Percentage),
        minHeight: this.props.rnd.getParentSize().height * (percents?.minHeight! as Percentage),
        maxWidth: this.props.rnd.getParentSize().width * (percents?.maxWidth! as Percentage),
        maxHeight: this.props.rnd.getParentSize().height * (percents?.maxHeight! as Percentage)
      }
      return this.defaults;
    }
    initialDimensions(w: Percentage = 0.55, h: Percentage = 0.55): Size & Position {
      this.initials = {
        width: this.props.rnd.getParentSize().width * w,
        height: this.props.rnd.getParentSize().height * h,
        x: (this.props.rnd.getParentSize().width - (this.props.rnd.getParentSize().width * w)) / 2,
        y: (this.props.rnd.getParentSize().height - (this.props.rnd.getParentSize().height * h)) / 2,
      }
      return this.initials;
    }
    initials = this.props.initialDimensions();
    handleResize(this: React.Component<Props, State>, e: DraggableEvent, d: DraggableData) {
      const left = (this.props.containerElement.offsetWidth - (this.props.containerElement.offsetWidth * 0.55)) / 2;
      const top = (this.props.containerElement.offsetHeight - (this.props.containerElement.offsetHeight * 0.55)) / 2;
      const right = (this.props.containerElement.offsetWidth - (this.props.containerElement.offsetWidth * 0.55));
      const bottom = (this.props.containerElement.offsetHeight - (this.props.containerElement.offsetHeight * 0.55));
      let newWidth = this.state.width as number;
      let newHeight = this.state.height as number;
      const minSize = {
        width: this.props.defaults.minWidth,
        height: this.props.defaults.minHeight,
      };


      if (d.deltaX !== 0 && d.x + parseFloat(String(this.state.width)) >= right) {
        this.setState((prev) => ({ ...prev, width: Math.max(minSize.width, parseFloat(String(this.state.width))) }));
      }
      if (d.deltaY !== 0 && d.y + parseFloat(String(this.state.height)) >= bottom) {
        this.setState((prev) => ({ ...prev, height: Math.max(minSize.height, parseFloat(String(this.state.height))) }));
      }
    }
    onMouseMove(e: DraggableEvent, el?: React.Ref<Rnd>) {
      if (!this.state.isDragging) return;
      const { clientX, clientY } = e as React.MouseEvent;
      const { left, top, right, bottom } = this.props.containerElement.getBoundingClientRect()!;
      const leftDistance = clientX - left;
      const rightDistance = right - clientX;
      const topDistance = clientY - top;
      const bottomDistance = bottom - clientY;
      let deltaX = clientX - this.state.lastMouseX;
      let deltaY = clientY - this.state.lastMouseY;
      this.setState((prev) => ({ ...prev, lastMouseX: clientX, lastMouseY: clientY, deltaX, deltaY }));

      let newX = this.state.x;
      let newY = this.state.y;
      let newWidth = this.state.width;
      let newHeight = this.state.height;
      const withinWidth = (increase: boolean = false) => {
        return !increase ? this.state.width <= this.defaults.minWidth : this.state.width <= this.defaults.maxWidth;
      }
      const withinHeight = (increase: boolean = false) => {
        return !increase ? this.state.height <= this.defaults.minHeight : this.state.height <= this.defaults.maxHeight;
      }
      const onHorizontalSide = (side: 'right' | 'left' = 'left') => {
        const right = this.state.width + this.state.x;
        const left = this.state.x;
        return (side === 'left')
          ? left >= 0 && left <= (this.props.parent.width * .225)
          : right <= this.props.parent.width && right >= this.defaults.maxWidth;
      }
      const onVerticalSide = (side: 'top' | 'bottom' = 'top') => {
        const bottom = this.state.height + this.state.y;
        const top = this.state.y;
        return (side === 'top')
          ? top >= 0 && top <= (this.props.parent.height * .225)
          : bottom <= this.props.parent.height && bottom >= this.defaults.maxHeight;
      }
      if (deltaX > 0) {
        this.setState((prev) => ({ ...prev, x: Math.max(leftDistance + deltaX, leftDistance) }))
        // If the element is shrinking on the left side
        if (onHorizontalSide() && withinWidth()) {
          this.setState((prev) => ({ ...prev, width: Math.max(this.state.width - (deltaX + this.state.width), this.props.parent.width * 0.55) }));
        }
        // If the element is growing on the right side
        if (onHorizontalSide('right') && withinWidth(true)) {
          this.setState((prev) => ({ ...prev, width: Math.abs((deltaX + this.state.width)) }));
        }
      }
      console.log(this.props.position);
      if (deltaX < 0) {
        this.setState((prev) => ({ ...prev, x: Math.max(leftDistance + deltaX, this.state.x + deltaX) }))
        // If the element is shrinking on the right side
        if (onHorizontalSide('right') && withinWidth()) {
          this.setState((prev) => ({ ...prev, width: Math.max(newWidth - deltaX, this.props.parent.width * 0.55) }));
          // If the element is growing on the left side
        } else if (onHorizontalSide() && withinWidth(true)) {
          this.setState((prev) => ({ ...prev, width: this.state.width + Math.abs(deltaX) }));
        }
      }
      if (deltaY > 0) {
        this.setState((prev) => ({ ...prev, y: Math.max(topDistance + deltaY, topDistance) }))
        // If the element is shrinking on the top side
        if (onVerticalSide() && withinHeight()) {
          this.setState((prev) => ({ ...prev, height: Math.max(this.state.height - (deltaY + this.state.height), this.props.parent.height * 0.55) }));
        }
        // If the element is growing on the bottom side
        if (onVerticalSide('bottom') && withinHeight(true)) {
          this.setState((prev) => ({ ...prev, height: Math.abs((deltaY + this.state.height)) }));
        }
      }

      if (deltaY < 0) {
        this.setState((prev) => ({ ...prev, y: Math.max(topDistance + deltaY, this.state.y + deltaY) }))
        // If the element is shrinking on the bottom side
        if (onVerticalSide('bottom') && withinHeight()) {
          this.setState((prev) => ({ ...prev, height: Math.max(this.state.height - deltaY, this.props.parent.height * 0.55) }));
        }
        // If the element is growing on the top side
        if (onVerticalSide() && withinHeight(true)) {
          this.setState((prev) => ({ ...prev, height: this.state.height + Math.abs(deltaY) }));
        }
      }
    }
    /// SECTION - Set States and Getters
    /**
     * @constructor RndExtended
     */
    constructor(props: Props) {
      super(props);
      this.state = {
        x: 0,
        y: 0,
        width: 0,
        height: 0,
        lastMouseX: 0,
        lastMouseY: 0,
        deltaX: 0,
        deltaY: 0,
        distanceX: 0,
        distanceY: 0,
        loading: true,
        errorMessage: '',
        adjustingWidth: false,
        adjustingHeight: false,
        isDragging: false,
      }
      this.setState({ ...this.state })
    }
    rndRef: React.RefObject<Rnd> = rndRef;

    Component() {
      const combinedProps = { ...this.props, ...additionalProps };
      return (
        <DraggableComponent { ...combinedProps } />
      );
    }
    resizeableElement: HTMLElement = this.rnd.resizableElement.current!;
    afterMount(): void {
      this.container = DraggableComponent.resizableElement.current!;

      this.ref.current?.getSelfElement()?.addEventListener('dblclick', (e) => {
        e.preventDefault();
        this.setDimensions({ ...this.defaultDimensions() });
      });
      const getPosition = () => {
        const ref = this.ref.current?.getSelfElement()!;
        return {
          x: ref.offsetLeft,
          y: ref.offsetTop,
        }
      };
      const getSize = () => {
        const ref = this.ref.current?.getSelfElement()!;
        return {
          width: ref.offsetWidth,
          height: ref.offsetHeight,
        }
      }
      const parent = {
        width: this.parent.width,
        height: this.parent.height,
      };
      const onMouseMove = (event: MouseEvent) => {
        if (!this.status.isDragging) return;
        const { clientX, clientY } = event;
        let deltaX = event.clientX - this.state.lastMouseX;
        this.setState({ lastMouseX: event.clientX });
        const target = event.target!;
        let newWidth = parseFloat(this.state.width.toString());
        const withinSize = (inc: boolean = false) => {
          return !inc ? newWidth <= (parent.width * 0.225) : newWidth <= this.initials.width;
        }
        const withinPosition = (side: 'right' | 'left' = 'left') => {
          const right = this.size.width + this.position.x;
          const left = this.position.x;
          return side === 'left'
            ? left >= 0 && left <= (parent.width * .225)
            : right <= parent.width && right >= (parent.width * .625);
        }
        if (deltaX > 0) {
          // If the element is shrinking on the left side
          if (withinPosition() && withinSize()) {
            newWidth = Math.max(newWidth - deltaX, this.parent.width * 0.55)
          }
          // If the element is growing on the right side
          if (withinPosition('right') && withinSize(true)) {
            newWidth += Math.abs(deltaX);
          }
        }
        console.log(this.position);
        if (deltaX < 0) {
          // If the element is shrinking on the right side
          if (withinPosition('right') && withinSize()) {
            newWidth = Math.max(newWidth - deltaX, this.parent.width * 0.55);
            // If the element is growing on the left side
          } else if (withinPosition('left') && withinSize(true)) {
            newWidth += Math.abs(deltaX);
          }
        }
        this.setState({ width: newWidth, ...this.position });
      }
      {
        // if (this.position.x === 0 && deltaX < 0) {
        //   // If the element is shrinking on the right side
        //   if (withinPosition('right') && withinSize()) {
        //     newWidth = (parent.width * 0.225) + (this.stateDefault.width - (parent.width * 0.225)) * (1 - distanceLeft);
        //     // If the element is growing on the left side
        //   } else if (withinPosition('left') && withinSize(true)) {
        //     newWidth = (this.stateDefault.width - (parent.width * 0.225)) * distanceRight + (this.parent.width * 0.225);
        //   }
        // }
        // Assuming the element is at x = 0 and trying to move left
        // if (this.position.x === 0 && deltaX > 0) {
        //   newWidth += Math.abs(deltaX); // Increase width as we're simulating a move left
        // } else if (this.position.x + getSize().width < this.stateDefault.x && deltaX < 0) {
        //   // Decrease width or move right if possible
        //   newWidth = Math.max(newWidth - deltaX, this.parent.width * 0.55);
        // }
        // const position = this.ref.current?.getDraggablePosition()!;
        // Update the element with the new width

      }
      const onMouseUp = (event: MouseEvent) => {

        this.setState({ isDragging: false });
        this.rnd?.getSelfElement()?.removeEventListener('mousemove', (ev) => this.onMouseMove(ev));
        this.rnd?.getSelfElement()?.removeEventListener('mouseup', (ev) => this.onMouseUp(ev));
      }
      const fv = this;
      const onMouseDown = (event: MouseEvent) => {
        console.log(this.state.x);
        console.log(this.position)
        this.setState({ isDragging: true });
        this.setState({ lastMouseX: event.clientX, lastMouseY: event.clientY });
        this.rnd?.getSelfElement()?.addEventListener('mousemove', (ev) => this.onMouseMove(ev,));
        this.rnd?.getSelfElement()?.addEventListener('mouseup', onMouseUp);
      }
      this.rnd?.getSelfElement()?.addEventListener('mousedown', onMouseDown);
    }
    componentWillUnmount(): void {
      this.ref.current?.getSelfElement()?.removeEventListener('dblclick', (e) => {
        e.preventDefault();
        this.setState({ ...this.stateDefault });
      });
    }
    render() {
      this.parent = this.props.parent;

      const parent = {
        width: this.parent.width,
        height: this.parent.height,
      };
      this.stateDefault = {
        width: parent.width * 0.55,
        height: parent.height * 0.55,
        x: (parent.width - (parent.width * 0.55)) / 2,
        y: (parent.height - (parent.height * 0.55)) / 2,
      } as const;
      if (this.state.width === 0 && this.state.height === 0 && this.state.x === 0 && this.state.y === 0) {
        this.setState({ ...this.stateDefault });
      }
      const handleDragResize = (e: DraggableEvent, d: DraggableData) => {
        const targetWidth = parent.width * 0.225; // Minimum width when fully left
        const targetHeight = parent.height * 0.225; // Minimum height when fully up
        const startLeft = parent.width * 0.225; // Starting point for adjustment
        const maxLeft = parent.width * 0.375;
        const maxTop = parent.height * 0.375;
        const maxRight = parent.width * 0.625;
        const maxBottom = parent.height * 0.625;
        const startTop = parent.height * 0.225; // Starting point for adjustment
        const startRight = parent.width * 0.775; // Starting point for adjustment
        const startBottom = parent.height * 0.775; // Starting point for adjustment
        const original = this.stateDefault;
        const width = parseFloat(this.state.width.toString());
        const height = parseFloat(this.state.height.toString());
        const left = d.x;
        const top = d.y;
        const right = width + d.x;
        const bottom = height + d.y;
        const maxWidth = parent.width;
        const maxHeight = parent.height;
        const distanceLeft = Math.min(Math.max(d.x / startLeft, 0), 1);
        const distanceTop = Math.min(Math.max(d.y / startTop, 0), 1);
        const distanceRight = Math.min(Math.max((width + d.x) / startRight, 0), 1);
        const distanceBottom = Math.min(Math.max((height + d.y) / startBottom, 0), 1);
        let newHeight = height;
        let newWidth = width;
        console.log('height', newHeight)
        console.log('width', newWidth)
        let holder = 0;
        const direction = (d: DraggableData) =>
          d.deltaX <= 0
            ? 'left'
            : d.deltaX > 0
              ? 'right'
              : d.deltaY <= 0
                ? 'top'
                : d.deltaY > 0
                  ? 'bottom'
                  : 'none';
        let newX = d.x;
        let newY = d.x;
        // Case when moving left and hitting the edge or already adjusting width
        // if (d.deltaX < 0 && (d.x === 0 || this.state.adjustingWidth)) {
        //   // Only adjust width if we're not already smaller than the target width
        //   if (width > parent.width * 0.55) {
        //     newWidth += d.deltaX; // Decrease width as we're moving left
        //     this.state.adjustingWidth = true;
        //   }
        // } else if (d.deltaX > 0 && (this.state.adjustingWidth || d.x === 0)) {
        //   // When moving right from the edge or if we need to adjust the width back
        //   if (width < original.width) {
        //     newWidth = Math.min(width + d.deltaX, original.width); // Increase width, but do not exceed initial width
        //   } else {
        //     // Once width is back to initial or if it's already there, move the position instead
        //     d.x += d.deltaX;
        //     this.state.adjustingWidth = width <= parent.width * 0.55; // Keep adjusting if width is still under threshold
        //   }
        // } else {
        //   // Normal movement, not at an edge and not adjusting width
        //   d.x += d.deltaX;
        // }

        // // Correct negative width just in case
        // if (width < parent.width * 0.1) {
        //   newWidth = parent.width * 0.1;
        // }

        // // Ensure d.x does not become negative
        // if (d.x < 0) {
        //   d.x = 0;
        // }
        // if (direction(d) === 'left') {
        //   if (left > 0 && left <= startLeft && width >= targetWidth) {
        //     newWidth = (original.width - targetWidth) * distanceLeft + targetWidth;
        //   } else if (right <= maxWidth && right >= startRight && width <= original.width) {
        //     newWidth = targetWidth + (original.width - targetWidth) * (1 - distanceRight);
        //   }
        // }
        // if (direction(d) === 'right') {
        //   if (left >= 0 && left <= startLeft && width >= targetWidth) {
        //     newWidth = targetWidth + (original.width - targetWidth) * (1 - distanceLeft);
        //   } else if (right <= maxWidth && right >= startRight && width >= targetWidth) {
        //     newWidth = (original.width - targetWidth) * distanceRight + targetWidth;
        //   }
        // }
        // if (direction(d) === 'top') {
        //   if (top >= 0 && top <= startTop && height >= targetHeight) {
        //     newHeight = (original.height - targetHeight) * distanceTop + targetHeight;
        //   } else if (bottom <= maxHeight && bottom >= startBottom && height <= original.height) {
        //     newHeight = targetHeight + (original.height - targetHeight) * (1 - distanceBottom);
        //   }
        // }
        // if (direction(d) === 'bottom') {
        //   if (top >= 0 && top <= startTop && height >= original.height) {
        //     newHeight = targetHeight + (original.height - targetHeight) * (1 - distanceTop);
        //   } else if (bottom <= maxHeight && bottom >= startBottom && height >= targetHeight) {
        //     newHeight = (original.height - targetHeight) * distanceBottom + targetHeight;
        //   }
        // }
        // if (d.x <= startLeft && width >= 0) {
        //   // Calculate the dynamic width for shrinking
        //     /**
        //      * @see Algebra - This is an explanation of the algebraic equation used to calculate the new width
        //      * ---
        //      * 1. 'w' = width = `100 x 0.55` ;
        //      * 2. 't' = target = `100 x 0.1` ;
        //      * 3. 'd' = distance = `x ÷ (100 x .225)`:
        //      * 4. 'z' = resulting width = `((w - t) x p) + t` | `z + t = (w - t) x p` ;
        //      * z = (w - t) x
        //      */
        //     newWidth = (original.width - targetWidth) * distanceLeft + targetWidth;
        //     //newWidth = targetWidth + (original.width - targetWidth) * (1 - distance.left);
        // } else if (width + d.x >= startRight && width >= 0) {
        //   if (d.d.deltaX > 0) {
        //     newWidth = (original.width - targetWidth) * distanceRight + targetWidth;
        //   } else {
        //     newWidth = targetWidth + (original.width - targetWidth) * (1 - distanceRight);

        //   }
        // }
        // if (d.deltaY < 0 && d.y <= startTop && height >= 0) {
        //   newHeight = (original.height - targetHeight) * distanceTop + targetHeight;
        //   //newHeight = targetHeight + (original.height - targetHeight) * (1 - distance.top);
        // } else if (height + d.y >= startBottom && height >= 0) {
        //   if (d.deltaY > 0) {
        //     newHeight = (original.height - targetHeight) * distanceBottom + targetHeight;
        //   } else {
        //     newHeight = targetHeight + (original.height - targetHeight) * (1 - distanceBottom);
        //   }
        // }
        this.setState({ width: newWidth, height: newHeight, x: d.x, y: d.y });
      }

      const onResize: RndResizeCallback = (e, direction, ref, delta, position) => {
        const newSize = {
          width: ref.offsetWidth,
          height: ref.offsetHeight,
        };
        const adjustedSize = this.getSize(newSize);
        const newPosition = {
          x: Math.min(parent.width - adjustedSize.width, position.x),
          y: Math.min(parent.height - adjustedSize.height, position.y),
        };
        newPosition.x = Math.max(0, newPosition.x);
        newPosition.y = Math.max(0, newPosition.y);
        this.setState({
          width: adjustedSize.width,
          height: adjustedSize.height,
          x: newPosition.x,
          y: newPosition.y,
        });
      };
      const onDragStop: RndDragCallback = (event: DraggableEvent, data: DraggableData) => {
        this.setState({
          ...this.snapToGrid({ x: data.x, y: data.y }),
        });
      }
      const onDrag: RndDragCallback = (e, data) => {
        let newWidth = parseFloat(this.state.width.toString());
        let newHeight = parseFloat(this.state.height.toString());

        // Right boundary
        if (data.x + newWidth > parent.width) {
          newWidth = parent.width - data.x;
        }
        // Left boundary
        if (data.x < 0) {
          newWidth += data.x; // Reduce width as it moves out of left boundary
          data.x = 0; // Reset x to stick to the left boundary
        }

        // Bottom boundary
        if (data.y + newHeight > parent.height) {
          newHeight = parent.height - data.y;
        }
        // Top boundary
        if (data.y < 0) {
          newHeight += data.y; // Reduce height as it moves out of top boundary
          data.y = 0; // Reset y to stick to the top boundary
        }

        // Update state to adjust size and position
        this.setState({
          width: newWidth,
          height: newHeight,
          x: data.x,
          y: data.y,
        });
      };
      const handleResizeStop: RndResizeCallback = (e, dir, elementRef, delta, position) => {
        const { x, y } = position;

        let newWidth = parseFloat(this.state.width as unknown as string);
        let newHeight = parseFloat(this.state.height as unknown as string);
        let height = newHeight;
        let width = newWidth;
        if ((this.state.x + width) > parent.width) {
          newWidth = parent.width - x;
        }
        if ((this.state.y + height) > parent.height) {
          newHeight = parent.height - y;
        }
        this.setState({
          width: newWidth,
          height: newHeight,
        });
      }
      const Component = this.Component();

      console.log('state', this.state);
      const getClosestSnapPoint: RndResizeCallback = (e, direction, ref, delta, position) => {
        this.setState({
          ...this.snapToGrid(position),
          width: ref.offsetWidth,
          height: ref.offsetHeight,
        });
      }

      return (
        <Rnd
          ref={ (el) => (this.rnd = el!) }
          className="prop-box"
          bounds=".resize-area"
          dragGrid={ [parent.width / 48, parent.height / 48] }
          resizeGrid={ [parent.width / 32, parent.height / 32] }
          maxHeight={ parent.height }
          maxWidth={ parent.width }
          minHeight={ parent.height * 0.09 }
          minWidth={ parent.width * 0.09 }
          size={ { width: this.size.width, height: this.state.height } }
          position={ { x: this.state.x, y: this.state.y } }
          resizeHandleClasses={
            {
              bottom: 's-handle',
              left: 'w-handle',
              right: 'e-handle',
              top: 'n-handle',
              bottomLeft: 'sw-handle',
              bottomRight: 'se-handle',
              topLeft: 'nw-handle',
              topRight: 'ne-handle',
            }
          }
          onMouseMove={ this.onMouseMove() }
          onResizeStop={ handleResizeStop }
          onDragStop={ onDragStop }
          onDragStart={ (e, d) => {
            this.setState({ isDragging: true, x: d.x, y: d.y });
          } }
          onResize={ onResize }
          // this.setState({
          //   ...this.getSize({ width: ref.offsetWidth, height: ref.offsetHeight }),
          //   ...this.getPosition({ x: ref.offsetLeft, y: ref.offsetTop }),
          // })
          //} }

          default={
            {
              width: parent.width * 0.55,
              height: parent.height * 0.55,
              x: (parent.width - (parent.width * 0.55)) / 2,
              y: (parent.height - (parent.height * 0.55)) / 2,
            }
          }
          dragAxis='both'
        >
          <Routes>
            { this.state.filedata.files.map((file, index) => (
              <Route path={ `/preview/${file}` } key={ index } element={ <DynamicLoader filename={ file } /> } />
            )) }
          </Routes>
        </Rnd>
      );
    }
  }
}

export default FileViewer;
