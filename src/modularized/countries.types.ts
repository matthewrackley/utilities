/**
 * @file countries.types.ts
 * @description
 * @author Matthew Allen Rackley
 * @copyright [Matthew Rackley's Github](https://www.github.com/matthewrackley "Matthew Rackley on github.com")
 */

export type RegionCodes = ["AD", "AE", "AF", "AG", "AI", "AL", "AM", "AO", "AQ", "AR", "AS", "AT", "AU", "AW", "AX", "AZ", "BA", "BB", "BD", "BE", "BF", "BG", "BH", "BI", "BJ", "BL", "BM", "BN", "BO", "BQ", "BR", "BS", "BT", "BV", "BW", "BY", "BZ", "CA", "CC", "CD", "CF", "CG", "CI", "CK", "CL", "CM", "CN", "CO", "CR", "CU", "CV", "CW", "CX", "CY", "CZ", "DE", "DJ", "DK", "DM", "DO", "DZ", "EC", "EE", "EG", "EH", "ER", "ET", "FI", "FJ", "FK", "FM", "FO", "FR", "GA", "GB", "GD", "GE", "GF", "GG", "GH", "GI", "GL", "GM", "GN", "GP", "GQ", "GR", "GS", "GT", "GU", "GW", "GY", "HK", "HM", "HN", "HR", "HT", "HU", "ID", "IE", "IL", "IM", "IN", "IO", "IQ", "IR", "IS", "IT", "JE", "JM", "JO", "JP", "KE", "KG", "KH", "KI", "KM", "KN", "KP", "KW", "KY", "KZ", "LA", "LB", "LC", "LI", "LR", "LS", "LT", "LU", "LV", "LY", "MA", "MC", "MD", "ME", "MF", "MG", "MH", "MK", "ML", "MM", "MN", "MO", "MP", "MQ", "MR", "MS", "MT", "MU", "MV", "MW", "MX", "MY", "MZ", "NA", "NC", "NE", "NF", "NG", "NI", "NL", "NO", "NP", "NR", "NU", "NZ", "OM", "PA", "PE", "PF", "PG", "PH", "PK", "PL", "PM", "PN", "PR", "PS", "PT", "PW", "PY", "QA", "RE", "RO", "RS", "RU", "RW", "SA", "SB", "SC", "SG", "SI", "SK", "SL", "SM", "SN", "SO", "ST", "SV", "SX", "TC", "TD", "TF", "TG", "TH", "TK", "TL", "TM", "TN", "TO", "TR", "TT", "TV", "UA", "UG", "UM", "US", "UY", "UZ", "VA", "VC", "VE", "VG", "VI", "VN", "VU", "WF", "WS", "XK", "YE", "YT", "ZA", "ZM", "ZW"];

type GetCountryArrays = <R extends RegionCode>(region?: R) => CountriesArray | CountryArray<R>;
//___=============================>             <============================___\\
//___|| ==================== ||      MAIN TYPE      || =================== ||___\\
//___=============================>             <============================___\\
/**
 * @type CountriesArray<R extends RegionCode | undefined = undefined>
 * @description An array of all countries in the world. Each country is an array of the following:
 * 0. Name
 * 1. ISO 3166-1 alpha-2 code
 * 2. Dialing code
 * 3. National number format
 * 4. Emoji flag
 * 5. ZoneTypes (Regions, States, Provinces, etc.) | 1
 * 6. Zones (Regions, States, Provinces, etc.)
 *
 */
