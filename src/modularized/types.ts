/**
 * @file types.ts
 * @description
 * @author Matthew Allen Rackley
 * @copyright [Matthew Rackley's Github](https://www.github.com/matthewrackley "Matthew Rackley on github.com")
 */

  /**
   * @type AllCountries<R extends RegionCode> - All countries data.
   * @template {R extends RegionCode}
   * @description All countries data.
   * This is the main type used for indexing all of our data
   */
  export type AllCountries<R extends RegionCode = RegionCode> = [
    R extends "AF" ? ["Afghanistan (‫افغانستان‬‎)", R, "93", "+..-..-...-....", "Regions", ['Badakhshan', 'Badghis', 'Baghlan', 'Balkh', 'Bamyan', 'Daykundi', 'Farah', 'Faryab', 'Ghazni', 'Ghor', 'Helmand', 'Herat', 'Jowzjan', 'Kabul', 'Kandahar', 'Kapisa', 'Khost', 'Kunar', 'Kunduz Province', 'Laghman', 'Logar', 'Nangarhar', 'Nimruz', 'Nuristan', 'Paktia', 'Paktika', 'Panjshir', 'Parwan', 'Samangan', 'Sar-e Pol', 'Takhar', 'Urozgan', 'Zabul'], '🇦🇫'] : never,
    R extends "AX" ? ["Åland Islands", R, "358", "", "Municipalities", ['Berat County', 'Dibër County', 'Durrës County', 'Elbasan County', 'Fier County', 'Gjirokastër County', 'Korçë County', 'Kukës County', 'Lezhë County', 'Shkodër County', 'Tirana County', 'Vlorë County'], '🇦🇽'] : never,
    R extends "AL" ? ["Albania (Shqipëri)", R, "355", "+...(...)...-...", "Counties", ["Berat", "Dibër", "Durrës", "Elbasan", "Fier", "Gjirokastër", "Korçë", "Kukës", "Lezhë", "Shkodër", "Tirana", "Vlorë"], '🇦🇱'] : never,
    R extends "DZ" ? ["Algeria (‫الجزائر‬‎)", R, "213", "+...-..-...-....", "Regions", ["Adrar", "Chlef", "Laghouat", "Oum El Bouaghi", "Batna", "Béjaïa", "Biskra", "Béchar", "Blida", "Bouira", "Tamanrasset", "Tébessa", "Tlemcen", "Tiaret", "Tizi Ouzou", "Alger", "Djelfa", "Jijel", "Sétif", "Saïda", "Skikda", "Sidi Bel Abbès", "Annaba", "Guelma", "Constantine", "Médéa", "Mostaganem", "M'Sila", "Mascara", "Ouargla", "Oran", "El Bayadh", "Illizi", "Bordj Bou Arréridj", "Boumerdès", "El Tarf", "Tindouf", "Tissemsilt", "El Oued", "Khenchela", "Souk Ahras", "Tipaza", "Mila", "Aïn Defla", "Naâma", "Aïn Témouchent", "Ghardaïa", "Relizane"], '🇩🇿'] : never,
    R extends "AS" ? ["American Samoa", R, "1684", "+.(...)...-....", "Districts", ["Eastern District", "Manu'a District", "Rose Island", "Swains Island", "Western District"], '🇦🇸'] : never,
    R extends "AD" ? ["Andorra", R, "376", "+...-...-...", "Regions", ["Andorra la Vella", "Canillo", "Encamp", "Escaldes-Engordany", "La Massana", "Ordino", "Sant Julià de Lòria"], "🇦🇩"] : never,
    R extends "AO" ? ["Angola", R, "244", "+...(...)...-...", "Provinces", ["Bengo", "Benguela", "Bié", "Cabinda", "Cuando Cubango", "Cuanza Norte", "Cuanza Sul", "Cunene", "Huambo", "Huíla", "Luanda", "Lunda Norte", "Lunda Sul", "Malanje", "Moxico", "Namibe", "Uíge", "Zaire"], "🇦🇴"] : never,
    R extends "AI" ? ["Anguilla", R, "1264", "+.(...)...-....", "Districts", ["Anguilla Island", "Blowing Point", "East End", "George Hill", "Island Harbour", "North Hill", "North Side", "Sandy Ground", "Sandy Hill", "South Hill", "Stoney Ground", "The Farrington", "The Quarter", "The Valley", "West End"], "🇦🇮"] : never,
    R extends "AQ" ? ["Antarctica", R, "672", "", "🇦🇶"] : never,
    R extends "AG" ? ["Antigua and Barbuda", R, "1268", "+.(...)...-....", "Parishes", ["Saint George", "Saint John", "Saint Mary", "Saint Paul", "Saint Peter", "Saint Philip"], "🇦🇬"] : never,
    R extends "AR" ? ["Argentina", R, "54", "+..(...)...-....", "Regions", ["Buenos Aires", "Catamarca", "Chaco", "Chubut", "Córdoba", "Corrientes", "Entre Ríos", "Formosa", "Jujuy", "La Pampa", "La Rioja", "Mendoza", "Misiones", "Neuquén", "Río Negro", "Salta", "San Juan", "San Luis", "Santa Cruz", "Santa Fe", "Santiago del Estero", "Tierra del Fuego", "Tucumán"], "🇦🇷"] : never,
    R extends "AM" ? ["Armenia (Հայաստան)", R, "374", "+...-..-...-...", "Provinces", ["Aragatsotn", "Ararat", "Armavir", "Gegharkunik", "Kotayk", "Lori", "Shirak", "Syunik", "Tavush", "Vayots Dzor", "Yerevan"], "🇦🇲"] : never,
    R extends "AW" ? ["Aruba", R, "297", "+...-...-....", "🇦🇼"] : never,
    R extends "AU" ? ["Australia", R, "61", "+.. ... ... ...", ["States", "Territories"], { "States": ["New South Wales", "Queensland", "South Australia", "Tasmania", "Victoria", "Western Australia"], "Territories": ["Australian Capital Territory", "Northern Territory"] }, "🇦🇺"] : never,
    R extends "AT" ? ["Austria (Österreich)", R, "43", "+..(...)...-....", "States", ["Burgenland", "Carinthia", "Lower Austria", "Upper Austria", "Salzburg", "Styria", "Tyrol", "Vorarlberg", "Vienna"], "🇦🇹"] : never,
    R extends "AZ" ? ["Azerbaijan (Azərbaycan)", R, "994", "+...-..-...-..-..", "Districts", ["Absheron", "Agdam", "Agdash", "Agstafa", "Agsu", "Astara", "Baku", "Balakan", "Barda", "Beylagan", "Bilasuvar", "Dashkasan", "Fizuli", "Ganja", "Gobustan", "Goranboy", "Goychay", "Goygol", "Hajigabul", "Imishli", "Ismailli", "Jabrayil", "Jalilabad", "Kalbajar", "Kurdamir", "Lachin", "Lankaran", "Lankaran", "Lerik", "Masally", "Mingachevir", "Naftalan", "Nakhchivan", "Neftchala", "Oghuz", "Ordubad", "Qabala", "Qakh", "Qazakh", "Quba", "Qubadli", "Qusar", "Saatly", "Sabirabad", "Salyan", "Shabran", "Shaki", "Shamakhi", "Shamkir", "Shirvan", "Shusha", "Siazan", "Sumgayit", "Tartar", "Tovuz", "Ujar", "Yardymli", "Yevlakh", "Zangilan", "Zaqatala", "Zardab"], "🇦🇿"] : never,
    R extends "BS" ? ["Bahamas", R, "1242", "+.(...)...-....", "Regions", ["Acklins", "Berry Islands", "Bimini", "Black Point", "Cat Island", "Central Abaco", "Central Andros", "Central Eleuthera", "City of Freeport", "Crooked Island and Long Cay", "East Grand Bahama", "Exuma", "Grand Cay", "Harbour Island", "Hope Town", "Inagua", "Long Island", "Mangrove Cay", "Mayaguana", "Moore's Island", "North Abaco", "North Andros", "North Eleuthera", "Ragged Island", "Rum Cay", "San Salvador", "South Abaco", "South Andros", "South Eleuthera", "Spanish Wells", "West Grand Bahama"], "🇧🇸"] : never,
    R extends "BH" ? ["Bahrain (‫البحرين‬‎)", R, "973", "+...-....-....", "Governorates", ["Capital Governorate", "Muharraq Governorate", "Northern Governorate", "Southern Governorate"], "🇧🇭"] : never,
    R extends "BD" ? ["Bangladesh (বাংলাদেশ)", R, "880", "+...-..-...-...", "Districts", ["Barisal", "Chittagong", "Dhaka", "Khulna", "Mymensingh", "Rajshahi", "Rangpur", "Sylhet"], "🇧🇩"] : never,
    R extends "BB" ? ["Barbados", R, "1246", "+.(...)...-....", "Regions", ["Christ Church", "Saint Andrew", "Saint George", "Saint James", "Saint John", "Saint Joseph", "Saint Lucy", "Saint Michael", "Saint Peter", "Saint Philip", "Saint Thomas"], "🇧🇧"] : never,
    R extends "BY" ? ["Belarus (Беларусь)", R, "375", "+...(..)...-..-..", "Regions", ["Brest Region", "Gomel Region", "Grodno Region", "Minsk Region", "Mogilev Region", "Vitebsk Region"], "🇧🇾"] : never,
    R extends "BE" ? ["Belgium (België)", R, "32", "+.. ... .. .. ..", "States", ["Brussels", "Flemish Brabant", "Walloon Brabant", "Antwerp", "East Flanders", "West Flanders", "Hainaut", "Liège", "Limburg", "Luxembourg", "Namur"], "🇧🇪"] : never,
    R extends "BZ" ? ["Belize", R, "501", "+...-...-....", "Districts", ["Belize District", "Cayo District", "Corozal District", "Orange Walk District", "Stann Creek District", "Toledo District"], "🇧🇿"] : never,
    R extends "BJ" ? ["Benin (Bénin)", R, "229", "+...-..-..-....", "Departments", ["Alibori", "Atakora", "Atlantique", "Borgou", "Collines", "Donga", "Kouffo", "Littoral", "Mono", "Ouémé", "Plateau", "Zou"], "🇧🇯"] : never,
    R extends "BM" ? ["Bermuda", R, "1441", "+.(...)...-....", ["Parishes", "Municipalities"], { "Parishes": ["Devonshire", "Hamilton", "Paget", "Pembroke", "Sandys", "Smith's", "Southampton", "St. George's", "Warwick"], "Municipalities": ["Hamilton", "St. George's"] }, "🇧🇲"] : never,
    R extends "BT" ? ["Bhutan (འབྲུག)", R, "975", "+...-.-...-...", "Regions", ["Bumthang", "Chukha", "Dagana", "Gasa", "Haa", "Lhuntse", "Mongar", "Paro", "Pemagatshel", "Punakha", "Samdrup Jongkhar", "Samtse", "Sarpang", "Thimphu", "Trashigang", "Trashiyangtse", "Trongsa", "Tsirang", "Wangdue Phodrang", "Zhemgang"], "🇧🇹"] : never,
    R extends "BO" ? ["Bolivia", R, "591", "+...-.-...-....", "States", ["Chuquisaca", "Cochabamba", "Beni", "La Paz", "Oruro", "Pando", "Potosí", "Santa Cruz", "Tarija"], "🇧🇴"] : never,
    R extends "BA" ? ["Bosnia and Herzegovina (Босна и Херцеговина)", R, "387", "+...-..-....", "Regions", ["Brčko District", "Federation of Bosnia and Herzegovina", "Republika Srpska"], "🇧🇦"] : never,
    R extends "BW" ? ["Botswana", R, "267", "+...-..-...-...", "Districts", ["Central District", "Ghanzi District", "Kgalagadi District", "Kgatleng District", "Kweneng District", "North-East District", "North-West District", "South-East District", "Southern District"], "🇧🇼"] : never,
    R extends "BV" ? ["Bouvet Island", R, "47", "", "🇧🇻"] : never,
    R extends "CA" ? ["Canada", R, "1", "+. (...) ...-....", ["Territories", "Provinces"], { "Territories": ["Northwest Territories", "Nunavut", "Yukon"], "Provinces": ["Alberta", "British Columbia", "Manitoba", "New Brunswick", "Newfoundland and Labrador", "Nova Scotia", "Ontario", "Prince Edward Island", "Quebec", "Saskatchewan"] }, "🇨🇦", 1, ["204", "236", "249", "250", "289", "306", "343", "365", "387", "403", "416", "418", "431", "437", "438", "450", "506", "514", "519", "548", "579", "581", "587", "604", "613", "639", "647", "672", "705", "709", "742", "778", "780", "782", "807", "819", "825", "867", "873", "902", "905"]] : never,
    R extends "BR" ? ["Brazil (Brasil)", R, "55", "+..-..-....-....", "Regions", ["Acre", "Alagoas", "Amapá", "Amazonas", "Bahia", "Ceará", "Distrito Federal", "Espírito Santo", "Goiás", "Maranhão", "Mato Grosso", "Mato Grosso do Sul", "Minas Gerais", "Pará", "Paraíba", "Paraná", "Pernambuco", "Piauí", "Rio de Janeiro", "Rio Grande do Norte", "Rio Grande do Sul", "Rondônia", "Roraima", "Santa Catarina", "São Paulo", "Sergipe", "Tocantins"], "🇧🇷"] : never,
    R extends "IO" ? ["British Indian Ocean Territory", R, "246", "+...-...-....", "🇮🇴"] : never,
    R extends "VG" ? ["British Virgin Islands", R, "1284", "+.(...)...-....", "Districts", ["Tortola", "Virgin Gorda", "Anegada", "Jost Van Dyke"], "🇻🇬"] : never,
    R extends "BN" ? ["Brunei", R, "673", "+...-...-....", "Districts", ["Belait", "Brunei-Muara", "Temburong", "Tutong"], "🇧🇳"] : never,
    R extends "BG" ? ["Bulgaria (България)", R, "359", "+...(...)...-...", "States", ["Blagoevgrad", "Burgas", "Dobrich", "Gabrovo", "Haskovo", "Kardzhali", "Kyustendil", "Lovech", "Montana", "Pazardzhik", "Pernik", "Pleven", "Plovdiv", "Razgrad", "Ruse", "Shumen", "Silistra", "Sliven", "Smolyan", "Sofia", "Stara Zagora", "Targovishte", "Varna", "Veliko Tarnovo", "Vidin", "Vratsa", "Yambol"], "🇧🇬"] : never,
    R extends "BF" ? ["Burkina Faso", R, "226", "+...-..-..-....", "Provinces", ["Balé", "Bam", "Banwa", "Bazèga", "Bougouriba", "Boulgou", "Boulkiemdé", "Comoé", "Ganzourgou", "Gnagna", "Gourma", "Houet", "Ioba", "Kadiogo", "Kénédougou", "Komondjari", "Kompienga", "Kossi", "Koulpélogo", "Kouritenga", "Kourwéogo", "Léraba", "Loroum", "Mouhoun", "Namentenga", "Nahouri", "Nayala", "Noumbiel", "Oubritenga", "Oudalan", "Passoré", "Poni", "Sanguié", "Sanmatenga", "Séno", "Sissili", "Soum", "Sourou", "Tapoa", "Tui", "Yagha", "Yatenga", "Ziro", "Zondoma", "Zoundwéogo"], "🇧🇫"] : never,
    R extends "BI" ? ["Burundi (Uburundi)", R, "257", "+...-..-..-....", "Provinces", ["Bubanza", "Bujumbura Mairie", "Bujumbura Rural", "Bururi", "Cankuzo", "Cibitoke", "Gitega", "Karuzi", "Kayanza", "Kirundo", "Makamba", "Muramvya", "Muyinga", "Mwaro", "Ngozi", "Rumonge", "Rutana", "Ruyigi"], "🇧🇮"] : never,
    R extends "KH" ? ["Cambodia (កម្ពុជា)", R, "855", "+...-..-...-...", "Provinces", ["Banteay Meanchey", "Battambang", "Kampong Cham", "Kampong Chhnang", "Kampong Speu", "Kampong Thom", "Kampot", "Kandal", "Kep", "Koh Kong", "Kratie", "Mondulkiri", "Oddar Meanchey", "Pailin", "Phnom Penh", "Preah Sihanouk", "Preah Vihear", "Pursat", "Ratanakiri", "Siem Reap", "Stung Treng", "Svay Rieng", "Takéo", "Tboung Khmum"], "🇰🇭"] : never,
    R extends "CM" ? ["Cameroon (Cameroun)", R, "237", "+...-....-....", "Regions", ["Adamaoua", "Centre", "East", "Far North", "Littoral", "North", "Northwest", "South", "Southwest", "West"], "🇨🇲"] : never,
    R extends "TD" ? ["Chad (Tchad)", R, "235", "+...-..-..-..-..", "Regions", ["Batha", "Borkou", "Ennedi", "Ennedi-Est", "Ennedi-Ouest", "Guéra", "Hadjer-Lamis", "Kanem", "Lac", "Logone Occidental", "Logone Oriental", "Mandoul", "Mayo-Kebbi Est", "Mayo-Kebbi Ouest", "Moyen-Chari", "N'Djamena", "Ouaddaï", "Salamat", "Sila", "Tandjilé", "Tibesti", "Wadi Fira"], "🇹🇩"] : never,
    R extends "CL" ? ["Chile", R, "56", "+..-.-....-....", "States", ["Arica y Parinacota", "Tarapacá", "Antofagasta", "Atacama", "Coquimbo", "Valparaíso", "Región Metropolitana de Santiago", "Libertador General Bernardo O'Higgins", "Maule", "Ñuble", "Biobío", "La Araucanía", "Los Ríos", "Los Lagos", "Aysén", "Magallanes y de la Antártica Chilena"], "🇨🇱"] : never,
    R extends "CN" ? ["China (中国)", R, "86", "+.. ..-........", ["Provinces", "Municipalities", "Autonomous Regions", "Special Administrative Regions"], { "Provinces": ["Anhui", "Fujian", "Gansu", "Guangdong", "Guizhou", "Hainan", "Hebei", "Heilongjiang", "Henan", "Hubei", "Hunan", "Jiangsu", "Jiangxi", "Jilin", "Liaoning", "Qinghai", "Shaanxi", "Shandong", "Shanxi", "Sichuan", "Yunnan", "Zhejiang"], "Municipalities": ["Beijing", "Chongqing", "Shanghai", "Tianjin"], "Autonomous Regions": ["Guangxi", "Inner Mongolia", "Ningxia", "Tibet", "Xinjiang"], "Special Administrative Regions": ["Hong Kong", "Macau"] }, "🇨🇳"] : never,
    R extends "CV" ? ["Cape Verde (Kabu Verdi)", R, "238", "+...(...)..-..", "Regions", ["Barlavento Islands", "Sotavento Islands"], "🇨🇻"] : never,
    R extends "BQ" ? ["Caribbean Netherlands", R, "599", "+...-...-....", "Special Municipalities", ["Bonaire", "Saba", "Sint Eustatius"], "🇧🇶", 1] : never,
    R extends "KY" ? ["Cayman Islands", R, "1345", "+.(...)...-....", "Districts", ["Bodden Town", "Cayman Brac", "East End", "George Town", "Little Cayman", "North Side", "Sister Islands", "West Bay"], "🇰🇾"] : never,
    R extends "CF" ? ["Central African Republic (République centrafricaine)", R, "236", "+...-..-..-....", "Regions", ["Bamingui-Bangoran", "Bangui", "Basse-Kotto", "Haute-Kotto", "Haut-Mbomou", "Kémo", "Lobaye", "Mambéré-Kadéï", "Mbomou", "Nana-Grébizi", "Nana-Mambéré", "Ombella-M'Poko", "Ouaka", "Ouham", "Ouham-Pendé", "Sangha-Mbaéré", "Vakaga"], "🇨🇫"] : never,
    R extends "CX" ? ["Christmas Island", R, "61", "", "🇨🇽"] : never,
    R extends "CC" ? ["Cocos (Keeling) Islands", R, "61", "", "🇨🇨"] : never,
    R extends "CO" ? ["Colombia", R, "57", "+..(...)...-....", "States", ["Amazonas", "Antioquia", "Arauca", "Atlántico", "Bolívar", "Boyacá", "Caldas", "Caquetá", "Casanare", "Cauca", "Cesar", "Chocó", "Córdoba", "Cundinamarca", "Guainía", "Guaviare", "Huila", "La Guajira", "Magdalena", "Meta", "Nariño", "Norte de Santander", "Putumayo", "Quindío", "Risaralda", "San Andrés, Providencia y Santa Catalina", "Santander", "Sucre", "Tolima", "Valle del Cauca", "Vaupés", "Vichada"], "🇨🇴"] : never,
    R extends "KM" ? ["Comoros (‫جزر القمر‬‎)", R, "269", "+...-..-.....", "Regions", ["Grande Comore", "Anjouan", "Mohéli"], "🇰🇲"] : never,
    R extends "CD" ? ["Congo (DRC) (Jamhuri ya Kidemokrasia ya Kongo)", R, "243", "+...(...)...-...", "Provinces", ["Kinshasa", "Kongo Central", "Kwango", "Kwilu", "Kasai", "Kasai-Central", "Kasai-Oriental", "Sankuru", "Maniema", "South Kivu", "North Kivu", "Ituri", "Haut-Uele", "Tshopo", "Bas-Uele", "Tanganyika", "Haut-Lomami", "Lualaba", "Kwango", "Kwilu", "Kasai", "Kasai-Central", "Kasai-Oriental", "Sankuru", "Maniema", "South Kivu", "North Kivu", "Ituri", "Haut-Uele", "Tshopo", "Bas-Uele", "Tanganyika", "Haut-Lomami", "Lualaba"], "🇨🇩"] : never,
    R extends "CG" ? ["Congo (Republic) (Congo-Brazzaville)", R, "242", "+...-..-...-....", "Departments", ["Bouenza", "Cuvette", "Cuvette-Ouest", "Kouilou", "Lékoumou", "Likouala", "Niari", "Plateaux", "Pool", "Sangha"], "🇨🇬"] : never,
    R extends "CK" ? ["Cook Islands", R, "682", "+...-..-...", ["Islands", "Districts"], { "Islands": ["Aitutaki", "Atiu", "Mangaia", "Manihiki", "Mauke", "Mitiaro", "Nassau", "Palmerston", "Penrhyn", "Pukapuka", "Rakahanga", "Rarotonga", "Suwarrow", "Takutea"], "Districts": ["Avarua", "Matavera", "Ngatangiia", "Takitumu"] }, "🇨🇰"] : never,
    R extends "CR" ? ["Costa Rica", R, "506", "+... ....-....", "Provinces", ["San José", "Alajuela", "Cartago", "Heredia", "Guanacaste", "Puntarenas", "Limón"], "🇨🇷"] : never,
    R extends "CI" ? ["Côte d’Ivoire", R, "225", "+...-..-...-...", "Regions", ["Lagunes", "Haut-Sassandra", "Savanes", "Vallée du Bandama", "Moyen-Comoé", "18 Montagnes", "Lacs", "Zanzan", "Bas-Sassandra", "Denguélé", "N'zi-Comoé", "Marahoué", "Sud-Comoé", "Worodougou", "Sud-Bandama", "Agnéby-Tiassa", "Bafing", "Gbêkê", "Fromager", "Moyen-Cavally", "Nawa", "Indénié-Djuablin", "Bounkani", "Moronou", "Gbôklé", "Iffou", "Bagoué", "Tchologo", "Poro", "Kabadougou", "Béré", "Korhogo"], "🇨🇮"] : never,
    R extends "HR" ? ["Croatia (Hrvatska)", R, "385", "+...-..-...-...", "Counties", ["Zagreb County", "Krapina-Zagorje County", "Sisak-Moslavina County", "Karlovačka County", "Varaždin County", "Koprivnica-Križevci County", "Bjelovar-Bilogora County", "Primorje-Gorski Kotar County", "Lika-Senj County", "Virovitica-Podravina County", "Požega-Slavonia County", "Brod-Posavina County", "Zadar County", "Osijek-Baranja County", "Šibenik-Knin County", "Vukovar-Syrmia County", "Split-Dalmatia County", "Istria County", "Dubrovnik-Neretva County", "Međimurje County", "Grad Zagreb"], "🇭🇷"] : never,
    R extends "CU" ? ["Cuba", R, "53", "+..-.-...-....", "Provinces", ["Pinar del Río", "Artemisa", "La Habana", "Mayabeque", "Matanzas", "Cienfuegos", "Villa Clara", "Sancti Spíritus", "Ciego de Ávila", "Camagüey", "Las Tunas", "Holguín", "Granma", "Santiago de Cuba", "Guantánamo", "Isla de la Juventud"], "🇨🇺"] : never,
    R extends "CW" ? ["Curaçao", R, "599", "+...-...-....", "Regions", ["Willemstad", "Bandabou", "Bandariba"], "🇨🇼", 0] : never,
    R extends "CY" ? ["Cyprus (Κύπρος)", R, "357", "+...-..-...-...", "Regions", ["Nicosia", "Limassol", "Larnaca", "Paphos", "Famagusta"], "🇨🇾"] : never,
    R extends "CZ" ? ["Czech Republic (Česká republika)", R, "420", "+...(...)...-...", "Regions", ["Prague", "Central Bohemian Region", "South Bohemian Region", "Plzeň Region", "Karlovy Vary Region", "Ústí nad Labem Region", "Liberec Region", "Hradec Králové Region", "Pardubice Region", "Olomouc Region", "Moravian-Silesian Region", "South Moravian Region", "Zlín Region", "Vysočina Region"], "🇨🇿"] : never,
    R extends "DK" ? ["Denmark (Danmark)", R, "45", "+.. .. .. .. ..", "Regions", ["Capital Region of Denmark", "Region Zealand", "Region of Southern Denmark", "Central Denmark Region", "North Denmark Region"], "🇩🇰"] : never,
    R extends "DJ" ? ["Djibouti", R, "253", "+...-..-..-..-..", "Regions", ["Djibouti City", "Ali Sabieh", "Dikhil", "Arta", "Tadjourah", "Obock"], "🇩🇯"] : never,
    R extends "DM" ? ["Dominica", R, "1767", "+.(...)...-....", "Regions", ["Saint Andrew Parish", "Saint David Parish", "Saint George Parish", "Saint John Parish", "Saint Joseph Parish", "Saint Luke Parish", "Saint Mark Parish", "Saint Patrick Parish", "Saint Paul Parish", "Saint Peter Parish"], "🇩🇲"] : never,
    R extends "DO" ? ["Dominican Republic (República Dominicana)", R, "1", "+.(...)...-....", "Provinces", ["Azua", "Bahoruco", "Barahona", "Dajabón", "Distrito Nacional", "Duarte", "Elías Piña", "El Seibo", "Espaillat", "Hato Mayor", "Hermanas Mirabal", "Independencia", "La Altagracia", "La Romana", "La Vega", "María Trinidad Sánchez", "Monseñor Nouel", "Monte Cristi", "Monte Plata", "Pedernales", "Peravia", "Puerto Plata", "Samaná", "San Cristóbal", "San José de Ocoa", "San Juan", "San Pedro de Macorís", "Sánchez Ramírez", "Santiago", "Santiago Rodríguez", "Santo Domingo", "Valverde"], "🇩🇴", 2, ["809", "829", "849"]] : never,
    R extends "EC" ? ["Ecuador", R, "593", "+...-.-...-....", "Provinces", ["Azuay", "Bolivar", "Cañar", "Carchi", "Chimborazo", "Cotopaxi", "El Oro", "Esmeraldas", "Galapagos", "Guayas", "Imbabura", "Loja", "Los Rios", "Manabi", "Morona Santiago", "Napo", "Orellana", "Pastaza", "Pichincha", "Santa Elena", "Santo Domingo de los Tsachilas", "Sucumbios", "Tungurahua", "Zamora Chinchipe"], "🇪🇨"] : never,
    R extends "EG" ? ["Egypt (‫مصر‬‎)", R, "20", "+..(...)...-....", "Governorates", ["Alexandria", "Aswan", "Asyut", "Beheira", "Beni Suef", "Cairo", "Dakahlia", "Damietta", "Faiyum", "Gharbia", "Giza", "Ismailia", "Kafr El Sheikh", "Luxor", "Matruh", "Minya", "Monufia", "New Valley", "North Sinai", "Port Said", "Qalyubia", "Qena", "Red Sea", "Sharqia", "Sohag", "South Sinai", "Suez"], "🇪🇬"] : never,
    R extends "SV" ? ["El Salvador", R, "503", "+... ....-....", "Departments", ["Ahuachapán", "Cabañas", "Chalatenango", "Cuscatlán", "La Libertad", "La Paz", "La Unión", "Morazán", "San Miguel", "San Salvador", "San Vicente", "Santa Ana", "Sonsonate", "Usulután"], "🇸🇻"] : never,
    R extends "GQ" ? ["Equatorial Guinea (Guinea Ecuatorial)", R, "240", "+...-..-...-....", "Provinces", ["Annobón", "Bioko Norte", "Bioko Sur", "Centro Sur", "Kié-Ntem", "Litoral", "Wele-Nzas"], "🇬🇶"] : never,
    R extends "ER" ? ["Eritrea", R, "291", "+...-.-...-...", "Regions", ["Anseba", "Debub", "Gash-Barka", "Maekel", "Northern Red Sea", "Southern Red Sea"], "🇪🇷"] : never,
    R extends "EE" ? ["Estonia (Eesti)", R, "372", "+...-...-....", "Counties", ["Harju County", "Hiiu County", "Ida-Viru County", "Järva County", "Jõgeva County", "Lääne County", "Lääne-Viru County", "Põlva County", "Pärnu County", "Rapla County", "Saare County", "Tartu County", "Valga County", "Viljandi County", "Võru County"], "🇪🇪"] : never,
    R extends "ET" ? ["Ethiopia", R, "251", "+...-..-...-....", "Regions", ["Addis Ababa", "Afar", "Amhara", "Benishangul-Gumuz", "Dire Dawa", "Gambela", "Harari", "Oromia", "Sidama", "Somali", "Southern Nations, Nationalities, and Peoples' Region", "Tigray"], "🇪🇹"] : never,
    R extends "FK" ? ["Falkland Islands (Islas Malvinas)", R, "500", "+...-.....", "Regions", ["East Falkland", "West Falkland", "Staten Island"], "🇫🇰"] : never,
    R extends "FO" ? ["Faroe Islands (Føroyar)", R, "298", "+...-...-...", "Municipalities", ["Tórshavn", "Klaksvík", "Runavík", "Eystur", "Vágar"], "🇫🇴"] : never,
    R extends "FJ" ? ["Fiji", R, "679", "+...-..-.....", "Divisions", ["Central", "Eastern", "Northern", "Western"], "🇫🇯"] : never,
    R extends "FI" ? ["Finland (Suomi)", R, "358", "+... .. .... ....", "Regions", ["Åland Islands", "Central Finland", "Central Ostrobothnia", "Eastern Finland", "Kainuu", "Kanta-Häme", "Kymenlaakso", "Lapland", "North Karelia", "Northern Ostrobothnia", "Northern Savonia", "Ostrobothnia", "Päijänne Tavastia", "Pirkanmaa", "Satakunta", "South Karelia", "Southern Ostrobothnia", "Southern Savonia", "Tavastia Proper", "Uusimaa", "Varsinais-Suomi"], "🇫🇮"] : never,
    R extends "FR" ? ["France", R, "33", "+.. . .. .. .. ..", "Regions", ["Auvergne-Rhône-Alpes", "Bourgogne-Franche-Comté", "Brittany", "Centre-Val de Loire", "Corsica", "Grand Est", "Hauts-de-France", "Île-de-France", "Normandy", "Nouvelle-Aquitaine", "Occitanie", "Pays de la Loire", "Provence-Alpes-Côte d'Azur"], "🇫🇷"] : never,
    R extends "GF" ? ["French Guiana (Guyane française)", R, "594", "+...-.....-....", ["Arrondissements", "Communes"], { "Arrondissements": ["Cayenne", "Saint-Laurent-du-Maroni"], "Communes": ["Matoury", "Kourou", "Remire-Montjoly"] }, "🇬🇫"] : never,
    R extends "PF" ? ["French Polynesia (Polynésie française)", R, "689", "+...-..-..-..", ["Communes", "Subdivisions"], { "Communes": ["Papeete", "Faaa", "Punaauia"], "Subdivisions": ["Marquesas Islands", "Tuamotu-Gambier", "Tubuai Islands"] }, "🇵🇫"] : never,
    R extends "TF" ? ["French Southern and Antarctic Lands", R, "262", "", "Districts", ["Kerguelen Islands", "Crozet Islands", "Amsterdam Island", "Saint-Paul Island"], "🇹🇫"] : never,
    R extends "GA" ? ["Gabon", R, "241", "+...-.-..-..-..", "Provinces", ["Estuaire", "Haut-Ogooué", "Moyen-Ogooué", "Ngounié", "Nyanga", "Ogooué-Ivindo", "Ogooué-Lolo", "Ogooué-Maritime", "Woleu-Ntem"], "🇬🇦"] : never,
    R extends "GM" ? ["Gambia", R, "220", "+...(...)..-..", "Divisions", ["Banjul", "Lower River", "Central River", "North Bank", "Upper River", "West Coast"], "🇬🇲"] : never,
    R extends "GE" ? ["Georgia (საქართველო)", R, "995", "+...(...)...-...", "Regions", ["Abkhazia", "Adjara", "Guria", "Imereti", "Kakheti", "Kvemo Kartli", "Mtskheta-Mtianeti", "Racha-Lechkhumi and Kvemo Svaneti", "Samegrelo-Zemo Svaneti", "Samtskhe-Javakheti", "Shida Kartli", "Tbilisi"], "🇬🇪"] : never,
    R extends "DE" ? ["Germany (Deutschland)", R, "49", "+.. ... .......", "States", ["Baden-Württemberg", "Bavaria", "Berlin", "Brandenburg", "Bremen", "Hamburg", "Hesse", "Lower Saxony", "Mecklenburg-Vorpommern", "North Rhine-Westphalia", "Rhineland-Palatinate", "Saarland", "Saxony", "Saxony-Anhalt", "Schleswig-Holstein", "Thuringia"], "🇩🇪"] : never,
    R extends "GH" ? ["Ghana (Gaana)", R, "233", "+...(...)...-...", "Regions", ["Ashanti", "Brong-Ahafo", "Central", "Eastern", "Greater Accra", "Northern", "Upper East", "Upper West", "Volta", "Western"], "🇬🇭"] : never,
    R extends "GI" ? ["Gibraltar", R, "350", "+...-...-.....", "Districts", ["East Side", "North District", "South District", "Town Area", "Westside"], "🇬🇮"] : never,
    R extends "GR" ? ["Greece (Ελλάδα)", R, "30", "+..(...)...-....", "Regions", ["Attica", "Central Greece", "Central Macedonia", "Crete", "Eastern Macedonia and Thrace", "Epirus", "Ionian Islands", "North Aegean", "Peloponnese", "South Aegean", "Thessaly", "Western Greece", "Western Macedonia"], "🇬🇷"] : never,
    R extends "GL" ? ["Greenland (Kalaallit Nunaat)", R, "299", "+...-..-..-..", "Municipalities", ["Kujalleq", "Qaasuitsup", "Qeqqata", "Sermersooq"], "🇬🇱"] : never,
    R extends "GD" ? ["Grenada", R, "1473", "+.(...)...-....", "Parishes", ["Saint Andrew", "Saint David", "Saint George", "Saint John", "Saint Mark", "Saint Patrick"], "🇬🇩"] : never,
    R extends "GP" ? ["Guadeloupe", R, "590", "", ["Arrondissements", "Cantons", "Communes"], { "Arrondissements": ["Basse-Terre", "Pointe-à-Pitre"], "Cantons": [], "Communes": ["Les Abymes", "Baie-Mahault", "Le Gosier", "Petit-Bourg"] }, "🇬🇵", 0] : never,
    R extends "GU" ? ["Guam", R, "1671", "+.(...)...-....", "Villages", ["Agana Heights", "Agat", "Asan", "Barrigada", "Chalan Pago-Ordot", "Dededo", "Hagatna", "Inarajan", "Mangilao", "Merizo", "Mongmong-Toto-Maite", "Piti", "Santa Rita", "Sinajana", "Talofofo", "Tamuning", "Umatac", "Yigo", "Yona"], "🇬🇺"] : never,
    R extends "GT" ? ["Guatemala", R, "502", "+... ....-....", "Departments", ["Alta Verapaz", "Baja Verapaz", "Chimaltenango", "Chiquimula", "El Progreso", "Escuintla", "Guatemala", "Huehuetenango", "Izabal", "Jalapa", "Jutiapa", "Petén", "Quetzaltenango", "Quiché", "Retalhuleu", "Sacatepéquez", "San Marcos", "Santa Rosa", "Sololá", "Suchitepéquez", "Totonicapán", "Zacapa"], "🇬🇹"] : never,
    R extends "GG" ? ["Guernsey", R, "44", "", "Parishes", ["Castel", "Forest", "St. Andrew", "St. Martin", "St. Peter Port", "St. Pierre du Bois", "St. Sampson", "St. Saviour", "Torteval", "Vale"], "🇬🇬"] : never,
    R extends "GN" ? ["Guinea (Guinée)", R, "224", "+...-..-...-...", "Regions", ["Boké", "Conakry", "Faranah", "Kankan", "Kindia", "Labé", "Mamou", "Nzérékoré"], "🇬🇳"] : never,
    R extends "GW" ? ["Guinea-Bissau (Guiné Bissau)", R, "245", "+...-.-......", "Regions", ["Bafatá", "Biombo", "Bolama", "Cacheu", "Gabú", "Oio", "Quinara", "Tombali"], "🇬🇼"] : never,
    R extends "GY" ? ["Guyana", R, "592", "+...-...-....", "Regions", ["Barima-Waini", "Cuyuni-Mazaruni", "Demerara-Mahaica", "East Berbice-Corentyne", "Essequibo Islands-West Demerara", "Mahaica-Berbice", "Pomeroon-Supenaam", "Potaro-Siparuni", "Upper Demerara-Berbice", "Upper Takutu-Upper Essequibo"], "🇬🇾"] : never,
    R extends "HT" ? ["Haiti", R, "509", "+... ....-....", "Departments", ["Artibonite", "Centre", "Grand'Anse", "Nippes", "Nord", "Nord-Est", "Nord-Ouest", "Ouest", "Sud", "Sud-Est"], "🇭🇹"] : never,
    R extends "HM" ? ["Heard Island and McDonald Islands", R, "672", "", "🇭🇲"] : never,
    R extends "HN" ? ["Honduras", R, "504", "+...-....-....", "Departments", ["Atlántida", "Choluteca", "Colón", "Comayagua", "Copán", "Cortés", "El Paraíso", "Francisco Morazán", "Gracias a Dios", "Intibucá", "Islas de la Bahía", "La Paz", "Lempira", "Ocotepeque", "Olancho", "Santa Bárbara", "Valle", "Yoro"], "🇭🇳"] : never,
    R extends "KZ" ? ["Kazakhstan (Казахстан)", R, "7", "+. ... ...-..-..", "Regions", ["Almaty", "Aqmola", "Aqtobe", "Atyrau", "East Kazakhstan", "Mangystau", "North Kazakhstan", "Nur-Sultan", "Pavlodar", "Qaragandy", "Qostanay", "Qyzylorda", "Shymkent", "Turkestan", "West Kazakhstan"], "🇰🇿", 1] : never,
    R extends "IR" ? ["Iran (‫ایران‬‎)", R, "98", "+..(...)...-....", "Provinces", ["Alborz", "Ardabil", "Bushehr", "Chaharmahal and Bakhtiari", "East Azerbaijan", "Isfahan", "Fars", "Gilan", "Golestan", "Hamadan", "Hormozgan", "Ilam", "Kerman", "Kermanshah", "Khuzestan", "Kohgiluyeh and Boyer-Ahmad", "Kurdistan", "Lorestan", "Markazi", "Mazandaran", "North Khorasan", "Qazvin", "Qom", "Razavi Khorasan", "Semnan", "Sistan and Baluchestan", "South Khorasan", "Tehran", "West Azerbaijan", "Yazd", "Zanjan"], "🇮🇷"] : never,
    R extends "IQ" ? ["Iraq (‫العراق‬‎)", R, "964", "+...(...)...-....", "Governorates", ["Al Anbar", "Babil", "Baghdad", "Basra", "Dhi Qar", "Diyala", "Dohuk", "Erbil", "Karbala", "Kirkuk", "Maysan", "Muthanna", "Najaf", "Nineveh", "Qadisiyyah", "Saladin", "Sulaymaniyah", "Wasit"], "🇮🇶"] : never,
    R extends "IE" ? ["Ireland", R, "353", "+... .. .......", "Counties", ["Carlow", "Cavan", "Clare", "Cork", "Donegal", "Dublin", "Galway", "Kerry", "Kildare", "Kilkenny", "Laois", "Leitrim", "Limerick", "Longford", "Louth", "Mayo", "Meath", "Monaghan", "Offaly", "Roscommon", "Sligo", "Tipperary", "Waterford", "Westmeath", "Wexford", "Wicklow"], "🇮🇪"] : never,
    R extends "IM" ? ["Isle of Man", R, "44", "", ["Parishes", "Sheadings"], { "Parishes": ["Andreas", "Arbory", "Ballaugh", "Braddan", "Bride", "Castletown", "Douglas", "German", "Jurby", "Laxey", "Lezayre", "Lonan", "Malew", "Marown", "Maughold", "Michael", "Onchan", "Patrick", "Peel", "Port Erin", "Port St Mary", "Ramsey", "Rushen"], "Sheadings": ["Garff", "Glenfaba", "Middle", "Peel", "Rushen"] }, "🇮🇲"] : never,
    R extends "IL" ? ["Israel (‫ישראל‬‎)", R, "972", "+...-.-...-....", "Districts", ["Central", "Haifa", "Jerusalem", "Northern", "Southern", "Tel Aviv"], "🇮🇱"] : never,
    R extends "HK" ? ["Hong Kong (香港)", R, "852", "+... .... ....", "Districts", ["Central and Western", "Eastern", "Islands", "Kowloon City", "Kwai Tsing", "Kwun Tong", "North", "Sai Kung", "Sha Tin", "Sham Shui Po", "Southern", "Tai Po", "Tsuen Wan", "Tuen Mun", "Wan Chai", "Wong Tai Sin", "Yau Tsim Mong", "Yuen Long"], "🇭🇰"] : never,
    R extends "HU" ? ["Hungary (Magyarország)", R, "36", "+..(...)...-...", "Counties", ["Bács-Kiskun", "Baranya", "Békés", "Borsod-Abaúj-Zemplén", "Csongrád-Csanád", "Fejér", "Győr-Moson-Sopron", "Hajdú-Bihar", "Heves", "Jász-Nagykun-Szolnok", "Komárom-Esztergom", "Nógrád", "Pest", "Somogy", "Szabolcs-Szatmár-Bereg", "Tolna", "Vas", "Veszprém", "Zala"], "🇭🇺"] : never,
    R extends "IS" ? ["Iceland (Ísland)", R, "354", "+... ... ....", "Regions", ["Capital Region", "Southern Peninsula", "Western Region", "Westfjords", "Northwest Region", "Northeast Region", "East Region", "South Region"], "🇮🇸"] : never,
    R extends "IN" ? ["India (भारत)", R, "91", "+.. .....-.....", "States", ["Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh", "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka", "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal"], "🇮🇳"] : never,
    R extends "ID" ? ["Indonesia", R, "62", "+..-..-...-..", "Provinces", ["Aceh", "Bali", "Bangka Belitung", "Banten", "Bengkulu", "Central Java", "Central Kalimantan", "Central Sulawesi", "East Java", "East Kalimantan", "East Nusa Tenggara", "Gorontalo", "Jakarta", "Jambi", "Lampung", "Maluku", "North Kalimantan", "North Maluku", "North Sulawesi", "North Sumatra", "Papua", "Riau", "Riau Islands", "South Kalimantan", "South Sulawesi", "South Sumatra", "Southeast Sulawesi", "West Java", "West Kalimantan", "West Nusa Tenggara", "West Papua", "West Sulawesi", "West Sumatra", "Yogyakarta"], "🇮🇩"] : never,
    R extends "IT" ? ["Italy (Italia)", R, "39", "+.. ... ......", "Regions", ["Abruzzo", "Basilicata", "Calabria", "Campania", "Emilia-Romagna", "Friuli-Venezia Giulia", "Lazio", "Liguria", "Lombardia", "Marche", "Molise", "Piemonte", "Puglia", "Sardegna", "Sicilia", "Toscana", "Trentino-Alto Adige", "Umbria", "Valle d'Aosta", "Veneto"], "🇮🇹", 0] : never,
    R extends "JM" ? ["Jamaica", R, "1876", "+.(...)...-....", "Parishes", ["Clarendon", "Hanover", "Kingston", "Manchester", "Portland", "Saint Andrew", "Saint Ann", "Saint Catherine", "Saint Elizabeth", "Saint James", "Saint Mary", "Saint Thomas", "Trelawny", "Westmoreland"], "🇯🇲"] : never,
    R extends "JP" ? ["Japan (日本)", R, "81", "+.. ... .. ....", "Prefectures", ["Aichi", "Akita", "Aomori", "Chiba", "Ehime", "Fukui", "Fukuoka", "Fukushima", "Gifu", "Gunma", "Hiroshima", "Hokkaido", "Hyogo", "Ibaraki", "Ishikawa", "Iwate", "Kagawa", "Kagoshima", "Kanagawa", "Kochi", "Kumamoto", "Kyoto", "Mie", "Miyagi", "Miyazaki", "Nagano", "Nagasaki", "Nara", "Niigata", "Oita", "Okayama", "Okinawa", "Osaka", "Saga", "Saitama", "Shiga", "Shimane", "Shizuoka", "Tochigi", "Tokushima", "Tokyo", "Tottori", "Toyama", "Wakayama", "Yamagata", "Yamaguchi", "Yamanashi"], "🇯🇵"] : never,
    R extends "JE" ? ["Jersey", R, "44", "", "Parishes", ["Grouville", "Saint Brelade", "Saint Clement", "Saint Helier", "Saint John", "Saint Lawrence", "Saint Martin", "Saint Mary", "Saint Ouen", "Saint Peter", "Saint Saviour", "Trinity"], "🇯🇪"] : never,
    R extends "JO" ? ["Jordan (‫الأردن‬‎)", R, "962", "+...-.-....-....", "Governorates", ["Ajloun", "Amman", "Aqaba", "Balqa", "Irbid", "Jarash", "Karak", "Ma'an", "Madaba", "Mafraq", "Tafilah", "Zarqa"], "🇯🇴"] : never,
    R extends "KE" ? ["Kenya", R, "254", "+...-...-......", "Counties", ["Baringo", "Bomet", "Bungoma", "Busia", "Elgeyo-Marakwet", "Embu", "Garissa", "Homa Bay", "Isiolo", "Kajiado", "Kakamega", "Kericho", "Kiambu", "Kilifi", "Kirinyaga", "Kisii", "Kisumu", "Kitui", "Kwale", "Laikipia", "Lamu", "Machakos", "Makueni", "Mandera", "Marsabit", "Meru", "Migori", "Mombasa", "Murang'a", "Nairobi", "Nakuru", "Nandi", "Narok", "Nyamira", "Nyandarua", "Nyeri", "Samburu", "Siaya", "Taita-Taveta", "Tana River", "Tharaka-Nithi", "Trans-Nzoia", "Turkana", "Uasin Gishu", "Vihiga", "Wajir", "West Pokot"], "🇰🇪"] : never,
    R extends "KI" ? ["Kiribati", R, "686", "+...-..-...", "Islands", ["Banaba", "Gilbert Islands", "Line Islands", "Phoenix Islands"], "🇰🇮"] : never,
    R extends "XK" ? ["Kosovo", R, "383", "", "Districts", ["District of Pristina", "District of Mitrovica", "District of Peja", "District of Prizren", "District of Gjilan", "District of Ferizaj"], "🇽🇰"] : never,
    R extends "KW" ? ["Kuwait (‫الكويت‬‎)", R, "965", "+...-....-....", "Governorates", ["Al Ahmadi", "Al Farwaniyah", "Al Jahra", "Capital", "Hawalli", "Mubarak Al-Kabeer"], "🇰🇼"] : never,
    R extends "KG" ? ["Kyrgyzstan (Кыргызстан)", R, "996", "+...(...)...-...", "Regions", ["Batken", "Chuy", "Issyk-Kul", "Jalal-Abad", "Naryn", "Osh", "Talas"], "🇰🇬"] : never,
    R extends "LA" ? ["Laos (ລາວ)", R, "856", "+...-..-...-...", "Provinces", ["Attapeu", "Bokeo", "Bolikhamsai", "Champasak", "Houaphanh", "Khammouane", "Luang Namtha", "Luang Prabang", "Oudomxay", "Phongsaly", "Sainyabuli", "Salavan", "Savannakhet", "Sekong", "Vientiane", "Vientiane Prefecture", "Xaisomboun", "Xaisomboun Special Zone", "Xiangkhouang", "Xekong", "Xiangkhouang"], "🇱🇦"] : never,
    R extends "LV" ? ["Latvia (Latvija)", R, "371", "+...-..-...-...", "Regions", ["Aizkraukle", "Aluksne", "Balvi", "Bauska", "Cesis", "Daugavpils", "Dobele", "Gulbene", "Jekabpils", "Jelgava", "Jurmala", "Kraslava", "Kuldiga", "Liepaja", "Limbazi", "Ludza", "Madona", "Ogre", "Preili", "Rezekne", "Riga", "Saldus", "Talsi", "Tukums", "Valka", "Valmiera", "Ventspils"], "🇱🇻"] : never,
    R extends "LB" ? ["Lebanon (‫لبنان‬‎)", R, "961", "+...-.-...-...", "Governorates", ["Akkar", "Baalbek-Hermel", "Beirut", "Beqaa", "Mount Lebanon", "Nabatieh", "North", "South"], "🇱🇧"] : never,
    R extends "LS" ? ["Lesotho", R, "266", "+...-.-...-....", "Districts", ["Berea", "Butha-Buthe", "Leribe", "Mafeteng", "Maseru", "Mohale's Hoek", "Mokhotlong", "Qacha's Nek", "Quthing", "Thaba-Tseka"], "🇱🇸"] : never,
    R extends "LR" ? ["Liberia", R, "231", "+...-..-...-...", "Counties", ["Bomi", "Bong", "Gbarpolu", "Grand Bassa", "Grand Cape Mount", "Grand Gedeh", "Grand Kru", "Lofa", "Margibi", "Maryland", "Montserrado", "Nimba", "River Cess", "River Gee", "Sinoe"], "🇱🇷"] : never,
    R extends "LY" ? ["Libya (‫ليبيا‬‎)", R, "218", "+...-..-...-...", "Regions", ["Al Wahat", "Benghazi", "Derna", "Ghat", "Jabal al Akhdar", "Jabal al Gharbi", "Jafara", "Jufra", "Kufra", "Marj", "Misrata", "Murqub", "Murzuq", "Nalut", "Nuqat al Khams", "Sabha", "Sirte", "Tripoli", "Wadi al Hayaa", "Wadi al Shatii", "Zawiya"], "🇱🇾"] : never,
    R extends "LI" ? ["Liechtenstein", R, "423", "+...(...)...-....", "Municipalities", ["Balzers", "Eschen", "Gamprin", "Mauren", "Planken", "Ruggell", "Schaan", "Schellenberg", "Triesen", "Triesenberg", "Vaduz"], "🇱🇮"] : never,
    R extends "LT" ? ["Lithuania (Lietuva)", R, "370", "+...(...)..-...", "Counties", ["Alytus County", "Kaunas County", "Klaipeda County", "Marijampole County", "Panevezys County", "Siauliai County", "Taurage County", "Telsiai County", "Utena County", "Vilnius County"], "🇱🇹"] : never,
    R extends "LU" ? ["Luxembourg", R, "352", "+...(...)...-...", "Cantons", ["Diekirch", "Grevenmacher", "Luxembourg"], "🇱🇺"] : never,
    R extends "MO" ? ["Macau (澳門)", R, "853", "+...-....-....", "Freguesias", ["Nossa Senhora de Fátima", "Santo António", "São Lázaro", "São Lourenço", "São Francisco Xavier", "Sé", "Coloane", "Taipa"], "🇲🇴"] : never,
    R extends "MK" ? ["Macedonia (FYROM) (Македонија)", R, "389", "+...-..-...-...", "Regions", ["Skopje", "Pelagonia", "Polog", "Vardar", "Eastern", "Southwestern", "Northeastern", "Southeastern"], "🇲🇰"] : never,
    R extends "MG" ? ["Madagascar (Madagasikara)", R, "261", "+...-..-..-.....", "Provinces", ["Antananarivo", "Antsiranana", "Fianarantsoa", "Mahajanga", "Toamasina", "Toliara"], "🇲🇬"] : never,
    R extends "MW" ? ["Malawi", R, "265", "+...-.-....-....", "Districts", ["Balaka", "Blantyre", "Chikwawa", "Chiradzulu", "Chitipa", "Dedza", "Dowa", "Karonga", "Kasungu", "Likoma", "Lilongwe", "Machinga", "Mangochi", "Mchinji", "Mulanje", "Mwanza", "Mzimba", "Neno", "Nkhata Bay", "Nkhotakota", "Nsanje", "Ntcheu", "Ntchisi", "Phalombe", "Rumphi", "Salima", "Thyolo", "Zomba"], "🇲🇼"] : never,
    R extends "MY" ? ["Malaysia", R, "60", "+.. ..-....-....", "States", ["Johor", "Kedah", "Kelantan", "Melaka", "Negeri Sembilan", "Pahang", "Perak", "Perlis", "Pulau Pinang", "Sabah", "Sarawak", "Selangor", "Terengganu", "Wilayah Persekutuan Kuala Lumpur", "Wilayah Persekutuan Labuan", "Wilayah Persekutuan Putrajaya"], "🇲🇾"] : never,
    R extends "MV" ? ["Maldives", R, "960", "+...-...-....", "Atolls", ["Ari Atoll", "Faafu Atoll", "Lhaviyani Atoll", "Malé Atoll", "Baa Atoll", "Dhaalu Atoll", "Gaafu Alif Atoll", "Haa Alif Atoll", "Kaafu Atoll", "Laamu Atoll", "Meemu Atoll", "Noonu Atoll", "Raa Atoll", "Seenu Atoll", "Thaa Atoll", "Vaavu Atoll"], "🇲🇻"] : never,
    R extends "ML" ? ["Mali", R, "223", "+...-..-..-....", "Regions", ["Bamako", "Gao", "Kayes", "Kidal", "Koulikoro", "Mopti", "Segou", "Sikasso", "Tombouctou"], "🇲🇱"] : never,
    R extends "MT" ? ["Malta", R, "356", "+...-....-....", "Districts", ["Gozo", "Malta"], "🇲🇹"] : never,
    R extends "MH" ? ["Marshall Islands", R, "692", "+...-...-....", "Municipalities", ["Ailinglaplap", "Ailuk", "Arno", "Aur", "Bikini", "Ebon", "Enewetak", "Jabat", "Jaluit", "Kili", "Kwajalein", "Lae", "Lib", "Likiep", "Majuro", "Maloelap", "Mejit", "Mili", "Namdrik", "Namu", "Rongelap", "Ujae", "Ujelang", "Utirik", "Wotho", "Wotje"], "🇲🇭"] : never,
    R extends "MP" ? ["Northern Mariana Islands", R, "1670", "+.(...)...-....", "Municipalities", ["Northern Islands", "Rota", "Saipan", "Tinian"], "🇲🇵"] : never,
    R extends "NO" ? ["Norway (Norge)", R, "47", "+.. ... .. ...", "Counties", ["Agder", "Innlandet", "Møre og Romsdal", "Nordland", "Oslo", "Rogaland", "Troms og Finnmark", "Trøndelag", "Vestfold og Telemark", "Vestland", "Viken"], "🇳🇴"] : never,
    R extends "PK" ? ["Pakistan (‫پاکستان‬‎)", R, "92", "+.. ...-.......", ["Provinces", "Territories"], { "Provinces": ["Balochistan", "Khyber Pakhtunkhwa", "Punjab", "Sindh"], "Territories": ["Islamabad Capital Territory", "Gilgit-Baltistan", "Azad Jammu and Kashmir"] }, "🇵🇰"] : never,
    R extends "ME" ? ["Montenegro (Crna Gora)", R, "382", "+...-..-...-...", "Municipalities", ["Andrijevica", "Bar", "Berane", "Bijelo Polje", "Budva", "Cetinje", "Danilovgrad", "Gusinje", "Herceg Novi", "Kolašin", "Kotor", "Mojkovac", "Nikšić", "Petnjica", "Plav", "Pljevlja", "Plužine", "Podgorica", "Rožaje", "Šavnik", "Tivat", "Ulcinj", "Žabljak"], "🇲🇪"] : never,
    R extends "MQ" ? ["Martinique", R, "596", "+...(...)..-..-..", ["Arrondissements", "Cantons", "Communes"], { "Arrondissements": ["Fort-de-France", "La Trinité", "Le Marin", "Le Robert", "Saint-Pierre"], "Cantons": ["Fort-de-France-1", "Fort-de-France-2", "Fort-de-France-3", "Fort-de-France-4", "Le François", "Le Lamentin-1", "Le Lamentin-2", "Le Marin", "Le Robert", "Sainte-Anne", "Sainte-Luce", "Saint-Esprit", "Saint-Joseph", "Saint-Pierre"], "Communes": ["Basse-Pointe", "Bellefontaine", "Case-Pilote", "Ducos", "Fonds-Saint-Denis", "Fort-de-France", "Grand'Rivière", "Gros-Morne", "Le Carbet", "Le Diamant", "Le François", "Le Lamentin", "Le Lorrain", "Le Marigot", "Le Marin", "Le Morne-Rouge", "Le Morne-Vert", "Le Prêcheur", "Le Robert", "Le Vauclin", "Les Anses-d'Arlet", "Les Trois-Îlets", "Macouba", "Rivière-Pilote", "Rivière-Salée", "Sainte-Anne", "Sainte-Luce", "Sainte-Marie", "Saint-Esprit", "Saint-Joseph", "Saint-Pierre", "Schœlcher", "Trinité", "Trois-Rivières"] }, "🇲🇶"] : never,
    R extends "MR" ? ["Mauritania (‫موريتانيا‬‎)", R, "222", "+...-..-..-....", "Regions", ["Adrar", "Assaba", "Brakna", "Dakhlet Nouadhibou", "Gorgol", "Guidimaka", "Hodh Ech Chargui", "Hodh El Gharbi", "Inchiri", "Nouakchott Nord", "Nouakchott Ouest", "Nouakchott Sud", "Tagant", "Tiris Zemmour", "Trarza"], "🇲🇷"] : never,
    R extends "MU" ? ["Mauritius (Moris)", R, "230", "+...-...-....", "Districts", ["Black River", "Flacq", "Grand Port", "Moka", "Pamplemousses", "Plaines Wilhems", "Port Louis", "Rivière du Rempart", "Savanne"], "🇲🇺"] : never,
    R extends "YT" ? ["Mayotte", R, "262", "", ["Cantons", "Communes"], { "Cantons": ["Acoua", "Bandraboua", "Bandrélé", "Bouéni", "Chiconi", "Chirongui", "Dembeni", "Dzaoudzi", "Kani-Kéli", "Koungou", "Mamoudzou-1", "Mamoudzou-2", "Mamoudzou-3", "Mamoudzou-4", "Mtsamboro", "M'Tsangamouji", "Ouangani", "Pamandzi", "Sada", "Tsingoni"], "Communes": ["Acoua", "Bandraboua", "Bandrélé", "Bouéni", "Chiconi", "Chirongui", "Dembeni", "Dzaoudzi", "Kani-Kéli", "Koungou", "Mamoudzou", "Mtsamboro", "M'Tsangamouji", "Ouangani", "Pamandzi", "Sada", "Tsingoni"] }, "🇾🇹"] : never,
    R extends "MX" ? ["Mexico (México)", R, "52", "+..-..-..-....", "States", ["Aguascalientes", "Baja California", "Baja California Sur", "Campeche", "Chiapas", "Chihuahua", "Coahuila", "Colima", "Durango", "Guanajuato", "Guerrero", "Hidalgo", "Jalisco", "México", "Michoacán", "Morelos", "Nayarit", "Nuevo León", "Oaxaca", "Puebla", "Querétaro", "Quintana Roo", "San Luis Potosí", "Sinaloa", "Sonora", "Tabasco", "Tamaulipas", "Tlaxcala", "Veracruz", "Yucatán", "Zacatecas"], "🇲🇽"] : never,
    R extends "FM" ? ["Micronesia", R, "691", "+...-...-....", "States", ["Chuuk", "Kosrae", "Pohnpei", "Yap"], "🇫🇲"] : never,
    R extends "MD" ? ["Moldova (Republica Moldova)", R, "373", "+...-....-....", "Regions", ["Anenii Noi", "Basarabeasca", "Briceni", "Cahul", "Călărași", "Cantemir", "Căușeni", "Cimișlia", "Criuleni", "Dondușeni", "Drochia", "Dubăsari", "Edineț", "Fălești", "Florești", "Găgăuzia", "Glodeni", "Hîncești", "Ialoveni", "Leova", "Nisporeni", "Ocnița", "Orhei", "Rezina", "Rîșcani", "Sîngerei", "Șoldănești", "Soroca", "Strășeni", "Ștefan Vodă", "Taraclia", "Telenești", "Ungheni"], "🇲🇩"] : never,
    R extends "MC" ? ["Monaco", R, "377", "+...-..-...-...", "Districts", ["Monaco-Ville", "La Condamine", "Monte Carlo", "Fontvieille"], "🇲🇨"] : never,
    R extends "MN" ? ["Mongolia (Монгол)", R, "976", "+...-..-..-....", "Aimags", ["Arkhangai", "Bayan-Ölgii", "Bayankhongor", "Bulgan", "Darkhan-Uul", "Dornod", "Dornogovi", "Dundgovi", "Govi-Altai", "Govisümber", "Khentii", "Khovd", "Khövsgöl", "Ömnögovi", "Orkhon", "Övörkhangai", "Selenge", "Sükhbaatar", "Töv", "Uvs", "Zavkhan"], "🇲🇳"] : never,
    R extends "KP" ? ["North Korea (조선 민주주의 인민 공화국)", R, "850", "+...-...-...", "Provinces", ["Chagang", "North Hamgyong", "South Hamgyong", "North Hwanghae", "South Hwanghae", "Kangwon", "North Pyongan", "South Pyongan", "Ryanggang"], "🇰🇵"] : never,
    R extends "OM" ? ["Oman (‫عُمان‬‎)", R, "968", "+...-..-...-...", "Governorates", ["Ad Dakhiliyah", "Ad Dhahirah", "Al Batinah North", "Al Batinah South", "Al Buraimi", "Al Wusta", "Ash Sharqiyah North", "Ash Sharqiyah South", "Dhofar", "Musandam", "Muscat"], "🇴🇲"] : never,
    R extends "MS" ? ["Montserrat", R, "1664", "+.(...)...-....", "Parishes", ["Saint Anthony", "Saint Georges", "Saint Peter"], "🇲🇸"] : never,
    R extends "MA" ? ["Morocco (‫المغرب‬‎)", R, "212", "+...-..-....-...", "Regions", ["Tanger-Tétouan-Al Hoceïma", "Oriental", "Fès-Meknès", "Rabat-Salé-Kénitra", "Béni Mellal-Khénifra", "Casablanca-Settat", "Marrakesh-Safi", "Drâa-Tafilalet", "Souss-Massa", "Guelmim-Oued Noun", "Laâyoune-Sakia El Hamra", "Dakhla-Oued Ed-Dahab"], "🇲🇦"] : never,
    R extends "MZ" ? ["Mozambique (Moçambique)", R, "258", "+...-..-...-...", "Provinces", ["Cabo Delgado", "Gaza", "Inhambane", "Manica", "Maputo", "Nampula", "Niassa", "Sofala", "Tete", "Zambezia"], "🇲🇿"] : never,
    R extends "MM" ? ["Myanmar (Burma) (မြန်မာ)", R, "95", "+..-...-...", ["States", "Regions"], { "States": ["Ayeyarwady", "Bago", "Chin", "Kachin", "Kayah", "Kayin", "Magway", "Mandalay", "Mon", "Naypyidaw Union Territory", "Rakhine", "Sagaing", "Shan", "Tanintharyi", "Yangon"], "Regions": ["Sagaing", "Tanintharyi", "Bago", "Magway", "Mandalay", "Yangon", "Ayeyarwady", "Kachin", "Kayah", "Kayin", "Chin", "Mon", "Rakhine", "Shan"] }, "🇲🇲"] : never,
    R extends "NA" ? ["Namibia (Namibië)", R, "264", "+...-..-...-....", "Regions", ["Erongo", "Hardap", "Karas", "Kavango East", "Kavango West", "Khomas", "Kunene", "Ohangwena", "Omaheke", "Omusati", "Oshana", "Oshikoto", "Otjozondjupa", "Zambezi"], "🇳🇦"] : never,
    R extends "NR" ? ["Nauru", R, "674", "+...-...-....", "Districts", ["Aiwo", "Anabar", "Anetan", "Anibare", "Baiti", "Boe", "Buada", "Denigomodu", "Ewa", "Ijuw", "Meneng", "Nibok", "Uaboe", "Yaren"], "🇳🇷"] : never,
    R extends "NP" ? ["Nepal (नेपाल)", R, "977", "+...-..-...-...", "Provinces", ["Province No. 1", "Province No. 2", "Bagmati Province", "Gandaki Province", "Lumbini Province", "Karnali Province", "Sudurpashchim Province"], "🇳🇵"] : never,
    R extends "NL" ? ["Netherlands (Nederland)", R, "31", "+.. .. ........", "Provinces", ["Drenthe", "Flevoland", "Friesland", "Gelderland", "Groningen", "Limburg", "Noord-Brabant", "Noord-Holland", "Overijssel", "Utrecht", "Zeeland", "Zuid-Holland"], "🇳🇱"] : never,
    R extends "NC" ? ["New Caledonia (Nouvelle-Calédonie)", R, "687", "+...-..-....", ["Provinces", "Communes"], { "Provinces": ["South Province", "North Province", "Loyalty Islands Province"], "Communes": ["Nouméa", "Mont-Dore", "Dumbéa", "Païta", "Yaté", "Bouloupari", "La Foa", "Sarraméa", "Farino", "Moindou", "Bourail", "Poya", "Koné", "Voh", "Kaala-Gomen", "Pouembout", "Poum", "Belep", "Hienghène", "Ponérihouen", "Kouaoua", "Canala", "Thio", "Yaté", "Île des Pins", "Lifou", "Maré", "Ouvéa"] }, "🇳🇨"] : never,
    R extends "NZ" ? ["New Zealand", R, "64", "+.. ...-...-....", "Regions", ["Northland", "Auckland", "Waikato", "Bay of Plenty", "Gisborne", "Hawke's Bay", "Taranaki", "Manawatu-Whanganui", "Wellington", "Tasman", "Nelson", "Marlborough", "West Coast", "Canterbury", "Otago", "Southland"], "🇳🇿"] : never,
    R extends "NI" ? ["Nicaragua", R, "505", "+...-....-....", "Departments", ["Boaco", "Carazo", "Chinandega", "Chontales", "Estelí", "Granada", "Jinotega", "León", "Madriz", "Managua", "Masaya", "Matagalpa", "Nueva Segovia", "Río San Juan", "Rivas", "Atlántico Norte", "Atlántico Sur"], "🇳🇮"] : never,
    R extends "NE" ? ["Niger (Nijar)", R, "227", "+...-..-..-....", "Regions", ["Agadez", "Diffa", "Dosso", "Maradi", "Tahoua", "Tillabéri", "Zinder"], "🇳🇪"] : never,
    R extends "NG" ? ["Nigeria", R, "234", "+...-..-...-..", "States", ["Abia", "Adamawa", "Akwa Ibom", "Anambra", "Bauchi", "Bayelsa", "Benue", "Borno", "Cross River", "Delta", "Ebonyi", "Edo", "Ekiti", "Enugu", "Gombe", "Imo", "Jigawa", "Kaduna", "Kano", "Katsina", "Kebbi", "Kogi", "Kwara", "Lagos", "Nasarawa", "Niger", "Ogun", "Ondo", "Osun", "Oyo", "Plateau", "Rivers", "Sokoto", "Taraba", "Yobe", "Zamfara", "Federal Capital Territory"], "🇳🇬"] : never,
    R extends "NU" ? ["Niue", R, "683", "+...-....", "Villages", ["Alofi", "Avatele", "Hakupu", "Hikutavake", "Lakepa", "Makefu", "Mutalau", "Namukulu", "Tamakautoga", "Toi", "Tuapa"], "🇳🇺"] : never,
    R extends "NF" ? ["Norfolk Island", R, "672", "+...-...-...", "🇳🇫"] : never,
    R extends "NO" ? ["Norway (Norge)", R, "47", "+.. ... .. ...", "Counties", ["Agder", "Innlandet", "Møre og Romsdal", "Nordland", "Oslo", "Rogaland", "Troms og Finnmark", "Trøndelag", "Vestfold og Telemark", "Vestland", "Viken"], "🇳🇴"] : never,
    R extends "PW" ? ["Palau", R, "680", "+...-...-....", "States", ["Aimeliik", "Airai", "Angaur", "Hatohobei", "Kayangel", "Koror", "Melekeok", "Ngaraard", "Ngarchelong", "Ngardmau", "Ngatpang", "Ngchesar", "Ngeremlengui", "Ngiwal", "Peleliu", "Sonsorol"], "🇵🇼"] : never,
    R extends "PS" ? ["Palestine (‫فلسطين‬‎)", R, "970", "+...-..-...-....", "Governorates", ["Gaza Strip", "West Bank"], "🇵🇸"] : never,
    R extends "PA" ? ["Panama (Panamá)", R, "507", "+...-...-....", "Provinces", ["Bocas del Toro", "Chiriquí", "Coclé", "Colón", "Darién", "Emberá-Wounaan", "Guna Yala", "Herrera", "Los Santos", "Ngäbe-Buglé", "Panamá", "Panamá Oeste", "Veraguas"], "🇵🇦"] : never,
    R extends "PG" ? ["Papua New Guinea", R, "675", "+...(...)..-...", "Regions", ["Bougainville", "Central", "Chimbu", "Eastern Highlands", "East New Britain", "East Sepik", "Enga", "Gulf", "Hela", "Jiwaka", "Madang", "Manus", "Milne Bay", "Morobe", "New Ireland", "Northern", "Southern Highlands", "Western", "West New Britain", "West Sepik", "Western Highlands"], "🇵🇬"] : never,
    R extends "PY" ? ["Paraguay", R, "595", "+...(...)...-...", "Departments", ["Alto Paraguay", "Alto Paraná", "Amambay", "Boquerón", "Caaguazú", "Caazapá", "Canindeyú", "Central", "Concepción", "Cordillera", "Guairá", "Itapúa", "Misiones", "Ñeembucú", "Paraguarí", "Presidente Hayes", "San Pedro"], "🇵🇾"] : never,
    R extends "RW" ? ["Rwanda", R, "250", "+...(...)...-...", "Provinces", ["Kigali", "Eastern", "Northern", "Southern", "Western"], "🇷🇼"] : never,
    R extends "BL" ? ["Saint Barthélemy (Saint-Barthélemy)", R, "590", "", "Parishes", ["Gustavia"], "🇧🇱", 1] : never,
    R extends "KN" ? ["Saint Kitts and Nevis", R, "1869", "+.(...)...-....", "Parishes", ["Christ Church Nichola Town", "Saint Anne Sandy Point", "Saint George Basseterre", "Saint John Capisterre", "Saint Mary Cayon", "Saint Paul Capisterre", "Saint Peter Basseterre", "Saint Thomas Lowland", "Saint Thomas Middle Island", "Trinity Palmetto Point"], "🇰🇳"] : never,
    R extends "PE" ? ["Peru (Perú)", R, "51", "+..(...)...-...", "Regions", ["Amazonas", "Áncash", "Apurímac", "Arequipa", "Ayacucho", "Cajamarca", "Callao", "Cusco", "Huancavelica", "Huánuco", "Ica", "Junín", "La Libertad", "Lambayeque", "Lima", "Loreto", "Madre de Dios", "Moquegua", "Pasco", "Piura", "Puno", "San Martín", "Tacna", "Tumbes", "Ucayali"], "🇵🇪"] : never,
    R extends "PH" ? ["Philippines", R, "63", "+.. ... ....", "Regions", ["Ilocos Region", "Cagayan Valley", "Central Luzon", "Calabarzon", "Mimaropa", "Bicol Region", "Western Visayas", "Central Visayas", "Eastern Visayas", "Zamboanga Peninsula", "Northern Mindanao", "Davao Region", "Soccsksargen", "Caraga", "Bangsamoro Autonomous Region in Muslim Mindanao", "Cordillera Administrative Region", "National Capital Region"], "🇵🇭"] : never,
    R extends "PN" ? ["Pitcairn Islands", R, "64", "", "🇵🇳"] : never,
    R extends "RU" ? ["Russia (Россия)", R, "7", "+.-(...)-...-....", "Federal Subjects", ["Moscow", "Saint Petersburg", "Novosibirsk", "Yekaterinburg", "Nizhny Novgorod", "Kazan", "Chelyabinsk", "Omsk", "Samara", "Rostov-on-Don", "Ufa", "Krasnoyarsk", "Perm", "Voronezh", "Volgograd", "Krasnodar", "Saratov", "Tyumen", "Tolyatti", "Izhevsk"], "🇷🇺"] : never,
    R extends "QA" ? ["Qatar (‫قطر‬‎)", R, "974", "+...-....-....", "Municipalities", ["Doha", "Al Rayyan", "Umm Salal", "Al Khor", "Al Wakrah", "Al Daayen", "Madinat ash Shamal", "Al Shamal", "Al Ruwais"], "🇶🇦"] : never,
    R extends "RE" ? ["Réunion (La Réunion)", R, "262", "+...-.....-....", ["Arrondissements", "Cantons", "Communes"], { "Arrondissements": ["Saint-Denis", "Saint-Paul", "Saint-Pierre", "Saint-Benoit"], "Cantons": ["Bras-Panon", "La Chaloupe", "La Grande Montée", "L'Étang-Salé", "Entre-Deux", "Les Avirons", "Petite-Île", "Plaine-des-Palmistes", "Le Port", "La Possession", "Saint-André-1", "Saint-André-2", "Saint-André-3", "Saint-Benoît-1", "Saint-Benoît-2", "Saint-Denis-1", "Saint-Denis-2", "Saint-Denis-3", "Saint-Denis-4", "Saint-Denis-5", "Saint-Denis-6", "Saint-Denis-7", "Saint-Denis-8", "Saint-Denis-9", "Saint-Denis-10", "Saint-Joseph", "Saint-Leu-1", "Saint-Leu-2", "Saint-Louis-1", "Saint-Louis-2", "Saint-Louis-3", "Saint-Paul-1", "Saint-Paul-2", "Saint-Paul-3", "Saint-Paul-4", "Saint-Paul-5", "Saint-Pierre-1", "Saint-Pierre-2", "Saint-Pierre-3", "Saint-Pierre-4", "Sainte-Marie", "Sainte-Rose", "Sainte-Suzanne", "Saint-Philippe", "Salazie", "Le Tampon-1", "Le Tampon-2", "Le Tampon-3", "Le Tampon-4"], "Communes": ["Les Avirons", "Bras-Panon", "Cilaos", "Entre-Deux", "L'Étang-Salé", "Petite-Île", "La Plaine-des-Palmistes", "Le Port", "La Possession", "Saint-André", "Saint-Benoît", "Saint-Denis", "Sainte-Marie", "Sainte-Rose", "Sainte-Suzanne", "Saint-Joseph", "Saint-Leu", "Saint-Louis", "Saint-Paul", "Saint-Philippe", "Saint-Pierre", "Salazie", "Le Tampon", "Trois-Bassins"] }, "🇷🇪"] : never,
    R extends "PL" ? ["Poland (Polska)", R, "48", "+.. ...-...-...", "Provinces", ["Greater Poland", "Kuyavian-Pomeranian", "Lesser Poland", "Lodz", "Lower Silesian", "Lublin", "Lubusz", "Masovian", "Opole", "Podlasie", "Pomeranian", "Silesian", "Subcarpathian", "Swietokrzyskie", "Warmian-Masurian", "West Pomeranian"], "🇵🇱"] : never,
    R extends "PT" ? ["Portugal", R, "351", "+...-..-...-....", "Regions", ["Azores", "Alentejo", "Algarve", "Centro", "Lisbon", "Madeira", "Norte"], "🇵🇹"] : never,
    R extends "PR" ? ["Puerto Rico", R, "1", "+. (...) ...-....", "Municipalities", ["Adjuntas", "Aguada", "Aguadilla", "Aguas Buenas", "Aibonito", "Añasco", "Arecibo", "Arroyo", "Barceloneta", "Barranquitas", "Bayamón", "Cabo Rojo", "Caguas", "Camuy", "Canóvanas", "Carolina", "Cataño", "Cayey", "Ceiba", "Ciales", "Cidra", "Coamo", "Comerío", "Corozal", "Culebra", "Dorado", "Fajardo", "Florida", "Guánica", "Guayama", "Guayanilla", "Guaynabo", "Gurabo", "Hatillo", "Hormigueros", "Humacao", "Isabela", "Jayuya", "Juana Díaz", "Juncos", "Lajas", "Lares", "Las Marías", "Las Piedras", "Loíza", "Luquillo", "Manatí", "Maricao", "Maunabo", "Mayagüez", "Moca", "Morovis", "Naguabo", "Naranjito", "Orocovis", "Patillas", "Peñuelas", "Ponce", "Quebradillas", "Rincón", "Río Grande", "Sabana Grande", "Salinas", "San Germán", "San Juan", "San Lorenzo", "San Sebastián", "Santa Isabel", "Toa Alta", "Toa Baja", "Trujillo Alto", "Utuado", "Vega Alta", "Vega Baja", "Vieques", "Villalba", "Yabucoa", "Yauco"], "🇵🇷", 3, ["787", "939"]] : never,
    R extends "RO" ? ["Romania (România)", R, "40", "+..-..-...-....", "Regions", ["Moldova", "Muntenia", "Transylvania", "Banat", "Crisana", "Dobrogea", "Maramures", "Oltenia", "Bucovina", "Mehedinti", "Craiova", "Pitesti", "Sibiu", "Targu Mures", "Timisoara", "Cluj-Napoca", "Iasi", "Bucharest"], "🇷🇴"] : never,
    R extends "LC" ? ["Saint Lucia", R, "1758", "+.(...)...-....", "Districts", ["Anse-la-Raye", "Canaries", "Castries", "Choiseul", "Dennery", "Gros Islet", "Laborie", "Micoud", "Soufrière", "Vieux Fort"], "🇱🇨"] : never,
    R extends "MF" ? ["Saint Martin (Sant-Martin (partie française))", R, "590", "", "Parishes", ["Marigot"], "🇲🇫", 2] : never,
    R extends "PM" ? ["Saint Pierre and Miquelon (Saint-Pierre-et-Miquelon)", R, "508", "", "Communes", ["Saint-Pierre", "Miquelon-Langlade"], "🇵🇲"] : never,
    R extends "VC" ? ["Saint Vincent and the Grenadines", R, "1784", "+.(...)...-....", "Parishes", ["Charlotte", "Grenadines", "Saint Andrew", "Saint David", "Saint George", "Saint Patrick"], "🇻🇨"] : never,
    R extends "WS" ? ["Samoa", R, "685", "+...-..-....", "Districts", ["A'ana", "Aiga-i-le-Tai", "Atua", "Fa'asaleleaga", "Gaga'emauga", "Gaga'ifomauga", "Palauli", "Satupa'itea", "Tuamasaga", "Va'a-o-Fonoti", "Vaisigano"], "🇼🇸"] : never,
    R extends "SM" ? ["San Marino", R, "378", "+...-....-......", "Municipalities", ["Acquaviva", "Borgo Maggiore", "Chiesanuova", "Domagnano", "Faetano", "Fiorentino", "Montegiardino", "San Marino", "Serravalle"], "🇸🇲"] : never,
    R extends "ST" ? ["São Tomé and Príncipe (São Tomé e Príncipe)", R, "239", "+...-..-.....", "Provinces", ["Príncipe", "São Tomé"], "🇸🇹"] : never,
    R extends "SA" ? ["Saudi Arabia (‫المملكة العربية السعودية‬‎)", R, "966", "+...-..-...-....", "Regions", ["Riyadh", "Makkah", "Madinah", "Eastern Province", "Asir", "Tabuk", "Qassim", "Ha'il", "Jizan", "Najran", "Al Bahah", "Northern Borders", "Jawf", "Hail"], "🇸🇦"] : never,
    R extends "SN" ? ["Senegal (Sénégal)", R, "221", "+...-..-...-....", "Regions", ["Dakar", "Thiès", "Diourbel", "Fatick", "Kaolack", "Kolda", "Louga", "Matam", "Saint-Louis", "Sédhiou", "Tambacounda", "Kaffrine", "Kédougou", "Kolda", "Ziguinchor"], "🇸🇳"] : never,
    R extends "RS" ? ["Serbia (Србија)", R, "381", "+...-..-...-....", "Districts", ["Belgrade", "Nišava", "Šumadija", "Zaječar", "Podunavlje", "Bor", "Braničevo", "Pomoravlje", "Zlatibor", "Moravica", "Raška", "Rasina", "Toplica", "Mačva", "Kolubara", "Jablanica", "Pčinja", "Pirot", "Branicevo", "Juzni Banat", "Srednji Banat", "Severni Banat", "Zapadna Bačka", "Južna Bačka", "Severna Bačka", "Srem", "Mačva", "Kolubara", "Podrinje", "Kosovo", "Kosovska Mitrovica", "Peć", "Prizren", "Kosovska Mitrovica", "Peć", "Prizren"], "🇷🇸"] : never,
    R extends "SC" ? ["Seychelles", R, "248", "+...-.-...-...", ["Inner Islands", "Outer Islands"], { "Inner Islands": ["Mahé", "Praslin", "La Digue"], "Outer Islands": ["Alphonse", "Desroches", "Farquhar", "Aldabra"] }, "🇸🇨"] : never,
    R extends "SL" ? ["Sierra Leone", R, "232", "+...-..-......", "Provinces", ["Eastern Province", "Northern Province", "Southern Province", "Western Area"], "🇸🇱"] : never,
    R extends "SG" ? ["Singapore", R, "65", "+.. ....-....", "Regions", ["Central Region", "East Region", "North Region", "North-East Region", "West Region"], "🇸🇬"] : never,
    R extends "SX" ? ["Sint Maarten", R, "1721", "+.(...)...-....", "Regions", ["Dutch Quarter", "French Quarter", "Little Bay", "Lowlands", "Maho", "Pelican Key", "Philipsburg", "Point Blanche", "Simpson Bay"], "🇸🇽"] : never,
    R extends "SK" ? ["Slovakia (Slovensko)", R, "421", "+...(...)...-...", "Regions", ["Bratislava", "Trnava", "Trenčín", "Nitra", "Žilina", "Banská Bystrica", "Prešov", "Košice"], "🇸🇰"] : never,
    R extends "SI" ? ["Slovenia (Slovenija)", R, "386", "+...-..-...-...", "Regions", ["Pomurska", "Podravska", "Koroška", "Savinjska", "Zasavska", "Posavska", "Jugovzhodna Slovenija", "Osrednjeslovenska", "Gorenjska", "Primorsko-notranjska", "Goriška", "Obalno-kraška"], "🇸🇮"] : never,
    R extends "SB" ? ["Solomon Islands", R, "677", "+...-.....", "Provinces", ["Central Province", "Choiseul", "Guadalcanal", "Honiara", "Isabel", "Makira-Ulawa", "Malaita", "Rennell and Bellona", "Temotu", "Western Province"], "🇸🇧"] : never,
    R extends "SO" ? ["Somalia (Soomaaliya)", R, "252", "+...-.-...-...", "Regions", ["Awdal", "Bakool", "Banaadir", "Bari", "Bay", "Galguduud", "Gedo", "Hiiraan", "Jubbada Dhexe", "Jubbada Hoose", "Mudug", "Nugaal", "Sanaag", "Shabeellaha Dhexe", "Shabeellaha Hoose", "Sool", "Togdheer", "Woqooyi Galbeed"], "🇸🇴"] : never,
    R extends "ZA" ? ["South Africa", R, "27", "+..-..-...-....", "Provinces", ["Eastern Cape", "Free State", "Gauteng", "KwaZulu-Natal", "Limpopo", "Mpumalanga", "North West", "Northern Cape", "Western Cape"], "🇿🇦"] : never,
    R extends "GS" ? ["South Georgia and the South Sandwich Islands", R, "500", "", "🇬🇸"] : never,
    R extends "TG" ? ["Togo", R, "228", "+...-..-...-...", "Regions", ["Centrale", "Kara", "Maritime", "Plateaux", "Savanes"], "🇹🇬"] : never,
    R extends "TK" ? ["Tokelau", R, "690", "+...-....", "Villages", ["Atafu", "Fakaofo", "Nukunonu"], "🇹🇰"] : never,
    R extends "TN" ? ["Tunisia (‫تونس‬‎)", R, "216", "+...-..-...-...", "Regions", ["Tunis", "Ariana", "Ben Arous", "Manouba", "Nabeul", "Zaghouan", "Bizerte", "Béja", "Jendouba", "Kef", "Siliana", "Kairouan", "Kasserine", "Sidi Bouzid", "Sousse", "Monastir", "Mahdia", "Sfax", "Gabès", "Medenine", "Tataouine", "Gafsa", "Tozeur", "Kebili"], "🇹🇳"] : never,
    R extends "TH" ? ["Thailand (ไทย)", R, "66", "+..-..-...-...", "Regions", ["Bangkok", "Central Thailand", "Eastern Thailand", "Northern Thailand", "Northeastern Thailand", "Southern Thailand", "Western Thailand"], "🇹🇭"] : never,
    R extends "TL" ? ["Timor-Leste", R, "670", "+...-...-....", "Districts", ["Aileu", "Ainaro", "Baucau", "Bobonaro", "Cova Lima", "Dili", "Ermera", "Lautem", "Liquiçá", "Manatuto", "Manufahi", "Oecusse", "Viqueque"], "🇹🇱"] : never,
    R extends "TO" ? ["Tonga", R, "676", "+...-.....", "Regions", ["Eua", "Ha'apai", "Niuas", "Tongatapu", "Vava'u"], "🇹🇴"] : never,
    R extends "TT" ? ["Trinidad and Tobago", R, "1868", "+.(...)...-....", "Regions", ["Couva-Tabaquite-Talparo", "Diego Martin", "Eastern Tobago", "Penal-Debe", "Princes Town", "Rio Claro-Mayaro", "San Fernando", "Sangre Grande", "San Juan-Laventille", "Siparia", "Tunapuna-Piarco", "Port of Spain", "Point Fortin", "Chaguanas", "Borough of Arima", "Borough of Point Fortin", "Borough of Chaguanas", "Borough of Couva-Tabaquite-Talparo", "Borough of Diego Martin", "Borough of Penal-Debe", "Borough of Princes Town", "Borough of Rio Claro-Mayaro", "Borough of San Fernando", "Borough of Sangre Grande", "Borough of San Juan-Laventille", "Borough of Siparia", "Borough of Tunapuna-Piarco"], "🇹🇹"] : never,
    R extends "TR" ? ["Turkey (Türkiye)", R, "90", "+.. ... ... .. ..", "Regions", ["Adana", "Adıyaman", "Afyonkarahisar", "Ağrı", "Amasya", "Ankara", "Antalya", "Artvin", "Aydın", "Balıkesir", "Bilecik", "Bingöl", "Bitlis", "Bolu", "Burdur", "Bursa", "Çanakkale", "Çankırı", "Çorum", "Denizli", "Diyarbakır", "Edirne", "Elazığ", "Erzincan", "Erzurum", "Eskişehir", "Gaziantep", "Giresun", "Gümüşhane", "Hakkâri", "Hatay", "Isparta", "Mersin", "İstanbul", "İzmir", "Kars", "Kastamonu", "Kayseri", "Kırklareli", "Kırşehir", "Kocaeli", "Konya", "Kütahya", "Malatya", "Manisa", "Kahramanmaraş", "Mardin", "Muğla", "Muş", "Nevşehir", "Niğde", "Ordu", "Rize", "Sakarya", "Samsun", "Siirt", "Sinop", "Sivas", "Tekirdağ", "Tokat", "Trabzon", "Tunceli", "Şanlıurfa", "Uşak", "Van", "Yozgat", "Zonguldak", "Aksaray", "Bayburt", "Karaman", "Kırıkkale", "Batman", "Şırnak", "Bartın", "Ardahan", "Iğdır", "Yalova", "Karabük", "Kilis", "Osmaniye", "Düzce"], "🇹🇷"] : never,
    R extends "TM" ? ["Turkmenistan", R, "993", "+...-.-...-....", "Regions", ["Ahal", "Balkan", "Daşoguz", "Lebap", "Mary"], "🇹🇲"] : never,
    R extends "TC" ? ["Turks and Caicos Islands", R, "1649", "+.(...)...-....", "Districts", ["Grand Turk", "Salt Cay", "South Caicos", "Providenciales", "North Caicos", "Middle Caicos"], "🇹🇨"] : never,
    R extends "TV" ? ["Tuvalu", R, "688", "+...-.....", "Islands", ["Funafuti", "Nanumea", "Nui", "Nukufetau", "Nukulaelae", "Vaitupu"], "🇹🇻"] : never,
    R extends "VI" ? ["U.S. Virgin Islands", R, "1340", "+.(...)...-....", "Districts", ["Saint Croix", "Saint John", "Saint Thomas"], "🇻🇮"] : never,
    R extends "UG" ? ["Uganda", R, "256", "+...(...)...-...", "Regions", ["Central Region", "Eastern Region", "Northern Region", "Western Region"], "🇺🇬"] : never,
    R extends "UA" ? ["Ukraine (Україна)", R, "380", "+...(..)...-..-..", "Oblasts", ["Cherkasy Oblast", "Chernihiv Oblast", "Chernivtsi Oblast", "Dnipropetrovsk Oblast", "Donetsk Oblast", "Ivano-Frankivsk Oblast", "Kharkiv Oblast", "Kherson Oblast", "Khmelnytskyi Oblast", "Kiev Oblast", "Kirovohrad Oblast", "Luhansk Oblast", "Lviv Oblast", "Mykolaiv Oblast", "Odessa Oblast", "Poltava Oblast", "Rivne Oblast", "Sumy Oblast", "Ternopil Oblast", "Vinnytsia Oblast", "Volyn Oblast", "Zakarpattia Oblast", "Zaporizhzhia Oblast", "Zhytomyr Oblast", "Autonomous Republic of Crimea"], "🇺🇦"] : never,
    R extends "AE" ? ["United Arab Emirates (‫الإمارات العربية المتحدة‬‎)", R, "971", "+...-.-...-....", "Emirates", ["Abu Dhabi", "Ajman", "Dubai", "Fujairah", "Ras Al Khaimah", "Sharjah", "Umm Al Quwain"], "🇦🇪"] : never,
    R extends "GB" ? ["United Kingdom", R, "44", "+.. .... ......", "States", ["England", "Scotland", "Wales", "Northern Ireland"], "🇬🇧"] : never,
    R extends "US" ? ["United States", R, "1", "+. (...) ...-....", "States", ["Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", "Delaware", "Florida", "Georgia", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland", "Massachusetts", "Michigan", "Minnesota", "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire", "New Jersey", "New Mexico", "New York", "North Carolina", "North Dakota", "Ohio", "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island", "South Carolina", "South Dakota", "Tennessee", "Texas", "Utah", "Vermont", "Virginia", "Washington", "West Virginia", "Wisconsin", "Wyoming"], "🇺🇸", 0] : never,
    R extends "UM" ? ["United States Minor Outlying Islands", R, "1", "", "Territories", ["Baker Island", "Howland Island", "Jarvis Island", "Johnston Atoll", "Kingman Reef", "Midway Atoll", "Navassa Island", "Palmyra Atoll", "Wake Island"], "🇺🇲", 2] : never,
    R extends "UY" ? ["Uruguay", R, "598", "+...-.-...-..-..", "Departments", ["Artigas", "Canelones", "Cerro Largo", "Colonia", "Durazno", "Flores", "Florida", "Lavalleja", "Maldonado", "Montevideo", "Paysandú", "Río Negro", "Rivera", "Rocha", "Salto", "San José", "Soriano", "Tacuarembó", "Treinta y Tres"], "🇺🇾"] : never,
    R extends "UZ" ? ["Uzbekistan (Oʻzbekiston)", R, "998", "+...-..-...-....", "Regions", ["Andijan", "Bukhara", "Fergana", "Jizzakh", "Karakalpakstan", "Namangan", "Navoiy", "Qashqadaryo", "Samarqand", "Sirdaryo", "Surxondaryo", "Tashkent", "Tashkent City", "Xorazm"], "🇺🇿"] : never,
    R extends "VU" ? ["Vanuatu", R, "678", "+...-.....", "Provinces", ["Malampa", "Penama", "Sanma", "Shefa", "Tafea", "Torba"], "🇻🇺"] : never,
    R extends "VA" ? ["Vatican City (Città del Vaticano)", R, "39", "+.. .. .... ....", "🇻🇦", 1] : never,
    R extends "VE" ? ["Venezuela", R, "58", "+..(...)...-....", "States", ["Amazonas", "Anzoátegui", "Apure", "Aragua", "Barinas", "Bolívar", "Carabobo", "Cojedes", "Delta Amacuro", "Falcón", "Guárico", "Lara", "Mérida", "Miranda", "Monagas", "Nueva Esparta", "Portuguesa", "Sucre", "Táchira", "Trujillo", "Vargas", "Yaracuy", "Zulia"], "🇻🇪"] : never,
    R extends "VN" ? ["Vietnam (Việt Nam)", R, "84", "+..-..-....-...", "Regions", ["Hanoi", "Ho Chi Minh City", "Da Nang", "Hai Phong", "Can Tho", "Bien Hoa", "Hue", "Nha Trang", "Buon Ma Thuot", "Quy Nhon", "Vung Tau", "Nam Dinh", "Phan Thiet", "Long Xuyen", "Ha Long", "Thai Nguyen", "Thanh Hoa", "Rach Gia", "Cam Ranh", "Vinh", "My Tho", "Da Lat", "Bac Lieu", "Bien Hoa"], "🇻🇳"] : never,
    R extends "WF" ? ["Wallis and Futuna", R, "681", "+...-..-....", "Kingdoms", ["Uvea", "Sigave", "Alo"], "🇼🇫"] : never,
    R extends "EH" ? ["Western Sahara", R, "212", "+...-..-....", "Provinces", ["Laayoune", "Dakhla", "Smara", "Boujdour", "Aousserd"], "🇪🇭"] : never,
    R extends "YE" ? ["Yemen (‫اليمن‬‎)", R, "967", "+...-.-...-...", "Governorates", ["Sana'a", "Aden", "Taiz", "Al Hudaydah", "Ibb", "Dhamar", "Al Mukalla", "Hajjah", "Amran", "Saada", "Saywun", "Zinjibar", "Al Bayda", "Lahij", "Marib", "Al Ghaydah", "Al Mahwit", "Al Hazm", "Ataq", "Al Jawf", "Sadah", "Shabwah", "Al Dhalea", "Rida", "Al Mahrah"], "🇾🇪"] : never,
    R extends "ZM" ? ["Zambia", R, "260", "+...-..-...-....", "Provinces", ["Lusaka", "Copperbelt", "Central", "Eastern", "Luapula", "Northern", "North-Western", "Southern", "Western"], "🇿🇲"] : never,
    R extends "ZW" ? ["Zimbabwe", R, "263", "+...-.-......", "Provinces", ["Harare", "Bulawayo", "Manicaland", "Mashonaland Central", "Mashonaland East", "Mashonaland West", "Masvingo", "Matabeleland North", "Matabeleland South", "Midlands"], "🇿🇼"] : never
  ];
  /**
   * @var {AllCountries} allCountries - All countries data in
   * array format. This is the raw data used to generate the `allCountries` object.
   * 1. Can be used to get the data as an array. @type {AllCountries<RegionCode>}
   * 2. Can be used to get the data as an object. @type {Couuntry[]}
   */
  export var allCountries: AllCountries;
  /**
   * @type CountryArray - All countries data in array format. This is the raw data used
   */
  export type CountryArray<R extends RegionCode = RegionCode> = AllCountries<R>[number];
  export type GetCountryArray = <R extends RegionCode>(regionCode: R) => CountryArray<R>;

  /**
   * @type AllCountryData - All countries data in array format. This is the raw data used
   * to generate the `allCountries` object. It can be used to get the data as an array.
   */
  export type NewCountryArray<R extends RegionCode, A = []> = A extends [infer CN extends CountryName, R extends RegionCode ? R : never, infer DC extends DialCode, infer F extends PhoneNumberFormat | "", infer ZT extends ZoneType, infer Z extends Zones, infer CF extends CountryFlag, infer DP extends DialPriority, infer AC extends AreaCodes] |
  [infer CN extends CountryName, R extends RegionCode ? R : never, infer DC extends DialCode, infer F extends PhoneNumberFormat | "", infer ZT extends ZoneType, infer Z extends Zones, infer CF extends CountryFlag, infer DP extends DialPriority] |
  [infer CN extends CountryName, R extends RegionCode ? R : never, infer DC extends DialCode, infer F extends PhoneNumberFormat | "", infer ZT extends ZoneType, infer Z extends Zones, infer CF extends CountryFlag] |
  [infer CN extends CountryName, R extends RegionCode ? R : never, infer DC extends DialCode, infer F extends PhoneNumberFormat | "", infer CF extends CountryFlag, 1] |
  [infer CN extends CountryName, R extends RegionCode ? R : never, infer DC extends DialCode, infer F extends PhoneNumberFormat | "", infer CF extends CountryFlag] ?
    [CN, R, DC, F, ZT, Z, CF, DP, AC] |
    [CN, R, DC, F, ZT, Z, CF, DP] |
    [CN, R, DC, F, ZT, Z, CF] |
    [CN, R, DC, F, CF, 1] |
    [CN, R, DC, F, CF] : never;

  export const getCountryArray: GetCountryArray;
  /**
   * @type RegionCode - ISO 3166-1 alpha-2 country codes
   * @see https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2
   */
  export type RegionCode = "AF" | "AX" | "AL" | "DZ" | "AS" | "AD" | "AO" | "AI" | "AQ" | "AG" | "AR" | "AM" | "AW" | "AU" | "AT" | "AZ" | "BS" | "BH" | "BD" | "BB" | "BY" | "BE" | "BZ" | "BJ" | "BM" | "BT" | "BO" | "BA" | "BW" | "BV" | "CA" | "BR" | "IO" | "VG" | "BN" | "BG" | "BF" | "BI" | "KH" | "CM" | "TD" | "CL" | "CN" | "CV" | "BQ" | "KY" | "CF" | "CX" | "CC" | "CO" | "KM" | "CD" | "CG" | "CK" | "CR" | "CI" | "HR" | "CU" | "CW" | "CY" | "CZ" | "DK" | "DJ" | "DM" | "DO" | "EC" | "EG" | "SV" | "GQ" | "ER" | "EE" | "ET" | "FK" | "FO" | "FJ" | "FI" | "FR" | "GF" | "PF" | "TF" | "GA" | "GM" | "GE" | "DE" | "GH" | "GI" | "GR" | "GL" | "GD" | "GP" | "GU" | "GT" | "GG" | "GN" | "GW" | "GY" | "HT" | "HM" | "HN" | "KZ" | "IR" | "IQ" | "IE" | "IM" | "IL" | "HK" | "HU" | "IS" | "IN" | "ID" | "IT" | "JM" | "JP" | "JE" | "JO" | "KE" | "KI" | "XK" | "KW" | "KG" | "LA" | "LV" | "LB" | "LS" | "LR" | "LY" | "LI" | "LT" | "LU" | "MO" | "MK" | "MG" | "MW" | "MY" | "MV" | "ML" | "MT" | "MH" | "MP" | "NO" | "PK" | "ME" | "MQ" | "MR" | "MU" | "YT" | "MX" | "FM" | "MD" | "MC" | "MN" | "KP" | "OM" | "MS" | "MA" | "MZ" | "MM" | "NA" | "NR" | "NP" | "NL" | "NC" | "NZ" | "NI" | "NE" | "NG" | "NU" | "NF" | "NO" | "PW" | "PS" | "PA" | "PG" | "PY" | "RW" | "BL" | "KN" | "PE" | "PH" | "PN" | "RU" | "QA" | "RE" | "PL" | "PT" | "PR" | "RO" | "LC" | "MF" | "PM" | "VC" | "WS" | "SM" | "ST" | "SA" | "SN" | "RS" | "SC" | "SL" | "SG" | "SX" | "SK" | "SI" | "SB" | "SO" | "ZA" | "GS" | "TG" | "TK" | "TN" | "TH" | "TL" | "TO" | "TT" | "TR" | "TM" | "TC" | "TV" | "VI" | "UG" | "UA" | "AE" | "GB" | "US" | "UM" | "UY" | "UZ" | "VU" | "VA" | "VE" | "VN" | "WF" | "EH" | "YE" | "ZM" | "ZW";
  /**
   * @constant {RegionCode[]} regionCodes - ISO 3166-1 alpha-2 country codes
   */
  export const regionCodes: RegionCode[];
  // type RegionTupal = typeof regionCodes;
  /**
   * @var {CountryData} countryData - Country data - key is region code
   * @see {@link allCountries allCountries variable} All countries data
   */
  export var countryData: CountryData;

  /**
   * @type CountryData  allCountries - All countries data
   */
  export type CountryData = {
    [Key in RegionCode]: Country<Key> extends ArrayLike<CountryArray<Key>> ? Country<Key> : never;
  };

  /**
   * @interface Country - Country data interface
   * @summary Contains the structured data from the allCountries variable
   * @see {@link allCountries allCountries variable} - All countries data
   */
  export interface Country<R extends RegionCode = RegionCode> extends ArrayLike<CountryArray<R>> {
    /** @property {CountryName} name - Country name */
    name: CountryArray<R>[0] | CountryName;
    /** @property {FormOf<CountryArray<R>[0], 'Rest'>} regionCode - Region Code */
    foreignName?: CountryArray<R>[0] extends `${infer First} (${infer Rest})` ? FormOf<CountryArray<R>[0], 'Rest'> : never;
    /** @property {FormOf<CountryArray<R>[0], 'First'>} regionCode - Region Code */
    localName?: CountryArray<R>[0] extends `${infer First} (${infer Rest})` ? FormOf<CountryArray<R>[0], 'First'> : never;
    /** @property {RegionCode} regionCode - Region Code */
    regionCode: R | CountryArray<R>[1] | RegionCode;
    /** @property {DialCode} dialCode - Dial Code */
    dialCode: DialCode | CountryArray<R>[2];
    /** @property {DialPrioirity} priority - Dial Priority */
    priority: CountryArray<R>[7] extends DialPriority ? CountryArray<R>[7] : 0;
    /** @property {PhoneNumberFormat} format - Phone Number Format */
    format?: CountryArray<R>[3] extends PhoneNumberFormat ? CountryArray<R>[3] : never;
    /** @property {CountryFlag} flag - Country Flag */
    flag: CountryArray<R>[6] extends CountryFlag ? CountryArray<R>[6] : CountryArray<R>[4];
    /** @property {boolean} hasAreaCodes - Whether or not the country has area codes */
    hasAreaCodes?: CountryArray<R>[8] extends undefined | null ? never : true;
    /** @property {Zones} zones - Zones */
    zones?: CountryArray<R>[5] extends Zones ? CountryArray<R>[5] : never;
    /** @property {ZoneType} zoneTypes - Zone Types */
    zoneTypes?: CountryArray<R>[4] extends ZoneType ? CountryArray<R>[4] : never;
    /** @property {AreaCodes} areaCodes - Area Codes */
    areaCodes?: CountryArray<R>[8] extends AreaCodes ? CountryArray<R>[8] : never;
  }
  export const ignore: (CountryFlag)[]; // Ignore flags
  export interface Countries extends CountryData {
    handleZoneTypes: typeof handleZoneTypes;
  }

  export function handleZoneTypes<R extends RegionCode>(zoneTypes: CountryArray<R>[4]): ZoneType;
  export function isZoneType<R extends RegionCode>(zoneType: ZoneType | CountryFlag): zoneType is ZoneType;
  /**
   * @type FormOf<X, Pos extends 'First' | 'Rest' = 'First'> - Get the first or rest of a
   * string separated by a space
   */
  export type FormOf<X, Pos extends 'First' | 'Rest' = 'First'> = X extends `${infer First} (${infer Rest})`
    ? Pos extends 'First'
    ? First
    : Pos extends 'Rest'
    ? Rest
    : never
    : never;


  /**
   * @function isRegionCode - Check if a string is a valid region code
   * @param {string} code - The string to check
   */
  export function isRegionCode<R>(code: R): code is R extends RegionCode ? R : never;
  /**
   * @function isFlag - Check if a string is a valid Flag
   * @param {string} flag - The string to check
   */
  export function isFlag<T>(flag: T): flag is T extends CountryFlag ? T : never;
  export var flags: CountryFlag[];


  export const nameRegex: RegExp;
  export function isMultiName<T extends CountryArray<R>[0], R extends RegionCode>(name: unknown): name is T extends `${infer First} (${infer Rest})` ? `${First} (${Rest})` : never;

  //const ignoreList = ["🇨🇽", "🇨🇨", "🇮🇴", "🇧🇻", "🇦🇼", "🇦🇶", "🇭🇲", "🇵🇳", "🇳🇫", "🇬🇸", "🇻🇦", "🇦🇶", "🇦🇼"];
  export type CountryName = AllCountries<RegionCode>[number][0];
  export type DialCode = AllCountries<RegionCode>[number][2];
  export type PhoneNumberFormat = Exclude<AllCountries<RegionCode>[number][3], "" | undefined>;
  export type DialPriority = Exclude<AllCountries<RegionCode>[number][7], undefined>;
  export type AreaCodes = Exclude<AllCountries<RegionCode>[number][8], undefined>;
  export type Zones = Exclude<AllCountries<RegionCode>[number][5], undefined | number>;
  export type CountryFlag = Exclude<AllCountries<RegionCode>[number][6] | AllCountries<RegionCode>[number][4], ZoneType | undefined>;
  export type ZoneType = Exclude<AllCountries<RegionCode>[number][4], "🇨🇽" | "🇨🇨" | "🇮🇴" | "🇧🇻" | "🇦🇼" | "🇦🇶" | "🇭🇲" | "🇵🇳" | "🇳🇫" | "🇬🇸" | "🇻🇦">;
  export type ZoneArray = Util.ArrayUnion<AllCountries[number][4]>

  // we will build this in the loop below
  export type AllCountryCodes<RC extends RegionCode> = {
    [Key in DialCode]: {
      [Val in DialPriority]: RC;
    };
  } & {
    [dialCode: string]: {
      [Val in DialPriority]: RC;
    }
  };
  export type Iso2Lookup = {
    [Key in RegionCode]: number;
  }
  export type AllCountryArrays = {
    [Key in RegionCode]: AllCountries<Key>[number];
  }
  /**
   * @var {AllCountryArrays} countryArray - All countries data individualized as each array
   */
  export var countryArray: AllCountryArrays;
  export var allCountryCodes: AllCountryCodes<RegionCode>;
  export var iso2Lookup: Iso2Lookup;
  export var addCountryCode: <RC extends RegionCode>(regionCode: RC, dialCode: DialCode | string, priority?: DialPriority) => void;
