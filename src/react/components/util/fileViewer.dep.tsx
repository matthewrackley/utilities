
const ForwardingComponent = React.forwardRef<HTMLDivElement, ChildProps>(({ children, ...props}, ref) => {
  return React.cloneElement(children, { ...props, ref })
})
class FileViewer extends React.Component<Props, DraggableState> {

  getMouseData(ev: DraggableEvent): MouseData {
    let mouseData = {} as MouseData;
    if (!this.parentRef.current) {
      console.error(`Parent ref not attached!\nParent Ref:\n${this.parentRef}\nParent Ref Current:\n`, this.parentRef.current);
      return void 0 as never;
    }
    const { left: parentLeft, right: parentRight, top: parentTop, bottom: parentBottom } = this.parentRef.current.getBoundingClientRect();
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
  get status() {
    return {
      loading: this.state.loading,
      errorMessage: this.state.errorMessage,
      adjustingWidth: this.state.adjustingWidth,
      adjustingHeight: this.state.adjustingHeight,
      isDragging: this.state.isDragging
    } as Status;
  };
  get position(): Position {
    var result = {} as Position;
    try {
      if (this.ref.current) {
        result = this.ref.current.getDraggablePosition();
      }
    } catch (err) {
      console.error(`Error getting current element.\nRnd Ref: ${this.ref.current}\nRnd Element:${this.ref.current}`, err);
      throw new Error(`Error getting current element.\nRnd Ref: ${this.ref.current}\nRnd Element:${this.ref.current}`, err)
    } finally {
      return result;
    }
  }
  get size() {
    var result = {} as Size;
    try {
      if (this.ref.current) {
        result = {
          width: this.ref.current.resizable.size.width,
          height: this.ref.current.resizable.size.height
        }
      }
    } catch (err) {
      console.error(`Error getting current element.\nRnd Ref: ${this.ref.current}\nRnd Element:${this.ref.current?.getSelfElement()}`, err);
      throw new Error(`Error getting current element.\nRnd Ref: ${this.ref.current}\nRnd Element:${this.ref.current?.getSelfElement()}`, err)
    } finally {
      return result;
    }
  }
  components: React.ElementType<ChildProps>[] = [];
  setComponents: ((components: React.ElementType<ChildProps>[]) => void) = (components) => {
    this.components = components;
  };

  handleShrink() {
    const { left, top, right, bottom, height, width } = this.domRect;
    const { left: parentLeft, top: parentTop, right: parentRight, bottom: parentBottom } = this.parent.domRect!;
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
  shouldMove = (direction: Direction, d: DraggableData) => {
    const { width, height } = this.size;
    const { left, top, right, bottom, height: rectHeight, width: rectWidth } = this.domRect;
    const { left: parentLeft, top: parentTop, right: parentRight, bottom: parentBottom } = this.parent.domRect!;
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
  get parentRect() {
    var result = {} as DOMRect;
    try {
      if (this.parentRef.current) {
        result = this.parentRef.current.getBoundingClientRect()!;
      }
    } catch (err) {
      console.error(`Parent ref not attached!\nParent Ref:\n${this.parentRef}\nParent Ref Current:\n`, this.parentRef.current, err);
      throw new Error(`Parent ref not attached!\nParent Ref:\n${this.parentRef}\nParent Ref Current:\n`, this.parentRef.current, err)
    } finally {
      return result;
    }
  }

  handleResize: RndResizeCallback = (e, direction, ref, d, pos) => {
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
  onDrag = (e: DraggableEvent, d: DraggableData) => {
    const { width, height } = this.props.parent.size;
    const { left, right, top, bottom } = this.parentRect;
    if (
      (d.deltaY < 0 && d.y === top) ||
      (d.deltaY > 0 && d.y + this.size.height === bottom) ||
      (d.deltaX < 0 && d.x === left) ||
      (d.deltaX > 0 && d.x + this.size.width === right)
    ) {
      this.handleShrink();
    }
  }
  onResizeStop: RndResizeCallback = (e, dir, ref, delta, position) => {
    this.setState({
      width: parseFloat(ref.style.width),
      height: parseFloat(ref.style.height),
      x: position.x,
      y: position.y,
      adjustingHeight: false,
      adjustingWidth: false
    });
  }
  onResizeStart: RndResizeStartCallback = (e, dir, elementRef) => {
    const { width, height, x, y } = this.getUseableStyles(elementRef);
    const { currentX: lastMouseX, currentY: lastMouseY } = this.getMouseData(e);
    if (dir === 'left' || dir === 'bottomLeft' || dir === 'topLeft' || dir === 'bottomRight' || dir === 'right' || dir === 'topRight') {
      if (dir === 'bottomLeft' || dir === 'topLeft' || dir === 'bottomRight' || dir === 'topRight') {
        this.setState({ adjustingHeight: true, adjustingWidth: true, width: parseFloat(width), height: parseFloat(height), lastMouseX, lastMouseY });
      } else {
        this.setState({ adjustingWidth: true, width: parseFloat(width), height: parseFloat(height), lastMouseX, lastMouseY });
      }
    } else {
      this.setState({ adjustingHeight: true, width: parseFloat(width), height: parseFloat(height), lastMouseX, lastMouseY });
    }
  }
  ref: React.RefObject<Rnd> = React.createRef();
  componentDidMount(): void {
    this.parent.domRect = this.parentElement?.getBoundingClientRect()!;
    this.rnd = this.handleRef(this.ref);
    const rndEl = this.rnd.getSelfElement();
    if (rndEl) {
      const selfStyles = this.getUseableStyles(rndEl);
      if (selfStyles) {
        this.setState({ width: parseFloat(selfStyles.width), height: parseFloat(selfStyles.height), ...this.rnd.getDraggablePosition(), loading: false });
      } else {
        this.setState({ width: rndEl.offsetWidth, height: rndEl.offsetHeight, ...this.rnd.getDraggablePosition(), loading: false });
      }
    } else {
      if (this.parentElement) {
        this.setState({ width: this.rnd.getOffsetWidth(this.parentElement), height: this.rnd.getOffsetHeight(this.parentElement), ...this.rnd.getDraggablePosition() });
      }
    }
    console.log('getSelfElement().style.height: ', this.ref.current?.getSelfElement()?.style.height);
    this.ref.current?.getSelfElement()?.addEventListener('dblclick', (e) => {
      e.preventDefault();
      this.setState({ width: this.defaults.width!, height: this.defaults.height! });
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
  componentWillUnmount(): void {
    this.ref.current?.getSelfElement()?.removeEventListener('dblclick', (e) => {
      e.preventDefault();
      this.setState({ width: this.defaults.width!, height: this.defaults.height!, ...this.rnd.getDraggablePosition() });
    });
  }
  setMin = (element: React.RefObject<HTMLDivElement>) => {
    if (element.current) {
      this.defaults.min = { width: element.current.offsetWidth, height: element.current.offsetHeight };
    }
  }
  render() {
    return (
      <>
        <StyledRnd
          ref={ this.ref }
          defaults={ css }
          className={`prop-box${this.props.locked ? ' locked' : ''}`}
          bounds=".resize-area"
          dragGrid={ [this.props.parent.size.width / 48, this.props.parent.size.height / 48] }
          resizeGrid={ [this.props.parent.size.width / 32, this.props.parent.size.height / 32] }
          maxHeight={ /*'auto'*/this.defaults.max.height }
          maxWidth={ /*'auto'*/ this.defaults.max.width}
          minHeight={ /*'auto'*/this.defaults.min.height }
          minWidth={ /*'auto'*/this.defaults.min.width }
          size={ { width: this.defaults.width, height: this.defaults.height } }
          position={ { x: this.defaults.x, y: this.defaults.y } }
          resizeHandleClasses={ handleClasses }
          dragHandleClassName='ld-handle'
          cancel={'.x-cancel'}
          disableDragging={this.props.locked}
          onResizeStop={ this.onResizeStop }
          onDragStop={ this.onDragStop }
          onResizeStart={ this.onResizeStart }
          onDragStart={ this.onDragStart }
          onDrag={ this.onDrag }
          onResize={ this.onResize }
          default={defaults}
          dragAxis='both'
        >
          <ForwardingComponent ref={this.childRef} {...this.props.childProps} >
            {this.props.children}
          </ForwardingComponent>
        </StyledRnd>
      </>
    );
  }
}

export default FileViewer;
function isPercents<T extends Size | Percents | DefaultCSS>(prop: T): prop is T extends Percents ? T : never {
  return typeof prop.width === 'number' &&
    typeof prop.height === 'number' &&
    isPercent(prop.width) &&
    isPercent(prop.height);
}
function isDefaultCSS<T extends Size | Percents | DefaultCSS>(prop: T): prop is T extends DefaultCSS ? T : never {
  const defaultCSSValues = ['fit-content', '100%', 'auto'] as (number | string)[];
  return defaultCSSValues.includes(prop.width) && defaultCSSValues.includes(prop.height);
}
function isSize<T extends Size | Percents | DefaultCSS>(prop: T): prop is T extends Size ? T : never {
  return typeof prop.width === 'number' &&
    typeof prop.height === 'number' &&
    prop.width > 1 &&
    prop.height > 1;
}
function isDefaultValue<T extends Size | Percents | DefaultCSS>(prop: T): prop is T extends Percents | Size ? T extends Percents ? T : T : T {
  if (typeof prop.width === 'number' && typeof prop.height === 'number') {
    if (isPercents(prop)) {
      return isPercents(prop);
    } else {
      return isSize(prop);
    }
  } else {
    return isDefaultCSS(prop);
  }
}
function handleData(data: Size | Percents | DefaultCSS, type: 'max' | 'min' | 'default') {
  if (isPercents(data)) {
    if (type === 'default') {
      this[type] = { ...this.setDefaultSize(data), ...this.setDefaultPosition(data) };
    } else {
      this[`${type}Size` as const] = this.setDefaultSize(data);
    }
  }
  if (isSize(data)) {
    if (type === 'default') {
      this[type] = { ...data, ...this.setDefaultPosition(data)}
    } else {
      this[`${type}Size` as const] = data;
    }
  }
  if (isDefaultCSS(data)) {
    if (!this.css) {
      this.css = {} as typeof this.css;
    }
    for (const key of ['width', 'height'] as const) {
      this.css[key === 'width' && (type === 'max' || type === 'min') ? `${type}-${key}` as const : key] = data[key];
    }
    this.css.position = 'relative';
    this.css.display = 'flex';
  }
}
function setData() {
  const props = this.props;
  if (props.minSize) {
    this.handleData(props.minSize, 'min');
  }
  if (props.maxSize) {
    this.handleData(props.maxSize, 'max');
  }
  if (props.defaultSize) {
    this.handleData(props.defaultSize, 'default');
  } else {
    this.handleData({ width: 0.55, height: 0.55 }, 'default');
  }
}
