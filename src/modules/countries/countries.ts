import { InvertedObject, LowercaseOnly, reverseLookup } from '../../utilities/Util';
/**
 * @file countries.ts
 * @description
 * @author Matthew Allen Rackley
 * @copyright [Matthew Rackley's Github](https://www.github.com/matthewrackley "Matthew Rackley on github.com")
 */
//@ts-ignore
import type { Countries, CountriesArray, CountriesArrayData, CountriesData, Country, CountryArray, CountryArrays, CountryMap, CountryName, CountryZones, ExtractName, ForeignLocal, GetCountryArray, GetCountryName, GetLclCtx, MultiName, RegionCode, RegionCodes, SearchByZone, ZoneType } from './countries.types';
import { countriesArray } from './countriesArray';

//___=============================>           <============================___\\
//___|| ==================== ||      HELPERS      || =================== ||___\\
//___=============================>           <============================___\\
/**
 * @constant regionCodes - The region codes for countries.
 * @type RegionCodes
 * @summary
 * The region codes for countries.
 */
export const regionCodes: RegionCodes = ["AD", "AE", "AF", "AG", "AI", "AL", "AM", "AO", "AQ", "AR", "AS", "AT", "AU", "AW", "AX", "AZ", "BA", "BB", "BD", "BE", "BF", "BG", "BH", "BI", "BJ", "BL", "BM", "BN", "BO", "BQ", "BR", "BS", "BT", "BV", "BW", "BY", "BZ", "CA", "CC", "CD", "CF", "CG", "CI", "CK", "CL", "CM", "CN", "CO", "CR", "CU", "CV", "CW", "CX", "CY", "CZ", "DE", "DJ", "DK", "DM", "DO", "DZ", "EC", "EE", "EG", "EH", "ER", "ET", "FI", "FJ", "FK", "FM", "FO", "FR", "GA", "GB", "GD", "GE", "GF", "GG", "GH", "GI", "GL", "GM", "GN", "GP", "GQ", "GR", "GS", "GT", "GU", "GW", "GY", "HK", "HM", "HN", "HR", "HT", "HU", "ID", "IE", "IL", "IM", "IN", "IO", "IQ", "IR", "IS", "IT", "JE", "JM", "JO", "JP", "KE", "KG", "KH", "KI", "KM", "KN", "KP", "KW", "KY", "KZ", "LA", "LB", "LC", "LI", "LR", "LS", "LT", "LU", "LV", "LY", "MA", "MC", "MD", "ME", "MF", "MG", "MH", "MK", "ML", "MM", "MN", "MO", "MP", "MQ", "MR", "MS", "MT", "MU", "MV", "MW", "MX", "MY", "MZ", "NA", "NC", "NE", "NF", "NG", "NI", "NL", "NO", "NP", "NR", "NU", "NZ", "OM", "PA", "PE", "PF", "PG", "PH", "PK", "PL", "PM", "PN", "PR", "PS", "PT", "PW", "PY", "QA", "RE", "RO", "RS", "RU", "RW", "SA", "SB", "SC", "SG", "SI", "SK", "SL", "SM", "SN", "SO", "ST", "SV", "SX", "TC", "TD", "TF", "TG", "TH", "TK", "TL", "TM", "TN", "TO", "TR", "TT", "TV", "UA", "UG", "UM", "US", "UY", "UZ", "VA", "VC", "VE", "VG", "VI", "VN", "VU", "WF", "WS", "XK", "YE", "YT", "ZA", "ZM", "ZW"];

/**
 * @constant getCountryArray - Provides a way to get a country array by region code.
 * @type GetCountryArray
 * @summary
 * - If {@link region} is provided:
 * It returns a country from the main array with the associated value.
 * - If {@link region} is not provided:
 * It returns the {@link countriesArray Source Array}.
 * @param {R} [region=undefined] - The region code to get the country array for.
 * @template R - The region code to get the country array for.
 * @returns {CountryArray<R> | CountriesArray} The country array or the main array.
 */
