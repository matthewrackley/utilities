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

/**
 * @file fileViewer.tsx
 * @description
 * @author Matthew Allen Rackley
 * @copyright [Matthew Rackley's Github](https://www.github.com/matthewrackley "Matthew Rackley on github.com")
 */

import React from 'react';
import { Rnd } from 'react-rnd';

import styled from 'styled-components';

export const percents: Percentage[] = [0.04, 0.06, 0.07, 0.08, 0.16, 0.17, 0.18, 0.19, 0.27, 0.28, 0.29, 0.31, 0.38, 0.39, 0.41, 0.42, 0.49, 0.51, 0.52, 0.53, 0.61, 0.62, 0.63, 0.64, 0.72, 0.73, 0.74, 0.76, 0.83, 0.84, 0.86, 0.87, 0.94, 0.96, 0.97, 0.98, 0.01, 0.02, 0.03, 0.05, 0.09, 0.10, 0.11, 0.12, 0.13, 0.14, 0.15, 0.20, 0.21, 0.22, 0.23, 0.24, 0.25, 0.26, 0.30, 0.32, 0.33, 0.34, 0.40, 0.43, 0.44, 0.45, 0.46, 0.47, 0.48, 0.35, 0.36, 0.68, 0.69, 0.70, 0.71, 0.65, 0.66, 0.67, 0.37, 0.50, 0.54, 0.55, 0.56, 0.57, 0.58, 0.59, 0.60, 0.75, 0.77, 0.78, 0.79, 0.80, 0.81, 0.82, 0.85, 0.88, 0.89, 0.90, 0.91, 0.92, 0.93, 0.95, 0.99, 0.125, 0.175, 0.225, 0.025, 0.075, 0.275, 0.325, 0.375, 0.425, 0.625, 1.00, 0.675, 0.525, 0.475, 0.575, 0.725, 0.775, 0.825, 0.875, 0.925, 0.975, 0.09090909090909091, 0.08333333333333333, 0.0078125, 0.07692307692307693, 0.06666666666666667, 0.0625, 0.03571428571428571, 0.3333333333333333, 0.03125, 0.16666666666666666, 0.015625, 0.14285714285714285, 0.1111111111111111, 0.6875, 0.9921875, 0.8125, 0.9375, 0.6666666666666666, 0.1875, 0.42857142857142855, 0.96875, 0.3125, 0.625, 0.5555555555555556, 0.984375, 0.4375, 0.875, 0.5625];
export function isFraction(fraction: string): fraction is Fraction {
  if (Fractions[fraction as Fraction] === undefined) return false;
  for (const key of Object.keys(Fractions) as Fraction[]) {
    if (fraction === key) return true;
  };
  return false;
}
export function isPercentage(percentage: number): percentage is Percentage {
  return percents.includes(percentage);
}


