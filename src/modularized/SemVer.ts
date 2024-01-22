/**
 * @file SemVer.ts
 * @description
 * @author Matthew Allen Rackley
 * @copyright [Matthew Rackley's Github](https://www.github.com/matthewrackley "Matthew Rackley on github.com")
 */

import { SemVer as SemverClass } from 'semver';
import { AddOne, AlphaNumeric, ArrayToString, joinArray } from '../types/utilityTypes';
import exp from 'constants';
export type ExperimentType = 'alpha' | 'beta' | 'rc' | 'build';
export type ReleaseType = "production" | "staging" | "development";
export type Comparators = "===" | "!==" | "=" | "==" | "!=" | "\>" | "\>=" | "\<" | "\<=" | "\^" | "~" | "v";

/**
 * Represents a Version number that aligns with the SemVer specification.
 * @type {VersionPattern} VersionPattern
 */
type VersionPattern = `${VersionNumber}`
  | `${VersionNumber}-${ExperimentType}`
  | `${VersionNumber}-${ExperimentWithVersion}`
  | `${VersionNumber}+${AlphaNumeric<string>}`
  | `${VersionNumber}-${ExperimentType}+${AlphaNumeric<string>}`
  | `${VersionNumber}-${ExperimentWithVersion}+${AlphaNumeric<string>}`;
/**
 * Represents the base for a SemVer Version that aligns with the SemVer specification.
 */
export type VersionNumber = `${number}.${number}.${number}`
type ExperimentWithVersion = `${ExperimentType}\.${number}`;

interface RegExpInterface<A extends string[] | readonly string[], N extends string | null, O extends 'comparator' | 'release' = 'release'> {
  name: N | null;
  array: A;
  regex: `(${this['name'] extends null ? '' : `?<${N}>`}${ArrayToString<A, '|'>})${O extends 'comparator' ? '?' : ''}`
  update<V extends [...V[] extends string[] ? V[] : string[]], L extends string>(value: { array: V, name: L }): RegExpInterface<V, L, O>;
}

interface GenerateInterface {
  <A extends [...A[] extends string[] ? A[] : string[]], N extends string | null = null, O extends 'comparator' | 'release' = 'release'>(array: A | [...A], name?: N, optionalRegex?: O): RegExpInterface<A, N, O>;
};

//@ts-ignore
const generateInterface: GenerateInterface = function generateInterface<A extends [...A[] extends string[] ? A[] : string[]],
  N extends string | null,
  O extends 'comparator' | 'release' = 'release'>(array: A | [...A], name: N = null as N, optionalRegex: O = 'release' as O) {
  var obj = {} as RegExpInterface<A, N, O>;
  obj.name = name as N;
  obj.array = array as A;
  obj.regex = `(${name === null ? '' : '?<' + name + '>'}${joinArray(obj.array, '|')})${optionalRegex === 'comparator' ? '?' : ''}` as unknown as `(${typeof name extends null ? '' : `?<${typeof name}>`}${ArrayToString<[...typeof array], '|'>})${typeof optionalRegex extends 'comparator' ? '?' : ''}`;
  obj.update = (<V extends [...V[] extends string[] ? V[] : string[]], L extends string>(value: { array: V | A, name: L | N }): RegExpInterface<V, L, O> => {
    if (value.name && value.array) {
      return generateInterface(value.array as V, value.name as L, optionalRegex) as RegExpInterface<V, L, O>;
    } else if (value.name && !value.array) {
      value.array = obj.array;//@ts-ignore
      return generateInterface(value.array, value.name, optionalRegex) as RegExpInterface<V, L, O>;
    } else if (value.array && !value.name) {
      value.name = obj.name as N;
      return generateInterface(value.array as V, value.name as N, optionalRegex) as RegExpInterface<V, L, O>;
    } else {
      throw new Error('Invalid value type');
    }
  }) as RegExpInterface<A, N, O>['update']; //@ts-ignore
  return obj;
}

export type InferVersion<V extends VersionPattern> =
  V extends `${infer V1 extends number}.${infer V2 extends number}.${infer V3 extends number}${infer Rest}`
    ? `${V1}.${V2}.${V3}`
  : never;
