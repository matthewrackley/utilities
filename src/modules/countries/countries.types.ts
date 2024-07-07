/**
 * @file countries.types.ts
 * @description
 * @author Matthew Allen Rackley
 * @copyright [Matthew Rackley's Github](https://www.github.com/matthewrackley "Matthew Rackley on github.com")
 */
import { InvertedObject, reverseLookup } from '@utilities/Util';
import { CountriesArray } from './countriesArray';

export type RegionCodes = ["AD", "AE", "AF", "AG", "AI", "AL", "AM", "AO", "AQ", "AR", "AS", "AT", "AU", "AW", "AX", "AZ", "BA", "BB", "BD", "BE", "BF", "BG", "BH", "BI", "BJ", "BL", "BM", "BN", "BO", "BQ", "BR", "BS", "BT", "BV", "BW", "BY", "BZ", "CA", "CC", "CD", "CF", "CG", "CI", "CK", "CL", "CM", "CN", "CO", "CR", "CU", "CV", "CW", "CX", "CY", "CZ", "DE", "DJ", "DK", "DM", "DO", "DZ", "EC", "EE", "EG", "EH", "ER", "ET", "FI", "FJ", "FK", "FM", "FO", "FR", "GA", "GB", "GD", "GE", "GF", "GG", "GH", "GI", "GL", "GM", "GN", "GP", "GQ", "GR", "GS", "GT", "GU", "GW", "GY", "HK", "HM", "HN", "HR", "HT", "HU", "ID", "IE", "IL", "IM", "IN", "IO", "IQ", "IR", "IS", "IT", "JE", "JM", "JO", "JP", "KE", "KG", "KH", "KI", "KM", "KN", "KP", "KW", "KY", "KZ", "LA", "LB", "LC", "LI", "LR", "LS", "LT", "LU", "LV", "LY", "MA", "MC", "MD", "ME", "MF", "MG", "MH", "MK", "ML", "MM", "MN", "MO", "MP", "MQ", "MR", "MS", "MT", "MU", "MV", "MW", "MX", "MY", "MZ", "NA", "NC", "NE", "NF", "NG", "NI", "NL", "NO", "NP", "NR", "NU", "NZ", "OM", "PA", "PE", "PF", "PG", "PH", "PK", "PL", "PM", "PN", "PR", "PS", "PT", "PW", "PY", "QA", "RE", "RO", "RS", "RU", "RW", "SA", "SB", "SC", "SG", "SI", "SK", "SL", "SM", "SN", "SO", "ST", "SV", "SX", "TC", "TD", "TF", "TG", "TH", "TK", "TL", "TM", "TN", "TO", "TR", "TT", "TV", "UA", "UG", "UM", "US", "UY", "UZ", "VA", "VC", "VE", "VG", "VI", "VN", "VU", "WF", "WS", "XK", "YE", "YT", "ZA", "ZM", "ZW"];
export type GetCountry = <R extends RegionCode | undefined = undefined>(region: R | Lowercase<NonNullable<R>>) => R extends RegionCode ? CountryArrays[R] : CountriesData;
export type GetCountryArray = <R extends RegionCode | undefined = undefined>(region: R | Lowercase<NonNullable<R>>) => R extends RegionCode ? CountryArray<R> : CountriesArray;
//___=============================>             <============================___\\
//___|| ==================== ||      MAIN TYPE      || =================== ||___\\
//___=============================>             <============================___\\

export type GetCountriesArray = <R extends RegionCode | undefined = undefined>(region: R | Lowercase<NonNullable<R>>) => R extends RegionCode ? CountryArray<R> : CountriesArray;


type Constructor<T = {}> = new (...args: any[]) => T;

export type GetCountryName = <R extends RegionCode>(region: R | Lowercase<NonNullable<R>>) => CountryName<R>;

export type LocalContextGroups<R extends RegionCode> = {
  lcl: CountryName<R> extends `${infer Lcl} (${infer Ctx}) ${infer Name}` ? Lcl : never;
  ctx: CountryName<R> extends `${infer Lcl} (${infer Ctx}) ${infer Name}` ? Ctx : never;
  name: CountryName<R> extends `${infer Lcl} (${infer Ctx}) ${infer Name}` ? Name : never;
};

export type SearchByZone = <
  R extends RegionCode,
  S extends K | undefined = undefined,
  K extends keyof InvertedObject<CountryZones<R>> = keyof InvertedObject<CountryZones<R>>
>(regionCode: R | Lowercase<NonNullable<R>>, zone?: S) => InvertedObject<CountryZones<R>, S>;