// Write a typeguard that checks and distinguishes the percent type to determine the percentage subtype
export function isPercent<V extends Percentage>(percentage: V): percentage is V {
  if (typeof percentage === 'number') {
    return percentage >= 0 && percentage <= 1;
  } else if (typeof percentage === 'string') {
    return Fractions.hasOwnProperty(percentage);
  } else {
    return false;
  }
}
function shouldMove(this: FileViewer, direction: Direction, d: DraggableData) {
  const { width, height } = this.size;
  const { left, top, right, bottom, height: rectHeight, width: rectWidth } = this.domRect;
  const { left: parentLeft, top: parentTop, right: parentRight, bottom: parentBottom } = this.parent.ref.current?.getBoundingClientRect()!;
  const parentData = this.props.parent;

  const isSouth = d.deltaY !== 0 && d.y + parseFloat(String(this.state.height)) <= bottom;
  const isNorth = d.deltaY !== 0 && d.y + parseFloat(String(this.state.height)) <= top;
  const isEast = d.deltaX !== 0 && d.x + parseFloat(String(this.state.width)) <= right;
  const isWest = d.deltaX !== 0 && d.x + parseFloat(String(this.state.width)) <= left;
  if (direction.includes('left')) {
    if (direction === 'bottomLeft') return isSouth && isWest;
    if (direction === 'topLeft') return isNorth && isWest;
    return isWest;
  }
  if (direction.includes('top')) {
    if (direction === 'topLeft') return isNorth && isWest;
    if (direction === 'topRight') return isNorth && isEast;
    return isNorth;
  }
  if (direction.includes('right')) {
    if (direction === 'topRight') return isNorth && isEast;
    if (direction === 'bottomRight') return isSouth && isEast;
    return isEast;
  }
  if (direction.includes('bottom')) {
    if (direction === 'bottomRight') return isSouth && isEast;
    if (direction === 'bottomLeft') return isSouth && isWest;
    return isSouth;
  }
}
function setMouseData(this: FileViewer, mouseData: Partial<MouseData>) {
  this.setState({ ...this.state, ...mouseData });
};
function setPosition(this: FileViewer, position: Partial<Position>) {
  this.setState({ ...this.state, ...position });
};
function setSize(this: FileViewer, size: Partial<Size>) {
  this.setState({ ...this.state, ...size });
};
function setStatus(this: FileViewer, status: Partial<Status>) {
  this.setState({ ...this.state, ...status });
};
function setDimensions(this: FileViewer, dimensions: Partial<Size & Position>) {
  this.setState({ ...this.state, ...dimensions });
};
function getUseableStyles(this: FileViewer, el: React.RefObject<HTMLDivElement>) {
  if (!el.current) {
    console.error(`Element is not attached!\nRef:\n${el}\nCurrent:\n${el.current}`);
    return null as never;
  }
  return window.getComputedStyle(el.current);
}
function getMouseData(this: FileViewer, ev: DraggableEvent): MouseData {
  let mouseData = {} as MouseData;
  if (!this.parent.ref.current) {
    console.error(`Parent ref not attached!\nParent Ref:\n${this.parent.ref}\nParent Ref Current:\n`, this.parent.ref.current);
    return void 0 as never;
  }
  const { left: parentLeft, right: parentRight, top: parentTop, bottom: parentBottom } = this.parent.ref.current.getBoundingClientRect();
  let mouseX = 0;
  let mouseY = 0;
  let touch = {} as Touch | React.Touch | null;
  if (ev instanceof MouseEvent) {
    mouseX = ev.clientX;
    mouseY = ev.clientY;
  } else if (ev.target instanceof MouseEvent) {
    mouseX = ev.target.clientX;
    mouseY = ev.target.clientY;
  }
  if (ev instanceof TouchEvent) {
    touch = ev.touches[0] || ev.changedTouches[0];
    if (touch) {
      mouseX = touch.clientX;
      mouseY = touch.clientY;
    }
  }
  mouseData.lastMouseX = this.state.lastMouseX === 0 ? mouseX : this.state.lastMouseX;
  mouseData.lastMouseY = this.state.lastMouseY === 0 ? mouseY : this.state.lastMouseY;
  mouseData.currentX = mouseX;
  mouseData.currentY = mouseY;
  mouseData.distanceL = mouseX - parentLeft;
  mouseData.distanceT = mouseY - parentTop;
  mouseData.distanceR = parentRight - mouseX;
  mouseData.distanceB = parentBottom - mouseY;
  mouseData.deltaX = mouseX - mouseData.lastMouseX;
  mouseData.deltaY = mouseY - mouseData.lastMouseY;
  this.setState({ ...mouseData })
  return mouseData;
}
function getStatus(this: FileViewer) {
  return {
    loading: this.state.loading,
    errorMessage: this.state.errorMessage,
    adjustingWidth: this.state.adjustingWidth,
    adjustingHeight: this.state.adjustingHeight,
    isDragging: this.state.isDragging
  } as Status;
};
function getDimensions(this: FileViewer) {
  return {
    width: this.size.width,
    height: this.size.height,
    x: this.position.x,
    y: this.position.y
  } as Size & Position;
}
function setDefaultSize(this: FileViewer, percentages: Percents) {
  const { width, height } = percentages;
  return {
    width: this.props.parent.size.width * width,
    height: this.props.parent.size.height * height,
  } as Size;
};
function setDefaultPosition(this: FileViewer, percentages: Percents) {
  const { width, height } = percentages;
  return {
    x: (this.props.parent.size.width - (this.props.parent.size.width * width)) / 2,
    y: (this.props.parent.size.height - (this.props.parent.size.height * height)) / 2,
  };
};
function adjustPosition(this: FileViewer, position: Position): Position {
  const xDiffs = this.range.width.map(point => Math.abs(point - position.x));
  const yDiffs = this.range.height.map(point => Math.abs(point - position.y));
  const xClosest = Math.min(...xDiffs);
  const yClosest = Math.min(...yDiffs);
  return {
    x: this.range.width[xDiffs.indexOf(xClosest)],
    y: this.range.height[yDiffs.indexOf(yClosest)],
  }
}