export const getCountryArray: GetCountryArray = <R extends RegionCode | undefined = undefined>(region: Lowercase<NonNullable<R>> | R = undefined as R): R extends RegionCode
  ? CountryArray<R>
  : CountriesArray => {
  region = region?.toUpperCase() as R;
  if (region && regionCodes.includes(region)) {
    return countriesArray.filter((country): country is R extends RegionCode ? CountryArray<R> : never => country[1] === region)[0] as R extends RegionCode ? CountryArray<R> : CountriesArray;
  } else {
    return countriesArray as R extends RegionCode ? CountryArray<R> : CountriesArray;
  }
}
/**
 * @constant countryMap - Provides a way to get a country array by accessing it via an indice.
 * @type CountryMap
 * @summary
 * Creates a map of country arrays indexed by region code.
 */
export const countryMap = new Map(regionCodes.map(
  (regionCode) => [
    regionCode,
    getCountryArray(regionCode)
  ]
)) as CountryMap;
const countryArrays = {} as CountryArrays;
countryMap.forEach((v, k) => {//@ts-ignore
  countryArrays[k] = v;
})
export const getCountryName: GetCountryName = (region) => {
  region = region?.toUpperCase() as typeof region;
  return getCountryArray(region)[0];
}


export const regex = {
  /**
   * @property matchLclCtxName - Regex to match a contextual name
   * - Matches: `STRING (STRING) STRING`
   * - Groups: `lcl:(STRING) (ctx:(STRING)) name:(STRING)`
   * - Extract Type: `ForeignLocal<RegionCode, 'Local' | 'Context', 'LCN'>`
   * - Groups Type: `LocalContextNameGroups<RegionCode>`
   * - `$1 $3` = Normal Name
   * - `$2 $3` = Contextual Name
   */
  matchLclCtxName: /^(?<lcl>.+?)\s\((?<ctx>.+?)\)\s(?<name>.+)$/g,
  /**
   * @property matchLclCtxFrgn - Regex to match a Local/Foreign name
   * - Matches: `STRING (STRING) (STRING)`
   * - Groups: `lcl:(STRING) (ctx:(STRING)) (frgn:(STRING))`
   * - Extract Type: `ForeignLocal<RegionCode, 'Local' | 'Context' | 'Frgn', 'LCF'>`
   * - Groups Type: `LocalContextForeignGroups<RegionCode>`
   * - `$1` = Local Name
   * - `$2` = Contextual Name
   * - `$3` = Foreign Name
   * - `ForeignLocal<CountryName<R>, 'Contextual'>` = Contextual Name
   */
  matchLclCtxFrgn: /^(?<lcl>.+?)\s\((?<ctx>.+?)\)\s\((?<frgn>.+?)\)$/g,
  /**
   * @property matchLclFrgn - Regex to match a basic Local/Foreign name
   * - Matches: `STRING (STRING)`
   * - Groups: `lcl:(STRING) (frgn:(STRING))`
   * - Extract Type: `ForeignLocal<RegionCode, 'Local' | 'Frgn', 'LF'>`
   * - Groups Type: `LocalForeignGroups<RegionCode>`
   * - `$1` = Local Name
   * - `$2` = Foreign Name
   */
  matchLclFrgn: /^(?<lcl>[^()]+)\s\((?<frgn>[^()]+(\s\([^()]+\))*)\)$/g,
  formReplacementMap: {
    'LCF': {
      'Local': '$1',
      'Contextual': '$2',
      'Foreign': '$3',
    },
    'LCN': {
      'Local': '$1 $3',
      'Contextual': '$2 $3',
    },
    'LF': {
      'Local': '$1',
      'Foreign': '$2',
    }
  } as const,
}
export const matchTypeMap = {
  'LCF': regex.matchLclCtxFrgn,
  'LCN': regex.matchLclCtxName,
  'LF': regex.matchLclFrgn,
}
export const helper = {
  extractName: function (region, type, form) {
    region = region?.toUpperCase() as typeof region;
    type kokoFRM = keyof (typeof regex.formReplacementMap)[keyof typeof regex.formReplacementMap];
    type koFRM = keyof typeof regex.formReplacementMap;
    return getCountryName(region)
      .replace(matchTypeMap[form as koFRM] || regex.matchLclCtxFrgn,
        regex.formReplacementMap[form as koFRM] ? regex.formReplacementMap[form as koFRM][type as kokoFRM] : '');
  } as ExtractName,
  getRegionCodes: function*<R extends RegionCode>() {
    for (let key of regionCodes) {
      yield key;
    }
  },
  getLocalContextGroups: function (region, name = getCountryName(region)) {
    region = region?.toUpperCase() as typeof region;
    const local = name.replace(regex.matchLclCtxName, '$1 $3') as ForeignLocal<typeof region, 'Local', 'LCN'>;
    const context = name.replace(regex.matchLclCtxName, '$2 $3') as ForeignLocal<typeof region, 'Contextual', 'LCN'>;
    const match = name.match(regex.matchLclCtxName)!;
    const groups = match.groups as {
      lcl: CountryName<typeof region> extends `${infer Lcl} (${infer Ctx}) ${infer Name}` ? Lcl : never;
      ctx: CountryName<typeof region> extends `${infer Lcl} (${infer Ctx}) ${infer Name}` ? Ctx : never;
      name: CountryName<typeof region> extends `${infer Lcl} (${infer Ctx}) ${infer Name}` ? Name : never;
    } | undefined;
    // isContextualName(region, context);
    return `${groups?.lcl} ${groups?.name}` === local && `${groups?.ctx} ${groups?.name}` === context ? groups : null as never;
  } as GetLclCtx,
  isMultiName<R extends RegionCode, T extends CountryName<R>>(name: unknown): name is T extends MultiName<T> ? MultiName<T> : never {
    return typeof name === 'string' && (regex.matchLclFrgn.test(name) || regex.matchLclCtxName.test(name) || regex.matchLclCtxFrgn.test(name));
  },
  getKeysAsArray: <R extends RegionCode>(region: R | Lowercase<R>) => {
    region = region?.toUpperCase() as typeof region;
    let keys = Object.keys(countries[region as R].zones!) as (keyof CountryZones<R>)[];
    if (keys.length === 1) {
      return keys[0] as unknown as ZoneType<R>;
    } else {
      return keys as unknown as ZoneType<R>;
    }
  },
  saintRegex: /(Saint)(.+)/g,
  ...regex,
}
export const countriesLookup: SearchByZone = (
  region,
  zone = undefined //@ts-ignore
): InvertedObject<CountryZones<typeof region>, Exclude<typeof zone, undefined>> => {
  region = region?.toUpperCase() as typeof region;//@ts-ignore
  return reverseLookup(Countries[region].zones, zone) as InvertedObject<CountryZones<typeof region>, typeof zone>;
}


