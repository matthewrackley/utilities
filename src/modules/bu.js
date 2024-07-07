"use strict";
/**
 * @file Untitled-2
 * @description
 * @author Matthew Allen Rackley
 * @copyright [Matthew Rackley's Github](https://www.github.com/matthewrackley "Matthew Rackley on github.com")
 */
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var e_1, _a, _b, e_2, _c, _d;
var _e;
Object.defineProperty(exports, "__esModule", { value: true });
exports.interfaceMatcher = exports.getCountryName = exports.countriesArray = exports.countriesPrototype = exports.regionCodes = void 0;
exports.regionCodes = ["AD", "AE", "AF", "AG", "AI", "AL", "AM", "AO", "AQ", "AR", "AS", "AT", "AU", "AW", "AX", "AZ", "BA", "BB", "BD", "BE", "BF", "BG", "BH", "BI", "BJ", "BL", "BM", "BN", "BO", "BQ", "BR", "BS", "BT", "BV", "BW", "BY", "BZ", "CA", "CC", "CD", "CF", "CG", "CI", "CK", "CL", "CM", "CN", "CO", "CR", "CU", "CV", "CW", "CX", "CY", "CZ", "DE", "DJ", "DK", "DM", "DO", "DZ", "EC", "EE", "EG", "EH", "ER", "ET", "FI", "FJ", "FK", "FM", "FO", "FR", "GA", "GB", "GD", "GE", "GF", "GG", "GH", "GI", "GL", "GM", "GN", "GP", "GQ", "GR", "GS", "GT", "GU", "GW", "GY", "HK", "HM", "HN", "HR", "HT", "HU", "ID", "IE", "IL", "IM", "IN", "IO", "IQ", "IR", "IS", "IT", "JE", "JM", "JO", "JP", "KE", "KG", "KH", "KI", "KM", "KN", "KP", "KW", "KY", "KZ", "LA", "LB", "LC", "LI", "LR", "LS", "LT", "LU", "LV", "LY", "MA", "MC", "MD", "ME", "MF", "MG", "MH", "MK", "ML", "MM", "MN", "MO", "MP", "MQ", "MR", "MS", "MT", "MU", "MV", "MW", "MX", "MY", "MZ", "NA", "NC", "NE", "NF", "NG", "NI", "NL", "NO", "NP", "NR", "NU", "NZ", "OM", "PA", "PE", "PF", "PG", "PH", "PK", "PL", "PM", "PN", "PR", "PS", "PT", "PW", "PY", "QA", "RE", "RO", "RS", "RU", "RW", "SA", "SB", "SC", "SG", "SI", "SK", "SL", "SM", "SN", "SO", "ST", "SV", "SX", "TC", "TD", "TF", "TG", "TH", "TK", "TL", "TM", "TN", "TO", "TR", "TT", "TV", "UA", "UG", "UM", "US", "UY", "UZ", "VA", "VC", "VE", "VG", "VI", "VN", "VU", "WF", "WS", "XK", "YE", "YT", "ZA", "ZM", "ZW"];
var countries = {};
//@ts-ignore
var countriesPrototype = function (regionCode) {
    //@ts-ignore
    return (function () {
        var e_3, _a, _b;
        try {
            for (var _c = __values(getRegionCodes()), _d = _c.next(); !_d.done; _d = _c.next()) {
                var key = _d.value;
                for (var i = 0; i < exports.regionCodes.length; i++) { //@ts-ignore
                    countries.array[i] = (0, exports.countriesArray)(key);
                    countries.arr = __assign(__assign({}, countries.arr), (_b = {}, _b[exports.regionCodes[i]] = (0, exports.countriesArray)(exports.regionCodes[i]), _b));
                }
            }
        }
        catch (e_3_1) { e_3 = { error: e_3_1 }; }
        finally {
            try {
                if (_d && !_d.done && (_a = _c.return)) _a.call(_c);
            }
            finally { if (e_3) throw e_3.error; }
        }
        if (regionCode) {
            for (var i = 0; i < exports.regionCodes.length; i++) {
                if (countries.array[i][1] === regionCode)
                    return countries.array[i];
            }
        }
        else {
            return countries.array;
        }
    })();
};
exports.countriesPrototype = countriesPrototype;
var countriesArray = function (regionCode) {
    var array = [
        ["Andorra", "AD", "376", "+...-...-...", "🇦🇩", "Regions", ["Andorra la Vella", "Canillo", "Encamp", "Escaldes-Engordany", "La Massana", "Ordino", "Sant Julià de Lòria"]],
        ["United Arab Emirates (‫الإمارات العربية المتحدة‬‎)", "AE", "971", "+...-.-...-....", "🇦🇪", "Emirates", ["Abu Dhabi", "Ajman", "Dubai", "Fujairah", "Ras Al Khaimah", "Sharjah", "Umm Al Quwain"]],
        ["Afghanistan (‫افغانستان‬‎)", "AF", "93", "+..-..-...-....", "🇦🇫", "Regions", ["Badakhshan", "Badghis", "Baghlan", "Balkh", "Bamyan", "Daykundi", "Farah", "Faryab", "Ghazni", "Ghor", "Helmand", "Herat", "Jowzjan", "Kabul", "Kandahar", "Kapisa", "Khost", "Kunar", "Kunduz Province", "Laghman", "Logar", "Nangarhar", "Nimruz", "Nuristan", "Paktia", "Paktika", "Panjshir", "Parwan", "Samangan", "Sar-e Pol", "Takhar", "Urozgan", "Zabul"]],
        ["Antigua and Barbuda", "AG", "1268", "+.(...)...-....", "🇦🇬", "Parishes", ["Saint George", "Saint John", "Saint Mary", "Saint Paul", "Saint Peter", "Saint Philip"]],
        ["Anguilla", "AI", "1264", "+.(...)...-....", "🇦🇮", "Districts", ["Anguilla Island", "Blowing Point", "East End", "George Hill", "Island Harbour", "North Hill", "North Side", "Sandy Ground", "Sandy Hill", "South Hill", "Stoney Ground", "The Farrington", "The Quarter", "The Valley", "West End"]],
        ["Albania (Shqipëri)", "AL", "355", "+...(...)...-...", "🇦🇱", "Counties", ["Berat", "Dibër", "Durrës", "Elbasan", "Fier", "Gjirokastër", "Korçë", "Kukës", "Lezhë", "Shkodër", "Tirana", "Vlorë"]],
        ["Armenia (Հայաստան)", "AM", "374", "+...-..-...-...", "🇦🇲", "Provinces", ["Aragatsotn", "Ararat", "Armavir", "Gegharkunik", "Kotayk", "Lori", "Shirak", "Syunik", "Tavush", "Vayots Dzor", "Yerevan"]],
        ["Angola", "AO", "244", "+...(...)...-...", "🇦🇴", "Provinces", ["Bengo", "Benguela", "Bié", "Cabinda", "Cuando Cubango", "Cuanza Norte", "Cuanza Sul", "Cunene", "Huambo", "Huíla", "Luanda", "Lunda Norte", "Lunda Sul", "Malanje", "Moxico", "Namibe", "Uíge", "Zaire"]],
        ["Antarctica", "AQ", "672", "", "🇦🇶"],
        ["Argentina", "AR", "54", "+..(...)...-....", "🇦🇷", "Regions", ["Buenos Aires", "Catamarca", "Chaco", "Chubut", "Córdoba", "Corrientes", "Entre Ríos", "Formosa", "Jujuy", "La Pampa", "La Rioja", "Mendoza", "Misiones", "Neuquén", "Río Negro", "Salta", "San Juan", "San Luis", "Santa Cruz", "Santa Fe", "Santiago del Estero", "Tierra del Fuego", "Tucumán"]],
        ["American Samoa", "AS", "1684", "+.(...)...-....", "🇦🇸", "Districts", ["Eastern District", "Manu'a District", "Rose Island", "Swains Island", "Western District"]],
        ["Austria (Österreich)", "AT", "43", "+..(...)...-....", "🇦🇹", "States", ["Burgenland", "Carinthia", "Lower Austria", "Upper Austria", "Salzburg", "Styria", "Tyrol", "Vorarlberg", "Vienna"]],
        ["Australia", "AU", "61", "+.. ... ... ...", "🇦🇺", ["States", "Territories"], { "States": ["New South Wales", "Queensland", "South Australia", "Tasmania", "Victoria", "Western Australia"], "Territories": ["Australian Capital Territory", "Northern Territory"] }],
        ["Aruba", "AW", "297", "+...-...-....", "🇦🇼"],
        ["Åland Islands", "AX", "358", "", "🇦🇽", "Municipalities", ["Mariehamn", "Jomala", "Finström", "Lemland", "Saltvik", "Hammarland", "Sund", "Eckerö", "Föglö", "Geta", "Vårdö", "Brändö", "Lumparland", "Kumlinge", "Kökar", "Sottunga"]],
        ["Azerbaijan (Azərbaycan)", "AZ", "994", "+...-..-...-..-..", "🇦🇿", "Districts", ["Absheron", "Agdam", "Agdash", "Agstafa", "Agsu", "Astara", "Baku", "Balakan", "Barda", "Beylagan", "Bilasuvar", "Dashkasan", "Fizuli", "Ganja", "Gobustan", "Goranboy", "Goychay", "Goygol", "Hajigabul", "Imishli", "Ismailli", "Jabrayil", "Jalilabad", "Kalbajar", "Kurdamir", "Lachin", "Lankaran", "Lankaran", "Lerik", "Masally", "Mingachevir", "Naftalan", "Nakhchivan", "Neftchala", "Oghuz", "Ordubad", "Qabala", "Qakh", "Qazakh", "Quba", "Qubadli", "Qusar", "Saatly", "Sabirabad", "Salyan", "Shabran", "Shaki", "Shamakhi", "Shamkir", "Shirvan", "Shusha", "Siazan", "Sumgayit", "Tartar", "Tovuz", "Ujar", "Yardymli", "Yevlakh", "Zangilan", "Zaqatala", "Zardab"]],
        ["Bosnia and Herzegovina (Босна и Херцеговина)", "BA", "387", "+...-..-....", "🇧🇦", "Regions", ["Brčko District", "Federation of Bosnia and Herzegovina", "Republika Srpska"]],
        ["Barbados", "BB", "1246", "+.(...)...-....", "🇧🇧", "Regions", ["Christ Church", "Saint Andrew", "Saint George", "Saint James", "Saint John", "Saint Joseph", "Saint Lucy", "Saint Michael", "Saint Peter", "Saint Philip", "Saint Thomas"]],
        ["Bangladesh (বাংলাদেশ)", "BD", "880", "+...-..-...-...", "🇧🇩", "Districts", ["Barisal", "Chittagong", "Dhaka", "Khulna", "Mymensingh", "Rajshahi", "Rangpur", "Sylhet"]],
        ["Belgium (België)", "BE", "32", "+.. ... .. .. ..", "🇧🇪", "States", ["Brussels", "Flemish Brabant", "Walloon Brabant", "Antwerp", "East Flanders", "West Flanders", "Hainaut", "Liège", "Limburg", "Luxembourg", "Namur"]],
        ["Burkina Faso", "BF", "226", "+...-..-..-....", "🇧🇫", "Provinces", ["Balé", "Bam", "Banwa", "Bazèga", "Bougouriba", "Boulgou", "Boulkiemdé", "Comoé", "Ganzourgou", "Gnagna", "Gourma", "Houet", "Ioba", "Kadiogo", "Kénédougou", "Komondjari", "Kompienga", "Kossi", "Koulpélogo", "Kouritenga", "Kourwéogo", "Léraba", "Loroum", "Mouhoun", "Namentenga", "Nahouri", "Nayala", "Noumbiel", "Oubritenga", "Oudalan", "Passoré", "Poni", "Sanguié", "Sanmatenga", "Séno", "Sissili", "Soum", "Sourou", "Tapoa", "Tui", "Yagha", "Yatenga", "Ziro", "Zondoma", "Zoundwéogo"]],
        ["Bulgaria (България)", "BG", "359", "+...(...)...-...", "🇧🇬", "States", ["Blagoevgrad", "Burgas", "Dobrich", "Gabrovo", "Haskovo", "Kardzhali", "Kyustendil", "Lovech", "Montana", "Pazardzhik", "Pernik", "Pleven", "Plovdiv", "Razgrad", "Ruse", "Shumen", "Silistra", "Sliven", "Smolyan", "Sofia", "Stara Zagora", "Targovishte", "Varna", "Veliko Tarnovo", "Vidin", "Vratsa", "Yambol"]],
        ["Bahrain (‫البحرين‬‎)", "BH", "973", "+...-....-....", "🇧🇭", "Governorates", ["Capital Governorate", "Muharraq Governorate", "Northern Governorate", "Southern Governorate"]],
        ["Burundi (Uburundi)", "BI", "257", "+...-..-..-....", "🇧🇮", "Provinces", ["Bubanza", "Bujumbura Mairie", "Bujumbura Rural", "Bururi", "Cankuzo", "Cibitoke", "Gitega", "Karuzi", "Kayanza", "Kirundo", "Makamba", "Muramvya", "Muyinga", "Mwaro", "Ngozi", "Rumonge", "Rutana", "Ruyigi"]],
        ["Benin (Bénin)", "BJ", "229", "+...-..-..-....", "🇧🇯", "Departments", ["Alibori", "Atakora", "Atlantique", "Borgou", "Collines", "Donga", "Kouffo", "Littoral", "Mono", "Ouémé", "Plateau", "Zou"]],
        ["Saint Barthélemy (Saint-Barthélemy)", "BL", "590", "", "🇧🇱", "Parishes", ["Gustavia"], 1],
        ["Bermuda", "BM", "1441", "+.(...)...-....", "🇧🇲", ["Parishes", "Municipalities"], { "Parishes": ["Devonshire", "Hamilton", "Paget", "Pembroke", "Sandys", "Smith's", "Southampton", "St. George's", "Warwick"], "Municipalities": ["Hamilton", "St. George's"] }],
        ["Brunei", "BN", "673", "+...-...-....", "🇧🇳", "Districts", ["Belait", "Brunei-Muara", "Temburong", "Tutong"]],
        ["Bolivia", "BO", "591", "+...-.-...-....", "🇧🇴", "States", ["Chuquisaca", "Cochabamba", "Beni", "La Paz", "Oruro", "Pando", "Potosí", "Santa Cruz", "Tarija"]],
        ["Caribbean Netherlands", "BQ", "599", "+...-...-....", "🇧🇶", "Special Municipalities", ["Bonaire", "Saba", "Sint Eustatius"], 1],
        ["Brazil (Brasil)", "BR", "55", "+..-..-....-....", "🇧🇷", "Regions", ["Acre", "Alagoas", "Amapá", "Amazonas", "Bahia", "Ceará", "Distrito Federal", "Espírito Santo", "Goiás", "Maranhão", "Mato Grosso", "Mato Grosso do Sul", "Minas Gerais", "Pará", "Paraíba", "Paraná", "Pernambuco", "Piauí", "Rio de Janeiro", "Rio Grande do Norte", "Rio Grande do Sul", "Rondônia", "Roraima", "Santa Catarina", "São Paulo", "Sergipe", "Tocantins"]],
        ["Bahamas", "BS", "1242", "+.(...)...-....", "🇧🇸", "Regions", ["Acklins", "Berry Islands", "Bimini", "Black Point", "Cat Island", "Central Abaco", "Central Andros", "Central Eleuthera", "City of Freeport", "Crooked Island and Long Cay", "East Grand Bahama", "Exuma", "Grand Cay", "Harbour Island", "Hope Town", "Inagua", "Long Island", "Mangrove Cay", "Mayaguana", "Moore's Island", "North Abaco", "North Andros", "North Eleuthera", "Ragged Island", "Rum Cay", "San Salvador", "South Abaco", "South Andros", "South Eleuthera", "Spanish Wells", "West Grand Bahama"]],
        ["Bhutan (འབྲུག)", "BT", "975", "+...-.-...-...", "🇧🇹", "Regions", ["Bumthang", "Chukha", "Dagana", "Gasa", "Haa", "Lhuntse", "Mongar", "Paro", "Pemagatshel", "Punakha", "Samdrup Jongkhar", "Samtse", "Sarpang", "Thimphu", "Trashigang", "Trashiyangtse", "Trongsa", "Tsirang", "Wangdue Phodrang", "Zhemgang"]],
        ["Bouvet Island", "BV", "47", "", "🇧🇻"],
        ["Botswana", "BW", "267", "+...-..-...-...", "🇧🇼", "Districts", ["Central District", "Ghanzi District", "Kgalagadi District", "Kgatleng District", "Kweneng District", "North-East District", "North-West District", "South-East District", "Southern District"]],
        ["Belarus (Беларусь)", "BY", "375", "+...(..)...-..-..", "🇧🇾", "Regions", ["Brest Region", "Gomel Region", "Grodno Region", "Minsk Region", "Mogilev Region", "Vitebsk Region"]],
        ["Belize", "BZ", "501", "+...-...-....", "🇧🇿", "Districts", ["Belize District", "Cayo District", "Corozal District", "Orange Walk District", "Stann Creek District", "Toledo District"]],
        ["Canada", "CA", "1", "+. (...) ...-....", "🇨🇦", ["Territories", "Provinces"], { "Territories": ["Northwest Territories", "Nunavut", "Yukon"], "Provinces": ["Alberta", "British Columbia", "Manitoba", "New Brunswick", "Newfoundland and Labrador", "Nova Scotia", "Ontario", "Prince Edward Island", "Quebec", "Saskatchewan"] }, 1, ["204", "236", "249", "250", "289", "306", "343", "365", "387", "403", "416", "418", "431", "437", "438", "450", "506", "514", "519", "548", "579", "581", "587", "604", "613", "639", "647", "672", "705", "709", "742", "778", "780", "782", "807", "819", "825", "867", "873", "902", "905"]],
        ["Cocos (Keeling) Islands", "CC", "61", "", "🇨🇨"],
        ["Congo (DRC) (Jamhuri ya Kidemokrasia ya Kongo)", "CD", "243", "+...(...)...-...", "🇨🇩", "Provinces", ["Kinshasa", "Kongo Central", "Kwango", "Kwilu", "Kasai", "Kasai-Central", "Kasai-Oriental", "Sankuru", "Maniema", "South Kivu", "North Kivu", "Ituri", "Haut-Uele", "Tshopo", "Bas-Uele", "Tanganyika", "Haut-Lomami", "Lualaba", "Kwango", "Kwilu", "Kasai", "Kasai-Central", "Kasai-Oriental", "Sankuru", "Maniema", "South Kivu", "North Kivu", "Ituri", "Haut-Uele", "Tshopo", "Bas-Uele", "Tanganyika", "Haut-Lomami", "Lualaba"]],
        ["Central African Republic (République centrafricaine)", "CF", "236", "+...-..-..-....", "🇨🇫", "Regions", ["Bamingui-Bangoran", "Bangui", "Basse-Kotto", "Haute-Kotto", "Haut-Mbomou", "Kémo", "Lobaye", "Mambéré-Kadéï", "Mbomou", "Nana-Grébizi", "Nana-Mambéré", "Ombella-M'Poko", "Ouaka", "Ouham", "Ouham-Pendé", "Sangha-Mbaéré", "Vakaga"]],
        ["Congo (Republic) (Congo-Brazzaville)", "CG", "242", "+...-..-...-....", "🇨🇬", "Departments", ["Bouenza", "Cuvette", "Cuvette-Ouest", "Kouilou", "Lékoumou", "Likouala", "Niari", "Plateaux", "Pool", "Sangha"]],
        ["Côte d’Ivoire", "CI", "225", "+...-..-...-...", "🇨🇮", "Regions", ["Lagunes", "Haut-Sassandra", "Savanes", "Vallée du Bandama", "Moyen-Comoé", "18 Montagnes", "Lacs", "Zanzan", "Bas-Sassandra", "Denguélé", "N'zi-Comoé", "Marahoué", "Sud-Comoé", "Worodougou", "Sud-Bandama", "Agnéby-Tiassa", "Bafing", "Gbêkê", "Fromager", "Moyen-Cavally", "Nawa", "Indénié-Djuablin", "Bounkani", "Moronou", "Gbôklé", "Iffou", "Bagoué", "Tchologo", "Poro", "Kabadougou", "Béré", "Korhogo"]],
        ["Cook Islands", "CK", "682", "+...-..-...", "🇨🇰", ["Islands", "Districts"], { "Islands": ["Aitutaki", "Atiu", "Mangaia", "Manihiki", "Mauke", "Mitiaro", "Nassau", "Palmerston", "Penrhyn", "Pukapuka", "Rakahanga", "Rarotonga", "Suwarrow", "Takutea"], "Districts": ["Avarua", "Matavera", "Ngatangiia", "Takitumu"] }],
        ["Chile", "CL", "56", "+..-.-....-....", "🇨🇱", "States", ["Arica y Parinacota", "Tarapacá", "Antofagasta", "Atacama", "Coquimbo", "Valparaíso", "Región Metropolitana de Santiago", "Libertador General Bernardo O'Higgins", "Maule", "Ñuble", "Biobío", "La Araucanía", "Los Ríos", "Los Lagos", "Aysén", "Magallanes y de la Antártica Chilena"]],
        ["Cameroon (Cameroun)", "CM", "237", "+...-....-....", "🇨🇲", "Regions", ["Adamaoua", "Centre", "East", "Far North", "Littoral", "North", "Northwest", "South", "Southwest", "West"]],
        ["China (中国)", "CN", "86", "+.. ..-........", "🇨🇳", ["Provinces", "Municipalities", "Autonomous Regions", "Special Administrative Regions"], { "Provinces": ["Anhui", "Fujian", "Gansu", "Guangdong", "Guizhou", "Hainan", "Hebei", "Heilongjiang", "Henan", "Hubei", "Hunan", "Jiangsu", "Jiangxi", "Jilin", "Liaoning", "Qinghai", "Shaanxi", "Shandong", "Shanxi", "Sichuan", "Yunnan", "Zhejiang"], "Municipalities": ["Beijing", "Chongqing", "Shanghai", "Tianjin"], "Autonomous Regions": ["Guangxi", "Inner Mongolia", "Ningxia", "Tibet", "Xinjiang"], "Special Administrative Regions": ["Hong Kong", "Macau"] }],
        ["Colombia", "CO", "57", "+..(...)...-....", "🇨🇴", "States", ["Amazonas", "Antioquia", "Arauca", "Atlántico", "Bolívar", "Boyacá", "Caldas", "Caquetá", "Casanare", "Cauca", "Cesar", "Chocó", "Córdoba", "Cundinamarca", "Guainía", "Guaviare", "Huila", "La Guajira", "Magdalena", "Meta", "Nariño", "Norte de Santander", "Putumayo", "Quindío", "Risaralda", "San Andrés, Providencia y Santa Catalina", "Santander", "Sucre", "Tolima", "Valle del Cauca", "Vaupés", "Vichada"]],
        ["Costa Rica", "CR", "506", "+... ....-....", "🇨🇷", "Provinces", ["San José", "Alajuela", "Cartago", "Heredia", "Guanacaste", "Puntarenas", "Limón"]],
        ["Cuba", "CU", "53", "+..-.-...-....", "🇨🇺", "Provinces", ["Pinar del Río", "Artemisa", "La Habana", "Mayabeque", "Matanzas", "Cienfuegos", "Villa Clara", "Sancti Spíritus", "Ciego de Ávila", "Camagüey", "Las Tunas", "Holguín", "Granma", "Santiago de Cuba", "Guantánamo", "Isla de la Juventud"]],
        ["Cape Verde (Kabu Verdi)", "CV", "238", "+...(...)..-..", "🇨🇻", "Regions", ["Barlavento Islands", "Sotavento Islands"]],
        ["Curaçao", "CW", "599", "+...-...-....", "🇨🇼", "Regions", ["Willemstad", "Bandabou", "Bandariba"], 0],
        ["Christmas Island", "CX", "61", "", "🇨🇽"],
        ["Cyprus (Κύπρος)", "CY", "357", "+...-..-...-...", "🇨🇾", "Regions", ["Nicosia", "Limassol", "Larnaca", "Paphos", "Famagusta"]],
        ["Czech Republic (Česká republika)", "CZ", "420", "+...(...)...-...", "🇨🇿", "Regions", ["Prague", "Central Bohemian Region", "South Bohemian Region", "Plzeň Region", "Karlovy Vary Region", "Ústí nad Labem Region", "Liberec Region", "Hradec Králové Region", "Pardubice Region", "Olomouc Region", "Moravian-Silesian Region", "South Moravian Region", "Zlín Region", "Vysočina Region"]],
        ["Germany (Deutschland)", "DE", "49", "+.. ... .......", "🇩🇪", "States", ["Baden-Württemberg", "Bavaria", "Berlin", "Brandenburg", "Bremen", "Hamburg", "Hesse", "Lower Saxony", "Mecklenburg-Vorpommern", "North Rhine-Westphalia", "Rhineland-Palatinate", "Saarland", "Saxony", "Saxony-Anhalt", "Schleswig-Holstein", "Thuringia"]],
        ["Djibouti", "DJ", "253", "+...-..-..-..-..", "🇩🇯", "Regions", ["Djibouti City", "Ali Sabieh", "Dikhil", "Arta", "Tadjourah", "Obock"]],
        ["Denmark (Danmark)", "DK", "45", "+.. .. .. .. ..", "🇩🇰", "Regions", ["Capital Region of Denmark", "Region Zealand", "Region of Southern Denmark", "Central Denmark Region", "North Denmark Region"]],
        ["Dominica", "DM", "1767", "+.(...)...-....", "🇩🇲", "Regions", ["Saint Andrew Parish", "Saint David Parish", "Saint George Parish", "Saint John Parish", "Saint Joseph Parish", "Saint Luke Parish", "Saint Mark Parish", "Saint Patrick Parish", "Saint Paul Parish", "Saint Peter Parish"]],
        ["Dominican Republic (República Dominicana)", "DO", "1", "+.(...)...-....", "🇩🇴", "Provinces", ["Azua", "Bahoruco", "Barahona", "Dajabón", "Distrito Nacional", "Duarte", "Elías Piña", "El Seibo", "Espaillat", "Hato Mayor", "Hermanas Mirabal", "Independencia", "La Altagracia", "La Romana", "La Vega", "María Trinidad Sánchez", "Monseñor Nouel", "Monte Cristi", "Monte Plata", "Pedernales", "Peravia", "Puerto Plata", "Samaná", "San Cristóbal", "San José de Ocoa", "San Juan", "San Pedro de Macorís", "Sánchez Ramírez", "Santiago", "Santiago Rodríguez", "Santo Domingo", "Valverde"], 2, ["809", "829", "849"]],
        ["Algeria (‫الجزائر‬‎)", "DZ", "213", "+...-..-...-....", '🇩🇿', "Regions", ["Adrar", "Chlef", "Laghouat", "Oum El Bouaghi", "Batna", "Béjaïa", "Biskra", "Béchar", "Blida", "Bouira", "Tamanrasset", "Tébessa", "Tlemcen", "Tiaret", "Tizi Ouzou", "Alger", "Djelfa", "Jijel", "Sétif", "Saïda", "Skikda", "Sidi Bel Abbès", "Annaba", "Guelma", "Constantine", "Médéa", "Mostaganem", "M'Sila", "Mascara", "Ouargla", "Oran", "El Bayadh", "Illizi", "Bordj Bou Arréridj", "Boumerdès", "El Tarf", "Tindouf", "Tissemsilt", "El Oued", "Khenchela", "Souk Ahras", "Tipaza", "Mila", "Aïn Defla", "Naâma", "Aïn Témouchent", "Ghardaïa", "Relizane"]],
        ["Ecuador", "EC", "593", "+...-.-...-....", "🇪🇨", "Provinces", ["Azuay", "Bolivar", "Cañar", "Carchi", "Chimborazo", "Cotopaxi", "El Oro", "Esmeraldas", "Galapagos", "Guayas", "Imbabura", "Loja", "Los Rios", "Manabi", "Morona Santiago", "Napo", "Orellana", "Pastaza", "Pichincha", "Santa Elena", "Santo Domingo de los Tsachilas", "Sucumbios", "Tungurahua", "Zamora Chinchipe"]],
        ["Estonia (Eesti)", "EE", "372", "+...-...-....", "🇪🇪", "Counties", ["Harju County", "Hiiu County", "Ida-Viru County", "Järva County", "Jõgeva County", "Lääne County", "Lääne-Viru County", "Põlva County", "Pärnu County", "Rapla County", "Saare County", "Tartu County", "Valga County", "Viljandi County", "Võru County"]],
        ["Egypt (‫مصر‬‎)", "EG", "20", "+..(...)...-....", "🇪🇬", "Governorates", ["Alexandria", "Aswan", "Asyut", "Beheira", "Beni Suef", "Cairo", "Dakahlia", "Damietta", "Faiyum", "Gharbia", "Giza", "Ismailia", "Kafr El Sheikh", "Luxor", "Matruh", "Minya", "Monufia", "New Valley", "North Sinai", "Port Said", "Qalyubia", "Qena", "Red Sea", "Sharqia", "Sohag", "South Sinai", "Suez"]],
        ["Western Sahara", "EH", "212", "+...-..-....", "🇪🇭", "Provinces", ["Laayoune", "Dakhla", "Smara", "Boujdour", "Aousserd"]],
        ["Eritrea", "ER", "291", "+...-.-...-...", "🇪🇷", "Regions", ["Anseba", "Debub", "Gash-Barka", "Maekel", "Northern Red Sea", "Southern Red Sea"]],
        ["Ethiopia", "ET", "251", "+...-..-...-....", "🇪🇹", "Regions", ["Addis Ababa", "Afar", "Amhara", "Benishangul-Gumuz", "Dire Dawa", "Gambela", "Harari", "Oromia", "Sidama", "Somali", "Southern Nations, Nationalities, and Peoples' Region", "Tigray"]],
        ["Finland (Suomi)", "FI", "358", "+... .. .... ....", "🇫🇮", "Regions", ["Åland Islands", "Central Finland", "Central Ostrobothnia", "Eastern Finland", "Kainuu", "Kanta-Häme", "Kymenlaakso", "Lapland", "North Karelia", "Northern Ostrobothnia", "Northern Savonia", "Ostrobothnia", "Päijänne Tavastia", "Pirkanmaa", "Satakunta", "South Karelia", "Southern Ostrobothnia", "Southern Savonia", "Tavastia Proper", "Uusimaa", "Varsinais-Suomi"]],
        ["Fiji", "FJ", "679", "+...-..-.....", "🇫🇯", "Divisions", ["Central", "Eastern", "Northern", "Western"]],
        ["Falkland Islands (Islas Malvinas)", "FK", "500", "+...-.....", "🇫🇰", "Regions", ["East Falkland", "West Falkland", "Staten Island"]],
        ["Micronesia", "FM", "691", "+...-...-....", "🇫🇲", "States", ["Chuuk", "Kosrae", "Pohnpei", "Yap"]],
        ["Faroe Islands (Føroyar)", "FO", "298", "+...-...-...", "🇫🇴", "Municipalities", ["Tórshavn", "Klaksvík", "Runavík", "Eystur", "Vágar"]],
        ["France", "FR", "33", "+.. . .. .. .. ..", "🇫🇷", "Regions", ["Auvergne-Rhône-Alpes", "Bourgogne-Franche-Comté", "Brittany", "Centre-Val de Loire", "Corsica", "Grand Est", "Hauts-de-France", "Île-de-France", "Normandy", "Nouvelle-Aquitaine", "Occitanie", "Pays de la Loire", "Provence-Alpes-Côte d'Azur"]],
        ["Gabon", "GA", "241", "+...-.-..-..-..", "🇬🇦", "Provinces", ["Estuaire", "Haut-Ogooué", "Moyen-Ogooué", "Ngounié", "Nyanga", "Ogooué-Ivindo", "Ogooué-Lolo", "Ogooué-Maritime", "Woleu-Ntem"]],
        ["United Kingdom", "GB", "44", "+.. .... ......", "🇬🇧", "States", ["England", "Scotland", "Wales", "Northern Ireland"]],
        ["Grenada", "GD", "1473", "+.(...)...-....", "🇬🇩", "Parishes", ["Saint Andrew", "Saint David", "Saint George", "Saint John", "Saint Mark", "Saint Patrick"]],
        ["Georgia (საქართველო)", "GE", "995", "+...(...)...-...", "🇬🇪", "Regions", ["Abkhazia", "Adjara", "Guria", "Imereti", "Kakheti", "Kvemo Kartli", "Mtskheta-Mtianeti", "Racha-Lechkhumi and Kvemo Svaneti", "Samegrelo-Zemo Svaneti", "Samtskhe-Javakheti", "Shida Kartli", "Tbilisi"]],
        ["French Guiana (Guyane française)", "GF", "594", "+...-.....-....", "🇬🇫", ["Arrondissements", "Communes"], { "Arrondissements": ["Cayenne", "Saint-Laurent-du-Maroni"], "Communes": ["Matoury", "Kourou", "Remire-Montjoly"] }],
        ["Guernsey", "GG", "44", "", "🇬🇬", "Parishes", ["Castel", "Forest", "St. Andrew", "St. Martin", "St. Peter Port", "St. Pierre du Bois", "St. Sampson", "St. Saviour", "Torteval", "Vale"]],
        ["Ghana (Gaana)", "GH", "233", "+...(...)...-...", "🇬🇭", "Regions", ["Ashanti", "Brong-Ahafo", "Central", "Eastern", "Greater Accra", "Northern", "Upper East", "Upper West", "Volta", "Western"]],
        ["Gibraltar", "GI", "350", "+...-...-.....", "🇬🇮", "Districts", ["East Side", "North District", "South District", "Town Area", "Westside"]],
        ["Greenland (Kalaallit Nunaat)", "GL", "299", "+...-..-..-..", "🇬🇱", "Municipalities", ["Kujalleq", "Qaasuitsup", "Qeqqata", "Sermersooq"]],
        ["Gambia", "GM", "220", "+...(...)..-..", "🇬🇲", "Divisions", ["Banjul", "Lower River", "Central River", "North Bank", "Upper River", "West Coast"]],
        ["Guinea (Guinée)", "GN", "224", "+...-..-...-...", "🇬🇳", "Regions", ["Boké", "Conakry", "Faranah", "Kankan", "Kindia", "Labé", "Mamou", "Nzérékoré"]],
        ["Guadeloupe", "GP", "590", "", "🇬🇵", ["Arrondissements", "Cantons", "Communes"], { "Arrondissements": ["Basse-Terre", "Pointe-à-Pitre"], "Cantons": [], "Communes": ["Les Abymes", "Baie-Mahault", "Le Gosier", "Petit-Bourg"] }, 0],
        ["Equatorial Guinea (Guinea Ecuatorial)", "GQ", "240", "+...-..-...-....", "🇬🇶", "Provinces", ["Annobón", "Bioko Norte", "Bioko Sur", "Centro Sur", "Kié-Ntem", "Litoral", "Wele-Nzas"]],
        ["Greece (Ελλάδα)", "GR", "30", "+..(...)...-....", "🇬🇷", "Regions", ["Attica", "Central Greece", "Central Macedonia", "Crete", "Eastern Macedonia and Thrace", "Epirus", "Ionian Islands", "North Aegean", "Peloponnese", "South Aegean", "Thessaly", "Western Greece", "Western Macedonia"]],
        ["South Georgia and the South Sandwich Islands", "GS", "500", "", "🇬🇸"],
        ["Guatemala", "GT", "502", "+... ....-....", "🇬🇹", "Departments", ["Alta Verapaz", "Baja Verapaz", "Chimaltenango", "Chiquimula", "El Progreso", "Escuintla", "Guatemala", "Huehuetenango", "Izabal", "Jalapa", "Jutiapa", "Petén", "Quetzaltenango", "Quiché", "Retalhuleu", "Sacatepéquez", "San Marcos", "Santa Rosa", "Sololá", "Suchitepéquez", "Totonicapán", "Zacapa"]],
        ["Guam", "GU", "1671", "+.(...)...-....", "🇬🇺", "Villages", ["Agana Heights", "Agat", "Asan", "Barrigada", "Chalan Pago-Ordot", "Dededo", "Hagatna", "Inarajan", "Mangilao", "Merizo", "Mongmong-Toto-Maite", "Piti", "Santa Rita", "Sinajana", "Talofofo", "Tamuning", "Umatac", "Yigo", "Yona"]],
        ["Guinea-Bissau (Guiné Bissau)", "GW", "245", "+...-.-......", "🇬🇼", "Regions", ["Bafatá", "Biombo", "Bolama", "Cacheu", "Gabú", "Oio", "Quinara", "Tombali"]],
        ["Guyana", "GY", "592", "+...-...-....", "🇬🇾", "Regions", ["Barima-Waini", "Cuyuni-Mazaruni", "Demerara-Mahaica", "East Berbice-Corentyne", "Essequibo Islands-West Demerara", "Mahaica-Berbice", "Pomeroon-Supenaam", "Potaro-Siparuni", "Upper Demerara-Berbice", "Upper Takutu-Upper Essequibo"]],
        ["Hong Kong (香港)", "HK", "852", "+... .... ....", "🇭🇰", "Districts", ["Central and Western", "Eastern", "Islands", "Kowloon City", "Kwai Tsing", "Kwun Tong", "North", "Sai Kung", "Sha Tin", "Sham Shui Po", "Southern", "Tai Po", "Tsuen Wan", "Tuen Mun", "Wan Chai", "Wong Tai Sin", "Yau Tsim Mong", "Yuen Long"]],
        ["Heard Island and McDonald Islands", "HM", "672", "", "🇭🇲"],
        ["Honduras", "HN", "504", "+...-....-....", "🇭🇳", "Departments", ["Atlántida", "Choluteca", "Colón", "Comayagua", "Copán", "Cortés", "El Paraíso", "Francisco Morazán", "Gracias a Dios", "Intibucá", "Islas de la Bahía", "La Paz", "Lempira", "Ocotepeque", "Olancho", "Santa Bárbara", "Valle", "Yoro"]],
        ["Croatia (Hrvatska)", "HR", "385", "+...-..-...-...", "🇭🇷", "Counties", ["Zagreb County", "Krapina-Zagorje County", "Sisak-Moslavina County", "Karlovačka County", "Varaždin County", "Koprivnica-Križevci County", "Bjelovar-Bilogora County", "Primorje-Gorski Kotar County", "Lika-Senj County", "Virovitica-Podravina County", "Požega-Slavonia County", "Brod-Posavina County", "Zadar County", "Osijek-Baranja County", "Šibenik-Knin County", "Vukovar-Syrmia County", "Split-Dalmatia County", "Istria County", "Dubrovnik-Neretva County", "Međimurje County", "Grad Zagreb"]],
        ["Haiti", "HT", "509", "+... ....-....", "🇭🇹", "Departments", ["Artibonite", "Centre", "Grand'Anse", "Nippes", "Nord", "Nord-Est", "Nord-Ouest", "Ouest", "Sud", "Sud-Est"]],
        ["Hungary (Magyarország)", "HU", "36", "+..(...)...-...", "🇭🇺", "Counties", ["Bács-Kiskun", "Baranya", "Békés", "Borsod-Abaúj-Zemplén", "Csongrád-Csanád", "Fejér", "Győr-Moson-Sopron", "Hajdú-Bihar", "Heves", "Jász-Nagykun-Szolnok", "Komárom-Esztergom", "Nógrád", "Pest", "Somogy", "Szabolcs-Szatmár-Bereg", "Tolna", "Vas", "Veszprém", "Zala"]],
        ["Indonesia", "ID", "62", "+..-..-...-..", "🇮🇩", "Provinces", ["Aceh", "Bali", "Bangka Belitung", "Banten", "Bengkulu", "Central Java", "Central Kalimantan", "Central Sulawesi", "East Java", "East Kalimantan", "East Nusa Tenggara", "Gorontalo", "Jakarta", "Jambi", "Lampung", "Maluku", "North Kalimantan", "North Maluku", "North Sulawesi", "North Sumatra", "Papua", "Riau", "Riau Islands", "South Kalimantan", "South Sulawesi", "South Sumatra", "Southeast Sulawesi", "West Java", "West Kalimantan", "West Nusa Tenggara", "West Papua", "West Sulawesi", "West Sumatra", "Yogyakarta"]],
        ["Ireland", "IE", "353", "+... .. .......", "🇮🇪", "Counties", ["Carlow", "Cavan", "Clare", "Cork", "Donegal", "Dublin", "Galway", "Kerry", "Kildare", "Kilkenny", "Laois", "Leitrim", "Limerick", "Longford", "Louth", "Mayo", "Meath", "Monaghan", "Offaly", "Roscommon", "Sligo", "Tipperary", "Waterford", "Westmeath", "Wexford", "Wicklow"]],
        ["Israel (‫ישראל‬‎)", "IL", "972", "+...-.-...-....", "🇮🇱", "Districts", ["Central", "Haifa", "Jerusalem", "Northern", "Southern", "Tel Aviv"]],
        ["Isle of Man", "IM", "44", "", "🇮🇲", ["Parishes", "Sheadings"], { "Parishes": ["Andreas", "Arbory", "Ballaugh", "Braddan", "Bride", "Castletown", "Douglas", "German", "Jurby", "Laxey", "Lezayre", "Lonan", "Malew", "Marown", "Maughold", "Michael", "Onchan", "Patrick", "Peel", "Port Erin", "Port St Mary", "Ramsey", "Rushen"], "Sheadings": ["Garff", "Glenfaba", "Middle", "Peel", "Rushen"] }],
        ["India (भारत)", "IN", "91", "+.. .....-.....", "🇮🇳", "States", ["Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh", "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka", "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal"]],
        ["British Indian Ocean Territory", "IO", "246", "+...-...-....", "🇮🇴"],
        ["Iraq (‫العراق‬‎)", "IQ", "964", "+...(...)...-....", "🇮🇶", "Governorates", ["Al Anbar", "Babil", "Baghdad", "Basra", "Dhi Qar", "Diyala", "Dohuk", "Erbil", "Karbala", "Kirkuk", "Maysan", "Muthanna", "Najaf", "Nineveh", "Qadisiyyah", "Saladin", "Sulaymaniyah", "Wasit"]],
        ["Iran (‫ایران‬‎)", "IR", "98", "+..(...)...-....", "🇮🇷", "Provinces", ["Alborz", "Ardabil", "Bushehr", "Chaharmahal and Bakhtiari", "East Azerbaijan", "Isfahan", "Fars", "Gilan", "Golestan", "Hamadan", "Hormozgan", "Ilam", "Kerman", "Kermanshah", "Khuzestan", "Kohgiluyeh and Boyer-Ahmad", "Kurdistan", "Lorestan", "Markazi", "Mazandaran", "North Khorasan", "Qazvin", "Qom", "Razavi Khorasan", "Semnan", "Sistan and Baluchestan", "South Khorasan", "Tehran", "West Azerbaijan", "Yazd", "Zanjan"]],
        ["Iceland (Ísland)", "IS", "354", "+... ... ....", "🇮🇸", "Regions", ["Capital Region", "Southern Peninsula", "Western Region", "Westfjords", "Northwest Region", "Northeast Region", "East Region", "South Region"]],
        ["Italy (Italia)", "IT", "39", "+.. ... ......", "🇮🇹", "Regions", ["Abruzzo", "Basilicata", "Calabria", "Campania", "Emilia-Romagna", "Friuli-Venezia Giulia", "Lazio", "Liguria", "Lombardia", "Marche", "Molise", "Piemonte", "Puglia", "Sardegna", "Sicilia", "Toscana", "Trentino-Alto Adige", "Umbria", "Valle d'Aosta", "Veneto"], 0],
        ["Jersey", "JE", "44", "", "🇯🇪", "Parishes", ["Grouville", "Saint Brelade", "Saint Clement", "Saint Helier", "Saint John", "Saint Lawrence", "Saint Martin", "Saint Mary", "Saint Ouen", "Saint Peter", "Saint Saviour", "Trinity"]],
        ["Jamaica", "JM", "1876", "+.(...)...-....", "🇯🇲", "Parishes", ["Clarendon", "Hanover", "Kingston", "Manchester", "Portland", "Saint Andrew", "Saint Ann", "Saint Catherine", "Saint Elizabeth", "Saint James", "Saint Mary", "Saint Thomas", "Trelawny", "Westmoreland"]],
        ["Jordan (‫الأردن‬‎)", "JO", "962", "+...-.-....-....", "🇯🇴", "Governorates", ["Ajloun", "Amman", "Aqaba", "Balqa", "Irbid", "Jarash", "Karak", "Ma'an", "Madaba", "Mafraq", "Tafilah", "Zarqa"]],
        ["Japan (日本)", "JP", "81", "+.. ... .. ....", "🇯🇵", "Prefectures", ["Aichi", "Akita", "Aomori", "Chiba", "Ehime", "Fukui", "Fukuoka", "Fukushima", "Gifu", "Gunma", "Hiroshima", "Hokkaido", "Hyogo", "Ibaraki", "Ishikawa", "Iwate", "Kagawa", "Kagoshima", "Kanagawa", "Kochi", "Kumamoto", "Kyoto", "Mie", "Miyagi", "Miyazaki", "Nagano", "Nagasaki", "Nara", "Niigata", "Oita", "Okayama", "Okinawa", "Osaka", "Saga", "Saitama", "Shiga", "Shimane", "Shizuoka", "Tochigi", "Tokushima", "Tokyo", "Tottori", "Toyama", "Wakayama", "Yamagata", "Yamaguchi", "Yamanashi"]],
        ["Kenya", "KE", "254", "+...-...-......", "🇰🇪", "Counties", ["Baringo", "Bomet", "Bungoma", "Busia", "Elgeyo-Marakwet", "Embu", "Garissa", "Homa Bay", "Isiolo", "Kajiado", "Kakamega", "Kericho", "Kiambu", "Kilifi", "Kirinyaga", "Kisii", "Kisumu", "Kitui", "Kwale", "Laikipia", "Lamu", "Machakos", "Makueni", "Mandera", "Marsabit", "Meru", "Migori", "Mombasa", "Murang'a", "Nairobi", "Nakuru", "Nandi", "Narok", "Nyamira", "Nyandarua", "Nyeri", "Samburu", "Siaya", "Taita-Taveta", "Tana River", "Tharaka-Nithi", "Trans-Nzoia", "Turkana", "Uasin Gishu", "Vihiga", "Wajir", "West Pokot"]],
        ["Kyrgyzstan (Кыргызстан)", "KG", "996", "+...(...)...-...", "🇰🇬", "Regions", ["Batken", "Chuy", "Issyk-Kul", "Jalal-Abad", "Naryn", "Osh", "Talas"]],
        ["Cambodia (កម្ពុជា)", "KH", "855", "+...-..-...-...", "🇰🇭", "Provinces", ["Banteay Meanchey", "Battambang", "Kampong Cham", "Kampong Chhnang", "Kampong Speu", "Kampong Thom", "Kampot", "Kandal", "Kep", "Koh Kong", "Kratie", "Mondulkiri", "Oddar Meanchey", "Pailin", "Phnom Penh", "Preah Sihanouk", "Preah Vihear", "Pursat", "Ratanakiri", "Siem Reap", "Stung Treng", "Svay Rieng", "Takéo", "Tboung Khmum"]],
        ["Kiribati", "KI", "686", "+...-..-...", "🇰🇮", "Islands", ["Banaba", "Gilbert Islands", "Line Islands", "Phoenix Islands"]],
        ["Comoros (‫جزر القمر‬‎)", "KM", "269", "+...-..-.....", "🇰🇲", "Regions", ["Grande Comore", "Anjouan", "Mohéli"]],
        ["Saint Kitts and Nevis", "KN", "1869", "+.(...)...-....", "🇰🇳", "Parishes", ["Christ Church Nichola Town", "Saint Anne Sandy Point", "Saint George Basseterre", "Saint John Capisterre", "Saint Mary Cayon", "Saint Paul Capisterre", "Saint Peter Basseterre", "Saint Thomas Lowland", "Saint Thomas Middle Island", "Trinity Palmetto Point"]],
        ["North Korea (조선 민주주의 인민 공화국)", "KP", "850", "+...-...-...", "🇰🇵", "Provinces", ["Chagang", "North Hamgyong", "South Hamgyong", "North Hwanghae", "South Hwanghae", "Kangwon", "North Pyongan", "South Pyongan", "Ryanggang"]],
        ["Kuwait (‫الكويت‬‎)", "KW", "965", "+...-....-....", "🇰🇼", "Governorates", ["Al Ahmadi", "Al Farwaniyah", "Al Jahra", "Capital", "Hawalli", "Mubarak Al-Kabeer"]],
        ["Cayman Islands", "KY", "1345", "+.(...)...-....", "🇰🇾", "Districts", ["Bodden Town", "Cayman Brac", "East End", "George Town", "Little Cayman", "North Side", "Sister Islands", "West Bay"]],
        ["Kazakhstan (Казахстан)", "KZ", "7", "+. ... ...-..-..", "🇰🇿", "Regions", ["Almaty", "Aqmola", "Aqtobe", "Atyrau", "East Kazakhstan", "Mangystau", "North Kazakhstan", "Nur-Sultan", "Pavlodar", "Qaragandy", "Qostanay", "Qyzylorda", "Shymkent", "Turkestan", "West Kazakhstan"], 1],
        ["Laos (ລາວ)", "LA", "856", "+...-..-...-...", "🇱🇦", "Provinces", ["Attapeu", "Bokeo", "Bolikhamsai", "Champasak", "Houaphanh", "Khammouane", "Luang Namtha", "Luang Prabang", "Oudomxay", "Phongsaly", "Sainyabuli", "Salavan", "Savannakhet", "Sekong", "Vientiane", "Vientiane Prefecture", "Xaisomboun", "Xaisomboun Special Zone", "Xiangkhouang", "Xekong", "Xiangkhouang"]],
        ["Lebanon (‫لبنان‬‎)", "LB", "961", "+...-.-...-...", "🇱🇧", "Governorates", ["Akkar", "Baalbek-Hermel", "Beirut", "Beqaa", "Mount Lebanon", "Nabatieh", "North", "South"]],
        ["Saint Lucia", "LC", "1758", "+.(...)...-....", "🇱🇨", "Districts", ["Anse-la-Raye", "Canaries", "Castries", "Choiseul", "Dennery", "Gros Islet", "Laborie", "Micoud", "Soufrière", "Vieux Fort"]],
        ["Liechtenstein", "LI", "423", "+...(...)...-....", "🇱🇮", "Municipalities", ["Balzers", "Eschen", "Gamprin", "Mauren", "Planken", "Ruggell", "Schaan", "Schellenberg", "Triesen", "Triesenberg", "Vaduz"]],
        ["Liberia", "LR", "231", "+...-..-...-...", "🇱🇷", "Counties", ["Bomi", "Bong", "Gbarpolu", "Grand Bassa", "Grand Cape Mount", "Grand Gedeh", "Grand Kru", "Lofa", "Margibi", "Maryland", "Montserrado", "Nimba", "River Cess", "River Gee", "Sinoe"]],
        ["Lesotho", "LS", "266", "+...-.-...-....", "🇱🇸", "Districts", ["Berea", "Butha-Buthe", "Leribe", "Mafeteng", "Maseru", "Mohale's Hoek", "Mokhotlong", "Qacha's Nek", "Quthing", "Thaba-Tseka"]],
        ["Lithuania (Lietuva)", "LT", "370", "+...(...)..-...", "🇱🇹", "Counties", ["Alytus County", "Kaunas unknownounty", "Klaipeda County", "Marijampole County", "Panevezys County", "Siauliai County", "Taurage County", "Telsiai County", "Utena County", "Vilnius County"]],
        ["Luxembourg", "LU", "352", "+...(...)...-...", "🇱🇺", "Cantons", ["Diekirch", "Grevenmacher", "Luxembourg"]],
        ["Latvia (Latvija)", "LV", "371", "+...-..-...-...", "🇱🇻", "Regions", ["Aizkraukle", "Aluksne", "Balvi", "Bauska", "Cesis", "Daugavpils", "Dobele", "Gulbene", "Jekabpils", "Jelgava", "Jurmala", "Kraslava", "Kuldiga", "Liepaja", "Limbazi", "Ludza", "Madona", "Ogre", "Preili", "Rezekne", "Riga", "Saldus", "Talsi", "Tukums", "Valka", "Valmiera", "Ventspils"]],
        ["Libya (‫ليبيا‬‎)", "LY", "218", "+...-..-...-...", "🇱🇾", "Regions", ["Al Wahat", "Benghazi", "Derna", "Ghat", "Jabal al Akhdar", "Jabal al Gharbi", "Jafara", "Jufra", "Kufra", "Marj", "Misrata", "Murqub", "Murzuq", "Nalut", "Nuqat al Khams", "Sabha", "Sirte", "Tripoli", "Wadi al Hayaa", "Wadi al Shatii", "Zawiya"]],
        ["Morocco (‫المغرب‬‎)", "MA", "212", "+...-..-....-...", "🇲🇦", "Regions", ["Tanger-Tétouan-Al Hoceïma", "Oriental", "Fès-Meknès", "Rabat-Salé-Kénitra", "Béni Mellal-Khénifra", "Casablanca-Settat", "Marrakesh-Safi", "Drâa-Tafilalet", "Souss-Massa", "Guelmim-Oued Noun", "Laâyoune-Sakia El Hamra", "Dakhla-Oued Ed-Dahab"]],
        ["Monaco", "MC", "377", "+...-..-...-...", "🇲🇨", "Districts", ["Monaco-Ville", "La Condamine", "Monte Carlo", "Fontvieille"]],
        ["Moldova (Republica Moldova)", "MD", "373", "+...-....-....", "🇲🇩", "Regions", ["Anenii Noi", "Basarabeasca", "Briceni", "Cahul", "Călărași", "Cantemir", "Căușeni", "Cimișlia", "Criuleni", "Dondușeni", "Drochia", "Dubăsari", "Edineț", "Fălești", "Florești", "Găgăuzia", "Glodeni", "Hîncești", "Ialoveni", "Leova", "Nisporeni", "Ocnița", "Orhei", "Rezina", "Rîșcani", "Sîngerei", "Șoldănești", "Soroca", "Strășeni", "Ștefan Vodă", "Taraclia", "Telenești", "Ungheni"]],
        ["Montenegro (Crna Gora)", "ME", "382", "+...-..-...-...", "🇲🇪", "Municipalities", ["Andrijevica", "Bar", "Berane", "Bijelo Polje", "Budva", "Cetinje", "Danilovgrad", "Gusinje", "Herceg Novi", "Kolašin", "Kotor", "Mojkovac", "Nikšić", "Petnjica", "Plav", "Pljevlja", "Plužine", "Podgorica", "Rožaje", "Šavnik", "Tivat", "Ulcinj", "Žabljak"]],
        ["Saint Martin (Sant-Martin (partie française))", "MF", "590", "", "🇲🇫", "Parishes", ["Marigot"], 2],
        ["Madagascar (Madagasikara)", "MG", "261", "+...-..-..-.....", "🇲🇬", "Provinces", ["Antananarivo", "Antsiranana", "Fianarantsoa", "Mahajanga", "Toamasina", "Toliara"]],
        ["Marshall Islands", "MH", "692", "+...-...-....", "🇲🇭", "Municipalities", ["Ailinglaplap", "Ailuk", "Arno", "Aur", "Bikini", "Ebon", "Enewetak", "Jabat", "Jaluit", "Kili", "Kwajalein", "Lae", "Lib", "Likiep", "Majuro", "Maloelap", "Mejit", "Mili", "Namdrik", "Namu", "Rongelap", "Ujae", "Ujelang", "Utirik", "Wotho", "Wotje"]],
        ["Macedonia (FYROM) (Македонија)", "MK", "389", "+...-..-...-...", "🇲🇰", "Regions", ["Skopje", "Pelagonia", "Polog", "Vardar", "Eastern", "Southwestern", "Northeastern", "Southeastern"]],
        ["Mali", "ML", "223", "+...-..-..-....", "🇲🇱", "Regions", ["Bamako", "Gao", "Kayes", "Kidal", "Koulikoro", "Mopti", "Segou", "Sikasso", "Tombouctou"]],
        ["Myanmar (Burma) (မြန်မာ)", "MM", "95", "+..-...-...", "🇲🇲", ["States", "Regions"], { "States": ["Ayeyarwady", "Bago", "Chin", "Kachin", "Kayah", "Kayin", "Magway", "Mandalay", "Mon", "Naypyidaw Union Territory", "Rakhine", "Sagaing", "Shan", "Tanintharyi", "Yangon"], "Regions": ["Sagaing", "Tanintharyi", "Bago", "Magway", "Mandalay", "Yangon", "Ayeyarwady", "Kachin", "Kayah", "Kayin", "Chin", "Mon", "Rakhine", "Shan"] }],
        ["Mongolia (Монгол)", "MN", "976", "+...-..-..-....", "🇲🇳", "Aimags", ["Arkhangai", "Bayan-Ölgii", "Bayankhongor", "Bulgan", "Darkhan-Uul", "Dornod", "Dornogovi", "Dundgovi", "Govi-Altai", "Govisümber", "Khentii", "Khovd", "Khövsgöl", "Ömnögovi", "Orkhon", "Övörkhangai", "Selenge", "Sükhbaatar", "Töv", "Uvs", "Zavkhan"]],
        ["Macau (澳門)", "MO", "853", "+...-....-....", "🇲🇴", "Freguesias", ["Nossa Senhora de Fátima", "Santo António", "São Lázaro", "São Lourenço", "São Francisco Xavier", "Sé", "Coloane", "Taipa"]],
        ["Northern Mariana Islands", "MP", "1670", "+.(...)...-....", "🇲🇵", "Municipalities", ["Northern Islands", "Rota", "Saipan", "Tinian"]],
        ["Martinique", "MQ", "596", "+...(...)..-..-..", "🇲🇶", ["Arrondissements", "Cantons", "Communes"], { "Arrondissements": ["Fort-de-France", "La Trinité", "Le Marin", "Le Robert", "Saint-Pierre"], "Cantons": ["Fort-de-France-1", "Fort-de-France-2", "Fort-de-France-3", "Fort-de-France-4", "Le François", "Le Lamentin-1", "Le Lamentin-2", "Le Marin", "Le Robert", "Sainte-Anne", "Sainte-Luce", "Saint-Esprit", "Saint-Joseph", "Saint-Pierre"], "Communes": ["Basse-Pointe", "Bellefontaine", "Case-Pilote", "Ducos", "Fonds-Saint-Denis", "Fort-de-France", "Grand'Rivière", "Gros-Morne", "Le Carbet", "Le Diamant", "Le François", "Le Lamentin", "Le Lorrain", "Le Marigot", "Le Marin", "Le Morne-Rouge", "Le Morne-Vert", "Le Prêcheur", "Le Robert", "Le Vauclin", "Les Anses-d'Arlet", "Les Trois-Îlets", "Macouba", "Rivière-Pilote", "Rivière-Salée", "Sainte-Anne", "Sainte-Luce", "Sainte-Marie", "Saint-Esprit", "Saint-Joseph", "Saint-Pierre", "Schœlcher", "Trinité", "Trois-Rivières"] }],
        ["Mauritania (‫موريتانيا‬‎)", "MR", "222", "+...-..-..-....", "🇲🇷", "Regions", ["Adrar", "Assaba", "Brakna", "Dakhlet Nouadhibou", "Gorgol", "Guidimaka", "Hodh Ech Chargui", "Hodh El Gharbi", "Inchiri", "Nouakchott Nord", "Nouakchott Ouest", "Nouakchott Sud", "Tagant", "Tiris Zemmour", "Trarza"]],
        ["Montserrat", "MS", "1664", "+.(...)...-....", "🇲🇸", "Parishes", ["Saint Anthony", "Saint Georges", "Saint Peter"]],
        ["Malta", "MT", "356", "+...-....-....", "🇲🇹", "Districts", ["Gozo", "Malta"]],
        ["Mauritius (Moris)", "MU", "230", "+...-...-....", "🇲🇺", "Districts", ["Black River", "Flacq", "Grand Port", "Moka", "Pamplemousses", "Plaines Wilhems", "Port Louis", "Rivière du Rempart", "Savanne"]],
        ["Maldives", "MV", "960", "+...-...-....", "🇲🇻", "Atolls", ["Ari Atoll", "Faafu Atoll", "Lhaviyani Atoll", "Malé Atoll", "Baa Atoll", "Dhaalu Atoll", "Gaafu Alif Atoll", "Haa Alif Atoll", "Kaafu Atoll", "Laamu Atoll", "Meemu Atoll", "Noonu Atoll", "Raa Atoll", "Seenu Atoll", "Thaa Atoll", "Vaavu Atoll"]],
        ["Malawi", "MW", "265", "+...-.-....-....", "🇲🇼", "Districts", ["Balaka", "Blantyre", "Chikwawa", "Chiradzulu", "Chitipa", "Dedza", "Dowa", "Karonga", "Kasungu", "Likoma", "Lilongwe", "Machinga", "Mangochi", "Mchinji", "Mulanje", "Mwanza", "Mzimba", "Neno", "Nkhata Bay", "Nkhotakota", "Nsanje", "Ntcheu", "Ntchisi", "Phalombe", "Rumphi", "Salima", "Thyolo", "Zomba"]],
        ["Mexico (México)", "MX", "52", "+..-..-..-....", "🇲🇽", "States", ["Aguascalientes", "Baja California", "Baja California Sur", "Campeche", "Chiapas", "Chihuahua", "Coahuila", "Colima", "Durango", "Guanajuato", "Guerrero", "Hidalgo", "Jalisco", "México", "Michoacán", "Morelos", "Nayarit", "Nuevo León", "Oaxaca", "Puebla", "Querétaro", "Quintana Roo", "San Luis Potosí", "Sinaloa", "Sonora", "Tabasco", "Tamaulipas", "Tlaxcala", "Veracruz", "Yucatán", "Zacatecas"]],
        ["Malaysia", "MY", "60", "+.. ..-....-....", "🇲🇾", "States", ["Johor", "Kedah", "Kelantan", "Melaka", "Negeri Sembilan", "Pahang", "Perak", "Perlis", "Pulau Pinang", "Sabah", "Sarawak", "Selangor", "Terengganu", "Wilayah Persekutuan Kuala Lumpur", "Wilayah Persekutuan Labuan", "Wilayah Persekutuan Putrajaya"]],
        ["Mozambique (Moçambique)", "MZ", "258", "+...-..-...-...", "🇲🇿", "Provinces", ["Cabo Delgado", "Gaza", "Inhambane", "Manica", "Maputo", "Nampula", "Niassa", "Sofala", "Tete", "Zambezia"]],
        ["Namibia (Namibië)", "NA", "264", "+...-..-...-....", "🇳🇦", "Regions", ["Erongo", "Hardap", "Karas", "Kavango East", "Kavango West", "Khomas", "Kunene", "Ohangwena", "Omaheke", "Omusati", "Oshana", "Oshikoto", "Otjozondjupa", "Zambezi"]],
        ["New Caledonia (Nouvelle-Calédonie)", "NC", "687", "+...-..-....", "🇳🇨", ["Provinces", "Communes"], { "Provinces": ["South Province", "North Province", "Loyalty Islands Province"], "Communes": ["Nouméa", "Mont-Dore", "Dumbéa", "Païta", "Yaté", "Bouloupari", "La Foa", "Sarraméa", "Farino", "Moindou", "Bourail", "Poya", "Koné", "Voh", "Kaala-Gomen", "Pouembout", "Poum", "Belep", "Hienghène", "Ponérihouen", "Kouaoua", "Canala", "Thio", "Yaté", "Île des Pins", "Lifou", "Maré", "Ouvéa"] }],
        ["Niger (Nijar)", "NE", "227", "+...-..-..-....", "🇳🇪", "Regions", ["Agadez", "Diffa", "Dosso", "Maradi", "Tahoua", "Tillabéri", "Zinder"]],
        ["Norfolk Island", "NF", "672", "+...-...-...", "🇳🇫"],
        ["Nigeria", "NG", "234", "+...-..-...-..", "🇳🇬", "States", ["Abia", "Adamawa", "Akwa Ibom", "Anambra", "Bauchi", "Bayelsa", "Benue", "Borno", "Cross River", "Delta", "Ebonyi", "Edo", "Ekiti", "Enugu", "Gombe", "Imo", "Jigawa", "Kaduna", "Kano", "Katsina", "Kebbi", "Kogi", "Kwara", "Lagos", "Nasarawa", "Niger", "Ogun", "Ondo", "Osun", "Oyo", "Plateau", "Rivers", "Sokoto", "Taraba", "Yobe", "Zamfara", "Federal Capital Territory"]],
        ["Nicaragua", "NI", "505", "+...-....-....", "🇳🇮", "Departments", ["Boaco", "Carazo", "Chinandega", "Chontales", "Estelí", "Granada", "Jinotega", "León", "Madriz", "Managua", "Masaya", "Matagalpa", "Nueva Segovia", "Río San Juan", "Rivas", "Atlántico Norte", "Atlántico Sur"]],
        ["Netherlands (Nederland)", "NL", "31", "+.. .. ........", "🇳🇱", "Provinces", ["Drenthe", "Flevoland", "Friesland", "Gelderland", "Groningen", "Limburg", "Noord-Brabant", "Noord-Holland", "Overijssel", "Utrecht", "Zeeland", "Zuid-Holland"]],
        ["Norway (Norge)", "NO", "47", "+.. ... .. ...", "🇳🇴", "Counties", ["Agder", "Innlandet", "Møre og Romsdal", "Nordland", "Oslo", "Rogaland", "Troms og Finnmark", "Trøndelag", "Vestfold og Telemark", "Vestland", "Viken"]],
        ["Nepal (नेपाल)", "NP", "977", "+...-..-...-...", "🇳🇵", "Provinces", ["Province No. 1", "Province No. 2", "Bagmati Province", "Gandaki Province", "Lumbini Province", "Karnali Province", "Sudurpashchim Province"]],
        ["Nauru", "NR", "674", "+...-...-....", "🇳🇷", "Districts", ["Aiwo", "Anabar", "Anetan", "Anibare", "Baiti", "Boe", "Buada", "Denigomodu", "Ewa", "Ijuw", "Meneng", "Nibok", "Uaboe", "Yaren"]],
        ["Niue", "NU", "683", "+...-....", "🇳🇺", "Villages", ["Alofi", "Avatele", "Hakupu", "Hikutavake", "Lakepa", "Makefu", "Mutalau", "Namukulu", "Tamakautoga", "Toi", "Tuapa"]],
        ["New Zealand", "NZ", "64", "+.. ...-...-....", "🇳🇿", "Regions", ["Northland", "Auckland", "Waikato", "Bay of Plenty", "Gisborne", "Hawke's Bay", "Taranaki", "Manawatu-Whanganui", "Wellington", "Tasman", "Nelson", "Marlborough", "West Coast", "Canterbury", "Otago", "Southland"]],
        ["Oman (‫عُمان‬‎)", "OM", "968", "+...-..-...-...", "🇴🇲", "Governorates", ["Ad Dakhiliyah", "Ad Dhahirah", "Al Batinah North", "Al Batinah South", "Al Buraimi", "Al Wusta", "Ash Sharqiyah North", "Ash Sharqiyah South", "Dhofar", "Musandam", "Muscat"]],
        ["Panama (Panamá)", "PA", "507", "+...-...-....", "🇵🇦", "Provinces", ["Bocas del Toro", "Chiriquí", "Coclé", "Colón", "Darién", "Emberá-Wounaan", "Guna Yala", "Herrera", "Los Santos", "Ngäbe-Buglé", "Panamá", "Panamá Oeste", "Veraguas"]],
        ["Peru (Perú)", "PE", "51", "+..(...)...-...", "🇵🇪", "Regions", ["Amazonas", "Áncash", "Apurímac", "Arequipa", "Ayacucho", "Cajamarca", "Callao", "Cusco", "Huancavelica", "Huánuco", "Ica", "Junín", "La Libertad", "Lambayeque", "Lima", "Loreto", "Madre de Dios", "Moquegua", "Pasco", "Piura", "Puno", "San Martín", "Tacna", "Tumbes", "Ucayali"]],
        ["French Polynesia (Polynésie française)", "PF", "689", "+...-..-..-..", "🇵🇫", ["Communes", "Subdivisions"], { "Communes": ["Papeete", "Faaa", "Punaauia"], "Subdivisions": ["Marquesas Islands", "Tuamotu-Gambier", "Tubuai Islands"] }],
        ["Papua New Guinea", "PG", "675", "+...(...)..-...", "🇵🇬", "Regions", ["Bougainville", "Central", "Chimbu", "Eastern Highlands", "East New Britain", "East Sepik", "Enga", "Gulf", "Hela", "Jiwaka", "Madang", "Manus", "Milne Bay", "Morobe", "New Ireland", "Northern", "Southern Highlands", "Western", "West New Britain", "West Sepik", "Western Highlands"]],
        ["Philippines", "PH", "63", "+.. ... ....", "🇵🇭", "Regions", ["Ilocos Region", "Cagayan Valley", "Central Luzon", "Calabarzon", "Mimaropa", "Bicol Region", "Western Visayas", "Central Visayas", "Eastern Visayas", "Zamboanga Peninsula", "Northern Mindanao", "Davao Region", "Soccsksargen", "Caraga", "Bangsamoro Autonomous Region in Muslim Mindanao", "Cordillera Administrative Region", "National Capital Region"]],
        ["Pakistan (‫پاکستان‬‎)", "PK", "92", "+.. ...-.......", "🇵🇰", ["Provinces", "Territories"], { "Provinces": ["Balochistan", "Khyber Pakhtunkhwa", "Punjab", "Sindh"], "Territories": ["Islamabad Capital Territory", "Gilgit-Baltistan", "Azad Jammu and Kashmir"] }],
        ["Poland (Polska)", "PL", "48", "+.. ...-...-...", "🇵🇱", "Provinces", ["Greater Poland", "Kuyavian-Pomeranian", "Lesser Poland", "Lodz", "Lower Silesian", "Lublin", "Lubusz", "Masovian", "Opole", "Podlasie", "Pomeranian", "Silesian", "Subcarpathian", "Swietokrzyskie", "Warmian-Masurian", "West Pomeranian"]],
        ["Saint Pierre and Miquelon (Saint-Pierre-et-Miquelon)", "PM", "508", "", "🇵🇲", "Communes", ["Saint-Pierre", "Miquelon-Langlade"]],
        ["Pitcairn Islands", "PN", "64", "", "🇵🇳"],
        ["Puerto Rico", "PR", "1", "+. (...) ...-....", "🇵🇷", "Municipalities", ["Adjuntas", "Aguada", "Aguadilla", "Aguas Buenas", "Aibonito", "Añasco", "Arecibo", "Arroyo", "Barceloneta", "Barranquitas", "Bayamón", "Cabo Rojo", "Caguas", "Camuy", "Canóvanas", "Carolina", "Cataño", "Cayey", "Ceiba", "Ciales", "Cidra", "Coamo", "Comerío", "Corozal", "Culebra", "Dorado", "Fajardo", "Florida", "Guánica", "Guayama", "Guayanilla", "Guaynabo", "Gurabo", "Hatillo", "Hormigueros", "Humacao", "Isabela", "Jayuya", "Juana Díaz", "Juncos", "Lajas", "Lares", "Las Marías", "Las Piedras", "Loíza", "Luquillo", "Manatí", "Maricao", "Maunabo", "Mayagüez", "Moca", "Morovis", "Naguabo", "Naranjito", "Orocovis", "Patillas", "Peñuelas", "Ponce", "Quebradillas", "Rincón", "Río Grande", "Sabana Grande", "Salinas", "San Germán", "San Juan", "San Lorenzo", "San Sebastián", "Santa Isabel", "Toa Alta", "Toa Baja", "Trujillo Alto", "Utuado", "Vega Alta", "Vega Baja", "Vieques", "Villalba", "Yabucoa", "Yauco"], 3, ["787", "939"]],
        ["Palestine (‫فلسطين‬‎)", "PS", "970", "+...-..-...-....", "🇵🇸", "Governorates", ["Gaza Strip", "West Bank"]],
        ["Portugal", "PT", "351", "+...-..-...-....", "🇵🇹", "Regions", ["Azores", "Alentejo", "Algarve", "Centro", "Lisbon", "Madeira", "Norte"]],
        ["Palau", "PW", "680", "+...-...-....", "🇵🇼", "States", ["Aimeliik", "Airai", "Angaur", "Hatohobei", "Kayangel", "Koror", "Melekeok", "Ngaraard", "Ngarchelong", "Ngardmau", "Ngatpang", "Ngchesar", "Ngeremlengui", "Ngiwal", "Peleliu", "Sonsorol"]],
        ["Paraguay", "PY", "595", "+...(...)...-...", "🇵🇾", "Departments", ["Alto Paraguay", "Alto Paraná", "Amambay", "Boquerón", "Caaguazú", "Caazapá", "Canindeyú", "Central", "Concepción", "Cordillera", "Guairá", "Itapúa", "Misiones", "Ñeembucú", "Paraguarí", "Presidente Hayes", "San Pedro"]],
        ["Qatar (‫قطر‬‎)", "QA", "974", "+...-....-....", "🇶🇦", "Municipalities", ["Doha", "Al Rayyan", "Umm Salal", "Al Khor", "Al Wakrah", "Al Daayen", "Madinat ash Shamal", "Al Shamal", "Al Ruwais"]],
        ["Réunion (La Réunion)", "RE", "262", "+...-.....-....", "🇷🇪", ["Arrondissements", "Cantons", "Communes"], { "Arrondissements": ["Saint-Denis", "Saint-Paul", "Saint-Pierre", "Saint-Benoit"], "Cantons": ["Bras-Panon", "La Chaloupe", "La Grande Montée", "L'Étang-Salé", "Entre-Deux", "Les Avirons", "Petite-Île", "Plaine-des-Palmistes", "Le Port", "La Possession", "Saint-André-1", "Saint-André-2", "Saint-André-3", "Saint-Benoît-1", "Saint-Benoît-2", "Saint-Denis-1", "Saint-Denis-2", "Saint-Denis-3", "Saint-Denis-4", "Saint-Denis-5", "Saint-Denis-6", "Saint-Denis-7", "Saint-Denis-8", "Saint-Denis-9", "Saint-Denis-10", "Saint-Joseph", "Saint-Leu-1", "Saint-Leu-2", "Saint-Louis-1", "Saint-Louis-2", "Saint-Louis-3", "Saint-Paul-1", "Saint-Paul-2", "Saint-Paul-3", "Saint-Paul-4", "Saint-Paul-5", "Saint-Pierre-1", "Saint-Pierre-2", "Saint-Pierre-3", "Saint-Pierre-4", "Sainte-Marie", "Sainte-Rose", "Sainte-Suzanne", "Saint-Philippe", "Salazie", "Le Tampon-1", "Le Tampon-2", "Le Tampon-3", "Le Tampon-4"], "Communes": ["Les Avirons", "Bras-Panon", "Cilaos", "Entre-Deux", "L'Étang-Salé", "Petite-Île", "La Plaine-des-Palmistes", "Le Port", "La Possession", "Saint-André", "Saint-Benoît", "Saint-Denis", "Sainte-Marie", "Sainte-Rose", "Sainte-Suzanne", "Saint-Joseph", "Saint-Leu", "Saint-Louis", "Saint-Paul", "Saint-Philippe", "Saint-Pierre", "Salazie", "Le Tampon", "Trois-Bassins"] }],
        ["Romania (România)", "RO", "40", "+..-..-...-....", "🇷🇴", "Regions", ["Moldova", "Muntenia", "Transylvania", "Banat", "Crisana", "Dobrogea", "Maramures", "Oltenia", "Bucovina", "Mehedinti", "Craiova", "Pitesti", "Sibiu", "Targu Mures", "Timisoara", "Cluj-Napoca", "Iasi", "Bucharest"]],
        ["Serbia (Србија)", "RS", "381", "+...-..-...-....", "🇷🇸", "Districts", ["Belgrade", "Nišava", "Šumadija", "Zaječar", "Podunavlje", "Bor", "Braničevo", "Pomoravlje", "Zlatibor", "Moravica", "Raška", "Rasina", "Toplica", "Mačva", "Kolubara", "Jablanica", "Pčinja", "Pirot", "Branicevo", "Juzni Banat", "Srednji Banat", "Severni Banat", "Zapadna Bačka", "Južna Bačka", "Severna Bačka", "Srem", "Mačva", "Kolubara", "Podrinje", "Kosovo", "Kosovska Mitrovica", "Peć", "Prizren", "Kosovska Mitrovica", "Peć", "Prizren"]],
        ["Russia (Россия)", "RU", "7", "+.-(...)-...-....", "🇷🇺", "Federal Subjects", ["Moscow", "Saint Petersburg", "Novosibirsk", "Yekaterinburg", "Nizhny Novgorod", "Kazan", "Chelyabinsk", "Omsk", "Samara", "Rostov-on-Don", "Ufa", "Krasnoyarsk", "Perm", "Voronezh", "Volgograd", "Krasnodar", "Saratov", "Tyumen", "Tolyatti", "Izhevsk"]],
        ["Rwanda", "RW", "250", "+...(...)...-...", "🇷🇼", "Provinces", ["Kigali", "Eastern", "Northern", "Southern", "Western"]],
        ["Saudi Arabia (‫المملكة العربية السعودية‬‎)", "SA", "966", "+...-..-...-....", "🇸🇦", "Regions", ["Riyadh", "Makkah", "Madinah", "Eastern Province", "Asir", "Tabuk", "Qassim", "Ha'il", "Jizan", "Najran", "Al Bahah", "Northern Borders", "Jawf", "Hail"]],
        ["Solomon Islands", "SB", "677", "+...-.....", "🇸🇧", "Provinces", ["Central Province", "Choiseul", "Guadalcanal", "Honiara", "Isabel", "Makira-Ulawa", "Malaita", "Rennell and Bellona", "Temotu", "Western Province"]],
        ["Seychelles", "SC", "248", "+...-.-...-...", "🇸🇨", ["Inner Islands", "Outer Islands"], { "Inner Islands": ["Mahé", "Praslin", "La Digue"], "Outer Islands": ["Alphonse", "Desroches", "Farquhar", "Aldabra"] }],
        ["Singapore", "SG", "65", "+.. ....-....", "🇸🇬", "Regions", ["Central Region", "East Region", "North Region", "North-East Region", "West Region"]],
        ["Slovenia (Slovenija)", "SI", "386", "+...-..-...-...", "🇸🇮", "Regions", ["Pomurska", "Podravska", "Koroška", "Savinjska", "Zasavska", "Posavska", "Jugovzhodna Slovenija", "Osrednjeslovenska", "Gorenjska", "Primorsko-notranjska", "Goriška", "Obalno-kraška"]],
        ["Slovakia (Slovensko)", "SK", "421", "+...(...)...-...", "🇸🇰", "Regions", ["Bratislava", "Trnava", "Trenčín", "Nitra", "Žilina", "Banská Bystrica", "Prešov", "Košice"]],
        ["Sierra Leone", "SL", "232", "+...-..-......", "🇸🇱", "Provinces", ["Eastern Province", "Northern Province", "Southern Province", "Western Area"]],
        ["San Marino", "SM", "378", "+...-....-......", "🇸🇲", "Municipalities", ["Acquaviva", "Borgo Maggiore", "Chiesanuova", "Domagnano", "Faetano", "Fiorentino", "Montegiardino", "San Marino", "Serravalle"]],
        ["Senegal (Sénégal)", "SN", "221", "+...-..-...-....", "🇸🇳", "Regions", ["Dakar", "Thiès", "Diourbel", "Fatick", "Kaolack", "Kolda", "Louga", "Matam", "Saint-Louis", "Sédhiou", "Tambacounda", "Kaffrine", "Kédougou", "Kolda", "Ziguinchor"]],
        ["Somalia (Soomaaliya)", "SO", "252", "+...-.-...-...", "🇸🇴", "Regions", ["Awdal", "Bakool", "Banaadir", "Bari", "Bay", "Galguduud", "Gedo", "Hiiraan", "Jubbada Dhexe", "Jubbada Hoose", "Mudug", "Nugaal", "Sanaag", "Shabeellaha Dhexe", "Shabeellaha Hoose", "Sool", "Togdheer", "Woqooyi Galbeed"]],
        ["São Tomé and Príncipe (São Tomé e Príncipe)", "ST", "239", "+...-..-.....", "🇸🇹", "Provinces", ["Príncipe", "São Tomé"]],
        ["El Salvador", "SV", "503", "+... ....-....", "🇸🇻", "Departments", ["Ahuachapán", "Cabañas", "Chalatenango", "Cuscatlán", "La Libertad", "La Paz", "La Unión", "Morazán", "San Miguel", "San Salvador", "San Vicente", "Santa Ana", "Sonsonate", "Usulután"]],
        ["Sint Maarten", "SX", "1721", "+.(...)...-....", "🇸🇽", "Regions", ["Dutch Quarter", "French Quarter", "Little Bay", "Lowlands", "Maho", "Pelican Key", "Philipsburg", "Point Blanche", "Simpson Bay"]],
        ["Turks and Caicos Islands", "TC", "1649", "+.(...)...-....", "🇹🇨", "Districts", ["Grand Turk", "Salt Cay", "South Caicos", "Providenciales", "North Caicos", "Middle Caicos"]],
        ["Chad (Tchad)", "TD", "235", "+...-..-..-..-..", "🇹🇩", "Regions", ["Batha", "Borkou", "Ennedi", "Ennedi-Est", "Ennedi-Ouest", "Guéra", "Hadjer-Lamis", "Kanem", "Lac", "Logone Occidental", "Logone Oriental", "Mandoul", "Mayo-Kebbi Est", "Mayo-Kebbi Ouest", "Moyen-Chari", "N'Djamena", "Ouaddaï", "Salamat", "Sila", "Tandjilé", "Tibesti", "Wadi Fira"]],
        ["French Southern and Antarctic Lands", "TF", "262", "", "🇹🇫", "Districts", ["Kerguelen Islands", "Crozet Islands", "Amsterdam Island", "Saint-Paul Island"]],
        ["Togo", "TG", "228", "+...-..-...-...", "🇹🇬", "Regions", ["Centrale", "Kara", "Maritime", "Plateaux", "Savanes"]],
        ["Thailand (ไทย)", "TH", "66", "+..-..-...-...", "🇹🇭", "Regions", ["Bangkok", "Central Thailand", "Eastern Thailand", "Northern Thailand", "Northeastern Thailand", "Southern Thailand", "Western Thailand"]],
        ["Tokelau", "TK", "690", "+...-....", "🇹🇰", "Villages", ["Atafu", "Fakaofo", "Nukunonu"]],
        ["Timor-Leste", "TL", "670", "+...-...-....", "🇹🇱", "Districts", ["Aileu", "Ainaro", "Baucau", "Bobonaro", "Cova Lima", "Dili", "Ermera", "Lautem", "Liquiçá", "Manatuto", "Manufahi", "Oecusse", "Viqueque"]],
        ["Turkmenistan", "TM", "993", "+...-.-...-....", "🇹🇲", "Regions", ["Ahal", "Balkan", "Daşoguz", "Lebap", "Mary"]],
        ["Tunisia (‫تونس‬‎)", "TN", "216", "+...-..-...-...", "🇹🇳", "Regions", ["Tunis", "Ariana", "Ben Arous", "Manouba", "Nabeul", "Zaghouan", "Bizerte", "Béja", "Jendouba", "Kef", "Siliana", "Kairouan", "Kasserine", "Sidi Bouzid", "Sousse", "Monastir", "Mahdia", "Sfax", "Gabès", "Medenine", "Tataouine", "Gafsa", "Tozeur", "Kebili"]],
        ["Tonga", "TO", "676", "+...-.....", "🇹🇴", "Regions", ["Eua", "Ha'apai", "Niuas", "Tongatapu", "Vava'u"]],
        ["Turkey (Türkiye)", "TR", "90", "+.. ... ... .. ..", "🇹🇷", "Regions", ["Adana", "Adıyaman", "Afyonkarahisar", "Ağrı", "Amasya", "Ankara", "Antalya", "Artvin", "Aydın", "Balıkesir", "Bilecik", "Bingöl", "Bitlis", "Bolu", "Burdur", "Bursa", "Çanakkale", "Çankırı", "Çorum", "Denizli", "Diyarbakır", "Edirne", "Elazığ", "Erzincan", "Erzurum", "Eskişehir", "Gaziantep", "Giresun", "Gümüşhane", "Hakkâri", "Hatay", "Isparta", "Mersin", "İstanbul", "İzmir", "Kars", "Kastamonu", "Kayseri", "Kırklareli", "Kırşehir", "Kocaeli", "Konya", "Kütahya", "Malatya", "Manisa", "Kahramanmaraş", "Mardin", "Muğla", "Muş", "Nevşehir", "Niğde", "Ordu", "Rize", "Sakarya", "Samsun", "Siirt", "Sinop", "Sivas", "Tekirdağ", "Tokat", "Trabzon", "Tunceli", "Şanlıurfa", "Uşak", "Van", "Yozgat", "Zonguldak", "Aksaray", "Bayburt", "Karaman", "Kırıkkale", "Batman", "Şırnak", "Bartın", "Ardahan", "Iğdır", "Yalova", "Karabük", "Kilis", "Osmaniye", "Düzce"]],
        ["Trinidad and Tobago", "TT", "1868", "+.(...)...-....", "🇹🇹", "Regions", ["Couva-Tabaquite-Talparo", "Diego Martin", "Eastern Tobago", "Penal-Debe", "Princes Town", "Rio Claro-Mayaro", "San Fernando", "Sangre Grande", "San Juan-Laventille", "Siparia", "Tunapuna-Piarco", "Port of Spain", "Point Fortin", "Chaguanas", "Borough of Arima", "Borough of Point Fortin", "Borough of Chaguanas", "Borough of Couva-Tabaquite-Talparo", "Borough of Diego Martin", "Borough of Penal-Debe", "Borough of Princes Town", "Borough of Rio Claro-Mayaro", "Borough of San Fernando", "Borough of Sangre Grande", "Borough of San Juan-Laventille", "Borough of   Siparia", "Borough of Tunapuna-Piarco"]],
        ["Tuvalu", "TV", "688", "+...-.....", "🇹🇻", "Islands", ["Funafuti", "Nanumea", "Nui", "Nukufetau", "Nukulaelae", "Vaitupu"]],
        ["Ukraine (Україна)", "UA", "380", "+...(..)...-..-..", "🇺🇦", "Oblasts", ["Cherkasy Oblast", "Chernihiv Oblast", "Chernivtsi Oblast", "Dnipropetrovsk Oblast", "Donetsk Oblast", "Ivano-Frankivsk Oblast", "Kharkiv Oblast", "Kherson Oblast", "Khmelnytskyi Oblast", "Kiev Oblast", "Kirovohrad Oblast", "Luhansk Oblast", "Lviv Oblast", "Mykolaiv Oblast", "Odessa Oblast", "Poltava Oblast", "Rivne Oblast", "Sumy Oblast", "Ternopil Oblast", "Vinnytsia Oblast", "Volyn Oblast", "Zakarpattia Oblast", "Zaporizhzhia Oblast", "Zhytomyr Oblast", "Autonomous Republic of Crimea"]],
        ["Uganda", "UG", "256", "+...(...)...-...", "🇺🇬", "Regions", ["Central Region", "Eastern Region", "Northern Region", "Western Region"]],
        ["United States Minor Outlying Islands", "UM", "1", "", "🇺🇲", "Territories", ["Baker Island", "Howland Island", "Jarvis Island", "Johnston Atoll", "Kingman Reef", "Midway Atoll", "Navassa Island", "Palmyra Atoll", "Wake Island"], 2],
        ["United States", "US", "1", "+. (...) ...-....", "🇺🇸", "States", ["Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", "Delaware", "Florida", "Georgia", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland", "Massachusetts", "Michigan", "Minnesota", "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire", "New Jersey", "New Mexico", "New York", "North Carolina", "North Dakota", "Ohio", "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island", "South Carolina", "South Dakota", "Tennessee", "Texas", "Utah", "Vermont", "Virginia", "Washington", "West Virginia", "Wisconsin", "Wyoming"], 0],
        ["Uruguay", "UY", "598", "+...-.-...-..-..", "🇺🇾", "Departments", ["Artigas", "Canelones", "Cerro Largo", "Colonia", "Durazno", "Flores", "Florida", "Lavalleja", "Maldonado", "Montevideo", "Paysandú", "Río Negro", "Rivera", "Rocha", "Salto", "San José", "Soriano", "Tacuarembó", "Treinta y Tres"]],
        ["Uzbekistan (Oʻzbekiston)", "UZ", "998", "+...-..-...-....", "🇺🇿", "Regions", ["Andijan", "Bukhara", "Fergana", "Jizzakh", "Karakalpakstan", "Namangan", "Navoiy", "Qashqadaryo", "Samarqand", "Sirdaryo", "Surxondaryo", "Tashkent", "Tashkent City", "Xorazm"]],
        ["Vatican City (Città del Vaticano)", "VA", "39", "+.. .. .... ....", "🇻🇦", 1],
        ["Saint Vincent and the Grenadines", "VC", "1784", "+.(...)...-....", "🇻🇨", "Parishes", ["Charlotte", "Grenadines", "Saint Andrew", "Saint David", "Saint George", "Saint Patrick"]],
        ["Venezuela", "VE", "58", "+..(...)...-....", "🇻🇪", "States", ["Amazonas", "Anzoátegui", "Apure", "Aragua", "Barinas", "Bolívar", "Carabobo", "Cojedes", "Delta Amacuro", "Falcón", "Guárico", "Lara", "Mérida", "Miranda", "Monagas", "Nueva Esparta", "Portuguesa", "Sucre", "Táchira", "Trujillo", "Vargas", "Yaracuy", "Zulia"]],
        ["British Virgin Islands", "VG", "1284", "+.(...)...-....", "🇻🇬", "Districts", ["Tortola", "Virgin Gorda", "Anegada", "Jost Van Dyke"]],
        ["U.S. Virgin Islands", "VI", "1340", "+.(...)...-....", "🇻🇮", "Districts", ["Saint Croix", "Saint John", "Saint Thomas"]],
        ["Vietnam (Việt Nam)", "VN", "84", "+..-..-....-...", "🇻🇳", "Regions", ["Hanoi", "Ho Chi Minh City", "Da Nang", "Hai Phong", "Can Tho", "Bien Hoa", "Hue", "Nha Trang", "Buon Ma Thuot", "Quy Nhon", "Vung Tau", "Nam Dinh", "Phan Thiet", "Long Xuyen", "Ha Long", "Thai Nguyen", "Thanh Hoa", "Rach Gia", "Cam Ranh", "Vinh", "My Tho", "Da Lat", "Bac Lieu", "Bien Hoa"]],
        ["Vanuatu", "VU", "678", "+...-.....", "🇻🇺", "Provinces", ["Malampa", "Penama", "Sanma", "Shefa", "Tafea", "Torba"]],
        ["Wallis and Futuna", "WF", "681", "+...-..-....", "🇼🇫", "Kingdoms", ["Uvea", "Sigave", "Alo"]],
        ["Samoa", "WS", "685", "+...-..-....", "🇼🇸", "Districts", ["A'ana", "Aiga-i-le-Tai", "Atua", "Fa'asaleleaga", "Gaga'emauga", "Gaga'ifomauga", "Palauli", "Satupa'itea", "Tuamasaga", "Va'a-o-Fonoti", "Vaisigano"]],
        ["Kosovo", "XK", "383", "", "🇽🇰", "Districts", ["District of Pristina", "District of Mitrovica", "District of Peja", "District of Prizren", "District of Gjilan", "District of Ferizaj"]],
        ["Yemen (‫اليمن‬‎)", "YE", "967", "+...-.-...-...", "🇾🇪", "Governorates", ["Sana'a", "Aden", "Taiz", "Al Hudaydah", "Ibb", "Dhamar", "Al Mukalla", "Hajjah", "Amran", "Saada", "Saywun", "Zinjibar", "Al Bayda", "Lahij", "Marib", "Al Ghaydah", "Al Mahwit", "Al Hazm", "Ataq", "Al Jawf", "Sadah", "Shabwah", "Al Dhalea", "Rida", "Al Mahrah"]],
        ["Mayotte", "YT", "262", "", "🇾🇹", ["Cantons", "Communes"], { "Cantons": ["Acoua", "Bandraboua", "Bandrélé", "Bouéni", "Chiconi", "Chirongui", "Dembeni", "Dzaoudzi", "Kani-Kéli", "Koungou", "Mamoudzou-1", "Mamoudzou-2", "Mamoudzou-3", "Mamoudzou-4", "Mtsamboro", "M'Tsangamouji", "Ouangani", "Pamandzi", "Sada", "Tsingoni"], "Communes": ["Acoua", "Bandraboua", "Bandrélé", "Bouéni", "Chiconi", "Chirongui", "Dembeni", "Dzaoudzi", "Kani-Kéli", "Koungou", "Mamoudzou", "Mtsamboro", "M'Tsangamouji", "Ouangani", "Pamandzi", "Sada", "Tsingoni"] }],
        ["South Africa", "ZA", "27", "+..-..-...-....", "🇿🇦", "Provinces", ["Eastern Cape", "Free State", "Gauteng", "KwaZulu-Natal", "Limpopo", "Mpumalanga", "North West", "Northern Cape", "Western Cape"]],
        ["Zambia", "ZM", "260", "+...-..-...-....", "🇿🇲", "Provinces", ["Lusaka", "Copperbelt", "Central", "Eastern", "Luapula", "Northern", "North-Western", "Southern", "Western"]],
        ["Zimbabwe", "ZW", "263", "+...-.-......", "🇿🇼", "Provinces", ["Harare", "Bulawayo", "Manicaland", "Mashonaland Central", "Mashonaland East", "Mashonaland West", "Masvingo", "Matabeleland North", "Matabeleland South", "Midlands"]],
    ];
    if (regionCode) {
        var arr = array.find(function (c) { return c[1] === regionCode; });
        if (arr) {
            return arr;
        }
        else {
            return array;
        }
    }
    else {
        return array;
    }
}; //@ts-ignores
exports.countriesArray = countriesArray;
countries.array = (0, exports.countriesArray)();
countries.arr = {};
try {
    for (var regionCodes_1 = __values(exports.regionCodes), regionCodes_1_1 = regionCodes_1.next(); !regionCodes_1_1.done; regionCodes_1_1 = regionCodes_1.next()) {
        var key = regionCodes_1_1.value;
        //for (let i = 0; i < countries.array.length; i++) {//@ts-ignore
        countries.arr = __assign(__assign({}, countries.arr), (_b = {}, _b[key] = (0, exports.countriesArray)(key), _b));
        //}
    }
}
catch (e_1_1) { e_1 = { error: e_1_1 }; }
finally {
    try {
        if (regionCodes_1_1 && !regionCodes_1_1.done && (_a = regionCodes_1.return)) _a.call(regionCodes_1);
    }
    finally { if (e_1) throw e_1.error; }
}
try {
    for (var regionCodes_2 = __values(exports.regionCodes), regionCodes_2_1 = regionCodes_2.next(); !regionCodes_2_1.done; regionCodes_2_1 = regionCodes_2.next()) {
        var key = regionCodes_2_1.value;
        countries.arr = __assign(__assign({}, countries.arr), (_d = {}, _d[key] = (0, exports.countriesArray)(key), _d));
    }
}
catch (e_2_1) { e_2 = { error: e_2_1 }; }
finally {
    try {
        if (regionCodes_2_1 && !regionCodes_2_1.done && (_c = regionCodes_2.return)) _c.call(regionCodes_2);
    }
    finally { if (e_2) throw e_2.error; }
}
//___=============================>             <============================___\\
//___|| ==================== ||      FUNCTIONS      || =================== ||___\\
//___=============================>             <============================___\\
var getCountryName = function (region) {
    var _a;
    return (_a = countries(region)) === null || _a === void 0 ? void 0 : _a[0];
};
exports.getCountryName = getCountryName;
function getContextualName(region) {
    var name = (0, exports.getCountryName)(region);
    if (!isMultiName(name))
        return null;
    if (matchLocalForeignRegex.test(name) &&
        !matchContextRegex.test(name)) {
        return name.replace(matchLocalForeignRegex, '$2');
    }
    else if (matchContextRegex.test(name) && !matchLocalForeignRegex.test(name)) {
        return [
            name
                .replace(matchContextRegex, '$1 $3'),
            name
                .replace(matchContextRegex, '$2 $3')
        ];
    }
    else {
        throw new Error("Invalid local name: ".concat(name.replace(matchContextRegex, '$1 $3')));
    }
}
var getRegionCodes = function () {
    var regionCodes_3, regionCodes_3_1, key, e_4_1;
    var e_4, _a;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 5, 6, 7]);
                regionCodes_3 = __values(exports.regionCodes), regionCodes_3_1 = regionCodes_3.next();
                _b.label = 1;
            case 1:
                if (!!regionCodes_3_1.done) return [3 /*break*/, 4];
                key = regionCodes_3_1.value;
                return [4 /*yield*/, key];
            case 2:
                _b.sent();
                _b.label = 3;
            case 3:
                regionCodes_3_1 = regionCodes_3.next();
                return [3 /*break*/, 1];
            case 4: return [3 /*break*/, 7];
            case 5:
                e_4_1 = _b.sent();
                e_4 = { error: e_4_1 };
                return [3 /*break*/, 7];
            case 6:
                try {
                    if (regionCodes_3_1 && !regionCodes_3_1.done && (_a = regionCodes_3.return)) _a.call(regionCodes_3);
                }
                finally { if (e_4) throw e_4.error; }
                return [7 /*endfinally*/];
            case 7: return [2 /*return*/];
        }
    });
};
function createObjectfromArray(keys, values) {
    var index = 0;
    var iteratorFunc = {
        next: function () {
            var _a;
            if (index < keys.length) {
                return {
                    value: (_a = {},
                        _a[keys[index]] = values[index++],
                        _a),
                    done: false
                };
            }
            else {
                return { done: true };
            }
        }
    };
    var object = {};
    var result = iteratorFunc.next();
    while (!result.done) {
        Object.assign(object, result.value);
        result = iteratorFunc.next();
    }
    return object;
}
// O extends object, A extends Array<A[number]>, I extends (keyof O)[], K extends (keyof
// O[I])[] & Array<A[number][number]>, V extends (O[K[number]])[], A extends
// Array<A[number][]>
/**
 * @function interfaceMatcher - Create an object from an array of keys and an array of values
 * @param {I extends keyof O extends V ? (keyof O)[] : never} indexer - The array of keys used for the main keys of the object
 * @param {A} array - The array of arrays used for the values of the keys of the object
 * @param {K extends [...(keyof O[keyof O])[]]} keys - The array of keys used for the subkeys of the object
 */
