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


interface FileData extends BasicFileData {
  url: FileURL<this['type']>;
  domain: Domain;
  path: StreamPath;
  type: FileType;
  hash: MD5Hash;
  expires: ExpirationQuery;
  quality?: string
}
interface EnvFile extends import('dotenv').DotenvPopulateInput, NodeJS.ProcessEnv {
  filename: string;
  directory: DownloadDirectory
  uri: string;
  output: StartsWith<OutputFile, '/'>;
  filepath: string;
  [variable: string]: string;
}
interface BasicFileData {
  filename: string;
  output: OutputType<VideoType>;
  uri: string;
  directory: DownloadDirectory;
  codec: string;
}
interface URLMatchGroups {
  url: string;
  domain: string;
  path: string;
  modelID?: string
  filename: string;
  type: '.m3u8' | '.ts' | '.mp4';
  quality?: Quality;
  hash?: string;
  expires?: string;
}
type Quality = ["144p", "240p", "360p", "480p", "576p", "720p", "1080p", "1440p", "1600p", "2160p-4k", "2880p-5k", "3200p", "4320p-8k", "5760p-10k", "6400p", "8640p-16k", "2k-2048x1080", "dci-4k-4096x2160", "uwqhd-3440x1440", "wqxga-2560x1600", "wxga-1280x800", "sxga-1280x1024", "uxga-1600x1200", "qhd-plus-3200x1800", "fhd-plus-2220x1080", "uhd-3840x2160", "wvga-800x480", "svga-800x600", "qvga-320x240", "hqvga-240x160", "qqvga-160x120"][number];
type Queries = ['email_address', 'username', 'ipaddress', 'phone', 'domain', 'password', 'fullname'];
type QueryType = Queries[number];
type Field = "userid" | "uid" | "memberid" | "member_id" | "email_address" | "emailaddress" | "email" | "email_address2" | "emailaddress2" | "email2" | "membername" | "username" | "uname" | "user_name" | "member_name" | "ipaddress" | "ip_address" | "ip" | "password" | "password2" | "password3" | "password4" | "plaintext" | "hash" | "salt" | "salt2" | "salt3" | "secret" | "key" | "firstname" | "first_name" | "fname" | "lastname" | "last_name" | "lname" | "fullname" | "full_name" | "number" | "phone" | "mobile" | "telephone" | "address" | "address1" | "address2" | "address3" | "city" | "state" | "country" | "county" | "postcode" | "zipcode" | "postalcode" | "zip" | "breachname" | "fb_id" | "facebook_id" | "fbid";
type LeakSiteReturn = {
  [K in Field]?: string;
}
interface LeakResponse {
  error: "false" | "true";
  message: {
    [siteName: string]: Array<LeakSiteReturn>;
  }
}
interface LeakLookup {
  query: string;
  type: QueryType;
}
interface FullLeakLookup extends LeakLookup {
  key: typeof key;
}
type PrimType = string | number | symbol | object | boolean | any[];
interface ArrayExtension<P extends PrimType> extends Array<P> {
  exists: ExtendedExists<P>;
  isVal: ExtendedIsVal<P>;
  nextVal: ExtendedSibling<P>;
  prevVal: ExtendedSibling<P>;
  curIndex: ExtendedIndex<P>;
  getVal: GetVal<P>;
  iStartsWith: ExtendedWith<P>;
  iEndsWith: ExtendedWith<P>;
  includes: ExtendedIncludes<P>;
}
declare class ExtendedArray<P extends PrimType> extends Array<P>, implements ArrayExtension<P> {
  exists: ExtendedExists<P>;
  isVal: ExtendedIsVal<P>;
  nextVal: ExtendedSibling<P>;
  prevVal: ExtendedSibling<P>;
  curIndex: ExtendedIndex<P>;
  getVal: GetVal<P>;
  iStartsWith: ExtendedWith<P>;
  iEndsWith: ExtendedWith<P>;
  includes: ExtendedIncludes<P>;
  constructor(this: ExtendedArray<P>, ...items: P[]): ExtendedArray<P>;
}
type ExtendedExists<P extends PrimType> = <T extends PrimType[]>(this: ArrayExtension<P>, ...values: T) => this is (T[number] | P)[];
type ExtendedIsVal<P extends PrimType> = <T extends P[]>(this: ArrayExtension<P>, value: P, ...searchValues: T) => value is T[number];
type ExtendedSibling<P extends PrimType> = <R = P>(this: ArrayExtension<P>, currentValue: P, validator?: ((value: P | unknown) => value is R)) => R;
type ExtendedIndex<P extends PrimType> = (this: ArrayExtension<P>, currentValue: P) => number;
type ExtendedWith<P extends PrimType> = <T extends string>(this: ArrayExtension<P>, index: number, searchString: T, atPosition?: number) => boolean;
type ExtendedIncludes<P extends PrimType> = <T extends P>(this: ArrayExtension<P>, searchElement: P, fromIndex?: number) => searchElement is T;

