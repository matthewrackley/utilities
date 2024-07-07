/**
 * @file countries.ts
 * @description
 * @author Matthew Allen Rackley
 * @copyright [Matthew Rackley's Github](https://www.github.com/matthewrackley "Matthew Rackley on github.com")
 */
import { Country } from "country-telephone-data";
import { allCountries, RegionCode, countryData } from "../modules/allCountries";
import { getIterableValue } from "./Util.ts";
/**
 * @file Data.ts
 * @description
 * @author Matthew Allen Rackley
 * @copyright All Rights Reserved © 2023 Pornova 18+ LLC
 */
export namespace Countries {
  export function getCodes<N extends 2 | 3 = 2>(letterCount: N = 2 as N) {
    return {
      'Ascension Island': [letterCount === 2 ? 'AC' : letterCount === 3 ? 'ASC' : null as never, null, '🇦🇨'],
      '\u00C5land Islands': [letterCount === 2 ? 'AX' : letterCount === 3 ? 'ALA' : null as never, null, '🇦🇽'],
      'Caribbean Netherlands': [letterCount === 2 ? 'BQ' : letterCount === 3 ? 'BES' : null as never, null, '🇧🇶'],
      'Bouvet Island': [letterCount === 2 ? 'BV' : letterCount === 3 ? 'BVT' : null as never, null, '🇧🇻'],
      'Clipperton Island': [letterCount === 2 ? 'CP' : letterCount === 3 ? 'CP' : null as never, null, '🇨🇵'],
      'Diego Garcia': [letterCount === 2 ? 'DG' : letterCount === 3 ? 'DG' : null as never, null, '🇩🇬'],
      'Ceuta and Melilla': [letterCount === 2 ? 'EA' : letterCount === 3 ? 'EA' : null as never, null, '🇪🇦'],
      'European Union': [letterCount === 2 ? 'EU' : letterCount === 3 ? 'EU' : null as never, null, '🇪🇺'],
      'French Guiana': [letterCount === 2 ? 'GF' : letterCount === 3 ? 'GUF' : null as never, null, '🇬🇫'],
      'Guadeloupe': [letterCount === 2 ? 'GP' : letterCount === 3 ? 'GLP' : null as never, null, '🇬🇵'],
      'South Georgia and the South Sandwich Islands': [letterCount === 2 ? 'GS' : letterCount === 3 ? 'SGS' : null as never, null, '🇬🇸'],
      'Heard Island and McDonald Islands': [letterCount === 2 ? 'HM' : letterCount === 3 ? 'HMD' : null as never, null, '🇭🇲'],
      'Canary Islands': [letterCount === 2 ? 'IC' : letterCount === 3 ? 'IC' : null as never, null, '🇮🇨'],
      'Martinique': [letterCount === 2 ? 'MQ' : letterCount === 3 ? 'MTQ' : null as never, null, '🇲🇶'],
      'Norfolk Island': [letterCount === 2 ? 'NF' : letterCount === 3 ? 'NFK' : null as never, null, '🇳🇫'],
      'Tristan da Cunha': [letterCount === 2 ? 'TA' : letterCount === 3 ? 'TA' : null as never, null, '🇹🇦'],
      'French Southern and Antarctic Lands': [letterCount === 2 ? 'TF' : letterCount === 3 ? 'ATF' : null as never, null, '🇹🇫'],
      'United States Minor Outlying Islands': [letterCount === 2 ? 'UM' : letterCount === 3 ? 'UMI' : null as never, null, '🇺🇲'],
      'United Nations': [letterCount === 2 ? 'UN' : letterCount === 3 ? 'UN' : null as never, null, '🇺🇳'],
      'Afghanistan': [letterCount === 2 ? 'AF' : letterCount === 3 ? 'AFG' : null as never, '93', '🇦🇫'],
      'Albania': [letterCount === 2 ? 'AL' : letterCount === 3 ? 'ALB' : null as never, '355', '🇦🇱'],
      'Algeria': [letterCount === 2 ? 'DZ' : letterCount === 3 ? 'DZA' : null as never, '213', '🇩🇿'],
      'American Samoa': [letterCount === 2 ? 'AS' : letterCount === 3 ? 'ASM' : null as never, '1-684', '🇦🇸'],
      'Andorra': [letterCount === 2 ? 'AD' : letterCount === 3 ? 'AND' : null as never, '376', '🇦🇩'],
      'Angola': [letterCount === 2 ? 'AO' : letterCount === 3 ? 'AGO' : null as never, '244', '🇦🇴'],
      'Anguilla': [letterCount === 2 ? 'AI' : letterCount === 3 ? 'AIA' : null as never, '1-264', '🇦🇮'],
      'Antarctica': [letterCount === 2 ? 'AQ' : letterCount === 3 ? 'ATA' : null as never, '672', '🇦🇶'],
      'Antigua and Barbuda': [letterCount === 2 ? 'AG' : letterCount === 3 ? 'ATG' : null as never, '1-268', '🇦🇬'],
      'Argentina': [letterCount === 2 ? 'AR' : letterCount === 3 ? 'ARG' : null as never, '54', '🇦🇷'],
      'Armenia': [letterCount === 2 ? 'AM' : letterCount === 3 ? 'ARM' : null as never, '374', '🇦🇲'],
      'Aruba': [letterCount === 2 ? 'AW' : letterCount === 3 ? 'ABW' : null as never, '297', '🇦🇼'],
      'Australia': [letterCount === 2 ? 'AU' : letterCount === 3 ? 'AUS' : null as never, '61', '🇦🇺'],
      'Austria': [letterCount === 2 ? 'AT' : letterCount === 3 ? 'AUT' : null as never, '43', '🇦🇹'],
      'Azerbaijan': [letterCount === 2 ? 'AZ' : letterCount === 3 ? 'AZE' : null as never, '994', '🇦🇿'],
      'Bahamas': [letterCount === 2 ? 'BS' : letterCount === 3 ? 'BHS' : null as never, '1-242', '🇧🇸'],
      'Bahrain': [letterCount === 2 ? 'BH' : letterCount === 3 ? 'BHR' : null as never, '973', '🇧🇭'],
      'Bangladesh': [letterCount === 2 ? 'BD' : letterCount === 3 ? 'BGD' : null as never, '880', '🇧🇩'],
      'Barbados': [letterCount === 2 ? 'BB' : letterCount === 3 ? 'BRB' : null as never, '1-246', '🇧🇧'],
      'Belarus': [letterCount === 2 ? 'BY' : letterCount === 3 ? 'BLR' : null as never, '375', '🇧🇾'],
      'Belgium': [letterCount === 2 ? 'BE' : letterCount === 3 ? 'BEL' : null as never, '32', '🇧🇪'],
      'Belize': [letterCount === 2 ? 'BZ' : letterCount === 3 ? 'BLZ' : null as never, '501', '🇧🇿'],
      'Benin': [letterCount === 2 ? 'BJ' : letterCount === 3 ? 'BEN' : null as never, '229', '🇧🇯'],
      'Bermuda': [letterCount === 2 ? 'BM' : letterCount === 3 ? 'BMU' : null as never, '1-441', '🇧🇲'],
      'Bhutan': [letterCount === 2 ? 'BT' : letterCount === 3 ? 'BTN' : null as never, '975', '🇧🇹'],
      'Bolivia': [letterCount === 2 ? 'BO' : letterCount === 3 ? 'BOL' : null as never, '591', '🇧🇴'],
      'Bosnia and Herzegovina': [letterCount === 2 ? 'BA' : letterCount === 3 ? 'BIH' : null as never, '387', '🇧🇦'],
      'Botswana': [letterCount === 2 ? 'BW' : letterCount === 3 ? 'BWA' : null as never, '267', '🇧🇼'],
      'Brazil': [letterCount === 2 ? 'BR' : letterCount === 3 ? 'BRA' : null as never, '55', '🇧🇷'],
      'British Indian Ocean Territory': [letterCount === 2 ? 'IO' : letterCount === 3 ? 'IOT' : null as never, '246', '🇮🇴'],
      'British Virgin Islands': [letterCount === 2 ? 'VG' : letterCount === 3 ? 'VGB' : null as never, '1-284', '🇻🇬'],
      'Brunei': [letterCount === 2 ? 'BN' : letterCount === 3 ? 'BRN' : null as never, '673', '🇧🇳'],
      'Bulgaria': [letterCount === 2 ? 'BG' : letterCount === 3 ? 'BGR' : null as never, '359', '🇧🇬'],
      'Burkina Faso': [letterCount === 2 ? 'BF' : letterCount === 3 ? 'BFA' : null as never, '226', '🇧🇫'],
      'Burundi': [letterCount === 2 ? 'BI' : letterCount === 3 ? 'BDI' : null as never, '257', '🇧🇮'],
      'Cambodia': [letterCount === 2 ? 'KH' : letterCount === 3 ? 'KHM' : null as never, '855', '🇰🇭'],
      'Cameroon': [letterCount === 2 ? 'CM' : letterCount === 3 ? 'CMR' : null as never, '237', '🇨🇲'],
      'Canada': [letterCount === 2 ? 'CA' : letterCount === 3 ? 'CAN' : null as never, '1', '🇨🇦'],
      'Cape Verde': [letterCount === 2 ? 'CV' : letterCount === 3 ? 'CPV' : null as never, '238', '🇨🇻'],
      'Cayman Islands': [letterCount === 2 ? 'KY' : letterCount === 3 ? 'CYM' : null as never, '1-345', '🇰🇾'],
      'Central African Republic': [letterCount === 2 ? 'CF' : letterCount === 3 ? 'CAF' : null as never, '236', '🇨🇫'],
      'Chad': [letterCount === 2 ? 'TD' : letterCount === 3 ? 'TCD' : null as never, '235', '🇹🇩'],
      'Chile': [letterCount === 2 ? 'CL' : letterCount === 3 ? 'CHL' : null as never, '56', '🇨🇱'],
      'China': [letterCount === 2 ? 'CN' : letterCount === 3 ? 'CHN' : null as never, '86', '🇨🇳'],
      'Christmas Island': [letterCount === 2 ? 'CX' : letterCount === 3 ? 'CXR' : null as never, '61', '🇨🇽'],
      'Cocos Islands': [letterCount === 2 ? 'CC' : letterCount === 3 ? 'CCK' : null as never, '61', '🇨🇨'],
      'Colombia': [letterCount === 2 ? 'CO' : letterCount === 3 ? 'COL' : null as never, '57', '🇨🇴'],
      'Comoros': [letterCount === 2 ? 'KM' : letterCount === 3 ? 'COM' : null as never, '269', '🇰🇲'],
      'Cook Islands': [letterCount === 2 ? 'CK' : letterCount === 3 ? 'COK' : null as never, '682', '🇨🇰'],
      'Costa Rica': [letterCount === 2 ? 'CR' : letterCount === 3 ? 'CRI' : null as never, '506', '🇨🇷'],
      'Croatia': [letterCount === 2 ? 'HR' : letterCount === 3 ? 'HRV' : null as never, '385', '🇭🇷'],
      'Cuba': [letterCount === 2 ? 'CU' : letterCount === 3 ? 'CUB' : null as never, '53', '🇨🇺'],
      'Curacao': [letterCount === 2 ? 'CW' : letterCount === 3 ? 'CUW' : null as never, '599', '🇨🇼'],
      'Cyprus': [letterCount === 2 ? 'CY' : letterCount === 3 ? 'CYP' : null as never, '357', '🇨🇾'],
      'Czech Republic': [letterCount === 2 ? 'CZ' : letterCount === 3 ? 'CZE' : null as never, '420', '🇨🇿'],
      'Democratic Republic of the Congo': [letterCount === 2 ? 'CD' : letterCount === 3 ? 'COD' : null as never, '243', '🇨🇩'],
      'Denmark': [letterCount === 2 ? 'DK' : letterCount === 3 ? 'DNK' : null as never, '45', '🇩🇰'],
      'Djibouti': [letterCount === 2 ? 'DJ' : letterCount === 3 ? 'DJI' : null as never, '253', '🇩🇯'],
      'Dominica': [letterCount === 2 ? 'DM' : letterCount === 3 ? 'DMA' : null as never, '1-767', '🇩🇲'],
      'Dominican Republic': [letterCount === 2 ? 'DO' : letterCount === 3 ? 'DOM' : null as never, '1-809, 1-829, 1-849', '🇩🇴'],
      'East Timor': [letterCount === 2 ? 'TL' : letterCount === 3 ? 'TLS' : null as never, '670', '🇹🇱'],
      'Ecuador': [letterCount === 2 ? 'EC' : letterCount === 3 ? 'ECU' : null as never, '593', '🇪🇨'],
      'Egypt': [letterCount === 2 ? 'EG' : letterCount === 3 ? 'EGY' : null as never, '20', '🇪🇬'],
      'El Salvador': [letterCount === 2 ? 'SV' : letterCount === 3 ? 'SLV' : null as never, '503', '🇸🇻'],
      'Equatorial Guinea': [letterCount === 2 ? 'GQ' : letterCount === 3 ? 'GNQ' : null as never, '240', '🇬🇶'],
      'Eritrea': [letterCount === 2 ? 'ER' : letterCount === 3 ? 'ERI' : null as never, '291', '🇪🇷'],
      'Estonia': [letterCount === 2 ? 'EE' : letterCount === 3 ? 'EST' : null as never, '372', '🇪🇪'],
      'Ethiopia': [letterCount === 2 ? 'ET' : letterCount === 3 ? 'ETH' : null as never, '251', '🇪🇹'],
      'Falkland Islands': [letterCount === 2 ? 'FK' : letterCount === 3 ? 'FLK' : null as never, '500', '🇫🇰'],
      'Faroe Islands': [letterCount === 2 ? 'FO' : letterCount === 3 ? 'FRO' : null as never, '298', '🇫🇴'],
      'Fiji': [letterCount === 2 ? 'FJ' : letterCount === 3 ? 'FJI' : null as never, '679', '🇫🇯'],
      'Finland': [letterCount === 2 ? 'FI' : letterCount === 3 ? 'FIN' : null as never, '358', '🇫🇮'],
      'France': [letterCount === 2 ? 'FR' : letterCount === 3 ? 'FRA' : null as never, '33', '🇫🇷'],
      'French Polynesia': [letterCount === 2 ? 'PF' : letterCount === 3 ? 'PYF' : null as never, '689', '🇵🇫'],
      'Gabon': [letterCount === 2 ? 'GA' : letterCount === 3 ? 'GAB' : null as never, '241', '🇬🇦'],
      'Gambia': [letterCount === 2 ? 'GM' : letterCount === 3 ? 'GMB' : null as never, '220', '🇬🇲'],
      'Georgia': [letterCount === 2 ? 'GE' : letterCount === 3 ? 'GEO' : null as never, '995', '🇬🇪'],
      'Germany': [letterCount === 2 ? 'DE' : letterCount === 3 ? 'DEU' : null as never, '49', '🇩🇪'],
      'Ghana': [letterCount === 2 ? 'GH' : letterCount === 3 ? 'GHA' : null as never, '233', '🇬🇭'],
      'Gibraltar': [letterCount === 2 ? 'GI' : letterCount === 3 ? 'GIB' : null as never, '350', '🇬🇮'],
      'Greece': [letterCount === 2 ? 'GR' : letterCount === 3 ? 'GRC' : null as never, '30', '🇬🇷'],
      'Greenland': [letterCount === 2 ? 'GL' : letterCount === 3 ? 'GRL' : null as never, '299', '🇬🇱'],
      'Grenada': [letterCount === 2 ? 'GD' : letterCount === 3 ? 'GRD' : null as never, '1-473', '🇬🇩'],
      'Guam': [letterCount === 2 ? 'GU' : letterCount === 3 ? 'GUM' : null as never, '1-671', '🇬🇺'],
      'Guatemala': [letterCount === 2 ? 'GT' : letterCount === 3 ? 'GTM' : null as never, '502', '🇬🇹'],
      'Guernsey': [letterCount === 2 ? 'GG' : letterCount === 3 ? 'GGY' : null as never, '44-1481', '🇬🇬'],
      'Guinea': [letterCount === 2 ? 'GN' : letterCount === 3 ? 'GIN' : null as never, '224', '🇬🇳'],
      'Guinea-Bissau': [letterCount === 2 ? 'GW' : letterCount === 3 ? 'GNB' : null as never, '245', '🇬🇼'],
      'Guyana': [letterCount === 2 ? 'GY' : letterCount === 3 ? 'GUY' : null as never, '592', '🇬🇾'],
      'Haiti': [letterCount === 2 ? 'HT' : letterCount === 3 ? 'HTI' : null as never, '509', '🇭🇹'],
      'Honduras': [letterCount === 2 ? 'HN' : letterCount === 3 ? 'HND' : null as never, '504', '🇭🇳'],
      'Hong Kong': [letterCount === 2 ? 'HK' : letterCount === 3 ? 'HKG' : null as never, '852', '🇭🇰'],
      'Hungary': [letterCount === 2 ? 'HU' : letterCount === 3 ? 'HUN' : null as never, '36', '🇭🇺'],
      'Iceland': [letterCount === 2 ? 'IS' : letterCount === 3 ? 'ISL' : null as never, '354', '🇮🇸'],
      'India': [letterCount === 2 ? 'IN' : letterCount === 3 ? 'IND' : null as never, '91', '🇮🇳'],
      'Indonesia': [letterCount === 2 ? 'ID' : letterCount === 3 ? 'IDN' : null as never, '62', '🇮🇩'],
      'Iran': [letterCount === 2 ? 'IR' : letterCount === 3 ? 'IRN' : null as never, '98', '🇮🇷'],
      'Iraq': [letterCount === 2 ? 'IQ' : letterCount === 3 ? 'IRQ' : null as never, '964', '🇮🇶'],
      'Ireland': [letterCount === 2 ? 'IE' : letterCount === 3 ? 'IRL' : null as never, '353', '🇮🇪'],
      'Isle of Man': [letterCount === 2 ? 'IM' : letterCount === 3 ? 'IMN' : null as never, '44-1624', '🇮🇲'],
      'Israel': [letterCount === 2 ? 'IL' : letterCount === 3 ? 'ISR' : null as never, '972', '🇮🇱'],
      'Italy': [letterCount === 2 ? 'IT' : letterCount === 3 ? 'ITA' : null as never, '39', '🇮🇹'],
      'Ivory Coast': [letterCount === 2 ? 'CI' : letterCount === 3 ? 'CIV' : null as never, '225', '🇨🇮'],
      'Jamaica': [letterCount === 2 ? 'JM' : letterCount === 3 ? 'JAM' : null as never, '1-876', '🇯🇲'],
      'Japan': [letterCount === 2 ? 'JP' : letterCount === 3 ? 'JPN' : null as never, '81', '🇯🇵'],
      'Jersey': [letterCount === 2 ? 'JE' : letterCount === 3 ? 'JEY' : null as never, '44-1534', '🇯🇪'],
      'Jordan': [letterCount === 2 ? 'JO' : letterCount === 3 ? 'JOR' : null as never, '962', '🇯🇴'],
      'Kazakhstan': [letterCount === 2 ? 'KZ' : letterCount === 3 ? 'KAZ' : null as never, '7', '🇰🇿'],
      'Kenya': [letterCount === 2 ? 'KE' : letterCount === 3 ? 'KEN' : null as never, '254', '🇰🇪'],
      'Kiribati': [letterCount === 2 ? 'KI' : letterCount === 3 ? 'KIR' : null as never, '686', '🇰🇮'],
      'Kosovo': [letterCount === 2 ? 'XK' : letterCount === 3 ? 'XKX' : null as never, '383', '🇽🇰'],
      'Kuwait': [letterCount === 2 ? 'KW' : letterCount === 3 ? 'KWT' : null as never, '965', '🇰🇼'],
      'Kyrgyzstan': [letterCount === 2 ? 'KG' : letterCount === 3 ? 'KGZ' : null as never, '996', '🇰🇬'],
      'Laos': [letterCount === 2 ? 'LA' : letterCount === 3 ? 'LAO' : null as never, '856', '🇱🇦'],
      'Latvia': [letterCount === 2 ? 'LV' : letterCount === 3 ? 'LVA' : null as never, '371', '🇱🇻'],
      'Lebanon': [letterCount === 2 ? 'LB' : letterCount === 3 ? 'LBN' : null as never, '961', '🇱🇧'],
      'Lesotho': [letterCount === 2 ? 'LS' : letterCount === 3 ? 'LSO' : null as never, '266', '🇱🇸'],
      'Liberia': [letterCount === 2 ? 'LR' : letterCount === 3 ? 'LBR' : null as never, '231', '🇱🇷'],
      'Libya': [letterCount === 2 ? 'LY' : letterCount === 3 ? 'LBY' : null as never, '218', '🇱🇾'],
      'Liechtenstein': [letterCount === 2 ? 'LI' : letterCount === 3 ? 'LIE' : null as never, '423', '🇱🇮'],
      'Lithuania': [letterCount === 2 ? 'LT' : letterCount === 3 ? 'LTU' : null as never, '370', '🇱🇹'],
      'Luxembourg': [letterCount === 2 ? 'LU' : letterCount === 3 ? 'LUX' : null as never, '352', '🇱🇺'],
      'Macau': [letterCount === 2 ? 'MO' : letterCount === 3 ? 'MAC' : null as never, '853', '🇲🇴'],
      'Macedonia': [letterCount === 2 ? 'MK' : letterCount === 3 ? 'MKD' : null as never, '389', '🇲🇰'],
      'Madagascar': [letterCount === 2 ? 'MG' : letterCount === 3 ? 'MDG' : null as never, '261', '🇲🇬'],
      'Malawi': [letterCount === 2 ? 'MW' : letterCount === 3 ? 'MWI' : null as never, '265', '🇲🇼'],
      'Malaysia': [letterCount === 2 ? 'MY' : letterCount === 3 ? 'MYS' : null as never, '60', '🇲🇾'],
      'Maldives': [letterCount === 2 ? 'MV' : letterCount === 3 ? 'MDV' : null as never, '960', '🇲🇻'],
      'Mali': [letterCount === 2 ? 'ML' : letterCount === 3 ? 'MLI' : null as never, '223', '🇲🇱'],
      'Malta': [letterCount === 2 ? 'MT' : letterCount === 3 ? 'MLT' : null as never, '356', '🇲🇹'],
      'Marshall Islands': [letterCount === 2 ? 'MH' : letterCount === 3 ? 'MHL' : null as never, '692', '🇲🇭'],
      'Mauritania': [letterCount === 2 ? 'MR' : letterCount === 3 ? 'MRT' : null as never, '222', '🇲🇷'],
      'Mauritius': [letterCount === 2 ? 'MU' : letterCount === 3 ? 'MUS' : null as never, '230', '🇲🇺'],
      'Mayotte': [letterCount === 2 ? 'YT' : letterCount === 3 ? 'MYT' : null as never, '262', '🇾🇹'],
      'Mexico': [letterCount === 2 ? 'MX' : letterCount === 3 ? 'MEX' : null as never, '52', '🇲🇽'],
      'Micronesia': [letterCount === 2 ? 'FM' : letterCount === 3 ? 'FSM' : null as never, '691', '🇫🇲'],
      'Moldova': [letterCount === 2 ? 'MD' : letterCount === 3 ? 'MDA' : null as never, '373', '🇲🇩'],
      'Monaco': [letterCount === 2 ? 'MC' : letterCount === 3 ? 'MCO' : null as never, '377', '🇲🇨'],
      'Mongolia': [letterCount === 2 ? 'MN' : letterCount === 3 ? 'MNG' : null as never, '976', '🇲🇳'],
      'Montenegro': [letterCount === 2 ? 'ME' : letterCount === 3 ? 'MNE' : null as never, '382', '🇲🇪'],
      'Montserrat': [letterCount === 2 ? 'MS' : letterCount === 3 ? 'MSR' : null as never, '1-664', '🇲🇸'],
      'Morocco': [letterCount === 2 ? 'MA' : letterCount === 3 ? 'MAR' : null as never, '212', '🇲🇦'],
      'Mozambique': [letterCount === 2 ? 'MZ' : letterCount === 3 ? 'MOZ' : null as never, '258', '🇲🇿'],
      'Myanmar': [letterCount === 2 ? 'MM' : letterCount === 3 ? 'MMR' : null as never, '95', '🇲🇲'],
      'Namibia': [letterCount === 2 ? 'NA' : letterCount === 3 ? 'NAM' : null as never, '264', '🇳🇦'],
      'Nauru': [letterCount === 2 ? 'NR' : letterCount === 3 ? 'NRU' : null as never, '674', '🇳🇷'],
      'Nepal': [letterCount === 2 ? 'NP' : letterCount === 3 ? 'NPL' : null as never, '977', '🇳🇵'],
      'Netherlands': [letterCount === 2 ? 'NL' : letterCount === 3 ? 'NLD' : null as never, '31', '🇳🇱'],
      'Netherlands Antilles': [letterCount === 2 ? 'AN' : letterCount === 3 ? 'ANT' : null as never, '599', '🇧🇶'],
      'New Caledonia': [letterCount === 2 ? 'NC' : letterCount === 3 ? 'NCL' : null as never, '687', '🇳🇨'],
      'New Zealand': [letterCount === 2 ? 'NZ' : letterCount === 3 ? 'NZL' : null as never, '64', '🇳🇿'],
      'Nicaragua': [letterCount === 2 ? 'NI' : letterCount === 3 ? 'NIC' : null as never, '505', '🇳🇮'],
      'Niger': [letterCount === 2 ? 'NE' : letterCount === 3 ? 'NER' : null as never, '227', '🇳🇪'],
      'Nigeria': [letterCount === 2 ? 'NG' : letterCount === 3 ? 'NGA' : null as never, '234', '🇳🇬'],
      'Niue': [letterCount === 2 ? 'NU' : letterCount === 3 ? 'NIU' : null as never, '683', '🇳🇺'],
      'North Korea': [letterCount === 2 ? 'KP' : letterCount === 3 ? 'PRK' : null as never, '850', '🇰🇵'],
      'Northern Mariana Islands': [letterCount === 2 ? 'MP' : letterCount === 3 ? 'MNP' : null as never, '1-670', '🇲🇵'],
      'Norway': [letterCount === 2 ? 'NO' : letterCount === 3 ? 'NOR' : null as never, '47', '🇳🇴'],
      'Oman': [letterCount === 2 ? 'OM' : letterCount === 3 ? 'OMN' : null as never, '968', '🇴🇲'],
      'Pakistan': [letterCount === 2 ? 'PK' : letterCount === 3 ? 'PAK' : null as never, '92', '🇵🇰'],
      'Palau': [letterCount === 2 ? 'PW' : letterCount === 3 ? 'PLW' : null as never, '680', '🇵🇼'],
      'Palestine': [letterCount === 2 ? 'PS' : letterCount === 3 ? 'PSE' : null as never, '970', '🇵🇸'],
      'Panama': [letterCount === 2 ? 'PA' : letterCount === 3 ? 'PAN' : null as never, '507', '🇵🇦'],
      'Papua New Guinea': [letterCount === 2 ? 'PG' : letterCount === 3 ? 'PNG' : null as never, '675', '🇵🇬'],
      'Paraguay': [letterCount === 2 ? 'PY' : letterCount === 3 ? 'PRY' : null as never, '595', '🇵🇾'],
      'Peru': [letterCount === 2 ? 'PE' : letterCount === 3 ? 'PER' : null as never, '51', '🇵🇪'],
      'Philippines': [letterCount === 2 ? 'PH' : letterCount === 3 ? 'PHL' : null as never, '63', '🇵🇭'],
      'Pitcairn': [letterCount === 2 ? 'PN' : letterCount === 3 ? 'PCN' : null as never, '64', '🇵🇳'],
      'Poland': [letterCount === 2 ? 'PL' : letterCount === 3 ? 'POL' : null as never, '48', '🇵🇱'],
      'Portugal': [letterCount === 2 ? 'PT' : letterCount === 3 ? 'PRT' : null as never, '351', '🇵🇹'],
      'Puerto Rico': [letterCount === 2 ? 'PR' : letterCount === 3 ? 'PRI' : null as never, '1-787, 1-939', '🇵🇷'],
      'Qatar': [letterCount === 2 ? 'QA' : letterCount === 3 ? 'QAT' : null as never, '974', '🇶🇦'],
      'Republic of the Congo': [letterCount === 2 ? 'CG' : letterCount === 3 ? 'COG' : null as never, '242', '🇨🇬'],
      'Reunion': [letterCount === 2 ? 'RE' : letterCount === 3 ? 'REU' : null as never, '262', '🇷🇪'],
      'Romania': [letterCount === 2 ? 'RO' : letterCount === 3 ? 'ROU' : null as never, '40', '🇷🇴'],
      'Russia': [letterCount === 2 ? 'RU' : letterCount === 3 ? 'RUS' : null as never, '7', '🇷🇺'],
      'Rwanda': [letterCount === 2 ? 'RW' : letterCount === 3 ? 'RWA' : null as never, '250', '🇷🇼'],
      'Saint Barthelemy': [letterCount === 2 ? 'BL' : letterCount === 3 ? 'BLM' : null as never, '590', '🇧🇱'],
      'Saint Helena': [letterCount === 2 ? 'SH' : letterCount === 3 ? 'SHN' : null as never, '290', '🇸🇭'],
      'Saint Kitts and Nevis': [letterCount === 2 ? 'KN' : letterCount === 3 ? 'KNA' : null as never, '1-869', '🇰🇳'],
      'Saint Lucia': [letterCount === 2 ? 'LC' : letterCount === 3 ? 'LCA' : null as never, '1-758', '🇱🇨'],
      'Saint Martin': [letterCount === 2 ? 'MF' : letterCount === 3 ? 'MAF' : null as never, '590', '🇲🇫'],
      'Saint Pierre and Miquelon': [letterCount === 2 ? 'PM' : letterCount === 3 ? 'SPM' : null as never, '508', '🇵🇲'],
      'Saint Vincent and the Grenadines': [letterCount === 2 ? 'VC' : letterCount === 3 ? 'VCT' : null as never, '1-784', '🇻🇨'],
      'Samoa': [letterCount === 2 ? 'WS' : letterCount === 3 ? 'WSM' : null as never, '685', '🇼🇸'],
      'San Marino': [letterCount === 2 ? 'SM' : letterCount === 3 ? 'SMR' : null as never, '378', '🇸🇲'],
      'Sao Tome and Principe': [letterCount === 2 ? 'ST' : letterCount === 3 ? 'STP' : null as never, '239', '🇸🇹'],
      'Saudi Arabia': [letterCount === 2 ? 'SA' : letterCount === 3 ? 'SAU' : null as never, '966', '🇸🇦'],
      'Senegal': [letterCount === 2 ? 'SN' : letterCount === 3 ? 'SEN' : null as never, '221', '🇸🇳'],
      'Serbia': [letterCount === 2 ? 'RS' : letterCount === 3 ? 'SRB' : null as never, '381', '🇷🇸'],
      'Seychelles': [letterCount === 2 ? 'SC' : letterCount === 3 ? 'SYC' : null as never, '248', '🇸🇨'],
      'Sierra Leone': [letterCount === 2 ? 'SL' : letterCount === 3 ? 'SLE' : null as never, '232', '🇸🇱'],
      'Singapore': [letterCount === 2 ? 'SG' : letterCount === 3 ? 'SGP' : null as never, '65', '🇸🇬'],
      'Sint Maarten': [letterCount === 2 ? 'SX' : letterCount === 3 ? 'SXM' : null as never, '1-721', '🇸🇽'],
      'Slovakia': [letterCount === 2 ? 'SK' : letterCount === 3 ? 'SVK' : null as never, '421', '🇸🇰'],
      'Slovenia': [letterCount === 2 ? 'SI' : letterCount === 3 ? 'SVN' : null as never, '386', '🇸🇮'],
      'Solomon Islands': [letterCount === 2 ? 'SB' : letterCount === 3 ? 'SLB' : null as never, '677', '🇸🇧'],
      'Somalia': [letterCount === 2 ? 'SO' : letterCount === 3 ? 'SOM' : null as never, '252', '🇸🇴'],
      'South Africa': [letterCount === 2 ? 'ZA' : letterCount === 3 ? 'ZAF' : null as never, '27', '🇿🇦'],
      'South Korea': [letterCount === 2 ? 'KR' : letterCount === 3 ? 'KOR' : null as never, '82', '🇰🇷'],
      'South Sudan': [letterCount === 2 ? 'SS' : letterCount === 3 ? 'SSD' : null as never, '211', '🇸🇸'],
      'Spain': [letterCount === 2 ? 'ES' : letterCount === 3 ? 'ESP' : null as never, '34', '🇪🇸'],
      'Sri Lanka': [letterCount === 2 ? 'LK' : letterCount === 3 ? 'LKA' : null as never, '94', '🇱🇰'],
      'Sudan': [letterCount === 2 ? 'SD' : letterCount === 3 ? 'SDN' : null as never, '249', '🇸🇩'],
      'Suriname': [letterCount === 2 ? 'SR' : letterCount === 3 ? 'SUR' : null as never, '597', '🇸🇷'],
      'Svalbard and Jan Mayen': [letterCount === 2 ? 'SJ' : letterCount === 3 ? 'SJM' : null as never, '47', '🇸🇯'],
      'Swaziland': [letterCount === 2 ? 'SZ' : letterCount === 3 ? 'SWZ' : null as never, '268', '🇸🇿'],
      'Sweden': [letterCount === 2 ? 'SE' : letterCount === 3 ? 'SWE' : null as never, '46', '🇸🇪'],
      'Switzerland': [letterCount === 2 ? 'CH' : letterCount === 3 ? 'CHE' : null as never, '41', '🇨🇭'],
      'Syria': [letterCount === 2 ? 'SY' : letterCount === 3 ? 'SYR' : null as never, '963', '🇸🇾'],
      'Taiwan': [letterCount === 2 ? 'TW' : letterCount === 3 ? 'TWN' : null as never, '886', '🇹🇼'],
      'Tajikistan': [letterCount === 2 ? 'TJ' : letterCount === 3 ? 'TJK' : null as never, '992', '🇹🇯'],
      'Tanzania': [letterCount === 2 ? 'TZ' : letterCount === 3 ? 'TZA' : null as never, '255', '🇹🇿'],
      'Thailand': [letterCount === 2 ? 'TH' : letterCount === 3 ? 'THA' : null as never, '66', '🇹🇭'],
      'Togo': [letterCount === 2 ? 'TG' : letterCount === 3 ? 'TGO' : null as never, '228', '🇹🇬'],
      'Tokelau': [letterCount === 2 ? 'TK' : letterCount === 3 ? 'TKL' : null as never, '690', '🇹🇰'],
      'Tonga': [letterCount === 2 ? 'TO' : letterCount === 3 ? 'TON' : null as never, '676', '🇹🇴'],
      'Trinidad and Tobago': [letterCount === 2 ? 'TT' : letterCount === 3 ? 'TTO' : null as never, '1-868', '🇹🇹'],
      'Tunisia': [letterCount === 2 ? 'TN' : letterCount === 3 ? 'TUN' : null as never, '216', '🇹🇳'],
      'Turkey': [letterCount === 2 ? 'TR' : letterCount === 3 ? 'TUR' : null as never, '90', '🇹🇷'],
      'Turkmenistan': [letterCount === 2 ? 'TM' : letterCount === 3 ? 'TKM' : null as never, '993', '🇹🇲'],
      'Turks and Caicos Islands': [letterCount === 2 ? 'TC' : letterCount === 3 ? 'TCA' : null as never, '1-649', '🇹🇨'],
      'Tuvalu': [letterCount === 2 ? 'TV' : letterCount === 3 ? 'TUV' : null as never, '688', '🇹🇻'],
      'U.S. Virgin Islands': [letterCount === 2 ? 'VI' : letterCount === 3 ? 'VIR' : null as never, '1-340', '🇻🇮'],
      'Uganda': [letterCount === 2 ? 'UG' : letterCount === 3 ? 'UGA' : null as never, '256', '🇺🇬'],
      'Ukraine': [letterCount === 2 ? 'UA' : letterCount === 3 ? 'UKR' : null as never, '380', '🇺🇦'],
      'United Arab Emirates': [letterCount === 2 ? 'AE' : letterCount === 3 ? 'ARE' : null as never, '971', '🇦🇪'],
      'United Kingdom': [letterCount === 2 ? 'GB' : letterCount === 3 ? 'GBR' : null as never, '44', '🇬🇧'],
      'United States': [letterCount === 2 ? 'US' : letterCount === 3 ? 'USA' : null as never, '1', '🇺🇸'],
      'Uruguay': [letterCount === 2 ? 'UY' : letterCount === 3 ? 'URY' : null as never, '598', '🇺🇾'],
      'Uzbekistan': [letterCount === 2 ? 'UZ' : letterCount === 3 ? 'UZB' : null as never, '998', '🇺🇿'],
      'Vanuatu': [letterCount === 2 ? 'VU' : letterCount === 3 ? 'VUT' : null as never, '678', '🇻🇺'],
      'Vatican': [letterCount === 2 ? 'VA' : letterCount === 3 ? 'VAT' : null as never, '379', '🇻🇦'],
      'Venezuela': [letterCount === 2 ? 'VE' : letterCount === 3 ? 'VEN' : null as never, '58', '🇻🇪'],
      'Vietnam': [letterCount === 2 ? 'VN' : letterCount === 3 ? 'VNM' : null as never, '84', '🇻🇳'],
      'Wallis and Futuna': [letterCount === 2 ? 'WF' : letterCount === 3 ? 'WLF' : null as never, '681', '🇼🇫'],
      'Western Sahara': [letterCount === 2 ? 'EH' : letterCount === 3 ? 'ESH' : null as never, '212', '🇪🇭'],
      'Yemen': [letterCount === 2 ? 'YE' : letterCount === 3 ? 'YEM' : null as never, '967', '🇾🇪'],
      'Zambia': [letterCount === 2 ? 'ZM' : letterCount === 3 ? 'ZMB' : null as never, '260', '🇿🇲'],
      'Zimbabwe': [letterCount === 2 ? 'ZW' : letterCount === 3 ? 'ZWE' : null as never, '263', '🇿🇼']
    } as {
      'Ascension Island': [N extends 2 ? 'AC' : N extends 3 ? 'ASC' : never, null, '🇦🇨'];
      '\u00C5land Islands': [N extends 2 ? 'AX' : N extends 3 ? 'ALA' : never, null, '🇦🇽'];
      'Caribbean Netherlands': [N extends 2 ? 'BQ' : N extends 3 ? 'BES' : never, null, '🇧🇶'];
      'Bouvet Island': [N extends 2 ? 'BV' : N extends 3 ? 'BVT' : never, null, '🇧🇻'];
      'Clipperton Island': [N extends 2 ? 'CP' : N extends 3 ? 'CP' : never, null, '🇨🇵'];
      'Diego Garcia': [N extends 2 ? 'DG' : N extends 3 ? 'DG' : never, null, '🇩🇬'];
      'Ceuta and Melilla': [N extends 2 ? 'EA' : N extends 3 ? 'EA' : never, null, '🇪🇦'];
      'European Union': [N extends 2 ? 'EU' : N extends 3 ? 'EU' : never, null, '🇪🇺'];
      'French Guiana': [N extends 2 ? 'GF' : N extends 3 ? 'GUF' : never, null, '🇬🇫'];
      'Guadeloupe': [N extends 2 ? 'GP' : N extends 3 ? 'GLP' : never, null, '🇬🇵'];
      'South Georgia and the South Sandwich Islands': [N extends 2 ? 'GS' : N extends 3 ? 'SGS' : never, null, '🇬🇸'];
      'Heard Island and McDonald Islands': [N extends 2 ? 'HM' : N extends 3 ? 'HMD' : never, null, '🇭🇲'];
      'Canary Islands': [N extends 2 ? 'IC' : N extends 3 ? 'IC' : never, null, '🇮🇨'];
      'Martinique': [N extends 2 ? 'MQ' : N extends 3 ? 'MTQ' : never, null, '🇲🇶'];
      'Norfolk Island': [N extends 2 ? 'NF' : N extends 3 ? 'NFK' : never, null, '🇳🇫'];
      'Tristan da Cunha': [N extends 2 ? 'TA' : N extends 3 ? 'TA' : never, null, '🇹🇦'];
      'French Southern and Antarctic Lands': [N extends 2 ? 'TF' : N extends 3 ? 'ATF' : never, null, '🇹🇫'];
      'United States Minor Outlying Islands': [N extends 2 ? 'UM' : N extends 3 ? 'UMI' : never, null, '🇺🇲'];
      'United Nations': [N extends 2 ? 'UN' : N extends 3 ? 'UN' : never, null, '🇺🇳'];
      'Afghanistan': [N extends 2 ? 'AF' : N extends 3 ? 'AFG' : never, '93', '🇦🇫'];
      'Albania': [N extends 2 ? 'AL' : N extends 3 ? 'ALB' : never, '355', '🇦🇱'];
      'Algeria': [N extends 2 ? 'DZ' : N extends 3 ? 'DZA' : never, '213', '🇩🇿'];
      'American Samoa': [N extends 2 ? 'AS' : N extends 3 ? 'ASM' : never, '1-684', '🇦🇸'];
      'Andorra': [N extends 2 ? 'AD' : N extends 3 ? 'AND' : never, '376', '🇦🇩'];
      'Angola': [N extends 2 ? 'AO' : N extends 3 ? 'AGO' : never, '244', '🇦🇴'];
      'Anguilla': [N extends 2 ? 'AI' : N extends 3 ? 'AIA' : never, '1-264', '🇦🇮'];
      'Antarctica': [N extends 2 ? 'AQ' : N extends 3 ? 'ATA' : never, '672', '🇦🇶'];
      'Antigua and Barbuda': [N extends 2 ? 'AG' : N extends 3 ? 'ATG' : never, '1-268', '🇦🇬'];
      'Argentina': [N extends 2 ? 'AR' : N extends 3 ? 'ARG' : never, '54', '🇦🇷'];
      'Armenia': [N extends 2 ? 'AM' : N extends 3 ? 'ARM' : never, '374', '🇦🇲'];
      'Aruba': [N extends 2 ? 'AW' : N extends 3 ? 'ABW' : never, '297', '🇦🇼'];
      'Australia': [N extends 2 ? 'AU' : N extends 3 ? 'AUS' : never, '61', '🇦🇺'];
      'Austria': [N extends 2 ? 'AT' : N extends 3 ? 'AUT' : never, '43', '🇦🇹'];
      'Azerbaijan': [N extends 2 ? 'AZ' : N extends 3 ? 'AZE' : never, '994', '🇦🇿'];
      'Bahamas': [N extends 2 ? 'BS' : N extends 3 ? 'BHS' : never, '1-242', '🇧🇸'];
      'Bahrain': [N extends 2 ? 'BH' : N extends 3 ? 'BHR' : never, '973', '🇧🇭'];
      'Bangladesh': [N extends 2 ? 'BD' : N extends 3 ? 'BGD' : never, '880', '🇧🇩'];
      'Barbados': [N extends 2 ? 'BB' : N extends 3 ? 'BRB' : never, '1-246', '🇧🇧'];
      'Belarus': [N extends 2 ? 'BY' : N extends 3 ? 'BLR' : never, '375', '🇧🇾'];
      'Belgium': [N extends 2 ? 'BE' : N extends 3 ? 'BEL' : never, '32', '🇧🇪'];
      'Belize': [N extends 2 ? 'BZ' : N extends 3 ? 'BLZ' : never, '501', '🇧🇿'];
      'Benin': [N extends 2 ? 'BJ' : N extends 3 ? 'BEN' : never, '229', '🇧🇯'];
      'Bermuda': [N extends 2 ? 'BM' : N extends 3 ? 'BMU' : never, '1-441', '🇧🇲'];
      'Bhutan': [N extends 2 ? 'BT' : N extends 3 ? 'BTN' : never, '975', '🇧🇹'];
      'Bolivia': [N extends 2 ? 'BO' : N extends 3 ? 'BOL' : never, '591', '🇧🇴'];
      'Bosnia and Herzegovina': [N extends 2 ? 'BA' : N extends 3 ? 'BIH' : never, '387', '🇧🇦'];
      'Botswana': [N extends 2 ? 'BW' : N extends 3 ? 'BWA' : never, '267', '🇧🇼'];
      'Brazil': [N extends 2 ? 'BR' : N extends 3 ? 'BRA' : never, '55', '🇧🇷'];
      'British Indian Ocean Territory': [N extends 2 ? 'IO' : N extends 3 ? 'IOT' : never, '246', '🇮🇴'];
      'British Virgin Islands': [N extends 2 ? 'VG' : N extends 3 ? 'VGB' : never, '1-284', '🇻🇬'];
      'Brunei': [N extends 2 ? 'BN' : N extends 3 ? 'BRN' : never, '673', '🇧🇳'];
      'Bulgaria': [N extends 2 ? 'BG' : N extends 3 ? 'BGR' : never, '359', '🇧🇬'];
      'Burkina Faso': [N extends 2 ? 'BF' : N extends 3 ? 'BFA' : never, '226', '🇧🇫'];
      'Burundi': [N extends 2 ? 'BI' : N extends 3 ? 'BDI' : never, '257', '🇧🇮'];
      'Cambodia': [N extends 2 ? 'KH' : N extends 3 ? 'KHM' : never, '855', '🇰🇭'];
      'Cameroon': [N extends 2 ? 'CM' : N extends 3 ? 'CMR' : never, '237', '🇨🇲'];
      'Canada': [N extends 2 ? 'CA' : N extends 3 ? 'CAN' : never, '1', '🇨🇦'];
      'Cape Verde': [N extends 2 ? 'CV' : N extends 3 ? 'CPV' : never, '238', '🇨🇻'];
      'Cayman Islands': [N extends 2 ? 'KY' : N extends 3 ? 'CYM' : never, '1-345', '🇰🇾'];
      'Central African Republic': [N extends 2 ? 'CF' : N extends 3 ? 'CAF' : never, '236', '🇨🇫'];
      'Chad': [N extends 2 ? 'TD' : N extends 3 ? 'TCD' : never, '235', '🇹🇩'];
      'Chile': [N extends 2 ? 'CL' : N extends 3 ? 'CHL' : never, '56', '🇨🇱'];
      'China': [N extends 2 ? 'CN' : N extends 3 ? 'CHN' : never, '86', '🇨🇳'];
      'Christmas Island': [N extends 2 ? 'CX' : N extends 3 ? 'CXR' : never, '61', '🇨🇽'];
      'Cocos Islands': [N extends 2 ? 'CC' : N extends 3 ? 'CCK' : never, '61', '🇨🇨'];
      'Colombia': [N extends 2 ? 'CO' : N extends 3 ? 'COL' : never, '57', '🇨🇴'];
      'Comoros': [N extends 2 ? 'KM' : N extends 3 ? 'COM' : never, '269', '🇰🇲'];
      'Cook Islands': [N extends 2 ? 'CK' : N extends 3 ? 'COK' : never, '682', '🇨🇰'];
      'Costa Rica': [N extends 2 ? 'CR' : N extends 3 ? 'CRI' : never, '506', '🇨🇷'];
      'Croatia': [N extends 2 ? 'HR' : N extends 3 ? 'HRV' : never, '385', '🇭🇷'];
      'Cuba': [N extends 2 ? 'CU' : N extends 3 ? 'CUB' : never, '53', '🇨🇺'];
      'Curacao': [N extends 2 ? 'CW' : N extends 3 ? 'CUW' : never, '599', '🇨🇼'];
      'Cyprus': [N extends 2 ? 'CY' : N extends 3 ? 'CYP' : never, '357', '🇨🇾'];
      'Czech Republic': [N extends 2 ? 'CZ' : N extends 3 ? 'CZE' : never, '420', '🇨🇿'];
      'Democratic Republic of the Congo': [N extends 2 ? 'CD' : N extends 3 ? 'COD' : never, '243', '🇨🇩'];
      'Denmark': [N extends 2 ? 'DK' : N extends 3 ? 'DNK' : never, '45', '🇩🇰'];
      'Djibouti': [N extends 2 ? 'DJ' : N extends 3 ? 'DJI' : never, '253', '🇩🇯'];
      'Dominica': [N extends 2 ? 'DM' : N extends 3 ? 'DMA' : never, '1-767', '🇩🇲'];
      'Dominican Republic': [N extends 2 ? 'DO' : N extends 3 ? 'DOM' : never, '1-809, 1-829, 1-849', '🇩🇴'];
      'East Timor': [N extends 2 ? 'TL' : N extends 3 ? 'TLS' : never, '670', '🇹🇱'];
      'Ecuador': [N extends 2 ? 'EC' : N extends 3 ? 'ECU' : never, '593', '🇪🇨'];
      'Egypt': [N extends 2 ? 'EG' : N extends 3 ? 'EGY' : never, '20', '🇪🇬'];
      'El Salvador': [N extends 2 ? 'SV' : N extends 3 ? 'SLV' : never, '503', '🇸🇻'];
      'Equatorial Guinea': [N extends 2 ? 'GQ' : N extends 3 ? 'GNQ' : never, '240', '🇬🇶'];
      'Eritrea': [N extends 2 ? 'ER' : N extends 3 ? 'ERI' : never, '291', '🇪🇷'];
      'Estonia': [N extends 2 ? 'EE' : N extends 3 ? 'EST' : never, '372', '🇪🇪'];
      'Ethiopia': [N extends 2 ? 'ET' : N extends 3 ? 'ETH' : never, '251', '🇪🇹'];
      'Falkland Islands': [N extends 2 ? 'FK' : N extends 3 ? 'FLK' : never, '500', '🇫🇰'];
      'Faroe Islands': [N extends 2 ? 'FO' : N extends 3 ? 'FRO' : never, '298', '🇫🇴'];
      'Fiji': [N extends 2 ? 'FJ' : N extends 3 ? 'FJI' : never, '679', '🇫🇯'];
      'Finland': [N extends 2 ? 'FI' : N extends 3 ? 'FIN' : never, '358', '🇫🇮'];
      'France': [N extends 2 ? 'FR' : N extends 3 ? 'FRA' : never, '33', '🇫🇷'];
      'French Polynesia': [N extends 2 ? 'PF' : N extends 3 ? 'PYF' : never, '689', '🇵🇫'];
      'Gabon': [N extends 2 ? 'GA' : N extends 3 ? 'GAB' : never, '241', '🇬🇦'];
      'Gambia': [N extends 2 ? 'GM' : N extends 3 ? 'GMB' : never, '220', '🇬🇲'];
      'Georgia': [N extends 2 ? 'GE' : N extends 3 ? 'GEO' : never, '995', '🇬🇪'];
      'Germany': [N extends 2 ? 'DE' : N extends 3 ? 'DEU' : never, '49', '🇩🇪'];
      'Ghana': [N extends 2 ? 'GH' : N extends 3 ? 'GHA' : never, '233', '🇬🇭'];
      'Gibraltar': [N extends 2 ? 'GI' : N extends 3 ? 'GIB' : never, '350', '🇬🇮'];
      'Greece': [N extends 2 ? 'GR' : N extends 3 ? 'GRC' : never, '30', '🇬🇷'];
      'Greenland': [N extends 2 ? 'GL' : N extends 3 ? 'GRL' : never, '299', '🇬🇱'];
      'Grenada': [N extends 2 ? 'GD' : N extends 3 ? 'GRD' : never, '1-473', '🇬🇩'];
      'Guam': [N extends 2 ? 'GU' : N extends 3 ? 'GUM' : never, '1-671', '🇬🇺'];
      'Guatemala': [N extends 2 ? 'GT' : N extends 3 ? 'GTM' : never, '502', '🇬🇹'];
      'Guernsey': [N extends 2 ? 'GG' : N extends 3 ? 'GGY' : never, '44-1481', '🇬🇬'];
      'Guinea': [N extends 2 ? 'GN' : N extends 3 ? 'GIN' : never, '224', '🇬🇳'];
      'Guinea-Bissau': [N extends 2 ? 'GW' : N extends 3 ? 'GNB' : never, '245', '🇬🇼'];
      'Guyana': [N extends 2 ? 'GY' : N extends 3 ? 'GUY' : never, '592', '🇬🇾'];
      'Haiti': [N extends 2 ? 'HT' : N extends 3 ? 'HTI' : never, '509', '🇭🇹'];
      'Honduras': [N extends 2 ? 'HN' : N extends 3 ? 'HND' : never, '504', '🇭🇳'];
      'Hong Kong': [N extends 2 ? 'HK' : N extends 3 ? 'HKG' : never, '852', '🇭🇰'];
      'Hungary': [N extends 2 ? 'HU' : N extends 3 ? 'HUN' : never, '36', '🇭🇺'];
      'Iceland': [N extends 2 ? 'IS' : N extends 3 ? 'ISL' : never, '354', '🇮🇸'];
      'India': [N extends 2 ? 'IN' : N extends 3 ? 'IND' : never, '91', '🇮🇳'];
      'Indonesia': [N extends 2 ? 'ID' : N extends 3 ? 'IDN' : never, '62', '🇮🇩'];
      'Iran': [N extends 2 ? 'IR' : N extends 3 ? 'IRN' : never, '98', '🇮🇷'];
      'Iraq': [N extends 2 ? 'IQ' : N extends 3 ? 'IRQ' : never, '964', '🇮🇶'];
      'Ireland': [N extends 2 ? 'IE' : N extends 3 ? 'IRL' : never, '353', '🇮🇪'];
      'Isle of Man': [N extends 2 ? 'IM' : N extends 3 ? 'IMN' : never, '44-1624', '🇮🇲'];
      'Israel': [N extends 2 ? 'IL' : N extends 3 ? 'ISR' : never, '972', '🇮🇱'];
      'Italy': [N extends 2 ? 'IT' : N extends 3 ? 'ITA' : never, '39', '🇮🇹'];
      'Ivory Coast': [N extends 2 ? 'CI' : N extends 3 ? 'CIV' : never, '225', '🇨🇮'];
      'Jamaica': [N extends 2 ? 'JM' : N extends 3 ? 'JAM' : never, '1-876', '🇯🇲'];
      'Japan': [N extends 2 ? 'JP' : N extends 3 ? 'JPN' : never, '81', '🇯🇵'];
      'Jersey': [N extends 2 ? 'JE' : N extends 3 ? 'JEY' : never, '44-1534', '🇯🇪'];
      'Jordan': [N extends 2 ? 'JO' : N extends 3 ? 'JOR' : never, '962', '🇯🇴'];
      'Kazakhstan': [N extends 2 ? 'KZ' : N extends 3 ? 'KAZ' : never, '7', '🇰🇿'];
      'Kenya': [N extends 2 ? 'KE' : N extends 3 ? 'KEN' : never, '254', '🇰🇪'];
      'Kiribati': [N extends 2 ? 'KI' : N extends 3 ? 'KIR' : never, '686', '🇰🇮'];
      'Kosovo': [N extends 2 ? 'XK' : N extends 3 ? 'XKX' : never, '383', '🇽🇰'];
      'Kuwait': [N extends 2 ? 'KW' : N extends 3 ? 'KWT' : never, '965', '🇰🇼'];
      'Kyrgyzstan': [N extends 2 ? 'KG' : N extends 3 ? 'KGZ' : never, '996', '🇰🇬'];
      'Laos': [N extends 2 ? 'LA' : N extends 3 ? 'LAO' : never, '856', '🇱🇦'];
      'Latvia': [N extends 2 ? 'LV' : N extends 3 ? 'LVA' : never, '371', '🇱🇻'];
      'Lebanon': [N extends 2 ? 'LB' : N extends 3 ? 'LBN' : never, '961', '🇱🇧'];
      'Lesotho': [N extends 2 ? 'LS' : N extends 3 ? 'LSO' : never, '266', '🇱🇸'];
      'Liberia': [N extends 2 ? 'LR' : N extends 3 ? 'LBR' : never, '231', '🇱🇷'];
      'Libya': [N extends 2 ? 'LY' : N extends 3 ? 'LBY' : never, '218', '🇱🇾'];
      'Liechtenstein': [N extends 2 ? 'LI' : N extends 3 ? 'LIE' : never, '423', '🇱🇮'];
      'Lithuania': [N extends 2 ? 'LT' : N extends 3 ? 'LTU' : never, '370', '🇱🇹'];
      'Luxembourg': [N extends 2 ? 'LU' : N extends 3 ? 'LUX' : never, '352', '🇱🇺'];
      'Macau': [N extends 2 ? 'MO' : N extends 3 ? 'MAC' : never, '853', '🇲🇴'];
      'Macedonia': [N extends 2 ? 'MK' : N extends 3 ? 'MKD' : never, '389', '🇲🇰'];
      'Madagascar': [N extends 2 ? 'MG' : N extends 3 ? 'MDG' : never, '261', '🇲🇬'];
      'Malawi': [N extends 2 ? 'MW' : N extends 3 ? 'MWI' : never, '265', '🇲🇼'];
      'Malaysia': [N extends 2 ? 'MY' : N extends 3 ? 'MYS' : never, '60', '🇲🇾'];
      'Maldives': [N extends 2 ? 'MV' : N extends 3 ? 'MDV' : never, '960', '🇲🇻'];
      'Mali': [N extends 2 ? 'ML' : N extends 3 ? 'MLI' : never, '223', '🇲🇱'];
      'Malta': [N extends 2 ? 'MT' : N extends 3 ? 'MLT' : never, '356', '🇲🇹'];
      'Marshall Islands': [N extends 2 ? 'MH' : N extends 3 ? 'MHL' : never, '692', '🇲🇭'];
      'Mauritania': [N extends 2 ? 'MR' : N extends 3 ? 'MRT' : never, '222', '🇲🇷'];
      'Mauritius': [N extends 2 ? 'MU' : N extends 3 ? 'MUS' : never, '230', '🇲🇺'];
      'Mayotte': [N extends 2 ? 'YT' : N extends 3 ? 'MYT' : never, '262', '🇾🇹'];
      'Mexico': [N extends 2 ? 'MX' : N extends 3 ? 'MEX' : never, '52', '🇲🇽'];
      'Micronesia': [N extends 2 ? 'FM' : N extends 3 ? 'FSM' : never, '691', '🇫🇲'];
      'Moldova': [N extends 2 ? 'MD' : N extends 3 ? 'MDA' : never, '373', '🇲🇩'];
      'Monaco': [N extends 2 ? 'MC' : N extends 3 ? 'MCO' : never, '377', '🇲🇨'];
      'Mongolia': [N extends 2 ? 'MN' : N extends 3 ? 'MNG' : never, '976', '🇲🇳'];
      'Montenegro': [N extends 2 ? 'ME' : N extends 3 ? 'MNE' : never, '382', '🇲🇪'];
      'Montserrat': [N extends 2 ? 'MS' : N extends 3 ? 'MSR' : never, '1-664', '🇲🇸'];
      'Morocco': [N extends 2 ? 'MA' : N extends 3 ? 'MAR' : never, '212', '🇲🇦'];
      'Mozambique': [N extends 2 ? 'MZ' : N extends 3 ? 'MOZ' : never, '258', '🇲🇿'];
      'Myanmar': [N extends 2 ? 'MM' : N extends 3 ? 'MMR' : never, '95', '🇲🇲'];
      'Namibia': [N extends 2 ? 'NA' : N extends 3 ? 'NAM' : never, '264', '🇳🇦'];
      'Nauru': [N extends 2 ? 'NR' : N extends 3 ? 'NRU' : never, '674', '🇳🇷'];
      'Nepal': [N extends 2 ? 'NP' : N extends 3 ? 'NPL' : never, '977', '🇳🇵'];
      'Netherlands': [N extends 2 ? 'NL' : N extends 3 ? 'NLD' : never, '31', '🇳🇱'];
      'Netherlands Antilles': [N extends 2 ? 'AN' : N extends 3 ? 'ANT' : never, '599', '🇧🇶'];
      'New Caledonia': [N extends 2 ? 'NC' : N extends 3 ? 'NCL' : never, '687', '🇳🇨'];
      'New Zealand': [N extends 2 ? 'NZ' : N extends 3 ? 'NZL' : never, '64', '🇳🇿'];
      'Nicaragua': [N extends 2 ? 'NI' : N extends 3 ? 'NIC' : never, '505', '🇳🇮'];
      'Niger': [N extends 2 ? 'NE' : N extends 3 ? 'NER' : never, '227', '🇳🇪'];
      'Nigeria': [N extends 2 ? 'NG' : N extends 3 ? 'NGA' : never, '234', '🇳🇬'];
      'Niue': [N extends 2 ? 'NU' : N extends 3 ? 'NIU' : never, '683', '🇳🇺'];
      'North Korea': [N extends 2 ? 'KP' : N extends 3 ? 'PRK' : never, '850', '🇰🇵'];
      'Northern Mariana Islands': [N extends 2 ? 'MP' : N extends 3 ? 'MNP' : never, '1-670', '🇲🇵'];
      'Norway': [N extends 2 ? 'NO' : N extends 3 ? 'NOR' : never, '47', '🇳🇴'];
      'Oman': [N extends 2 ? 'OM' : N extends 3 ? 'OMN' : never, '968', '🇴🇲'];
      'Pakistan': [N extends 2 ? 'PK' : N extends 3 ? 'PAK' : never, '92', '🇵🇰'];
      'Palau': [N extends 2 ? 'PW' : N extends 3 ? 'PLW' : never, '680', '🇵🇼'];
      'Palestine': [N extends 2 ? 'PS' : N extends 3 ? 'PSE' : never, '970', '🇵🇸'];
      'Panama': [N extends 2 ? 'PA' : N extends 3 ? 'PAN' : never, '507', '🇵🇦'];
      'Papua New Guinea': [N extends 2 ? 'PG' : N extends 3 ? 'PNG' : never, '675', '🇵🇬'];
      'Paraguay': [N extends 2 ? 'PY' : N extends 3 ? 'PRY' : never, '595', '🇵🇾'];
      'Peru': [N extends 2 ? 'PE' : N extends 3 ? 'PER' : never, '51', '🇵🇪'];
      'Philippines': [N extends 2 ? 'PH' : N extends 3 ? 'PHL' : never, '63', '🇵🇭'];
      'Pitcairn': [N extends 2 ? 'PN' : N extends 3 ? 'PCN' : never, '64', '🇵🇳'];
      'Poland': [N extends 2 ? 'PL' : N extends 3 ? 'POL' : never, '48', '🇵🇱'];
      'Portugal': [N extends 2 ? 'PT' : N extends 3 ? 'PRT' : never, '351', '🇵🇹'];
      'Puerto Rico': [N extends 2 ? 'PR' : N extends 3 ? 'PRI' : never, '1-787, 1-939', '🇵🇷'];
      'Qatar': [N extends 2 ? 'QA' : N extends 3 ? 'QAT' : never, '974', '🇶🇦'];
      'Republic of the Congo': [N extends 2 ? 'CG' : N extends 3 ? 'COG' : never, '242', '🇨🇬'];
      'Reunion': [N extends 2 ? 'RE' : N extends 3 ? 'REU' : never, '262', '🇷🇪'];
      'Romania': [N extends 2 ? 'RO' : N extends 3 ? 'ROU' : never, '40', '🇷🇴'];
      'Russia': [N extends 2 ? 'RU' : N extends 3 ? 'RUS' : never, '7', '🇷🇺'];
      'Rwanda': [N extends 2 ? 'RW' : N extends 3 ? 'RWA' : never, '250', '🇷🇼'];
      'Saint Barthelemy': [N extends 2 ? 'BL' : N extends 3 ? 'BLM' : never, '590', '🇧🇱'];
      'Saint Helena': [N extends 2 ? 'SH' : N extends 3 ? 'SHN' : never, '290', '🇸🇭'];
      'Saint Kitts and Nevis': [N extends 2 ? 'KN' : N extends 3 ? 'KNA' : never, '1-869', '🇰🇳'];
      'Saint Lucia': [N extends 2 ? 'LC' : N extends 3 ? 'LCA' : never, '1-758', '🇱🇨'];
      'Saint Martin': [N extends 2 ? 'MF' : N extends 3 ? 'MAF' : never, '590', '🇲🇫'];
      'Saint Pierre and Miquelon': [N extends 2 ? 'PM' : N extends 3 ? 'SPM' : never, '508', '🇵🇲'];
      'Saint Vincent and the Grenadines': [N extends 2 ? 'VC' : N extends 3 ? 'VCT' : never, '1-784', '🇻🇨'];
      'Samoa': [N extends 2 ? 'WS' : N extends 3 ? 'WSM' : never, '685', '🇼🇸'];
      'San Marino': [N extends 2 ? 'SM' : N extends 3 ? 'SMR' : never, '378', '🇸🇲'];
      'Sao Tome and Principe': [N extends 2 ? 'ST' : N extends 3 ? 'STP' : never, '239', '🇸🇹'];
      'Saudi Arabia': [N extends 2 ? 'SA' : N extends 3 ? 'SAU' : never, '966', '🇸🇦'];
      'Senegal': [N extends 2 ? 'SN' : N extends 3 ? 'SEN' : never, '221', '🇸🇳'];
      'Serbia': [N extends 2 ? 'RS' : N extends 3 ? 'SRB' : never, '381', '🇷🇸'];
      'Seychelles': [N extends 2 ? 'SC' : N extends 3 ? 'SYC' : never, '248', '🇸🇨'];
      'Sierra Leone': [N extends 2 ? 'SL' : N extends 3 ? 'SLE' : never, '232', '🇸🇱'];
      'Singapore': [N extends 2 ? 'SG' : N extends 3 ? 'SGP' : never, '65', '🇸🇬'];
      'Sint Maarten': [N extends 2 ? 'SX' : N extends 3 ? 'SXM' : never, '1-721', '🇸🇽'];
      'Slovakia': [N extends 2 ? 'SK' : N extends 3 ? 'SVK' : never, '421', '🇸🇰'];
      'Slovenia': [N extends 2 ? 'SI' : N extends 3 ? 'SVN' : never, '386', '🇸🇮'];
      'Solomon Islands': [N extends 2 ? 'SB' : N extends 3 ? 'SLB' : never, '677', '🇸🇧'];
      'Somalia': [N extends 2 ? 'SO' : N extends 3 ? 'SOM' : never, '252', '🇸🇴'];
      'South Africa': [N extends 2 ? 'ZA' : N extends 3 ? 'ZAF' : never, '27', '🇿🇦'];
      'South Korea': [N extends 2 ? 'KR' : N extends 3 ? 'KOR' : never, '82', '🇰🇷'];
      'South Sudan': [N extends 2 ? 'SS' : N extends 3 ? 'SSD' : never, '211', '🇸🇸'];
      'Spain': [N extends 2 ? 'ES' : N extends 3 ? 'ESP' : never, '34', '🇪🇸'];
      'Sri Lanka': [N extends 2 ? 'LK' : N extends 3 ? 'LKA' : never, '94', '🇱🇰'];
      'Sudan': [N extends 2 ? 'SD' : N extends 3 ? 'SDN' : never, '249', '🇸🇩'];
      'Suriname': [N extends 2 ? 'SR' : N extends 3 ? 'SUR' : never, '597', '🇸🇷'];
      'Svalbard and Jan Mayen': [N extends 2 ? 'SJ' : N extends 3 ? 'SJM' : never, '47', '🇸🇯'];
      'Swaziland': [N extends 2 ? 'SZ' : N extends 3 ? 'SWZ' : never, '268', '🇸🇿'];
      'Sweden': [N extends 2 ? 'SE' : N extends 3 ? 'SWE' : never, '46', '🇸🇪'];
      'Switzerland': [N extends 2 ? 'CH' : N extends 3 ? 'CHE' : never, '41', '🇨🇭'];
      'Syria': [N extends 2 ? 'SY' : N extends 3 ? 'SYR' : never, '963', '🇸🇾'];
      'Taiwan': [N extends 2 ? 'TW' : N extends 3 ? 'TWN' : never, '886', '🇹🇼'];
      'Tajikistan': [N extends 2 ? 'TJ' : N extends 3 ? 'TJK' : never, '992', '🇹🇯'];
      'Tanzania': [N extends 2 ? 'TZ' : N extends 3 ? 'TZA' : never, '255', '🇹🇿'];
      'Thailand': [N extends 2 ? 'TH' : N extends 3 ? 'THA' : never, '66', '🇹🇭'];
      'Togo': [N extends 2 ? 'TG' : N extends 3 ? 'TGO' : never, '228', '🇹🇬'];
      'Tokelau': [N extends 2 ? 'TK' : N extends 3 ? 'TKL' : never, '690', '🇹🇰'];
      'Tonga': [N extends 2 ? 'TO' : N extends 3 ? 'TON' : never, '676', '🇹🇴'];
      'Trinidad and Tobago': [N extends 2 ? 'TT' : N extends 3 ? 'TTO' : never, '1-868', '🇹🇹'];
      'Tunisia': [N extends 2 ? 'TN' : N extends 3 ? 'TUN' : never, '216', '🇹🇳'];
      'Turkey': [N extends 2 ? 'TR' : N extends 3 ? 'TUR' : never, '90', '🇹🇷'];
      'Turkmenistan': [N extends 2 ? 'TM' : N extends 3 ? 'TKM' : never, '993', '🇹🇲'];
      'Turks and Caicos Islands': [N extends 2 ? 'TC' : N extends 3 ? 'TCA' : never, '1-649', '🇹🇨'];
      'Tuvalu': [N extends 2 ? 'TV' : N extends 3 ? 'TUV' : never, '688', '🇹🇻'];
      'U.S. Virgin Islands': [N extends 2 ? 'VI' : N extends 3 ? 'VIR' : never, '1-340', '🇻🇮'];
      'Uganda': [N extends 2 ? 'UG' : N extends 3 ? 'UGA' : never, '256', '🇺🇬'];
      'Ukraine': [N extends 2 ? 'UA' : N extends 3 ? 'UKR' : never, '380', '🇺🇦'];
      'United Arab Emirates': [N extends 2 ? 'AE' : N extends 3 ? 'ARE' : never, '971', '🇦🇪'];
      'United Kingdom': [N extends 2 ? 'GB' : N extends 3 ? 'GBR' : never, '44', '🇬🇧'];
      'United States': [N extends 2 ? 'US' : N extends 3 ? 'USA' : never, '1', '🇺🇸'];
      'Uruguay': [N extends 2 ? 'UY' : N extends 3 ? 'URY' : never, '598', '🇺🇾'];
      'Uzbekistan': [N extends 2 ? 'UZ' : N extends 3 ? 'UZB' : never, '998', '🇺🇿'];
      'Vanuatu': [N extends 2 ? 'VU' : N extends 3 ? 'VUT' : never, '678', '🇻🇺'];
      'Vatican': [N extends 2 ? 'VA' : N extends 3 ? 'VAT' : never, '379', '🇻🇦'];
      'Venezuela': [N extends 2 ? 'VE' : N extends 3 ? 'VEN' : never, '58', '🇻🇪'];
      'Vietnam': [N extends 2 ? 'VN' : N extends 3 ? 'VNM' : never, '84', '🇻🇳'];
      'Wallis and Futuna': [N extends 2 ? 'WF' : N extends 3 ? 'WLF' : never, '681', '🇼🇫'];
      'Western Sahara': [N extends 2 ? 'EH' : N extends 3 ? 'ESH' : never, '212', '🇪🇭'];
      'Yemen': [N extends 2 ? 'YE' : N extends 3 ? 'YEM' : never, '967', '🇾🇪'];
      'Zambia': [N extends 2 ? 'ZM' : N extends 3 ? 'ZMB' : never, '260', '🇿🇲'];
      'Zimbabwe': [N extends 2 ? 'ZW' : N extends 3 ? 'ZWE' : never, '263', '🇿🇼']
    };
  };

