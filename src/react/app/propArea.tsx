/**
 * @file propArea.tsx
 * @description
 * @author Matthew Allen Rackley
 * @copyright [Matthew Rackley's Github](https://www.github.com/matthewrackley "Matthew Rackley on github.com")
 */

import React from 'react';

import FilesList from './filesList';
import FileViewer from './fileViewer';
import ResizeArea from './resizeArea';
import { ModuleProvider } from '@context/moduleContext';
export const PropArea: React.FC<{}> = (props) => {

  return (
    <div className="prop-area">
      <h1 className="prop-area-header">Prop Area</h1>
      <ModuleProvider>
        <ResizeArea shape={'square'} data-count={0} parentRef={parentRef} childRef={childRef} />
        <FilesList />
      </ModuleProvider>
    </div>
  );
}

export default PropArea;