function adjustSize (this: FileViewer, size: Size): Size {
  const xDiffs = this.range.width.map(point => Math.abs(point - size.width));
  const yDiffs = this.range.height.map(point => Math.abs(point - size.height));
  const xClosest = Math.min(...xDiffs);
  const yClosest = Math.min(...yDiffs);
  return {
    width: this.range.width[xDiffs.indexOf(xClosest)],
    height: this.range.height[yDiffs.indexOf(yClosest)],
  }
}
function getPosition(this: FileViewer): Position {
  return this.rnd?.getDraggablePosition()!;
  // const xIndice = this.binarySearchRange(position.x, this.range.width);
  // const yIndice = this.binarySearchRange(position.y, this.range.height);
  // return {
  //   x: this.range.width[xIndice],
  //   y: this.range.height[yIndice],
  // }

}
function getSize(this: FileViewer) {
  const ref = this.rnd?.getSelfElement();
  if (ref) {
    return {
      width: ref.offsetWidth,
      height: ref.offsetHeight,
    } as Size;
  } else {
    throw new Error(`Rnd Element not acquirable!\nRnd: ${this.rnd}\nRnd Element: ${this.rnd?.getSelfElement()}`)
  }
  /*this.ref.current?.getSelfElement()?.style.height
  this.ref.current?.getSelfElement()?.style.width;
  let yIndice = this.binarySearchRange(size.height, this.range.height);
  let xIndice = this.binarySearchRange(size.width, this.range.width);
  return {
    width: this.range.width[xIndice],
    height: this.range.height[yIndice]
  }*/
}
function handleShrink(this: FileViewer) {
  const { left, top, right, bottom, height, width } = this.domRect;
  const { left: parentLeft, top: parentTop, right: parentRight, bottom: parentBottom } = this.parent.ref.current?.getBoundingClientRect()!;
  const distanceLeft = left - parentLeft;
  const distanceRight = parentRight - right;
  const distanceTop = top - parentTop;
  const distanceBottom = parentBottom - bottom;
  const shrinkFactor = Math.min(
    distanceTop / height,
    distanceLeft / width,
    distanceBottom / height,
    distanceRight / width
  )
  this.setState({
    width: `${width * (1 - shrinkFactor)}px`,
    height: `${height * (1 - shrinkFactor)}px`
  })
}
function getParentRect(this: FileViewer) {
  if (!this.parent.ref.current) {
    console.error(`Parent ref not attached!\nParent Ref:\n${this.parent.ref}\nParent Ref Current:\n`, this.parent.ref.current);
    return null as never;
  }
  return this.parent.ref.current.getBoundingClientRect();
}

