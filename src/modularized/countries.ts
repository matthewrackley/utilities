/**
 * @file countries.ts
 * @description
 * @author Matthew Allen Rackley
 * @copyright [Matthew Rackley's Github](https://www.github.com/matthewrackley "Matthew Rackley on github.com")
 */
//@ts-ignore
import type { CountriesArray, Country, CountryArray, CountriesData, CountryName, ExtractName, ForeignLocal, GetCountryArrays, MultiName, RegionCode, RegionCodes, Countries } from './countries.types';
import { reverseLookup } from '../namespaced/Util';
export const regionCodes: RegionCodes = ["AD", "AE", "AF", "AG", "AI", "AL", "AM", "AO", "AQ", "AR", "AS", "AT", "AU", "AW", "AX", "AZ", "BA", "BB", "BD", "BE", "BF", "BG", "BH", "BI", "BJ", "BL", "BM", "BN", "BO", "BQ", "BR", "BS", "BT", "BV", "BW", "BY", "BZ", "CA", "CC", "CD", "CF", "CG", "CI", "CK", "CL", "CM", "CN", "CO", "CR", "CU", "CV", "CW", "CX", "CY", "CZ", "DE", "DJ", "DK", "DM", "DO", "DZ", "EC", "EE", "EG", "EH", "ER", "ET", "FI", "FJ", "FK", "FM", "FO", "FR", "GA", "GB", "GD", "GE", "GF", "GG", "GH", "GI", "GL", "GM", "GN", "GP", "GQ", "GR", "GS", "GT", "GU", "GW", "GY", "HK", "HM", "HN", "HR", "HT", "HU", "ID", "IE", "IL", "IM", "IN", "IO", "IQ", "IR", "IS", "IT", "JE", "JM", "JO", "JP", "KE", "KG", "KH", "KI", "KM", "KN", "KP", "KW", "KY", "KZ", "LA", "LB", "LC", "LI", "LR", "LS", "LT", "LU", "LV", "LY", "MA", "MC", "MD", "ME", "MF", "MG", "MH", "MK", "ML", "MM", "MN", "MO", "MP", "MQ", "MR", "MS", "MT", "MU", "MV", "MW", "MX", "MY", "MZ", "NA", "NC", "NE", "NF", "NG", "NI", "NL", "NO", "NP", "NR", "NU", "NZ", "OM", "PA", "PE", "PF", "PG", "PH", "PK", "PL", "PM", "PN", "PR", "PS", "PT", "PW", "PY", "QA", "RE", "RO", "RS", "RU", "RW", "SA", "SB", "SC", "SG", "SI", "SK", "SL", "SM", "SN", "SO", "ST", "SV", "SX", "TC", "TD", "TF", "TG", "TH", "TK", "TL", "TM", "TN", "TO", "TR", "TT", "TV", "UA", "UG", "UM", "US", "UY", "UZ", "VA", "VC", "VE", "VG", "VI", "VN", "VU", "WF", "WS", "XK", "YE", "YT", "ZA", "ZM", "ZW"];

//@ts-ignore
export var Countries: Countries = function (): Countries {
  Countries[Symbol.toStringTag] = 'Countries';
  Countries.prototype = Countries;
  Countries.prototype.array = countriesArray() as CountriesArray;
  Countries.array = countriesArray() as CountriesArray;
  Countries.prototype.lookup = reverseLookup;
  Countries.lookup = reverseLookup;
  const func = function <R extends RegionCode>(region?: R) {
    for (let key of getRegionCodes()) {
      for (let i = 0; i < regionCodes.length; i++) {//@ts-ignore
        Countries.prototype.array[i] = countriesArray(key) as CountryArray<R>;
        Countries.prototype.arr = {
          ...Countries.prototype.arr,
          [regionCodes[i]]: countriesArray(regionCodes[i])
        };
      }
    }
    if (region) {
      return countriesArray(region);
    } else {
      return Countries.prototype.array! as CountriesArray;
    }
  }
  Object.assign(Countries, {
    [Symbol.toStringTag]: 'Countries',
  }, Countries, Countries.prototype.array, Countries.prototype.arr, countryData, func)

  func.prototype = Countries.prototype;//@ts-ignore
  if (this instanceof Countries) {
    return Countries;
  } else {
    return new Countries();
  }
}
// const Countries: Countries = function () {
//   Countries.prototype.array = countriesArray() as CountriesArray;
//   Countries.prototype.arr = {} as MappedArray;
//   const proto = Countries.prototype;
//   const func: Countries = function <R extends RegionCode>(region?: R) {
//     if (region) {
//       if (regionCodes.includes(region)) {
//         return proto.array.find((country) => country[1] === region);
//       } else {
//         return proto.array;
//       }
//     } else {
//       return proto.array;
//     }
//   };
//   func.prototype = proto;

//   if (this instanceof Countries) {
//     return func;
//   } else {
//     return new func();
//   }

