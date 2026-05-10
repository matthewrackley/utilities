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

import React, { useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import CountrySelector, { CountrySelectorProps } from '@components/headless/countrySelector';
import PhoneNumberInput, { PhoneNumberInputProps } from '@components/headless/phoneNumberInput';
import { useContext, createContext, useState } from 'react';

export interface ModuleProps {
  className?: string;
  children?: React.ReactNode;
}
const ModuleContext = createContext<ModuleContextType | undefined>(undefined);
export const useModuleContext = () => {
  const context = useContext(ModuleContext);
  if (context === undefined) {
    throw new Error('useModuleContext must be used within a ModuleProvider');
  }
  return context;
}
const ModuleFC = React.forwardRef<HTMLDivElement, ModuleProps>((props, ref) => {
  const { className = 'x-0d', children } = props;
  let { module } = useModuleContext();
  let Module = ((props: ModuleProps) => void 0) as React.ForwardRefExoticComponent<ModuleProps & React.RefAttributes<HTMLDivElement>>;
  useEffect(() => {
    function updateModule() {
      Module = module === 'PhoneNumberInput' ? React.forwardRef<HTMLDivElement, PhoneNumberInputProps>((props, ref) => <PhoneNumberInput ref={ ref } className={ props.className || 'x-0d' }>{ props.children }</PhoneNumberInput>) : module === 'CountrySelector' ? React.forwardRef<HTMLDivElement, CountrySelectorProps>((props, ref) => <CountrySelector ref={ ref } className={ props.className || 'x-0d' }>{ props.children }</CountrySelector>) : {} as typeof Module;
    }
    updateModule();
    window.addEventListener('DOMContentLoaded', updateModule);
    return () => {
      window.removeEventListener('DOMContentLoaded', updateModule);
    }
  }, [module]);
  return (
    <div className={ className }>
      <Module className={ className } ref={ref} >{ children }</Module>
    </div>
  )
})

const useModule = <M extends Modules>(initialModule: M = 'CountrySelector' as M) => {
  const [module, setModule] = useState<Modules>(initialModule);
  const [Module, changeModule] = useState<React.ForwardRefExoticComponent<ModuleProps & React.RefAttributes<HTMLDivElement>>>(ModuleFC);
  // Handles the module change
  useEffect(() => {
    handleComponent(module);
    // if module changes, update the component
  }, [module]);
  //#region [#FF990020] Component
  // Handles the component
  const handleComponent = <K extends Modules>(mod: K) => {
    // function to return/manipulate component
    setModule(mod);
    if (mod === 'PhoneNumberInput') {
      changeModule(React.forwardRef(render => <PhoneNumberInput {...render} />));
    } else if (mod === 'CountrySelector') {
      changeModule(React.forwardRef(render => <CountrySelector {...render}/>));
    }
  }
  //#endregion
  const handleModule = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (event.target instanceof HTMLButtonElement && isModule(event.target.value)) {
      setModule(event.target.value);
    }
  }
  return [Module, module, handleModule] as [typeof Module, typeof module, typeof handleModule];
};
const moduleArray = ['CountrySelector', "PhoneNumberInput"] as const;
function isModule<M extends Modules>(value: string): value is M {
  return moduleArray.includes(value as any);
}
export interface ModuleContextType {
  module: Modules;
  Module: React.ForwardRefExoticComponent<ModuleProps & React.RefAttributes<HTMLDivElement>>;
  handleModule: (event: React.MouseEvent<HTMLButtonElement>) => void;
};
export type Modules = 'PhoneNumberInput' | 'CountrySelector';



export const ModuleProvider: React.ComponentType<{ children?: React.ReactNode; }> = (props) => {
  const [Module, module, handleModule] = useModule();
  return (
    <ModuleContext.Provider value={ { Module, module, handleModule }} >
      {props.children}
    </ModuleContext.Provider>
  );
};
export const ModuleConsumer = React.forwardRef<HTMLDivElement, ModuleProps>((props, ref) => {
  return (
    <ModuleContext.Consumer>
      { (context) => {
        if (!context) {
          throw new Error('ModuleConsumer must be used within a ModuleProvider');
        };
        const { Module, module, handleModule } = context;
        return (
          module === "PhoneNumberInput"
            ? <PhoneNumberInput ref={ ref } { ...props } />
            : module === "CountrySelector"
              ? <CountrySelector ref={ ref } { ...props } />
              : <></>
        )
      }}
    </ModuleContext.Consumer>
  );
});


export default ModuleProvider;