  export const codeToFlags = {
    "AC": "🇦🇨",
    "AD": "🇦🇩",
    "AE": "🇦🇪",
    "AF": "🇦🇫",
    "AG": "🇦🇬",
    "AI": "🇦🇮",
    "AL": "🇦🇱",
    "AM": "🇦🇲",
    "AO": "🇦🇴",
    "AQ": "🇦🇶",
    "AR": "🇦🇷",
    "AS": "🇦🇸",
    "AT": "🇦🇹",
    "AU": "🇦🇺",
    "AW": "🇦🇼",
    "AX": "🇦🇽",
    "AZ": "🇦🇿",
    "BA": "🇧🇦",
    "BB": "🇧🇧",
    "BD": "🇧🇩",
    "BE": "🇧🇪",
    "BF": "🇧🇫",
    "BG": "🇧🇬",
    "BH": "🇧🇭",
    "BI": "🇧🇮",
    "BJ": "🇧🇯",
    "BL": "🇧🇱",
    "BM": "🇧🇲",
    "BN": "🇧🇳",
    "BO": "🇧🇴",
    "BQ": "🇧🇶",
    "BR": "🇧🇷",
    "BS": "🇧🇸",
    "BT": "🇧🇹",
    "BV": "🇧🇻",
    "BW": "🇧🇼",
    "BY": "🇧🇾",
    "BZ": "🇧🇿",
    "CA": "🇨🇦",
    "CC": "🇨🇨",
    "CD": "🇨🇩",
    "CF": "🇨🇫",
    "CG": "🇨🇬",
    "CH": "🇨🇭",
    "CI": "🇨🇮",
    "CK": "🇨🇰",
    "CL": "🇨🇱",
    "CM": "🇨🇲",
    "CN": "🇨🇳",
    "CO": "🇨🇴",
    "CP": "🇨🇵",
    "CR": "🇨🇷",
    "CU": "🇨🇺",
    "CV": "🇨🇻",
    "CW": "🇨🇼",
    "CX": "🇨🇽",
    "CY": "🇨🇾",
    "CZ": "🇨🇿",
    "DE": "🇩🇪",
    "DG": "🇩🇬",
    "DJ": "🇩🇯",
    "DK": "🇩🇰",
    "DM": "🇩🇲",
    "DO": "🇩🇴",
    "DZ": "🇩🇿",
    "EA": "🇪🇦",
    "EC": "🇪🇨",
    "EE": "🇪🇪",
    "EG": "🇪🇬",
    "EH": "🇪🇭",
    "ER": "🇪🇷",
    "ES": "🇪🇸",
    "ET": "🇪🇹",
    "EU": "🇪🇺",
    "FI": "🇫🇮",
    "FJ": "🇫🇯",
    "FK": "🇫🇰",
    "FM": "🇫🇲",
    "FO": "🇫🇴",
    "FR": "🇫🇷",
    "GA": "🇬🇦",
    "GB": "🇬🇧",
    "GD": "🇬🇩",
    "GE": "🇬🇪",
    "GF": "🇬🇫",
    "GG": "🇬🇬",
    "GH": "🇬🇭",
    "GI": "🇬🇮",
    "GL": "🇬🇱",
    "GM": "🇬🇲",
    "GN": "🇬🇳",
    "GP": "🇬🇵",
    "GQ": "🇬🇶",
    "GR": "🇬🇷",
    "GS": "🇬🇸",
    "GT": "🇬🇹",
    "GU": "🇬🇺",
    "GW": "🇬🇼",
    "GY": "🇬🇾",
    "HK": "🇭🇰",
    "HM": "🇭🇲",
    "HN": "🇭🇳",
    "HR": "🇭🇷",
    "HT": "🇭🇹",
    "HU": "🇭🇺",
    "IC": "🇮🇨",
    "ID": "🇮🇩",
    "IE": "🇮🇪",
    "IL": "🇮🇱",
    "IM": "🇮🇲",
    "IN": "🇮🇳",
    "IO": "🇮🇴",
    "IQ": "🇮🇶",
    "IR": "🇮🇷",
    "IS": "🇮🇸",
    "IT": "🇮🇹",
    "JE": "🇯🇪",
    "JM": "🇯🇲",
    "JO": "🇯🇴",
    "JP": "🇯🇵",
    "KE": "🇰🇪",
    "KG": "🇰🇬",
    "KH": "🇰🇭",
    "KI": "🇰🇮",
    "KM": "🇰🇲",
    "KN": "🇰🇳",
    "KP": "🇰🇵",
    "KR": "🇰🇷",
    "KW": "🇰🇼",
    "KY": "🇰🇾",
    "KZ": "🇰🇿",
    "LA": "🇱🇦",
    "LB": "🇱🇧",
    "LC": "🇱🇨",
    "LI": "🇱🇮",
    "LK": "🇱🇰",
    "LR": "🇱🇷",
    "LS": "🇱🇸",
    "LT": "🇱🇹",
    "LU": "🇱🇺",
    "LV": "🇱🇻",
    "LY": "🇱🇾",
    "MA": "🇲🇦",
    "MC": "🇲🇨",
    "MD": "🇲🇩",
    "ME": "🇲🇪",
    "MF": "🇲🇫",
    "MG": "🇲🇬",
    "MH": "🇲🇭",
    "MK": "🇲🇰",
    "ML": "🇲🇱",
    "MM": "🇲🇲",
    "MN": "🇲🇳",
    "MO": "🇲🇴",
    "MP": "🇲🇵",
    "MQ": "🇲🇶",
    "MR": "🇲🇷",
    "MS": "🇲🇸",
    "MT": "🇲🇹",
    "MU": "🇲🇺",
    "MV": "🇲🇻",
    "MW": "🇲🇼",
    "MX": "🇲🇽",
    "MY": "🇲🇾",
    "MZ": "🇲🇿",
    "NA": "🇳🇦",
    "NC": "🇳🇨",
    "NE": "🇳🇪",
    "NF": "🇳🇫",
    "NG": "🇳🇬",
    "NI": "🇳🇮",
    "NL": "🇳🇱",
    "NO": "🇳🇴",
    "NP": "🇳🇵",
    "NR": "🇳🇷",
    "NU": "🇳🇺",
    "NZ": "🇳🇿",
    "OM": "🇴🇲",
    "PA": "🇵🇦",
    "PE": "🇵🇪",
    "PF": "🇵🇫",
    "PG": "🇵🇬",
    "PH": "🇵🇭",
    "PK": "🇵🇰",
    "PL": "🇵🇱",
    "PM": "🇵🇲",
    "PN": "🇵🇳",
    "PR": "🇵🇷",
    "PS": "🇵🇸",
    "PT": "🇵🇹",
    "PW": "🇵🇼",
    "PY": "🇵🇾",
    "QA": "🇶🇦",
    "RE": "🇷🇪",
    "RO": "🇷🇴",
    "RS": "🇷🇸",
    "RU": "🇷🇺",
    "RW": "🇷🇼",
    "SA": "🇸🇦",
    "SB": "🇸🇧",
    "SC": "🇸🇨",
    "SD": "🇸🇩",
    "SE": "🇸🇪",
    "SG": "🇸🇬",
    "SH": "🇸🇭",
    "SI": "🇸🇮",
    "SJ": "🇸🇯",
    "SK": "🇸🇰",
    "SL": "🇸🇱",
    "SM": "🇸🇲",
    "SN": "🇸🇳",
    "SO": "🇸🇴",
    "SR": "🇸🇷",
    "SS": "🇸🇸",
    "ST": "🇸🇹",
    "SV": "🇸🇻",
    "SX": "🇸🇽",
    "SY": "🇸🇾",
    "SZ": "🇸🇿",
    "TA": "🇹🇦",
    "TC": "🇹🇨",
    "TD": "🇹🇩",
    "TF": "🇹🇫",
    "TG": "🇹🇬",
    "TH": "🇹🇭",
    "TJ": "🇹🇯",
    "TK": "🇹🇰",
    "TL": "🇹🇱",
    "TM": "🇹🇲",
    "TN": "🇹🇳",
    "TO": "🇹🇴",
    "TR": "🇹🇷",
    "TT": "🇹🇹",
    "TV": "🇹🇻",
    "TW": "🇹🇼",
    "TZ": "🇹🇿",
    "UA": "🇺🇦",
    "UG": "🇺🇬",
    "UM": "🇺🇲",
    "UN": "🇺🇳",
    "US": "🇺🇸",
    "UY": "🇺🇾",
    "UZ": "🇺🇿",
    "VA": "🇻🇦",
    "VC": "🇻🇨",
    "VE": "🇻🇪",
    "VG": "🇻🇬",
    "VI": "🇻🇮",
    "VN": "🇻🇳",
    "VU": "🇻🇺",
    "WF": "🇼🇫",
    "WS": "🇼🇸",
    "XK": "🇽🇰",
    "YE": "🇾🇪",
    "YT": "🇾🇹",
    "ZA": "🇿🇦",
    "ZM": "🇿🇲",
    "ZW": "🇿🇼"
  } as const;
  export type CodeToFlags = typeof CodeToFlags;
  export const flag = getIterableValue(codeToFlags) as Flag;