export type CountryFlags = ["🇦🇩", "🇦🇪", "🇦🇫", "🇦🇬", "🇦🇮", "🇦🇱", "🇦🇲", "🇦🇴", "🇦🇶", "🇦🇷", "🇦🇸", "🇦🇹", "🇦🇺", "🇦🇼", "🇦🇽", "🇦🇿", "🇧🇦", "🇧🇧", "🇧🇩", "🇧🇪", "🇧🇫", "🇧🇬", "🇧🇭", "🇧🇮", "🇧🇯", "🇧🇱", "🇧🇲", "🇧🇳", "🇧🇴", "🇧🇶", "🇧🇷", "🇧🇸", "🇧🇹", "🇧🇻", "🇧🇼", "🇧🇾", "🇧🇿", "🇨🇦", "🇨🇨", "🇨🇩", "🇨🇫", "🇨🇬", "🇨🇮", "🇨🇰", "🇨🇱", "🇨🇲", "🇨🇳", "🇨🇴", "🇨🇷", "🇨🇺", "🇨🇻", "🇨🇼", "🇨🇽", "🇨🇾", "🇨🇿", "🇩🇪", "🇩🇯", "🇩🇰", "🇩🇲", "🇩🇴", "🇩🇿", "🇪🇨", "🇪🇪", "🇪🇬", "🇪🇭", "🇪🇷", "🇪🇹", "🇫🇮", "🇫🇯", "🇫🇰", "🇫🇲", "🇫🇴", "🇫🇷", "🇬🇦", "🇬🇧", "🇬🇩", "🇬🇪", "🇬🇫", "🇬🇬", "🇬🇭", "🇬🇮", "🇬🇱", "🇬🇲", "🇬🇳", "🇬🇵", "🇬🇶", "🇬🇷", "🇬🇸", "🇬🇹", "🇬🇺", "🇬🇼", "🇬🇾", "🇭🇰", "🇭🇲", "🇭🇳", "🇭🇷", "🇭🇹", "🇭🇺", "🇮🇩", "🇮🇪", "🇮🇱", "🇮🇲", "🇮🇳", "🇮🇴", "🇮🇶", "🇮🇷", "🇮🇸", "🇮🇹", "🇯🇪", "🇯🇲", "🇯🇴", "🇯🇵", "🇰🇪", "🇰🇬", "🇰🇭", "🇰🇮", "🇰🇲", "🇰🇳", "🇰🇵", "🇰🇼", "🇰🇾", "🇰🇿", "🇱🇦", "🇱🇧", "🇱🇨", "🇱🇮", "🇱🇷", "🇱🇸", "🇱🇹", "🇱🇺", "🇱🇻", "🇱🇾", "🇲🇦", "🇲🇨", "🇲🇩", "🇲🇪", "🇲🇫", "🇲🇬", "🇲🇭", "🇲🇰", "🇲🇱", "🇲🇲", "🇲🇳", "🇲🇴", "🇲🇵", "🇲🇶", "🇲🇷", "🇲🇸", "🇲🇹", "🇲🇺", "🇲🇻", "🇲🇼", "🇲🇽", "🇲🇾", "🇲🇿", "🇳🇦", "🇳🇨", "🇳🇪", "🇳🇫", "🇳🇬", "🇳🇮", "🇳🇱", "🇳🇴", "🇳🇵", "🇳🇷", "🇳🇺", "🇳🇿", "🇴🇲", "🇵🇦", "🇵🇪", "🇵🇫", "🇵🇬", "🇵🇭", "🇵🇰", "🇵🇱", "🇵🇲", "🇵🇳", "🇵🇷", "🇵🇸", "🇵🇹", "🇵🇼", "🇵🇾", "🇶🇦", "🇷🇪", "🇷🇴", "🇷🇸", "🇷🇺", "🇷🇼", "🇸🇦", "🇸🇧", "🇸🇨", "🇸🇬", "🇸🇮", "🇸🇰", "🇸🇱", "🇸🇲", "🇸🇳", "🇸🇴", "🇸🇹", "🇸🇻", "🇸🇽", "🇹🇨", "🇹🇩", "🇹🇫", "🇹🇬", "🇹🇭", "🇹🇰", "🇹🇱", "🇹🇲", "🇹🇳", "🇹🇴", "🇹🇷", "🇹🇹", "🇹🇻", "🇺🇦", "🇺🇬", "🇺🇲", "🇺🇸", "🇺🇾", "🇺🇿", "🇻🇦", "🇻🇨", "🇻🇪", "🇻🇬", "🇻🇮", "🇻🇳", "🇻🇺", "🇼🇫", "🇼🇸", "🇽🇰", "🇾🇪", "🇾🇹", "🇿🇦", "🇿🇲", "🇿🇼"];
export type CountryNames = "Andorra" | "United Arab Emirates (‫الإمارات العربية المتحدة‬‎)" | "Afghanistan (‫افغانستان‬‎)" | "Antigua and Barbuda" | "Anguilla" | "Albania (Shqipëri)" | "Armenia (Հայաստան)" | "Angola" | "Antarctica" | "Argentina" | "American Samoa" | "Austria (Österreich)" | "Australia" | "Aruba" | "Åland Islands" | "Azerbaijan (Azərbaycan)" | "Bosnia and Herzegovina (Босна и Херцеговина)" | "Barbados" | "Bangladesh (বাংলাদেশ)" | "Belgium (België)" | "Burkina Faso" | "Bulgaria (България)" | "Bahrain (‫البحرين‬‎)" | "Burundi (Uburundi)" | "Benin (Bénin)" | "Saint Barthélemy (Saint-Barthélemy)" | "Bermuda" | "Brunei" | "Bolivia" | "Caribbean Netherlands" | "Brazil (Brasil)" | "Bahamas" | "Bhutan (འབྲུག)" | "Bouvet Island" | "Botswana" | "Belarus (Беларусь)" | "Belize" | "Canada" | "Cocos (Keeling) Islands" | "Congo (DRC) (Jamhuri ya Kidemokrasia ya Kongo)" | "Central African Republic (République centrafricaine)" | "Congo (Republic) (Congo-Brazzaville)" | "Côte d’Ivoire" | "Cook Islands" | "Chile" | "Cameroon (Cameroun)" | "China (中国)" | "Colombia" | "Costa Rica" | "Cuba" | "Cape Verde (Kabu Verdi)" | "Curaçao" | "Christmas Island" | "Cyprus (Κύπρος)" | "Czech Republic (Česká republika)" | "Germany (Deutschland)" | "Djibouti" | "Denmark (Danmark)" | "Dominica" | "Dominican Republic (República Dominicana)" | "Algeria (‫الجزائر‬‎)" | "Ecuador" | "Estonia (Eesti)" | "Egypt (‫مصر‬‎)" | "Western Sahara" | "Eritrea" | "Ethiopia" | "Finland (Suomi)" | "Fiji" | "Falkland Islands (Islas Malvinas)" | "Micronesia" | "Faroe Islands (Føroyar)" | "France" | "Gabon" | "United Kingdom" | "Grenada" | "Georgia (საქართველო)" | "French Guiana (Guyane française)" | "Guernsey" | "Ghana (Gaana)" | "Gibraltar" | "Greenland (Kalaallit Nunaat)" | "Gambia" | "Guinea (Guinée)" | "Guadeloupe" | "Equatorial Guinea (Guinea Ecuatorial)" | "Greece (Ελλάδα)" | "South Georgia and the South Sandwich Islands" | "Guatemala" | "Guam" | "Guinea-Bissau (Guiné Bissau)" | "Guyana" | "Hong Kong (香港)" | "Heard Island and McDonald Islands" | "Honduras" | "Croatia (Hrvatska)" | "Haiti" | "Hungary (Magyarország)" | "Indonesia" | "Ireland" | "Israel (‫ישראל‬‎)" | "Isle of Man" | "India (भारत)" | "British Indian Ocean Territory" | "Iraq (‫العراق‬‎)" | "Iran (‫ایران‬‎)" | "Iceland (Ísland)" | "Italy (Italia)" | "Jersey" | "Jamaica" | "Jordan (‫الأردن‬‎)" | "Japan (日本)" | "Kenya" | "Kyrgyzstan (Кыргызстан)" | "Cambodia (កម្ពុជា)" | "Kiribati" | "Comoros (‫جزر القمر‬‎)" | "Saint Kitts and Nevis" | "North Korea (조선 민주주의 인민 공화국)" | "Kuwait (‫الكويت‬‎)" | "Cayman Islands" | "Kazakhstan (Казахстан)" | "Laos (ລາວ)" | "Lebanon (‫لبنان‬‎)" | "Saint Lucia" | "Liechtenstein" | "Liberia" | "Lesotho" | "Lithuania (Lietuva)" | "Luxembourg" | "Latvia (Latvija)" | "Libya (‫ليبيا‬‎)" | "Morocco (‫المغرب‬‎)" | "Monaco" | "Moldova (Republica Moldova)" | "Montenegro (Crna Gora)" | "Saint Martin (Sant-Martin (partie française))" | "Madagascar (Madagasikara)" | "Marshall Islands" | "Macedonia (FYROM) (Македонија)" | "Mali" | "Myanmar (Burma) (မြန်မာ)" | "Mongolia (Монгол)" | "Macau (澳門)" | "Northern Mariana Islands" | "Martinique" | "Mauritania (‫موريتانيا‬‎)" | "Montserrat" | "Malta" | "Mauritius (Moris)" | "Maldives" | "Malawi" | "Mexico (México)" | "Malaysia" | "Mozambique (Moçambique)" | "Namibia (Namibië)" | "New Caledonia (Nouvelle-Calédonie)" | "Niger (Nijar)" | "Norfolk Island" | "Nigeria" | "Nicaragua" | "Netherlands (Nederland)" | "Norway (Norge)" | "Nepal (नेपाल)" | "Nauru" | "Niue" | "New Zealand" | "Oman (‫عُمان‬‎)" | "Panama (Panamá)" | "Peru (Perú)" | "French Polynesia (Polynésie française)" | "Papua New Guinea" | "Philippines" | "Pakistan (‫پاکستان‬‎)" | "Poland (Polska)" | "Saint Pierre and Miquelon (Saint-Pierre-et-Miquelon)" | "Pitcairn Islands" | "Puerto Rico" | "Palestine (‫فلسطين‬‎)" | "Portugal" | "Palau" | "Paraguay" | "Qatar (‫قطر‬‎)" | "Réunion (La Réunion)" | "Romania (România)" | "Serbia (Србија)" | "Russia (Россия)" | "Rwanda" | "Saudi Arabia (‫المملكة العربية السعودية‬‎)" | "Solomon Islands" | "Seychelles" | "Singapore" | "Slovenia (Slovenija)" | "Slovakia (Slovensko)" | "Sierra Leone" | "San Marino" | "Senegal (Sénégal)" | "Somalia (Soomaaliya)" | "São Tomé and Príncipe (São Tomé e Príncipe)" | "El Salvador" | "Sint Maarten" | "Turks and Caicos Islands" | "Chad (Tchad)" | "French Southern and Antarctic Lands" | "Togo" | "Thailand (ไทย)" | "Tokelau" | "Timor-Leste" | "Turkmenistan" | "Tunisia (‫تونس‬‎)" | "Tonga" | "Turkey (Türkiye)" | "Trinidad and Tobago" | "Tuvalu" | "Ukraine (Україна)" | "Uganda" | "United States Minor Outlying Islands" | "United States" | "Uruguay" | "Uzbekistan (Oʻzbekiston)" | "Vatican City (Città del Vaticano)" | "Saint Vincent and the Grenadines" | "Venezuela" | "British Virgin Islands" | "U.S. Virgin Islands" | "Vietnam (Việt Nam)" | "Vanuatu" | "Wallis and Futuna" | "Samoa" | "Kosovo" | "Yemen (‫اليمن‬‎)" | "Mayotte" | "South Africa" | "Zambia" | "Zimbabwe";

