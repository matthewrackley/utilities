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


    // if (this.childRef.current) {

    // }
    // const rnd = this.rnd;

    // const parent = {
    //   width: this.parent.size.width,
    //   height: this.parent.size.height,
    // };
    // const onMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    //   if (!this.state.isDragging) return;
    //   let deltaX = event.clientX - this.state.lastMouseX;
    //   let deltaY = event.clientY - this.state.lastMouseY;
    //   this.setState({ deltaX, deltaY, lastMouseX: event.clientX, lastMouseY: event.clientY });
    //   const target = event.target!;
    //   const n = {
    //     width: parseFloat(String(this.state.width)),
    //     height: parseFloat(String(this.state.height))
    //   };
    //   const min = {
    //     width: this.defaults.min?.width || this.childRef.current?.offsetWidth || 0.225 * this.props.parent.size.width,
    //     height: this.defaults.min?.height || this.childRef.current?.offsetHeight || 0.225 * this.props.parent.size.height,
    //   };
    //   const def = {
    //     width: this.defaults.width || this.size.width,
    //     height: this.defaults.height || this.size.height
    //   };
    //   const withinSize = (inc: boolean = false, dir: '^v' | '<>' = '<>') => {
    //     return dir === '^v'
    //       ? !inc
    //         ? n.height <= (min.height)
    //         : n.height <= parseFloat(String(this.state.height))
    //       : !inc
    //         ? n.width <= (min.width)
    //         : n.width <= parseFloat(String(this.state.width));
    //   };
    //   const withinPosition = (side: 'right' | 'left' = 'left', dir: '^' | 'v' | '<>' = '<>') => {

    //     const domRect = this.ref.current?.getSelfElement()?.getBoundingClientRect()!;

    //     const left = this.position.x;
    //     const top = this.position.y;
    //     const right = this.ref.current?.getSelfElement()?.offsetWidth! + left;
    //     const bottom = this.ref.current?.getSelfElement()?.offsetHeight! + top;
    //     return dir === '^' || dir === 'v'
    //       ? dir === '^'
    //         ? top >= 0 && top <= min.height
    //         : bottom <= parent.height && bottom >= (def.height + (min.height / 2))
    //       : side === 'left'
    //         ? left >= 0 && left <= (min.width)
    //         : right <= parent.width && right >= (def.width + (min.width / 2));
    //   };
    //   if (deltaX > 0) {
    //     // If the element is shrinking on the left side
    //     if (withinPosition() && withinSize()) {
    //       this.setState({ width: Math.min(Math.max(parseFloat(String(this.state.width)) - Math.abs(deltaX), def.width), def.width) });
    //     }
    //     // If the element is growing on the right side
    //     if (withinPosition('right') && withinSize(true)) {
    //       this.setState({ width: parseFloat(String(this.state.width)) + Math.abs(deltaX) });
    //     }
    //   }
    //   console.log(this.position);
    //   if (deltaX < 0) {
    //     // If the element is shrinking on the right side
    //     if (withinPosition('right') && withinSize()) {
    //       this.setState({ width: Math.min(Math.max(parseFloat(String(this.state.width)) - Math.abs(deltaX), def.width), def.width) });
    //       // If the element is growing on the left side
    //     } else if (withinPosition('left') && withinSize(true)) {
    //       this.setState({ width: parseFloat(String(this.state.width)) + Math.abs(deltaX) });
    //     }
    //   }
    //   if (deltaY > 0) {
    //     if (withinPosition('left', '^') && withinSize(false, '^v')) {
    //       this.setState({ height: Math.min(Math.max(parseFloat(String(this.state.height)) - Math.abs(deltaY), def.height), def.height) });
    //     }
    //     if (withinPosition('right', '^') && withinSize(true, '^v')) {
    //       this.setState({ height: parseFloat(String(this.state.height)) + Math.abs(deltaY) });
    //     }
    //   }
    //   if (deltaY < 0) {
    //     if (withinPosition('right', 'v') && withinSize(false, '^v')) {
    //       this.setState({ height: Math.min(Math.max(parseFloat(String(this.state.height)) - Math.abs(deltaY), def.height), def.height) });
    //     }
    //     if (withinPosition('left', 'v') && withinSize(true, '^v')) {
    //       this.setState({ height: parseFloat(String(this.state.height)) + Math.abs(deltaY) });
    //     }
    //   }
    //   this.setState({ width: n.width, height: n.height, ...this.position });
    // };
    // const handleDragResize = (e: DraggableEvent, d: DraggableData) => {
    //   const targetWidth = this.props.parent.size.width * 0.225; // Minimum width when fully left
    //   const targetHeight = this.props.parent.size.height * 0.225; // Minimum height when fully up
    //   const startLeft = this.props.parent.size.width * 0.225; // Starting point for adjustment
    //   const maxLeft = this.props.parent.size.width * 0.375;
    //   const maxTop = this.props.parent.size.height * 0.375;
    //   const maxRight = this.props.parent.size.width * 0.625;
    //   const maxBottom = this.props.parent.size.height * 0.625;
    //   const startTop = this.props.parent.size.height * 0.225; // Starting point for adjustment
    //   const startRight = this.props.parent.size.width * 0.775; // Starting point for adjustment
    //   const startBottom = this.props.parent.size.height * 0.775; // Starting point for adjustment
    //   const original = defaults;
    //   const width = parseFloat(this.state.width.toString());
    //   const height = parseFloat(this.state.height.toString());
    //   const left = d.x;
    //   const top = d.y;
    //   const right = width + d.x;
    //   const bottom = height + d.y;
    //   const maxWidth = this.props.parent.size.width;
    //   const maxHeight = this.props.parent.size.height;
    //   const distanceLeft = Math.min(Math.max(d.x / startLeft, 0), 1);
    //   const distanceTop = Math.min(Math.max(d.y / startTop, 0), 1);
    //   const distanceRight = Math.min(Math.max((width + d.x) / startRight, 0), 1);
    //   const distanceBottom = Math.min(Math.max((height + d.y) / startBottom, 0), 1);
    //   let newHeight = height;
    //   let newWidth = width;
    //   console.log('height', newHeight)
    //   console.log('width', newWidth)
    //   let holder = 0;
    //   const direction = (d: DraggableData) =>
    //     d.deltaX <= 0
    //       ? 'w'
    //     : d.deltaX > 0
    //       ? 'e'
    //     : d.deltaY <= 0
    //       ? 'n'
    //     : d.deltaY > 0
    //       ? 's'
    //     : 'none';
    //   let newX = d.x;
    //   let newY = d.x;
    //   // Case when moving left and hitting the edge or already adjusting width
    //   // if (d.deltaX < 0 && (d.x === 0 || this.state.adjustingWidth)) {
    //   //   // Only adjust width if we're not already smaller than the target width
    //   //   if (width > parent.width * 0.55) {
    //   //     newWidth += d.deltaX; // Decrease width as we're moving left
    //   //     this.state.adjustingWidth = true;
    //   //   }
    //   // } else if (d.deltaX > 0 && (this.state.adjustingWidth || d.x === 0)) {
    //   //   // When moving right from the edge or if we need to adjust the width back
    //   //   if (width < original.width) {
    //   //     newWidth = Math.min(width + d.deltaX, original.width); // Increase width, but do not exceed initial width
    //   //   } else {
    //   //     // Once width is back to initial or if it's already there, move the position instead
    //   //     d.x += d.deltaX;
    //   //     this.state.adjustingWidth = width <= parent.width * 0.55; // Keep adjusting if width is still under threshold
    //   //   }
    //   // } else {
    //   //   // Normal movement, not at an edge and not adjusting width
    //   //   d.x += d.deltaX;
    //   // }

    //   // // Correct negative width just in case
    //   // if (width < parent.width * 0.1) {
    //   //   newWidth = parent.width * 0.1;
    //   // }

    //   // // Ensure d.x does not become negative
    //   // if (d.x < 0) {
    //   //   d.x = 0;
    //   // }
    //   // if (direction(d) === 'left') {
    //   //   if (left > 0 && left <= startLeft && width >= targetWidth) {
    //   //     newWidth = (original.width - targetWidth) * distanceLeft + targetWidth;
    //   //   } else if (right <= maxWidth && right >= startRight && width <= original.width) {
    //   //     newWidth = targetWidth + (original.width - targetWidth) * (1 - distanceRight);
    //   //   }
    //   // }
    //   // if (direction(d) === 'right') {
    //   //   if (left >= 0 && left <= startLeft && width >= targetWidth) {
    //   //     newWidth = targetWidth + (original.width - targetWidth) * (1 - distanceLeft);
    //   //   } else if (right <= maxWidth && right >= startRight && width >= targetWidth) {
    //   //     newWidth = (original.width - targetWidth) * distanceRight + targetWidth;
    //   //   }
    //   // }
    //   // if (direction(d) === 'top') {
    //   //   if (top >= 0 && top <= startTop && height >= targetHeight) {
    //   //     newHeight = (original.height - targetHeight) * distanceTop + targetHeight;
    //   //   } else if (bottom <= maxHeight && bottom >= startBottom && height <= original.height) {
    //   //     newHeight = targetHeight + (original.height - targetHeight) * (1 - distanceBottom);
    //   //   }
    //   // }
    //   // if (direction(d) === 'bottom') {
    //   //   if (top >= 0 && top <= startTop && height >= original.height) {
    //   //     newHeight = targetHeight + (original.height - targetHeight) * (1 - distanceTop);
    //   //   } else if (bottom <= maxHeight && bottom >= startBottom && height >= targetHeight) {
    //   //     newHeight = (original.height - targetHeight) * distanceBottom + targetHeight;
    //   //   }
    //   // }
    //   // if (d.x <= startLeft && width >= 0) {
    //   //   // Calculate the dynamic width for shrinking
    //   //     /**
    //   //      * @see Algebra - This is an explanation of the algebraic equation used to calculate the new width
    //   //      * ---
    //   //      * 1. 'w' = width = `100 x 0.55` ;
    //   //      * 2. 't' = target = `100 x 0.1` ;
    //   //      * 3. 'd' = distance = `x ÷ (100 x .225)`:
    //   //      * 4. 'z' = resulting width = `((w - t) x p) + t` | `z + t = (w - t) x p` ;
    //   //      * z = (w - t) x
    //   //      */
    //   //     newWidth = (original.width - targetWidth) * distanceLeft + targetWidth;
    //   //     //newWidth = targetWidth + (original.width - targetWidth) * (1 - distance.left);
    //   // } else if (width + d.x >= startRight && width >= 0) {
    //   //   if (d.d.deltaX > 0) {
    //   //     newWidth = (original.width - targetWidth) * distanceRight + targetWidth;
    //   //   } else {
    //   //     newWidth = targetWidth + (original.width - targetWidth) * (1 - distanceRight);

    //   //   }
    //   // }
    //   // if (d.deltaY < 0 && d.y <= startTop && height >= 0) {
    //   //   newHeight = (original.height - targetHeight) * distanceTop + targetHeight;
    //   //   //newHeight = targetHeight + (original.height - targetHeight) * (1 - distance.top);
    //   // } else if (height + d.y >= startBottom && height >= 0) {
    //   //   if (d.deltaY > 0) {
    //   //     newHeight = (original.height - targetHeight) * distanceBottom + targetHeight;
    //   //   } else {
    //   //     newHeight = targetHeight + (original.height - targetHeight) * (1 - distanceBottom);
    //   //   }
    //   // }
    //   this.setState({ width: newWidth, height: newHeight, x: d.x, y: d.y });
    // }

    // const handleDelta: HandleDelta = (event, d) => {

    // }

    // const onDrag: RndDragCallback = (e, data) => {
    //   let newWidth = parseFloat(this.state.width.toString());
    //   let newHeight = parseFloat(this.state.height.toString());

    //   // Right boundary
    //   if (data.x + newWidth > parent.width) {
    //     newWidth = parent.width - data.x;
    //   }
    //   // Left boundary
    //   if (data.x < 0) {
    //     newWidth += data.x; // Reduce width as it moves out of left boundary
    //     data.x = 0; // Reset x to stick to the left boundary
    //   }

    //   // Bottom boundary
    //   if (data.y + newHeight > parent.height) {
    //     newHeight = parent.height - data.y;
    //   }
    //   // Top boundary
    //   if (data.y < 0) {
    //     newHeight += data.y; // Reduce height as it moves out of top boundary
    //     data.y = 0; // Reset y to stick to the top boundary
    //   }

    //   // Update state to adjust size and position
    //   this.setState({
    //     width: newWidth,
    //     height: newHeight,
    //     x: data.x,
    //     y: data.y,
    //   });
    // };
