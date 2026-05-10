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


import React, { useRef, createRef, forwardRef, ForwardRefExoticComponent, PropsWithoutRef, JSXElementConstructor } from 'react';

type ParentChildComponent = <P extends object, C extends object>(props: ElementProps<P, C>) => React.JSX.Element;
interface RendererProps {
  renderer: (parentRef: React.RefObject<HTMLDivElement>, childRef: React.RefObject<HTMLDivElement>) => React.ReactNode;
  children?: React.ReactNode;
}
interface ElementProps<P = {}, C = {}> {
  parentProps: P;
  childProps: C;
  ParentElement: React.ComponentType<P>;
  ChildElement: React.ComponentType<C>;
  children?: React.ReactNode;
}
export function withOverwrittenProps<P extends object>(
  WrappedComponent: React.ComponentType<P>,
  newProps: Partial<P>,
  children?: React.ReactNode | React.ComponentType<any>,
) {
  return forwardRef<React.ComponentType<P>, P>((props, ref) => {

    const mergedProps = { ...props, ...newProps } as P;
    return (
      <WrappedComponent { ...mergedProps } ref={ ref }>
        { children }
      </WrappedComponent>
    );
  });
}
export const ParentChildElement: ParentChildComponent = (function <P extends object, C extends object>(props: ElementProps<P,C>) {
  return (
    <>
      { withOverwrittenProps(props.ParentElement, { ...props.parentProps }, withOverwrittenProps(props.ChildElement, { ...props.childProps, }, props.children)) }
    </>
  );
});

export const ElementPasser = <P extends object ={},C extends object ={}>(props: ElementProps<P,C>) => {
  const { parentProps, childProps, ParentElement, ChildElement, children } = props;
  const renderer = (parentRef: React.RefObject<HTMLDivElement>, childRef: React.RefObject<HTMLDivElement>): React.ReactNode => (
    <ParentElement ref={ parentRef } { ...parentProps }>
      <ChildElement ref={ childRef } { ...childProps } />
    </ParentElement>
  );
  return (
    <>
      <RefPasser renderer={ renderer }>
        { children }
      </RefPasser>
    </>
  );
};

export const RefPasser: React.FC<RendererProps> = (props) => {
  const parentRef = useRef<HTMLDivElement>(null);
  const childRef = useRef<HTMLDivElement>(null);
  return (
    <>
      { props.renderer(parentRef, childRef) }
    </>
  );

};

export default ElementPasser;
