/**
 * @file SemVer.ts
 * @description
 * @author Matthew Allen Rackley
 * @copyright [Matthew Rackley's Github](https://www.github.com/matthewrackley "Matthew Rackley on github.com")
 */

import { SemVer as SemverClass } from 'semver';
import Util from '../types/utilityTypes'
export type ExperimentType = 'alpha' | 'beta' | 'rc' | 'build';
export type ReleaseType = "production" | "staging" | "development";
export type Comparators = "===" | "!==" | "=" | "==" | "!=" | ">" | ">=" | "<" | "<=" | "\^" | "~" | "v";


function createVersion(v: Vers): Version {
  return v as Version;
}
type VersionHolder<V extends Version> = V extends `${infer C extends Comparators | ''}${infer V1 extends number}.${infer V2 extends number}.${infer V3 extends number}` | `${infer C extends Comparators | ''}${infer V1 extends number}.${infer V2 extends number}.${infer V3 extends number}-${infer S extends ExperimentType}.${infer N extends number}` | `${infer C extends Comparators | ''}${infer V1 extends number}.${infer V2 extends number}.${infer V3 extends number}-${infer S extends ExperimentType}` ? `${C}${V1}.${V2}.${V3}` | `${C}${V1}.${V2}.${V3}-${S}` | `${C}${V1}.${V2}.${V3}-${S}.${N}` : null;
type Numeral = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;//R extends null ? TruncatedVersion<IncludeComp> : ExtendedVersion<R extends ExperimentType ? R : never, N, IncludeComp>;

/**
 * Represents a Version number that aligns with the SemVer specification.
 * @type {Version} Version
 */
export type Version = `${number}.${number}.${number}`
type Experiment<E> = E extends `${infer X extends string}.${infer N extends number}` ? `${X}.${N}` : E extends ExperimentType ? E : never;

type ExpVer = `${ExperimentType}.${number}`;
type Metadata<T> = T extends infer S extends string ? Util.AlphaNumeric<S> : never;
type v1 = Experiment<'alpha'>;
type VersionExp<V extends Version, E extends ExpVer | ExperimentType | undefined = undefined, M extends string | undefined = undefined> =
  V extends Version
    ? E extends `${infer X extends string}.${infer N extends number}`
      ? M extends string
        ? `${V}-${Experiment<`${X}.${N}`>}+${Metadata<M>}`
      : `${V}-${Experiment<`${X}.${N}`>}`
    : E extends ExperimentType
      ? M extends string
        ? `${V}-${Experiment<E>}+${Metadata<M>}`
      : `${V}-${Experiment<E>}`
    : V
  : never;
//type VersionExpNum<V extends Version, E extends ExpVer> = E extends `${infer X extends string}.${infer N extends number}` ? `${V}-${Experiment<E>}.${N}` : never;
type VersionMeta<V extends Version, M extends string | undefined = undefined, E extends ExpVer | ExperimentType | undefined = undefined> =
  V extends Version
    ? M extends string
      ? E extends ExpVer | ExperimentType
        ? E extends `${infer X extends ExperimentType}.${infer N extends number}`
          ? `${V}-${Experiment<`${X}.${N}`>}+${Metadata<M>}`
        : `${V}-${Experiment<E>}+${Metadata<M>}`
      : `${V}+${Metadata<M>}`
    : V
  : never;
type VersionBoth<V extends Version, E extends ExpVer | ExperimentType | undefined = undefined, M extends string | undefined = undefined> =
  V extends Version
    ? E extends ExpVer | ExperimentType
      ? M extends string
        ? E extends `${infer X extends ExperimentType}.${infer N extends number}`
          ? `${V}-${Experiment<`${X}.${N}`>}+${Metadata<M>}`
        : `${V}-${Experiment<E>}+${Metadata<M>}`
      : `${V}-${Experiment<E>}`
    : V
  : never;
