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
type LogStyling = 'error' | 'warning' | 'function' | 'type' | 'caution' | 'hint' | 'verbose' | 'debug' | 'note' | 'variable';
type LogType = 'error' | 'warn' | 'log';
interface LogMsg {
  message: string;
  color?: CSSNamedColors | HexColor;
  bg?: CSSNamedColors | HexColor;
  weight?: CSSFontWeight;
  decor?: CSSTextDecoration;
  style?: CSSFontStyle;
  styling?: LogStyling
}
const l: LogMsg = {
  color: 'lightsalmon',
  decor:
}
const errorStyle = `color: firebrick; font-weight: bolder; font-style: initial; text-decoration: initial; background-color: initial;`;
const warningStyle = `color: goldenrod; font-weight: bold; font-style: initial; text-decoration: initial; background-color: initial;`;
const functionStyle = `color: cornflowerblue; font-weight: bold; font-style: italic; text-decoration: initial; background-color: initial;`;
const typeStyle = `color: limegreen; font-weight: bold; font-style: initial; text-decoration: initial; background-color: initial;`;
const cautionStyle = `color: gold; font-weight: initial; font-style: italic; text-decoration: initial; background-color: initial;`;
const hintStyle = `color: lightsalmon; font-weight: initial; font-style: italic; text-decoration: initial; background-color: initial;`;
const verboseStyle = `color: purple; font-weight: initial; font-style: initial; text-decoration: initial; background-color: initial;`;
const debugStyle = `color: slategrey; font-weight: bold; font-style: initial; text-decoration: initial; background-color: initial;`;
const noteStyle = `color: white; font-weight: bold; font-style: initial; text-decoration: initial; background-color: initial;`;
const variableStyle = `color: salmon; font-weight: bold; font-style: italic; text-decoration: initial; background-color: initial;`;
function styleHandler(log: LogMsg): LogStyle {
  if (log.styling === 'error') return errorStyle;
  if (log.styling === 'warning') return warningStyle;
  if (log.styling === 'function') return functionStyle;
  if (log.styling === 'type') return typeStyle;
  if (log.styling === 'caution') return cautionStyle;
  if (log.styling === 'hint') return hintStyle;
  if (log.styling === 'verbose') return verboseStyle;
  if (log.styling === 'debug') return debugStyle;
  if (log.styling === 'note') return noteStyle;
  if (log.styling === 'variable') return variableStyle;
  return `color: ${log.color || 'initial'}; font-weight: ${log.weight || 'initial'}; font-style: ${log.style || 'initial'}; text-decoration: ${log.decor || 'initial'}; background-color: ${log.bg || 'initial'};` as any
}
type LogMessages = LogMsg[]
type LogStyle = `color: ${string}; font-weight: ${string}; font-style: ${string}; text-decoration: ${string}; background-color: ${string};`
type LogMessage = `%c${string}`;
export const ezLog = (type: LogType, ...logMessages: LogMessages) => {
  const styles = logMessages.map(log => styleHandler(log)) as LogStyle[];
  const message = logMessages.map(log => `%c${log.message}` as const).join('');
  console[type](message, ...styles);
}

export default ezLog;