  export type Flags = Array<Flag>;
  export const flags = Object.values(codeToFlags) as Flags;
  //export type RegionCodes = Array<Code>;
  export const regionCodes = Object.keys(codeToFlags)// as RegionCodes;
  export const code = getIterableValue(Object.keys(codeToFlags)) as Code;

  // export function codeRunner<T extends ArrayLike<T>>(
  //   object: T,
  //   fn: (c: Country) => any,
  //   holder: {} | [] = {}
  // ) {
  //   allCountries.forEach((c) => {
  //     const region = c[1];
  //     const hasCode = Object.values(object).some((o) => o.hasOwnProperty(region));
  //     const propNames = Object.getOwnPropertyNames(object);
  //     const hasProp = propNames.some((p) => p === region);
  //     if (!hasCode && !hasProp) {
  //       console.log(c[0], c[1]));
  //     }
  //   }, holder);
  // }
  export type Codes<N extends 2 | 3 = 2> = ReturnType<typeof getCodes<N>>;
  export type Code = Codes[keyof Codes][0];
  export type DialCode = Codes[keyof Codes][1];
  export type Flag = Codes[keyof Codes][2];
  export type Name = keyof Codes;
  export type TwoDigitCodes = Codes<2>;
  export type ThreeDigitCodes = Codes<3>;
  export type CodeTo<N extends 2 | 3 = 2 | 3> = { [Code in keyof Codes[Name][typeof Symbol.iterator]]: Codes<N>[Name][0] };
  export type Names<N extends 0 | 1 | 2 = 0> = { [key in keyof Codes]: { [code in key]: Codes[code][N] }[key] };
  /**
   * @interface CountryData - An extended version of the Country interface from `country-telephone-data`.
   * @extends Country - The Country interface from `country-telephone-data`.
   */
  export interface CountryData extends Omit<Country, 'iso2' | 'format'> {
    /**
     * @property { string } name - The name of the country.
     */
    name: Country['name'],
    /**
     * @property {RegExp} regex - The regular expression used to validate the phone number.
     */
    regex: RegExp,
    /**
     * @property {RegionCode} regionCode - The region code of the country.
     */
    regionCode: RegionCode;
    /**
     * @property {Flags} flag - The flag of the country.
     */
    flag: typeof CodeToFlags[this['regionCode']],
    /**
     * @property {string} format - The format of the phone number.
     */
    format?: string,
    /**
     * @property {AsYouTypeFormatter} formatter - The formatter of the phone number.
     */
    // formatter: AsYouTypeFormatter,
    /**
     * @property {string} dialCode - The dial code of the country.
     */
    dialCode: Country['dialCode'],
    /**
     * @property {number} priority - The priority of the country.
     */
    priority: Country['priority'],
  };
  export type RC = keyof typeof CodeToFlags;
  export const RC = getIterableValue(codeToFlags) as RC;

  //   export const CountryData = allCountries.map((data) => {
  //     let region = data.iso2.toUpperCase() as RegionCode;
  //     var countryData = {} as CountryData;
  //     countryData = {
  //       ...countryData,
  //       [region]: {
  //         name: data.name,
  //         regex: /^(\+\d{1,3})?\s?(\(\d{1,4}\))?[\d\s()-]{1,20}$/,
  //         regionCode: region,
  //         flag: CodeToFlags[region] as Flag,
  //         format: data.format && data.format.replaceAll('.', '#'),
  //         // formatter: new AsYouTypeFormatter(region),
  //         dialCode: data.dialCode,
  //         priority: data.priority,
  //       },
  //     };
  //     return countryData;
  //   }).reduce((acc, cur) => {
  //     const key = Object.keys(cur)[0] as RegionCode;
  //     //@ts-ignore
  //     acc[key] = cur[key];
  //     return acc;
  //   }, {} as { [key in RegionCode]: CountryData });
  // }
}
export const CountryData = Countries.CountryData;
console.log(Countries.CountryData);
export const {
  code,
  codeToFlags,
  flag,
  flags,
  regionCodes,
  codeRunner,
  getCodes,

} = Countries;
export default Countries;
