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
 * @file resizeArea.tsx
 * @description
 * @author Matthew Allen Rackley
 * @copyright [Matthew Rackley's Github](https://www.github.com/matthewrackley "Matthew Rackley on github.com")
 */
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { v4 as uuid } from 'uuid';
import Lock, { useLock } from '@assets/lock';
import FileViewer from './fileViewer';
import { ModuleConsumer, ModuleProps, Modules, useModuleContext } from '@context/moduleContext';
import useComputedStyles from '@hooks/useComputedStyles';
import { LDHandle } from '../components/util/ldHandle';

function counter(startCount: number = 0): Counter {
  let count = startCount;
  return () => {
    count++;
    return count;
  };
}
function handleProportion<P extends Proportion = '1'>(number: number, proportion: P = '1' as P): number {
  const [numerator, denominator] = proportion.split('/').map(Number) || [1, 1];
  return number * (numerator / denominator);
}
type Result = number & { __result: never; };
type Remainder = number & { __remainder: never; };
function matchProportion<P extends Proportion = '1'>(number: number, proportion: P): [Result, Remainder] {
  const [numerator, denominator] = proportion.split('/').map(Number) || [1, 1];
  const [inverseNumerator, inverseDenominator] = [denominator - numerator, denominator];
  const result = number * (numerator / denominator);
  const remainder = number * (inverseNumerator / inverseDenominator);
  return [result, remainder] as [Result, Remainder];
}

interface StyleSize {
  width: string;
  height: string;
}
function handleShapeProportion(shape: Shape, proportion: Proportion, size: StyleSize) {
  const proportions = {
    height: (shape === 'square' || shape === 'column' || shape === 'pillar')
    ? matchProportion(parseFloat(size.height), proportion)
    : (shape === 'rectangle')
      ? matchProportion(parseFloat(size.height) * 0.5, proportion)
      : (shape === 'row')
        ? matchProportion(parseFloat(size.height) * 0.25, proportion)
        : (shape === 'title-box')
          ? matchProportion(parseFloat(size.height) * 0.1, proportion)
          : matchProportion(parseFloat(size.height), proportion),
  width: (shape === 'square' || shape === 'rectangle' || shape === 'row' || shape === 'title-box')
    ? matchProportion(parseFloat(size.width), proportion)
    : (shape === 'pillar')
      ? matchProportion(parseFloat(size.width) * 0.5, proportion)
      : (shape === 'column')
        ? matchProportion(parseFloat(size.width) * 0.25, proportion)
        : matchProportion(parseFloat(size.width), proportion),
  }
  return {
    result: {
      width: proportions.width[0] as number,
      height: proportions.height[0] as number
    },
    remainder: {
      width: proportions.width[1] as number,
      height: proportions.height[1] as number
    }
  }
}

const SectionDiv = styled.div.attrs<SectionAttr>((attr) => {
  /**
   * @note This is used to get the computed styling of the SectionDiv.
   */

  const count = counter();
  const $__count = count();
  return {
    $__count,
    get '$data-count'(): number {
      return count();
    },
    className: `${attr.className}:[${attr['$data-count']}]`,
    $handleProportion: <P extends Proportion = '1'>(number: number, proportion: P = '1' as P): number => {
      const [numerator, denominator] = proportion.split('/').map(Number) || [1, 1];
      return number * (numerator / denominator);
    },
    ref: attr.ref,
    $shape: attr.$shape,
    $proportion: attr.$proportion,
  }
})<SectionProps>`
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

  .${props => props.$lockClassName} {
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




const LdHandle = styled.div<LDHandleProps>`
  &.ld-handle {
    position: absolute;
    display: flex;
    border-top-left-radius: 0.33rem;
    border-top-right-radius: 0.33rem;
    transform: ${(props) => `translate(0, ${props.$lddata.transform})`};
    left: ${(props) => props.$lddata.left};
    top: ${(props) => props.$lddata.top};
    width: ${(props) => props.$lddata.width };
    height: ${(props) => props.$lddata.height};
    border: 3px solid ${props => props.theme.accent({ variant: props.$variant || 'border' })};
    background-color: ${props => props.theme.background({ variant: props.$variant || 'default' })};
    cursor: move;
  }
  .locked {
    position: fixed;
    top: ${(props) => props.style?.top};
    left: ${(props) => props.style?.left};
    width: ${(props) => props.style?.width};
    height: ${(props) => props.style?.height};
    max-width: ${(props) => props.style?.width};
    min-width: ${(props) => props.style?.width};
    max-height: ${(props) => props.style?.height};
    min-height: ${(props) => props.style?.height};
  }
`;
const LDTitle = styled.h3`
  font-size: 0.75rem;
  padding-left: 1rem;
  position: relative;
  align-self: center;
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  font-weight: 700;
  color: ${(props) => props.theme.accent({ variant: 'primary' })};
`;

const renderableComponents = ['Text', 'Image', 'Video'];
const isRenderableComponent = (value: string): value is RenderableComponent => {
  return renderableComponents.includes(value);
}
interface ComponentSelectorProps {
  onAdd: (value: RenderableComponent) => void;
}
const ComponentSelector: React.FC<ComponentSelectorProps> = (props) => {
  const [value, setValue] = useState<RenderableComponent>('Text');
  const { onAdd } = props;
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newValue = event.target.value;
    if (isRenderableComponent(newValue)) {
      setValue(newValue);
    }
  };
  const handleSubmit = () => {
    onAdd(value);
  }
  return (
    <>
      <select key='component-selector' value={ value } onChange={ handleChange }>
        <option key='Text' value='Text'>Text</option>
        <option key='Video' value='Video'>Video</option>
        <option key='Image' value='Image'>Image</option>
      </select>
      <button onClick={ handleSubmit }>Add Component</button>
    </>
  )
}
interface DataHolderProps {
  id: string;
  component: 'Text' | 'Image' | 'Video';
  onRemove: (id: string) => void;
  parentData: ParentData;
}
const TextComponent = styled.div`

`;
const VideoComponent = styled.div`

`;
const ImageComponent = styled.div`

`;
type BaseData<I extends string | undefined> = I extends string ? {
  width: number;
  height: number;
  rect: DOMRect;
  id: I;
} : {
  width: number;
  height: number;
  rect: DOMRect;
}
const getBaseData = <T extends HTMLElement, I extends string | undefined>(element: T, id: I = undefined as I): BaseData<I> => {
  const computedStyle = window.getComputedStyle(element);
  const rect = element.getBoundingClientRect();
  const width = parseFloat(computedStyle.getPropertyValue('width'));
  const height = parseFloat(computedStyle.getPropertyValue('height'));
  if (id) {
    element.id = id;
  }
  return { width, height, rect, id } as BaseData<I>
}
const DataHolder: React.FC<DataHolderProps> = (props) => {
  const childRef = React.useRef<HTMLDivElement>(null);
  const fvRef = React.useRef<FileViewer>(null);
  const ldRef = React.useRef<HTMLDivElement>(null);
  const [rndData, setRndData] = useState<ElementData>({ width: 0, height: 0, left: 0, right: 0, top: 0, bottom: 0, rect: {} as DOMRect });
  const [childData, setChildData] = useState<ElementData>({ id: uuid(), width: 0, height: 0, left: 0, right: 0, top: 0, bottom: 0, rect: {} as DOMRect });
  const [ldData, setLDData] = useState<LDData>({ id: uuid(), width: 0, height: 0, left: 0, right: 0, top: 0, bottom: 0, transform: '0px' });
  const [locked, handleLock] = useLock(false);
  useEffect(() => {
    // Function to measure the computed width and height of the grid item
    const measureSize = () => {
      let rndEl = {} as HTMLDivElement | null;
      let data = {} as LDData;
      if (fvRef.current && (rndEl = fvRef.current.rndElement)) {
        const { rect: rndRect, ...rndSize } = getBaseData(rndEl);
        const eHandle = rndEl.querySelector('e-handle');
        if (ldRef.current) {
          const ldComputedStyle = window.getComputedStyle(ldRef.current);
          const ldRect = ldRef.current.getBoundingClientRect();
          ldRef.current.id = ldData.id;
          data.id = ldData.id;
          data.height = ldRect.height || parseFloat(ldComputedStyle.getPropertyValue('height'));
          data.bottom = rndData.rect.top;
          data.top = rndData.rect.top + data.height + 3;
          data.left = rndData.rect.left;
          data.right = rndData.rect.right;
          data.transform = `${-data.height}px`;
          console.log('LD RECT:\n', ldRect);
          if (eHandle && eHandle instanceof HTMLDivElement) {
            data.width = `${rndRect.width - (parseFloat(eHandle.style.width) / 2)}px`;
          } else {
            data.width = `${rndRect.width - 10}px`;
          }
          setLDData(data);
        }
        setRndData({ width: rndSize.width, height: rndSize.height, left: rndRect.left, right: rndRect.right, bottom: rndRect.bottom, top: rndRect.top, rect: rndRect });
      }
      if (childRef.current) {
        const { width, height, rect, id } = getBaseData(childRef.current, childData.id!)
        const { left, right, top, bottom } = rect;
        setChildData({ id, width, height, left, right, top, bottom, rect });
        console.log('Child Data:\n', childData)
      }
    }
    // Call the measureSize function after the component has been rendered
    measureSize();
    // You can also listen for window resize events to update the values if needed
    fvRef.current?.rndElement?.addEventListener('onResize', measureSize);
    ldRef.current?.addEventListener('onResize', measureSize);
    // Clean up the event listener when the component unmounts
    return () => {
      fvRef.current?.rndElement?.removeEventListener('onResize', measureSize)
      ldRef.current?.removeEventListener('onResize', measureSize);
    };
  }, [fvRef.current, ldRef.current]);
  const $lddata: LDData = {
    ...ldData,
    height: '1.5rem'
  }
  return (
    <FileViewer
      child={ childData }
      ld={ldData}
      key={ props.id }
      id={ props.id } // Pass the id for deletion
      parent={ props.parentData }
      childRef={ childRef }
      ref={ fvRef }
      maxSize='fill-parent'
      minSize='fit-content'
      locked={ locked }
    >
      <LDHandle
        lddata={ $lddata }
        ldRef={ ldRef }
        locked={ locked }
        handleLock={ handleLock }
        onRemove={ () => props.onRemove(props.id) }
      />
      {props.component === 'Text' && <TextComponent ref={childRef}>Text Component</TextComponent>}
      {props.component === 'Image' && <ImageComponent ref={childRef}>Image Component</ImageComponent>}
      {props.component === 'Video' && <VideoComponent ref={childRef}>Video Component</VideoComponent>}
    </FileViewer>
  )
}
export const ResizeArea: React.FC<SectionProps> = (props) => {
  const { module } = useModuleContext();
  const parentRef = React.useRef<HTMLDivElement>(null);
  const [parentData, setParentData] = useState<ParentData>({ bounds: { top: 0, bottom: 0, left: 0, right: 0 }, size: { width: 0, height: 0 }, ref: parentRef });
  const [fileViewers, setFileViewers] = useState<FileViewerData[]>([]); // Store the file viewers

  const handleAdd = (value: RenderableComponent) => {
    // Add new FileViewer data with some unique id
    const newFileViewer: FileViewerData = { id: uuid(), component: value };
    setFileViewers([...fileViewers, newFileViewer]);
  };

  const handleRemove = (id: string) => {
    // Filter out the FileViewer with the given id
    setFileViewers(fileViewers.filter(fv => fv.id !== id));
  };
  useEffect(() => {
    // Function to measure the computed width and height of the grid item
    const measureSize = () => {
      if (parentRef.current) {
        const parentRect = parentRef.current.getBoundingClientRect();
        const parentComputedStyle = window.getComputedStyle(parentRef.current);
        const parentSize = {
          width: parseFloat(parentComputedStyle.getPropertyValue('width')),
          height: parseFloat(parentComputedStyle.getPropertyValue('height'))
        };
        const bounds: Bounds = {
          left: (parentSize.width - (parentSize.width * 0.55)) / 2,
          top: (parentSize.height - (parentSize.height * 0.55)) / 2,
          right: ((parentSize.width - (parentSize.width * 0.55)) / 2) + parentSize.width,
          bottom: ((parentSize.height - (parentSize.height * 0.55)) / 2) + parentSize.height,
        };
        setParentData({
          size: parentSize,
          bounds,
          ref: parentRef
        });
      }
    }
    // Call the measureSize function after the component has been rendered
    measureSize();

    // You can also listen for window resize events to update the values if needed
    parentRef.current?.addEventListener('resize', measureSize);
    // Clean up the event listener when the component unmounts
    return () => {
      parentRef.current?.removeEventListener('resize', measureSize);
    };
  }, [parentRef]);
  return (
    <>
      <ComponentSelector onAdd={ handleAdd } />
      <SectionDiv
        ref={ parentRef }
        className='resize-area'
        $parentRef={ parentRef }
        $proportion={ props.$proportion }
        $shape={ props.$shape }
        $handleProportion={ props.$handleProportion }
        $counter={ (props.$counter) }
        $__count={ 0 }
        $data-count={ props['$data-count'] }
        $height={ parentData.size.height }
        $width={ parentData.size.width }
      >
      {fileViewers.map(fv => (
        <DataHolder component={ fv.component } id={fv.id} onRemove={handleRemove} parentData={parentData} />
      ))}
        {/* <FileViewer parent={ parentData } childRef={ childRef } ref={ fvRef } maxSize={ 'fill-parent' } minSize={ 'fit-content' } locked={ locked }>
          <LDHandle
            className={ `ld-handle${locked ? ' locked' : ''}` }
            $lddata={$lddata}
            ref={ ldRef }
          >
            <LDTitle>
              Drag-Handle
            </LDTitle>
            <Lock locked={locked} handleLock={handleLock } />
          </LDHandle>
          <ModuleConsumer ref={childRef} />
        </FileViewer> */}
      </SectionDiv>
    </>
  );
};

export default ResizeArea;