/**
 * @type ZoneType<R extends RegionCode> - Get the type of a region
 */
export type ZoneType<R extends RegionCode> = keyof CountryZones<R> extends "Regions"
  ? "Regions"
  : keyof CountryZones<R> extends "Emirates"
  ? "Emirates"
  : keyof CountryZones<R> extends "Parishes"
  ? "Parishes"
  : keyof CountryZones<R> extends "Districts"
  ? "Districts"
  : keyof CountryZones<R> extends "Counties"
  ? "Counties"
  : keyof CountryZones<R> extends "Provinces"
  ? "Provinces"
  : keyof CountryZones<R> extends "States"
  ? "States"
  : keyof CountryZones<R> extends "Municipalities"
  ? "Municipalities"
  : keyof CountryZones<R> extends "Governorates"
  ? "Governorates"
  : keyof CountryZones<R> extends "Departments"
  ? "Departments"
  : keyof CountryZones<R> extends "Special Municipalities"
  ? "Special Municipalities"
  : keyof CountryZones<R> extends "Divisions"
  ? "Divisions"
  : keyof CountryZones<R> extends "Villages"
  ? "Villages"
  : keyof CountryZones<R> extends "Prefectures"
  ? "Prefectures"
  : keyof CountryZones<R> extends "Islands"
  ? "Islands"
  : keyof CountryZones<R> extends "Cantons"
  ? "Cantons"
  : keyof CountryZones<R> extends "Aimags"
  ? "Aimags"
  : keyof CountryZones<R> extends "Freguesias"
  ? "Freguesias"
  : keyof CountryZones<R> extends "Atolls"
  ? "Atolls"
  : keyof CountryZones<R> extends "Communes"
  ? "Communes"
  : keyof CountryZones<R> extends "Federal Subjects"
  ? "Federal Subjects"
  : keyof CountryZones<R> extends "Oblasts"
  ? "Oblasts"
  : keyof CountryZones<R> extends "Territories"
  ? "Territories"
  : keyof CountryZones<R> extends "Kingdoms"
  ? "Kingdoms"
  : (keyof CountryZones<R>)[] extends ("Islands" | "Districts")[]
  ? ["Islands", "Districts"]
  : (keyof CountryZones<R>)[] extends ("Inner Islands" | "Outer Islands")[]
  ? ["Inner Islands", "Outer Islands"]
  : (keyof CountryZones<R>)[] extends ("Municipalities" | "Regions")[]
  ? ["Municipalities", "Regions"]
  : (keyof CountryZones<R>)[] extends ("States" | "Regions")[]
  ? ["States", "Regions"]
  : (keyof CountryZones<R>)[] extends ("Parishes" | "Sheadings")[]
  ? ["Parishes", "Sheadings"]
  : (keyof CountryZones<R>)[] extends ("Parishes" | "Municipalities")[]
  ? ["Parishes", "Municipalities"]
  : (keyof CountryZones<R>)[] extends ("Provinces" | "Municipalities" | "Autonomous Regions" | "Special Administrative Regions")[]
  ? ["Provinces", "Municipalities", "Autonomous Regions", "Special Administrative Regions"]
  : (keyof CountryZones<R>)[] extends ("Provinces" | "Territories")[]
  ? ["Provinces", "Territories"]
  : (keyof CountryZones<R>)[] extends ("Provinces" | "Communes")[]
  ? ["Provinces", "Communes"]
  : (keyof CountryZones<R>)[] extends ("Arrondissements" | "Communes")[]
  ? ["Arrondissements", "Communes"]
  : (keyof CountryZones<R>)[] extends ("Communes" | "Subdivisions")[]
  ? ["Communes", "Subdivisions"]
  : (keyof CountryZones<R>)[] extends ("Arrondissements" | "Communes" | "Cantons")[]
  ? ["Arrondissements", "Communes", "Cantons"]
  : (keyof CountryZones<R>)[] extends ("Communes" | "Cantons")[]
  ? ["Communes", "Cantons"]
  : never;
