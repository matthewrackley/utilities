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
import process from 'node:process';
import FFmpeg from 'fluent-ffmpeg';
import axios from 'axios';
const { default: fetch } = await import('node-fetch');
import { config } from 'dotenv';
const recuRegex = /(?<url>(?<domain>https:\/\/.+?\.mediafront\.[^\/]{2,24}\/hl\/(?<filename>(?<username>\w+)\/(?<date>\d{4}-\d{2}-\d{2},\d{2}-\d{2}))\/)index(?<type>\.m3u8)\?(?<hash>md5=.+?)\&(?<expires>expires=\d+)\&(?<origin>origin=\d+)\&(?<mid>mid=.+?)\&(?<akey>akey=.+?)\&(?<p>p=\d+)\&(?<request_id>request_id=.+))/;

const getVal = <P extends PrimType>(): GetVal<P> => {
  function getVal<R extends P, A extends [validator: (value: P) => value is R, ...values: P[]] | P[]>(this: ExtendedArray<P>, ...values: A[0] extends ((value: P) => value is R) ? [validator?: ((value: P) => value is R), ...values: P[]] : A): A[0] extends ((value: P) => value is R) ? (R | null) : P;
  function getVal<R extends P, A extends [validator: (value: P) => value is R, ...values: P[]] | P[]>(this: ExtendedArray<P>, validator: (value: P) => R, ...values: P[]): R | null;
  function getVal<R extends P, A extends [validator: (value: P) => value is R, ...values: P[]] | P[]>(this: ExtendedArray<P>, ...values: P[]): P;
  function getVal(this: ExtendedArray<P>, ...args: any){
    const value = this[this.findIndex((v): v is P => args.includes(v)) + 1];
    const values = args as [<R extends P>(value: P) => value is R, ...P[]] | P[];
    const validator = values.pop() as typeof values[number];
    if (validator instanceof Function) {
      if (validator(value)) {
        return value as typeof values[0] extends ((value: any) => value is infer RT) ? RT : never;
      } else {
        return null as typeof values[0] extends ((value: any) => value is infer RT) ? null : never;
      }
    } else {
      values.push(validator);
      return value as P;
    }
  };
  return getVal as any;
}
class ExtendedArray<P extends PrimType> extends Array<P> implements ArrayExtension<P> {
  constructor(...items: P[]) {
    super(...items)
  }

  exists: ExtendedExists<P> = function (...values): this is (typeof values[number] | P)[] {
    const bools = [false];
    for (let i = 0; i < values.length; i++) {
      bools[i] = this.includes(values[i] as P);
    }
    return bools.includes(true);
  }
  isVal: ExtendedIsVal<P> = function (value, ...searchValues): value is typeof searchValues[number] {
    return this.some(val => searchValues.includes(val)) && searchValues.includes(value);
  }
  nextVal: ExtendedSibling<P> = function (value, validator) {
    const val = this[this.findIndex((p) => p === value) + 1];
    if (validator && validator(val)) return val;
    return val as any;
  }
  prevVal: ExtendedSibling<P> = function (value, validator) {
    const val = this[this.findIndex((p) => p === value) - 1];
    if (validator && validator(val)) return val;
    return val as any;
  }
  curIndex: ExtendedIndex<P> = function (value: P) {
    return this.findIndex((p) => p === value);
  }

