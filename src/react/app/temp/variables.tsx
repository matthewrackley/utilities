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
import { Rnd, DraggableData, type RndResizeCallback, type RndDragCallback, type RndResizeStartCallback, type RndDragEvent, Position, Props as RndProps } from 'react-rnd';
import { DraggableEvent } from 'react-draggable';
import { ResizeDirection, Resizable } from 're-resizable';
import { Route, Routes, useParams } from 'react-router-dom';
import ResizeArea, { type SimpleCSSSize, type ChildProps, ParentSize } from '../resizeArea';
import DynamicLoader from '../dynamicLoader';
import RndBnd, { Percentage, Bounds, ChildComponent, DefaultDimensions, Fractions, MouseData, ContainerElement, PercentOfParent, Range, RndBndProps, StateGetsSets, Status, Size, RndBndStates, RndBndElementCallback, Fraction } from '@app/types/RndBnd.types';
import { isFraction, getBounds, isPercent, isPercentage, percents } from '@app/draggable';

const container = this.props.container;
const left = (container.width - (container.width * 0.55)) / 2;
const top = (container.height - (container.height * 0.55)) / 2;
const right = (container.width - (container.width * 0.55));
const bottom = (container.height - (container.height * 0.55));
function getRndBnd(this: React.Component<RndBndProps, RndBndStates>, ref: React.RefObject<Rnd>) {
  if (!ref.current) throw new Error('The ref is not defined');
  const rnd = ref.current;
  class RndBnd extends React.Component<RndBndProps, RndBndStates> {
    setMouseData(this: React.Component<RndBndProps, RndBndStates>, mouseData: Partial<MouseData>) {
      this.setState((prev) => ({ ...prev, ...mouseData }));
    }
    setPosition(this: React.Component<RndBndProps, RndBndStates>, position: Partial<Position>) {
      this.setState((prev) => ({ ...prev, ...position }));
    }
    setSize(this: React.Component<RndBndProps, RndBndStates>, size: Partial<Size>) {
      this.setState((prev) => ({ ...prev, ...size }));
    }
    setStatus(this: React.Component<RndBndProps, RndBndStates>, status: Partial<Status>) {
      this.setState((prev) => ({ ...prev, ...status }));
    }
    setDimensions(this: React.Component<RndBndProps, RndBndStates>, dimensions: Partial<Size & Position>) {
      this.setState((prev) => ({ ...prev, ...dimensions }));
    }
    get status() {
      return {
        loading: this.state.loading,
        errorMessage: this.state.errorMessage,
        adjustingWidth: this.state.adjustingWidth,
        adjustingHeight: this.state.adjustingHeight,
        isDragging: this.state.isDragging
      } as Status;
    }
    get size() {
      return { width: this.state.width, height: this.state.height } as Size;
    }
    get position() {
      return { x: this.state.x, y: this.state.y } as Position;
    }
    get mouseData() {
      return {
        lastMouseX: this.state.lastMouseX,
        lastMouseY: this.state.lastMouseY,
        deltaX: this.state.deltaX,
        deltaY: this.state.deltaY,
        distanceX: this.state.distanceX,
        distanceY: this.state.distanceY
      } as MouseData;
    }
    get dimensions() {
      return { ...this.size, ...this.position } as Size & Position;
    }
    containerElement = rnd.getSelfElement()
    childRef = null;
    parentRef = null;
    rndRef = ref;

    setRef(e: Rnd) {
      this.rnd = e;
    }
    rnd = ref.current,

    parent = {
      width: this.props.containerElement.offsetParent?.clientWidth!,
      height: this.props.containerElement.offsetParent?.clientHeight!,
      bounds: getBounds(this.props.containerElement.offsetParent! as ContainerElement),
      element: this.props.containerElement.offsetParent! as ContainerElement
    }
    child = this.props.childRef;
    container = {
      width: this.props.containerElement.offsetWidth,
      height: this.props.containerElement.offsetHeight,
      x: this.props.containerElement.offsetLeft,
      y: this.props.containerElement.offsetTop,
      bounds: getBounds(this.props.containerElement)
    }
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
    }
    range = {
      width: [0, rnd.getParentSize().width * .1, rnd.getParentSize().width * .225, rnd.getParentSize().width * .375, rnd.getParentSize().width * .625, rnd.getParentSize().width * .775, rnd.getParentSize().width * .9, rnd.getParentSize().width],
      height: [0, rnd.getParentSize().height * .1, rnd.getParentSize().height * .225, rnd.getParentSize().height * .375, rnd.getParentSize().height * .625, rnd.getParentSize().height * .775, rnd.getParentSize().height * .9, rnd.getParentSize().height]
    }
    snapToGrid(this: React.Component<RndBndProps, RndBndStates>, position: Position): Position {
      const xDiffs = this.props.range.width.map(point => Math.abs(point - position.x));
      const yDiffs = this.props.range.height.map(point => Math.abs(point - position.y));
      const xClosest = Math.min(...xDiffs);
      const yClosest = Math.min(...yDiffs);
      return {
        x: this.props.range.width[xDiffs.indexOf(xClosest)],
        y: this.props.range.height[yDiffs.indexOf(yClosest)],
      }
    }
    getPosition(this: React.Component<RndBndProps, RndBndStates>, position: Position): Position {
      const xIndice = this.props.binarySearchRange(position.x, this.props.range.width);
      const yIndice = this.props.binarySearchRange(position.y, this.props.range.height);
      return {
        x: this.props.range.width[xIndice],
        y: this.props.range.height[yIndice],
      }
    }
    getSize(this: React.Component<RndBndProps, RndBndStates>, size: Size): Size {
      let yIndice = this.props.binarySearchRange(size.height, this.props.range.height);
      let xIndice = this.props.binarySearchRange(size.width, this.props.range.width);
      return {
        width: this.props.range.width[xIndice],
        height: this.props.range.height[yIndice]
      }
    }
    defaults = this.props.defaultDimensions();
    defaultDimensions(percents: PercentOfParent = { minWidth: 0.225, minHeight: 0.225, width: 0.55, height: 0.55, maxWidth: 1, maxHeight: 1 }) {
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
        width: rnd.getParentSize().width * 0.55,
        height: rnd.getParentSize().height * 0.55,
        maxWidth: rnd.getParentSize().width * (percents?.maxWidth! as Percentage),
        maxHeight: rnd.getParentSize().height * (percents?.maxHeight! as Percentage)
      }
      return this.defaults;
    }

    elements: RndBnd.RndBndElement[] = [];
    setElement<T extends number>(element: RndBnd.RndBndElement) {
      const count = [...this.elements, element].length as T;
      this.elements.push(element);
      return {
        count: count,
        elements: this.elements
      } as RndBnd.RndBndElements<T>;
    }
    initialDimensions(w = 0.55, h = 0.55): Size & Position {
      this.initials = {
        width: rnd.getParentSize().width * w,
        height: rnd.getParentSize().height * h,
        x: (rnd.getParentSize().width - (rnd.getParentSize().width * w)) / 2,
        y: (rnd.getParentSize().height - (rnd.getParentSize().height * h)) / 2,
      }
      return this.initials;
    }
    initials = this.props.initialDimensions(),
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
    }

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
          newWidth = Math.max(newWidth - (deltaX + ), this.props.parent.width * 0.55)
        }
        // If the element is growing on the right side
        if (withinPosition('right') && withinSize(true)) {
          newWidth += Math.abs((deltaX + ));
        }
      }
      console.log(this.props.position);
      if (deltaX < 0) {
        // If the element is shrinking on the right side
        if (withinPosition('right') && withinSize()) {
          newWidth = Math.max(newWidth - deltaX, this.props.parent.width * 0.55);
          // If the element is growing on the left side
        } else if (withinPosition('left') && withinSize(true)) {
          newWidth += Math.abs(deltaX);
        }
      }
      this.setState({ width: newWidth, ...this.props.position });
    }
    defaults = {
      minWidth: 0.225 * this.props.parent.width,
      minHeight: 0.225 * this.props.parent.height,
      width: 0.55 * this.props.parent.width,
      height: 0.55 * this.props.parent.height,
      maxWidth: this.props.parent.width,
      maxHeight: this.props.parent.height
    }
    constructor(props: RndBndProps) {
      super(props);
      this.state = {
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
    }

  }
}


const additionalProps: RndBndProps = {
  getRef() {
    const ref = React.createRef<Rnd>();
    if (ref.current) return ref.current;
  },
  container: additionalProps.getRef(),
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
    }
  },
  getPosition(position: Position): Position {
    const xIndice = this.binarySearchRange(position.x, this.range.width);
    const yIndice = this.binarySearchRange(position.y, this.range.height);
    return {
      x: this.range.width[xIndice],
      y: this.range.height[yIndice],
    }
  },
}
