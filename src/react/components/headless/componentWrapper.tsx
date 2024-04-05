/**
 * @file propRenderer.tsx
 * @description
 * @author Matthew Allen Rackley
 * @copyright [Matthew Rackley's Github](https://www.github.com/matthewrackley "Matthew Rackley on github.com")
 */
import React, { useState } from 'react';
interface StateProps<P = {}> {
  specialProps: P;
  setSpecialProps: React.Dispatch<React.SetStateAction<P>>;
}

export function componentWrapper<P, PT>(WrappedComponent: React.ComponentType<P & StateProps<PT>>) {
  return (props: Omit<P, keyof StateProps<PT>>) => {
    const [specialProps, setSpecialProps] = useState<PT>({} as PT);
    return <WrappedComponent { ...(props as P) } specialProps={ specialProps } setSpecialProps={ setSpecialProps } />
  }
}

export default componentWrapper;
