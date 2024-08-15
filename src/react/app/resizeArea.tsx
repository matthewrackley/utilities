/**
 * @file resizeArea.tsx
 * @description
 * @author Matthew Allen Rackley
 * @copyright [Matthew Rackley's Github](https://www.github.com/matthewrackley "Matthew Rackley on github.com")
 */
import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

import childrenEnhancer from '@components/headless/childrenEnhancer';
import Lock, { useLock } from '@assets/lock';
import FileViewer from './fileViewer';
import { Bounds, ContainerElement, HTMLChildren, Size } from './types/RndBnd.types';

interface ParentProps {
  height?: string | number;
  width?: string | number;
  children?: React.ReactNode;
  className?: string;
  maxCount?: number;
  __count?: number;
  get 'data-count'(): number;
  element?: HTMLDivElement;
}
type Proportion = '1/8' | '1/4' | '1/3' | '3/8' | '1/2' | '5/8' | '2/3' | '3/4' | '7/8' | '1';
type Shape = 'square' | 'rectangle' | 'title-box' | 'column' | 'row' | 'pillar';
interface SectionProps extends ParentProps {
  shape?: Shape;
  lockClassName?: string;
  proportion?: Proportion;
  parentRef?: React.RefObject<HTMLDivElement>;
  childRef?: React.RefObject<FileViewer<any>>;
  setClassName?: (className: string) => void;
  handleProportion?: <P extends Proportion = '1'>(number: number, proportion?: P) => number;
  _className?: string;
  counter?: CounterCreator;
}
interface ContainerProps extends ParentProps {
  parentRef: React.RefObject<HTMLElement>;
  childRef: React.RefObject<HTMLChildren<[...HTMLDivElement[]]['length'] extends this['data-count'] ? [...HTMLDivElement[]] : never>>;
}
type CounterCreator = typeof counter;
type Counter = () => number;
function counter(): Counter {
  let count = 0;
  return () => {
    count++;
    return count;
  };
}
function handleProportion<P extends Proportion = '1'>(number: number, proportion: P = '1' as P): number {
  const [numerator, denominator] = proportion.split('/').map(Number) || [1, 1];
  return number * (numerator / denominator);
}

function matchProportion<P extends Proportion = '1'>(number: number, proportion: P): [number, number] {
  const [numerator, denominator] = proportion.split('/').map(Number) || [1, 1];
  const [inverseNumerator, inverseDenominator] = [denominator - numerator, denominator];
  const result = number * (numerator / denominator);
  const remainder = number * (inverseNumerator / inverseDenominator);
  return [result, remainder];
}
const resizeCounter: Counter = counter() as Counter;
abstract class Parent extends React.Component<SectionProps> {
  abstract render(): React.ReactNode;
}
let parentClassName = 'resize-area';
const ContainerDiv = <N extends number>() => styled.div.attrs<ContainerProps>((attr) => {

})``;
type ComputeStyling = <T extends HTMLElement, S extends string>(el: T, property?: S | null) => T extends HTMLElement ? S extends string ? string : CSSStyleDeclaration & { [el: string]: T; } : { _error: 'Element is null'; };
/**
 * @function getComputedStyle
 * @description This function is used to get the computed styling of an element.
 * @param el The element to get the computed styling of.
 * @param property The property to get the computed styling of.
 * @returns The computed styling of the element, or the value of the property if it is provided.
 */
