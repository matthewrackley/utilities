/**
 * @file dynamicLoader.tsx
 * @description
 * @author Matthew Allen Rackley
 * @copyright [Matthew Rackley's Github](https://www.github.com/matthewrackley "Matthew Rackley on github.com")
 */

import React, { useEffect, useState } from 'react';
// Usage


export interface ComponentProperties<P extends React.ElementType = React.ElementType> {
  filename: string;
  props?: P extends React.ElementType<infer ComponentProps> ? ComponentProps : {};
  component?: P;
}
export type DynamicComponentLoader = <E extends React.ElementType = React.ElementType>(component: ComponentProperties<E>) => React.ReactElement<typeof component.props> | null;
export const DynamicLoader: DynamicComponentLoader = (component) => {
  const [Component, setComponent] = useState<React.ElementType | null>(null);

  useEffect(() => {
    // Dynamically import the React component
    async () => {
      await import(`./preview/${component.filename}`)
        .then((module) => {
          setComponent(module.default);
        })
        .catch((error) => {
          console.error(`"${component.filename}" not found`, error);
        });
    };
  }, [component.filename]);

  // Render the component if it has been loaded
  return (
    <>
      { Component && <Component { ...component.props } /> }
    </>
  );
};

export default DynamicLoader;