export type MultiZone =
  | ("States" | "Territories")[]
  | ("Regions" | "Municipalities")[]
  | ("Inner Islands" | "Outer Islands")[]
  | ("Provinces" | "Communes")[]
  | ("Communes" | "Subdivisions")[]
  | ("Parishes" | "Sheadings")[]
  | ("Parishes" | "Municipalities")[]
  | ("Provinces" | "Territories")[]
  | ("Districts" | "Islands")[]
  | ("Provinces" | "Municipalities" | "Autonomous Regions" | "Special Administrative Regions")[]
  | ("Arrondissements" | "Communes")[]
  | ("Arrondissements" | "Communes" | "Cantons")[]
  | ("Regions" | "States")[]
  | ("Communes" | "Cantons")[];

export type ZoneArrays = ["States", "Territories"] | ["Regions", "Municipalities"] | ["Inner Islands", "Outer Islands"] | ["Provinces", "Communes"] | ["Communes", "Subdivisions"] | ["Parishes", "Sheadings"] | ["Parishes", "Municipalities"] | ["Provinces", "Territories"] | ["Districts", "Islands"] | ["Provinces", "Municipalities", "Autonomous Regions", "Special Administrative Regions"] | ["Arrondissements", "Communes"] | ["Arrondissements", "Communes", "Cantons"] | ["Regions", "States"] | ["Communes", "Cantons"];