//___=============================>                     <============================___\\
//___|| ==================== ||      MODULE: COUNTRIES      || =================== ||___\\
//___=============================>                     <============================___\\

/**
 * @constant Countries - Provides a way to get a country array by region code.
 * @type Countries
 * @summary
 * - If {@link region} is provided:
 * It returns a country from the main array with the associated value.
 * - If {@link region} is not provided:
 * It returns the {@link countriesArray Source Array}.
 * @param {R} [region=undefined] - The region code to get the country array for.
 * @template R - The region code to get the country array for.
 * @returns {CountryArray<R> | CountriesArray} The country array or the main array.
 */ //@ts-ignore
export const countries: Countries = function <R extends RegionCode | undefined = undefined>(region: R = undefined as R) {
  region = region?.toUpperCase() as typeof region;
  if (region && regionCodes.includes(region)) {
    return countries.arr[region];
  } else {
    return countryData;
  }
}
for (let regionCode of regionCodes) {//@ts-ignore
  countries[regionCode] = {} as CountriesData[keyof CountriesData]
}
countries[Symbol.toStringTag] = 'Countries';
countries.getArray = getCountryArray;
countries.getName = getCountryName;
countries.arr = countryArrays;
countries[Symbol.toStringTag] = 'Countries';
countries.lookup = countriesLookup;
countries.prototype = countries;

