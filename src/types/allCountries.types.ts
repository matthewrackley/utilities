import type { CountriesArray as AllCountries } from '../modules/countries/countriesArray';
import allCountries from '../modules/countries/countriesArray';
import type { Util } from './utilityTypes';
/**
 * @type RegionCode - ISO 3166-1 alpha-2 country codes
 * @see https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2
 */
/**
 * @type {RegionCodes} - ISO 3166-1 alpha-2 country codes
 */
export type RegionCodes = ["AF", "AX", "AL", "DZ", "AS", "AD", "AO", "AI", "AQ", "AG", "AR", "AM", "AW", "AU", "AT", "AZ", "BS", "BH", "BD", "BB", "BY", "BE", "BZ", "BJ", "BM", "BT", "BO", "BA", "BW", "BV", "CA", "BR", "IO", "VG", "BN", "BG", "BF", "BI", "KH", "CM", "TD", "CL", "CN", "CV", "BQ", "KY", "CF", "CX", "CC", "CO", "KM", "CD", "CG", "CK", "CR", "CI", "HR", "CU", "CW", "CY", "CZ", "DK", "DJ", "DM", "DO", "EC", "EG", "SV", "GQ", "ER", "EE", "ET", "FK", "FO", "FJ", "FI", "FR", "GF", "PF", "TF", "GA", "GM", "GE", "DE", "GH", "GI", "GR", "GL", "GD", "GP", "GU", "GT", "GG", "GN", "GW", "GY", "HT", "HM", "HN", "KZ", "IR", "IQ", "IE", "IM", "IL", "HK", "HU", "IS", "IN", "ID", "IT", "JM", "JP", "JE", "JO", "KE", "KI", "XK", "KW", "KG", "LA", "LV", "LB", "LS", "LR", "LY", "LI", "LT", "LU", "MO", "MK", "MG", "MW", "MY", "MV", "ML", "MT", "MH", "MP", "NO", "PK", "ME", "MQ", "MR", "MU", "YT", "MX", "FM", "MD", "MC", "MN", "KP", "OM", "MS", "MA", "MZ", "MM", "NA", "NR", "NP", "NL", "NC", "NZ", "NI", "NE", "NG", "NU", "NF", "PW", "PS", "PA", "PG", "PY", "RW", "BL", "KN", "PE", "PH", "PN", "RU", "QA", "RE", "PL", "PT", "PR", "RO", "LC", "MF", "PM", "VC", "WS", "SM", "ST", "SA", "SN", "RS", "SC", "SL", "SG", "SX", "SK", "SI", "SB", "SO", "ZA", "GS", "TG", "TK", "TN", "TH", "TL", "TO", "TT", "TR", "TM", "TC", "TV", "VI", "UG", "UA", "AE", "GB", "US", "UM", "UY", "UZ", "VU", "VA", "VE", "VN", "WF", "EH", "YE", "ZM", "ZW"];
export const regionCodes = Object.keys(allCountries) as RegionCodes;
export type RegionCode = RegionCodes[number] extends keyof typeof allCountries ? RegionCodes[number] : never;
export type CountryFlags = ["🇦🇫", "🇦🇽", "🇦🇱", "🇩🇿", "🇦🇸", "🇦🇩", "🇦🇴", "🇦🇮", "🇦🇶", "🇦🇬", "🇦🇷", "🇦🇲", "🇦🇼", "🇦🇺", "🇦🇹", "🇦🇿", "🇧🇸", "🇧🇭", "🇧🇩", "🇧🇧", "🇧🇾", "🇧🇪", "🇧🇿", "🇧🇯", "🇧🇲", "🇧🇹", "🇧🇴", "🇧🇦", "🇧🇼", "🇧🇻", "🇨🇦", "🇧🇷", "🇮🇴", "🇻🇬", "🇧🇳", "🇧🇬", "🇧🇫", "🇧🇮", "🇰🇭", "🇨🇲", "🇹🇩", "🇨🇱", "🇨🇳", "🇨🇻", "🇧🇶", "🇰🇾", "🇨🇫", "🇨🇽", "🇨🇨", "🇨🇴", "🇰🇲", "🇨🇩", "🇨🇬", "🇨🇰", "🇨🇷", "🇨🇮", "🇭🇷", "🇨🇺", "🇨🇼", "🇨🇾", "🇨🇿", "🇩🇰", "🇩🇯", "🇩🇲", "🇩🇴", "🇪🇨", "🇪🇬", "🇸🇻", "🇬🇶", "🇪🇷", "🇪🇪", "🇪🇹", "🇫🇰", "🇫🇴", "🇫🇯", "🇫🇮", "🇫🇷", "🇬🇫", "🇵🇫", "🇹🇫", "🇬🇦", "🇬🇲", "🇬🇪", "🇩🇪", "🇬🇭", "🇬🇮", "🇬🇷", "🇬🇱", "🇬🇩", "🇬🇵", "🇬🇺", "🇬🇹", "🇬🇬", "🇬🇳", "🇬🇼", "🇬🇾", "🇭🇹", "🇭🇲", "🇭🇳", "🇰🇿", "🇮🇷", "🇮🇶", "🇮🇪", "🇮🇲", "🇮🇱", "🇭🇰", "🇭🇺", "🇮🇸", "🇮🇳", "🇮🇩", "🇮🇹", "🇯🇲", "🇯🇵", "🇯🇪", "🇯🇴", "🇰🇪", "🇰🇮", "🇽🇰", "🇰🇼", "🇰🇬", "🇱🇦", "🇱🇻", "🇱🇧", "🇱🇸", "🇱🇷", "🇱🇾", "🇱🇮", "🇱🇹", "🇱🇺", "🇲🇴", "🇲🇰", "🇲🇬", "🇲🇼", "🇲🇾", "🇲🇻", "🇲🇱", "🇲🇹", "🇲🇭", "🇲🇵", "🇳🇴", "🇵🇰", "🇲🇪", "🇲🇶", "🇲🇷", "🇲🇺", "🇾🇹", "🇲🇽", "🇫🇲", "🇲🇩", "🇲🇨", "🇲🇳", "🇰🇵", "🇴🇲", "🇲🇸", "🇲🇦", "🇲🇿", "🇲🇲", "🇳🇦", "🇳🇷", "🇳🇵", "🇳🇱", "🇳🇨", "🇳🇿", "🇳🇮", "🇳🇪", "🇳🇬", "🇳🇺", "🇳🇫", "🇵🇼", "🇵🇸", "🇵🇦", "🇵🇬", "🇵🇾", "🇷🇼", "🇧🇱", "🇰🇳", "🇵🇪", "🇵🇭", "🇵🇳", "🇷🇺", "🇶🇦", "🇷🇪", "🇵🇱", "🇵🇹", "🇵🇷", "🇷🇴", "🇱🇨", "🇲🇫", "🇵🇲", "🇻🇨", "🇼🇸", "🇸🇲", "🇸🇹", "🇸🇦", "🇸🇳", "🇷🇸", "🇸🇨", "🇸🇱", "🇸🇬", "🇸🇽", "🇸🇰", "🇸🇮", "🇸🇧", "🇸🇴", "🇿🇦", "🇬🇸", "🇹🇬", "🇹🇰", "🇹🇳", "🇹🇭", "🇹🇱", "🇹🇴", "🇹🇹", "🇹🇷", "🇹🇲", "🇹🇨", "🇹🇻", "🇻🇮", "🇺🇬", "🇺🇦", "🇦🇪", "🇬🇧", "🇺🇸", "🇺🇲", "🇺🇾", "🇺🇿", "🇻🇺", "🇻🇦", "🇻🇪", "🇻🇳", "🇼🇫", "🇪🇭", "🇾🇪", "🇿🇲", "🇿🇼"];
export type CountryFlag = CountryFlags[number];
type CountryName = AllCountries[number][0];
type DialCode = AllCountries[number][2];
type PhoneNumberFormat = Exclude<AllCountries[number][3], "" | undefined>;
type DialPriority = Exclude<AllCountries[number][6], undefined>;
type AreaCodes = Exclude<AllCountries[number][7], undefined>;
type Zones = Exclude<AllCountries[number][5], undefined | 1>;
type ArrayOfZones = Util.ArrayUnion<AllCountries[number][5]>;
type ObjectZones = Exclude<AllCountries[number][5], ArrayOfZones | undefined | 1>;
type ZoneType = Exclude<AllCountries[number][4], CountryFlag>;
type ZoneArray = Util.ArrayUnion<AllCountries[number][4]>
type SingleZone = Exclude<Exclude<AllCountries[number][4], CountryFlag>, ZoneArray>;
type Foreign<T extends `${string} (${string})`> = T extends `${infer First} (${infer Rest})` ? Rest : never;
type Local<T extends `${string} (${string})`> = T extends `${infer First} (${infer Rest})` ? First : never;
type ForeignLocal<T extends CountryName, OF extends 'Local' | 'Foreign' = 'Local'> = T extends MultiName<T>
  ? OF extends 'Local'
  ? Local<T>
  : OF extends 'Foreign'
  ? Foreign<T>
  : never
  : never;