export type Major<V extends VersionPattern> = V extends `${infer V1 extends number}.${number}.${number}${infer Rest}` ? V1 : never;
export type Minor<V extends VersionPattern> = V extends `${number}.${infer V2 extends number}.${number}${infer Rest}` ? V2 : never;
export type Patch<V extends VersionPattern> = V extends `${number}.${number}.${infer V3 extends number}${infer Rest}` ? V3 : never;
export type Experiment<V extends VersionPattern> = V extends `${infer _Prefix}-${infer PreReleasePart}+${infer _Suffix}`
  ? PreReleasePart
  : V extends `${infer _Prefix}-${infer PreReleasePart}`
  ? PreReleasePart
  : never;
export type ExperimentName<E extends Experiment<VersionPattern>> = E extends `${infer Name}.${infer VNumber}`
  ? Name
  : E extends ExperimentType
  ? E
  : never;
export type ExperimentVersion<E extends Experiment<VersionPattern>> = E extends `${infer Name}.${infer VNumber extends number}`
  ? VNumber
  : never;
export type Metadata<V extends VersionPattern> = V extends `${infer _Prefix}+${infer Meta}`
  ? AlphaNumeric<Meta>
  : never;

// type MajorUpdate<V extends VersionPattern> =
//   Experiment<V> extends never
//   ? AlphaNumeric<Metadata<V>> extends never
//   ? `${AddOne<Major<V>>}.0.0`
//   : `${AddOne<Major<V>>}.0.0-${AlphaNumeric<Metadata<V>>}`
//   : AlphaNumeric<Metadata<V>> extends never
//   ? `${AddOne<Major<V>>}.0.0-${Experiment<V>}`
//   : `${AddOne<Major<V>>}.0.0-${Experiment<V>}+${AlphaNumeric<Metadata<V>>}`;
// type MinorUpdate<V extends VersionPattern> =
//   Experiment<V> extends never
//   ? AlphaNumeric<Metadata<V>> extends never
//   ? `${Major<V>}.${AddOne<Minor<V>>}.0`
//   : `${Major<V>}.${AddOne<Minor<V>>}.0-${AlphaNumeric<Metadata<V>>}`
//   : AlphaNumeric<Metadata<V>> extends never
//   ? `${Major<V>}.${AddOne<Minor<V>>}.0-${Experiment<V>}`
//   : `${Major<V>}.${AddOne<Minor<V>>}.0-${Experiment<V>}+${AlphaNumeric<Metadata<V>>}`;
// type PatchUpdate<V extends VersionPattern> =
//   Experiment<V> extends never
//   ? AlphaNumeric<Metadata<V>> extends never
//   ? `${Major<V>}.${Minor<V>}.${AddOne<Patch<V>>}`
//   : `${Major<V>}.${Minor<V>}.${AddOne<Patch<V>>}-${AlphaNumeric<Metadata<V>>}`
//   : AlphaNumeric<Metadata<V>> extends never
//   ? `${Major<V>}.${Minor<V>}.${AddOne<Patch<V>>}-${Experiment<V>}`
//   : `${Major<V>}.${Minor<V>}.${AddOne<Patch<V>>}-${Experiment<V>}+${AlphaNumeric<Metadata<V>>}`;
// type ExperimentUpdate<V extends VersionPattern> =
//   ExperimentVersion<Experiment<V>> extends never
//   ? AlphaNumeric<Metadata<V>> extends never
//   ? `${InferVersion<V>}-${ExperimentName<Experiment<V>>}.1`
//   : `${InferVersion<V>}-${ExperimentName<Experiment<V>>}.1+${AlphaNumeric<Metadata<V>>}`
//   : ExperimentVersion<Experiment<V>> extends 9
//   ? AlphaNumeric<Metadata<V>> extends never
//   ? ExperimentName<Experiment<V>> extends 'rc'
//   ? `${InferVersion<V>}-build`
//   : ExperimentName<Experiment<V>> extends 'build'
//   ? `${InferVersion<V>}-alpha`
//   : ExperimentName<Experiment<V>> extends 'alpha'
//   ? `${InferVersion<V>}-beta`
//   : ExperimentName<Experiment<V>> extends 'beta'
//   ? `${InferVersion<V>}`
//   : never
//   : ExperimentName<Experiment<V>> extends 'rc'
//   ? `${InferVersion<V>}-build+${AlphaNumeric<Metadata<V>>}`
//   : ExperimentName<Experiment<V>> extends 'build'
//   ? `${InferVersion<V>}-alpha+${AlphaNumeric<Metadata<V>>}`
//   : ExperimentName<Experiment<V>> extends 'alpha'
//   ? `${InferVersion<V>}-beta+${AlphaNumeric<Metadata<V>>}`
//   : ExperimentName<Experiment<V>> extends 'beta'
//   ? `${InferVersion<V>}+${AlphaNumeric<Metadata<V>>}`
//   : ''
//   : AlphaNumeric<Metadata<V>> extends never
//   ? `${InferVersion<V>}-${ExperimentName<Experiment<V>>}.${AddOne<ExperimentVersion<Experiment<V>>>}`
//   : `${InferVersion<V>}-${ExperimentName<Experiment<V>>}.${AddOne<ExperimentVersion<Experiment<V>>>}+${AlphaNumeric<Metadata<V>>}`;
// type VersionUpdate<V extends VersionPattern, UT extends UpdateType> =
//   UT extends 'major'
//   ? MajorUpdate<V>
//   : UT extends 'minor'
//   ? MinorUpdate<V>
//   : UT extends 'patch'
//   ? PatchUpdate<V>
//   : UT extends 'experiment'
//   ? ExperimentUpdate<V>
//   : never;
type ExperimentNameUpdate<V extends VersionPattern, UT extends 'major' | 'minor' | 'patch' | 'experiment'> =
  UT extends 'experiment'
    ? ExperimentVersion<Experiment<V>> extends never
      ? `-${ExperimentName<Experiment<V>>}`
    : ExperimentVersion<Experiment<V>> extends 9
      ? ExperimentName<Experiment<V>> extends 'rc'
        ? '-build'
      : ExperimentName<Experiment<V>> extends 'build'
        ? '-alpha'
      : ExperimentName<Experiment<V>> extends 'alpha'
        ? '-beta'
      : ExperimentName<Experiment<V>> extends 'beta'
        ? ''
      : never
    : ExperimentVersion<Experiment<V>> extends 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8
      ? `-${ExperimentName<Experiment<V>>}`
    : never
  : ExperimentName<Experiment<V>> extends never
    ? ''
  : `-${ExperimentName<Experiment<V>>}`;