export type SingleZone = "Regions" | "Emirates" | "Parishes" | "Districts" | "Counties" | "Provinces" | "States" | "Territories" | "Municipalities" | "Governorates" | "Departments" | "Special Municipalities" | "Islands" | "Autonomous Regions" | "Special Administrative Regions" | "Divisions" | "Arrondissements" | "Communes" | "Cantons" | "Villages" | "Sheadings" | "Prefectures" | "Aimags" | "Freguesias" | "Atolls" | "Subdivisions" | "Federal Subjects" | "Inner Islands" | "Outer Islands" | "Oblasts" | "Kingdoms";

export type DialCodes = "376" | "971" | "93" | "1268" | "1264" | "355" | "374" | "244" | "672" | "54" | "1684" | "43" | "61" | "297" | "358" | "994" | "387" | "1246" | "880" | "32" | "226" | "359" | "973" | "257" | "229" | "590" | "1441" | "673" | "591" | "599" | "55" | "1242" | "975" | "47" | "267" | "375" | "501" | "1" | "236" | "250" | "506" | "243" | "242" | "225" | "682" | "56" | "237" | "86" | "57" | "53" | "238" | "357" | "420" | "49" | "253" | "45" | "1767" | "213" | "593" | "372" | "20" | "212" | "291" | "251" | "679" | "500" | "691" | "298" | "33" | "241" | "44" | "1473" | "995" | "594" | "233" | "350" | "299" | "220" | "224" | "240" | "30" | "502" | "1671" | "245" | "592" | "852" | "504" | "385" | "509" | "36" | "62" | "353" | "972" | "91" | "246" | "964" | "98" | "354" | "39" | "1876" | "962" | "81" | "254" | "996" | "855" | "686" | "269" | "1869" | "850" | "965" | "1345" | "7" | "856" | "961" | "1758" | "423" | "231" | "266" | "370" | "352" | "371" | "218" | "377" | "373" | "382" | "261" | "692" | "389" | "223" | "95" | "976" | "853" | "1670" | "596" | "222" | "1664" | "356" | "230" | "960" | "265" | "52" | "60" | "258" | "264" | "687" | "227" | "234" | "505" | "31" | "977" | "674" | "683" | "64" | "968" | "507" | "51" | "689" | "675" | "63" | "92" | "48" | "508" | "970" | "351" | "680" | "595" | "974" | "262" | "40" | "381" | "966" | "677" | "248" | "65" | "386" | "421" | "232" | "378" | "221" | "252" | "239" | "503" | "1721" | "1649" | "235" | "228" | "66" | "690" | "670" | "993" | "216" | "676" | "90" | "1868" | "688" | "380" | "256" | "598" | "998" | "1784" | "58" | "1284" | "1340" | "84" | "678" | "681" | "685" | "383" | "967" | "27" | "260" | "263";