function handleResize(this: FileViewer, e: MouseEvent | TouchEvent, direction: Direction, ref: HTMLElement, d: ResizableDelta, pos: Position) {
  const mouse = this.getMouseData(e);
  const { left, right, top, bottom } = this.parentRect;
  const movingL = direction === 'left' || direction === 'bottomLeft' || direction === 'topLeft';
  const movingR = direction === 'right' || direction === 'bottomRight' || direction === 'topRight';
  const movingU = direction === 'top' || direction === 'topLeft' || direction === 'topRight';
  const movingD = direction === 'bottom' || direction === 'bottomLeft' || direction === 'bottomRight';
  if (movingL || movingR && pos.x + this.size.width <= right) {
    // Going Left & Touching Left
    if (movingL && pos.x === left) {
      this.handleShrink();
    } else {
      this.setState({ width: this.size.width + mouse.deltaX});
    }
    // Going Right & Touching Right
    if (movingR && pos.x + this.size.width === right) {
      this.handleShrink();
    } else {
      this.setState({ width: this.size.width + mouse.deltaX });
    }
  }
  if (movingU || movingD && pos.y + this.size.height <= bottom) {
    // Going Up & Touching Top
    if (movingU && pos.y === top) {
      this.handleShrink();
    } else {
      this.setState({ height: this.size.height + mouse.deltaY })
    }
    // Going Down & Touching Bottom
    if (movingD && pos.y + this.size.height === bottom) {
      this.handleShrink();
    } else {
      this.setState({ height: this.size.height + mouse.deltaY });
    }
  }
};
function onDrag (this: FileViewer, e: DraggableEvent, d: DraggableData) {
  const { width, height } = this.props.parent.size;
  const parentRect = this.parentRect;
  const selfRect = d.node.getBoundingClientRect();
  console.log(`Draggable Data:\n`, d)

  this.setState({ lastMouseX: d.lastX, lastMouseY: d.lastY, deltaX: d.deltaX, deltaY: d.deltaY, currentX: d.x, currentY: d.y})
  if (
    (d.deltaY < 0 && Math.floor(selfRect.top) === Math.floor(parentRect.top)) ||
    (d.deltaY > 0 && Math.floor(selfRect.bottom) === Math.floor(parentRect.bottom)) ||
    (d.deltaX < 0 && Math.floor(selfRect.left) === Math.floor(parentRect.left)) ||
    (d.deltaX > 0 && Math.floor(selfRect.right) === Math.floor(parentRect.right))
  ) {
    this.handleShrink();
  }
}
function onResizeStop(this: FileViewer, e: MouseEvent | TouchEvent, dir: Direction, ref: HTMLElement, delta: ResizableDelta, position: Position) {
  this.broadcastEvent();
  this.setState({
    width: ref.offsetWidth as CSSSize,
    height: ref.offsetHeight as CSSSize,
    ...position,
    adjustingHeight: false,
    adjustingWidth: false
  });
}
function onResize(this: FileViewer, e: MouseEvent | TouchEvent, direction: Direction, ref: HTMLElement, delta: ResizableDelta, position: Position) {
  console.log('ref', ref)
  this.broadcastEvent();
  this.setState({ width: ref.offsetWidth, height: ref.offsetHeight, ...position })
};
function onDragStop(this: FileViewer, event: DraggableEvent, data: DraggableData) {
  this.broadcastEvent();
  this.setState({ x: data.x, y: data.y, lastMouseY: data.lastY, lastMouseX: data.lastX, deltaX: data.deltaX, deltaY: data.deltaY, isDragging: false });
}
function onDragStart(this: FileViewer, e: DraggableEvent, d: DraggableData) {
  this.broadcastEvent();
  this.setState({ x: d.x, y: d.y, lastMouseX: d.x, lastMouseY: d.y, isDragging: true })
}
function componentDidMount(this: FileViewer): void {
  this.broadcastEvent();
  const domRect = this.parentElement?.getBoundingClientRect()!;
  console.log('getSelfElement().style.height: ', this.rndRef.current?.getSelfElement()?.style.height);
  console.log('rnd:\n', this.rnd);
  this.rndElement = this.rnd?.getSelfElement() as HTMLDivElement | null;
  const parentEl = this.rndElement?.parentElement;
  this.setMin(this.childRef);
  let childHeight, childWidth, parentWidth, parentHeight, width, height;
  if (this.childRef.current) {
    const computedStyles = window.getComputedStyle(this.childRef.current)
    childHeight = parseFloat(computedStyles.getPropertyValue('height'));
    childWidth = parseFloat(computedStyles.getPropertyValue('width'));
    console.log('ChildHeight:', childHeight, 'ChildWidth:', childWidth);
  }
  if (this.rndElement) {
    const computedStyles = window.getComputedStyle(this.rndElement);
    width = parseFloat(computedStyles.getPropertyValue('width'));
    height = parseFloat(computedStyles.getPropertyValue('height'));
    console.log('Width:', width, 'Height:', height);
    this.setState({ width: this.rndElement.offsetWidth, height: this.rndElement.offsetHeight});
  }
  if (parentEl) {
    const computedStyles = window.getComputedStyle(parentEl);
    parentWidth = parseFloat(computedStyles.getPropertyValue('width'));
    parentHeight = parseFloat(computedStyles.getPropertyValue('height'));
    console.log('ParentEl:', parentEl.style.height, parentEl.style.width)
  }
  this.defaults = {
    ...this.defaults,
    width: this.defaults.width || 0.55 * this.props.parent.size.width,
    height: this.defaults.height || 0.55 * this.props.parent.size.height,
    x: (parentWidth || this.rnd?.getParentSize().width! - (parentWidth || this.rnd?.getParentSize().width! * 0.55)) / 2,
    y: (parentHeight || this.rnd?.getParentSize().height! - (parentHeight || this.rnd?.getParentSize().height! * 0.55)) / 2,
    css: { ...defaultStyles, ...this.defaults.css }
  };
  const defaults = {
    width: (childWidth || this.defaults.width || 0.55 * this.props.parent.size.width) as CSSSize | number,
    height: (childHeight || this.defaults.height || 0.55 * this.props.parent.size.height) as CSSSize | number,
    x: (this.props.parent.size.width - (this.props.parent.size.width * 0.55)) / 2,
    y: (this.props.parent.size.height - (this.props.parent.size.height * 0.55)) / 2,
  };
  if (this.state.width === 0 && this.state.height === 0 && this.state.x === 0 && this.state.y === 0) {
    this.setState({ width: defaults.width, height: defaults.height, x: defaults.x, y: defaults.y });
  }

  this.rndElement?.addEventListener('dblclick', (e) => {
    e.preventDefault();
    this.setState({ width: this.defaults.width! as CSSSize | number, height: this.defaults.height! as CSSSize | number });
  });
  this.childRef.current

  /*{
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
    // } else if (this.position.x + this.size.width < this.stateDefault.x && deltaX < 0) {
    //   // Decrease width or move right if possible
    //   newWidth = Math.max(newWidth - deltaX, this.parent.width * 0.55);
    // }
    // const position = this.ref.current?.getDraggablePosition()!;
    // Update the element with the new width

  }*/
}
const handleClasses: HandleClasses = {
  bottom: 's-handle',
  left: 'w-handle',
  right: 'e-handle',
  top: 'n-handle',
  bottomLeft: 'sw-handle',
  bottomRight: 'se-handle',
  topLeft: 'nw-handle',
  topRight: 'ne-handle',
}