interface GetVal<P extends PrimType> {
  <R extends P, A extends [validator: (value: P) => value is R, ...values: P[]] | P[]>(this: ExtendedArray<P>, ...values: A[0] extends ((value: P) => value is R) ? [validator?: ((value: P) => value is R), ...values: P[]] : A): A[0] extends ((value: P) => value is R) ? (R | null) : P;
  <R extends P, A extends [validator: (value: P) => value is R, ...values: P[]] | P[]>(this: ExtendedArray<P>, validator: (value: P) => R, ...values: P[]): R | null;
  <R extends P, A extends [validator: (value: P) => value is R, ...values: P[]] | P[]>(this: ExtendedArray<P>, ...values: P[]): P;
}
interface FunctionObject {
  getArrValue<T extends string[]>(array: string[], ...params: T): string;
  getMaxTLD(): Promise<number>;
  escapeRegex: (str: string) => string;
  getRegexPattern: (pathType: 1 | 2, pathRegex: string, modelRegex: string) => Promise<RegExp>;
  displayHelp(): void;
  handleArgs: (...params: ExtendedArray<string>) => Promise<[Output, RegExp, EnvFile, NullableString]>;
  capitalize: (word: string) => string;
  getDateTime(): [string, () => string, () => string];
  handleLog<T extends LogType>(directory: T, filename: string, ...data: any[]): void;
  makeRequest: <F extends FileType>(data: FetchData<F>) => Promise<import('node-fetch').Response>;
  downloadMP4: <F extends FileType>(data: FetchChecked<F>) => Promise<void>;
  handleFetch: <F extends FileType>(data: FetchChecked<F>) => Promise<F extends ".m3u8" ? string : void>;
  handleFFmpeg: (data: BasicFileData) => Promise<void>;
  handleCodec: <T extends VideoType>(type: T) => DefaultCodec<T>;
  handleOutput(outputValue: string, codec: VideoCodec | null): [VideoCodec, VidType, OutputFile<VideoType>, OutputType<VideoType>, DownloadDirectory];
  handleVideoType: <T extends VideoCodec>(codec: T) => DefaultVType<T>;
};
interface TypeGuards {
  paramExists: <T extends string[]>(array: string[], ...params: T) => array is (T[number] | string)[];
  isParam: <T extends string[]>(param: string, ...params: T) => param is T[number];
  isContent: <C extends ContentType>(cType: string | C) => cType is C;
  isTextContent: (cType: string) => cType is TextContentType;
  isAudioContent: (cType: string) => cType is AudioContentType;
  isVideoContent: (cType: string) => cType is VideoContentType;
  isImageContent: (cType: string) => cType is ImageContentType;
  isAppContent: (cType: string) => cType is ApplicationContentType;
  isOtherContent: (cType: string) => cType is OtherContentType;
  isCodec: (codec: string) => codec is VideoCodec;
  isVideoType: (vType: string) => vType is VideoType;
  asVidType(vType: string | null): VidType | null;
  isOutputFile: <T extends VideoType>(file: string) => file is `${string}${T extends StartsWith<T, ".", false> ? T : `.${T}`}`;
  matchContentType: <T extends ContentType, D extends ContentType>(cType: T, dType: D) => cType is SameType<T, D>;
  isBinary: (data: ArrayBuffer) => data is Binary;
  matchSignature: <D extends ContentType>(buffer: Buffer, determinedType: D) => Promise<boolean>;
  isContentType: <D extends ContentType>(url: string, type: D) => Promise<false | D>;
  isFileType: <T extends FileType>(fileType: T, data: FetchData<any>) => data is FetchChecked<T>;
}

type LogType = 'errors' | 'warnings' | 'info' | 'debug';
type LogInfoArray<T extends LogType> = T extends 'debug'
  ? ['purple', '#AAAAAA', 'initial', ' font-style: italic;', 'log']