Object.assign(Countries, Countries.prototype.array, Countries.prototype.arr);
export const countriesArray: GetCountryArrays = <R extends RegionCode>(region?: R): CountryArray<R> | CountriesArray => {
  const result = [
    (region ?? "AD") === "AD" ? ["Andorra", "AD", "376", "+...-...-...", "🇦🇩", "Regions", ["Andorra la Vella", "Canillo", "Encamp", "Escaldes-Engordany", "La Massana", "Ordino", "Sant Julià de Lòria"]] : null,
    (region ?? "AE") === "AE" ? ["United Arab Emirates (‫الإمارات العربية المتحدة‬‎)", "AE", "971", "+...-.-...-....", "🇦🇪", "Emirates", ["Abu Dhabi", "Ajman", "Dubai", "Fujairah", "Ras Al Khaimah", "Sharjah", "Umm Al Quwain"]] : null,
    (region ?? "AF") === "AF" ? ["Afghanistan (‫افغانستان‬‎)", "AF", "93", "+..-..-...-....", "🇦🇫", "Regions", ["Badakhshan", "Badghis", "Baghlan", "Balkh", "Bamyan", "Daykundi", "Farah", "Faryab", "Ghazni", "Ghor", "Helmand", "Herat", "Jowzjan", "Kabul", "Kandahar", "Kapisa", "Khost", "Kunar", "Kunduz Province", "Laghman", "Logar", "Nangarhar", "Nimruz", "Nuristan", "Paktia", "Paktika", "Panjshir", "Parwan", "Samangan", "Sar-e Pol", "Takhar", "Urozgan", "Zabul"]] : null,
    (region ?? "AG") === "AG" ? ["Antigua and Barbuda", "AG", "1268", "+.(...)...-....", "🇦🇬", "Parishes", ["Saint George", "Saint John", "Saint Mary", "Saint Paul", "Saint Peter", "Saint Philip"]] : null,
    (region ?? "AI") === "AI" ? ["Anguilla", "AI", "1264", "+.(...)...-....", "🇦🇮", "Districts", ["Anguilla Island", "Blowing Point", "East End", "George Hill", "Island Harbour", "North Hill", "North Side", "Sandy Ground", "Sandy Hill", "South Hill", "Stoney Ground", "The Farrington", "The Quarter", "The Valley", "West End"]] : null,
    (region ?? "AL") === "AL" ? ["Albania (Shqipëri)", "AL", "355", "+...(...)...-...", "🇦🇱", "Counties", ["Berat", "Dibër", "Durrës", "Elbasan", "Fier", "Gjirokastër", "Korçë", "Kukës", "Lezhë", "Shkodër", "Tirana", "Vlorë"]] : null,
    (region ?? "AM") === "AM" ? ["Armenia (Հայաստան)", "AM", "374", "+...-..-...-...", "🇦🇲", "Provinces", ["Aragatsotn", "Ararat", "Armavir", "Gegharkunik", "Kotayk", "Lori", "Shirak", "Syunik", "Tavush", "Vayots Dzor", "Yerevan"]] : null,
    (region ?? "AO") === "AO" ? ["Angola", "AO", "244", "+...(...)...-...", "🇦🇴", "Provinces", ["Bengo", "Benguela", "Bié", "Cabinda", "Cuando Cubango", "Cuanza Norte", "Cuanza Sul", "Cunene", "Huambo", "Huíla", "Luanda", "Lunda Norte", "Lunda Sul", "Malanje", "Moxico", "Namibe", "Uíge", "Zaire"]] : null,
    (region ?? "AQ") === "AQ" ? ["Antarctica", "AQ", "672", "", "🇦🇶"] : null,
    (region ?? "AR") === "AR" ? ["Argentina", "AR", "54", "+..(...)...-....", "🇦🇷", "Regions", ["Buenos Aires", "Catamarca", "Chaco", "Chubut", "Córdoba", "Corrientes", "Entre Ríos", "Formosa", "Jujuy", "La Pampa", "La Rioja", "Mendoza", "Misiones", "Neuquén", "Río Negro", "Salta", "San Juan", "San Luis", "Santa Cruz", "Santa Fe", "Santiago del Estero", "Tierra del Fuego", "Tucumán"]] : null,
    (region ?? "AS") === "AS" ? ["American Samoa", "AS", "1684", "+.(...)...-....", "🇦🇸", "Districts", ["Eastern District", "Manu'a District", "Rose Island", "Swains Island", "Western District"]] : null,
    (region ?? "AT") === "AT" ? ["Austria (Österreich)", "AT", "43", "+..(...)...-....", "🇦🇹", "States", ["Burgenland", "Carinthia", "Lower Austria", "Upper Austria", "Salzburg", "Styria", "Tyrol", "Vorarlberg", "Vienna"]] : null,
    (region ?? "AU") === "AU" ? ["Australia", "AU", "61", "+.. ... ... ...", "🇦🇺", ["States", "Territories"], { "States": ["New South Wales", "Queensland", "South Australia", "Tasmania", "Victoria", "Western Australia"], "Territories": ["Australian Capital Territory", "Northern Territory"] }] : null,
    (region ?? "AW") === "AW" ? ["Aruba", "AW", "297", "+...-...-....", "🇦🇼"] : null,
    (region ?? "AX") === "AX" ? ["Åland Islands", "AX", "358", "", "🇦🇽", "Municipalities", ["Mariehamn", "Jomala", "Finström", "Lemland", "Saltvik", "Hammarland", "Sund", "Eckerö", "Föglö", "Geta", "Vårdö", "Brändö", "Lumparland", "Kumlinge", "Kökar", "Sottunga"]] : null,
    (region ?? "AZ") === "AZ" ? ["Azerbaijan (Azərbaycan)", "AZ", "994", "+...-..-...-..-..", "🇦🇿", "Districts", ["Absheron", "Agdam", "Agdash", "Agstafa", "Agsu", "Astara", "Baku", "Balakan", "Barda", "Beylagan", "Bilasuvar", "Dashkasan", "Fizuli", "Ganja", "Gobustan", "Goranboy", "Goychay", "Goygol", "Hajigabul", "Imishli", "Ismailli", "Jabrayil", "Jalilabad", "Kalbajar", "Kurdamir", "Lachin", "Lankaran", "Lankaran", "Lerik", "Masally", "Mingachevir", "Naftalan", "Nakhchivan", "Neftchala", "Oghuz", "Ordubad", "Qabala", "Qakh", "Qazakh", "Quba", "Qubadli", "Qusar", "Saatly", "Sabirabad", "Salyan", "Shabran", "Shaki", "Shamakhi", "Shamkir", "Shirvan", "Shusha", "Siazan", "Sumgayit", "Tartar", "Tovuz", "Ujar", "Yardymli", "Yevlakh", "Zangilan", "Zaqatala", "Zardab"]] : null,
    (region ?? "BA") === "BA" ? ["Bosnia and Herzegovina (Босна и Херцеговина)", "BA", "387", "+...-..-....", "🇧🇦", "Regions", ["Brčko District", "Federation of Bosnia and Herzegovina", "Republika Srpska"]] : null,
    (region ?? "BB") === "BB" ? ["Barbados", "BB", "1246", "+.(...)...-....", "🇧🇧", "Regions", ["Christ Church", "Saint Andrew", "Saint George", "Saint James", "Saint John", "Saint Joseph", "Saint Lucy", "Saint Michael", "Saint Peter", "Saint Philip", "Saint Thomas"]] : null,
    (region ?? "BD") === "BD" ? ["Bangladesh (বাংলাদেশ)", "BD", "880", "+...-..-...-...", "🇧🇩", "Districts", ["Barisal", "Chittagong", "Dhaka", "Khulna", "Mymensingh", "Rajshahi", "Rangpur", "Sylhet"]] : null,
    (region ?? "BE") === "BE" ? ["Belgium (België)", "BE", "32", "+.. ... .. .. ..", "🇧🇪", "States", ["Brussels", "Flemish Brabant", "Walloon Brabant", "Antwerp", "East Flanders", "West Flanders", "Hainaut", "Liège", "Limburg", "Luxembourg", "Namur"]] : null,
    (region ?? "BF") === "BF" ? ["Burkina Faso", "BF", "226", "+...-..-..-....", "🇧🇫", "Provinces", ["Balé", "Bam", "Banwa", "Bazèga", "Bougouriba", "Boulgou", "Boulkiemdé", "Comoé", "Ganzourgou", "Gnagna", "Gourma", "Houet", "Ioba", "Kadiogo", "Kénédougou", "Komondjari", "Kompienga", "Kossi", "Koulpélogo", "Kouritenga", "Kourwéogo", "Léraba", "Loroum", "Mouhoun", "Namentenga", "Nahouri", "Nayala", "Noumbiel", "Oubritenga", "Oudalan", "Passoré", "Poni", "Sanguié", "Sanmatenga", "Séno", "Sissili", "Soum", "Sourou", "Tapoa", "Tui", "Yagha", "Yatenga", "Ziro", "Zondoma", "Zoundwéogo"]] : null,
    (region ?? "BG") === "BG" ? ["Bulgaria (България)", "BG", "359", "+...(...)...-...", "🇧🇬", "States", ["Blagoevgrad", "Burgas", "Dobrich", "Gabrovo", "Haskovo", "Kardzhali", "Kyustendil", "Lovech", "Montana", "Pazardzhik", "Pernik", "Pleven", "Plovdiv", "Razgrad", "Ruse", "Shumen", "Silistra", "Sliven", "Smolyan", "Sofia", "Stara Zagora", "Targovishte", "Varna", "Veliko Tarnovo", "Vidin", "Vratsa", "Yambol"]] : null,
    (region ?? "BH") === "BH" ? ["Bahrain (‫البحرين‬‎)", "BH", "973", "+...-....-....", "🇧🇭", "Governorates", ["Capital Governorate", "Muharraq Governorate", "Northern Governorate", "Southern Governorate"]] : null,
    (region ?? "BI") === "BI" ? ["Burundi (Uburundi)", "BI", "257", "+...-..-..-....", "🇧🇮", "Provinces", ["Bubanza", "Bujumbura Mairie", "Bujumbura Rural", "Bururi", "Cankuzo", "Cibitoke", "Gitega", "Karuzi", "Kayanza", "Kirundo", "Makamba", "Muramvya", "Muyinga", "Mwaro", "Ngozi", "Rumonge", "Rutana", "Ruyigi"]] : null,
    (region ?? "BJ") === "BJ" ? ["Benin (Bénin)", "BJ", "229", "+...-..-..-....", "🇧🇯", "Departments", ["Alibori", "Atakora", "Atlantique", "Borgou", "Collines", "Donga", "Kouffo", "Littoral", "Mono", "Ouémé", "Plateau", "Zou"]] : null,
    (region ?? "BL") === "BL" ? ["Saint Barthélemy (Saint-Barthélemy)", "BL", "590", "", "🇧🇱", "Parishes", ["Gustavia"], 1] : null,
    (region ?? "BM") === "BM" ? ["Bermuda", "BM", "1441", "+.(...)...-....", "🇧🇲", ["Parishes", "Municipalities"], { "Parishes": ["Devonshire", "Hamilton", "Paget", "Pembroke", "Sandys", "Smith's", "Southampton", "St. George's", "Warwick"], "Municipalities": ["Hamilton", "St. George's"] }] : null,
    (region ?? "BN") === "BN" ? ["Brunei", "BN", "673", "+...-...-....", "🇧🇳", "Districts", ["Belait", "Brunei-Muara", "Temburong", "Tutong"]] : null,
    (region ?? "BO") === "BO" ? ["Bolivia", "BO", "591", "+...-.-...-....", "🇧🇴", "States", ["Chuquisaca", "Cochabamba", "Beni", "La Paz", "Oruro", "Pando", "Potosí", "Santa Cruz", "Tarija"]] : null,
    (region ?? "BQ") === "BQ" ? ["Caribbean Netherlands", "BQ", "599", "+...-...-....", "🇧🇶", "Special Municipalities", ["Bonaire", "Saba", "Sint Eustatius"], 1] : null,
    (region ?? "BR") === "BR" ? ["Brazil (Brasil)", "BR", "55", "+..-..-....-....", "🇧🇷", "Regions", ["Acre", "Alagoas", "Amapá", "Amazonas", "Bahia", "Ceará", "Distrito Federal", "Espírito Santo", "Goiás", "Maranhão", "Mato Grosso", "Mato Grosso do Sul", "Minas Gerais", "Pará", "Paraíba", "Paraná", "Pernambuco", "Piauí", "Rio de Janeiro", "Rio Grande do Norte", "Rio Grande do Sul", "Rondônia", "Roraima", "Santa Catarina", "São Paulo", "Sergipe", "Tocantins"]] : null,
    (region ?? "BS") === "BS" ? ["Bahamas", "BS", "1242", "+.(...)...-....", "🇧🇸", "Regions", ["Acklins", "Berry Islands", "Bimini", "Black Point", "Cat Island", "Central Abaco", "Central Andros", "Central Eleuthera", "City of Freeport", "Crooked Island and Long Cay", "East Grand Bahama", "Exuma", "Grand Cay", "Harbour Island", "Hope Town", "Inagua", "Long Island", "Mangrove Cay", "Mayaguana", "Moore's Island", "North Abaco", "North Andros", "North Eleuthera", "Ragged Island", "Rum Cay", "San Salvador", "South Abaco", "South Andros", "South Eleuthera", "Spanish Wells", "West Grand Bahama"]] : null,
    (region ?? "BT") === "BT" ? ["Bhutan (འབྲུག)", "BT", "975", "+...-.-...-...", "🇧🇹", "Regions", ["Bumthang", "Chukha", "Dagana", "Gasa", "Haa", "Lhuntse", "Mongar", "Paro", "Pemagatshel", "Punakha", "Samdrup Jongkhar", "Samtse", "Sarpang", "Thimphu", "Trashigang", "Trashiyangtse", "Trongsa", "Tsirang", "Wangdue Phodrang", "Zhemgang"]] : null,
    (region ?? "BV") === "BV" ? ["Bouvet Island", "BV", "47", "", "🇧🇻"] : null,
    (region ?? "BW") === "BW" ? ["Botswana", "BW", "267", "+...-..-...-...", "🇧🇼", "Districts", ["Central District", "Ghanzi District", "Kgalagadi District", "Kgatleng District", "Kweneng District", "North-East District", "North-West District", "South-East District", "Southern District"]] : null,
    (region ?? "BY") === "BY" ? ["Belarus (Беларусь)", "BY", "375", "+...(..)...-..-..", "🇧🇾", "Regions", ["Brest Region", "Gomel Region", "Grodno Region", "Minsk Region", "Mogilev Region", "Vitebsk Region"]] : null,
    (region ?? "BZ") === "BZ" ? ["Belize", "BZ", "501", "+...-...-....", "🇧🇿", "Districts", ["Belize District", "Cayo District", "Corozal District", "Orange Walk District", "Stann Creek District", "Toledo District"]] : null,
    (region ?? "CA") === "CA" ? ["Canada", "CA", "1", "+. (...) ...-....", "🇨🇦", ["Territories", "Provinces"], { "Territories": ["Northwest Territories", "Nunavut", "Yukon"], "Provinces": ["Alberta", "British Columbia", "Manitoba", "New Brunswick", "Newfoundland and Labrador", "Nova Scotia", "Ontario", "Prince Edward Island", "Quebec", "Saskatchewan"] }, 1, ["204", "236", "249", "250", "289", "306", "343", "365", "387", "403", "416", "418", "431", "437", "438", "450", "506", "514", "519", "548", "579", "581", "587", "604", "613", "639", "647", "672", "705", "709", "742", "778", "780", "782", "807", "819", "825", "867", "873", "902", "905"]] : null,
    (region ?? "CC") === "CC" ? ["Cocos (Keeling) Islands", "CC", "61", "", "🇨🇨"] : null,
    (region ?? "CD") === "CD" ? ["Congo (DRC) (Jamhuri ya Kidemokrasia ya Kongo)", "CD", "243", "+...(...)...-...", "🇨🇩", "Provinces", ["Kinshasa", "Kongo Central", "Kwango", "Kwilu", "Kasai", "Kasai-Central", "Kasai-Oriental", "Sankuru", "Maniema", "South Kivu", "North Kivu", "Ituri", "Haut-Uele", "Tshopo", "Bas-Uele", "Tanganyika", "Haut-Lomami", "Lualaba", "Kwango", "Kwilu", "Kasai", "Kasai-Central", "Kasai-Oriental", "Sankuru", "Maniema", "South Kivu", "North Kivu", "Ituri", "Haut-Uele", "Tshopo", "Bas-Uele", "Tanganyika", "Haut-Lomami", "Lualaba"]] : null,
    (region ?? "CF") === "CF" ? ["Central African Republic (République centrafricaine)", "CF", "236", "+...-..-..-....", "🇨🇫", "Regions", ["Bamingui-Bangoran", "Bangui", "Basse-Kotto", "Haute-Kotto", "Haut-Mbomou", "Kémo", "Lobaye", "Mambéré-Kadéï", "Mbomou", "Nana-Grébizi", "Nana-Mambéré", "Ombella-M'Poko", "Ouaka", "Ouham", "Ouham-Pendé", "Sangha-Mbaéré", "Vakaga"]] : null,
    (region ?? "CG") === "CG" ? ["Congo (Republic) (Congo-Brazzaville)", "CG", "242", "+...-..-...-....", "🇨🇬", "Departments", ["Bouenza", "Cuvette", "Cuvette-Ouest", "Kouilou", "Lékoumou", "Likouala", "Niari", "Plateaux", "Pool", "Sangha"]] : null,
    (region ?? "CI") === "CI" ? ["Côte d’Ivoire", "CI", "225", "+...-..-...-...", "🇨🇮", "Regions", ["Lagunes", "Haut-Sassandra", "Savanes", "Vallée du Bandama", "Moyen-Comoé", "18 Montagnes", "Lacs", "Zanzan", "Bas-Sassandra", "Denguélé", "N'zi-Comoé", "Marahoué", "Sud-Comoé", "Worodougou", "Sud-Bandama", "Agnéby-Tiassa", "Bafing", "Gbêkê", "Fromager", "Moyen-Cavally", "Nawa", "Indénié-Djuablin", "Bounkani", "Moronou", "Gbôklé", "Iffou", "Bagoué", "Tchologo", "Poro", "Kabadougou", "Béré", "Korhogo"]] : null,
    (region ?? "CK") === "CK" ? ["Cook Islands", "CK", "682", "+...-..-...", "🇨🇰", ["Islands", "Districts"], { "Islands": ["Aitutaki", "Atiu", "Mangaia", "Manihiki", "Mauke", "Mitiaro", "Nassau", "Palmerston", "Penrhyn", "Pukapuka", "Rakahanga", "Rarotonga", "Suwarrow", "Takutea"], "Districts": ["Avarua", "Matavera", "Ngatangiia", "Takitumu"] }] : null,
    (region ?? "CL") === "CL" ? ["Chile", "CL", "56", "+..-.-....-....", "🇨🇱", "States", ["Arica y Parinacota", "Tarapacá", "Antofagasta", "Atacama", "Coquimbo", "Valparaíso", "Región Metropolitana de Santiago", "Libertador General Bernardo O'Higgins", "Maule", "Ñuble", "Biobío", "La Araucanía", "Los Ríos", "Los Lagos", "Aysén", "Magallanes y de la Antártica Chilena"]] : null,
    (region ?? "CM") === "CM" ? ["Cameroon (Cameroun)", "CM", "237", "+...-....-....", "🇨🇲", "Regions", ["Adamaoua", "Centre", "East", "Far North", "Littoral", "North", "Northwest", "South", "Southwest", "West"]] : null,
    (region ?? "CN") === "CN" ? ["China (中国)", "CN", "86", "+.. ..-........", "🇨🇳", ["Provinces", "Municipalities", "Autonomous Regions", "Special Administrative Regions"], { "Provinces": ["Anhui", "Fujian", "Gansu", "Guangdong", "Guizhou", "Hainan", "Hebei", "Heilongjiang", "Henan", "Hubei", "Hunan", "Jiangsu", "Jiangxi", "Jilin", "Liaoning", "Qinghai", "Shaanxi", "Shandong", "Shanxi", "Sichuan", "Yunnan", "Zhejiang"], "Municipalities": ["Beijing", "Chongqing", "Shanghai", "Tianjin"], "Autonomous Regions": ["Guangxi", "Inner Mongolia", "Ningxia", "Tibet", "Xinjiang"], "Special Administrative Regions": ["Hong Kong", "Macau"] }] : null,
    (region ?? "CO") === "CO" ? ["Colombia", "CO", "57", "+..(...)...-....", "🇨🇴", "States", ["Amazonas", "Antioquia", "Arauca", "Atlántico", "Bolívar", "Boyacá", "Caldas", "Caquetá", "Casanare", "Cauca", "Cesar", "Chocó", "Córdoba", "Cundinamarca", "Guainía", "Guaviare", "Huila", "La Guajira", "Magdalena", "Meta", "Nariño", "Norte de Santander", "Putumayo", "Quindío", "Risaralda", "San Andrés, Providencia y Santa Catalina", "Santander", "Sucre", "Tolima", "Valle del Cauca", "Vaupés", "Vichada"]] : null,
    (region ?? "CR") === "CR" ? ["Costa Rica", "CR", "506", "+... ....-....", "🇨🇷", "Provinces", ["San José", "Alajuela", "Cartago", "Heredia", "Guanacaste", "Puntarenas", "Limón"]] : null,
    (region ?? "CU") === "CU" ? ["Cuba", "CU", "53", "+..-.-...-....", "🇨🇺", "Provinces", ["Pinar del Río", "Artemisa", "La Habana", "Mayabeque", "Matanzas", "Cienfuegos", "Villa Clara", "Sancti Spíritus", "Ciego de Ávila", "Camagüey", "Las Tunas", "Holguín", "Granma", "Santiago de Cuba", "Guantánamo", "Isla de la Juventud"]] : null,
    (region ?? "CV") === "CV" ? ["Cape Verde (Kabu Verdi)", "CV", "238", "+...(...)..-..", "🇨🇻", "Regions", ["Barlavento Islands", "Sotavento Islands"]] : null,
    (region ?? "CW") === "CW" ? ["Curaçao", "CW", "599", "+...-...-....", "🇨🇼", "Regions", ["Willemstad", "Bandabou", "Bandariba"], 0] : null,
    (region ?? "CX") === "CX" ? ["Christmas Island", "CX", "61", "", "🇨🇽"] : null,
    (region ?? "CY") === "CY" ? ["Cyprus (Κύπρος)", "CY", "357", "+...-..-...-...", "🇨🇾", "Regions", ["Nicosia", "Limassol", "Larnaca", "Paphos", "Famagusta"]] : null,
    (region ?? "CZ") === "CZ" ? ["Czech Republic (Česká republika)", "CZ", "420", "+...(...)...-...", "🇨🇿", "Regions", ["Prague", "Central Bohemian Region", "South Bohemian Region", "Plzeň Region", "Karlovy Vary Region", "Ústí nad Labem Region", "Liberec Region", "Hradec Králové Region", "Pardubice Region", "Olomouc Region", "Moravian-Silesian Region", "South Moravian Region", "Zlín Region", "Vysočina Region"]] : null,
    (region ?? "DE") === "DE" ? ["Germany (Deutschland)", "DE", "49", "+.. ... .......", "🇩🇪", "States", ["Baden-Württemberg", "Bavaria", "Berlin", "Brandenburg", "Bremen", "Hamburg", "Hesse", "Lower Saxony", "Mecklenburg-Vorpommern", "North Rhine-Westphalia", "Rhineland-Palatinate", "Saarland", "Saxony", "Saxony-Anhalt", "Schleswig-Holstein", "Thuringia"]] : null,
    (region ?? "DJ") === "DJ" ? ["Djibouti", "DJ", "253", "+...-..-..-..-..", "🇩🇯", "Regions", ["Djibouti City", "Ali Sabieh", "Dikhil", "Arta", "Tadjourah", "Obock"]] : null,
    (region ?? "DK") === "DK" ? ["Denmark (Danmark)", "DK", "45", "+.. .. .. .. ..", "🇩🇰", "Regions", ["Capital Region of Denmark", "Region Zealand", "Region of Southern Denmark", "Central Denmark Region", "North Denmark Region"]] : null,
    (region ?? "DM") === "DM" ? ["Dominica", "DM", "1767", "+.(...)...-....", "🇩🇲", "Regions", ["Saint Andrew Parish", "Saint David Parish", "Saint George Parish", "Saint John Parish", "Saint Joseph Parish", "Saint Luke Parish", "Saint Mark Parish", "Saint Patrick Parish", "Saint Paul Parish", "Saint Peter Parish"]] : null,
    (region ?? "DO") === "DO" ? ["Dominican Republic (República Dominicana)", "DO", "1", "+.(...)...-....", "🇩🇴", "Provinces", ["Azua", "Bahoruco", "Barahona", "Dajabón", "Distrito Nacional", "Duarte", "Elías Piña", "El Seibo", "Espaillat", "Hato Mayor", "Hermanas Mirabal", "Independencia", "La Altagracia", "La Romana", "La Vega", "María Trinidad Sánchez", "Monseñor Nouel", "Monte Cristi", "Monte Plata", "Pedernales", "Peravia", "Puerto Plata", "Samaná", "San Cristóbal", "San José de Ocoa", "San Juan", "San Pedro de Macorís", "Sánchez Ramírez", "Santiago", "Santiago Rodríguez", "Santo Domingo", "Valverde"], 2, ["809", "829", "849"]] : null,
    (region ?? "DZ") === "DZ" ? ["Algeria (‫الجزائر‬‎)", "DZ", "213", "+...-..-...-....", '🇩🇿', "Regions", ["Adrar", "Chlef", "Laghouat", "Oum El Bouaghi", "Batna", "Béjaïa", "Biskra", "Béchar", "Blida", "Bouira", "Tamanrasset", "Tébessa", "Tlemcen", "Tiaret", "Tizi Ouzou", "Alger", "Djelfa", "Jijel", "Sétif", "Saïda", "Skikda", "Sidi Bel Abbès", "Annaba", "Guelma", "Constantine", "Médéa", "Mostaganem", "M'Sila", "Mascara", "Ouargla", "Oran", "El Bayadh", "Illizi", "Bordj Bou Arréridj", "Boumerdès", "El Tarf", "Tindouf", "Tissemsilt", "El Oued", "Khenchela", "Souk Ahras", "Tipaza", "Mila", "Aïn Defla", "Naâma", "Aïn Témouchent", "Ghardaïa", "Relizane"]] : null,
    (region ?? "EC") === "EC" ? ["Ecuador", "EC", "593", "+...-.-...-....", "🇪🇨", "Provinces", ["Azuay", "Bolivar", "Cañar", "Carchi", "Chimborazo", "Cotopaxi", "El Oro", "Esmeraldas", "Galapagos", "Guayas", "Imbabura", "Loja", "Los Rios", "Manabi", "Morona Santiago", "Napo", "Orellana", "Pastaza", "Pichincha", "Santa Elena", "Santo Domingo de los Tsachilas", "Sucumbios", "Tungurahua", "Zamora Chinchipe"]] : null,
    (region ?? "EE") === "EE" ? ["Estonia (Eesti)", "EE", "372", "+...-...-....", "🇪🇪", "Counties", ["Harju County", "Hiiu County", "Ida-Viru County", "Järva County", "Jõgeva County", "Lääne County", "Lääne-Viru County", "Põlva County", "Pärnu County", "Rapla County", "Saare County", "Tartu County", "Valga County", "Viljandi County", "Võru County"]] : null,
    (region ?? "EG") === "EG" ? ["Egypt (‫مصر‬‎)", "EG", "20", "+..(...)...-....", "🇪🇬", "Governorates", ["Alexandria", "Aswan", "Asyut", "Beheira", "Beni Suef", "Cairo", "Dakahlia", "Damietta", "Faiyum", "Gharbia", "Giza", "Ismailia", "Kafr El Sheikh", "Luxor", "Matruh", "Minya", "Monufia", "New Valley", "North Sinai", "Port Said", "Qalyubia", "Qena", "Red Sea", "Sharqia", "Sohag", "South Sinai", "Suez"]] : null,
    (region ?? "EH") === "EH" ? ["Western Sahara", "EH", "212", "+...-..-....", "🇪🇭", "Provinces", ["Laayoune", "Dakhla", "Smara", "Boujdour", "Aousserd"]] : null,
    (region ?? "ER") === "ER" ? ["Eritrea", "ER", "291", "+...-.-...-...", "🇪🇷", "Regions", ["Anseba", "Debub", "Gash-Barka", "Maekel", "Northern Red Sea", "Southern Red Sea"]] : null,
    (region ?? "ET") === "ET" ? ["Ethiopia", "ET", "251", "+...-..-...-....", "🇪🇹", "Regions", ["Addis Ababa", "Afar", "Amhara", "Benishangul-Gumuz", "Dire Dawa", "Gambela", "Harari", "Oromia", "Sidama", "Somali", "Southern Nations, Nationalities, and Peoples' Region", "Tigray"]] : null,
    (region ?? "FI") === "FI" ? ["Finland (Suomi)", "FI", "358", "+... .. .... ....", "🇫🇮", "Regions", ["Åland Islands", "Central Finland", "Central Ostrobothnia", "Eastern Finland", "Kainuu", "Kanta-Häme", "Kymenlaakso", "Lapland", "North Karelia", "Northern Ostrobothnia", "Northern Savonia", "Ostrobothnia", "Päijänne Tavastia", "Pirkanmaa", "Satakunta", "South Karelia", "Southern Ostrobothnia", "Southern Savonia", "Tavastia Proper", "Uusimaa", "Varsinais-Suomi"]] : null,
    (region ?? "FJ") === "FJ" ? ["Fiji", "FJ", "679", "+...-..-.....", "🇫🇯", "Divisions", ["Central", "Eastern", "Northern", "Western"]] : null,
    (region ?? "FK") === "FK" ? ["Falkland Islands (Islas Malvinas)", "FK", "500", "+...-.....", "🇫🇰", "Regions", ["East Falkland", "West Falkland", "Staten Island"]] : null,
    (region ?? "FM") === "FM" ? ["Micronesia", "FM", "691", "+...-...-....", "🇫🇲", "States", ["Chuuk", "Kosrae", "Pohnpei", "Yap"]] : null,
    (region ?? "FO") === "FO" ? ["Faroe Islands (Føroyar)", "FO", "298", "+...-...-...", "🇫🇴", "Municipalities", ["Tórshavn", "Klaksvík", "Runavík", "Eystur", "Vágar"]] : null,
    (region ?? "FR") === "FR" ? ["France", "FR", "33", "+.. . .. .. .. ..", "🇫🇷", "Regions", ["Auvergne-Rhône-Alpes", "Bourgogne-Franche-Comté", "Brittany", "Centre-Val de Loire", "Corsica", "Grand Est", "Hauts-de-France", "Île-de-France", "Normandy", "Nouvelle-Aquitaine", "Occitanie", "Pays de la Loire", "Provence-Alpes-Côte d'Azur"]] : null,
    (region ?? "GA") === "GA" ? ["Gabon", "GA", "241", "+...-.-..-..-..", "🇬🇦", "Provinces", ["Estuaire", "Haut-Ogooué", "Moyen-Ogooué", "Ngounié", "Nyanga", "Ogooué-Ivindo", "Ogooué-Lolo", "Ogooué-Maritime", "Woleu-Ntem"]] : null,
    (region ?? "GB") === "GB" ? ["United Kingdom", "GB", "44", "+.. .... ......", "🇬🇧", "States", ["England", "Scotland", "Wales", "Northern Ireland"]] : null,
    (region ?? "GD") === "GD" ? ["Grenada", "GD", "1473", "+.(...)...-....", "🇬🇩", "Parishes", ["Saint Andrew", "Saint David", "Saint George", "Saint John", "Saint Mark", "Saint Patrick"]] : null,
    (region ?? "GE") === "GE" ? ["Georgia (საქართველო)", "GE", "995", "+...(...)...-...", "🇬🇪", "Regions", ["Abkhazia", "Adjara", "Guria", "Imereti", "Kakheti", "Kvemo Kartli", "Mtskheta-Mtianeti", "Racha-Lechkhumi and Kvemo Svaneti", "Samegrelo-Zemo Svaneti", "Samtskhe-Javakheti", "Shida Kartli", "Tbilisi"]] : null,
    (region ?? "GF") === "GF" ? ["French Guiana (Guyane française)", "GF", "594", "+...-.....-....", "🇬🇫", ["Arrondissements", "Communes"], { "Arrondissements": ["Cayenne", "Saint-Laurent-du-Maroni"], "Communes": ["Matoury", "Kourou", "Remire-Montjoly"] }] : null,
    (region ?? "GG") === "GG" ? ["Guernsey", "GG", "44", "", "🇬🇬", "Parishes", ["Castel", "Forest", "St. Andrew", "St. Martin", "St. Peter Port", "St. Pierre du Bois", "St. Sampson", "St. Saviour", "Torteval", "Vale"]] : null,
    (region ?? "GH") === "GH" ? ["Ghana (Gaana)", "GH", "233", "+...(...)...-...", "🇬🇭", "Regions", ["Ashanti", "Brong-Ahafo", "Central", "Eastern", "Greater Accra", "Northern", "Upper East", "Upper West", "Volta", "Western"]] : null,
    (region ?? "GI") === "GI" ? ["Gibraltar", "GI", "350", "+...-...-.....", "🇬🇮", "Districts", ["East Side", "North District", "South District", "Town Area", "Westside"]] : null,
    (region ?? "GL") === "GL" ? ["Greenland (Kalaallit Nunaat)", "GL", "299", "+...-..-..-..", "🇬🇱", "Municipalities", ["Kujalleq", "Qaasuitsup", "Qeqqata", "Sermersooq"]] : null,
    (region ?? "GM") === "GM" ? ["Gambia", "GM", "220", "+...(...)..-..", "🇬🇲", "Divisions", ["Banjul", "Lower River", "Central River", "North Bank", "Upper River", "West Coast"]] : null,
    (region ?? "GN") === "GN" ? ["Guinea (Guinée)", "GN", "224", "+...-..-...-...", "🇬🇳", "Regions", ["Boké", "Conakry", "Faranah", "Kankan", "Kindia", "Labé", "Mamou", "Nzérékoré"]] : null,
    (region ?? "GP") === "GP" ? ["Guadeloupe", "GP", "590", "", "🇬🇵", ["Arrondissements", "Cantons", "Communes"], { "Arrondissements": ["Basse-Terre", "Pointe-à-Pitre"], "Cantons": [], "Communes": ["Les Abymes", "Baie-Mahault", "Le Gosier", "Petit-Bourg"] }, 0] : null,
    (region ?? "GQ") === "GQ" ? ["Equatorial Guinea (Guinea Ecuatorial)", "GQ", "240", "+...-..-...-....", "🇬🇶", "Provinces", ["Annobón", "Bioko Norte", "Bioko Sur", "Centro Sur", "Kié-Ntem", "Litoral", "Wele-Nzas"]] : null,
    (region ?? "GR") === "GR" ? ["Greece (Ελλάδα)", "GR", "30", "+..(...)...-....", "🇬🇷", "Regions", ["Attica", "Central Greece", "Central Macedonia", "Crete", "Eastern Macedonia and Thrace", "Epirus", "Ionian Islands", "North Aegean", "Peloponnese", "South Aegean", "Thessaly", "Western Greece", "Western Macedonia"]] : null,
    (region ?? "GS") === "GS" ? ["South Georgia and the South Sandwich Islands", "GS", "500", "", "🇬🇸"] : null,
    (region ?? "GT") === "GT" ? ["Guatemala", "GT", "502", "+... ....-....", "🇬🇹", "Departments", ["Alta Verapaz", "Baja Verapaz", "Chimaltenango", "Chiquimula", "El Progreso", "Escuintla", "Guatemala", "Huehuetenango", "Izabal", "Jalapa", "Jutiapa", "Petén", "Quetzaltenango", "Quiché", "Retalhuleu", "Sacatepéquez", "San Marcos", "Santa Rosa", "Sololá", "Suchitepéquez", "Totonicapán", "Zacapa"]] : null,
    (region ?? "GU") === "GU" ? ["Guam", "GU", "1671", "+.(...)...-....", "🇬🇺", "Villages", ["Agana Heights", "Agat", "Asan", "Barrigada", "Chalan Pago-Ordot", "Dededo", "Hagatna", "Inarajan", "Mangilao", "Merizo", "Mongmong-Toto-Maite", "Piti", "Santa Rita", "Sinajana", "Talofofo", "Tamuning", "Umatac", "Yigo", "Yona"]] : null,
    (region ?? "GW") === "GW" ? ["Guinea-Bissau (Guiné Bissau)", "GW", "245", "+...-.-......", "🇬🇼", "Regions", ["Bafatá", "Biombo", "Bolama", "Cacheu", "Gabú", "Oio", "Quinara", "Tombali"]] : null,
    (region ?? "GY") === "GY" ? ["Guyana", "GY", "592", "+...-...-....", "🇬🇾", "Regions", ["Barima-Waini", "Cuyuni-Mazaruni", "Demerara-Mahaica", "East Berbice-Corentyne", "Essequibo Islands-West Demerara", "Mahaica-Berbice", "Pomeroon-Supenaam", "Potaro-Siparuni", "Upper Demerara-Berbice", "Upper Takutu-Upper Essequibo"]] : null,
    (region ?? "HK") === "HK" ? ["Hong Kong (香港)", "HK", "852", "+... .... ....", "🇭🇰", "Districts", ["Central and Western", "Eastern", "Islands", "Kowloon City", "Kwai Tsing", "Kwun Tong", "North", "Sai Kung", "Sha Tin", "Sham Shui Po", "Southern", "Tai Po", "Tsuen Wan", "Tuen Mun", "Wan Chai", "Wong Tai Sin", "Yau Tsim Mong", "Yuen Long"]] : null,
    (region ?? "HM") === "HM" ? ["Heard Island and McDonald Islands", "HM", "672", "", "🇭🇲"] : null,
    (region ?? "HN") === "HN" ? ["Honduras", "HN", "504", "+...-....-....", "🇭🇳", "Departments", ["Atlántida", "Choluteca", "Colón", "Comayagua", "Copán", "Cortés", "El Paraíso", "Francisco Morazán", "Gracias a Dios", "Intibucá", "Islas de la Bahía", "La Paz", "Lempira", "Ocotepeque", "Olancho", "Santa Bárbara", "Valle", "Yoro"]] : null,
    (region ?? "HR") === "HR" ? ["Croatia (Hrvatska)", "HR", "385", "+...-..-...-...", "🇭🇷", "Counties", ["Zagreb County", "Krapina-Zagorje County", "Sisak-Moslavina County", "Karlovačka County", "Varaždin County", "Koprivnica-Križevci County", "Bjelovar-Bilogora County", "Primorje-Gorski Kotar County", "Lika-Senj County", "Virovitica-Podravina County", "Požega-Slavonia County", "Brod-Posavina County", "Zadar County", "Osijek-Baranja County", "Šibenik-Knin County", "Vukovar-Syrmia County", "Split-Dalmatia County", "Istria County", "Dubrovnik-Neretva County", "Međimurje County", "Grad Zagreb"]] : null,
    (region ?? "HT") === "HT" ? ["Haiti", "HT", "509", "+... ....-....", "🇭🇹", "Departments", ["Artibonite", "Centre", "Grand'Anse", "Nippes", "Nord", "Nord-Est", "Nord-Ouest", "Ouest", "Sud", "Sud-Est"]] : null,
    (region ?? "HU") === "HU" ? ["Hungary (Magyarország)", "HU", "36", "+..(...)...-...", "🇭🇺", "Counties", ["Bács-Kiskun", "Baranya", "Békés", "Borsod-Abaúj-Zemplén", "Csongrád-Csanád", "Fejér", "Győr-Moson-Sopron", "Hajdú-Bihar", "Heves", "Jász-Nagykun-Szolnok", "Komárom-Esztergom", "Nógrád", "Pest", "Somogy", "Szabolcs-Szatmár-Bereg", "Tolna", "Vas", "Veszprém", "Zala"]] : null,
    (region ?? "ID") === "ID" ? ["Indonesia", "ID", "62", "+..-..-...-..", "🇮🇩", "Provinces", ["Aceh", "Bali", "Bangka Belitung", "Banten", "Bengkulu", "Central Java", "Central Kalimantan", "Central Sulawesi", "East Java", "East Kalimantan", "East Nusa Tenggara", "Gorontalo", "Jakarta", "Jambi", "Lampung", "Maluku", "North Kalimantan", "North Maluku", "North Sulawesi", "North Sumatra", "Papua", "Riau", "Riau Islands", "South Kalimantan", "South Sulawesi", "South Sumatra", "Southeast Sulawesi", "West Java", "West Kalimantan", "West Nusa Tenggara", "West Papua", "West Sulawesi", "West Sumatra", "Yogyakarta"]] : null,
    (region ?? "IE") === "IE" ? ["Ireland", "IE", "353", "+... .. .......", "🇮🇪", "Counties", ["Carlow", "Cavan", "Clare", "Cork", "Donegal", "Dublin", "Galway", "Kerry", "Kildare", "Kilkenny", "Laois", "Leitrim", "Limerick", "Longford", "Louth", "Mayo", "Meath", "Monaghan", "Offaly", "Roscommon", "Sligo", "Tipperary", "Waterford", "Westmeath", "Wexford", "Wicklow"]] : null,
    (region ?? "IL") === "IL" ? ["Israel (‫ישראל‬‎)", "IL", "972", "+...-.-...-....", "🇮🇱", "Districts", ["Central", "Haifa", "Jerusalem", "Northern", "Southern", "Tel Aviv"]] : null,
    (region ?? "IM") === "IM" ? ["Isle of Man", "IM", "44", "", "🇮🇲", ["Parishes", "Sheadings"], { "Parishes": ["Andreas", "Arbory", "Ballaugh", "Braddan", "Bride", "Castletown", "Douglas", "German", "Jurby", "Laxey", "Lezayre", "Lonan", "Malew", "Marown", "Maughold", "Michael", "Onchan", "Patrick", "Peel", "Port Erin", "Port St Mary", "Ramsey", "Rushen"], "Sheadings": ["Garff", "Glenfaba", "Middle", "Peel", "Rushen"] }] : null,
    (region ?? "IN") === "IN" ? ["India (भारत)", "IN", "91", "+.. .....-.....", "🇮🇳", "States", ["Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh", "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka", "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal"]] : null,
    (region ?? "IO") === "IO" ? ["British Indian Ocean Territory", "IO", "246", "+...-...-....", "🇮🇴"] : null,
    (region ?? "IQ") === "IQ" ? ["Iraq (‫العراق‬‎)", "IQ", "964", "+...(...)...-....", "🇮🇶", "Governorates", ["Al Anbar", "Babil", "Baghdad", "Basra", "Dhi Qar", "Diyala", "Dohuk", "Erbil", "Karbala", "Kirkuk", "Maysan", "Muthanna", "Najaf", "Nineveh", "Qadisiyyah", "Saladin", "Sulaymaniyah", "Wasit"]] : null,
    (region ?? "IR") === "IR" ? ["Iran (‫ایران‬‎)", "IR", "98", "+..(...)...-....", "🇮🇷", "Provinces", ["Alborz", "Ardabil", "Bushehr", "Chaharmahal and Bakhtiari", "East Azerbaijan", "Isfahan", "Fars", "Gilan", "Golestan", "Hamadan", "Hormozgan", "Ilam", "Kerman", "Kermanshah", "Khuzestan", "Kohgiluyeh and Boyer-Ahmad", "Kurdistan", "Lorestan", "Markazi", "Mazandaran", "North Khorasan", "Qazvin", "Qom", "Razavi Khorasan", "Semnan", "Sistan and Baluchestan", "South Khorasan", "Tehran", "West Azerbaijan", "Yazd", "Zanjan"]] : null,
    (region ?? "IS") === "IS" ? ["Iceland (Ísland)", "IS", "354", "+... ... ....", "🇮🇸", "Regions", ["Capital Region", "Southern Peninsula", "Western Region", "Westfjords", "Northwest Region", "Northeast Region", "East Region", "South Region"]] : null,
    (region ?? "IT") === "IT" ? ["Italy (Italia)", "IT", "39", "+.. ... ......", "🇮🇹", "Regions", ["Abruzzo", "Basilicata", "Calabria", "Campania", "Emilia-Romagna", "Friuli-Venezia Giulia", "Lazio", "Liguria", "Lombardia", "Marche", "Molise", "Piemonte", "Puglia", "Sardegna", "Sicilia", "Toscana", "Trentino-Alto Adige", "Umbria", "Valle d'Aosta", "Veneto"], 0] : null,
    (region ?? "JE") === "JE" ? ["Jersey", "JE", "44", "", "🇯🇪", "Parishes", ["Grouville", "Saint Brelade", "Saint Clement", "Saint Helier", "Saint John", "Saint Lawrence", "Saint Martin", "Saint Mary", "Saint Ouen", "Saint Peter", "Saint Saviour", "Trinity"]] : null,
    (region ?? "JM") === "JM" ? ["Jamaica", "JM", "1876", "+.(...)...-....", "🇯🇲", "Parishes", ["Clarendon", "Hanover", "Kingston", "Manchester", "Portland", "Saint Andrew", "Saint Ann", "Saint Catherine", "Saint Elizabeth", "Saint James", "Saint Mary", "Saint Thomas", "Trelawny", "Westmoreland"]] : null,
    (region ?? "JO") === "JO" ? ["Jordan (‫الأردن‬‎)", "JO", "962", "+...-.-....-....", "🇯🇴", "Governorates", ["Ajloun", "Amman", "Aqaba", "Balqa", "Irbid", "Jarash", "Karak", "Ma'an", "Madaba", "Mafraq", "Tafilah", "Zarqa"]] : null,
    (region ?? "JP") === "JP" ? ["Japan (日本)", "JP", "81", "+.. ... .. ....", "🇯🇵", "Prefectures", ["Aichi", "Akita", "Aomori", "Chiba", "Ehime", "Fukui", "Fukuoka", "Fukushima", "Gifu", "Gunma", "Hiroshima", "Hokkaido", "Hyogo", "Ibaraki", "Ishikawa", "Iwate", "Kagawa", "Kagoshima", "Kanagawa", "Kochi", "Kumamoto", "Kyoto", "Mie", "Miyagi", "Miyazaki", "Nagano", "Nagasaki", "Nara", "Niigata", "Oita", "Okayama", "Okinawa", "Osaka", "Saga", "Saitama", "Shiga", "Shimane", "Shizuoka", "Tochigi", "Tokushima", "Tokyo", "Tottori", "Toyama", "Wakayama", "Yamagata", "Yamaguchi", "Yamanashi"]] : null,
    (region ?? "KE") === "KE" ? ["Kenya", "KE", "254", "+...-...-......", "🇰🇪", "Counties", ["Baringo", "Bomet", "Bungoma", "Busia", "Elgeyo-Marakwet", "Embu", "Garissa", "Homa Bay", "Isiolo", "Kajiado", "Kakamega", "Kericho", "Kiambu", "Kilifi", "Kirinyaga", "Kisii", "Kisumu", "Kitui", "Kwale", "Laikipia", "Lamu", "Machakos", "Makueni", "Mandera", "Marsabit", "Meru", "Migori", "Mombasa", "Murang'a", "Nairobi", "Nakuru", "Nandi", "Narok", "Nyamira", "Nyandarua", "Nyeri", "Samburu", "Siaya", "Taita-Taveta", "Tana River", "Tharaka-Nithi", "Trans-Nzoia", "Turkana", "Uasin Gishu", "Vihiga", "Wajir", "West Pokot"]] : null,
    (region ?? "KG") === "KG" ? ["Kyrgyzstan (Кыргызстан)", "KG", "996", "+...(...)...-...", "🇰🇬", "Regions", ["Batken", "Chuy", "Issyk-Kul", "Jalal-Abad", "Naryn", "Osh", "Talas"]] : null,
    (region ?? "KH") === "KH" ? ["Cambodia (កម្ពុជា)", "KH", "855", "+...-..-...-...", "🇰🇭", "Provinces", ["Banteay Meanchey", "Battambang", "Kampong Cham", "Kampong Chhnang", "Kampong Speu", "Kampong Thom", "Kampot", "Kandal", "Kep", "Koh Kong", "Kratie", "Mondulkiri", "Oddar Meanchey", "Pailin", "Phnom Penh", "Preah Sihanouk", "Preah Vihear", "Pursat", "Ratanakiri", "Siem Reap", "Stung Treng", "Svay Rieng", "Takéo", "Tboung Khmum"]] : null,
    (region ?? "KI") === "KI" ? ["Kiribati", "KI", "686", "+...-..-...", "🇰🇮", "Islands", ["Banaba", "Gilbert Islands", "Line Islands", "Phoenix Islands"]] : null,
    (region ?? "KM") === "KM" ? ["Comoros (‫جزر القمر‬‎)", "KM", "269", "+...-..-.....", "🇰🇲", "Regions", ["Grande Comore", "Anjouan", "Mohéli"]] : null,
    (region ?? "KN") === "KN" ? ["Saint Kitts and Nevis", "KN", "1869", "+.(...)...-....", "🇰🇳", "Parishes", ["Christ Church Nichola Town", "Saint Anne Sandy Point", "Saint George Basseterre", "Saint John Capisterre", "Saint Mary Cayon", "Saint Paul Capisterre", "Saint Peter Basseterre", "Saint Thomas Lowland", "Saint Thomas Middle Island", "Trinity Palmetto Point"]] : null,
    (region ?? "KP") === "KP" ? ["North Korea (조선 민주주의 인민 공화국)", "KP", "850", "+...-...-...", "🇰🇵", "Provinces", ["Chagang", "North Hamgyong", "South Hamgyong", "North Hwanghae", "South Hwanghae", "Kangwon", "North Pyongan", "South Pyongan", "Ryanggang"]] : null,
    (region ?? "KW") === "KW" ? ["Kuwait (‫الكويت‬‎)", "KW", "965", "+...-....-....", "🇰🇼", "Governorates", ["Al Ahmadi", "Al Farwaniyah", "Al Jahra", "Capital", "Hawalli", "Mubarak Al-Kabeer"]] : null,
    (region ?? "KY") === "KY" ? ["Cayman Islands", "KY", "1345", "+.(...)...-....", "🇰🇾", "Districts", ["Bodden Town", "Cayman Brac", "East End", "George Town", "Little Cayman", "North Side", "Sister Islands", "West Bay"]] : null,
    (region ?? "KZ") === "KZ" ? ["Kazakhstan (Казахстан)", "KZ", "7", "+. ... ...-..-..", "🇰🇿", "Regions", ["Almaty", "Aqmola", "Aqtobe", "Atyrau", "East Kazakhstan", "Mangystau", "North Kazakhstan", "Nur-Sultan", "Pavlodar", "Qaragandy", "Qostanay", "Qyzylorda", "Shymkent", "Turkestan", "West Kazakhstan"], 1] : null,
    (region ?? "LA") === "LA" ? ["Laos (ລາວ)", "LA", "856", "+...-..-...-...", "🇱🇦", "Provinces", ["Attapeu", "Bokeo", "Bolikhamsai", "Champasak", "Houaphanh", "Khammouane", "Luang Namtha", "Luang Prabang", "Oudomxay", "Phongsaly", "Sainyabuli", "Salavan", "Savannakhet", "Sekong", "Vientiane", "Vientiane Prefecture", "Xaisomboun", "Xaisomboun Special Zone", "Xiangkhouang", "Xekong", "Xiangkhouang"]] : null,
    (region ?? "LB") === "LB" ? ["Lebanon (‫لبنان‬‎)", "LB", "961", "+...-.-...-...", "🇱🇧", "Governorates", ["Akkar", "Baalbek-Hermel", "Beirut", "Beqaa", "Mount Lebanon", "Nabatieh", "North", "South"]] : null,
    (region ?? "LC") === "LC" ? ["Saint Lucia", "LC", "1758", "+.(...)...-....", "🇱🇨", "Districts", ["Anse-la-Raye", "Canaries", "Castries", "Choiseul", "Dennery", "Gros Islet", "Laborie", "Micoud", "Soufrière", "Vieux Fort"]] : null,
    (region ?? "LI") === "LI" ? ["Liechtenstein", "LI", "423", "+...(...)...-....", "🇱🇮", "Municipalities", ["Balzers", "Eschen", "Gamprin", "Mauren", "Planken", "Ruggell", "Schaan", "Schellenberg", "Triesen", "Triesenberg", "Vaduz"]] : null,
    (region ?? "LR") === "LR" ? ["Liberia", "LR", "231", "+...-..-...-...", "🇱🇷", "Counties", ["Bomi", "Bong", "Gbarpolu", "Grand Bassa", "Grand Cape Mount", "Grand Gedeh", "Grand Kru", "Lofa", "Margibi", "Maryland", "Montserrado", "Nimba", "River Cess", "River Gee", "Sinoe"]] : null,
    (region ?? "LS") === "LS" ? ["Lesotho", "LS", "266", "+...-.-...-....", "🇱🇸", "Districts", ["Berea", "Butha-Buthe", "Leribe", "Mafeteng", "Maseru", "Mohale's Hoek", "Mokhotlong", "Qacha's Nek", "Quthing", "Thaba-Tseka"]] : null,
    (region ?? "LT") === "LT" ? ["Lithuania (Lietuva)", "LT", "370", "+...(...)..-...", "🇱🇹", "Counties", ["Alytus County", "Kaunas unknownounty", "Klaipeda County", "Marijampole County", "Panevezys County", "Siauliai County", "Taurage County", "Telsiai County", "Utena County", "Vilnius County"]] : null,
    (region ?? "LU") === "LU" ? ["Luxembourg", "LU", "352", "+...(...)...-...", "🇱🇺", "Cantons", ["Diekirch", "Grevenmacher", "Luxembourg"]] : null,
    (region ?? "LV") === "LV" ? ["Latvia (Latvija)", "LV", "371", "+...-..-...-...", "🇱🇻", "Regions", ["Aizkraukle", "Aluksne", "Balvi", "Bauska", "Cesis", "Daugavpils", "Dobele", "Gulbene", "Jekabpils", "Jelgava", "Jurmala", "Kraslava", "Kuldiga", "Liepaja", "Limbazi", "Ludza", "Madona", "Ogre", "Preili", "Rezekne", "Riga", "Saldus", "Talsi", "Tukums", "Valka", "Valmiera", "Ventspils"]] : null,
    (region ?? "LY") === "LY" ? ["Libya (‫ليبيا‬‎)", "LY", "218", "+...-..-...-...", "🇱🇾", "Regions", ["Al Wahat", "Benghazi", "Derna", "Ghat", "Jabal al Akhdar", "Jabal al Gharbi", "Jafara", "Jufra", "Kufra", "Marj", "Misrata", "Murqub", "Murzuq", "Nalut", "Nuqat al Khams", "Sabha", "Sirte", "Tripoli", "Wadi al Hayaa", "Wadi al Shatii", "Zawiya"]] : null,
    (region ?? "MA") === "MA" ? ["Morocco (‫المغرب‬‎)", "MA", "212", "+...-..-....-...", "🇲🇦", "Regions", ["Tanger-Tétouan-Al Hoceïma", "Oriental", "Fès-Meknès", "Rabat-Salé-Kénitra", "Béni Mellal-Khénifra", "Casablanca-Settat", "Marrakesh-Safi", "Drâa-Tafilalet", "Souss-Massa", "Guelmim-Oued Noun", "Laâyoune-Sakia El Hamra", "Dakhla-Oued Ed-Dahab"]] : null,
    (region ?? "MC") === "MC" ? ["Monaco", "MC", "377", "+...-..-...-...", "🇲🇨", "Districts", ["Monaco-Ville", "La Condamine", "Monte Carlo", "Fontvieille"]] : null,
    (region ?? "MD") === "MD" ? ["Moldova (Republica Moldova)", "MD", "373", "+...-....-....", "🇲🇩", "Regions", ["Anenii Noi", "Basarabeasca", "Briceni", "Cahul", "Călărași", "Cantemir", "Căușeni", "Cimișlia", "Criuleni", "Dondușeni", "Drochia", "Dubăsari", "Edineț", "Fălești", "Florești", "Găgăuzia", "Glodeni", "Hîncești", "Ialoveni", "Leova", "Nisporeni", "Ocnița", "Orhei", "Rezina", "Rîșcani", "Sîngerei", "Șoldănești", "Soroca", "Strășeni", "Ștefan Vodă", "Taraclia", "Telenești", "Ungheni"]] : null,
    (region ?? "ME") === "ME" ? ["Montenegro (Crna Gora)", "ME", "382", "+...-..-...-...", "🇲🇪", "Municipalities", ["Andrijevica", "Bar", "Berane", "Bijelo Polje", "Budva", "Cetinje", "Danilovgrad", "Gusinje", "Herceg Novi", "Kolašin", "Kotor", "Mojkovac", "Nikšić", "Petnjica", "Plav", "Pljevlja", "Plužine", "Podgorica", "Rožaje", "Šavnik", "Tivat", "Ulcinj", "Žabljak"]] : null,
    (region ?? "MF") === "MF" ? ["Saint Martin (Sant-Martin (partie française))", "MF", "590", "", "🇲🇫", "Parishes", ["Marigot"], 2] : null,
    (region ?? "MG") === "MG" ? ["Madagascar (Madagasikara)", "MG", "261", "+...-..-..-.....", "🇲🇬", "Provinces", ["Antananarivo", "Antsiranana", "Fianarantsoa", "Mahajanga", "Toamasina", "Toliara"]] : null,
    (region ?? "MH") === "MH" ? ["Marshall Islands", "MH", "692", "+...-...-....", "🇲🇭", "Municipalities", ["Ailinglaplap", "Ailuk", "Arno", "Aur", "Bikini", "Ebon", "Enewetak", "Jabat", "Jaluit", "Kili", "Kwajalein", "Lae", "Lib", "Likiep", "Majuro", "Maloelap", "Mejit", "Mili", "Namdrik", "Namu", "Rongelap", "Ujae", "Ujelang", "Utirik", "Wotho", "Wotje"]] : null,
    (region ?? "MK") === "MK" ? ["Macedonia (FYROM) (Македонија)", "MK", "389", "+...-..-...-...", "🇲🇰", "Regions", ["Skopje", "Pelagonia", "Polog", "Vardar", "Eastern", "Southwestern", "Northeastern", "Southeastern"]] : null,
    (region ?? "ML") === "ML" ? ["Mali", "ML", "223", "+...-..-..-....", "🇲🇱", "Regions", ["Bamako", "Gao", "Kayes", "Kidal", "Koulikoro", "Mopti", "Segou", "Sikasso", "Tombouctou"]] : null,
    (region ?? "MM") === "MM" ? ["Myanmar (Burma) (မြန်မာ)", "MM", "95", "+..-...-...", "🇲🇲", ["States", "Regions"], { "States": ["Ayeyarwady", "Bago", "Chin", "Kachin", "Kayah", "Kayin", "Magway", "Mandalay", "Mon", "Naypyidaw Union Territory", "Rakhine", "Sagaing", "Shan", "Tanintharyi", "Yangon"], "Regions": ["Sagaing", "Tanintharyi", "Bago", "Magway", "Mandalay", "Yangon", "Ayeyarwady", "Kachin", "Kayah", "Kayin", "Chin", "Mon", "Rakhine", "Shan"] }] : null,
    (region ?? "MN") === "MN" ? ["Mongolia (Монгол)", "MN", "976", "+...-..-..-....", "🇲🇳", "Aimags", ["Arkhangai", "Bayan-Ölgii", "Bayankhongor", "Bulgan", "Darkhan-Uul", "Dornod", "Dornogovi", "Dundgovi", "Govi-Altai", "Govisümber", "Khentii", "Khovd", "Khövsgöl", "Ömnögovi", "Orkhon", "Övörkhangai", "Selenge", "Sükhbaatar", "Töv", "Uvs", "Zavkhan"]] : null,
    (region ?? "MO") === "MO" ? ["Macau (澳門)", "MO", "853", "+...-....-....", "🇲🇴", "Freguesias", ["Nossa Senhora de Fátima", "Santo António", "São Lázaro", "São Lourenço", "São Francisco Xavier", "Sé", "Coloane", "Taipa"]] : null,
    (region ?? "MP") === "MP" ? ["Northern Mariana Islands", "MP", "1670", "+.(...)...-....", "🇲🇵", "Municipalities", ["Northern Islands", "Rota", "Saipan", "Tinian"]] : null,
    (region ?? "MQ") === "MQ" ? ["Martinique", "MQ", "596", "+...(...)..-..-..", "🇲🇶", ["Arrondissements", "Cantons", "Communes"], { "Arrondissements": ["Fort-de-France", "La Trinité", "Le Marin", "Le Robert", "Saint-Pierre"], "Cantons": ["Fort-de-France-1", "Fort-de-France-2", "Fort-de-France-3", "Fort-de-France-4", "Le François", "Le Lamentin-1", "Le Lamentin-2", "Le Marin", "Le Robert", "Sainte-Anne", "Sainte-Luce", "Saint-Esprit", "Saint-Joseph", "Saint-Pierre"], "Communes": ["Basse-Pointe", "Bellefontaine", "Case-Pilote", "Ducos", "Fonds-Saint-Denis", "Fort-de-France", "Grand'Rivière", "Gros-Morne", "Le Carbet", "Le Diamant", "Le François", "Le Lamentin", "Le Lorrain", "Le Marigot", "Le Marin", "Le Morne-Rouge", "Le Morne-Vert", "Le Prêcheur", "Le Robert", "Le Vauclin", "Les Anses-d'Arlet", "Les Trois-Îlets", "Macouba", "Rivière-Pilote", "Rivière-Salée", "Sainte-Anne", "Sainte-Luce", "Sainte-Marie", "Saint-Esprit", "Saint-Joseph", "Saint-Pierre", "Schœlcher", "Trinité", "Trois-Rivières"] }] : null,
    (region ?? "MR") === "MR" ? ["Mauritania (‫موريتانيا‬‎)", "MR", "222", "+...-..-..-....", "🇲🇷", "Regions", ["Adrar", "Assaba", "Brakna", "Dakhlet Nouadhibou", "Gorgol", "Guidimaka", "Hodh Ech Chargui", "Hodh El Gharbi", "Inchiri", "Nouakchott Nord", "Nouakchott Ouest", "Nouakchott Sud", "Tagant", "Tiris Zemmour", "Trarza"]] : null,
    (region ?? "MS") === "MS" ? ["Montserrat", "MS", "1664", "+.(...)...-....", "🇲🇸", "Parishes", ["Saint Anthony", "Saint Georges", "Saint Peter"]] : null,
    (region ?? "MT") === "MT" ? ["Malta", "MT", "356", "+...-....-....", "🇲🇹", "Districts", ["Gozo", "Malta"]] : null,
    (region ?? "MU") === "MU" ? ["Mauritius (Moris)", "MU", "230", "+...-...-....", "🇲🇺", "Districts", ["Black River", "Flacq", "Grand Port", "Moka", "Pamplemousses", "Plaines Wilhems", "Port Louis", "Rivière du Rempart", "Savanne"]] : null,
    (region ?? "MV") === "MV" ? ["Maldives", "MV", "960", "+...-...-....", "🇲🇻", "Atolls", ["Ari Atoll", "Faafu Atoll", "Lhaviyani Atoll", "Malé Atoll", "Baa Atoll", "Dhaalu Atoll", "Gaafu Alif Atoll", "Haa Alif Atoll", "Kaafu Atoll", "Laamu Atoll", "Meemu Atoll", "Noonu Atoll", "Raa Atoll", "Seenu Atoll", "Thaa Atoll", "Vaavu Atoll"]] : null,
    (region ?? "MW") === "MW" ? ["Malawi", "MW", "265", "+...-.-....-....", "🇲🇼", "Districts", ["Balaka", "Blantyre", "Chikwawa", "Chiradzulu", "Chitipa", "Dedza", "Dowa", "Karonga", "Kasungu", "Likoma", "Lilongwe", "Machinga", "Mangochi", "Mchinji", "Mulanje", "Mwanza", "Mzimba", "Neno", "Nkhata Bay", "Nkhotakota", "Nsanje", "Ntcheu", "Ntchisi", "Phalombe", "Rumphi", "Salima", "Thyolo", "Zomba"]] : null,
    (region ?? "MX") === "MX" ? ["Mexico (México)", "MX", "52", "+..-..-..-....", "🇲🇽", "States", ["Aguascalientes", "Baja California", "Baja California Sur", "Campeche", "Chiapas", "Chihuahua", "Coahuila", "Colima", "Durango", "Guanajuato", "Guerrero", "Hidalgo", "Jalisco", "México", "Michoacán", "Morelos", "Nayarit", "Nuevo León", "Oaxaca", "Puebla", "Querétaro", "Quintana Roo", "San Luis Potosí", "Sinaloa", "Sonora", "Tabasco", "Tamaulipas", "Tlaxcala", "Veracruz", "Yucatán", "Zacatecas"]] : null,
    (region ?? "MY") === "MY" ? ["Malaysia", "MY", "60", "+.. ..-....-....", "🇲🇾", "States", ["Johor", "Kedah", "Kelantan", "Melaka", "Negeri Sembilan", "Pahang", "Perak", "Perlis", "Pulau Pinang", "Sabah", "Sarawak", "Selangor", "Terengganu", "Wilayah Persekutuan Kuala Lumpur", "Wilayah Persekutuan Labuan", "Wilayah Persekutuan Putrajaya"]] : null,
    (region ?? "MZ") === "MZ" ? ["Mozambique (Moçambique)", "MZ", "258", "+...-..-...-...", "🇲🇿", "Provinces", ["Cabo Delgado", "Gaza", "Inhambane", "Manica", "Maputo", "Nampula", "Niassa", "Sofala", "Tete", "Zambezia"]] : null,
    (region ?? "NA") === "NA" ? ["Namibia (Namibië)", "NA", "264", "+...-..-...-....", "🇳🇦", "Regions", ["Erongo", "Hardap", "Karas", "Kavango East", "Kavango West", "Khomas", "Kunene", "Ohangwena", "Omaheke", "Omusati", "Oshana", "Oshikoto", "Otjozondjupa", "Zambezi"]] : null,
    (region ?? "NC") === "NC" ? ["New Caledonia (Nouvelle-Calédonie)", "NC", "687", "+...-..-....", "🇳🇨", ["Provinces", "Communes"], { "Provinces": ["South Province", "North Province", "Loyalty Islands Province"], "Communes": ["Nouméa", "Mont-Dore", "Dumbéa", "Païta", "Yaté", "Bouloupari", "La Foa", "Sarraméa", "Farino", "Moindou", "Bourail", "Poya", "Koné", "Voh", "Kaala-Gomen", "Pouembout", "Poum", "Belep", "Hienghène", "Ponérihouen", "Kouaoua", "Canala", "Thio", "Yaté", "Île des Pins", "Lifou", "Maré", "Ouvéa"] }] : null,
    (region ?? "NE") === "NE" ? ["Niger (Nijar)", "NE", "227", "+...-..-..-....", "🇳🇪", "Regions", ["Agadez", "Diffa", "Dosso", "Maradi", "Tahoua", "Tillabéri", "Zinder"]] : null,
    (region ?? "NF") === "NF" ? ["Norfolk Island", "NF", "672", "+...-...-...", "🇳🇫"] : null,
    (region ?? "NG") === "NG" ? ["Nigeria", "NG", "234", "+...-..-...-..", "🇳🇬", "States", ["Abia", "Adamawa", "Akwa Ibom", "Anambra", "Bauchi", "Bayelsa", "Benue", "Borno", "Cross River", "Delta", "Ebonyi", "Edo", "Ekiti", "Enugu", "Gombe", "Imo", "Jigawa", "Kaduna", "Kano", "Katsina", "Kebbi", "Kogi", "Kwara", "Lagos", "Nasarawa", "Niger", "Ogun", "Ondo", "Osun", "Oyo", "Plateau", "Rivers", "Sokoto", "Taraba", "Yobe", "Zamfara", "Federal Capital Territory"]] : null,
    (region ?? "NI") === "NI" ? ["Nicaragua", "NI", "505", "+...-....-....", "🇳🇮", "Departments", ["Boaco", "Carazo", "Chinandega", "Chontales", "Estelí", "Granada", "Jinotega", "León", "Madriz", "Managua", "Masaya", "Matagalpa", "Nueva Segovia", "Río San Juan", "Rivas", "Atlántico Norte", "Atlántico Sur"]] : null,
    (region ?? "NL") === "NL" ? ["Netherlands (Nederland)", "NL", "31", "+.. .. ........", "🇳🇱", "Provinces", ["Drenthe", "Flevoland", "Friesland", "Gelderland", "Groningen", "Limburg", "Noord-Brabant", "Noord-Holland", "Overijssel", "Utrecht", "Zeeland", "Zuid-Holland"]] : null,
    (region ?? "NO") === "NO" ? ["Norway (Norge)", "NO", "47", "+.. ... .. ...", "🇳🇴", "Counties", ["Agder", "Innlandet", "Møre og Romsdal", "Nordland", "Oslo", "Rogaland", "Troms og Finnmark", "Trøndelag", "Vestfold og Telemark", "Vestland", "Viken"]] : null,
    (region ?? "NP") === "NP" ? ["Nepal (नेपाल)", "NP", "977", "+...-..-...-...", "🇳🇵", "Provinces", ["Province No. 1", "Province No. 2", "Bagmati Province", "Gandaki Province", "Lumbini Province", "Karnali Province", "Sudurpashchim Province"]] : null,
    (region ?? "NR") === "NR" ? ["Nauru", "NR", "674", "+...-...-....", "🇳🇷", "Districts", ["Aiwo", "Anabar", "Anetan", "Anibare", "Baiti", "Boe", "Buada", "Denigomodu", "Ewa", "Ijuw", "Meneng", "Nibok", "Uaboe", "Yaren"]] : null,
    (region ?? "NU") === "NU" ? ["Niue", "NU", "683", "+...-....", "🇳🇺", "Villages", ["Alofi", "Avatele", "Hakupu", "Hikutavake", "Lakepa", "Makefu", "Mutalau", "Namukulu", "Tamakautoga", "Toi", "Tuapa"]] : null,
    (region ?? "NZ") === "NZ" ? ["New Zealand", "NZ", "64", "+.. ...-...-....", "🇳🇿", "Regions", ["Northland", "Auckland", "Waikato", "Bay of Plenty", "Gisborne", "Hawke's Bay", "Taranaki", "Manawatu-Whanganui", "Wellington", "Tasman", "Nelson", "Marlborough", "West Coast", "Canterbury", "Otago", "Southland"]] : null,
    (region ?? "OM") === "OM" ? ["Oman (‫عُمان‬‎)", "OM", "968", "+...-..-...-...", "🇴🇲", "Governorates", ["Ad Dakhiliyah", "Ad Dhahirah", "Al Batinah North", "Al Batinah South", "Al Buraimi", "Al Wusta", "Ash Sharqiyah North", "Ash Sharqiyah South", "Dhofar", "Musandam", "Muscat"]] : null,
    (region ?? "PA") === "PA" ? ["Panama (Panamá)", "PA", "507", "+...-...-....", "🇵🇦", "Provinces", ["Bocas del Toro", "Chiriquí", "Coclé", "Colón", "Darién", "Emberá-Wounaan", "Guna Yala", "Herrera", "Los Santos", "Ngäbe-Buglé", "Panamá", "Panamá Oeste", "Veraguas"]] : null,
    (region ?? "PE") === "PE" ? ["Peru (Perú)", "PE", "51", "+..(...)...-...", "🇵🇪", "Regions", ["Amazonas", "Áncash", "Apurímac", "Arequipa", "Ayacucho", "Cajamarca", "Callao", "Cusco", "Huancavelica", "Huánuco", "Ica", "Junín", "La Libertad", "Lambayeque", "Lima", "Loreto", "Madre de Dios", "Moquegua", "Pasco", "Piura", "Puno", "San Martín", "Tacna", "Tumbes", "Ucayali"]] : null,
    (region ?? "PF") === "PF" ? ["French Polynesia (Polynésie française)", "PF", "689", "+...-..-..-..", "🇵🇫", ["Communes", "Subdivisions"], { "Communes": ["Papeete", "Faaa", "Punaauia"], "Subdivisions": ["Marquesas Islands", "Tuamotu-Gambier", "Tubuai Islands"] }] : null,
    (region ?? "PG") === "PG" ? ["Papua New Guinea", "PG", "675", "+...(...)..-...", "🇵🇬", "Regions", ["Bougainville", "Central", "Chimbu", "Eastern Highlands", "East New Britain", "East Sepik", "Enga", "Gulf", "Hela", "Jiwaka", "Madang", "Manus", "Milne Bay", "Morobe", "New Ireland", "Northern", "Southern Highlands", "Western", "West New Britain", "West Sepik", "Western Highlands"]] : null,
    (region ?? "PH") === "PH" ? ["Philippines", "PH", "63", "+.. ... ....", "🇵🇭", "Regions", ["Ilocos Region", "Cagayan Valley", "Central Luzon", "Calabarzon", "Mimaropa", "Bicol Region", "Western Visayas", "Central Visayas", "Eastern Visayas", "Zamboanga Peninsula", "Northern Mindanao", "Davao Region", "Soccsksargen", "Caraga", "Bangsamoro Autonomous Region in Muslim Mindanao", "Cordillera Administrative Region", "National Capital Region"]] : null,
    (region ?? "PK") === "PK" ? ["Pakistan (‫پاکستان‬‎)", "PK", "92", "+.. ...-.......", "🇵🇰", ["Provinces", "Territories"], { "Provinces": ["Balochistan", "Khyber Pakhtunkhwa", "Punjab", "Sindh"], "Territories": ["Islamabad Capital Territory", "Gilgit-Baltistan", "Azad Jammu and Kashmir"] }] : null,
    (region ?? "PL") === "PL" ? ["Poland (Polska)", "PL", "48", "+.. ...-...-...", "🇵🇱", "Provinces", ["Greater Poland", "Kuyavian-Pomeranian", "Lesser Poland", "Lodz", "Lower Silesian", "Lublin", "Lubusz", "Masovian", "Opole", "Podlasie", "Pomeranian", "Silesian", "Subcarpathian", "Swietokrzyskie", "Warmian-Masurian", "West Pomeranian"]] : null,
    (region ?? "PM") === "PM" ? ["Saint Pierre and Miquelon (Saint-Pierre-et-Miquelon)", "PM", "508", "", "🇵🇲", "Communes", ["Saint-Pierre", "Miquelon-Langlade"]] : null,
    (region ?? "PN") === "PN" ? ["Pitcairn Islands", "PN", "64", "", "🇵🇳"] : null,
    (region ?? "PR") === "PR" ? ["Puerto Rico", "PR", "1", "+. (...) ...-....", "🇵🇷", "Municipalities", ["Adjuntas", "Aguada", "Aguadilla", "Aguas Buenas", "Aibonito", "Añasco", "Arecibo", "Arroyo", "Barceloneta", "Barranquitas", "Bayamón", "Cabo Rojo", "Caguas", "Camuy", "Canóvanas", "Carolina", "Cataño", "Cayey", "Ceiba", "Ciales", "Cidra", "Coamo", "Comerío", "Corozal", "Culebra", "Dorado", "Fajardo", "Florida", "Guánica", "Guayama", "Guayanilla", "Guaynabo", "Gurabo", "Hatillo", "Hormigueros", "Humacao", "Isabela", "Jayuya", "Juana Díaz", "Juncos", "Lajas", "Lares", "Las Marías", "Las Piedras", "Loíza", "Luquillo", "Manatí", "Maricao", "Maunabo", "Mayagüez", "Moca", "Morovis", "Naguabo", "Naranjito", "Orocovis", "Patillas", "Peñuelas", "Ponce", "Quebradillas", "Rincón", "Río Grande", "Sabana Grande", "Salinas", "San Germán", "San Juan", "San Lorenzo", "San Sebastián", "Santa Isabel", "Toa Alta", "Toa Baja", "Trujillo Alto", "Utuado", "Vega Alta", "Vega Baja", "Vieques", "Villalba", "Yabucoa", "Yauco"], 3, ["787", "939"]] : null,
    (region ?? "PS") === "PS" ? ["Palestine (‫فلسطين‬‎)", "PS", "970", "+...-..-...-....", "🇵🇸", "Governorates", ["Gaza Strip", "West Bank"]] : null,
    (region ?? "PT") === "PT" ? ["Portugal", "PT", "351", "+...-..-...-....", "🇵🇹", "Regions", ["Azores", "Alentejo", "Algarve", "Centro", "Lisbon", "Madeira", "Norte"]] : null,
    (region ?? "PW") === "PW" ? ["Palau", "PW", "680", "+...-...-....", "🇵🇼", "States", ["Aimeliik", "Airai", "Angaur", "Hatohobei", "Kayangel", "Koror", "Melekeok", "Ngaraard", "Ngarchelong", "Ngardmau", "Ngatpang", "Ngchesar", "Ngeremlengui", "Ngiwal", "Peleliu", "Sonsorol"]] : null,
    (region ?? "PY") === "PY" ? ["Paraguay", "PY", "595", "+...(...)...-...", "🇵🇾", "Departments", ["Alto Paraguay", "Alto Paraná", "Amambay", "Boquerón", "Caaguazú", "Caazapá", "Canindeyú", "Central", "Concepción", "Cordillera", "Guairá", "Itapúa", "Misiones", "Ñeembucú", "Paraguarí", "Presidente Hayes", "San Pedro"]] : null,
    (region ?? "QA") === "QA" ? ["Qatar (‫قطر‬‎)", "QA", "974", "+...-....-....", "🇶🇦", "Municipalities", ["Doha", "Al Rayyan", "Umm Salal", "Al Khor", "Al Wakrah", "Al Daayen", "Madinat ash Shamal", "Al Shamal", "Al Ruwais"]] : null,
    (region ?? "RE") === "RE" ? ["Réunion (La Réunion)", "RE", "262", "+...-.....-....", "🇷🇪", ["Arrondissements", "Cantons", "Communes"], { "Arrondissements": ["Saint-Denis", "Saint-Paul", "Saint-Pierre", "Saint-Benoit"], "Cantons": ["Bras-Panon", "La Chaloupe", "La Grande Montée", "L'Étang-Salé", "Entre-Deux", "Les Avirons", "Petite-Île", "Plaine-des-Palmistes", "Le Port", "La Possession", "Saint-André-1", "Saint-André-2", "Saint-André-3", "Saint-Benoît-1", "Saint-Benoît-2", "Saint-Denis-1", "Saint-Denis-2", "Saint-Denis-3", "Saint-Denis-4", "Saint-Denis-5", "Saint-Denis-6", "Saint-Denis-7", "Saint-Denis-8", "Saint-Denis-9", "Saint-Denis-10", "Saint-Joseph", "Saint-Leu-1", "Saint-Leu-2", "Saint-Louis-1", "Saint-Louis-2", "Saint-Louis-3", "Saint-Paul-1", "Saint-Paul-2", "Saint-Paul-3", "Saint-Paul-4", "Saint-Paul-5", "Saint-Pierre-1", "Saint-Pierre-2", "Saint-Pierre-3", "Saint-Pierre-4", "Sainte-Marie", "Sainte-Rose", "Sainte-Suzanne", "Saint-Philippe", "Salazie", "Le Tampon-1", "Le Tampon-2", "Le Tampon-3", "Le Tampon-4"], "Communes": ["Les Avirons", "Bras-Panon", "Cilaos", "Entre-Deux", "L'Étang-Salé", "Petite-Île", "La Plaine-des-Palmistes", "Le Port", "La Possession", "Saint-André", "Saint-Benoît", "Saint-Denis", "Sainte-Marie", "Sainte-Rose", "Sainte-Suzanne", "Saint-Joseph", "Saint-Leu", "Saint-Louis", "Saint-Paul", "Saint-Philippe", "Saint-Pierre", "Salazie", "Le Tampon", "Trois-Bassins"] }] : null,
    (region ?? "RO") === "RO" ? ["Romania (România)", "RO", "40", "+..-..-...-....", "🇷🇴", "Regions", ["Moldova", "Muntenia", "Transylvania", "Banat", "Crisana", "Dobrogea", "Maramures", "Oltenia", "Bucovina", "Mehedinti", "Craiova", "Pitesti", "Sibiu", "Targu Mures", "Timisoara", "Cluj-Napoca", "Iasi", "Bucharest"]] : null,
    (region ?? "RS") === "RS" ? ["Serbia (Србија)", "RS", "381", "+...-..-...-....", "🇷🇸", "Districts", ["Belgrade", "Nišava", "Šumadija", "Zaječar", "Podunavlje", "Bor", "Braničevo", "Pomoravlje", "Zlatibor", "Moravica", "Raška", "Rasina", "Toplica", "Mačva", "Kolubara", "Jablanica", "Pčinja", "Pirot", "Branicevo", "Juzni Banat", "Srednji Banat", "Severni Banat", "Zapadna Bačka", "Južna Bačka", "Severna Bačka", "Srem", "Mačva", "Kolubara", "Podrinje", "Kosovo", "Kosovska Mitrovica", "Peć", "Prizren", "Kosovska Mitrovica", "Peć", "Prizren"]] : null,
    (region ?? "RU") === "RU" ? ["Russia (Россия)", "RU", "7", "+.-(...)-...-....", "🇷🇺", "Federal Subjects", ["Moscow", "Saint Petersburg", "Novosibirsk", "Yekaterinburg", "Nizhny Novgorod", "Kazan", "Chelyabinsk", "Omsk", "Samara", "Rostov-on-Don", "Ufa", "Krasnoyarsk", "Perm", "Voronezh", "Volgograd", "Krasnodar", "Saratov", "Tyumen", "Tolyatti", "Izhevsk"]] : null,
    (region ?? "RW") === "RW" ? ["Rwanda", "RW", "250", "+...(...)...-...", "🇷🇼", "Provinces", ["Kigali", "Eastern", "Northern", "Southern", "Western"]] : null,
    (region ?? "SA") === "SA" ? ["Saudi Arabia (‫المملكة العربية السعودية‬‎)", "SA", "966", "+...-..-...-....", "🇸🇦", "Regions", ["Riyadh", "Makkah", "Madinah", "Eastern Province", "Asir", "Tabuk", "Qassim", "Ha'il", "Jizan", "Najran", "Al Bahah", "Northern Borders", "Jawf", "Hail"]] : null,
    (region ?? "SB") === "SB" ? ["Solomon Islands", "SB", "677", "+...-.....", "🇸🇧", "Provinces", ["Central Province", "Choiseul", "Guadalcanal", "Honiara", "Isabel", "Makira-Ulawa", "Malaita", "Rennell and Bellona", "Temotu", "Western Province"]] : null,
    (region ?? "SC") === "SC" ? ["Seychelles", "SC", "248", "+...-.-...-...", "🇸🇨", ["Inner Islands", "Outer Islands"], { "Inner Islands": ["Mahé", "Praslin", "La Digue"], "Outer Islands": ["Alphonse", "Desroches", "Farquhar", "Aldabra"] }] : null,
    (region ?? "SG") === "SG" ? ["Singapore", "SG", "65", "+.. ....-....", "🇸🇬", "Regions", ["Central Region", "East Region", "North Region", "North-East Region", "West Region"]] : null,
    (region ?? "SI") === "SI" ? ["Slovenia (Slovenija)", "SI", "386", "+...-..-...-...", "🇸🇮", "Regions", ["Pomurska", "Podravska", "Koroška", "Savinjska", "Zasavska", "Posavska", "Jugovzhodna Slovenija", "Osrednjeslovenska", "Gorenjska", "Primorsko-notranjska", "Goriška", "Obalno-kraška"]] : null,
    (region ?? "SK") === "SK" ? ["Slovakia (Slovensko)", "SK", "421", "+...(...)...-...", "🇸🇰", "Regions", ["Bratislava", "Trnava", "Trenčín", "Nitra", "Žilina", "Banská Bystrica", "Prešov", "Košice"]] : null,
    (region ?? "SL") === "SL" ? ["Sierra Leone", "SL", "232", "+...-..-......", "🇸🇱", "Provinces", ["Eastern Province", "Northern Province", "Southern Province", "Western Area"]] : null,
    (region ?? "SM") === "SM" ? ["San Marino", "SM", "378", "+...-....-......", "🇸🇲", "Municipalities", ["Acquaviva", "Borgo Maggiore", "Chiesanuova", "Domagnano", "Faetano", "Fiorentino", "Montegiardino", "San Marino", "Serravalle"]] : null,
    (region ?? "SN") === "SN" ? ["Senegal (Sénégal)", "SN", "221", "+...-..-...-....", "🇸🇳", "Regions", ["Dakar", "Thiès", "Diourbel", "Fatick", "Kaolack", "Kolda", "Louga", "Matam", "Saint-Louis", "Sédhiou", "Tambacounda", "Kaffrine", "Kédougou", "Kolda", "Ziguinchor"]] : null,
    (region ?? "SO") === "SO" ? ["Somalia (Soomaaliya)", "SO", "252", "+...-.-...-...", "🇸🇴", "Regions", ["Awdal", "Bakool", "Banaadir", "Bari", "Bay", "Galguduud", "Gedo", "Hiiraan", "Jubbada Dhexe", "Jubbada Hoose", "Mudug", "Nugaal", "Sanaag", "Shabeellaha Dhexe", "Shabeellaha Hoose", "Sool", "Togdheer", "Woqooyi Galbeed"]] : null,
    (region ?? "ST") === "ST" ? ["São Tomé and Príncipe (São Tomé e Príncipe)", "ST", "239", "+...-..-.....", "🇸🇹", "Provinces", ["Príncipe", "São Tomé"]] : null,
    (region ?? "SV") === "SV" ? ["El Salvador", "SV", "503", "+... ....-....", "🇸🇻", "Departments", ["Ahuachapán", "Cabañas", "Chalatenango", "Cuscatlán", "La Libertad", "La Paz", "La Unión", "Morazán", "San Miguel", "San Salvador", "San Vicente", "Santa Ana", "Sonsonate", "Usulután"]] : null,
    (region ?? "SX") === "SX" ? ["Sint Maarten", "SX", "1721", "+.(...)...-....", "🇸🇽", "Regions", ["Dutch Quarter", "French Quarter", "Little Bay", "Lowlands", "Maho", "Pelican Key", "Philipsburg", "Point Blanche", "Simpson Bay"]] : null,
    (region ?? "TC") === "TC" ? ["Turks and Caicos Islands", "TC", "1649", "+.(...)...-....", "🇹🇨", "Districts", ["Grand Turk", "Salt Cay", "South Caicos", "Providenciales", "North Caicos", "Middle Caicos"]] : null,
    (region ?? "TD") === "TD" ? ["Chad (Tchad)", "TD", "235", "+...-..-..-..-..", "🇹🇩", "Regions", ["Batha", "Borkou", "Ennedi", "Ennedi-Est", "Ennedi-Ouest", "Guéra", "Hadjer-Lamis", "Kanem", "Lac", "Logone Occidental", "Logone Oriental", "Mandoul", "Mayo-Kebbi Est", "Mayo-Kebbi Ouest", "Moyen-Chari", "N'Djamena", "Ouaddaï", "Salamat", "Sila", "Tandjilé", "Tibesti", "Wadi Fira"]] : null,
    (region ?? "TF") === "TF" ? ["French Southern and Antarctic Lands", "TF", "262", "", "🇹🇫", "Districts", ["Kerguelen Islands", "Crozet Islands", "Amsterdam Island", "Saint-Paul Island"]] : null,
    (region ?? "TG") === "TG" ? ["Togo", "TG", "228", "+...-..-...-...", "🇹🇬", "Regions", ["Centrale", "Kara", "Maritime", "Plateaux", "Savanes"]] : null,
    (region ?? "TH") === "TH" ? ["Thailand (ไทย)", "TH", "66", "+..-..-...-...", "🇹🇭", "Regions", ["Bangkok", "Central Thailand", "Eastern Thailand", "Northern Thailand", "Northeastern Thailand", "Southern Thailand", "Western Thailand"]] : null,
    (region ?? "TK") === "TK" ? ["Tokelau", "TK", "690", "+...-....", "🇹🇰", "Villages", ["Atafu", "Fakaofo", "Nukunonu"]] : null,
    (region ?? "TL") === "TL" ? ["Timor-Leste", "TL", "670", "+...-...-....", "🇹🇱", "Districts", ["Aileu", "Ainaro", "Baucau", "Bobonaro", "Cova Lima", "Dili", "Ermera", "Lautem", "Liquiçá", "Manatuto", "Manufahi", "Oecusse", "Viqueque"]] : null,
    (region ?? "TM") === "TM" ? ["Turkmenistan", "TM", "993", "+...-.-...-....", "🇹🇲", "Regions", ["Ahal", "Balkan", "Daşoguz", "Lebap", "Mary"]] : null,
    (region ?? "TN") === "TN" ? ["Tunisia (‫تونس‬‎)", "TN", "216", "+...-..-...-...", "🇹🇳", "Regions", ["Tunis", "Ariana", "Ben Arous", "Manouba", "Nabeul", "Zaghouan", "Bizerte", "Béja", "Jendouba", "Kef", "Siliana", "Kairouan", "Kasserine", "Sidi Bouzid", "Sousse", "Monastir", "Mahdia", "Sfax", "Gabès", "Medenine", "Tataouine", "Gafsa", "Tozeur", "Kebili"]] : null,
    (region ?? "TO") === "TO" ? ["Tonga", "TO", "676", "+...-.....", "🇹🇴", "Regions", ["Eua", "Ha'apai", "Niuas", "Tongatapu", "Vava'u"]] : null,
    (region ?? "TR") === "TR" ? ["Turkey (Türkiye)", "TR", "90", "+.. ... ... .. ..", "🇹🇷", "Regions", ["Adana", "Adıyaman", "Afyonkarahisar", "Ağrı", "Amasya", "Ankara", "Antalya", "Artvin", "Aydın", "Balıkesir", "Bilecik", "Bingöl", "Bitlis", "Bolu", "Burdur", "Bursa", "Çanakkale", "Çankırı", "Çorum", "Denizli", "Diyarbakır", "Edirne", "Elazığ", "Erzincan", "Erzurum", "Eskişehir", "Gaziantep", "Giresun", "Gümüşhane", "Hakkâri", "Hatay", "Isparta", "Mersin", "İstanbul", "İzmir", "Kars", "Kastamonu", "Kayseri", "Kırklareli", "Kırşehir", "Kocaeli", "Konya", "Kütahya", "Malatya", "Manisa", "Kahramanmaraş", "Mardin", "Muğla", "Muş", "Nevşehir", "Niğde", "Ordu", "Rize", "Sakarya", "Samsun", "Siirt", "Sinop", "Sivas", "Tekirdağ", "Tokat", "Trabzon", "Tunceli", "Şanlıurfa", "Uşak", "Van", "Yozgat", "Zonguldak", "Aksaray", "Bayburt", "Karaman", "Kırıkkale", "Batman", "Şırnak", "Bartın", "Ardahan", "Iğdır", "Yalova", "Karabük", "Kilis", "Osmaniye", "Düzce"]] : null,
    (region ?? "TT") === "TT" ? ["Trinidad and Tobago", "TT", "1868", "+.(...)...-....", "🇹🇹", ["Regions", "Municipalities"], { Municipalities: ["Siparia", "Sangre Grande", "Port of Spain", "Arima", "Point Fortin", "Chaguanas", "Diego Martin", "San Fernando"], Regions: ["Eastern Tobago", "Couva-Tabaquite-Talparo", "Princes Town", "Rio Claro-Mayaro", "Penal-Debe", "Sangre Grande", "San Juan-Laventille", "Tunapuna-Piarco"] }] : null,
    (region ?? "TV") === "TV" ? ["Tuvalu", "TV", "688", "+...-.....", "🇹🇻", "Islands", ["Funafuti", "Nanumea", "Nui", "Nukufetau", "Nukulaelae", "Vaitupu"]] : null,
    (region ?? "UA") === "UA" ? ["Ukraine (Україна)", "UA", "380", "+...(..)...-..-..", "🇺🇦", "Oblasts", ["Cherkasy", "Chernihiv", "Chernivtsi", "Dnipropetrovsk", "Donetsk", "Ivano-Frankivsk", "Kharkiv", "Kherson", "Khmelnytskyi", "Kiev", "Kirovohrad", "Luhansk", "Lviv", "Mykolaiv", "Odessa", "Poltava", "Rivne", "Sumy", "Ternopil", "Vinnytsia", "Volyn", "Zakarpattia", "Zaporizhzhia", "Zhytomyr", "Autonomous Republic of Crimea"]] : null,
    (region ?? "UG") === "UG" ? ["Uganda", "UG", "256", "+...(...)...-...", "🇺🇬", "Regions", ["Central Region", "Eastern Region", "Northern Region", "Western Region"]] : null,
    (region ?? "UM") === "UM" ? ["United States Minor Outlying Islands", "UM", "1", "", "🇺🇲", "Territories", ["Baker Island", "Howland Island", "Jarvis Island", "Johnston Atoll", "Kingman Reef", "Midway Atoll", "Navassa Island", "Palmyra Atoll", "Wake Island"], 2] : null,
    (region ?? "US") === "US" ? ["United States", "US", "1", "+. (...) ...-....", "🇺🇸", "States", ["Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", "Delaware", "Florida", "Georgia", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland", "Massachusetts", "Michigan", "Minnesota", "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire", "New Jersey", "New Mexico", "New York", "North Carolina", "North Dakota", "Ohio", "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island", "South Carolina", "South Dakota", "Tennessee", "Texas", "Utah", "Vermont", "Virginia", "Washington", "West Virginia", "Wisconsin", "Wyoming"], 0] : null,
    (region ?? "UY") === "UY" ? ["Uruguay", "UY", "598", "+...-.-...-..-..", "🇺🇾", "Departments", ["Artigas", "Canelones", "Cerro Largo", "Colonia", "Durazno", "Flores", "Florida", "Lavalleja", "Maldonado", "Montevideo", "Paysandú", "Río Negro", "Rivera", "Rocha", "Salto", "San José", "Soriano", "Tacuarembó", "Treinta y Tres"]] : null,
    (region ?? "UZ") === "UZ" ? ["Uzbekistan (Oʻzbekiston)", "UZ", "998", "+...-..-...-....", "🇺🇿", "Regions", ["Andijan", "Bukhara", "Fergana", "Jizzakh", "Karakalpakstan", "Namangan", "Navoiy", "Qashqadaryo", "Samarqand", "Sirdaryo", "Surxondaryo", "Tashkent", "Tashkent City", "Xorazm"]] : null,
    (region ?? "VA") === "VA" ? ["Vatican City (Città del Vaticano)", "VA", "39", "+.. .. .... ....", "🇻🇦", 1] : null,
    (region ?? "VC") === "VC" ? ["Saint Vincent and the Grenadines", "VC", "1784", "+.(...)...-....", "🇻🇨", "Parishes", ["Charlotte", "Grenadines", "Saint Andrew", "Saint David", "Saint George", "Saint Patrick"]] : null,
    (region ?? "VE") === "VE" ? ["Venezuela", "VE", "58", "+..(...)...-....", "🇻🇪", "States", ["Amazonas", "Anzoátegui", "Apure", "Aragua", "Barinas", "Bolívar", "Carabobo", "Cojedes", "Delta Amacuro", "Falcón", "Guárico", "Lara", "Mérida", "Miranda", "Monagas", "Nueva Esparta", "Portuguesa", "Sucre", "Táchira", "Trujillo", "Vargas", "Yaracuy", "Zulia"]] : null,
    (region ?? "VG") === "VG" ? ["British Virgin Islands", "VG", "1284", "+.(...)...-....", "🇻🇬", "Districts", ["Tortola", "Virgin Gorda", "Anegada", "Jost Van Dyke"]] : null,
    (region ?? "VI") === "VI" ? ["U.S. Virgin Islands", "VI", "1340", "+.(...)...-....", "🇻🇮", "Districts", ["Saint Croix", "Saint John", "Saint Thomas"]] : null,
    (region ?? "VN") === "VN" ? ["Vietnam (Việt Nam)", "VN", "84", "+..-..-....-...", "🇻🇳", "Regions", ["Hanoi", "Ho Chi Minh City", "Da Nang", "Hai Phong", "Can Tho", "Bien Hoa", "Hue", "Nha Trang", "Buon Ma Thuot", "Quy Nhon", "Vung Tau", "Nam Dinh", "Phan Thiet", "Long Xuyen", "Ha Long", "Thai Nguyen", "Thanh Hoa", "Rach Gia", "Cam Ranh", "Vinh", "My Tho", "Da Lat", "Bac Lieu", "Bien Hoa"]] : null,
    (region ?? "VU") === "VU" ? ["Vanuatu", "VU", "678", "+...-.....", "🇻🇺", "Provinces", ["Malampa", "Penama", "Sanma", "Shefa", "Tafea", "Torba"]] : null,
    (region ?? "WF") === "WF" ? ["Wallis and Futuna", "WF", "681", "+...-..-....", "🇼🇫", "Kingdoms", ["Uvea", "Sigave", "Alo"]] : null,
    (region ?? "WS") === "WS" ? ["Samoa", "WS", "685", "+...-..-....", "🇼🇸", "Districts", ["A'ana", "Aiga-i-le-Tai", "Atua", "Fa'asaleleaga", "Gaga'emauga", "Gaga'ifomauga", "Palauli", "Satupa'itea", "Tuamasaga", "Va'a-o-Fonoti", "Vaisigano"]] : null,
    (region ?? "XK") === "XK" ? ["Kosovo", "XK", "383", "", "🇽🇰", "Districts", ["District of Pristina", "District of Mitrovica", "District of Peja", "District of Prizren", "District of Gjilan", "District of Ferizaj"]] : null,
    (region ?? "YE") === "YE" ? ["Yemen (‫اليمن‬‎)", "YE", "967", "+...-.-...-...", "🇾🇪", "Governorates", ["Sana'a", "Aden", "Taiz", "Al Hudaydah", "Ibb", "Dhamar", "Al Mukalla", "Hajjah", "Amran", "Saada", "Saywun", "Zinjibar", "Al Bayda", "Lahij", "Marib", "Al Ghaydah", "Al Mahwit", "Al Hazm", "Ataq", "Al Jawf", "Sadah", "Shabwah", "Al Dhalea", "Rida", "Al Mahrah"]] : null,
    (region ?? "YT") === "YT" ? ["Mayotte", "YT", "262", "", "🇾🇹", ["Cantons", "Communes"], { "Cantons": ["Acoua", "Bandraboua", "Bandrélé", "Bouéni", "Chiconi", "Chirongui", "Dembeni", "Dzaoudzi", "Kani-Kéli", "Koungou", "Mamoudzou-1", "Mamoudzou-2", "Mamoudzou-3", "Mamoudzou-4", "Mtsamboro", "M'Tsangamouji", "Ouangani", "Pamandzi", "Sada", "Tsingoni"], "Communes": ["Acoua", "Bandraboua", "Bandrélé", "Bouéni", "Chiconi", "Chirongui", "Dembeni", "Dzaoudzi", "Kani-Kéli", "Koungou", "Mamoudzou", "Mtsamboro", "M'Tsangamouji", "Ouangani", "Pamandzi", "Sada", "Tsingoni"] }] : null,
    (region ?? "ZA") === "ZA" ? ["South Africa", "ZA", "27", "+..-..-...-....", "🇿🇦", "Provinces", ["Eastern Cape", "Free State", "Gauteng", "KwaZulu-Natal", "Limpopo", "Mpumalanga", "North West", "Northern Cape", "Western Cape"]] : null,
    (region ?? "ZM") === "ZM" ? ["Zambia", "ZM", "260", "+...-..-...-....", "🇿🇲", "Provinces", ["Lusaka", "Copperbelt", "Central", "Eastern", "Luapula", "Northern", "North-Western", "Southern", "Western"]] : null,
    (region ?? "ZW") === "ZW" ? ["Zimbabwe", "ZW", "263", "+...-.-......", "🇿🇼", "Provinces", ["Harare", "Bulawayo", "Manicaland", "Mashonaland Central", "Mashonaland East", "Mashonaland West", "Masvingo", "Matabeleland North", "Matabeleland South", "Midlands"]] : null
  ] as CountriesArray;
  if (region && regionCodes.includes(region)) {
    const arr = result.filter((country: CountriesArray[number]): country is CountriesArray[number] => country !== null)[0] as CountryArray<R>;
    if (arr) {
      return arr;
    } else {
      return result;
    }
  } else {
    return result;
  }
}

Countries.array = countriesArray() as CountriesArray;
Countries.arr = {} as { [K in RegionCodes[number]]: CountryArray<K> };
for (let key of regionCodes) {

  //for (let i = 0; i < Countries.array.length; i++) {//@ts-ignore
  Countries.arr = {
    ...Countries.arr,
    [key]: countriesArray(key)
  }
  //}
}

for (let key of regionCodes) {
  Countries.arr = {
    ...Countries.arr,
    [key]: countriesArray(key),
  }
}

export const getCountryName = <R extends RegionCode>(region: R) => {
  return countriesArray(region)?.[0] as CountryName<R>;
}
//@ts-expect-error
export const extractName: ExtractName = (region, type, form) => {
  type kokoFRM = keyof (typeof formReplacementMap)[keyof typeof formReplacementMap];
  type koFRM = keyof typeof formReplacementMap;
  return getCountryName(region)
    .replace(matchTypeMap[form as koFRM] || matchLclCtxFrgn,
      formReplacementMap[form as koFRM] ? formReplacementMap[form as koFRM][type as kokoFRM] : '');
}

const getRegionCodes = function*<R extends RegionCode>() {
  for (let key of regionCodes) {
    yield key;
  }
};

function getLocalContextGroups<R extends RegionCode>(region: R, name: CountryName<R> = getCountryName<R>(region)) {
  const local = name.replace(matchLclCtxName, '$1 $3') as ForeignLocal<R, 'Local', 'LCN'>;
  const context = name.replace(matchLclCtxName, '$2 $3') as ForeignLocal<R, 'Contextual', 'LCN'>;
  const match = name.match(matchLclCtxName)!;
  const groups = match.groups as {
    lcl: CountryName<R> extends `${infer Lcl} (${infer Ctx}) ${infer Name}` ? Lcl : never;
    ctx: CountryName<R> extends `${infer Lcl} (${infer Ctx}) ${infer Name}` ? Ctx : never;
    name: CountryName<R> extends `${infer Lcl} (${infer Ctx}) ${infer Name}` ? Name : never;
  } | undefined;
  // isContextualName(region, context);
  return `${groups?.lcl} ${groups?.name}` === local && `${groups?.ctx} ${groups?.name}` === context ? groups : null as never;
}

function isMultiName<R extends RegionCode, T extends CountryName<R>>(name: unknown): name is T extends MultiName<T> ? MultiName<T> : never {
  return typeof name === 'string' && (matchLclFrgn.test(name) || matchLclCtxName.test(name) || matchLclCtxFrgn.test(name));
}

//___=============================>             <============================___\\
//___|| ==================== ||      CONSTANTS      || =================== ||___\\
//___=============================>             <============================___\\


/**
 * @constant matchLclCtxName - Regex to match a contextual name
 * - Matches: `STRING (STRING) STRING`
 * - Groups: `lcl:(STRING) (ctx:(STRING)) name:(STRING)`
 * - Extract Type: `ForeignLocal<RegionCode, 'Local' | 'Context', 'LCN'>`
 * - Groups Type: `LocalContextNameGroups<RegionCode>`
 * - `$1 $3` = Normal Name
 * - `$2 $3` = Contextual Name
 */
const matchLclCtxName = /^(?<lcl>.+?)\s\((?<ctx>.+?)\)\s(?<name>.+)$/g;

/**
 * @constant matchLclCtxFrgn - Regex to match a Local/Foreign name
 * - Matches: `STRING (STRING) (STRING)`
 * - Groups: `lcl:(STRING) (ctx:(STRING)) (frgn:(STRING))`
 * - Extract Type: `ForeignLocal<RegionCode, 'Local' | 'Context' | 'Frgn', 'LCF'>`
 * - Groups Type: `LocalContextForeignGroups<RegionCode>`
 * - `$1` = Local Name
 * - `$2` = Contextual Name
 * - `$3` = Foreign Name
 * - `ForeignLocal<CountryName<R>, 'Contextual'>` = Contextual Name
 */
const matchLclCtxFrgn = /^(?<lcl>.+?)\s\((?<ctx>.+?)\)\s\((?<frgn>.+?)\)$/g;

/**
 * @constant matchLclFrgn - Regex to match a basic Local/Foreign name
 * - Matches: `STRING (STRING)`
 * - Groups: `lcl:(STRING) (frgn:(STRING))`
 * - Extract Type: `ForeignLocal<RegionCode, 'Local' | 'Frgn', 'LF'>`
 * - Groups Type: `LocalForeignGroups<RegionCode>`
 * - `$1` = Local Name
 * - `$2` = Foreign Name
 */
const matchLclFrgn = /^(?<lcl>[^()]+)\s\((?<frgn>[^()]+(\s\([^()]+\))*)\)$/g;

const matchTypeMap = {
  'LCF': matchLclCtxFrgn,
  'LCN': matchLclCtxName,
  'LF': matchLclFrgn,
} as const;

const formReplacementMap = {
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
} as const;
var countryData = {} as CountriesData;

Countries.array.forEach((c, i, a) => {
  var country = {} as Country<any>;
  for (let key of getRegionCodes()) {//@ts-ignore
    if (c[1] !== a[i][1]) return null;
    country = {
      [Symbol.toStringTag]: `Country: ${c[0]}`,
      [Symbol.match]: (str) => {
        return matchLclFrgn.test(str) ? c[0] : matchLclCtxName.test(str) ? c[0] : matchLclCtxFrgn.test(str) ? c[0] :
          null;
      },
    /*country.*/name: c[0],
    /*country.*/regionCode: c[1],
    /*country.*/flag: c[4],
    /*country.*/dialCode: c[2],
    /*country.*/priority: c[5] !== 1 ? c[7] !== undefined ? c[7] : 0 : c[5],
    } as Country<any>;
    if (c[3]) {//@ts-ignore
      if (c[3] === "" || c[3] === undefined || c[3] === null) return;
      country.format = c[3];
    }
    if (c[5] && c[6] && c[5] !== 1) {
      if ((Array.isArray(c[6]) || typeof c[6] === 'object') && (typeof c[5] === 'string' || Array.isArray(c[5]))) {
        country.zoneTypes = c[5];
        country.zones = c[6];
      }
    }
    if (c[8]) {
      country.areaCodes = c[8]
    }
    if (c[0] && isMultiName(c[0])) {
      const lclCtxFrgn = c[0].match(matchLclCtxFrgn);
      const lclCtxName = c[0].match(matchLclCtxName);
      const lclFrgn = c[0].match(matchLclFrgn);
      if (lclCtxFrgn !== null) {
        country.local = extractName(c[1], 'Local', 'LCF');
        country.context = extractName(c[1], 'Contextual', 'LCF');
        country.foreign = extractName(c[1], 'Foreign', 'LCF');
      } else if (lclCtxName !== null) {
        country.local = extractName(c[1], 'Local', 'LCN');
        country.context = extractName(c[1], 'Contextual', 'LCN');
      } else if (lclFrgn !== null) {
        country.local = extractName(c[1], 'Local', 'LF');
        country.foreign = extractName(c[1], 'Foreign', 'LF');
      }
    }
    if (key === c[1]) {

      countryData = {
        ...countryData,
        [c[1]]: country as Country<any>
      }
    }
    country = {} as Country<RegionCode>;
  }
});
Countries = Object.assign(Countries, countryData, Countries);
console.log(Countries);
export default Countries;