var countryData = {} as CountriesData;

/**
 * This is the main function that creates the {@link countryData} object.
 */
countriesArray.forEach((c, i, a) => {
  var country = {} as CountriesData[keyof CountriesData];

  for (let key of regionCodes) {//@ts-ignore
    if (c[1] !== a[i][1]) return null;
    country = {
      [Symbol.toStringTag]: `Country: ${c[0]}`,
      [Symbol.match]: (str) => {
        return helper.matchLclFrgn.test(str) ? c[0] : helper.matchLclCtxName.test(str) ? c[0] : helper.matchLclCtxFrgn.test(str) ? c[0] :
          null;
      },
    /*country.*/name: c[0],
    /*country.*/regionCode: c[1],
    /*country.*/flag: c[4],
    /*country.*/dialCode: c[2],
    /*country.*/priority: c[5] !== 1 ? c[6] !== undefined ? c[6] : 0 : c[5],
    } as CountriesData[keyof CountriesData];
    if (c[3]) {//@ts-ignore
      if (c[3] !== "" || c[3] !== undefined || c[3] !== null) {
        country.format = c[3];
      }
    }
    if (c[5] && c[5] !== 1) {
      if (typeof c[5] === 'object' && c[5] !== null) {//@ts-ignore
        country.zoneTypes = Object.keys(c[5]).length === 1 ? Object.keys(c[5])[0] : Object.keys(c[5]);
        country.zones = c[5];
      }
    }
    if (c[7]) {
      country.areaCodes = c[7]
    }
    if (c[1] === 'GS' || c[1] === 'HM' || c[1] === 'UM' || c[1] === "TF") {
      country.local = c[1] === "TF" ? "French Southern Territories" : c[1] === "GS" ? "South Sandwich Islands" : c[1] === "HM" ? "McDonald Islands" : c[1] === "UM" ? "U.S. Minor Outlying Islands" : c[0];
    }

    helper.saintRegex.test(country.name) ? country.local = country.name.replace(helper.saintRegex, 'St.$2') as CountryName<RegionCode> extends `Saint${infer StCountry extends string}` ? `St.${StCountry}` : never : null;
    if (c[0] && helper.isMultiName(c[0])) {
      const lclCtxFrgn = c[0].match(helper.matchLclCtxFrgn);
      const lclCtxName = c[0].match(helper.matchLclCtxName);
      const lclFrgn = c[0].match(helper.matchLclFrgn);
      if (lclCtxFrgn !== null) {//@ts-ignore
        country.local = helper.extractName(c[1], 'Local', 'LCF');
        country.context = helper.extractName(c[1], 'Contextual', 'LCF');
        country.foreign = helper.extractName(c[1], 'Foreign', 'LCF');
      } else if (lclCtxName !== null) {
        country.local = helper.extractName(c[1], 'Local', 'LCN');
        country.context = helper.extractName(c[1], 'Contextual', 'LCN');
      } else if (lclFrgn !== null) {
        country.local = helper.extractName(c[1], 'Local', 'LF');
        country.foreign = helper.extractName(c[1], 'Foreign', 'LF');
      }
    }
    if (helper.saintRegex.test(country?.local)) {
      country.local = country.local.replace(helper.saintRegex, 'St.$2') as Country<RegionCode> extends `Saint${infer StCountry extends string}` ? `St.${StCountry}` : never;
    }
    if (key === c[1]) {
      countries[c[1] as keyof Countries extends RegionCode ? keyof Countries : never] = country as Countries[keyof Countries extends RegionCode ? keyof Countries : never];
      countryData = {
        ...countryData,
        [c[1]]: country as CountriesData[keyof CountriesData]
      }
    }
    country = {} as CountriesData[keyof CountriesData];
  }
});

Object.assign(countries, countryData, countries);


export default countries;