: T extends 'errors'
  ? ['#FF0045', 'initial', '700', ' font-style: italic;', 'error']
: T extends 'info'
  ? ['#00ccff', 'initial', 'initial', '', 'log']
: ['goldenrod', 'darkorange', 'initial', '', 'warn'];
type LogDir = `${MainDirectory}/logs`;
type MainDirectory = `/home/${string}/Videos/streams`;
type DownloadDirectory = `/${string}/` | `${MainDirectory}/${string}/`
type FileType = '.m3u8' | '.ts' | '.mp4';
type NullableString = string | null;
type OutputFile<T extends VideoType> = `${string}${T extends StartsWith<T, "."> ? T : `.${T}`}`;
type Uri<T extends FileType | VidType> = `${DownloadDirectory}${string}${T}`;
type Domain = `https://${string}.${string}`;
type StreamPath = `/${string}/`;
type MD5Hash = `?md5=${string}`;
type ExpirationQuery = `${"\\u0026" | "&"}expires=${number}`;
type FileURL<F extends FileType> = `${Domain}${StreamPath}${string}${F}${MD5Hash}${ExpirationQuery}`;
type TSUri = `${DownloadDirectory}${string}.ts`;
type TSUrl = FileURL<'.ts'>;
type VideoCodec = "libx264" | "libx265" | "aac" | "libvpx-vp9" | "dts" | "mpeg4" | "libxvid" | "prores" | "wmv2" | "wmav2" | "flv" | "libvpx" | "libopus";
type MP4Codec = "libx264" | "libx265" | "aac";
type MKVCodec = "libx264" | "libx265" | "libvpx-vp9" | "aac" | "dts";
type AVICodec = "mpeg4" | "libxvid";
type MOVCodec = "libx264" | "prores" | "aac";
type WMVCodec = "wmv2" | "wmav2";
type FLVCodec = "flv" | "libx264";
type WebMCodec = "libvpx" | "libvpx-vp9" | "libopus";
type M4VCodec = "libx264" | "aac";
type VType = 'mp4' | 'mkv' | 'avi' | 'mov' | 'flv' | 'webm' | 'm4v' | 'wmv';
type VidType = `.${VType}`;
type OutputType<V extends VideoType> = `${DownloadDirectory}${OutputFile<V>}`;
type HandledOutput = [VideoCodec, VidType, OutputFile<VideoType>, OutputType<VideoType>, DownloadDirectory]
type DefaultVType<T extends VideoCodec | OutputFile<VideoType>> = T extends "libx264" | OutputFile<`${'' | '.'}mp4`> ? '.mp4' : T extends "libx265" | "dts" | OutputFile<`${'' | '.'}mkv`> ? '.mkv' : T extends AVICodec | OutputFile<`${'' | '.'}avi`> ? '.avi' : T extends "prores" | "aac" | OutputFile<`${'' | '.'}mov`> ? '.mov' : T extends WMVCodec | OutputFile<`${'' | '.'}wmv`> ? '.wmv' : T extends WebMCodec | OutputFile<`${'' | '.'}webm`> ? '.webm' : T extends "aac" | OutputFile<`${'' | '.'}m4v`> ? '.m4v' : T extends "flv" | OutputFile<`${'' | '.'}flv`> ? '.flv' : T extends "libxvid" | OutputFile<`${'' | '.'}avi`> ? ".avi" : never;
type VideoType = VType | VidType;
type DefaultCodec<T extends VideoType> = T extends `${'' | '.'}${'mp4' | 'm4v' | 'mov' | 'flv'}` ? 'libx264' : T extends 'mkv' | '.mkv' ? 'libx265' : T extends 'avi' | '.avi' ? 'libxvid' : T extends 'wmv' | '.wmv' ? 'wmv2' : T extends 'webm' | '.webm' ? 'libopus' : never;

type HandleCodec<T extends VideoCodec | VideoType, O extends OutputFile<T extends VideoType ? T : VideoType> | VideoType | undefined = undefined> = T extends VideoType ? DefaultCodec<T> : T extends VideoCodec ? T : never;
type HandleVType<T extends VideoCodec | VideoType, O extends OutputFile<T extends VideoType ? T : VideoType> | VideoType | undefined = undefined> = T extends VideoType ? T extends StartsWith<T, "."> ? T : `.${T}` : O extends VideoType ? O extends StartsWith<O, "."> ? O : `.${O}` : O extends OutputFile<T extends VideoType ? T : VideoType> ? DefaultVType<O> : DefaultVType<T>;