function interfaceMatcher(indexer, array) {
    var keys = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        keys[_i - 2] = arguments[_i];
    }
    var object = {};
    return (function () {
        var _a, _b;
        for (var aI = 0; aI < array.length; aI++) {
            if (array[aI].includes(indexer[aI])) {
                var theIndex = indexer[aI];
                var subArray = array[aI];
                for (var sAI = 0; sAI < subArray.length; sAI++) {
                    if (keys[sAI] === undefined)
                        break;
                    if (subArray[sAI] === undefined)
                        continue;
                    object = __assign(__assign({}, object), (_a = {}, _a[theIndex] = (_b = {},
                        _b[keys[sAI]] = subArray[sAI],
                        _b), _a));
                }
            }
        }
        return object;
    })();
}
exports.interfaceMatcher = interfaceMatcher;
;
// export function getValue() {
//   const objectOne = interfaceMatcher<CountryData, CountriesArray>(regionCodes, countries.array, 'name', 'regionCode', 'dialCode', 'flag', 'format', 'zoneTypes', 'zones', 'priority', 'areaCodes');
//   return console.log(objectOne);
// };
/**
interface CountryNameProperties<R extends RegionCode> {
  [Symbol.toPrimitive]: CountryName<R>;
  local: {
    [Symbol.match]: typeof Symbol.match;
    [Symbol.replace](type: 'LF' | 'LCF' | 'LC'): typeof type extends 'LC'
      ? CountryName<R> extends `${infer Name1} (${infer Ctx}) ${infer Name2}`
        ? `${Name1} ${Name2}`
      : never
    : typeof type extends 'LCF'
      ? CountryName<R> extends `${infer Lcl} (${infer Ctx}) (${infer Frgn})`
        ? Lcl
      : never
    : typeof type extends 'LF'
      ? CountryName<R> extends `${infer Lcl} (${infer Frgn})`
        ? Frgn
      : never
    : never;
    };
  foreign: this extends `${infer Name1} (${infer Ctx}) ${infer Name2}` ? never : this extends `${infer Lcl} (${infer Ctx}) (${infer Frgn})` ? Frgn : this extends `${infer Lcl} (${infer Frgn})` ? Frgn : never;
  contextual: this extends `${infer Name1} (${infer Ctx}) ${infer Name2}` ? `${Ctx} ${Name2}` : this extends `${infer Lcl} (${infer Ctx}) (${infer Frgn})` ? Ctx : this extends `${infer Lcl} (${infer Frgn})` ? never : never;
  toLocal(searchValue: {
    [Symbol.replace]<S>(string: string, replaceValue: string): string;
  }): () => Local<R>;
  toForeign: () => Foreign<R>;
  toContextual: () => Contextual<R>;

}*/
function getLocal(region) {
    var name = (0, exports.getCountryName)(region);
    if (isMultiName(name) && matchContextRegex.test(name)) {
        return matchContextRegex.test(name)
            ? name.replace(matchContextRegex, '$1 $3') : null;
    }
    else {
        return null;
    }
}
function isLocal(local) {
    return typeof local === 'string' && (matchLocalForeignRegex.test(local) || matchContextRegex.test(local) || matchBasicRegex.test(local));
}
function isContextualName(region, context) {
    var name = (0, exports.getCountryName)(region);
    var simpleContext = name.replace(matchLocalForeignRegex, '$2');
    var complexContext = name.replace(matchContextRegex, '$2 $3');
    return ((0, exports.getCountryName)(region) === name &&
        isMultiName(name) &&
        (matchContextRegex.test(name) || matchLocalForeignRegex.test(name)) &&
        (simpleContext === context || complexContext === context));
}
function extractName(region, form) {
    var name = (0, exports.getCountryName)(region);
    var foreign = name.replace(matchBasicRegex, '$2');
    var foreign2 = name.replace(matchLocalForeignRegex, '$3');
    var context = getContextualName(region);
    var context2 = name.replace(matchLocalForeignRegex, '$2');
    var contextLocal = name.replace(matchContextRegex, '$2 $3');
    var local = name.replace(matchBasicRegex, '$1');
    var local2 = name.replace(matchLocalForeignRegex, '$1');
    var local3 = name.replace(matchContextRegex, '$1 $3');
    if (form === 'Foreign') {
        return foreign;
    }
    else if (form === 'Contextual') {
        return context;
    }
    else if (form === 'Local') {
        return local;
    }
    else {
        throw new Error("Invalid form: ".concat(form));
    }
}
function isMultiName(name) {
    return typeof name === 'string' && (matchBasicRegex.test(name) || matchContextRegex.test(name) || matchLocalForeignRegex.test(name));
}
//___=============================>             <============================___\\
//___|| ==================== ||      CONSTANTS      || =================== ||___\\
//___=============================>             <============================___\\
/**
 * @constant contextRegex - Regex to match a contextual name
 * - Matches `STRING (STRING) STRING`
 */