type MultiName<T> = T extends `${infer First} (${infer Rest})` ? `${First} (${Rest})` : never;
/**
 * @type CountryArray<R extends RegionCode> - All countries data in array format. This is the raw data used
 */
type CountryArray<R extends RegionCode> = AllCountries[R extends keyof AllCountries ? R : never];
/**
 * @type CountryData  allCountries - All countries data
 */
type HasProperty<R extends RegionCode, K extends keyof CountryPrototype<R>> = CountryPrototype<R>[K] extends CountryArray<R>[number] ? CountryPrototype<R>[K] : never;
type Country<R extends RegionCode> = {
  [P in keyof CountryPrototype<R> as HasProperty<R, P> extends never ? never : P]: HasProperty<R, P>;
};
export type CountryData = {
  [Key in RegionCode]: Country<Key>;
};
/**
 * @interface CountryPrototype<R> - Country data interface
 * @summary Contains the structured data from the allCountries variable
 * @see {@link allCountries allCountries variable} - All countries data
*/
export interface CountryPrototype<R extends RegionCode = RegionCode> {
  /** @property {CountryName} name - Country name */
  name: CountryArray<R>[0];
  /** @property {FormOf<this['name'], 'Rest'>} regionCode - Region Code */
  foreignName: ForeignLocal<this['name'], 'Foreign'>;
  /** @property {FormOf<this['name'], 'First'>} regionCode - Region Code */
  localName: ForeignLocal<this['name'], 'Local'>;
  /** @property {RegionCode} regionCode - Region Code */
  regionCode: CountryArray<R>[1] extends R ? CountryArray<R>[1] : never;
  /** @property {DialCode} dialCode - Dial Code */
  dialCode: CountryArray<R>[2];
  /** @property {DialPrioirity} priority - Dial Priority */
  priority: this['regionCode'] extends 'VA' ? 1 : CountryArray<R>[7] extends DialPriority ? CountryArray<R>[7] : 0;
  /** @property {PhoneNumberFormat} format - Phone Number Format */
  format: CountryArray<R>[3] extends PhoneNumberFormat ? CountryArray<R>[3] : never;
  /** @property {CountryFlag} flag - Country Flag */
  flag: CountryArray<R>[6] extends CountryFlag ? CountryArray<R>[6] : CountryArray<R>[4] extends CountryFlag ? CountryArray<R>[4] : never;
  /** @property {boolean} hasAreaCodes - Whether or not the country has area codes */
  hasAreaCodes: CountryArray<R>[8] extends AreaCodes ? true : never;
  /** @property {Zones} zones - Zones */
  zones: CountryArray<R>[5] extends Zones ? CountryArray<R>[5] : never;
  /** @property {ZoneType} zoneTypes - Zone Types */
  zoneTypes: CountryArray<R>[4] extends ZoneType ? CountryArray<R>[4] : never;
  /** @property {AreaCodes} areaCodes - Area Codes */
  areaCodes: CountryArray<R>[8] extends AreaCodes ? CountryArray<R>[8] : never;
};
