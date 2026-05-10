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

import Lock, { HandleLock, useLock } from '@assets/lock';
import React from 'react';
import styled from 'styled-components';

const LdHandle = styled.div<LDHandleProps>`
  &.ld-handle {
    position: absolute;
    display: flex;
    border-top-left-radius: 0.33rem;
    border-top-right-radius: 0.33rem;
    transform: ${(props) => `translate(0, ${props.$lddata.transform})`};
    left: 0px;
    top: 0px;
    width: ${(props) => props.$lddata.width };
    height: ${(props) => props.$lddata.height};
    border: 3px solid ${props => props.theme.accent({ variant: props.$variant || 'border' })};
    background-color: ${props => props.theme.background({ variant: props.$variant || 'default' })};
    cursor: move;
  }
  .locked {
    position: fixed;
    top: ${(props) => props.style?.top};
    left: ${(props) => props.style?.left};
    width: ${(props) => props.style?.width};
    height: ${(props) => props.style?.height};
    max-width: ${(props) => props.style?.width};
    min-width: ${(props) => props.style?.width};
    max-height: ${(props) => props.style?.height};
    min-height: ${(props) => props.style?.height};
  }
`;
const LDTitle = styled.h3`
  font-size: 0.75rem;
  padding-left: 1rem;
  position: relative;
  align-self: center;
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  font-weight: 700;
  color: ${(props) => props.theme.accent({ variant: 'primary' })};
`;
interface StyledXProps {
  onRemove: () => void;
}
const StyledX = styled.button`
  position: absolute;
  top: 50%;
  right: 0.5rem;
  transform: translateY(-50%);
  background: red;
  color: white;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const BoxX: React.FC<XProps> = (props) => {
  const { className, color, width, height, border, borderWidth, borderStyle, borderColor, borderRadius, ref, onRemove, right } = { ...defaultProps, ...props };
  return (
    <Border
      className={ `${className} x-button` }
      color={ color }
      border={ border }
      borderWidth={ borderWidth }
      borderStyle={ borderStyle }
      borderColor={ borderColor }
      borderRadius={ borderRadius }
      width={ width }
      height={ height }
      right={ right }
      ref={ ref }
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width='1.25rem'
        height='1.25rem'
        style={{ padding: '.125rem'}}
        viewBox="0 0 1280 1277"
        onClick={onRemove}
      >
        <path d="M275 1.9c-11.6 2.6-18.6 5.2-29.5 11-29.9 15.7-48.5 32.6-110.4 100.4-7.9 8.6-27.1 27.7-42.7 42.2-32 30.1-44.8 43.1-57 58.4-14.8 18.3-23.8 34.4-29 51.7-2.4 7.8-2.8 10.6-2.8 23.4-.1 17.6 1.3 23.8 8.9 39.5 13.3 27.6 38.8 56.4 100 113 27.6 25.5 59.9 57.2 117.5 115.4 43.7 44.1 79.5 80.8 79.5 81.4 0 1.2-183.7 183.5-226.7 225-52.5 50.6-71.1 76.1-80.4 109.8-1.3 4.6-1.8 10.1-1.8 19.4 0 15.2 1.9 23.6 8.7 37.5 6 12.3 14.7 23.2 36.2 45.7 10.5 10.9 32.3 34 48.5 51.3 58 62.2 78.5 82.6 114.9 114.6 24 21.2 34.6 28 50.9 32.6 11.1 3.2 29.2 3.1 41.7-.1 35.5-9.2 70-34.8 123.4-91.6 41-43.6 105.7-111 128.6-134 44.4-44.6 74.9-70.2 86.9-73 3.3-.7 5.3 1.3 175.6 173 69.8 70.3 84.7 84.4 104 98.1 41.9 29.7 77.7 34.6 115.3 15.8 20.3-10.1 27.9-16.6 80.2-68.3 59.5-58.9 86.9-85.7 106.7-104.4 37.3-35.2 51.8-59.1 53.5-88.2 1.2-22.1-6.6-46.3-23.2-71.7-18.4-28.1-42.5-53.5-98.5-103.9-21.9-19.7-45.1-42.4-90-87.9-33.3-33.7-65.6-65.8-71.9-71.4-15.5-13.7-17.6-16.5-17.5-22.7 0-3.8.8-5.9 3.5-9.9 1.9-2.7 46.3-47.4 98.7-99.2 173.5-171.6 177.3-175.5 184.1-185.3 7.9-11.4 13.2-22.5 16.2-34 2-7.5 2.3-11.4 2.3-23-.1-16.2-1.9-24.3-8.3-38.1-8.3-17.7-18-29.9-48.7-61.4-11.6-11.8-33.4-35.7-48.6-53.1-45.6-52.3-68.1-75.3-93.3-95.4-16.2-13-27.7-20.5-42-27.5C998.1-2.9 963.8.4 929.8 27.4c-5.8 4.7-21.1 19-34 31.9-26.2 26.3-207.1 205.2-230.3 227.8-16.1 15.6-19.7 18.2-26.1 18.3-5.7.1-9.8-3-20-14.9-4.7-5.5-20.8-22.4-35.8-37.5C422.8 90.5 366.4 33.9 359.6 28.1 337.2 9.2 318.7 1.3 295 .4c-8.9-.3-13.4 0-20 1.5z" />
      </svg>
    </Border>
  )
}
interface LDProps {
  lddata: LDData;
  ldRef: React.RefObject<HTMLDivElement>
  onRemove: () => void;
  handleLock: HandleLock;
  locked: boolean;
}
interface StyledBorderProps {
  className?: string;
  color: string;
  border: string;
  borderWidth?: string;
  borderStyle?: string;
  borderColor?: string;
  borderRadius: string;
  children: React.ReactNode;
  width: string | number;
  height: string | number;
  right: string | number;
};
interface XProps {
  className?: string;
  onRemove: () => void;
  color?: string;
  width?: string | number;
  height?: string | number;
  border?: string;
  borderRadius?: string;
  borderWidth?: string;
  borderStyle?: string;
  borderColor?: string;
  ref?: React.RefObject<HTMLDivElement>
  right?: string | number;
}
type DefaultBorderProps = Required<Omit<XProps, 'handleLock' | 'ref' | 'onRemove'>> & {
  handleLock?: HandleLock;
};
const defaultProps: DefaultBorderProps = {
  className: 'lock-area',
  color: '#000',
  width: '1.5rem',
  height: '1.5rem',
  border: '0px 0px 0px 2px solid #000',
  borderWidth: '0px 0px 0px 2px',
  borderStyle: 'none none none solid',
  borderColor: 'transparent transparent transparent #000',
  borderRadius: '0',
  right: 0
};
const Border = styled.div.attrs<StyledBorderProps>((attr) => ({
  color: attr.color || defaultProps.color,
  border: attr.border || defaultProps.border,
  borderRadius: attr.borderRadius || defaultProps.borderRadius,
  className: attr.className || defaultProps.className,
})) <StyledBorderProps>`
  background-color: #FFFFFF00;
  border: ${(props) => props.border || '2px solid #000' };
  border-width: ${(props) => props.borderWidth || ''};
  border-style: ${(props) => props.borderStyle || ''};
  border-color: ${(props) => props.borderColor || ''};
  border-radius: ${(props) => props.borderRadius || '33%' };
  width: ${(props) => props.width || '1.5rem' };
  height: ${(props) => props.height || '1.5rem' };
  position: absolute;
  z-index: 25;
  top: 0;
  right: ${(props) => props.right || '0' };
  &:hover {
    cursor: pointer;
  }
  .${props => props.className} {
  }
  &.locked {
    transform: scale(0.8);
    pointer-events: all;
  }
`;
export const LDHandle: React.FC<LDProps> = (props) => {
  const [locked, handleLock] = useLock(false);
  return (
    <LdHandle
      className={ `ld-handle resizeable${props.locked ? ' locked' : ''}` }
      $lddata={props.lddata}
      ref={ props.ldRef }
    >
      <LDTitle>
        Drag-Handle
      </LDTitle>
      <Lock locked={ props.locked } handleLock={ props.handleLock } />
      <BoxX onRemove={ props.onRemove } />
    </LdHandle>
  )

}

export default LDHandle;