const defaultStyles = {
  position: 'relative' as CSSPosition,
  display: 'flex' as CSSDisplay,
  'max-width': '100%' as CSSSize,
  'min-width': 'fit-content' as CSSSize,
}
const StyledRnd = styled(Rnd).attrs<StyledRndProps>((attr) => {
  return {
    className: `${attr.className || 'rnd-container'} ${attr.lockClassName || 'rnd-container'}`,
    style: attr.style || {},
  };
}) <StyledRndProps>`

  &.${props => props.className} {
    ${(props) => `${
      { ...props.defaults }
    }`}
  }
  &.${props => props.lockClassName} {
    position: 'absolute';
  }
  &.locked {
    position: fixed;
    top: ${(props) => props.style?.top};
    left: ${(props) => props.style?.left};
    width: ${(props) => props.style?.width};
    height: ${(props) => props.style?.height};
    pointer-events: none;
  }
`;
function isPercents(percentages: Size | string | number | undefined): percentages is Percents {
  return percentages !== undefined &&
    typeof percentages === 'object' &&
    isPercent(percentages.width) &&
    isPercent(percentages.height);
}
function broadcastEvent(this: FileViewer) {
  const customEvent = new CustomEvent('onResize');
  const child = this.childRef.current || document.getElementById(this.props.child.id!);
  const ld = document.getElementById(this.props.ld.id);
  if (child) {
    child.dispatchEvent(customEvent);
  }
  if (ld) {
    ld.dispatchEvent(customEvent);
  }
}

class FileViewer extends React.Component<FVProps, DraggableState> {