var contextRegex = /^(.*?)\s\(([^()]*?)\)\s([^()]*)$/g;
/**
 * @constant matchContextRegex - Regex to match a contextual name
 * - Matches `STRING (STRING) STRING`
 * - `$1 $3` = Normal Name
 * - `$2 $3` = Contextual Name
 */
var matchContextRegex = /^(.+?)\s\((.+?)\)\s(.+)$/g;
/**
 * @constant matchLocalForeignRegex - Regex to match a Local/Foreign name
 * - Matches `STRING (STRING) (STRING)`
 * - `$1` = Local Name
 * - `$2` = Contextual Name
 * - `$3` = Foreign Name
 * - `ForeignLocal<CountryName<R>, 'Contextual'>` = Contextual Name
 */
var matchLocalForeignRegex = /^(.+?)\s\((.+?)\)\s\((.+?)\)$/g;
/**
 * @constant matchBasicRegex - Regex to match a basic Local/Foreign name
 * - Matches `STRING (STRING)`
 * - `$1` = Local Name
 * - `$2` = Foreign Name
 */
var matchBasicRegex = /^([^()]*)\s\(([^()]*)\)$/g;
var countryData = {};
var index = 0;
(_e = (0, exports.countriesArray)()) === null || _e === void 0 ? void 0 : _e.forEach(function (c) {
    return (function () {
        var e_5, _a;
        try {
            for (var _b = __values(getRegionCodes()), _c = _b.next(); !_c.done; _c = _b.next()) {
                var key = _c.value;
                countryData[key].name = c[0];
                countryData[key].regionCode = c[1];
                countryData[key].dialCode = c[2];
                countryData[key].priority = c[1] === "VA" ? 1 : c[7] ? c[7] : 0;
                countryData[key].flag = c[4]; //@ts-ignore
                if (c[3] && c[3] !== "") {
                    if (c[3] !== (undefined || null)) { //@ts-ignore
                        countryData[key].format = c[3];
                    }
                }
                if (c[5] && c[6] && c[5] !== 1) {
                    if ((Array.isArray(c[6]) || typeof c[6] === 'object') && (typeof c[5] === 'string' || Array.isArray(c[5]))) {
                        //@ts-ignore
                        countryData[key].zoneTypes = c[5]; //@ts-ignore
                        countryData[key].zones = c[6];
                    }
                }
                if (c[8]) { //@ts-ignore
                    countryData[key].areaCodes = c[8];
                }
                if (isMultiName(c[0])) {
                    if (matchBasicRegex.test(c[0]) || matchLocalForeignRegex.test(c[0]) || matchContextRegex.test(c[0])) {
                        if (matchBasicRegex.test(c[0])) { //@ts-ignore-ts
                            countryData[key].localName = c[0]
                                .replace(matchBasicRegex, '$1'); //@ts-ignore
                            countryData[key].foreignName = c[0]
                                .replace(matchBasicRegex, '$2');
                        }
                        else if (matchLocalForeignRegex.test(c[0])) { //@ts-ignore
                            countryData[key].localName = c[0]
                                .replace(matchLocalForeignRegex, '$1'); //@ts-ignore
                            countryData[key].contextualName = c[0]
                                .replace(matchLocalForeignRegex, '$2'); //@ts-ignore
                            countryData[key].foreignName = c[0]
                                .replace(matchLocalForeignRegex, '$3');
                        }
                        else if (matchContextRegex.test(c[0])) { //@ts-ignore
                            countryData[key].localName = c[0]
                                .replace(matchContextRegex, '$1 $3'); //@ts-ignore
                            countryData[key].contextualName = c[0]
                                .replace(matchContextRegex, '$2 $3');
                        }
                        else {
                            console.log("Invalid name format: ".concat(c[0]));
                        }
                    }
                    else {
                        console.log("Invalid name format: ".concat(c[0]));
                    }
                }
                else {
                    console.log("Invalid name format: ".concat(c[0]));
                }
            }
        }
        catch (e_5_1) { e_5 = { error: e_5_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_5) throw e_5.error; }
        }
        return countryData;
    })();
});
// for (let i = 0; i < countries.length; i++) {
//   let country = countries[i][0];
//   let regionCode = countries[i][1];
//   let dialCode = countries[i][2];
//   let preFormat = countries[i][3] === "" ? undefined : countries[i][3]!;
//   let format = preFormat === "" ? undefined : preFormat;
//   let zoneTypes = countries[i][4];
//   let zoneType = countries[i][6] < C countries[i][4]<C//
//     let zones = Array.isArray(countries[i][5]) ? countries[i][5] : countries.map((x) => x.at(5)) === countries[i][5]
//   const countries = array;
//   for (let i = 0; i < regionCodes.length; i++) {
//     Countries.arr[regionCodes[i]] = array[i];
//   }
//   if (regionCode === undefined) {
//     regionCode = regionCodes as RegionCodes extends R ? RegionCodes : never;
//     for (let i = 0, l = regionCodes.length; i < l; i++) {
//       const regionCode = regionCodes[i];
//       const country = (regionCode)[i];
//       all[regionCode] = country;
//       all[Symbol.iterator] = function* () {
//         for (let key of regionCodes) {
//           yield key;
//         }
//         return country;
//       }
//     }
//     return ();
//   } else {
//     return [regionCode];
//   }
// }
// all.prototype = {
//   [Symbol('allCountries')](regionCode) {
//     if (regionCode) {
//       return countries[regionCode];
//     } else {
//       return countries;
//     }
//   },
// }
// all.prototype.countries = countries;
// all.prototype.regionCodes = regionCodes;
// for (let i = 0; i < countries.length; i++) {
//   let regionCode = countries.find((item) => item[1] === countries[i][1])?.[1];
//   let name = countries[i][0];
//   let dialCode = countries[i][2];
//   let preFormat = countries[i][3] === "" ? undefined : countries[i][3]!;
//   let format = preFormat === "" ? undefined : preFormat;
//   let zoneTypes = countries[i][4];
//   let zoneType = countries[i][6]<C countries[i][4]<C//   let zones = Array.isArray(countries[i][5]) ? countries[i][5] : countries.map((x)=>x.at(5)) === countries[i][5]((x)=> x[5])?.[5] => item[5] === countries[i][5])?.[5];
//       return result as typeof result extends undefined ? never : typeof result extends 1 ?;;
//     };
//   }(countries[i][5]);
//   let flag = countries[i][6];
//   let priority = countries[i][7] || 0 as 0;
//   let areaCodes = countries[i][8];
//   all.prototype[regionCode] = {
//     name: countries[i][0],
//     regionCode: countries[i][1],
//     dialCode: countries[i][2],
//     format: countries[i][3],
//     zoneType: countries[i][4],
//     zones: countries[i][5],
//     flag: countries[i][6],
//     priority: countries[i][7],
//     areaCodes: countries[i][8],
//   }
// }
// all.prototype = countries;
// const cName = countries.some((item: Country) => {
//   countries.some((item: Country): item is Country extends infer CA ? CA : never => item[0]);
// });
// const cCode = countries.some((item: Country): item is RegionCode extends infer CA ? CA : never => item[1]);
// const cDCode = countries.some((item: Country ): item is DialCode extends infer CA ? CA : never => item[2]);
// for (let i = 0; i < countries.length; i++) {
//   if (countries.findIndex((item): item is C extends infer CA ? CA : never => item === countries[i]) !== i) break;
//   let index = regionCodes.push(countries[i][1]);
//   if (index !== i) {
//     throw new Error("Duplicate region code");
//   }
// }
// if (regionCode) {
//   for (let i = 0; i < countries.length; i++) {
//     if (countries[i][1] as RegionCodes[number] === regionCode) {
//       return countries[i];
//     } else {
//       continue;
//     }
//   }
//   throw new Error("Invalid region code");
// } else {
//   return countries;
// }
// if (typeof module !== "undefined") module.exports = allCountries;
// };
// const val = allCountries("US");
// type AllCountryMap<R extends RegionCode> = CountryX extends R> extends ([infer N extends CountryArray<R>[0], R extends CountryArray<R>[1] ? R : never, infer DC extends CountryArray<R>[2], infer F extends CountryArray<R>[3], infer ZT extends CountryArray<R>[4], infer Z extends CountryArray<R>[5], infer CF extends CountryArray<R>[6], infer DP extends CountryArray<R>[7], infer AC extends CountryArray<R>[8]]) | ([infer N extends CountryArray<R>[0], R extends CountryArray<R>[1] ? R : never, infer DC extends CountryArray<R>[2], infer F extends CountryArray<R>[3], infer ZT extends CountryArray<R>[4], infer Z extends CountryArray<R>[5], infer CF extends CountryArray<R>[6], infer DP extends CountryArray<R>[7]]) | ([infer N extends CountryArray<R>[0], R extends CountryArray<R>[1] ? R : never, infer DC extends CountryArray<R>[2], infer F extends CountryArray<R>[3], infer ZT extends CountryArray<R>[4], infer Z extends CountryArray<R>[5], infer CF extends CountryArray<R>[6]]) | ([infer N extends CountryArray<R>[0], R extends CountryArray<R>[1] ? R : never, infer DC extends CountryArray<R>[2], infer F extends CountryArray<R>[3], infer CF4 extends CountryArray<R>[4], 1]) | ([infer N extends CountryArray<R>[0], R extends CountryArray<R>[1] ? R : never, infer DC extends CountryArray<R>[2], infer F extends CountryArray<R>[3], infer CF4 extends CountryArray<R>[4]]) ? CountryArray<R>['length'] extends 9 ? [N, R, DC, F, ZT, Z, CF, DP, AC] : CountryArray<R>['length'] extends 8 ? [N, R, DC, F, ZT, Z, CF, DP] : CountryArray<R>['length'] extends 7 ? [N, R, DC, F, ZT, Z, CF] : CountryArray<R>['length'] extends 6 ? [N, R, DC, F, CF4, 1] : CountryArray<R>['length'] extends 5 ? [N, R, DC, F, CF4] : never : never;