new Map<number, "Arrondissements" | "Communes" | "Cantons">()
type Zoning = "Regions"[] | "Emirates"[] | "Parishes"[] | "Districts"[] | "Counties"[] | "Provinces"[] | "States"[] | ("States" | "Territories")[] | "Municipalities"[] | "Governorates"[] | "Departments"[] | ("Parishes" | "Municipalities")[] | "Special Municipalities"[] | ("Provinces" | "Territories")[] | ("Districts" | "Islands")[] | ("Provinces" | "Municipalities" | "Autonomous Regions" | "Special Administrative Regions")[] | "Divisions"[] | ("Arrondissements" | "Communes")[] | ("Arrondissements" | "Communes" | "Cantons")[] | "Villages"[] | ("Parishes" | "Sheadings")[] | "Prefectures"[] | "Islands"[] | "Cantons"[] | ("Regions" | "States")[] | "Aimags"[] | "Freguesias"[] | "Atolls"[] | ("Provinces" | "Communes")[] | ("Communes" | "Subdivisions")[] | "Communes"[] | "Federal Subjects"[] | ("Inner Islands" | "Outer Islands")[] | ("Regions" | "Municipalities")[] | "Oblasts"[] | "Territories"[] | "Kingdoms"[] | ("Communes" | "Cantons")[];
export type PhoneFormats = "+...-...-..." | "+...-.-...-...." | "+..-..-...-...." | "+.(...)...-...." | "+...(...)...-..." | "+...-..-...-..." | "+..(...)...-...." | "+.. ... ... ..." | "+...-...-...." | "+...-..-...-..-.." | "+...-..-...." | "+.. ... .. .. .." | "+...-..-..-...." | "+...-....-...." | "+..-..-....-...." | "+...-.-...-..." | "+...(..)...-..-.." | "+. (...) ...-...." | "+...-..-...-...." | "+...-..-..." | "+..-.-....-...." | "+.. ..-........" | "+... ....-...." | "+..-.-...-...." | "+...(...)..-.." | "+.. ... ......." | "+...-..-..-..-.." | "+.. .. .. .. .." | "+... .. .... ...." | "+...-..-....." | "+...-....." | "+.. . .. .. .. .." | "+...-.-..-..-.." | "+.. .... ......" | "+...-.....-...." | "+...-...-....." | "+...-..-..-.." | "+...-.-......" | "+... .... ...." | "+..(...)...-..." | "+..-..-...-.." | "+... .. ......." | "+.. .....-....." | "+...(...)...-...." | "+... ... ...." | "+.. ... ......" | "+...-.-....-...." | "+.. ... .. ...." | "+...-...-......" | "+. ... ...-..-.." | "+...(...)..-..." | "+...-..-....-..." | "+...-..-..-....." | "+..-...-..." | "+...(...)..-..-.." | "+..-..-..-...." | "+.. ..-....-...." | "+...-..-...-.." | "+.. .. ........" | "+.. ... .. ..." | "+...-...." | "+.. ...-...-...." | "+.. ... ...." | "+.. ...-......." | "+.. ...-...-..." | "+.-(...)-...-...." | "+.. ....-...." | "+...-..-......" | "+...-....-......" | "+..-..-...-..." | "+.. ... ... .. .." | "+...-.-...-..-.." | "+.. .. .... ...." | "+..-..-....-...";


/**
 * @type CountryArray<R extends RegionCode> - Get the array of countries for a region
 */
export type CountryArray<R extends RegionCode> = CountriesArray<R>[number];
type US = CountryName<'US'>;
/**
 * @type CountryName<R extends RegionCode> - Get the name of a country for a region
 */
export type CountryName<R extends RegionCode> = CountryArray<R>[0];
/**
 * @type RegionCode - Get the code of a country for a region
 */
export type RegionCode = RegionCodes[number];
/**
 * @type DialingCode<R extends RegionCode> - Get the code of a country for a region
 */
export type DialCode<R extends RegionCode> = CountryArray<R>[2];
/**
 * @type PhoneFormat<R extends RegionCode> - Get the format of a country for a region
 */
export type PhoneFormat<R extends RegionCode> = Exclude<CountryArray<R>[3], "" | undefined>;
/**
 * @type CountryFlag<R extends RegionCode> - Get the flag of a country for a region
 */
export type CountryFlag<R extends RegionCode> = CountryArray<R>[4];
/**
 * @type CountryZones<R extends RegionCode> - Get the zones of a region
 */
export type CountryZones<R extends RegionCode = RegionCode> = Exclude<CountryArray<R>[5], 1 | undefined>;
/**
 * @type Zones<R extends RegionCode> - Get the zones of a region
 */
