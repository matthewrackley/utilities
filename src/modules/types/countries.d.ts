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

/**
 * @file countries.ts
 * @description
 * @author Matthew Allen Rackley
 * @copyright [Matthew Rackley's Github](https://www.github.com/matthewrackley "Matthew Rackley on github.com")
 */
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
/**
 * @type CountriesArray<R extends RegionCode | undefined: undefined>
 * @description An array of all countries in the world. Each country is an array of the following:
 * 0. Name
 * 1. ISO 3166-1 alpha-2 code
 * 2. Dialing code
 * 3. National number format
 * 4. Emoji flag
 * 5. ZoneTypess (Regions, States, Provinces, etc.) | 1
 * 6. Zones (Regions, States, Provinces, etc.)
 */
type CountriesArray<R extends RegionCode | undefined = undefined> = R extends RegionCode | undefined ? [
  R extends "AC" | undefined ? ["Ascension Island", "AC", 247, "+... .....", "🇦🇨", { Settlements: ["Georgetown", "Two Boats", "Cat Hill", "Traveller's Hill", "Wideawake Airfield"], zoneTypes: "Settlements"}] : never,
  R extends "AD" | undefined ? ["Andorra", "AD", 376, "+...-...-...", "🇦🇩", { Regions: ["Andorra la Vella", "Canillo", "Encamp", "Escaldes-Engordany", "La Massana", "Ordino", "Sant Julià de Lòria"], zoneTypes: "Regions" }] : never,
  R extends "AE" | undefined ? ["United Arab Emirates (‫الإمارات العربية المتحدة‬‎)", "AE", 971, "+...-.-...-....", "🇦🇪", { Emirates: ["Abu Dhabi", "Ajman", "Dubai", "Fujairah", "Ras Al Khaimah", "Sharjah", "Umm Al Quwain"], zoneTypes: "Emirates" }] : never,
  R extends "AF" | undefined ? ["Afghanistan (‫افغانستان‬‎)", "AF", 93, "+..-..-...-....", "🇦🇫", { Regions: ["Badakhshan", "Badghis", "Baghlan", "Balkh", "Bamyan", "Daykundi", "Farah", "Faryab", "Ghazni", "Ghor", "Helmand", "Herat", "Jowzjan", "Kabul", "Kandahar", "Kapisa", "Khost", "Kunar", "Kunduz Province", "Laghman", "Logar", "Nangarhar", "Nimruz", "Nuristan", "Paktia", "Paktika", "Panjshir", "Parwan", "Samangan", "Sar-e Pol", "Takhar", "Urozgan", "Zabul"], zoneTypes: "Regions" }] : never,
  R extends "AG" | undefined ? ["Antigua and Barbuda", "AG", 1268, "+.(...)...-....", "🇦🇬", { Parishes: ["Saint George", "Saint John", "Saint Mary", "Saint Paul", "Saint Peter", "Saint Philip"], zoneTypes: "Parishes" }] : never,
  R extends "AI" | undefined ? ["Anguilla", "AI", 1264, "+.(...)...-....", "🇦🇮", { Districts: ["Anguilla Island", "Blowing Point", "East End", "George Hill", "Island Harbour", "North Hill", "North Side", "Sandy Ground", "Sandy Hill", "South Hill", "Stoney Ground", "The Farrington", "The Quarter", "The Valley", "West End"], zoneTypes: "Districts" }] : never,
  R extends "AL" | undefined ? ["Albania (Shqipëri)", "AL", 355, "+...(...)...-...", "🇦🇱", { Counties: ["Berat", "Dibër", "Durrës", "Elbasan", "Fier", "Gjirokastër", "Korçë", "Kukës", "Lezhë", "Shkodër", "Tirana", "Vlorë"], zoneTypes: "Counties" }] : never,
  R extends "AM" | undefined ? ["Armenia (Հայաստան)", "AM", 374, "+...-..-...-...", "🇦🇲", { Provinces: ["Aragatsotn", "Ararat", "Armavir", "Gegharkunik", "Kotayk", "Lori", "Shirak", "Syunik", "Tavush", "Vayots Dzor", "Yerevan"], zoneTypes: "Provinces" }] : never,
  R extends "AO" | undefined ? ["Angola", "AO", 244, "+...(...)...-...", "🇦🇴", { Provinces: ["Bengo", "Benguela", "Bié", "Cabinda", "Cuando Cubango", "Cuanza Norte", "Cuanza Sul", "Cunene", "Huambo", "Huíla", "Luanda", "Lunda Norte", "Lunda Sul", "Malanje", "Moxico", "Namibe", "Uíge", "Zaire"], zoneTypes: "Provinces" }] : never,
  R extends "AQ" | undefined ? ["Antarctica", "AQ", 672, "+... .. ....", "🇦🇶", null] : never,
  R extends "AR" | undefined ? ["Argentina", "AR", 54, "+..(...)...-....", "🇦🇷", { Regions: ["Buenos Aires", "Catamarca", "Chaco", "Chubut", "Córdoba", "Corrientes", "Entre Ríos", "Formosa", "Jujuy", "La Pampa", "La Rioja", "Mendoza", "Misiones", "Neuquén", "Río Negro", "Salta", "San Juan", "San Luis", "Santa Cruz", "Santa Fe", "Santiago del Estero", "Tierra del Fuego", "Tucumán"], zoneTypes: "Regions" }] : never,
  R extends "AS" | undefined ? ["American Samoa", "AS", 1684, "+.(...)...-....", "🇦🇸", { Districts: ["Eastern District", "Manu'a District", "Rose Island", "Swains Island", "Western District"], zoneTypes: "Districts" }] : never,
  R extends "AT" | undefined ? ["Austria (Österreich)", "AT", 43, "+..(...)...-....", "🇦🇹", { States: ["Burgenland", "Carinthia", "Lower Austria", "Upper Austria", "Salzburg", "Styria", "Tyrol", "Vorarlberg", "Vienna"], zoneTypes: "States" }] : never,
  R extends "AU" | undefined ? ["Australia", "AU", 61, "+.. ... ... ...", "🇦🇺", { States: ["New South Wales", "Queensland", "South Australia", "Tasmania", "Victoria", "Western Australia"],  Territories: ["Australian Capital Territory", "Northern Territory"], zoneTypes: ["States", "Territories"] }] : never,
  R extends "AW" | undefined ? ["Aruba", "AW", 297, "+...-...-....", "🇦🇼", null] : never,
  R extends "AX" | undefined ? ["Åland Islands", "AX", 358, ["+... .. .. .. ..", "+... ... ... ....", "+... .. ... .."], "🇦🇽", { Municipalities: ["Mariehamn", "Jomala", "Finström", "Lemland", "Saltvik", "Hammarland", "Sund", "Eckerö", "Föglö", "Geta", "Vårdö", "Brändö", "Lumparland", "Kumlinge", "Kökar", "Sottunga"], zoneTypes: "Municipalities" }] : never,
  R extends "AZ" | undefined ? ["Azerbaijan (Azərbaycan)", "AZ", 994, "+...-..-...-..-..", "🇦🇿", { Districts: ["Absheron", "Agdam", "Agdash", "Agstafa", "Agsu", "Astara", "Baku", "Balakan", "Barda", "Beylagan", "Bilasuvar", "Dashkasan", "Fizuli", "Ganja", "Gobustan", "Goranboy", "Goychay", "Goygol", "Hajigabul", "Imishli", "Ismailli", "Jabrayil", "Jalilabad", "Kalbajar", "Kurdamir", "Lachin", "Lankaran", "Lankaran", "Lerik", "Masally", "Mingachevir", "Naftalan", "Nakhchivan", "Neftchala", "Oghuz", "Ordubad", "Qabala", "Qakh", "Qazakh", "Quba", "Qubadli", "Qusar", "Saatly", "Sabirabad", "Salyan", "Shabran", "Shaki", "Shamakhi", "Shamkir", "Shirvan", "Shusha", "Siazan", "Sumgayit", "Tartar", "Tovuz", "Ujar", "Yardymli", "Yevlakh", "Zangilan", "Zaqatala", "Zardab"], zoneTypes: "Districts" }] : never,
  R extends "BA" | undefined ? ["Bosnia and Herzegovina (Босна и Херцеговина)", "BA", 387, "+...-..-....", "🇧🇦", { Regions: ["Brčko District", "Federation of Bosnia and Herzegovina", "Republika Srpska"], zoneTypes: "Regions" }] : never,
  R extends "BB" | undefined ? ["Barbados", "BB", 1246, "+.(...)...-....", "🇧🇧", { Regions: ["Christ Church", "Saint Andrew", "Saint George", "Saint James", "Saint John", "Saint Joseph", "Saint Lucy", "Saint Michael", "Saint Peter", "Saint Philip", "Saint Thomas"], zoneTypes: "Regions" }] : never,
  R extends "BD" | undefined ? ["Bangladesh (বাংলাদেশ)", "BD", 880, "+...-..-...-...", "🇧🇩", { Districts: ["Barisal", "Chittagong", "Dhaka", "Khulna", "Mymensingh", "Rajshahi", "Rangpur", "Sylhet"], zoneTypes: "Districts" }] : never,
  R extends "BE" | undefined ? ["Belgium (België)", "BE", 32, "+.. ... .. .. ..", "🇧🇪", { States: ["Brussels", "Flemish Brabant", "Walloon Brabant", "Antwerp", "East Flanders", "West Flanders", "Hainaut", "Liège", "Limburg", "Luxembourg", "Namur"], zoneTypes: "States" }] : never,
  R extends "BF" | undefined ? ["Burkina Faso", "BF", 226, "+...-..-..-....", "🇧🇫", { Provinces: ["Balé", "Bam", "Banwa", "Bazèga", "Bougouriba", "Boulgou", "Boulkiemdé", "Comoé", "Ganzourgou", "Gnagna", "Gourma", "Houet", "Ioba", "Kadiogo", "Kénédougou", "Komondjari", "Kompienga", "Kossi", "Koulpélogo", "Kouritenga", "Kourwéogo", "Léraba", "Loroum", "Mouhoun", "Namentenga", "Nahouri", "Nayala", "Noumbiel", "Oubritenga", "Oudalan", "Passoré", "Poni", "Sanguié", "Sanmatenga", "Séno", "Sissili", "Soum", "Sourou", "Tapoa", "Tui", "Yagha", "Yatenga", "Ziro", "Zondoma", "Zoundwéogo"], zoneTypes: "Provinces" }] : never,
  R extends "BG" | undefined ? ["Bulgaria (България)", "BG", 359, "+...(...)...-...", "🇧🇬", { States: ["Blagoevgrad", "Burgas", "Dobrich", "Gabrovo", "Haskovo", "Kardzhali", "Kyustendil", "Lovech", "Montana", "Pazardzhik", "Pernik", "Pleven", "Plovdiv", "Razgrad", "Ruse", "Shumen", "Silistra", "Sliven", "Smolyan", "Sofia", "Stara Zagora", "Targovishte", "Varna", "Veliko Tarnovo", "Vidin", "Vratsa", "Yambol"], zoneTypes: "States" }] : never,
  R extends "BH" | undefined ? ["Bahrain (‫البحرين‬‎)", "BH", 973, "+...-....-....", "🇧🇭", { Governorates: ["Capital Governorate", "Muharraq Governorate", "Northern Governorate", "Southern Governorate"], zoneTypes: "Governorates" }] : never,
  R extends "BI" | undefined ? ["Burundi (Uburundi)", "BI", 257, "+...-..-..-....", "🇧🇮", { Provinces: ["Bubanza", "Bujumbura Mairie", "Bujumbura Rural", "Bururi", "Cankuzo", "Cibitoke", "Gitega", "Karuzi", "Kayanza", "Kirundo", "Makamba", "Muramvya", "Muyinga", "Mwaro", "Ngozi", "Rumonge", "Rutana", "Ruyigi"], zoneTypes: "Provinces" }] : never,
  R extends "BJ" | undefined ? ["Benin (Bénin)", "BJ", 229, "+...-..-..-....", "🇧🇯", { Departments: ["Alibori", "Atakora", "Atlantique", "Borgou", "Collines", "Donga", "Kouffo", "Littoral", "Mono", "Ouémé", "Plateau", "Zou"], zoneTypes: "Departments" }] : never,
  R extends "BL" | undefined ? ["Saint Barthélemy (Saint-Barthélemy)", "BL", 590, "+... ... .. .. ..", "🇧🇱", { Parishes: ["Gustavia"], zoneTypes: "Parishes" }, 1] : never,
  R extends "BM" | undefined ? ["Bermuda", "BM", 1441, "+.(...)...-....", "🇧🇲", { Parishes: ["Devonshire", "Hamilton", "Paget", "Pembroke", "Sandys", "Smith's", "Southampton", "St. George's", "Warwick"],  Municipalities: ["Hamilton", "St. George's"], zoneTypes: ["Municipalities", "Parishes"] }] : never,
  R extends "BN" | undefined ? ["Brunei", "BN", 673, "+...-...-....", "🇧🇳", { Districts: ["Belait", "Brunei-Muara", "Temburong", "Tutong"], zoneTypes: "Districts" }] : never,
  R extends "BO" | undefined ? ["Bolivia", "BO", 591, "+...-.-...-....", "🇧🇴", { States: ["Chuquisaca", "Cochabamba", "Beni", "La Paz", "Oruro", "Pando", "Potosí", "Santa Cruz", "Tarija"], zoneTypes: "States" }] : never,
  R extends "BQ" | undefined ? ["Caribbean Netherlands", "BQ", 599, "+...-...-....", "🇧🇶", { "Special Municipalities": ["Bonaire", "Saba", "Sint Eustatius"], zoneTypes: "Special Municipalities" }, 1] : never,
  R extends "BR" | undefined ? ["Brazil (Brasil)", "BR", 55, "+..-..-....-....", "🇧🇷", { Regions: ["Acre", "Alagoas", "Amapá", "Amazonas", "Bahia", "Ceará", "Distrito Federal", "Espírito Santo", "Goiás", "Maranhão", "Mato Grosso", "Mato Grosso do Sul", "Minas Gerais", "Pará", "Paraíba", "Paraná", "Pernambuco", "Piauí", "Rio de Janeiro", "Rio Grande do Norte", "Rio Grande do Sul", "Rondônia", "Roraima", "Santa Catarina", "São Paulo", "Sergipe", "Tocantins"], zoneTypes: "Regions" }] : never,
  R extends "BS" | undefined ? ["Bahamas", "BS", 1242, "+.(...)...-....", "🇧🇸", { Regions: ["Acklins", "Berry Islands", "Bimini", "Black Point", "Cat Island", "Central Abaco", "Central Andros", "Central Eleuthera", "City of Freeport", "Crooked Island and Long Cay", "East Grand Bahama", "Exuma", "Grand Cay", "Harbour Island", "Hope Town", "Inagua", "Long Island", "Mangrove Cay", "Mayaguana", "Moore's Island", "North Abaco", "North Andros", "North Eleuthera", "Ragged Island", "Rum Cay", "San Salvador", "South Abaco", "South Andros", "South Eleuthera", "Spanish Wells", "West Grand Bahama"], zoneTypes: "Regions" }] : never,
  R extends "BT" | undefined ? ["Bhutan (འབྲུག)", "BT", 975, "+...-.-...-...", "🇧🇹", { Regions: ["Bumthang", "Chukha", "Dagana", "Gasa", "Haa", "Lhuntse", "Mongar", "Paro", "Pemagatshel", "Punakha", "Samdrup Jongkhar", "Samtse", "Sarpang", "Thimphu", "Trashigang", "Trashiyangtse", "Trongsa", "Tsirang", "Wangdue Phodrang", "Zhemgang"], zoneTypes: "Regions" }] : never,
  R extends "BV" | undefined ? ["Bouvet Island", "BV", 47, "+..(...)...-....", "🇧🇻", null] : never,
  R extends "BW" | undefined ? ["Botswana", "BW", 267, "+...-..-...-...", "🇧🇼", { Districts: ["Central District", "Ghanzi District", "Kgalagadi District", "Kgatleng District", "Kweneng District", "North-East District", "North-West District", "South-East District", "Southern District"], zoneTypes: "Districts" }] : never,
  R extends "BY" | undefined ? ["Belarus (Беларусь)", "BY", 375, "+...(..)...-..-..", "🇧🇾", { Regions: ["Brest Region", "Gomel Region", "Grodno Region", "Minsk Region", "Mogilev Region", "Vitebsk Region"], zoneTypes: "Regions" }] : never,
  R extends "BZ" | undefined ? ["Belize", "BZ", 501, "+...-...-....", "🇧🇿", { Districts: ["Belize District", "Cayo District", "Corozal District", "Orange Walk District", "Stann Creek District", "Toledo District"], zoneTypes: "Districts" }] : never,
  R extends "CA" | undefined ? ["Canada", "CA", 1, "+. (...) ...-....", "🇨🇦", { Provinces: ["Alberta", "British Columbia", "Manitoba", "New Brunswick", "Newfoundland and Labrador", "Nova Scotia", "Ontario", "Prince Edward Island", "Quebec", "Saskatchewan"],  Territories: ["Northwest Territories", "Nunavut", "Yukon"], zoneTypes: ["Provinces", "Territories"] }, 1, ["204", "236", "249", "250", "289", "306", "343", "365", "387", "403", "416", "418", "431", "437", "438", "450", "506", "514", "519", "548", "579", "581", "587", "604", "613", "639", "647", "672", "705", "709", "742", "778", "780", "782", "807", "819", "825", "867", "873", "902", "905"]] : never,
  R extends "CC" | undefined ? ["Cocos (Keeling) Islands", "CC", 61, "+.. . .... ....", "🇨🇨", null] : never,
  R extends "CD" | undefined ? ["Congo (DRC) (Jamhuri ya Kidemokrasia ya Kongo)", "CD", 243, "+...(...)...-...", "🇨🇩", { Provinces: ["Kinshasa", "Kongo Central", "Kwango", "Kwilu", "Kasai", "Kasai-Central", "Kasai-Oriental", "Sankuru", "Maniema", "South Kivu", "North Kivu", "Ituri", "Haut-Uele", "Tshopo", "Bas-Uele", "Tanganyika", "Haut-Lomami", "Lualaba", "Kwango", "Kwilu", "Kasai", "Kasai-Central", "Kasai-Oriental", "Sankuru", "Maniema", "South Kivu", "North Kivu", "Ituri", "Haut-Uele", "Tshopo", "Bas-Uele", "Tanganyika", "Haut-Lomami", "Lualaba"], zoneTypes: "Provinces" }] : never,
  R extends "CF" | undefined ? ["Central African Republic (République centrafricaine)", "CF", 236, "+...-..-..-....", "🇨🇫", { Regions: ["Bamingui-Bangoran", "Bangui", "Basse-Kotto", "Haute-Kotto", "Haut-Mbomou", "Kémo", "Lobaye", "Mambéré-Kadéï", "Mbomou", "Nana-Grébizi", "Nana-Mambéré", "Ombella-M'Poko", "Ouaka", "Ouham", "Ouham-Pendé", "Sangha-Mbaéré", "Vakaga"], zoneTypes: "Regions" }] : never,
  R extends "CG" | undefined ? ["Congo (Republic) (Congo-Brazzaville)", "CG", 242, "+...-..-...-....", "🇨🇬", { Departments: ["Bouenza", "Cuvette", "Cuvette-Ouest", "Kouilou", "Lékoumou", "Likouala", "Niari", "Plateaux", "Pool", "Sangha"], zoneTypes: "Departments" }] : never,
  R extends "CI" | undefined ? ["Côte d’Ivoire", "CI", 225, "+...-..-...-...", "🇨🇮", { Regions: ["Lagunes", "Haut-Sassandra", "Savanes", "Vallée du Bandama", "Moyen-Comoé", "18 Montagnes", "Lacs", "Zanzan", "Bas-Sassandra", "Denguélé", "N'zi-Comoé", "Marahoué", "Sud-Comoé", "Worodougou", "Sud-Bandama", "Agnéby-Tiassa", "Bafing", "Gbêkê", "Fromager", "Moyen-Cavally", "Nawa", "Indénié-Djuablin", "Bounkani", "Moronou", "Gbôklé", "Iffou", "Bagoué", "Tchologo", "Poro", "Kabadougou", "Béré", "Korhogo"], zoneTypes: "Regions" }] : never,
  R extends "CK" | undefined ? ["Cook Islands", "CK", 682, "+...-..-...", "🇨🇰", { Islands: ["Aitutaki", "Atiu", "Mangaia", "Manihiki", "Mauke", "Mitiaro", "Nassau", "Palmerston", "Penrhyn", "Pukapuka", "Rakahanga", "Rarotonga", "Suwarrow", "Takutea"],  Districts: ["Avarua", "Matavera", "Ngatangiia", "Takitumu"], zoneTypes: ["Districts", "Islands"] }] : never,
  R extends "CL" | undefined ? ["Chile", "CL", 56, "+..-.-....-....", "🇨🇱", { States: ["Arica y Parinacota", "Tarapacá", "Antofagasta", "Atacama", "Coquimbo", "Valparaíso", "Región Metropolitana de Santiago", "Libertador General Bernardo O'Higgins", "Maule", "Ñuble", "Biobío", "La Araucanía", "Los Ríos", "Los Lagos", "Aysén", "Magallanes y de la Antártica Chilena"], zoneTypes: "States" }] : never,
  R extends "CM" | undefined ? ["Cameroon (Cameroun)", "CM", 237, "+...-....-....", "🇨🇲", { Regions: ["Adamaoua", "Centre", "East", "Far North", "Littoral", "North", "Northwest", "South", "Southwest", "West"], zoneTypes: "Regions" }] : never,
  R extends "CN" | undefined ? ["China (中国)", "CN", 86, "+.. ..-........", "🇨🇳", { Provinces: ["Anhui", "Fujian", "Gansu", "Guangdong", "Guizhou", "Hainan", "Hebei", "Heilongjiang", "Henan", "Hubei", "Hunan", "Jiangsu", "Jiangxi", "Jilin", "Liaoning", "Qinghai", "Shaanxi", "Shandong", "Shanxi", "Sichuan", "Yunnan", "Zhejiang"], Municipalities: ["Beijing", "Chongqing", "Shanghai", "Tianjin"], "Autonomous Regions": ["Guangxi", "Inner Mongolia", "Ningxia", "Tibet", "Xinjiang"], "Special Administrative Regions": ["Hong Kong", "Macau"], zoneTypes: ["Autonomous Regions", "Municipalities", "Provinces", "Special Administrative Regions"] }] : never,
  R extends "CO" | undefined ? ["Colombia", "CO", 57, "+..(...)...-....", "🇨🇴", { States: ["Amazonas", "Antioquia", "Arauca", "Atlántico", "Bolívar", "Boyacá", "Caldas", "Caquetá", "Casanare", "Cauca", "Cesar", "Chocó", "Córdoba", "Cundinamarca", "Guainía", "Guaviare", "Huila", "La Guajira", "Magdalena", "Meta", "Nariño", "Norte de Santander", "Putumayo", "Quindío", "Risaralda", "San Andrés, Providencia y Santa Catalina", "Santander", "Sucre", "Tolima", "Valle del Cauca", "Vaupés", "Vichada"], zoneTypes: "States" }] : never,
  R extends "CR" | undefined ? ["Costa Rica", "CR", 506, "+... ....-....", "🇨🇷", { Provinces: ["San José", "Alajuela", "Cartago", "Heredia", "Guanacaste", "Puntarenas", "Limón"], zoneTypes: "Provinces" }] : never,
  R extends "CU" | undefined ? ["Cuba", "CU", 53, "+..-.-...-....", "🇨🇺", { Provinces: ["Pinar del Río", "Artemisa", "La Habana", "Mayabeque", "Matanzas", "Cienfuegos", "Villa Clara", "Sancti Spíritus", "Ciego de Ávila", "Camagüey", "Las Tunas", "Holguín", "Granma", "Santiago de Cuba", "Guantánamo", "Isla de la Juventud"], zoneTypes: "Provinces" }] : never,
  R extends "CV" | undefined ? ["Cape Verde (Kabu Verdi)", "CV", 238, "+...(...)..-..", "🇨🇻", { Regions: ["Barlavento Islands", "Sotavento Islands"], zoneTypes: "Regions" }] : never,
  R extends "CW" | undefined ? ["Curaçao", "CW", 599, "+...-...-....", "🇨🇼", { Regions: ["Willemstad", "Bandabou", "Bandariba"], zoneTypes: "Regions" }, 0] : never,
  R extends "CX" | undefined ? ["Christmas Island", "CX", 61, "+.. . .... ....", "🇨🇽", null] : never,
  R extends "CY" | undefined ? ["Cyprus (Κύπρος)", "CY", 357, "+...-..-...-...", "🇨🇾", { Regions: ["Nicosia", "Limassol", "Larnaca", "Paphos", "Famagusta"], zoneTypes: "Regions" }] : never,
  R extends "CZ" | undefined ? ["Czech Republic (Česká republika)", "CZ", 420, "+...(...)...-...", "🇨🇿", { Regions: ["Prague", "Central Bohemian Region", "South Bohemian Region", "Plzeň Region", "Karlovy Vary Region", "Ústí nad Labem Region", "Liberec Region", "Hradec Králové Region", "Pardubice Region", "Olomouc Region", "Moravian-Silesian Region", "South Moravian Region", "Zlín Region", "Vysočina Region"], zoneTypes: "Regions" }] : never,
  R extends "DE" | undefined ? ["Germany (Deutschland)", "DE", 49, "+.. ... .......", "🇩🇪", { States: ["Baden-Württemberg", "Bavaria", "Berlin", "Brandenburg", "Bremen", "Hamburg", "Hesse", "Lower Saxony", "Mecklenburg-Vorpommern", "North Rhine-Westphalia", "Rhineland-Palatinate", "Saarland", "Saxony", "Saxony-Anhalt", "Schleswig-Holstein", "Thuringia"], zoneTypes: "States" }] : never,
  R extends "DJ" | undefined ? ["Djibouti", "DJ", 253, "+...-..-..-..-..", "🇩🇯", { Regions: ["Djibouti City", "Ali Sabieh", "Dikhil", "Arta", "Tadjourah", "Obock"], zoneTypes: "Regions" }] : never,
  R extends "DK" | undefined ? ["Denmark (Danmark)", "DK", 45, "+.. .. .. .. ..", "🇩🇰", { Regions: ["Capital Region of Denmark", "Region Zealand", "Region of Southern Denmark", "Central Denmark Region", "North Denmark Region"], zoneTypes: "Regions" }] : never,
  R extends "DM" | undefined ? ["Dominica", "DM", 1767, "+.(...)...-....", "🇩🇲", { Regions: ["Saint Andrew Parish", "Saint David Parish", "Saint George Parish", "Saint John Parish", "Saint Joseph Parish", "Saint Luke Parish", "Saint Mark Parish", "Saint Patrick Parish", "Saint Paul Parish", "Saint Peter Parish"], zoneTypes: "Regions" }] : never,
  R extends "DO" | undefined ? ["Dominican Republic (República Dominicana)", "DO", 1, "+.(...)...-....", "🇩🇴", { Provinces: ["Azua", "Bahoruco", "Barahona", "Dajabón", "Distrito Nacional", "Duarte", "Elías Piña", "El Seibo", "Espaillat", "Hato Mayor", "Hermanas Mirabal", "Independencia", "La Altagracia", "La Romana", "La Vega", "María Trinidad Sánchez", "Monseñor Nouel", "Monte Cristi", "Monte Plata", "Pedernales", "Peravia", "Puerto Plata", "Samaná", "San Cristóbal", "San José de Ocoa", "San Juan", "San Pedro de Macorís", "Sánchez Ramírez", "Santiago", "Santiago Rodríguez", "Santo Domingo", "Valverde"], zoneTypes: "Provinces" }, 2, ["809", "829", "849"]] : never,
  R extends "DZ" | undefined ? ["Algeria (‫الجزائر‬‎)", "DZ", 213, "+...-..-...-....", "🇩🇿", { Regions: ["Adrar", "Chlef", "Laghouat", "Oum El Bouaghi", "Batna", "Béjaïa", "Biskra", "Béchar", "Blida", "Bouira", "Tamanrasset", "Tébessa", "Tlemcen", "Tiaret", "Tizi Ouzou", "Alger", "Djelfa", "Jijel", "Sétif", "Saïda", "Skikda", "Sidi Bel Abbès", "Annaba", "Guelma", "Constantine", "Médéa", "Mostaganem", "M'Sila", "Mascara", "Ouargla", "Oran", "El Bayadh", "Illizi", "Bordj Bou Arréridj", "Boumerdès", "El Tarf", "Tindouf", "Tissemsilt", "El Oued", "Khenchela", "Souk Ahras", "Tipaza", "Mila", "Aïn Defla", "Naâma", "Aïn Témouchent", "Ghardaïa", "Relizane"], zoneTypes: "Regions" }] : never,
  R extends "EC" | undefined ? ["Ecuador", "EC", 593, "+...-.-...-....", "🇪🇨", { Provinces: ["Azuay", "Bolivar", "Cañar", "Carchi", "Chimborazo", "Cotopaxi", "El Oro", "Esmeraldas", "Galapagos", "Guayas", "Imbabura", "Loja", "Los Rios", "Manabi", "Morona Santiago", "Napo", "Orellana", "Pastaza", "Pichincha", "Santa Elena", "Santo Domingo de los Tsachilas", "Sucumbios", "Tungurahua", "Zamora Chinchipe"], zoneTypes: "Provinces" }] : never,
  R extends "EE" | undefined ? ["Estonia (Eesti)", "EE", 372, "+...-...-....", "🇪🇪", { Counties: ["Harju County", "Hiiu County", "Ida-Viru County", "Järva County", "Jõgeva County", "Lääne County", "Lääne-Viru County", "Põlva County", "Pärnu County", "Rapla County", "Saare County", "Tartu County", "Valga County", "Viljandi County", "Võru County"], zoneTypes: "Counties" }] : never,
  R extends "EG" | undefined ? ["Egypt (‫مصر‬‎)", "EG", 20, "+..(...)...-....", "🇪🇬", { Governorates: ["Alexandria", "Aswan", "Asyut", "Beheira", "Beni Suef", "Cairo", "Dakahlia", "Damietta", "Faiyum", "Gharbia", "Giza", "Ismailia", "Kafr El Sheikh", "Luxor", "Matruh", "Minya", "Monufia", "New Valley", "North Sinai", "Port Said", "Qalyubia", "Qena", "Red Sea", "Sharqia", "Sohag", "South Sinai", "Suez"], zoneTypes: "Governorates" }] : never,
  R extends "EH" | undefined ? ["Western Sahara", "EH", 212, "+...-..-....", "🇪🇭", { Provinces: ["Laayoune", "Dakhla", "Smara", "Boujdour", "Aousserd"], zoneTypes: "Provinces" }] : never,
  R extends "ER" | undefined ? ["Eritrea", "ER", 291, "+...-.-...-...", "🇪🇷", { Regions: ["Anseba", "Debub", "Gash-Barka", "Maekel", "Northern Red Sea", "Southern Red Sea"], zoneTypes: "Regions" }] : never,
  R extends "ET" | undefined ? ["Ethiopia", "ET", 251, "+...-..-...-....", "🇪🇹", { Regions: ["Addis Ababa", "Afar", "Amhara", "Benishangul-Gumuz", "Dire Dawa", "Gambela", "Harari", "Oromia", "Sidama", "Somali", "Southern Nations, Nationalities, and Peoples' Region", "Tigray"], zoneTypes: "Regions" }] : never,
  R extends "FI" | undefined ? ["Finland (Suomi)", "FI", 358, "+... .. .... ....", "🇫🇮", { Regions: ["Åland Islands", "Central Finland", "Central Ostrobothnia", "Eastern Finland", "Kainuu", "Kanta-Häme", "Kymenlaakso", "Lapland", "North Karelia", "Northern Ostrobothnia", "Northern Savonia", "Ostrobothnia", "Päijänne Tavastia", "Pirkanmaa", "Satakunta", "South Karelia", "Southern Ostrobothnia", "Southern Savonia", "Tavastia Proper", "Uusimaa", "Varsinais-Suomi"], zoneTypes: "Regions" }] : never,
  R extends "FJ" | undefined ? ["Fiji", "FJ", 679, "+...-..-.....", "🇫🇯", { Divisions: ["Central", "Eastern", "Northern", "Western"], zoneTypes: "Divisions" }] : never,
  R extends "FK" | undefined ? ["Falkland Islands (Islas Malvinas)", "FK", 500, "+...-.....", "🇫🇰", { Regions: ["East Falkland", "West Falkland", "Staten Island"], zoneTypes: "Regions" }] : never,
  R extends "FM" | undefined ? ["Micronesia", "FM", 691, "+...-...-....", "🇫🇲", { States: ["Chuuk", "Kosrae", "Pohnpei", "Yap"], zoneTypes: "States" }] : never,
  R extends "FO" | undefined ? ["Faroe Islands (Føroyar)", "FO", 298, "+...-...-...", "🇫🇴", { Municipalities: ["Tórshavn", "Klaksvík", "Runavík", "Eystur", "Vágar"], zoneTypes: "Municipalities" }] : never,
  R extends "FR" | undefined ? ["France", "FR", 33, "+.. . .. .. .. ..", "🇫🇷", { Regions: ["Auvergne-Rhône-Alpes", "Bourgogne-Franche-Comté", "Brittany", "Centre-Val de Loire", "Corsica", "Grand Est", "Hauts-de-France", "Île-de-France", "Normandy", "Nouvelle-Aquitaine", "Occitanie", "Pays de la Loire", "Provence-Alpes-Côte d'Azur"], zoneTypes: "Regions" }] : never,
  R extends "GA" | undefined ? ["Gabon", "GA", 241, "+...-.-..-..-..", "🇬🇦", { Provinces: ["Estuaire", "Haut-Ogooué", "Moyen-Ogooué", "Ngounié", "Nyanga", "Ogooué-Ivindo", "Ogooué-Lolo", "Ogooué-Maritime", "Woleu-Ntem"], zoneTypes: "Provinces" }] : never,
  R extends "GB" | undefined ? ["United Kingdom", "GB", 44, "+.. .... ......", "🇬🇧", { States: ["England", "Scotland", "Wales", "Northern Ireland"], zoneTypes: "States" }] : never,
  R extends "GD" | undefined ? ["Grenada", "GD", 1473, "+.(...)...-....", "🇬🇩", { Parishes: ["Saint Andrew", "Saint David", "Saint George", "Saint John", "Saint Mark", "Saint Patrick"], zoneTypes: "Parishes" }] : never,
  R extends "GE" | undefined ? ["Georgia (საქართველო)", "GE", 995, "+...(...)...-...", "🇬🇪", { Regions: ["Abkhazia", "Adjara", "Guria", "Imereti", "Kakheti", "Kvemo Kartli", "Mtskheta-Mtianeti", "Racha-Lechkhumi and Kvemo Svaneti", "Samegrelo-Zemo Svaneti", "Samtskhe-Javakheti", "Shida Kartli", "Tbilisi"], zoneTypes: "Regions" }] : never,
  R extends "GF" | undefined ? ["French Guiana (Guyane française)", "GF", 594, "+...-.....-....", "🇬🇫", { Arrondissements: ["Cayenne", "Saint-Laurent-du-Maroni", "Saint-Georges"],  Communes: ['Awala-Yalimapo', 'Mana, French Guiana', 'Saint-Laurent-du-Maroni', 'Apatou', 'Grand-Santi', 'Papaïchton', 'Saül, French Guiana', 'Maripasoula', 'Camopi', 'Saint-Georges, French Guiana', 'Ouanary', 'Régina', 'Roura, French Guiana', 'Saint-Élie', 'Iracoubo', 'Sinnamary', 'Kourou', 'Macouria', 'Montsinéry-Tonnegrande', 'Matoury', 'Cayenne', 'Remire-Montjoly'], zoneTypes: ["Arrondissements", "Communes"] }] : never,
  R extends "GG" | undefined ? ["Guernsey", "GG", 44, "+.. (.) .... ......", "🇬🇬", { Parishes: ["Castel", "Forest", "St. Andrew", "St. Martin", "St. Peter Port", "St. Pierre du Bois", "St. Sampson", "St. Saviour", "Torteval", "Vale"], zoneTypes: "Parishes" }] : never,
  R extends "GH" | undefined ? ["Ghana (Gaana)", "GH", 233, "+...(...)...-...", "🇬🇭", { Regions: ["Ashanti", "Brong-Ahafo", "Central", "Eastern", "Greater Accra", "Northern", "Upper East", "Upper West", "Volta", "Western"], zoneTypes: "Regions" }] : never,
  R extends "GI" | undefined ? ["Gibraltar", "GI", 350, "+...-...-.....", "🇬🇮", { Districts: ["East Side", "North District", "South District", "Town Area", "Westside"], zoneTypes: "Districts" }] : never,
  R extends "GL" | undefined ? ["Greenland (Kalaallit Nunaat)", "GL", 299, "+...-..-..-..", "🇬🇱", { Municipalities: ["Kujalleq", "Qaasuitsup", "Qeqqata", "Sermersooq"], zoneTypes: "Municipalities" }] : never,
  R extends "GM" | undefined ? ["Gambia", "GM", 220, "+...(...)..-..", "🇬🇲", { Divisions: ["Banjul", "Lower River", "Central River", "North Bank", "Upper River", "West Coast"], zoneTypes: "Divisions" }] : never,
  R extends "GN" | undefined ? ["Guinea (Guinée)", "GN", 224, "+...-..-...-...", "🇬🇳", { Regions: ["Boké", "Conakry", "Faranah", "Kankan", "Kindia", "Labé", "Mamou", "Nzérékoré"], zoneTypes: "Regions" }] : never,
  R extends "GP" | undefined ? ["Guadeloupe", "GP", 590, "+... ... .. .. ..", "🇬🇵", { Arrondissements: ["Basse-Terre", "Pointe-à-Pitre"], Communes: ['Les Abymes', 'Anse-Bertrand', 'Baie-Mahault', 'Baillif', 'Basse-Terre', 'Bouillante', 'Capesterre-Belle-Eau', 'Capesterre-de-Marie-Galante', 'Deshaies', 'La Désirade (commune)', 'Le Gosier', 'Gourbeyre', 'Goyave, Guadeloupe', 'Grand-Bourg', 'Lamentin', "Morne-à-l'Eau", 'Le Moule', 'Petit-Bourg', 'Petit-Canal', 'Pointe-à-Pitre', 'Pointe-Noire, Guadeloupe', 'Port-Louis, Guadeloupe', 'Saint-Claude, Guadeloupe', 'Saint-François, Guadeloupe', 'Saint-Louis, Guadeloupe', 'Sainte-Anne, Guadeloupe', 'Sainte-Rose, Guadeloupe', 'Terre-de-Bas', 'Terre-de-Haut', 'Trois-Rivières, Guadeloupe', 'Vieux-Fort, Guadeloupe', 'Vieux-Habitants', 'Saint Barthélemy', 'Saint Martin (France)'], Cantons: ["Les Abymes-1", "Les Abymes-2", "Les Abymes-3", "Baie-Mahault-1", "Baie-Mahault-2", "Basse-Terre", "Capesterre-Belle-Eau", "Le Gosier", "Lamentin", "Marie-Galante", "Morne-à-l'Eau", "Le Moule", "Petit-Bourg", "Petit-Canal", "Pointe-à-Pitre", "Sainte-Anne", "Sainte-Rose-1", "Sainte-Rose-2", "Saint-François", "Trois-Rivières", "Vieux-Habitants"], zoneTypes: ["Arrondissements", "Cantons", "Communes"]}, 0] : never,
  R extends "GQ" | undefined ? ["Equatorial Guinea (Guinea Ecuatorial)", "GQ", 240, "+...-..-...-....", "🇬🇶", { Provinces: ["Annobón", "Bioko Norte", "Bioko Sur", "Centro Sur", "Kié-Ntem", "Litoral", "Wele-Nzas"], zoneTypes: "Provinces" }] : never,
  R extends "GR" | undefined ? ["Greece (Ελλάδα)", "GR", 30, "+..(...)...-....", "🇬🇷", { Regions: ["Attica", "Central Greece", "Central Macedonia", "Crete", "Eastern Macedonia and Thrace", "Epirus", "Ionian Islands", "North Aegean", "Peloponnese", "South Aegean", "Thessaly", "Western Greece", "Western Macedonia"], zoneTypes: "Regions" }] : never,
  R extends "GS" | undefined ? ["South Georgia and the South Sandwich Islands", "GS", 500, "+... .....", "🇬🇸", null] : never,
  R extends "GT" | undefined ? ["Guatemala", "GT", 502, "+... ....-....", "🇬🇹", { Departments: ["Alta Verapaz", "Baja Verapaz", "Chimaltenango", "Chiquimula", "El Progreso", "Escuintla", "Guatemala", "Huehuetenango", "Izabal", "Jalapa", "Jutiapa", "Petén", "Quetzaltenango", "Quiché", "Retalhuleu", "Sacatepéquez", "San Marcos", "Santa Rosa", "Sololá", "Suchitepéquez", "Totonicapán", "Zacapa"], zoneTypes: "Departments" }] : never,
  R extends "GU" | undefined ? ["Guam", "GU", 1671, "+.(...)...-....", "🇬🇺", { Villages: ["Agana Heights", "Agat", "Asan", "Barrigada", "Chalan Pago-Ordot", "Dededo", "Hagatna", "Inarajan", "Mangilao", "Merizo", "Mongmong-Toto-Maite", "Piti", "Santa Rita", "Sinajana", "Talofofo", "Tamuning", "Umatac", "Yigo", "Yona"], zoneTypes: "Villages" }] : never,
  R extends "GW" | undefined ? ["Guinea-Bissau (Guiné Bissau)", "GW", 245, "+...-.-......", "🇬🇼", { Regions: ["Bafatá", "Biombo", "Bolama", "Cacheu", "Gabú", "Oio", "Quinara", "Tombali"], zoneTypes: "Regions" }] : never,
  R extends "GY" | undefined ? ["Guyana", "GY", 592, "+...-...-....", "🇬🇾", { Regions: ["Barima-Waini", "Cuyuni-Mazaruni", "Demerara-Mahaica", "East Berbice-Corentyne", "Essequibo Islands-West Demerara", "Mahaica-Berbice", "Pomeroon-Supenaam", "Potaro-Siparuni", "Upper Demerara-Berbice", "Upper Takutu-Upper Essequibo"], zoneTypes: "Regions" }] : never,
  R extends "HK" | undefined ? ["Hong Kong (香港)", "HK", 852, "+... .... ....", "🇭🇰", { Districts: ["Central and Western", "Eastern", "Islands", "Kowloon City", "Kwai Tsing", "Kwun Tong", "North", "Sai Kung", "Sha Tin", "Sham Shui Po", "Southern", "Tai Po", "Tsuen Wan", "Tuen Mun", "Wan Chai", "Wong Tai Sin", "Yau Tsim Mong", "Yuen Long"], zoneTypes: "Districts" }] : never,
  R extends "HM" | undefined ? ["Heard Island and McDonald Islands", "HM", 672, "", "🇭🇲", null] : never,
  R extends "HN" | undefined ? ["Honduras", "HN", 504, "+...-....-....", "🇭🇳", { Departments: ["Atlántida", "Choluteca", "Colón", "Comayagua", "Copán", "Cortés", "El Paraíso", "Francisco Morazán", "Gracias a Dios", "Intibucá", "Islas de la Bahía", "La Paz", "Lempira", "Ocotepeque", "Olancho", "Santa Bárbara", "Valle", "Yoro"], zoneTypes: "Departments" }] : never,
  R extends "HR" | undefined ? ["Croatia (Hrvatska)", "HR", 385, "+...-..-...-...", "🇭🇷", { Counties: ["Zagreb County", "Krapina-Zagorje County", "Sisak-Moslavina County", "Karlovačka County", "Varaždin County", "Koprivnica-Križevci County", "Bjelovar-Bilogora County", "Primorje-Gorski Kotar County", "Lika-Senj County", "Virovitica-Podravina County", "Požega-Slavonia County", "Brod-Posavina County", "Zadar County", "Osijek-Baranja County", "Šibenik-Knin County", "Vukovar-Syrmia County", "Split-Dalmatia County", "Istria County", "Dubrovnik-Neretva County", "Međimurje County", "Grad Zagreb"], zoneTypes: "Counties" }] : never,
  R extends "HT" | undefined ? ["Haiti", "HT", 509, "+... ....-....", "🇭🇹", { Departments: ["Artibonite", "Centre", "Grand'Anse", "Nippes", "Nord", "Nord-Est", "Nord-Ouest", "Ouest", "Sud", "Sud-Est"], zoneTypes: "Departments" }] : never,
  R extends "HU" | undefined ? ["Hungary (Magyarország)", "HU", 36, "+..(...)...-...", "🇭🇺", { Counties: ["Bács-Kiskun", "Baranya", "Békés", "Borsod-Abaúj-Zemplén", "Csongrád-Csanád", "Fejér", "Győr-Moson-Sopron", "Hajdú-Bihar", "Heves", "Jász-Nagykun-Szolnok", "Komárom-Esztergom", "Nógrád", "Pest", "Somogy", "Szabolcs-Szatmár-Bereg", "Tolna", "Vas", "Veszprém", "Zala"], zoneTypes: "Counties" }] : never,
  R extends "ID" | undefined ? ["Indonesia", "ID", 62, "+..-..-...-..", "🇮🇩", { Provinces: ["Aceh", "Bali", "Bangka Belitung", "Banten", "Bengkulu", "Central Java", "Central Kalimantan", "Central Sulawesi", "East Java", "East Kalimantan", "East Nusa Tenggara", "Gorontalo", "Jakarta", "Jambi", "Lampung", "Maluku", "North Kalimantan", "North Maluku", "North Sulawesi", "North Sumatra", "Papua", "Riau", "Riau Islands", "South Kalimantan", "South Sulawesi", "South Sumatra", "Southeast Sulawesi", "West Java", "West Kalimantan", "West Nusa Tenggara", "West Papua", "West Sulawesi", "West Sumatra", "Yogyakarta"], zoneTypes: "Provinces" }] : never,
  R extends "IE" | undefined ? ["Ireland", "IE", 353, "+... .. .......", "🇮🇪", { Counties: ["Carlow", "Cavan", "Clare", "Cork", "Donegal", "Dublin", "Galway", "Kerry", "Kildare", "Kilkenny", "Laois", "Leitrim", "Limerick", "Longford", "Louth", "Mayo", "Meath", "Monaghan", "Offaly", "Roscommon", "Sligo", "Tipperary", "Waterford", "Westmeath", "Wexford", "Wicklow"], zoneTypes: "Counties" }] : never,
  R extends "IL" | undefined ? ["Israel (‫ישראל‬‎)", "IL", 972, "+...-.-...-....", "🇮🇱", { Districts: ["Central", "Haifa", "Jerusalem", "Northern", "Southern", "Tel Aviv"], zoneTypes: "Districts" }] : never,
  R extends "IM" | undefined ? ["Isle of Man", "IM", 44, "+.. .... ... ...", "🇮🇲", { Parishes: ["Andreas", "Arbory", "Ballaugh", "Braddan", "Bride", "Castletown", "Douglas", "German", "Jurby", "Laxey", "Lezayre", "Lonan", "Malew", "Marown", "Maughold", "Michael", "Onchan", "Patrick", "Peel", "Port Erin", "Port St Mary", "Ramsey", "Rushen"], Sheadings: ["Garff", "Glenfaba", "Middle", "Peel", "Rushen"], zoneTypes: ["Parishes", "Sheadings"]}] : never,
  R extends "IN" | undefined ? ["India (भारत)", "IN", 91, "+.. .....-.....", "🇮🇳", { States: ["Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh", "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka", "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal"], zoneTypes: "States" }] : never,
  R extends "IO" | undefined ? ["British Indian Ocean Territory", "IO", 246, "+...-...-....", "🇮🇴", null] : never,
  R extends "IQ" | undefined ? ["Iraq (‫العراق‬‎)", "IQ", 964, "+...(...)...-....", "🇮🇶", { Governorates: ["Al Anbar", "Babil", "Baghdad", "Basra", "Dhi Qar", "Diyala", "Dohuk", "Erbil", "Karbala", "Kirkuk", "Maysan", "Muthanna", "Najaf", "Nineveh", "Qadisiyyah", "Saladin", "Sulaymaniyah", "Wasit"], zoneTypes: "Governorates" }] : never,
  R extends "IR" | undefined ? ["Iran (‫ایران‬‎)", "IR", 98, "+..(...)...-....", "🇮🇷", { Provinces: ["Alborz", "Ardabil", "Bushehr", "Chaharmahal and Bakhtiari", "East Azerbaijan", "Isfahan", "Fars", "Gilan", "Golestan", "Hamadan", "Hormozgan", "Ilam", "Kerman", "Kermanshah", "Khuzestan", "Kohgiluyeh and Boyer-Ahmad", "Kurdistan", "Lorestan", "Markazi", "Mazandaran", "North Khorasan", "Qazvin", "Qom", "Razavi Khorasan", "Semnan", "Sistan and Baluchestan", "South Khorasan", "Tehran", "West Azerbaijan", "Yazd", "Zanjan"], zoneTypes: "Provinces" }] : never,
  R extends "IS" | undefined ? ["Iceland (Ísland)", "IS", 354, "+... ... ....", "🇮🇸", { Regions: ["Capital Region", "Southern Peninsula", "Western Region", "Westfjords", "Northwest Region", "Northeast Region", "East Region", "South Region"], zoneTypes: "Regions" }] : never,
  R extends "IT" | undefined ? ["Italy (Italia)", "IT", 39, "+.. ... ......", "🇮🇹", { Regions: ["Abruzzo", "Basilicata", "Calabria", "Campania", "Emilia-Romagna", "Friuli-Venezia Giulia", "Lazio", "Liguria", "Lombardia", "Marche", "Molise", "Piemonte", "Puglia", "Sardegna", "Sicilia", "Toscana", "Trentino-Alto Adige", "Umbria", "Valle d'Aosta", "Veneto"], zoneTypes: "Regions" }, 0] : never,
  R extends "JE" | undefined ? ["Jersey", "JE", 44, "+.. .... ......", "🇯🇪", { Parishes: ["Grouville", "Saint Brelade", "Saint Clement", "Saint Helier", "Saint John", "Saint Lawrence", "Saint Martin", "Saint Mary", "Saint Ouen", "Saint Peter", "Saint Saviour", "Trinity"], zoneTypes: "Parishes" }] : never,
  R extends "JM" | undefined ? ["Jamaica", "JM", 1876, "+.(...)...-....", "🇯🇲", { Parishes: ["Clarendon", "Hanover", "Kingston", "Manchester", "Portland", "Saint Andrew", "Saint Ann", "Saint Catherine", "Saint Elizabeth", "Saint James", "Saint Mary", "Saint Thomas", "Trelawny", "Westmoreland"], zoneTypes: "Parishes" }] : never,
  R extends "JO" | undefined ? ["Jordan (‫الأردن‬‎)", "JO", 962, "+...-.-....-....", "🇯🇴", { Governorates: ["Ajloun", "Amman", "Aqaba", "Balqa", "Irbid", "Jarash", "Karak", "Ma'an", "Madaba", "Mafraq", "Tafilah", "Zarqa"], zoneTypes: "Governorates" }] : never,
  R extends "JP" | undefined ? ["Japan (日本)", "JP", 81, "+.. ... .. ....", "🇯🇵", { Prefectures: ["Aichi", "Akita", "Aomori", "Chiba", "Ehime", "Fukui", "Fukuoka", "Fukushima", "Gifu", "Gunma", "Hiroshima", "Hokkaido", "Hyogo", "Ibaraki", "Ishikawa", "Iwate", "Kagawa", "Kagoshima", "Kanagawa", "Kochi", "Kumamoto", "Kyoto", "Mie", "Miyagi", "Miyazaki", "Nagano", "Nagasaki", "Nara", "Niigata", "Oita", "Okayama", "Okinawa", "Osaka", "Saga", "Saitama", "Shiga", "Shimane", "Shizuoka", "Tochigi", "Tokushima", "Tokyo", "Tottori", "Toyama", "Wakayama", "Yamagata", "Yamaguchi", "Yamanashi"], zoneTypes: "Prefectures" }] : never,
  R extends "KE" | undefined ? ["Kenya", "KE", 254, "+...-...-......", "🇰🇪", { Counties: ["Baringo", "Bomet", "Bungoma", "Busia", "Elgeyo-Marakwet", "Embu", "Garissa", "Homa Bay", "Isiolo", "Kajiado", "Kakamega", "Kericho", "Kiambu", "Kilifi", "Kirinyaga", "Kisii", "Kisumu", "Kitui", "Kwale", "Laikipia", "Lamu", "Machakos", "Makueni", "Mandera", "Marsabit", "Meru", "Migori", "Mombasa", "Murang'a", "Nairobi", "Nakuru", "Nandi", "Narok", "Nyamira", "Nyandarua", "Nyeri", "Samburu", "Siaya", "Taita-Taveta", "Tana River", "Tharaka-Nithi", "Trans-Nzoia", "Turkana", "Uasin Gishu", "Vihiga", "Wajir", "West Pokot"], zoneTypes: "Counties" }] : never,
  R extends "KG" | undefined ? ["Kyrgyzstan (Кыргызстан)", "KG", 996, "+...(...)...-...", "🇰🇬", { Regions: ["Batken", "Chuy", "Issyk-Kul", "Jalal-Abad", "Naryn", "Osh", "Talas"], zoneTypes: "Regions" }] : never,
  R extends "KH" | undefined ? ["Cambodia (កម្ពុជា)", "KH", 855, "+...-..-...-...", "🇰🇭", { Provinces: ["Banteay Meanchey", "Battambang", "Kampong Cham", "Kampong Chhnang", "Kampong Speu", "Kampong Thom", "Kampot", "Kandal", "Kep", "Koh Kong", "Kratie", "Mondulkiri", "Oddar Meanchey", "Pailin", "Phnom Penh", "Preah Sihanouk", "Preah Vihear", "Pursat", "Ratanakiri", "Siem Reap", "Stung Treng", "Svay Rieng", "Takéo", "Tboung Khmum"], zoneTypes: "Provinces" }] : never,
  R extends "KI" | undefined ? ["Kiribati", "KI", 686, "+...-..-...", "🇰🇮", { Islands: ["Banaba", "Gilbert Islands", "Line Islands", "Phoenix Islands"], zoneTypes: "Islands" }] : never,
  R extends "KM" | undefined ? ["Comoros (‫جزر القمر‬‎)", "KM", 269, "+...-..-.....", "🇰🇲", { Regions: ["Grande Comore", "Anjouan", "Mohéli"], zoneTypes: "Regions" }] : never,
  R extends "KN" | undefined ? ["Saint Kitts and Nevis", "KN", 1869, "+.(...)...-....", "🇰🇳", { Parishes: ["Christ Church Nichola Town", "Saint Anne Sandy Point", "Saint George Basseterre", "Saint John Capisterre", "Saint Mary Cayon", "Saint Paul Capisterre", "Saint Peter Basseterre", "Saint Thomas Lowland", "Saint Thomas Middle Island", "Trinity Palmetto Point"], zoneTypes: "Parishes" }] : never,
  R extends "KP" | undefined ? ["North Korea (조선 민주주의 인민 공화국)", "KP", 850, "+...-...-...", "🇰🇵", { Provinces: ["Chagang", "North Hamgyong", "South Hamgyong", "North Hwanghae", "South Hwanghae", "Kangwon", "North Pyongan", "South Pyongan", "Ryanggang"], zoneTypes: "Provinces" }] : never,
  R extends "KW" | undefined ? ["Kuwait (‫الكويت‬‎)", "KW", 965, "+...-....-....", "🇰🇼", { Governorates: ["Al Ahmadi", "Al Farwaniyah", "Al Jahra", "Capital", "Hawalli", "Mubarak Al-Kabeer"], zoneTypes: "Governorates" }] : never,
  R extends "KY" | undefined ? ["Cayman Islands", "KY", 1345, "+.(...)...-....", "🇰🇾", { Districts: ["Bodden Town", "Cayman Brac", "East End", "George Town", "Little Cayman", "North Side", "Sister Islands", "West Bay"], zoneTypes: "Districts" }] : never,
  R extends "KZ" | undefined ? ["Kazakhstan (Казахстан)", "KZ", 7, "+. ... ...-..-..", "🇰🇿", { Regions: ["Almaty", "Aqmola", "Aqtobe", "Atyrau", "East Kazakhstan", "Mangystau", "North Kazakhstan", "Nur-Sultan", "Pavlodar", "Qaragandy", "Qostanay", "Qyzylorda", "Shymkent", "Turkestan", "West Kazakhstan"], zoneTypes: "Regions" }, 1] : never,
  R extends "LA" | undefined ? ["Laos (ລາວ)", "LA", 856, "+...-..-...-...", "🇱🇦", { Provinces: ["Attapeu", "Bokeo", "Bolikhamsai", "Champasak", "Houaphanh", "Khammouane", "Luang Namtha", "Luang Prabang", "Oudomxay", "Phongsaly", "Sainyabuli", "Salavan", "Savannakhet", "Sekong", "Vientiane", "Vientiane Prefecture", "Xaisomboun", "Xaisomboun Special Zone", "Xiangkhouang", "Xekong", "Xiangkhouang"], zoneTypes: "Provinces" }] : never,
  R extends "LB" | undefined ? ["Lebanon (‫لبنان‬‎)", "LB", 961, "+...-.-...-...", "🇱🇧", { Governorates: ["Akkar", "Baalbek-Hermel", "Beirut", "Beqaa", "Mount Lebanon", "Nabatieh", "North", "South"], zoneTypes: "Governorates" }] : never,
  R extends "LC" | undefined ? ["Saint Lucia", "LC", 1758, "+.(...)...-....", "🇱🇨", { Districts: ["Anse-la-Raye", "Canaries", "Castries", "Choiseul", "Dennery", "Gros Islet", "Laborie", "Micoud", "Soufrière", "Vieux Fort"], zoneTypes: "Districts" }] : never,
  R extends "LI" | undefined ? ["Liechtenstein", "LI", 423, "+...(...)...-....", "🇱🇮", { Municipalities: ["Balzers", "Eschen", "Gamprin", "Mauren", "Planken", "Ruggell", "Schaan", "Schellenberg", "Triesen", "Triesenberg", "Vaduz"], zoneTypes: "Municipalities" }] : never,
  R extends "LR" | undefined ? ["Liberia", "LR", 231, "+...-..-...-...", "🇱🇷", { Counties: ["Bomi", "Bong", "Gbarpolu", "Grand Bassa", "Grand Cape Mount", "Grand Gedeh", "Grand Kru", "Lofa", "Margibi", "Maryland", "Montserrado", "Nimba", "River Cess", "River Gee", "Sinoe"], zoneTypes: "Counties" }] : never,
  R extends "LS" | undefined ? ["Lesotho", "LS", 266, "+...-.-...-....", "🇱🇸", { Districts: ["Berea", "Butha-Buthe", "Leribe", "Mafeteng", "Maseru", "Mohale's Hoek", "Mokhotlong", "Qacha's Nek", "Quthing", "Thaba-Tseka"], zoneTypes: "Districts" }] : never,
  R extends "LT" | undefined ? ["Lithuania (Lietuva)", "LT", 370, "+...(...)..-...", "🇱🇹", { Counties: ["Alytus County", "Kaunas unknownounty", "Klaipeda County", "Marijampole County", "Panevezys County", "Siauliai County", "Taurage County", "Telsiai County", "Utena County", "Vilnius County"], zoneTypes: "Counties" }] : never,
  R extends "LU" | undefined ? ["Luxembourg", "LU", 352, "+...(...)...-...", "🇱🇺", { Cantons: ["Diekirch", "Grevenmacher", "Luxembourg"], zoneTypes: "Cantons" }] : never,
  R extends "LV" | undefined ? ["Latvia (Latvija)", "LV", 371, "+...-..-...-...", "🇱🇻", { Regions: ["Aizkraukle", "Aluksne", "Balvi", "Bauska", "Cesis", "Daugavpils", "Dobele", "Gulbene", "Jekabpils", "Jelgava", "Jurmala", "Kraslava", "Kuldiga", "Liepaja", "Limbazi", "Ludza", "Madona", "Ogre", "Preili", "Rezekne", "Riga", "Saldus", "Talsi", "Tukums", "Valka", "Valmiera", "Ventspils"], zoneTypes: "Regions" }] : never,
  R extends "LY" | undefined ? ["Libya (‫ليبيا‬‎)", "LY", 218, "+...-..-...-...", "🇱🇾", { Regions: ["Al Wahat", "Benghazi", "Derna", "Ghat", "Jabal al Akhdar", "Jabal al Gharbi", "Jafara", "Jufra", "Kufra", "Marj", "Misrata", "Murqub", "Murzuq", "Nalut", "Nuqat al Khams", "Sabha", "Sirte", "Tripoli", "Wadi al Hayaa", "Wadi al Shatii", "Zawiya"], zoneTypes: "Regions" }] : never,
  R extends "MA" | undefined ? ["Morocco (‫المغرب‬‎)", "MA", 212, "+...-..-....-...", "🇲🇦", { Regions: ["Tanger-Tétouan-Al Hoceïma", "Oriental", "Fès-Meknès", "Rabat-Salé-Kénitra", "Béni Mellal-Khénifra", "Casablanca-Settat", "Marrakesh-Safi", "Drâa-Tafilalet", "Souss-Massa", "Guelmim-Oued Noun", "Laâyoune-Sakia El Hamra", "Dakhla-Oued Ed-Dahab"], zoneTypes: "Regions" }] : never,
  R extends "MC" | undefined ? ["Monaco", "MC", 377, "+...-..-...-...", "🇲🇨", { Districts: ["Monaco-Ville", "La Condamine", "Monte Carlo", "Fontvieille"], zoneTypes: "Districts" }] : never,
  R extends "MD" | undefined ? ["Moldova (Republica Moldova)", "MD", 373, "+...-....-....", "🇲🇩", { Regions: ["Anenii Noi", "Basarabeasca", "Briceni", "Cahul", "Călărași", "Cantemir", "Căușeni", "Cimișlia", "Criuleni", "Dondușeni", "Drochia", "Dubăsari", "Edineț", "Fălești", "Florești", "Găgăuzia", "Glodeni", "Hîncești", "Ialoveni", "Leova", "Nisporeni", "Ocnița", "Orhei", "Rezina", "Rîșcani", "Sîngerei", "Șoldănești", "Soroca", "Strășeni", "Ștefan Vodă", "Taraclia", "Telenești", "Ungheni"], zoneTypes: "Regions" }] : never,
  R extends "ME" | undefined ? ["Montenegro (Crna Gora)", "ME", 382, "+...-..-...-...", "🇲🇪", { Municipalities: ["Andrijevica", "Bar", "Berane", "Bijelo Polje", "Budva", "Cetinje", "Danilovgrad", "Gusinje", "Herceg Novi", "Kolašin", "Kotor", "Mojkovac", "Nikšić", "Petnjica", "Plav", "Pljevlja", "Plužine", "Podgorica", "Rožaje", "Šavnik", "Tivat", "Ulcinj", "Žabljak"], zoneTypes: "Municipalities" }] : never,
  R extends "MF" | undefined ? ["Saint Martin (Saint-Martin (partie française))", "MF", 590, "+... ... .. .. ..", "🇲🇫", { Parishes: ["Marigot"], zoneTypes: "Parishes" }, 2] : never,
  R extends "MG" | undefined ? ["Madagascar (Madagasikara)", "MG", 261, "+...-..-..-.....", "🇲🇬", { Provinces: ["Antananarivo", "Antsiranana", "Fianarantsoa", "Mahajanga", "Toamasina", "Toliara"], zoneTypes: "Provinces" }] : never,
  R extends "MH" | undefined ? ["Marshall Islands", "MH", 692, "+...-...-....", "🇲🇭", { Municipalities: ["Ailinglaplap", "Ailuk", "Arno", "Aur", "Bikini", "Ebon", "Enewetak", "Jabat", "Jaluit", "Kili", "Kwajalein", "Lae", "Lib", "Likiep", "Majuro", "Maloelap", "Mejit", "Mili", "Namdrik", "Namu", "Rongelap", "Ujae", "Ujelang", "Utirik", "Wotho", "Wotje"], zoneTypes: "Municipalities" }] : never,
  R extends "MK" | undefined ? ["Macedonia (FYROM) (Македонија)", "MK", 389, "+...-..-...-...", "🇲🇰", { Regions: ["Skopje", "Pelagonia", "Polog", "Vardar", "Eastern", "Southwestern", "Northeastern", "Southeastern"], zoneTypes: "Regions" }] : never,
  R extends "ML" | undefined ? ["Mali", "ML", 223, "+...-..-..-....", "🇲🇱", { Regions: ["Bamako", "Gao", "Kayes", "Kidal", "Koulikoro", "Mopti", "Segou", "Sikasso", "Tombouctou"], zoneTypes: "Regions" }] : never,
  R extends "MM" | undefined ? ["Myanmar (Burma) (မြန်မာ)", "MM", 95, "+..-...-...", "🇲🇲", { States: ["Ayeyarwady", "Bago", "Chin", "Kachin", "Kayah", "Kayin", "Magway", "Mandalay", "Mon", "Naypyidaw Union Territory", "Rakhine", "Sagaing", "Shan", "Tanintharyi", "Yangon"],  Regions: ["Sagaing", "Tanintharyi", "Bago", "Magway", "Mandalay", "Yangon", "Ayeyarwady", "Kachin", "Kayah", "Kayin", "Chin", "Mon", "Rakhine", "Shan"], zoneTypes: ["Regions", "States"] }] : never,
  R extends "MN" | undefined ? ["Mongolia (Монгол)", "MN", 976, "+...-..-..-....", "🇲🇳", { Aimags: ["Arkhangai", "Bayan-Ölgii", "Bayankhongor", "Bulgan", "Darkhan-Uul", "Dornod", "Dornogovi", "Dundgovi", "Govi-Altai", "Govisümber", "Khentii", "Khovd", "Khövsgöl", "Ömnögovi", "Orkhon", "Övörkhangai", "Selenge", "Sükhbaatar", "Töv", "Uvs", "Zavkhan"], zoneTypes: "Aimags" }] : never,
  R extends "MO" | undefined ? ["Macau (澳門)", "MO", 853, "+...-....-....", "🇲🇴", { Freguesias: ["Nossa Senhora de Fátima", "Santo António", "São Lázaro", "São Lourenço", "São Francisco Xavier", "Sé", "Coloane", "Taipa"], zoneTypes: "Freguesias" }] : never,
  R extends "MP" | undefined ? ["Northern Mariana Islands", "MP", 1670, "+.(...)...-....", "🇲🇵", { Municipalities: ["Northern Islands", "Rota", "Saipan", "Tinian"], zoneTypes: "Municipalities" }] : never,
  R extends "MQ" | undefined ? ["Martinique", "MQ", 596, "+...(...)..-..-..", "🇲🇶", { Arrondissements: ["Fort-de-France", "La Trinité", "Le Marin", "Le Robert", "Saint-Pierre"],  Communes: ["L'Ajoupa-Bouillon", "Les Anses-d'Arlet", 'Basse-Pointe', 'Bellefontaine, Martinique', 'Le Carbet', 'Case-Pilote', 'Le Diamant', 'Ducos, Martinique', 'Fonds-Saint-Denis', 'Fort-de-France', 'Le François', "Grand'Rivière", 'Gros-Morne, Martinique', 'Le Lamentin', 'Le Lorrain', 'Macouba', 'Le Marigot', 'Le Marin', 'Le Morne-Rouge', 'Le Morne-Vert', 'Le Prêcheur', 'Rivière-Pilote', 'Rivière-Salée', 'Le Robert', 'Saint-Esprit, Martinique', 'Saint-Joseph, Martinique', 'Saint-Pierre, Martinique', 'Sainte-Anne, Martinique', 'Sainte-Luce, Martinique', 'Sainte-Marie, Martinique', 'Schœlcher', 'La Trinité, Martinique', 'Les Trois-Îlets', 'Le Vauclin'], zoneTypes: ["Arrondissements", "Communes"] }] : never,
  R extends "MR" | undefined ? ["Mauritania (‫موريتانيا‬‎)", "MR", 222, "+...-..-..-....", "🇲🇷", { Regions: ["Adrar", "Assaba", "Brakna", "Dakhlet Nouadhibou", "Gorgol", "Guidimaka", "Hodh Ech Chargui", "Hodh El Gharbi", "Inchiri", "Nouakchott Nord", "Nouakchott Ouest", "Nouakchott Sud", "Tagant", "Tiris Zemmour", "Trarza"], zoneTypes: "Regions" }] : never,
  R extends "MS" | undefined ? ["Montserrat", "MS", 1664, "+.(...)...-....", "🇲🇸", { Parishes: ["Saint Anthony", "Saint Georges", "Saint Peter"], zoneTypes: "Parishes" }] : never,
  R extends "MT" | undefined ? ["Malta", "MT", 356, "+...-....-....", "🇲🇹", { Districts: ["Gozo", "Malta"], zoneTypes: "Districts" }] : never,
  R extends "MU" | undefined ? ["Mauritius (Moris)", "MU", 230, "+...-...-....", "🇲🇺", { Districts: ["Black River", "Flacq", "Grand Port", "Moka", "Pamplemousses", "Plaines Wilhems", "Port Louis", "Rivière du Rempart", "Savanne"], zoneTypes: "Districts" }] : never,
  R extends "MV" | undefined ? ["Maldives", "MV", 960, "+...-...-....", "🇲🇻", { Atolls: ["Ari Atoll", "Faafu Atoll", "Lhaviyani Atoll", "Malé Atoll", "Baa Atoll", "Dhaalu Atoll", "Gaafu Alif Atoll", "Haa Alif Atoll", "Kaafu Atoll", "Laamu Atoll", "Meemu Atoll", "Noonu Atoll", "Raa Atoll", "Seenu Atoll", "Thaa Atoll", "Vaavu Atoll"], zoneTypes: "Atolls" }] : never,
  R extends "MW" | undefined ? ["Malawi", "MW", 265, "+...-.-....-....", "🇲🇼", { Districts: ["Balaka", "Blantyre", "Chikwawa", "Chiradzulu", "Chitipa", "Dedza", "Dowa", "Karonga", "Kasungu", "Likoma", "Lilongwe", "Machinga", "Mangochi", "Mchinji", "Mulanje", "Mwanza", "Mzimba", "Neno", "Nkhata Bay", "Nkhotakota", "Nsanje", "Ntcheu", "Ntchisi", "Phalombe", "Rumphi", "Salima", "Thyolo", "Zomba"], zoneTypes: "Districts" }] : never,
  R extends "MX" | undefined ? ["Mexico (México)", "MX", 52, "+..-..-..-....", "🇲🇽", { States: ["Aguascalientes", "Baja California", "Baja California Sur", "Campeche", "Chiapas", "Chihuahua", "Coahuila", "Colima", "Durango", "Guanajuato", "Guerrero", "Hidalgo", "Jalisco", "México", "Michoacán", "Morelos", "Nayarit", "Nuevo León", "Oaxaca", "Puebla", "Querétaro", "Quintana Roo", "San Luis Potosí", "Sinaloa", "Sonora", "Tabasco", "Tamaulipas", "Tlaxcala", "Veracruz", "Yucatán", "Zacatecas"], zoneTypes: "States" }] : never,
  R extends "MY" | undefined ? ["Malaysia", "MY", 60, "+.. ..-....-....", "🇲🇾", { States: ["Johor", "Kedah", "Kelantan", "Melaka", "Negeri Sembilan", "Pahang", "Perak", "Perlis", "Pulau Pinang", "Sabah", "Sarawak", "Selangor", "Terengganu", "Wilayah Persekutuan Kuala Lumpur", "Wilayah Persekutuan Labuan", "Wilayah Persekutuan Putrajaya"], zoneTypes: "States" }] : never,
  R extends "MZ" | undefined ? ["Mozambique (Moçambique)", "MZ", 258, "+...-..-...-...", "🇲🇿", { Provinces: ["Cabo Delgado", "Gaza", "Inhambane", "Manica", "Maputo", "Nampula", "Niassa", "Sofala", "Tete", "Zambezia"], zoneTypes: "Provinces" }] : never,
  R extends "NA" | undefined ? ["Namibia (Namibië)", "NA", 264, "+...-..-...-....", "🇳🇦", { Regions: ["Erongo", "Hardap", "Karas", "Kavango East", "Kavango West", "Khomas", "Kunene", "Ohangwena", "Omaheke", "Omusati", "Oshana", "Oshikoto", "Otjozondjupa", "Zambezi"], zoneTypes: "Regions" }] : never,
  R extends "NC" | undefined ? ["New Caledonia (Nouvelle-Calédonie)", "NC", 687, "+...-..-....", "🇳🇨", { Provinces: ["South Province", "North Province", "Loyalty Islands Province"],  Communes: ["Nouméa", "Mont-Dore", "Dumbéa", "Païta", "Yaté", "Bouloupari", "La Foa", "Sarraméa", "Farino", "Moindou", "Bourail", "Poya", "Koné", "Voh", "Kaala-Gomen", "Pouembout", "Poum", "Belep", "Hienghène", "Ponérihouen", "Kouaoua", "Canala", "Thio", "Yaté", "Île des Pins", "Lifou", "Maré", "Ouvéa"], zoneTypes: ["Communes", "Provinces"] }] : never,
  R extends "NE" | undefined ? ["Niger (Nijar)", "NE", 227, "+...-..-..-....", "🇳🇪", { Regions: ["Agadez", "Diffa", "Dosso", "Maradi", "Tahoua", "Tillabéri", "Zinder"], zoneTypes: "Regions" }] : never,
  R extends "NF" | undefined ? ["Norfolk Island", "NF", 672, "+...-...-...", "🇳🇫", null] : never,
  R extends "NG" | undefined ? ["Nigeria", "NG", 234, "+...-..-...-..", "🇳🇬", { States: ["Abia", "Adamawa", "Akwa Ibom", "Anambra", "Bauchi", "Bayelsa", "Benue", "Borno", "Cross River", "Delta", "Ebonyi", "Edo", "Ekiti", "Enugu", "Gombe", "Imo", "Jigawa", "Kaduna", "Kano", "Katsina", "Kebbi", "Kogi", "Kwara", "Lagos", "Nasarawa", "Niger", "Ogun", "Ondo", "Osun", "Oyo", "Plateau", "Rivers", "Sokoto", "Taraba", "Yobe", "Zamfara", "Federal Capital Territory"], zoneTypes: "States" }] : never,
  R extends "NI" | undefined ? ["Nicaragua", "NI", 505, "+...-....-....", "🇳🇮", { Departments: ["Boaco", "Carazo", "Chinandega", "Chontales", "Estelí", "Granada", "Jinotega", "León", "Madriz", "Managua", "Masaya", "Matagalpa", "Nueva Segovia", "Río San Juan", "Rivas", "Atlántico Norte", "Atlántico Sur"], zoneTypes: "Departments" }] : never,
  R extends "NL" | undefined ? ["Netherlands (Nederland)", "NL", 31, "+.. .. ........", "🇳🇱", { Provinces: ["Drenthe", "Flevoland", "Friesland", "Gelderland", "Groningen", "Limburg", "Noord-Brabant", "Noord-Holland", "Overijssel", "Utrecht", "Zeeland", "Zuid-Holland"], zoneTypes: "Provinces" }] : never,
  R extends "NO" | undefined ? ["Norway (Norge)", "NO", 47, "+.. ... .. ...", "🇳🇴", { Counties: ["Agder", "Innlandet", "Møre og Romsdal", "Nordland", "Oslo", "Rogaland", "Troms og Finnmark", "Trøndelag", "Vestfold og Telemark", "Vestland", "Viken"], zoneTypes: "Counties" }] : never,
  R extends "NP" | undefined ? ["Nepal (नेपाल)", "NP", 977, "+...-..-...-...", "🇳🇵", { Provinces: ["Province No. 1", "Province No. 2", "Bagmati Province", "Gandaki Province", "Lumbini Province", "Karnali Province", "Sudurpashchim Province"], zoneTypes: "Provinces" }] : never,
  R extends "NR" | undefined ? ["Nauru", "NR", 674, "+...-...-....", "🇳🇷", { Districts: ["Aiwo", "Anabar", "Anetan", "Anibare", "Baiti", "Boe", "Buada", "Denigomodu", "Ewa", "Ijuw", "Meneng", "Nibok", "Uaboe", "Yaren"], zoneTypes: "Districts" }] : never,
  R extends "NU" | undefined ? ["Niue", "NU", 683, "+...-....", "🇳🇺", { Villages: ["Alofi", "Avatele", "Hakupu", "Hikutavake", "Lakepa", "Makefu", "Mutalau", "Namukulu", "Tamakautoga", "Toi", "Tuapa"], zoneTypes: "Villages" }] : never,
  R extends "NZ" | undefined ? ["New Zealand", "NZ", 64, "+.. ...-...-....", "🇳🇿", { Regions: ["Northland", "Auckland", "Waikato", "Bay of Plenty", "Gisborne", "Hawke's Bay", "Taranaki", "Manawatu-Whanganui", "Wellington", "Tasman", "Nelson", "Marlborough", "West Coast", "Canterbury", "Otago", "Southland"], zoneTypes: "Regions" }] : never,
  R extends "OM" | undefined ? ["Oman (‫عُمان‬‎)", "OM", 968, "+...-..-...-...", "🇴🇲", { Governorates: ["Ad Dakhiliyah", "Ad Dhahirah", "Al Batinah North", "Al Batinah South", "Al Buraimi", "Al Wusta", "Ash Sharqiyah North", "Ash Sharqiyah South", "Dhofar", "Musandam", "Muscat"], zoneTypes: "Governorates" }] : never,
  R extends "PA" | undefined ? ["Panama (Panamá)", "PA", 507, "+...-...-....", "🇵🇦", { Provinces: ["Bocas del Toro", "Chiriquí", "Coclé", "Colón", "Darién", "Emberá-Wounaan", "Guna Yala", "Herrera", "Los Santos", "Ngäbe-Buglé", "Panamá", "Panamá Oeste", "Veraguas"], zoneTypes: "Provinces" }] : never,
  R extends "PE" | undefined ? ["Peru (Perú)", "PE", 51, "+..(...)...-...", "🇵🇪", { Regions: ["Amazonas", "Áncash", "Apurímac", "Arequipa", "Ayacucho", "Cajamarca", "Callao", "Cusco", "Huancavelica", "Huánuco", "Ica", "Junín", "La Libertad", "Lambayeque", "Lima", "Loreto", "Madre de Dios", "Moquegua", "Pasco", "Piura", "Puno", "San Martín", "Tacna", "Tumbes", "Ucayali"], zoneTypes: "Regions" }] : never,
  R extends "PF" | undefined ? ["French Polynesia (Polynésie française)", "PF", 689, "+...-..-..-..", "🇵🇫", { Communes: ["Papeete", "Faaa", "Punaauia"], Subdivisions: ["Marquesas Islands", "Tuamotu-Gambier", "Tubuai Islands"], zoneTypes: ["Communes", "Subdivisions"]}] : never,
  R extends "PG" | undefined ? ["Papua New Guinea", "PG", 675, "+...(...)..-...", "🇵🇬", { Regions: ["Bougainville", "Central", "Chimbu", "Eastern Highlands", "East New Britain", "East Sepik", "Enga", "Gulf", "Hela", "Jiwaka", "Madang", "Manus", "Milne Bay", "Morobe", "New Ireland", "Northern", "Southern Highlands", "Western", "West New Britain", "West Sepik", "Western Highlands"], zoneTypes: "Regions" }] : never,
  R extends "PH" | undefined ? ["Philippines", "PH", 63, "+.. ... ....", "🇵🇭", { Regions: ["Ilocos Region", "Cagayan Valley", "Central Luzon", "Calabarzon", "Mimaropa", "Bicol Region", "Western Visayas", "Central Visayas", "Eastern Visayas", "Zamboanga Peninsula", "Northern Mindanao", "Davao Region", "Soccsksargen", "Caraga", "Bangsamoro Autonomous Region in Muslim Mindanao", "Cordillera Administrative Region", "National Capital Region"], zoneTypes: "Regions" }] : never,
  R extends "PK" | undefined ? ["Pakistan (‫پاکستان‬‎)", "PK", 92, "+.. ...-.......", "🇵🇰", { Provinces: ["Balochistan", "Khyber Pakhtunkhwa", "Punjab", "Sindh"], Territories: ["Islamabad Capital Territory", "Gilgit-Baltistan", "Azad Jammu and Kashmir"], zoneTypes: ["Provinces", "Territories"]}] : never,
  R extends "PL" | undefined ? ["Poland (Polska)", "PL", 48, "+.. ...-...-...", "🇵🇱", { Provinces: ["Greater Poland", "Kuyavian-Pomeranian", "Lesser Poland", "Lodz", "Lower Silesian", "Lublin", "Lubusz", "Masovian", "Opole", "Podlasie", "Pomeranian", "Silesian", "Subcarpathian", "Swietokrzyskie", "Warmian-Masurian", "West Pomeranian"], zoneTypes: "Provinces" }] : never,
  R extends "PM" | undefined ? ["Saint Pierre and Miquelon (Saint-Pierre-et-Miquelon)", "PM", 508, "+... .. .. ..", "🇵🇲", { Communes: ["Saint-Pierre", "Miquelon-Langlade"], zoneTypes: "Communes" }] : never,
  R extends "PN" | undefined ? ["Pitcairn Islands", "PN", 64, "+.. ........", "🇵🇳", null] : never,
  R extends "PR" | undefined ? ["Puerto Rico", "PR", 1, "+. (...) ...-....", "🇵🇷", { Municipalities: ["Adjuntas", "Aguada", "Aguadilla", "Aguas Buenas", "Aibonito", "Añasco", "Arecibo", "Arroyo", "Barceloneta", "Barranquitas", "Bayamón", "Cabo Rojo", "Caguas", "Camuy", "Canóvanas", "Carolina", "Cataño", "Cayey", "Ceiba", "Ciales", "Cidra", "Coamo", "Comerío", "Corozal", "Culebra", "Dorado", "Fajardo", "Florida", "Guánica", "Guayama", "Guayanilla", "Guaynabo", "Gurabo", "Hatillo", "Hormigueros", "Humacao", "Isabela", "Jayuya", "Juana Díaz", "Juncos", "Lajas", "Lares", "Las Marías", "Las Piedras", "Loíza", "Luquillo", "Manatí", "Maricao", "Maunabo", "Mayagüez", "Moca", "Morovis", "Naguabo", "Naranjito", "Orocovis", "Patillas", "Peñuelas", "Ponce", "Quebradillas", "Rincón", "Río Grande", "Sabana Grande", "Salinas", "San Germán", "San Juan", "San Lorenzo", "San Sebastián", "Santa Isabel", "Toa Alta", "Toa Baja", "Trujillo Alto", "Utuado", "Vega Alta", "Vega Baja", "Vieques", "Villalba", "Yabucoa", "Yauco"], zoneTypes: "Municipalities" }, 3, ["787", "939"]] : never,
  R extends "PS" | undefined ? ["Palestine (‫فلسطين‬‎)", "PS", 970, "+...-..-...-....", "🇵🇸", { Governorates: ["Gaza Strip", "West Bank"], zoneTypes: "Governorates" }] : never,
  R extends "PT" | undefined ? ["Portugal", "PT", 351, "+...-..-...-....", "🇵🇹", { Regions: ["Azores", "Alentejo", "Algarve", "Centro", "Lisbon", "Madeira", "Norte"], zoneTypes: "Regions" }] : never,
  R extends "PW" | undefined ? ["Palau", "PW", 680, "+...-...-....", "🇵🇼", { States: ["Aimeliik", "Airai", "Angaur", "Hatohobei", "Kayangel", "Koror", "Melekeok", "Ngaraard", "Ngarchelong", "Ngardmau", "Ngatpang", "Ngchesar", "Ngeremlengui", "Ngiwal", "Peleliu", "Sonsorol"], zoneTypes: "States" }] : never,
  R extends "PY" | undefined ? ["Paraguay", "PY", 595, "+...(...)...-...", "🇵🇾", { Departments: ["Alto Paraguay", "Alto Paraná", "Amambay", "Boquerón", "Caaguazú", "Caazapá", "Canindeyú", "Central", "Concepción", "Cordillera", "Guairá", "Itapúa", "Misiones", "Ñeembucú", "Paraguarí", "Presidente Hayes", "San Pedro"], zoneTypes: "Departments" }] : never,
  R extends "QA" | undefined ? ["Qatar (‫قطر‬‎)", "QA", 974, "+...-....-....", "🇶🇦", { Municipalities: ["Doha", "Al Rayyan", "Umm Salal", "Al Khor", "Al Wakrah", "Al Daayen", "Madinat ash Shamal", "Al Shamal", "Al Ruwais"], zoneTypes: "Municipalities" }] : never,
  R extends "RE" | undefined ? ["Réunion (La Réunion)", "RE", 262, "+...-.....-....", "🇷🇪", { Arrondissements: ["Saint-Denis", "Saint-Paul", "Saint-Pierre", "Saint-Benoit"], Communes: ['Les Avirons', 'Bras-Panon', 'Cilaos', 'Entre-Deux', "L'Étang-Salé", 'Petite-Île', 'La Plaine-des-Palmistes', 'Le Port, Réunion', 'La Possession', 'Saint-André, Réunion', 'Saint-Benoît, Réunion', 'Saint-Denis, Réunion', 'Sainte-Marie, Réunion', 'Sainte-Rose, Réunion', 'Sainte-Suzanne, Réunion', 'Saint-Joseph, Réunion', 'Saint-Leu, Réunion', 'Saint-Louis, Réunion', 'Saint-Paul, Réunion', 'Saint-Philippe', 'Saint-Pierre, Réunion', 'Salazie', 'Le Tampon', 'Les Trois-Bassins', 'Coat of arms of Réunion'], Cantons: ["L'Étang-Salé", 'Le Port', 'La Possession', 'Saint-André-1', 'Saint-André-2', 'Saint-André-3', 'Saint-Benoît-1', 'Saint-Benoît-2', 'Saint-Denis-1', 'Saint-Denis-2', 'Saint-Denis-3', 'Saint-Denis-4', 'Sainte-Marie', 'Saint-Joseph', 'Saint-Leu', 'Saint-Louis-1', 'Saint-Louis-2', 'Saint-Paul-1', 'Saint-Paul-2', 'Saint-Paul-3', 'Saint-Pierre-1', 'Saint-Pierre-2', 'Saint-Pierre-3', 'Le Tampon-1', 'Le Tampon-2'], zoneTypes: ["Arrondissements", "Cantons", "Communes"] }] : never,
  R extends "RO" | undefined ? ["Romania (România)", "RO", 40, "+..-..-...-....", "🇷🇴", { Regions: ["Moldova", "Muntenia", "Transylvania", "Banat", "Crisana", "Dobrogea", "Maramures", "Oltenia", "Bucovina", "Mehedinti", "Craiova", "Pitesti", "Sibiu", "Targu Mures", "Timisoara", "Cluj-Napoca", "Iasi", "Bucharest"], zoneTypes: "Regions" }] : never,
  R extends "RS" | undefined ? ["Serbia (Србија)", "RS", 381, "+...-..-...-....", "🇷🇸", { Districts: ["Belgrade", "Nišava", "Šumadija", "Zaječar", "Podunavlje", "Bor", "Braničevo", "Pomoravlje", "Zlatibor", "Moravica", "Raška", "Rasina", "Toplica", "Mačva", "Kolubara", "Jablanica", "Pčinja", "Pirot", "Branicevo", "Juzni Banat", "Srednji Banat", "Severni Banat", "Zapadna Bačka", "Južna Bačka", "Severna Bačka", "Srem", "Mačva", "Kolubara", "Podrinje", "Kosovo", "Kosovska Mitrovica", "Peć", "Prizren", "Kosovska Mitrovica", "Peć", "Prizren"], zoneTypes: "Districts" }] : never,
  R extends "RU" | undefined ? ["Russia (Россия)", "RU", 7, "+.-(...)-...-....", "🇷🇺", { "Federal Subjects": ["Moscow", "Saint Petersburg", "Novosibirsk", "Yekaterinburg", "Nizhny Novgorod", "Kazan", "Chelyabinsk", "Omsk", "Samara", "Rostov-on-Don", "Ufa", "Krasnoyarsk", "Perm", "Voronezh", "Volgograd", "Krasnodar", "Saratov", "Tyumen", "Tolyatti", "Izhevsk"], zoneTypes: "Federal Subjects" }] : never,
  R extends "RW" | undefined ? ["Rwanda", "RW", 250, "+...(...)...-...", "🇷🇼", { Provinces: ["Kigali", "Eastern", "Northern", "Southern", "Western"], zoneTypes: "Provinces" }] : never,
  R extends "SA" | undefined ? ["Saudi Arabia (‫المملكة العربية السعودية‬‎)", "SA", 966, "+...-..-...-....", "🇸🇦", { Regions: ["Riyadh", "Makkah", "Madinah", "Eastern Province", "Asir", "Tabuk", "Qassim", "Ha'il", "Jizan", "Najran", "Al Bahah", "Northern Borders", "Jawf", "Hail"], zoneTypes: "Regions" }] : never,
  R extends "SB" | undefined ? ["Solomon Islands", "SB", 677, "+...-.....", "🇸🇧", { Provinces: ["Central Province", "Choiseul", "Guadalcanal", "Honiara", "Isabel", "Makira-Ulawa", "Malaita", "Rennell and Bellona", "Temotu", "Western Province"], zoneTypes: "Provinces" }] : never,
  R extends "SC" | undefined ? ["Seychelles", "SC", 248, "+...-.-...-...", "🇸🇨", { "Inner Islands": ["Mahé", "Praslin", "La Digue"], "Outer Islands": ["Alphonse", "Desroches", "Farquhar", "Aldabra"], zoneTypes: ["Inner Islands", "Outer Islands"] }] : never,
  R extends "SG" | undefined ? ["Singapore", "SG", 65, "+.. ....-....", "🇸🇬", { Regions: ["Central Region", "East Region", "North Region", "North-East Region", "West Region"], zoneTypes: "Regions" }] : never,
  R extends "SI" | undefined ? ["Slovenia (Slovenija)", "SI", 386, "+...-..-...-...", "🇸🇮", { Regions: ["Pomurska", "Podravska", "Koroška", "Savinjska", "Zasavska", "Posavska", "Jugovzhodna Slovenija", "Osrednjeslovenska", "Gorenjska", "Primorsko-notranjska", "Goriška", "Obalno-kraška"], zoneTypes: "Regions" }] : never,
  R extends "SK" | undefined ? ["Slovakia (Slovensko)", "SK", 421, "+...(...)...-...", "🇸🇰", { Regions: ["Bratislava", "Trnava", "Trenčín", "Nitra", "Žilina", "Banská Bystrica", "Prešov", "Košice"], zoneTypes: "Regions" }] : never,
  R extends "SL" | undefined ? ["Sierra Leone", "SL", 232, "+...-..-......", "🇸🇱", { Provinces: ["Eastern Province", "Northern Province", "Southern Province", "Western Area"], zoneTypes: "Provinces" }] : never,
  R extends "SM" | undefined ? ["San Marino", "SM", 378, "+...-....-......", "🇸🇲", { Municipalities: ["Acquaviva", "Borgo Maggiore", "Chiesanuova", "Domagnano", "Faetano", "Fiorentino", "Montegiardino", "San Marino", "Serravalle"], zoneTypes: "Municipalities" }] : never,
  R extends "SN" | undefined ? ["Senegal (Sénégal)", "SN", 221, "+...-..-...-....", "🇸🇳", { Regions: ["Dakar", "Thiès", "Diourbel", "Fatick", "Kaolack", "Kolda", "Louga", "Matam", "Saint-Louis", "Sédhiou", "Tambacounda", "Kaffrine", "Kédougou", "Kolda", "Ziguinchor"], zoneTypes: "Regions" }] : never,
  R extends "SO" | undefined ? ["Somalia (Soomaaliya)", "SO", 252, "+...-.-...-...", "🇸🇴", { Regions: ["Awdal", "Bakool", "Banaadir", "Bari", "Bay", "Galguduud", "Gedo", "Hiiraan", "Jubbada Dhexe", "Jubbada Hoose", "Mudug", "Nugaal", "Sanaag", "Shabeellaha Dhexe", "Shabeellaha Hoose", "Sool", "Togdheer", "Woqooyi Galbeed"], zoneTypes: "Regions" }] : never,
  R extends "ST" | undefined ? ["São Tomé and Príncipe (São Tomé e Príncipe)", "ST", 239, "+...-..-.....", "🇸🇹", { Provinces: ["Príncipe", "São Tomé"], zoneTypes: "Provinces" }] : never,
  R extends "SV" | undefined ? ["El Salvador", "SV", 503, "+... ....-....", "🇸🇻", { Departments: ["Ahuachapán", "Cabañas", "Chalatenango", "Cuscatlán", "La Libertad", "La Paz", "La Unión", "Morazán", "San Miguel", "San Salvador", "San Vicente", "Santa Ana", "Sonsonate", "Usulután"], zoneTypes: "Departments" }] : never,
  R extends "SX" | undefined ? ["Sint Maarten", "SX", 1721, "+.(...)...-....", "🇸🇽", { Regions: ["Dutch Quarter", "French Quarter", "Little Bay", "Lowlands", "Maho", "Pelican Key", "Philipsburg", "Point Blanche", "Simpson Bay"], zoneTypes: "Regions" }] : never,
  R extends "TC" | undefined ? ["Turks and Caicos Islands", "TC", 1649, "+.(...)...-....", "🇹🇨", { Districts: ["Grand Turk", "Salt Cay", "South Caicos", "Providenciales", "North Caicos", "Middle Caicos"], zoneTypes: "Districts" }] : never,
  R extends "TD" | undefined ? ["Chad (Tchad)", "TD", 235, "+...-..-..-..-..", "🇹🇩", { Regions: ["Batha", "Borkou", "Ennedi", "Ennedi-Est", "Ennedi-Ouest", "Guéra", "Hadjer-Lamis", "Kanem", "Lac", "Logone Occidental", "Logone Oriental", "Mandoul", "Mayo-Kebbi Est", "Mayo-Kebbi Ouest", "Moyen-Chari", "N'Djamena", "Ouaddaï", "Salamat", "Sila", "Tandjilé", "Tibesti", "Wadi Fira"], zoneTypes: "Regions" }] : never,
  R extends "TF" | undefined ? ["French Southern and Antarctic Lands", "TF", 262, "+... ... .. .. ..", "🇹🇫", { Districts: ["Kerguelen Islands", "Crozet Islands", "Amsterdam Island", "Saint-Paul Island"], zoneTypes: "Districts" }] : never,
  R extends "TG" | undefined ? ["Togo", "TG", 228, "+...-..-...-...", "🇹🇬", { Regions: ["Centrale", "Kara", "Maritime", "Plateaux", "Savanes"], zoneTypes: "Regions" }] : never,
  R extends "TH" | undefined ? ["Thailand (ไทย)", "TH", 66, "+..-..-...-...", "🇹🇭", { Regions: ["Bangkok", "Central Thailand", "Eastern Thailand", "Northern Thailand", "Northeastern Thailand", "Southern Thailand", "Western Thailand"], zoneTypes: "Regions" }] : never,
  R extends "TK" | undefined ? ["Tokelau", "TK", 690, "+...-....", "🇹🇰", { Villages: ["Atafu", "Fakaofo", "Nukunonu"], zoneTypes: "Villages" }] : never,
  R extends "TL" | undefined ? ["Timor-Leste", "TL", 670, "+...-...-....", "🇹🇱", { Districts: ["Aileu", "Ainaro", "Baucau", "Bobonaro", "Cova Lima", "Dili", "Ermera", "Lautem", "Liquiçá", "Manatuto", "Manufahi", "Oecusse", "Viqueque"], zoneTypes: "Districts" }] : never,
  R extends "TM" | undefined ? ["Turkmenistan", "TM", 993, "+...-.-...-....", "🇹🇲", { Regions: ["Ahal", "Balkan", "Daşoguz", "Lebap", "Mary"], zoneTypes: "Regions" }] : never,
  R extends "TN" | undefined ? ["Tunisia (‫تونس‬‎)", "TN", 216, "+...-..-...-...", "🇹🇳", { Regions: ["Tunis", "Ariana", "Ben Arous", "Manouba", "Nabeul", "Zaghouan", "Bizerte", "Béja", "Jendouba", "Kef", "Siliana", "Kairouan", "Kasserine", "Sidi Bouzid", "Sousse", "Monastir", "Mahdia", "Sfax", "Gabès", "Medenine", "Tataouine", "Gafsa", "Tozeur", "Kebili"], zoneTypes: "Regions" }] : never,
  R extends "TO" | undefined ? ["Tonga", "TO", 676, "+...-.....", "🇹🇴", { Regions: ["Eua", "Ha'apai", "Niuas", "Tongatapu", "Vava'u"], zoneTypes: "Regions" }] : never,
  R extends "TR" | undefined ? ["Turkey (Türkiye)", "TR", 90, "+.. ... ... .. ..", "🇹🇷", { Regions: ["Adana", "Adıyaman", "Afyonkarahisar", "Ağrı", "Amasya", "Ankara", "Antalya", "Artvin", "Aydın", "Balıkesir", "Bilecik", "Bingöl", "Bitlis", "Bolu", "Burdur", "Bursa", "Çanakkale", "Çankırı", "Çorum", "Denizli", "Diyarbakır", "Edirne", "Elazığ", "Erzincan", "Erzurum", "Eskişehir", "Gaziantep", "Giresun", "Gümüşhane", "Hakkâri", "Hatay", "Isparta", "Mersin", "İstanbul", "İzmir", "Kars", "Kastamonu", "Kayseri", "Kırklareli", "Kırşehir", "Kocaeli", "Konya", "Kütahya", "Malatya", "Manisa", "Kahramanmaraş", "Mardin", "Muğla", "Muş", "Nevşehir", "Niğde", "Ordu", "Rize", "Sakarya", "Samsun", "Siirt", "Sinop", "Sivas", "Tekirdağ", "Tokat", "Trabzon", "Tunceli", "Şanlıurfa", "Uşak", "Van", "Yozgat", "Zonguldak", "Aksaray", "Bayburt", "Karaman", "Kırıkkale", "Batman", "Şırnak", "Bartın", "Ardahan", "Iğdır", "Yalova", "Karabük", "Kilis", "Osmaniye", "Düzce"], zoneTypes: "Regions" }] : never,
  R extends "TT" | undefined ? ["Trinidad and Tobago", "TT", 1868, "+.(...)...-....", "🇹🇹", { Municipalities: ["Siparia", "Sangre Grande", "Port of Spain", "Arima", "Point Fortin", "Chaguanas", "Diego Martin", "San Fernando"],  Regions: ["Eastern Tobago", "Couva-Tabaquite-Talparo", "Princes Town", "Rio Claro-Mayaro", "Penal-Debe", "Sangre Grande", "San Juan-Laventille", "Tunapuna-Piarco"], zoneTypes: ["Municipalities", "Regions"] }] : never,
  R extends "TV" | undefined ? ["Tuvalu", "TV", 688, "+...-.....", "🇹🇻", { Islands: ["Funafuti", "Nanumea", "Nui", "Nukufetau", "Nukulaelae", "Vaitupu"], zoneTypes: "Islands" }] : never,
  R extends "UA" | undefined ? ["Ukraine (Україна)", "UA", 380, "+...(..)...-..-..", "🇺🇦", { Oblasts: ["Cherkasy", "Chernihiv", "Chernivtsi", "Dnipropetrovsk", "Donetsk", "Ivano-Frankivsk", "Kharkiv", "Kherson", "Khmelnytskyi", "Kiev", "Kirovohrad", "Luhansk", "Lviv", "Mykolaiv", "Odessa", "Poltava", "Rivne", "Sumy", "Ternopil", "Vinnytsia", "Volyn", "Zakarpattia", "Zaporizhzhia", "Zhytomyr", "Autonomous Republic of Crimea"], zoneTypes: "Oblasts" }] : never,
  R extends "UG" | undefined ? ["Uganda", "UG", 256, "+...(...)...-...", "🇺🇬", { Regions: ["Central Region", "Eastern Region", "Northern Region", "Western Region"], zoneTypes: "Regions" }] : never,
  R extends "UM" | undefined ? ["United States Minor Outlying Islands", "UM", 1, "+. (...) ...-....", "🇺🇲", { Territories: ["Baker Island", "Howland Island", "Jarvis Island", "Johnston Atoll", "Kingman Reef", "Midway Atoll", "Navassa Island", "Palmyra Atoll", "Wake Island"], zoneTypes: "Territories" }, 2] : never,
  R extends "US" | undefined ? ["United States", "US", 1, "+. (...) ...-....", "🇺🇸", { States: ["Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", "Delaware", "Florida", "Georgia", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland", "Massachusetts", "Michigan", "Minnesota", "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire", "New Jersey", "New Mexico", "New York", "North Carolina", "North Dakota", "Ohio", "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island", "South Carolina", "South Dakota", "Tennessee", "Texas", "Utah", "Vermont", "Virginia", "Washington", "West Virginia", "Wisconsin", "Wyoming"], zoneTypes: "States" }, 0] : never,
  R extends "UY" | undefined ? ["Uruguay", "UY", 598, "+...-.-...-..-..", "🇺🇾", { Departments: ["Artigas", "Canelones", "Cerro Largo", "Colonia", "Durazno", "Flores", "Florida", "Lavalleja", "Maldonado", "Montevideo", "Paysandú", "Río Negro", "Rivera", "Rocha", "Salto", "San José", "Soriano", "Tacuarembó", "Treinta y Tres"], zoneTypes: "Departments" }] : never,
  R extends "UZ" | undefined ? ["Uzbekistan (Oʻzbekiston)", "UZ", 998, "+...-..-...-....", "🇺🇿", { Regions: ["Andijan", "Bukhara", "Fergana", "Jizzakh", "Karakalpakstan", "Namangan", "Navoiy", "Qashqadaryo", "Samarqand", "Sirdaryo", "Surxondaryo", "Tashkent", "Tashkent City", "Xorazm"], zoneTypes: "Regions" }] : never,
  R extends "VA" | undefined ? ["Vatican City (Città del Vaticano)", "VA", 39, "+.. .. .... ....", "🇻🇦", null, 1] : never,
  R extends "VC" | undefined ? ["Saint Vincent and the Grenadines", "VC", 1784, "+.(...)...-....", "🇻🇨", { Parishes: ["Charlotte", "Grenadines", "Saint Andrew", "Saint David", "Saint George", "Saint Patrick"], zoneTypes: "Parishes" }] : never,
  R extends "VE" | undefined ? ["Venezuela", "VE", 58, "+..(...)...-....", "🇻🇪", { States: ["Amazonas", "Anzoátegui", "Apure", "Aragua", "Barinas", "Bolívar", "Carabobo", "Cojedes", "Delta Amacuro", "Falcón", "Guárico", "Lara", "Mérida", "Miranda", "Monagas", "Nueva Esparta", "Portuguesa", "Sucre", "Táchira", "Trujillo", "Vargas", "Yaracuy", "Zulia"], zoneTypes: "States" }] : never,
  R extends "VG" | undefined ? ["British Virgin Islands", "VG", 1284, "+.(...)...-....", "🇻🇬", { Districts: ["Tortola", "Virgin Gorda", "Anegada", "Jost Van Dyke"], zoneTypes: "Districts" }] : never,
  R extends "VI" | undefined ? ["U.S. Virgin Islands", "VI", 1340, "+.(...)...-....", "🇻🇮", { Districts: ["Saint Croix", "Saint John", "Saint Thomas"], zoneTypes: "Districts" }] : never,
  R extends "VN" | undefined ? ["Vietnam (Việt Nam)", "VN", 84, "+..-..-....-...", "🇻🇳", { Regions: ["Hanoi", "Ho Chi Minh City", "Da Nang", "Hai Phong", "Can Tho", "Bien Hoa", "Hue", "Nha Trang", "Buon Ma Thuot", "Quy Nhon", "Vung Tau", "Nam Dinh", "Phan Thiet", "Long Xuyen", "Ha Long", "Thai Nguyen", "Thanh Hoa", "Rach Gia", "Cam Ranh", "Vinh", "My Tho", "Da Lat", "Bac Lieu", "Bien Hoa"], zoneTypes: "Regions" }] : never,
  R extends "VU" | undefined ? ["Vanuatu", "VU", 678, "+...-.....", "🇻🇺", { Provinces: ["Malampa", "Penama", "Sanma", "Shefa", "Tafea", "Torba"], zoneTypes: "Provinces" }] : never,
  R extends "WF" | undefined ? ["Wallis and Futuna", "WF", 681, "+...-..-....", "🇼🇫", { Kingdoms: ["Uvea", "Sigave", "Alo"], zoneTypes: "Kingdoms" }] : never,
  R extends "WS" | undefined ? ["Samoa", "WS", 685, "+...-..-....", "🇼🇸", { Districts: ["A'ana", "Aiga-i-le-Tai", "Atua", "Fa'asaleleaga", "Gaga'emauga", "Gaga'ifomauga", "Palauli", "Satupa'itea", "Tuamasaga", "Va'a-o-Fonoti", "Vaisigano"], zoneTypes: "Districts" }] : never,
  R extends "XK" | undefined ? ["Kosovo", "XK", 383, "+... .. ... ...", "🇽🇰", { Districts: ["District of Pristina", "District of Mitrovica", "District of Peja", "District of Prizren", "District of Gjilan", "District of Ferizaj"], zoneTypes: "Districts" }] : never,
  R extends "YE" | undefined ? ["Yemen (‫اليمن‬‎)", "YE", 967, "+...-.-...-...", "🇾🇪", { Governorates: ["Sana'a", "Aden", "Taiz", "Al Hudaydah", "Ibb", "Dhamar", "Al Mukalla", "Hajjah", "Amran", "Saada", "Saywun", "Zinjibar", "Al Bayda", "Lahij", "Marib", "Al Ghaydah", "Al Mahwit", "Al Hazm", "Ataq", "Al Jawf", "Sadah", "Shabwah", "Al Dhalea", "Rida", "Al Mahrah"], zoneTypes: "Governorates" }] : never,
  R extends "YT" | undefined ? ["Mayotte", "YT", 262, "+... ... .. .. ..", "🇾🇹", { Cantons: ["Acoua", "Bandraboua", "Bandrélé", "Bouéni", "Chiconi", "Chirongui", "Dembeni", "Dzaoudzi", "Kani-Kéli", "Koungou", "Mamoudzou-1", "Mamoudzou-2", "Mamoudzou-3", "Mamoudzou-4", "Mtsamboro", "M'Tsangamouji", "Ouangani", "Pamandzi", "Sada", "Tsingoni"], Communes: ["Acoua", "Bandraboua", "Bandrélé", "Bouéni", "Chiconi", "Chirongui", "Dembeni", "Dzaoudzi", "Kani-Kéli", "Koungou", "Mamoudzou", "Mtsamboro", "M'Tsangamouji", "Ouangani", "Pamandzi", "Sada", "Tsingoni"], zoneTypes: ["Cantons", "Communes"] }]: never,
  R extends "ZA" | undefined ? ["South Africa", "ZA", 27, "+..-..-...-....", "🇿🇦", { Provinces: ["Eastern Cape", "Free State", "Gauteng", "KwaZulu-Natal", "Limpopo", "Mpumalanga", "North West", "Northern Cape", "Western Cape"], zoneTypes: "Provinces" }] : never,
  R extends "ZM" | undefined ? ["Zambia", "ZM", 260, "+...-..-...-....", "🇿🇲", { Provinces: ["Lusaka", "Copperbelt", "Central", "Eastern", "Luapula", "Northern", "North-Western", "Southern", "Western"], zoneTypes: "Provinces" }] : never,
  R extends "ZW" | undefined ? ["Zimbabwe", "ZW", 263, "+...-.-......", "🇿🇼", { Provinces: ["Harare", "Bulawayo", "Manicaland", "Mashonaland Central", "Mashonaland East", "Mashonaland West", "Masvingo", "Matabeleland North", "Matabeleland South", "Midlands"], zoneTypes: "Provinces" }] : never
] : never;



interface CountryCodes {
  AF: ['AFG', '93', '🇦🇫'];
  AL: ['ALB', '355', '🇦🇱'];
  DZ: ['DZA', '213', '🇩🇿'];
  AS: ['ASM', '1-684', '🇦🇸'];
  AD: ['AND', '376', '🇦🇩'];
  AO: ['AGO', '244', '🇦🇴'];
  AI: ['AIA', '1-264', '🇦🇮'];
  AQ: ['ATA', '672', '🇦🇶'];
  AG: ['ATG', '1-268', '🇦🇬'];
  AR: ['ARG', '54', '🇦🇷'];
  AM: ['ARM', '374', '🇦🇲'];
  AW: ['ABW', '297', '🇦🇼'];
  AC: ['ASC', null, '🇦🇨'];
  AU: ['AUS', '61', '🇦🇺'];
  AT: ['AUT', '43', '🇦🇹'];
  AZ: ['AZE', '994', '🇦🇿'];
  BS: ['BHS', '1-242', '🇧🇸'];
  BH: ['BHR', '973', '🇧🇭'];
  BD: ['BGD', '880', '🇧🇩'];
  BB: ['BRB', '1-246', '🇧🇧'];
  BY: ['BLR', '375', '🇧🇾'];
  BE: ['BEL', '32', '🇧🇪'];
  BZ: ['BLZ', '501', '🇧🇿'];
  BJ: ['BEN', '229', '🇧🇯'];
  BM: ['BMU', '1-441', '🇧🇲'];
  BT: ['BTN', '975', '🇧🇹'];
  BO: ['BOL', '591', '🇧🇴'];
  BA: ['BIH', '387', '🇧🇦'];
  BW: ['BWA', '267', '🇧🇼'];
  BV: ['BVT', null, '🇧🇻'];
  BR: ['BRA', '55', '🇧🇷'];
  IO: ['IOT', '246', '🇮🇴'];
  VG: ['VGB', '1-284', '🇻🇬'];
  BN: ['BRN', '673', '🇧🇳'];
  BG: ['BGR', '359', '🇧🇬'];
  BF: ['BFA', '226', '🇧🇫'];
  BI: ['BDI', '257', '🇧🇮'];
  KH: ['KHM', '855', '🇰🇭'];
  CM: ['CMR', '237', '🇨🇲'];
  CA: ['CAN', '1', '🇨🇦'];
  IC: [null, null, '🇮🇨'];
  CV: ['CPV', '238', '🇨🇻'];
  BQ: ['BES', null, '🇧🇶'];
  KY: ['CYM', '1-345', '🇰🇾'];
  CF: ['CAF', '236', '🇨🇫'];
  EA: [null, null, '🇪🇦'];
  TD: ['TCD', '235', '🇹🇩'];
  CL: ['CHL', '56', '🇨🇱'];
  CN: ['CHN', '86', '🇨🇳'];
  CX: ['CXR', '61', '🇨🇽'];
  CP: [null, null, '🇨🇵'];
  CC: ['CCK', '61', '🇨🇨'];
  CO: ['COL', '57', '🇨🇴'];
  KM: ['COM', '269', '🇰🇲'];
  CK: ['COK', '682', '🇨🇰'];
  CR: ['CRI', '506', '🇨🇷'];
  HR: ['HRV', '385', '🇭🇷'];
  CU: ['CUB', '53', '🇨🇺'];
  CW: ['CUW', '599', '🇨🇼'];
  CY: ['CYP', '357', '🇨🇾'];
  CZ: ['CZE', '420', '🇨🇿'];
  CD: ['COD', '243', '🇨🇩'];
  DK: ['DNK', '45', '🇩🇰'];
  DG: [null, null, '🇩🇬'];
  DJ: ['DJI', '253', '🇩🇯'];
  DM: ['DMA', '1-767', '🇩🇲'];
  DO: ['DOM', '1-809, 1-829, 1-849', '🇩🇴'];
  TL: ['TLS', '670', '🇹🇱'];
  EC: ['ECU', '593', '🇪🇨'];
  EG: ['EGY', '20', '🇪🇬'];
  SV: ['SLV', '503', '🇸🇻'];
  GQ: ['GNQ', '240', '🇬🇶'];
  ER: ['ERI', '291', '🇪🇷'];
  EE: ['EST', '372', '🇪🇪'];
  ET: ['ETH', '251', '🇪🇹'];
  EU: [null, null, '🇪🇺'];
  FK: ['FLK', '500', '🇫🇰'];
  FO: ['FRO', '298', '🇫🇴'];
  FJ: ['FJI', '679', '🇫🇯'];
  FI: ['FIN', '358', '🇫🇮'];
  FR: ['FRA', '33', '🇫🇷'];
  GF: ['GUF', null, '🇬🇫'];
  PF: ['PYF', '689', '🇵🇫'];
  TF: ['ATF', null, '🇹🇫'];
  GA: ['GAB', '241', '🇬🇦'];
  GM: ['GMB', '220', '🇬🇲'];
  GE: ['GEO', '995', '🇬🇪'];
  DE: ['DEU', '49', '🇩🇪'];
  GH: ['GHA', '233', '🇬🇭'];
  GI: ['GIB', '350', '🇬🇮'];
  GR: ['GRC', '30', '🇬🇷'];
  GL: ['GRL', '299', '🇬🇱'];
  GD: ['GRD', '1-473', '🇬🇩'];
  GP: ['GLP', null, '🇬🇵'];
  GU: ['GUM', '1-671', '🇬🇺'];
  GT: ['GTM', '502', '🇬🇹'];
  GG: ['GGY', '44-1481', '🇬🇬'];
  GN: ['GIN', '224', '🇬🇳'];
  GW: ['GNB', '245', '🇬🇼'];
  GY: ['GUY', '592', '🇬🇾'];
  HT: ['HTI', '509', '🇭🇹'];
  HM: ['HMD', null, '🇭🇲'];
  HN: ['HND', '504', '🇭🇳'];
  HK: ['HKG', '852', '🇭🇰'];
  HU: ['HUN', '36', '🇭🇺'];
  IS: ['ISL', '354', '🇮🇸'];
  IN: ['IND', '91', '🇮🇳'];
  ID: ['IDN', '62', '🇮🇩'];
  IR: ['IRN', '98', '🇮🇷'];
  IQ: ['IRQ', '964', '🇮🇶'];
  IE: ['IRL', '353', '🇮🇪'];
  IM: ['IMN', '44-1624', '🇮🇲'];
  IL: ['ISR', '972', '🇮🇱'];
  IT: ['ITA', '39', '🇮🇹'];
  CI: ['CIV', '225', '🇨🇮'];
  JM: ['JAM', '1-876', '🇯🇲'];
  JP: ['JPN', '81', '🇯🇵'];
  JE: ['JEY', '44-1534', '🇯🇪'];
  JO: ['JOR', '962', '🇯🇴'];
  KZ: ['KAZ', '7', '🇰🇿'];
  KE: ['KEN', '254', '🇰🇪'];
  KI: ['KIR', '686', '🇰🇮'];
  XK: ['XKX', '383', '🇽🇰'];
  KW: ['KWT', '965', '🇰🇼'];
  KG: ['KGZ', '996', '🇰🇬'];
  LA: ['LAO', '856', '🇱🇦'];
  LV: ['LVA', '371', '🇱🇻'];
  LB: ['LBN', '961', '🇱🇧'];
  LS: ['LSO', '266', '🇱🇸'];
  LR: ['LBR', '231', '🇱🇷'];
  LY: ['LBY', '218', '🇱🇾'];
  LI: ['LIE', '423', '🇱🇮'];
  LT: ['LTU', '370', '🇱🇹'];
  LU: ['LUX', '352', '🇱🇺'];
  MO: ['MAC', '853', '🇲🇴'];
  MK: ['MKD', '389', '🇲🇰'];
  MG: ['MDG', '261', '🇲🇬'];
  MW: ['MWI', '265', '🇲🇼'];
  MY: ['MYS', '60', '🇲🇾'];
  MV: ['MDV', '960', '🇲🇻'];
  ML: ['MLI', '223', '🇲🇱'];
  MT: ['MLT', '356', '🇲🇹'];
  MH: ['MHL', '692', '🇲🇭'];
  MQ: ['MTQ', null, '🇲🇶'];
  MR: ['MRT', '222', '🇲🇷'];
  MU: ['MUS', '230', '🇲🇺'];
  YT: ['MYT', '262', '🇾🇹'];
  MX: ['MEX', '52', '🇲🇽'];
  FM: ['FSM', '691', '🇫🇲'];
  MD: ['MDA', '373', '🇲🇩'];
  MC: ['MCO', '377', '🇲🇨'];
  MN: ['MNG', '976', '🇲🇳'];
  ME: ['MNE', '382', '🇲🇪'];
  MS: ['MSR', '1-664', '🇲🇸'];
  MA: ['MAR', '212', '🇲🇦'];
  MZ: ['MOZ', '258', '🇲🇿'];
  MM: ['MMR', '95', '🇲🇲'];
  NA: ['NAM', '264', '🇳🇦'];
  NR: ['NRU', '674', '🇳🇷'];
  NP: ['NPL', '977', '🇳🇵'];
  AN: ['ANT', '599', '🇧🇶'];
  NL: ['NLD', '31', '🇳🇱'];
  NC: ['NCL', '687', '🇳🇨'];
  NZ: ['NZL', '64', '🇳🇿'];
  NI: ['NIC', '505', '🇳🇮'];
  NE: ['NER', '227', '🇳🇪'];
  NG: ['NGA', '234', '🇳🇬'];
  NU: ['NIU', '683', '🇳🇺'];
  NF: ['NFK', null, '🇳🇫'];
  KP: ['PRK', '850', '🇰🇵'];
  MP: ['MNP', '1-670', '🇲🇵'];
  NO: ['NOR', '47', '🇳🇴'];
  OM: ['OMN', '968', '🇴🇲'];
  PK: ['PAK', '92', '🇵🇰'];
  PW: ['PLW', '680', '🇵🇼'];
  PS: ['PSE', '970', '🇵🇸'];
  PA: ['PAN', '507', '🇵🇦'];
  PG: ['PNG', '675', '🇵🇬'];
  PY: ['PRY', '595', '🇵🇾'];
  PE: ['PER', '51', '🇵🇪'];
  PH: ['PHL', '63', '🇵🇭'];
  PN: ['PCN', '64', '🇵🇳'];
  PL: ['POL', '48', '🇵🇱'];
  PT: ['PRT', '351', '🇵🇹'];
  PR: ['PRI', '1-787, 1-939', '🇵🇷'];
  QA: ['QAT', '974', '🇶🇦'];
  CG: ['COG', '242', '🇨🇬'];
  RE: ['REU', '262', '🇷🇪'];
  RO: ['ROU', '40', '🇷🇴'];
  RU: ['RUS', '7', '🇷🇺'];
  RW: ['RWA', '250', '🇷🇼'];
  BL: ['BLM', '590', '🇧🇱'];
  SH: ['SHN', '290', '🇸🇭'];
  KN: ['KNA', '1-869', '🇰🇳'];
  LC: ['LCA', '1-758', '🇱🇨'];
  MF: ['MAF', '590', '🇲🇫'];
  PM: ['SPM', '508', '🇵🇲'];
  VC: ['VCT', '1-784', '🇻🇨'];
  WS: ['WSM', '685', '🇼🇸'];
  SM: ['SMR', '378', '🇸🇲'];
  ST: ['STP', '239', '🇸🇹'];
  SA: ['SAU', '966', '🇸🇦'];
  SN: ['SEN', '221', '🇸🇳'];
  RS: ['SRB', '381', '🇷🇸'];
  SC: ['SYC', '248', '🇸🇨'];
  SL: ['SLE', '232', '🇸🇱'];
  SG: ['SGP', '65', '🇸🇬'];
  SX: ['SXM', '1-721', '🇸🇽'];
  SK: ['SVK', '421', '🇸🇰'];
  SI: ['SVN', '386', '🇸🇮'];
  SB: ['SLB', '677', '🇸🇧'];
  SO: ['SOM', '252', '🇸🇴'];
  ZA: ['ZAF', '27', '🇿🇦'];
  GS: ['SGS', null, '🇬🇸'];
  KR: ['KOR', '82', '🇰🇷'];
  SS: ['SSD', '211', '🇸🇸'];
  ES: ['ESP', '34', '🇪🇸'];
  LK: ['LKA', '94', '🇱🇰'];
  SD: ['SDN', '249', '🇸🇩'];
  SR: ['SUR', '597', '🇸🇷'];
  SJ: ['SJM', '47', '🇸🇯'];
  SZ: ['SWZ', '268', '🇸🇿'];
  SE: ['SWE', '46', '🇸🇪'];
  CH: ['CHE', '41', '🇨🇭'];
  SY: ['SYR', '963', '🇸🇾'];
  TW: ['TWN', '886', '🇹🇼'];
  TJ: ['TJK', '992', '🇹🇯'];
  TZ: ['TZA', '255', '🇹🇿'];
  TH: ['THA', '66', '🇹🇭'];
  TG: ['TGO', '228', '🇹🇬'];
  TK: ['TKL', '690', '🇹🇰'];
  TO: ['TON', '676', '🇹🇴'];
  TT: ['TTO', '1-868', '🇹🇹'];
  TA: [null, null, '🇹🇦'];
  TN: ['TUN', '216', '🇹🇳'];
  TR: ['TUR', '90', '🇹🇷'];
  TM: ['TKM', '993', '🇹🇲'];
  TC: ['TCA', '1-649', '🇹🇨'];
  TV: ['TUV', '688', '🇹🇻'];
  VI: ['VIR', '1-340', '🇻🇮'];
  UG: ['UGA', '256', '🇺🇬'];
  UA: ['UKR', '380', '🇺🇦'];
  AE: ['ARE', '971', '🇦🇪'];
  GB: ['GBR', '44', '🇬🇧'];
  UN: [null, null, '🇺🇳'];
  UM: ['UMI', null, '🇺🇲'];
  US: ['USA', '1', '🇺🇸'];
  UY: ['URY', '598', '🇺🇾'];
  UZ: ['UZB', '998', '🇺🇿'];
  VU: ['VUT', '678', '🇻🇺'];
  VA: ['VAT', '379', '🇻🇦'];
  VE: ['VEN', '58', '🇻🇪'];
  VN: ['VNM', '84', '🇻🇳'];
  WF: ['WLF', '681', '🇼🇫'];
  EH: ['ESH', '212', '🇪🇭'];
  YE: ['YEM', '967', '🇾🇪'];
  ZM: ['ZMB', '260', '🇿🇲'];
  ZW: ['ZWE', '263', '🇿🇼']
  AX: ['ALA', null, '🇦🇽'];
};

/**
 * @type Inverted
 * @description Returns the Inversion of the object
 * @template O - The Object to invert
 * @returns {{ [K in keyof O as O[K][number]]: K }} The type of the array literal
 */
type Inverted<O extends { [key: string]: string[]; }> = { [K in keyof O as O[K][number]]: K };

type RegionCodes = ["AC", "AD", "AE", "AF", "AG", "AI", "AL", "AM", "AO", "AQ", "AR", "AS", "AT", "AU", "AW", "AX", "AZ", "BA", "BB", "BD", "BE", "BF", "BG", "BH", "BI", "BJ", "BL", "BM", "BN", "BO", "BQ", "BR", "BS", "BT", "BV", "BW", "BY", "BZ", "CA", "CC", "CD", "CF", "CG", "CI", "CK", "CL", "CM", "CN", "CO", "CR", "CU", "CV", "CW", "CX", "CY", "CZ", "DE", "DJ", "DK", "DM", "DO", "DZ", "EC", "EE", "EG", "EH", "ER", "ET", "FI", "FJ", "FK", "FM", "FO", "FR", "GA", "GB", "GD", "GE", "GF", "GG", "GH", "GI", "GL", "GM", "GN", "GP", "GQ", "GR", "GS", "GT", "GU", "GW", "GY", "HK", "HM", "HN", "HR", "HT", "HU", "ID", "IE", "IL", "IM", "IN", "IO", "IQ", "IR", "IS", "IT", "JE", "JM", "JO", "JP", "KE", "KG", "KH", "KI", "KM", "KN", "KP", "KW", "KY", "KZ", "LA", "LB", "LC", "LI", "LR", "LS", "LT", "LU", "LV", "LY", "MA", "MC", "MD", "ME", "MF", "MG", "MH", "MK", "ML", "MM", "MN", "MO", "MP", "MQ", "MR", "MS", "MT", "MU", "MV", "MW", "MX", "MY", "MZ", "NA", "NC", "NE", "NF", "NG", "NI", "NL", "NO", "NP", "NR", "NU", "NZ", "OM", "PA", "PE", "PF", "PG", "PH", "PK", "PL", "PM", "PN", "PR", "PS", "PT", "PW", "PY", "QA", "RE", "RO", "RS", "RU", "RW", "SA", "SB", "SC", "SG", "SI", "SK", "SL", "SM", "SN", "SO", "ST", "SV", "SX", "TC", "TD", "TF", "TG", "TH", "TK", "TL", "TM", "TN", "TO", "TR", "TT", "TV", "UA", "UG", "UM", "US", "UY", "UZ", "VA", "VC", "VE", "VG", "VI", "VN", "VU", "WF", "WS", "XK", "YE", "YT", "ZA", "ZM", "ZW"];
type RegionCodeV3<R extends RegionCode & keyof CountryCodes = RegionCode & keyof CountryCodes> = CountryCodes[R][0];
type ThreeDigitCode<R extends RegionCode> = RegionCodeV3<R> extends ThreeDigitCodes ? RegionCodeV3<R> : never;
type ThreeDigitCodes = Exclude<RegionCodeV3, null> & string;
type GetCountryArray = <R extends RegionCode | undefined = undefined>(region: R) => R extends RegionCode ? CountryArray<R> : CountryArrays;
//___=============================>           <============================___\\
//___|| ==================== ||      HELPERS      || =================== ||___\\
//___=============================>           <============================___\\

type GetCountryName = <R extends RegionCode>(region: R) => CountryName<R>;

type SearchByZone = <
  R extends ZoneRegions,
  S extends Zones<R> | undefined,
>(regionCode: R, zone?: S) => S extends Zones<R> //@ts-ignore
  ? S extends keyof SearchedZones<R> ? SearchedZones<R>[S] : ZoneType<R> //@ts-ignore
  : SearchedZones<R>;

type SearchedZones<R extends ZoneRegions> = ReturnType<(regionCode: R) => R extends ZoneRegions ? //@ts-ignore
  { [K in keyof CountryZones<R> as CountryZones<R>[K][number] extends Zones<R> ? CountryZones<R>[K][number] : never]: K } : never>;

type PhoneFormats = "+...-...-..." | "+...-.-...-...." | "+..-..-...-...." | "+.(...)...-...." | "+...(...)...-..." | "+...-..-...-..." | "+..(...)...-...." | "+.. ... ... ..." | "+...-...-...." | "+...-..-...-..-.." | "+...-..-...." | "+.. ... .. .. .." | "+...-..-..-...." | "+...-....-...." | "+..-..-....-...." | "+...-.-...-..." | "+...(..)...-..-.." | "+. (...) ...-...." | "+...-..-...-...." | "+...-..-..." | "+..-.-....-...." | "+.. ..-........" | "+... ....-...." | "+..-.-...-...." | "+...(...)..-.." | "+.. ... ......." | "+...-..-..-..-.." | "+.. .. .. .. .." | "+... .. .... ...." | "+...-..-....." | "+...-....." | "+.. . .. .. .. .." | "+...-.-..-..-.." | "+.. .... ......" | "+...-.....-...." | "+...-...-....." | "+...-..-..-.." | "+...-.-......" | "+... .... ...." | "+..(...)...-..." | "+..-..-...-.." | "+... .. ......." | "+.. .....-....." | "+...(...)...-...." | "+... ... ...." | "+.. ... ......" | "+...-.-....-...." | "+.. ... .. ...." | "+...-...-......" | "+. ... ...-..-.." | "+...(...)..-..." | "+...-..-....-..." | "+...-..-..-....." | "+..-...-..." | "+...(...)..-..-.." | "+..-..-..-...." | "+.. ..-....-...." | "+...-..-...-.." | "+.. .. ........" | "+.. ... .. ..." | "+...-...." | "+.. ...-...-...." | "+.. ... ...." | "+.. ...-......." | "+.. ...-...-..." | "+.-(...)-...-...." | "+.. ....-...." | "+...-..-......" | "+...-....-......" | "+..-..-...-..." | "+.. ... ... .. .." | "+...-.-...-..-.." | "+.. .. .... ...." | "+..-..-....-..." | "+... ....." | "+... ... .. .. .." | "+... .. ...." | "+.. ........" | "+.. (.) .... ......" | "+... .. .. .." | "+... .. ... ..." | "+.. .... ... ..." | "+.. . .... ...." | ["+... .. .. .. ..", "+... ... ... ....", "+... .. ... .."];

type ZoneType = SearchedZones<ZoneRegions>[keyof SearchedZones<ZoneRegions>];
/**
 * @type Zone - A Union of zones in a country
 */
type NamedZones<R extends RegionCode> = CountryZones<R>[keyof CountryZones<R>] extends string[] ? CountryZones<R>[keyof CountryZones<R>][number] : never;
/**
 * @type ZoneTypes<R extends ZoneRegions> - Get the ZoneTypes of a Country
 */
type ZoneTypes<R extends ZoneRegions> = Exclude<CountryArray<R>[5], null>['zoneTypes'];
/**
 * @type CountryArray<R extends RegionCode> - Get the array of countries for a region
 */
type CountryArray<R extends RegionCode> = CountriesArray<R>[number];
/**
 * @type CountryName<R extends RegionCode> - Get the name of a country for a region
 */
type CountryName<R extends RegionCode> = CountryArray<R>[0];
/**
 * @type RegionCode - Get the code of a country for a region
 */
type RegionCode = RegionCodes[number];
/**
 * @type DialingCode<R extends RegionCode> - Get the code of a country for a region
 */
type DialCode<R extends RegionCode> = CountryArray<R>[2];
/**
 * @type PhoneFormat<R extends RegionCode> - Get the format of a country for a region
 */
type PhoneFormat<R extends RegionCode> = Exclude<CountryArray<R>[3], "" | undefined> extends PhoneFormats ? Exclude<CountryArray<R>[3], "" | undefined> : never;
/**
 * @type CountryFlag<R extends RegionCode> - Get the flag of a country for a region
 */
type CountryFlag<R extends RegionCode> = CountryArray<R>[4];
/**
 * @type CountryZones<R extends RegionCode> - Get the zones of a region
 */
type CountryZones<R extends ZoneRegions = ZoneRegions> = Omit<CountryArray<R>[5], 'zoneTypes'>;
/**
 * @type Zones<R extends ZoneRegions> - Get the zones of a region
 */
type Zones<R extends ZoneRegions> = R extends ZoneRegions ? CountryZones<R>[keyof CountryZones<R>] extends string[] ? CountryZones<R>[keyof CountryZones<R>] extends ZoneTypes<R> ? never : CountryZones<R>[keyof CountryZones<R>][number] : never : never;
/**
 * @type DialPriority<R extends RegionCode> - Get the zones of a region
 */
type DialPriority<R extends RegionCode> = R extends "VA" ? 1 : CountryArray<R>[6] extends 0 | 1 | 2 | 3 ? CountryArray<R>[6] : 0;
/**
 * @type AreaCodes<R extends RegionCode> - Get the zones of a region
 */
type AreaCodes<R extends RegionCode> = Exclude<CountryArray<R>[7], undefined>;

type HyphenHandler<R extends Exclude<RegionCode, "HM">, DC extends boolean = false> = PhoneFormat<R> extends "+...-...-..." | "+...-....-...." | "+...-..-..." | "+...-...-...." | "+...-..-....." | "+...-.....-...." | "+...-...-......" | "+..-...-..." | "+...-...-....." | "+...-..-......" | "+...-....-......" | "+...-.-......" | "+...-..-...."
    ? `${DC extends true ? `+${DialCode<R>}-` : ''}${number}-${number}`
  : PhoneFormat<R> extends "+...-.-...-...." | "+..-..-...-...." | "+...-..-..-...." | "+...-..-...-..." | "+..-..-....-...." | "+...-..-..-.." | "+..-.-...-...." | "+...-..-...-...." | "+..-.-....-...." | "+...-..-....-..." | "+...-..-..-....." | "+...-.-....-...." | "+..-..-..-...." | "+...-..-...-.." | "+..-..-...-..." | "+..-..-....-..." | "+...-.-...-..." | "+..-..-...-.."
    ? `${DC extends true ? `+${DialCode<R>}-` : ''}${number}-${number}-${number}`
  : PhoneFormat<R> extends "+...-....." | "+...-...."
    ? `${DC extends true ? `+${DialCode<R>}-` : ''}${number}`
  : PhoneFormat<R> extends "+...-..-..-..-.." | "+...-..-...-..-.." | "+...-.-..-..-.." | "+...-.-...-..-.."
    ? `${DC extends true ? `+${DialCode<R>}-` : ''}${number}-${number}-${number}-${number}`
  : never;

type SpaceHandler<R extends Exclude<RegionCode, "HM">, DC extends boolean = false> = PhoneFormat<R> extends "+.. ... ......."  | "+... .... ...."  | "+.. .... ......"  | "+... .. ......."  | "+... ... ...."  | "+.. ... ......"  | "+.. .. ........"  | "+.. ... ...." | "+... .. ...."
    ? `${DC extends true ? `+${DialCode<R>} ` : ''}${number} ${number}`
  : PhoneFormat<R> extends  "+... .. .... ...."  | "+.. ... ... ..."  | "+.. ... .. ...."  | "+.. ... .. ..."  | "+.. .. .... ...." | "+.. . .... ...." | "+... .. .. .." | "+... .. ... ..."
    ? `${DC extends true ? `+${DialCode<R>} ` : ''}${number} ${number} ${number}`
  : PhoneFormat<R> extends  "+.. ... .. .. .."  | "+.. .. .. .. .."  | "+.. ... ... .. .." | "+... ... .. .. .."
    ? `${DC extends true ? `+${DialCode<R>} ` : ''}${number} ${number} ${number} ${number}`
  : PhoneFormat<R> extends  "+.. . .. .. .. .."
    ? `${DC extends true ? `+${DialCode<R>} ` : ''}${number} ${number} ${number} ${number} ${number}`
  : PhoneFormat<R> extends "+... ....." | "+.. ........"
    ? `${DC extends true ? `+${DialCode<R>} ` : ''}${number}`
  : never;

type MixHandler<R extends Exclude<RegionCode, "HM">, DC extends boolean = false> = PhoneFormat<R> extends "+.. ..-........"  | "+... ....-...."  | "+.. .....-....."  | "+.. ...-......."  | "+.. ....-...."
  ? `${DC extends true ? `+${DialCode<R>} ` : ''}${number}-${number}`
: PhoneFormat<R> extends "+.(...)...-...." | "+...(...)...-..." | "+..(...)...-...."  | "+...(...)..-.."  | "+..(...)...-..."  | "+...(...)...-...."  | "+...(...)..-..."
  ? `${DC extends true ? `+${DialCode<R>}` : ''}(${number})${number}-${number}`
: PhoneFormat<R> extends  "+...(..)...-..-.."  | "+...(...)..-..-.."
  ? `${DC extends true ? `+${DialCode<R>}` : ''}(${number})${number}-${number}-${number}`
: PhoneFormat<R> extends "+.. ..-....-...." | "+.. ...-...-...."  | "+.. ...-...-..."
  ? `${DC extends true ? `+${DialCode<R>} ` : ''}${number}-${number}-${number}`
: PhoneFormat<R> extends "+. (...) ...-...."
  ? `${DC extends true ? `+${DialCode<R>} ` : ''}(${number}) ${number}-${number}`
: PhoneFormat<R> extends "+. ... ...-..-.."
  ? `${DC extends true ? `+${DialCode<R>} ` : ''}${number} ${number}-${number}-${number}`
: PhoneFormat<R> extends "+.-(...)-...-...."
  ? `${DC extends true ? `+${DialCode<R>}-` : ''}(${number})-${number}-${number}`
: PhoneFormat<R> extends "+.. (.) .... ......"
  ? `${DC extends true ? `+${DialCode<R>} ` : ''}(${number}) ${number} ${number}`
: R extends "AX"
  ? `${DC extends true ? `+${DialCode<R>} ` : ''}${number} ${number} ${number} ${number}` | `${DC extends true ? `+${DialCode<R>} ` : ''}${number} ${number} ${number}`
: never;

type Telephone<R extends Exclude<RegionCode, "HM">, B extends boolean = false> = SpaceHandler<R, B> | MixHandler<R, B> | HyphenHandler<R, B>;
type ZonelessRegions = "AQ" | "AW" | "BV" | "CC" | "CX" | "GS" | "HM" | "IO" | "PN" | "VA";
type ZoneRegions = Exclude<RegionCode, ZonelessRegions>;
type Zone<R extends ZoneRegions> = Zones<R>;
interface Phone<R extends Exclude<RegionCode, "HM">> {
  dialCode: `+${DialCode<R>}`;
  number: R extends "AX" ? Telephone<R> | [Telephone<R>, Telephone<R>, Telephone<R>] : Telephone<R>;
  fullNumber: R extends "AX" ? Telephone<R, true> | [Telephone<R, true>, Telephone<R, true>, Telephone<R, true>] : Telephone<R, true>;
  priority: DialPriority<R>;
  format: PhoneFormat<R>;
}
type PhoneFormats = ["+... .. .. .. ..", "+... ... ... ....", "+... .. ... .."];
/**
 * @type NameHolder - The holder of a name existing in a country
 */
type NameHolder = `${string} (${string}) (${string})` | `${string} (${string}) ${string}` | `${string} (${string})`;
/**
 * @type LocalName<R extends RegionCode, F extends 'LCF' | 'LF' | 'LCN' | undefined> - Get the local name of a country for a region
 * @template {R extends RegionCode} R
 * @template {F extends 'LCF' | 'LF' | 'LCN' | undefined} F
 */
type LocalName<R extends RegionCode, F extends 'LCF' | 'LF' | 'LCN' | undefined> = MultiName<CountryName<R>> extends `${infer Lcl} (${infer Ctx}) (${infer Frgn})`
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
type ForeignName<R extends RegionCode, F extends 'LCF' | 'LF' | 'LCN' | undefined> = MultiName<CountryName<R>> extends `${infer Lcl} (${infer Ctx}) (${infer Frgn})`
  ? F extends 'LCF'
    ? Frgn
  : never
: MultiName<CountryName<R>> extends `${infer Lcl} (${infer Frgn})`
  ? F extends 'LF'
    ? Frgn extends `${infer Fgn} (${infer Ctx})`
      ? Fgn
    : Frgn
  : never
: F extends 'LCN'
  ? MultiName<ContextualName<R, F>> | MultiName<LocalName<R, F>>
: never;
/**
 * @type ContextualName<R extends RegionCode, F extends 'LCF' | 'LF' | 'LCN' | undefined> - Get the contextual name of a country for a region
 * @template {R extends RegionCode} R
 * @template {F extends 'LCF' | 'LF' | 'LCN' | undefined} F
 */
type ContextualName<R extends RegionCode, F extends 'LCF' | 'LF' | 'LCN' | undefined> = MultiName<CountryName<R>> extends `${infer Lcl} (${infer Ctx}) (${infer Frgn})`
  ? F extends 'LCF' | undefined
    ? Ctx
  : never
: MultiName<CountryName<R>> extends `${infer Lcl} (${infer Ctx}) ${infer Name}`
  ? F extends 'LCN' | undefined
    ? `${Ctx} ${Name}`
  : never
: F extends 'LF'
  ? MultiName<CountryName<R>> extends `${infer Lcl} (${infer Frgn} (${infer Ctx}))`
    ? Ctx
  : MultiName<ForeignName<R, F>> | MultiName<LocalName<R, F>>
: never;

type HandleContext<F extends "LCF" | "LF" | "LCN", R extends RegionCode> = (F extends "LCF" | "LF" | "LCN"
  ? F extends "LCF" | "LF"
    ? F extends "LCF"
      ? ("Contextual" | "Local" | "Foreign")
    : R extends "MF"
      ? ("Contextual" | "Local" | "Foreign")
    : ("Local" | "Foreign")
  : ("Local" | "Contextual")
: never) | undefined;
type FormReplacementMap = {
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
    'Contextual': '$3'
  }
}


type ExtractName = <
  R extends RegionCode,
  F extends 'LCF' | 'LF' | 'LCN',
  T extends HandleContext<F, R> & keyof FormReplacementMap[F]
>(region: R, form: F, type: T) => ForeignLocal<R, F, T>;

type Replace<R extends RegionCode, F extends "LCF" | "LCN" | "LF", T extends HandleContext<F, R> & keyof FormReplacementMap[F]> = FormReplacementMap[F][T] extends "$1" | "$1 $3" | "$3" | "$2" | "$2 $3" ? FormReplacementMap[F][T] : "";

/**
 * @type ForeignLocal - Get the contextual name of a country for a region
 * @template {RegionCode} R
 * @template {"LCF" | "LF" | "LCN"} T
 * @template {HandleContext<T,R>} F
 */
type ForeignLocal<
  R extends RegionCode,
  F extends "LCF" | "LF" | "LCN",
  /*OF extends 'Local' | 'Foreign' | 'Contextual' = 'Local',*/
  T extends HandleContext<F,R> = HandleContext<F,R>
  /*(OF extends 'Contextual' | 'Local' ? 'LCF' | 'LCN' : never) |
  (OF extends 'Foreign' | 'Local' ? 'LCF' | 'LF' : never) | undefined = undefined*/
> = CountryName<R> extends MultiName<CountryName<R>>
  ? T extends 'Local'
    ? LocalName<R, NonNullable<F>>
  : T extends 'Contextual'
    ? ContextualName<R, NonNullable<F>>
  : T extends 'Foreign'
    ? ForeignName<R, NonNullable<F>>
  : never
: never;
type MultiName<T> = T extends NameHolder
  ? T extends `${infer First} (${infer Context}) (${infer Rest})`
    ? `${First} (${Context}) (${Rest})`
  : T extends `${infer First} (${infer Context}) ${infer Rest}`
    ? `${First} (${Context}) ${Rest}`
  : T extends `${infer First} (${infer Rest})`
    ? `${First} (${Rest})`
  : never
: never;
type CountriesData = {
  [R in RegionCode]: {
    [P in keyof Country<R> as Country<R>[P] extends never | never[] ? never : P]: Country<R>[P];
  }
};
type Context = "region" | "name" | "country";

interface Country<R extends RegionCode> {
  name: CountryName<R>;
  regionCode: R;
  'alpha-3': ThreeDigitCode<R>;
  phone: Phone<R>;
  flag: CountryFlag<R>;
  zoneTypes: R extends ZoneRegions ? ZoneTypes<R> : never;
  zones: R extends ZoneRegions ? CountryZones<R> : never;
  allZones: R extends ZoneRegions ? ZonesOf<R> : never;
  areaCodes?: AreaCodes<R>;
  [Symbol.toStringTag]: `Country: ${CountryName<R>}`;
  toString(): `Country: ${CountryName<R>}`;
  [Symbol.match](str: string): CountryMatchArray<R> | null;
  local: R extends LocalRC ? LocalHandler<R> : never;
  foreign: R extends ForeignRC ? ForeignHandler<R> : never;
  context: R extends ContextualRC ? ContextualHandler<R> : never;
}
type ZonesOf<R extends ZoneRegions> = R extends ZoneRegions ? ZoneTypes<R> extends string[] ? ZoneTypes<R>['length'] extends 2 ? [...CountryZones<R>[ZoneTypes<R>[0]], ...CountryZones<R>[ZoneTypes<R>[1]]] : ZoneTypes<R>['length'] extends 3 ? [...CountryZones<R>[ZoneTypes<R>[0]], ...CountryZones<R>[ZoneTypes<R>[1]], ...CountryZones<R>[ZoneTypes<R>[2]]] : ZoneTypes<R>['length'] extends 4 ? [...CountryZones<R>[ZoneTypes<R>[0]], ...CountryZones<R>[ZoneTypes<R>[1]], ...CountryZones<R>[ZoneTypes<R>[2]], ...CountryZones<R>[ZoneTypes<R>[3]]] : never : CountryZones<R>[ZoneTypes<R>] : never;

type HandleR<R extends RegionCode> = ForeignLocal<R, "LCF" | "LCN" | "LF", HandleContext<"LF" | "LCF" | "LCN", R>>;
type TestRR = HandleR<"BL">;

type SaintRC = "KN" | "PM" | "VC" | "BL" | "MF" | "LC";
type OddityRC = "TF" | "GS" | "HM" | "UM";
type OutlierRC = SaintRC | OddityRC;
type LCFRegion = "CD" | "MK" | "MM" | "CG";
type LCNRegion = "CC";
type ZonelessRegion = "AQ" | "AW" | "BV" | "CC" | "DZ" | "GS" | "HM" | "IO" | "NF" | "PN" | "VA";
type HasZones = Exclude<RegionCode, ZonelessRegion>;
type ForeignRC = LFRegion | "BL" | "MF" | LCFRegion;
type LocalRC = OutlierRC | LFRegion | LCFRegion | LCNRegion;
type ContextualRC = LCFRegion | LCNRegion | "MF";
type MFHandler<R extends RegionCode> = R extends "MF" ? "Contextual" | "Local" | "Foreign" : "Local" | "Foreign";
type LFRegion = "AE" | "AF" | "AL" | "AM" | "AT" | "AZ" | "BA" | "BD" | "BE" | "BG" | "BH" | "BI" | "BJ" | "BR" | "BT" | "BY" | "CF" | "CM" | "CN" | "CV" | "CY" | "CZ" | "DE" | "DK" | "DO" | "DZ" | "EE" | "EG" | "FI" | "FK" | "FO" | "GE" | "GF" | "GH" | "GL" | "GN" | "GQ" | "GR" | "GW" | "HK" | "HR" | "HU" | "IL" | "IN" | "IQ" | "IR" | "IS" | "IT" | "JO" | "JP" | "KG" | "KH" | "KM" | "KP" | "KW" | "KZ" | "LA" | "LB" | "LT" | "LV" | "LY" | "MA" | "MD" | "ME" | "MG" | "MN" | "MO" | "MR" | "MU" | "MX" | "MZ" | "NA" | "NC" | "NE" | "NL" | "NO" | "NP" | "OM" | "PA" | "PE" | "PF" | "PK" | "PL" | "PS" | "QA" | "RE" | "RO" | "RS" | "RU" | "SA" | "SI" | "SK" | "SN" | "SO" | "ST" | "TD" | "TH" | "TN" | "TR" | "UA" | "UZ" | "VA" | "VN" | "YE";
type InferSaint<R extends "KN" | "PM" | "VC"> = ForeignLocal<R, 'LF', 'Local'> | CountryName<R extends "KN" | "VC" ? R : never> extends `Saint${infer Name extends string}` ? `St.${Name}` : never;
type OddityHandler<R extends OddityRC> = R extends OddityRC
  ? R extends "TF" | "GS" | "HM"
    ? R extends "TF" | "GS"
      ? R extends "TF"
        ? "French Southern Territories"
      : "South Sandwich Islands"
    : "McDonald Islands"
  : "U.S. Minor Outlying Islands"
: never;
type StHandler<R extends SaintRC> = R extends SaintRC
  ? R extends "BL" | "MF" | "KN" | "PM" | "VC"
    ? R extends "BL" | "MF"
      ? ForeignLocal<R, 'LF', "Local">
    : InferSaint<R>
  : CountryName<R>
: never;
type OutlierHandler<R extends OutlierRC> = R extends OutlierRC
  ? R extends SaintRC
    ? StHandler<R>
  : OddityHandler<R>
: never;

type LocalHandler<R extends LocalRC> = R extends LocalRC
  ? R extends OutlierRC | LFRegion | LCFRegion
    ? R extends OutlierRC | LFRegion
      ? R extends OutlierRC
        ? OutlierHandler<R>
      : ForeignLocal<R, "LF", "Local">
    : ForeignLocal<R, "LCF", "Local">
  : ForeignLocal<R, "LCN", "Local">
: never;

type ForeignHandler<R extends ForeignRC> = R extends ForeignRC
  ? R extends LFRegion | "BL" | "MF"
    ? ForeignLocal<R, "LF", "Foreign">
  : ForeignLocal<R, "LCF", "Foreign">
: never;

type ContextualHandler<R extends ContextualRC> = R extends ContextualRC
  ? R extends "MF" | LCFRegion
    ? R extends LCFRegion
      ? ForeignLocal<R, "LCF", "Contextual">
    : ForeignLocal<R, "LF", "Contextual">
  : ForeignLocal<R, "LCN", "Contextual">
: never;
interface CountryMatchArray<R extends RegionCode> extends RegExpMatchArray {
  /**
   * The index of the search at which the result was found.
   */
  index?: number;
  /**
   * A copy of the search string.
   */
  input?: MatchTypeInput<R> | string;
  /**
   * The Region
   */
  region: R;
  /**
   * The Country's name
   */
  name: CountryName<R>;
  /**
   * The Country's local name, if it exists
   */
  local?: R extends LocalRC ? LocalHandler<R> : never;
  /**
   * The Country's foreign name, if it exists
   */
  foreign?: R extends ForeignRC ? ForeignHandler<R> : never;
  /**
   * The Country's contextual name, if it exists
   */
  context?: R extends ContextualRC ? ContextualHandler<R> : never;
  /**
   * The countries match groups
   */
  groups?: CountryMatchGroups<R>;
  /**
   * The first match. This will always be present because `null` will be returned if there are no matches.
   */
  0: string;
}
type MatchTypeInput<R extends RegionCode> = (R | CountryName<R> | Country<R>['local'] | Country<R>['foreign'] | Country<R>['context']) | Lowercase<R | CountryName<R> | Country<R>['local'] | Country<R>['foreign'] | Country<R>['context']>;
interface CountryMatchGroups<R extends RegionCode> {
  countryName?: CountryName<R> | Lowercase<CountryName<R>>;
  region?: R | Lowercase<R>;
  local?: CountryName<R> extends `${infer Local} (${infer Context}) ${infer Name}` ? Local : (Country<R>['local'] | Lowercase<Country<R>['local']>);
  foreign?: Country<R>['foreign'] | Lowercase<Country<R>['foreign']>;
  contextual?: CountryName<R> extends `${infer Local} (${infer Context}) ${infer Name}` ? Context : (Country<R>['context'] | Lowercase<Country<R>['context']>);
  contextualName?: CountryName<R> extends `${infer Local} (${infer Context}) ${infer Name}` ? `${Context} ${Name}` : never;
  localName?: CountryName<R> extends `${infer Local} (${infer Context}) ${infer Name}` ? `${Local} ${Name}` : never;
  name?: CountryName<R> extends `${infer Local} (${infer Context}) ${infer Name}` ? `${Name}` : never;
}
interface CountryHelpers {
  phone: GetTelephone;
  formatter: TelephoneFormatter;
  extractName: ExtractName;
  getRegionCodes: RegionCodeGenerator;
  getLocalContextGroups: GetLclCtx;
  getLocalForeignGroups: GetLclFrgn;
  getLocalContextForeignGroups: GetLclCtxFrgn;
  match: GetCountryMatch;
  isLCFMatch: LCFMatch;
  isLCN:  IsLCNRegion;
  isLCF: IsLCFRegion;
  isLF: IsLFRegion;
  isOutlier: IsOutlier;
  getKeysAsArray: GetZoneTypes;
}
type GetCountryMatch = <R extends RegionCode>(str: string, array: CountryArray<R>) => [RegExp, CountryMatchArray<R> | null];
type GetZoneTypes = <R extends HasZones>(region: R) => NonNullable<CountryArrays[R][5]>['zoneTypes'];
type GetTelephone = <R extends Exclude<RegionCode, "HM">, B extends boolean>(country: CountryArray<R>, includeDC?: B) => R extends "AX" ? [Telephone<R, B>, Telephone<R, B>, Telephone<R, B>] | Telephone<R, B> : Telephone<R, B>;
type TelephoneFormatter = <R extends Exclude<RegionCode, "HM">, B extends boolean = false>(dialCode: DialCode<R>, format: string, includeDC: B) => Telephone<R, B>;
type RegionCodeGenerator = () => Generator<RegionCode, void, unknown>;
type LCFMatch = <R extends Exclude<LCNRegion | LCFRegion | LFRegion | "MF", Exclude<OutlierRC, "MF">>>(array: CountryArray<R> | CountryArray<RegionCode>) => array is CountryArray<R>;
type IsLCNRegion = <R extends LCNRegion>(array: CountryArray<R> | CountryArray<RegionCode>) => array is CountryArray<R>;
type IsLFRegion = <R extends LFRegion | "MF">(array: CountryArray<R> | CountryArray<RegionCode>) => array is CountryArray<R>;
type IsLCFRegion = <R extends LCFRegion>(array: CountryArray<R> | CountryArray<RegionCode>) => array is CountryArray<R>;
type IsOutlier = <R extends OutlierRC>(array: CountryArray<R> | CountryArray<RegionCode>) => array is CountryArray<R>;
// type SaintCountry<R extends RegionCode> = CountryName<R> | ForeignLocal<R, 'LCF' | 'LF' | 'LCN', 'Local'> extends `Saint${infer StCountry extends string}` ? `St.${StCountry}` : never;
type GetLclCtx = <R extends LCNRegion>(region: R) => LocalContextGroups<R>;
type GetLclCtxFrgn = <R extends LCFRegion>(region: R) => LocalContextForeignGroups<R>;
type GetLclFrgn = <R extends LFRegion | "MF">(region: R) => LocalForeignGroups<R>;
type LocalContextGroups<R extends LCNRegion, B extends boolean = false> = CountryName<R> extends `${infer Lcl extends string} (${infer Ctx extends string}) ${infer Name extends string}` ? {
  lcl: Lcl;
  ctx: Ctx;
  name: Name;
} | (B extends true ? never : undefined) : never;
type LocalContextForeignGroups<R extends LCFRegion, B extends boolean = false> = CountryName<R> extends `${infer Lcl extends string} (${infer Ctx extends string}) (${infer Frgn extends string})` ? {
  lcl: Lcl;
  ctx: Ctx;
  frgn: Frgn;
} | (B extends true ? never : undefined) : never;
type LocalForeignGroups<R extends LFRegion | "MF", B extends boolean = false> = CountryName<R> extends `${infer Lcl extends string} (${infer Frgn extends string})` ? {
  lcl: Lcl;
  frgn:  Frgn extends `${infer Frn} (${infer Ctx})` ? Frn : Frgn;
  ctx?: Frgn extends `${infer Frn} (${infer Ctx})` ? Ctx : never;
} | (B extends true ? never : undefined) : never;
type TestN = LocalForeignGroups<"MF">
//  _=============================>              <============================  _\\
//___|| ==================== ||      INTERFACES      || =================== ||___\\
//_  =============================>              <============================  _\\
type CountryArrays = {
  [K in RegionCode]: CountryArray<K>;
};

interface CountryMap extends Map<RegionCode, CountryArray<RegionCode>> {
  clear(): void;
  /**
   * @returns true if an element in the Map existed and has been removed, or false if the element does not exist.
   */
  delete<R extends RegionCode>(key: R): boolean;
  /**
   * Executes a provided function once per each key/value pair in the Map, in insertion order.
   */
  forEach(callbackfn: <R extends RegionCode>(value: CountryArray<R>, key: R, map: Map<R, CountryArray<R>>) => void, thisArg?: any): void;
  /**
   * Returns a specified element from the Map object. If the value that is associated to the provided key is an object, then you will get a reference to that object and any change made to that object will effectively modify it inside the Map.
   * @returns Returns the element associated with the specified key. If no element is associated with the specified key, undefined is returned.
   */
  get<R extends RegionCode>(key: R): CountryArray<R> | undefined;
  /**
   * @returns boolean indicating whether an element with the specified key exists or not.
   */
  has<R extends RegionCode>(key: R): boolean;
  /**
   * Adds a new element with a specified key and value to the Map. If an element with the same key already exists, the element will be updated.
   */
  set<R extends RegionCode>(key: R, value: CountryArray<R>): this;
  /**
   * @returns the number of elements in the Map.
   */
  readonly size: 235;
}

type GetCountry = <R extends RegionCode | undefined = undefined>(region?: R) => R extends RegionCode ? Country<R> : CountriesData;

interface Countries {
  <R extends RegionCode | undefined = undefined>(region?: R): R extends RegionCode ? Country<R> : CountriesData;
  [Symbol.toStringTag]: 'Countries';
  [Symbol.match]: CountriesSymbolMatch;
  toString(): 'Countries';
  getArray: GetCountryArray;
  getName: GetCountryName;
  map: CountryMap;
  zoneLookup: SearchByZone;
  getZones: GetCountryZones;
}
type CountriesMatch = {
  [Symbol.replace]<R extends RegionCode>(str: MatchTypeInput<R>, replaceValue: string): string;
  [Symbol.replace](str: string | RegExp | MatchTypeInput<R>, replaceValue: string): string;
  [Symbol.replace]<T extends ((substring: string, ...args: any[]) => string)>(str: string | RegExp, replacer: T): string;
};

type CountriesSymbolMatch = <R extends RegionCode>(str: string) => CountryMatchArray<R> | null;

type GetCountryZones = <R extends ZoneRegions>(region: R) => R extends ZoneRegions ? ZonesOf<R> : never;

type Concat<A extends any[][]> = A extends [infer A1, ...infer A2] ? A1 extends any[] ? A2 extends any[][] ? [...A1, ...Concat<A2>] : A1 : never : [];

type Flatten<T> = T extends Array<infer U> ? U : never;

type ZoneArrays = ["States", "Territories"] | ["Regions", "Municipalities"] | ["Inner Islands", "Outer Islands"] | ["Provinces", "Communes"] | ["Communes", "Subdivisions"] | ["Parishes", "Sheadings"] | ["Parishes", "Municipalities"] | ["Provinces", "Territories"] | ["Districts", "Islands"] | ["Provinces", "Municipalities", "Autonomous Regions", "Special Administrative Regions"] | ["Arrondissements", "Communes"] | ["Arrondissements", "Communes", "Cantons"] | ["Regions", "States"] | ["Communes", "Cantons"];

type SingleZone = "Regions" | "Emirates" | "Parishes" | "Districts" | "Counties" | "Provinces" | "States" | "Territories" | "Municipalities" | "Governorates" | "Departments" | "Special Municipalities" | "Islands" | "Autonomous Regions" | "Special Administrative Regions" | "Divisions" | "Arrondissements" | "Communes" | "Cantons" | "Villages" | "Sheadings" | "Prefectures" | "Aimags" | "Freguesias" | "Atolls" | "Subdivisions" | "Federal Subjects" | "Inner Islands" | "Outer Islands" | "Oblasts" | "Kingdoms" | "Settlements";

type ReplaceResult = "$1" | "$1 $3" | "$3" | "$2" | "$2 $3";