  getVal: GetVal<P> = getVal();
  iStartsWith: ExtendedWith<P> = function (index, searchString, atPosition): boolean {
    let value = this.at(index) && typeof this.at(index) === 'string' ? this.at(index)! as P & string : null;
    return value ? value.startsWith(searchString, atPosition) : false;
  }
  iEndsWith: ExtendedWith<P> = function (index, searchString, atPosition): boolean {
    let value = this.at(index) && typeof this.at(index) === 'string' ? this.at(index)! as P & string : null;
    return value ? value.endsWith(searchString, atPosition) : false;
  }
  includes: ExtendedIncludes<P> = Array.prototype.includes as ExtendedIncludes<P>;
};
const con = {
  args: new ExtendedArray(...process.argv.slice(2)),
  outputRegex: /(?<path>\/?.+\/)?(?<filename>[^\/]+)\.(?<type>mp4|mkv|avi|mov|flv|webm|m4v|wmv)/,
  formatter: new Intl.DateTimeFormat('en-us', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    timeZoneName: 'short'
  }) as Intl.DateTimeFormat,
  timeFormatter: new Intl.DateTimeFormat('en-us', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    timeZoneName: 'short'
  }) as Intl.DateTimeFormat,
  dateFormatter: new Intl.DateTimeFormat('en-us', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit'
  }) as Intl.DateTimeFormat,
  mainDir: `${process.env.HOME}/Videos/streams` as DownloadDirectory,
  logDir: `${process.env.HOME}/Videos/streams/logs` as LogDir,
  regex: /(?<url>(?<domain>https:\/\/.+.com)(?<path>\/records\/\d+\/\d{4}\/\d{1,2}\/\d{1,2}\/)(?<filename>(?:\w+|\d+)+)(?<master>\/video)?(?<type>\.ts|\.m3u8)(?<hash>\?md5=(?:\w+|\d+)+)(?<expires>(?:\\u0026|&)expires=\d+))/,
  tsRegex: /(?<path>\/.+\/)(?<filename>\S+\.ts)/g,
  textCharacters: new Set([7, 8, 9, 10, 12, 13, 27, ...Array.from({ length: 0x100 - 0x20 }, (_, i) => i + 0x20).filter(i => i !== 0x7f)]),
  headers: {
    'accept': "*/*",
    'accept-language': "en-US,en;q=0.9",
    'origin': "https://stripchat.com",
    'priority': "u=1, i",
    'referer': "https://stripchat.com/",
    'sec-ch-ua': '"Chromium";v="128", "Not;A=Brand";v="24", "Google Chrome";v="128"',
    'sec-ch-ua-mobile': "?0",
    'sec-ch-ua-platform': '"Linux"',
    'sec-fetch-dest': "empty",
    'sec-fetch-mode': "cors",
    'sec-fetch-site': "cross-site",
    'user-agent': "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 Safari/537.36"
  } as AFHeaders,
  qualityTypes: ["144p", "240p", "360p", "480p", "576p", "720p", "1080p", "1440p", "1600p", "2160p-4k", "2880p-5k", "3200p", "4320p-8k", "5760p-10k", "6400p", "8640p-16k", "2k-2048x1080", "dci-4k-4096x2160", "uwqhd-3440x1440", "wqxga-2560x1600", "wxga-1280x800", "sxga-1280x1024", "uxga-1600x1200", "qhd-plus-3200x1800", "fhd-plus-2220x1080", "uhd-3840x2160", "wvga-800x480", "svga-800x600", "qvga-320x240", "hqvga-240x160", "qqvga-160x120"],
  quality: ["144p", "240p", "360p", "480p", "576p", "720p", "1080p", "1440p", "1600p", "2160p-4k", "2880p-5k", "3200p", "4320p-8k", "5760p-10k", "6400p", "8640p-16k", "2k-2048x1080", "dci-4k-4096x2160", "uwqhd-3440x1440", "wqxga-2560x1600", "wxga-1280x800", "sxga-1280x1024", "uxga-1600x1200", "qhd-plus-3200x1800", "fhd-plus-2220x1080", "uhd-3840x2160", "wvga-800x480", "svga-800x600", "qvga-320x240", "hqvga-240x160", "qqvga-160x120"].join('|'),
  textContent: ["text/*", "text/plain", "text/html", "text/css", "text/javascript", "application/json", "application/xml", "text/cmd", "text/css", "text/csv", "text/html", "text/javascript", "text/jsx", "text/markdown", "text/n3", "text/plain", "text/richtext", "text/rtf", "text/sgml", "text/tab-separated-values", "text/troff", "text/turtle", "text/uri-list", "text/vcard", "text/vnd.curl", "text/vnd.curl.dcurl", "text/vnd.curl.scurl", "text/vnd.curl.mcurl", "text/vnd.dvb.subtitle", "text/vnd.fly", "text/vnd.fmi.flexstor", "text/vnd.graphviz", "text/vnd.in3d.3dml", "text/vnd.in3d.spot", "text/vnd.sun.j2me.app-descriptor", "text/vnd.wap.si", "text/vnd.wap.sl", "text/vnd.wap.wml", "text/vnd.wap.wmlscript", "text/x-asm", "text/x-c", "text/x-fortran", "text/x-java-source", "text/x-opml", "text/x-pascal", "text/x-nfo", "text/x-setext", "text/x-sfv", "text/x-uuencode", "text/x-vcalendar", "text/x-vcard"],

  imageContent: ["image/*", "image/jpeg", "image/png", "image/gif", "image/webp", "image/svg+xml", "image/bmp", "image/cgm", "image/g3fax", "image/gif", "image/ief", "image/jpeg", "image/jpg", "image/jp2", "image/jpx", "image/ktx", "image/png", "image/sgi", "image/svg+xml", "image/tiff", "image/vnd.adobe.photoshop", "image/vnd.dece.graphic", "image/vnd.dvb.subtitle", "image/vnd.djvu", "image/vnd.dwg", "image/vnd.dxf", "image/vnd.fastbidsheet", "image/vnd.fpx", "image/vnd.fst", "image/vnd.fujixerox.edmics-mmr", "image/vnd.fujixerox.edmics-rlc", "image/vnd.ms-modi", "image/vnd.ms-photo", "image/vnd.net-fpx", "image/vnd.wap.wbmp", "image/vnd.xiff", "image/webp", "image/x-3ds", "image/x-cmu-raster", "image/x-cmx", "image/x-freehand", "image/x-icon", "image/x-jng", "image/x-mrsid-image", "image/x-pcx", "image/x-pict", "image/x-portable-anymap", "image/x-portable-bitmap", "image/x-portable-graymap", "image/x-portable-pixmap", "image/x-rgb", "image/x-tga", "image/x-xbitmap", "image/x-xpixmap", "image/x-xwindowdump"],
  audioContent: ["audio/*", "audio/mpeg", "audio/ogg", "audio/wav", "audio/aac", "audio/midi", "audio/x-midi", "audio/ogg", "audio/wav", "audio/webm", "audio/3gpp", "audio/3gpp2", "audio/mp3", "audio/mpeg", "audio/mp4", "audio/x-aiff", "audio/flac", "audio/x-matroska"],
  videoContent: ["video/*", "video/mp4", "video/webm", "video/ogg", "video/x-msvideo", "video/mpeg", "video/mp4", "video/ogg", "video/webm", "video/3gpp", "video/3gpp2", "video/x-flv", "video/x-matroska", "video/quicktime", "video/x-ms-wmv", "video/x-ms-asf"],
  appContent: ["application/*", "application/octet-stream", "application/pdf", "application/zip", "application/x-www-form-urlencoded", "multipart/form-data"],
  otherContent: ["application/vnd.ms-excel", "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet", "application/msword", "application/vnd.openxmlformats-officedocument.wordprocessingml.document"],
  videoTypes: ['mp4', 'mkv', 'avi', 'mov', 'flv', 'webm', 'm4v', 'wmv', '.mp4', '.mkv', '.avi', '.mov', '.flv', '.webm', '.m4v', '.wmv'],
  codecs: ["libx264", "libx265", "aac", "libvpx-vp9", "dts", "mpeg4", "libxvid", "prores", "wmv2", "wmav2", "flv", "libvpx", "libopus"]
}

