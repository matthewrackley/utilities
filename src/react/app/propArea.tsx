/**
 * @file propArea.tsx
 * @description
 * @author Matthew Allen Rackley
 * @copyright [Matthew Rackley's Github](https://www.github.com/matthewrackley "Matthew Rackley on github.com")
 */

import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import FilesList from './filesList';
import FileViewer from './fileViewer';
import ResizeArea from './resizeArea';
import { ModuleProvider } from '@context/moduleContext';
const PropAreaStyled = styled.div`
  .prop-area {  display: grid;
    grid-template-columns: 1.5fr 0.5fr;
    grid-template-rows: 0.1fr 1.9fr;
    gap: 0px 0px;
    grid-auto-flow: row;
    grid-template-areas:
      "prop-area-header prop-select"
      "resize-area prop-select";
    grid-area: prop-area;
  }
  .resize-area {
    border: 2px solid #FF9900;
    border-radius: 10px;
  }
`;
export interface PAData {
  width: CSSSize;
  height: CSSSize;
  left: number;
  right: number;
  top: number;
  bottom: number;
}
export const PropArea: React.FC<{}> = (props) => {
  const paRef = useRef<HTMLDivElement>(null);
  const phRef = useRef<HTMLDivElement>(null);

  return (
    <PropAreaStyled className="prop-area" ref={paRef}>
      <h1 className="prop-area-header" ref={phRef}>Prop Area</h1>
      <ModuleProvider>
        <ResizeArea shape={'square'} data-count={0} propHeader={phRef} />
        <FilesList />
      </ModuleProvider>
    </PropAreaStyled>
  );
}

export default PropArea;
