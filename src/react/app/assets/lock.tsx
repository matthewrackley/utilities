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

import React, { useState } from "react";
import styled from 'styled-components';
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
};

interface LockProps {
  className?: string;
  locked: boolean;
  handleLock: HandleLock;
  color?: string;
  width?: string | number;
  height?: string | number;
  border?: string;
  borderRadius?: string;
  borderWidth?: string;
  borderStyle?: string;
  borderColor?: string;
  ref?: React.RefObject<HTMLDivElement>
}
type DefaultBorderProps = Required<Omit<LockProps, 'handleLock' | 'ref'>> & {
  handleLock?: HandleLock;
};
const defaultProps: DefaultBorderProps = {
  className: 'lock-area',
  locked: false,
  color: '#000',
  width: '1.5rem',
  height: '1.5rem',
  border: '0px 0px 0px 2px solid #000',
  borderWidth: '0px 0px 0px 2px',
  borderStyle: 'none none none solid',
  borderColor: 'transparent transparent transparent #000',
  borderRadius: '0',
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
  right: 1.5rem;
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

type HexColor = `#${string}`;
const val: HexColor = '#AbC000';
export type HandleLock = (e: React.MouseEvent<SVGElement, MouseEvent>) => void;
type UseLock = (locked?: boolean) => [boolean, HandleLock];
export const useLock: UseLock = (locked = false) => {
  const [lock, setLock] = useState(locked);
  const handleClick: HandleLock = (e: React.MouseEvent<SVGElement>) => {
    e.preventDefault();
    e.persist();
    if (e.target instanceof SVGElement) {
      e.target.classList.add('locked');
      setLock(!lock);
      setTimeout(() => {
        if (e.target instanceof SVGElement) {
          e.target.classList.remove('locked');
        }
      }, 200);
    }
  };
  return [lock, handleClick];
};

export const Lock: React.FC<LockProps> = (props) => {
  const { className, locked, handleLock, color, width, height, border, borderWidth, borderStyle, borderColor, borderRadius, ref } = { ...defaultProps, ...props };
  const [svgClass, setSvgClass] = useState(locked ? 'locked' as const : 'unlocked' as const);
  return (
    <Border
      className={ `${className} locking-button` }
      color={ color }
      border={ border }
      borderWidth={ borderWidth }
      borderStyle={ borderStyle }
      borderColor={ borderColor }
      borderRadius={ borderRadius }
      width={ width }
      height={ height }
      ref={ ref }
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 861 861"
        color={ color }
        onClick={ handleLock }
        aria-checked={ locked }
        style={{ transition: 'transform 0.2s ease-in-out' }}
      >
        { locked ? (
          <path
            d="M430.541 45.495c-120.976 0-220.036 99.06-220.036 219.986v109.992c-61.027 0-109.992 49.017-109.992 109.993v275.058a54.807 54.807 0 0 0 54.97 54.97h550.065a54.807 54.807 0 0 0 54.971-54.97V485.466c0-60.976-48.965-109.993-109.993-109.993V265.481c0-120.926-99.06-219.986-219.985-219.986Zm0 109.942c61.849 0 109.993 48.144 109.993 110.044v109.992H320.549V265.481c0-61.9 48.093-110.044 109.992-110.044Zm0 0"
            color={ color }
          />
        ) : (
          <>
            <text
              style={ {
                fontSize: 36,
                fontFamily: "Roboto",
                whiteSpace: "pre",
                backgroundColor: '#FFFFFF00',
                color: color,
              } }
              transform="translate(95.28 627.324)"
              color={ color }
            />
            <path
              d="M1.059 294.998a.473.473 0 0 0-.472.471v.119c0 .064.053.118.118.118a.119.119 0 0 0 .117-.118v-.119c0-.132.104-.235.237-.235.132 0 .236.103.236.235v.473H.587a.235.235 0 0 0-.236.236v.589c0 .066.053.118.118.118h1.18a.117.117 0 0 0 .117-.118v-.589a.234.234 0 0 0-.235-.236v-.473a.474.474 0 0 0-.472-.471Zm0 0"
              transform="translate(4.237 -118765.422) scale(402.76831)"
              color={ color }
            />
          </>
        )}
      </svg>
    </Border>
  );
};
export default Lock;
