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
import { ifArray } from '@util/basicFuncs';
/**
 * @constant {CountriesArray} countriesArray - An array of all major countries and their associated data.
 *  - An array of all major countries and their associated data.
 * - It has a length of 235.
 * - It is used to generate all other data in this module.
 * @see {@link Countries.getArray}
 * @see {@link Countries.get}
 * @see {@link Countries.getName}
 * @see {@link Countries.map}
 *
 */
export const countriesArray: CountriesArray = [
  ["Ascension Island", "AC", 247, "+... .....", "🇦🇨", { Settlements: ["Georgetown", "Two Boats", "Cat Hill", "Traveller's Hill", "Wideawake Airfield"], zoneTypes: "Settlements"}],
  ["Andorra", "AD", 376, "+...-...-...", "🇦🇩", { Regions: ["Andorra la Vella", "Canillo", "Encamp", "Escaldes-Engordany", "La Massana", "Ordino", "Sant Julià de Lòria"], zoneTypes: "Regions" }],
  ["United Arab Emirates (‫الإمارات العربية المتحدة‬‎)", "AE", 971, "+...-.-...-....", "🇦🇪", { Emirates: ["Abu Dhabi", "Ajman", "Dubai", "Fujairah", "Ras Al Khaimah", "Sharjah", "Umm Al Quwain"], zoneTypes: "Emirates" }],
  ["Afghanistan (‫افغانستان‬‎)", "AF", 93, "+..-..-...-....", "🇦🇫", { Regions: ["Badakhshan", "Badghis", "Baghlan", "Balkh", "Bamyan", "Daykundi", "Farah", "Faryab", "Ghazni", "Ghor", "Helmand", "Herat", "Jowzjan", "Kabul", "Kandahar", "Kapisa", "Khost", "Kunar", "Kunduz Province", "Laghman", "Logar", "Nangarhar", "Nimruz", "Nuristan", "Paktia", "Paktika", "Panjshir", "Parwan", "Samangan", "Sar-e Pol", "Takhar", "Urozgan", "Zabul"], zoneTypes: "Regions" }],
  ["Antigua and Barbuda", "AG", 1268, "+.(...)...-....", "🇦🇬", { Parishes: ["Saint George", "Saint John", "Saint Mary", "Saint Paul", "Saint Peter", "Saint Philip"], zoneTypes: "Parishes" }],
  ["Anguilla", "AI", 1264, "+.(...)...-....", "🇦🇮", { Districts: ["Anguilla Island", "Blowing Point", "East End", "George Hill", "Island Harbour", "North Hill", "North Side", "Sandy Ground", "Sandy Hill", "South Hill", "Stoney Ground", "The Farrington", "The Quarter", "The Valley", "West End"], zoneTypes: "Districts" }],
  ["Albania (Shqipëri)", "AL", 355, "+...(...)...-...", "🇦🇱", { Counties: ["Berat", "Dibër", "Durrës", "Elbasan", "Fier", "Gjirokastër", "Korçë", "Kukës", "Lezhë", "Shkodër", "Tirana", "Vlorë"], zoneTypes: "Counties" }],
  ["Armenia (Հայաստան)", "AM", 374, "+...-..-...-...", "🇦🇲", { Provinces: ["Aragatsotn", "Ararat", "Armavir", "Gegharkunik", "Kotayk", "Lori", "Shirak", "Syunik", "Tavush", "Vayots Dzor", "Yerevan"], zoneTypes: "Provinces" }],
  ["Angola", "AO", 244, "+...(...)...-...", "🇦🇴", { Provinces: ["Bengo", "Benguela", "Bié", "Cabinda", "Cuando Cubango", "Cuanza Norte", "Cuanza Sul", "Cunene", "Huambo", "Huíla", "Luanda", "Lunda Norte", "Lunda Sul", "Malanje", "Moxico", "Namibe", "Uíge", "Zaire"], zoneTypes: "Provinces" }],
  ["Antarctica", "AQ", 672, "+... .. ....", "🇦🇶", null],
  ["Argentina", "AR", 54, "+..(...)...-....", "🇦🇷", { Regions: ["Buenos Aires", "Catamarca", "Chaco", "Chubut", "Córdoba", "Corrientes", "Entre Ríos", "Formosa", "Jujuy", "La Pampa", "La Rioja", "Mendoza", "Misiones", "Neuquén", "Río Negro", "Salta", "San Juan", "San Luis", "Santa Cruz", "Santa Fe", "Santiago del Estero", "Tierra del Fuego", "Tucumán"], zoneTypes: "Regions" }],
  ["American Samoa", "AS", 1684, "+.(...)...-....", "🇦🇸", { Districts: ["Eastern District", "Manu'a District", "Rose Island", "Swains Island", "Western District"], zoneTypes: "Districts" }],
  ["Austria (Österreich)", "AT", 43, "+..(...)...-....", "🇦🇹", { States: ["Burgenland", "Carinthia", "Lower Austria", "Upper Austria", "Salzburg", "Styria", "Tyrol", "Vorarlberg", "Vienna"], zoneTypes: "States" }],
  ["Australia", "AU", 61, "+.. ... ... ...", "🇦🇺", { States: ["New South Wales", "Queensland", "South Australia", "Tasmania", "Victoria", "Western Australia"], Territories: ["Australian Capital Territory", "Northern Territory"], zoneTypes: ["States", "Territories"] }],
  ["Aruba", "AW", 297, "+...-...-....", "🇦🇼", null],
  ["Åland Islands", "AX", 358, ["+... .. .. .. ..", "+... ... ... ....", "+... .. ... .."], "🇦🇽", { Municipalities: ["Mariehamn", "Jomala", "Finström", "Lemland", "Saltvik", "Hammarland", "Sund", "Eckerö", "Föglö", "Geta", "Vårdö", "Brändö", "Lumparland", "Kumlinge", "Kökar", "Sottunga"], zoneTypes: "Municipalities" }],
  ["Azerbaijan (Azərbaycan)", "AZ", 994, "+...-..-...-..-..", "🇦🇿", { Districts: ["Absheron", "Agdam", "Agdash", "Agstafa", "Agsu", "Astara", "Baku", "Balakan", "Barda", "Beylagan", "Bilasuvar", "Dashkasan", "Fizuli", "Ganja", "Gobustan", "Goranboy", "Goychay", "Goygol", "Hajigabul", "Imishli", "Ismailli", "Jabrayil", "Jalilabad", "Kalbajar", "Kurdamir", "Lachin", "Lankaran", "Lankaran", "Lerik", "Masally", "Mingachevir", "Naftalan", "Nakhchivan", "Neftchala", "Oghuz", "Ordubad", "Qabala", "Qakh", "Qazakh", "Quba", "Qubadli", "Qusar", "Saatly", "Sabirabad", "Salyan", "Shabran", "Shaki", "Shamakhi", "Shamkir", "Shirvan", "Shusha", "Siazan", "Sumgayit", "Tartar", "Tovuz", "Ujar", "Yardymli", "Yevlakh", "Zangilan", "Zaqatala", "Zardab"], zoneTypes: "Districts" }],
  ["Bosnia and Herzegovina (Босна и Херцеговина)", "BA", 387, "+...-..-....", "🇧🇦", { Regions: ["Brčko District", "Federation of Bosnia and Herzegovina", "Republika Srpska"], zoneTypes: "Regions" }],
  ["Barbados", "BB", 1246, "+.(...)...-....", "🇧🇧", { Regions: ["Christ Church", "Saint Andrew", "Saint George", "Saint James", "Saint John", "Saint Joseph", "Saint Lucy", "Saint Michael", "Saint Peter", "Saint Philip", "Saint Thomas"], zoneTypes: "Regions" }],
  ["Bangladesh (বাংলাদেশ)", "BD", 880, "+...-..-...-...", "🇧🇩", { Districts: ["Barisal", "Chittagong", "Dhaka", "Khulna", "Mymensingh", "Rajshahi", "Rangpur", "Sylhet"], zoneTypes: "Districts" }],
  ["Belgium (België)", "BE", 32, "+.. ... .. .. ..", "🇧🇪", { States: ["Brussels", "Flemish Brabant", "Walloon Brabant", "Antwerp", "East Flanders", "West Flanders", "Hainaut", "Liège", "Limburg", "Luxembourg", "Namur"], zoneTypes: "States" }],
  ["Burkina Faso", "BF", 226, "+...-..-..-....", "🇧🇫", { Provinces: ["Balé", "Bam", "Banwa", "Bazèga", "Bougouriba", "Boulgou", "Boulkiemdé", "Comoé", "Ganzourgou", "Gnagna", "Gourma", "Houet", "Ioba", "Kadiogo", "Kénédougou", "Komondjari", "Kompienga", "Kossi", "Koulpélogo", "Kouritenga", "Kourwéogo", "Léraba", "Loroum", "Mouhoun", "Namentenga", "Nahouri", "Nayala", "Noumbiel", "Oubritenga", "Oudalan", "Passoré", "Poni", "Sanguié", "Sanmatenga", "Séno", "Sissili", "Soum", "Sourou", "Tapoa", "Tui", "Yagha", "Yatenga", "Ziro", "Zondoma", "Zoundwéogo"], zoneTypes: "Provinces" }],
  ["Bulgaria (България)", "BG", 359, "+...(...)...-...", "🇧🇬", { States: ["Blagoevgrad", "Burgas", "Dobrich", "Gabrovo", "Haskovo", "Kardzhali", "Kyustendil", "Lovech", "Montana", "Pazardzhik", "Pernik", "Pleven", "Plovdiv", "Razgrad", "Ruse", "Shumen", "Silistra", "Sliven", "Smolyan", "Sofia", "Stara Zagora", "Targovishte", "Varna", "Veliko Tarnovo", "Vidin", "Vratsa", "Yambol"], zoneTypes: "States" }],
  ["Bahrain (‫البحرين‬‎)", "BH", 973, "+...-....-....", "🇧🇭", { Governorates: ["Capital Governorate", "Muharraq Governorate", "Northern Governorate", "Southern Governorate"], zoneTypes: "Governorates" }],
  ["Burundi (Uburundi)", "BI", 257, "+...-..-..-....", "🇧🇮", { Provinces: ["Bubanza", "Bujumbura Mairie", "Bujumbura Rural", "Bururi", "Cankuzo", "Cibitoke", "Gitega", "Karuzi", "Kayanza", "Kirundo", "Makamba", "Muramvya", "Muyinga", "Mwaro", "Ngozi", "Rumonge", "Rutana", "Ruyigi"], zoneTypes: "Provinces" }],
  ["Benin (Bénin)", "BJ", 229, "+...-..-..-....", "🇧🇯", { Departments: ["Alibori", "Atakora", "Atlantique", "Borgou", "Collines", "Donga", "Kouffo", "Littoral", "Mono", "Ouémé", "Plateau", "Zou"], zoneTypes: "Departments" }],
  ["Saint Barthélemy (Saint-Barthélemy)", "BL", 590, "+... ... .. .. ..", "🇧🇱", { Parishes: ["Gustavia"], zoneTypes: "Parishes" }, 1],
  ["Bermuda", "BM", 1441, "+.(...)...-....", "🇧🇲", { Parishes: ["Devonshire", "Hamilton", "Paget", "Pembroke", "Sandys", "Smith's", "Southampton", "St. George's", "Warwick"], Municipalities: ["Hamilton", "St. George's"], zoneTypes: ["Municipalities", "Parishes"] }],
  ["Brunei", "BN", 673, "+...-...-....", "🇧🇳", { Districts: ["Belait", "Brunei-Muara", "Temburong", "Tutong"], zoneTypes: "Districts" }],
  ["Bolivia", "BO", 591, "+...-.-...-....", "🇧🇴", { States: ["Chuquisaca", "Cochabamba", "Beni", "La Paz", "Oruro", "Pando", "Potosí", "Santa Cruz", "Tarija"], zoneTypes: "States" }],
  ["Caribbean Netherlands", "BQ", 599, "+...-...-....", "🇧🇶", { "Special Municipalities": ["Bonaire", "Saba", "Sint Eustatius"], zoneTypes: "Special Municipalities" }, 1],
  ["Brazil (Brasil)", "BR", 55, "+..-..-....-....", "🇧🇷", { Regions: ["Acre", "Alagoas", "Amapá", "Amazonas", "Bahia", "Ceará", "Distrito Federal", "Espírito Santo", "Goiás", "Maranhão", "Mato Grosso", "Mato Grosso do Sul", "Minas Gerais", "Pará", "Paraíba", "Paraná", "Pernambuco", "Piauí", "Rio de Janeiro", "Rio Grande do Norte", "Rio Grande do Sul", "Rondônia", "Roraima", "Santa Catarina", "São Paulo", "Sergipe", "Tocantins"], zoneTypes: "Regions" }],
  ["Bahamas", "BS", 1242, "+.(...)...-....", "🇧🇸", { Regions: ["Acklins", "Berry Islands", "Bimini", "Black Point", "Cat Island", "Central Abaco", "Central Andros", "Central Eleuthera", "City of Freeport", "Crooked Island and Long Cay", "East Grand Bahama", "Exuma", "Grand Cay", "Harbour Island", "Hope Town", "Inagua", "Long Island", "Mangrove Cay", "Mayaguana", "Moore's Island", "North Abaco", "North Andros", "North Eleuthera", "Ragged Island", "Rum Cay", "San Salvador", "South Abaco", "South Andros", "South Eleuthera", "Spanish Wells", "West Grand Bahama"], zoneTypes: "Regions" }],
  ["Bhutan (འབྲུག)", "BT", 975, "+...-.-...-...", "🇧🇹", { Regions: ["Bumthang", "Chukha", "Dagana", "Gasa", "Haa", "Lhuntse", "Mongar", "Paro", "Pemagatshel", "Punakha", "Samdrup Jongkhar", "Samtse", "Sarpang", "Thimphu", "Trashigang", "Trashiyangtse", "Trongsa", "Tsirang", "Wangdue Phodrang", "Zhemgang"], zoneTypes: "Regions" }],
  ["Bouvet Island", "BV", 47, "+..(...)...-....", "🇧🇻", null],
  ["Botswana", "BW", 267, "+...-..-...-...", "🇧🇼", { Districts: ["Central District", "Ghanzi District", "Kgalagadi District", "Kgatleng District", "Kweneng District", "North-East District", "North-West District", "South-East District", "Southern District"], zoneTypes: "Districts" }],
  ["Belarus (Беларусь)", "BY", 375, "+...(..)...-..-..", "🇧🇾", { Regions: ["Brest Region", "Gomel Region", "Grodno Region", "Minsk Region", "Mogilev Region", "Vitebsk Region"], zoneTypes: "Regions" }],
  ["Belize", "BZ", 501, "+...-...-....", "🇧🇿", { Districts: ["Belize District", "Cayo District", "Corozal District", "Orange Walk District", "Stann Creek District", "Toledo District"], zoneTypes: "Districts" }],
  ["Canada", "CA", 1, "+. (...) ...-....", "🇨🇦", { Provinces: ["Alberta", "British Columbia", "Manitoba", "New Brunswick", "Newfoundland and Labrador", "Nova Scotia", "Ontario", "Prince Edward Island", "Quebec", "Saskatchewan"], Territories: ["Northwest Territories", "Nunavut", "Yukon"], zoneTypes: ["Provinces", "Territories"] }, 1, ["204", "236", "249", "250", "289", "306", "343", "365", "387", "403", "416", "418", "431", "437", "438", "450", "506", "514", "519", "548", "579", "581", "587", "604", "613", "639", "647", "672", "705", "709", "742", "778", "780", "782", "807", "819", "825", "867", "873", "902", "905"]],
  ["Cocos (Keeling) Islands", "CC", 61, "+.. . .... ....", "🇨🇨", null],
  ["Congo (DRC) (Jamhuri ya Kidemokrasia ya Kongo)", "CD", 243, "+...(...)...-...", "🇨🇩", { Provinces: ["Kinshasa", "Kongo Central", "Kwango", "Kwilu", "Kasai", "Kasai-Central", "Kasai-Oriental", "Sankuru", "Maniema", "South Kivu", "North Kivu", "Ituri", "Haut-Uele", "Tshopo", "Bas-Uele", "Tanganyika", "Haut-Lomami", "Lualaba", "Kwango", "Kwilu", "Kasai", "Kasai-Central", "Kasai-Oriental", "Sankuru", "Maniema", "South Kivu", "North Kivu", "Ituri", "Haut-Uele", "Tshopo", "Bas-Uele", "Tanganyika", "Haut-Lomami", "Lualaba"], zoneTypes: "Provinces" }],
  ["Central African Republic (République centrafricaine)", "CF", 236, "+...-..-..-....", "🇨🇫", { Regions: ["Bamingui-Bangoran", "Bangui", "Basse-Kotto", "Haute-Kotto", "Haut-Mbomou", "Kémo", "Lobaye", "Mambéré-Kadéï", "Mbomou", "Nana-Grébizi", "Nana-Mambéré", "Ombella-M'Poko", "Ouaka", "Ouham", "Ouham-Pendé", "Sangha-Mbaéré", "Vakaga"], zoneTypes: "Regions" }],
  ["Congo (Republic) (Congo-Brazzaville)", "CG", 242, "+...-..-...-....", "🇨🇬", { Departments: ["Bouenza", "Cuvette", "Cuvette-Ouest", "Kouilou", "Lékoumou", "Likouala", "Niari", "Plateaux", "Pool", "Sangha"], zoneTypes: "Departments" }],
  ["Côte d’Ivoire", "CI", 225, "+...-..-...-...", "🇨🇮", { Regions: ["Lagunes", "Haut-Sassandra", "Savanes", "Vallée du Bandama", "Moyen-Comoé", "18 Montagnes", "Lacs", "Zanzan", "Bas-Sassandra", "Denguélé", "N'zi-Comoé", "Marahoué", "Sud-Comoé", "Worodougou", "Sud-Bandama", "Agnéby-Tiassa", "Bafing", "Gbêkê", "Fromager", "Moyen-Cavally", "Nawa", "Indénié-Djuablin", "Bounkani", "Moronou", "Gbôklé", "Iffou", "Bagoué", "Tchologo", "Poro", "Kabadougou", "Béré", "Korhogo"], zoneTypes: "Regions" }],
  ["Cook Islands", "CK", 682, "+...-..-...", "🇨🇰", { Islands: ["Aitutaki", "Atiu", "Mangaia", "Manihiki", "Mauke", "Mitiaro", "Nassau", "Palmerston", "Penrhyn", "Pukapuka", "Rakahanga", "Rarotonga", "Suwarrow", "Takutea"], Districts: ["Avarua", "Matavera", "Ngatangiia", "Takitumu"], zoneTypes: ["Districts", "Islands"] }],
  ["Chile", "CL", 56, "+..-.-....-....", "🇨🇱", { States: ["Arica y Parinacota", "Tarapacá", "Antofagasta", "Atacama", "Coquimbo", "Valparaíso", "Región Metropolitana de Santiago", "Libertador General Bernardo O'Higgins", "Maule", "Ñuble", "Biobío", "La Araucanía", "Los Ríos", "Los Lagos", "Aysén", "Magallanes y de la Antártica Chilena"], zoneTypes: "States" }],
  ["Cameroon (Cameroun)", "CM", 237, "+...-....-....", "🇨🇲", { Regions: ["Adamaoua", "Centre", "East", "Far North", "Littoral", "North", "Northwest", "South", "Southwest", "West"], zoneTypes: "Regions" }],
  ["China (中国)", "CN", 86, "+.. ..-........", "🇨🇳", { Provinces: ["Anhui", "Fujian", "Gansu", "Guangdong", "Guizhou", "Hainan", "Hebei", "Heilongjiang", "Henan", "Hubei", "Hunan", "Jiangsu", "Jiangxi", "Jilin", "Liaoning", "Qinghai", "Shaanxi", "Shandong", "Shanxi", "Sichuan", "Yunnan", "Zhejiang"], Municipalities: ["Beijing", "Chongqing", "Shanghai", "Tianjin"], "Autonomous Regions": ["Guangxi", "Inner Mongolia", "Ningxia", "Tibet", "Xinjiang"], "Special Administrative Regions": ["Hong Kong", "Macau"], zoneTypes: ["Autonomous Regions", "Municipalities", "Provinces", "Special Administrative Regions"] }],
  ["Colombia", "CO", 57, "+..(...)...-....", "🇨🇴", { States: ["Amazonas", "Antioquia", "Arauca", "Atlántico", "Bolívar", "Boyacá", "Caldas", "Caquetá", "Casanare", "Cauca", "Cesar", "Chocó", "Córdoba", "Cundinamarca", "Guainía", "Guaviare", "Huila", "La Guajira", "Magdalena", "Meta", "Nariño", "Norte de Santander", "Putumayo", "Quindío", "Risaralda", "San Andrés, Providencia y Santa Catalina", "Santander", "Sucre", "Tolima", "Valle del Cauca", "Vaupés", "Vichada"], zoneTypes: "States" }],
  ["Costa Rica", "CR", 506, "+... ....-....", "🇨🇷", { Provinces: ["San José", "Alajuela", "Cartago", "Heredia", "Guanacaste", "Puntarenas", "Limón"], zoneTypes: "Provinces" }],
  ["Cuba", "CU", 53, "+..-.-...-....", "🇨🇺", { Provinces: ["Pinar del Río", "Artemisa", "La Habana", "Mayabeque", "Matanzas", "Cienfuegos", "Villa Clara", "Sancti Spíritus", "Ciego de Ávila", "Camagüey", "Las Tunas", "Holguín", "Granma", "Santiago de Cuba", "Guantánamo", "Isla de la Juventud"], zoneTypes: "Provinces" }],
  ["Cape Verde (Kabu Verdi)", "CV", 238, "+...(...)..-..", "🇨🇻", { Regions: ["Barlavento Islands", "Sotavento Islands"], zoneTypes: "Regions" }],
  ["Curaçao", "CW", 599, "+...-...-....", "🇨🇼", { Regions: ["Willemstad", "Bandabou", "Bandariba"], zoneTypes: "Regions" }, 0],
  ["Christmas Island", "CX", 61, "+.. . .... ....", "🇨🇽", null],
  ["Cyprus (Κύπρος)", "CY", 357, "+...-..-...-...", "🇨🇾", { Regions: ["Nicosia", "Limassol", "Larnaca", "Paphos", "Famagusta"], zoneTypes: "Regions" }],
  ["Czech Republic (Česká republika)", "CZ", 420, "+...(...)...-...", "🇨🇿", { Regions: ["Prague", "Central Bohemian Region", "South Bohemian Region", "Plzeň Region", "Karlovy Vary Region", "Ústí nad Labem Region", "Liberec Region", "Hradec Králové Region", "Pardubice Region", "Olomouc Region", "Moravian-Silesian Region", "South Moravian Region", "Zlín Region", "Vysočina Region"], zoneTypes: "Regions" }],
  ["Germany (Deutschland)", "DE", 49, "+.. ... .......", "🇩🇪", { States: ["Baden-Württemberg", "Bavaria", "Berlin", "Brandenburg", "Bremen", "Hamburg", "Hesse", "Lower Saxony", "Mecklenburg-Vorpommern", "North Rhine-Westphalia", "Rhineland-Palatinate", "Saarland", "Saxony", "Saxony-Anhalt", "Schleswig-Holstein", "Thuringia"], zoneTypes: "States" }],
  ["Djibouti", "DJ", 253, "+...-..-..-..-..", "🇩🇯", { Regions: ["Djibouti City", "Ali Sabieh", "Dikhil", "Arta", "Tadjourah", "Obock"], zoneTypes: "Regions" }],
  ["Denmark (Danmark)", "DK", 45, "+.. .. .. .. ..", "🇩🇰", { Regions: ["Capital Region of Denmark", "Region Zealand", "Region of Southern Denmark", "Central Denmark Region", "North Denmark Region"], zoneTypes: "Regions" }],
  ["Dominica", "DM", 1767, "+.(...)...-....", "🇩🇲", { Regions: ["Saint Andrew Parish", "Saint David Parish", "Saint George Parish", "Saint John Parish", "Saint Joseph Parish", "Saint Luke Parish", "Saint Mark Parish", "Saint Patrick Parish", "Saint Paul Parish", "Saint Peter Parish"], zoneTypes: "Regions" }],
  ["Dominican Republic (República Dominicana)", "DO", 1, "+.(...)...-....", "🇩🇴", { Provinces: ["Azua", "Bahoruco", "Barahona", "Dajabón", "Distrito Nacional", "Duarte", "Elías Piña", "El Seibo", "Espaillat", "Hato Mayor", "Hermanas Mirabal", "Independencia", "La Altagracia", "La Romana", "La Vega", "María Trinidad Sánchez", "Monseñor Nouel", "Monte Cristi", "Monte Plata", "Pedernales", "Peravia", "Puerto Plata", "Samaná", "San Cristóbal", "San José de Ocoa", "San Juan", "San Pedro de Macorís", "Sánchez Ramírez", "Santiago", "Santiago Rodríguez", "Santo Domingo", "Valverde"], zoneTypes: "Provinces" }, 2, ["809", "829", "849"]],
  ["Algeria (‫الجزائر‬‎)", "DZ", 213, "+...-..-...-....", '🇩🇿', { Regions: ["Adrar", "Chlef", "Laghouat", "Oum El Bouaghi", "Batna", "Béjaïa", "Biskra", "Béchar", "Blida", "Bouira", "Tamanrasset", "Tébessa", "Tlemcen", "Tiaret", "Tizi Ouzou", "Alger", "Djelfa", "Jijel", "Sétif", "Saïda", "Skikda", "Sidi Bel Abbès", "Annaba", "Guelma", "Constantine", "Médéa", "Mostaganem", "M'Sila", "Mascara", "Ouargla", "Oran", "El Bayadh", "Illizi", "Bordj Bou Arréridj", "Boumerdès", "El Tarf", "Tindouf", "Tissemsilt", "El Oued", "Khenchela", "Souk Ahras", "Tipaza", "Mila", "Aïn Defla", "Naâma", "Aïn Témouchent", "Ghardaïa", "Relizane"], zoneTypes: "Regions" }],
  ["Ecuador", "EC", 593, "+...-.-...-....", "🇪🇨", { Provinces: ["Azuay", "Bolivar", "Cañar", "Carchi", "Chimborazo", "Cotopaxi", "El Oro", "Esmeraldas", "Galapagos", "Guayas", "Imbabura", "Loja", "Los Rios", "Manabi", "Morona Santiago", "Napo", "Orellana", "Pastaza", "Pichincha", "Santa Elena", "Santo Domingo de los Tsachilas", "Sucumbios", "Tungurahua", "Zamora Chinchipe"], zoneTypes: "Provinces" }],
  ["Estonia (Eesti)", "EE", 372, "+...-...-....", "🇪🇪", { Counties: ["Harju County", "Hiiu County", "Ida-Viru County", "Järva County", "Jõgeva County", "Lääne County", "Lääne-Viru County", "Põlva County", "Pärnu County", "Rapla County", "Saare County", "Tartu County", "Valga County", "Viljandi County", "Võru County"], zoneTypes: "Counties" }],
  ["Egypt (‫مصر‬‎)", "EG", 20, "+..(...)...-....", "🇪🇬", { Governorates: ["Alexandria", "Aswan", "Asyut", "Beheira", "Beni Suef", "Cairo", "Dakahlia", "Damietta", "Faiyum", "Gharbia", "Giza", "Ismailia", "Kafr El Sheikh", "Luxor", "Matruh", "Minya", "Monufia", "New Valley", "North Sinai", "Port Said", "Qalyubia", "Qena", "Red Sea", "Sharqia", "Sohag", "South Sinai", "Suez"], zoneTypes: "Governorates" }],
  ["Western Sahara", "EH", 212, "+...-..-....", "🇪🇭", { Provinces: ["Laayoune", "Dakhla", "Smara", "Boujdour", "Aousserd"], zoneTypes: "Provinces" }],
  ["Eritrea", "ER", 291, "+...-.-...-...", "🇪🇷", { Regions: ["Anseba", "Debub", "Gash-Barka", "Maekel", "Northern Red Sea", "Southern Red Sea"], zoneTypes: "Regions" }],
  ["Ethiopia", "ET", 251, "+...-..-...-....", "🇪🇹", { Regions: ["Addis Ababa", "Afar", "Amhara", "Benishangul-Gumuz", "Dire Dawa", "Gambela", "Harari", "Oromia", "Sidama", "Somali", "Southern Nations, Nationalities, and Peoples' Region", "Tigray"], zoneTypes: "Regions" }],
  ["Finland (Suomi)", "FI", 358, "+... .. .... ....", "🇫🇮", { Regions: ["Åland Islands", "Central Finland", "Central Ostrobothnia", "Eastern Finland", "Kainuu", "Kanta-Häme", "Kymenlaakso", "Lapland", "North Karelia", "Northern Ostrobothnia", "Northern Savonia", "Ostrobothnia", "Päijänne Tavastia", "Pirkanmaa", "Satakunta", "South Karelia", "Southern Ostrobothnia", "Southern Savonia", "Tavastia Proper", "Uusimaa", "Varsinais-Suomi"], zoneTypes: "Regions" }],
  ["Fiji", "FJ", 679, "+...-..-.....", "🇫🇯", { Divisions: ["Central", "Eastern", "Northern", "Western"], zoneTypes: "Divisions" }],
  ["Falkland Islands (Islas Malvinas)", "FK", 500, "+...-.....", "🇫🇰", { Regions: ["East Falkland", "West Falkland", "Staten Island"], zoneTypes: "Regions" }],
  ["Micronesia", "FM", 691, "+...-...-....", "🇫🇲", { States: ["Chuuk", "Kosrae", "Pohnpei", "Yap"], zoneTypes: "States" }],
  ["Faroe Islands (Føroyar)", "FO", 298, "+...-...-...", "🇫🇴", { Municipalities: ["Tórshavn", "Klaksvík", "Runavík", "Eystur", "Vágar"], zoneTypes: "Municipalities" }],
  ["France", "FR", 33, "+.. . .. .. .. ..", "🇫🇷", { Regions: ["Auvergne-Rhône-Alpes", "Bourgogne-Franche-Comté", "Brittany", "Centre-Val de Loire", "Corsica", "Grand Est", "Hauts-de-France", "Île-de-France", "Normandy", "Nouvelle-Aquitaine", "Occitanie", "Pays de la Loire", "Provence-Alpes-Côte d'Azur"], zoneTypes: "Regions" }],
  ["Gabon", "GA", 241, "+...-.-..-..-..", "🇬🇦", { Provinces: ["Estuaire", "Haut-Ogooué", "Moyen-Ogooué", "Ngounié", "Nyanga", "Ogooué-Ivindo", "Ogooué-Lolo", "Ogooué-Maritime", "Woleu-Ntem"], zoneTypes: "Provinces" }],
  ["United Kingdom", "GB", 44, "+.. .... ......", "🇬🇧", { States: ["England", "Scotland", "Wales", "Northern Ireland"], zoneTypes: "States" }],
  ["Grenada", "GD", 1473, "+.(...)...-....", "🇬🇩", { Parishes: ["Saint Andrew", "Saint David", "Saint George", "Saint John", "Saint Mark", "Saint Patrick"], zoneTypes: "Parishes" }],
  ["Georgia (საქართველო)", "GE", 995, "+...(...)...-...", "🇬🇪", { Regions: ["Abkhazia", "Adjara", "Guria", "Imereti", "Kakheti", "Kvemo Kartli", "Mtskheta-Mtianeti", "Racha-Lechkhumi and Kvemo Svaneti", "Samegrelo-Zemo Svaneti", "Samtskhe-Javakheti", "Shida Kartli", "Tbilisi"], zoneTypes: "Regions" }],
  ["French Guiana (Guyane française)", "GF", 594, "+...-.....-....", "🇬🇫", { Arrondissements: ["Cayenne", "Saint-Laurent-du-Maroni", "Saint-Georges"], Communes: ['Awala-Yalimapo', 'Mana, French Guiana', 'Saint-Laurent-du-Maroni', 'Apatou', 'Grand-Santi', 'Papaïchton', 'Saül, French Guiana', 'Maripasoula', 'Camopi', 'Saint-Georges, French Guiana', 'Ouanary', 'Régina', 'Roura, French Guiana', 'Saint-Élie', 'Iracoubo', 'Sinnamary', 'Kourou', 'Macouria', 'Montsinéry-Tonnegrande', 'Matoury', 'Cayenne', 'Remire-Montjoly'], zoneTypes: ["Arrondissements", "Communes"] }],
  ["Guernsey", "GG", 44, "+.. (.) .... ......", "🇬🇬", { Parishes: ["Castel", "Forest", "St. Andrew", "St. Martin", "St. Peter Port", "St. Pierre du Bois", "St. Sampson", "St. Saviour", "Torteval", "Vale"], zoneTypes: "Parishes" }],
  ["Ghana (Gaana)", "GH", 233, "+...(...)...-...", "🇬🇭", { Regions: ["Ashanti", "Brong-Ahafo", "Central", "Eastern", "Greater Accra", "Northern", "Upper East", "Upper West", "Volta", "Western"], zoneTypes: "Regions" }],
  ["Gibraltar", "GI", 350, "+...-...-.....", "🇬🇮", { Districts: ["East Side", "North District", "South District", "Town Area", "Westside"], zoneTypes: "Districts" }],
  ["Greenland (Kalaallit Nunaat)", "GL", 299, "+...-..-..-..", "🇬🇱", { Municipalities: ["Kujalleq", "Qaasuitsup", "Qeqqata", "Sermersooq"], zoneTypes: "Municipalities" }],
  ["Gambia", "GM", 220, "+...(...)..-..", "🇬🇲", { Divisions: ["Banjul", "Lower River", "Central River", "North Bank", "Upper River", "West Coast"], zoneTypes: "Divisions" }],
  ["Guinea (Guinée)", "GN", 224, "+...-..-...-...", "🇬🇳", { Regions: ["Boké", "Conakry", "Faranah", "Kankan", "Kindia", "Labé", "Mamou", "Nzérékoré"], zoneTypes: "Regions" }],
  ["Guadeloupe", "GP", 590, "+... ... .. .. ..", "🇬🇵", { Arrondissements: ["Basse-Terre", "Pointe-à-Pitre"], Communes: ['Les Abymes', 'Anse-Bertrand', 'Baie-Mahault', 'Baillif', 'Basse-Terre', 'Bouillante', 'Capesterre-Belle-Eau', 'Capesterre-de-Marie-Galante', 'Deshaies', 'La Désirade (commune)', 'Le Gosier', 'Gourbeyre', 'Goyave, Guadeloupe', 'Grand-Bourg', 'Lamentin', "Morne-à-l'Eau", 'Le Moule', 'Petit-Bourg', 'Petit-Canal', 'Pointe-à-Pitre', 'Pointe-Noire, Guadeloupe', 'Port-Louis, Guadeloupe', 'Saint-Claude, Guadeloupe', 'Saint-François, Guadeloupe', 'Saint-Louis, Guadeloupe', 'Sainte-Anne, Guadeloupe', 'Sainte-Rose, Guadeloupe', 'Terre-de-Bas', 'Terre-de-Haut', 'Trois-Rivières, Guadeloupe', 'Vieux-Fort, Guadeloupe', 'Vieux-Habitants', 'Saint Barthélemy', 'Saint Martin (France)'], Cantons: ["Les Abymes-1", "Les Abymes-2", "Les Abymes-3", "Baie-Mahault-1", "Baie-Mahault-2", "Basse-Terre", "Capesterre-Belle-Eau", "Le Gosier", "Lamentin", "Marie-Galante", "Morne-à-l'Eau", "Le Moule", "Petit-Bourg", "Petit-Canal", "Pointe-à-Pitre", "Sainte-Anne", "Sainte-Rose-1", "Sainte-Rose-2", "Saint-François", "Trois-Rivières", "Vieux-Habitants"], zoneTypes: ["Arrondissements", "Cantons", "Communes"] }, 0],
  ["Equatorial Guinea (Guinea Ecuatorial)", "GQ", 240, "+...-..-...-....", "🇬🇶", { Provinces: ["Annobón", "Bioko Norte", "Bioko Sur", "Centro Sur", "Kié-Ntem", "Litoral", "Wele-Nzas"], zoneTypes: "Provinces" }],
  ["Greece (Ελλάδα)", "GR", 30, "+..(...)...-....", "🇬🇷", { Regions: ["Attica", "Central Greece", "Central Macedonia", "Crete", "Eastern Macedonia and Thrace", "Epirus", "Ionian Islands", "North Aegean", "Peloponnese", "South Aegean", "Thessaly", "Western Greece", "Western Macedonia"], zoneTypes: "Regions" }],
  ["South Georgia and the South Sandwich Islands", "GS", 500, "+... .....", "🇬🇸", null],
  ["Guatemala", "GT", 502, "+... ....-....", "🇬🇹", { Departments: ["Alta Verapaz", "Baja Verapaz", "Chimaltenango", "Chiquimula", "El Progreso", "Escuintla", "Guatemala", "Huehuetenango", "Izabal", "Jalapa", "Jutiapa", "Petén", "Quetzaltenango", "Quiché", "Retalhuleu", "Sacatepéquez", "San Marcos", "Santa Rosa", "Sololá", "Suchitepéquez", "Totonicapán", "Zacapa"], zoneTypes: "Departments" }],
  ["Guam", "GU", 1671, "+.(...)...-....", "🇬🇺", { Villages: ["Agana Heights", "Agat", "Asan", "Barrigada", "Chalan Pago-Ordot", "Dededo", "Hagatna", "Inarajan", "Mangilao", "Merizo", "Mongmong-Toto-Maite", "Piti", "Santa Rita", "Sinajana", "Talofofo", "Tamuning", "Umatac", "Yigo", "Yona"], zoneTypes: "Villages" }],
  ["Guinea-Bissau (Guiné Bissau)", "GW", 245, "+...-.-......", "🇬🇼", { Regions: ["Bafatá", "Biombo", "Bolama", "Cacheu", "Gabú", "Oio", "Quinara", "Tombali"], zoneTypes: "Regions" }],
  ["Guyana", "GY", 592, "+...-...-....", "🇬🇾", { Regions: ["Barima-Waini", "Cuyuni-Mazaruni", "Demerara-Mahaica", "East Berbice-Corentyne", "Essequibo Islands-West Demerara", "Mahaica-Berbice", "Pomeroon-Supenaam", "Potaro-Siparuni", "Upper Demerara-Berbice", "Upper Takutu-Upper Essequibo"], zoneTypes: "Regions" }],
  ["Hong Kong (香港)", "HK", 852, "+... .... ....", "🇭🇰", { Districts: ["Central and Western", "Eastern", "Islands", "Kowloon City", "Kwai Tsing", "Kwun Tong", "North", "Sai Kung", "Sha Tin", "Sham Shui Po", "Southern", "Tai Po", "Tsuen Wan", "Tuen Mun", "Wan Chai", "Wong Tai Sin", "Yau Tsim Mong", "Yuen Long"], zoneTypes: "Districts" }],
  ["Heard Island and McDonald Islands", "HM", 672, "", "🇭🇲", null],
  ["Honduras", "HN", 504, "+...-....-....", "🇭🇳", { Departments: ["Atlántida", "Choluteca", "Colón", "Comayagua", "Copán", "Cortés", "El Paraíso", "Francisco Morazán", "Gracias a Dios", "Intibucá", "Islas de la Bahía", "La Paz", "Lempira", "Ocotepeque", "Olancho", "Santa Bárbara", "Valle", "Yoro"], zoneTypes: "Departments" }],
  ["Croatia (Hrvatska)", "HR", 385, "+...-..-...-...", "🇭🇷", { Counties: ["Zagreb County", "Krapina-Zagorje County", "Sisak-Moslavina County", "Karlovačka County", "Varaždin County", "Koprivnica-Križevci County", "Bjelovar-Bilogora County", "Primorje-Gorski Kotar County", "Lika-Senj County", "Virovitica-Podravina County", "Požega-Slavonia County", "Brod-Posavina County", "Zadar County", "Osijek-Baranja County", "Šibenik-Knin County", "Vukovar-Syrmia County", "Split-Dalmatia County", "Istria County", "Dubrovnik-Neretva County", "Međimurje County", "Grad Zagreb"], zoneTypes: "Counties" }],
  ["Haiti", "HT", 509, "+... ....-....", "🇭🇹", { Departments: ["Artibonite", "Centre", "Grand'Anse", "Nippes", "Nord", "Nord-Est", "Nord-Ouest", "Ouest", "Sud", "Sud-Est"], zoneTypes: "Departments" }],
  ["Hungary (Magyarország)", "HU", 36, "+..(...)...-...", "🇭🇺", { Counties: ["Bács-Kiskun", "Baranya", "Békés", "Borsod-Abaúj-Zemplén", "Csongrád-Csanád", "Fejér", "Győr-Moson-Sopron", "Hajdú-Bihar", "Heves", "Jász-Nagykun-Szolnok", "Komárom-Esztergom", "Nógrád", "Pest", "Somogy", "Szabolcs-Szatmár-Bereg", "Tolna", "Vas", "Veszprém", "Zala"], zoneTypes: "Counties" }],
  ["Indonesia", "ID", 62, "+..-..-...-..", "🇮🇩", { Provinces: ["Aceh", "Bali", "Bangka Belitung", "Banten", "Bengkulu", "Central Java", "Central Kalimantan", "Central Sulawesi", "East Java", "East Kalimantan", "East Nusa Tenggara", "Gorontalo", "Jakarta", "Jambi", "Lampung", "Maluku", "North Kalimantan", "North Maluku", "North Sulawesi", "North Sumatra", "Papua", "Riau", "Riau Islands", "South Kalimantan", "South Sulawesi", "South Sumatra", "Southeast Sulawesi", "West Java", "West Kalimantan", "West Nusa Tenggara", "West Papua", "West Sulawesi", "West Sumatra", "Yogyakarta"], zoneTypes: "Provinces" }],
  ["Ireland", "IE", 353, "+... .. .......", "🇮🇪", { Counties: ["Carlow", "Cavan", "Clare", "Cork", "Donegal", "Dublin", "Galway", "Kerry", "Kildare", "Kilkenny", "Laois", "Leitrim", "Limerick", "Longford", "Louth", "Mayo", "Meath", "Monaghan", "Offaly", "Roscommon", "Sligo", "Tipperary", "Waterford", "Westmeath", "Wexford", "Wicklow"], zoneTypes: "Counties" }],
  ["Israel (‫ישראל‬‎)", "IL", 972, "+...-.-...-....", "🇮🇱", { Districts: ["Central", "Haifa", "Jerusalem", "Northern", "Southern", "Tel Aviv"], zoneTypes: "Districts" }],
  ["Isle of Man", "IM", 44, "+.. .... ... ...", "🇮🇲", { Parishes: ["Andreas", "Arbory", "Ballaugh", "Braddan", "Bride", "Castletown", "Douglas", "German", "Jurby", "Laxey", "Lezayre", "Lonan", "Malew", "Marown", "Maughold", "Michael", "Onchan", "Patrick", "Peel", "Port Erin", "Port St Mary", "Ramsey", "Rushen"], Sheadings: ["Garff", "Glenfaba", "Middle", "Peel", "Rushen"], zoneTypes: ["Parishes", "Sheadings"] }],
  ["India (भारत)", "IN", 91, "+.. .....-.....", "🇮🇳", { States: ["Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh", "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka", "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal"], zoneTypes: "States" }],
  ["British Indian Ocean Territory", "IO", 246, "+...-...-....", "🇮🇴", null],
  ["Iraq (‫العراق‬‎)", "IQ", 964, "+...(...)...-....", "🇮🇶", { Governorates: ["Al Anbar", "Babil", "Baghdad", "Basra", "Dhi Qar", "Diyala", "Dohuk", "Erbil", "Karbala", "Kirkuk", "Maysan", "Muthanna", "Najaf", "Nineveh", "Qadisiyyah", "Saladin", "Sulaymaniyah", "Wasit"], zoneTypes: "Governorates" }],
  ["Iran (‫ایران‬‎)", "IR", 98, "+..(...)...-....", "🇮🇷", { Provinces: ["Alborz", "Ardabil", "Bushehr", "Chaharmahal and Bakhtiari", "East Azerbaijan", "Isfahan", "Fars", "Gilan", "Golestan", "Hamadan", "Hormozgan", "Ilam", "Kerman", "Kermanshah", "Khuzestan", "Kohgiluyeh and Boyer-Ahmad", "Kurdistan", "Lorestan", "Markazi", "Mazandaran", "North Khorasan", "Qazvin", "Qom", "Razavi Khorasan", "Semnan", "Sistan and Baluchestan", "South Khorasan", "Tehran", "West Azerbaijan", "Yazd", "Zanjan"], zoneTypes: "Provinces" }],
  ["Iceland (Ísland)", "IS", 354, "+... ... ....", "🇮🇸", { Regions: ["Capital Region", "Southern Peninsula", "Western Region", "Westfjords", "Northwest Region", "Northeast Region", "East Region", "South Region"], zoneTypes: "Regions" }],
  ["Italy (Italia)", "IT", 39, "+.. ... ......", "🇮🇹", { Regions: ["Abruzzo", "Basilicata", "Calabria", "Campania", "Emilia-Romagna", "Friuli-Venezia Giulia", "Lazio", "Liguria", "Lombardia", "Marche", "Molise", "Piemonte", "Puglia", "Sardegna", "Sicilia", "Toscana", "Trentino-Alto Adige", "Umbria", "Valle d'Aosta", "Veneto"], zoneTypes: "Regions" }, 0],
  ["Jersey", "JE", 44, "+.. .... ......", "🇯🇪", { Parishes: ["Grouville", "Saint Brelade", "Saint Clement", "Saint Helier", "Saint John", "Saint Lawrence", "Saint Martin", "Saint Mary", "Saint Ouen", "Saint Peter", "Saint Saviour", "Trinity"], zoneTypes: "Parishes" }],
  ["Jamaica", "JM", 1876, "+.(...)...-....", "🇯🇲", { Parishes: ["Clarendon", "Hanover", "Kingston", "Manchester", "Portland", "Saint Andrew", "Saint Ann", "Saint Catherine", "Saint Elizabeth", "Saint James", "Saint Mary", "Saint Thomas", "Trelawny", "Westmoreland"], zoneTypes: "Parishes" }],
  ["Jordan (‫الأردن‬‎)", "JO", 962, "+...-.-....-....", "🇯🇴", { Governorates: ["Ajloun", "Amman", "Aqaba", "Balqa", "Irbid", "Jarash", "Karak", "Ma'an", "Madaba", "Mafraq", "Tafilah", "Zarqa"], zoneTypes: "Governorates" }],
  ["Japan (日本)", "JP", 81, "+.. ... .. ....", "🇯🇵", { Prefectures: ["Aichi", "Akita", "Aomori", "Chiba", "Ehime", "Fukui", "Fukuoka", "Fukushima", "Gifu", "Gunma", "Hiroshima", "Hokkaido", "Hyogo", "Ibaraki", "Ishikawa", "Iwate", "Kagawa", "Kagoshima", "Kanagawa", "Kochi", "Kumamoto", "Kyoto", "Mie", "Miyagi", "Miyazaki", "Nagano", "Nagasaki", "Nara", "Niigata", "Oita", "Okayama", "Okinawa", "Osaka", "Saga", "Saitama", "Shiga", "Shimane", "Shizuoka", "Tochigi", "Tokushima", "Tokyo", "Tottori", "Toyama", "Wakayama", "Yamagata", "Yamaguchi", "Yamanashi"], zoneTypes: "Prefectures" }],
  ["Kenya", "KE", 254, "+...-...-......", "🇰🇪", { Counties: ["Baringo", "Bomet", "Bungoma", "Busia", "Elgeyo-Marakwet", "Embu", "Garissa", "Homa Bay", "Isiolo", "Kajiado", "Kakamega", "Kericho", "Kiambu", "Kilifi", "Kirinyaga", "Kisii", "Kisumu", "Kitui", "Kwale", "Laikipia", "Lamu", "Machakos", "Makueni", "Mandera", "Marsabit", "Meru", "Migori", "Mombasa", "Murang'a", "Nairobi", "Nakuru", "Nandi", "Narok", "Nyamira", "Nyandarua", "Nyeri", "Samburu", "Siaya", "Taita-Taveta", "Tana River", "Tharaka-Nithi", "Trans-Nzoia", "Turkana", "Uasin Gishu", "Vihiga", "Wajir", "West Pokot"], zoneTypes: "Counties" }],
  ["Kyrgyzstan (Кыргызстан)", "KG", 996, "+...(...)...-...", "🇰🇬", { Regions: ["Batken", "Chuy", "Issyk-Kul", "Jalal-Abad", "Naryn", "Osh", "Talas"], zoneTypes: "Regions" }],
  ["Cambodia (កម្ពុជា)", "KH", 855, "+...-..-...-...", "🇰🇭", { Provinces: ["Banteay Meanchey", "Battambang", "Kampong Cham", "Kampong Chhnang", "Kampong Speu", "Kampong Thom", "Kampot", "Kandal", "Kep", "Koh Kong", "Kratie", "Mondulkiri", "Oddar Meanchey", "Pailin", "Phnom Penh", "Preah Sihanouk", "Preah Vihear", "Pursat", "Ratanakiri", "Siem Reap", "Stung Treng", "Svay Rieng", "Takéo", "Tboung Khmum"], zoneTypes: "Provinces" }],
  ["Kiribati", "KI", 686, "+...-..-...", "🇰🇮", { Islands: ["Banaba", "Gilbert Islands", "Line Islands", "Phoenix Islands"], zoneTypes: "Islands" }],
  ["Comoros (‫جزر القمر‬‎)", "KM", 269, "+...-..-.....", "🇰🇲", { Regions: ["Grande Comore", "Anjouan", "Mohéli"], zoneTypes: "Regions" }],
  ["Saint Kitts and Nevis", "KN", 1869, "+.(...)...-....", "🇰🇳", { Parishes: ["Christ Church Nichola Town", "Saint Anne Sandy Point", "Saint George Basseterre", "Saint John Capisterre", "Saint Mary Cayon", "Saint Paul Capisterre", "Saint Peter Basseterre", "Saint Thomas Lowland", "Saint Thomas Middle Island", "Trinity Palmetto Point"], zoneTypes: "Parishes" }],
  ["North Korea (조선 민주주의 인민 공화국)", "KP", 850, "+...-...-...", "🇰🇵", { Provinces: ["Chagang", "North Hamgyong", "South Hamgyong", "North Hwanghae", "South Hwanghae", "Kangwon", "North Pyongan", "South Pyongan", "Ryanggang"], zoneTypes: "Provinces" }],
  ["Kuwait (‫الكويت‬‎)", "KW", 965, "+...-....-....", "🇰🇼", { Governorates: ["Al Ahmadi", "Al Farwaniyah", "Al Jahra", "Capital", "Hawalli", "Mubarak Al-Kabeer"], zoneTypes: "Governorates" }],
  ["Cayman Islands", "KY", 1345, "+.(...)...-....", "🇰🇾", { Districts: ["Bodden Town", "Cayman Brac", "East End", "George Town", "Little Cayman", "North Side", "Sister Islands", "West Bay"], zoneTypes: "Districts" }],
  ["Kazakhstan (Казахстан)", "KZ", 7, "+. ... ...-..-..", "🇰🇿", { Regions: ["Almaty", "Aqmola", "Aqtobe", "Atyrau", "East Kazakhstan", "Mangystau", "North Kazakhstan", "Nur-Sultan", "Pavlodar", "Qaragandy", "Qostanay", "Qyzylorda", "Shymkent", "Turkestan", "West Kazakhstan"], zoneTypes: "Regions" }, 1],
  ["Laos (ລາວ)", "LA", 856, "+...-..-...-...", "🇱🇦", { Provinces: ["Attapeu", "Bokeo", "Bolikhamsai", "Champasak", "Houaphanh", "Khammouane", "Luang Namtha", "Luang Prabang", "Oudomxay", "Phongsaly", "Sainyabuli", "Salavan", "Savannakhet", "Sekong", "Vientiane", "Vientiane Prefecture", "Xaisomboun", "Xaisomboun Special Zone", "Xiangkhouang", "Xekong", "Xiangkhouang"], zoneTypes: "Provinces" }],
  ["Lebanon (‫لبنان‬‎)", "LB", 961, "+...-.-...-...", "🇱🇧", { Governorates: ["Akkar", "Baalbek-Hermel", "Beirut", "Beqaa", "Mount Lebanon", "Nabatieh", "North", "South"], zoneTypes: "Governorates" }],
  ["Saint Lucia", "LC", 1758, "+.(...)...-....", "🇱🇨", { Districts: ["Anse-la-Raye", "Canaries", "Castries", "Choiseul", "Dennery", "Gros Islet", "Laborie", "Micoud", "Soufrière", "Vieux Fort"], zoneTypes: "Districts" }],
  ["Liechtenstein", "LI", 423, "+...(...)...-....", "🇱🇮", { Municipalities: ["Balzers", "Eschen", "Gamprin", "Mauren", "Planken", "Ruggell", "Schaan", "Schellenberg", "Triesen", "Triesenberg", "Vaduz"], zoneTypes: "Municipalities" }],
  ["Liberia", "LR", 231, "+...-..-...-...", "🇱🇷", { Counties: ["Bomi", "Bong", "Gbarpolu", "Grand Bassa", "Grand Cape Mount", "Grand Gedeh", "Grand Kru", "Lofa", "Margibi", "Maryland", "Montserrado", "Nimba", "River Cess", "River Gee", "Sinoe"], zoneTypes: "Counties" }],
  ["Lesotho", "LS", 266, "+...-.-...-....", "🇱🇸", { Districts: ["Berea", "Butha-Buthe", "Leribe", "Mafeteng", "Maseru", "Mohale's Hoek", "Mokhotlong", "Qacha's Nek", "Quthing", "Thaba-Tseka"], zoneTypes: "Districts" }],
  ["Lithuania (Lietuva)", "LT", 370, "+...(...)..-...", "🇱🇹", { Counties: ["Alytus County", "Kaunas unknownounty", "Klaipeda County", "Marijampole County", "Panevezys County", "Siauliai County", "Taurage County", "Telsiai County", "Utena County", "Vilnius County"], zoneTypes: "Counties" }],
  ["Luxembourg", "LU", 352, "+...(...)...-...", "🇱🇺", { Cantons: ["Diekirch", "Grevenmacher", "Luxembourg"], zoneTypes: "Cantons" }],
  ["Latvia (Latvija)", "LV", 371, "+...-..-...-...", "🇱🇻", { Regions: ["Aizkraukle", "Aluksne", "Balvi", "Bauska", "Cesis", "Daugavpils", "Dobele", "Gulbene", "Jekabpils", "Jelgava", "Jurmala", "Kraslava", "Kuldiga", "Liepaja", "Limbazi", "Ludza", "Madona", "Ogre", "Preili", "Rezekne", "Riga", "Saldus", "Talsi", "Tukums", "Valka", "Valmiera", "Ventspils"], zoneTypes: "Regions" }],
  ["Libya (‫ليبيا‬‎)", "LY", 218, "+...-..-...-...", "🇱🇾", { Regions: ["Al Wahat", "Benghazi", "Derna", "Ghat", "Jabal al Akhdar", "Jabal al Gharbi", "Jafara", "Jufra", "Kufra", "Marj", "Misrata", "Murqub", "Murzuq", "Nalut", "Nuqat al Khams", "Sabha", "Sirte", "Tripoli", "Wadi al Hayaa", "Wadi al Shatii", "Zawiya"], zoneTypes: "Regions" }],
  ["Morocco (‫المغرب‬‎)", "MA", 212, "+...-..-....-...", "🇲🇦", { Regions: ["Tanger-Tétouan-Al Hoceïma", "Oriental", "Fès-Meknès", "Rabat-Salé-Kénitra", "Béni Mellal-Khénifra", "Casablanca-Settat", "Marrakesh-Safi", "Drâa-Tafilalet", "Souss-Massa", "Guelmim-Oued Noun", "Laâyoune-Sakia El Hamra", "Dakhla-Oued Ed-Dahab"], zoneTypes: "Regions" }],
  ["Monaco", "MC", 377, "+...-..-...-...", "🇲🇨", { Districts: ["Monaco-Ville", "La Condamine", "Monte Carlo", "Fontvieille"], zoneTypes: "Districts" }],
  ["Moldova (Republica Moldova)", "MD", 373, "+...-....-....", "🇲🇩", { Regions: ["Anenii Noi", "Basarabeasca", "Briceni", "Cahul", "Călărași", "Cantemir", "Căușeni", "Cimișlia", "Criuleni", "Dondușeni", "Drochia", "Dubăsari", "Edineț", "Fălești", "Florești", "Găgăuzia", "Glodeni", "Hîncești", "Ialoveni", "Leova", "Nisporeni", "Ocnița", "Orhei", "Rezina", "Rîșcani", "Sîngerei", "Șoldănești", "Soroca", "Strășeni", "Ștefan Vodă", "Taraclia", "Telenești", "Ungheni"], zoneTypes: "Regions" }],
  ["Montenegro (Crna Gora)", "ME", 382, "+...-..-...-...", "🇲🇪", { Municipalities: ["Andrijevica", "Bar", "Berane", "Bijelo Polje", "Budva", "Cetinje", "Danilovgrad", "Gusinje", "Herceg Novi", "Kolašin", "Kotor", "Mojkovac", "Nikšić", "Petnjica", "Plav", "Pljevlja", "Plužine", "Podgorica", "Rožaje", "Šavnik", "Tivat", "Ulcinj", "Žabljak"], zoneTypes: "Municipalities" }],
  ["Saint Martin (Saint-Martin (partie française))", "MF", 590, "+... ... .. .. ..", "🇲🇫", { Parishes: ["Marigot"], zoneTypes: "Parishes" }, 2],
  ["Madagascar (Madagasikara)", "MG", 261, "+...-..-..-.....", "🇲🇬", { Provinces: ["Antananarivo", "Antsiranana", "Fianarantsoa", "Mahajanga", "Toamasina", "Toliara"], zoneTypes: "Provinces" }],
  ["Marshall Islands", "MH", 692, "+...-...-....", "🇲🇭", { Municipalities: ["Ailinglaplap", "Ailuk", "Arno", "Aur", "Bikini", "Ebon", "Enewetak", "Jabat", "Jaluit", "Kili", "Kwajalein", "Lae", "Lib", "Likiep", "Majuro", "Maloelap", "Mejit", "Mili", "Namdrik", "Namu", "Rongelap", "Ujae", "Ujelang", "Utirik", "Wotho", "Wotje"], zoneTypes: "Municipalities" }],
  ["Macedonia (FYROM) (Македонија)", "MK", 389, "+...-..-...-...", "🇲🇰", { Regions: ["Skopje", "Pelagonia", "Polog", "Vardar", "Eastern", "Southwestern", "Northeastern", "Southeastern"], zoneTypes: "Regions" }],
  ["Mali", "ML", 223, "+...-..-..-....", "🇲🇱", { Regions: ["Bamako", "Gao", "Kayes", "Kidal", "Koulikoro", "Mopti", "Segou", "Sikasso", "Tombouctou"], zoneTypes: "Regions" }],
  ["Myanmar (Burma) (မြန်မာ)", "MM", 95, "+..-...-...", "🇲🇲", { States: ["Ayeyarwady", "Bago", "Chin", "Kachin", "Kayah", "Kayin", "Magway", "Mandalay", "Mon", "Naypyidaw Union Territory", "Rakhine", "Sagaing", "Shan", "Tanintharyi", "Yangon"], Regions: ["Sagaing", "Tanintharyi", "Bago", "Magway", "Mandalay", "Yangon", "Ayeyarwady", "Kachin", "Kayah", "Kayin", "Chin", "Mon", "Rakhine", "Shan"], zoneTypes: ["Regions", "States"] }],
  ["Mongolia (Монгол)", "MN", 976, "+...-..-..-....", "🇲🇳", { Aimags: ["Arkhangai", "Bayan-Ölgii", "Bayankhongor", "Bulgan", "Darkhan-Uul", "Dornod", "Dornogovi", "Dundgovi", "Govi-Altai", "Govisümber", "Khentii", "Khovd", "Khövsgöl", "Ömnögovi", "Orkhon", "Övörkhangai", "Selenge", "Sükhbaatar", "Töv", "Uvs", "Zavkhan"], zoneTypes: "Aimags" }],
  ["Macau (澳門)", "MO", 853, "+...-....-....", "🇲🇴", { Freguesias: ["Nossa Senhora de Fátima", "Santo António", "São Lázaro", "São Lourenço", "São Francisco Xavier", "Sé", "Coloane", "Taipa"], zoneTypes: "Freguesias" }],
  ["Northern Mariana Islands", "MP", 1670, "+.(...)...-....", "🇲🇵", { Municipalities: ["Northern Islands", "Rota", "Saipan", "Tinian"], zoneTypes: "Municipalities" }],
  ["Martinique", "MQ", 596, "+...(...)..-..-..", "🇲🇶", { Arrondissements: ["Fort-de-France", "La Trinité", "Le Marin", "Le Robert", "Saint-Pierre"], Communes: ["L'Ajoupa-Bouillon", "Les Anses-d'Arlet", 'Basse-Pointe', 'Bellefontaine, Martinique', 'Le Carbet', 'Case-Pilote', 'Le Diamant', 'Ducos, Martinique', 'Fonds-Saint-Denis', 'Fort-de-France', 'Le François', "Grand'Rivière", 'Gros-Morne, Martinique', 'Le Lamentin', 'Le Lorrain', 'Macouba', 'Le Marigot', 'Le Marin', 'Le Morne-Rouge', 'Le Morne-Vert', 'Le Prêcheur', 'Rivière-Pilote', 'Rivière-Salée', 'Le Robert', 'Saint-Esprit, Martinique', 'Saint-Joseph, Martinique', 'Saint-Pierre, Martinique', 'Sainte-Anne, Martinique', 'Sainte-Luce, Martinique', 'Sainte-Marie, Martinique', 'Schœlcher', 'La Trinité, Martinique', 'Les Trois-Îlets', 'Le Vauclin'], zoneTypes: ["Arrondissements", "Communes"] }],
  ["Mauritania (‫موريتانيا‬‎)", "MR", 222, "+...-..-..-....", "🇲🇷", { Regions: ["Adrar", "Assaba", "Brakna", "Dakhlet Nouadhibou", "Gorgol", "Guidimaka", "Hodh Ech Chargui", "Hodh El Gharbi", "Inchiri", "Nouakchott Nord", "Nouakchott Ouest", "Nouakchott Sud", "Tagant", "Tiris Zemmour", "Trarza"], zoneTypes: "Regions" }],
  ["Montserrat", "MS", 1664, "+.(...)...-....", "🇲🇸", { Parishes: ["Saint Anthony", "Saint Georges", "Saint Peter"], zoneTypes: "Parishes" }],
  ["Malta", "MT", 356, "+...-....-....", "🇲🇹", { Districts: ["Gozo", "Malta"], zoneTypes: "Districts" }],
  ["Mauritius (Moris)", "MU", 230, "+...-...-....", "🇲🇺", { Districts: ["Black River", "Flacq", "Grand Port", "Moka", "Pamplemousses", "Plaines Wilhems", "Port Louis", "Rivière du Rempart", "Savanne"], zoneTypes: "Districts" }],
  ["Maldives", "MV", 960, "+...-...-....", "🇲🇻", { Atolls: ["Ari Atoll", "Faafu Atoll", "Lhaviyani Atoll", "Malé Atoll", "Baa Atoll", "Dhaalu Atoll", "Gaafu Alif Atoll", "Haa Alif Atoll", "Kaafu Atoll", "Laamu Atoll", "Meemu Atoll", "Noonu Atoll", "Raa Atoll", "Seenu Atoll", "Thaa Atoll", "Vaavu Atoll"], zoneTypes: "Atolls" }],
  ["Malawi", "MW", 265, "+...-.-....-....", "🇲🇼", { Districts: ["Balaka", "Blantyre", "Chikwawa", "Chiradzulu", "Chitipa", "Dedza", "Dowa", "Karonga", "Kasungu", "Likoma", "Lilongwe", "Machinga", "Mangochi", "Mchinji", "Mulanje", "Mwanza", "Mzimba", "Neno", "Nkhata Bay", "Nkhotakota", "Nsanje", "Ntcheu", "Ntchisi", "Phalombe", "Rumphi", "Salima", "Thyolo", "Zomba"], zoneTypes: "Districts" }],
  ["Mexico (México)", "MX", 52, "+..-..-..-....", "🇲🇽", { States: ["Aguascalientes", "Baja California", "Baja California Sur", "Campeche", "Chiapas", "Chihuahua", "Coahuila", "Colima", "Durango", "Guanajuato", "Guerrero", "Hidalgo", "Jalisco", "México", "Michoacán", "Morelos", "Nayarit", "Nuevo León", "Oaxaca", "Puebla", "Querétaro", "Quintana Roo", "San Luis Potosí", "Sinaloa", "Sonora", "Tabasco", "Tamaulipas", "Tlaxcala", "Veracruz", "Yucatán", "Zacatecas"], zoneTypes: "States" }],
  ["Malaysia", "MY", 60, "+.. ..-....-....", "🇲🇾", { States: ["Johor", "Kedah", "Kelantan", "Melaka", "Negeri Sembilan", "Pahang", "Perak", "Perlis", "Pulau Pinang", "Sabah", "Sarawak", "Selangor", "Terengganu", "Wilayah Persekutuan Kuala Lumpur", "Wilayah Persekutuan Labuan", "Wilayah Persekutuan Putrajaya"], zoneTypes: "States" }],
  ["Mozambique (Moçambique)", "MZ", 258, "+...-..-...-...", "🇲🇿", { Provinces: ["Cabo Delgado", "Gaza", "Inhambane", "Manica", "Maputo", "Nampula", "Niassa", "Sofala", "Tete", "Zambezia"], zoneTypes: "Provinces" }],
  ["Namibia (Namibië)", "NA", 264, "+...-..-...-....", "🇳🇦", { Regions: ["Erongo", "Hardap", "Karas", "Kavango East", "Kavango West", "Khomas", "Kunene", "Ohangwena", "Omaheke", "Omusati", "Oshana", "Oshikoto", "Otjozondjupa", "Zambezi"], zoneTypes: "Regions" }],
  ["New Caledonia (Nouvelle-Calédonie)", "NC", 687, "+...-..-....", "🇳🇨", { Provinces: ["South Province", "North Province", "Loyalty Islands Province"], Communes: ["Nouméa", "Mont-Dore", "Dumbéa", "Païta", "Yaté", "Bouloupari", "La Foa", "Sarraméa", "Farino", "Moindou", "Bourail", "Poya", "Koné", "Voh", "Kaala-Gomen", "Pouembout", "Poum", "Belep", "Hienghène", "Ponérihouen", "Kouaoua", "Canala", "Thio", "Yaté", "Île des Pins", "Lifou", "Maré", "Ouvéa"], zoneTypes: ["Communes", "Provinces"] }],
  ["Niger (Nijar)", "NE", 227, "+...-..-..-....", "🇳🇪", { Regions: ["Agadez", "Diffa", "Dosso", "Maradi", "Tahoua", "Tillabéri", "Zinder"], zoneTypes: "Regions" }],
  ["Norfolk Island", "NF", 672, "+...-...-...", "🇳🇫", null],
  ["Nigeria", "NG", 234, "+...-..-...-..", "🇳🇬", { States: ["Abia", "Adamawa", "Akwa Ibom", "Anambra", "Bauchi", "Bayelsa", "Benue", "Borno", "Cross River", "Delta", "Ebonyi", "Edo", "Ekiti", "Enugu", "Gombe", "Imo", "Jigawa", "Kaduna", "Kano", "Katsina", "Kebbi", "Kogi", "Kwara", "Lagos", "Nasarawa", "Niger", "Ogun", "Ondo", "Osun", "Oyo", "Plateau", "Rivers", "Sokoto", "Taraba", "Yobe", "Zamfara", "Federal Capital Territory"], zoneTypes: "States" }],
  ["Nicaragua", "NI", 505, "+...-....-....", "🇳🇮", { Departments: ["Boaco", "Carazo", "Chinandega", "Chontales", "Estelí", "Granada", "Jinotega", "León", "Madriz", "Managua", "Masaya", "Matagalpa", "Nueva Segovia", "Río San Juan", "Rivas", "Atlántico Norte", "Atlántico Sur"], zoneTypes: "Departments" }],
  ["Netherlands (Nederland)", "NL", 31, "+.. .. ........", "🇳🇱", { Provinces: ["Drenthe", "Flevoland", "Friesland", "Gelderland", "Groningen", "Limburg", "Noord-Brabant", "Noord-Holland", "Overijssel", "Utrecht", "Zeeland", "Zuid-Holland"], zoneTypes: "Provinces" }],
  ["Norway (Norge)", "NO", 47, "+.. ... .. ...", "🇳🇴", { Counties: ["Agder", "Innlandet", "Møre og Romsdal", "Nordland", "Oslo", "Rogaland", "Troms og Finnmark", "Trøndelag", "Vestfold og Telemark", "Vestland", "Viken"], zoneTypes: "Counties" }],
  ["Nepal (नेपाल)", "NP", 977, "+...-..-...-...", "🇳🇵", { Provinces: ["Province No. 1", "Province No. 2", "Bagmati Province", "Gandaki Province", "Lumbini Province", "Karnali Province", "Sudurpashchim Province"], zoneTypes: "Provinces" }],
  ["Nauru", "NR", 674, "+...-...-....", "🇳🇷", { Districts: ["Aiwo", "Anabar", "Anetan", "Anibare", "Baiti", "Boe", "Buada", "Denigomodu", "Ewa", "Ijuw", "Meneng", "Nibok", "Uaboe", "Yaren"], zoneTypes: "Districts" }],
  ["Niue", "NU", 683, "+...-....", "🇳🇺", { Villages: ["Alofi", "Avatele", "Hakupu", "Hikutavake", "Lakepa", "Makefu", "Mutalau", "Namukulu", "Tamakautoga", "Toi", "Tuapa"], zoneTypes: "Villages" }],
  ["New Zealand", "NZ", 64, "+.. ...-...-....", "🇳🇿", { Regions: ["Northland", "Auckland", "Waikato", "Bay of Plenty", "Gisborne", "Hawke's Bay", "Taranaki", "Manawatu-Whanganui", "Wellington", "Tasman", "Nelson", "Marlborough", "West Coast", "Canterbury", "Otago", "Southland"], zoneTypes: "Regions" }],
  ["Oman (‫عُمان‬‎)", "OM", 968, "+...-..-...-...", "🇴🇲", { Governorates: ["Ad Dakhiliyah", "Ad Dhahirah", "Al Batinah North", "Al Batinah South", "Al Buraimi", "Al Wusta", "Ash Sharqiyah North", "Ash Sharqiyah South", "Dhofar", "Musandam", "Muscat"], zoneTypes: "Governorates" }],
  ["Panama (Panamá)", "PA", 507, "+...-...-....", "🇵🇦", { Provinces: ["Bocas del Toro", "Chiriquí", "Coclé", "Colón", "Darién", "Emberá-Wounaan", "Guna Yala", "Herrera", "Los Santos", "Ngäbe-Buglé", "Panamá", "Panamá Oeste", "Veraguas"], zoneTypes: "Provinces" }],
  ["Peru (Perú)", "PE", 51, "+..(...)...-...", "🇵🇪", { Regions: ["Amazonas", "Áncash", "Apurímac", "Arequipa", "Ayacucho", "Cajamarca", "Callao", "Cusco", "Huancavelica", "Huánuco", "Ica", "Junín", "La Libertad", "Lambayeque", "Lima", "Loreto", "Madre de Dios", "Moquegua", "Pasco", "Piura", "Puno", "San Martín", "Tacna", "Tumbes", "Ucayali"], zoneTypes: "Regions" }],
  ["French Polynesia (Polynésie française)", "PF", 689, "+...-..-..-..", "🇵🇫", { Communes: ["Papeete", "Faaa", "Punaauia"], Subdivisions: ["Marquesas Islands", "Tuamotu-Gambier", "Tubuai Islands"], zoneTypes: ["Communes", "Subdivisions"] }],
  ["Papua New Guinea", "PG", 675, "+...(...)..-...", "🇵🇬", { Regions: ["Bougainville", "Central", "Chimbu", "Eastern Highlands", "East New Britain", "East Sepik", "Enga", "Gulf", "Hela", "Jiwaka", "Madang", "Manus", "Milne Bay", "Morobe", "New Ireland", "Northern", "Southern Highlands", "Western", "West New Britain", "West Sepik", "Western Highlands"], zoneTypes: "Regions" }],
  ["Philippines", "PH", 63, "+.. ... ....", "🇵🇭", { Regions: ["Ilocos Region", "Cagayan Valley", "Central Luzon", "Calabarzon", "Mimaropa", "Bicol Region", "Western Visayas", "Central Visayas", "Eastern Visayas", "Zamboanga Peninsula", "Northern Mindanao", "Davao Region", "Soccsksargen", "Caraga", "Bangsamoro Autonomous Region in Muslim Mindanao", "Cordillera Administrative Region", "National Capital Region"], zoneTypes: "Regions" }],
  ["Pakistan (‫پاکستان‬‎)", "PK", 92, "+.. ...-.......", "🇵🇰", { Provinces: ["Balochistan", "Khyber Pakhtunkhwa", "Punjab", "Sindh"], Territories: ["Islamabad Capital Territory", "Gilgit-Baltistan", "Azad Jammu and Kashmir"], zoneTypes: ["Provinces", "Territories"] }],
  ["Poland (Polska)", "PL", 48, "+.. ...-...-...", "🇵🇱", { Provinces: ["Greater Poland", "Kuyavian-Pomeranian", "Lesser Poland", "Lodz", "Lower Silesian", "Lublin", "Lubusz", "Masovian", "Opole", "Podlasie", "Pomeranian", "Silesian", "Subcarpathian", "Swietokrzyskie", "Warmian-Masurian", "West Pomeranian"], zoneTypes: "Provinces" }],
  ["Saint Pierre and Miquelon (Saint-Pierre-et-Miquelon)", "PM", 508, "+... .. .. ..", "🇵🇲", { Communes: ["Saint-Pierre", "Miquelon-Langlade"], zoneTypes: "Communes" }],
  ["Pitcairn Islands", "PN", 64, "+.. ........", "🇵🇳", null],
  ["Puerto Rico", "PR", 1, "+. (...) ...-....", "🇵🇷", { Municipalities: ["Adjuntas", "Aguada", "Aguadilla", "Aguas Buenas", "Aibonito", "Añasco", "Arecibo", "Arroyo", "Barceloneta", "Barranquitas", "Bayamón", "Cabo Rojo", "Caguas", "Camuy", "Canóvanas", "Carolina", "Cataño", "Cayey", "Ceiba", "Ciales", "Cidra", "Coamo", "Comerío", "Corozal", "Culebra", "Dorado", "Fajardo", "Florida", "Guánica", "Guayama", "Guayanilla", "Guaynabo", "Gurabo", "Hatillo", "Hormigueros", "Humacao", "Isabela", "Jayuya", "Juana Díaz", "Juncos", "Lajas", "Lares", "Las Marías", "Las Piedras", "Loíza", "Luquillo", "Manatí", "Maricao", "Maunabo", "Mayagüez", "Moca", "Morovis", "Naguabo", "Naranjito", "Orocovis", "Patillas", "Peñuelas", "Ponce", "Quebradillas", "Rincón", "Río Grande", "Sabana Grande", "Salinas", "San Germán", "San Juan", "San Lorenzo", "San Sebastián", "Santa Isabel", "Toa Alta", "Toa Baja", "Trujillo Alto", "Utuado", "Vega Alta", "Vega Baja", "Vieques", "Villalba", "Yabucoa", "Yauco"], zoneTypes: "Municipalities" }, 3, ["787", "939"]],
  ["Palestine (‫فلسطين‬‎)", "PS", 970, "+...-..-...-....", "🇵🇸", { Governorates: ["Gaza Strip", "West Bank"], zoneTypes: "Governorates" }],
  ["Portugal", "PT", 351, "+...-..-...-....", "🇵🇹", { Regions: ["Azores", "Alentejo", "Algarve", "Centro", "Lisbon", "Madeira", "Norte"], zoneTypes: "Regions" }],
  ["Palau", "PW", 680, "+...-...-....", "🇵🇼", { States: ["Aimeliik", "Airai", "Angaur", "Hatohobei", "Kayangel", "Koror", "Melekeok", "Ngaraard", "Ngarchelong", "Ngardmau", "Ngatpang", "Ngchesar", "Ngeremlengui", "Ngiwal", "Peleliu", "Sonsorol"], zoneTypes: "States" }],
  ["Paraguay", "PY", 595, "+...(...)...-...", "🇵🇾", { Departments: ["Alto Paraguay", "Alto Paraná", "Amambay", "Boquerón", "Caaguazú", "Caazapá", "Canindeyú", "Central", "Concepción", "Cordillera", "Guairá", "Itapúa", "Misiones", "Ñeembucú", "Paraguarí", "Presidente Hayes", "San Pedro"], zoneTypes: "Departments" }],
  ["Qatar (‫قطر‬‎)", "QA", 974, "+...-....-....", "🇶🇦", { Municipalities: ["Doha", "Al Rayyan", "Umm Salal", "Al Khor", "Al Wakrah", "Al Daayen", "Madinat ash Shamal", "Al Shamal", "Al Ruwais"], zoneTypes: "Municipalities" }],
  ["Réunion (La Réunion)", "RE", 262, "+...-.....-....", "🇷🇪", { Arrondissements: ["Saint-Denis", "Saint-Paul", "Saint-Pierre", "Saint-Benoit"], Communes: ['Les Avirons', 'Bras-Panon', 'Cilaos', 'Entre-Deux', "L'Étang-Salé", 'Petite-Île', 'La Plaine-des-Palmistes', 'Le Port, Réunion', 'La Possession', 'Saint-André, Réunion', 'Saint-Benoît, Réunion', 'Saint-Denis, Réunion', 'Sainte-Marie, Réunion', 'Sainte-Rose, Réunion', 'Sainte-Suzanne, Réunion', 'Saint-Joseph, Réunion', 'Saint-Leu, Réunion', 'Saint-Louis, Réunion', 'Saint-Paul, Réunion', 'Saint-Philippe', 'Saint-Pierre, Réunion', 'Salazie', 'Le Tampon', 'Les Trois-Bassins', 'Coat of arms of Réunion'], Cantons: ["L'Étang-Salé", 'Le Port', 'La Possession', 'Saint-André-1', 'Saint-André-2', 'Saint-André-3', 'Saint-Benoît-1', 'Saint-Benoît-2', 'Saint-Denis-1', 'Saint-Denis-2', 'Saint-Denis-3', 'Saint-Denis-4', 'Sainte-Marie', 'Saint-Joseph', 'Saint-Leu', 'Saint-Louis-1', 'Saint-Louis-2', 'Saint-Paul-1', 'Saint-Paul-2', 'Saint-Paul-3', 'Saint-Pierre-1', 'Saint-Pierre-2', 'Saint-Pierre-3', 'Le Tampon-1', 'Le Tampon-2'], zoneTypes: ["Arrondissements", "Cantons", "Communes"] }],
  ["Romania (România)", "RO", 40, "+..-..-...-....", "🇷🇴", { Regions: ["Moldova", "Muntenia", "Transylvania", "Banat", "Crisana", "Dobrogea", "Maramures", "Oltenia", "Bucovina", "Mehedinti", "Craiova", "Pitesti", "Sibiu", "Targu Mures", "Timisoara", "Cluj-Napoca", "Iasi", "Bucharest"], zoneTypes: "Regions" }],
  ["Serbia (Србија)", "RS", 381, "+...-..-...-....", "🇷🇸", { Districts: ["Belgrade", "Nišava", "Šumadija", "Zaječar", "Podunavlje", "Bor", "Braničevo", "Pomoravlje", "Zlatibor", "Moravica", "Raška", "Rasina", "Toplica", "Mačva", "Kolubara", "Jablanica", "Pčinja", "Pirot", "Branicevo", "Juzni Banat", "Srednji Banat", "Severni Banat", "Zapadna Bačka", "Južna Bačka", "Severna Bačka", "Srem", "Mačva", "Kolubara", "Podrinje", "Kosovo", "Kosovska Mitrovica", "Peć", "Prizren", "Kosovska Mitrovica", "Peć", "Prizren"], zoneTypes: "Districts" }],
  ["Russia (Россия)", "RU", 7, "+.-(...)-...-....", "🇷🇺", { "Federal Subjects": ["Moscow", "Saint Petersburg", "Novosibirsk", "Yekaterinburg", "Nizhny Novgorod", "Kazan", "Chelyabinsk", "Omsk", "Samara", "Rostov-on-Don", "Ufa", "Krasnoyarsk", "Perm", "Voronezh", "Volgograd", "Krasnodar", "Saratov", "Tyumen", "Tolyatti", "Izhevsk"], zoneTypes: "Federal Subjects" }],
  ["Rwanda", "RW", 250, "+...(...)...-...", "🇷🇼", { Provinces: ["Kigali", "Eastern", "Northern", "Southern", "Western"], zoneTypes: "Provinces" }],
  ["Saudi Arabia (‫المملكة العربية السعودية‬‎)", "SA", 966, "+...-..-...-....", "🇸🇦", { Regions: ["Riyadh", "Makkah", "Madinah", "Eastern Province", "Asir", "Tabuk", "Qassim", "Ha'il", "Jizan", "Najran", "Al Bahah", "Northern Borders", "Jawf", "Hail"], zoneTypes: "Regions" }],
  ["Solomon Islands", "SB", 677, "+...-.....", "🇸🇧", { Provinces: ["Central Province", "Choiseul", "Guadalcanal", "Honiara", "Isabel", "Makira-Ulawa", "Malaita", "Rennell and Bellona", "Temotu", "Western Province"], zoneTypes: "Provinces" }],
  ["Seychelles", "SC", 248, "+...-.-...-...", "🇸🇨", { "Inner Islands": ["Mahé", "Praslin", "La Digue"], "Outer Islands": ["Alphonse", "Desroches", "Farquhar", "Aldabra"], zoneTypes: ["Inner Islands", "Outer Islands"] }],
  ["Singapore", "SG", 65, "+.. ....-....", "🇸🇬", { Regions: ["Central Region", "East Region", "North Region", "North-East Region", "West Region"], zoneTypes: "Regions" }],
  ["Slovenia (Slovenija)", "SI", 386, "+...-..-...-...", "🇸🇮", { Regions: ["Pomurska", "Podravska", "Koroška", "Savinjska", "Zasavska", "Posavska", "Jugovzhodna Slovenija", "Osrednjeslovenska", "Gorenjska", "Primorsko-notranjska", "Goriška", "Obalno-kraška"], zoneTypes: "Regions" }],
  ["Slovakia (Slovensko)", "SK", 421, "+...(...)...-...", "🇸🇰", { Regions: ["Bratislava", "Trnava", "Trenčín", "Nitra", "Žilina", "Banská Bystrica", "Prešov", "Košice"], zoneTypes: "Regions" }],
  ["Sierra Leone", "SL", 232, "+...-..-......", "🇸🇱", { Provinces: ["Eastern Province", "Northern Province", "Southern Province", "Western Area"], zoneTypes: "Provinces" }],
  ["San Marino", "SM", 378, "+...-....-......", "🇸🇲", { Municipalities: ["Acquaviva", "Borgo Maggiore", "Chiesanuova", "Domagnano", "Faetano", "Fiorentino", "Montegiardino", "San Marino", "Serravalle"], zoneTypes: "Municipalities" }],
  ["Senegal (Sénégal)", "SN", 221, "+...-..-...-....", "🇸🇳", { Regions: ["Dakar", "Thiès", "Diourbel", "Fatick", "Kaolack", "Kolda", "Louga", "Matam", "Saint-Louis", "Sédhiou", "Tambacounda", "Kaffrine", "Kédougou", "Kolda", "Ziguinchor"], zoneTypes: "Regions" }],
  ["Somalia (Soomaaliya)", "SO", 252, "+...-.-...-...", "🇸🇴", { Regions: ["Awdal", "Bakool", "Banaadir", "Bari", "Bay", "Galguduud", "Gedo", "Hiiraan", "Jubbada Dhexe", "Jubbada Hoose", "Mudug", "Nugaal", "Sanaag", "Shabeellaha Dhexe", "Shabeellaha Hoose", "Sool", "Togdheer", "Woqooyi Galbeed"], zoneTypes: "Regions" }],
  ["São Tomé and Príncipe (São Tomé e Príncipe)", "ST", 239, "+...-..-.....", "🇸🇹", { Provinces: ["Príncipe", "São Tomé"], zoneTypes: "Provinces" }],
  ["El Salvador", "SV", 503, "+... ....-....", "🇸🇻", { Departments: ["Ahuachapán", "Cabañas", "Chalatenango", "Cuscatlán", "La Libertad", "La Paz", "La Unión", "Morazán", "San Miguel", "San Salvador", "San Vicente", "Santa Ana", "Sonsonate", "Usulután"], zoneTypes: "Departments" }],
  ["Sint Maarten", "SX", 1721, "+.(...)...-....", "🇸🇽", { Regions: ["Dutch Quarter", "French Quarter", "Little Bay", "Lowlands", "Maho", "Pelican Key", "Philipsburg", "Point Blanche", "Simpson Bay"], zoneTypes: "Regions" }],
  ["Turks and Caicos Islands", "TC", 1649, "+.(...)...-....", "🇹🇨", { Districts: ["Grand Turk", "Salt Cay", "South Caicos", "Providenciales", "North Caicos", "Middle Caicos"], zoneTypes: "Districts" }],
  ["Chad (Tchad)", "TD", 235, "+...-..-..-..-..", "🇹🇩", { Regions: ["Batha", "Borkou", "Ennedi", "Ennedi-Est", "Ennedi-Ouest", "Guéra", "Hadjer-Lamis", "Kanem", "Lac", "Logone Occidental", "Logone Oriental", "Mandoul", "Mayo-Kebbi Est", "Mayo-Kebbi Ouest", "Moyen-Chari", "N'Djamena", "Ouaddaï", "Salamat", "Sila", "Tandjilé", "Tibesti", "Wadi Fira"], zoneTypes: "Regions" }],
  ["French Southern and Antarctic Lands", "TF", 262, "+... ... .. .. ..", "🇹🇫", { Districts: ["Kerguelen Islands", "Crozet Islands", "Amsterdam Island", "Saint-Paul Island"], zoneTypes: "Districts" }],
  ["Togo", "TG", 228, "+...-..-...-...", "🇹🇬", { Regions: ["Centrale", "Kara", "Maritime", "Plateaux", "Savanes"], zoneTypes: "Regions" }],
  ["Thailand (ไทย)", "TH", 66, "+..-..-...-...", "🇹🇭", { Regions: ["Bangkok", "Central Thailand", "Eastern Thailand", "Northern Thailand", "Northeastern Thailand", "Southern Thailand", "Western Thailand"], zoneTypes: "Regions" }],
  ["Tokelau", "TK", 690, "+...-....", "🇹🇰", { Villages: ["Atafu", "Fakaofo", "Nukunonu"], zoneTypes: "Villages" }],
  ["Timor-Leste", "TL", 670, "+...-...-....", "🇹🇱", { Districts: ["Aileu", "Ainaro", "Baucau", "Bobonaro", "Cova Lima", "Dili", "Ermera", "Lautem", "Liquiçá", "Manatuto", "Manufahi", "Oecusse", "Viqueque"], zoneTypes: "Districts" }],
  ["Turkmenistan", "TM", 993, "+...-.-...-....", "🇹🇲", { Regions: ["Ahal", "Balkan", "Daşoguz", "Lebap", "Mary"], zoneTypes: "Regions" }],
  ["Tunisia (‫تونس‬‎)", "TN", 216, "+...-..-...-...", "🇹🇳", { Regions: ["Tunis", "Ariana", "Ben Arous", "Manouba", "Nabeul", "Zaghouan", "Bizerte", "Béja", "Jendouba", "Kef", "Siliana", "Kairouan", "Kasserine", "Sidi Bouzid", "Sousse", "Monastir", "Mahdia", "Sfax", "Gabès", "Medenine", "Tataouine", "Gafsa", "Tozeur", "Kebili"], zoneTypes: "Regions" }],
  ["Tonga", "TO", 676, "+...-.....", "🇹🇴", { Regions: ["Eua", "Ha'apai", "Niuas", "Tongatapu", "Vava'u"], zoneTypes: "Regions" }],
  ["Turkey (Türkiye)", "TR", 90, "+.. ... ... .. ..", "🇹🇷", { Regions: ["Adana", "Adıyaman", "Afyonkarahisar", "Ağrı", "Amasya", "Ankara", "Antalya", "Artvin", "Aydın", "Balıkesir", "Bilecik", "Bingöl", "Bitlis", "Bolu", "Burdur", "Bursa", "Çanakkale", "Çankırı", "Çorum", "Denizli", "Diyarbakır", "Edirne", "Elazığ", "Erzincan", "Erzurum", "Eskişehir", "Gaziantep", "Giresun", "Gümüşhane", "Hakkâri", "Hatay", "Isparta", "Mersin", "İstanbul", "İzmir", "Kars", "Kastamonu", "Kayseri", "Kırklareli", "Kırşehir", "Kocaeli", "Konya", "Kütahya", "Malatya", "Manisa", "Kahramanmaraş", "Mardin", "Muğla", "Muş", "Nevşehir", "Niğde", "Ordu", "Rize", "Sakarya", "Samsun", "Siirt", "Sinop", "Sivas", "Tekirdağ", "Tokat", "Trabzon", "Tunceli", "Şanlıurfa", "Uşak", "Van", "Yozgat", "Zonguldak", "Aksaray", "Bayburt", "Karaman", "Kırıkkale", "Batman", "Şırnak", "Bartın", "Ardahan", "Iğdır", "Yalova", "Karabük", "Kilis", "Osmaniye", "Düzce"], zoneTypes: "Regions" }],
  ["Trinidad and Tobago", "TT", 1868, "+.(...)...-....", "🇹🇹", { Municipalities: ["Siparia", "Sangre Grande", "Port of Spain", "Arima", "Point Fortin", "Chaguanas", "Diego Martin", "San Fernando"], Regions: ["Eastern Tobago", "Couva-Tabaquite-Talparo", "Princes Town", "Rio Claro-Mayaro", "Penal-Debe", "Sangre Grande", "San Juan-Laventille", "Tunapuna-Piarco"], zoneTypes: ["Municipalities", "Regions"] }],
  ["Tuvalu", "TV", 688, "+...-.....", "🇹🇻", { Islands: ["Funafuti", "Nanumea", "Nui", "Nukufetau", "Nukulaelae", "Vaitupu"], zoneTypes: "Islands" }],
  ["Ukraine (Україна)", "UA", 380, "+...(..)...-..-..", "🇺🇦", { Oblasts: ["Cherkasy", "Chernihiv", "Chernivtsi", "Dnipropetrovsk", "Donetsk", "Ivano-Frankivsk", "Kharkiv", "Kherson", "Khmelnytskyi", "Kiev", "Kirovohrad", "Luhansk", "Lviv", "Mykolaiv", "Odessa", "Poltava", "Rivne", "Sumy", "Ternopil", "Vinnytsia", "Volyn", "Zakarpattia", "Zaporizhzhia", "Zhytomyr", "Autonomous Republic of Crimea"], zoneTypes: "Oblasts" }],
  ["Uganda", "UG", 256, "+...(...)...-...", "🇺🇬", { Regions: ["Central Region", "Eastern Region", "Northern Region", "Western Region"], zoneTypes: "Regions" }],
  ["United States Minor Outlying Islands", "UM", 1, "+. (...) ...-....", "🇺🇲", { Territories: ["Baker Island", "Howland Island", "Jarvis Island", "Johnston Atoll", "Kingman Reef", "Midway Atoll", "Navassa Island", "Palmyra Atoll", "Wake Island"], zoneTypes: "Territories" }, 2],
  ["United States", "US", 1, "+. (...) ...-....", "🇺🇸", { States: ["Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", "Delaware", "Florida", "Georgia", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland", "Massachusetts", "Michigan", "Minnesota", "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire", "New Jersey", "New Mexico", "New York", "North Carolina", "North Dakota", "Ohio", "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island", "South Carolina", "South Dakota", "Tennessee", "Texas", "Utah", "Vermont", "Virginia", "Washington", "West Virginia", "Wisconsin", "Wyoming"], zoneTypes: "States" }, 0],
  ["Uruguay", "UY", 598, "+...-.-...-..-..", "🇺🇾", { Departments: ["Artigas", "Canelones", "Cerro Largo", "Colonia", "Durazno", "Flores", "Florida", "Lavalleja", "Maldonado", "Montevideo", "Paysandú", "Río Negro", "Rivera", "Rocha", "Salto", "San José", "Soriano", "Tacuarembó", "Treinta y Tres"], zoneTypes: "Departments" }],
  ["Uzbekistan (Oʻzbekiston)", "UZ", 998, "+...-..-...-....", "🇺🇿", { Regions: ["Andijan", "Bukhara", "Fergana", "Jizzakh", "Karakalpakstan", "Namangan", "Navoiy", "Qashqadaryo", "Samarqand", "Sirdaryo", "Surxondaryo", "Tashkent", "Tashkent City", "Xorazm"], zoneTypes: "Regions" }],
  ["Vatican City (Città del Vaticano)", "VA", 39, "+.. .. .... ....", "🇻🇦", null, 1],
  ["Saint Vincent and the Grenadines", "VC", 1784, "+.(...)...-....", "🇻🇨", { Parishes: ["Charlotte", "Grenadines", "Saint Andrew", "Saint David", "Saint George", "Saint Patrick"], zoneTypes: "Parishes" }],
  ["Venezuela", "VE", 58, "+..(...)...-....", "🇻🇪", { States: ["Amazonas", "Anzoátegui", "Apure", "Aragua", "Barinas", "Bolívar", "Carabobo", "Cojedes", "Delta Amacuro", "Falcón", "Guárico", "Lara", "Mérida", "Miranda", "Monagas", "Nueva Esparta", "Portuguesa", "Sucre", "Táchira", "Trujillo", "Vargas", "Yaracuy", "Zulia"], zoneTypes: "States" }],
  ["British Virgin Islands", "VG", 1284, "+.(...)...-....", "🇻🇬", { Districts: ["Tortola", "Virgin Gorda", "Anegada", "Jost Van Dyke"], zoneTypes: "Districts" }],
  ["U.S. Virgin Islands", "VI", 1340, "+.(...)...-....", "🇻🇮", { Districts: ["Saint Croix", "Saint John", "Saint Thomas"], zoneTypes: "Districts" }],
  ["Vietnam (Việt Nam)", "VN", 84, "+..-..-....-...", "🇻🇳", { Regions: ["Hanoi", "Ho Chi Minh City", "Da Nang", "Hai Phong", "Can Tho", "Bien Hoa", "Hue", "Nha Trang", "Buon Ma Thuot", "Quy Nhon", "Vung Tau", "Nam Dinh", "Phan Thiet", "Long Xuyen", "Ha Long", "Thai Nguyen", "Thanh Hoa", "Rach Gia", "Cam Ranh", "Vinh", "My Tho", "Da Lat", "Bac Lieu", "Bien Hoa"], zoneTypes: "Regions" }],
  ["Vanuatu", "VU", 678, "+...-.....", "🇻🇺", { Provinces: ["Malampa", "Penama", "Sanma", "Shefa", "Tafea", "Torba"], zoneTypes: "Provinces" }],
  ["Wallis and Futuna", "WF", 681, "+...-..-....", "🇼🇫", { Kingdoms: ["Uvea", "Sigave", "Alo"], zoneTypes: "Kingdoms" }],
  ["Samoa", "WS", 685, "+...-..-....", "🇼🇸", { Districts: ["A'ana", "Aiga-i-le-Tai", "Atua", "Fa'asaleleaga", "Gaga'emauga", "Gaga'ifomauga", "Palauli", "Satupa'itea", "Tuamasaga", "Va'a-o-Fonoti", "Vaisigano"], zoneTypes: "Districts" }],
  ["Kosovo", "XK", 383, "+... .. ... ...", "🇽🇰", { Districts: ["District of Pristina", "District of Mitrovica", "District of Peja", "District of Prizren", "District of Gjilan", "District of Ferizaj"], zoneTypes: "Districts" }],
  ["Yemen (‫اليمن‬‎)", "YE", 967, "+...-.-...-...", "🇾🇪", { Governorates: ["Sana'a", "Aden", "Taiz", "Al Hudaydah", "Ibb", "Dhamar", "Al Mukalla", "Hajjah", "Amran", "Saada", "Saywun", "Zinjibar", "Al Bayda", "Lahij", "Marib", "Al Ghaydah", "Al Mahwit", "Al Hazm", "Ataq", "Al Jawf", "Sadah", "Shabwah", "Al Dhalea", "Rida", "Al Mahrah"], zoneTypes: "Governorates" }],
  ["Mayotte", "YT", 262, "+... ... .. .. ..", "🇾🇹", { Cantons: ["Acoua", "Bandraboua", "Bandrélé", "Bouéni", "Chiconi", "Chirongui", "Dembeni", "Dzaoudzi", "Kani-Kéli", "Koungou", "Mamoudzou-1", "Mamoudzou-2", "Mamoudzou-3", "Mamoudzou-4", "Mtsamboro", "M'Tsangamouji", "Ouangani", "Pamandzi", "Sada", "Tsingoni"], Communes: ["Acoua", "Bandraboua", "Bandrélé", "Bouéni", "Chiconi", "Chirongui", "Dembeni", "Dzaoudzi", "Kani-Kéli", "Koungou", "Mamoudzou", "Mtsamboro", "M'Tsangamouji", "Ouangani", "Pamandzi", "Sada", "Tsingoni"], zoneTypes: ["Cantons", "Communes"] }],
  ["South Africa", "ZA", 27, "+..-..-...-....", "🇿🇦", { Provinces: ["Eastern Cape", "Free State", "Gauteng", "KwaZulu-Natal", "Limpopo", "Mpumalanga", "North West", "Northern Cape", "Western Cape"], zoneTypes: "Provinces" }],
  ["Zambia", "ZM", 260, "+...-..-...-....", "🇿🇲", { Provinces: ["Lusaka", "Copperbelt", "Central", "Eastern", "Luapula", "Northern", "North-Western", "Southern", "Western"], zoneTypes: "Provinces" }],
  ["Zimbabwe", "ZW", 263, "+...-.-......", "🇿🇼", { Provinces: ["Harare", "Bulawayo", "Manicaland", "Mashonaland Central", "Mashonaland East", "Mashonaland West", "Masvingo", "Matabeleland North", "Matabeleland South", "Midlands"], zoneTypes: "Provinces" }],
] as CountriesArray extends any[] ? CountriesArray : never;
/**
 * @function reverseObject - Takes and inverts an object with an array of values.
 * @type ReverseLookup
 * @description Takes an object with an array of values and returns an object
 *  with the values as keys and the keys as values. If a value is passed in,
 *  it will return the key that matches the value.
 * @param {O} object - An object with an array of values
 * @param {Key} zone - An optional value to find in the object
 * @returns {Key extends O[keyof O][number] ? Inverted<O>[Key] : Inverted<O>} - An object with keys as values and values as keys
 */
function reverseObject<
  O extends { [key: string]: string[] },
  Key extends O[keyof O][number] | undefined = undefined,
>(object: O, zone: Key = undefined as Key): Key extends O[keyof O][number] ? Inverted<O>[Key] : Inverted<O> {
  const invertedObject = {} as Inverted<O>
  for (const key of Object.keys(object) as (keyof O)[]) {
    for (let i = 0; i < (object[key] as O[keyof O]).length; i++) {
      invertedObject[object[key][i] as O[keyof O][number]] = key as Inverted<O>[O[keyof O][number]];
    }
  }
  if (zone) {
    return invertedObject[zone] as Key extends O[keyof O][number] ? Inverted<O>[Key] : Inverted<O>;
  } else {
    return invertedObject as Key extends O[keyof O][number] ? Inverted<O>[Key] : Inverted<O>;
  }
};
export const getCodes = <R extends RegionCode | undefined = undefined>(code: R = undefined as R): R extends RegionCode ? CountryCodes[R] : CountryCodes => {
  const countryCodes: CountryCodes = {
    AC: ['ASC', null, '🇦🇨'],
    AD: ['AND', '376', '🇦🇩'],
    AE: ['ARE', '971', '🇦🇪'],
    AF: ['AFG', '93', '🇦🇫'],
    AG: ['ATG', '1-268', '🇦🇬'],
    AI: ['AIA', '1-264', '🇦🇮'],
    AL: ['ALB', '355', '🇦🇱'],
    AM: ['ARM', '374', '🇦🇲'],
    AN: ['ANT', '599', '🇧🇶'],
    AO: ['AGO', '244', '🇦🇴'],
    AQ: ['ATA', '672', '🇦🇶'],
    AR: ['ARG', '54', '🇦🇷'],
    AS: ['ASM', '1-684', '🇦🇸'],
    AT: ['AUT', '43', '🇦🇹'],
    AU: ['AUS', '61', '🇦🇺'],
    AW: ['ABW', '297', '🇦🇼'],
    AX: ['ALA', null, '🇦🇽'],
    AZ: ['AZE', '994', '🇦🇿'],
    BA: ['BIH', '387', '🇧🇦'],
    BB: ['BRB', '1-246', '🇧🇧'],
    BD: ['BGD', '880', '🇧🇩'],
    BE: ['BEL', '32', '🇧🇪'],
    BF: ['BFA', '226', '🇧🇫'],
    BG: ['BGR', '359', '🇧🇬'],
    BH: ['BHR', '973', '🇧🇭'],
    BI: ['BDI', '257', '🇧🇮'],
    BJ: ['BEN', '229', '🇧🇯'],
    BL: ['BLM', '590', '🇧🇱'],
    BM: ['BMU', '1-441', '🇧🇲'],
    BN: ['BRN', '673', '🇧🇳'],
    BO: ['BOL', '591', '🇧🇴'],
    BQ: ['BES', null, '🇧🇶'],
    BR: ['BRA', '55', '🇧🇷'],
    BS: ['BHS', '1-242', '🇧🇸'],
    BT: ['BTN', '975', '🇧🇹'],
    BV: ['BVT', null, '🇧🇻'],
    BW: ['BWA', '267', '🇧🇼'],
    BY: ['BLR', '375', '🇧🇾'],
    BZ: ['BLZ', '501', '🇧🇿'],
    CA: ['CAN', '1', '🇨🇦'],
    CC: ['CCK', '61', '🇨🇨'],
    CD: ['COD', '243', '🇨🇩'],
    CF: ['CAF', '236', '🇨🇫'],
    CG: ['COG', '242', '🇨🇬'],
    CH: ['CHE', '41', '🇨🇭'],
    CI: ['CIV', '225', '🇨🇮'],
    CK: ['COK', '682', '🇨🇰'],
    CL: ['CHL', '56', '🇨🇱'],
    CM: ['CMR', '237', '🇨🇲'],
    CN: ['CHN', '86', '🇨🇳'],
    CO: ['COL', '57', '🇨🇴'],
    CP: [null, null, '🇨🇵'],
    CR: ['CRI', '506', '🇨🇷'],
    CU: ['CUB', '53', '🇨🇺'],
    CV: ['CPV', '238', '🇨🇻'],
    CW: ['CUW', '599', '🇨🇼'],
    CX: ['CXR', '61', '🇨🇽'],
    CY: ['CYP', '357', '🇨🇾'],
    CZ: ['CZE', '420', '🇨🇿'],
    DE: ['DEU', '49', '🇩🇪'],
    DG: [null, null, '🇩🇬'],
    DJ: ['DJI', '253', '🇩🇯'],
    DK: ['DNK', '45', '🇩🇰'],
    DM: ['DMA', '1-767', '🇩🇲'],
    DO: ['DOM', '1-809, 1-829, 1-849', '🇩🇴'],
    DZ: ['DZA', '213', '🇩🇿'],
    EA: [null, null, '🇪🇦'],
    EC: ['ECU', '593', '🇪🇨'],
    EE: ['EST', '372', '🇪🇪'],
    EG: ['EGY', '20', '🇪🇬'],
    EH: ['ESH', '212', '🇪🇭'],
    ER: ['ERI', '291', '🇪🇷'],
    ES: ['ESP', '34', '🇪🇸'],
    ET: ['ETH', '251', '🇪🇹'],
    EU: [null, null, '🇪🇺'],
    FI: ['FIN', '358', '🇫🇮'],
    FJ: ['FJI', '679', '🇫🇯'],
    FK: ['FLK', '500', '🇫🇰'],
    FM: ['FSM', '691', '🇫🇲'],
    FO: ['FRO', '298', '🇫🇴'],
    FR: ['FRA', '33', '🇫🇷'],
    GA: ['GAB', '241', '🇬🇦'],
    GB: ['GBR', '44', '🇬🇧'],
    GD: ['GRD', '1-473', '🇬🇩'],
    GE: ['GEO', '995', '🇬🇪'],
    GF: ['GUF', null, '🇬🇫'],
    GG: ['GGY', '44-1481', '🇬🇬'],
    GH: ['GHA', '233', '🇬🇭'],
    GI: ['GIB', '350', '🇬🇮'],
    GL: ['GRL', '299', '🇬🇱'],
    GM: ['GMB', '220', '🇬🇲'],
    GN: ['GIN', '224', '🇬🇳'],
    GP: ['GLP', null, '🇬🇵'],
    GQ: ['GNQ', '240', '🇬🇶'],
    GR: ['GRC', '30', '🇬🇷'],
    GS: ['SGS', null, '🇬🇸'],
    GT: ['GTM', '502', '🇬🇹'],
    GU: ['GUM', '1-671', '🇬🇺'],
    GW: ['GNB', '245', '🇬🇼'],
    GY: ['GUY', '592', '🇬🇾'],
    HK: ['HKG', '852', '🇭🇰'],
    HM: ['HMD', null, '🇭🇲'],
    HN: ['HND', '504', '🇭🇳'],
    HR: ['HRV', '385', '🇭🇷'],
    HT: ['HTI', '509', '🇭🇹'],
    HU: ['HUN', '36', '🇭🇺'],
    IC: [null, null, '🇮🇨'],
    ID: ['IDN', '62', '🇮🇩'],
    IE: ['IRL', '353', '🇮🇪'],
    IL: ['ISR', '972', '🇮🇱'],
    IM: ['IMN', '44-1624', '🇮🇲'],
    IN: ['IND', '91', '🇮🇳'],
    IO: ['IOT', '246', '🇮🇴'],
    IQ: ['IRQ', '964', '🇮🇶'],
    IR: ['IRN', '98', '🇮🇷'],
    IS: ['ISL', '354', '🇮🇸'],
    IT: ['ITA', '39', '🇮🇹'],
    JE: ['JEY', '44-1534', '🇯🇪'],
    JM: ['JAM', '1-876', '🇯🇲'],
    JO: ['JOR', '962', '🇯🇴'],
    JP: ['JPN', '81', '🇯🇵'],
    KE: ['KEN', '254', '🇰🇪'],
    KG: ['KGZ', '996', '🇰🇬'],
    KH: ['KHM', '855', '🇰🇭'],
    KI: ['KIR', '686', '🇰🇮'],
    KM: ['COM', '269', '🇰🇲'],
    KN: ['KNA', '1-869', '🇰🇳'],
    KP: ['PRK', '850', '🇰🇵'],
    KR: ['KOR', '82', '🇰🇷'],
    KW: ['KWT', '965', '🇰🇼'],
    KY: ['CYM', '1-345', '🇰🇾'],
    KZ: ['KAZ', '7', '🇰🇿'],
    LA: ['LAO', '856', '🇱🇦'],
    LB: ['LBN', '961', '🇱🇧'],
    LC: ['LCA', '1-758', '🇱🇨'],
    LI: ['LIE', '423', '🇱🇮'],
    LK: ['LKA', '94', '🇱🇰'],
    LR: ['LBR', '231', '🇱🇷'],
    LS: ['LSO', '266', '🇱🇸'],
    LT: ['LTU', '370', '🇱🇹'],
    LU: ['LUX', '352', '🇱🇺'],
    LV: ['LVA', '371', '🇱🇻'],
    LY: ['LBY', '218', '🇱🇾'],
    MA: ['MAR', '212', '🇲🇦'],
    MC: ['MCO', '377', '🇲🇨'],
    MD: ['MDA', '373', '🇲🇩'],
    ME: ['MNE', '382', '🇲🇪'],
    MF: ['MAF', '590', '🇲🇫'],
    MG: ['MDG', '261', '🇲🇬'],
    MH: ['MHL', '692', '🇲🇭'],
    MK: ['MKD', '389', '🇲🇰'],
    ML: ['MLI', '223', '🇲🇱'],
    MM: ['MMR', '95', '🇲🇲'],
    MN: ['MNG', '976', '🇲🇳'],
    MO: ['MAC', '853', '🇲🇴'],
    MP: ['MNP', '1-670', '🇲🇵'],
    MQ: ['MTQ', null, '🇲🇶'],
    MR: ['MRT', '222', '🇲🇷'],
    MS: ['MSR', '1-664', '🇲🇸'],
    MT: ['MLT', '356', '🇲🇹'],
    MU: ['MUS', '230', '🇲🇺'],
    MV: ['MDV', '960', '🇲🇻'],
    MW: ['MWI', '265', '🇲🇼'],
    MX: ['MEX', '52', '🇲🇽'],
    MY: ['MYS', '60', '🇲🇾'],
    MZ: ['MOZ', '258', '🇲🇿'],
    NA: ['NAM', '264', '🇳🇦'],
    NC: ['NCL', '687', '🇳🇨'],
    NE: ['NER', '227', '🇳🇪'],
    NF: ['NFK', null, '🇳🇫'],
    NG: ['NGA', '234', '🇳🇬'],
    NI: ['NIC', '505', '🇳🇮'],
    NL: ['NLD', '31', '🇳🇱'],
    NO: ['NOR', '47', '🇳🇴'],
    NP: ['NPL', '977', '🇳🇵'],
    NR: ['NRU', '674', '🇳🇷'],
    NU: ['NIU', '683', '🇳🇺'],
    NZ: ['NZL', '64', '🇳🇿'],
    OM: ['OMN', '968', '🇴🇲'],
    PA: ['PAN', '507', '🇵🇦'],
    PE: ['PER', '51', '🇵🇪'],
    PF: ['PYF', '689', '🇵🇫'],
    PG: ['PNG', '675', '🇵🇬'],
    PH: ['PHL', '63', '🇵🇭'],
    PK: ['PAK', '92', '🇵🇰'],
    PL: ['POL', '48', '🇵🇱'],
    PM: ['SPM', '508', '🇵🇲'],
    PN: ['PCN', '64', '🇵🇳'],
    PR: ['PRI', '1-787, 1-939', '🇵🇷'],
    PS: ['PSE', '970', '🇵🇸'],
    PT: ['PRT', '351', '🇵🇹'],
    PW: ['PLW', '680', '🇵🇼'],
    PY: ['PRY', '595', '🇵🇾'],
    QA: ['QAT', '974', '🇶🇦'],
    RE: ['REU', '262', '🇷🇪'],
    RO: ['ROU', '40', '🇷🇴'],
    RS: ['SRB', '381', '🇷🇸'],
    RU: ['RUS', '7', '🇷🇺'],
    RW: ['RWA', '250', '🇷🇼'],
    SA: ['SAU', '966', '🇸🇦'],
    SB: ['SLB', '677', '🇸🇧'],
    SC: ['SYC', '248', '🇸🇨'],
    SD: ['SDN', '249', '🇸🇩'],
    SE: ['SWE', '46', '🇸🇪'],
    SG: ['SGP', '65', '🇸🇬'],
    SH: ['SHN', '290', '🇸🇭'],
    SI: ['SVN', '386', '🇸🇮'],
    SJ: ['SJM', '47', '🇸🇯'],
    SK: ['SVK', '421', '🇸🇰'],
    SL: ['SLE', '232', '🇸🇱'],
    SM: ['SMR', '378', '🇸🇲'],
    SN: ['SEN', '221', '🇸🇳'],
    SO: ['SOM', '252', '🇸🇴'],
    SR: ['SUR', '597', '🇸🇷'],
    SS: ['SSD', '211', '🇸🇸'],
    ST: ['STP', '239', '🇸🇹'],
    SV: ['SLV', '503', '🇸🇻'],
    SX: ['SXM', '1-721', '🇸🇽'],
    SY: ['SYR', '963', '🇸🇾'],
    SZ: ['SWZ', '268', '🇸🇿'],
    TA: [null, null, '🇹🇦'],
    TC: ['TCA', '1-649', '🇹🇨'],
    TD: ['TCD', '235', '🇹🇩'],
    TF: ['ATF', null, '🇹🇫'],
    TG: ['TGO', '228', '🇹🇬'],
    TH: ['THA', '66', '🇹🇭'],
    TJ: ['TJK', '992', '🇹🇯'],
    TK: ['TKL', '690', '🇹🇰'],
    TL: ['TLS', '670', '🇹🇱'],
    TM: ['TKM', '993', '🇹🇲'],
    TN: ['TUN', '216', '🇹🇳'],
    TO: ['TON', '676', '🇹🇴'],
    TR: ['TUR', '90', '🇹🇷'],
    TT: ['TTO', '1-868', '🇹🇹'],
    TV: ['TUV', '688', '🇹🇻'],
    TW: ['TWN', '886', '🇹🇼'],
    TZ: ['TZA', '255', '🇹🇿'],
    UA: ['UKR', '380', '🇺🇦'],
    UG: ['UGA', '256', '🇺🇬'],
    UM: ['UMI', null, '🇺🇲'],
    UN: [null, null, '🇺🇳'],
    US: ['USA', '1', '🇺🇸'],
    UY: ['URY', '598', '🇺🇾'],
    UZ: ['UZB', '998', '🇺🇿'],
    VA: ['VAT', '379', '🇻🇦'],
    VC: ['VCT', '1-784', '🇻🇨'],
    VE: ['VEN', '58', '🇻🇪'],
    VG: ['VGB', '1-284', '🇻🇬'],
    VI: ['VIR', '1-340', '🇻🇮'],
    VN: ['VNM', '84', '🇻🇳'],
    VU: ['VUT', '678', '🇻🇺'],
    WF: ['WLF', '681', '🇼🇫'],
    WS: ['WSM', '685', '🇼🇸'],
    XK: ['XKX', '383', '🇽🇰'],
    YE: ['YEM', '967', '🇾🇪'],
    YT: ['MYT', '262', '🇾🇹'],
    ZA: ['ZAF', '27', '🇿🇦'],
    ZM: ['ZMB', '260', '🇿🇲'],
    ZW: ['ZWE', '263', '🇿🇼']
  }
  return (code ? countryCodes[code] : countryCodes) as R extends RegionCode ? CountryCodes[R] : CountryCodes;
}

export const codeToFlags = {
  AC: "🇦🇨",
  AD: "🇦🇩",
  AE: "🇦🇪",
  AF: "🇦🇫",
  AG: "🇦🇬",
  AI: "🇦🇮",
  AL: "🇦🇱",
  AM: "🇦🇲",
  AO: "🇦🇴",
  AQ: "🇦🇶",
  AR: "🇦🇷",
  AS: "🇦🇸",
  AT: "🇦🇹",
  AU: "🇦🇺",
  AW: "🇦🇼",
  AX: "🇦🇽",
  AZ: "🇦🇿",
  BA: "🇧🇦",
  BB: "🇧🇧",
  BD: "🇧🇩",
  BE: "🇧🇪",
  BF: "🇧🇫",
  BG: "🇧🇬",
  BH: "🇧🇭",
  BI: "🇧🇮",
  BJ: "🇧🇯",
  BL: "🇧🇱",
  BM: "🇧🇲",
  BN: "🇧🇳",
  BO: "🇧🇴",
  BQ: "🇧🇶",
  BR: "🇧🇷",
  BS: "🇧🇸",
  BT: "🇧🇹",
  BV: "🇧🇻",
  BW: "🇧🇼",
  BY: "🇧🇾",
  BZ: "🇧🇿",
  CA: "🇨🇦",
  CC: "🇨🇨",
  CD: "🇨🇩",
  CF: "🇨🇫",
  CG: "🇨🇬",
  CH: "🇨🇭",
  CI: "🇨🇮",
  CK: "🇨🇰",
  CL: "🇨🇱",
  CM: "🇨🇲",
  CN: "🇨🇳",
  CO: "🇨🇴",
  CP: "🇨🇵",
  CR: "🇨🇷",
  CU: "🇨🇺",
  CV: "🇨🇻",
  CW: "🇨🇼",
  CX: "🇨🇽",
  CY: "🇨🇾",
  CZ: "🇨🇿",
  DE: "🇩🇪",
  DG: "🇩🇬",
  DJ: "🇩🇯",
  DK: "🇩🇰",
  DM: "🇩🇲",
  DO: "🇩🇴",
  DZ: "🇩🇿",
  EA: "🇪🇦",
  EC: "🇪🇨",
  EE: "🇪🇪",
  EG: "🇪🇬",
  EH: "🇪🇭",
  ER: "🇪🇷",
  ES: "🇪🇸",
  ET: "🇪🇹",
  EU: "🇪🇺",
  FI: "🇫🇮",
  FJ: "🇫🇯",
  FK: "🇫🇰",
  FM: "🇫🇲",
  FO: "🇫🇴",
  FR: "🇫🇷",
  GA: "🇬🇦",
  GB: "🇬🇧",
  GD: "🇬🇩",
  GE: "🇬🇪",
  GF: "🇬🇫",
  GG: "🇬🇬",
  GH: "🇬🇭",
  GI: "🇬🇮",
  GL: "🇬🇱",
  GM: "🇬🇲",
  GN: "🇬🇳",
  GP: "🇬🇵",
  GQ: "🇬🇶",
  GR: "🇬🇷",
  GS: "🇬🇸",
  GT: "🇬🇹",
  GU: "🇬🇺",
  GW: "🇬🇼",
  GY: "🇬🇾",
  HK: "🇭🇰",
  HM: "🇭🇲",
  HN: "🇭🇳",
  HR: "🇭🇷",
  HT: "🇭🇹",
  HU: "🇭🇺",
  IC: "🇮🇨",
  ID: "🇮🇩",
  IE: "🇮🇪",
  IL: "🇮🇱",
  IM: "🇮🇲",
  IN: "🇮🇳",
  IO: "🇮🇴",
  IQ: "🇮🇶",
  IR: "🇮🇷",
  IS: "🇮🇸",
  IT: "🇮🇹",
  JE: "🇯🇪",
  JM: "🇯🇲",
  JO: "🇯🇴",
  JP: "🇯🇵",
  KE: "🇰🇪",
  KG: "🇰🇬",
  KH: "🇰🇭",
  KI: "🇰🇮",
  KM: "🇰🇲",
  KN: "🇰🇳",
  KP: "🇰🇵",
  KR: "🇰🇷",
  KW: "🇰🇼",
  KY: "🇰🇾",
  KZ: "🇰🇿",
  LA: "🇱🇦",
  LB: "🇱🇧",
  LC: "🇱🇨",
  LI: "🇱🇮",
  LK: "🇱🇰",
  LR: "🇱🇷",
  LS: "🇱🇸",
  LT: "🇱🇹",
  LU: "🇱🇺",
  LV: "🇱🇻",
  LY: "🇱🇾",
  MA: "🇲🇦",
  MC: "🇲🇨",
  MD: "🇲🇩",
  ME: "🇲🇪",
  MF: "🇲🇫",
  MG: "🇲🇬",
  MH: "🇲🇭",
  MK: "🇲🇰",
  ML: "🇲🇱",
  MM: "🇲🇲",
  MN: "🇲🇳",
  MO: "🇲🇴",
  MP: "🇲🇵",
  MQ: "🇲🇶",
  MR: "🇲🇷",
  MS: "🇲🇸",
  MT: "🇲🇹",
  MU: "🇲🇺",
  MV: "🇲🇻",
  MW: "🇲🇼",
  MX: "🇲🇽",
  MY: "🇲🇾",
  MZ: "🇲🇿",
  NA: "🇳🇦",
  NC: "🇳🇨",
  NE: "🇳🇪",
  NF: "🇳🇫",
  NG: "🇳🇬",
  NI: "🇳🇮",
  NL: "🇳🇱",
  NO: "🇳🇴",
  NP: "🇳🇵",
  NR: "🇳🇷",
  NU: "🇳🇺",
  NZ: "🇳🇿",
  OM: "🇴🇲",
  PA: "🇵🇦",
  PE: "🇵🇪",
  PF: "🇵🇫",
  PG: "🇵🇬",
  PH: "🇵🇭",
  PK: "🇵🇰",
  PL: "🇵🇱",
  PM: "🇵🇲",
  PN: "🇵🇳",
  PR: "🇵🇷",
  PS: "🇵🇸",
  PT: "🇵🇹",
  PW: "🇵🇼",
  PY: "🇵🇾",
  QA: "🇶🇦",
  RE: "🇷🇪",
  RO: "🇷🇴",
  RS: "🇷🇸",
  RU: "🇷🇺",
  RW: "🇷🇼",
  SA: "🇸🇦",
  SB: "🇸🇧",
  SC: "🇸🇨",
  SD: "🇸🇩",
  SE: "🇸🇪",
  SG: "🇸🇬",
  SH: "🇸🇭",
  SI: "🇸🇮",
  SJ: "🇸🇯",
  SK: "🇸🇰",
  SL: "🇸🇱",
  SM: "🇸🇲",
  SN: "🇸🇳",
  SO: "🇸🇴",
  SR: "🇸🇷",
  SS: "🇸🇸",
  ST: "🇸🇹",
  SV: "🇸🇻",
  SX: "🇸🇽",
  SY: "🇸🇾",
  SZ: "🇸🇿",
  TA: "🇹🇦",
  TC: "🇹🇨",
  TD: "🇹🇩",
  TF: "🇹🇫",
  TG: "🇹🇬",
  TH: "🇹🇭",
  TJ: "🇹🇯",
  TK: "🇹🇰",
  TL: "🇹🇱",
  TM: "🇹🇲",
  TN: "🇹🇳",
  TO: "🇹🇴",
  TR: "🇹🇷",
  TT: "🇹🇹",
  TV: "🇹🇻",
  TW: "🇹🇼",
  TZ: "🇹🇿",
  UA: "🇺🇦",
  UG: "🇺🇬",
  UM: "🇺🇲",
  UN: "🇺🇳",
  US: "🇺🇸",
  UY: "🇺🇾",
  UZ: "🇺🇿",
  VA: "🇻🇦",
  VC: "🇻🇨",
  VE: "🇻🇪",
  VG: "🇻🇬",
  VI: "🇻🇮",
  VN: "🇻🇳",
  VU: "🇻🇺",
  WF: "🇼🇫",
  WS: "🇼🇸",
  XK: "🇽🇰",
  YE: "🇾🇪",
  YT: "🇾🇹",
  ZA: "🇿🇦",
  ZM: "🇿🇲",
  ZW: "🇿🇼"
} as const;
/**
 * @constant regionCodes - The region codes for countries.
 * @type RegionCodes
 * @summary
 * The region codes for countries.
 */
export const regionCodes: RegionCodes = ["AC", "AD", "AE", "AF", "AG", "AI", "AL", "AM", "AO", "AQ", "AR", "AS", "AT", "AU", "AW", "AX", "AZ", "BA", "BB", "BD", "BE", "BF", "BG", "BH", "BI", "BJ", "BL", "BM", "BN", "BO", "BQ", "BR", "BS", "BT", "BV", "BW", "BY", "BZ", "CA", "CC", "CD", "CF", "CG", "CI", "CK", "CL", "CM", "CN", "CO", "CR", "CU", "CV", "CW", "CX", "CY", "CZ", "DE", "DJ", "DK", "DM", "DO", "DZ", "EC", "EE", "EG", "EH", "ER", "ET", "FI", "FJ", "FK", "FM", "FO", "FR", "GA", "GB", "GD", "GE", "GF", "GG", "GH", "GI", "GL", "GM", "GN", "GP", "GQ", "GR", "GS", "GT", "GU", "GW", "GY", "HK", "HM", "HN", "HR", "HT", "HU", "ID", "IE", "IL", "IM", "IN", "IO", "IQ", "IR", "IS", "IT", "JE", "JM", "JO", "JP", "KE", "KG", "KH", "KI", "KM", "KN", "KP", "KW", "KY", "KZ", "LA", "LB", "LC", "LI", "LR", "LS", "LT", "LU", "LV", "LY", "MA", "MC", "MD", "ME", "MF", "MG", "MH", "MK", "ML", "MM", "MN", "MO", "MP", "MQ", "MR", "MS", "MT", "MU", "MV", "MW", "MX", "MY", "MZ", "NA", "NC", "NE", "NF", "NG", "NI", "NL", "NO", "NP", "NR", "NU", "NZ", "OM", "PA", "PE", "PF", "PG", "PH", "PK", "PL", "PM", "PN", "PR", "PS", "PT", "PW", "PY", "QA", "RE", "RO", "RS", "RU", "RW", "SA", "SB", "SC", "SG", "SI", "SK", "SL", "SM", "SN", "SO", "ST", "SV", "SX", "TC", "TD", "TF", "TG", "TH", "TK", "TL", "TM", "TN", "TO", "TR", "TT", "TV", "UA", "UG", "UM", "US", "UY", "UZ", "VA", "VC", "VE", "VG", "VI", "VN", "VU", "WF", "WS", "XK", "YE", "YT", "ZA", "ZM", "ZW"];

export const regex = {
  /**
   * @property {RegExp} phone Used to seperate the dialing code from the number.
   */
  phone: /^(\+\.+)[- ]*(\(?\.+\)?(?:[- ]|\.+)+)$/g,
  /**
   * @property {RegExp} fullPhone Used when concattenating the full number.
   */
  fullPhone: /(\+\.+)([- ]*\(?\.+\)?(?:[- ]|\.+)+)/g,
  /**
   * @property {RegExp} matchLclCtxName - Regex to match a contextual name
   * - Matches: `STRING (STRING) STRING`
   * - Groups: `lcl:(STRING) (ctx:(STRING)) name:(STRING)`
   * - Extract Type: `ForeignLocal<RegionCode, 'LCN', 'Local' | 'Contextual'>`
   * - Groups Type: `LocalContextGroups<RegionCode>`
   * - `$1 $3` | `$<lcl> $<name>` = Normal Name
   * - `$2 $3` | `$<ctx> $<name>` = Contextual Name
   */
  matchLclCtxName: /^(?<lcl>.+?)\s\((?<ctx>.+?)\)\s(?<name>[^()]+)$/g,
  /**
   * @property {RegExp} matchLclCtxFrgn - Regex to match a Local/Foreign name
   * - Matches: `STRING (STRING) (STRING)`
   * - Groups: `lcl:(STRING) (ctx:(STRING)) (frgn:(STRING))`
   * - Extract Type: `ForeignLocal<RegionCode, 'LCF', 'Local' | 'Contextual' | 'Foreign'>`
   * - Groups Type: `LocalContextForeignGroups<RegionCode>`
   * - `$1` | `$<lcl>` = Local Name
   * - `$2` | `$<ctx>` = Contextual Name
   * - `$3` | `$<frgn>` = Foreign Name
   * - `ForeignLocal<CountryName<R>, 'Contextual'>` = Contextual Name
   */
  matchLclCtxFrgn: /^(?<lcl>.+?)\s\((?<ctx>.+?)\)\s\((?<frgn>.+?)\)$/g,
  /**
   * @property {RegExp} matchLclFrgn - Regex to match a basic Local/Foreign name
   * - Matches: `STRING (STRING)`
   * - Groups: `lcl:(STRING) (frgn:(STRING))`
   * - Extract Type: `ForeignLocal<RegionCode, 'LF', 'Local' | 'Foreign' | 'Contextual'>`
   * - Groups Type: `LocalForeignGroups<RegionCode>`
   * - `$1` | `$<lcl>` = Local Name
   * - `$2` | `$<frgn>` = Foreign Name
   * - `$3` | `$<ctx>` = Contextual Name (Only `partie française` in `Saint Martin`)
   */
  matchLclFrgn: /^(?<lcl>[^()]+)\s\((?<frgn>[^()]+)(?:\s\((?<ctx>[^()]+)\))?\)$/g,
  /**
   * @property {FormReplacementMap} formReplacementMap - Map used to determine which value to replace by.
   */
  formReplacementMap:  {
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
  } as FormReplacementMap,
};

const matchTypeMap = {
  'LCF': regex.matchLclCtxFrgn,
  'LCN': regex.matchLclCtxName,
  'LF': regex.matchLclFrgn,
}

export const countryArrays: CountryArrays = (function () {
  const countriesArrays = {} as CountryArrays;
  regionCodes.forEach((rc) => {//@ts-ignore
    countriesArrays[rc] = countriesArray.filter((country): country is CountryArray<typeof rc> => country[1] === rc)[0] as CountryArrays[keyof CountryArrays];
  });
  return countriesArrays;
})()
const outlierRegions = ['GS', 'HM', 'UM', "TF", "BL", "KN", "LC", "MF", "PM", "VC"];

//___=============================>          <============================___\\
//___|| ==================== ||      HELPER      || =================== ||___\\
//___=============================>          <============================___\\


export const helper: CountryHelpers = {
  phone: function <R extends Exclude<RegionCode, "HM">, B extends boolean>(country: CountryArray<R>, includeDC: B = false as B) {
    const regx = includeDC ? regex.fullPhone : regex.phone;
    return ifArray(country[4] as PhoneFormats, (v) => {
      const format = v.replace(regx, "$2");
      return helper.formatter(country[2] as DialCode<R>, format, includeDC);
    }) as R extends "AX" ? [Telephone<R,B>, Telephone<R,B>, Telephone<R,B>] | Telephone<R,B> : Telephone<R,B>;
  } as GetTelephone,
  formatter: function<R extends Exclude<RegionCode, "HM">, B extends boolean = false>(dialingCode: DialCode<R>, format: string, includeDC: B): Telephone<R, B> {
    const dialCode = includeDC ? `+${dialingCode}` as `+${DialCode<R>}` : undefined;
    let counter = 1;

    format = format.replace(/\./g, () => {
      const replacement = counter.toString();
      counter = counter === 9 ? 0 : counter + 1;
      return replacement;
    });
    return (dialCode ? `${dialCode}${format}` as Telephone<R,true> : format as Telephone<R,false>) as Telephone<R,B>
  } as TelephoneFormatter,
  extractName: function (region, form, type) {
    return countryArrays[region][0]
      .replace(matchTypeMap[form],
        regex.formReplacementMap[form][type] as Replace<typeof region, typeof form, typeof type>) as ForeignLocal<typeof region, typeof form, typeof type>;
  } as ExtractName,
  getRegionCodes: function*() {
    for (let key of regionCodes) {
      yield key;
    }
  } as RegionCodeGenerator,
  match: function<R extends RegionCode>(str: string, array: CountryArray<R>): [RegExp, CountryMatchArray<R> | null] {
    let regExp = new RegExp(`${array[0]}|${array[1]}`, 'gi');
    let lf: RegExpMatchArray | null;
    let lcn: RegExpMatchArray | null;
    let lcf: RegExpMatchArray | null;
    let groups = {} as R extends LFRegion | "MF" ? LocalForeignGroups<R, true> : R extends "CC" ? LocalContextGroups<R, true> : R extends LCFRegion ? LocalContextForeignGroups<R, true> : never;
    if (helper.isOutlier(array)) {
      const local = array[1] === "TF" ? "French Southern Territories" as const : array[1] === "GS" ? "South Sandwich Islands" as const : array[1] === "HM" ? "McDonald Islands" as const : array[1] === "UM" ? "U.S. Minor Outlying Islands" as const : array[1] === "BL" ? "Saint Barthélemy" as const : array[1] === "KN" ? "St. Kitts and Nevis" as const : array[1] === "PM" ? "St. Pierre and Miquelon" as const : array[1] === "VC" ? "St. Vincent and the Grenadines" as const : array[1] === "MF" ? "Saint Martin" as const : array[0];
      if (array[1] === "MF" || array[1] === "BL") {
        if (array[1] === "BL") {
          regExp = new RegExp(`(?<countryName>${array[0]})|(?<region>${array[1]})|(?<local>${local})|(?<foreign>${helper.extractName(array[1], "LF", "Foreign")})`, 'gi');
        } else {
          regExp = new RegExp(`(?<countryName>${array[0]})|(?<region>${array[1]})|(?<local>${local})|(?<foreign>${helper.extractName(array[1], "LF", "Foreign")})|(?<contextual>${helper.extractName(array[1], "LF", "Contextual")})`, 'gi');
        }
      } else {
        regExp = new RegExp(`(?<local>${local})|(?<countryName>${array[0]})|(?<region>${array[1]})`, 'gi');
      }
    }
    if (helper.isLF(array)) {
      lf = array[0].match(regex.matchLclFrgn);
      if (lf && lf.groups) {
        groups = lf.groups as R extends "MF" | LFRegion ? LocalForeignGroups<R, true> : never;
        regExp = groups.ctx ? new RegExp(`(?<contextual>${groups.ctx})|(?<local>${groups.lcl})|(?<foreign>${groups.frgn})|(?<countryName>${array[0]})|(?<region>${array[1]})`) : new RegExp(`(?<foreign>${groups.frgn})|(?<local>${groups.lcl})|(?<countryName>${array[0]})|(?<region>${array[1]})`, 'gi');
      }
    }
    if (helper.isLCN(array)) {
      lcn = array[0].match(regex.matchLclCtxName);
      if (lcn && lcn.groups) {
        groups = lcn.groups as R extends "MF" | LFRegion ? never : R extends "CC" ? LocalContextGroups<R, true> : never;
        regExp = new RegExp(`(?<localName>(?<local>${groups.lcl})?\s?(?<name>${groups.name}))|(?<contextualName>(?<contextual>${groups.ctx})?\s?(?<name>${groups.name}))|(?<countryName>${array[0]})|(?<region>${array[1]})`, 'gi');
      }
    }
    if (helper.isLCF(array)) {
      lcf = array[0].match(regex.matchLclCtxFrgn);
      if (lcf && lcf.groups) {
        groups = lcf.groups as R extends "MF" | LFRegion ? never : R extends "CC" ? never : R extends LCFRegion ? LocalContextForeignGroups<R, true> : never;
        regExp = new RegExp(`(?<countryName>${array[0]})|(?<region>${array[1]})|(?<local>${groups.lcl})|(?<contextual>${groups.ctx})|(?<foreign>${groups.frgn})`, 'gi');
      }
    }
    const matches = str.match(regExp) as CountryMatchArray<R> | null;
    if (matches) {
      matches.region = array[1] as R;
      matches.name = array[0];
      matches.input = str;
      if (groups) {
        if ((groups as LocalContextGroups<"CC", true>).name) {
          if (groups.ctx) matches.context = `${groups.ctx} ${(groups as LocalContextGroups<"CC", true>).name}` as R extends ContextualRC ? ContextualHandler<R> : never;
          if (groups.lcl) matches.local = `${groups.lcl} ${(groups as LocalContextGroups<"CC", true>).name}` as R extends LocalRC ? LocalHandler<R> : never;
        } else {
          if (groups.ctx) matches.context = (groups as R extends LCFRegion ? LocalContextForeignGroups<R, true> : R extends LFRegion ? LocalForeignGroups<R, true> : never).ctx as R extends ContextualRC ? ContextualHandler<R> : never;
          if ((groups as R extends LCFRegion ? LocalContextForeignGroups<R, true> : R extends LFRegion ? LocalForeignGroups<R, true> : never).frgn) matches.foreign = (groups as R extends LCFRegion ? LocalContextForeignGroups<R, true> : R extends LFRegion ? LocalForeignGroups<R, true> : never).frgn as R extends ForeignRC ? ForeignHandler<R> : never;
          if (groups.lcl) matches.local = (groups as R extends LCFRegion ? LocalContextForeignGroups<R, true> : R extends LFRegion ? LocalForeignGroups<R, true> : never).lcl as R extends LocalRC ? LocalHandler<R> : never;
        }
      }
    }
    return [regExp, matches];
  } as GetCountryMatch,
  getLocalContextGroups: function (region) {
    const name = countryArrays[region][0];
    const local = name.replace(regex.matchLclCtxName, '$1 $3') as ForeignLocal<typeof region, 'LCN', 'Local'>;
    const context = name.replace(regex.matchLclCtxName, '$2 $3') as ForeignLocal<typeof region, 'LCN', 'Contextual'>;
    const match = name.match(regex.matchLclCtxName)!;
    const groups = match.groups as LocalContextGroups<typeof region>;
    // isContextualName(region, context);
    return `${groups?.lcl} ${groups?.name}` === local && `${groups?.ctx} ${groups?.name}` === context ? groups : null as never;
  } as GetLclCtx,
  getLocalForeignGroups: function (region) {
    const name = countryArrays[region][0];
    const match = name.match(regex.matchLclFrgn);
    return match?.groups as LocalForeignGroups<typeof region>;
  } as GetLclFrgn,
  getLocalContextForeignGroups: function (region) {
    const name = countryArrays[region][0];
    const match = name.match(regex.matchLclCtxFrgn);
    return match?.groups as LocalContextForeignGroups<typeof region>;
  } as GetLclCtxFrgn,
  isLCFMatch: (<R extends Exclude<LCNRegion | LCFRegion | LFRegion, OutlierRC>>(array: CountryArray<R> | CountryArray<RegionCode>): array is CountryArray<R> => helper.isOutlier(array) ? false : helper.isLCN(array) || helper.isLCF(array) || helper.isLF(array)) as LCFMatch,
  isLCN:  (<R extends LCNRegion>(array: CountryArray<R> | CountryArray<RegionCode>): array is CountryArray<R> => helper.isOutlier(array) ? false : regex.matchLclCtxName.test(array[0])) as IsLCNRegion,
  isLCF: (<R extends LCFRegion>(array: CountryArray<R> | CountryArray<RegionCode>): array is CountryArray<R> => helper.isOutlier(array) ? false : regex.matchLclCtxFrgn.test(array[0])) as IsLCFRegion,
  isLF: (<R extends LFRegion>(array: CountryArray<R> | CountryArray<RegionCode>): array is CountryArray<R> => helper.isOutlier(array) ? false : regex.matchLclFrgn.test(array[0])) as IsLFRegion,
  isOutlier: (<R extends OutlierRC>(array: CountryArray<R> | CountryArray<RegionCode>): array is CountryArray<R> => outlierRegions.includes(array[1])) as IsOutlier,
  getKeysAsArray: function<R extends HasZones>(region: R) {
    if (typeof countryArrays[region][5] === 'object' && countryArrays[region][5] !== null) {
      return countryArrays[region][5].zoneTypes;
    } else {
      return null;
    }
  } as GetZoneTypes
}

//___=============================>                     <============================___\\
//___|| ==================== ||      MODULE: COUNTRIES      || =================== ||___\\
//___=============================>                     <============================___\\
export function isRegionCode<R extends RegionCode>(region: string): region is R {
  return regionCodes.includes(region as any);
}

export function isZoneRegions<R extends ZoneRegions>(region: string): region is R {
  return isRegionCode(region)
    && region !== "AQ"
    && region !== "AW"
    && region !== "BV"
    && region !== "CC"
    && region !== "CX"
    && region !== "GS"
    && region !== "HM"
    && region !== "IO"
    && region !== "PN"
    && region !== "VA";
}

export const countryData: CountriesData = (function () {
  const countriesData = {} as CountriesData;

  for (const array of countriesArray) {
    const country = {} as Country<typeof array[1]>;
    const phone = {} as Phone<Exclude<typeof array[1], "HM">>
    country[Symbol.toStringTag] = `Country: ${array[0]}`;
    country.toString = function () {
      return `Country: ${array[0]}`;
    };
    country[Symbol.match] = function (str) {
      const [regExp, match] = helper.match(str, array);
      return match;
    };
    country.name = array[0];
    country.regionCode = array[1];
    country['alpha-3'] = getCodes(array[1])[0];
    country.flag = array[4];
    phone.dialCode = `+${array[2]}`;
    phone.priority = array[6] !== undefined ? array[6] : 0;
    if (array[3]) {//@ts-ignore
      if (array[3] !== "" || array[3] !== undefined || array[3] !== null) {
        phone.format = array[3];
        phone.number = helper.phone(array) as [Telephone<typeof array[1], false>, Telephone<typeof array[1], false>, Telephone<typeof array[1], false>] | Telephone<typeof array[1], false>;
        phone.fullNumber = helper.phone(array, true) as [Telephone<typeof array[1], true>, Telephone<typeof array[1], true>, Telephone<typeof array[1], true>] | Telephone<typeof array[1], true>;
      }
    }
    country.phone = phone;
    if (array[5]) {
      country.zones = array[5];
      country.zoneTypes = array[5].zoneTypes;
      country.allZones = [] as typeof array[1] extends ZoneRegions ? ZonesOf<typeof array[1]> : never;
      if (Array.isArray(array[5].zoneTypes)) {
        for (const key of array[5].zoneTypes) {
          country.allZones = [...country.allZones, ...array[5][key as typeof key extends keyof typeof array[5] ? typeof key : never] as any] as typeof array[1] extends ZoneRegions ? ZonesOf<typeof array[1]> : never;
        }
      } else {
        if (typeof array[5].zoneTypes === 'string') {
          for (const key of [array[5].zoneTypes]) {
            country.allZones = array[5][key as typeof key extends keyof typeof array[5] ? typeof key : never] as typeof array[1] extends ZoneRegions ? ZonesOf<typeof array[1]> : never;
          }
        }
      }
    }
    if (array[7]) {
      country.areaCodes = array[7];
    }
    if (helper.isLCF(array)) {
      country.local = helper.extractName(array[1], 'LCF', 'Local');
      country.context = helper.extractName(array[1], 'LCF', 'Contextual');
      country.foreign = helper.extractName(array[1], 'LCF', 'Foreign');
    }
    if (helper.isLCN(array)) {
      country.local = helper.extractName(array[1], 'LCN', 'Local');
      country.context = helper.extractName(array[1], 'LCN', 'Contextual');
    }
    if (helper.isLF(array)) {
      country.local = helper.extractName(array[1], 'LF', 'Local');
      country.foreign = helper.extractName(array[1], 'LF', 'Foreign');
    }
    if (helper.isOutlier(array)) {
      country.local = array[1] === "TF" ? "French Southern Territories" : array[1] === "GS" ? "South Sandwich Islands" : array[1] === "HM" ? "McDonald Islands" : array[1] === "UM" ? "U.S. Minor Outlying Islands" : array[1] === "BL" ? "Saint Barthélemy" : array[1] === "KN" ? "St. Kitts and Nevis" : array[1] === "PM" ? "St. Pierre and Miquelon" : array[1] === "VC" ? "St. Vincent and the Grenadines" : array[1] === "MF" ? "Saint Martin" : array[0];
      if (array[1] === "MF") {
        country.context = helper.extractName("MF", "LF", "Contextual");
      }
      if (array[1] === "BL") {
        country.foreign = helper.extractName("BL", "LF", "Foreign");
      }
    }
    (countriesData[array[1]] as CountriesData[typeof array[1]]) = {} as CountriesData[typeof array[1]];
    (countriesData[array[1]] as CountriesData[typeof array[1]]) = country as CountriesData[typeof array[1]];
  }
  return countriesData;
})();

/**
 * @constant {Countries} countries - Provides a way to get a country array by region code.
 * @type Countries
 * @summary
 * - If {@link region} is provided:
 * It returns a country from the main array with the associated value.
 * - If {@link region} is not provided:
 * It returns the {@link countryData Source Array}.
 * - This is the main function that creates the {@link countryData} object.
 * @param {R} [region=undefined] - The region code to get the country array for.
 * @template R - The region code to get the country array for.
 * @returns {R extends RegionCode ? CountriesData[R] : CountriesData} The country array or the main array.
 */
export const countries: Countries = (function (): Countries {
  const getCountry = (<R extends RegionCode | undefined = undefined>(region: R = undefined as R): R extends RegionCode ? Country<R> : CountriesData => {
    return (region ? countryData[region] : countryData) as R extends RegionCode ? Country<R> : CountriesData;
  }) as GetCountry;
  const countries: Countries = getCountry as Countries
  countries.toString = () => 'Countries' as const;
  countries[Symbol.toStringTag] = 'Countries' as const;
  /**
   * @property {GetCountryArray} getArray - Provides a way to get a country array by region code.
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
  countries.getArray = <R extends RegionCode | undefined>(
    region: R = undefined as R
  ): R extends RegionCode ? CountryArray<R> : CountryArrays => (
    region && isRegionCode(region)
      ? countryArrays[region as RegionCode]
      : countryArrays
  ) as R extends RegionCode ? CountryArray<R> : CountryArrays;

  /**
   * @property {CountryMap} map - Provides a way to get a country array by accessing it via an indice.
   * @type CountryMap
   * @summary
   * Creates a map of country arrays indexed by region code.
   */
  countries.map = new Map(regionCodes.map((rc) => [rc, countries.getArray(rc)] as const)) as CountryMap;;
  /**
   * @property {GetCountryName} getName
   * @type GetCountryName
   * @param {R} region - The RegionCode of the country we want the name of
   * @returns {CountryName<R>}
   */
  countries.getName = (<R extends RegionCode>(region: R): CountryName<R> => getCountry(region).name) as GetCountryName;

  /**
   * @property {SearchByZone} zoneLookup
   * @type SearchByZone
   * @param {R} region - The RegionCode to use to lookup
   * @param {S} zone - The Zone used to determine the
   */
  countries.zoneLookup = (<R extends ZoneRegions, S extends (Zones<R> extends keyof SearchedZones<R> ? Zones<R> : never) | undefined>(region: R, zone: S = undefined as S): S extends (Zones<R> extends keyof SearchedZones<R> ? Zones<R> : never) //@ts-ignore
    ? SearchedZones<R> //@ts-ignore
    : SearchedZones<R>[S] => {//@ts-ignore
    if (isZoneRegions(region)) {//@ts-ignore
      return reverseObject( getCountry(region).zones, zone) as any;
    } else {
      throw new Error(`The region code ${region} is not a zone region.`);
    }
  }) as SearchByZone;

  /**
   * @property {GetCountryZones} getZones
   * @type GetCountryZones
   */
  countries.getZones = (region): typeof region extends ZoneRegions ? ZonesOf<typeof region> : never => {
    if (isZoneRegions(region)) {
      const zonings = countries.getArray(region)[5];
      const { zoneTypes, ...zones } = zonings as any;
      let zone = [] as typeof region extends ZoneRegions ? ZonesOf<typeof region> : never;
      for (const z of Object.keys(zones) as (keyof CountryZones<typeof region>)[]) {
        zone = [...zone as any, ...zones[z] as Zones<typeof region>] as typeof region extends ZoneRegions ? ZonesOf<typeof region> : never;
      }
      return zone;
    } else {
      throw new Error(`The region code ${region} is not a zone region.`);
    }
  };
  return countries as Countries;
})();
export default countries;