type ExperimentVersionUpdate<V extends VersionPattern, UT extends 'major' | 'minor' | 'patch' | 'experiment'> =
  UT extends 'experiment'
  ? ExperimentVersion<Experiment<V>> extends never
  ? '.1'
  : ExperimentVersion<Experiment<V>> extends 9
  ? ''
  : ExperimentVersion<Experiment<V>> extends 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8
  ? `.${AddOne<ExperimentVersion<Experiment<V>>>}`
  : never
  : `.${ExperimentVersion<Experiment<V>>}`;
type MMPUpdate<V extends VersionPattern, UT extends 'major' | 'minor' | 'patch' | 'experiment' = 'experiment'> =
  UT extends 'major'
  ? `${AddOne<Major<V>>}.0.0`
  : UT extends 'minor'
  ? `${Major<V>}.${AddOne<Minor<V>>}.0`
  : UT extends 'patch'
  ? `${Major<V>}.${Minor<V>}.${AddOne<Patch<V>>}`
  : UT extends 'experiment'
  ? InferVersion<V>
  : never;
type DisplayVersion<V extends VersionPattern, X extends [versionOp: X[0], wildcard: X[1], experimnent: X[2], metadata: X[3]]> = `${X[0] extends true ? 'v' : ''}${Major<V>}.${Minor<V>}.${X[1] extends true ? 'x' : Patch<V>}${X[2] extends true ? `-${Experiment<V>}` : ''}${X[3] extends true ? `+${AlphaNumeric<Metadata<V>>}` : ''}`;
type NewVersion<V extends VersionPattern, T extends UpdateType> = `${MMPUpdate<V, T>}${ExperimentNameUpdate<V, T>}${ExperimentVersionUpdate<V, T>}${AlphaNumeric<Metadata<V>> extends string ? `+${AlphaNumeric<Metadata<V>>}` : ''}` extends infer VP extends VersionPattern ? VP : never;