export type Zones<R extends RegionCode> = CountryZones<R>[keyof CountryZones<R>];
/**
 * @type DialPriority<R extends RegionCode> - Get the zones of a region
 */
export type DialPriority<R extends RegionCode> = R extends "VA" ? 1 : CountryArray<R>[6] extends 0 | 1 | 2 | 3 ? CountryArray<R>[6] : 0;
/**
 * @type AreaCodes<R extends RegionCode> - Get the zones of a region
 */
export type AreaCodes<R extends RegionCode> = Exclude<CountryArray<R>[7], undefined>;
/**
 * @type NameHolder - The holder of a name existing in a country
 */
export type NameHolder = `${string} (${string}) (${string})` | `${string} (${string}) ${string}` | `${string} (${string})`;
/**
 * @type LocalName<R extends RegionCode, F extends 'LCF' | 'LF' | 'LCN' | undefined> - Get the local name of a country for a region
 * @template {R extends RegionCode} R
 * @template {F extends 'LCF' | 'LF' | 'LCN' | undefined} F
 */
export type LocalName<R extends RegionCode, F extends 'LCF' | 'LF' | 'LCN' | undefined> =
  MultiName<CountryName<R>> extends `${infer Lcl} (${infer Ctx}) (${infer Frgn})`
  ? F extends 'LCF'
  ? Lcl
  : never
  : MultiName<CountryName<R>> extends `${infer Lcl} (${infer Frgn})`
  ? F extends 'LF'
  ? Lcl
  : never
  : MultiName<CountryName<R>> extends `${infer Lcl} (${infer Ctx}) ${infer Name}`
  ? F extends 'LCN'
  ? `${Lcl} ${Name}`
  : never
  : never;
/**
 * @type ForeignName<R extends RegionCode, F extends 'LCF' | 'LF' | 'LCN' | undefined> - Get the foreign name of a country for a region
 * @template {R extends RegionCode} R
 * @template {F extends 'LCF' | 'LF' | 'LCN' | undefined} F
 */
export type ForeignName<R extends RegionCode, F extends 'LCF' | 'LF' | 'LCN' | undefined> =
  MultiName<CountryName<R>> extends `${infer Lcl} (${infer Ctx}) (${infer Frgn})`
  ? F extends 'LCF'
  ? Frgn
  : never
  : MultiName<CountryName<R>> extends `${infer Lcl} (${infer Frgn})`
  ? F extends 'LF'
  ? Frgn
  : never
  : F extends 'LCN'
  ? MultiName<ContextualName<R, F>> | MultiName<LocalName<R, F>>
  : never;
/**
 * @type ContextualName<R extends RegionCode, F extends 'LCF' | 'LF' | 'LCN' | undefined> - Get the contextual name of a country for a region
 * @template {R extends RegionCode} R
 * @template {F extends 'LCF' | 'LF' | 'LCN' | undefined} F
 */
export type ContextualName<R extends RegionCode, F extends 'LCF' | 'LF' | 'LCN' | undefined> =
  MultiName<CountryName<R>> extends `${infer Lcl} (${infer Ctx}) (${infer Frgn})`
  ? F extends 'LCF' | undefined
  ? Ctx
  : never
  : MultiName<CountryName<R>> extends `${infer Lcl} (${infer Ctx}) ${infer Name}`
  ? F extends 'LCN' | undefined
  ? `${Ctx} ${Name}`
  : never
  : F extends 'LF'
  ? MultiName<ForeignName<R, F>> | MultiName<LocalName<R, F>>
  : never;
/**
 * @type ForeignLocal<R extends RegionCode, OF extends 'Local' | 'Foreign' | 'Contextual' = 'Local', F extends 'LCF' | 'LF' | 'LCN' | undefined = undefined> - Get the contextual name of a country for a region
 * @template {R extends RegionCode} R
 * @template {OF extends 'Local' | 'Foreign' | 'Contextual' = 'Local'} OF
 * @template {F extends OF extends 'Local' | 'Foreign' 'LCF' | 'LF' | 'LCN' | undefined = undefined} F
 *
 */
export type ForeignLocal<
  R extends RegionCode,
  OF extends 'Local' | 'Foreign' | 'Contextual' = 'Local',
  F extends
  (OF extends 'Contextual' | 'Local' ? 'LCF' | 'LCN' : never) |
  (OF extends 'Foreign' | 'Local' ? 'LCF' | 'LF' : never) | undefined = undefined
> =
  CountryName<R> extends MultiName<CountryName<R>>
  ? OF extends 'Local'
  ? LocalName<R, F>
  : OF extends 'Contextual'
  ? ContextualName<R, F>
  : OF extends 'Foreign'
  ? ForeignName<R, F>
  : never
  : never;
