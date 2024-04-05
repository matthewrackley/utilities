/**
 * @file propArea.tsx
 * @description
 * @author Matthew Allen Rackley
 * @copyright [Matthew Rackley's Github](https://www.github.com/matthewrackley "Matthew Rackley on github.com")
 */

import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import FileList from './fileList';
import FileViewer from './fileViewer';
import ResizeArea from './resizeArea';

export const PropArea: React.FC = () => {
  return (
    <div className="prop-area">
      <h1 className="prop-area-header">Prop Area</h1>
      <ResizeArea />
      <FileList />
    </div>
  );
}

export default PropArea;