const comparator = ["===", "!==", "=", "==", "!=", ">", ">=", "<", "<=", "\^", "~", "v", ""] as const;
const release = ['alpha', 'beta', 'rc', 'build'] as const;
var comparators = generateInterface(["===", "!==", "=", "==", "!=", ">", ">=", "<", "<=", "\^", "~", "v", ""], 'comparator', 'comparator').regex;
var releases = generateInterface(['alpha', 'beta', 'rc', 'build'], 'expName').regex;
interface SemVerMatchGroup<V extends VersionPattern> extends CompRel {
  experiment?: Experiment<V>;
  expName?: ExperimentName<Experiment<V>>;
  expVers?: ExperimentVersion<Experiment<V>>;
  metadata?: AlphaNumeric<Metadata<V>>;
  comparator?: Comparators;
  major: Major<V>;
  minor: Minor<V>;
  patch: Patch<V>;
  mmp: InferVersion<V>;
}
type UpdateType = 'major' | 'minor' | 'patch' | 'experiment';

interface Matches<V extends VersionPattern> {
  matches: SemVerMatchGroup<V>;
}
type CompRel = {
  [compName: string]: typeof SemVer.comparators;
} & {
  [relName: string]: typeof SemVer.releases;
}
//const { groups: { comparator, version, major, minor, patch, release, expVersion } } = SemVer.regex.exec(this.version) as unknown as { groups: SemVerMatchGroup };

interface DisplayOptions<V extends VersionPattern> {
  comparator?: Comparators;
  metadata?: AlphaNumeric<Metadata<V>>;
  experiment?: Experiment<V>;
  includeMetadata?: true | undefined;
  patchWildcard?: true | undefined;
  versionOperator?: true | undefined;
  includePrerelease?: true | undefined;
}
function versionUpdate<V extends VersionPattern, T extends UpdateType>(oldVersion: V, type: T, options?: DisplayOptions<NewVersion<V, T> extends infer VP extends VersionPattern ? VP : never>): SemVer<NewVersion<V, T> extends infer VP extends VersionPattern ? VP : never> {
  const regex = new RegExp(`^${comparators}(?<mmp>(?<major>[0-9]+)\\.(?<minor>[0-9]{1,2})\\.(?<patch>[0-9]{1,3}|x))(?:-(?<experiment>${releases}(?:\\.(?<expVers>[0-9]{1}))?(?:\\+(?<metadata>[a-zA-Z0-9\\-\\.]+))?))?`, 'm');
  const { major, minor, patch, mmp, expName, expVers, metadata } = regex.exec(oldVersion)?.groups! as SemVerMatchGroup<V>;
  var newExpName: ExperimentNameUpdate<V, T>,
    newExpVers: ExperimentVersionUpdate<V, T>,
    newExperiment: `${ExperimentNameUpdate<V, T>}${ExperimentVersionUpdate<V, T>}`,
    newMetadata: AlphaNumeric<Metadata<V>> extends string ? `+${AlphaNumeric<Metadata<V>>}` : '',
    newMMP: MMPUpdate<V, T>;
  newMetadata = (metadata ? `+${metadata}` as const : '' as const) as AlphaNumeric<Metadata<V>> extends string ? `+${AlphaNumeric<Metadata<V>>}` : '';
  newExpName = (expName ? `-${expName}` : '') as ExperimentNameUpdate<V, T>;
  newExpVers = (expVers ? `.${expVers}` : '') as ExperimentVersionUpdate<V, T>;
  newExperiment = `${newExpName}${newExpVers}` as const;
  newMMP = mmp as MMPUpdate<V, T>;
  switch (type) {
    case 'major':
      newMMP = `${Number(major) + 1 as Major<NewVersion<V, T>>}.0.0` as MMPUpdate<V, T>;
      break;
    case 'minor':
      newMMP = `${major as Major<V>}.${Number(minor) + 1 as Minor<NewVersion<V, T>> }.0` as MMPUpdate<V, T>;
      break;
    case 'patch':
      newMMP = `${major as Major<V>}.${minor as Minor<V>}.${Number(patch) + 1 as Patch<NewVersion<V, T>>}` as MMPUpdate<V, T>;
      break;
    case 'experiment':
      switch (Number(expVers)) {//@ts-ignore
        case 9:
          switch (expName) {
            case 'rc':
              newExpName = '-build' as ExperimentNameUpdate<V, T>;
              break;
            case 'build':
              newExpName = '-alpha' as ExperimentNameUpdate<V, T>;
              break;
            case 'alpha':
              newExpName = '-beta' as ExperimentNameUpdate<V, T>;
              break;
            case 'beta':
              newExpName = '' as ExperimentNameUpdate<V, T>;
              break;
          }
          newExpVers = '' as ExperimentVersionUpdate<V, T>;
          break;//@ts-ignore
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          console.log('hit 5');
        case 6:
        case 7:
        case 8:
          console.log('hit 8')
          newExpName = `-${expName}` as ExperimentNameUpdate<V, T>;
          newExpVers = `.${Number(expVers)! + 1}` as ExperimentVersionUpdate<V, T>;
          break;
        case undefined:
          newExpName = `-${expName}` as ExperimentNameUpdate<V, T>;
          newExpVers = '.1' as ExperimentVersionUpdate<V, T>;
          break;
      }
      newExperiment = `${newExpName}${newExpVers}` as const;
      break;
  }
  const update = `${newMMP}${newExperiment}${newMetadata}` as const;
  return new SemVer(update as NewVersion<V, T> extends infer VP extends VersionPattern ? VP : never, options);
}

