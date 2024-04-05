/**
 * @file fileList.tsx
 * @description
 * @author Matthew Allen Rackley
 * @copyright [Matthew Rackley's Github](https://www.github.com/matthewrackley "Matthew Rackley on github.com")
 */

import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import ReactLogo from '@assets/react.svg';

import formatFilename from './functions/formatFilename';

export type FileList = string[];
export interface FileData {
  directory: string;
  files: FileList;
}

const ReactBulletList = styled.ul`
  list-style: none;
  padding-left: 0;

  li {
    background-image: url(${ReactLogo});
    background-repeat: no-repeat;
    background-position: 0 50%;
    background-size: 20px 20px;
    padding-left: 30px;
    margin-bottom: 10px;
  }
`;


export const FileList: React.FC = () => {
  const [files, setFiles] = useState<FileList>([]);

  useEffect(() => {
    fetch('/api/files')
      .then((response) => response.json())
      .then((data: FileData) => setFiles(data.files))
      .catch((error: Error) => console.error('Error fetching files:', error));
  }, []);

  return (
    <div className='prop-select'>
      <div className="prop-select-headers">
        <h1 className='list-header'>Prop List</h1>
        <h1 className='category-header'>Categories</h1>
      </div>
      <div className="prop-list">
        <ReactBulletList>
          { files.map((file, index) => (
            <li key={ index }>
              <Link  to={ `/preview/${formatFilename(file).replace(/_/g, '')}` }>{ formatFilename(file, true) }</Link>
            </li>
          )) }
        </ReactBulletList>
      </div>
      <div className="prop-categories"></div>
    </div>
  );
}

export default FileList;