type AudioCodecs = ["libmp3lame", "aac", "pcm_s16le", "adpcm_ima_wav", "flac", "libvorbis", "wmav2", "alac", "pcm_s16be"];
type AudioCodec = AudioCodecs[number];
interface AFHeaders {
  accept: string;
  'accept-language': string;
  origin: string;
  priority: string;
  referer: string;
  'sec-ch-ua': string;
  'sec-ch-ua-mobile': string;
  'sec-ch-ua-platform': string;
  'sec-fetch-dest': string;
  'sec-fetch-mode': string;
  'sec-fetch-site': string;
  'user-agent': string;
  Range?: string;
}
interface FetchData<T extends FileType> {
  url: FileURL<T>,
  uri: Uri<T>;
}
interface FetchChecked<T extends FileType> extends FetchData<T> {
  url: Includes<FileURL<T>, T>;
  uri: EndsWith<Uri<T>, T>;
}
type Includes<T extends string, U extends string> = T extends `${infer _}${U}${infer E}` ? T : never;
type EndsWith<T extends string, U extends string, Invert extends boolean = false> = T extends `${infer _}${U}` ? Invert extends true ? _ : T : never;
type StartsWith<T extends string, U extends string, Invert extends boolean = false> = T extends `${U}${infer _}` ? Invert extends true ? _ : T : never;
interface OutputMatchGroups<T extends VideoType> {
  path?: `${string}/` | `/${string}/`;
  filename: string;
  type: StartsWith<T, '.', true>;
}
interface Binary extends ArrayBuffer {
  binary: true;
}
type FetchHandler<T extends 'response' | undefined | 'array' | 'ts' | 'text' = undefined> = T extends 'response' ? import('node-fetch').Response : T extends 'text' ? string : T extends 'array' ? ArrayBuffer : T extends 'ts' ? Uint8Array : Buffer
interface Audio {
  'GROUP-ID': {
    NAME: {
      default: boolean,
      autoselect: boolean,
      language: string,
      uri: string,
      instreamId: string,
      characteristics: string,
      forced: boolean;
    };
  };
}
interface ByteRange {
  length: number;
  offset: number;
}
interface SegmentMap {
  uri: string,
  byterange: ByteRange
}
interface SegmentKey {
  method: string,
  uri: string,
  iv: string;
}
interface Segment {
  title: string,
  byterange: ByteRange,
  duration: number,
  programDateTime: number,
  attributes: {},
  discontinuity: number,
  uri: TSUri,
  timeline: number,
  key: SegmentKey,
  map: SegmentMap,
  'cue-out': string,
  'cue-out-cont': string,
  'cue-in': string,
  custom: {};
}
interface Playlist extends Manifest {
  attributes: {};
}
interface MediaGroups {
  AUDIO: Audio;
  VIDEO: {};
  'CLOSED-CAPTIONS': {};
  SUBTITLES: {};
}
interface Manifest {
  allowCache: boolean;
  endList: boolean;
  mediaSequence: number;
  dateRanges: [];
  discontinuitySequence: number;
  playlistType: string;
  custom: {};
  playlists: Playlist[];
  mediaGroups: MediaGroups;
  dateTimeString: string;
  dateTimeObject: Date;
  targetDuration: number;
  totalDuration: number;
  discontinuityStarts: number[];
  segments: Segment[];
}