const grd: TypeGuards = {
  paramExists(array, ...params): array is (typeof params[number] | string)[] {
    const bools = [false];
    for (let i = 0; i < params.length; i++) {
      bools[i] = array.includes(params[i]);
    }
    return bools.includes(true);
  },
  isParam: <T extends S[number], S extends string[]>(param: string, ...params: S): param is T => params.includes(param),
  isContent: <C extends ContentType>(cType: string | C): cType is C => grd.isTextContent(cType) || grd.isAudioContent(cType) || grd.isVideoContent(cType) || grd.isImageContent(cType) || grd.isAppContent(cType) || grd.isOtherContent(cType) || cType === "*/*",
  isTextContent: (cType: string): cType is TextContentType => con.textContent.includes(cType),
  isAudioContent: (cType: string): cType is AudioContentType => con.audioContent.includes(cType),
  isVideoContent: (cType: string): cType is VideoContentType => con.videoContent.includes(cType),
  isImageContent: (cType: string): cType is ImageContentType => con.imageContent.includes(cType),
  isAppContent: (cType: string): cType is ApplicationContentType => con.appContent.includes(cType),
  isOtherContent: (cType: string): cType is OtherContentType => con.otherContent.includes(cType),
  isCodec: (codec: string): codec is VideoCodec => con.codecs.includes(codec),
  isVideoType: (vType: string): vType is VideoType => con.videoTypes.includes(vType),
  asVidType(vType: string | null): VidType | null {
    if (vType && this.isVideoType(vType)) {
      return vType.startsWith('.') ? vType as VidType : `.${vType}` as VidType
    } else {
      return null;
    }
  },
  isOutputFile: <T extends VideoType>(file: string): file is OutputFile<T> => {
    const match = file.match(con.outputRegex);
    if (!match || !match.groups) return false;
    const { type } = match.groups as unknown as OutputMatchGroups<T>
    if (!grd.isVideoType(type)) return false;
    return true;
  },
  matchContentType: <T extends ContentType, D extends ContentType>(cType: T, dType: D): cType is SameType<T, D> => {
    if (!grd.isContent(cType)) return false;
    if (!grd.isContent(dType)) return false;
    if (dType === '*/*') return true;
    if (dType.endsWith('/*')) {
      const baseType = dType.split('/')[0] as "image" | "video" | "application" | "text";
      return cType.startsWith(baseType + '/');
    } //@ts-ignore
    return cType === dType;
  },
  isBinary: (data: ArrayBuffer): data is Binary => ![...new Uint8Array(data)].every(byte => con.textCharacters.has(byte)),
  matchSignature: async <D extends ContentType>(buffer: Buffer, determinedType: D) => {
    switch (determinedType) {
      case 'video/mp4':
        const ftypBox = buffer.toString('utf8', 4, 8); // Read bytes 4 to 8
        return ftypBox === 'ftyp';
      case 'image/jpeg':
        // JPEG files start with 0xFFD8 and end with 0xFFD9
        return buffer[0] === 0xFF && buffer[1] === 0xD8;
      case 'image/png':
        // PNG files start with an 8-byte signature: 89 50 4E 47 0D 0A 1A 0A
        return buffer.subarray(0, 8).equals(Buffer.from([0x89, 0x50, 0x4E, 0x47, 0x0D, 0x0A, 0x1A, 0x0A]));
      case 'audio/mpeg':
        // MP3 files have frames starting with 0xFFFB or 0xFFF3 or 0xFFF2
        return buffer[0] === 0xFF && (buffer[1] & 0xF6) === 0xF2;
      case 'image/vnd.djvu':
        // DJVU files start with AT&T, DJVM, or FORM
        return buffer.toString('utf8', 0, 4) === 'AT&T' || buffer.toString('utf8', 0, 4) === 'DJVM' || buffer.toString('utf8', 0, 4) === 'FORM';
      case 'image/vnd.dwg':
        // DWG files start with AC10
        return buffer.toString('utf8', 0, 4) === 'AC10';
      case 'audio/flac':
        // FLAC files start with fLaC
        return buffer.toString('utf8', 0, 4) === 'fLaC';
      case 'audio/x-matroska':
        // Matroska files start with 1A 45 DF A3
        return buffer.subarray(0, 4).equals(Buffer.from([0x1A, 0x45, 0xDF, 0xA3]));
      case 'video/x-ms-wmv':
      case 'video/x-ms-asf':
        // WMV and ASF files start with 30 26 B2 75 8E 66 CF 11
        return buffer.subarray(0, 8).equals(Buffer.from([0x30, 0x26, 0xB2, 0x75, 0x8E, 0x66, 0xCF, 0x11]));
      case 'video/MP2T':
        // MPEG-TS files start with 47
        return buffer[0] === 0x47;
      case 'application/pdf':
        // PDF files start with %PDF
        return buffer.toString('utf8', 0, 4) === '%PDF';
      default:
        console.error('Unsupported content type for signature check:', determinedType);
        return false;
    }
  },
  isContentType: async <D extends ContentType>(url: string, type: D) => {
    try {
      const response = await axios.head(url);
      const contentType = response.headers['Content-Type'];
      if (contentType && grd.matchContentType(contentType as ContentType, type)) {
        return type;
      }
      const rangeResponse = await axios.get(url, {
        headers: {
          ...con.headers,
          Range: 'bytes=0-31'
        },
        responseType: 'arraybuffer'
      });
      const buffer = Buffer.from(rangeResponse.data);
      if (await grd.matchSignature(buffer, type)) {
        return type;
      } else {
        return false;
      };
    } catch (error) {
      console.error('Error fetching the URL:', error);
      return false;
    }
  },
  isFileType: <T extends FileType> (fileType: T, data: FetchData<any>): data is FetchChecked<T> => {
    return data.uri.endsWith(fileType) && data.url.includes(fileType);
  }
};

