/**
 * @file resizeArea.tsx
 * @description
 * @author Matthew Allen Rackley
 * @copyright [Matthew Rackley's Github](https://www.github.com/matthewrackley "Matthew Rackley on github.com")
 */
import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

import childrenEnhancer from '@components/headless/childrenEnhancer';

import FileViewer from './fileViewer';
import { ContainerElement, HTMLChildren } from './types/RndBnd.types';

interface ParentProps {
  height: string | number;
  width: string | number;
  children?: React.ReactNode;
  className?: string;
  maxCount?: number;
  __count: number;
  get 'data-count'(): number;
  element: HTMLDivElement;
}
interface SectionProps extends ParentProps {
  shape: 'square' | 'rectangle' | 'title-box' | 'column' | 'row';
  proportion: '1/8' | '1/4' | '1/3' | '3/8' | '1/2' | '5/8' | '2/3' | '3/4' | '7/8' | '1';
  parentRef: React.RefObject<HTMLDivElement>;
  containerRef: React.RefObject<HTMLDivElement>;
}
interface ContainerProps extends ParentProps {
  parentRef: React.RefObject<HTMLElement>;
  sectionRef: React.RefObject<HTMLChildren<[...HTMLDivElement[]]['length'] extends this['data-count'] ? [...HTMLDivElement[]] : never>>;
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
const resizeCounter: Counter = counter() as Counter;
abstract class Parent extends React.Component<SectionProps> {
  abstract render(): React.ReactNode;
}
let parentClassName = 'resize-area';
const ContainerDiv = <N extends number>() => styled.div.attrs<ContainerProps>((attr) => {

})``;
type ComputeStyling = <T extends HTMLElement, S extends string>(el: T, property?: S | null) => T extends HTMLElement ? S extends string ? string : CSSStyleDeclaration & { [el: string]: T } : { _error: 'Element is null' };
/**
 * @function getComputedStyle
 * @description This function is used to get the computed styling of an element.
 * @param el The element to get the computed styling of.
 * @param property The property to get the computed styling of.
 * @returns The computed styling of the element, or the value of the property if it is provided.
 */
function getComputedStyle<T extends HTMLElement, S extends string | null = null>(el: T, property: S | null = null) {
  const style = window.getComputedStyle(el) as CSSStyleDeclaration & { [el: string]: T };
  return (el !== undefined ? typeof property === 'string' ? style.getPropertyValue(property) : style : { _error: 'Element is null' }) as T extends HTMLElement ? S extends string ? string : CSSStyleDeclaration & { [el: string]: T } : { _error: 'Element is null' };
}
const SectionDiv = styled.div.attrs<SectionProps>((attr) => {
  /**
   * @note This is used to get the computed styling of the SectionDiv.
   */
  const height = parseFloat(getComputedStyle((attr.ref as React.RefObject<HTMLDivElement>).current!, 'height'));
  const width = parseFloat(getComputedStyle((attr.ref as React.RefObject<HTMLDivElement>).current!, 'width'));
  attr.containerRef = attr.containerRef;
  const childCount = attr.containerRef.current?.children.length
  attr = {
    ...attr,
    get 'data-count'() {
      let i = this.__count ? this.__count : 0;
      return ++i;
    },
    className: `${attr.className}#${attr['data-count']}`,
    shape: attr.shape,
    height: (attr.shape === 'square' || attr.shape === 'column')
      ? height
      : (attr.shape === 'rectangle')
        ? height * 0.25
        : (attr.shape === 'title-box')
          ? height * 0.1
          : attr.height,
    width: attr.width,
  }
  parentClassName = attr._className;
  return attr;
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
    counter: resizeCounter
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
`


interface Props {
  shape: SectionProps['shape'];
  height?: SectionProps['height'];
  width?: SectionProps['width'];
  children?: React.ReactNode;
}
export interface ChildProps {
  parentWidth: ParentSize['width'];
  parentHeight: ParentSize['height'];
  parentRef: React.RefObject<HTMLDivElement>;
}

export type SimpleCSSSize = `${number}px` | `${number}%`;
export interface ParentSize {
  width: number;
  height: number;
}
export const ResizeArea: React.FC<Props> = (props) => {
  const parentRef = useRef<HTMLDivElement>(null);
  const []
  const [parentSize, setParentSize] = useState<ParentSize>({ width: 0, height: 0 });

  useEffect(() => {
    // Function to measure the computed width and height of the grid item
    const measureSize = () => {
      const gridItem = parentRef.current;
      if (gridItem) {
        const computedStyle = window.getComputedStyle(gridItem);
        const width = parseFloat(computedStyle.getPropertyValue('width'));
        const height = parseFloat(computedStyle.getPropertyValue('height'));
        setParentSize({
          width: width as number,
          height: height as number,
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
    <SectionDiv ref={ parentRef } className='resize-area'>
      <FileViewer parent={ { ...parentSize, ref: parentRef! } } />
    </SectionDiv>
  );
};

export default ResizeArea;
