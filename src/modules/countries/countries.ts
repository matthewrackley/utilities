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
 * 5. ZoneTypes (Regions, States, Provinces, etc.) | 1
 * 6. Zones (Regions, States, Provinces, etc.)
 */
type CountriesArray<R extends RegionCode | undefined = undefined> = R extends RegionCode | undefined ? [
  R extends "AD" | undefined ? ["Andorra", R extends "AD" ? R : "AD", 376, "+...-...-...", "🇦🇩", { Regions: ["Andorra la Vella", "Canillo", "Encamp", "Escaldes-Engordany", "La Massana", "Ordino", "Sant Julià de Lòria"] }] : never,
  R extends "AE" | undefined ? ["United Arab Emirates (‫الإمارات العربية المتحدة‬‎)", R extends "AE" ? R : "AE", 971, "+...-.-...-....", "🇦🇪", { Emirates: ["Abu Dhabi", "Ajman", "Dubai", "Fujairah", "Ras Al Khaimah", "Sharjah", "Umm Al Quwain"] }] : never,
  R extends "AF" | undefined ? ["Afghanistan (‫افغانستان‬‎)", R extends "AF" ? R : "AF", 93, "+..-..-...-....", "🇦🇫", { Regions: ["Badakhshan", "Badghis", "Baghlan", "Balkh", "Bamyan", "Daykundi", "Farah", "Faryab", "Ghazni", "Ghor", "Helmand", "Herat", "Jowzjan", "Kabul", "Kandahar", "Kapisa", "Khost", "Kunar", "Kunduz Province", "Laghman", "Logar", "Nangarhar", "Nimruz", "Nuristan", "Paktia", "Paktika", "Panjshir", "Parwan", "Samangan", "Sar-e Pol", "Takhar", "Urozgan", "Zabul"] }] : never,
  R extends "AG" | undefined ? ["Antigua and Barbuda", R extends "AG" ? R : "AG", 1268, "+.(...)...-....", "🇦🇬", { Parishes: ["Saint George", "Saint John", "Saint Mary", "Saint Paul", "Saint Peter", "Saint Philip"] }] : never,
  R extends "AI" | undefined ? ["Anguilla", R extends "AI" ? R : "AI", 1264, "+.(...)...-....", "🇦🇮", { Districts: ["Anguilla Island", "Blowing Point", "East End", "George Hill", "Island Harbour", "North Hill", "North Side", "Sandy Ground", "Sandy Hill", "South Hill", "Stoney Ground", "The Farrington", "The Quarter", "The Valley", "West End"] }] : never,
  R extends "AL" | undefined ? ["Albania (Shqipëri)", R extends "AL" ? R : "AL", 355, "+...(...)...-...", "🇦🇱", { Counties: ["Berat", "Dibër", "Durrës", "Elbasan", "Fier", "Gjirokastër", "Korçë", "Kukës", "Lezhë", "Shkodër", "Tirana", "Vlorë"] }] : never,
  R extends "AM" | undefined ? ["Armenia (Հայաստան)", R extends "AM" ? R : "AM", 374, "+...-..-...-...", "🇦🇲", { Provinces: ["Aragatsotn", "Ararat", "Armavir", "Gegharkunik", "Kotayk", "Lori", "Shirak", "Syunik", "Tavush", "Vayots Dzor", "Yerevan"] }] : never,
  R extends "AO" | undefined ? ["Angola", R extends "AO" ? R : "AO", 244, "+...(...)...-...", "🇦🇴", { Provinces: ["Bengo", "Benguela", "Bié", "Cabinda", "Cuando Cubango", "Cuanza Norte", "Cuanza Sul", "Cunene", "Huambo", "Huíla", "Luanda", "Lunda Norte", "Lunda Sul", "Malanje", "Moxico", "Namibe", "Uíge", "Zaire"] }] : never,
  R extends "AQ" | undefined ? ["Antarctica", R extends "AQ" ? R : "AQ", 672, "", "🇦🇶"] : never,
  R extends "AR" | undefined ? ["Argentina", R extends "AR" ? R : "AR", 54, "+..(...)...-....", "🇦🇷", { Regions: ["Buenos Aires", "Catamarca", "Chaco", "Chubut", "Córdoba", "Corrientes", "Entre Ríos", "Formosa", "Jujuy", "La Pampa", "La Rioja", "Mendoza", "Misiones", "Neuquén", "Río Negro", "Salta", "San Juan", "San Luis", "Santa Cruz", "Santa Fe", "Santiago del Estero", "Tierra del Fuego", "Tucumán"] }] : never,
  R extends "AS" | undefined ? ["American Samoa", R extends "AS" ? R : "AS", 1684, "+.(...)...-....", "🇦🇸", { Districts: ["Eastern District", "Manu'a District", "Rose Island", "Swains Island", "Western District"] }] : never,
  R extends "AT" | undefined ? ["Austria (Österreich)", R extends "AT" ? R : "AT", 43, "+..(...)...-....", "🇦🇹", { States: ["Burgenland", "Carinthia", "Lower Austria", "Upper Austria", "Salzburg", "Styria", "Tyrol", "Vorarlberg", "Vienna"] }] : never,
  R extends "AU" | undefined ? ["Australia", R extends "AU" ? R : "AU", 61, "+.. ... ... ...", "🇦🇺", { States: ["New South Wales", "Queensland", "South Australia", "Tasmania", "Victoria", "Western Australia"], Territories: ["Australian Capital Territory", "Northern Territory"] }] : never,
  R extends "AW" | undefined ? ["Aruba", R extends "AW" ? R : "AW", 297, "+...-...-....", "🇦🇼"] : never,
  R extends "AX" | undefined ? ["Åland Islands", R extends "AX" ? R : "AX", 358, "", "🇦🇽", { Municipalities: ["Mariehamn", "Jomala", "Finström", "Lemland", "Saltvik", "Hammarland", "Sund", "Eckerö", "Föglö", "Geta", "Vårdö", "Brändö", "Lumparland", "Kumlinge", "Kökar", "Sottunga"] }] : never,
  R extends "AZ" | undefined ? ["Azerbaijan (Azərbaycan)", R extends "AZ" ? R : "AZ", 994, "+...-..-...-..-..", "🇦🇿", { Districts: ["Absheron", "Agdam", "Agdash", "Agstafa", "Agsu", "Astara", "Baku", "Balakan", "Barda", "Beylagan", "Bilasuvar", "Dashkasan", "Fizuli", "Ganja", "Gobustan", "Goranboy", "Goychay", "Goygol", "Hajigabul", "Imishli", "Ismailli", "Jabrayil", "Jalilabad", "Kalbajar", "Kurdamir", "Lachin", "Lankaran", "Lankaran", "Lerik", "Masally", "Mingachevir", "Naftalan", "Nakhchivan", "Neftchala", "Oghuz", "Ordubad", "Qabala", "Qakh", "Qazakh", "Quba", "Qubadli", "Qusar", "Saatly", "Sabirabad", "Salyan", "Shabran", "Shaki", "Shamakhi", "Shamkir", "Shirvan", "Shusha", "Siazan", "Sumgayit", "Tartar", "Tovuz", "Ujar", "Yardymli", "Yevlakh", "Zangilan", "Zaqatala", "Zardab"] }] : never,
  R extends "BA" | undefined ? ["Bosnia and Herzegovina (Босна и Херцеговина)", R extends "BA" ? R : "BA", 387, "+...-..-....", "🇧🇦", { Regions: ["Brčko District", "Federation of Bosnia and Herzegovina", "Republika Srpska"] }] : never,
  R extends "BB" | undefined ? ["Barbados", R extends "BB" ? R : "BB", 1246, "+.(...)...-....", "🇧🇧", { Regions: ["Christ Church", "Saint Andrew", "Saint George", "Saint James", "Saint John", "Saint Joseph", "Saint Lucy", "Saint Michael", "Saint Peter", "Saint Philip", "Saint Thomas"] }] : never,
  R extends "BD" | undefined ? ["Bangladesh (বাংলাদেশ)", R extends "BD" ? R : "BD", 880, "+...-..-...-...", "🇧🇩", { Districts: ["Barisal", "Chittagong", "Dhaka", "Khulna", "Mymensingh", "Rajshahi", "Rangpur", "Sylhet"] }] : never,
  R extends "BE" | undefined ? ["Belgium (België)", R extends "BE" ? R : "BE", 32, "+.. ... .. .. ..", "🇧🇪", { States: ["Brussels", "Flemish Brabant", "Walloon Brabant", "Antwerp", "East Flanders", "West Flanders", "Hainaut", "Liège", "Limburg", "Luxembourg", "Namur"] }] : never,
  R extends "BF" | undefined ? ["Burkina Faso", R extends "BF" ? R : "BF", 226, "+...-..-..-....", "🇧🇫", { Provinces: ["Balé", "Bam", "Banwa", "Bazèga", "Bougouriba", "Boulgou", "Boulkiemdé", "Comoé", "Ganzourgou", "Gnagna", "Gourma", "Houet", "Ioba", "Kadiogo", "Kénédougou", "Komondjari", "Kompienga", "Kossi", "Koulpélogo", "Kouritenga", "Kourwéogo", "Léraba", "Loroum", "Mouhoun", "Namentenga", "Nahouri", "Nayala", "Noumbiel", "Oubritenga", "Oudalan", "Passoré", "Poni", "Sanguié", "Sanmatenga", "Séno", "Sissili", "Soum", "Sourou", "Tapoa", "Tui", "Yagha", "Yatenga", "Ziro", "Zondoma", "Zoundwéogo"] }] : never,
  R extends "BG" | undefined ? ["Bulgaria (България)", R extends "BG" ? R : "BG", 359, "+...(...)...-...", "🇧🇬", { States: ["Blagoevgrad", "Burgas", "Dobrich", "Gabrovo", "Haskovo", "Kardzhali", "Kyustendil", "Lovech", "Montana", "Pazardzhik", "Pernik", "Pleven", "Plovdiv", "Razgrad", "Ruse", "Shumen", "Silistra", "Sliven", "Smolyan", "Sofia", "Stara Zagora", "Targovishte", "Varna", "Veliko Tarnovo", "Vidin", "Vratsa", "Yambol"] }] : never,
  R extends "BH" | undefined ? ["Bahrain (‫البحرين‬‎)", R extends "BH" ? R : "BH", 973, "+...-....-....", "🇧🇭", { Governorates: ["Capital Governorate", "Muharraq Governorate", "Northern Governorate", "Southern Governorate"] }] : never,
  R extends "BI" | undefined ? ["Burundi (Uburundi)", R extends "BI" ? R : "BI", 257, "+...-..-..-....", "🇧🇮", { Provinces: ["Bubanza", "Bujumbura Mairie", "Bujumbura Rural", "Bururi", "Cankuzo", "Cibitoke", "Gitega", "Karuzi", "Kayanza", "Kirundo", "Makamba", "Muramvya", "Muyinga", "Mwaro", "Ngozi", "Rumonge", "Rutana", "Ruyigi"] }] : never,
  R extends "BJ" | undefined ? ["Benin (Bénin)", R extends "BJ" ? R : "BJ", 229, "+...-..-..-....", "🇧🇯", { Departments: ["Alibori", "Atakora", "Atlantique", "Borgou", "Collines", "Donga", "Kouffo", "Littoral", "Mono", "Ouémé", "Plateau", "Zou"] }] : never,
  R extends "BL" | undefined ? ["Saint Barthélemy (Saint-Barthélemy)", R extends "BL" ? R : "BL", 590, "", "🇧🇱", { Parishes: ["Gustavia"] }, 1] : never,
  R extends "BM" | undefined ? ["Bermuda", R extends "BM" ? R : "BM", 1441, "+.(...)...-....", "🇧🇲", { Parishes: ["Devonshire", "Hamilton", "Paget", "Pembroke", "Sandys", "Smith's", "Southampton", "St. George's", "Warwick"], Municipalities: ["Hamilton", "St. George's"] }] : never,
  R extends "BN" | undefined ? ["Brunei", R extends "BN" ? R : "BN", 673, "+...-...-....", "🇧🇳", { Districts: ["Belait", "Brunei-Muara", "Temburong", "Tutong"] }] : never,
  R extends "BO" | undefined ? ["Bolivia", R extends "BO" ? R : "BO", 591, "+...-.-...-....", "🇧🇴", { States: ["Chuquisaca", "Cochabamba", "Beni", "La Paz", "Oruro", "Pando", "Potosí", "Santa Cruz", "Tarija"] }] : never,
  R extends "BQ" | undefined ? ["Caribbean Netherlands", R extends "BQ" ? R : "BQ", 599, "+...-...-....", "🇧🇶", { "Special Municipalities": ["Bonaire", "Saba", "Sint Eustatius"] }, 1] : never,
  R extends "BR" | undefined ? ["Brazil (Brasil)", R extends "BR" ? R : "BR", 55, "+..-..-....-....", "🇧🇷", { Regions: ["Acre", "Alagoas", "Amapá", "Amazonas", "Bahia", "Ceará", "Distrito Federal", "Espírito Santo", "Goiás", "Maranhão", "Mato Grosso", "Mato Grosso do Sul", "Minas Gerais", "Pará", "Paraíba", "Paraná", "Pernambuco", "Piauí", "Rio de Janeiro", "Rio Grande do Norte", "Rio Grande do Sul", "Rondônia", "Roraima", "Santa Catarina", "São Paulo", "Sergipe", "Tocantins"] }] : never,
  R extends "BS" | undefined ? ["Bahamas", R extends "BS" ? R : "BS", 1242, "+.(...)...-....", "🇧🇸", { Regions: ["Acklins", "Berry Islands", "Bimini", "Black Point", "Cat Island", "Central Abaco", "Central Andros", "Central Eleuthera", "City of Freeport", "Crooked Island and Long Cay", "East Grand Bahama", "Exuma", "Grand Cay", "Harbour Island", "Hope Town", "Inagua", "Long Island", "Mangrove Cay", "Mayaguana", "Moore's Island", "North Abaco", "North Andros", "North Eleuthera", "Ragged Island", "Rum Cay", "San Salvador", "South Abaco", "South Andros", "South Eleuthera", "Spanish Wells", "West Grand Bahama"] }] : never,
  R extends "BT" | undefined ? ["Bhutan (འབྲུག)", R extends "BT" ? R : "BT", 975, "+...-.-...-...", "🇧🇹", { Regions: ["Bumthang", "Chukha", "Dagana", "Gasa", "Haa", "Lhuntse", "Mongar", "Paro", "Pemagatshel", "Punakha", "Samdrup Jongkhar", "Samtse", "Sarpang", "Thimphu", "Trashigang", "Trashiyangtse", "Trongsa", "Tsirang", "Wangdue Phodrang", "Zhemgang"] }] : never,
  R extends "BV" | undefined ? ["Bouvet Island", R extends "BV" ? R : "BV", 47, "", "🇧🇻"] : never,
  R extends "BW" | undefined ? ["Botswana", R extends "BW" ? R : "BW", 267, "+...-..-...-...", "🇧🇼", { Districts: ["Central District", "Ghanzi District", "Kgalagadi District", "Kgatleng District", "Kweneng District", "North-East District", "North-West District", "South-East District", "Southern District"] }] : never,
  R extends "BY" | undefined ? ["Belarus (Беларусь)", R extends "BY" ? R : "BY", 375, "+...(..)...-..-..", "🇧🇾", { Regions: ["Brest Region", "Gomel Region", "Grodno Region", "Minsk Region", "Mogilev Region", "Vitebsk Region"] }] : never,
  R extends "BZ" | undefined ? ["Belize", R extends "BZ" ? R : "BZ", 501, "+...-...-....", "🇧🇿", { Districts: ["Belize District", "Cayo District", "Corozal District", "Orange Walk District", "Stann Creek District", "Toledo District"] }] : never,
  R extends "CA" | undefined ? ["Canada", R extends "CA" ? R : "CA", 1, "+. (...) ...-....", "🇨🇦", { Provinces: ["Alberta", "British Columbia", "Manitoba", "New Brunswick", "Newfoundland and Labrador", "Nova Scotia", "Ontario", "Prince Edward Island", "Quebec", "Saskatchewan"], Territories: ["Northwest Territories", "Nunavut", "Yukon"] }, 1, ["204", "236", "249", "250", "289", "306", "343", "365", "387", "403", "416", "418", "431", "437", "438", "450", "506", "514", "519", "548", "579", "581", "587", "604", "613", "639", "647", "672", "705", "709", "742", "778", "780", "782", "807", "819", "825", "867", "873", "902", "905"]] : never,
  R extends "CC" | undefined ? ["Cocos (Keeling) Islands", R extends "CC" ? R : "CC", 61, "", "🇨🇨"] : never,
  R extends "CD" | undefined ? ["Congo (DRC) (Jamhuri ya Kidemokrasia ya Kongo)", R extends "CD" ? R : "CD", 243, "+...(...)...-...", "🇨🇩", { Provinces: ["Kinshasa", "Kongo Central", "Kwango", "Kwilu", "Kasai", "Kasai-Central", "Kasai-Oriental", "Sankuru", "Maniema", "South Kivu", "North Kivu", "Ituri", "Haut-Uele", "Tshopo", "Bas-Uele", "Tanganyika", "Haut-Lomami", "Lualaba", "Kwango", "Kwilu", "Kasai", "Kasai-Central", "Kasai-Oriental", "Sankuru", "Maniema", "South Kivu", "North Kivu", "Ituri", "Haut-Uele", "Tshopo", "Bas-Uele", "Tanganyika", "Haut-Lomami", "Lualaba"] }] : never,
  R extends "CF" | undefined ? ["Central African Republic (République centrafricaine)", R extends "CF" ? R : "CF", 236, "+...-..-..-....", "🇨🇫", { Regions: ["Bamingui-Bangoran", "Bangui", "Basse-Kotto", "Haute-Kotto", "Haut-Mbomou", "Kémo", "Lobaye", "Mambéré-Kadéï", "Mbomou", "Nana-Grébizi", "Nana-Mambéré", "Ombella-M'Poko", "Ouaka", "Ouham", "Ouham-Pendé", "Sangha-Mbaéré", "Vakaga"] }] : never,
  R extends "CG" | undefined ? ["Congo (Republic) (Congo-Brazzaville)", R extends "CG" ? R : "CG", 242, "+...-..-...-....", "🇨🇬", { Departments: ["Bouenza", "Cuvette", "Cuvette-Ouest", "Kouilou", "Lékoumou", "Likouala", "Niari", "Plateaux", "Pool", "Sangha"] }] : never,
  R extends "CI" | undefined ? ["Côte d’Ivoire", R extends "CI" ? R : "CI", 225, "+...-..-...-...", "🇨🇮", { Regions: ["Lagunes", "Haut-Sassandra", "Savanes", "Vallée du Bandama", "Moyen-Comoé", "18 Montagnes", "Lacs", "Zanzan", "Bas-Sassandra", "Denguélé", "N'zi-Comoé", "Marahoué", "Sud-Comoé", "Worodougou", "Sud-Bandama", "Agnéby-Tiassa", "Bafing", "Gbêkê", "Fromager", "Moyen-Cavally", "Nawa", "Indénié-Djuablin", "Bounkani", "Moronou", "Gbôklé", "Iffou", "Bagoué", "Tchologo", "Poro", "Kabadougou", "Béré", "Korhogo"] }] : never,
  R extends "CK" | undefined ? ["Cook Islands", R extends "CK" ? R : "CK", 682, "+...-..-...", "🇨🇰", { Islands: ["Aitutaki", "Atiu", "Mangaia", "Manihiki", "Mauke", "Mitiaro", "Nassau", "Palmerston", "Penrhyn", "Pukapuka", "Rakahanga", "Rarotonga", "Suwarrow", "Takutea"], Districts: ["Avarua", "Matavera", "Ngatangiia", "Takitumu"] }] : never,
  R extends "CL" | undefined ? ["Chile", R extends "CL" ? R : "CL", 56, "+..-.-....-....", "🇨🇱", { States: ["Arica y Parinacota", "Tarapacá", "Antofagasta", "Atacama", "Coquimbo", "Valparaíso", "Región Metropolitana de Santiago", "Libertador General Bernardo O'Higgins", "Maule", "Ñuble", "Biobío", "La Araucanía", "Los Ríos", "Los Lagos", "Aysén", "Magallanes y de la Antártica Chilena"] }] : never,
  R extends "CM" | undefined ? ["Cameroon (Cameroun)", R extends "CM" ? R : "CM", 237, "+...-....-....", "🇨🇲", { Regions: ["Adamaoua", "Centre", "East", "Far North", "Littoral", "North", "Northwest", "South", "Southwest", "West"] }] : never,
  R extends "CN" | undefined ? ["China (中国)", R extends "CN" ? R : "CN", 86, "+.. ..-........", "🇨🇳", { Provinces: ["Anhui", "Fujian", "Gansu", "Guangdong", "Guizhou", "Hainan", "Hebei", "Heilongjiang", "Henan", "Hubei", "Hunan", "Jiangsu", "Jiangxi", "Jilin", "Liaoning", "Qinghai", "Shaanxi", "Shandong", "Shanxi", "Sichuan", "Yunnan", "Zhejiang"], Municipalities: ["Beijing", "Chongqing", "Shanghai", "Tianjin"], "Autonomous Regions": ["Guangxi", "Inner Mongolia", "Ningxia", "Tibet", "Xinjiang"], "Special Administrative Regions": ["Hong Kong", "Macau"] }] : never,
  R extends "CO" | undefined ? ["Colombia", R extends "CO" ? R : "CO", 57, "+..(...)...-....", "🇨🇴", { States: ["Amazonas", "Antioquia", "Arauca", "Atlántico", "Bolívar", "Boyacá", "Caldas", "Caquetá", "Casanare", "Cauca", "Cesar", "Chocó", "Córdoba", "Cundinamarca", "Guainía", "Guaviare", "Huila", "La Guajira", "Magdalena", "Meta", "Nariño", "Norte de Santander", "Putumayo", "Quindío", "Risaralda", "San Andrés, Providencia y Santa Catalina", "Santander", "Sucre", "Tolima", "Valle del Cauca", "Vaupés", "Vichada"] }] : never,
  R extends "CR" | undefined ? ["Costa Rica", R extends "CR" ? R : "CR", 506, "+... ....-....", "🇨🇷", { Provinces: ["San José", "Alajuela", "Cartago", "Heredia", "Guanacaste", "Puntarenas", "Limón"] }] : never,
  R extends "CU" | undefined ? ["Cuba", R extends "CU" ? R : "CU", 53, "+..-.-...-....", "🇨🇺", { Provinces: ["Pinar del Río", "Artemisa", "La Habana", "Mayabeque", "Matanzas", "Cienfuegos", "Villa Clara", "Sancti Spíritus", "Ciego de Ávila", "Camagüey", "Las Tunas", "Holguín", "Granma", "Santiago de Cuba", "Guantánamo", "Isla de la Juventud"] }] : never,
  R extends "CV" | undefined ? ["Cape Verde (Kabu Verdi)", R extends "CV" ? R : "CV", 238, "+...(...)..-..", "🇨🇻", { Regions: ["Barlavento Islands", "Sotavento Islands"] }] : never,
  R extends "CW" | undefined ? ["Curaçao", R extends "CW" ? R : "CW", 599, "+...-...-....", "🇨🇼", { Regions: ["Willemstad", "Bandabou", "Bandariba"] }, 0] : never,
  R extends "CX" | undefined ? ["Christmas Island", R extends "CX" ? R : "CX", 61, "", "🇨🇽"] : never,
  R extends "CY" | undefined ? ["Cyprus (Κύπρος)", R extends "CY" ? R : "CY", 357, "+...-..-...-...", "🇨🇾", { Regions: ["Nicosia", "Limassol", "Larnaca", "Paphos", "Famagusta"] }] : never,
  R extends "CZ" | undefined ? ["Czech Republic (Česká republika)", R extends "CZ" ? R : "CZ", 420, "+...(...)...-...", "🇨🇿", { Regions: ["Prague", "Central Bohemian Region", "South Bohemian Region", "Plzeň Region", "Karlovy Vary Region", "Ústí nad Labem Region", "Liberec Region", "Hradec Králové Region", "Pardubice Region", "Olomouc Region", "Moravian-Silesian Region", "South Moravian Region", "Zlín Region", "Vysočina Region"] }] : never,
  R extends "DE" | undefined ? ["Germany (Deutschland)", R extends "DE" ? R : "DE", 49, "+.. ... .......", "🇩🇪", { States: ["Baden-Württemberg", "Bavaria", "Berlin", "Brandenburg", "Bremen", "Hamburg", "Hesse", "Lower Saxony", "Mecklenburg-Vorpommern", "North Rhine-Westphalia", "Rhineland-Palatinate", "Saarland", "Saxony", "Saxony-Anhalt", "Schleswig-Holstein", "Thuringia"] }] : never,
  R extends "DJ" | undefined ? ["Djibouti", R extends "DJ" ? R : "DJ", 253, "+...-..-..-..-..", "🇩🇯", { Regions: ["Djibouti City", "Ali Sabieh", "Dikhil", "Arta", "Tadjourah", "Obock"] }] : never,
  R extends "DK" | undefined ? ["Denmark (Danmark)", R extends "DK" ? R : "DK", 45, "+.. .. .. .. ..", "🇩🇰", { Regions: ["Capital Region of Denmark", "Region Zealand", "Region of Southern Denmark", "Central Denmark Region", "North Denmark Region"] }] : never,
  R extends "DM" | undefined ? ["Dominica", R extends "DM" ? R : "DM", 1767, "+.(...)...-....", "🇩🇲", { Regions: ["Saint Andrew Parish", "Saint David Parish", "Saint George Parish", "Saint John Parish", "Saint Joseph Parish", "Saint Luke Parish", "Saint Mark Parish", "Saint Patrick Parish", "Saint Paul Parish", "Saint Peter Parish"] }] : never,
  R extends "DO" | undefined ? ["Dominican Republic (República Dominicana)", R extends "DO" ? R : "DO", 1, "+.(...)...-....", "🇩🇴", { Provinces: ["Azua", "Bahoruco", "Barahona", "Dajabón", "Distrito Nacional", "Duarte", "Elías Piña", "El Seibo", "Espaillat", "Hato Mayor", "Hermanas Mirabal", "Independencia", "La Altagracia", "La Romana", "La Vega", "María Trinidad Sánchez", "Monseñor Nouel", "Monte Cristi", "Monte Plata", "Pedernales", "Peravia", "Puerto Plata", "Samaná", "San Cristóbal", "San José de Ocoa", "San Juan", "San Pedro de Macorís", "Sánchez Ramírez", "Santiago", "Santiago Rodríguez", "Santo Domingo", "Valverde"] }, 2, ["809", "829", "849"]] : never,
  R extends "DZ" | undefined ? ["Algeria (‫الجزائر‬‎)", R extends "DZ" ? R : "DZ", 213, "+...-..-...-....", '🇩🇿', { Regions: ["Adrar", "Chlef", "Laghouat", "Oum El Bouaghi", "Batna", "Béjaïa", "Biskra", "Béchar", "Blida", "Bouira", "Tamanrasset", "Tébessa", "Tlemcen", "Tiaret", "Tizi Ouzou", "Alger", "Djelfa", "Jijel", "Sétif", "Saïda", "Skikda", "Sidi Bel Abbès", "Annaba", "Guelma", "Constantine", "Médéa", "Mostaganem", "M'Sila", "Mascara", "Ouargla", "Oran", "El Bayadh", "Illizi", "Bordj Bou Arréridj", "Boumerdès", "El Tarf", "Tindouf", "Tissemsilt", "El Oued", "Khenchela", "Souk Ahras", "Tipaza", "Mila", "Aïn Defla", "Naâma", "Aïn Témouchent", "Ghardaïa", "Relizane"] }] : never,
  R extends "EC" | undefined ? ["Ecuador", R extends "EC" ? R : "EC", 593, "+...-.-...-....", "🇪🇨", { Provinces: ["Azuay", "Bolivar", "Cañar", "Carchi", "Chimborazo", "Cotopaxi", "El Oro", "Esmeraldas", "Galapagos", "Guayas", "Imbabura", "Loja", "Los Rios", "Manabi", "Morona Santiago", "Napo", "Orellana", "Pastaza", "Pichincha", "Santa Elena", "Santo Domingo de los Tsachilas", "Sucumbios", "Tungurahua", "Zamora Chinchipe"] }] : never,
  R extends "EE" | undefined ? ["Estonia (Eesti)", R extends "EE" ? R : "EE", 372, "+...-...-....", "🇪🇪", { Counties: ["Harju County", "Hiiu County", "Ida-Viru County", "Järva County", "Jõgeva County", "Lääne County", "Lääne-Viru County", "Põlva County", "Pärnu County", "Rapla County", "Saare County", "Tartu County", "Valga County", "Viljandi County", "Võru County"] }] : never,
  R extends "EG" | undefined ? ["Egypt (‫مصر‬‎)", R extends "EG" ? R : "EG", 20, "+..(...)...-....", "🇪🇬", { Governorates: ["Alexandria", "Aswan", "Asyut", "Beheira", "Beni Suef", "Cairo", "Dakahlia", "Damietta", "Faiyum", "Gharbia", "Giza", "Ismailia", "Kafr El Sheikh", "Luxor", "Matruh", "Minya", "Monufia", "New Valley", "North Sinai", "Port Said", "Qalyubia", "Qena", "Red Sea", "Sharqia", "Sohag", "South Sinai", "Suez"] }] : never,
  R extends "EH" | undefined ? ["Western Sahara", R extends "EH" ? R : "EH", 212, "+...-..-....", "🇪🇭", { Provinces: ["Laayoune", "Dakhla", "Smara", "Boujdour", "Aousserd"] }] : never,
  R extends "ER" | undefined ? ["Eritrea", R extends "ER" ? R : "ER", 291, "+...-.-...-...", "🇪🇷", { Regions: ["Anseba", "Debub", "Gash-Barka", "Maekel", "Northern Red Sea", "Southern Red Sea"] }] : never,
  R extends "ET" | undefined ? ["Ethiopia", R extends "ET" ? R : "ET", 251, "+...-..-...-....", "🇪🇹", { Regions: ["Addis Ababa", "Afar", "Amhara", "Benishangul-Gumuz", "Dire Dawa", "Gambela", "Harari", "Oromia", "Sidama", "Somali", "Southern Nations, Nationalities, and Peoples' Region", "Tigray"] }] : never,
  R extends "FI" | undefined ? ["Finland (Suomi)", R extends "FI" ? R : "FI", 358, "+... .. .... ....", "🇫🇮", { Regions: ["Åland Islands", "Central Finland", "Central Ostrobothnia", "Eastern Finland", "Kainuu", "Kanta-Häme", "Kymenlaakso", "Lapland", "North Karelia", "Northern Ostrobothnia", "Northern Savonia", "Ostrobothnia", "Päijänne Tavastia", "Pirkanmaa", "Satakunta", "South Karelia", "Southern Ostrobothnia", "Southern Savonia", "Tavastia Proper", "Uusimaa", "Varsinais-Suomi"] }] : never,
  R extends "FJ" | undefined ? ["Fiji", R extends "FJ" ? R : "FJ", 679, "+...-..-.....", "🇫🇯", { Divisions: ["Central", "Eastern", "Northern", "Western"] }] : never,
  R extends "FK" | undefined ? ["Falkland Islands (Islas Malvinas)", R extends "FK" ? R : "FK", 500, "+...-.....", "🇫🇰", { Regions: ["East Falkland", "West Falkland", "Staten Island"] }] : never,
  R extends "FM" | undefined ? ["Micronesia", R extends "FM" ? R : "FM", 691, "+...-...-....", "🇫🇲", { States: ["Chuuk", "Kosrae", "Pohnpei", "Yap"] }] : never,
  R extends "FO" | undefined ? ["Faroe Islands (Føroyar)", R extends "FO" ? R : "FO", 298, "+...-...-...", "🇫🇴", { Municipalities: ["Tórshavn", "Klaksvík", "Runavík", "Eystur", "Vágar"] }] : never,
  R extends "FR" | undefined ? ["France", R extends "FR" ? R : "FR", 33, "+.. . .. .. .. ..", "🇫🇷", { Regions: ["Auvergne-Rhône-Alpes", "Bourgogne-Franche-Comté", "Brittany", "Centre-Val de Loire", "Corsica", "Grand Est", "Hauts-de-France", "Île-de-France", "Normandy", "Nouvelle-Aquitaine", "Occitanie", "Pays de la Loire", "Provence-Alpes-Côte d'Azur"] }] : never,
  R extends "GA" | undefined ? ["Gabon", R extends "GA" ? R : "GA", 241, "+...-.-..-..-..", "🇬🇦", { Provinces: ["Estuaire", "Haut-Ogooué", "Moyen-Ogooué", "Ngounié", "Nyanga", "Ogooué-Ivindo", "Ogooué-Lolo", "Ogooué-Maritime", "Woleu-Ntem"] }] : never,
  R extends "GB" | undefined ? ["United Kingdom", R extends "GB" ? R : "GB", 44, "+.. .... ......", "🇬🇧", { States: ["England", "Scotland", "Wales", "Northern Ireland"] }] : never,
  R extends "GD" | undefined ? ["Grenada", R extends "GD" ? R : "GD", 1473, "+.(...)...-....", "🇬🇩", { Parishes: ["Saint Andrew", "Saint David", "Saint George", "Saint John", "Saint Mark", "Saint Patrick"] }] : never,
  R extends "GE" | undefined ? ["Georgia (საქართველო)", R extends "GE" ? R : "GE", 995, "+...(...)...-...", "🇬🇪", { Regions: ["Abkhazia", "Adjara", "Guria", "Imereti", "Kakheti", "Kvemo Kartli", "Mtskheta-Mtianeti", "Racha-Lechkhumi and Kvemo Svaneti", "Samegrelo-Zemo Svaneti", "Samtskhe-Javakheti", "Shida Kartli", "Tbilisi"] }] : never,
  R extends "GF" | undefined ? ["French Guiana (Guyane française)", R extends "GF" ? R : "GF", 594, "+...-.....-....", "🇬🇫", { Arrondissements: ["Cayenne", "Saint-Laurent-du-Maroni", "Saint-Georges"], Communes: ['Awala-Yalimapo', 'Mana, French Guiana', 'Saint-Laurent-du-Maroni', 'Apatou', 'Grand-Santi', 'Papaïchton', 'Saül, French Guiana', 'Maripasoula', 'Camopi', 'Saint-Georges, French Guiana', 'Ouanary', 'Régina', 'Roura, French Guiana', 'Saint-Élie', 'Iracoubo', 'Sinnamary', 'Kourou', 'Macouria', 'Montsinéry-Tonnegrande', 'Matoury', 'Cayenne', 'Remire-Montjoly'] }] : never,
  R extends "GG" | undefined ? ["Guernsey", R extends "GG" ? R : "GG", 44, "", "🇬🇬", { Parishes: ["Castel", "Forest", "St. Andrew", "St. Martin", "St. Peter Port", "St. Pierre du Bois", "St. Sampson", "St. Saviour", "Torteval", "Vale"] }] : never,
  R extends "GH" | undefined ? ["Ghana (Gaana)", R extends "GH" ? R : "GH", 233, "+...(...)...-...", "🇬🇭", { Regions: ["Ashanti", "Brong-Ahafo", "Central", "Eastern", "Greater Accra", "Northern", "Upper East", "Upper West", "Volta", "Western"] }] : never,
  R extends "GI" | undefined ? ["Gibraltar", R extends "GI" ? R : "GI", 350, "+...-...-.....", "🇬🇮", { Districts: ["East Side", "North District", "South District", "Town Area", "Westside"] }] : never,
  R extends "GL" | undefined ? ["Greenland (Kalaallit Nunaat)", R extends "GL" ? R : "GL", 299, "+...-..-..-..", "🇬🇱", { Municipalities: ["Kujalleq", "Qaasuitsup", "Qeqqata", "Sermersooq"] }] : never,
  R extends "GM" | undefined ? ["Gambia", R extends "GM" ? R : "GM", 220, "+...(...)..-..", "🇬🇲", { Divisions: ["Banjul", "Lower River", "Central River", "North Bank", "Upper River", "West Coast"] }] : never,
  R extends "GN" | undefined ? ["Guinea (Guinée)", R extends "GN" ? R : "GN", 224, "+...-..-...-...", "🇬🇳", { Regions: ["Boké", "Conakry", "Faranah", "Kankan", "Kindia", "Labé", "Mamou", "Nzérékoré"] }] : never,
  R extends "GP" | undefined ? ["Guadeloupe", R extends "GP" ? R : "GP", 590, "", "🇬🇵", { Arrondissements: ["Basse-Terre", "Pointe-à-Pitre"], Communes: ['Les Abymes', 'Anse-Bertrand', 'Baie-Mahault', 'Baillif', 'Basse-Terre', 'Bouillante', 'Capesterre-Belle-Eau', 'Capesterre-de-Marie-Galante', 'Deshaies', 'La Désirade (commune)', 'Le Gosier', 'Gourbeyre', 'Goyave, Guadeloupe', 'Grand-Bourg', 'Lamentin', "Morne-à-l'Eau", 'Le Moule', 'Petit-Bourg', 'Petit-Canal', 'Pointe-à-Pitre', 'Pointe-Noire, Guadeloupe', 'Port-Louis, Guadeloupe', 'Saint-Claude, Guadeloupe', 'Saint-François, Guadeloupe', 'Saint-Louis, Guadeloupe', 'Sainte-Anne, Guadeloupe', 'Sainte-Rose, Guadeloupe', 'Terre-de-Bas', 'Terre-de-Haut', 'Trois-Rivières, Guadeloupe', 'Vieux-Fort, Guadeloupe', 'Vieux-Habitants', 'Saint Barthélemy', 'Saint Martin (France)'], Cantons: ["Les Abymes-1", "Les Abymes-2", "Les Abymes-3", "Baie-Mahault-1", "Baie-Mahault-2", "Basse-Terre", "Capesterre-Belle-Eau", "Le Gosier", "Lamentin", "Marie-Galante", "Morne-à-l'Eau", "Le Moule", "Petit-Bourg", "Petit-Canal", "Pointe-à-Pitre", "Sainte-Anne", "Sainte-Rose-1", "Sainte-Rose-2", "Saint-François", "Trois-Rivières", "Vieux-Habitants"] }, 0] : never,
  R extends "GQ" | undefined ? ["Equatorial Guinea (Guinea Ecuatorial)", R extends "GQ" ? R : "GQ", 240, "+...-..-...-....", "🇬🇶", { Provinces: ["Annobón", "Bioko Norte", "Bioko Sur", "Centro Sur", "Kié-Ntem", "Litoral", "Wele-Nzas"] }] : never,
  R extends "GR" | undefined ? ["Greece (Ελλάδα)", R extends "GR" ? R : "GR", 30, "+..(...)...-....", "🇬🇷", { Regions: ["Attica", "Central Greece", "Central Macedonia", "Crete", "Eastern Macedonia and Thrace", "Epirus", "Ionian Islands", "North Aegean", "Peloponnese", "South Aegean", "Thessaly", "Western Greece", "Western Macedonia"] }] : never,
  R extends "GS" | undefined ? ["South Georgia and the South Sandwich Islands", R extends "GS" ? R : "GS", 500, "", "🇬🇸"] : never,
  R extends "GT" | undefined ? ["Guatemala", R extends "GT" ? R : "GT", 502, "+... ....-....", "🇬🇹", { Departments: ["Alta Verapaz", "Baja Verapaz", "Chimaltenango", "Chiquimula", "El Progreso", "Escuintla", "Guatemala", "Huehuetenango", "Izabal", "Jalapa", "Jutiapa", "Petén", "Quetzaltenango", "Quiché", "Retalhuleu", "Sacatepéquez", "San Marcos", "Santa Rosa", "Sololá", "Suchitepéquez", "Totonicapán", "Zacapa"] }] : never,
  R extends "GU" | undefined ? ["Guam", R extends "GU" ? R : "GU", 1671, "+.(...)...-....", "🇬🇺", { Villages: ["Agana Heights", "Agat", "Asan", "Barrigada", "Chalan Pago-Ordot", "Dededo", "Hagatna", "Inarajan", "Mangilao", "Merizo", "Mongmong-Toto-Maite", "Piti", "Santa Rita", "Sinajana", "Talofofo", "Tamuning", "Umatac", "Yigo", "Yona"] }] : never,
  R extends "GW" | undefined ? ["Guinea-Bissau (Guiné Bissau)", R extends "GW" ? R : "GW", 245, "+...-.-......", "🇬🇼", { Regions: ["Bafatá", "Biombo", "Bolama", "Cacheu", "Gabú", "Oio", "Quinara", "Tombali"] }] : never,
  R extends "GY" | undefined ? ["Guyana", R extends "GY" ? R : "GY", 592, "+...-...-....", "🇬🇾", { Regions: ["Barima-Waini", "Cuyuni-Mazaruni", "Demerara-Mahaica", "East Berbice-Corentyne", "Essequibo Islands-West Demerara", "Mahaica-Berbice", "Pomeroon-Supenaam", "Potaro-Siparuni", "Upper Demerara-Berbice", "Upper Takutu-Upper Essequibo"] }] : never,
  R extends "HK" | undefined ? ["Hong Kong (香港)", R extends "HK" ? R : "HK", 852, "+... .... ....", "🇭🇰", { Districts: ["Central and Western", "Eastern", "Islands", "Kowloon City", "Kwai Tsing", "Kwun Tong", "North", "Sai Kung", "Sha Tin", "Sham Shui Po", "Southern", "Tai Po", "Tsuen Wan", "Tuen Mun", "Wan Chai", "Wong Tai Sin", "Yau Tsim Mong", "Yuen Long"] }] : never,
  R extends "HM" | undefined ? ["Heard Island and McDonald Islands", R extends "HM" ? R : "HM", 672, "", "🇭🇲"] : never,
  R extends "HN" | undefined ? ["Honduras", R extends "HN" ? R : "HN", 504, "+...-....-....", "🇭🇳", { Departments: ["Atlántida", "Choluteca", "Colón", "Comayagua", "Copán", "Cortés", "El Paraíso", "Francisco Morazán", "Gracias a Dios", "Intibucá", "Islas de la Bahía", "La Paz", "Lempira", "Ocotepeque", "Olancho", "Santa Bárbara", "Valle", "Yoro"] }] : never,
  R extends "HR" | undefined ? ["Croatia (Hrvatska)", R extends "HR" ? R : "HR", 385, "+...-..-...-...", "🇭🇷", { Counties: ["Zagreb County", "Krapina-Zagorje County", "Sisak-Moslavina County", "Karlovačka County", "Varaždin County", "Koprivnica-Križevci County", "Bjelovar-Bilogora County", "Primorje-Gorski Kotar County", "Lika-Senj County", "Virovitica-Podravina County", "Požega-Slavonia County", "Brod-Posavina County", "Zadar County", "Osijek-Baranja County", "Šibenik-Knin County", "Vukovar-Syrmia County", "Split-Dalmatia County", "Istria County", "Dubrovnik-Neretva County", "Međimurje County", "Grad Zagreb"] }] : never,
  R extends "HT" | undefined ? ["Haiti", R extends "HT" ? R : "HT", 509, "+... ....-....", "🇭🇹", { Departments: ["Artibonite", "Centre", "Grand'Anse", "Nippes", "Nord", "Nord-Est", "Nord-Ouest", "Ouest", "Sud", "Sud-Est"] }] : never,
  R extends "HU" | undefined ? ["Hungary (Magyarország)", R extends "HU" ? R : "HU", 36, "+..(...)...-...", "🇭🇺", { Counties: ["Bács-Kiskun", "Baranya", "Békés", "Borsod-Abaúj-Zemplén", "Csongrád-Csanád", "Fejér", "Győr-Moson-Sopron", "Hajdú-Bihar", "Heves", "Jász-Nagykun-Szolnok", "Komárom-Esztergom", "Nógrád", "Pest", "Somogy", "Szabolcs-Szatmár-Bereg", "Tolna", "Vas", "Veszprém", "Zala"] }] : never,
  R extends "ID" | undefined ? ["Indonesia", R extends "ID" ? R : "ID", 62, "+..-..-...-..", "🇮🇩", { Provinces: ["Aceh", "Bali", "Bangka Belitung", "Banten", "Bengkulu", "Central Java", "Central Kalimantan", "Central Sulawesi", "East Java", "East Kalimantan", "East Nusa Tenggara", "Gorontalo", "Jakarta", "Jambi", "Lampung", "Maluku", "North Kalimantan", "North Maluku", "North Sulawesi", "North Sumatra", "Papua", "Riau", "Riau Islands", "South Kalimantan", "South Sulawesi", "South Sumatra", "Southeast Sulawesi", "West Java", "West Kalimantan", "West Nusa Tenggara", "West Papua", "West Sulawesi", "West Sumatra", "Yogyakarta"] }] : never,
  R extends "IE" | undefined ? ["Ireland", R extends "IE" ? R : "IE", 353, "+... .. .......", "🇮🇪", { Counties: ["Carlow", "Cavan", "Clare", "Cork", "Donegal", "Dublin", "Galway", "Kerry", "Kildare", "Kilkenny", "Laois", "Leitrim", "Limerick", "Longford", "Louth", "Mayo", "Meath", "Monaghan", "Offaly", "Roscommon", "Sligo", "Tipperary", "Waterford", "Westmeath", "Wexford", "Wicklow"] }] : never,
  R extends "IL" | undefined ? ["Israel (‫ישראל‬‎)", R extends "IL" ? R : "IL", 972, "+...-.-...-....", "🇮🇱", { Districts: ["Central", "Haifa", "Jerusalem", "Northern", "Southern", "Tel Aviv"] }] : never,
  R extends "IM" | undefined ? ["Isle of Man", R extends "IM" ? R : "IM", 44, "", "🇮🇲", { Parishes: ["Andreas", "Arbory", "Ballaugh", "Braddan", "Bride", "Castletown", "Douglas", "German", "Jurby", "Laxey", "Lezayre", "Lonan", "Malew", "Marown", "Maughold", "Michael", "Onchan", "Patrick", "Peel", "Port Erin", "Port St Mary", "Ramsey", "Rushen"], Sheadings: ["Garff", "Glenfaba", "Middle", "Peel", "Rushen"] }] : never,
  R extends "IN" | undefined ? ["India (भारत)", R extends "IN" ? R : "IN", 91, "+.. .....-.....", "🇮🇳", { States: ["Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh", "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka", "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal"] }] : never,
  R extends "IO" | undefined ? ["British Indian Ocean Territory", R extends "IO" ? R : "IO", 246, "+...-...-....", "🇮🇴"] : never,
  R extends "IQ" | undefined ? ["Iraq (‫العراق‬‎)", R extends "IQ" ? R : "IQ", 964, "+...(...)...-....", "🇮🇶", { Governorates: ["Al Anbar", "Babil", "Baghdad", "Basra", "Dhi Qar", "Diyala", "Dohuk", "Erbil", "Karbala", "Kirkuk", "Maysan", "Muthanna", "Najaf", "Nineveh", "Qadisiyyah", "Saladin", "Sulaymaniyah", "Wasit"] }] : never,
  R extends "IR" | undefined ? ["Iran (‫ایران‬‎)", R extends "IR" ? R : "IR", 98, "+..(...)...-....", "🇮🇷", { Provinces: ["Alborz", "Ardabil", "Bushehr", "Chaharmahal and Bakhtiari", "East Azerbaijan", "Isfahan", "Fars", "Gilan", "Golestan", "Hamadan", "Hormozgan", "Ilam", "Kerman", "Kermanshah", "Khuzestan", "Kohgiluyeh and Boyer-Ahmad", "Kurdistan", "Lorestan", "Markazi", "Mazandaran", "North Khorasan", "Qazvin", "Qom", "Razavi Khorasan", "Semnan", "Sistan and Baluchestan", "South Khorasan", "Tehran", "West Azerbaijan", "Yazd", "Zanjan"] }] : never,
  R extends "IS" | undefined ? ["Iceland (Ísland)", R extends "IS" ? R : "IS", 354, "+... ... ....", "🇮🇸", { Regions: ["Capital Region", "Southern Peninsula", "Western Region", "Westfjords", "Northwest Region", "Northeast Region", "East Region", "South Region"] }] : never,
  R extends "IT" | undefined ? ["Italy (Italia)", R extends "IT" ? R : "IT", 39, "+.. ... ......", "🇮🇹", { Regions: ["Abruzzo", "Basilicata", "Calabria", "Campania", "Emilia-Romagna", "Friuli-Venezia Giulia", "Lazio", "Liguria", "Lombardia", "Marche", "Molise", "Piemonte", "Puglia", "Sardegna", "Sicilia", "Toscana", "Trentino-Alto Adige", "Umbria", "Valle d'Aosta", "Veneto"] }, 0] : never,
  R extends "JE" | undefined ? ["Jersey", R extends "JE" ? R : "JE", 44, "", "🇯🇪", { Parishes: ["Grouville", "Saint Brelade", "Saint Clement", "Saint Helier", "Saint John", "Saint Lawrence", "Saint Martin", "Saint Mary", "Saint Ouen", "Saint Peter", "Saint Saviour", "Trinity"] }] : never,
  R extends "JM" | undefined ? ["Jamaica", R extends "JM" ? R : "JM", 1876, "+.(...)...-....", "🇯🇲", { Parishes: ["Clarendon", "Hanover", "Kingston", "Manchester", "Portland", "Saint Andrew", "Saint Ann", "Saint Catherine", "Saint Elizabeth", "Saint James", "Saint Mary", "Saint Thomas", "Trelawny", "Westmoreland"] }] : never,
  R extends "JO" | undefined ? ["Jordan (‫الأردن‬‎)", R extends "JO" ? R : "JO", 962, "+...-.-....-....", "🇯🇴", { Governorates: ["Ajloun", "Amman", "Aqaba", "Balqa", "Irbid", "Jarash", "Karak", "Ma'an", "Madaba", "Mafraq", "Tafilah", "Zarqa"] }] : never,
  R extends "JP" | undefined ? ["Japan (日本)", R extends "JP" ? R : "JP", 81, "+.. ... .. ....", "🇯🇵", { Prefectures: ["Aichi", "Akita", "Aomori", "Chiba", "Ehime", "Fukui", "Fukuoka", "Fukushima", "Gifu", "Gunma", "Hiroshima", "Hokkaido", "Hyogo", "Ibaraki", "Ishikawa", "Iwate", "Kagawa", "Kagoshima", "Kanagawa", "Kochi", "Kumamoto", "Kyoto", "Mie", "Miyagi", "Miyazaki", "Nagano", "Nagasaki", "Nara", "Niigata", "Oita", "Okayama", "Okinawa", "Osaka", "Saga", "Saitama", "Shiga", "Shimane", "Shizuoka", "Tochigi", "Tokushima", "Tokyo", "Tottori", "Toyama", "Wakayama", "Yamagata", "Yamaguchi", "Yamanashi"] }] : never,
  R extends "KE" | undefined ? ["Kenya", R extends "KE" ? R : "KE", 254, "+...-...-......", "🇰🇪", { Counties: ["Baringo", "Bomet", "Bungoma", "Busia", "Elgeyo-Marakwet", "Embu", "Garissa", "Homa Bay", "Isiolo", "Kajiado", "Kakamega", "Kericho", "Kiambu", "Kilifi", "Kirinyaga", "Kisii", "Kisumu", "Kitui", "Kwale", "Laikipia", "Lamu", "Machakos", "Makueni", "Mandera", "Marsabit", "Meru", "Migori", "Mombasa", "Murang'a", "Nairobi", "Nakuru", "Nandi", "Narok", "Nyamira", "Nyandarua", "Nyeri", "Samburu", "Siaya", "Taita-Taveta", "Tana River", "Tharaka-Nithi", "Trans-Nzoia", "Turkana", "Uasin Gishu", "Vihiga", "Wajir", "West Pokot"] }] : never,
  R extends "KG" | undefined ? ["Kyrgyzstan (Кыргызстан)", R extends "KG" ? R : "KG", 996, "+...(...)...-...", "🇰🇬", { Regions: ["Batken", "Chuy", "Issyk-Kul", "Jalal-Abad", "Naryn", "Osh", "Talas"] }] : never,
  R extends "KH" | undefined ? ["Cambodia (កម្ពុជា)", R extends "KH" ? R : "KH", 855, "+...-..-...-...", "🇰🇭", { Provinces: ["Banteay Meanchey", "Battambang", "Kampong Cham", "Kampong Chhnang", "Kampong Speu", "Kampong Thom", "Kampot", "Kandal", "Kep", "Koh Kong", "Kratie", "Mondulkiri", "Oddar Meanchey", "Pailin", "Phnom Penh", "Preah Sihanouk", "Preah Vihear", "Pursat", "Ratanakiri", "Siem Reap", "Stung Treng", "Svay Rieng", "Takéo", "Tboung Khmum"] }] : never,
  R extends "KI" | undefined ? ["Kiribati", R extends "KI" ? R : "KI", 686, "+...-..-...", "🇰🇮", { Islands: ["Banaba", "Gilbert Islands", "Line Islands", "Phoenix Islands"] }] : never,
  R extends "KM" | undefined ? ["Comoros (‫جزر القمر‬‎)", R extends "KM" ? R : "KM", 269, "+...-..-.....", "🇰🇲", { Regions: ["Grande Comore", "Anjouan", "Mohéli"] }] : never,
  R extends "KN" | undefined ? ["Saint Kitts and Nevis", R extends "KN" ? R : "KN", 1869, "+.(...)...-....", "🇰🇳", { Parishes: ["Christ Church Nichola Town", "Saint Anne Sandy Point", "Saint George Basseterre", "Saint John Capisterre", "Saint Mary Cayon", "Saint Paul Capisterre", "Saint Peter Basseterre", "Saint Thomas Lowland", "Saint Thomas Middle Island", "Trinity Palmetto Point"] }] : never,
  R extends "KP" | undefined ? ["North Korea (조선 민주주의 인민 공화국)", R extends "KP" ? R : "KP", 850, "+...-...-...", "🇰🇵", { Provinces: ["Chagang", "North Hamgyong", "South Hamgyong", "North Hwanghae", "South Hwanghae", "Kangwon", "North Pyongan", "South Pyongan", "Ryanggang"] }] : never,
  R extends "KW" | undefined ? ["Kuwait (‫الكويت‬‎)", R extends "KW" ? R : "KW", 965, "+...-....-....", "🇰🇼", { Governorates: ["Al Ahmadi", "Al Farwaniyah", "Al Jahra", "Capital", "Hawalli", "Mubarak Al-Kabeer"] }] : never,
  R extends "KY" | undefined ? ["Cayman Islands", R extends "KY" ? R : "KY", 1345, "+.(...)...-....", "🇰🇾", { Districts: ["Bodden Town", "Cayman Brac", "East End", "George Town", "Little Cayman", "North Side", "Sister Islands", "West Bay"] }] : never,
  R extends "KZ" | undefined ? ["Kazakhstan (Казахстан)", R extends "KZ" ? R : "KZ", 7, "+. ... ...-..-..", "🇰🇿", { Regions: ["Almaty", "Aqmola", "Aqtobe", "Atyrau", "East Kazakhstan", "Mangystau", "North Kazakhstan", "Nur-Sultan", "Pavlodar", "Qaragandy", "Qostanay", "Qyzylorda", "Shymkent", "Turkestan", "West Kazakhstan"] }, 1] : never,
  R extends "LA" | undefined ? ["Laos (ລາວ)", R extends "LA" ? R : "LA", 856, "+...-..-...-...", "🇱🇦", { Provinces: ["Attapeu", "Bokeo", "Bolikhamsai", "Champasak", "Houaphanh", "Khammouane", "Luang Namtha", "Luang Prabang", "Oudomxay", "Phongsaly", "Sainyabuli", "Salavan", "Savannakhet", "Sekong", "Vientiane", "Vientiane Prefecture", "Xaisomboun", "Xaisomboun Special Zone", "Xiangkhouang", "Xekong", "Xiangkhouang"] }] : never,
  R extends "LB" | undefined ? ["Lebanon (‫لبنان‬‎)", R extends "LB" ? R : "LB", 961, "+...-.-...-...", "🇱🇧", { Governorates: ["Akkar", "Baalbek-Hermel", "Beirut", "Beqaa", "Mount Lebanon", "Nabatieh", "North", "South"] }] : never,
  R extends "LC" | undefined ? ["Saint Lucia", R extends "LC" ? R : "LC", 1758, "+.(...)...-....", "🇱🇨", { Districts: ["Anse-la-Raye", "Canaries", "Castries", "Choiseul", "Dennery", "Gros Islet", "Laborie", "Micoud", "Soufrière", "Vieux Fort"] }] : never,
  R extends "LI" | undefined ? ["Liechtenstein", R extends "LI" ? R : "LI", 423, "+...(...)...-....", "🇱🇮", { Municipalities: ["Balzers", "Eschen", "Gamprin", "Mauren", "Planken", "Ruggell", "Schaan", "Schellenberg", "Triesen", "Triesenberg", "Vaduz"] }] : never,
  R extends "LR" | undefined ? ["Liberia", R extends "LR" ? R : "LR", 231, "+...-..-...-...", "🇱🇷", { Counties: ["Bomi", "Bong", "Gbarpolu", "Grand Bassa", "Grand Cape Mount", "Grand Gedeh", "Grand Kru", "Lofa", "Margibi", "Maryland", "Montserrado", "Nimba", "River Cess", "River Gee", "Sinoe"] }] : never,
  R extends "LS" | undefined ? ["Lesotho", R extends "LS" ? R : "LS", 266, "+...-.-...-....", "🇱🇸", { Districts: ["Berea", "Butha-Buthe", "Leribe", "Mafeteng", "Maseru", "Mohale's Hoek", "Mokhotlong", "Qacha's Nek", "Quthing", "Thaba-Tseka"] }] : never,
  R extends "LT" | undefined ? ["Lithuania (Lietuva)", R extends "LT" ? R : "LT", 370, "+...(...)..-...", "🇱🇹", { Counties: ["Alytus County", "Kaunas unknownounty", "Klaipeda County", "Marijampole County", "Panevezys County", "Siauliai County", "Taurage County", "Telsiai County", "Utena County", "Vilnius County"] }] : never,
  R extends "LU" | undefined ? ["Luxembourg", R extends "LU" ? R : "LU", 352, "+...(...)...-...", "🇱🇺", { Cantons: ["Diekirch", "Grevenmacher", "Luxembourg"] }] : never,
  R extends "LV" | undefined ? ["Latvia (Latvija)", R extends "LV" ? R : "LV", 371, "+...-..-...-...", "🇱🇻", { Regions: ["Aizkraukle", "Aluksne", "Balvi", "Bauska", "Cesis", "Daugavpils", "Dobele", "Gulbene", "Jekabpils", "Jelgava", "Jurmala", "Kraslava", "Kuldiga", "Liepaja", "Limbazi", "Ludza", "Madona", "Ogre", "Preili", "Rezekne", "Riga", "Saldus", "Talsi", "Tukums", "Valka", "Valmiera", "Ventspils"] }] : never,
  R extends "LY" | undefined ? ["Libya (‫ليبيا‬‎)", R extends "LY" ? R : "LY", 218, "+...-..-...-...", "🇱🇾", { Regions: ["Al Wahat", "Benghazi", "Derna", "Ghat", "Jabal al Akhdar", "Jabal al Gharbi", "Jafara", "Jufra", "Kufra", "Marj", "Misrata", "Murqub", "Murzuq", "Nalut", "Nuqat al Khams", "Sabha", "Sirte", "Tripoli", "Wadi al Hayaa", "Wadi al Shatii", "Zawiya"] }] : never,
  R extends "MA" | undefined ? ["Morocco (‫المغرب‬‎)", R extends "MA" ? R : "MA", 212, "+...-..-....-...", "🇲🇦", { Regions: ["Tanger-Tétouan-Al Hoceïma", "Oriental", "Fès-Meknès", "Rabat-Salé-Kénitra", "Béni Mellal-Khénifra", "Casablanca-Settat", "Marrakesh-Safi", "Drâa-Tafilalet", "Souss-Massa", "Guelmim-Oued Noun", "Laâyoune-Sakia El Hamra", "Dakhla-Oued Ed-Dahab"] }] : never,
  R extends "MC" | undefined ? ["Monaco", R extends "MC" ? R : "MC", 377, "+...-..-...-...", "🇲🇨", { Districts: ["Monaco-Ville", "La Condamine", "Monte Carlo", "Fontvieille"] }] : never,
  R extends "MD" | undefined ? ["Moldova (Republica Moldova)", R extends "MD" ? R : "MD", 373, "+...-....-....", "🇲🇩", { Regions: ["Anenii Noi", "Basarabeasca", "Briceni", "Cahul", "Călărași", "Cantemir", "Căușeni", "Cimișlia", "Criuleni", "Dondușeni", "Drochia", "Dubăsari", "Edineț", "Fălești", "Florești", "Găgăuzia", "Glodeni", "Hîncești", "Ialoveni", "Leova", "Nisporeni", "Ocnița", "Orhei", "Rezina", "Rîșcani", "Sîngerei", "Șoldănești", "Soroca", "Strășeni", "Ștefan Vodă", "Taraclia", "Telenești", "Ungheni"] }] : never,
  R extends "ME" | undefined ? ["Montenegro (Crna Gora)", R extends "ME" ? R : "ME", 382, "+...-..-...-...", "🇲🇪", { Municipalities: ["Andrijevica", "Bar", "Berane", "Bijelo Polje", "Budva", "Cetinje", "Danilovgrad", "Gusinje", "Herceg Novi", "Kolašin", "Kotor", "Mojkovac", "Nikšić", "Petnjica", "Plav", "Pljevlja", "Plužine", "Podgorica", "Rožaje", "Šavnik", "Tivat", "Ulcinj", "Žabljak"] }] : never,
  R extends "MF" | undefined ? ["Saint Martin (Sant-Martin (partie française))", R extends "MF" ? R : "MF", 590, "", "🇲🇫", { Parishes: ["Marigot"] }, 2] : never,
  R extends "MG" | undefined ? ["Madagascar (Madagasikara)", R extends "MG" ? R : "MG", 261, "+...-..-..-.....", "🇲🇬", { Provinces: ["Antananarivo", "Antsiranana", "Fianarantsoa", "Mahajanga", "Toamasina", "Toliara"] }] : never,
  R extends "MH" | undefined ? ["Marshall Islands", R extends "MH" ? R : "MH", 692, "+...-...-....", "🇲🇭", { Municipalities: ["Ailinglaplap", "Ailuk", "Arno", "Aur", "Bikini", "Ebon", "Enewetak", "Jabat", "Jaluit", "Kili", "Kwajalein", "Lae", "Lib", "Likiep", "Majuro", "Maloelap", "Mejit", "Mili", "Namdrik", "Namu", "Rongelap", "Ujae", "Ujelang", "Utirik", "Wotho", "Wotje"] }] : never,
  R extends "MK" | undefined ? ["Macedonia (FYROM) (Македонија)", R extends "MK" ? R : "MK", 389, "+...-..-...-...", "🇲🇰", { Regions: ["Skopje", "Pelagonia", "Polog", "Vardar", "Eastern", "Southwestern", "Northeastern", "Southeastern"] }] : never,
  R extends "ML" | undefined ? ["Mali", R extends "ML" ? R : "ML", 223, "+...-..-..-....", "🇲🇱", { Regions: ["Bamako", "Gao", "Kayes", "Kidal", "Koulikoro", "Mopti", "Segou", "Sikasso", "Tombouctou"] }] : never,
  R extends "MM" | undefined ? ["Myanmar (Burma) (မြန်မာ)", R extends "MM" ? R : "MM", 95, "+..-...-...", "🇲🇲", { States: ["Ayeyarwady", "Bago", "Chin", "Kachin", "Kayah", "Kayin", "Magway", "Mandalay", "Mon", "Naypyidaw Union Territory", "Rakhine", "Sagaing", "Shan", "Tanintharyi", "Yangon"], Regions: ["Sagaing", "Tanintharyi", "Bago", "Magway", "Mandalay", "Yangon", "Ayeyarwady", "Kachin", "Kayah", "Kayin", "Chin", "Mon", "Rakhine", "Shan"] }] : never,
  R extends "MN" | undefined ? ["Mongolia (Монгол)", R extends "MN" ? R : "MN", 976, "+...-..-..-....", "🇲🇳", { Aimags: ["Arkhangai", "Bayan-Ölgii", "Bayankhongor", "Bulgan", "Darkhan-Uul", "Dornod", "Dornogovi", "Dundgovi", "Govi-Altai", "Govisümber", "Khentii", "Khovd", "Khövsgöl", "Ömnögovi", "Orkhon", "Övörkhangai", "Selenge", "Sükhbaatar", "Töv", "Uvs", "Zavkhan"] }] : never,
  R extends "MO" | undefined ? ["Macau (澳門)", R extends "MO" ? R : "MO", 853, "+...-....-....", "🇲🇴", { Freguesias: ["Nossa Senhora de Fátima", "Santo António", "São Lázaro", "São Lourenço", "São Francisco Xavier", "Sé", "Coloane", "Taipa"] }] : never,
  R extends "MP" | undefined ? ["Northern Mariana Islands", R extends "MP" ? R : "MP", 1670, "+.(...)...-....", "🇲🇵", { Municipalities: ["Northern Islands", "Rota", "Saipan", "Tinian"] }] : never,
  R extends "MQ" | undefined ? ["Martinique", R extends "MQ" ? R : "MQ", 596, "+...(...)..-..-..", "🇲🇶", { Arrondissements: ["Fort-de-France", "La Trinité", "Le Marin", "Le Robert", "Saint-Pierre"], Communes: ["L'Ajoupa-Bouillon", "Les Anses-d'Arlet", 'Basse-Pointe', 'Bellefontaine, Martinique', 'Le Carbet', 'Case-Pilote', 'Le Diamant', 'Ducos, Martinique', 'Fonds-Saint-Denis', 'Fort-de-France', 'Le François', "Grand'Rivière", 'Gros-Morne, Martinique', 'Le Lamentin', 'Le Lorrain', 'Macouba', 'Le Marigot', 'Le Marin', 'Le Morne-Rouge', 'Le Morne-Vert', 'Le Prêcheur', 'Rivière-Pilote', 'Rivière-Salée', 'Le Robert', 'Saint-Esprit, Martinique', 'Saint-Joseph, Martinique', 'Saint-Pierre, Martinique', 'Sainte-Anne, Martinique', 'Sainte-Luce, Martinique', 'Sainte-Marie, Martinique', 'Schœlcher', 'La Trinité, Martinique', 'Les Trois-Îlets', 'Le Vauclin'] }] : never,
  R extends "MR" | undefined ? ["Mauritania (‫موريتانيا‬‎)", R extends "MR" ? R : "MR", 222, "+...-..-..-....", "🇲🇷", { Regions: ["Adrar", "Assaba", "Brakna", "Dakhlet Nouadhibou", "Gorgol", "Guidimaka", "Hodh Ech Chargui", "Hodh El Gharbi", "Inchiri", "Nouakchott Nord", "Nouakchott Ouest", "Nouakchott Sud", "Tagant", "Tiris Zemmour", "Trarza"] }] : never,
  R extends "MS" | undefined ? ["Montserrat", R extends "MS" ? R : "MS", 1664, "+.(...)...-....", "🇲🇸", { Parishes: ["Saint Anthony", "Saint Georges", "Saint Peter"] }] : never,
  R extends "MT" | undefined ? ["Malta", R extends "MT" ? R : "MT", 356, "+...-....-....", "🇲🇹", { Districts: ["Gozo", "Malta"] }] : never,
  R extends "MU" | undefined ? ["Mauritius (Moris)", R extends "MU" ? R : "MU", 230, "+...-...-....", "🇲🇺", { Districts: ["Black River", "Flacq", "Grand Port", "Moka", "Pamplemousses", "Plaines Wilhems", "Port Louis", "Rivière du Rempart", "Savanne"] }] : never,
  R extends "MV" | undefined ? ["Maldives", R extends "MV" ? R : "MV", 960, "+...-...-....", "🇲🇻", { Atolls: ["Ari Atoll", "Faafu Atoll", "Lhaviyani Atoll", "Malé Atoll", "Baa Atoll", "Dhaalu Atoll", "Gaafu Alif Atoll", "Haa Alif Atoll", "Kaafu Atoll", "Laamu Atoll", "Meemu Atoll", "Noonu Atoll", "Raa Atoll", "Seenu Atoll", "Thaa Atoll", "Vaavu Atoll"] }] : never,
  R extends "MW" | undefined ? ["Malawi", R extends "MW" ? R : "MW", 265, "+...-.-....-....", "🇲🇼", { Districts: ["Balaka", "Blantyre", "Chikwawa", "Chiradzulu", "Chitipa", "Dedza", "Dowa", "Karonga", "Kasungu", "Likoma", "Lilongwe", "Machinga", "Mangochi", "Mchinji", "Mulanje", "Mwanza", "Mzimba", "Neno", "Nkhata Bay", "Nkhotakota", "Nsanje", "Ntcheu", "Ntchisi", "Phalombe", "Rumphi", "Salima", "Thyolo", "Zomba"] }] : never,
  R extends "MX" | undefined ? ["Mexico (México)", R extends "MX" ? R : "MX", 52, "+..-..-..-....", "🇲🇽", { States: ["Aguascalientes", "Baja California", "Baja California Sur", "Campeche", "Chiapas", "Chihuahua", "Coahuila", "Colima", "Durango", "Guanajuato", "Guerrero", "Hidalgo", "Jalisco", "México", "Michoacán", "Morelos", "Nayarit", "Nuevo León", "Oaxaca", "Puebla", "Querétaro", "Quintana Roo", "San Luis Potosí", "Sinaloa", "Sonora", "Tabasco", "Tamaulipas", "Tlaxcala", "Veracruz", "Yucatán", "Zacatecas"] }] : never,
  R extends "MY" | undefined ? ["Malaysia", R extends "MY" ? R : "MY", 60, "+.. ..-....-....", "🇲🇾", { States: ["Johor", "Kedah", "Kelantan", "Melaka", "Negeri Sembilan", "Pahang", "Perak", "Perlis", "Pulau Pinang", "Sabah", "Sarawak", "Selangor", "Terengganu", "Wilayah Persekutuan Kuala Lumpur", "Wilayah Persekutuan Labuan", "Wilayah Persekutuan Putrajaya"] }] : never,
  R extends "MZ" | undefined ? ["Mozambique (Moçambique)", R extends "MZ" ? R : "MZ", 258, "+...-..-...-...", "🇲🇿", { Provinces: ["Cabo Delgado", "Gaza", "Inhambane", "Manica", "Maputo", "Nampula", "Niassa", "Sofala", "Tete", "Zambezia"] }] : never,
  R extends "NA" | undefined ? ["Namibia (Namibië)", R extends "NA" ? R : "NA", 264, "+...-..-...-....", "🇳🇦", { Regions: ["Erongo", "Hardap", "Karas", "Kavango East", "Kavango West", "Khomas", "Kunene", "Ohangwena", "Omaheke", "Omusati", "Oshana", "Oshikoto", "Otjozondjupa", "Zambezi"] }] : never,
  R extends "NC" | undefined ? ["New Caledonia (Nouvelle-Calédonie)", R extends "NC" ? R : "NC", 687, "+...-..-....", "🇳🇨", { Provinces: ["South Province", "North Province", "Loyalty Islands Province"], Communes: ["Nouméa", "Mont-Dore", "Dumbéa", "Païta", "Yaté", "Bouloupari", "La Foa", "Sarraméa", "Farino", "Moindou", "Bourail", "Poya", "Koné", "Voh", "Kaala-Gomen", "Pouembout", "Poum", "Belep", "Hienghène", "Ponérihouen", "Kouaoua", "Canala", "Thio", "Yaté", "Île des Pins", "Lifou", "Maré", "Ouvéa"] }] : never,
  R extends "NE" | undefined ? ["Niger (Nijar)", R extends "NE" ? R : "NE", 227, "+...-..-..-....", "🇳🇪", { Regions: ["Agadez", "Diffa", "Dosso", "Maradi", "Tahoua", "Tillabéri", "Zinder"] }] : never,
  R extends "NF" | undefined ? ["Norfolk Island", R extends "NF" ? R : "NF", 672, "+...-...-...", "🇳🇫"] : never,
  R extends "NG" | undefined ? ["Nigeria", R extends "NG" ? R : "NG", 234, "+...-..-...-..", "🇳🇬", { States: ["Abia", "Adamawa", "Akwa Ibom", "Anambra", "Bauchi", "Bayelsa", "Benue", "Borno", "Cross River", "Delta", "Ebonyi", "Edo", "Ekiti", "Enugu", "Gombe", "Imo", "Jigawa", "Kaduna", "Kano", "Katsina", "Kebbi", "Kogi", "Kwara", "Lagos", "Nasarawa", "Niger", "Ogun", "Ondo", "Osun", "Oyo", "Plateau", "Rivers", "Sokoto", "Taraba", "Yobe", "Zamfara", "Federal Capital Territory"] }] : never,
  R extends "NI" | undefined ? ["Nicaragua", R extends "NI" ? R : "NI", 505, "+...-....-....", "🇳🇮", { Departments: ["Boaco", "Carazo", "Chinandega", "Chontales", "Estelí", "Granada", "Jinotega", "León", "Madriz", "Managua", "Masaya", "Matagalpa", "Nueva Segovia", "Río San Juan", "Rivas", "Atlántico Norte", "Atlántico Sur"] }] : never,
  R extends "NL" | undefined ? ["Netherlands (Nederland)", R extends "NL" ? R : "NL", 31, "+.. .. ........", "🇳🇱", { Provinces: ["Drenthe", "Flevoland", "Friesland", "Gelderland", "Groningen", "Limburg", "Noord-Brabant", "Noord-Holland", "Overijssel", "Utrecht", "Zeeland", "Zuid-Holland"] }] : never,
  R extends "NO" | undefined ? ["Norway (Norge)", R extends "NO" ? R : "NO", 47, "+.. ... .. ...", "🇳🇴", { Counties: ["Agder", "Innlandet", "Møre og Romsdal", "Nordland", "Oslo", "Rogaland", "Troms og Finnmark", "Trøndelag", "Vestfold og Telemark", "Vestland", "Viken"] }] : never,
  R extends "NP" | undefined ? ["Nepal (नेपाल)", R extends "NP" ? R : "NP", 977, "+...-..-...-...", "🇳🇵", { Provinces: ["Province No. 1", "Province No. 2", "Bagmati Province", "Gandaki Province", "Lumbini Province", "Karnali Province", "Sudurpashchim Province"] }] : never,
  R extends "NR" | undefined ? ["Nauru", R extends "NR" ? R : "NR", 674, "+...-...-....", "🇳🇷", { Districts: ["Aiwo", "Anabar", "Anetan", "Anibare", "Baiti", "Boe", "Buada", "Denigomodu", "Ewa", "Ijuw", "Meneng", "Nibok", "Uaboe", "Yaren"] }] : never,
  R extends "NU" | undefined ? ["Niue", R extends "NU" ? R : "NU", 683, "+...-....", "🇳🇺", { Villages: ["Alofi", "Avatele", "Hakupu", "Hikutavake", "Lakepa", "Makefu", "Mutalau", "Namukulu", "Tamakautoga", "Toi", "Tuapa"] }] : never,
  R extends "NZ" | undefined ? ["New Zealand", R extends "NZ" ? R : "NZ", 64, "+.. ...-...-....", "🇳🇿", { Regions: ["Northland", "Auckland", "Waikato", "Bay of Plenty", "Gisborne", "Hawke's Bay", "Taranaki", "Manawatu-Whanganui", "Wellington", "Tasman", "Nelson", "Marlborough", "West Coast", "Canterbury", "Otago", "Southland"] }] : never,
  R extends "OM" | undefined ? ["Oman (‫عُمان‬‎)", R extends "OM" ? R : "OM", 968, "+...-..-...-...", "🇴🇲", { Governorates: ["Ad Dakhiliyah", "Ad Dhahirah", "Al Batinah North", "Al Batinah South", "Al Buraimi", "Al Wusta", "Ash Sharqiyah North", "Ash Sharqiyah South", "Dhofar", "Musandam", "Muscat"] }] : never,
  R extends "PA" | undefined ? ["Panama (Panamá)", R extends "PA" ? R : "PA", 507, "+...-...-....", "🇵🇦", { Provinces: ["Bocas del Toro", "Chiriquí", "Coclé", "Colón", "Darién", "Emberá-Wounaan", "Guna Yala", "Herrera", "Los Santos", "Ngäbe-Buglé", "Panamá", "Panamá Oeste", "Veraguas"] }] : never,
  R extends "PE" | undefined ? ["Peru (Perú)", R extends "PE" ? R : "PE", 51, "+..(...)...-...", "🇵🇪", { Regions: ["Amazonas", "Áncash", "Apurímac", "Arequipa", "Ayacucho", "Cajamarca", "Callao", "Cusco", "Huancavelica", "Huánuco", "Ica", "Junín", "La Libertad", "Lambayeque", "Lima", "Loreto", "Madre de Dios", "Moquegua", "Pasco", "Piura", "Puno", "San Martín", "Tacna", "Tumbes", "Ucayali"] }] : never,
  R extends "PF" | undefined ? ["French Polynesia (Polynésie française)", R extends "PF" ? R : "PF", 689, "+...-..-..-..", "🇵🇫", { Communes: ["Papeete", "Faaa", "Punaauia"], Subdivisions: ["Marquesas Islands", "Tuamotu-Gambier", "Tubuai Islands"] }] : never,
  R extends "PG" | undefined ? ["Papua New Guinea", R extends "PG" ? R : "PG", 675, "+...(...)..-...", "🇵🇬", { Regions: ["Bougainville", "Central", "Chimbu", "Eastern Highlands", "East New Britain", "East Sepik", "Enga", "Gulf", "Hela", "Jiwaka", "Madang", "Manus", "Milne Bay", "Morobe", "New Ireland", "Northern", "Southern Highlands", "Western", "West New Britain", "West Sepik", "Western Highlands"] }] : never,
  R extends "PH" | undefined ? ["Philippines", R extends "PH" ? R : "PH", 63, "+.. ... ....", "🇵🇭", { Regions: ["Ilocos Region", "Cagayan Valley", "Central Luzon", "Calabarzon", "Mimaropa", "Bicol Region", "Western Visayas", "Central Visayas", "Eastern Visayas", "Zamboanga Peninsula", "Northern Mindanao", "Davao Region", "Soccsksargen", "Caraga", "Bangsamoro Autonomous Region in Muslim Mindanao", "Cordillera Administrative Region", "National Capital Region"] }] : never,
  R extends "PK" | undefined ? ["Pakistan (‫پاکستان‬‎)", R extends "PK" ? R : "PK", 92, "+.. ...-.......", "🇵🇰", { Provinces: ["Balochistan", "Khyber Pakhtunkhwa", "Punjab", "Sindh"], Territories: ["Islamabad Capital Territory", "Gilgit-Baltistan", "Azad Jammu and Kashmir"] }] : never,
  R extends "PL" | undefined ? ["Poland (Polska)", R extends "PL" ? R : "PL", 48, "+.. ...-...-...", "🇵🇱", { Provinces: ["Greater Poland", "Kuyavian-Pomeranian", "Lesser Poland", "Lodz", "Lower Silesian", "Lublin", "Lubusz", "Masovian", "Opole", "Podlasie", "Pomeranian", "Silesian", "Subcarpathian", "Swietokrzyskie", "Warmian-Masurian", "West Pomeranian"] }] : never,
  R extends "PM" | undefined ? ["Saint Pierre and Miquelon (Saint-Pierre-et-Miquelon)", R extends "PM" ? R : "PM", 508, "", "🇵🇲", { Communes: ["Saint-Pierre", "Miquelon-Langlade"] }] : never,
  R extends "PN" | undefined ? ["Pitcairn Islands", R extends "PN" ? R : "PN", 64, "", "🇵🇳"] : never,
  R extends "PR" | undefined ? ["Puerto Rico", R extends "PR" ? R : "PR", 1, "+. (...) ...-....", "🇵🇷", { Municipalities: ["Adjuntas", "Aguada", "Aguadilla", "Aguas Buenas", "Aibonito", "Añasco", "Arecibo", "Arroyo", "Barceloneta", "Barranquitas", "Bayamón", "Cabo Rojo", "Caguas", "Camuy", "Canóvanas", "Carolina", "Cataño", "Cayey", "Ceiba", "Ciales", "Cidra", "Coamo", "Comerío", "Corozal", "Culebra", "Dorado", "Fajardo", "Florida", "Guánica", "Guayama", "Guayanilla", "Guaynabo", "Gurabo", "Hatillo", "Hormigueros", "Humacao", "Isabela", "Jayuya", "Juana Díaz", "Juncos", "Lajas", "Lares", "Las Marías", "Las Piedras", "Loíza", "Luquillo", "Manatí", "Maricao", "Maunabo", "Mayagüez", "Moca", "Morovis", "Naguabo", "Naranjito", "Orocovis", "Patillas", "Peñuelas", "Ponce", "Quebradillas", "Rincón", "Río Grande", "Sabana Grande", "Salinas", "San Germán", "San Juan", "San Lorenzo", "San Sebastián", "Santa Isabel", "Toa Alta", "Toa Baja", "Trujillo Alto", "Utuado", "Vega Alta", "Vega Baja", "Vieques", "Villalba", "Yabucoa", "Yauco"] }, 3, ["787", "939"]] : never,
  R extends "PS" | undefined ? ["Palestine (‫فلسطين‬‎)", R extends "PS" ? R : "PS", 970, "+...-..-...-....", "🇵🇸", { Governorates: ["Gaza Strip", "West Bank"] }] : never,
  R extends "PT" | undefined ? ["Portugal", R extends "PT" ? R : "PT", 351, "+...-..-...-....", "🇵🇹", { Regions: ["Azores", "Alentejo", "Algarve", "Centro", "Lisbon", "Madeira", "Norte"] }] : never,
  R extends "PW" | undefined ? ["Palau", R extends "PW" ? R : "PW", 680, "+...-...-....", "🇵🇼", { States: ["Aimeliik", "Airai", "Angaur", "Hatohobei", "Kayangel", "Koror", "Melekeok", "Ngaraard", "Ngarchelong", "Ngardmau", "Ngatpang", "Ngchesar", "Ngeremlengui", "Ngiwal", "Peleliu", "Sonsorol"] }] : never,
  R extends "PY" | undefined ? ["Paraguay", R extends "PY" ? R : "PY", 595, "+...(...)...-...", "🇵🇾", { Departments: ["Alto Paraguay", "Alto Paraná", "Amambay", "Boquerón", "Caaguazú", "Caazapá", "Canindeyú", "Central", "Concepción", "Cordillera", "Guairá", "Itapúa", "Misiones", "Ñeembucú", "Paraguarí", "Presidente Hayes", "San Pedro"] }] : never,
  R extends "QA" | undefined ? ["Qatar (‫قطر‬‎)", R extends "QA" ? R : "QA", 974, "+...-....-....", "🇶🇦", { Municipalities: ["Doha", "Al Rayyan", "Umm Salal", "Al Khor", "Al Wakrah", "Al Daayen", "Madinat ash Shamal", "Al Shamal", "Al Ruwais"] }] : never,
  R extends "RE" | undefined ? ["Réunion (La Réunion)", R extends "RE" ? R : "RE", 262, "+...-.....-....", "🇷🇪", { Arrondissements: ["Saint-Denis", "Saint-Paul", "Saint-Pierre", "Saint-Benoit"], Communes: ['Les Avirons', 'Bras-Panon', 'Cilaos', 'Entre-Deux', "L'Étang-Salé", 'Petite-Île', 'La Plaine-des-Palmistes', 'Le Port, Réunion', 'La Possession', 'Saint-André, Réunion', 'Saint-Benoît, Réunion', 'Saint-Denis, Réunion', 'Sainte-Marie, Réunion', 'Sainte-Rose, Réunion', 'Sainte-Suzanne, Réunion', 'Saint-Joseph, Réunion', 'Saint-Leu, Réunion', 'Saint-Louis, Réunion', 'Saint-Paul, Réunion', 'Saint-Philippe', 'Saint-Pierre, Réunion', 'Salazie', 'Le Tampon', 'Les Trois-Bassins', 'Coat of arms of Réunion'], Cantons: ["L'Étang-Salé", 'Le Port', 'La Possession', 'Saint-André-1', 'Saint-André-2', 'Saint-André-3', 'Saint-Benoît-1', 'Saint-Benoît-2', 'Saint-Denis-1', 'Saint-Denis-2', 'Saint-Denis-3', 'Saint-Denis-4', 'Sainte-Marie', 'Saint-Joseph', 'Saint-Leu', 'Saint-Louis-1', 'Saint-Louis-2', 'Saint-Paul-1', 'Saint-Paul-2', 'Saint-Paul-3', 'Saint-Pierre-1', 'Saint-Pierre-2', 'Saint-Pierre-3', 'Le Tampon-1', 'Le Tampon-2'] }] : never,
  R extends "RO" | undefined ? ["Romania (România)", R extends "RO" ? R : "RO", 40, "+..-..-...-....", "🇷🇴", { Regions: ["Moldova", "Muntenia", "Transylvania", "Banat", "Crisana", "Dobrogea", "Maramures", "Oltenia", "Bucovina", "Mehedinti", "Craiova", "Pitesti", "Sibiu", "Targu Mures", "Timisoara", "Cluj-Napoca", "Iasi", "Bucharest"] }] : never,
  R extends "RS" | undefined ? ["Serbia (Србија)", R extends "RS" ? R : "RS", 381, "+...-..-...-....", "🇷🇸", { Districts: ["Belgrade", "Nišava", "Šumadija", "Zaječar", "Podunavlje", "Bor", "Braničevo", "Pomoravlje", "Zlatibor", "Moravica", "Raška", "Rasina", "Toplica", "Mačva", "Kolubara", "Jablanica", "Pčinja", "Pirot", "Branicevo", "Juzni Banat", "Srednji Banat", "Severni Banat", "Zapadna Bačka", "Južna Bačka", "Severna Bačka", "Srem", "Mačva", "Kolubara", "Podrinje", "Kosovo", "Kosovska Mitrovica", "Peć", "Prizren", "Kosovska Mitrovica", "Peć", "Prizren"] }] : never,
  R extends "RU" | undefined ? ["Russia (Россия)", R extends "RU" ? R : "RU", 7, "+.-(...)-...-....", "🇷🇺", { "Federal Subjects": ["Moscow", "Saint Petersburg", "Novosibirsk", "Yekaterinburg", "Nizhny Novgorod", "Kazan", "Chelyabinsk", "Omsk", "Samara", "Rostov-on-Don", "Ufa", "Krasnoyarsk", "Perm", "Voronezh", "Volgograd", "Krasnodar", "Saratov", "Tyumen", "Tolyatti", "Izhevsk"] }] : never,
  R extends "RW" | undefined ? ["Rwanda", R extends "RW" ? R : "RW", 250, "+...(...)...-...", "🇷🇼", { Provinces: ["Kigali", "Eastern", "Northern", "Southern", "Western"] }] : never,
  R extends "SA" | undefined ? ["Saudi Arabia (‫المملكة العربية السعودية‬‎)", R extends "SA" ? R : "SA", 966, "+...-..-...-....", "🇸🇦", { Regions: ["Riyadh", "Makkah", "Madinah", "Eastern Province", "Asir", "Tabuk", "Qassim", "Ha'il", "Jizan", "Najran", "Al Bahah", "Northern Borders", "Jawf", "Hail"] }] : never,
  R extends "SB" | undefined ? ["Solomon Islands", R extends "SB" ? R : "SB", 677, "+...-.....", "🇸🇧", { Provinces: ["Central Province", "Choiseul", "Guadalcanal", "Honiara", "Isabel", "Makira-Ulawa", "Malaita", "Rennell and Bellona", "Temotu", "Western Province"] }] : never,
  R extends "SC" | undefined ? ["Seychelles", R extends "SC" ? R : "SC", 248, "+...-.-...-...", "🇸🇨", { "Inner Islands": ["Mahé", "Praslin", "La Digue"], "Outer Islands": ["Alphonse", "Desroches", "Farquhar", "Aldabra"] }] : never,
  R extends "SG" | undefined ? ["Singapore", R extends "SG" ? R : "SG", 65, "+.. ....-....", "🇸🇬", { Regions: ["Central Region", "East Region", "North Region", "North-East Region", "West Region"] }] : never,
  R extends "SI" | undefined ? ["Slovenia (Slovenija)", R extends "SI" ? R : "SI", 386, "+...-..-...-...", "🇸🇮", { Regions: ["Pomurska", "Podravska", "Koroška", "Savinjska", "Zasavska", "Posavska", "Jugovzhodna Slovenija", "Osrednjeslovenska", "Gorenjska", "Primorsko-notranjska", "Goriška", "Obalno-kraška"] }] : never,
  R extends "SK" | undefined ? ["Slovakia (Slovensko)", R extends "SK" ? R : "SK", 421, "+...(...)...-...", "🇸🇰", { Regions: ["Bratislava", "Trnava", "Trenčín", "Nitra", "Žilina", "Banská Bystrica", "Prešov", "Košice"] }] : never,
  R extends "SL" | undefined ? ["Sierra Leone", R extends "SL" ? R : "SL", 232, "+...-..-......", "🇸🇱", { Provinces: ["Eastern Province", "Northern Province", "Southern Province", "Western Area"] }] : never,
  R extends "SM" | undefined ? ["San Marino", R extends "SM" ? R : "SM", 378, "+...-....-......", "🇸🇲", { Municipalities: ["Acquaviva", "Borgo Maggiore", "Chiesanuova", "Domagnano", "Faetano", "Fiorentino", "Montegiardino", "San Marino", "Serravalle"] }] : never,
  R extends "SN" | undefined ? ["Senegal (Sénégal)", R extends "SN" ? R : "SN", 221, "+...-..-...-....", "🇸🇳", { Regions: ["Dakar", "Thiès", "Diourbel", "Fatick", "Kaolack", "Kolda", "Louga", "Matam", "Saint-Louis", "Sédhiou", "Tambacounda", "Kaffrine", "Kédougou", "Kolda", "Ziguinchor"] }] : never,
  R extends "SO" | undefined ? ["Somalia (Soomaaliya)", R extends "SO" ? R : "SO", 252, "+...-.-...-...", "🇸🇴", { Regions: ["Awdal", "Bakool", "Banaadir", "Bari", "Bay", "Galguduud", "Gedo", "Hiiraan", "Jubbada Dhexe", "Jubbada Hoose", "Mudug", "Nugaal", "Sanaag", "Shabeellaha Dhexe", "Shabeellaha Hoose", "Sool", "Togdheer", "Woqooyi Galbeed"] }] : never,
  R extends "ST" | undefined ? ["São Tomé and Príncipe (São Tomé e Príncipe)", R extends "ST" ? R : "ST", 239, "+...-..-.....", "🇸🇹", { Provinces: ["Príncipe", "São Tomé"] }] : never,
  R extends "SV" | undefined ? ["El Salvador", R extends "SV" ? R : "SV", 503, "+... ....-....", "🇸🇻", { Departments: ["Ahuachapán", "Cabañas", "Chalatenango", "Cuscatlán", "La Libertad", "La Paz", "La Unión", "Morazán", "San Miguel", "San Salvador", "San Vicente", "Santa Ana", "Sonsonate", "Usulután"] }] : never,
  R extends "SX" | undefined ? ["Sint Maarten", R extends "SX" ? R : "SX", 1721, "+.(...)...-....", "🇸🇽", { Regions: ["Dutch Quarter", "French Quarter", "Little Bay", "Lowlands", "Maho", "Pelican Key", "Philipsburg", "Point Blanche", "Simpson Bay"] }] : never,
  R extends "TC" | undefined ? ["Turks and Caicos Islands", R extends "TC" ? R : "TC", 1649, "+.(...)...-....", "🇹🇨", { Districts: ["Grand Turk", "Salt Cay", "South Caicos", "Providenciales", "North Caicos", "Middle Caicos"] }] : never,
  R extends "TD" | undefined ? ["Chad (Tchad)", R extends "TD" ? R : "TD", 235, "+...-..-..-..-..", "🇹🇩", { Regions: ["Batha", "Borkou", "Ennedi", "Ennedi-Est", "Ennedi-Ouest", "Guéra", "Hadjer-Lamis", "Kanem", "Lac", "Logone Occidental", "Logone Oriental", "Mandoul", "Mayo-Kebbi Est", "Mayo-Kebbi Ouest", "Moyen-Chari", "N'Djamena", "Ouaddaï", "Salamat", "Sila", "Tandjilé", "Tibesti", "Wadi Fira"] }] : never,
  R extends "TF" | undefined ? ["French Southern and Antarctic Lands", R extends "TF" ? R : "TF", 262, "", "🇹🇫", { Districts: ["Kerguelen Islands", "Crozet Islands", "Amsterdam Island", "Saint-Paul Island"] }] : never,
  R extends "TG" | undefined ? ["Togo", R extends "TG" ? R : "TG", 228, "+...-..-...-...", "🇹🇬", { Regions: ["Centrale", "Kara", "Maritime", "Plateaux", "Savanes"] }] : never,
  R extends "TH" | undefined ? ["Thailand (ไทย)", R extends "TH" ? R : "TH", 66, "+..-..-...-...", "🇹🇭", { Regions: ["Bangkok", "Central Thailand", "Eastern Thailand", "Northern Thailand", "Northeastern Thailand", "Southern Thailand", "Western Thailand"] }] : never,
  R extends "TK" | undefined ? ["Tokelau", R extends "TK" ? R : "TK", 690, "+...-....", "🇹🇰", { Villages: ["Atafu", "Fakaofo", "Nukunonu"] }] : never,
  R extends "TL" | undefined ? ["Timor-Leste", R extends "TL" ? R : "TL", 670, "+...-...-....", "🇹🇱", { Districts: ["Aileu", "Ainaro", "Baucau", "Bobonaro", "Cova Lima", "Dili", "Ermera", "Lautem", "Liquiçá", "Manatuto", "Manufahi", "Oecusse", "Viqueque"] }] : never,
  R extends "TM" | undefined ? ["Turkmenistan", R extends "TM" ? R : "TM", 993, "+...-.-...-....", "🇹🇲", { Regions: ["Ahal", "Balkan", "Daşoguz", "Lebap", "Mary"] }] : never,
  R extends "TN" | undefined ? ["Tunisia (‫تونس‬‎)", R extends "TN" ? R : "TN", 216, "+...-..-...-...", "🇹🇳", { Regions: ["Tunis", "Ariana", "Ben Arous", "Manouba", "Nabeul", "Zaghouan", "Bizerte", "Béja", "Jendouba", "Kef", "Siliana", "Kairouan", "Kasserine", "Sidi Bouzid", "Sousse", "Monastir", "Mahdia", "Sfax", "Gabès", "Medenine", "Tataouine", "Gafsa", "Tozeur", "Kebili"] }] : never,
  R extends "TO" | undefined ? ["Tonga", R extends "TO" ? R : "TO", 676, "+...-.....", "🇹🇴", { Regions: ["Eua", "Ha'apai", "Niuas", "Tongatapu", "Vava'u"] }] : never,
  R extends "TR" | undefined ? ["Turkey (Türkiye)", R extends "TR" ? R : "TR", 90, "+.. ... ... .. ..", "🇹🇷", { Regions: ["Adana", "Adıyaman", "Afyonkarahisar", "Ağrı", "Amasya", "Ankara", "Antalya", "Artvin", "Aydın", "Balıkesir", "Bilecik", "Bingöl", "Bitlis", "Bolu", "Burdur", "Bursa", "Çanakkale", "Çankırı", "Çorum", "Denizli", "Diyarbakır", "Edirne", "Elazığ", "Erzincan", "Erzurum", "Eskişehir", "Gaziantep", "Giresun", "Gümüşhane", "Hakkâri", "Hatay", "Isparta", "Mersin", "İstanbul", "İzmir", "Kars", "Kastamonu", "Kayseri", "Kırklareli", "Kırşehir", "Kocaeli", "Konya", "Kütahya", "Malatya", "Manisa", "Kahramanmaraş", "Mardin", "Muğla", "Muş", "Nevşehir", "Niğde", "Ordu", "Rize", "Sakarya", "Samsun", "Siirt", "Sinop", "Sivas", "Tekirdağ", "Tokat", "Trabzon", "Tunceli", "Şanlıurfa", "Uşak", "Van", "Yozgat", "Zonguldak", "Aksaray", "Bayburt", "Karaman", "Kırıkkale", "Batman", "Şırnak", "Bartın", "Ardahan", "Iğdır", "Yalova", "Karabük", "Kilis", "Osmaniye", "Düzce"] }] : never,
  R extends "TT" | undefined ? ["Trinidad and Tobago", R extends "TT" ? R : "TT", 1868, "+.(...)...-....", "🇹🇹", { Municipalities: ["Siparia", "Sangre Grande", "Port of Spain", "Arima", "Point Fortin", "Chaguanas", "Diego Martin", "San Fernando"], Regions: ["Eastern Tobago", "Couva-Tabaquite-Talparo", "Princes Town", "Rio Claro-Mayaro", "Penal-Debe", "Sangre Grande", "San Juan-Laventille", "Tunapuna-Piarco"] }] : never,
  R extends "TV" | undefined ? ["Tuvalu", R extends "TV" ? R : "TV", 688, "+...-.....", "🇹🇻", { Islands: ["Funafuti", "Nanumea", "Nui", "Nukufetau", "Nukulaelae", "Vaitupu"] }] : never,
  R extends "UA" | undefined ? ["Ukraine (Україна)", R extends "UA" ? R : "UA", 380, "+...(..)...-..-..", "🇺🇦", { Oblasts: ["Cherkasy", "Chernihiv", "Chernivtsi", "Dnipropetrovsk", "Donetsk", "Ivano-Frankivsk", "Kharkiv", "Kherson", "Khmelnytskyi", "Kiev", "Kirovohrad", "Luhansk", "Lviv", "Mykolaiv", "Odessa", "Poltava", "Rivne", "Sumy", "Ternopil", "Vinnytsia", "Volyn", "Zakarpattia", "Zaporizhzhia", "Zhytomyr", "Autonomous Republic of Crimea"] }] : never,
  R extends "UG" | undefined ? ["Uganda", R extends "UG" ? R : "UG", 256, "+...(...)...-...", "🇺🇬", { Regions: ["Central Region", "Eastern Region", "Northern Region", "Western Region"] }] : never,
  R extends "UM" | undefined ? ["United States Minor Outlying Islands", R extends "UM" ? R : "UM", 1, "", "🇺🇲", { Territories: ["Baker Island", "Howland Island", "Jarvis Island", "Johnston Atoll", "Kingman Reef", "Midway Atoll", "Navassa Island", "Palmyra Atoll", "Wake Island"] }, 2] : never,
  R extends "US" | undefined ? ["United States", R extends "US" ? R : "US", 1, "+. (...) ...-....", "🇺🇸", { States: ["Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", "Delaware", "Florida", "Georgia", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland", "Massachusetts", "Michigan", "Minnesota", "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire", "New Jersey", "New Mexico", "New York", "North Carolina", "North Dakota", "Ohio", "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island", "South Carolina", "South Dakota", "Tennessee", "Texas", "Utah", "Vermont", "Virginia", "Washington", "West Virginia", "Wisconsin", "Wyoming"] }, 0] : never,
  R extends "UY" | undefined ? ["Uruguay", R extends "UY" ? R : "UY", 598, "+...-.-...-..-..", "🇺🇾", { Departments: ["Artigas", "Canelones", "Cerro Largo", "Colonia", "Durazno", "Flores", "Florida", "Lavalleja", "Maldonado", "Montevideo", "Paysandú", "Río Negro", "Rivera", "Rocha", "Salto", "San José", "Soriano", "Tacuarembó", "Treinta y Tres"] }] : never,
  R extends "UZ" | undefined ? ["Uzbekistan (Oʻzbekiston)", R extends "UZ" ? R : "UZ", 998, "+...-..-...-....", "🇺🇿", { Regions: ["Andijan", "Bukhara", "Fergana", "Jizzakh", "Karakalpakstan", "Namangan", "Navoiy", "Qashqadaryo", "Samarqand", "Sirdaryo", "Surxondaryo", "Tashkent", "Tashkent City", "Xorazm"] }] : never,
  R extends "VA" | undefined ? ["Vatican City (Città del Vaticano)", R extends "VA" ? R : "VA", 39, "+.. .. .... ....", "🇻🇦", 1] : never,
  R extends "VC" | undefined ? ["Saint Vincent and the Grenadines", R extends "VC" ? R : "VC", 1784, "+.(...)...-....", "🇻🇨", { Parishes: ["Charlotte", "Grenadines", "Saint Andrew", "Saint David", "Saint George", "Saint Patrick"] }] : never,
  R extends "VE" | undefined ? ["Venezuela", R extends "VE" ? R : "VE", 58, "+..(...)...-....", "🇻🇪", { States: ["Amazonas", "Anzoátegui", "Apure", "Aragua", "Barinas", "Bolívar", "Carabobo", "Cojedes", "Delta Amacuro", "Falcón", "Guárico", "Lara", "Mérida", "Miranda", "Monagas", "Nueva Esparta", "Portuguesa", "Sucre", "Táchira", "Trujillo", "Vargas", "Yaracuy", "Zulia"] }] : never,
  R extends "VG" | undefined ? ["British Virgin Islands", R extends "VG" ? R : "VG", 1284, "+.(...)...-....", "🇻🇬", { Districts: ["Tortola", "Virgin Gorda", "Anegada", "Jost Van Dyke"] }] : never,
  R extends "VI" | undefined ? ["U.S. Virgin Islands", R extends "VI" ? R : "VI", 1340, "+.(...)...-....", "🇻🇮", { Districts: ["Saint Croix", "Saint John", "Saint Thomas"] }] : never,
  R extends "VN" | undefined ? ["Vietnam (Việt Nam)", R extends "VN" ? R : "VN", 84, "+..-..-....-...", "🇻🇳", { Regions: ["Hanoi", "Ho Chi Minh City", "Da Nang", "Hai Phong", "Can Tho", "Bien Hoa", "Hue", "Nha Trang", "Buon Ma Thuot", "Quy Nhon", "Vung Tau", "Nam Dinh", "Phan Thiet", "Long Xuyen", "Ha Long", "Thai Nguyen", "Thanh Hoa", "Rach Gia", "Cam Ranh", "Vinh", "My Tho", "Da Lat", "Bac Lieu", "Bien Hoa"] }] : never,
  R extends "VU" | undefined ? ["Vanuatu", R extends "VU" ? R : "VU", 678, "+...-.....", "🇻🇺", { Provinces: ["Malampa", "Penama", "Sanma", "Shefa", "Tafea", "Torba"] }] : never,
  R extends "WF" | undefined ? ["Wallis and Futuna", R extends "WF" ? R : "WF", 681, "+...-..-....", "🇼🇫", { Kingdoms: ["Uvea", "Sigave", "Alo"] }] : never,
  R extends "WS" | undefined ? ["Samoa", R extends "WS" ? R : "WS", 685, "+...-..-....", "🇼🇸", { Districts: ["A'ana", "Aiga-i-le-Tai", "Atua", "Fa'asaleleaga", "Gaga'emauga", "Gaga'ifomauga", "Palauli", "Satupa'itea", "Tuamasaga", "Va'a-o-Fonoti", "Vaisigano"] }] : never,
  R extends "XK" | undefined ? ["Kosovo", R extends "XK" ? R : "XK", 383, "", "🇽🇰", { Districts: ["District of Pristina", "District of Mitrovica", "District of Peja", "District of Prizren", "District of Gjilan", "District of Ferizaj"] }] : never,
  R extends "YE" | undefined ? ["Yemen (‫اليمن‬‎)", R extends "YE" ? R : "YE", 967, "+...-.-...-...", "🇾🇪", { Governorates: ["Sana'a", "Aden", "Taiz", "Al Hudaydah", "Ibb", "Dhamar", "Al Mukalla", "Hajjah", "Amran", "Saada", "Saywun", "Zinjibar", "Al Bayda", "Lahij", "Marib", "Al Ghaydah", "Al Mahwit", "Al Hazm", "Ataq", "Al Jawf", "Sadah", "Shabwah", "Al Dhalea", "Rida", "Al Mahrah"] }] : never,
  R extends "YT" | undefined ? ["Mayotte", R extends "YT" ? R : "YT", 262, "", "🇾🇹", {  Cantons: ["Acoua", "Bandraboua", "Bandrélé", "Bouéni", "Chiconi", "Chirongui", "Dembeni", "Dzaoudzi", "Kani-Kéli", "Koungou", "Mamoudzou-1", "Mamoudzou-2", "Mamoudzou-3", "Mamoudzou-4", "Mtsamboro", "M'Tsangamouji", "Ouangani", "Pamandzi", "Sada", "Tsingoni"], Communes: ["Acoua", "Bandraboua", "Bandrélé", "Bouéni", "Chiconi", "Chirongui", "Dembeni", "Dzaoudzi", "Kani-Kéli", "Koungou", "Mamoudzou", "Mtsamboro", "M'Tsangamouji", "Ouangani", "Pamandzi", "Sada", "Tsingoni"] }] : never,
  R extends "ZA" | undefined ? ["South Africa", R extends "ZA" ? R : "ZA", 27, "+..-..-...-....", "🇿🇦", { Provinces: ["Eastern Cape", "Free State", "Gauteng", "KwaZulu-Natal", "Limpopo", "Mpumalanga", "North West", "Northern Cape", "Western Cape"] }] : never,
  R extends "ZM" | undefined ? ["Zambia", R extends "ZM" ? R : "ZM", 260, "+...-..-...-....", "🇿🇲", { Provinces: ["Lusaka", "Copperbelt", "Central", "Eastern", "Luapula", "Northern", "North-Western", "Southern", "Western"] }] : never,
  R extends "ZW" | undefined ? ["Zimbabwe", R extends "ZW" ? R : "ZW", 263, "+...-.-......", "🇿🇼", { Provinces: ["Harare", "Bulawayo", "Manicaland", "Mashonaland Central", "Mashonaland East", "Mashonaland West", "Masvingo", "Matabeleland North", "Matabeleland South", "Midlands"] }] : never
] : never;
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
const countriesArray: CountriesArray = [
  ["Andorra", "AD", 376, "+...-...-...", "🇦🇩", { Regions: ["Andorra la Vella", "Canillo", "Encamp", "Escaldes-Engordany", "La Massana", "Ordino", "Sant Julià de Lòria"] }],
  ["United Arab Emirates (‫الإمارات العربية المتحدة‬‎)", "AE", 971, "+...-.-...-....", "🇦🇪", { Emirates: ["Abu Dhabi", "Ajman", "Dubai", "Fujairah", "Ras Al Khaimah", "Sharjah", "Umm Al Quwain"] }],
  ["Afghanistan (‫افغانستان‬‎)", "AF", 93, "+..-..-...-....", "🇦🇫", { Regions: ["Badakhshan", "Badghis", "Baghlan", "Balkh", "Bamyan", "Daykundi", "Farah", "Faryab", "Ghazni", "Ghor", "Helmand", "Herat", "Jowzjan", "Kabul", "Kandahar", "Kapisa", "Khost", "Kunar", "Kunduz Province", "Laghman", "Logar", "Nangarhar", "Nimruz", "Nuristan", "Paktia", "Paktika", "Panjshir", "Parwan", "Samangan", "Sar-e Pol", "Takhar", "Urozgan", "Zabul"] }],
  ["Antigua and Barbuda", "AG", 1268, "+.(...)...-....", "🇦🇬", { Parishes: ["Saint George", "Saint John", "Saint Mary", "Saint Paul", "Saint Peter", "Saint Philip"] }],
  ["Anguilla", "AI", 1264, "+.(...)...-....", "🇦🇮", { Districts: ["Anguilla Island", "Blowing Point", "East End", "George Hill", "Island Harbour", "North Hill", "North Side", "Sandy Ground", "Sandy Hill", "South Hill", "Stoney Ground", "The Farrington", "The Quarter", "The Valley", "West End"] }],
  ["Albania (Shqipëri)", "AL", 355, "+...(...)...-...", "🇦🇱", { Counties: ["Berat", "Dibër", "Durrës", "Elbasan", "Fier", "Gjirokastër", "Korçë", "Kukës", "Lezhë", "Shkodër", "Tirana", "Vlorë"] }],
  ["Armenia (Հայաստան)", "AM", 374, "+...-..-...-...", "🇦🇲", { Provinces: ["Aragatsotn", "Ararat", "Armavir", "Gegharkunik", "Kotayk", "Lori", "Shirak", "Syunik", "Tavush", "Vayots Dzor", "Yerevan"] }],
  ["Angola", "AO", 244, "+...(...)...-...", "🇦🇴", { Provinces: ["Bengo", "Benguela", "Bié", "Cabinda", "Cuando Cubango", "Cuanza Norte", "Cuanza Sul", "Cunene", "Huambo", "Huíla", "Luanda", "Lunda Norte", "Lunda Sul", "Malanje", "Moxico", "Namibe", "Uíge", "Zaire"] }],
  ["Antarctica", "AQ", 672, "", "🇦🇶"],
  ["Argentina", "AR", 54, "+..(...)...-....", "🇦🇷", { Regions: ["Buenos Aires", "Catamarca", "Chaco", "Chubut", "Córdoba", "Corrientes", "Entre Ríos", "Formosa", "Jujuy", "La Pampa", "La Rioja", "Mendoza", "Misiones", "Neuquén", "Río Negro", "Salta", "San Juan", "San Luis", "Santa Cruz", "Santa Fe", "Santiago del Estero", "Tierra del Fuego", "Tucumán"] }],
  ["American Samoa", "AS", 1684, "+.(...)...-....", "🇦🇸", { Districts: ["Eastern District", "Manu'a District", "Rose Island", "Swains Island", "Western District"] }],
  ["Austria (Österreich)", "AT", 43, "+..(...)...-....", "🇦🇹", { States: ["Burgenland", "Carinthia", "Lower Austria", "Upper Austria", "Salzburg", "Styria", "Tyrol", "Vorarlberg", "Vienna"] }],
  ["Australia", "AU", 61, "+.. ... ... ...", "🇦🇺", { States: ["New South Wales", "Queensland", "South Australia", "Tasmania", "Victoria", "Western Australia"], Territories: ["Australian Capital Territory", "Northern Territory"] }],
  ["Aruba", "AW", 297, "+...-...-....", "🇦🇼"],
  ["Åland Islands", "AX", 358, "", "🇦🇽", { Municipalities: ["Mariehamn", "Jomala", "Finström", "Lemland", "Saltvik", "Hammarland", "Sund", "Eckerö", "Föglö", "Geta", "Vårdö", "Brändö", "Lumparland", "Kumlinge", "Kökar", "Sottunga"] }],
  ["Azerbaijan (Azərbaycan)", "AZ", 994, "+...-..-...-..-..", "🇦🇿", { Districts: ["Absheron", "Agdam", "Agdash", "Agstafa", "Agsu", "Astara", "Baku", "Balakan", "Barda", "Beylagan", "Bilasuvar", "Dashkasan", "Fizuli", "Ganja", "Gobustan", "Goranboy", "Goychay", "Goygol", "Hajigabul", "Imishli", "Ismailli", "Jabrayil", "Jalilabad", "Kalbajar", "Kurdamir", "Lachin", "Lankaran", "Lankaran", "Lerik", "Masally", "Mingachevir", "Naftalan", "Nakhchivan", "Neftchala", "Oghuz", "Ordubad", "Qabala", "Qakh", "Qazakh", "Quba", "Qubadli", "Qusar", "Saatly", "Sabirabad", "Salyan", "Shabran", "Shaki", "Shamakhi", "Shamkir", "Shirvan", "Shusha", "Siazan", "Sumgayit", "Tartar", "Tovuz", "Ujar", "Yardymli", "Yevlakh", "Zangilan", "Zaqatala", "Zardab"] }],
  ["Bosnia and Herzegovina (Босна и Херцеговина)", "BA", 387, "+...-..-....", "🇧🇦", { Regions: ["Brčko District", "Federation of Bosnia and Herzegovina", "Republika Srpska"] }],
  ["Barbados", "BB", 1246, "+.(...)...-....", "🇧🇧", { Regions: ["Christ Church", "Saint Andrew", "Saint George", "Saint James", "Saint John", "Saint Joseph", "Saint Lucy", "Saint Michael", "Saint Peter", "Saint Philip", "Saint Thomas"] }],
  ["Bangladesh (বাংলাদেশ)", "BD", 880, "+...-..-...-...", "🇧🇩", { Districts: ["Barisal", "Chittagong", "Dhaka", "Khulna", "Mymensingh", "Rajshahi", "Rangpur", "Sylhet"] }],
  ["Belgium (België)", "BE", 32, "+.. ... .. .. ..", "🇧🇪", { States: ["Brussels", "Flemish Brabant", "Walloon Brabant", "Antwerp", "East Flanders", "West Flanders", "Hainaut", "Liège", "Limburg", "Luxembourg", "Namur"] }],
  ["Burkina Faso", "BF", 226, "+...-..-..-....", "🇧🇫", { Provinces: ["Balé", "Bam", "Banwa", "Bazèga", "Bougouriba", "Boulgou", "Boulkiemdé", "Comoé", "Ganzourgou", "Gnagna", "Gourma", "Houet", "Ioba", "Kadiogo", "Kénédougou", "Komondjari", "Kompienga", "Kossi", "Koulpélogo", "Kouritenga", "Kourwéogo", "Léraba", "Loroum", "Mouhoun", "Namentenga", "Nahouri", "Nayala", "Noumbiel", "Oubritenga", "Oudalan", "Passoré", "Poni", "Sanguié", "Sanmatenga", "Séno", "Sissili", "Soum", "Sourou", "Tapoa", "Tui", "Yagha", "Yatenga", "Ziro", "Zondoma", "Zoundwéogo"] }],
  ["Bulgaria (България)", "BG", 359, "+...(...)...-...", "🇧🇬", { States: ["Blagoevgrad", "Burgas", "Dobrich", "Gabrovo", "Haskovo", "Kardzhali", "Kyustendil", "Lovech", "Montana", "Pazardzhik", "Pernik", "Pleven", "Plovdiv", "Razgrad", "Ruse", "Shumen", "Silistra", "Sliven", "Smolyan", "Sofia", "Stara Zagora", "Targovishte", "Varna", "Veliko Tarnovo", "Vidin", "Vratsa", "Yambol"] }],
  ["Bahrain (‫البحرين‬‎)", "BH", 973, "+...-....-....", "🇧🇭", { Governorates: ["Capital Governorate", "Muharraq Governorate", "Northern Governorate", "Southern Governorate"] }],
  ["Burundi (Uburundi)", "BI", 257, "+...-..-..-....", "🇧🇮", { Provinces: ["Bubanza", "Bujumbura Mairie", "Bujumbura Rural", "Bururi", "Cankuzo", "Cibitoke", "Gitega", "Karuzi", "Kayanza", "Kirundo", "Makamba", "Muramvya", "Muyinga", "Mwaro", "Ngozi", "Rumonge", "Rutana", "Ruyigi"] }],
  ["Benin (Bénin)", "BJ", 229, "+...-..-..-....", "🇧🇯", { Departments: ["Alibori", "Atakora", "Atlantique", "Borgou", "Collines", "Donga", "Kouffo", "Littoral", "Mono", "Ouémé", "Plateau", "Zou"] }],
  ["Saint Barthélemy (Saint-Barthélemy)", "BL", 590, "", "🇧🇱", { Parishes: ["Gustavia"] }, 1],
  ["Bermuda", "BM", 1441, "+.(...)...-....", "🇧🇲", { Parishes: ["Devonshire", "Hamilton", "Paget", "Pembroke", "Sandys", "Smith's", "Southampton", "St. George's", "Warwick"], Municipalities: ["Hamilton", "St. George's"] }],
  ["Brunei", "BN", 673, "+...-...-....", "🇧🇳", { Districts: ["Belait", "Brunei-Muara", "Temburong", "Tutong"] }],
  ["Bolivia", "BO", 591, "+...-.-...-....", "🇧🇴", { States: ["Chuquisaca", "Cochabamba", "Beni", "La Paz", "Oruro", "Pando", "Potosí", "Santa Cruz", "Tarija"] }],
  ["Caribbean Netherlands", "BQ", 599, "+...-...-....", "🇧🇶", { "Special Municipalities": ["Bonaire", "Saba", "Sint Eustatius"] }, 1],
  ["Brazil (Brasil)", "BR", 55, "+..-..-....-....", "🇧🇷", { Regions: ["Acre", "Alagoas", "Amapá", "Amazonas", "Bahia", "Ceará", "Distrito Federal", "Espírito Santo", "Goiás", "Maranhão", "Mato Grosso", "Mato Grosso do Sul", "Minas Gerais", "Pará", "Paraíba", "Paraná", "Pernambuco", "Piauí", "Rio de Janeiro", "Rio Grande do Norte", "Rio Grande do Sul", "Rondônia", "Roraima", "Santa Catarina", "São Paulo", "Sergipe", "Tocantins"] }],
  ["Bahamas", "BS", 1242, "+.(...)...-....", "🇧🇸", { Regions: ["Acklins", "Berry Islands", "Bimini", "Black Point", "Cat Island", "Central Abaco", "Central Andros", "Central Eleuthera", "City of Freeport", "Crooked Island and Long Cay", "East Grand Bahama", "Exuma", "Grand Cay", "Harbour Island", "Hope Town", "Inagua", "Long Island", "Mangrove Cay", "Mayaguana", "Moore's Island", "North Abaco", "North Andros", "North Eleuthera", "Ragged Island", "Rum Cay", "San Salvador", "South Abaco", "South Andros", "South Eleuthera", "Spanish Wells", "West Grand Bahama"] }],
  ["Bhutan (འབྲུག)", "BT", 975, "+...-.-...-...", "🇧🇹", { Regions: ["Bumthang", "Chukha", "Dagana", "Gasa", "Haa", "Lhuntse", "Mongar", "Paro", "Pemagatshel", "Punakha", "Samdrup Jongkhar", "Samtse", "Sarpang", "Thimphu", "Trashigang", "Trashiyangtse", "Trongsa", "Tsirang", "Wangdue Phodrang", "Zhemgang"] }],
  ["Bouvet Island", "BV", 47, "", "🇧🇻"],
  ["Botswana", "BW", 267, "+...-..-...-...", "🇧🇼", { Districts: ["Central District", "Ghanzi District", "Kgalagadi District", "Kgatleng District", "Kweneng District", "North-East District", "North-West District", "South-East District", "Southern District"] }],
  ["Belarus (Беларусь)", "BY", 375, "+...(..)...-..-..", "🇧🇾", { Regions: ["Brest Region", "Gomel Region", "Grodno Region", "Minsk Region", "Mogilev Region", "Vitebsk Region"] }],
  ["Belize", "BZ", 501, "+...-...-....", "🇧🇿", { Districts: ["Belize District", "Cayo District", "Corozal District", "Orange Walk District", "Stann Creek District", "Toledo District"] }],
  ["Canada", "CA", 1, "+. (...) ...-....", "🇨🇦", { Provinces: ["Alberta", "British Columbia", "Manitoba", "New Brunswick", "Newfoundland and Labrador", "Nova Scotia", "Ontario", "Prince Edward Island", "Quebec", "Saskatchewan"], Territories: ["Northwest Territories", "Nunavut", "Yukon"] }, 1, ["204", "236", "249", "250", "289", "306", "343", "365", "387", "403", "416", "418", "431", "437", "438", "450", "506", "514", "519", "548", "579", "581", "587", "604", "613", "639", "647", "672", "705", "709", "742", "778", "780", "782", "807", "819", "825", "867", "873", "902", "905"]],
  ["Cocos (Keeling) Islands", "CC", 61, "", "🇨🇨"],
  ["Congo (DRC) (Jamhuri ya Kidemokrasia ya Kongo)", "CD", 243, "+...(...)...-...", "🇨🇩", { Provinces: ["Kinshasa", "Kongo Central", "Kwango", "Kwilu", "Kasai", "Kasai-Central", "Kasai-Oriental", "Sankuru", "Maniema", "South Kivu", "North Kivu", "Ituri", "Haut-Uele", "Tshopo", "Bas-Uele", "Tanganyika", "Haut-Lomami", "Lualaba", "Kwango", "Kwilu", "Kasai", "Kasai-Central", "Kasai-Oriental", "Sankuru", "Maniema", "South Kivu", "North Kivu", "Ituri", "Haut-Uele", "Tshopo", "Bas-Uele", "Tanganyika", "Haut-Lomami", "Lualaba"] }],
  ["Central African Republic (République centrafricaine)", "CF", 236, "+...-..-..-....", "🇨🇫", { Regions: ["Bamingui-Bangoran", "Bangui", "Basse-Kotto", "Haute-Kotto", "Haut-Mbomou", "Kémo", "Lobaye", "Mambéré-Kadéï", "Mbomou", "Nana-Grébizi", "Nana-Mambéré", "Ombella-M'Poko", "Ouaka", "Ouham", "Ouham-Pendé", "Sangha-Mbaéré", "Vakaga"] }],
  ["Congo (Republic) (Congo-Brazzaville)", "CG", 242, "+...-..-...-....", "🇨🇬", { Departments: ["Bouenza", "Cuvette", "Cuvette-Ouest", "Kouilou", "Lékoumou", "Likouala", "Niari", "Plateaux", "Pool", "Sangha"] }],
  ["Côte d’Ivoire", "CI", 225, "+...-..-...-...", "🇨🇮", { Regions: ["Lagunes", "Haut-Sassandra", "Savanes", "Vallée du Bandama", "Moyen-Comoé", "18 Montagnes", "Lacs", "Zanzan", "Bas-Sassandra", "Denguélé", "N'zi-Comoé", "Marahoué", "Sud-Comoé", "Worodougou", "Sud-Bandama", "Agnéby-Tiassa", "Bafing", "Gbêkê", "Fromager", "Moyen-Cavally", "Nawa", "Indénié-Djuablin", "Bounkani", "Moronou", "Gbôklé", "Iffou", "Bagoué", "Tchologo", "Poro", "Kabadougou", "Béré", "Korhogo"] }],
  ["Cook Islands", "CK", 682, "+...-..-...", "🇨🇰", { Islands: ["Aitutaki", "Atiu", "Mangaia", "Manihiki", "Mauke", "Mitiaro", "Nassau", "Palmerston", "Penrhyn", "Pukapuka", "Rakahanga", "Rarotonga", "Suwarrow", "Takutea"], Districts: ["Avarua", "Matavera", "Ngatangiia", "Takitumu"] }],
  ["Chile", "CL", 56, "+..-.-....-....", "🇨🇱", { States: ["Arica y Parinacota", "Tarapacá", "Antofagasta", "Atacama", "Coquimbo", "Valparaíso", "Región Metropolitana de Santiago", "Libertador General Bernardo O'Higgins", "Maule", "Ñuble", "Biobío", "La Araucanía", "Los Ríos", "Los Lagos", "Aysén", "Magallanes y de la Antártica Chilena"] }],
  ["Cameroon (Cameroun)", "CM", 237, "+...-....-....", "🇨🇲", { Regions: ["Adamaoua", "Centre", "East", "Far North", "Littoral", "North", "Northwest", "South", "Southwest", "West"] }],
  ["China (中国)", "CN", 86, "+.. ..-........", "🇨🇳", { Provinces: ["Anhui", "Fujian", "Gansu", "Guangdong", "Guizhou", "Hainan", "Hebei", "Heilongjiang", "Henan", "Hubei", "Hunan", "Jiangsu", "Jiangxi", "Jilin", "Liaoning", "Qinghai", "Shaanxi", "Shandong", "Shanxi", "Sichuan", "Yunnan", "Zhejiang"], Municipalities: ["Beijing", "Chongqing", "Shanghai", "Tianjin"], "Autonomous Regions": ["Guangxi", "Inner Mongolia", "Ningxia", "Tibet", "Xinjiang"], "Special Administrative Regions": ["Hong Kong", "Macau"] }],
  ["Colombia", "CO", 57, "+..(...)...-....", "🇨🇴", { States: ["Amazonas", "Antioquia", "Arauca", "Atlántico", "Bolívar", "Boyacá", "Caldas", "Caquetá", "Casanare", "Cauca", "Cesar", "Chocó", "Córdoba", "Cundinamarca", "Guainía", "Guaviare", "Huila", "La Guajira", "Magdalena", "Meta", "Nariño", "Norte de Santander", "Putumayo", "Quindío", "Risaralda", "San Andrés, Providencia y Santa Catalina", "Santander", "Sucre", "Tolima", "Valle del Cauca", "Vaupés", "Vichada"] }],
  ["Costa Rica", "CR", 506, "+... ....-....", "🇨🇷", { Provinces: ["San José", "Alajuela", "Cartago", "Heredia", "Guanacaste", "Puntarenas", "Limón"] }],
  ["Cuba", "CU", 53, "+..-.-...-....", "🇨🇺", { Provinces: ["Pinar del Río", "Artemisa", "La Habana", "Mayabeque", "Matanzas", "Cienfuegos", "Villa Clara", "Sancti Spíritus", "Ciego de Ávila", "Camagüey", "Las Tunas", "Holguín", "Granma", "Santiago de Cuba", "Guantánamo", "Isla de la Juventud"] }],
  ["Cape Verde (Kabu Verdi)", "CV", 238, "+...(...)..-..", "🇨🇻", { Regions: ["Barlavento Islands", "Sotavento Islands"] }],
  ["Curaçao", "CW", 599, "+...-...-....", "🇨🇼", { Regions: ["Willemstad", "Bandabou", "Bandariba"] }, 0],
  ["Christmas Island", "CX", 61, "", "🇨🇽"],
  ["Cyprus (Κύπρος)", "CY", 357, "+...-..-...-...", "🇨🇾", { Regions: ["Nicosia", "Limassol", "Larnaca", "Paphos", "Famagusta"] }],
  ["Czech Republic (Česká republika)", "CZ", 420, "+...(...)...-...", "🇨🇿", { Regions: ["Prague", "Central Bohemian Region", "South Bohemian Region", "Plzeň Region", "Karlovy Vary Region", "Ústí nad Labem Region", "Liberec Region", "Hradec Králové Region", "Pardubice Region", "Olomouc Region", "Moravian-Silesian Region", "South Moravian Region", "Zlín Region", "Vysočina Region"] }],
  ["Germany (Deutschland)", "DE", 49, "+.. ... .......", "🇩🇪", { States: ["Baden-Württemberg", "Bavaria", "Berlin", "Brandenburg", "Bremen", "Hamburg", "Hesse", "Lower Saxony", "Mecklenburg-Vorpommern", "North Rhine-Westphalia", "Rhineland-Palatinate", "Saarland", "Saxony", "Saxony-Anhalt", "Schleswig-Holstein", "Thuringia"] }],
  ["Djibouti", "DJ", 253, "+...-..-..-..-..", "🇩🇯", { Regions: ["Djibouti City", "Ali Sabieh", "Dikhil", "Arta", "Tadjourah", "Obock"] }],
  ["Denmark (Danmark)", "DK", 45, "+.. .. .. .. ..", "🇩🇰", { Regions: ["Capital Region of Denmark", "Region Zealand", "Region of Southern Denmark", "Central Denmark Region", "North Denmark Region"] }],
  ["Dominica", "DM", 1767, "+.(...)...-....", "🇩🇲", { Regions: ["Saint Andrew Parish", "Saint David Parish", "Saint George Parish", "Saint John Parish", "Saint Joseph Parish", "Saint Luke Parish", "Saint Mark Parish", "Saint Patrick Parish", "Saint Paul Parish", "Saint Peter Parish"] }],
  ["Dominican Republic (República Dominicana)", "DO", 1, "+.(...)...-....", "🇩🇴", { Provinces: ["Azua", "Bahoruco", "Barahona", "Dajabón", "Distrito Nacional", "Duarte", "Elías Piña", "El Seibo", "Espaillat", "Hato Mayor", "Hermanas Mirabal", "Independencia", "La Altagracia", "La Romana", "La Vega", "María Trinidad Sánchez", "Monseñor Nouel", "Monte Cristi", "Monte Plata", "Pedernales", "Peravia", "Puerto Plata", "Samaná", "San Cristóbal", "San José de Ocoa", "San Juan", "San Pedro de Macorís", "Sánchez Ramírez", "Santiago", "Santiago Rodríguez", "Santo Domingo", "Valverde"] }, 2, ["809", "829", "849"]],
  ["Algeria (‫الجزائر‬‎)", "DZ", 213, "+...-..-...-....", '🇩🇿', { Regions: ["Adrar", "Chlef", "Laghouat", "Oum El Bouaghi", "Batna", "Béjaïa", "Biskra", "Béchar", "Blida", "Bouira", "Tamanrasset", "Tébessa", "Tlemcen", "Tiaret", "Tizi Ouzou", "Alger", "Djelfa", "Jijel", "Sétif", "Saïda", "Skikda", "Sidi Bel Abbès", "Annaba", "Guelma", "Constantine", "Médéa", "Mostaganem", "M'Sila", "Mascara", "Ouargla", "Oran", "El Bayadh", "Illizi", "Bordj Bou Arréridj", "Boumerdès", "El Tarf", "Tindouf", "Tissemsilt", "El Oued", "Khenchela", "Souk Ahras", "Tipaza", "Mila", "Aïn Defla", "Naâma", "Aïn Témouchent", "Ghardaïa", "Relizane"] }],
  ["Ecuador", "EC", 593, "+...-.-...-....", "🇪🇨", { Provinces: ["Azuay", "Bolivar", "Cañar", "Carchi", "Chimborazo", "Cotopaxi", "El Oro", "Esmeraldas", "Galapagos", "Guayas", "Imbabura", "Loja", "Los Rios", "Manabi", "Morona Santiago", "Napo", "Orellana", "Pastaza", "Pichincha", "Santa Elena", "Santo Domingo de los Tsachilas", "Sucumbios", "Tungurahua", "Zamora Chinchipe"] }],
  ["Estonia (Eesti)", "EE", 372, "+...-...-....", "🇪🇪", { Counties: ["Harju County", "Hiiu County", "Ida-Viru County", "Järva County", "Jõgeva County", "Lääne County", "Lääne-Viru County", "Põlva County", "Pärnu County", "Rapla County", "Saare County", "Tartu County", "Valga County", "Viljandi County", "Võru County"] }],
  ["Egypt (‫مصر‬‎)", "EG", 20, "+..(...)...-....", "🇪🇬", { Governorates: ["Alexandria", "Aswan", "Asyut", "Beheira", "Beni Suef", "Cairo", "Dakahlia", "Damietta", "Faiyum", "Gharbia", "Giza", "Ismailia", "Kafr El Sheikh", "Luxor", "Matruh", "Minya", "Monufia", "New Valley", "North Sinai", "Port Said", "Qalyubia", "Qena", "Red Sea", "Sharqia", "Sohag", "South Sinai", "Suez"] }],
  ["Western Sahara", "EH", 212, "+...-..-....", "🇪🇭", { Provinces: ["Laayoune", "Dakhla", "Smara", "Boujdour", "Aousserd"] }],
  ["Eritrea", "ER", 291, "+...-.-...-...", "🇪🇷", { Regions: ["Anseba", "Debub", "Gash-Barka", "Maekel", "Northern Red Sea", "Southern Red Sea"] }],
  ["Ethiopia", "ET", 251, "+...-..-...-....", "🇪🇹", { Regions: ["Addis Ababa", "Afar", "Amhara", "Benishangul-Gumuz", "Dire Dawa", "Gambela", "Harari", "Oromia", "Sidama", "Somali", "Southern Nations, Nationalities, and Peoples' Region", "Tigray"] }],
  ["Finland (Suomi)", "FI", 358, "+... .. .... ....", "🇫🇮", { Regions: ["Åland Islands", "Central Finland", "Central Ostrobothnia", "Eastern Finland", "Kainuu", "Kanta-Häme", "Kymenlaakso", "Lapland", "North Karelia", "Northern Ostrobothnia", "Northern Savonia", "Ostrobothnia", "Päijänne Tavastia", "Pirkanmaa", "Satakunta", "South Karelia", "Southern Ostrobothnia", "Southern Savonia", "Tavastia Proper", "Uusimaa", "Varsinais-Suomi"] }],
  ["Fiji", "FJ", 679, "+...-..-.....", "🇫🇯", { Divisions: ["Central", "Eastern", "Northern", "Western"] }],
  ["Falkland Islands (Islas Malvinas)", "FK", 500, "+...-.....", "🇫🇰", { Regions: ["East Falkland", "West Falkland", "Staten Island"] }],
  ["Micronesia", "FM", 691, "+...-...-....", "🇫🇲", { States: ["Chuuk", "Kosrae", "Pohnpei", "Yap"] }],
  ["Faroe Islands (Føroyar)", "FO", 298, "+...-...-...", "🇫🇴", { Municipalities: ["Tórshavn", "Klaksvík", "Runavík", "Eystur", "Vágar"] }],
  ["France", "FR", 33, "+.. . .. .. .. ..", "🇫🇷", { Regions: ["Auvergne-Rhône-Alpes", "Bourgogne-Franche-Comté", "Brittany", "Centre-Val de Loire", "Corsica", "Grand Est", "Hauts-de-France", "Île-de-France", "Normandy", "Nouvelle-Aquitaine", "Occitanie", "Pays de la Loire", "Provence-Alpes-Côte d'Azur"] }],
  ["Gabon", "GA", 241, "+...-.-..-..-..", "🇬🇦", { Provinces: ["Estuaire", "Haut-Ogooué", "Moyen-Ogooué", "Ngounié", "Nyanga", "Ogooué-Ivindo", "Ogooué-Lolo", "Ogooué-Maritime", "Woleu-Ntem"] }],
  ["United Kingdom", "GB", 44, "+.. .... ......", "🇬🇧", { States: ["England", "Scotland", "Wales", "Northern Ireland"] }],
  ["Grenada", "GD", 1473, "+.(...)...-....", "🇬🇩", { Parishes: ["Saint Andrew", "Saint David", "Saint George", "Saint John", "Saint Mark", "Saint Patrick"] }],
  ["Georgia (საქართველო)", "GE", 995, "+...(...)...-...", "🇬🇪", { Regions: ["Abkhazia", "Adjara", "Guria", "Imereti", "Kakheti", "Kvemo Kartli", "Mtskheta-Mtianeti", "Racha-Lechkhumi and Kvemo Svaneti", "Samegrelo-Zemo Svaneti", "Samtskhe-Javakheti", "Shida Kartli", "Tbilisi"] }],
  ["French Guiana (Guyane française)", "GF", 594, "+...-.....-....", "🇬🇫", { Arrondissements: ["Cayenne", "Saint-Laurent-du-Maroni", "Saint-Georges"], Communes: ['Awala-Yalimapo', 'Mana, French Guiana', 'Saint-Laurent-du-Maroni', 'Apatou', 'Grand-Santi', 'Papaïchton', 'Saül, French Guiana', 'Maripasoula', 'Camopi', 'Saint-Georges, French Guiana', 'Ouanary', 'Régina', 'Roura, French Guiana', 'Saint-Élie', 'Iracoubo', 'Sinnamary', 'Kourou', 'Macouria', 'Montsinéry-Tonnegrande', 'Matoury', 'Cayenne', 'Remire-Montjoly'] }],
  ["Guernsey", "GG", 44, "", "🇬🇬", { Parishes: ["Castel", "Forest", "St. Andrew", "St. Martin", "St. Peter Port", "St. Pierre du Bois", "St. Sampson", "St. Saviour", "Torteval", "Vale"] }],
  ["Ghana (Gaana)", "GH", 233, "+...(...)...-...", "🇬🇭", { Regions: ["Ashanti", "Brong-Ahafo", "Central", "Eastern", "Greater Accra", "Northern", "Upper East", "Upper West", "Volta", "Western"] }],
  ["Gibraltar", "GI", 350, "+...-...-.....", "🇬🇮", { Districts: ["East Side", "North District", "South District", "Town Area", "Westside"] }],
  ["Greenland (Kalaallit Nunaat)", "GL", 299, "+...-..-..-..", "🇬🇱", { Municipalities: ["Kujalleq", "Qaasuitsup", "Qeqqata", "Sermersooq"] }],
  ["Gambia", "GM", 220, "+...(...)..-..", "🇬🇲", { Divisions: ["Banjul", "Lower River", "Central River", "North Bank", "Upper River", "West Coast"] }],
  ["Guinea (Guinée)", "GN", 224, "+...-..-...-...", "🇬🇳", { Regions: ["Boké", "Conakry", "Faranah", "Kankan", "Kindia", "Labé", "Mamou", "Nzérékoré"] }],
  ["Guadeloupe", "GP", 590, "", "🇬🇵", { Arrondissements: ["Basse-Terre", "Pointe-à-Pitre"], Communes: ['Les Abymes', 'Anse-Bertrand', 'Baie-Mahault', 'Baillif', 'Basse-Terre', 'Bouillante', 'Capesterre-Belle-Eau', 'Capesterre-de-Marie-Galante', 'Deshaies', 'La Désirade (commune)', 'Le Gosier', 'Gourbeyre', 'Goyave, Guadeloupe', 'Grand-Bourg', 'Lamentin', "Morne-à-l'Eau", 'Le Moule', 'Petit-Bourg', 'Petit-Canal', 'Pointe-à-Pitre', 'Pointe-Noire, Guadeloupe', 'Port-Louis, Guadeloupe', 'Saint-Claude, Guadeloupe', 'Saint-François, Guadeloupe', 'Saint-Louis, Guadeloupe', 'Sainte-Anne, Guadeloupe', 'Sainte-Rose, Guadeloupe', 'Terre-de-Bas', 'Terre-de-Haut', 'Trois-Rivières, Guadeloupe', 'Vieux-Fort, Guadeloupe', 'Vieux-Habitants', 'Saint Barthélemy', 'Saint Martin (France)'], Cantons: ["Les Abymes-1", "Les Abymes-2", "Les Abymes-3", "Baie-Mahault-1", "Baie-Mahault-2", "Basse-Terre", "Capesterre-Belle-Eau", "Le Gosier", "Lamentin", "Marie-Galante", "Morne-à-l'Eau", "Le Moule", "Petit-Bourg", "Petit-Canal", "Pointe-à-Pitre", "Sainte-Anne", "Sainte-Rose-1", "Sainte-Rose-2", "Saint-François", "Trois-Rivières", "Vieux-Habitants"] }, 0],
  ["Equatorial Guinea (Guinea Ecuatorial)", "GQ", 240, "+...-..-...-....", "🇬🇶", { Provinces: ["Annobón", "Bioko Norte", "Bioko Sur", "Centro Sur", "Kié-Ntem", "Litoral", "Wele-Nzas"] }],
  ["Greece (Ελλάδα)", "GR", 30, "+..(...)...-....", "🇬🇷", { Regions: ["Attica", "Central Greece", "Central Macedonia", "Crete", "Eastern Macedonia and Thrace", "Epirus", "Ionian Islands", "North Aegean", "Peloponnese", "South Aegean", "Thessaly", "Western Greece", "Western Macedonia"] }],
  ["South Georgia and the South Sandwich Islands", "GS", 500, "", "🇬🇸"],
  ["Guatemala", "GT", 502, "+... ....-....", "🇬🇹", { Departments: ["Alta Verapaz", "Baja Verapaz", "Chimaltenango", "Chiquimula", "El Progreso", "Escuintla", "Guatemala", "Huehuetenango", "Izabal", "Jalapa", "Jutiapa", "Petén", "Quetzaltenango", "Quiché", "Retalhuleu", "Sacatepéquez", "San Marcos", "Santa Rosa", "Sololá", "Suchitepéquez", "Totonicapán", "Zacapa"] }],
  ["Guam", "GU", 1671, "+.(...)...-....", "🇬🇺", { Villages: ["Agana Heights", "Agat", "Asan", "Barrigada", "Chalan Pago-Ordot", "Dededo", "Hagatna", "Inarajan", "Mangilao", "Merizo", "Mongmong-Toto-Maite", "Piti", "Santa Rita", "Sinajana", "Talofofo", "Tamuning", "Umatac", "Yigo", "Yona"] }],
  ["Guinea-Bissau (Guiné Bissau)", "GW", 245, "+...-.-......", "🇬🇼", { Regions: ["Bafatá", "Biombo", "Bolama", "Cacheu", "Gabú", "Oio", "Quinara", "Tombali"] }],
  ["Guyana", "GY", 592, "+...-...-....", "🇬🇾", { Regions: ["Barima-Waini", "Cuyuni-Mazaruni", "Demerara-Mahaica", "East Berbice-Corentyne", "Essequibo Islands-West Demerara", "Mahaica-Berbice", "Pomeroon-Supenaam", "Potaro-Siparuni", "Upper Demerara-Berbice", "Upper Takutu-Upper Essequibo"] }],
  ["Hong Kong (香港)", "HK", 852, "+... .... ....", "🇭🇰", { Districts: ["Central and Western", "Eastern", "Islands", "Kowloon City", "Kwai Tsing", "Kwun Tong", "North", "Sai Kung", "Sha Tin", "Sham Shui Po", "Southern", "Tai Po", "Tsuen Wan", "Tuen Mun", "Wan Chai", "Wong Tai Sin", "Yau Tsim Mong", "Yuen Long"] }],
  ["Heard Island and McDonald Islands", "HM", 672, "", "🇭🇲"],
  ["Honduras", "HN", 504, "+...-....-....", "🇭🇳", { Departments: ["Atlántida", "Choluteca", "Colón", "Comayagua", "Copán", "Cortés", "El Paraíso", "Francisco Morazán", "Gracias a Dios", "Intibucá", "Islas de la Bahía", "La Paz", "Lempira", "Ocotepeque", "Olancho", "Santa Bárbara", "Valle", "Yoro"] }],
  ["Croatia (Hrvatska)", "HR", 385, "+...-..-...-...", "🇭🇷", { Counties: ["Zagreb County", "Krapina-Zagorje County", "Sisak-Moslavina County", "Karlovačka County", "Varaždin County", "Koprivnica-Križevci County", "Bjelovar-Bilogora County", "Primorje-Gorski Kotar County", "Lika-Senj County", "Virovitica-Podravina County", "Požega-Slavonia County", "Brod-Posavina County", "Zadar County", "Osijek-Baranja County", "Šibenik-Knin County", "Vukovar-Syrmia County", "Split-Dalmatia County", "Istria County", "Dubrovnik-Neretva County", "Međimurje County", "Grad Zagreb"] }],
  ["Haiti", "HT", 509, "+... ....-....", "🇭🇹", { Departments: ["Artibonite", "Centre", "Grand'Anse", "Nippes", "Nord", "Nord-Est", "Nord-Ouest", "Ouest", "Sud", "Sud-Est"] }],
  ["Hungary (Magyarország)", "HU", 36, "+..(...)...-...", "🇭🇺", { Counties: ["Bács-Kiskun", "Baranya", "Békés", "Borsod-Abaúj-Zemplén", "Csongrád-Csanád", "Fejér", "Győr-Moson-Sopron", "Hajdú-Bihar", "Heves", "Jász-Nagykun-Szolnok", "Komárom-Esztergom", "Nógrád", "Pest", "Somogy", "Szabolcs-Szatmár-Bereg", "Tolna", "Vas", "Veszprém", "Zala"] }],
  ["Indonesia", "ID", 62, "+..-..-...-..", "🇮🇩", { Provinces: ["Aceh", "Bali", "Bangka Belitung", "Banten", "Bengkulu", "Central Java", "Central Kalimantan", "Central Sulawesi", "East Java", "East Kalimantan", "East Nusa Tenggara", "Gorontalo", "Jakarta", "Jambi", "Lampung", "Maluku", "North Kalimantan", "North Maluku", "North Sulawesi", "North Sumatra", "Papua", "Riau", "Riau Islands", "South Kalimantan", "South Sulawesi", "South Sumatra", "Southeast Sulawesi", "West Java", "West Kalimantan", "West Nusa Tenggara", "West Papua", "West Sulawesi", "West Sumatra", "Yogyakarta"] }],
  ["Ireland", "IE", 353, "+... .. .......", "🇮🇪", { Counties: ["Carlow", "Cavan", "Clare", "Cork", "Donegal", "Dublin", "Galway", "Kerry", "Kildare", "Kilkenny", "Laois", "Leitrim", "Limerick", "Longford", "Louth", "Mayo", "Meath", "Monaghan", "Offaly", "Roscommon", "Sligo", "Tipperary", "Waterford", "Westmeath", "Wexford", "Wicklow"] }],
  ["Israel (‫ישראל‬‎)", "IL", 972, "+...-.-...-....", "🇮🇱", { Districts: ["Central", "Haifa", "Jerusalem", "Northern", "Southern", "Tel Aviv"] }],
  ["Isle of Man", "IM", 44, "", "🇮🇲", { Parishes: ["Andreas", "Arbory", "Ballaugh", "Braddan", "Bride", "Castletown", "Douglas", "German", "Jurby", "Laxey", "Lezayre", "Lonan", "Malew", "Marown", "Maughold", "Michael", "Onchan", "Patrick", "Peel", "Port Erin", "Port St Mary", "Ramsey", "Rushen"], Sheadings: ["Garff", "Glenfaba", "Middle", "Peel", "Rushen"] }],
  ["India (भारत)", "IN", 91, "+.. .....-.....", "🇮🇳", { States: ["Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh", "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka", "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal"] }],
  ["British Indian Ocean Territory", "IO", 246, "+...-...-....", "🇮🇴"],
  ["Iraq (‫العراق‬‎)", "IQ", 964, "+...(...)...-....", "🇮🇶", { Governorates: ["Al Anbar", "Babil", "Baghdad", "Basra", "Dhi Qar", "Diyala", "Dohuk", "Erbil", "Karbala", "Kirkuk", "Maysan", "Muthanna", "Najaf", "Nineveh", "Qadisiyyah", "Saladin", "Sulaymaniyah", "Wasit"] }],
  ["Iran (‫ایران‬‎)", "IR", 98, "+..(...)...-....", "🇮🇷", { Provinces: ["Alborz", "Ardabil", "Bushehr", "Chaharmahal and Bakhtiari", "East Azerbaijan", "Isfahan", "Fars", "Gilan", "Golestan", "Hamadan", "Hormozgan", "Ilam", "Kerman", "Kermanshah", "Khuzestan", "Kohgiluyeh and Boyer-Ahmad", "Kurdistan", "Lorestan", "Markazi", "Mazandaran", "North Khorasan", "Qazvin", "Qom", "Razavi Khorasan", "Semnan", "Sistan and Baluchestan", "South Khorasan", "Tehran", "West Azerbaijan", "Yazd", "Zanjan"] }],
  ["Iceland (Ísland)", "IS", 354, "+... ... ....", "🇮🇸", { Regions: ["Capital Region", "Southern Peninsula", "Western Region", "Westfjords", "Northwest Region", "Northeast Region", "East Region", "South Region"] }],
  ["Italy (Italia)", "IT", 39, "+.. ... ......", "🇮🇹", { Regions: ["Abruzzo", "Basilicata", "Calabria", "Campania", "Emilia-Romagna", "Friuli-Venezia Giulia", "Lazio", "Liguria", "Lombardia", "Marche", "Molise", "Piemonte", "Puglia", "Sardegna", "Sicilia", "Toscana", "Trentino-Alto Adige", "Umbria", "Valle d'Aosta", "Veneto"] }, 0],
  ["Jersey", "JE", 44, "", "🇯🇪", { Parishes: ["Grouville", "Saint Brelade", "Saint Clement", "Saint Helier", "Saint John", "Saint Lawrence", "Saint Martin", "Saint Mary", "Saint Ouen", "Saint Peter", "Saint Saviour", "Trinity"] }],
  ["Jamaica", "JM", 1876, "+.(...)...-....", "🇯🇲", { Parishes: ["Clarendon", "Hanover", "Kingston", "Manchester", "Portland", "Saint Andrew", "Saint Ann", "Saint Catherine", "Saint Elizabeth", "Saint James", "Saint Mary", "Saint Thomas", "Trelawny", "Westmoreland"] }],
  ["Jordan (‫الأردن‬‎)", "JO", 962, "+...-.-....-....", "🇯🇴", { Governorates: ["Ajloun", "Amman", "Aqaba", "Balqa", "Irbid", "Jarash", "Karak", "Ma'an", "Madaba", "Mafraq", "Tafilah", "Zarqa"] }],
  ["Japan (日本)", "JP", 81, "+.. ... .. ....", "🇯🇵", { Prefectures: ["Aichi", "Akita", "Aomori", "Chiba", "Ehime", "Fukui", "Fukuoka", "Fukushima", "Gifu", "Gunma", "Hiroshima", "Hokkaido", "Hyogo", "Ibaraki", "Ishikawa", "Iwate", "Kagawa", "Kagoshima", "Kanagawa", "Kochi", "Kumamoto", "Kyoto", "Mie", "Miyagi", "Miyazaki", "Nagano", "Nagasaki", "Nara", "Niigata", "Oita", "Okayama", "Okinawa", "Osaka", "Saga", "Saitama", "Shiga", "Shimane", "Shizuoka", "Tochigi", "Tokushima", "Tokyo", "Tottori", "Toyama", "Wakayama", "Yamagata", "Yamaguchi", "Yamanashi"] }],
  ["Kenya", "KE", 254, "+...-...-......", "🇰🇪", { Counties: ["Baringo", "Bomet", "Bungoma", "Busia", "Elgeyo-Marakwet", "Embu", "Garissa", "Homa Bay", "Isiolo", "Kajiado", "Kakamega", "Kericho", "Kiambu", "Kilifi", "Kirinyaga", "Kisii", "Kisumu", "Kitui", "Kwale", "Laikipia", "Lamu", "Machakos", "Makueni", "Mandera", "Marsabit", "Meru", "Migori", "Mombasa", "Murang'a", "Nairobi", "Nakuru", "Nandi", "Narok", "Nyamira", "Nyandarua", "Nyeri", "Samburu", "Siaya", "Taita-Taveta", "Tana River", "Tharaka-Nithi", "Trans-Nzoia", "Turkana", "Uasin Gishu", "Vihiga", "Wajir", "West Pokot"] }],
  ["Kyrgyzstan (Кыргызстан)", "KG", 996, "+...(...)...-...", "🇰🇬", { Regions: ["Batken", "Chuy", "Issyk-Kul", "Jalal-Abad", "Naryn", "Osh", "Talas"] }],
  ["Cambodia (កម្ពុជា)", "KH", 855, "+...-..-...-...", "🇰🇭", { Provinces: ["Banteay Meanchey", "Battambang", "Kampong Cham", "Kampong Chhnang", "Kampong Speu", "Kampong Thom", "Kampot", "Kandal", "Kep", "Koh Kong", "Kratie", "Mondulkiri", "Oddar Meanchey", "Pailin", "Phnom Penh", "Preah Sihanouk", "Preah Vihear", "Pursat", "Ratanakiri", "Siem Reap", "Stung Treng", "Svay Rieng", "Takéo", "Tboung Khmum"] }],
  ["Kiribati", "KI", 686, "+...-..-...", "🇰🇮", { Islands: ["Banaba", "Gilbert Islands", "Line Islands", "Phoenix Islands"] }],
  ["Comoros (‫جزر القمر‬‎)", "KM", 269, "+...-..-.....", "🇰🇲", { Regions: ["Grande Comore", "Anjouan", "Mohéli"] }],
  ["Saint Kitts and Nevis", "KN", 1869, "+.(...)...-....", "🇰🇳", { Parishes: ["Christ Church Nichola Town", "Saint Anne Sandy Point", "Saint George Basseterre", "Saint John Capisterre", "Saint Mary Cayon", "Saint Paul Capisterre", "Saint Peter Basseterre", "Saint Thomas Lowland", "Saint Thomas Middle Island", "Trinity Palmetto Point"] }],
  ["North Korea (조선 민주주의 인민 공화국)", "KP", 850, "+...-...-...", "🇰🇵", { Provinces: ["Chagang", "North Hamgyong", "South Hamgyong", "North Hwanghae", "South Hwanghae", "Kangwon", "North Pyongan", "South Pyongan", "Ryanggang"] }],
  ["Kuwait (‫الكويت‬‎)", "KW", 965, "+...-....-....", "🇰🇼", { Governorates: ["Al Ahmadi", "Al Farwaniyah", "Al Jahra", "Capital", "Hawalli", "Mubarak Al-Kabeer"] }],
  ["Cayman Islands", "KY", 1345, "+.(...)...-....", "🇰🇾", { Districts: ["Bodden Town", "Cayman Brac", "East End", "George Town", "Little Cayman", "North Side", "Sister Islands", "West Bay"] }],
  ["Kazakhstan (Казахстан)", "KZ", 7, "+. ... ...-..-..", "🇰🇿", { Regions: ["Almaty", "Aqmola", "Aqtobe", "Atyrau", "East Kazakhstan", "Mangystau", "North Kazakhstan", "Nur-Sultan", "Pavlodar", "Qaragandy", "Qostanay", "Qyzylorda", "Shymkent", "Turkestan", "West Kazakhstan"] }, 1],
  ["Laos (ລາວ)", "LA", 856, "+...-..-...-...", "🇱🇦", { Provinces: ["Attapeu", "Bokeo", "Bolikhamsai", "Champasak", "Houaphanh", "Khammouane", "Luang Namtha", "Luang Prabang", "Oudomxay", "Phongsaly", "Sainyabuli", "Salavan", "Savannakhet", "Sekong", "Vientiane", "Vientiane Prefecture", "Xaisomboun", "Xaisomboun Special Zone", "Xiangkhouang", "Xekong", "Xiangkhouang"] }],
  ["Lebanon (‫لبنان‬‎)", "LB", 961, "+...-.-...-...", "🇱🇧", { Governorates: ["Akkar", "Baalbek-Hermel", "Beirut", "Beqaa", "Mount Lebanon", "Nabatieh", "North", "South"] }],
  ["Saint Lucia", "LC", 1758, "+.(...)...-....", "🇱🇨", { Districts: ["Anse-la-Raye", "Canaries", "Castries", "Choiseul", "Dennery", "Gros Islet", "Laborie", "Micoud", "Soufrière", "Vieux Fort"] }],
  ["Liechtenstein", "LI", 423, "+...(...)...-....", "🇱🇮", { Municipalities: ["Balzers", "Eschen", "Gamprin", "Mauren", "Planken", "Ruggell", "Schaan", "Schellenberg", "Triesen", "Triesenberg", "Vaduz"] }],
  ["Liberia", "LR", 231, "+...-..-...-...", "🇱🇷", { Counties: ["Bomi", "Bong", "Gbarpolu", "Grand Bassa", "Grand Cape Mount", "Grand Gedeh", "Grand Kru", "Lofa", "Margibi", "Maryland", "Montserrado", "Nimba", "River Cess", "River Gee", "Sinoe"] }],
  ["Lesotho", "LS", 266, "+...-.-...-....", "🇱🇸", { Districts: ["Berea", "Butha-Buthe", "Leribe", "Mafeteng", "Maseru", "Mohale's Hoek", "Mokhotlong", "Qacha's Nek", "Quthing", "Thaba-Tseka"] }],
  ["Lithuania (Lietuva)", "LT", 370, "+...(...)..-...", "🇱🇹", { Counties: ["Alytus County", "Kaunas unknownounty", "Klaipeda County", "Marijampole County", "Panevezys County", "Siauliai County", "Taurage County", "Telsiai County", "Utena County", "Vilnius County"] }],
  ["Luxembourg", "LU", 352, "+...(...)...-...", "🇱🇺", { Cantons: ["Diekirch", "Grevenmacher", "Luxembourg"] }],
  ["Latvia (Latvija)", "LV", 371, "+...-..-...-...", "🇱🇻", { Regions: ["Aizkraukle", "Aluksne", "Balvi", "Bauska", "Cesis", "Daugavpils", "Dobele", "Gulbene", "Jekabpils", "Jelgava", "Jurmala", "Kraslava", "Kuldiga", "Liepaja", "Limbazi", "Ludza", "Madona", "Ogre", "Preili", "Rezekne", "Riga", "Saldus", "Talsi", "Tukums", "Valka", "Valmiera", "Ventspils"] }],
  ["Libya (‫ليبيا‬‎)", "LY", 218, "+...-..-...-...", "🇱🇾", { Regions: ["Al Wahat", "Benghazi", "Derna", "Ghat", "Jabal al Akhdar", "Jabal al Gharbi", "Jafara", "Jufra", "Kufra", "Marj", "Misrata", "Murqub", "Murzuq", "Nalut", "Nuqat al Khams", "Sabha", "Sirte", "Tripoli", "Wadi al Hayaa", "Wadi al Shatii", "Zawiya"] }],
  ["Morocco (‫المغرب‬‎)", "MA", 212, "+...-..-....-...", "🇲🇦", { Regions: ["Tanger-Tétouan-Al Hoceïma", "Oriental", "Fès-Meknès", "Rabat-Salé-Kénitra", "Béni Mellal-Khénifra", "Casablanca-Settat", "Marrakesh-Safi", "Drâa-Tafilalet", "Souss-Massa", "Guelmim-Oued Noun", "Laâyoune-Sakia El Hamra", "Dakhla-Oued Ed-Dahab"] }],
  ["Monaco", "MC", 377, "+...-..-...-...", "🇲🇨", { Districts: ["Monaco-Ville", "La Condamine", "Monte Carlo", "Fontvieille"] }],
  ["Moldova (Republica Moldova)", "MD", 373, "+...-....-....", "🇲🇩", { Regions: ["Anenii Noi", "Basarabeasca", "Briceni", "Cahul", "Călărași", "Cantemir", "Căușeni", "Cimișlia", "Criuleni", "Dondușeni", "Drochia", "Dubăsari", "Edineț", "Fălești", "Florești", "Găgăuzia", "Glodeni", "Hîncești", "Ialoveni", "Leova", "Nisporeni", "Ocnița", "Orhei", "Rezina", "Rîșcani", "Sîngerei", "Șoldănești", "Soroca", "Strășeni", "Ștefan Vodă", "Taraclia", "Telenești", "Ungheni"] }],
  ["Montenegro (Crna Gora)", "ME", 382, "+...-..-...-...", "🇲🇪", { Municipalities: ["Andrijevica", "Bar", "Berane", "Bijelo Polje", "Budva", "Cetinje", "Danilovgrad", "Gusinje", "Herceg Novi", "Kolašin", "Kotor", "Mojkovac", "Nikšić", "Petnjica", "Plav", "Pljevlja", "Plužine", "Podgorica", "Rožaje", "Šavnik", "Tivat", "Ulcinj", "Žabljak"] }],
  ["Saint Martin (Sant-Martin (partie française))", "MF", 590, "", "🇲🇫", { Parishes: ["Marigot"] }, 2],
  ["Madagascar (Madagasikara)", "MG", 261, "+...-..-..-.....", "🇲🇬", { Provinces: ["Antananarivo", "Antsiranana", "Fianarantsoa", "Mahajanga", "Toamasina", "Toliara"] }],
  ["Marshall Islands", "MH", 692, "+...-...-....", "🇲🇭", { Municipalities: ["Ailinglaplap", "Ailuk", "Arno", "Aur", "Bikini", "Ebon", "Enewetak", "Jabat", "Jaluit", "Kili", "Kwajalein", "Lae", "Lib", "Likiep", "Majuro", "Maloelap", "Mejit", "Mili", "Namdrik", "Namu", "Rongelap", "Ujae", "Ujelang", "Utirik", "Wotho", "Wotje"] }],
  ["Macedonia (FYROM) (Македонија)", "MK", 389, "+...-..-...-...", "🇲🇰", { Regions: ["Skopje", "Pelagonia", "Polog", "Vardar", "Eastern", "Southwestern", "Northeastern", "Southeastern"] }],
  ["Mali", "ML", 223, "+...-..-..-....", "🇲🇱", { Regions: ["Bamako", "Gao", "Kayes", "Kidal", "Koulikoro", "Mopti", "Segou", "Sikasso", "Tombouctou"] }],
  ["Myanmar (Burma) (မြန်မာ)", "MM", 95, "+..-...-...", "🇲🇲", { States: ["Ayeyarwady", "Bago", "Chin", "Kachin", "Kayah", "Kayin", "Magway", "Mandalay", "Mon", "Naypyidaw Union Territory", "Rakhine", "Sagaing", "Shan", "Tanintharyi", "Yangon"], Regions: ["Sagaing", "Tanintharyi", "Bago", "Magway", "Mandalay", "Yangon", "Ayeyarwady", "Kachin", "Kayah", "Kayin", "Chin", "Mon", "Rakhine", "Shan"] }],
  ["Mongolia (Монгол)", "MN", 976, "+...-..-..-....", "🇲🇳", { Aimags: ["Arkhangai", "Bayan-Ölgii", "Bayankhongor", "Bulgan", "Darkhan-Uul", "Dornod", "Dornogovi", "Dundgovi", "Govi-Altai", "Govisümber", "Khentii", "Khovd", "Khövsgöl", "Ömnögovi", "Orkhon", "Övörkhangai", "Selenge", "Sükhbaatar", "Töv", "Uvs", "Zavkhan"] }],
  ["Macau (澳門)", "MO", 853, "+...-....-....", "🇲🇴", { Freguesias: ["Nossa Senhora de Fátima", "Santo António", "São Lázaro", "São Lourenço", "São Francisco Xavier", "Sé", "Coloane", "Taipa"] }],
  ["Northern Mariana Islands", "MP", 1670, "+.(...)...-....", "🇲🇵", { Municipalities: ["Northern Islands", "Rota", "Saipan", "Tinian"] }],
  ["Martinique", "MQ", 596, "+...(...)..-..-..", "🇲🇶", { Arrondissements: ["Fort-de-France", "La Trinité", "Le Marin", "Le Robert", "Saint-Pierre"], Communes: ["L'Ajoupa-Bouillon", "Les Anses-d'Arlet", 'Basse-Pointe', 'Bellefontaine, Martinique', 'Le Carbet', 'Case-Pilote', 'Le Diamant', 'Ducos, Martinique', 'Fonds-Saint-Denis', 'Fort-de-France', 'Le François', "Grand'Rivière", 'Gros-Morne, Martinique', 'Le Lamentin', 'Le Lorrain', 'Macouba', 'Le Marigot', 'Le Marin', 'Le Morne-Rouge', 'Le Morne-Vert', 'Le Prêcheur', 'Rivière-Pilote', 'Rivière-Salée', 'Le Robert', 'Saint-Esprit, Martinique', 'Saint-Joseph, Martinique', 'Saint-Pierre, Martinique', 'Sainte-Anne, Martinique', 'Sainte-Luce, Martinique', 'Sainte-Marie, Martinique', 'Schœlcher', 'La Trinité, Martinique', 'Les Trois-Îlets', 'Le Vauclin'] }],
  ["Mauritania (‫موريتانيا‬‎)", "MR", 222, "+...-..-..-....", "🇲🇷", { Regions: ["Adrar", "Assaba", "Brakna", "Dakhlet Nouadhibou", "Gorgol", "Guidimaka", "Hodh Ech Chargui", "Hodh El Gharbi", "Inchiri", "Nouakchott Nord", "Nouakchott Ouest", "Nouakchott Sud", "Tagant", "Tiris Zemmour", "Trarza"] }],
  ["Montserrat", "MS", 1664, "+.(...)...-....", "🇲🇸", { Parishes: ["Saint Anthony", "Saint Georges", "Saint Peter"] }],
  ["Malta", "MT", 356, "+...-....-....", "🇲🇹", { Districts: ["Gozo", "Malta"] }],
  ["Mauritius (Moris)", "MU", 230, "+...-...-....", "🇲🇺", { Districts: ["Black River", "Flacq", "Grand Port", "Moka", "Pamplemousses", "Plaines Wilhems", "Port Louis", "Rivière du Rempart", "Savanne"] }],
  ["Maldives", "MV", 960, "+...-...-....", "🇲🇻", { Atolls: ["Ari Atoll", "Faafu Atoll", "Lhaviyani Atoll", "Malé Atoll", "Baa Atoll", "Dhaalu Atoll", "Gaafu Alif Atoll", "Haa Alif Atoll", "Kaafu Atoll", "Laamu Atoll", "Meemu Atoll", "Noonu Atoll", "Raa Atoll", "Seenu Atoll", "Thaa Atoll", "Vaavu Atoll"] }],
  ["Malawi", "MW", 265, "+...-.-....-....", "🇲🇼", { Districts: ["Balaka", "Blantyre", "Chikwawa", "Chiradzulu", "Chitipa", "Dedza", "Dowa", "Karonga", "Kasungu", "Likoma", "Lilongwe", "Machinga", "Mangochi", "Mchinji", "Mulanje", "Mwanza", "Mzimba", "Neno", "Nkhata Bay", "Nkhotakota", "Nsanje", "Ntcheu", "Ntchisi", "Phalombe", "Rumphi", "Salima", "Thyolo", "Zomba"] }],
  ["Mexico (México)", "MX", 52, "+..-..-..-....", "🇲🇽", { States: ["Aguascalientes", "Baja California", "Baja California Sur", "Campeche", "Chiapas", "Chihuahua", "Coahuila", "Colima", "Durango", "Guanajuato", "Guerrero", "Hidalgo", "Jalisco", "México", "Michoacán", "Morelos", "Nayarit", "Nuevo León", "Oaxaca", "Puebla", "Querétaro", "Quintana Roo", "San Luis Potosí", "Sinaloa", "Sonora", "Tabasco", "Tamaulipas", "Tlaxcala", "Veracruz", "Yucatán", "Zacatecas"] }],
  ["Malaysia", "MY", 60, "+.. ..-....-....", "🇲🇾", { States: ["Johor", "Kedah", "Kelantan", "Melaka", "Negeri Sembilan", "Pahang", "Perak", "Perlis", "Pulau Pinang", "Sabah", "Sarawak", "Selangor", "Terengganu", "Wilayah Persekutuan Kuala Lumpur", "Wilayah Persekutuan Labuan", "Wilayah Persekutuan Putrajaya"] }],
  ["Mozambique (Moçambique)", "MZ", 258, "+...-..-...-...", "🇲🇿", { Provinces: ["Cabo Delgado", "Gaza", "Inhambane", "Manica", "Maputo", "Nampula", "Niassa", "Sofala", "Tete", "Zambezia"] }],
  ["Namibia (Namibië)", "NA", 264, "+...-..-...-....", "🇳🇦", { Regions: ["Erongo", "Hardap", "Karas", "Kavango East", "Kavango West", "Khomas", "Kunene", "Ohangwena", "Omaheke", "Omusati", "Oshana", "Oshikoto", "Otjozondjupa", "Zambezi"] }],
  ["New Caledonia (Nouvelle-Calédonie)", "NC", 687, "+...-..-....", "🇳🇨", { Provinces: ["South Province", "North Province", "Loyalty Islands Province"], Communes: ["Nouméa", "Mont-Dore", "Dumbéa", "Païta", "Yaté", "Bouloupari", "La Foa", "Sarraméa", "Farino", "Moindou", "Bourail", "Poya", "Koné", "Voh", "Kaala-Gomen", "Pouembout", "Poum", "Belep", "Hienghène", "Ponérihouen", "Kouaoua", "Canala", "Thio", "Yaté", "Île des Pins", "Lifou", "Maré", "Ouvéa"] }],
  ["Niger (Nijar)", "NE", 227, "+...-..-..-....", "🇳🇪", { Regions: ["Agadez", "Diffa", "Dosso", "Maradi", "Tahoua", "Tillabéri", "Zinder"] }],
  ["Norfolk Island", "NF", 672, "+...-...-...", "🇳🇫"],
  ["Nigeria", "NG", 234, "+...-..-...-..", "🇳🇬", { States: ["Abia", "Adamawa", "Akwa Ibom", "Anambra", "Bauchi", "Bayelsa", "Benue", "Borno", "Cross River", "Delta", "Ebonyi", "Edo", "Ekiti", "Enugu", "Gombe", "Imo", "Jigawa", "Kaduna", "Kano", "Katsina", "Kebbi", "Kogi", "Kwara", "Lagos", "Nasarawa", "Niger", "Ogun", "Ondo", "Osun", "Oyo", "Plateau", "Rivers", "Sokoto", "Taraba", "Yobe", "Zamfara", "Federal Capital Territory"] }],
  ["Nicaragua", "NI", 505, "+...-....-....", "🇳🇮", { Departments: ["Boaco", "Carazo", "Chinandega", "Chontales", "Estelí", "Granada", "Jinotega", "León", "Madriz", "Managua", "Masaya", "Matagalpa", "Nueva Segovia", "Río San Juan", "Rivas", "Atlántico Norte", "Atlántico Sur"] }],
  ["Netherlands (Nederland)", "NL", 31, "+.. .. ........", "🇳🇱", { Provinces: ["Drenthe", "Flevoland", "Friesland", "Gelderland", "Groningen", "Limburg", "Noord-Brabant", "Noord-Holland", "Overijssel", "Utrecht", "Zeeland", "Zuid-Holland"] }],
  ["Norway (Norge)", "NO", 47, "+.. ... .. ...", "🇳🇴", { Counties: ["Agder", "Innlandet", "Møre og Romsdal", "Nordland", "Oslo", "Rogaland", "Troms og Finnmark", "Trøndelag", "Vestfold og Telemark", "Vestland", "Viken"] }],
  ["Nepal (नेपाल)", "NP", 977, "+...-..-...-...", "🇳🇵", { Provinces: ["Province No. 1", "Province No. 2", "Bagmati Province", "Gandaki Province", "Lumbini Province", "Karnali Province", "Sudurpashchim Province"] }],
  ["Nauru", "NR", 674, "+...-...-....", "🇳🇷", { Districts: ["Aiwo", "Anabar", "Anetan", "Anibare", "Baiti", "Boe", "Buada", "Denigomodu", "Ewa", "Ijuw", "Meneng", "Nibok", "Uaboe", "Yaren"] }],
  ["Niue", "NU", 683, "+...-....", "🇳🇺", { Villages: ["Alofi", "Avatele", "Hakupu", "Hikutavake", "Lakepa", "Makefu", "Mutalau", "Namukulu", "Tamakautoga", "Toi", "Tuapa"] }],
  ["New Zealand", "NZ", 64, "+.. ...-...-....", "🇳🇿", { Regions: ["Northland", "Auckland", "Waikato", "Bay of Plenty", "Gisborne", "Hawke's Bay", "Taranaki", "Manawatu-Whanganui", "Wellington", "Tasman", "Nelson", "Marlborough", "West Coast", "Canterbury", "Otago", "Southland"] }],
  ["Oman (‫عُمان‬‎)", "OM", 968, "+...-..-...-...", "🇴🇲", { Governorates: ["Ad Dakhiliyah", "Ad Dhahirah", "Al Batinah North", "Al Batinah South", "Al Buraimi", "Al Wusta", "Ash Sharqiyah North", "Ash Sharqiyah South", "Dhofar", "Musandam", "Muscat"] }],
  ["Panama (Panamá)", "PA", 507, "+...-...-....", "🇵🇦", { Provinces: ["Bocas del Toro", "Chiriquí", "Coclé", "Colón", "Darién", "Emberá-Wounaan", "Guna Yala", "Herrera", "Los Santos", "Ngäbe-Buglé", "Panamá", "Panamá Oeste", "Veraguas"] }],
  ["Peru (Perú)", "PE", 51, "+..(...)...-...", "🇵🇪", { Regions: ["Amazonas", "Áncash", "Apurímac", "Arequipa", "Ayacucho", "Cajamarca", "Callao", "Cusco", "Huancavelica", "Huánuco", "Ica", "Junín", "La Libertad", "Lambayeque", "Lima", "Loreto", "Madre de Dios", "Moquegua", "Pasco", "Piura", "Puno", "San Martín", "Tacna", "Tumbes", "Ucayali"] }],
  ["French Polynesia (Polynésie française)", "PF", 689, "+...-..-..-..", "🇵🇫", { Communes: ["Papeete", "Faaa", "Punaauia"], Subdivisions: ["Marquesas Islands", "Tuamotu-Gambier", "Tubuai Islands"] }],
  ["Papua New Guinea", "PG", 675, "+...(...)..-...", "🇵🇬", { Regions: ["Bougainville", "Central", "Chimbu", "Eastern Highlands", "East New Britain", "East Sepik", "Enga", "Gulf", "Hela", "Jiwaka", "Madang", "Manus", "Milne Bay", "Morobe", "New Ireland", "Northern", "Southern Highlands", "Western", "West New Britain", "West Sepik", "Western Highlands"] }],
  ["Philippines", "PH", 63, "+.. ... ....", "🇵🇭", { Regions: ["Ilocos Region", "Cagayan Valley", "Central Luzon", "Calabarzon", "Mimaropa", "Bicol Region", "Western Visayas", "Central Visayas", "Eastern Visayas", "Zamboanga Peninsula", "Northern Mindanao", "Davao Region", "Soccsksargen", "Caraga", "Bangsamoro Autonomous Region in Muslim Mindanao", "Cordillera Administrative Region", "National Capital Region"] }],
  ["Pakistan (‫پاکستان‬‎)", "PK", 92, "+.. ...-.......", "🇵🇰", { Provinces: ["Balochistan", "Khyber Pakhtunkhwa", "Punjab", "Sindh"], Territories: ["Islamabad Capital Territory", "Gilgit-Baltistan", "Azad Jammu and Kashmir"] }],
  ["Poland (Polska)", "PL", 48, "+.. ...-...-...", "🇵🇱", { Provinces: ["Greater Poland", "Kuyavian-Pomeranian", "Lesser Poland", "Lodz", "Lower Silesian", "Lublin", "Lubusz", "Masovian", "Opole", "Podlasie", "Pomeranian", "Silesian", "Subcarpathian", "Swietokrzyskie", "Warmian-Masurian", "West Pomeranian"] }],
  ["Saint Pierre and Miquelon (Saint-Pierre-et-Miquelon)", "PM", 508, "", "🇵🇲", { Communes: ["Saint-Pierre", "Miquelon-Langlade"] }],
  ["Pitcairn Islands", "PN", 64, "", "🇵🇳"],
  ["Puerto Rico", "PR", 1, "+. (...) ...-....", "🇵🇷", { Municipalities: ["Adjuntas", "Aguada", "Aguadilla", "Aguas Buenas", "Aibonito", "Añasco", "Arecibo", "Arroyo", "Barceloneta", "Barranquitas", "Bayamón", "Cabo Rojo", "Caguas", "Camuy", "Canóvanas", "Carolina", "Cataño", "Cayey", "Ceiba", "Ciales", "Cidra", "Coamo", "Comerío", "Corozal", "Culebra", "Dorado", "Fajardo", "Florida", "Guánica", "Guayama", "Guayanilla", "Guaynabo", "Gurabo", "Hatillo", "Hormigueros", "Humacao", "Isabela", "Jayuya", "Juana Díaz", "Juncos", "Lajas", "Lares", "Las Marías", "Las Piedras", "Loíza", "Luquillo", "Manatí", "Maricao", "Maunabo", "Mayagüez", "Moca", "Morovis", "Naguabo", "Naranjito", "Orocovis", "Patillas", "Peñuelas", "Ponce", "Quebradillas", "Rincón", "Río Grande", "Sabana Grande", "Salinas", "San Germán", "San Juan", "San Lorenzo", "San Sebastián", "Santa Isabel", "Toa Alta", "Toa Baja", "Trujillo Alto", "Utuado", "Vega Alta", "Vega Baja", "Vieques", "Villalba", "Yabucoa", "Yauco"] }, 3, ["787", "939"]],
  ["Palestine (‫فلسطين‬‎)", "PS", 970, "+...-..-...-....", "🇵🇸", { Governorates: ["Gaza Strip", "West Bank"] }],
  ["Portugal", "PT", 351, "+...-..-...-....", "🇵🇹", { Regions: ["Azores", "Alentejo", "Algarve", "Centro", "Lisbon", "Madeira", "Norte"] }],
  ["Palau", "PW", 680, "+...-...-....", "🇵🇼", { States: ["Aimeliik", "Airai", "Angaur", "Hatohobei", "Kayangel", "Koror", "Melekeok", "Ngaraard", "Ngarchelong", "Ngardmau", "Ngatpang", "Ngchesar", "Ngeremlengui", "Ngiwal", "Peleliu", "Sonsorol"] }],
  ["Paraguay", "PY", 595, "+...(...)...-...", "🇵🇾", { Departments: ["Alto Paraguay", "Alto Paraná", "Amambay", "Boquerón", "Caaguazú", "Caazapá", "Canindeyú", "Central", "Concepción", "Cordillera", "Guairá", "Itapúa", "Misiones", "Ñeembucú", "Paraguarí", "Presidente Hayes", "San Pedro"] }],
  ["Qatar (‫قطر‬‎)", "QA", 974, "+...-....-....", "🇶🇦", { Municipalities: ["Doha", "Al Rayyan", "Umm Salal", "Al Khor", "Al Wakrah", "Al Daayen", "Madinat ash Shamal", "Al Shamal", "Al Ruwais"] }],
  ["Réunion (La Réunion)", "RE", 262, "+...-.....-....", "🇷🇪", { Arrondissements: ["Saint-Denis", "Saint-Paul", "Saint-Pierre", "Saint-Benoit"], Communes: ['Les Avirons', 'Bras-Panon', 'Cilaos', 'Entre-Deux', "L'Étang-Salé", 'Petite-Île', 'La Plaine-des-Palmistes', 'Le Port, Réunion', 'La Possession', 'Saint-André, Réunion', 'Saint-Benoît, Réunion', 'Saint-Denis, Réunion', 'Sainte-Marie, Réunion', 'Sainte-Rose, Réunion', 'Sainte-Suzanne, Réunion', 'Saint-Joseph, Réunion', 'Saint-Leu, Réunion', 'Saint-Louis, Réunion', 'Saint-Paul, Réunion', 'Saint-Philippe', 'Saint-Pierre, Réunion', 'Salazie', 'Le Tampon', 'Les Trois-Bassins', 'Coat of arms of Réunion'], Cantons: ["L'Étang-Salé", 'Le Port', 'La Possession', 'Saint-André-1', 'Saint-André-2', 'Saint-André-3', 'Saint-Benoît-1', 'Saint-Benoît-2', 'Saint-Denis-1', 'Saint-Denis-2', 'Saint-Denis-3', 'Saint-Denis-4', 'Sainte-Marie', 'Saint-Joseph', 'Saint-Leu', 'Saint-Louis-1', 'Saint-Louis-2', 'Saint-Paul-1', 'Saint-Paul-2', 'Saint-Paul-3', 'Saint-Pierre-1', 'Saint-Pierre-2', 'Saint-Pierre-3', 'Le Tampon-1', 'Le Tampon-2'] }],
  ["Romania (România)", "RO", 40, "+..-..-...-....", "🇷🇴", { Regions: ["Moldova", "Muntenia", "Transylvania", "Banat", "Crisana", "Dobrogea", "Maramures", "Oltenia", "Bucovina", "Mehedinti", "Craiova", "Pitesti", "Sibiu", "Targu Mures", "Timisoara", "Cluj-Napoca", "Iasi", "Bucharest"] }],
  ["Serbia (Србија)", "RS", 381, "+...-..-...-....", "🇷🇸", { Districts: ["Belgrade", "Nišava", "Šumadija", "Zaječar", "Podunavlje", "Bor", "Braničevo", "Pomoravlje", "Zlatibor", "Moravica", "Raška", "Rasina", "Toplica", "Mačva", "Kolubara", "Jablanica", "Pčinja", "Pirot", "Branicevo", "Juzni Banat", "Srednji Banat", "Severni Banat", "Zapadna Bačka", "Južna Bačka", "Severna Bačka", "Srem", "Mačva", "Kolubara", "Podrinje", "Kosovo", "Kosovska Mitrovica", "Peć", "Prizren", "Kosovska Mitrovica", "Peć", "Prizren"] }],
  ["Russia (Россия)", "RU", 7, "+.-(...)-...-....", "🇷🇺", { "Federal Subjects": ["Moscow", "Saint Petersburg", "Novosibirsk", "Yekaterinburg", "Nizhny Novgorod", "Kazan", "Chelyabinsk", "Omsk", "Samara", "Rostov-on-Don", "Ufa", "Krasnoyarsk", "Perm", "Voronezh", "Volgograd", "Krasnodar", "Saratov", "Tyumen", "Tolyatti", "Izhevsk"] }],
  ["Rwanda", "RW", 250, "+...(...)...-...", "🇷🇼", { Provinces: ["Kigali", "Eastern", "Northern", "Southern", "Western"] }],
  ["Saudi Arabia (‫المملكة العربية السعودية‬‎)", "SA", 966, "+...-..-...-....", "🇸🇦", { Regions: ["Riyadh", "Makkah", "Madinah", "Eastern Province", "Asir", "Tabuk", "Qassim", "Ha'il", "Jizan", "Najran", "Al Bahah", "Northern Borders", "Jawf", "Hail"] }],
  ["Solomon Islands", "SB", 677, "+...-.....", "🇸🇧", { Provinces: ["Central Province", "Choiseul", "Guadalcanal", "Honiara", "Isabel", "Makira-Ulawa", "Malaita", "Rennell and Bellona", "Temotu", "Western Province"] }],
  ["Seychelles", "SC", 248, "+...-.-...-...", "🇸🇨", { "Inner Islands": ["Mahé", "Praslin", "La Digue"], "Outer Islands": ["Alphonse", "Desroches", "Farquhar", "Aldabra"] }],
  ["Singapore", "SG", 65, "+.. ....-....", "🇸🇬", { Regions: ["Central Region", "East Region", "North Region", "North-East Region", "West Region"] }],
  ["Slovenia (Slovenija)", "SI", 386, "+...-..-...-...", "🇸🇮", { Regions: ["Pomurska", "Podravska", "Koroška", "Savinjska", "Zasavska", "Posavska", "Jugovzhodna Slovenija", "Osrednjeslovenska", "Gorenjska", "Primorsko-notranjska", "Goriška", "Obalno-kraška"] }],
  ["Slovakia (Slovensko)", "SK", 421, "+...(...)...-...", "🇸🇰", { Regions: ["Bratislava", "Trnava", "Trenčín", "Nitra", "Žilina", "Banská Bystrica", "Prešov", "Košice"] }],
  ["Sierra Leone", "SL", 232, "+...-..-......", "🇸🇱", { Provinces: ["Eastern Province", "Northern Province", "Southern Province", "Western Area"] }],
  ["San Marino", "SM", 378, "+...-....-......", "🇸🇲", { Municipalities: ["Acquaviva", "Borgo Maggiore", "Chiesanuova", "Domagnano", "Faetano", "Fiorentino", "Montegiardino", "San Marino", "Serravalle"] }],
  ["Senegal (Sénégal)", "SN", 221, "+...-..-...-....", "🇸🇳", { Regions: ["Dakar", "Thiès", "Diourbel", "Fatick", "Kaolack", "Kolda", "Louga", "Matam", "Saint-Louis", "Sédhiou", "Tambacounda", "Kaffrine", "Kédougou", "Kolda", "Ziguinchor"] }],
  ["Somalia (Soomaaliya)", "SO", 252, "+...-.-...-...", "🇸🇴", { Regions: ["Awdal", "Bakool", "Banaadir", "Bari", "Bay", "Galguduud", "Gedo", "Hiiraan", "Jubbada Dhexe", "Jubbada Hoose", "Mudug", "Nugaal", "Sanaag", "Shabeellaha Dhexe", "Shabeellaha Hoose", "Sool", "Togdheer", "Woqooyi Galbeed"] }],
  ["São Tomé and Príncipe (São Tomé e Príncipe)", "ST", 239, "+...-..-.....", "🇸🇹", { Provinces: ["Príncipe", "São Tomé"] }],
  ["El Salvador", "SV", 503, "+... ....-....", "🇸🇻", { Departments: ["Ahuachapán", "Cabañas", "Chalatenango", "Cuscatlán", "La Libertad", "La Paz", "La Unión", "Morazán", "San Miguel", "San Salvador", "San Vicente", "Santa Ana", "Sonsonate", "Usulután"] }],
  ["Sint Maarten", "SX", 1721, "+.(...)...-....", "🇸🇽", { Regions: ["Dutch Quarter", "French Quarter", "Little Bay", "Lowlands", "Maho", "Pelican Key", "Philipsburg", "Point Blanche", "Simpson Bay"] }],
  ["Turks and Caicos Islands", "TC", 1649, "+.(...)...-....", "🇹🇨", { Districts: ["Grand Turk", "Salt Cay", "South Caicos", "Providenciales", "North Caicos", "Middle Caicos"] }],
  ["Chad (Tchad)", "TD", 235, "+...-..-..-..-..", "🇹🇩", { Regions: ["Batha", "Borkou", "Ennedi", "Ennedi-Est", "Ennedi-Ouest", "Guéra", "Hadjer-Lamis", "Kanem", "Lac", "Logone Occidental", "Logone Oriental", "Mandoul", "Mayo-Kebbi Est", "Mayo-Kebbi Ouest", "Moyen-Chari", "N'Djamena", "Ouaddaï", "Salamat", "Sila", "Tandjilé", "Tibesti", "Wadi Fira"] }],
  ["French Southern and Antarctic Lands", "TF", 262, "", "🇹🇫", { Districts: ["Kerguelen Islands", "Crozet Islands", "Amsterdam Island", "Saint-Paul Island"] }],
  ["Togo", "TG", 228, "+...-..-...-...", "🇹🇬", { Regions: ["Centrale", "Kara", "Maritime", "Plateaux", "Savanes"] }],
  ["Thailand (ไทย)", "TH", 66, "+..-..-...-...", "🇹🇭", { Regions: ["Bangkok", "Central Thailand", "Eastern Thailand", "Northern Thailand", "Northeastern Thailand", "Southern Thailand", "Western Thailand"] }],
  ["Tokelau", "TK", 690, "+...-....", "🇹🇰", { Villages: ["Atafu", "Fakaofo", "Nukunonu"] }],
  ["Timor-Leste", "TL", 670, "+...-...-....", "🇹🇱", { Districts: ["Aileu", "Ainaro", "Baucau", "Bobonaro", "Cova Lima", "Dili", "Ermera", "Lautem", "Liquiçá", "Manatuto", "Manufahi", "Oecusse", "Viqueque"] }],
  ["Turkmenistan", "TM", 993, "+...-.-...-....", "🇹🇲", { Regions: ["Ahal", "Balkan", "Daşoguz", "Lebap", "Mary"] }],
  ["Tunisia (‫تونس‬‎)", "TN", 216, "+...-..-...-...", "🇹🇳", { Regions: ["Tunis", "Ariana", "Ben Arous", "Manouba", "Nabeul", "Zaghouan", "Bizerte", "Béja", "Jendouba", "Kef", "Siliana", "Kairouan", "Kasserine", "Sidi Bouzid", "Sousse", "Monastir", "Mahdia", "Sfax", "Gabès", "Medenine", "Tataouine", "Gafsa", "Tozeur", "Kebili"] }],
  ["Tonga", "TO", 676, "+...-.....", "🇹🇴", { Regions: ["Eua", "Ha'apai", "Niuas", "Tongatapu", "Vava'u"] }],
  ["Turkey (Türkiye)", "TR", 90, "+.. ... ... .. ..", "🇹🇷", { Regions: ["Adana", "Adıyaman", "Afyonkarahisar", "Ağrı", "Amasya", "Ankara", "Antalya", "Artvin", "Aydın", "Balıkesir", "Bilecik", "Bingöl", "Bitlis", "Bolu", "Burdur", "Bursa", "Çanakkale", "Çankırı", "Çorum", "Denizli", "Diyarbakır", "Edirne", "Elazığ", "Erzincan", "Erzurum", "Eskişehir", "Gaziantep", "Giresun", "Gümüşhane", "Hakkâri", "Hatay", "Isparta", "Mersin", "İstanbul", "İzmir", "Kars", "Kastamonu", "Kayseri", "Kırklareli", "Kırşehir", "Kocaeli", "Konya", "Kütahya", "Malatya", "Manisa", "Kahramanmaraş", "Mardin", "Muğla", "Muş", "Nevşehir", "Niğde", "Ordu", "Rize", "Sakarya", "Samsun", "Siirt", "Sinop", "Sivas", "Tekirdağ", "Tokat", "Trabzon", "Tunceli", "Şanlıurfa", "Uşak", "Van", "Yozgat", "Zonguldak", "Aksaray", "Bayburt", "Karaman", "Kırıkkale", "Batman", "Şırnak", "Bartın", "Ardahan", "Iğdır", "Yalova", "Karabük", "Kilis", "Osmaniye", "Düzce"] }],
  ["Trinidad and Tobago", "TT", 1868, "+.(...)...-....", "🇹🇹", { Municipalities: ["Siparia", "Sangre Grande", "Port of Spain", "Arima", "Point Fortin", "Chaguanas", "Diego Martin", "San Fernando"], Regions: ["Eastern Tobago", "Couva-Tabaquite-Talparo", "Princes Town", "Rio Claro-Mayaro", "Penal-Debe", "Sangre Grande", "San Juan-Laventille", "Tunapuna-Piarco"] }],
  ["Tuvalu", "TV", 688, "+...-.....", "🇹🇻", { Islands: ["Funafuti", "Nanumea", "Nui", "Nukufetau", "Nukulaelae", "Vaitupu"] }],
  ["Ukraine (Україна)", "UA", 380, "+...(..)...-..-..", "🇺🇦", { Oblasts: ["Cherkasy", "Chernihiv", "Chernivtsi", "Dnipropetrovsk", "Donetsk", "Ivano-Frankivsk", "Kharkiv", "Kherson", "Khmelnytskyi", "Kiev", "Kirovohrad", "Luhansk", "Lviv", "Mykolaiv", "Odessa", "Poltava", "Rivne", "Sumy", "Ternopil", "Vinnytsia", "Volyn", "Zakarpattia", "Zaporizhzhia", "Zhytomyr", "Autonomous Republic of Crimea"] }],
  ["Uganda", "UG", 256, "+...(...)...-...", "🇺🇬", { Regions: ["Central Region", "Eastern Region", "Northern Region", "Western Region"] }],
  ["United States Minor Outlying Islands", "UM", 1, "", "🇺🇲", { Territories: ["Baker Island", "Howland Island", "Jarvis Island", "Johnston Atoll", "Kingman Reef", "Midway Atoll", "Navassa Island", "Palmyra Atoll", "Wake Island"] }, 2],
  ["United States", "US", 1, "+. (...) ...-....", "🇺🇸", { States: ["Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", "Delaware", "Florida", "Georgia", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland", "Massachusetts", "Michigan", "Minnesota", "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire", "New Jersey", "New Mexico", "New York", "North Carolina", "North Dakota", "Ohio", "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island", "South Carolina", "South Dakota", "Tennessee", "Texas", "Utah", "Vermont", "Virginia", "Washington", "West Virginia", "Wisconsin", "Wyoming"] }, 0],
  ["Uruguay", "UY", 598, "+...-.-...-..-..", "🇺🇾", { Departments: ["Artigas", "Canelones", "Cerro Largo", "Colonia", "Durazno", "Flores", "Florida", "Lavalleja", "Maldonado", "Montevideo", "Paysandú", "Río Negro", "Rivera", "Rocha", "Salto", "San José", "Soriano", "Tacuarembó", "Treinta y Tres"] }],
  ["Uzbekistan (Oʻzbekiston)", "UZ", 998, "+...-..-...-....", "🇺🇿", { Regions: ["Andijan", "Bukhara", "Fergana", "Jizzakh", "Karakalpakstan", "Namangan", "Navoiy", "Qashqadaryo", "Samarqand", "Sirdaryo", "Surxondaryo", "Tashkent", "Tashkent City", "Xorazm"] }],
  ["Vatican City (Città del Vaticano)", "VA", 39, "+.. .. .... ....", "🇻🇦", 1],
  ["Saint Vincent and the Grenadines", "VC", 1784, "+.(...)...-....", "🇻🇨", { Parishes: ["Charlotte", "Grenadines", "Saint Andrew", "Saint David", "Saint George", "Saint Patrick"] }],
  ["Venezuela", "VE", 58, "+..(...)...-....", "🇻🇪", { States: ["Amazonas", "Anzoátegui", "Apure", "Aragua", "Barinas", "Bolívar", "Carabobo", "Cojedes", "Delta Amacuro", "Falcón", "Guárico", "Lara", "Mérida", "Miranda", "Monagas", "Nueva Esparta", "Portuguesa", "Sucre", "Táchira", "Trujillo", "Vargas", "Yaracuy", "Zulia"] }],
  ["British Virgin Islands", "VG", 1284, "+.(...)...-....", "🇻🇬", { Districts: ["Tortola", "Virgin Gorda", "Anegada", "Jost Van Dyke"] }],
  ["U.S. Virgin Islands", "VI", 1340, "+.(...)...-....", "🇻🇮", { Districts: ["Saint Croix", "Saint John", "Saint Thomas"] }],
  ["Vietnam (Việt Nam)", "VN", 84, "+..-..-....-...", "🇻🇳", { Regions: ["Hanoi", "Ho Chi Minh City", "Da Nang", "Hai Phong", "Can Tho", "Bien Hoa", "Hue", "Nha Trang", "Buon Ma Thuot", "Quy Nhon", "Vung Tau", "Nam Dinh", "Phan Thiet", "Long Xuyen", "Ha Long", "Thai Nguyen", "Thanh Hoa", "Rach Gia", "Cam Ranh", "Vinh", "My Tho", "Da Lat", "Bac Lieu", "Bien Hoa"] }],
  ["Vanuatu", "VU", 678, "+...-.....", "🇻🇺", { Provinces: ["Malampa", "Penama", "Sanma", "Shefa", "Tafea", "Torba"] }],
  ["Wallis and Futuna", "WF", 681, "+...-..-....", "🇼🇫", { Kingdoms: ["Uvea", "Sigave", "Alo"] }],
  ["Samoa", "WS", 685, "+...-..-....", "🇼🇸", { Districts: ["A'ana", "Aiga-i-le-Tai", "Atua", "Fa'asaleleaga", "Gaga'emauga", "Gaga'ifomauga", "Palauli", "Satupa'itea", "Tuamasaga", "Va'a-o-Fonoti", "Vaisigano"] }],
  ["Kosovo", "XK", 383, "", "🇽🇰", { Districts: ["District of Pristina", "District of Mitrovica", "District of Peja", "District of Prizren", "District of Gjilan", "District of Ferizaj"] }],
  ["Yemen (‫اليمن‬‎)", "YE", 967, "+...-.-...-...", "🇾🇪", { Governorates: ["Sana'a", "Aden", "Taiz", "Al Hudaydah", "Ibb", "Dhamar", "Al Mukalla", "Hajjah", "Amran", "Saada", "Saywun", "Zinjibar", "Al Bayda", "Lahij", "Marib", "Al Ghaydah", "Al Mahwit", "Al Hazm", "Ataq", "Al Jawf", "Sadah", "Shabwah", "Al Dhalea", "Rida", "Al Mahrah"] }],
  ["Mayotte", "YT", 262, "", "🇾🇹", { Cantons: ["Acoua", "Bandraboua", "Bandrélé", "Bouéni", "Chiconi", "Chirongui", "Dembeni", "Dzaoudzi", "Kani-Kéli", "Koungou", "Mamoudzou-1", "Mamoudzou-2", "Mamoudzou-3", "Mamoudzou-4", "Mtsamboro", "M'Tsangamouji", "Ouangani", "Pamandzi", "Sada", "Tsingoni"], Communes: ["Acoua", "Bandraboua", "Bandrélé", "Bouéni", "Chiconi", "Chirongui", "Dembeni", "Dzaoudzi", "Kani-Kéli", "Koungou", "Mamoudzou", "Mtsamboro", "M'Tsangamouji", "Ouangani", "Pamandzi", "Sada", "Tsingoni"] }],
  ["South Africa", "ZA", 27, "+..-..-...-....", "🇿🇦", { Provinces: ["Eastern Cape", "Free State", "Gauteng", "KwaZulu-Natal", "Limpopo", "Mpumalanga", "North West", "Northern Cape", "Western Cape"] }],
  ["Zambia", "ZM", 260, "+...-..-...-....", "🇿🇲", { Provinces: ["Lusaka", "Copperbelt", "Central", "Eastern", "Luapula", "Northern", "North-Western", "Southern", "Western"] }],
  ["Zimbabwe", "ZW", 263, "+...-.-......", "🇿🇼", { Provinces: ["Harare", "Bulawayo", "Manicaland", "Mashonaland Central", "Mashonaland East", "Mashonaland West", "Masvingo", "Matabeleland North", "Matabeleland South", "Midlands"] }],
] as CountriesArray extends Array<any> ? CountriesArray : never;
/**
 * @type ArrayLiteral
 * @description Returns the type of an array literal
 * @param A - An array literal
 * @returns {[...U]} The type of the array literal
 */
type ArrayLiteral<A> = { [K in keyof A]: A[K] }[keyof A] extends (infer U extends string | number | symbol)[] ? U : never;
/**
 * @function reverseLookup - Takes and inverts an object with an array of values.
 * @type ReverseLookup
 * @description Takes an object with an array of values and returns an object
 *  with the values as keys and the keys as values. If a value is passed in,
 *  it will return the key that matches the value.
 * @param {O} o - An object with an array of values
 * @param {Findable} selectedValue - An optional value to find in the object
 * @returns {{ [Key in keyof O as Findable extends O[Key][number] ? Findable : never]:
 * Key; } | keyof O} - An object with keys as values and values as keys
 */
function reverseLookup<
  O extends { [K in keyof O]: [A, ...A[]] },
  Findable extends keyof InvertedObject<O> | undefined = undefined,
  A extends ArrayLiteral<O> = ArrayLiteral<O>,
>(o: O, selectedValue: Findable = undefined as Findable):  Findable extends undefined ? InvertedObject<O> : InvertedObject<O, Findable> {
  var invObj = {} as InvertedObject<O>;
  let result: any;
  for (const k in o) {
    if (o.hasOwnProperty(k)) {
      for (const v of o[k]) {
        invObj = {
          ...invObj,
          [v]: k as keyof O,
        } as typeof invObj;
      }
    }
  }
  if (!selectedValue || selectedValue === undefined) {
    result = invObj;
  } else if (selectedValue && selectedValue !== undefined) {
    if (selectedValue === undefined) return null as never;
    for (let key of Object.keys(invObj as any)) {
      if (key === selectedValue) {
        result = invObj[selectedValue as Findable extends keyof typeof invObj ? Findable : never] as NonNullable<typeof invObj[Findable extends keyof typeof invObj ? Findable : never]>;
      }
    }
  }
  return result as Findable extends undefined ? InvertedObject<O> : InvertedObject<O, Findable>;
}
export type KKNumber<K, KO extends keyof K = keyof K> = K[KO] extends Array<any> ? K[KO][number] : K[KO][keyof K[KO]];
export type InvertedObject<
  Inverted extends {[K in keyof Inverted]: Inverted[K] },
  Value extends keyof InvertedObject<Inverted> | undefined = undefined,
> = Value extends KKNumber<Inverted>
    ? {
      [Key in keyof Inverted as Value extends KKNumber<Inverted, Key> ?  Value : KKNumber<Inverted, Key>]: Key;
    }[Value]
    : {
      [Key in keyof Inverted as KKNumber<Inverted, Key>]: Key;
  };
export type RegionCodes = ["AD", "AE", "AF", "AG", "AI", "AL", "AM", "AO", "AQ", "AR", "AS", "AT", "AU", "AW", "AX", "AZ", "BA", "BB", "BD", "BE", "BF", "BG", "BH", "BI", "BJ", "BL", "BM", "BN", "BO", "BQ", "BR", "BS", "BT", "BV", "BW", "BY", "BZ", "CA", "CC", "CD", "CF", "CG", "CI", "CK", "CL", "CM", "CN", "CO", "CR", "CU", "CV", "CW", "CX", "CY", "CZ", "DE", "DJ", "DK", "DM", "DO", "DZ", "EC", "EE", "EG", "EH", "ER", "ET", "FI", "FJ", "FK", "FM", "FO", "FR", "GA", "GB", "GD", "GE", "GF", "GG", "GH", "GI", "GL", "GM", "GN", "GP", "GQ", "GR", "GS", "GT", "GU", "GW", "GY", "HK", "HM", "HN", "HR", "HT", "HU", "ID", "IE", "IL", "IM", "IN", "IO", "IQ", "IR", "IS", "IT", "JE", "JM", "JO", "JP", "KE", "KG", "KH", "KI", "KM", "KN", "KP", "KW", "KY", "KZ", "LA", "LB", "LC", "LI", "LR", "LS", "LT", "LU", "LV", "LY", "MA", "MC", "MD", "ME", "MF", "MG", "MH", "MK", "ML", "MM", "MN", "MO", "MP", "MQ", "MR", "MS", "MT", "MU", "MV", "MW", "MX", "MY", "MZ", "NA", "NC", "NE", "NF", "NG", "NI", "NL", "NO", "NP", "NR", "NU", "NZ", "OM", "PA", "PE", "PF", "PG", "PH", "PK", "PL", "PM", "PN", "PR", "PS", "PT", "PW", "PY", "QA", "RE", "RO", "RS", "RU", "RW", "SA", "SB", "SC", "SG", "SI", "SK", "SL", "SM", "SN", "SO", "ST", "SV", "SX", "TC", "TD", "TF", "TG", "TH", "TK", "TL", "TM", "TN", "TO", "TR", "TT", "TV", "UA", "UG", "UM", "US", "UY", "UZ", "VA", "VC", "VE", "VG", "VI", "VN", "VU", "WF", "WS", "XK", "YE", "YT", "ZA", "ZM", "ZW"];
type GetCountryArray = <R extends RegionCode | Lowercase<RegionCode> | undefined = undefined>(region: R) => R extends RegionCode | Lowercase<RegionCode> ? CountryArray<Uppercase<R>> : CountryArrays;
//___=============================>           <============================___\\
//___|| ==================== ||      HELPERS      || =================== ||___\\
//___=============================>           <============================___\\

type GetCountryName = <R extends RegionCode | Lowercase<RegionCode>>(region: R) => CountryName<Uppercase<R>>;

type SearchByZone = <
  R extends RegionCode | Lowercase<RegionCode>,
  S extends K | undefined = undefined,
  K extends keyof InvertedObject<CountryZones<Uppercase<R>>> = keyof InvertedObject<CountryZones<Uppercase<R>>>
>(regionCode: R, zone?: S) => InvertedObject<CountryZones<Uppercase<R>>, S>;


/**
 * @type ZoneType<R extends RegionCode> - Get the type of a region
 */
type ZoneType<R extends RegionCode> = keyof CountryZones<R> extends "Regions"
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
export type RegionCode = RegionCodes[number];
/**
 * @type DialingCode<R extends RegionCode> - Get the code of a country for a region
 */
type DialCode<R extends RegionCode> = CountryArray<R>[2];
/**
 * @type PhoneFormat<R extends RegionCode> - Get the format of a country for a region
 */
type PhoneFormat<R extends RegionCode> = Exclude<CountryArray<R>[3], "" | undefined>;
/**
 * @type CountryFlag<R extends RegionCode> - Get the flag of a country for a region
 */
type CountryFlag<R extends RegionCode> = CountryArray<R>[4];
/**
 * @type CountryZones<R extends RegionCode> - Get the zones of a region
 */
type CountryZones<R extends RegionCode = RegionCode> = Exclude<CountryArray<R>[5], 1 | undefined>;
/**
 * @type Zones<R extends RegionCode> - Get the zones of a region
 */
type Zones<R extends RegionCode> = CountryZones<R>[keyof CountryZones<R>];
/**
 * @type DialPriority<R extends RegionCode> - Get the zones of a region
 */
type DialPriority<R extends RegionCode> = R extends "VA" ? 1 : CountryArray<R>[6] extends 0 | 1 | 2 | 3 ? CountryArray<R>[6] : 0;
/**
 * @type AreaCodes<R extends RegionCode> - Get the zones of a region
 */
type AreaCodes<R extends RegionCode> = Exclude<CountryArray<R>[7], undefined>;
/**
 * @type NameHolder - The holder of a name existing in a country
 */
type NameHolder = `${string} (${string}) (${string})` | `${string} (${string}) ${string}` | `${string} (${string})`;
/**
 * @type LocalName<R extends RegionCode, F extends 'LCF' | 'LF' | 'LCN' | undefined> - Get the local name of a country for a region
 * @template {R extends RegionCode} R
 * @template {F extends 'LCF' | 'LF' | 'LCN' | undefined} F
 */
type LocalName<R extends RegionCode, F extends 'LCF' | 'LF' | 'LCN' | undefined> =
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
type ForeignName<R extends RegionCode, F extends 'LCF' | 'LF' | 'LCN' | undefined> =
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
type ContextualName<R extends RegionCode, F extends 'LCF' | 'LF' | 'LCN' | undefined> =
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

type HandleContext<T extends "LCF" | "LF" | "LCN"> = (T extends "LCF" | "LF" | "LCN" ? T extends "LCF" | "LF" ? T extends "LCF" ? "Contextual" | "Local" | "Foreign" : "Local" | "Foreign" : "Local" | "Contextual" : never) | undefined;


/**
 * @type ForeignLocal - Get the contextual name of a country for a region
 * @template {RegionCode} R
 * @template {"LCF" | "LF" | "LCN"} T
 * @template {HandleContext<T>} F
 *
 */
type ForeignLocal<
  R extends RegionCode,
  T extends "LCF" | "LF" | "LCN",
  /*OF extends 'Local' | 'Foreign' | 'Contextual' = 'Local',*/
  F extends HandleContext<T> = HandleContext<T>
  /*(OF extends 'Contextual' | 'Local' ? 'LCF' | 'LCN' : never) |
  (OF extends 'Foreign' | 'Local' ? 'LCF' | 'LF' : never) | undefined = undefined*/
> =
  CountryName<R> extends MultiName<CountryName<R>>
    ? F extends 'Local'
      ? LocalName<R, NonNullable<T>>
    : F extends 'Contextual'
      ? ContextualName<R, NonNullable<T>>
    : F extends 'Foreign'
      ? ForeignName<R, NonNullable<T>>
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


interface Country<R extends RegionCode> {
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
  toString(): `Country: ${CountryName<R>}`;
  [Symbol.match](string: string): CountryName<R> | null;
  local?: CountryName<R> | ForeignLocal<R, 'LCF' | 'LF' | 'LCN', 'Local'> extends `Saint${infer StCountry extends string}` ? `St.${StCountry}` : R extends "TF" ? "French Southern Territories" : R extends "GS" ? "South Sandwich Islands" : R extends "HM" ? "McDonald Islands" : R extends "UM" ? "U.S. Minor Outlying Islands" : ForeignLocal<R, 'LCF' | 'LF' | 'LCN', 'Local'>;
  foreign?: ForeignLocal<R, 'LF' | 'LCF', 'Foreign'>;
  context?: ForeignLocal<R, 'LCF' | 'LCN', 'Contextual'>;
};

type GetLclCtx = <R extends RegionCode, N extends CountryName<R>>(region: R, name: CountryName<R>) => {
  lcl: CountryName<R> extends `${infer Lcl} (${infer Ctx}) ${infer Name}` ? Lcl : never;
  ctx: CountryName<R> extends `${infer Lcl} (${infer Ctx}) ${infer Name}` ? Ctx : never;
  name: CountryName<R> extends `${infer Lcl} (${infer Ctx}) ${infer Name}` ? Name : never;
} | undefined;
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
  readonly size: number;
}

interface Countries {
  <R extends RegionCode | Lowercase<RegionCode> | undefined = undefined>(region: R): R extends RegionCode | Lowercase<RegionCode> ? CountriesData[Uppercase<R>] : CountriesData;
  [Symbol.toStringTag]: 'Countries';
  toString(): 'Countries';
  getArray: GetCountryArray;
  getName: GetCountryName;
  map: CountryMap;
  lookup: SearchByZone;
}
type ExtractName = <
  R extends RegionCode | Lowercase<RegionCode>,
  T extends 'LCF' | 'LF' | 'LCN',
  F extends HandleContext<T> & keyof typeof regex.formReplacementMap[T]
>(region: R, form: T, type: F) => ForeignLocal<Uppercase<R>, T, F>;

/**
 * @constant regionCodes - The region codes for countries.
 * @type RegionCodes
 * @summary
 * The region codes for countries.
 */
export const regionCodes: RegionCodes = ["AD", "AE", "AF", "AG", "AI", "AL", "AM", "AO", "AQ", "AR", "AS", "AT", "AU", "AW", "AX", "AZ", "BA", "BB", "BD", "BE", "BF", "BG", "BH", "BI", "BJ", "BL", "BM", "BN", "BO", "BQ", "BR", "BS", "BT", "BV", "BW", "BY", "BZ", "CA", "CC", "CD", "CF", "CG", "CI", "CK", "CL", "CM", "CN", "CO", "CR", "CU", "CV", "CW", "CX", "CY", "CZ", "DE", "DJ", "DK", "DM", "DO", "DZ", "EC", "EE", "EG", "EH", "ER", "ET", "FI", "FJ", "FK", "FM", "FO", "FR", "GA", "GB", "GD", "GE", "GF", "GG", "GH", "GI", "GL", "GM", "GN", "GP", "GQ", "GR", "GS", "GT", "GU", "GW", "GY", "HK", "HM", "HN", "HR", "HT", "HU", "ID", "IE", "IL", "IM", "IN", "IO", "IQ", "IR", "IS", "IT", "JE", "JM", "JO", "JP", "KE", "KG", "KH", "KI", "KM", "KN", "KP", "KW", "KY", "KZ", "LA", "LB", "LC", "LI", "LR", "LS", "LT", "LU", "LV", "LY", "MA", "MC", "MD", "ME", "MF", "MG", "MH", "MK", "ML", "MM", "MN", "MO", "MP", "MQ", "MR", "MS", "MT", "MU", "MV", "MW", "MX", "MY", "MZ", "NA", "NC", "NE", "NF", "NG", "NI", "NL", "NO", "NP", "NR", "NU", "NZ", "OM", "PA", "PE", "PF", "PG", "PH", "PK", "PL", "PM", "PN", "PR", "PS", "PT", "PW", "PY", "QA", "RE", "RO", "RS", "RU", "RW", "SA", "SB", "SC", "SG", "SI", "SK", "SL", "SM", "SN", "SO", "ST", "SV", "SX", "TC", "TD", "TF", "TG", "TH", "TK", "TL", "TM", "TN", "TO", "TR", "TT", "TV", "UA", "UG", "UM", "US", "UY", "UZ", "VA", "VC", "VE", "VG", "VI", "VN", "VU", "WF", "WS", "XK", "YE", "YT", "ZA", "ZM", "ZW"];


const regex = {
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
    }
  } as const,
}
type Replace<T extends "LCF" | "LCN" | "LF", F extends HandleContext<T> & keyof typeof regex.formReplacementMap[T]> = typeof regex.formReplacementMap[T][F] extends "$1" | "$1 $3" | "$3" | "$2" | "$2 $3" ? typeof regex.formReplacementMap[T][F] : "";

type ReplaceResult = "$1" | "$1 $3" | "$3" | "$2" | "$2 $3";
const matchTypeMap = {
  'LCF': regex.matchLclCtxFrgn,
  'LCN': regex.matchLclCtxName,
  'LF': regex.matchLclFrgn,
}
const countryArrays = {} as CountryArrays;
regionCodes.forEach((rc) => {//@ts-ignore
  countryArrays[rc] = countriesArray.filter((country): country is CountryArray<typeof rc> => country[1] === rc)[0] as CountryArrays[keyof CountryArrays];
});
const helper = {
  extractName: function (region, form, type) {
    return countryArrays[region?.toUpperCase() as Uppercase<typeof region>][0]
      .replace(matchTypeMap[form] || regex.matchLclCtxFrgn,
        regex.formReplacementMap[form][type] as Replace<typeof form, typeof type>) as ForeignLocal<Uppercase<typeof region>, typeof form, typeof type>;
  } as ExtractName,
  getRegionCodes: function*<R extends RegionCode>() {
    for (let key of regionCodes) {
      yield key;
    }
  },
  getLocalContextGroups: function (region, name = Countries(region).name) {
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
    let keys = Object.keys(Countries(region as R).zones!) as (keyof CountryZones<R>)[];
    if (keys.length === 1) {
      return keys[0] as unknown as ZoneType<R>;
    } else {
      return keys as unknown as ZoneType<R>;
    }
  },
  saintRegex: /(Saint)(.+)/g,
  ...regex,
}


//___=============================>                     <============================___\\
//___|| ==================== ||      MODULE: COUNTRIES      || =================== ||___\\
//___=============================>                     <============================___\\
function isRegionCode<R extends RegionCode | Lowercase<RegionCode>>(region: R): region is R {
  return regionCodes.includes(region.toUpperCase() as Uppercase<R>);
}



// for (const regionCode of regionCodes) {//@ts-ignore
//   countries[regionCode] = countryData[regionCode] as CountriesData[keyof CountriesData]
// }
const countryData = {} as CountriesData;
countriesArray.forEach((c, i, a) => {
  var country = {} as CountriesData[keyof CountriesData];
  for (let key of regionCodes) {//@ts-ignore
    if (c[1] !== a[i][1]) return null;
    country = {
      [Symbol.toStringTag]: `Country: ${c[0]}`,
      toString: function () {
        return `Country: ${c[0]}`;
      },
      [Symbol.match]: (str) => {
        return helper.matchLclFrgn.test(str) ? c[0] : helper.matchLclCtxName.test(str) ? c[0] : helper.matchLclCtxFrgn.test(str) ? c[0] :
          null;
      },
      name: c[0],
      regionCode: c[1],
      flag: c[4],
      dialCode: c[2],
      priority: c[5] !== 1 ? c[6] !== undefined ? c[6] : 0 : c[5],
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
      country.areaCodes = c[7];
    }
    if (c[1] === 'GS' || c[1] === 'HM' || c[1] === 'UM' || c[1] === "TF") {
      country.local = c[1] === "TF" ? "French Southern Territories" : c[1] === "GS" ? "South Sandwich Islands" : c[1] === "HM" ? "McDonald Islands" : c[1] === "UM" ? "U.S. Minor Outlying Islands" : c[0];
    }

    helper.saintRegex.test(country.name) ? country.local = country.name.replace(helper.saintRegex, 'St.$2') as CountryName<RegionCode> extends `Saint${infer StCountry extends string}` ? `St.${StCountry}` : never : null;
    if (c[0] && helper.isMultiName(c[0])) {
      const lclCtxFrgn = c[0].match(regex.matchLclCtxFrgn);
      const lclCtxName = c[0].match(regex.matchLclCtxName);
      const lclFrgn = c[0].match(regex.matchLclFrgn);
      if (lclCtxFrgn !== null) {//@ts-ignore
        country.local = helper.extractName(c[1], 'LCF', 'Local');
        country.context = helper.extractName(c[1], 'LCF', 'Contextual');
        country.foreign = helper.extractName(c[1], 'LCF', 'Foreign');
      } else if (lclCtxName !== null) {
        country.local = helper.extractName(c[1], 'LCN', 'Local');
        country.context = helper.extractName(c[1], 'LCN', 'Contextual');
      } else if (lclFrgn !== null) {
        country.local = helper.extractName(c[1], 'LF', 'Local');
        country.foreign = helper.extractName(c[1], 'LF', 'Foreign');
      }
    }
    if (country.local && helper.saintRegex.test(country.local)) {
      country.local = country.local!.replace(helper.saintRegex, 'St.$2') as Country<RegionCode> extends `Saint${infer StCountry extends string}` ? `St.${StCountry}` : never;
    }
    if (key === c[1]) {//@ts-ignore
      countryData[c[1] as RegionCode] = country as CountriesData[keyof CountriesData]
    }
    country = {} as CountriesData[keyof CountriesData];
  }
});
/**
 * @var {Countries} Countries - Provides a way to get a country array by region code.
 * @type Countries
 * @summary
 * - If {@link region} is provided:
 * It returns a country from the main array with the associated value.
 * - If {@link region} is not provided:
 * It returns the {@link countryData Source Array}.
 * - This is the main function that creates the {@link countryData} object.
 * @param {R} [region=undefined] - The region code to get the country array for.
 * @template R - The region code to get the country array for.
 * @returns {R extends RegionCode | Lowercase<RegionCode> ? CountriesData[Uppercase<R>] : CountriesData} The country array or the main array.
 *///@ts-ignore
export function Countries<R extends RegionCode | Lowercase<RegionCode> | undefined = undefined>(
  region: R = undefined as R
) {
  return (
    region ? countryData[region.toUpperCase() as Uppercase<NonNullable<R>>] : countryData
  ) as R extends RegionCode | Lowercase<RegionCode> ? CountriesData[Uppercase<R>] : CountriesData;
};

Countries.toString = () => 'Countries';
Countries[Symbol.toStringTag] = 'Countries';
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
Countries.getArray = <R extends RegionCode | Lowercase<RegionCode> | undefined = undefined>(
  region: R = undefined as R
): R extends RegionCode | Lowercase<RegionCode> ? CountryArray<Uppercase<R>> : CountryArrays => (
    region && isRegionCode(region)
      ? countryArrays[region.toUpperCase() as RegionCode]
      : countryArrays
  ) as R extends RegionCode | Lowercase<RegionCode> ? CountryArray<Uppercase<R>> : CountryArrays;
/**
 * @property {CountryMap} countryMap - Provides a way to get a country array by accessing it via an indice.
 * @type CountryMap
 * @summary
 * Creates a map of country arrays indexed by region code.
 */
Countries.map = new Map(regionCodes.map((rc) => [rc, Countries.getArray(rc)])) as CountryMap;

Countries.getName = (region) => Countries(region.toUpperCase() as RegionCode).name as CountryName<Uppercase<typeof region>>;
Countries.lookup = (
  region,
  zone = undefined //@ts-ignore
): InvertedObject<CountryZones<Uppercase<typeof region>>, Exclude<typeof zone, undefined>> => {
  region = region?.toUpperCase() as any;//@ts-ignore
  return reverseLookup((countries[region] as Country<Uppercase<typeof region>>).zones, zone) as InvertedObject<CountryZones<Uppercase<typeof region>>, typeof zone>;
};



// for (const regionCode of regionCodes) {//@ts-ignore
//   countries[regionCode] = countryData[regionCode] as CountriesData[keyof CountriesData]
// }


export default Countries;
