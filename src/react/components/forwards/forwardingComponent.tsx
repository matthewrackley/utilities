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

import React from 'react';
export type ChildProps<C> = {
  ref: React.RefObject<C>;
  children: React.ReactElement;
}
type ForwardComponentFactory = <P extends ChildProps<C>, C>(props: P) => React.FC<P>;
export const makeForwardingComponent: ForwardComponentFactory = <P extends ChildProps<C>, C>(props: P): React.FC<P> => {
  const { ref, children, ...rest } = props
  return (props = rest) => {
    return (
      <ForwardingComponent  { ...props} ref={ ref }>
        { children }
      </ForwardingComponent>
    )
  }
};
export const ForwardingComponent = <C extends any>(props: ChildProps<C>) => {
  let { ref, ...rest } = props;
  const childProps = rest as Omit<ChildProps<C>, 'ref'> extends React.JSX.IntrinsicAttributes & React.PropsWithoutRef<P> & React.RefAttributes<C> ? Omit<ChildProps<C>, 'ref'> : never
  const ForwardRef = React.forwardRef<C, ChildProps<C>>(({ children, ...childProps }, ref) => {
    return React.cloneElement(children, { ...childProps, ref });
  });
  return (
    <ForwardRef { ...childProps } ref={ ref }>
      { childProps.children }
    </ForwardRef>
  )
};

export default ForwardingComponent;
