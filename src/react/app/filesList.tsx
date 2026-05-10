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
 * @file fileList.tsx
 * @description
 * @author Matthew Allen Rackley
 * @copyright [Matthew Rackley's Github](https://www.github.com/matthewrackley "Matthew Rackley on github.com")
 */

import React from 'react';
import styled from 'styled-components';
import { Modules, useModuleContext } from '@context/moduleContext';

export type FileList = string[];
export interface FileData {
  directory: string;
  files: FileList;
}

const ReactBulletList = styled.ul`
  list-style: none;
  padding-left: 0;

  li {
    background-image: url(src/assets/react.svg);
    background-repeat: no-repeat;
    background-position: 0 50%;
    background-size: 20px 20px;
    padding-left: 30px;
    margin-bottom: 10px;
  }
`;
const StyledButton = styled.button.attrs<{ module?: keyof Modules; }>((attr) => ({
  type: 'button',
  value: attr.module,
  module: attr.module,
})).withConfig({
  attrs: [{
    module: 'PhoneNumberInput',
    value: 'PhoneNumberInput'
  }]
})`
  background-color: #fff;
  border: 1px solid #000;
  border-radius: 5px;
  padding: 5px 10px;
  width: fit-content;
  margin: 5px;
  cursor: pointer;
  :hover {
    background-color: #000;
    color: #fff;
  }
`;
const ModuleButton: React.FC<{ module: keyof Modules, children?: React.ReactNode; }> = (props) => {
  const context = useModuleContext();
  return (
    <li>
        {/*{ (context) => context ? (*/ }
          <StyledButton onClick={ context.handleModule } module={ props.module } value={ props.module }>
            { props.children }
          </StyledButton>
        {/*}) : <></>}*/}
    </li>
  );
};

export const FilesList: React.FC = () => {
  return (
    <div className='prop-select'>
      <div className="prop-select-headers">
        <h1 className='list-header'>Prop List</h1>
        <h1 className='category-header'>Categories</h1>
      </div>
      <div className="prop-list">
        <ReactBulletList>
          <ModuleButton module='PhoneNumberInput'>Phone Number Input</ModuleButton>
          <ModuleButton module='CountrySelector'>Country Selector</ModuleButton>
        </ReactBulletList>
      </div>
      <div className="prop-categories"></div>
    </div>
  );
};

export default FilesList;