  private binarySearchRange = (size: number, range: SizeRange): number => {
    let low = 0;
    let high = range.length - 1;

    while (low <= high) {
      const mid = Math.floor((low + high) / 2);
      const midVal = range[mid];

      if (midVal === size) {
        return midVal;
      } else if (size < midVal) {
        high = mid - 1;
      } else {
        low = mid + 1;
      }
    }
    if (low >= range.length) return range[high];
    if (high < 0) return range[low];
    return (Math.abs(range[low] - size) < Math.abs(range[high] - size)) ? range[low] : range[high];
  };
  state: DraggableState;
  fv: FileViewer;
  rnd: Rnd | null = null;
  rndElement: HTMLDivElement | null = null;
  parent: ParentData;
  broadcastEvent = broadcastEvent.bind(this);
  childRef: React.RefObject<HTMLDivElement>;
  childElement: HTMLDivElement | null = null;
  parentElement: HTMLDivElement | null = null;
  private minSize!: Percents | 'fit-content';
  private maxSize!: Percents | 'fill-parent' | 'fit-content';
  defaultSize!: Percents | Size | "fit-content";
  defaults = {} as DefaultData;
  constructor(props: FVProps) {
    super(props);
    this.parent = props.parent;
    this.childRef = props.childRef;

    console.log('props', props);
    this.state = {
      width: 'auto',
      height: 'auto',
      x: 0,
      y: 0,
      loading: true,
      locked: props.locked,
      errorMessage: '',
      components: [] as React.ComponentType<ChildProps>[],
      adjustingWidth: false,
      adjustingHeight: false,
      lastMouseX: 0,
      isDragging: false,
      lastMouseY: 0,
      deltaX: 0,
      deltaY: 0,
      distanceL: 0,
      distanceT: 0,
      distanceR: 0,
      distanceB: 0,
      currentX: 0,
      currentY: 0
    };
    this.fv = this;
  }

  setMouseData = setMouseData.bind(this);
  setPosition = setPosition.bind(this);
  setSize = setSize.bind(this);
  setStatus = setStatus.bind(this);
  setDimensions = setDimensions.bind(this);
  getUseableStyles = getUseableStyles.bind(this);
  getMouseData = getMouseData.bind(this);
  get status() { return getStatus.bind(this)(); };
  get dimensions() { return getDimensions.bind(this)(); };
  setDefaultSize = setDefaultSize.bind(this);
  setDefaultPosition = setDefaultPosition.bind(this);
  range: SizeRanges = {
    width: [-this.props.parent.size.width, -this.props.parent.size.width * 0.9, -this.props.parent.size.width * 0.775, -this.props.parent.size.width * 0.625, -this.props.parent.size.width * 0.375, -this.props.parent.size.width * 0.225, -this.props.parent.size.width * 0.1, 0, this.props.parent.size.width * .1, this.props.parent.size.width * .225, this.props.parent.size.width * .375, this.props.parent.size.width * .625, this.props.parent.size.width * .775, this.props.parent.size.width * .9, this.props.parent.size.width],
    height: [-this.props.parent.size.height, -this.props.parent.size.height * 0.9, -this.props.parent.size.height * 0.775, -this.props.parent.size.height * 0.625, -this.props.parent.size.height * 0.375, -this.props.parent.size.height * 0.225, -this.props.parent.size.height * 0.1, 0, this.props.parent.size.height * .1, this.props.parent.size.height * .225, this.props.parent.size.height * .375, this.props.parent.size.height * .625, this.props.parent.size.height * .775, this.props.parent.size.height * .9, this.props.parent.size.height]
  }
  positionMap: PositionMap = {
    x: [-this.props.parent.bounds.left, -this.props.parent.bounds.left * 0.9, -this.props.parent.bounds.left * 0.775, -this.props.parent.bounds.left * 0.625, -this.props.parent.bounds.left * 0.375, -this.props.parent.bounds.left * 0.225, -this.props.parent.bounds.left * 0.1, 0, this.props.parent.bounds.left * .1, this.props.parent.bounds.left * .225, this.props.parent.bounds.left * .375, this.props.parent.bounds.left * .625, this.props.parent.bounds.left * .775, this.props.parent.bounds.left * .9, this.props.parent.bounds.left],
    y: [-this.props.parent.bounds.top, -this.props.parent.bounds.top * 0.9, -this.props.parent.bounds.top * 0.775, -this.props.parent.bounds.top * 0.625, -this.props.parent.bounds.top * 0.375, -this.props.parent.bounds.top * 0.225, -this.props.parent.bounds.top * 0.1, 0, this.props.parent.bounds.top * .1, this.props.parent.bounds.top * .225, this.props.parent.bounds.top * .375, this.props.parent.bounds.top * .625, this.props.parent.bounds.top * .775, this.props.parent.bounds.top * .9, this.props.parent.bounds.top]
  }
  adjustmentRange: SizeRanges = {
    width: [-this.props.parent.size.width, -this.props.parent.size.width * 0.925, -this.props.parent.size.width * 0.8, -this.props.parent.size.width * 0.685, -this.props.parent.size.width * 0.335, -this.props.parent.size.width * 0.200, -this.props.parent.size.width * 0.08, 0, this.props.parent.size.width * .08, this.props.parent.size.width * .200, this.props.parent.size.width * .335, this.props.parent.size.width * .685, this.props.parent.size.width * .8, this.props.parent.size.width * .925, this.props.parent.size.width],
    height: [-this.props.parent.size.height, -this.props.parent.size.height * 0.925, -this.props.parent.size.height * 0.8, -this.props.parent.size.height * 0.685, -this.props.parent.size.height * 0.335, -this.props.parent.size.height * 0.200, -this.props.parent.size.height * 0.08,0, this.props.parent.size.height * .08, this.props.parent.size.height * .200, this.props.parent.size.height * .335, this.props.parent.size.height * .685, this.props.parent.size.height * .8, this.props.parent.size.height * .925, this.props.parent.size.height]
  }
  adjustPosition = adjustPosition.bind(this);

