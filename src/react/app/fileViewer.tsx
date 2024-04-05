/**
 * @file fileViewer.tsx
 * @description
 * @author Matthew Allen Rackley
 * @copyright [Matthew Rackley's Github](https://www.github.com/matthewrackley "Matthew Rackley on github.com")
 */

import React, { useEffect, useRef, useState } from 'react';
import { Rnd, DraggableData, type RndResizeCallback, type RndDragCallback, type RndResizeStartCallback, type RndDragEvent, Position } from 'react-rnd';
import { DraggableEvent } from 'react-draggable';
import { ResizeDirection } from 're-resizable';
import { Route, Routes, useParams } from 'react-router-dom';
import ResizeArea, { type SimpleCSSSize, type ChildProps, ParentSize } from './resizeArea';
import DynamicLoader from './dynamicLoader';
import { ErrorMessage } from 'formik';



interface PositionMap {
  x: [0 | number, number, number, number, number, number, number, number];
  y: [0 | number, number, number, number, number, number, number, number];
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


export type FileList = string[];
export interface FileData {
  directory: string;
  files: FileList;
}
interface ParentData {
  height: number;
  width: number;
  ref: React.RefObject<HTMLDivElement>;
}
interface Size {
  width: number;
  height: number;
}
interface DraggableState {
  width: number | string;
  height: number | string;
  x: number;
  y: number;
  loading: boolean;
  filedata: FileData;
  errorMessage: string;
  components: React.ElementType<any>[];
  adjustingWidth: boolean;
  adjustingHeight: boolean;
  lastMouseX: number;
  isDragging: boolean;
  lastMouseY: number;
}
type XandY = 'topLeft' | 'topRight' | 'bottomLeft' | 'bottomRight';
type XorY = 'top' | 'bottom' | 'left' | 'right';
interface Props<T = {}> {
  parent: ParentData;
  xProps?: T;
}
class FileViewer<P extends object> extends React.Component<Props<P>, DraggableState> {