interface MasterData extends Omit<FileData, 'type' | 'uri' | 'url'> {
  uris: TSUri[];
  urls: TSUrl[];
  type: '.m3u8' | '.mp4' | '.ts' | VidType;
  file: OutputType<VideoType>;
  uri: Uri<this['type']>;
  url: FileURL<this['type']>
  master: '/video';
}
interface Output {
  put?: OutputType<VideoType>,
  path?: DownloadDirectory,
  file?: OutputFile<VideoType>,
  type: StartsWith<VideoType, '.'>,
  codec: VideoCodec
}
interface Args {
  modelID: string;
  url: string | null;
  output: string | null;
  regex: RegExp;
  codec: VideoCodec;
}
type EscapeRegex = (str: string) => string;
type GetRegex = (pathType: 1 | 2, pathRegex: string, modelRegex: string) => Promise<RegExp>;
type Flag = "-t" | "--path-type" | "-p" | "--path" | "-pr" | "--path-regex" | "-m" | "--model" | "--model-id" | "-f" | "--file" | "-o" | "--output" | "-u" | "--url" | "-F" | "--ffmpeg" | "-h" | "--help" | "-c" | "--codec";
type TextContentTypes = ["text/*", "text/plain", "text/html", "text/css", "text/javascript", "application/json", "application/xml", "text/cmd", "text/css", "text/csv", "text/html", "text/javascript", "text/jsx", "text/markdown", "text/n3", "text/plain", "text/richtext", "text/rtf", "text/sgml", "text/tab-separated-values", "text/troff", "text/turtle", "text/uri-list", "text/vcard", "text/vnd.curl", "text/vnd.curl.dcurl", "text/vnd.curl.scurl", "text/vnd.curl.mcurl", "text/vnd.dvb.subtitle", "text/vnd.fly", "text/vnd.fmi.flexstor", "text/vnd.graphviz", "text/vnd.in3d.3dml", "text/vnd.in3d.spot", "text/vnd.sun.j2me.app-descriptor", "text/vnd.wap.si", "text/vnd.wap.sl", "text/vnd.wap.wml", "text/vnd.wap.wmlscript", "text/x-asm", "text/x-c", "text/x-fortran", "text/x-java-source", "text/x-opml", "text/x-pascal", "text/x-nfo", "text/x-setext", "text/x-sfv", "text/x-uuencode", "text/x-vcalendar", "text/x-vcard", "application/vnd.apple.mpegurl"];

type ImageContentTypes = ["image/*", "image/jpeg", "image/png", "image/gif", "image/webp", "image/svg+xml", "image/bmp", "image/cgm", "image/g3fax", "image/gif", "image/ief", "image/jpeg", "image/jpg", "image/jp2", "image/jpx", "image/ktx", "image/png", "image/sgi", "image/svg+xml", "image/tiff", "image/vnd.adobe.photoshop", "image/vnd.dece.graphic", "image/vnd.dvb.subtitle", "image/vnd.djvu", "image/vnd.dwg", "image/vnd.dxf", "image/vnd.fastbidsheet", "image/vnd.fpx", "image/vnd.fst", "image/vnd.fujixerox.edmics-mmr", "image/vnd.fujixerox.edmics-rlc", "image/vnd.ms-modi", "image/vnd.ms-photo", "image/vnd.net-fpx", "image/vnd.wap.wbmp", "image/vnd.xiff", "image/webp", "image/x-3ds", "image/x-cmu-raster", "image/x-cmx", "image/x-freehand", "image/x-icon", "image/x-jng", "image/x-mrsid-image", "image/x-pcx", "image/x-pict", "image/x-portable-anymap", "image/x-portable-bitmap", "image/x-portable-graymap", "image/x-portable-pixmap", "image/x-rgb", "image/x-tga", "image/x-xbitmap", "image/x-xpixmap", "image/x-xwindowdump"];
type AudioContentTypes = ["audio/*", "audio/mpeg", "audio/ogg", "audio/wav", "audio/aac", "audio/midi", "audio/x-midi", "audio/ogg", "audio/wav", "audio/webm", "audio/3gpp", "audio/3gpp2", "audio/mp3", "audio/mpeg", "audio/mp4", "audio/x-aiff", "audio/flac", "audio/x-matroska"];
type VideoContentTypes = ["video/*", "video/mp4", "video/webm", "video/ogg", "video/x-msvideo", "video/mpeg", "video/mp4", "video/ogg", "video/webm", "video/3gpp", "video/3gpp2", "video/x-flv", "video/x-matroska", "video/quicktime", "video/x-ms-wmv", "video/x-ms-asf", "video/MP2T"];
type ApplicationContentTypes = ["application/*", "application/octet-stream", "application/pdf", "application/zip", "application/x-www-form-urlencoded", "multipart/form-data"];
type OtherContentTypes = ["application/vnd.ms-excel", "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet", "application/msword", "application/vnd.openxmlformats-officedocument.wordprocessingml.document"];
type TextContentType = TextContentTypes[number];
type ImageContentType = ImageContentTypes[number];
type AudioContentType = AudioContentTypes[number];
type VideoContentType = VideoContentTypes[number];
type ApplicationContentType = ApplicationContentTypes[number];
type OtherContentType = OtherContentTypes[number];
type ContentType = TextContentType | ImageContentType | AudioContentType | VideoContentType | ApplicationContentType | OtherContentType | "*/*";
type SameType<T extends ContentType, D extends ContentType> = T extends D ? T : never;