  adjustSize = adjustSize.bind(this);
  get position(): Position { return getPosition.bind(this)(); };
  get size() { return getSize.bind(this)(); };
  components: React.ElementType<ChildProps>[] = [];
  setComponents: ((components: React.ElementType<ChildProps>[]) => void) = (components) => {
    this.components = components;
  };

  handleShrink = handleShrink.bind(this);
  shouldMove = shouldMove.bind(this);
  get parentRect() {
    if (!this.parent.ref.current) {
      console.error(`Parent ref not attached!\nParent Ref:\n${this.parent.ref}\nParent Ref Current:\n`, this.parent.ref.current);
      return null as never;
    }
    return this.parent.ref.current.getBoundingClientRect();
  }
  handleResize = handleResize.bind(this);
  onDrag = onDrag.bind(this);
  onResizeStop = onResizeStop.bind(this);
  get domRect() {
    return this.rndRef.current?.getSelfElement()?.getBoundingClientRect()!;
  }
  onResize = onResize.bind(this);
  onDragStop = onDragStop.bind(this);
  onDragStart = onDragStart.bind(this);
  // onResizeStart: RndResizeStartCallback = (e, dir, elementRef) => {
  //   const { width, height, x, y } = elementRef.style;
  //   const { currentX: lastMouseX, currentY: lastMouseY } = this.getMouseData(e);
  //   if (dir === 'left' || dir === 'bottomLeft' || dir === 'topLeft' || dir === 'bottomRight' || dir === 'right' || dir === 'topRight') {
  //     if (dir === 'bottomLeft' || dir === 'topLeft' || dir === 'bottomRight' || dir === 'topRight') {
  //       this.setState({ adjustingHeight: true, adjustingWidth: true, width: parseFloat(width), height: parseFloat(height), lastMouseX, lastMouseY });
  //     } else {
  //       this.setState({ adjustingWidth: true, width: parseFloat(width), height: parseFloat(height), lastMouseX, lastMouseY });
  //     }
  //   } else {
  //     this.setState({ adjustingHeight: true, width: parseFloat(width), height: parseFloat(height), lastMouseX, lastMouseY });
  //   }
  // }d
  ref: React.RefObject<FileViewer> = React.createRef();
  rndRef: React.RefObject<Rnd> = React.createRef();
  componentDidMount = componentDidMount.bind(this);
  componentWillUnmount(): void {
    this.rndRef.current?.getSelfElement()?.removeEventListener('dblclick', (e) => {
      e.preventDefault();
      this.setState({ width: this.defaults.width! as CSSSize | number, height: this.defaults.height! as CSSSize | number });
    });
  }
  setMin = (element: React.RefObject<HTMLDivElement>) => {
    if (!element.current) return;
    this.minSize = { width: element.current.offsetWidth, height: element.current.offsetHeight };
  }
  render() {

    const defaults = {
      width: this.defaults.width,
      height: this.defaults.height,
      x: this.defaults.x,
      y: this.defaults.y
    }
    console.log('state', this.state);
    console.log('DEFAULTS:', this.defaults)
    console.log('RND VALUES:', this.rndRef.current?.props)
    const getClosestSnapPoint: RndResizeCallback = (e, direction, ref, delta, position) => {
      this.setState({
        ...this.adjustPosition(position),
        width: ref.offsetWidth,
        height: ref.offsetHeight,
      });
    }
    const enableResizing = {
      bottom: !this.props.locked,
      top: !this.props.locked,
      left: !this.props.locked,
      right: !this.props.locked,
      bottomLeft: !this.props.locked,
      bottomRight: !this.props.locked,
      topLeft: !this.props.locked,
      topRight: !this.props.locked,
    }
    return (
      <Rnd
        id={this.props.id}
        ref={ (ref: Rnd) => this.rnd = ref }
        $defaultCss={ this.defaults.css! }
        className="prop-box"
        bounds=".resize-area"
        dragGrid={ [this.props.parent.size.width / 48, this.props.parent.size.height / 48] }
        resizeGrid={ [this.props.parent.size.width / 32, this.props.parent.size.height / 32] }
        //maxHeight={ '100%' }
        //maxWidth={ '100%'}
        minHeight={ 'auto' }
        minWidth={ 'fit-content'}
        size={ { width: this.state.width, height: this.state.height } }
        position={ { x: this.state.x, y: this.state.y } }
        resizeHandleClasses={ handleClasses }
        resizeHandleWrapperClass={ 'handle-wrapper' }
        cancel={ '.locked' }
        enableResizing={ enableResizing }
        onResizeStart={ (e, dir, ref) => {
          this.broadcastEvent();
          const {height, width} = window.getComputedStyle(ref);
          this.setState({ width: parseInt(width), height: parseInt(height) });
          console.log('Mouse:', e)
          this.setState({ currentX: e.screenX, currentY: e.screenY})
        }}
        onResize={ (e, dir, ref, delta, position) => {
          this.broadcastEvent();
          console.log('event:', e, '\ndir:', dir, '\nref:', ref, '\ndelta:', delta, '\nposition:', position);
          const computedStyle = window.getComputedStyle(ref);
          let { width, height } = { width: parseInt(computedStyle.width), height: parseInt(computedStyle.height) };
          console.log('height:', height, '\nwidth:', width)
          const screenY = (e instanceof MouseEvent && this.state.currentY - e.screenY);
          const screenX = (e instanceof MouseEvent && this.state.currentX - e.screenX);
          if (typeof screenY !== 'number' || typeof screenX !== 'number') {
            throw new Error(`Mouse Event not registered!`)
          }
          const y = this.state.y - screenY;
          const x = this.state.x - screenX;
          if ((dir === 'bottom' || dir === 'top') && (e instanceof MouseEvent || e instanceof TouchEvent)) {
            if (dir === 'top') {
              this.setState({ height: height + screenY })
            } else {
              this.setState({height: height - screenY})
            }
          } else if ((dir === 'left' || dir === 'right') && (e instanceof MouseEvent || e instanceof TouchEvent)) {
            if (dir === 'left') {
              this.setState({ width: width + screenX })
            } else {
              this.setState({ width: width - screenX})
            }
          } else {
            if (!(e instanceof MouseEvent) && !(e instanceof TouchEvent)) {
              throw new Error('No Mouse or Touch event registered!')
            }
            if (dir === 'topLeft') {
              this.setState({ height: height + screenY, width: width + screenX })
            } else if (dir === 'bottomLeft') {
              this.setState({ height: height - screenY, width: width + screenX })
            } else if (dir === 'topRight') {
              this.setState({ height: height + screenY, width: width - screenX })
            } else {
              this.setState({ height: height - screenY, width: width - screenX })
            }
          }
          this.broadcastEvent();
        }}
        disableDragging={this.state.locked}
        onResizeStop={ (e, dir, ref,) => {

          this.broadcastEvent();
        }}
        onDragStop={ this.onDragStop }
        //onResizeStart={ this.onResizeStart }
        onDragStart={ this.onDragStart }
        onDrag={ this.onDrag }
        //onResize={ this.onResize }
        default={ defaults }

        dragAxis='both'
      >
        { this.props.children }
      </Rnd>
    );
  }
}

export default FileViewer;