  private binarySearchRange = (size: number, range: Range): number => {
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
  state: DraggableState;
  fv: FileViewer<P>;
  rnd: Rnd;
  parent: ParentData;
  constructor(props: Props<P>) {
    super(props);
    this.parent = props.parent;
    console.log('props', props);
    this.state = {
      width: 0,
      height: 0,
      x: 0,
      y: 0,
      loading: true,
      filedata: { directory: '', files: [] },
      errorMessage: '',
      components: [] as React.ElementType<P>[],
      adjustingWidth: false,
      adjustingHeight: false,
      lastMouseX: 0,
      isDragging: false,
      lastMouseY: 0,
    };
    this.fv = this;
    this.rnd = this.ref.current!;
    this.setState({ ...this.state })


  }
  stateDefault = {
    width: this.props.parent.width * 0.55,
    height: this.props.parent.height * 0.55,
    x: (this.props.parent.width - (this.props.parent.width * 0.55)) / 2,
    y: (this.props.parent.height - (this.props.parent.height * 0.55)) / 2,
  }
  range: SizeRange = {
    width: [0, this.props.parent.width * .1, this.props.parent.width * .225, this.props.parent.width * .375, this.props.parent.width * .625, this.props.parent.width * .775, this.props.parent.width * .9, this.props.parent.width],
    height: [0, this.props.parent.height * .1, this.props.parent.height * .225, this.props.parent.height * .375, this.props.parent.height * .625, this.props.parent.height * .775, this.props.parent.height * .9, this.props.parent.height]
  }
  adjustmentRange: SizeRange = {
    width: [0, this.props.parent.width * .08, this.props.parent.width * .200, this.props.parent.width * .335, this.props.parent.width * .685, this.props.parent.width * .8, this.props.parent.width * .925, this.props.parent.width],
    height: [0, this.props.parent.height * .08, this.props.parent.height * .200, this.props.parent.height * .335, this.props.parent.height * .685, this.props.parent.height * .8, this.props.parent.height * .925, this.props.parent.height]
  }
  snapToGrid(position: Position): Position {
    const xDiffs = this.range.width.map(point => Math.abs(point - position.x));
    const yDiffs = this.range.height.map(point => Math.abs(point - position.y));
    const xClosest = Math.min(...xDiffs);
    const yClosest = Math.min(...yDiffs);
    return {
      x: this.range.width[xDiffs.indexOf(xClosest)],
      y: this.range.height[yDiffs.indexOf(yClosest)],
    }
  }
  getPosition(position: Position) {
    const xIndice = this.binarySearchRange(position.x, this.range.width);
    const yIndice = this.binarySearchRange(position.y, this.range.height);
    return {
      x: this.range.width[xIndice],
      y: this.range.height[yIndice],
    }

  }
  getSize(size: Size) {
    let yIndice = this.binarySearchRange(size.height, this.range.height);
    let xIndice = this.binarySearchRange(size.width, this.range.width);
    return {
      width: this.range.width[xIndice],
      height: this.range.height[yIndice]
    }
  }
  components: React.ElementType<P>[] = [];
  setComponents: ((components: React.ElementType<P>[]) => void) = (components) => {
    this.components = components;
  };
  errorMessage: string = '';
  setErrorMessage: ((errorMsg: string) => void) = (errorMsg) => {
    this.errorMessage = errorMsg;
  };

  apiFetch: ((url?: string) => void) = (url = '/api/files') => {
    fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      }
    }).then((response) => response.json())
      .then((data: FileData) => this.setState({ filedata: data }))
      .catch((error: Error) => console.error('Error fetching files:', error));
  };



  handleResize = (e, d: DraggableData) => {
    const left = (this.parent.width - (this.parent.width * 0.55)) / 2;
    const top = (this.parent.height - (this.parent.height * 0.55)) / 2;
    const right = (this.parent.width - (this.parent.width * 0.55));
    const bottom = (this.parent.height - (this.parent.height * 0.55));
    let newWidth = parseFloat(String(this.state.width));
    let newHeight = parseFloat(String(this.state.height));
    const minSize = {
      width: 0.225 * this.parent.width,
      height: 0.225 * this.parent.height,
    };


    if (d.deltaX !== 0 && d.x + parseFloat(String(this.state.width)) >= right) {
      newWidth = Math.max(minSize.width, parseFloat(String(this.state.width)));
    }

    if (d.deltaY !== 0 && d.y + parseFloat(String(this.state.height)) >= bottom) {
      newHeight = Math.max(minSize.height, parseFloat(String(this.state.height)));
    }
    this.setState({
      width: newWidth,
      height: newHeight,
      x: d.x,
      y: d.y,
    });
  };
  ref: React.RefObject<Rnd> = React.createRef();

  componentDidMount(): void {
    this.apiFetch();
    console.log(this.ref.current?.getSelfElement()?.style.height);
    this.ref.current?.getSelfElement()?.addEventListener('dblclick', (e) => {
      e.preventDefault();
      this.setState({ ...this.stateDefault });
    });
    const rnd = this.rnd;
    const getPosition = () => this.ref.current?.getDraggablePosition()!;
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
    const onMouseMove = (event: MouseEvent, d: DraggableData) => {
      if (!this.state.isDragging) return;
      let deltaX = event.clientX - this.state.lastMouseX;
      this.setState({ lastMouseX: event.clientX });
      const target = event.target!;
      let newWidth = parseFloat(this.state.width.toString());
      const withinSize = (inc: boolean = false) => {
        return !inc ? newWidth <= (parent.width * 0.225) : newWidth <= this.stateDefault.width;
      }
      const withinPosition = (side: 'right' | 'left' = 'left') => {
        const right = getSize().width + getPosition().x;
        const left = getPosition().x;
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
      console.log(getPosition());
      if (deltaX < 0) {
        // If the element is shrinking on the right side
        if (withinPosition('right') && withinSize()) {
          newWidth = Math.max(newWidth - deltaX, this.parent.width * 0.55);
          // If the element is growing on the left side
        } else if (withinPosition('left') && withinSize(true)) {
          newWidth += Math.abs(deltaX);
        }
      }
      this.setState({ width: newWidth, ...getPosition() });
    }
    {
      // if (getPosition().x === 0 && deltaX < 0) {
      //   // If the element is shrinking on the right side
      //   if (withinPosition('right') && withinSize()) {
      //     newWidth = (parent.width * 0.225) + (this.stateDefault.width - (parent.width * 0.225)) * (1 - distanceLeft);
      //     // If the element is growing on the left side
      //   } else if (withinPosition('left') && withinSize(true)) {
      //     newWidth = (this.stateDefault.width - (parent.width * 0.225)) * distanceRight + (this.parent.width * 0.225);
      //   }
      // }
      // Assuming the element is at x = 0 and trying to move left
      // if (getPosition().x === 0 && deltaX > 0) {
      //   newWidth += Math.abs(deltaX); // Increase width as we're simulating a move left
      // } else if (getPosition().x + getSize().width < this.stateDefault.x && deltaX < 0) {
      //   // Decrease width or move right if possible
      //   newWidth = Math.max(newWidth - deltaX, this.parent.width * 0.55);
      // }
      // const position = this.ref.current?.getDraggablePosition()!;
      // Update the element with the new width

    }
    const onMouseUp = (event: MouseEvent) => {

      this.setState({ isDragging: false });
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);
    }
    const fv = this;
    const onMouseDown = (event: MouseEvent) => {
      console.log(this.state.x);
      console.log(getPosition())
      this.setState({ isDragging: true });
      this.setState({ lastMouseX: event.clientX });
      this.ref.current?.getSelfElement()?.addEventListener('mousemove', onMouseMove);
      this.ref.current?.getSelfElement()?.addEventListener('mouseup', onMouseUp);
    }
    this.ref.current?.getSelfElement()?.addEventListener('mousedown', onMouseDown);
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

      let newWidth = parseFloat(this.state.width as string);
      let newHeight = parseFloat(this.state.height as string);
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
        ref={ this.ref }
        className="prop-box"
        bounds=".resize-area"
        dragGrid={ [parent.width / 48, parent.height / 48] }
        resizeGrid={ [parent.width / 32, parent.height / 32] }
        maxHeight={ parent.height }
        maxWidth={ parent.width }
        minHeight={ parent.height * 0.09 }
        minWidth={ parent.width * 0.09 }
        size={ { width: this.state.width, height: this.state.height } }
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
        onMouseMove={ (e) => {

        }}
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

export default FileViewer;