type FullyVersioned<V extends Version, E extends ExpVer | ExperimentType | undefined = undefined, M extends string | undefined = undefined> = (E extends `${infer X extends string | ExperimentType}.${infer N extends number}` ? `${V}-${Experiment<`${X}.${N}`>}+${Metadata<M>}` : E extends ExperimentType ? `${V}-${Experiment<E>}+${Metadata<M>}` : never) | `${V}-${Experiment<E>}` | `${V}+${Metadata<M>}` | V;
type VersionAll<V extends Version, E extends ExpVer | ExperimentType | undefined = undefined, M extends string | undefined = undefined> =
  V extends Version
    ? E extends `${infer X extends ExperimentType}.${infer N extends number}` | ExperimentType | undefined
      ? E extends `${X}.${N}`
        ? M extends string
          ? VersionBoth<V, `${X}.${N}`, M>
        : VersionExp<V, `${X}.${N}`>
      : E extends ExperimentType
        ? M extends string
          ? VersionBoth<V, E, M>
        : VersionExp<V, E>
      : undefined
    : M extends string
      ? VersionMeta<V, M>
    : V
  : never;
type A = VersionAll<'1.0.0', 'alpha.1', 'test'>;
  //       : `${X}${N}` extends ExperimentType
  //         ? VersionBoth<V, `${X}${N}`, M>
  //       : `${X}${N}` extends ExpVer
  //       ? VersionExpNum<V, `${X}${N}`>
  //     : `${X}${N}` extends ExperimentType
  //       ? VersionExp<V, `${X}${N}`>
  //     : V
  //   : E extends undefined
  //     ? M extends string
  //       ? VersionMeta<V, M>
  //     : V
  //   : V
  // : never;


interface RegExpInterface<A extends string[] | readonly string[], N extends string | null, O extends 'comparator' | 'release' = 'release'> {
  name: N | null;
  array: A;
  regex: `(${this['name'] extends null ? '' : `?<${N}>`}${Util.ArrayToString<A, '|'>})${O extends 'comparator' ? '?' : ''}`
  update<V extends [...V[] extends string[] ? V[] : string[]], L extends string>(value: { array: V, name: L }): RegExpInterface<V, L, O>;
}
type StringToArray<S extends string, D extends string> =
  S extends '' ? [] :
  S extends `${infer F}${D}${infer R}` ? [F, ...StringToArray<R, D>] :
  [S];


function split<S extends string, D extends string = ''>(stringToSplit: S, separator: D = '' as D): StringToArray<S, D> {
  return stringToSplit.split(separator) as any;
};
type CapitalizeStrings<T> = {
  [K in keyof T]: string;
};
interface GenerateInterface {
  <A extends [...A[] extends string[] | readonly string[] ? A[] : string[] | readonly string[]], N extends string | null = null, O extends 'comparator' | 'release' = 'release'>(array: A | [...A], name?: N, optionalRegex?: O): RegExpInterface<A, N, O>;
};

const join: Util.Join = (array, seperator) => {
  let str = '' as any;
  if (!seperator) seperator = '|' as typeof seperator;
  for (let i = 0; i < (array as typeof array).length; i++) {
    str += (array as typeof array)[i];
    if (i < (array as typeof array).length - 1) {
      str += seperator;
    }
  }
  return str as Util.ArrayToString<typeof array, NonNullable<typeof seperator>>;
}//@ts-ignore
const generateInterface: GenerateInterface = <A extends [...A[] extends string[] | readonly string[] ? A[] : string[] | readonly string[]], N extends string | null, O extends 'comparator' | 'release' = 'release'>(array: A | [...A], name: N = null as N, optionalRegex: O = 'release' as O) => {
  var obj = {} as RegExpInterface<A, N, O>;
  obj.name = name as N;
  obj.array = array as A;
  obj.regex = `(${name === null ? '' : '?<' + name + '>'}${join(obj.array, '|',)})${optionalRegex === 'comparator' ? '?' : ''}` as unknown as `(${typeof name extends null ? '' : `?<${typeof name}>`}${Util.ArrayToString<[...typeof array], '|'>})${typeof optionalRegex extends 'comparator' ? '?' : ''}`;
  obj.update = (<V extends [...V[] extends string[] ? V[] : string[]], L extends string>(value: { array: V | A, name: L | N }): RegExpInterface<V, L, O> => {
    if (value.name && value.array) {
      return generateInterface(value.array as V, value.name as L, optionalRegex) as RegExpInterface<V, L, O>;
    } else if (value.name && !value.array) {
      value.array = obj.array;
      return generateInterface(value.array, value.name, optionalRegex) as RegExpInterface<V, L, O>;
    } else if (value.array && !value.name) {
      value.name = obj.name as N;
      return generateInterface(value.array as V, value.name as N, optionalRegex) as RegExpInterface<V, L, O>;
    } else {
      throw new Error('Invalid value type');
    }
  }) as RegExpInterface<A, N, O>['update']; //@ts-ignore
  return obj;
};
// type VersionUpdssate<V> = <N extends Version, T extends 'major' | 'minor' | 'patch' | 'experiment' | N, R extends ExperimentType>(newVersion: T) => T extends N ? SemVer<T> : V extends Version ? T extends 'major' ? SemVer<NewVersion<V, 'major'>> : T extends 'minor' ? SemVer<NewVersion<V, 'minor'>> : T extends 'patch' ? SemVer<NewVersion<V,'patch'>> : T extends 'experiment' ? SemVer<NewVersion<V,'experiment'>> : never : never;
// ;


