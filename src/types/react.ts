/**
 * @file react.ts
 * @description
 * @author Matthew Allen Rackley
 * @copyright [Matthew Rackley's Github](https://www.github.com/matthewrackley "Matthew Rackley on github.com")
 */
type DynamicParams<T extends T[number][]> = [...params: T];
// Extend the React interface to include custom types
declare module 'react' {
  // Create a DevProps interface to be used as a placeholder proptype for dev purposes
  // including a ref, a key, and a few components.
  interface DevProps {
    ref: React.RefObject<any>;
    key: string;
    // Include a few components
    children: React.ReactNode;
    Parent: React.ComponentType<any>;
    Child: React.ComponentType<any>;
    state: React.ComponentState;
  }
  interface DevProps {
    ref: React.RefObject<any>;
    key: string;

  }
  type ComponentCFC<P = {}, S = {}> = React.ComponentClass<P, S> | React.FunctionComponent<P>;
  type Hook<T extends T[number][]> = (...args: [...params: T]) => any;
  type CSSSize = `${number}%` | `${number}px` | `${number}em` | `${number}rem` | `${number}vh` | `${number}vw` | `${number}vmin` | `${number}vmax` | `${number}ch` | `${number}ex` | `${number}cm` | `${number}mm` | `${number}in` | `${number}pt` | `${number}pc` | `${number}px` | `${number}mm` | `${number}cm` | `${number}in` | `${number}px` | `${number}pt` | `${number}pc` | `${number}em` | `${number}ex` | `${number}ch` | `${number}rem` | `${number}vw` | `${number}vh` | `${number}vmin` | `${number}vmax`
}
export {};