export type MultiName<T> = T extends NameHolder
  ? T extends `${infer First} (${infer Context}) (${infer Rest})`
  ? `${First} (${Context}) (${Rest})`
  : T extends `${infer First} (${infer Context}) ${infer Rest}`
  ? `${First} (${Context}) ${Rest}`
  : T extends `${infer First} (${infer Rest})`
  ? `${First} (${Rest})`
  : never
  : never;
type Multi = `${string} (${string}) (${string})` | `${string} (${string}) ${string}` | `${string} (${string})`;
export type HasProperty<R extends RegionCode, K extends keyof Countries[R]> = Countries[R][K] extends CountryArray<R>[number] ? Countries[R][K] : never;
export type CountriesData = {
  [R in RegionCode]: {
    [P in keyof Country<R> as Country<R>[P] extends never | never[] ? never : P]: Country<R>[P];
  }
};

export type FilterNestedNever<T> = {
  [K in keyof T]: {
    [P in keyof T[K]as T[K][P] extends never ? never : P]: T[K][P];
  }
};
type ToTuple<T> = T extends [infer A, ...infer B] ? readonly [A, ...ToTuple<B>] : [];

export interface Country<R extends RegionCode> {
  name: CountryName<R>;
  regionCode: R;
  dialCode: DialCode<R>;
  format?: PhoneFormat<R>;
  flag: CountryFlag<R>;
  zoneTypes?: ZoneType<R>;
  zones?: CountryZones<R>;
  priority: DialPriority<R>;
  areaCodes?: AreaCodes<R>;
  [Symbol.toStringTag]: `Country: ${CountryName<R>}`;
  [Symbol.match](string: string): CountryName<R> | null;
  local?: CountryName<R> | ForeignLocal<R, 'Local', 'LCF' | 'LF' | 'LCN'> extends `Saint${infer StCountry extends string}` ? `St.${StCountry}` : R extends "TF" ? "French Southern Territories" : R extends "GS" ? "South Sandwich Islands" : R extends "HM" ? "McDonald Islands" : R extends "UM" ? "U.S. Minor Outlying Islands" : ForeignLocal<R, 'Local', 'LCF' | 'LF' | 'LCN'>;
  foreign?: ForeignLocal<R, 'Foreign', 'LF' | 'LCF'>;
  context?: ForeignLocal<R, 'Contextual', 'LCF' | 'LCN'>;
};

export type CountryData = {
  [R in RegionCode]: Country<R>;
}
export type GetLclCtx = <R extends RegionCode, N extends CountryName<R>>(region: R, name: CountryName<R>) => {
  lcl: CountryName<R> extends `${infer Lcl} (${infer Ctx}) ${infer Name}` ? Lcl : never;
  ctx: CountryName<R> extends `${infer Lcl} (${infer Ctx}) ${infer Name}` ? Ctx : never;
  name: CountryName<R> extends `${infer Lcl} (${infer Ctx}) ${infer Name}` ? Name : never;
} | undefined;
//  _=============================>              <============================  _\\
//___|| ==================== ||      INTERFACES      || =================== ||___\\
//_  =============================>              <============================  _\\
export type CountryArrays = {
  [K in RegionCode]: CountryArray<K>;
};
export type CountryMap<R extends RegionCode = RegionCode> = Map<R, CountryArray<R>>

type ReverseLookup = typeof reverseLookup;
export interface Countries extends CountriesData, GetCountry {
  [Symbol.toStringTag]: 'Countries';
  new(): Countries;
  getArray: GetCountryArray;
  getName: GetCountryName;
  arr: CountryArrays;
  prototype: Countries;
  lookup: SearchByZone;
}
export type ExtractName = <
  O extends ForeignLocal<R, T, F>,
  R extends RegionCode,
  T extends 'Local' | 'Contextual' | 'Foreign',
  F extends
  (T extends "Local" | "Contextual" ? "LCF" | "LCN" : never) |
  (T extends "Local" | "Foreign" ? "LCF" | "LF" : never) | undefined
>(region: R | Lowercase<NonNullable<R>>, type: T, form: F) => ForeignLocal<R, T, F>;

export type LocalContextNameGroups<R extends RegionCode> = {
  lcl: CountryName<R> extends `${infer Lcl} (${infer Ctx}) ${infer Name}` ? Lcl : never;
  ctx: CountryName<R> extends `${infer Lcl} (${infer Ctx}) ${infer Name}` ? Ctx : never;
  name: CountryName<R> extends `${infer Lcl} (${infer Ctx}) ${infer Name}` ? Name : never;
};
export type LocalContextForeignGroups<R extends RegionCode> = {
  lcl: ForeignLocal<R, 'Local', 'LCF'>;
  ctx: ForeignLocal<R, 'Contextual', 'LCF'>;
  frgn: ForeignLocal<R, 'Foreign', 'LCF'>;
};
export type LocalForeignGroups<R extends RegionCode> = {
  lcl: ForeignLocal<R, 'Local', 'LF'>;
  frgn: ForeignLocal<R, 'Foreign', 'LF'>;
};