export class SemVer<V extends VersionPattern> extends SemverClass implements Matches<V> {
  // static #release = generateInterface(['research', 'alpha', 'beta', 'rc', 'build'], 'expName').regex;
  // static #comparator = generateInterface(['v', '~', '\^', '<=', '>=', '>', '<', '='],
  // 'comp', true).regex;

  static get environment() { return process.env.NODE_ENV; }
  static setMatchGroup = <C extends [...C[] extends string[] ? C[] : string[]], N extends string | null>(array: C | [...C], type: 'comparator' | 'release' = 'release', name: N = type as N) => {
    let temp: RegExpInterface<C, N, typeof type>['regex'];
    if (name && type === 'comparator') {
      SemVer.compName = name as N;
      temp = generateInterface(array, name, type).regex;
    } else if (name && type === 'release') {
      SemVer.relName = name as N;
      temp = generateInterface(array, name).regex;
    } else {
      const tempName = type === 'comparator' ? SemVer.compName : SemVer.relName; //@ts-ignore
      temp = generateInterface(array, name === null ? SemVer.tempName : name, type).regex;
    }
    SemVer[type === 'comparator' ? 'comp' : 'rel'] = temp;
    return temp;
  };
  private static comp: any;
  private static rel: any;
  static compName: any;
  static relName: any;
  static get comparators() { return SemVer.comp };
  static get releases() { return SemVer.rel };
  static regex = new RegExp(`^${comparators}(?<mmp>(?<major>[0-9]+)\\.(?<minor>[0-9]{1,2})\\.(?<patch>[0-9]{1,3}|x))(?:-(?<experiment>${releases}(?:\\.(?<expVers>[0-9]{1}))?(?:\\+(?<metadata>[a-zA-Z0-9\\-\\.]+))?))?`, 'm');
  static error = <T extends any>(message: string, err?: T) => { return new Error(message, err ? { cause: err } : undefined) };

  matches = {} as SemVerMatchGroup<V>;
  version: V = this.version;
  expName?: ExperimentName<Experiment<V>>;
  expVers?: ExperimentVersion<Experiment<V>>;
  experiment?: Experiment<V>;
  metadata?: AlphaNumeric<Metadata<V>>;
  comparator?: Comparators;
  major: Major<V>;
  minor: Minor<V>;
  patch: Patch<V>;
  includeMetadata?: true = true;
  patchWildcard?: true;
  versionOperator?: true;
  includePrerelease?: true;