export type CountriesArray<R extends RegionCode | undefined = undefined> = [
  R extends "AD" | undefined ? ["Andorra", "AD", "376", "+...-...-...", "🇦🇩", "Regions", ["Andorra la Vella", "Canillo", "Encamp", "Escaldes-Engordany", "La Massana", "Ordino", "Sant Julià de Lòria"]] : never,
  R extends "AE" | undefined ? ["United Arab Emirates (‫الإمارات العربية المتحدة‬‎)", "AE", "971", "+...-.-...-....", "🇦🇪", "Emirates", ["Abu Dhabi", "Ajman", "Dubai", "Fujairah", "Ras Al Khaimah", "Sharjah", "Umm Al Quwain"]] : never,
  R extends "AF" | undefined ? ["Afghanistan (‫افغانستان‬‎)", "AF", "93", "+..-..-...-....", "🇦🇫", "Regions", ["Badakhshan", "Badghis", "Baghlan", "Balkh", "Bamyan", "Daykundi", "Farah", "Faryab", "Ghazni", "Ghor", "Helmand", "Herat", "Jowzjan", "Kabul", "Kandahar", "Kapisa", "Khost", "Kunar", "Kunduz Province", "Laghman", "Logar", "Nangarhar", "Nimruz", "Nuristan", "Paktia", "Paktika", "Panjshir", "Parwan", "Samangan", "Sar-e Pol", "Takhar", "Urozgan", "Zabul"]] : never,
  R extends "AG" | undefined ? ["Antigua and Barbuda", "AG", "1268", "+.(...)...-....", "🇦🇬", "Parishes", ["Saint George", "Saint John", "Saint Mary", "Saint Paul", "Saint Peter", "Saint Philip"]] : never,
  R extends "AI" | undefined ? ["Anguilla", "AI", "1264", "+.(...)...-....", "🇦🇮", "Districts", ["Anguilla Island", "Blowing Point", "East End", "George Hill", "Island Harbour", "North Hill", "North Side", "Sandy Ground", "Sandy Hill", "South Hill", "Stoney Ground", "The Farrington", "The Quarter", "The Valley", "West End"]] : never,
  R extends "AL" | undefined ? ["Albania (Shqipëri)", "AL", "355", "+...(...)...-...", "🇦🇱", "Counties", ["Berat", "Dibër", "Durrës", "Elbasan", "Fier", "Gjirokastër", "Korçë", "Kukës", "Lezhë", "Shkodër", "Tirana", "Vlorë"]] : never,
  R extends "AM" | undefined ? ["Armenia (Հայաստան)", "AM", "374", "+...-..-...-...", "🇦🇲", "Provinces", ["Aragatsotn", "Ararat", "Armavir", "Gegharkunik", "Kotayk", "Lori", "Shirak", "Syunik", "Tavush", "Vayots Dzor", "Yerevan"]] : never,
  R extends "AO" | undefined ? ["Angola", "AO", "244", "+...(...)...-...", "🇦🇴", "Provinces", ["Bengo", "Benguela", "Bié", "Cabinda", "Cuando Cubango", "Cuanza Norte", "Cuanza Sul", "Cunene", "Huambo", "Huíla", "Luanda", "Lunda Norte", "Lunda Sul", "Malanje", "Moxico", "Namibe", "Uíge", "Zaire"]] : never,
  R extends "AQ" | undefined ? ["Antarctica", "AQ", "672", "", "🇦🇶"] : never,
  R extends "AR" | undefined ? ["Argentina", "AR", "54", "+..(...)...-....", "🇦🇷", "Regions", ["Buenos Aires", "Catamarca", "Chaco", "Chubut", "Córdoba", "Corrientes", "Entre Ríos", "Formosa", "Jujuy", "La Pampa", "La Rioja", "Mendoza", "Misiones", "Neuquén", "Río Negro", "Salta", "San Juan", "San Luis", "Santa Cruz", "Santa Fe", "Santiago del Estero", "Tierra del Fuego", "Tucumán"]] : never,
  R extends "AS" | undefined ? ["American Samoa", "AS", "1684", "+.(...)...-....", "🇦🇸", "Districts", ["Eastern District", "Manu'a District", "Rose Island", "Swains Island", "Western District"]] : never,
  R extends "AT" | undefined ? ["Austria (Österreich)", "AT", "43", "+..(...)...-....", "🇦🇹", "States", ["Burgenland", "Carinthia", "Lower Austria", "Upper Austria", "Salzburg", "Styria", "Tyrol", "Vorarlberg", "Vienna"]] : never,
  R extends "AU" | undefined ? ["Australia", "AU", "61", "+.. ... ... ...", "🇦🇺", ["States", "Territories"], { "States": ["New South Wales", "Queensland", "South Australia", "Tasmania", "Victoria", "Western Australia"], "Territories": ["Australian Capital Territory", "Northern Territory"] }] : never,
  R extends "AW" | undefined ? ["Aruba", "AW", "297", "+...-...-....", "🇦🇼"] : never,
  R extends "AX" | undefined ? ["Åland Islands", "AX", "358", "", "🇦🇽", "Municipalities", ["Mariehamn", "Jomala", "Finström", "Lemland", "Saltvik", "Hammarland", "Sund", "Eckerö", "Föglö", "Geta", "Vårdö", "Brändö", "Lumparland", "Kumlinge", "Kökar", "Sottunga"]] : never,
  R extends "AZ" | undefined ? ["Azerbaijan (Azərbaycan)", "AZ", "994", "+...-..-...-..-..", "🇦🇿", "Districts", ["Absheron", "Agdam", "Agdash", "Agstafa", "Agsu", "Astara", "Baku", "Balakan", "Barda", "Beylagan", "Bilasuvar", "Dashkasan", "Fizuli", "Ganja", "Gobustan", "Goranboy", "Goychay", "Goygol", "Hajigabul", "Imishli", "Ismailli", "Jabrayil", "Jalilabad", "Kalbajar", "Kurdamir", "Lachin", "Lankaran", "Lankaran", "Lerik", "Masally", "Mingachevir", "Naftalan", "Nakhchivan", "Neftchala", "Oghuz", "Ordubad", "Qabala", "Qakh", "Qazakh", "Quba", "Qubadli", "Qusar", "Saatly", "Sabirabad", "Salyan", "Shabran", "Shaki", "Shamakhi", "Shamkir", "Shirvan", "Shusha", "Siazan", "Sumgayit", "Tartar", "Tovuz", "Ujar", "Yardymli", "Yevlakh", "Zangilan", "Zaqatala", "Zardab"]] : never,
  R extends "BA" | undefined ? ["Bosnia and Herzegovina (Босна и Херцеговина)", "BA", "387", "+...-..-....", "🇧🇦", "Regions", ["Brčko District", "Federation of Bosnia and Herzegovina", "Republika Srpska"]] : never,
  R extends "BB" | undefined ? ["Barbados", "BB", "1246", "+.(...)...-....", "🇧🇧", "Regions", ["Christ Church", "Saint Andrew", "Saint George", "Saint James", "Saint John", "Saint Joseph", "Saint Lucy", "Saint Michael", "Saint Peter", "Saint Philip", "Saint Thomas"]] : never,
  R extends "BD" | undefined ? ["Bangladesh (বাংলাদেশ)", "BD", "880", "+...-..-...-...", "🇧🇩", "Districts", ["Barisal", "Chittagong", "Dhaka", "Khulna", "Mymensingh", "Rajshahi", "Rangpur", "Sylhet"]] : never,
  R extends "BE" | undefined ? ["Belgium (België)", "BE", "32", "+.. ... .. .. ..", "🇧🇪", "States", ["Brussels", "Flemish Brabant", "Walloon Brabant", "Antwerp", "East Flanders", "West Flanders", "Hainaut", "Liège", "Limburg", "Luxembourg", "Namur"]] : never,
  R extends "BF" | undefined ? ["Burkina Faso", "BF", "226", "+...-..-..-....", "🇧🇫", "Provinces", ["Balé", "Bam", "Banwa", "Bazèga", "Bougouriba", "Boulgou", "Boulkiemdé", "Comoé", "Ganzourgou", "Gnagna", "Gourma", "Houet", "Ioba", "Kadiogo", "Kénédougou", "Komondjari", "Kompienga", "Kossi", "Koulpélogo", "Kouritenga", "Kourwéogo", "Léraba", "Loroum", "Mouhoun", "Namentenga", "Nahouri", "Nayala", "Noumbiel", "Oubritenga", "Oudalan", "Passoré", "Poni", "Sanguié", "Sanmatenga", "Séno", "Sissili", "Soum", "Sourou", "Tapoa", "Tui", "Yagha", "Yatenga", "Ziro", "Zondoma", "Zoundwéogo"]] : never,
  R extends "BG" | undefined ? ["Bulgaria (България)", "BG", "359", "+...(...)...-...", "🇧🇬", "States", ["Blagoevgrad", "Burgas", "Dobrich", "Gabrovo", "Haskovo", "Kardzhali", "Kyustendil", "Lovech", "Montana", "Pazardzhik", "Pernik", "Pleven", "Plovdiv", "Razgrad", "Ruse", "Shumen", "Silistra", "Sliven", "Smolyan", "Sofia", "Stara Zagora", "Targovishte", "Varna", "Veliko Tarnovo", "Vidin", "Vratsa", "Yambol"]] : never,
  R extends "BH" | undefined ? ["Bahrain (‫البحرين‬‎)", "BH", "973", "+...-....-....", "🇧🇭", "Governorates", ["Capital Governorate", "Muharraq Governorate", "Northern Governorate", "Southern Governorate"]] : never,
  R extends "BI" | undefined ? ["Burundi (Uburundi)", "BI", "257", "+...-..-..-....", "🇧🇮", "Provinces", ["Bubanza", "Bujumbura Mairie", "Bujumbura Rural", "Bururi", "Cankuzo", "Cibitoke", "Gitega", "Karuzi", "Kayanza", "Kirundo", "Makamba", "Muramvya", "Muyinga", "Mwaro", "Ngozi", "Rumonge", "Rutana", "Ruyigi"]] : never,
  R extends "BJ" | undefined ? ["Benin (Bénin)", "BJ", "229", "+...-..-..-....", "🇧🇯", "Departments", ["Alibori", "Atakora", "Atlantique", "Borgou", "Collines", "Donga", "Kouffo", "Littoral", "Mono", "Ouémé", "Plateau", "Zou"]] : never,
  R extends "BL" | undefined ? ["Saint Barthélemy (Saint-Barthélemy)", "BL", "590", "", "🇧🇱", "Parishes", ["Gustavia"], 1] : never,
  R extends "BM" | undefined ? ["Bermuda", "BM", "1441", "+.(...)...-....", "🇧🇲", ["Parishes", "Municipalities"], { "Parishes": ["Devonshire", "Hamilton", "Paget", "Pembroke", "Sandys", "Smith's", "Southampton", "St. George's", "Warwick"], "Municipalities": ["Hamilton", "St. George's"] }] : never,
  R extends "BN" | undefined ? ["Brunei", "BN", "673", "+...-...-....", "🇧🇳", "Districts", ["Belait", "Brunei-Muara", "Temburong", "Tutong"]] : never,
  R extends "BO" | undefined ? ["Bolivia", "BO", "591", "+...-.-...-....", "🇧🇴", "States", ["Chuquisaca", "Cochabamba", "Beni", "La Paz", "Oruro", "Pando", "Potosí", "Santa Cruz", "Tarija"]] : never,
  R extends "BQ" | undefined ? ["Caribbean Netherlands", "BQ", "599", "+...-...-....", "🇧🇶", "Special Municipalities", ["Bonaire", "Saba", "Sint Eustatius"], 1] : never,
  R extends "BR" | undefined ? ["Brazil (Brasil)", "BR", "55", "+..-..-....-....", "🇧🇷", "Regions", ["Acre", "Alagoas", "Amapá", "Amazonas", "Bahia", "Ceará", "Distrito Federal", "Espírito Santo", "Goiás", "Maranhão", "Mato Grosso", "Mato Grosso do Sul", "Minas Gerais", "Pará", "Paraíba", "Paraná", "Pernambuco", "Piauí", "Rio de Janeiro", "Rio Grande do Norte", "Rio Grande do Sul", "Rondônia", "Roraima", "Santa Catarina", "São Paulo", "Sergipe", "Tocantins"]] : never,
  R extends "BS" | undefined ? ["Bahamas", "BS", "1242", "+.(...)...-....", "🇧🇸", "Regions", ["Acklins", "Berry Islands", "Bimini", "Black Point", "Cat Island", "Central Abaco", "Central Andros", "Central Eleuthera", "City of Freeport", "Crooked Island and Long Cay", "East Grand Bahama", "Exuma", "Grand Cay", "Harbour Island", "Hope Town", "Inagua", "Long Island", "Mangrove Cay", "Mayaguana", "Moore's Island", "North Abaco", "North Andros", "North Eleuthera", "Ragged Island", "Rum Cay", "San Salvador", "South Abaco", "South Andros", "South Eleuthera", "Spanish Wells", "West Grand Bahama"]] : never,
  R extends "BT" | undefined ? ["Bhutan (འབྲུག)", "BT", "975", "+...-.-...-...", "🇧🇹", "Regions", ["Bumthang", "Chukha", "Dagana", "Gasa", "Haa", "Lhuntse", "Mongar", "Paro", "Pemagatshel", "Punakha", "Samdrup Jongkhar", "Samtse", "Sarpang", "Thimphu", "Trashigang", "Trashiyangtse", "Trongsa", "Tsirang", "Wangdue Phodrang", "Zhemgang"]] : never,
  R extends "BV" | undefined ? ["Bouvet Island", "BV", "47", "", "🇧🇻"] : never,
  R extends "BW" | undefined ? ["Botswana", "BW", "267", "+...-..-...-...", "🇧🇼", "Districts", ["Central District", "Ghanzi District", "Kgalagadi District", "Kgatleng District", "Kweneng District", "North-East District", "North-West District", "South-East District", "Southern District"]] : never,
  R extends "BY" | undefined ? ["Belarus (Беларусь)", "BY", "375", "+...(..)...-..-..", "🇧🇾", "Regions", ["Brest Region", "Gomel Region", "Grodno Region", "Minsk Region", "Mogilev Region", "Vitebsk Region"]] : never,
  R extends "BZ" | undefined ? ["Belize", "BZ", "501", "+...-...-....", "🇧🇿", "Districts", ["Belize District", "Cayo District", "Corozal District", "Orange Walk District", "Stann Creek District", "Toledo District"]] : never,
  R extends "CA" | undefined ? ["Canada", "CA", "1", "+. (...) ...-....", "🇨🇦", ["Territories", "Provinces"], { "Territories": ["Northwest Territories", "Nunavut", "Yukon"], "Provinces": ["Alberta", "British Columbia", "Manitoba", "New Brunswick", "Newfoundland and Labrador", "Nova Scotia", "Ontario", "Prince Edward Island", "Quebec", "Saskatchewan"] }, 1, ["204", "236", "249", "250", "289", "306", "343", "365", "387", "403", "416", "418", "431", "437", "438", "450", "506", "514", "519", "548", "579", "581", "587", "604", "613", "639", "647", "672", "705", "709", "742", "778", "780", "782", "807", "819", "825", "867", "873", "902", "905"]] : never,
  R extends "CC" | undefined ? ["Cocos (Keeling) Islands", "CC", "61", "", "🇨🇨"] : never,
  R extends "CD" | undefined ? ["Congo (DRC) (Jamhuri ya Kidemokrasia ya Kongo)", "CD", "243", "+...(...)...-...", "🇨🇩", "Provinces", ["Kinshasa", "Kongo Central", "Kwango", "Kwilu", "Kasai", "Kasai-Central", "Kasai-Oriental", "Sankuru", "Maniema", "South Kivu", "North Kivu", "Ituri", "Haut-Uele", "Tshopo", "Bas-Uele", "Tanganyika", "Haut-Lomami", "Lualaba", "Kwango", "Kwilu", "Kasai", "Kasai-Central", "Kasai-Oriental", "Sankuru", "Maniema", "South Kivu", "North Kivu", "Ituri", "Haut-Uele", "Tshopo", "Bas-Uele", "Tanganyika", "Haut-Lomami", "Lualaba"]] : never,
  R extends "CF" | undefined ? ["Central African Republic (République centrafricaine)", "CF", "236", "+...-..-..-....", "🇨🇫", "Regions", ["Bamingui-Bangoran", "Bangui", "Basse-Kotto", "Haute-Kotto", "Haut-Mbomou", "Kémo", "Lobaye", "Mambéré-Kadéï", "Mbomou", "Nana-Grébizi", "Nana-Mambéré", "Ombella-M'Poko", "Ouaka", "Ouham", "Ouham-Pendé", "Sangha-Mbaéré", "Vakaga"]] : never,
  R extends "CG" | undefined ? ["Congo (Republic) (Congo-Brazzaville)", "CG", "242", "+...-..-...-....", "🇨🇬", "Departments", ["Bouenza", "Cuvette", "Cuvette-Ouest", "Kouilou", "Lékoumou", "Likouala", "Niari", "Plateaux", "Pool", "Sangha"]] : never,
  R extends "CI" | undefined ? ["Côte d’Ivoire", "CI", "225", "+...-..-...-...", "🇨🇮", "Regions", ["Lagunes", "Haut-Sassandra", "Savanes", "Vallée du Bandama", "Moyen-Comoé", "18 Montagnes", "Lacs", "Zanzan", "Bas-Sassandra", "Denguélé", "N'zi-Comoé", "Marahoué", "Sud-Comoé", "Worodougou", "Sud-Bandama", "Agnéby-Tiassa", "Bafing", "Gbêkê", "Fromager", "Moyen-Cavally", "Nawa", "Indénié-Djuablin", "Bounkani", "Moronou", "Gbôklé", "Iffou", "Bagoué", "Tchologo", "Poro", "Kabadougou", "Béré", "Korhogo"]] : never,
  R extends "CK" | undefined ? ["Cook Islands", "CK", "682", "+...-..-...", "🇨🇰", ["Islands", "Districts"], { "Islands": ["Aitutaki", "Atiu", "Mangaia", "Manihiki", "Mauke", "Mitiaro", "Nassau", "Palmerston", "Penrhyn", "Pukapuka", "Rakahanga", "Rarotonga", "Suwarrow", "Takutea"], "Districts": ["Avarua", "Matavera", "Ngatangiia", "Takitumu"] }] : never,
  R extends "CL" | undefined ? ["Chile", "CL", "56", "+..-.-....-....", "🇨🇱", "States", ["Arica y Parinacota", "Tarapacá", "Antofagasta", "Atacama", "Coquimbo", "Valparaíso", "Región Metropolitana de Santiago", "Libertador General Bernardo O'Higgins", "Maule", "Ñuble", "Biobío", "La Araucanía", "Los Ríos", "Los Lagos", "Aysén", "Magallanes y de la Antártica Chilena"]] : never,
  R extends "CM" | undefined ? ["Cameroon (Cameroun)", "CM", "237", "+...-....-....", "🇨🇲", "Regions", ["Adamaoua", "Centre", "East", "Far North", "Littoral", "North", "Northwest", "South", "Southwest", "West"]] : never,
  R extends "CN" | undefined ? ["China (中国)", "CN", "86", "+.. ..-........", "🇨🇳", ["Provinces", "Municipalities", "Autonomous Regions", "Special Administrative Regions"], { "Provinces": ["Anhui", "Fujian", "Gansu", "Guangdong", "Guizhou", "Hainan", "Hebei", "Heilongjiang", "Henan", "Hubei", "Hunan", "Jiangsu", "Jiangxi", "Jilin", "Liaoning", "Qinghai", "Shaanxi", "Shandong", "Shanxi", "Sichuan", "Yunnan", "Zhejiang"], "Municipalities": ["Beijing", "Chongqing", "Shanghai", "Tianjin"], "Autonomous Regions": ["Guangxi", "Inner Mongolia", "Ningxia", "Tibet", "Xinjiang"], "Special Administrative Regions": ["Hong Kong", "Macau"] }] : never,
  R extends "CO" | undefined ? ["Colombia", "CO", "57", "+..(...)...-....", "🇨🇴", "States", ["Amazonas", "Antioquia", "Arauca", "Atlántico", "Bolívar", "Boyacá", "Caldas", "Caquetá", "Casanare", "Cauca", "Cesar", "Chocó", "Córdoba", "Cundinamarca", "Guainía", "Guaviare", "Huila", "La Guajira", "Magdalena", "Meta", "Nariño", "Norte de Santander", "Putumayo", "Quindío", "Risaralda", "San Andrés, Providencia y Santa Catalina", "Santander", "Sucre", "Tolima", "Valle del Cauca", "Vaupés", "Vichada"]] : never,
  R extends "CR" | undefined ? ["Costa Rica", "CR", "506", "+... ....-....", "🇨🇷", "Provinces", ["San José", "Alajuela", "Cartago", "Heredia", "Guanacaste", "Puntarenas", "Limón"]] : never,
  R extends "CU" | undefined ? ["Cuba", "CU", "53", "+..-.-...-....", "🇨🇺", "Provinces", ["Pinar del Río", "Artemisa", "La Habana", "Mayabeque", "Matanzas", "Cienfuegos", "Villa Clara", "Sancti Spíritus", "Ciego de Ávila", "Camagüey", "Las Tunas", "Holguín", "Granma", "Santiago de Cuba", "Guantánamo", "Isla de la Juventud"]] : never,
  R extends "CV" | undefined ? ["Cape Verde (Kabu Verdi)", "CV", "238", "+...(...)..-..", "🇨🇻", "Regions", ["Barlavento Islands", "Sotavento Islands"]] : never,
  R extends "CW" | undefined ? ["Curaçao", "CW", "599", "+...-...-....", "🇨🇼", "Regions", ["Willemstad", "Bandabou", "Bandariba"], 0] : never,
  R extends "CX" | undefined ? ["Christmas Island", "CX", "61", "", "🇨🇽"] : never,
  R extends "CY" | undefined ? ["Cyprus (Κύπρος)", "CY", "357", "+...-..-...-...", "🇨🇾", "Regions", ["Nicosia", "Limassol", "Larnaca", "Paphos", "Famagusta"]] : never,
  R extends "CZ" | undefined ? ["Czech Republic (Česká republika)", "CZ", "420", "+...(...)...-...", "🇨🇿", "Regions", ["Prague", "Central Bohemian Region", "South Bohemian Region", "Plzeň Region", "Karlovy Vary Region", "Ústí nad Labem Region", "Liberec Region", "Hradec Králové Region", "Pardubice Region", "Olomouc Region", "Moravian-Silesian Region", "South Moravian Region", "Zlín Region", "Vysočina Region"]] : never,
  R extends "DE" | undefined ? ["Germany (Deutschland)", "DE", "49", "+.. ... .......", "🇩🇪", "States", ["Baden-Württemberg", "Bavaria", "Berlin", "Brandenburg", "Bremen", "Hamburg", "Hesse", "Lower Saxony", "Mecklenburg-Vorpommern", "North Rhine-Westphalia", "Rhineland-Palatinate", "Saarland", "Saxony", "Saxony-Anhalt", "Schleswig-Holstein", "Thuringia"]] : never,
  R extends "DJ" | undefined ? ["Djibouti", "DJ", "253", "+...-..-..-..-..", "🇩🇯", "Regions", ["Djibouti City", "Ali Sabieh", "Dikhil", "Arta", "Tadjourah", "Obock"]] : never,
  R extends "DK" | undefined ? ["Denmark (Danmark)", "DK", "45", "+.. .. .. .. ..", "🇩🇰", "Regions", ["Capital Region of Denmark", "Region Zealand", "Region of Southern Denmark", "Central Denmark Region", "North Denmark Region"]] : never,
  R extends "DM" | undefined ? ["Dominica", "DM", "1767", "+.(...)...-....", "🇩🇲", "Regions", ["Saint Andrew Parish", "Saint David Parish", "Saint George Parish", "Saint John Parish", "Saint Joseph Parish", "Saint Luke Parish", "Saint Mark Parish", "Saint Patrick Parish", "Saint Paul Parish", "Saint Peter Parish"]] : never,
  R extends "DO" | undefined ? ["Dominican Republic (República Dominicana)", "DO", "1", "+.(...)...-....", "🇩🇴", "Provinces", ["Azua", "Bahoruco", "Barahona", "Dajabón", "Distrito Nacional", "Duarte", "Elías Piña", "El Seibo", "Espaillat", "Hato Mayor", "Hermanas Mirabal", "Independencia", "La Altagracia", "La Romana", "La Vega", "María Trinidad Sánchez", "Monseñor Nouel", "Monte Cristi", "Monte Plata", "Pedernales", "Peravia", "Puerto Plata", "Samaná", "San Cristóbal", "San José de Ocoa", "San Juan", "San Pedro de Macorís", "Sánchez Ramírez", "Santiago", "Santiago Rodríguez", "Santo Domingo", "Valverde"], 2, ["809", "829", "849"]] : never,
  R extends "DZ" | undefined ? ["Algeria (‫الجزائر‬‎)", "DZ", "213", "+...-..-...-....", '🇩🇿', "Regions", ["Adrar", "Chlef", "Laghouat", "Oum El Bouaghi", "Batna", "Béjaïa", "Biskra", "Béchar", "Blida", "Bouira", "Tamanrasset", "Tébessa", "Tlemcen", "Tiaret", "Tizi Ouzou", "Alger", "Djelfa", "Jijel", "Sétif", "Saïda", "Skikda", "Sidi Bel Abbès", "Annaba", "Guelma", "Constantine", "Médéa", "Mostaganem", "M'Sila", "Mascara", "Ouargla", "Oran", "El Bayadh", "Illizi", "Bordj Bou Arréridj", "Boumerdès", "El Tarf", "Tindouf", "Tissemsilt", "El Oued", "Khenchela", "Souk Ahras", "Tipaza", "Mila", "Aïn Defla", "Naâma", "Aïn Témouchent", "Ghardaïa", "Relizane"]] : never,
  R extends "EC" | undefined ? ["Ecuador", "EC", "593", "+...-.-...-....", "🇪🇨", "Provinces", ["Azuay", "Bolivar", "Cañar", "Carchi", "Chimborazo", "Cotopaxi", "El Oro", "Esmeraldas", "Galapagos", "Guayas", "Imbabura", "Loja", "Los Rios", "Manabi", "Morona Santiago", "Napo", "Orellana", "Pastaza", "Pichincha", "Santa Elena", "Santo Domingo de los Tsachilas", "Sucumbios", "Tungurahua", "Zamora Chinchipe"]] : never,
  R extends "EE" | undefined ? ["Estonia (Eesti)", "EE", "372", "+...-...-....", "🇪🇪", "Counties", ["Harju County", "Hiiu County", "Ida-Viru County", "Järva County", "Jõgeva County", "Lääne County", "Lääne-Viru County", "Põlva County", "Pärnu County", "Rapla County", "Saare County", "Tartu County", "Valga County", "Viljandi County", "Võru County"]] : never,
  R extends "EG" | undefined ? ["Egypt (‫مصر‬‎)", "EG", "20", "+..(...)...-....", "🇪🇬", "Governorates", ["Alexandria", "Aswan", "Asyut", "Beheira", "Beni Suef", "Cairo", "Dakahlia", "Damietta", "Faiyum", "Gharbia", "Giza", "Ismailia", "Kafr El Sheikh", "Luxor", "Matruh", "Minya", "Monufia", "New Valley", "North Sinai", "Port Said", "Qalyubia", "Qena", "Red Sea", "Sharqia", "Sohag", "South Sinai", "Suez"]] : never,
  R extends "EH" | undefined ? ["Western Sahara", "EH", "212", "+...-..-....", "🇪🇭", "Provinces", ["Laayoune", "Dakhla", "Smara", "Boujdour", "Aousserd"]] : never,
  R extends "ER" | undefined ? ["Eritrea", "ER", "291", "+...-.-...-...", "🇪🇷", "Regions", ["Anseba", "Debub", "Gash-Barka", "Maekel", "Northern Red Sea", "Southern Red Sea"]] : never,
  R extends "ET" | undefined ? ["Ethiopia", "ET", "251", "+...-..-...-....", "🇪🇹", "Regions", ["Addis Ababa", "Afar", "Amhara", "Benishangul-Gumuz", "Dire Dawa", "Gambela", "Harari", "Oromia", "Sidama", "Somali", "Southern Nations, Nationalities, and Peoples' Region", "Tigray"]] : never,
  R extends "FI" | undefined ? ["Finland (Suomi)", "FI", "358", "+... .. .... ....", "🇫🇮", "Regions", ["Åland Islands", "Central Finland", "Central Ostrobothnia", "Eastern Finland", "Kainuu", "Kanta-Häme", "Kymenlaakso", "Lapland", "North Karelia", "Northern Ostrobothnia", "Northern Savonia", "Ostrobothnia", "Päijänne Tavastia", "Pirkanmaa", "Satakunta", "South Karelia", "Southern Ostrobothnia", "Southern Savonia", "Tavastia Proper", "Uusimaa", "Varsinais-Suomi"]] : never,
  R extends "FJ" | undefined ? ["Fiji", "FJ", "679", "+...-..-.....", "🇫🇯", "Divisions", ["Central", "Eastern", "Northern", "Western"]] : never,
  R extends "FK" | undefined ? ["Falkland Islands (Islas Malvinas)", "FK", "500", "+...-.....", "🇫🇰", "Regions", ["East Falkland", "West Falkland", "Staten Island"]] : never,
  R extends "FM" | undefined ? ["Micronesia", "FM", "691", "+...-...-....", "🇫🇲", "States", ["Chuuk", "Kosrae", "Pohnpei", "Yap"]] : never,
  R extends "FO" | undefined ? ["Faroe Islands (Føroyar)", "FO", "298", "+...-...-...", "🇫🇴", "Municipalities", ["Tórshavn", "Klaksvík", "Runavík", "Eystur", "Vágar"]] : never,
  R extends "FR" | undefined ? ["France", "FR", "33", "+.. . .. .. .. ..", "🇫🇷", "Regions", ["Auvergne-Rhône-Alpes", "Bourgogne-Franche-Comté", "Brittany", "Centre-Val de Loire", "Corsica", "Grand Est", "Hauts-de-France", "Île-de-France", "Normandy", "Nouvelle-Aquitaine", "Occitanie", "Pays de la Loire", "Provence-Alpes-Côte d'Azur"]] : never,
  R extends "GA" | undefined ? ["Gabon", "GA", "241", "+...-.-..-..-..", "🇬🇦", "Provinces", ["Estuaire", "Haut-Ogooué", "Moyen-Ogooué", "Ngounié", "Nyanga", "Ogooué-Ivindo", "Ogooué-Lolo", "Ogooué-Maritime", "Woleu-Ntem"]] : never,
  R extends "GB" | undefined ? ["United Kingdom", "GB", "44", "+.. .... ......", "🇬🇧", "States", ["England", "Scotland", "Wales", "Northern Ireland"]] : never,
  R extends "GD" | undefined ? ["Grenada", "GD", "1473", "+.(...)...-....", "🇬🇩", "Parishes", ["Saint Andrew", "Saint David", "Saint George", "Saint John", "Saint Mark", "Saint Patrick"]] : never,
  R extends "GE" | undefined ? ["Georgia (საქართველო)", "GE", "995", "+...(...)...-...", "🇬🇪", "Regions", ["Abkhazia", "Adjara", "Guria", "Imereti", "Kakheti", "Kvemo Kartli", "Mtskheta-Mtianeti", "Racha-Lechkhumi and Kvemo Svaneti", "Samegrelo-Zemo Svaneti", "Samtskhe-Javakheti", "Shida Kartli", "Tbilisi"]] : never,
  R extends "GF" | undefined ? ["French Guiana (Guyane française)", "GF", "594", "+...-.....-....", "🇬🇫", ["Arrondissements", "Communes"], { "Arrondissements": ["Cayenne", "Saint-Laurent-du-Maroni"], "Communes": ["Matoury", "Kourou", "Remire-Montjoly"] }] : never,
  R extends "GG" | undefined ? ["Guernsey", "GG", "44", "", "🇬🇬", "Parishes", ["Castel", "Forest", "St. Andrew", "St. Martin", "St. Peter Port", "St. Pierre du Bois", "St. Sampson", "St. Saviour", "Torteval", "Vale"]] : never,
  R extends "GH" | undefined ? ["Ghana (Gaana)", "GH", "233", "+...(...)...-...", "🇬🇭", "Regions", ["Ashanti", "Brong-Ahafo", "Central", "Eastern", "Greater Accra", "Northern", "Upper East", "Upper West", "Volta", "Western"]] : never,
  R extends "GI" | undefined ? ["Gibraltar", "GI", "350", "+...-...-.....", "🇬🇮", "Districts", ["East Side", "North District", "South District", "Town Area", "Westside"]] : never,
  R extends "GL" | undefined ? ["Greenland (Kalaallit Nunaat)", "GL", "299", "+...-..-..-..", "🇬🇱", "Municipalities", ["Kujalleq", "Qaasuitsup", "Qeqqata", "Sermersooq"]] : never,
  R extends "GM" | undefined ? ["Gambia", "GM", "220", "+...(...)..-..", "🇬🇲", "Divisions", ["Banjul", "Lower River", "Central River", "North Bank", "Upper River", "West Coast"]] : never,
  R extends "GN" | undefined ? ["Guinea (Guinée)", "GN", "224", "+...-..-...-...", "🇬🇳", "Regions", ["Boké", "Conakry", "Faranah", "Kankan", "Kindia", "Labé", "Mamou", "Nzérékoré"]] : never,
  R extends "GP" | undefined ? ["Guadeloupe", "GP", "590", "", "🇬🇵", ["Arrondissements", "Cantons", "Communes"], { "Arrondissements": ["Basse-Terre", "Pointe-à-Pitre"], "Cantons": [], "Communes": ["Les Abymes", "Baie-Mahault", "Le Gosier", "Petit-Bourg"] }, 0] : never,
  R extends "GQ" | undefined ? ["Equatorial Guinea (Guinea Ecuatorial)", "GQ", "240", "+...-..-...-....", "🇬🇶", "Provinces", ["Annobón", "Bioko Norte", "Bioko Sur", "Centro Sur", "Kié-Ntem", "Litoral", "Wele-Nzas"]] : never,
  R extends "GR" | undefined ? ["Greece (Ελλάδα)", "GR", "30", "+..(...)...-....", "🇬🇷", "Regions", ["Attica", "Central Greece", "Central Macedonia", "Crete", "Eastern Macedonia and Thrace", "Epirus", "Ionian Islands", "North Aegean", "Peloponnese", "South Aegean", "Thessaly", "Western Greece", "Western Macedonia"]] : never,
  R extends "GS" | undefined ? ["South Georgia and the South Sandwich Islands", "GS", "500", "", "🇬🇸"] : never,
  R extends "GT" | undefined ? ["Guatemala", "GT", "502", "+... ....-....", "🇬🇹", "Departments", ["Alta Verapaz", "Baja Verapaz", "Chimaltenango", "Chiquimula", "El Progreso", "Escuintla", "Guatemala", "Huehuetenango", "Izabal", "Jalapa", "Jutiapa", "Petén", "Quetzaltenango", "Quiché", "Retalhuleu", "Sacatepéquez", "San Marcos", "Santa Rosa", "Sololá", "Suchitepéquez", "Totonicapán", "Zacapa"]] : never,
  R extends "GU" | undefined ? ["Guam", "GU", "1671", "+.(...)...-....", "🇬🇺", "Villages", ["Agana Heights", "Agat", "Asan", "Barrigada", "Chalan Pago-Ordot", "Dededo", "Hagatna", "Inarajan", "Mangilao", "Merizo", "Mongmong-Toto-Maite", "Piti", "Santa Rita", "Sinajana", "Talofofo", "Tamuning", "Umatac", "Yigo", "Yona"]] : never,
  R extends "GW" | undefined ? ["Guinea-Bissau (Guiné Bissau)", "GW", "245", "+...-.-......", "🇬🇼", "Regions", ["Bafatá", "Biombo", "Bolama", "Cacheu", "Gabú", "Oio", "Quinara", "Tombali"]] : never,
  R extends "GY" | undefined ? ["Guyana", "GY", "592", "+...-...-....", "🇬🇾", "Regions", ["Barima-Waini", "Cuyuni-Mazaruni", "Demerara-Mahaica", "East Berbice-Corentyne", "Essequibo Islands-West Demerara", "Mahaica-Berbice", "Pomeroon-Supenaam", "Potaro-Siparuni", "Upper Demerara-Berbice", "Upper Takutu-Upper Essequibo"]] : never,
  R extends "HK" | undefined ? ["Hong Kong (香港)", "HK", "852", "+... .... ....", "🇭🇰", "Districts", ["Central and Western", "Eastern", "Islands", "Kowloon City", "Kwai Tsing", "Kwun Tong", "North", "Sai Kung", "Sha Tin", "Sham Shui Po", "Southern", "Tai Po", "Tsuen Wan", "Tuen Mun", "Wan Chai", "Wong Tai Sin", "Yau Tsim Mong", "Yuen Long"]] : never,
  R extends "HM" | undefined ? ["Heard Island and McDonald Islands", "HM", "672", "", "🇭🇲"] : never,
  R extends "HN" | undefined ? ["Honduras", "HN", "504", "+...-....-....", "🇭🇳", "Departments", ["Atlántida", "Choluteca", "Colón", "Comayagua", "Copán", "Cortés", "El Paraíso", "Francisco Morazán", "Gracias a Dios", "Intibucá", "Islas de la Bahía", "La Paz", "Lempira", "Ocotepeque", "Olancho", "Santa Bárbara", "Valle", "Yoro"]] : never,
  R extends "HR" | undefined ? ["Croatia (Hrvatska)", "HR", "385", "+...-..-...-...", "🇭🇷", "Counties", ["Zagreb County", "Krapina-Zagorje County", "Sisak-Moslavina County", "Karlovačka County", "Varaždin County", "Koprivnica-Križevci County", "Bjelovar-Bilogora County", "Primorje-Gorski Kotar County", "Lika-Senj County", "Virovitica-Podravina County", "Požega-Slavonia County", "Brod-Posavina County", "Zadar County", "Osijek-Baranja County", "Šibenik-Knin County", "Vukovar-Syrmia County", "Split-Dalmatia County", "Istria County", "Dubrovnik-Neretva County", "Međimurje County", "Grad Zagreb"]] : never,
  R extends "HT" | undefined ? ["Haiti", "HT", "509", "+... ....-....", "🇭🇹", "Departments", ["Artibonite", "Centre", "Grand'Anse", "Nippes", "Nord", "Nord-Est", "Nord-Ouest", "Ouest", "Sud", "Sud-Est"]] : never,
  R extends "HU" | undefined ? ["Hungary (Magyarország)", "HU", "36", "+..(...)...-...", "🇭🇺", "Counties", ["Bács-Kiskun", "Baranya", "Békés", "Borsod-Abaúj-Zemplén", "Csongrád-Csanád", "Fejér", "Győr-Moson-Sopron", "Hajdú-Bihar", "Heves", "Jász-Nagykun-Szolnok", "Komárom-Esztergom", "Nógrád", "Pest", "Somogy", "Szabolcs-Szatmár-Bereg", "Tolna", "Vas", "Veszprém", "Zala"]] : never,
  R extends "ID" | undefined ? ["Indonesia", "ID", "62", "+..-..-...-..", "🇮🇩", "Provinces", ["Aceh", "Bali", "Bangka Belitung", "Banten", "Bengkulu", "Central Java", "Central Kalimantan", "Central Sulawesi", "East Java", "East Kalimantan", "East Nusa Tenggara", "Gorontalo", "Jakarta", "Jambi", "Lampung", "Maluku", "North Kalimantan", "North Maluku", "North Sulawesi", "North Sumatra", "Papua", "Riau", "Riau Islands", "South Kalimantan", "South Sulawesi", "South Sumatra", "Southeast Sulawesi", "West Java", "West Kalimantan", "West Nusa Tenggara", "West Papua", "West Sulawesi", "West Sumatra", "Yogyakarta"]] : never,
  R extends "IE" | undefined ? ["Ireland", "IE", "353", "+... .. .......", "🇮🇪", "Counties", ["Carlow", "Cavan", "Clare", "Cork", "Donegal", "Dublin", "Galway", "Kerry", "Kildare", "Kilkenny", "Laois", "Leitrim", "Limerick", "Longford", "Louth", "Mayo", "Meath", "Monaghan", "Offaly", "Roscommon", "Sligo", "Tipperary", "Waterford", "Westmeath", "Wexford", "Wicklow"]] : never,
  R extends "IL" | undefined ? ["Israel (‫ישראל‬‎)", "IL", "972", "+...-.-...-....", "🇮🇱", "Districts", ["Central", "Haifa", "Jerusalem", "Northern", "Southern", "Tel Aviv"]] : never,
  R extends "IM" | undefined ? ["Isle of Man", "IM", "44", "", "🇮🇲", ["Parishes", "Sheadings"], { "Parishes": ["Andreas", "Arbory", "Ballaugh", "Braddan", "Bride", "Castletown", "Douglas", "German", "Jurby", "Laxey", "Lezayre", "Lonan", "Malew", "Marown", "Maughold", "Michael", "Onchan", "Patrick", "Peel", "Port Erin", "Port St Mary", "Ramsey", "Rushen"], "Sheadings": ["Garff", "Glenfaba", "Middle", "Peel", "Rushen"] }] : never,
  R extends "IN" | undefined ? ["India (भारत)", "IN", "91", "+.. .....-.....", "🇮🇳", "States", ["Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh", "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka", "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal"]] : never,
  R extends "IO" | undefined ? ["British Indian Ocean Territory", "IO", "246", "+...-...-....", "🇮🇴"] : never,
  R extends "IQ" | undefined ? ["Iraq (‫العراق‬‎)", "IQ", "964", "+...(...)...-....", "🇮🇶", "Governorates", ["Al Anbar", "Babil", "Baghdad", "Basra", "Dhi Qar", "Diyala", "Dohuk", "Erbil", "Karbala", "Kirkuk", "Maysan", "Muthanna", "Najaf", "Nineveh", "Qadisiyyah", "Saladin", "Sulaymaniyah", "Wasit"]] : never,
  R extends "IR" | undefined ? ["Iran (‫ایران‬‎)", "IR", "98", "+..(...)...-....", "🇮🇷", "Provinces", ["Alborz", "Ardabil", "Bushehr", "Chaharmahal and Bakhtiari", "East Azerbaijan", "Isfahan", "Fars", "Gilan", "Golestan", "Hamadan", "Hormozgan", "Ilam", "Kerman", "Kermanshah", "Khuzestan", "Kohgiluyeh and Boyer-Ahmad", "Kurdistan", "Lorestan", "Markazi", "Mazandaran", "North Khorasan", "Qazvin", "Qom", "Razavi Khorasan", "Semnan", "Sistan and Baluchestan", "South Khorasan", "Tehran", "West Azerbaijan", "Yazd", "Zanjan"]] : never,
  R extends "IS" | undefined ? ["Iceland (Ísland)", "IS", "354", "+... ... ....", "🇮🇸", "Regions", ["Capital Region", "Southern Peninsula", "Western Region", "Westfjords", "Northwest Region", "Northeast Region", "East Region", "South Region"]] : never,
  R extends "IT" | undefined ? ["Italy (Italia)", "IT", "39", "+.. ... ......", "🇮🇹", "Regions", ["Abruzzo", "Basilicata", "Calabria", "Campania", "Emilia-Romagna", "Friuli-Venezia Giulia", "Lazio", "Liguria", "Lombardia", "Marche", "Molise", "Piemonte", "Puglia", "Sardegna", "Sicilia", "Toscana", "Trentino-Alto Adige", "Umbria", "Valle d'Aosta", "Veneto"], 0] : never,
  R extends "JE" | undefined ? ["Jersey", "JE", "44", "", "🇯🇪", "Parishes", ["Grouville", "Saint Brelade", "Saint Clement", "Saint Helier", "Saint John", "Saint Lawrence", "Saint Martin", "Saint Mary", "Saint Ouen", "Saint Peter", "Saint Saviour", "Trinity"]] : never,
  R extends "JM" | undefined ? ["Jamaica", "JM", "1876", "+.(...)...-....", "🇯🇲", "Parishes", ["Clarendon", "Hanover", "Kingston", "Manchester", "Portland", "Saint Andrew", "Saint Ann", "Saint Catherine", "Saint Elizabeth", "Saint James", "Saint Mary", "Saint Thomas", "Trelawny", "Westmoreland"]] : never,
  R extends "JO" | undefined ? ["Jordan (‫الأردن‬‎)", "JO", "962", "+...-.-....-....", "🇯🇴", "Governorates", ["Ajloun", "Amman", "Aqaba", "Balqa", "Irbid", "Jarash", "Karak", "Ma'an", "Madaba", "Mafraq", "Tafilah", "Zarqa"]] : never,
  R extends "JP" | undefined ? ["Japan (日本)", "JP", "81", "+.. ... .. ....", "🇯🇵", "Prefectures", ["Aichi", "Akita", "Aomori", "Chiba", "Ehime", "Fukui", "Fukuoka", "Fukushima", "Gifu", "Gunma", "Hiroshima", "Hokkaido", "Hyogo", "Ibaraki", "Ishikawa", "Iwate", "Kagawa", "Kagoshima", "Kanagawa", "Kochi", "Kumamoto", "Kyoto", "Mie", "Miyagi", "Miyazaki", "Nagano", "Nagasaki", "Nara", "Niigata", "Oita", "Okayama", "Okinawa", "Osaka", "Saga", "Saitama", "Shiga", "Shimane", "Shizuoka", "Tochigi", "Tokushima", "Tokyo", "Tottori", "Toyama", "Wakayama", "Yamagata", "Yamaguchi", "Yamanashi"]] : never,
  R extends "KE" | undefined ? ["Kenya", "KE", "254", "+...-...-......", "🇰🇪", "Counties", ["Baringo", "Bomet", "Bungoma", "Busia", "Elgeyo-Marakwet", "Embu", "Garissa", "Homa Bay", "Isiolo", "Kajiado", "Kakamega", "Kericho", "Kiambu", "Kilifi", "Kirinyaga", "Kisii", "Kisumu", "Kitui", "Kwale", "Laikipia", "Lamu", "Machakos", "Makueni", "Mandera", "Marsabit", "Meru", "Migori", "Mombasa", "Murang'a", "Nairobi", "Nakuru", "Nandi", "Narok", "Nyamira", "Nyandarua", "Nyeri", "Samburu", "Siaya", "Taita-Taveta", "Tana River", "Tharaka-Nithi", "Trans-Nzoia", "Turkana", "Uasin Gishu", "Vihiga", "Wajir", "West Pokot"]] : never,
  R extends "KG" | undefined ? ["Kyrgyzstan (Кыргызстан)", "KG", "996", "+...(...)...-...", "🇰🇬", "Regions", ["Batken", "Chuy", "Issyk-Kul", "Jalal-Abad", "Naryn", "Osh", "Talas"]] : never,
  R extends "KH" | undefined ? ["Cambodia (កម្ពុជា)", "KH", "855", "+...-..-...-...", "🇰🇭", "Provinces", ["Banteay Meanchey", "Battambang", "Kampong Cham", "Kampong Chhnang", "Kampong Speu", "Kampong Thom", "Kampot", "Kandal", "Kep", "Koh Kong", "Kratie", "Mondulkiri", "Oddar Meanchey", "Pailin", "Phnom Penh", "Preah Sihanouk", "Preah Vihear", "Pursat", "Ratanakiri", "Siem Reap", "Stung Treng", "Svay Rieng", "Takéo", "Tboung Khmum"]] : never,
  R extends "KI" | undefined ? ["Kiribati", "KI", "686", "+...-..-...", "🇰🇮", "Islands", ["Banaba", "Gilbert Islands", "Line Islands", "Phoenix Islands"]] : never,
  R extends "KM" | undefined ? ["Comoros (‫جزر القمر‬‎)", "KM", "269", "+...-..-.....", "🇰🇲", "Regions", ["Grande Comore", "Anjouan", "Mohéli"]] : never,
  R extends "KN" | undefined ? ["Saint Kitts and Nevis", "KN", "1869", "+.(...)...-....", "🇰🇳", "Parishes", ["Christ Church Nichola Town", "Saint Anne Sandy Point", "Saint George Basseterre", "Saint John Capisterre", "Saint Mary Cayon", "Saint Paul Capisterre", "Saint Peter Basseterre", "Saint Thomas Lowland", "Saint Thomas Middle Island", "Trinity Palmetto Point"]] : never,
  R extends "KP" | undefined ? ["North Korea (조선 민주주의 인민 공화국)", "KP", "850", "+...-...-...", "🇰🇵", "Provinces", ["Chagang", "North Hamgyong", "South Hamgyong", "North Hwanghae", "South Hwanghae", "Kangwon", "North Pyongan", "South Pyongan", "Ryanggang"]] : never,
  R extends "KW" | undefined ? ["Kuwait (‫الكويت‬‎)", "KW", "965", "+...-....-....", "🇰🇼", "Governorates", ["Al Ahmadi", "Al Farwaniyah", "Al Jahra", "Capital", "Hawalli", "Mubarak Al-Kabeer"]] : never,
  R extends "KY" | undefined ? ["Cayman Islands", "KY", "1345", "+.(...)...-....", "🇰🇾", "Districts", ["Bodden Town", "Cayman Brac", "East End", "George Town", "Little Cayman", "North Side", "Sister Islands", "West Bay"]] : never,
  R extends "KZ" | undefined ? ["Kazakhstan (Казахстан)", "KZ", "7", "+. ... ...-..-..", "🇰🇿", "Regions", ["Almaty", "Aqmola", "Aqtobe", "Atyrau", "East Kazakhstan", "Mangystau", "North Kazakhstan", "Nur-Sultan", "Pavlodar", "Qaragandy", "Qostanay", "Qyzylorda", "Shymkent", "Turkestan", "West Kazakhstan"], 1] : never,
  R extends "LA" | undefined ? ["Laos (ລາວ)", "LA", "856", "+...-..-...-...", "🇱🇦", "Provinces", ["Attapeu", "Bokeo", "Bolikhamsai", "Champasak", "Houaphanh", "Khammouane", "Luang Namtha", "Luang Prabang", "Oudomxay", "Phongsaly", "Sainyabuli", "Salavan", "Savannakhet", "Sekong", "Vientiane", "Vientiane Prefecture", "Xaisomboun", "Xaisomboun Special Zone", "Xiangkhouang", "Xekong", "Xiangkhouang"]] : never,
  R extends "LB" | undefined ? ["Lebanon (‫لبنان‬‎)", "LB", "961", "+...-.-...-...", "🇱🇧", "Governorates", ["Akkar", "Baalbek-Hermel", "Beirut", "Beqaa", "Mount Lebanon", "Nabatieh", "North", "South"]] : never,
  R extends "LC" | undefined ? ["Saint Lucia", "LC", "1758", "+.(...)...-....", "🇱🇨", "Districts", ["Anse-la-Raye", "Canaries", "Castries", "Choiseul", "Dennery", "Gros Islet", "Laborie", "Micoud", "Soufrière", "Vieux Fort"]] : never,
  R extends "LI" | undefined ? ["Liechtenstein", "LI", "423", "+...(...)...-....", "🇱🇮", "Municipalities", ["Balzers", "Eschen", "Gamprin", "Mauren", "Planken", "Ruggell", "Schaan", "Schellenberg", "Triesen", "Triesenberg", "Vaduz"]] : never,
  R extends "LR" | undefined ? ["Liberia", "LR", "231", "+...-..-...-...", "🇱🇷", "Counties", ["Bomi", "Bong", "Gbarpolu", "Grand Bassa", "Grand Cape Mount", "Grand Gedeh", "Grand Kru", "Lofa", "Margibi", "Maryland", "Montserrado", "Nimba", "River Cess", "River Gee", "Sinoe"]] : never,
  R extends "LS" | undefined ? ["Lesotho", "LS", "266", "+...-.-...-....", "🇱🇸", "Districts", ["Berea", "Butha-Buthe", "Leribe", "Mafeteng", "Maseru", "Mohale's Hoek", "Mokhotlong", "Qacha's Nek", "Quthing", "Thaba-Tseka"]] : never,
  R extends "LT" | undefined ? ["Lithuania (Lietuva)", "LT", "370", "+...(...)..-...", "🇱🇹", "Counties", ["Alytus County", "Kaunas unknownounty", "Klaipeda County", "Marijampole County", "Panevezys County", "Siauliai County", "Taurage County", "Telsiai County", "Utena County", "Vilnius County"]] : never,
  R extends "LU" | undefined ? ["Luxembourg", "LU", "352", "+...(...)...-...", "🇱🇺", "Cantons", ["Diekirch", "Grevenmacher", "Luxembourg"]] : never,
  R extends "LV" | undefined ? ["Latvia (Latvija)", "LV", "371", "+...-..-...-...", "🇱🇻", "Regions", ["Aizkraukle", "Aluksne", "Balvi", "Bauska", "Cesis", "Daugavpils", "Dobele", "Gulbene", "Jekabpils", "Jelgava", "Jurmala", "Kraslava", "Kuldiga", "Liepaja", "Limbazi", "Ludza", "Madona", "Ogre", "Preili", "Rezekne", "Riga", "Saldus", "Talsi", "Tukums", "Valka", "Valmiera", "Ventspils"]] : never,
  R extends "LY" | undefined ? ["Libya (‫ليبيا‬‎)", "LY", "218", "+...-..-...-...", "🇱🇾", "Regions", ["Al Wahat", "Benghazi", "Derna", "Ghat", "Jabal al Akhdar", "Jabal al Gharbi", "Jafara", "Jufra", "Kufra", "Marj", "Misrata", "Murqub", "Murzuq", "Nalut", "Nuqat al Khams", "Sabha", "Sirte", "Tripoli", "Wadi al Hayaa", "Wadi al Shatii", "Zawiya"]] : never,
  R extends "MA" | undefined ? ["Morocco (‫المغرب‬‎)", "MA", "212", "+...-..-....-...", "🇲🇦", "Regions", ["Tanger-Tétouan-Al Hoceïma", "Oriental", "Fès-Meknès", "Rabat-Salé-Kénitra", "Béni Mellal-Khénifra", "Casablanca-Settat", "Marrakesh-Safi", "Drâa-Tafilalet", "Souss-Massa", "Guelmim-Oued Noun", "Laâyoune-Sakia El Hamra", "Dakhla-Oued Ed-Dahab"]] : never,
  R extends "MC" | undefined ? ["Monaco", "MC", "377", "+...-..-...-...", "🇲🇨", "Districts", ["Monaco-Ville", "La Condamine", "Monte Carlo", "Fontvieille"]] : never,
  R extends "MD" | undefined ? ["Moldova (Republica Moldova)", "MD", "373", "+...-....-....", "🇲🇩", "Regions", ["Anenii Noi", "Basarabeasca", "Briceni", "Cahul", "Călărași", "Cantemir", "Căușeni", "Cimișlia", "Criuleni", "Dondușeni", "Drochia", "Dubăsari", "Edineț", "Fălești", "Florești", "Găgăuzia", "Glodeni", "Hîncești", "Ialoveni", "Leova", "Nisporeni", "Ocnița", "Orhei", "Rezina", "Rîșcani", "Sîngerei", "Șoldănești", "Soroca", "Strășeni", "Ștefan Vodă", "Taraclia", "Telenești", "Ungheni"]] : never,
  R extends "ME" | undefined ? ["Montenegro (Crna Gora)", "ME", "382", "+...-..-...-...", "🇲🇪", "Municipalities", ["Andrijevica", "Bar", "Berane", "Bijelo Polje", "Budva", "Cetinje", "Danilovgrad", "Gusinje", "Herceg Novi", "Kolašin", "Kotor", "Mojkovac", "Nikšić", "Petnjica", "Plav", "Pljevlja", "Plužine", "Podgorica", "Rožaje", "Šavnik", "Tivat", "Ulcinj", "Žabljak"]] : never,
  R extends "MF" | undefined ? ["Saint Martin (Sant-Martin (partie française))", "MF", "590", "", "🇲🇫", "Parishes", ["Marigot"], 2] : never,
  R extends "MG" | undefined ? ["Madagascar (Madagasikara)", "MG", "261", "+...-..-..-.....", "🇲🇬", "Provinces", ["Antananarivo", "Antsiranana", "Fianarantsoa", "Mahajanga", "Toamasina", "Toliara"]] : never,
  R extends "MH" | undefined ? ["Marshall Islands", "MH", "692", "+...-...-....", "🇲🇭", "Municipalities", ["Ailinglaplap", "Ailuk", "Arno", "Aur", "Bikini", "Ebon", "Enewetak", "Jabat", "Jaluit", "Kili", "Kwajalein", "Lae", "Lib", "Likiep", "Majuro", "Maloelap", "Mejit", "Mili", "Namdrik", "Namu", "Rongelap", "Ujae", "Ujelang", "Utirik", "Wotho", "Wotje"]] : never,
  R extends "MK" | undefined ? ["Macedonia (FYROM) (Македонија)", "MK", "389", "+...-..-...-...", "🇲🇰", "Regions", ["Skopje", "Pelagonia", "Polog", "Vardar", "Eastern", "Southwestern", "Northeastern", "Southeastern"]] : never,
  R extends "ML" | undefined ? ["Mali", "ML", "223", "+...-..-..-....", "🇲🇱", "Regions", ["Bamako", "Gao", "Kayes", "Kidal", "Koulikoro", "Mopti", "Segou", "Sikasso", "Tombouctou"]] : never,
  R extends "MM" | undefined ? ["Myanmar (Burma) (မြန်မာ)", "MM", "95", "+..-...-...", "🇲🇲", ["States", "Regions"], { "States": ["Ayeyarwady", "Bago", "Chin", "Kachin", "Kayah", "Kayin", "Magway", "Mandalay", "Mon", "Naypyidaw Union Territory", "Rakhine", "Sagaing", "Shan", "Tanintharyi", "Yangon"], "Regions": ["Sagaing", "Tanintharyi", "Bago", "Magway", "Mandalay", "Yangon", "Ayeyarwady", "Kachin", "Kayah", "Kayin", "Chin", "Mon", "Rakhine", "Shan"] }] : never,
  R extends "MN" | undefined ? ["Mongolia (Монгол)", "MN", "976", "+...-..-..-....", "🇲🇳", "Aimags", ["Arkhangai", "Bayan-Ölgii", "Bayankhongor", "Bulgan", "Darkhan-Uul", "Dornod", "Dornogovi", "Dundgovi", "Govi-Altai", "Govisümber", "Khentii", "Khovd", "Khövsgöl", "Ömnögovi", "Orkhon", "Övörkhangai", "Selenge", "Sükhbaatar", "Töv", "Uvs", "Zavkhan"]] : never,
  R extends "MO" | undefined ? ["Macau (澳門)", "MO", "853", "+...-....-....", "🇲🇴", "Freguesias", ["Nossa Senhora de Fátima", "Santo António", "São Lázaro", "São Lourenço", "São Francisco Xavier", "Sé", "Coloane", "Taipa"]] : never,
  R extends "MP" | undefined ? ["Northern Mariana Islands", "MP", "1670", "+.(...)...-....", "🇲🇵", "Municipalities", ["Northern Islands", "Rota", "Saipan", "Tinian"]] : never,
  R extends "MQ" | undefined ? ["Martinique", "MQ", "596", "+...(...)..-..-..", "🇲🇶", ["Arrondissements", "Cantons", "Communes"], { "Arrondissements": ["Fort-de-France", "La Trinité", "Le Marin", "Le Robert", "Saint-Pierre"], "Cantons": ["Fort-de-France-1", "Fort-de-France-2", "Fort-de-France-3", "Fort-de-France-4", "Le François", "Le Lamentin-1", "Le Lamentin-2", "Le Marin", "Le Robert", "Sainte-Anne", "Sainte-Luce", "Saint-Esprit", "Saint-Joseph", "Saint-Pierre"], "Communes": ["Basse-Pointe", "Bellefontaine", "Case-Pilote", "Ducos", "Fonds-Saint-Denis", "Fort-de-France", "Grand'Rivière", "Gros-Morne", "Le Carbet", "Le Diamant", "Le François", "Le Lamentin", "Le Lorrain", "Le Marigot", "Le Marin", "Le Morne-Rouge", "Le Morne-Vert", "Le Prêcheur", "Le Robert", "Le Vauclin", "Les Anses-d'Arlet", "Les Trois-Îlets", "Macouba", "Rivière-Pilote", "Rivière-Salée", "Sainte-Anne", "Sainte-Luce", "Sainte-Marie", "Saint-Esprit", "Saint-Joseph", "Saint-Pierre", "Schœlcher", "Trinité", "Trois-Rivières"] }] : never,
  R extends "MR" | undefined ? ["Mauritania (‫موريتانيا‬‎)", "MR", "222", "+...-..-..-....", "🇲🇷", "Regions", ["Adrar", "Assaba", "Brakna", "Dakhlet Nouadhibou", "Gorgol", "Guidimaka", "Hodh Ech Chargui", "Hodh El Gharbi", "Inchiri", "Nouakchott Nord", "Nouakchott Ouest", "Nouakchott Sud", "Tagant", "Tiris Zemmour", "Trarza"]] : never,
  R extends "MS" | undefined ? ["Montserrat", "MS", "1664", "+.(...)...-....", "🇲🇸", "Parishes", ["Saint Anthony", "Saint Georges", "Saint Peter"]] : never,
  R extends "MT" | undefined ? ["Malta", "MT", "356", "+...-....-....", "🇲🇹", "Districts", ["Gozo", "Malta"]] : never,
  R extends "MU" | undefined ? ["Mauritius (Moris)", "MU", "230", "+...-...-....", "🇲🇺", "Districts", ["Black River", "Flacq", "Grand Port", "Moka", "Pamplemousses", "Plaines Wilhems", "Port Louis", "Rivière du Rempart", "Savanne"]] : never,
  R extends "MV" | undefined ? ["Maldives", "MV", "960", "+...-...-....", "🇲🇻", "Atolls", ["Ari Atoll", "Faafu Atoll", "Lhaviyani Atoll", "Malé Atoll", "Baa Atoll", "Dhaalu Atoll", "Gaafu Alif Atoll", "Haa Alif Atoll", "Kaafu Atoll", "Laamu Atoll", "Meemu Atoll", "Noonu Atoll", "Raa Atoll", "Seenu Atoll", "Thaa Atoll", "Vaavu Atoll"]] : never,
  R extends "MW" | undefined ? ["Malawi", "MW", "265", "+...-.-....-....", "🇲🇼", "Districts", ["Balaka", "Blantyre", "Chikwawa", "Chiradzulu", "Chitipa", "Dedza", "Dowa", "Karonga", "Kasungu", "Likoma", "Lilongwe", "Machinga", "Mangochi", "Mchinji", "Mulanje", "Mwanza", "Mzimba", "Neno", "Nkhata Bay", "Nkhotakota", "Nsanje", "Ntcheu", "Ntchisi", "Phalombe", "Rumphi", "Salima", "Thyolo", "Zomba"]] : never,
  R extends "MX" | undefined ? ["Mexico (México)", "MX", "52", "+..-..-..-....", "🇲🇽", "States", ["Aguascalientes", "Baja California", "Baja California Sur", "Campeche", "Chiapas", "Chihuahua", "Coahuila", "Colima", "Durango", "Guanajuato", "Guerrero", "Hidalgo", "Jalisco", "México", "Michoacán", "Morelos", "Nayarit", "Nuevo León", "Oaxaca", "Puebla", "Querétaro", "Quintana Roo", "San Luis Potosí", "Sinaloa", "Sonora", "Tabasco", "Tamaulipas", "Tlaxcala", "Veracruz", "Yucatán", "Zacatecas"]] : never,
  R extends "MY" | undefined ? ["Malaysia", "MY", "60", "+.. ..-....-....", "🇲🇾", "States", ["Johor", "Kedah", "Kelantan", "Melaka", "Negeri Sembilan", "Pahang", "Perak", "Perlis", "Pulau Pinang", "Sabah", "Sarawak", "Selangor", "Terengganu", "Wilayah Persekutuan Kuala Lumpur", "Wilayah Persekutuan Labuan", "Wilayah Persekutuan Putrajaya"]] : never,
  R extends "MZ" | undefined ? ["Mozambique (Moçambique)", "MZ", "258", "+...-..-...-...", "🇲🇿", "Provinces", ["Cabo Delgado", "Gaza", "Inhambane", "Manica", "Maputo", "Nampula", "Niassa", "Sofala", "Tete", "Zambezia"]] : never,
  R extends "NA" | undefined ? ["Namibia (Namibië)", "NA", "264", "+...-..-...-....", "🇳🇦", "Regions", ["Erongo", "Hardap", "Karas", "Kavango East", "Kavango West", "Khomas", "Kunene", "Ohangwena", "Omaheke", "Omusati", "Oshana", "Oshikoto", "Otjozondjupa", "Zambezi"]] : never,
  R extends "NC" | undefined ? ["New Caledonia (Nouvelle-Calédonie)", "NC", "687", "+...-..-....", "🇳🇨", ["Provinces", "Communes"], { "Provinces": ["South Province", "North Province", "Loyalty Islands Province"], "Communes": ["Nouméa", "Mont-Dore", "Dumbéa", "Païta", "Yaté", "Bouloupari", "La Foa", "Sarraméa", "Farino", "Moindou", "Bourail", "Poya", "Koné", "Voh", "Kaala-Gomen", "Pouembout", "Poum", "Belep", "Hienghène", "Ponérihouen", "Kouaoua", "Canala", "Thio", "Yaté", "Île des Pins", "Lifou", "Maré", "Ouvéa"] }] : never,
  R extends "NE" | undefined ? ["Niger (Nijar)", "NE", "227", "+...-..-..-....", "🇳🇪", "Regions", ["Agadez", "Diffa", "Dosso", "Maradi", "Tahoua", "Tillabéri", "Zinder"]] : never,
  R extends "NF" | undefined ? ["Norfolk Island", "NF", "672", "+...-...-...", "🇳🇫"] : never,
  R extends "NG" | undefined ? ["Nigeria", "NG", "234", "+...-..-...-..", "🇳🇬", "States", ["Abia", "Adamawa", "Akwa Ibom", "Anambra", "Bauchi", "Bayelsa", "Benue", "Borno", "Cross River", "Delta", "Ebonyi", "Edo", "Ekiti", "Enugu", "Gombe", "Imo", "Jigawa", "Kaduna", "Kano", "Katsina", "Kebbi", "Kogi", "Kwara", "Lagos", "Nasarawa", "Niger", "Ogun", "Ondo", "Osun", "Oyo", "Plateau", "Rivers", "Sokoto", "Taraba", "Yobe", "Zamfara", "Federal Capital Territory"]] : never,
  R extends "NI" | undefined ? ["Nicaragua", "NI", "505", "+...-....-....", "🇳🇮", "Departments", ["Boaco", "Carazo", "Chinandega", "Chontales", "Estelí", "Granada", "Jinotega", "León", "Madriz", "Managua", "Masaya", "Matagalpa", "Nueva Segovia", "Río San Juan", "Rivas", "Atlántico Norte", "Atlántico Sur"]] : never,
  R extends "NL" | undefined ? ["Netherlands (Nederland)", "NL", "31", "+.. .. ........", "🇳🇱", "Provinces", ["Drenthe", "Flevoland", "Friesland", "Gelderland", "Groningen", "Limburg", "Noord-Brabant", "Noord-Holland", "Overijssel", "Utrecht", "Zeeland", "Zuid-Holland"]] : never,
  R extends "NO" | undefined ? ["Norway (Norge)", "NO", "47", "+.. ... .. ...", "🇳🇴", "Counties", ["Agder", "Innlandet", "Møre og Romsdal", "Nordland", "Oslo", "Rogaland", "Troms og Finnmark", "Trøndelag", "Vestfold og Telemark", "Vestland", "Viken"]] : never,
  R extends "NP" | undefined ? ["Nepal (नेपाल)", "NP", "977", "+...-..-...-...", "🇳🇵", "Provinces", ["Province No. 1", "Province No. 2", "Bagmati Province", "Gandaki Province", "Lumbini Province", "Karnali Province", "Sudurpashchim Province"]] : never,
  R extends "NR" | undefined ? ["Nauru", "NR", "674", "+...-...-....", "🇳🇷", "Districts", ["Aiwo", "Anabar", "Anetan", "Anibare", "Baiti", "Boe", "Buada", "Denigomodu", "Ewa", "Ijuw", "Meneng", "Nibok", "Uaboe", "Yaren"]] : never,
  R extends "NU" | undefined ? ["Niue", "NU", "683", "+...-....", "🇳🇺", "Villages", ["Alofi", "Avatele", "Hakupu", "Hikutavake", "Lakepa", "Makefu", "Mutalau", "Namukulu", "Tamakautoga", "Toi", "Tuapa"]] : never,
  R extends "NZ" | undefined ? ["New Zealand", "NZ", "64", "+.. ...-...-....", "🇳🇿", "Regions", ["Northland", "Auckland", "Waikato", "Bay of Plenty", "Gisborne", "Hawke's Bay", "Taranaki", "Manawatu-Whanganui", "Wellington", "Tasman", "Nelson", "Marlborough", "West Coast", "Canterbury", "Otago", "Southland"]] : never,
  R extends "OM" | undefined ? ["Oman (‫عُمان‬‎)", "OM", "968", "+...-..-...-...", "🇴🇲", "Governorates", ["Ad Dakhiliyah", "Ad Dhahirah", "Al Batinah North", "Al Batinah South", "Al Buraimi", "Al Wusta", "Ash Sharqiyah North", "Ash Sharqiyah South", "Dhofar", "Musandam", "Muscat"]] : never,
  R extends "PA" | undefined ? ["Panama (Panamá)", "PA", "507", "+...-...-....", "🇵🇦", "Provinces", ["Bocas del Toro", "Chiriquí", "Coclé", "Colón", "Darién", "Emberá-Wounaan", "Guna Yala", "Herrera", "Los Santos", "Ngäbe-Buglé", "Panamá", "Panamá Oeste", "Veraguas"]] : never,
  R extends "PE" | undefined ? ["Peru (Perú)", "PE", "51", "+..(...)...-...", "🇵🇪", "Regions", ["Amazonas", "Áncash", "Apurímac", "Arequipa", "Ayacucho", "Cajamarca", "Callao", "Cusco", "Huancavelica", "Huánuco", "Ica", "Junín", "La Libertad", "Lambayeque", "Lima", "Loreto", "Madre de Dios", "Moquegua", "Pasco", "Piura", "Puno", "San Martín", "Tacna", "Tumbes", "Ucayali"]] : never,
  R extends "PF" | undefined ? ["French Polynesia (Polynésie française)", "PF", "689", "+...-..-..-..", "🇵🇫", ["Communes", "Subdivisions"], { "Communes": ["Papeete", "Faaa", "Punaauia"], "Subdivisions": ["Marquesas Islands", "Tuamotu-Gambier", "Tubuai Islands"] }] : never,
  R extends "PG" | undefined ? ["Papua New Guinea", "PG", "675", "+...(...)..-...", "🇵🇬", "Regions", ["Bougainville", "Central", "Chimbu", "Eastern Highlands", "East New Britain", "East Sepik", "Enga", "Gulf", "Hela", "Jiwaka", "Madang", "Manus", "Milne Bay", "Morobe", "New Ireland", "Northern", "Southern Highlands", "Western", "West New Britain", "West Sepik", "Western Highlands"]] : never,
  R extends "PH" | undefined ? ["Philippines", "PH", "63", "+.. ... ....", "🇵🇭", "Regions", ["Ilocos Region", "Cagayan Valley", "Central Luzon", "Calabarzon", "Mimaropa", "Bicol Region", "Western Visayas", "Central Visayas", "Eastern Visayas", "Zamboanga Peninsula", "Northern Mindanao", "Davao Region", "Soccsksargen", "Caraga", "Bangsamoro Autonomous Region in Muslim Mindanao", "Cordillera Administrative Region", "National Capital Region"]] : never,
  R extends "PK" | undefined ? ["Pakistan (‫پاکستان‬‎)", "PK", "92", "+.. ...-.......", "🇵🇰", ["Provinces", "Territories"], { "Provinces": ["Balochistan", "Khyber Pakhtunkhwa", "Punjab", "Sindh"], "Territories": ["Islamabad Capital Territory", "Gilgit-Baltistan", "Azad Jammu and Kashmir"] }] : never,
  R extends "PL" | undefined ? ["Poland (Polska)", "PL", "48", "+.. ...-...-...", "🇵🇱", "Provinces", ["Greater Poland", "Kuyavian-Pomeranian", "Lesser Poland", "Lodz", "Lower Silesian", "Lublin", "Lubusz", "Masovian", "Opole", "Podlasie", "Pomeranian", "Silesian", "Subcarpathian", "Swietokrzyskie", "Warmian-Masurian", "West Pomeranian"]] : never,
  R extends "PM" | undefined ? ["Saint Pierre and Miquelon (Saint-Pierre-et-Miquelon)", "PM", "508", "", "🇵🇲", "Communes", ["Saint-Pierre", "Miquelon-Langlade"]] : never,
  R extends "PN" | undefined ? ["Pitcairn Islands", "PN", "64", "", "🇵🇳"] : never,
  R extends "PR" | undefined ? ["Puerto Rico", "PR", "1", "+. (...) ...-....", "🇵🇷", "Municipalities", ["Adjuntas", "Aguada", "Aguadilla", "Aguas Buenas", "Aibonito", "Añasco", "Arecibo", "Arroyo", "Barceloneta", "Barranquitas", "Bayamón", "Cabo Rojo", "Caguas", "Camuy", "Canóvanas", "Carolina", "Cataño", "Cayey", "Ceiba", "Ciales", "Cidra", "Coamo", "Comerío", "Corozal", "Culebra", "Dorado", "Fajardo", "Florida", "Guánica", "Guayama", "Guayanilla", "Guaynabo", "Gurabo", "Hatillo", "Hormigueros", "Humacao", "Isabela", "Jayuya", "Juana Díaz", "Juncos", "Lajas", "Lares", "Las Marías", "Las Piedras", "Loíza", "Luquillo", "Manatí", "Maricao", "Maunabo", "Mayagüez", "Moca", "Morovis", "Naguabo", "Naranjito", "Orocovis", "Patillas", "Peñuelas", "Ponce", "Quebradillas", "Rincón", "Río Grande", "Sabana Grande", "Salinas", "San Germán", "San Juan", "San Lorenzo", "San Sebastián", "Santa Isabel", "Toa Alta", "Toa Baja", "Trujillo Alto", "Utuado", "Vega Alta", "Vega Baja", "Vieques", "Villalba", "Yabucoa", "Yauco"], 3, ["787", "939"]] : never,
  R extends "PS" | undefined ? ["Palestine (‫فلسطين‬‎)", "PS", "970", "+...-..-...-....", "🇵🇸", "Governorates", ["Gaza Strip", "West Bank"]] : never,
  R extends "PT" | undefined ? ["Portugal", "PT", "351", "+...-..-...-....", "🇵🇹", "Regions", ["Azores", "Alentejo", "Algarve", "Centro", "Lisbon", "Madeira", "Norte"]] : never,
  R extends "PW" | undefined ? ["Palau", "PW", "680", "+...-...-....", "🇵🇼", "States", ["Aimeliik", "Airai", "Angaur", "Hatohobei", "Kayangel", "Koror", "Melekeok", "Ngaraard", "Ngarchelong", "Ngardmau", "Ngatpang", "Ngchesar", "Ngeremlengui", "Ngiwal", "Peleliu", "Sonsorol"]] : never,
  R extends "PY" | undefined ? ["Paraguay", "PY", "595", "+...(...)...-...", "🇵🇾", "Departments", ["Alto Paraguay", "Alto Paraná", "Amambay", "Boquerón", "Caaguazú", "Caazapá", "Canindeyú", "Central", "Concepción", "Cordillera", "Guairá", "Itapúa", "Misiones", "Ñeembucú", "Paraguarí", "Presidente Hayes", "San Pedro"]] : never,
  R extends "QA" | undefined ? ["Qatar (‫قطر‬‎)", "QA", "974", "+...-....-....", "🇶🇦", "Municipalities", ["Doha", "Al Rayyan", "Umm Salal", "Al Khor", "Al Wakrah", "Al Daayen", "Madinat ash Shamal", "Al Shamal", "Al Ruwais"]] : never,
  R extends "RE" | undefined ? ["Réunion (La Réunion)", "RE", "262", "+...-.....-....", "🇷🇪", ["Arrondissements", "Cantons", "Communes"], { "Arrondissements": ["Saint-Denis", "Saint-Paul", "Saint-Pierre", "Saint-Benoit"], "Cantons": ["Bras-Panon", "La Chaloupe", "La Grande Montée", "L'Étang-Salé", "Entre-Deux", "Les Avirons", "Petite-Île", "Plaine-des-Palmistes", "Le Port", "La Possession", "Saint-André-1", "Saint-André-2", "Saint-André-3", "Saint-Benoît-1", "Saint-Benoît-2", "Saint-Denis-1", "Saint-Denis-2", "Saint-Denis-3", "Saint-Denis-4", "Saint-Denis-5", "Saint-Denis-6", "Saint-Denis-7", "Saint-Denis-8", "Saint-Denis-9", "Saint-Denis-10", "Saint-Joseph", "Saint-Leu-1", "Saint-Leu-2", "Saint-Louis-1", "Saint-Louis-2", "Saint-Louis-3", "Saint-Paul-1", "Saint-Paul-2", "Saint-Paul-3", "Saint-Paul-4", "Saint-Paul-5", "Saint-Pierre-1", "Saint-Pierre-2", "Saint-Pierre-3", "Saint-Pierre-4", "Sainte-Marie", "Sainte-Rose", "Sainte-Suzanne", "Saint-Philippe", "Salazie", "Le Tampon-1", "Le Tampon-2", "Le Tampon-3", "Le Tampon-4"], "Communes": ["Les Avirons", "Bras-Panon", "Cilaos", "Entre-Deux", "L'Étang-Salé", "Petite-Île", "La Plaine-des-Palmistes", "Le Port", "La Possession", "Saint-André", "Saint-Benoît", "Saint-Denis", "Sainte-Marie", "Sainte-Rose", "Sainte-Suzanne", "Saint-Joseph", "Saint-Leu", "Saint-Louis", "Saint-Paul", "Saint-Philippe", "Saint-Pierre", "Salazie", "Le Tampon", "Trois-Bassins"] }] : never,
  R extends "RO" | undefined ? ["Romania (România)", "RO", "40", "+..-..-...-....", "🇷🇴", "Regions", ["Moldova", "Muntenia", "Transylvania", "Banat", "Crisana", "Dobrogea", "Maramures", "Oltenia", "Bucovina", "Mehedinti", "Craiova", "Pitesti", "Sibiu", "Targu Mures", "Timisoara", "Cluj-Napoca", "Iasi", "Bucharest"]] : never,
  R extends "RS" | undefined ? ["Serbia (Србија)", "RS", "381", "+...-..-...-....", "🇷🇸", "Districts", ["Belgrade", "Nišava", "Šumadija", "Zaječar", "Podunavlje", "Bor", "Braničevo", "Pomoravlje", "Zlatibor", "Moravica", "Raška", "Rasina", "Toplica", "Mačva", "Kolubara", "Jablanica", "Pčinja", "Pirot", "Branicevo", "Juzni Banat", "Srednji Banat", "Severni Banat", "Zapadna Bačka", "Južna Bačka", "Severna Bačka", "Srem", "Mačva", "Kolubara", "Podrinje", "Kosovo", "Kosovska Mitrovica", "Peć", "Prizren", "Kosovska Mitrovica", "Peć", "Prizren"]] : never,
  R extends "RU" | undefined ? ["Russia (Россия)", "RU", "7", "+.-(...)-...-....", "🇷🇺", "Federal Subjects", ["Moscow", "Saint Petersburg", "Novosibirsk", "Yekaterinburg", "Nizhny Novgorod", "Kazan", "Chelyabinsk", "Omsk", "Samara", "Rostov-on-Don", "Ufa", "Krasnoyarsk", "Perm", "Voronezh", "Volgograd", "Krasnodar", "Saratov", "Tyumen", "Tolyatti", "Izhevsk"]] : never,
  R extends "RW" | undefined ? ["Rwanda", "RW", "250", "+...(...)...-...", "🇷🇼", "Provinces", ["Kigali", "Eastern", "Northern", "Southern", "Western"]] : never,
  R extends "SA" | undefined ? ["Saudi Arabia (‫المملكة العربية السعودية‬‎)", "SA", "966", "+...-..-...-....", "🇸🇦", "Regions", ["Riyadh", "Makkah", "Madinah", "Eastern Province", "Asir", "Tabuk", "Qassim", "Ha'il", "Jizan", "Najran", "Al Bahah", "Northern Borders", "Jawf", "Hail"]] : never,
  R extends "SB" | undefined ? ["Solomon Islands", "SB", "677", "+...-.....", "🇸🇧", "Provinces", ["Central Province", "Choiseul", "Guadalcanal", "Honiara", "Isabel", "Makira-Ulawa", "Malaita", "Rennell and Bellona", "Temotu", "Western Province"]] : never,
  R extends "SC" | undefined ? ["Seychelles", "SC", "248", "+...-.-...-...", "🇸🇨", ["Inner Islands", "Outer Islands"], { "Inner Islands": ["Mahé", "Praslin", "La Digue"], "Outer Islands": ["Alphonse", "Desroches", "Farquhar", "Aldabra"] }] : never,
  R extends "SG" | undefined ? ["Singapore", "SG", "65", "+.. ....-....", "🇸🇬", "Regions", ["Central Region", "East Region", "North Region", "North-East Region", "West Region"]] : never,
  R extends "SI" | undefined ? ["Slovenia (Slovenija)", "SI", "386", "+...-..-...-...", "🇸🇮", "Regions", ["Pomurska", "Podravska", "Koroška", "Savinjska", "Zasavska", "Posavska", "Jugovzhodna Slovenija", "Osrednjeslovenska", "Gorenjska", "Primorsko-notranjska", "Goriška", "Obalno-kraška"]] : never,
  R extends "SK" | undefined ? ["Slovakia (Slovensko)", "SK", "421", "+...(...)...-...", "🇸🇰", "Regions", ["Bratislava", "Trnava", "Trenčín", "Nitra", "Žilina", "Banská Bystrica", "Prešov", "Košice"]] : never,
  R extends "SL" | undefined ? ["Sierra Leone", "SL", "232", "+...-..-......", "🇸🇱", "Provinces", ["Eastern Province", "Northern Province", "Southern Province", "Western Area"]] : never,
  R extends "SM" | undefined ? ["San Marino", "SM", "378", "+...-....-......", "🇸🇲", "Municipalities", ["Acquaviva", "Borgo Maggiore", "Chiesanuova", "Domagnano", "Faetano", "Fiorentino", "Montegiardino", "San Marino", "Serravalle"]] : never,
  R extends "SN" | undefined ? ["Senegal (Sénégal)", "SN", "221", "+...-..-...-....", "🇸🇳", "Regions", ["Dakar", "Thiès", "Diourbel", "Fatick", "Kaolack", "Kolda", "Louga", "Matam", "Saint-Louis", "Sédhiou", "Tambacounda", "Kaffrine", "Kédougou", "Kolda", "Ziguinchor"]] : never,
  R extends "SO" | undefined ? ["Somalia (Soomaaliya)", "SO", "252", "+...-.-...-...", "🇸🇴", "Regions", ["Awdal", "Bakool", "Banaadir", "Bari", "Bay", "Galguduud", "Gedo", "Hiiraan", "Jubbada Dhexe", "Jubbada Hoose", "Mudug", "Nugaal", "Sanaag", "Shabeellaha Dhexe", "Shabeellaha Hoose", "Sool", "Togdheer", "Woqooyi Galbeed"]] : never,
  R extends "ST" | undefined ? ["São Tomé and Príncipe (São Tomé e Príncipe)", "ST", "239", "+...-..-.....", "🇸🇹", "Provinces", ["Príncipe", "São Tomé"]] : never,
  R extends "SV" | undefined ? ["El Salvador", "SV", "503", "+... ....-....", "🇸🇻", "Departments", ["Ahuachapán", "Cabañas", "Chalatenango", "Cuscatlán", "La Libertad", "La Paz", "La Unión", "Morazán", "San Miguel", "San Salvador", "San Vicente", "Santa Ana", "Sonsonate", "Usulután"]] : never,
  R extends "SX" | undefined ? ["Sint Maarten", "SX", "1721", "+.(...)...-....", "🇸🇽", "Regions", ["Dutch Quarter", "French Quarter", "Little Bay", "Lowlands", "Maho", "Pelican Key", "Philipsburg", "Point Blanche", "Simpson Bay"]] : never,
  R extends "TC" | undefined ? ["Turks and Caicos Islands", "TC", "1649", "+.(...)...-....", "🇹🇨", "Districts", ["Grand Turk", "Salt Cay", "South Caicos", "Providenciales", "North Caicos", "Middle Caicos"]] : never,
  R extends "TD" | undefined ? ["Chad (Tchad)", "TD", "235", "+...-..-..-..-..", "🇹🇩", "Regions", ["Batha", "Borkou", "Ennedi", "Ennedi-Est", "Ennedi-Ouest", "Guéra", "Hadjer-Lamis", "Kanem", "Lac", "Logone Occidental", "Logone Oriental", "Mandoul", "Mayo-Kebbi Est", "Mayo-Kebbi Ouest", "Moyen-Chari", "N'Djamena", "Ouaddaï", "Salamat", "Sila", "Tandjilé", "Tibesti", "Wadi Fira"]] : never,
  R extends "TF" | undefined ? ["French Southern and Antarctic Lands", "TF", "262", "", "🇹🇫", "Districts", ["Kerguelen Islands", "Crozet Islands", "Amsterdam Island", "Saint-Paul Island"]] : never,
  R extends "TG" | undefined ? ["Togo", "TG", "228", "+...-..-...-...", "🇹🇬", "Regions", ["Centrale", "Kara", "Maritime", "Plateaux", "Savanes"]] : never,
  R extends "TH" | undefined ? ["Thailand (ไทย)", "TH", "66", "+..-..-...-...", "🇹🇭", "Regions", ["Bangkok", "Central Thailand", "Eastern Thailand", "Northern Thailand", "Northeastern Thailand", "Southern Thailand", "Western Thailand"]] : never,
  R extends "TK" | undefined ? ["Tokelau", "TK", "690", "+...-....", "🇹🇰", "Villages", ["Atafu", "Fakaofo", "Nukunonu"]] : never,
  R extends "TL" | undefined ? ["Timor-Leste", "TL", "670", "+...-...-....", "🇹🇱", "Districts", ["Aileu", "Ainaro", "Baucau", "Bobonaro", "Cova Lima", "Dili", "Ermera", "Lautem", "Liquiçá", "Manatuto", "Manufahi", "Oecusse", "Viqueque"]] : never,
  R extends "TM" | undefined ? ["Turkmenistan", "TM", "993", "+...-.-...-....", "🇹🇲", "Regions", ["Ahal", "Balkan", "Daşoguz", "Lebap", "Mary"]] : never,
  R extends "TN" | undefined ? ["Tunisia (‫تونس‬‎)", "TN", "216", "+...-..-...-...", "🇹🇳", "Regions", ["Tunis", "Ariana", "Ben Arous", "Manouba", "Nabeul", "Zaghouan", "Bizerte", "Béja", "Jendouba", "Kef", "Siliana", "Kairouan", "Kasserine", "Sidi Bouzid", "Sousse", "Monastir", "Mahdia", "Sfax", "Gabès", "Medenine", "Tataouine", "Gafsa", "Tozeur", "Kebili"]] : never,
  R extends "TO" | undefined ? ["Tonga", "TO", "676", "+...-.....", "🇹🇴", "Regions", ["Eua", "Ha'apai", "Niuas", "Tongatapu", "Vava'u"]] : never,
  R extends "TR" | undefined ? ["Turkey (Türkiye)", "TR", "90", "+.. ... ... .. ..", "🇹🇷", "Regions", ["Adana", "Adıyaman", "Afyonkarahisar", "Ağrı", "Amasya", "Ankara", "Antalya", "Artvin", "Aydın", "Balıkesir", "Bilecik", "Bingöl", "Bitlis", "Bolu", "Burdur", "Bursa", "Çanakkale", "Çankırı", "Çorum", "Denizli", "Diyarbakır", "Edirne", "Elazığ", "Erzincan", "Erzurum", "Eskişehir", "Gaziantep", "Giresun", "Gümüşhane", "Hakkâri", "Hatay", "Isparta", "Mersin", "İstanbul", "İzmir", "Kars", "Kastamonu", "Kayseri", "Kırklareli", "Kırşehir", "Kocaeli", "Konya", "Kütahya", "Malatya", "Manisa", "Kahramanmaraş", "Mardin", "Muğla", "Muş", "Nevşehir", "Niğde", "Ordu", "Rize", "Sakarya", "Samsun", "Siirt", "Sinop", "Sivas", "Tekirdağ", "Tokat", "Trabzon", "Tunceli", "Şanlıurfa", "Uşak", "Van", "Yozgat", "Zonguldak", "Aksaray", "Bayburt", "Karaman", "Kırıkkale", "Batman", "Şırnak", "Bartın", "Ardahan", "Iğdır", "Yalova", "Karabük", "Kilis", "Osmaniye", "Düzce"]] : never,
  R extends "TT" | undefined ? ["Trinidad and Tobago", "TT", "1868", "+.(...)...-....", "🇹🇹", "Regions", ["Couva-Tabaquite-Talparo", "Diego Martin", "Eastern Tobago", "Penal-Debe", "Princes Town", "Rio Claro-Mayaro", "San Fernando", "Sangre Grande", "San Juan-Laventille", "Siparia", "Tunapuna-Piarco", "Port of Spain", "Point Fortin", "Chaguanas", "Borough of Arima", "Borough of Point Fortin", "Borough of Chaguanas", "Borough of Couva-Tabaquite-Talparo", "Borough of Diego Martin", "Borough of Penal-Debe", "Borough of Princes Town", "Borough of Rio Claro-Mayaro", "Borough of San Fernando", "Borough of Sangre Grande", "Borough of San Juan-Laventille", "Borough of   Siparia", "Borough of Tunapuna-Piarco"]] : never,
  R extends "TV" | undefined ? ["Tuvalu", "TV", "688", "+...-.....", "🇹🇻", "Islands", ["Funafuti", "Nanumea", "Nui", "Nukufetau", "Nukulaelae", "Vaitupu"]] : never,
  R extends "UA" | undefined ? ["Ukraine (Україна)", "UA", "380", "+...(..)...-..-..", "🇺🇦", "Oblasts", ["Cherkasy Oblast", "Chernihiv Oblast", "Chernivtsi Oblast", "Dnipropetrovsk Oblast", "Donetsk Oblast", "Ivano-Frankivsk Oblast", "Kharkiv Oblast", "Kherson Oblast", "Khmelnytskyi Oblast", "Kiev Oblast", "Kirovohrad Oblast", "Luhansk Oblast", "Lviv Oblast", "Mykolaiv Oblast", "Odessa Oblast", "Poltava Oblast", "Rivne Oblast", "Sumy Oblast", "Ternopil Oblast", "Vinnytsia Oblast", "Volyn Oblast", "Zakarpattia Oblast", "Zaporizhzhia Oblast", "Zhytomyr Oblast", "Autonomous Republic of Crimea"]] : never,
  R extends "UG" | undefined ? ["Uganda", "UG", "256", "+...(...)...-...", "🇺🇬", "Regions", ["Central Region", "Eastern Region", "Northern Region", "Western Region"]] : never,
  R extends "UM" | undefined ? ["United States Minor Outlying Islands", "UM", "1", "", "🇺🇲", "Territories", ["Baker Island", "Howland Island", "Jarvis Island", "Johnston Atoll", "Kingman Reef", "Midway Atoll", "Navassa Island", "Palmyra Atoll", "Wake Island"], 2] : never,
  R extends "US" | undefined ? ["United States", "US", "1", "+. (...) ...-....", "🇺🇸", "States", ["Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", "Delaware", "Florida", "Georgia", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland", "Massachusetts", "Michigan", "Minnesota", "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire", "New Jersey", "New Mexico", "New York", "North Carolina", "North Dakota", "Ohio", "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island", "South Carolina", "South Dakota", "Tennessee", "Texas", "Utah", "Vermont", "Virginia", "Washington", "West Virginia", "Wisconsin", "Wyoming"], 0] : never,
  R extends "UY" | undefined ? ["Uruguay", "UY", "598", "+...-.-...-..-..", "🇺🇾", "Departments", ["Artigas", "Canelones", "Cerro Largo", "Colonia", "Durazno", "Flores", "Florida", "Lavalleja", "Maldonado", "Montevideo", "Paysandú", "Río Negro", "Rivera", "Rocha", "Salto", "San José", "Soriano", "Tacuarembó", "Treinta y Tres"]] : never,
  R extends "UZ" | undefined ? ["Uzbekistan (Oʻzbekiston)", "UZ", "998", "+...-..-...-....", "🇺🇿", "Regions", ["Andijan", "Bukhara", "Fergana", "Jizzakh", "Karakalpakstan", "Namangan", "Navoiy", "Qashqadaryo", "Samarqand", "Sirdaryo", "Surxondaryo", "Tashkent", "Tashkent City", "Xorazm"]] : never,
  R extends "VA" | undefined ? ["Vatican City (Città del Vaticano)", "VA", "39", "+.. .. .... ....", "🇻🇦", 1] : never,
  R extends "VC" | undefined ? ["Saint Vincent and the Grenadines", "VC", "1784", "+.(...)...-....", "🇻🇨", "Parishes", ["Charlotte", "Grenadines", "Saint Andrew", "Saint David", "Saint George", "Saint Patrick"]] : never,
  R extends "VE" | undefined ? ["Venezuela", "VE", "58", "+..(...)...-....", "🇻🇪", "States", ["Amazonas", "Anzoátegui", "Apure", "Aragua", "Barinas", "Bolívar", "Carabobo", "Cojedes", "Delta Amacuro", "Falcón", "Guárico", "Lara", "Mérida", "Miranda", "Monagas", "Nueva Esparta", "Portuguesa", "Sucre", "Táchira", "Trujillo", "Vargas", "Yaracuy", "Zulia"]] : never,
  R extends "VG" | undefined ? ["British Virgin Islands", "VG", "1284", "+.(...)...-....", "🇻🇬", "Districts", ["Tortola", "Virgin Gorda", "Anegada", "Jost Van Dyke"]] : never,
  R extends "VI" | undefined ? ["U.S. Virgin Islands", "VI", "1340", "+.(...)...-....", "🇻🇮", "Districts", ["Saint Croix", "Saint John", "Saint Thomas"]] : never,
  R extends "VN" | undefined ? ["Vietnam (Việt Nam)", "VN", "84", "+..-..-....-...", "🇻🇳", "Regions", ["Hanoi", "Ho Chi Minh City", "Da Nang", "Hai Phong", "Can Tho", "Bien Hoa", "Hue", "Nha Trang", "Buon Ma Thuot", "Quy Nhon", "Vung Tau", "Nam Dinh", "Phan Thiet", "Long Xuyen", "Ha Long", "Thai Nguyen", "Thanh Hoa", "Rach Gia", "Cam Ranh", "Vinh", "My Tho", "Da Lat", "Bac Lieu", "Bien Hoa"]] : never,
  R extends "VU" | undefined ? ["Vanuatu", "VU", "678", "+...-.....", "🇻🇺", "Provinces", ["Malampa", "Penama", "Sanma", "Shefa", "Tafea", "Torba"]] : never,
  R extends "WF" | undefined ? ["Wallis and Futuna", "WF", "681", "+...-..-....", "🇼🇫", "Kingdoms", ["Uvea", "Sigave", "Alo"]] : never,
  R extends "WS" | undefined ? ["Samoa", "WS", "685", "+...-..-....", "🇼🇸", "Districts", ["A'ana", "Aiga-i-le-Tai", "Atua", "Fa'asaleleaga", "Gaga'emauga", "Gaga'ifomauga", "Palauli", "Satupa'itea", "Tuamasaga", "Va'a-o-Fonoti", "Vaisigano"]] : never,
  R extends "XK" | undefined ? ["Kosovo", "XK", "383", "", "🇽🇰", "Districts", ["District of Pristina", "District of Mitrovica", "District of Peja", "District of Prizren", "District of Gjilan", "District of Ferizaj"]] : never,
  R extends "YE" | undefined ? ["Yemen (‫اليمن‬‎)", "YE", "967", "+...-.-...-...", "🇾🇪", "Governorates", ["Sana'a", "Aden", "Taiz", "Al Hudaydah", "Ibb", "Dhamar", "Al Mukalla", "Hajjah", "Amran", "Saada", "Saywun", "Zinjibar", "Al Bayda", "Lahij", "Marib", "Al Ghaydah", "Al Mahwit", "Al Hazm", "Ataq", "Al Jawf", "Sadah", "Shabwah", "Al Dhalea", "Rida", "Al Mahrah"]] : never,
  R extends "YT" | undefined ? ["Mayotte", "YT", "262", "", "🇾🇹", ["Cantons", "Communes"], { "Cantons": ["Acoua", "Bandraboua", "Bandrélé", "Bouéni", "Chiconi", "Chirongui", "Dembeni", "Dzaoudzi", "Kani-Kéli", "Koungou", "Mamoudzou-1", "Mamoudzou-2", "Mamoudzou-3", "Mamoudzou-4", "Mtsamboro", "M'Tsangamouji", "Ouangani", "Pamandzi", "Sada", "Tsingoni"], "Communes": ["Acoua", "Bandraboua", "Bandrélé", "Bouéni", "Chiconi", "Chirongui", "Dembeni", "Dzaoudzi", "Kani-Kéli", "Koungou", "Mamoudzou", "Mtsamboro", "M'Tsangamouji", "Ouangani", "Pamandzi", "Sada", "Tsingoni"] }] : never,
  R extends "ZA" | undefined ? ["South Africa", "ZA", "27", "+..-..-...-....", "🇿🇦", "Provinces", ["Eastern Cape", "Free State", "Gauteng", "KwaZulu-Natal", "Limpopo", "Mpumalanga", "North West", "Northern Cape", "Western Cape"]] : never,
  R extends "ZM" | undefined ? ["Zambia", "ZM", "260", "+...-..-...-....", "🇿🇲", "Provinces", ["Lusaka", "Copperbelt", "Central", "Eastern", "Luapula", "Northern", "North-Western", "Southern", "Western"]] : never,
  R extends "ZW" | undefined ? ["Zimbabwe", "ZW", "263", "+...-.-......", "🇿🇼", "Provinces", ["Harare", "Bulawayo", "Manicaland", "Mashonaland Central", "Mashonaland East", "Mashonaland West", "Masvingo", "Matabeleland North", "Matabeleland South", "Midlands"]] : never
];

export type CountryFlags = ["🇦🇫", "🇦🇽", "🇦🇱", "🇩🇿", "🇦🇸", "🇦🇩", "🇦🇴", "🇦🇮", "🇦🇶", "🇦🇬", "🇦🇷", "🇦🇲", "🇦🇼", "🇦🇺", "🇦🇹", "🇦🇿", "🇧🇸", "🇧🇭", "🇧🇩", "🇧🇧", "🇧🇾", "🇧🇪", "🇧🇿", "🇧🇯", "🇧🇲", "🇧🇹", "🇧🇴", "🇧🇦", "🇧🇼", "🇧🇻", "🇨🇦", "🇧🇷", "🇮🇴", "🇻🇬", "🇧🇳", "🇧🇬", "🇧🇫", "🇧🇮", "🇰🇭", "🇨🇲", "🇹🇩", "🇨🇱", "🇨🇳", "🇨🇻", "🇧🇶", "🇰🇾", "🇨🇫", "🇨🇽", "🇨🇨", "🇨🇴", "🇰🇲", "🇨🇩", "🇨🇬", "🇨🇰", "🇨🇷", "🇨🇮", "🇭🇷", "🇨🇺", "🇨🇼", "🇨🇾", "🇨🇿", "🇩🇰", "🇩🇯", "🇩🇲", "🇩🇴", "🇪🇨", "🇪🇬", "🇸🇻", "🇬🇶", "🇪🇷", "🇪🇪", "🇪🇹", "🇫🇰", "🇫🇴", "🇫🇯", "🇫🇮", "🇫🇷", "🇬🇫", "🇵🇫", "🇹🇫", "🇬🇦", "🇬🇲", "🇬🇪", "🇩🇪", "🇬🇭", "🇬🇮", "🇬🇷", "🇬🇱", "🇬🇩", "🇬🇵", "🇬🇺", "🇬🇹", "🇬🇬", "🇬🇳", "🇬🇼", "🇬🇾", "🇭🇹", "🇭🇲", "🇭🇳", "🇰🇿", "🇮🇷", "🇮🇶", "🇮🇪", "🇮🇲", "🇮🇱", "🇭🇰", "🇭🇺", "🇮🇸", "🇮🇳", "🇮🇩", "🇮🇹", "🇯🇲", "🇯🇵", "🇯🇪", "🇯🇴", "🇰🇪", "🇰🇮", "🇽🇰", "🇰🇼", "🇰🇬", "🇱🇦", "🇱🇻", "🇱🇧", "🇱🇸", "🇱🇷", "🇱🇾", "🇱🇮", "🇱🇹", "🇱🇺", "🇲🇴", "🇲🇰", "🇲🇬", "🇲🇼", "🇲🇾", "🇲🇻", "🇲🇱", "🇲🇹", "🇲🇭", "🇲🇵", "🇳🇴", "🇵🇰", "🇲🇪", "🇲🇶", "🇲🇷", "🇲🇺", "🇾🇹", "🇲🇽", "🇫🇲", "🇲🇩", "🇲🇨", "🇲🇳", "🇰🇵", "🇴🇲", "🇲🇸", "🇲🇦", "🇲🇿", "🇲🇲", "🇳🇦", "🇳🇷", "🇳🇵", "🇳🇱", "🇳🇨", "🇳🇿", "🇳🇮", "🇳🇪", "🇳🇬", "🇳🇺", "🇳🇫", "🇵🇼", "🇵🇸", "🇵🇦", "🇵🇬", "🇵🇾", "🇷🇼", "🇧🇱", "🇰🇳", "🇵🇪", "🇵🇭", "🇵🇳", "🇷🇺", "🇶🇦", "🇷🇪", "🇵🇱", "🇵🇹", "🇵🇷", "🇷🇴", "🇱🇨", "🇲🇫", "🇵🇲", "🇻🇨", "🇼🇸", "🇸🇲", "🇸🇹", "🇸🇦", "🇸🇳", "🇷🇸", "🇸🇨", "🇸🇱", "🇸🇬", "🇸🇽", "🇸🇰", "🇸🇮", "🇸🇧", "🇸🇴", "🇿🇦", "🇬🇸", "🇹🇬", "🇹🇰", "🇹🇳", "🇹🇭", "🇹🇱", "🇹🇴", "🇹🇹", "🇹🇷", "🇹🇲", "🇹🇨", "🇹🇻", "🇻🇮", "🇺🇬", "🇺🇦", "🇦🇪", "🇬🇧", "🇺🇸", "🇺🇲", "🇺🇾", "🇺🇿", "🇻🇺", "🇻🇦", "🇻🇪", "🇻🇳", "🇼🇫", "🇪🇭", "🇾🇪", "🇿🇲", "🇿🇼"];

/**
 * @type CountryArray<R extends RegionCode> | undefined - Get the array of countries for a region
 */
export type CountryArray<R extends RegionCode> = CountriesArray<R>[number];
/**
 * @type CountryName<R extends RegionCode> - Get the name of a country for a region
 */
export type CountryName<R extends RegionCode = RegionCode> = CountryArray<R>[0];
/**
 * @type RegionCode - Get the code of a country for a region
 */
export type RegionCode = RegionCodes[number];
/**
 * @type DialingCode<R extends RegionCode> - Get the code of a country for a region
 */
export type DialingCode<R extends RegionCode = RegionCode> = CountryArray<R>[2];
/**
 * @type PhoneFormat<R extends RegionCode> - Get the format of a country for a region
 */
export type PhoneFormat<R extends RegionCode = RegionCode> = CountryArray<R>[3] extends ("" | undefined) ? never : Exclude<CountryArray<R>[3], ("" | undefined)>;
/**
 * @type CountryFlag<R extends RegionCode> - Get the flag of a country for a region
 */
export type CountryFlag<R extends RegionCode = RegionCode> = CountryArray<R>[4];
/**
 * @type ZoneType<R extends RegionCode> - Get the type of a region
 */
export type ZoneType<R extends RegionCode = RegionCode> = CountryArray<R>[5] extends 1 | undefined ? never : Exclude<CountryArray<R>[5], 1 | undefined>;
/**
 * @type CountryZones<R extends RegionCode> - Get the zones of a region
 */
export type CountryZones<R extends RegionCode = RegionCode> = CountryArray<R>[6] extends undefined ? never : Exclude<CountryArray<R>[6], undefined>;
/**
 * @type DialPriority<R extends RegionCode> - Get the zones of a region
 */
export type DialPriority<R extends RegionCode = RegionCode> = R extends "VA" ? 1 : CountryArray<R>[7] extends 0 | 1 | 2 | 3 ? CountryArray<R>[7] : 0;
/**
 * @type AreaCodes<R extends RegionCode> - Get the zones of a region
 */
export type AreaCodes<R extends RegionCode = RegionCode> = CountryArray<R>[8] extends undefined ? never : Exclude<CountryArray<R>[8], undefined>;
/**
 * @type FormOf<X, Pos extends 'First' | 'Rest' = 'First'> - Get the first or rest of a
 * string separated by a space
 */
export type NameHolder = `${string} (${string}) (${string})` | `${string} (${string}) ${string}` | `${string} (${string})`;
export type ForeignLocal<
  R extends RegionCode,
  OF extends 'Local' | 'Foreign' | 'Contextual' = 'Local',
  F extends
    (OF extends 'Contextual' | 'Local' ? 'LCF' | 'LCN' : never) |
    (OF extends 'Foreign' | 'Local' ? 'LCF' | 'LF' : never) | undefined = undefined
> = CountryName<R> extends MultiName<CountryName<R>>
  ? OF extends 'Local'
    ? CountryName<R> extends `${infer Lcl} (${infer Ctx}) (${infer Frgn})`
      ? F extends 'LCF' | undefined
        ? Lcl
      : never
    : CountryName<R> extends `${infer Lcl} (${infer Frgn})`
      ? F extends 'LF' | undefined
        ? Lcl
      : never
    : CountryName<R> extends `${infer Lcl} (${infer Ctx}) ${infer Name}`
      ? F extends 'LCN' | undefined
        ? `${Lcl} ${Name}`
      : never
    : never
  : OF extends 'Contextual'
    ? CountryName<R> extends `${infer Lcl} (${infer Ctx}) (${infer Frgn})`
      ? F extends 'LCF' | undefined
        ? Ctx
      : never
    : CountryName<R> extends `${infer Lcl} (${infer Ctx}) ${infer Name}`
      ? F extends 'LCN' | undefined
        ? `${Ctx} ${Name}`
      : never
    : never
  : OF extends 'Foreign'
    ? CountryName<R> extends `${infer Lcl} (${infer Ctx}) (${infer Frgn})`
      ? F extends 'LCF' | undefined
        ? Frgn
      : never
    : CountryName<R> extends `${infer Lcl} (${infer Frgn})`
      ? F extends 'LF' | undefined
        ? Frgn
      : never
    : never
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
export type HasProperty<R extends RegionCode, K extends keyof Countries[R]> = Countries[R][K] extends CountryArray<R>[number] ? Countries[R][K] : never;
export type CountriesData = {
  [R in RegionCode]: {
    [P in keyof CountryPrototype<R> as CountryPrototype<R>[P] extends never ? never : P]: CountryPrototype<R>[P];
  }
};
export type FilterNestedNever<T> = {
  [K in keyof T]: {
    [P in keyof T[K]as T[K][P] extends never ? never : P]: T[K][P];
  }
};
export type CountryPrototype<R extends RegionCode = RegionCode> = FilterNever<{
  name: CountryArray<R>[0] extends CountryName<R> ? CountryArray<R>[0] : never;
  regionCode: CountryArray<R>[1] extends R ? CountryArray<R>[1] : never;
  dialCode: CountryArray<R>[2] extends DialingCode<R> ? CountryArray<R>[2] : never;
  format: CountryArray<R>[3] extends PhoneFormat<R> ? CountryArray<R>[3] : never;
  flag: CountryArray<R>[4] extends CountryFlag<R> ? CountryArray<R>[4] : never;
  zoneTypes: CountryArray<R>[5] extends ZoneType<R> ? CountryArray<R>[5] : never;
  zones: CountryArray<R>[6] extends CountryZones<R> ? CountryArray<R>[6] : never;
  priority: R extends "VA" ? 1 : CountryArray<R>[7] extends DialPriority<R> ? CountryArray<R>[7] : 0;
  areaCodes: CountryArray<R>[8] extends AreaCodes<R> ? CountryArray<R>[8] : never;
  localName: ForeignLocal<R, 'Local'>;
  foreignName: ForeignLocal<R, 'Foreign'>;
  contextualName: ForeignLocal<R, 'Contextual'>;
}>;
export type Country<R extends RegionCode = RegionCode> = CountriesData[R];
export type CountryData = {
  [R in RegionCode]: Country<R>;
}
//___=============================>              <============================___\\
//___|| ==================== ||      INTERFACES      || =================== ||___\\
//___=============================>              <============================___\\
type MappedArray = {
  [R in RegionCode]: CountryArray<R>;
}
interface Countries extends CountryData {
  <R extends RegionCode>(regionCode?: R): typeof regionCode extends undefined ? CountriesArray : CountryArray<R>;
  array: CountriesArray;
  arr: {
    [K in RegionCode]: CountryArray<K>
  };
}
type ExtractName = <
  O extends ForeignLocal<R, T, F>,
  R extends RegionCode,
  T extends 'Local' | 'Contextual' | 'Foreign',
  F extends
    (T extends "Local" | "Contextual" ? "LCF" | "LCN" : never) |
    (T extends "Local" | "Foreign" ? "LCF" | "LF" : never) | undefined
>(region: R, type: T, form: F) => O;

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