// type NewVersion<V extends Version, T extends 'major' | 'minor' | 'patch' | 'experiment'> =
//     V extends `${infer C extends Comparators | ''}${infer V1 extends number}.${infer V2 extends number}.${infer V3 extends number}${infer L extends infer X extends '-rc' | '-build' | '-alpha' | '-beta' | '' ? X : never}` | `${infer C extends Comparators | ''}${infer V1 extends number}.${infer V2 extends number}.${infer V3 extends number}${infer L extends '-rc' | '-build' | '-alpha' | '-beta' | ''}.${infer V4 extends 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | ''}`
//     ? T extends 'major'
//       ? L extends ''
//         ? `${C}${AddOne<V1>}.${V2}.${V3}`
//       : V4 extends ''
//         ? `${C}${AddOne<V1>}.${V2}.${V3}${L}`
//       : `${C}${AddOne<V1>}.${V2}.${V3}${L}.${V4}`
//     : T extends 'minor'
//       ? L extends ''
//         ? `${C}${V1}.${AddOne<V2>}.${V3}`
//       : V4 extends ''
//         ? `${C}${V1}.${AddOne<V2>}.${V3}${L}`
//       : `${C}${V1}.${AddOne<V2>}.${V3}${L}.${V4}`
//     : T extends 'patch'
//       ? L extends ''
//         ? `${C}${V1}.${V2}.${AddOne<V3>}`
//       : V4 extends ''
//         ? `${C}${V1}.${V2}.${AddOne<V3>}${L}`
//       : `${C}${V1}.${V2}.${AddOne<V3>}${L}.${V4}`
//     : T extends 'experiment'
//       ? L extends `-${ExperimentType}`
//         ? V4 extends ''
//           ? `${C}${V1}.${V2}.${V3}${L}.1`
//         : V4 extends 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8
//           ? `${C}${V1}.${V2}.${V3}${L}.${AddOne<V4>}`
//         : V4 extends 9
//           ? L extends '-rc'
//             ? `${C}${V1}.${V2}.${V3}-build`
//           : L extends '-build'
//             ? `${C}${V1}.${V2}.${V3}-alpha`
//           : L extends '-alpha'
//             ? `${C}${V1}.${V2}.${V3}-beta`ssssss
//           : L extends '-beta'
//             ? `${C}0.0.0`
//           : never
//         : never
//       : never
//     : never
//   : never;