  displayVersion = (((options = [true, true, true, undefined] as [true, true, true, undefined]) =>() => {
    return this.updateDV(options) ;
  })())()
  updateDV<X extends [X[0], X[1], X[2], X[3]]>(options: [X[0], X[1], X[2], X[3]] = [this.versionOperator as X[0], this.patchWildcard as X[1], this.includePrerelease as X[2], this.includeMetadata as X[3]])  {
    this.versionOperator = options[0] === true ? true : undefined;
    this.patchWildcard = options[1] === true ? true : undefined;
    this.includePrerelease = options[2] === true ? true : undefined;
    this.includeMetadata = options[3] === true ? true : undefined;
    return `${this.versionOperator === true ? 'v' as const : '' as const}${this.major}.${this.minor}.${this.patchWildcard === true ? 'x' as const : this.patch}${this.experiment ? this.includePrerelease === true ? `-${this.experiment}` as const : '' as const : '' as const}${this.metadata ? this.includeMetadata === true ? `+${this.metadata}` as const : '' as const : '' as const}` as `${typeof options[0] extends true ? 'v' : ''}${Major<V>}.${Minor<V>}.${typeof options[1] extends true ? 'x' : Patch<V>}${typeof options[2] extends true ? `-${Experiment<V>}` : ''}${typeof options[3] extends true ? `+${AlphaNumeric<Metadata<V>>}` : ''}`;
  };
  mmp: InferVersion<V>;
  isStage?: () => ReleaseType;
  get stage(): ReleaseType | typeof this.expName {
    return this.expName ? this.expName : this.isStage ? this.isStage() : this.major >= 1 ? 'production' : this.minor >= 50 ? 'staging' : 'development';
  }
  setStage(stageFunc: () => ReleaseType) {
    this.isStage = stageFunc;
  }
  displayOptions!: DisplayOptions<V>;
  updateOptions(options: DisplayOptions<V>) {
    this.includeMetadata = options.includeMetadata ?? undefined;
    this.patchWildcard = options.patchWildcard ?? true as true;
    this.versionOperator = options.versionOperator ?? true as true;
    this.includePrerelease = options.includePrerelease ?? true as true;
    this.comparator = options.comparator;
    this.experiment = options.experiment;
    this.metadata = options.metadata;

  }
  constructor(version: V, options: DisplayOptions<V> = {
    versionOperator: true,
    includePrerelease: true,
    patchWildcard: true
  }) {
    super(version);
    if (!SemVer.regex.test(version)) throw SemVer.error('Invalid Version', SemVer.regex.test(version));
    this.version = version;
    this.displayOptions = options;
    const { metadata, experiment, expName, expVers, comparator, mmp, major, minor, patch } = SemVer.regex.exec(version)?.groups! as unknown as SemVerMatchGroup<V>;
    this.matches = {
      metadata: metadata,
      experiment: experiment,
      expName: expName,
      expVers: expVers,
      comparator: comparator,
      mmp: mmp,
      major: major,
      minor: minor,
      patch: patch,
    } as SemVerMatchGroup<V>;
    this.expName = expName;
    this.expVers = expVers;
    this.comparator = comparator;
    this.major = major;
    this.minor = minor;
    this.patch = patch;
    this.mmp = mmp as InferVersion<V>;
    this.updateOptions(options);
    this.displayVersion =  this.updateDV([this.versionOperator ? true : false, this.patchWildcard ? true : false, this.experiment ? true : false, this.includeMetadata ? true : false]);
    return this;
  }
  isExperimental<E extends ExperimentType>(expName: E): expName is E {
    return release.every((r): r is E => r === expName)
  }

  /**
   * @method update - Updates the version number to the next version.
   * @param {T} update - The new version number or the type of version to update to.
   * @param {DisplayOptions} [options] - The options to use when displaying the new version number.
   * @template {T extends UpdateType} update - The new version number or the type of version to update to.
   * @returns {SemVer<NewVersion<V,T> extends infer VP extends VersionPattern ? VP : never>} - The new SemVer object with the updated
   * version number.
   */
  update<T extends UpdateType>(update: T, options?: DisplayOptions<any>) {
    return versionUpdate(this.version, update, options);
  }
  /**
   * @method new
   * @param {NV} version - The new version number.
   * @template {NV extends VersionPattern} NV - The new version number.
   * @param {DisplayOptions} [options] - The options to use when displaying the new version number.
   */
  new<NV extends VersionPattern>(version: NV, options?: DisplayOptions<NV>) {
    return new SemVer(version, options);
  };
};
export default SemVer;
const val = new SemVer('1.0.0-alpha.1+build').displayVersion;