function getComputedStyle<T extends HTMLElement, S extends string | null = null>(el: T, property: S | null = null) {
  const style = window.getComputedStyle(el) as CSSStyleDeclaration & { [el: string]: T; };
  return (el !== undefined ? typeof property === 'string' ? style.getPropertyValue(property) : style : { _error: 'Element is null' }) as T extends HTMLElement ? S extends string ? string : CSSStyleDeclaration & { [el: string]: T; } : { _error: 'Element is null'; };
};
const SectionDiv = styled.div.attrs<SectionProps>((props) => {
  /**
   * @note This is used to get the computed styling of the SectionDiv.
   */
  const height = parseFloat(getComputedStyle((props.ref as React.RefObject<HTMLDivElement>).current!, 'height'));
  const width = parseFloat(getComputedStyle((props.ref as React.RefObject<HTMLDivElement>).current!, 'width'));
  props.childRef = props.childRef;
  const childCount = props.childRef?.current?.children.length;
  props = {
    ...props,
    __count: props.__count || 0,
    get 'data-count'() {
      this.__count = this.__count ? this.__count : 0;
      return this.__count++;
    },
    className: `${props.className}:${props['data-count']}`,
    _className: props.className,
    shape: props.shape,
    handleProportion,
    proportion: props.proportion,
    height: (props.shape === 'square' || props.shape === 'column' || props.shape === 'pillar')
      ? handleProportion(height, props.proportion)
      : (props.shape === 'rectangle')
        ? handleProportion(height * 0.5, props.proportion)
        : (props.shape === 'row')
          ? handleProportion(height * 0.25, props.proportion)
          : (props.shape === 'title-box')
            ? handleProportion(height * 0.1, props.proportion)
            : handleProportion(Number(props.height), props.proportion),
    width: (props.shape === 'square' || props.shape === 'rectangle' || props.shape === 'row' || props.shape === 'title-box')
      ? handleProportion(width, props.proportion)
      : (props.shape === 'pillar')
        ? handleProportion(width * 0.5, props.proportion)
        : (props.shape === 'column')
          ? handleProportion(width * 0.25, props.proportion)
          : handleProportion(Number(props.width), props.proportion),
  };
  parentClassName = props._className ? props._className as string : parentClassName;
  return props;
}).withConfig({
  displayName: 'Resize-Area',
  attrs: [{
    shape: 'square',
    height: '100%',
    width: '100%',
    className: parentClassName,
    setClassName: (className: string) => {
      parentClassName = className;
    },
    counter: () => resizeCounter
  }],
  componentId: 'resize-area',
})`
  &.${(props) => props.className} {
    position: relative;
    display: grid;
    grid-template-columns: 10% 12.5% 15% 25% 15% 12.5% 10%;
    grid-template-rows: 10% 12.5% 15% 25% 15% 12.5% 10%;
    gap: 0px 0px;
    grid-auto-flow: row;
    grid-template-areas:
      "prop-box prop-box prop-box prop-box prop-box prop-box prop-box"
      "prop-box prop-box prop-box prop-box prop-box prop-box prop-box"
      "prop-box prop-box prop-box prop-box prop-box prop-box prop-box"
      "prop-box prop-box prop-box prop-box prop-box prop-box prop-box"
      "prop-box prop-box prop-box prop-box prop-box prop-box prop-box"
      "prop-box prop-box prop-box prop-box prop-box prop-box prop-box"
      "prop-box prop-box prop-box prop-box prop-box prop-box prop-box";
    grid-area: resize-area;
  }

  .${props => props.lockClassName} {
    position: absolute;
    top: 0;
    right: 0;
  }

  .prop-box {
    border: 2px solid #FF9900;
    border-radius: 10px;
    box-shadow: 0 0 0 2px #00000075;
    grid-area: prop-box;
    display: flex;
    place-content: center;
    flex-wrap: wrap;
  }
  position: relative;
  width: 100%;
  height: 100%;
`;
const PropArea = styled.div`
  .prop-area {  display: grid;
    grid-template-columns: 1.5fr 0.5fr;
    grid-template-rows: 0.1fr 1.9fr;
    gap: 0px 0px;
    grid-auto-flow: row;
    grid-template-areas:
      "prop-area-header prop-select"
      "resize-area prop-select";
    grid-area: prop-area;
  }
`;


export interface ChildProps {
  parentWidth: ParentData['size']['width'];
  parentHeight: ParentData['size']['height'];
  parentRef: React.RefObject<HTMLDivElement>;
}

export type SimpleCSSSize = `${number}px` | `${number}%`;
export interface ParentData {
  bounds: Bounds;
  size: Size;
  ref: React.RefObject<HTMLDivElement>;
  element: HTMLDivElement |  null;
}
export const ResizeArea: React.FC<SectionProps> = (props) => {
  const parentRef = React.useRef<HTMLDivElement>(null);
  const childRef = React.useRef<FileViewer<any>>(null);
  const [locked, handleLock] = useLock(false);
  const [parentData, setParentData] = useState<ParentData>({ bounds: { top: 0, bottom: 0, left: 0, right: 0 }, size: { width: 0, height: 0 }, ref: props.parentRef!, element: props.parentRef!.current });

  useEffect(() => {
    // Function to measure the computed width and height of the grid item
    const measureSize = () => {
      const gridItem = props.parentRef?.current;
      if (gridItem) {
        const computedStyle = window.getComputedStyle(gridItem);
        const size = {
          width: parseFloat(computedStyle.getPropertyValue('width')),
          height: parseFloat(computedStyle.getPropertyValue('height'))
        };
        const bounds: Bounds = {
          left: (size.width - (size.width * 0.55)) / 2,
          top: (size.height - (size.height * 0.55)) / 2,
          right: size.width - ((size.width - (size.width * 0.55)) / 2),
          bottom: size.height - ((size.height - (size.height * 0.55)) / 2),
        };
        setParentData({
          size: size,
          bounds: bounds,
          ref: props.parentRef!,
          element: gridItem,
        });
        // You can store or use these values as needed
      }
    };
    // Call the measureSize function after the component has been rendered
    measureSize();
    // You can also listen for window resize events to update the values if needed
    window.addEventListener('resize', measureSize);
    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', measureSize);
    };
  }, []);

  return (
    <SectionDiv
      ref={ parentRef }
      className='resize-area'
      parentRef={ parentRef }
      childRef={ childRef }
      proportion={ props.proportion }
      shape={ props.shape }
      height={ props.height }
      width={ props.width }
      handleProportion={ props.handleProportion }
      data-count={ props['data-count'] }
      counter={ (props.counter) }
      element={ props.parentRef?.current! }
      _className='resize-area'
    >
      <FileViewer parent={ parentData } ref={ childRef } locked={ locked } handleLock={ handleLock } />
    </SectionDiv>
  );
};

export default ResizeArea;