const comparator = ["===", "!==", "=", "==", "!=", ">", ">=", "<", "<=", "\^", "~", "v", ""] as const;
const release = ['alpha', 'beta', 'rc', 'build'] as const;
const comparators = generateInterface(["===", "!==", "=", "==", "!=", ">", ">=", "<", "<=", "\^", "~", "v", ""], 'comparator', 'comparator').regex;
const releases = generateInterface(['alpha', 'beta', 'rc', 'build'], 'expName').regex;
interface SemVerMatchGroup<V extends Version, E extends ExpVer | ExperimentType | undefined = undefined, M extends string | undefined = undefined> extends CompRel {
  experiment?: E extends string ? Experiment<E> : never;
  expName?: E extends `${infer X extends string}.${infer N}` ? X : E extends string ? Experiment<E> : never;
  expVers?: E extends `${infer X}.${infer N extends number}` ? N : never;
  metadata?: M extends string ? Metadata<M> : never;
  comparator?: Comparators;
  major: V extends `${infer V1 extends number}.${number}.${number}` ? V1 : never;
  minor: V extends `${number}.${infer V2 extends number}.${number}` ? V2 : never;
  patch: V extends `${number}.${number}.${infer V3 extends number}` ? V3 : never;
  mmp: V;
}
type CompRel = {
  [compName: string]: typeof SemVer.comparators;
} & {
  [relName: string]: typeof SemVer.releases;
}
//const { groups: { comparator, version, major, minor, patch, release, expVersion } } = SemVer.regex.exec(this.version) as unknown as { groups: SemVerMatchGroup };
const isExperimental = <R extends ExperimentType, V extends Version>(version: R): version is R => {
  return release.every((r): r is R => r === version)
}
const isComparator = <C extends Comparators>(comp: C): comp is C => {
  return comparator.every((c): c is C => c === comp);
}
const isNumber = <N extends `${number}`>(number: N): number is N => {
  const array = [...Array(999).keys()] as unknown as `${number}`[];
  return array.every((n): n is N => n == number);
}
const isVersion = <V extends Version>(version: V): version is V => {
  return SemVer.regex.test(version);
}
const isProduction = <V extends Version>(version: V | 'production'): version is 'production' => {
  if (version === 'production') return true;
  return new SemVer(version as V).major >= 1;
}
interface DisplayOptions<E extends ExpVer | ExperimentType | undefined = undefined, M extends string | undefined = undefined> {
  comparator?: Comparators;
  metadata?: M extends string ? Metadata<M> : never;
  experiment?: E extends string ? Experiment<E> : never;
  includeMetadata?: boolean;
  patchWildcard?: boolean;
  versionOperator?: boolean;
  includePrerelease?: boolean;
}
export class SemVer<V extends Version, E extends ExpVer | ExperimentType | undefined = undefined, M extends string | undefined = undefined> extends SemverClass implements SemVerMatchGroup<V,E,M> {
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
  };//@ts-ignore
  private static comp; private static rel; static compName; static relName;
  static get comparators() { return SemVer.comp };
  static get releases() { return SemVer.rel };
  static regex = new RegExp(`^${comparators}(?<mmp>(?<major>[0-9]+)\.(?<minor>[0-9]{1,2})\.(?<patch>[0-9]{1,3}|x))(?:-(?<experiment>(?:(?:-${releases}\.?(?<expVers>[0-9]{1}?)?)?(?:\+(?<metadata>[a-zA-Z0-9\-\.]+))?)?$`, 'm');
  static error = <T extends any>(message: string, err?: T) => { return new Error(message, err ? { cause: err } : undefined) };

  matches = {} as SemVerMatchGroup<V,E,M>;
  version: `${VersionAll<V, E, M>}` = this.version;
  expName?: SemVerMatchGroup<V,E,M>['expName'];
  expVers?: SemVerMatchGroup<V,E,M>['expVers'];
  metadata?: M extends string ? Metadata<M> : never;
  comparator?: Comparators;
  major: SemVerMatchGroup<V,E,M>['major'];
  minor: SemVerMatchGroup<V,E,M>['minor'];
  patch: SemVerMatchGroup<V, E, M>['patch'];
  includeMetadata?: boolean = true;
  patchWildcard?: boolean = false;
  versionOperator?: boolean;
  includePrerelease?: boolean;
  displayVersion: ;
  mmp: V;
  isStage?: () => ReleaseType;
  get stage(): ReleaseType | typeof this.expName {
    return this.expName ? this.expName : this.isStage ? this.isStage() : this.major >= 1 ? 'production' : this.minor >= 50 ? 'staging' : 'development';
  }
  setStage(stageFunc: () => ReleaseType) {
    this.isStage = stageFunc;
  }
  private #exp: E extends string ? Experiment<E> : never;
  get experiment(): E extends string ? Experiment<E> : never {
    if (!this.#exp) {
      return this.#exp;
    } else {
      return this.#exp;
    }

  }
  set experiment(value): {}
  handleOptions(options: DisplayOptions<E, M>) {
    this.includeMetadata = options.includeMetadata ?? true;
    this.patchWildcard = options.patchWildcard ?? false;
    this.versionOperator = options.versionOperator ?? false;
    this.includePrerelease = options.includePrerelease ?? true;
    this.comparator = options.comparator;
    this.experiment = options.experiment;
    this.metadata = options.metadata;

  }
  constructor(version: `${VersionAll<V, E, M>}`, options: DisplayOptions<E, M> = {
    includeMetadata: true,
    patchWildcard: false,
    versionOperator: false,
    includePrerelease: true,
  }) {
    super(version);
    if (!SemVer.regex.test(version)) throw SemVer.error('Invalid Version', SemVer.regex.test(version));
    this.experiment = options?.experiment
    this.metadata = options?.metadata;
    this.comparator = options?.comparator;

    this.version = version;
    const m = SemVer.regex.exec(version)?.groups! as unknown as SemVerMatchGroup<V,E,M>;
    this.matches = {
      expName: (m.expName || undefined) as SemVerMatchGroup<V,E,M>['expName'],
      expVers: (m.expVers ? m.expVers : null) as SemVerMatchGroup<V,E,M>['expVers'],
      comparator: (m.comparator || null) as SemVerMatchGroup<V,E,M>['comparator'],
      mmp: `${m.major}.${m.minor}.${m.patch}` as SemVerMatchGroup<V,E,M>['mmp'],
      major: m.major,
      minor: m.minor,
      patch: m.patch,
    };
    this.expName = this.matches.expName;
    this.expVers = this.matches.expVers;
    this.comparator = this.matches.comparator;
    this.major = this.matches.major;
    this.minor = this.matches.minor;
    this.patch = this.matches.patch;
    this.mmp = `${this.major}.${this.minor}.${this.patch}` as SemVerMatchGroup<V,E,M>['mmp'];
    return this;
  }
  isExperimental<E extends ExperimentType>(expName: E): expName is E {
    return release.every((r): r is E => r === expName)
  }

  /**
   * @method update - Updates the version number to the next version.
   * @param {T} newVersion - The new version number or the type of version to update to.
   * @template {T extends 'major' | 'minor' | 'patch' | 'experiment' | V} newVersion - The new version number or the type of version to update to.
   * @template {V extends Version} - The new version number or the type of version to update to.
   * @returns {SemVer<T extends N ? T : N>} - The new SemVer object with the updated
   * version number.
   */
  update = <
    //EV extends `${V1}.${V2}.${V3}${E extends string ? `-${E}` : ''}${M extends string ? `+${M}` : ''}`,
    OV extends V extends `${V1}.${V2}.${V3}` ? `${V}` : never,
    V1 extends V extends `${infer Ver1 extends number}.${number}.${number}` ? Ver1 : never,
    V2 extends V extends `${V1}.${infer Ver2 extends number}.${number}` ? Ver2 : never,
    V3 extends V extends `${V1}.${V2}.${infer Ver3 extends number}` ? Ver3 : never,
    NV extends Version,
    T extends "major" | "minor" | "patch" | "experiment" | NV,
    Exp extends ExpVer | `${ExperimentType}` | E | undefined,
    MD extends string | M | undefined,
    EV extends
    `${T extends 'major' ? Util.AddOne<V1> : V1 }.${T extends 'major' ? 0 : T extends 'minor' ? Util.AddOne<V2> : V2 }.${T extends 'major' | 'minor' ? 0 : T extends 'patch' ? Util.AddOne<V3> : V3 }${Experiment<Exp> extends `${infer X}.${infer N extends number}` ? `-${X}.${T extends 'experiment' ? Util.AddOne<N> : N}` : Exp extends infer X extends string ? T extends 'experiment' ? `-${X}.0` : `-${X}` : ''}${M extends string ? `+${M}` : ''}`>(newVersion: T, options?: DisplayOptions<E, M>) => {
    let { major, minor, patch, expName, expVers, experiment, metadata } = this.matches as unknown as { major: V1, minor: V2, patch: V3, expName: Experiment<E> extends `${infer Name extends string}${`.${infer N}` | ''}` ? Name : never, expVers: Experiment<E> extends `${infer Name}.${infer N extends number}` ? N : never, experiment: Experiment<E>, metadata: Metadata<M> };
    let tempExperiment;
    const currentVersion = `${major}.${minor}.${patch}${expName ? '-' + expName : ''}${expVers ? '.' + expVers : ''}` as OV;
    let tempVersion;//: T extends 'major' ? `${Util.AddOne<V extends `${infer S extends number}.${number}.${number}` ? S : never>}.0.0` : T extends 'minor' ? `${V extends `${infer S extends number}.${number}.${number}` ? S : never}.${Util.AddOne<V extends `${number}.${infer S extends number}.${number}` ? S : never>}.0` : T extends 'patch' ? `${V extends `${infer S extends number}.${number}.${number}` ? S : never}.${V extends `${number}.${infer S extends number}.${number}` ? S : never}.${Util.AddOne<V extends `${number}.${number}.${infer S extends number}` ? S : never>}` : T extends V ? T : never;
    type MajExp = `${Util.AddOne<V1>}.0.0-${Experiment<E>}`;
    type Maj = `${Util.AddOne<V1>}.0.0`;
    type MinExp = `${V1}.${Util.AddOne<V2>}.0-${Experiment<E>}`;
    type Min = `${V1}.${Util.AddOne<V2>}.0`;
    type PatExp = `${V1}.${V2}.${Util.AddOne<V3>}-${Experiment<E>}`;
    type Pat = `${V1}.${V2}.${Util.AddOne<V3>}`;
    switch (newVersion) {
      case 'major':
        tempVersion = experiment !== undefined ? `${major + 1 as Util.AddOne<typeof major>}.0.0-${experiment}` as const : `${major + 1 as Util.AddOne<typeof major>}.0.0` as const; //@ts-ignore
        //minor = 0 as const;//@ts-ignore
        //patch = 0 as const;
        break;
      case 'minor':
        tempVersion = experiment !== undefined ? `${major}.${minor + 1 as Util.AddOne<typeof minor>}.0-${experiment}` as const : `${major}.${minor + 1 as Util.AddOne<typeof minor>}.0` as const;//@ts-ignore
        //patch = 0 as const;
        break;
      case 'patch':
        tempVersion = experiment !== undefined ? `${major}.${minor}.${patch + 1 as Util.AddOne<typeof patch>}-${experiment}` as const : `${major}.${minor}.${patch + 1 as Util.AddOne<typeof patch>}` as const;
        break;
      case 'experiment':
        if (!expName) break;
        tempExperiment = '' as const;
        if (expVers === 9) {
          switch (expName) {
            case 'rc':
              tempVersion = `${major}.${minor}.${patch}-build` as const;
              break;
            case 'build':
              tempVersion = `${major}.${minor}.${patch}-alpha` as const;
              break;
            case 'alpha':
              tempVersion = `${major}.${minor}.${patch}-beta` as const;
              break;
            case 'beta':
              tempVersion = `${major}.${minor}.${patch}` as const;
              break;
            default:
              break;
          }
        } else if (expVers! <= 8) {
          tempVersion = `${major}.${minor}.${patch}${expName}.${expVers! + 1 as Util.AddOne<typeof expVers>}` as const;
        } else {
          SemVer.error(`Experimental Version Error.\n${currentVersion}\nPlease update the experimental branch name to a new name or remove the experimental branch name to continue using the same name. Changing version to 0.0.0\n`);
        }
        break;
      default:
        if (SemVer.regex.test(newVersion)) {
          tempVersion = `${newVersion}` as const;
        } else {
          SemVer.error(`Invalid Version\nPlease enter a valid version number or version type.\nCurrent Version: ${this.version}\nAttempted Version: ${newVersion}\n`);
        }
        break;
    }
    const version = `${tempVersion}` as const;
    return new SemVer(`${version}`, options);
  }
}
export const  s = () => new SemVer('1.1.0-alpha.1+sha251');
export default SemVer;
