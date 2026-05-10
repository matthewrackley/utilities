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

//@ts-nocheck
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
import fs from 'node:fs';
import FFmpeg from 'fluent-ffmpeg';
import process from 'node:process';
import { config } from 'dotenv';
var env = process.env;

const mainDir = `${env.HOME}/Videos/streams`;
const logDir = `${mainDir}/logs`

const options = {
  year: 'numeric',
  month: '2-digit',
  day: '2-digit',
  hour: '2-digit',
  minute: '2-digit',
  second: '2-digit',
  timeZoneName: 'short'
}
const optionsTime = {
  hour: '2-digit',
  minute: '2-digit',
  second: '2-digit',
  timeZoneName: 'short'
}
const optionsDate = {
  year: 'numeric',
  month: '2-digit',
  day: '2-digit'
}


/** @function getDateTime @returns {[string, ()=>string,()=>string]} */
function getDateTime () {
  const fullFormatter = new Intl.DateTimeFormat('en-us', options);
  const dateFormatter = new Intl.DateTimeFormat('en-us', optionsDate);
  const timeFormatter = new Intl.DateTimeFormat('en-us', optionsTime);
  const date = dateFormatter.format(new Date(Date.now()));
  const time = () => timeFormatter.format(new Date(Date.now()));
  const fullDate = () => fullFormatter.format(new Date(Date.now()));
  return [date, time, fullDate];
}
function handleLog (directory, filename, ...data) {
  const file = `${logDir}/${directory}/${directory}-${filename}.log`;
  const [date, getTime, getFull] = getDateTime();
  if (!fs.existsSync(`${logDir}/${directory}`) && !fs.lstatSync(`${logDir}/${directory}`).isDirectory()) {
    fs.mkdirSync(`${ logDir }/${ directory }`, { recursive: true });
    console.log(`Directory made: ${logDir}/${directory}`);
  }
  let fileData = fs.readFileSync(file).toString() || `[${ directory === 'debug' ? 'Debug' : directory === 'info' ? 'Info' : directory === 'errors' ? 'Errors' : 'Warnings' } on ${ date }]:\n`;
  for (const bit of data) {
    fileData += `[${getFull()}]: ${bit}`;
  }
  if (directory === 'debug') {
    console.log(`%cDebug:%c`, `color: purple; font-weight: 700;`, `color: #AAAAAA; font-weight: initial;`, ...data);
  }
  if (directory === 'errors') {
    console.error(`%cError:%c`, `color: #FF2525; font-weight: 700;`, `color: darkorange; font-weight: 700; font-style: italic;`, ...data);
  }
  if (directory === 'info') {
    console.log(`%cInfo:%c`, `color: #00ccff; font-weight: 700;`, `color: initial; font-weight: initial;`, ...data);
  }
  if (directory === 'warnings') {
    console.warn(`%cWarning:%c`, `color: goldenrod; font-weight: 700;`, `color: initial; font-weight: initial; font-style: italic;`, ...data);
  }
  fs.writeFileSync(file, fileData);
}
export async function handleFFmpeg (data) {
  if (fs.existsSync(data.directory) && fs.lstatSync(data.directory).isDirectory()) {
    config({
      path: `${data.directory}/.env`,
      processEnv: env
    });
  }
  FFmpeg(data.uri, {
    logger: {
      debug: (...data) => handleLog('debug', data.filename, ...data),
      error: (...data) => handleLog('errors', data.filename, ...data),
      info: (...data) => handleLog('info', data.filename, ...data),
      warn: (...data) => handleLog('warnings', data.filename, ...data),
    },
  }).addOutput(data.output)
    .videoCodec('libx264')
    .on('end', function () {
      console.log(`MP4 file wrote: ${ data.output }`);
    })
    .run();
}
export default handleFFmpeg;