const fn: FunctionObject = {
  getArrValue<T extends string[]>(array: string[], ...params: T) {
    const index = array.findIndex((v): v is T[number] => {
      return params.includes(v);
    });
    return array[index + 1];
  },
  getMaxTLD: async function () {
    let maxLength = 63;
    try {
      const response = await axios.get<string>('http://data.iana.org/TLD/tlds-alpha-by-domain.txt');
      const lines = response.data.split('\n');
      lines.shift();
      maxLength = Math.max(...lines.map(line => line.length));
    } catch (error) {
      console.error(`Error fetching data:`, error);
    }
    return maxLength;
  },
  /**
   * Automatically handles RegExp strings and escapes sequences that normally would need double backslashes.
   * It takes into consideration if the user has already escaped them themselves as well, so it won't cause any errors!
   * - Sequences handled: Requires a quantifier (i.e. `+` | `*` | `{\d+,?\d*}`)
   * - \d \D \w \W \S \s \n \r \t \0 \v \#
   *
   * @property {EscapeRegex} escapeRegex
   * @param {string} str
   */
  escapeRegex: (str: string) => str.replace(/(?<!\\)(?:[dDwWSsnrt0v#](?:\+|\*|\{\d+,?\d*\})|\/|[pP]\{.+\}|k\<\w+\>|u[a-fA-F0-9]{4}|x[a-fA-F0-9]{2}|[0-7]{3}|c[a-zA-Z]{1}|(?<![^\[])b\])/g, '\\$&'),
  /**
   * @property {GetRegex} getRegexPattern
   * @param {1 | 2} pathType The Regex pattern to use
   * @param {string} [pathRegex="[^\/]+\/\d+\/\d{4}\/\d{1,2}\/\d{1,2}"] A regex-like string used to identify the URI path after the `domain` but before the `filename`.
   * @param {string} [modelRegex="[^\\/]+\\/(?<modelID>\\d{8,10})"]
   * **Notes: modelRegex | pathRegex**
   * - Default: `[^\/]+\/\d+\/\d{4}\/\d{1,2}\/\d{1,2}` | `[^\\/]+\\/(?<modelID>\\d{8,10})`
   * - Should not include the "/" like a normal regex.
   * - Should not include the beginning "/" or the ending "/" for the path. These are accounted for already.
   */
  getRegexPattern: async function (pathType: 1 | 2, pathRegex: string, modelRegex: string) {
    return new RegExp(`/(?<url>(?<domain>https?:\\/\\/.+\\.\\w{2,${await fn.getMaxTLD()}})(?<path>\\/(?:${fn.escapeRegex(pathRegex)}|${fn.escapeRegex(modelRegex)})\\/)(?<filename>[^\\/]+)${pathType === 1 ? '(?:\\/\\S+)?(?<type>(?<=\\k<domain>\\k<path>\\k<filename>\\/\\S+)\\.m3u8|\\.ts|\\.mp4)' : '\\/(?<quality>${quality})\\/\\S+(?<type>\\.m3u8|\\.ts|\\.mp4)'}(?<hash>\\?\\S+=\\S+)(?<expires>(?:\\\\u0026|&)\\S+=\\d+))/`);
  },
  displayHelp() {
    console.log(`
      streamToMP4
      Usage: streamToMP4 [option <value>] <url>
      Options:
        [Flag <value>]                    [Explanation]
        -p      --path-regex              Use a specific regex-like pattern that represents the path structure
          -pr      --path                   that is in use by the URL directly after the domain. Defaults to
                                            "[^\\/]+\\/\\d+\\/\\d{4}\\/\\d{1,2}\\/\\d{1,2}".
        -o      --output                  The output directory and filename, if only the filename is provided
                                            then the default directory will be used. Defaults to
                                            "~/Videos/streams/<filename>/<filename>.mp4".
        -s      --site                    The website which you are getting the content from. Defaults to
                                            https://www.stripchat.com
        -m      --model-id                The model's model ID (currently only supported for Stripchat)
                  --model                   Defaults to "\\d{8,10}".
        -c      --codec                   The codec to use to encode the video. Defaults to "libx264".
        -t      --path-type               If provided, specifies a path quick option. 1 = Records, 2 = Model
        -h      --help                    Display this help information.
      Example:
        streamToMP4 -p "[^\\/]+\\/\\d+\\/\\d{4}\\/\\d{1,2}\\/\\d{1,2}" -o "myStream.mp4" "https://example.com/path/22/2024/02/24/filename/video.m3u8?md5=wjidww7w899&expires=168559830"
      `);
  },
  handleArgs: async function (...params: ExtendedArray<string>): Promise<[Output, RegExp, EnvFile, NullableString]> {
    let pathRegex = `[^\/]+\/\d+\/\d{4}\/\d{1,2}\/\d{1,2}`;
    let modelID = `\\d{8,10}`;
    let modelRegex = `[^\\/]+\\/(?<modelID>\\d{8,10})`;
    let pathType = 1 as 1 | 2 | 3;
    let codec = null as VideoCodec | null;
    var env = process.env as EnvFile;
    const out = {
      type: '.mp4',
      codec: 'libx264'
    } as Output;
    let url = null as NullableString;
    if (params.length === 0) {
      fn.displayHelp();
      process.exit(0);
    } else {
      if (params.iStartsWith(-1, 'http')) {
        url = params.at(-1)!;
      } else {
        let path = params.iStartsWith(-1, '/') ? `${params.at(-1)}${params.iEndsWith(-1, '/') ? '' : '/'}` : `${con.mainDir}/${params.at(-1)!}/`;
        path += '.env';
        if (fs.existsSync(path) && fs.lstatSync(path).isDirectory()) {
          config({ path, processEnv: env });
        } else {
          throw new Error(`Error: Last Parameter is not a valid URL/URI: "${params.at(-1)}"`);
        }
      }
      for (let i = 0; i < params.length; i++) {
        const arg = params[i];
        const value = params[i + 1];
        // Help Param
        //#region [#ff110040]
        if (grd.isParam(arg, '-h', '--help')) {
          fn.displayHelp();
          process.exit(0);
        }
        //#endregion

        // Codec Param
        //#region [#ccdd0040]
        if (grd.isParam(arg, '-c', '--codec')) {
          if (!grd.isCodec(value)) {
            console.error(`Error: Codec not passed or not a valid Codec: ${value}`);
            fn.displayHelp();
            return process.exit(1);
          }
          if (params.exists('-o', '--output')) {
            out.type = grd.asVidType(params.getVal(grd.isVideoType, '-o', '--output')) || fn.handleVideoType(value);
          }
        }
        //#endregion

        // Header Param
        //#region [#cc000040]
        if (grd.isParam(arg, '-s', '--site')) {
          con.headers.origin = value;
          con.headers.referer = `${value}/`;
        }
        //#endregion

        // Path Regex Param
        //#region [#ccddff40]
        if (grd.isParam(arg, '--path', '-p', '--path-regex', '-pr')) {
          pathRegex = value;
        }
        //#endregion

        // Output Param
        //#region [#eedd0040]
        if (grd.isParam(arg, '-o', '--output')) {
          if (params.exists('-c', '--codec')) {
            codec = params.getVal(grd.isCodec, '-c', '--codec');
          }
          const o = fn.handleOutput(value, codec);
          out.codec = o[0];
          out.type = o[1];
          out.file = o[2];
          out.put = o[3];
          out.path = o[4];
          if (fs.existsSync(out.path) && fs.lstatSync(out.path).isDirectory()) {
            config({
              path: `${out.path}/.env`,
              processEnv: env
            });
          } else {
            fs.mkdirSync(out.path, { recursive: true });
          }
        }
        //#endregion

        // Model-ID Param
        //#region [#44dd0040]
        if (grd.isParam(arg, '-m', '--model', '--model-id')) {
          modelID = value;
          modelRegex = `[^\\/]+\\/(?<modelID>${fn.escapeRegex(value)})`;
        }
        //#endregion

        // Path-Type Param
        //#region [#99aa9940]
        if (grd.isParam(arg, "-t", "--path-type")) {
          pathType = Number(value) as 1 | 2 | 3;
        }
        //#endregion
      }
    }
    if (!out.put) {
      out.type = '.mp4';
      out.codec = fn.handleCodec('mp4');
    }
    const regex = pathType === 3 ? recuRegex : await fn.getRegexPattern(pathType, pathRegex, modelRegex);
    return [out, regex, env, url];
  },
  capitalize: (word: string) => word.charAt(0).toUpperCase() + word.slice(1),
  getDateTime(): [string, () => string, () => string] {
    const date = con.dateFormatter.format(new Date(Date.now()));
    const time = () => con.timeFormatter.format(new Date(Date.now()));
    const fullDate = () => con.formatter.format(new Date(Date.now()));
    return [date, time, fullDate];
  },
  handleLog<T extends LogType>(directory: T, filename: string, ...data: any[]) {
    const file = `${con.logDir}/${directory}/${directory}-${filename}.log`;
    const [date, getTime, getFull] = fn.getDateTime();
    if (!fs.existsSync(`${con.logDir}/${directory}`) && !fs.lstatSync(`${con.logDir}/${directory}`).isDirectory()) {
      fs.mkdirSync(`${con.logDir}/${directory}`, { recursive: true });
      console.log(`Directory made: ${con.logDir}/${directory}`);
    }
    let fileData = fs.readFileSync(file).toString() || `[${fn.capitalize(directory)} on ${date}]:\n`;
    for (const bit of data) {
      fileData += `[${getFull()}]: ${bit}\n`;
    }
    const log = (directory === 'debug' ? ['purple', '#AAAAAA', 'initial', '', 'log'] : directory === 'errors' ? ['#FF0045', 'darkorange', '700', ' font-style: italic;', 'error'] : directory === 'info' ? ['#00ccff', 'initial', 'initial', '', 'log'] : ['goldenrod', 'initial', 'initial', ' font-style: italic;', 'warn']) as LogInfoArray<T>;
    console[log[4]](`%c${fn.capitalize(directory)}:%c`, `color: ${log[0]}; font-weight: 700;`, `color: ${log[1]}; font-weight: ${log[2]};${log[3]}`, ...data);
    fs.writeFileSync(file, fileData);
  },
  makeRequest: async function <F extends FileType>(data: FetchData<F>) {
    try {
      const response = await fetch(data.url, {
        method: "GET",
        headers: { ...con.headers },
        body: null
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response;
    } catch (err) {
      console.error(`Error: ${err}`);
      throw err;
    }
  },
  downloadMP4: async function <F extends FileType>(data: FetchChecked<F>) {
    const writer = fs.createWriteStream(data.uri);
    try {
      const response = await axios({
        url: data.url,
        method: 'GET',
        responseType: 'stream',
        validateStatus: function (status) {
          return status < 500; // Resolve only if the status code is less than 500
        }
      });
      if (response.status === 410) {
        console.error(`The resource at '${data.url}' is gone (410).`);
        return;
      }
      if (response.status !== 200) {
        console.error(`Failed to get '${data.url}' (${response.status})`);
        return;
      }
      response.data.pipe(writer);
      writer.on('finish', () => {
        console.log(`File Downloaded: ${data.uri}`);
      });
      writer.on('error', (err) => {
        fs.unlink(data.uri, () => {}); // Delete the file async if error occurs
        console.error(`Error writing the file: ${err.message}`);
      });
    } catch (err) {
      console.error(`Error downloading the file: ${(err as Error).message}`);
    }
  },
  handleFetch: async function <F extends FileType>(data: FetchChecked<F>): Promise<F extends '.m3u8' ? string : void> {
    const response = await fn.makeRequest(data);
    const contentType = response.headers.get('content-type') as ContentType | null;
    let arrayBuffer: ArrayBuffer;
    if (contentType === 'video/mp4') {
      return await fn.downloadMP4(data) as F extends '.m3u8' ? never : void;
    } else {
      arrayBuffer = await response.arrayBuffer();
    }
    if (grd.isBinary(arrayBuffer)) {
      arrayBuffer.binary = true;
      const uint8Array = new Uint8Array(arrayBuffer);
      fs.writeFile(data.uri, uint8Array, (err) => {
        if (err) {
          console.error(`Error: ${err.message}`);
          throw err;
        }
      });
      console.log(`File Downloaded: ${data.uri}`);
      return void 0 as F extends '.m3u8' ? string : void;
    } else {
      const text = new TextDecoder('utf-8').decode(arrayBuffer);
      fs.writeFile(data.uri, text, (err) => {
        if (err) {
          console.error(`Error: ${err.message}`);
          throw err;
        }
      });
      console.log(`File Downloaded: ${data.uri}`);
      return text as F extends '.m3u8' ? string : void;;
    }
  },
  handleFFmpeg: async function (data: BasicFileData) {
    FFmpeg(data.uri, {
      logger: {
        debug: (...bits) => fn.handleLog('debug', data.filename, ...bits),
        error: (...bits) => fn.handleLog('errors', data.filename, ...bits),
        info: (...bits) => fn.handleLog('info', data.filename, ...bits),
        warn: (...bits) => fn.handleLog('warnings', data.filename, ...bits),
      },
    }).addOutput(data.output)
      .videoCodec(data.codec)
      .on('end', function () {
        console.log(`MP4 file wrote: ${data.output}`);
      })
      .run();
  },
  handleCodec<T extends VideoType>(type: T): DefaultCodec<T> {
    const value = type.startsWith('.') ? type.replace('.', '') : type;
    return ((value === 'mp4' || value === 'm4v' || value === 'mov' || value === 'flv') ? 'libx264' : value === 'mkv' ? 'libx265' : value === 'avi' ? 'libxvid' : type.startsWith('.') ? type.replace('.', '') : type === 'wmv' ? 'wmv2' : 'libopus') as DefaultCodec<T>;
  },
  handleOutput(outputValue: string, codec: VideoCodec | null) {
    const match = outputValue.match(con.outputRegex);
    if (grd.isOutputFile(outputValue) && match && match.groups) {
      const { type, filename, path } = match.groups as unknown as OutputMatchGroups<VideoType>;
      const outputPath = (path ? path.startsWith('/') ? path : `${process.cwd()}/${path}` : `${con.mainDir}/${filename}/`) as DownloadDirectory;
      if (!fs.existsSync(outputPath)) {
        fs.mkdirSync(outputPath, { recursive: true });
      }
      return [codec || fn.handleCodec(type), `.${type}`, `${filename}.${type}`, `${outputPath}${filename}.${type}`, outputPath] as [VideoCodec, VidType, OutputFile<VideoType>, OutputType<VideoType>, DownloadDirectory];
    } else {
      console.error('Output File not provided!', `\nProvided Value: ${outputValue}`);
      fn.displayHelp();
      return process.exit(1);
    }
  },
  handleVideoType: <T extends VideoCodec>(codec: T): DefaultVType<T> => (codec === "libx264" ? '.mp4' : (codec === "libx265" || codec === "dts") ? '.mkv' : (codec === "mpeg4" || codec === "libxvid") ? '.avi' : (codec === "prores" || codec === "aac") ? '.mov' : (codec === "wmv2" || codec === "wmav2") ? '.wmv' : (codec === "libvpx-vp9" || codec === "libopus") ? '.webm' : codec === "aac" ? '.m4v' : codec === "flv" ? '.flv' : ".avi") as DefaultVType<T>
};



(async function () {//@ts-ignore
  const [out, regex, env, url] = await fn.handleArgs(...con.args);
  let match: RegExpMatchArray | null;
  if (url && (match = url.match(regex)) && match.groups) {
    const data = match.groups as unknown as URLMatchGroups;
    const master = data as MasterData;
    data.filename = data.filename.replace('/', '--');
    master.directory = out.path || `${env.HOME}/Videos/streams/${data.filename}` as DownloadDirectory;
    fs.mkdirSync(master.directory, { recursive: true });
    master.type = out.type;
    master.uri = `${master.directory}${data.filename}${data.type}`;
    master.output = out.put || `${master.directory}${data.filename}${master.type}`;
    master.codec = out.codec;
    master.uris = [];
    master.urls = [];
    const fetchData = { url: master.url, uri: master.uri } as FetchData<typeof data.type>;
    let matches: RegExpMatchArray | null;
    let m3u8content: string;
    if (!fs.existsSync(`${master.directory}/.env`)) {
      fs.writeFileSync(`${master.directory}/.env`, `filename="${data.filename}"
directory="${master.directory}"
uri="${master.uri}"
output="${master.output}"
filepath="${data.path}"
codec="${master.codec}"`);
    }
    if (grd.isFileType('.m3u8', fetchData)) {
      m3u8content = await fn.handleFetch(fetchData);
      matches = m3u8content.match(con.tsRegex);
      if (matches) {
        console.log(`Parsed m3u8 manifest.`);
        fs.mkdirSync(`${master.directory}${matches[0].replace(con.tsRegex, "$<path>")}`, { recursive: true });
        for (let i = 0; i < matches.length; i++) {
          const url = `${data.domain}${matches[i]}${data.hash}${data.expires}` as TSUrl;
          const uri = `${master.directory}${matches[i]}` as TSUri;
          await fn.handleFetch({ url, uri });
          console.log(`Segment handled: ${uri}`);
          m3u8content = m3u8content.replace(matches[i], uri);
          console.log(`Segment overwrote in m3u8 manifest.`);
          master.uris[i] = uri;
          master.urls[i] = url;
        };
        fs.writeFileSync(master.uri, m3u8content);
        console.log(`New m3u8 file wrote: ${master.uri}`);
        // Run the FFmpeg command to convert M3U8 to MP4
        await fn.handleFFmpeg(master);
      }
    } else {
      await fn.downloadMP4(fetchData);
    }
  } else {
    const data = {
      filename: env.filename,
      directory: env.directory,
      uri: env.uri,
      output: env.output,
      codec: env.codec
    } as BasicFileData
    return await fn.handleFFmpeg(data);
  }
})()
