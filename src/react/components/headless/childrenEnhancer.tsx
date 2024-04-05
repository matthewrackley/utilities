/**
 * @file propsRenderer.tsx
 * @description
 * @author Matthew Allen Rackley
 * @copyright [Matthew Rackley's Github](https://www.github.com/matthewrackley "Matthew Rackley on github.com")
 */
import React, { Children, cloneElement } from 'react';

interface CloneProps<P = any> {
  props: {
    state: P;
    setState: React.Dispatch<React.SetStateAction<P>>;
    [x: string]: any;
  };
  children: React.ReactNode;
}
type PropRenderer = <P = {}>(props: CloneProps<P>) => React.ReactNode;
export const childrenEnhancer: PropRenderer = (props) => {
  const children = props.children;

  const enhancedChildren = Children.map(children, child => {
    // Ensure that we are only trying to clone React elements
    if (React.isValidElement(child)) {
      return cloneElement(child as React.ReactElement<typeof props.props>, { props: props.props });
    }
  });

  return enhancedChildren;
}

export default childrenEnhancer;
