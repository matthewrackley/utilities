/**
 *   Copyright (c) 2023 Matthew Allen Rackley
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

import Util from "../namespaced/Util";
import { MutableType, getIterableValue, notify } from '../namespaced/Util';
import { isObject } from "../types/typeguards";

/**
 * @file allCountriesMod.js
 * @description
 * @author Matthew Allen Rackley
 * @copyright [Matthew Rackley's Github](https://www.github.com/matthewrackley "Matthew Rackley on github.com")
 */

/**
 * @var allCountries - All countries data in
 * array format. This is the raw data used to generate the `allCountries` object.
 * 1. Can be used to get the data as an array. @type {Countries}
 * 2. Can be used to get the data as an object. @type {Country[]}
 */
export var allCountries = {
  AD: ["Andorra", "AD", "376", "+...-...-...", "Regions", ["Andorra la Vella", "Canillo", "Encamp", "Escaldes-Engordany", "La Massana", "Ordino", "Sant Julià de Lòria"], "🇦🇩"] as ["Andorra", "AD", "376", "+...-...-...", "Regions", ["Andorra la Vella", "Canillo", "Encamp", "Escaldes-Engordany", "La Massana", "Ordino", "Sant Julià de Lòria"], "🇦🇩"],
  AE: ["United Arab Emirates (‫الإمارات العربية المتحدة‬‎)", "AE", "971", "+...-.-...-....", "Emirates", ["Abu Dhabi", "Ajman", "Dubai", "Fujairah", "Ras Al Khaimah", "Sharjah", "Umm Al Quwain"], "🇦🇪"] as ["United Arab Emirates (‫الإمارات العربية المتحدة‬‎)", "AE", "971", "+...-.-...-....", "Emirates", ["Abu Dhabi", "Ajman", "Dubai", "Fujairah", "Ras Al Khaimah", "Sharjah", "Umm Al Quwain"], "🇦🇪"],
  AF: ["Afghanistan (‫افغانستان‬‎)", "AF", "93", "+..-..-...-....", "Regions", ['Badakhshan', 'Badghis', 'Baghlan', 'Balkh', 'Bamyan', 'Daykundi', 'Farah', 'Faryab', 'Ghazni', 'Ghor', 'Helmand', 'Herat', 'Jowzjan', 'Kabul', 'Kandahar', 'Kapisa', 'Khost', 'Kunar', 'Kunduz Province', 'Laghman', 'Logar', 'Nangarhar', 'Nimruz', 'Nuristan', 'Paktia', 'Paktika', 'Panjshir', 'Parwan', 'Samangan', 'Sar-e Pol', 'Takhar', 'Urozgan', 'Zabul'], '🇦🇫'] as ["Afghanistan (‫افغانستان‬‎)", "AF", "93", "+..-..-...-....", "Regions", ['Badakhshan', 'Badghis', 'Baghlan', 'Balkh', 'Bamyan', 'Daykundi', 'Farah', 'Faryab', 'Ghazni', 'Ghor', 'Helmand', 'Herat', 'Jowzjan', 'Kabul', 'Kandahar', 'Kapisa', 'Khost', 'Kunar', 'Kunduz Province', 'Laghman', 'Logar', 'Nangarhar', 'Nimruz', 'Nuristan', 'Paktia', 'Paktika', 'Panjshir', 'Parwan', 'Samangan', 'Sar-e Pol', 'Takhar', 'Urozgan', 'Zabul'], '🇦🇫'],
  AG: ["Antigua and Barbuda", "AG", "1268", "+.(...)...-....", "Parishes", ["Saint George", "Saint John", "Saint Mary", "Saint Paul", "Saint Peter", "Saint Philip"], "🇦🇬"] as ["Antigua and Barbuda", "AG", "1268", "+.(...)...-....", "Parishes", ["Saint George", "Saint John", "Saint Mary", "Saint Paul", "Saint Peter", "Saint Philip"], "🇦🇬"],
  AI: ["Anguilla", "AI", "1264", "+.(...)...-....", "Districts", ["Anguilla Island", "Blowing Point", "East End", "George Hill", "Island Harbour", "North Hill", "North Side", "Sandy Ground", "Sandy Hill", "South Hill", "Stoney Ground", "The Farrington", "The Quarter", "The Valley", "West End"], "🇦🇮"] as ["Anguilla", "AI", "1264", "+.(...)...-....", "Districts", ["Anguilla Island", "Blowing Point", "East End", "George Hill", "Island Harbour", "North Hill", "North Side", "Sandy Ground", "Sandy Hill", "South Hill", "Stoney Ground", "The Farrington", "The Quarter", "The Valley", "West End"], "🇦🇮"],
  AL: ["Albania (Shqipëri)", "AL", "355", "+...(...)...-...", "Counties", ["Berat", "Dibër", "Durrës", "Elbasan", "Fier", "Gjirokastër", "Korçë", "Kukës", "Lezhë", "Shkodër", "Tirana", "Vlorë"], '🇦🇱'] as ["Albania (Shqipëri)", "AL", "355", "+...(...)...-...", "Counties", ["Berat", "Dibër", "Durrës", "Elbasan", "Fier", "Gjirokastër", "Korçë", "Kukës", "Lezhë", "Shkodër", "Tirana", "Vlorë"], '🇦🇱'],
  AM: ["Armenia (Հայաստան)", "AM", "374", "+...-..-...-...", "Provinces", ["Aragatsotn", "Ararat", "Armavir", "Gegharkunik", "Kotayk", "Lori", "Shirak", "Syunik", "Tavush", "Vayots Dzor", "Yerevan"], "🇦🇲"] as ["Armenia (Հայաստան)", "AM", "374", "+...-..-...-...", "Provinces", ["Aragatsotn", "Ararat", "Armavir", "Gegharkunik", "Kotayk", "Lori", "Shirak", "Syunik", "Tavush", "Vayots Dzor", "Yerevan"], "🇦🇲"],
  AO: ["Angola", "AO", "244", "+...(...)...-...", "Provinces", ["Bengo", "Benguela", "Bié", "Cabinda", "Cuando Cubango", "Cuanza Norte", "Cuanza Sul", "Cunene", "Huambo", "Huíla", "Luanda", "Lunda Norte", "Lunda Sul", "Malanje", "Moxico", "Namibe", "Uíge", "Zaire"], "🇦🇴"] as ["Angola", "AO", "244", "+...(...)...-...", "Provinces", ["Bengo", "Benguela", "Bié", "Cabinda", "Cuando Cubango", "Cuanza Norte", "Cuanza Sul", "Cunene", "Huambo", "Huíla", "Luanda", "Lunda Norte", "Lunda Sul", "Malanje", "Moxico", "Namibe", "Uíge", "Zaire"], "🇦🇴"],
  AQ: ["Antarctica", "AQ", "672", "", "🇦🇶"] as ["Antarctica", "AQ", "672", "", "🇦🇶"],
  AR: ["Argentina", "AR", "54", "+..(...)...-....", "Regions", ["Buenos Aires", "Catamarca", "Chaco", "Chubut", "Córdoba", "Corrientes", "Entre Ríos", "Formosa", "Jujuy", "La Pampa", "La Rioja", "Mendoza", "Misiones", "Neuquén", "Río Negro", "Salta", "San Juan", "San Luis", "Santa Cruz", "Santa Fe", "Santiago del Estero", "Tierra del Fuego", "Tucumán"], "🇦🇷"] as ["Argentina", "AR", "54", "+..(...)...-....", "Regions", ["Buenos Aires", "Catamarca", "Chaco", "Chubut", "Córdoba", "Corrientes", "Entre Ríos", "Formosa", "Jujuy", "La Pampa", "La Rioja", "Mendoza", "Misiones", "Neuquén", "Río Negro", "Salta", "San Juan", "San Luis", "Santa Cruz", "Santa Fe", "Santiago del Estero", "Tierra del Fuego", "Tucumán"], "🇦🇷"],
  AS: ["American Samoa", "AS", "1684", "+.(...)...-....", "Districts", ["Eastern District", "Manu'a District", "Rose Island", "Swains Island", "Western District"], '🇦🇸'] as ["American Samoa", "AS", "1684", "+.(...)...-....", "Districts", ["Eastern District", "Manu'a District", "Rose Island", "Swains Island", "Western District"], '🇦🇸'],
  AT: ["Austria (Österreich)", "AT", "43", "+..(...)...-....", "States", ["Burgenland", "Carinthia", "Lower Austria", "Upper Austria", "Salzburg", "Styria", "Tyrol", "Vorarlberg", "Vienna"], "🇦🇹"] as ["Austria (Österreich)", "AT", "43", "+..(...)...-....", "States", ["Burgenland", "Carinthia", "Lower Austria", "Upper Austria", "Salzburg", "Styria", "Tyrol", "Vorarlberg", "Vienna"], "🇦🇹"],
  AU: ["Australia", "AU", "61", "+.. ... ... ...", ["States", "Territories"], { "States": ["New South Wales", "Queensland", "South Australia", "Tasmania", "Victoria", "Western Australia"], "Territories": ["Australian Capital Territory", "Northern Territory"] }, "🇦🇺"] as ["Australia", "AU", "61", "+.. ... ... ...", ["States", "Territories"], { "States": ["New South Wales", "Queensland", "South Australia", "Tasmania", "Victoria", "Western Australia"], "Territories": ["Australian Capital Territory", "Northern Territory"] }, "🇦🇺"],
  AW: ["Aruba", "AW", "297", "+...-...-....", "🇦🇼"] as ["Aruba", "AW", "297", "+...-...-....", "🇦🇼"],
  AX: ["Åland Islands", "AX", "358", "", "Municipalities", ['Mariehamn', 'Jomala', 'Finström', 'Lemland', 'Saltvik', 'Hammarland', 'Sund', 'Eckerö', 'Föglö', 'Geta', 'Vårdö', 'Brändö', 'Lumparland', 'Kumlinge', 'Kökar', 'Sottunga'], '🇦🇽'] as ["Åland Islands", "AX", "358", "", "Municipalities", ['Mariehamn', 'Jomala', 'Finström', 'Lemland', 'Saltvik', 'Hammarland', 'Sund', 'Eckerö', 'Föglö', 'Geta', 'Vårdö', 'Brändö', 'Lumparland', 'Kumlinge', 'Kökar', 'Sottunga'], '🇦🇽'],
  AZ: ["Azerbaijan (Azərbaycan)", "AZ", "994", "+...-..-...-..-..", "Districts", ["Absheron", "Agdam", "Agdash", "Agstafa", "Agsu", "Astara", "Baku", "Balakan", "Barda", "Beylagan", "Bilasuvar", "Dashkasan", "Fizuli", "Ganja", "Gobustan", "Goranboy", "Goychay", "Goygol", "Hajigabul", "Imishli", "Ismailli", "Jabrayil", "Jalilabad", "Kalbajar", "Kurdamir", "Lachin", "Lankaran", "Lankaran", "Lerik", "Masally", "Mingachevir", "Naftalan", "Nakhchivan", "Neftchala", "Oghuz", "Ordubad", "Qabala", "Qakh", "Qazakh", "Quba", "Qubadli", "Qusar", "Saatly", "Sabirabad", "Salyan", "Shabran", "Shaki", "Shamakhi", "Shamkir", "Shirvan", "Shusha", "Siazan", "Sumgayit", "Tartar", "Tovuz", "Ujar", "Yardymli", "Yevlakh", "Zangilan", "Zaqatala", "Zardab"], "🇦🇿"] as ["Azerbaijan (Azərbaycan)", "AZ", "994", "+...-..-...-..-..", "Districts", ["Absheron", "Agdam", "Agdash", "Agstafa", "Agsu", "Astara", "Baku", "Balakan", "Barda", "Beylagan", "Bilasuvar", "Dashkasan", "Fizuli", "Ganja", "Gobustan", "Goranboy", "Goychay", "Goygol", "Hajigabul", "Imishli", "Ismailli", "Jabrayil", "Jalilabad", "Kalbajar", "Kurdamir", "Lachin", "Lankaran", "Lankaran", "Lerik", "Masally", "Mingachevir", "Naftalan", "Nakhchivan", "Neftchala", "Oghuz", "Ordubad", "Qabala", "Qakh", "Qazakh", "Quba", "Qubadli", "Qusar", "Saatly", "Sabirabad", "Salyan", "Shabran", "Shaki", "Shamakhi", "Shamkir", "Shirvan", "Shusha", "Siazan", "Sumgayit", "Tartar", "Tovuz", "Ujar", "Yardymli", "Yevlakh", "Zangilan", "Zaqatala", "Zardab"], "🇦🇿"],
  BA: ["Bosnia and Herzegovina (Босна и Херцеговина)", "BA", "387", "+...-..-....", "Regions", ["Brčko District", "Federation of Bosnia and Herzegovina", "Republika Srpska"], "🇧🇦"] as ["Bosnia and Herzegovina (Босна и Херцеговина)", "BA", "387", "+...-..-....", "Regions", ["Brčko District", "Federation of Bosnia and Herzegovina", "Republika Srpska"], "🇧🇦"],
  BB: ["Barbados", "BB", "1246", "+.(...)...-....", "Regions", ["Christ Church", "Saint Andrew", "Saint George", "Saint James", "Saint John", "Saint Joseph", "Saint Lucy", "Saint Michael", "Saint Peter", "Saint Philip", "Saint Thomas"], "🇧🇧"] as ["Barbados", "BB", "1246", "+.(...)...-....", "Regions", ["Christ Church", "Saint Andrew", "Saint George", "Saint James", "Saint John", "Saint Joseph", "Saint Lucy", "Saint Michael", "Saint Peter", "Saint Philip", "Saint Thomas"], "🇧🇧"],
  BD: ["Bangladesh (বাংলাদেশ)", "BD", "880", "+...-..-...-...", "Districts", ["Barisal", "Chittagong", "Dhaka", "Khulna", "Mymensingh", "Rajshahi", "Rangpur", "Sylhet"], "🇧🇩"] as ["Bangladesh (বাংলাদেশ)", "BD", "880", "+...-..-...-...", "Districts", ["Barisal", "Chittagong", "Dhaka", "Khulna", "Mymensingh", "Rajshahi", "Rangpur", "Sylhet"], "🇧🇩"],
  BE: ["Belgium (België)", "BE", "32", "+.. ... .. .. ..", "States", ["Brussels", "Flemish Brabant", "Walloon Brabant", "Antwerp", "East Flanders", "West Flanders", "Hainaut", "Liège", "Limburg", "Luxembourg", "Namur"], "🇧🇪"] as ["Belgium (België)", "BE", "32", "+.. ... .. .. ..", "States", ["Brussels", "Flemish Brabant", "Walloon Brabant", "Antwerp", "East Flanders", "West Flanders", "Hainaut", "Liège", "Limburg", "Luxembourg", "Namur"], "🇧🇪"],
  BF: ["Burkina Faso", "BF", "226", "+...-..-..-....", "Provinces", ["Balé", "Bam", "Banwa", "Bazèga", "Bougouriba", "Boulgou", "Boulkiemdé", "Comoé", "Ganzourgou", "Gnagna", "Gourma", "Houet", "Ioba", "Kadiogo", "Kénédougou", "Komondjari", "Kompienga", "Kossi", "Koulpélogo", "Kouritenga", "Kourwéogo", "Léraba", "Loroum", "Mouhoun", "Namentenga", "Nahouri", "Nayala", "Noumbiel", "Oubritenga", "Oudalan", "Passoré", "Poni", "Sanguié", "Sanmatenga", "Séno", "Sissili", "Soum", "Sourou", "Tapoa", "Tui", "Yagha", "Yatenga", "Ziro", "Zondoma", "Zoundwéogo"], "🇧🇫"] as ["Burkina Faso", "BF", "226", "+...-..-..-....", "Provinces", ["Balé", "Bam", "Banwa", "Bazèga", "Bougouriba", "Boulgou", "Boulkiemdé", "Comoé", "Ganzourgou", "Gnagna", "Gourma", "Houet", "Ioba", "Kadiogo", "Kénédougou", "Komondjari", "Kompienga", "Kossi", "Koulpélogo", "Kouritenga", "Kourwéogo", "Léraba", "Loroum", "Mouhoun", "Namentenga", "Nahouri", "Nayala", "Noumbiel", "Oubritenga", "Oudalan", "Passoré", "Poni", "Sanguié", "Sanmatenga", "Séno", "Sissili", "Soum", "Sourou", "Tapoa", "Tui", "Yagha", "Yatenga", "Ziro", "Zondoma", "Zoundwéogo"], "🇧🇫"],
  BG: ["Bulgaria (България)", "BG", "359", "+...(...)...-...", "States", ["Blagoevgrad", "Burgas", "Dobrich", "Gabrovo", "Haskovo", "Kardzhali", "Kyustendil", "Lovech", "Montana", "Pazardzhik", "Pernik", "Pleven", "Plovdiv", "Razgrad", "Ruse", "Shumen", "Silistra", "Sliven", "Smolyan", "Sofia", "Stara Zagora", "Targovishte", "Varna", "Veliko Tarnovo", "Vidin", "Vratsa", "Yambol"], "🇧🇬"] as ["Bulgaria (България)", "BG", "359", "+...(...)...-...", "States", ["Blagoevgrad", "Burgas", "Dobrich", "Gabrovo", "Haskovo", "Kardzhali", "Kyustendil", "Lovech", "Montana", "Pazardzhik", "Pernik", "Pleven", "Plovdiv", "Razgrad", "Ruse", "Shumen", "Silistra", "Sliven", "Smolyan", "Sofia", "Stara Zagora", "Targovishte", "Varna", "Veliko Tarnovo", "Vidin", "Vratsa", "Yambol"], "🇧🇬"],
  BH: ["Bahrain (‫البحرين‬‎)", "BH", "973", "+...-....-....", "Governorates", ["Capital Governorate", "Muharraq Governorate", "Northern Governorate", "Southern Governorate"], "🇧🇭"] as ["Bahrain (‫البحرين‬‎)", "BH", "973", "+...-....-....", "Governorates", ["Capital Governorate", "Muharraq Governorate", "Northern Governorate", "Southern Governorate"], "🇧🇭"],
  BI: ["Burundi (Uburundi)", "BI", "257", "+...-..-..-....", "Provinces", ["Bubanza", "Bujumbura Mairie", "Bujumbura Rural", "Bururi", "Cankuzo", "Cibitoke", "Gitega", "Karuzi", "Kayanza", "Kirundo", "Makamba", "Muramvya", "Muyinga", "Mwaro", "Ngozi", "Rumonge", "Rutana", "Ruyigi"], "🇧🇮"] as ["Burundi (Uburundi)", "BI", "257", "+...-..-..-....", "Provinces", ["Bubanza", "Bujumbura Mairie", "Bujumbura Rural", "Bururi", "Cankuzo", "Cibitoke", "Gitega", "Karuzi", "Kayanza", "Kirundo", "Makamba", "Muramvya", "Muyinga", "Mwaro", "Ngozi", "Rumonge", "Rutana", "Ruyigi"], "🇧🇮"],
  BJ: ["Benin (Bénin)", "BJ", "229", "+...-..-..-....", "Departments", ["Alibori", "Atakora", "Atlantique", "Borgou", "Collines", "Donga", "Kouffo", "Littoral", "Mono", "Ouémé", "Plateau", "Zou"], "🇧🇯"] as ["Benin (Bénin)", "BJ", "229", "+...-..-..-....", "Departments", ["Alibori", "Atakora", "Atlantique", "Borgou", "Collines", "Donga", "Kouffo", "Littoral", "Mono", "Ouémé", "Plateau", "Zou"], "🇧🇯"],
  BL: ["Saint Barthélemy (Saint-Barthélemy)", "BL", "590", "", "Parishes", ["Gustavia"], "🇧🇱", 1] as ["Saint Barthélemy (Saint-Barthélemy)", "BL", "590", "", "Parishes", ["Gustavia"], "🇧🇱", 1],
  BM: ["Bermuda", "BM", "1441", "+.(...)...-....", ["Parishes", "Municipalities"], { "Parishes": ["Devonshire", "Hamilton", "Paget", "Pembroke", "Sandys", "Smith's", "Southampton", "St. George's", "Warwick"], "Municipalities": ["Hamilton", "St. George's"] }, "🇧🇲"] as ["Bermuda", "BM", "1441", "+.(...)...-....", ["Parishes", "Municipalities"], { "Parishes": ["Devonshire", "Hamilton", "Paget", "Pembroke", "Sandys", "Smith's", "Southampton", "St. George's", "Warwick"], "Municipalities": ["Hamilton", "St. George's"] }, "🇧🇲"],
  BN: ["Brunei", "BN", "673", "+...-...-....", "Districts", ["Belait", "Brunei-Muara", "Temburong", "Tutong"], "🇧🇳"] as ["Brunei", "BN", "673", "+...-...-....", "Districts", ["Belait", "Brunei-Muara", "Temburong", "Tutong"], "🇧🇳"],
  BO: ["Bolivia", "BO", "591", "+...-.-...-....", "States", ["Chuquisaca", "Cochabamba", "Beni", "La Paz", "Oruro", "Pando", "Potosí", "Santa Cruz", "Tarija"], "🇧🇴"] as ["Bolivia", "BO", "591", "+...-.-...-....", "States", ["Chuquisaca", "Cochabamba", "Beni", "La Paz", "Oruro", "Pando", "Potosí", "Santa Cruz", "Tarija"], "🇧🇴"],
  BQ: ["Caribbean Netherlands", "BQ", "599", "+...-...-....", "Special Municipalities", ["Bonaire", "Saba", "Sint Eustatius"], "🇧🇶", 1] as ["Caribbean Netherlands", "BQ", "599", "+...-...-....", "Special Municipalities", ["Bonaire", "Saba", "Sint Eustatius"], "🇧🇶", 1],
  BR: ["Brazil (Brasil)", "BR", "55", "+..-..-....-....", "Regions", ["Acre", "Alagoas", "Amapá", "Amazonas", "Bahia", "Ceará", "Distrito Federal", "Espírito Santo", "Goiás", "Maranhão", "Mato Grosso", "Mato Grosso do Sul", "Minas Gerais", "Pará", "Paraíba", "Paraná", "Pernambuco", "Piauí", "Rio de Janeiro", "Rio Grande do Norte", "Rio Grande do Sul", "Rondônia", "Roraima", "Santa Catarina", "São Paulo", "Sergipe", "Tocantins"], "🇧🇷"] as ["Brazil (Brasil)", "BR", "55", "+..-..-....-....", "Regions", ["Acre", "Alagoas", "Amapá", "Amazonas", "Bahia", "Ceará", "Distrito Federal", "Espírito Santo", "Goiás", "Maranhão", "Mato Grosso", "Mato Grosso do Sul", "Minas Gerais", "Pará", "Paraíba", "Paraná", "Pernambuco", "Piauí", "Rio de Janeiro", "Rio Grande do Norte", "Rio Grande do Sul", "Rondônia", "Roraima", "Santa Catarina", "São Paulo", "Sergipe", "Tocantins"], "🇧🇷"],
  BS: ["Bahamas", "BS", "1242", "+.(...)...-....", "Regions", ["Acklins", "Berry Islands", "Bimini", "Black Point", "Cat Island", "Central Abaco", "Central Andros", "Central Eleuthera", "City of Freeport", "Crooked Island and Long Cay", "East Grand Bahama", "Exuma", "Grand Cay", "Harbour Island", "Hope Town", "Inagua", "Long Island", "Mangrove Cay", "Mayaguana", "Moore's Island", "North Abaco", "North Andros", "North Eleuthera", "Ragged Island", "Rum Cay", "San Salvador", "South Abaco", "South Andros", "South Eleuthera", "Spanish Wells", "West Grand Bahama"], "🇧🇸"] as ["Bahamas", "BS", "1242", "+.(...)...-....", "Regions", ["Acklins", "Berry Islands", "Bimini", "Black Point", "Cat Island", "Central Abaco", "Central Andros", "Central Eleuthera", "City of Freeport", "Crooked Island and Long Cay", "East Grand Bahama", "Exuma", "Grand Cay", "Harbour Island", "Hope Town", "Inagua", "Long Island", "Mangrove Cay", "Mayaguana", "Moore's Island", "North Abaco", "North Andros", "North Eleuthera", "Ragged Island", "Rum Cay", "San Salvador", "South Abaco", "South Andros", "South Eleuthera", "Spanish Wells", "West Grand Bahama"], "🇧🇸"],
  BT: ["Bhutan (འབྲུག)", "BT", "975", "+...-.-...-...", "Regions", ["Bumthang", "Chukha", "Dagana", "Gasa", "Haa", "Lhuntse", "Mongar", "Paro", "Pemagatshel", "Punakha", "Samdrup Jongkhar", "Samtse", "Sarpang", "Thimphu", "Trashigang", "Trashiyangtse", "Trongsa", "Tsirang", "Wangdue Phodrang", "Zhemgang"], "🇧🇹"] as ["Bhutan (འབྲུག)", "BT", "975", "+...-.-...-...", "Regions", ["Bumthang", "Chukha", "Dagana", "Gasa", "Haa", "Lhuntse", "Mongar", "Paro", "Pemagatshel", "Punakha", "Samdrup Jongkhar", "Samtse", "Sarpang", "Thimphu", "Trashigang", "Trashiyangtse", "Trongsa", "Tsirang", "Wangdue Phodrang", "Zhemgang"], "🇧🇹"],
  BV: ["Bouvet Island", "BV", "47", "", "🇧🇻"] as ["Bouvet Island", "BV", "47", "", "🇧🇻"],
  BW: ["Botswana", "BW", "267", "+...-..-...-...", "Districts", ["Central District", "Ghanzi District", "Kgalagadi District", "Kgatleng District", "Kweneng District", "North-East District", "North-West District", "South-East District", "Southern District"], "🇧🇼"] as ["Botswana", "BW", "267", "+...-..-...-...", "Districts", ["Central District", "Ghanzi District", "Kgalagadi District", "Kgatleng District", "Kweneng District", "North-East District", "North-West District", "South-East District", "Southern District"], "🇧🇼"],
  BY: ["Belarus (Беларусь)", "BY", "375", "+...(..)...-..-..", "Regions", ["Brest Region", "Gomel Region", "Grodno Region", "Minsk Region", "Mogilev Region", "Vitebsk Region"], "🇧🇾"] as ["Belarus (Беларусь)", "BY", "375", "+...(..)...-..-..", "Regions", ["Brest Region", "Gomel Region", "Grodno Region", "Minsk Region", "Mogilev Region", "Vitebsk Region"], "🇧🇾"],
  BZ: ["Belize", "BZ", "501", "+...-...-....", "Districts", ["Belize District", "Cayo District", "Corozal District", "Orange Walk District", "Stann Creek District", "Toledo District"], "🇧🇿"] as ["Belize", "BZ", "501", "+...-...-....", "Districts", ["Belize District", "Cayo District", "Corozal District", "Orange Walk District", "Stann Creek District", "Toledo District"], "🇧🇿"],
  CA: ["Canada", "CA", "1", "+. (...) ...-....", ["Territories", "Provinces"], { "Territories": ["Northwest Territories", "Nunavut", "Yukon"], "Provinces": ["Alberta", "British Columbia", "Manitoba", "New Brunswick", "Newfoundland and Labrador", "Nova Scotia", "Ontario", "Prince Edward Island", "Quebec", "Saskatchewan"] }, "🇨🇦", 1, ["204", "236", "249", "250", "289", "306", "343", "365", "387", "403", "416", "418", "431", "437", "438", "450", "506", "514", "519", "548", "579", "581", "587", "604", "613", "639", "647", "672", "705", "709", "742", "778", "780", "782", "807", "819", "825", "867", "873", "902", "905"]] as ["Canada", "CA", "1", "+. (...) ...-....", ["Territories", "Provinces"], { "Territories": ["Northwest Territories", "Nunavut", "Yukon"], "Provinces": ["Alberta", "British Columbia", "Manitoba", "New Brunswick", "Newfoundland and Labrador", "Nova Scotia", "Ontario", "Prince Edward Island", "Quebec", "Saskatchewan"] }, "🇨🇦", 1, ["204", "236", "249", "250", "289", "306", "343", "365", "387", "403", "416", "418", "431", "437", "438", "450", "506", "514", "519", "548", "579", "581", "587", "604", "613", "639", "647", "672", "705", "709", "742", "778", "780", "782", "807", "819", "825", "867", "873", "902", "905"]],
  CC: ["Cocos (Keeling) Islands", "CC", "61", "", "🇨🇨"] as ["Cocos (Keeling) Islands", "CC", "61", "", "🇨🇨"],
  CD: ["Congo (DRC) (Jamhuri ya Kidemokrasia ya Kongo)", "CD", "243", "+...(...)...-...", "Provinces", ["Kinshasa", "Kongo Central", "Kwango", "Kwilu", "Kasai", "Kasai-Central", "Kasai-Oriental", "Sankuru", "Maniema", "South Kivu", "North Kivu", "Ituri", "Haut-Uele", "Tshopo", "Bas-Uele", "Tanganyika", "Haut-Lomami", "Lualaba", "Kwango", "Kwilu", "Kasai", "Kasai-Central", "Kasai-Oriental", "Sankuru", "Maniema", "South Kivu", "North Kivu", "Ituri", "Haut-Uele", "Tshopo", "Bas-Uele", "Tanganyika", "Haut-Lomami", "Lualaba"], "🇨🇩"] as ["Congo (DRC) (Jamhuri ya Kidemokrasia ya Kongo)", "CD", "243", "+...(...)...-...", "Provinces", ["Kinshasa", "Kongo Central", "Kwango", "Kwilu", "Kasai", "Kasai-Central", "Kasai-Oriental", "Sankuru", "Maniema", "South Kivu", "North Kivu", "Ituri", "Haut-Uele", "Tshopo", "Bas-Uele", "Tanganyika", "Haut-Lomami", "Lualaba", "Kwango", "Kwilu", "Kasai", "Kasai-Central", "Kasai-Oriental", "Sankuru", "Maniema", "South Kivu", "North Kivu", "Ituri", "Haut-Uele", "Tshopo", "Bas-Uele", "Tanganyika", "Haut-Lomami", "Lualaba"], "🇨🇩"],
  CF: ["Central African Republic (République centrafricaine)", "CF", "236", "+...-..-..-....", "Regions", ["Bamingui-Bangoran", "Bangui", "Basse-Kotto", "Haute-Kotto", "Haut-Mbomou", "Kémo", "Lobaye", "Mambéré-Kadéï", "Mbomou", "Nana-Grébizi", "Nana-Mambéré", "Ombella-M'Poko", "Ouaka", "Ouham", "Ouham-Pendé", "Sangha-Mbaéré", "Vakaga"], "🇨🇫"] as ["Central African Republic (République centrafricaine)", "CF", "236", "+...-..-..-....", "Regions", ["Bamingui-Bangoran", "Bangui", "Basse-Kotto", "Haute-Kotto", "Haut-Mbomou", "Kémo", "Lobaye", "Mambéré-Kadéï", "Mbomou", "Nana-Grébizi", "Nana-Mambéré", "Ombella-M'Poko", "Ouaka", "Ouham", "Ouham-Pendé", "Sangha-Mbaéré", "Vakaga"], "🇨🇫"],
  CG: ["Congo (Republic) (Congo-Brazzaville)", "CG", "242", "+...-..-...-....", "Departments", ["Bouenza", "Cuvette", "Cuvette-Ouest", "Kouilou", "Lékoumou", "Likouala", "Niari", "Plateaux", "Pool", "Sangha"], "🇨🇬"] as ["Congo (Republic) (Congo-Brazzaville)", "CG", "242", "+...-..-...-....", "Departments", ["Bouenza", "Cuvette", "Cuvette-Ouest", "Kouilou", "Lékoumou", "Likouala", "Niari", "Plateaux", "Pool", "Sangha"], "🇨🇬"],
  CI: ["Côte d’Ivoire", "CI", "225", "+...-..-...-...", "Regions", ["Lagunes", "Haut-Sassandra", "Savanes", "Vallée du Bandama", "Moyen-Comoé", "18 Montagnes", "Lacs", "Zanzan", "Bas-Sassandra", "Denguélé", "N'zi-Comoé", "Marahoué", "Sud-Comoé", "Worodougou", "Sud-Bandama", "Agnéby-Tiassa", "Bafing", "Gbêkê", "Fromager", "Moyen-Cavally", "Nawa", "Indénié-Djuablin", "Bounkani", "Moronou", "Gbôklé", "Iffou", "Bagoué", "Tchologo", "Poro", "Kabadougou", "Béré", "Korhogo"], "🇨🇮"] as ["Côte d’Ivoire", "CI", "225", "+...-..-...-...", "Regions", ["Lagunes", "Haut-Sassandra", "Savanes", "Vallée du Bandama", "Moyen-Comoé", "18 Montagnes", "Lacs", "Zanzan", "Bas-Sassandra", "Denguélé", "N'zi-Comoé", "Marahoué", "Sud-Comoé", "Worodougou", "Sud-Bandama", "Agnéby-Tiassa", "Bafing", "Gbêkê", "Fromager", "Moyen-Cavally", "Nawa", "Indénié-Djuablin", "Bounkani", "Moronou", "Gbôklé", "Iffou", "Bagoué", "Tchologo", "Poro", "Kabadougou", "Béré", "Korhogo"], "🇨🇮"],
  CK: ["Cook Islands", "CK", "682", "+...-..-...", ["Islands", "Districts"], { "Islands": ["Aitutaki", "Atiu", "Mangaia", "Manihiki", "Mauke", "Mitiaro", "Nassau", "Palmerston", "Penrhyn", "Pukapuka", "Rakahanga", "Rarotonga", "Suwarrow", "Takutea"], "Districts": ["Avarua", "Matavera", "Ngatangiia", "Takitumu"] }, "🇨🇰"] as ["Cook Islands", "CK", "682", "+...-..-...", ["Islands", "Districts"], { "Islands": ["Aitutaki", "Atiu", "Mangaia", "Manihiki", "Mauke", "Mitiaro", "Nassau", "Palmerston", "Penrhyn", "Pukapuka", "Rakahanga", "Rarotonga", "Suwarrow", "Takutea"], "Districts": ["Avarua", "Matavera", "Ngatangiia", "Takitumu"] }, "🇨🇰"],
  CL: ["Chile", "CL", "56", "+..-.-....-....", "States", ["Arica y Parinacota", "Tarapacá", "Antofagasta", "Atacama", "Coquimbo", "Valparaíso", "Región Metropolitana de Santiago", "Libertador General Bernardo O'Higgins", "Maule", "Ñuble", "Biobío", "La Araucanía", "Los Ríos", "Los Lagos", "Aysén", "Magallanes y de la Antártica Chilena"], "🇨🇱"] as ["Chile", "CL", "56", "+..-.-....-....", "States", ["Arica y Parinacota", "Tarapacá", "Antofagasta", "Atacama", "Coquimbo", "Valparaíso", "Región Metropolitana de Santiago", "Libertador General Bernardo O'Higgins", "Maule", "Ñuble", "Biobío", "La Araucanía", "Los Ríos", "Los Lagos", "Aysén", "Magallanes y de la Antártica Chilena"], "🇨🇱"],
  CM: ["Cameroon (Cameroun)", "CM", "237", "+...-....-....", "Regions", ["Adamaoua", "Centre", "East", "Far North", "Littoral", "North", "Northwest", "South", "Southwest", "West"], "🇨🇲"] as ["Cameroon (Cameroun)", "CM", "237", "+...-....-....", "Regions", ["Adamaoua", "Centre", "East", "Far North", "Littoral", "North", "Northwest", "South", "Southwest", "West"], "🇨🇲"],
  CN: ["China (中国)", "CN", "86", "+.. ..-........", ["Provinces", "Municipalities", "Autonomous Regions", "Special Administrative Regions"], { "Provinces": ["Anhui", "Fujian", "Gansu", "Guangdong", "Guizhou", "Hainan", "Hebei", "Heilongjiang", "Henan", "Hubei", "Hunan", "Jiangsu", "Jiangxi", "Jilin", "Liaoning", "Qinghai", "Shaanxi", "Shandong", "Shanxi", "Sichuan", "Yunnan", "Zhejiang"], "Municipalities": ["Beijing", "Chongqing", "Shanghai", "Tianjin"], "Autonomous Regions": ["Guangxi", "Inner Mongolia", "Ningxia", "Tibet", "Xinjiang"], "Special Administrative Regions": ["Hong Kong", "Macau"] }, "🇨🇳"] as ["China (中国)", "CN", "86", "+.. ..-........", ["Provinces", "Municipalities", "Autonomous Regions", "Special Administrative Regions"], { "Provinces": ["Anhui", "Fujian", "Gansu", "Guangdong", "Guizhou", "Hainan", "Hebei", "Heilongjiang", "Henan", "Hubei", "Hunan", "Jiangsu", "Jiangxi", "Jilin", "Liaoning", "Qinghai", "Shaanxi", "Shandong", "Shanxi", "Sichuan", "Yunnan", "Zhejiang"], "Municipalities": ["Beijing", "Chongqing", "Shanghai", "Tianjin"], "Autonomous Regions": ["Guangxi", "Inner Mongolia", "Ningxia", "Tibet", "Xinjiang"], "Special Administrative Regions": ["Hong Kong", "Macau"] }, "🇨🇳"],
  CO: ["Colombia", "CO", "57", "+..(...)...-....", "States", ["Amazonas", "Antioquia", "Arauca", "Atlántico", "Bolívar", "Boyacá", "Caldas", "Caquetá", "Casanare", "Cauca", "Cesar", "Chocó", "Córdoba", "Cundinamarca", "Guainía", "Guaviare", "Huila", "La Guajira", "Magdalena", "Meta", "Nariño", "Norte de Santander", "Putumayo", "Quindío", "Risaralda", "San Andrés, Providencia y Santa Catalina", "Santander", "Sucre", "Tolima", "Valle del Cauca", "Vaupés", "Vichada"], "🇨🇴"] as ["Colombia", "CO", "57", "+..(...)...-....", "States", ["Amazonas", "Antioquia", "Arauca", "Atlántico", "Bolívar", "Boyacá", "Caldas", "Caquetá", "Casanare", "Cauca", "Cesar", "Chocó", "Córdoba", "Cundinamarca", "Guainía", "Guaviare", "Huila", "La Guajira", "Magdalena", "Meta", "Nariño", "Norte de Santander", "Putumayo", "Quindío", "Risaralda", "San Andrés, Providencia y Santa Catalina", "Santander", "Sucre", "Tolima", "Valle del Cauca", "Vaupés", "Vichada"], "🇨🇴"],
  CR: ["Costa Rica", "CR", "506", "+... ....-....", "Provinces", ["San José", "Alajuela", "Cartago", "Heredia", "Guanacaste", "Puntarenas", "Limón"], "🇨🇷"] as ["Costa Rica", "CR", "506", "+... ....-....", "Provinces", ["San José", "Alajuela", "Cartago", "Heredia", "Guanacaste", "Puntarenas", "Limón"], "🇨🇷"],
  CU: ["Cuba", "CU", "53", "+..-.-...-....", "Provinces", ["Pinar del Río", "Artemisa", "La Habana", "Mayabeque", "Matanzas", "Cienfuegos", "Villa Clara", "Sancti Spíritus", "Ciego de Ávila", "Camagüey", "Las Tunas", "Holguín", "Granma", "Santiago de Cuba", "Guantánamo", "Isla de la Juventud"], "🇨🇺"] as ["Cuba", "CU", "53", "+..-.-...-....", "Provinces", ["Pinar del Río", "Artemisa", "La Habana", "Mayabeque", "Matanzas", "Cienfuegos", "Villa Clara", "Sancti Spíritus", "Ciego de Ávila", "Camagüey", "Las Tunas", "Holguín", "Granma", "Santiago de Cuba", "Guantánamo", "Isla de la Juventud"], "🇨🇺"],
  CV: ["Cape Verde (Kabu Verdi)", "CV", "238", "+...(...)..-..", "Regions", ["Barlavento Islands", "Sotavento Islands"], "🇨🇻"] as ["Cape Verde (Kabu Verdi)", "CV", "238", "+...(...)..-..", "Regions", ["Barlavento Islands", "Sotavento Islands"], "🇨🇻"],
  CW: ["Curaçao", "CW", "599", "+...-...-....", "Regions", ["Willemstad", "Bandabou", "Bandariba"], "🇨🇼", 0] as ["Curaçao", "CW", "599", "+...-...-....", "Regions", ["Willemstad", "Bandabou", "Bandariba"], "🇨🇼", 0],
  CX: ["Christmas Island", "CX", "61", "", "🇨🇽"] as ["Christmas Island", "CX", "61", "", "🇨🇽"],
  CY: ["Cyprus (Κύπρος)", "CY", "357", "+...-..-...-...", "Regions", ["Nicosia", "Limassol", "Larnaca", "Paphos", "Famagusta"], "🇨🇾"] as ["Cyprus (Κύπρος)", "CY", "357", "+...-..-...-...", "Regions", ["Nicosia", "Limassol", "Larnaca", "Paphos", "Famagusta"], "🇨🇾"],
  CZ: ["Czech Republic (Česká republika)", "CZ", "420", "+...(...)...-...", "Regions", ["Prague", "Central Bohemian Region", "South Bohemian Region", "Plzeň Region", "Karlovy Vary Region", "Ústí nad Labem Region", "Liberec Region", "Hradec Králové Region", "Pardubice Region", "Olomouc Region", "Moravian-Silesian Region", "South Moravian Region", "Zlín Region", "Vysočina Region"], "🇨🇿"] as ["Czech Republic (Česká republika)", "CZ", "420", "+...(...)...-...", "Regions", ["Prague", "Central Bohemian Region", "South Bohemian Region", "Plzeň Region", "Karlovy Vary Region", "Ústí nad Labem Region", "Liberec Region", "Hradec Králové Region", "Pardubice Region", "Olomouc Region", "Moravian-Silesian Region", "South Moravian Region", "Zlín Region", "Vysočina Region"], "🇨🇿"],
  DE: ["Germany (Deutschland)", "DE", "49", "+.. ... .......", "States", ["Baden-Württemberg", "Bavaria", "Berlin", "Brandenburg", "Bremen", "Hamburg", "Hesse", "Lower Saxony", "Mecklenburg-Vorpommern", "North Rhine-Westphalia", "Rhineland-Palatinate", "Saarland", "Saxony", "Saxony-Anhalt", "Schleswig-Holstein", "Thuringia"], "🇩🇪"] as ["Germany (Deutschland)", "DE", "49", "+.. ... .......", "States", ["Baden-Württemberg", "Bavaria", "Berlin", "Brandenburg", "Bremen", "Hamburg", "Hesse", "Lower Saxony", "Mecklenburg-Vorpommern", "North Rhine-Westphalia", "Rhineland-Palatinate", "Saarland", "Saxony", "Saxony-Anhalt", "Schleswig-Holstein", "Thuringia"], "🇩🇪"],
  DJ: ["Djibouti", "DJ", "253", "+...-..-..-..-..", "Regions", ["Djibouti City", "Ali Sabieh", "Dikhil", "Arta", "Tadjourah", "Obock"], "🇩🇯"] as ["Djibouti", "DJ", "253", "+...-..-..-..-..", "Regions", ["Djibouti City", "Ali Sabieh", "Dikhil", "Arta", "Tadjourah", "Obock"], "🇩🇯"],
  DK: ["Denmark (Danmark)", "DK", "45", "+.. .. .. .. ..", "Regions", ["Capital Region of Denmark", "Region Zealand", "Region of Southern Denmark", "Central Denmark Region", "North Denmark Region"], "🇩🇰"] as ["Denmark (Danmark)", "DK", "45", "+.. .. .. .. ..", "Regions", ["Capital Region of Denmark", "Region Zealand", "Region of Southern Denmark", "Central Denmark Region", "North Denmark Region"], "🇩🇰"],
  DM: ["Dominica", "DM", "1767", "+.(...)...-....", "Regions", ["Saint Andrew Parish", "Saint David Parish", "Saint George Parish", "Saint John Parish", "Saint Joseph Parish", "Saint Luke Parish", "Saint Mark Parish", "Saint Patrick Parish", "Saint Paul Parish", "Saint Peter Parish"], "🇩🇲"] as ["Dominica", "DM", "1767", "+.(...)...-....", "Regions", ["Saint Andrew Parish", "Saint David Parish", "Saint George Parish", "Saint John Parish", "Saint Joseph Parish", "Saint Luke Parish", "Saint Mark Parish", "Saint Patrick Parish", "Saint Paul Parish", "Saint Peter Parish"], "🇩🇲"],
  DO: ["Dominican Republic (República Dominicana)", "DO", "1", "+.(...)...-....", "Provinces", ["Azua", "Bahoruco", "Barahona", "Dajabón", "Distrito Nacional", "Duarte", "Elías Piña", "El Seibo", "Espaillat", "Hato Mayor", "Hermanas Mirabal", "Independencia", "La Altagracia", "La Romana", "La Vega", "María Trinidad Sánchez", "Monseñor Nouel", "Monte Cristi", "Monte Plata", "Pedernales", "Peravia", "Puerto Plata", "Samaná", "San Cristóbal", "San José de Ocoa", "San Juan", "San Pedro de Macorís", "Sánchez Ramírez", "Santiago", "Santiago Rodríguez", "Santo Domingo", "Valverde"], "🇩🇴", 2, ["809", "829", "849"]] as ["Dominican Republic (República Dominicana)", "DO", "1", "+.(...)...-....", "Provinces", ["Azua", "Bahoruco", "Barahona", "Dajabón", "Distrito Nacional", "Duarte", "Elías Piña", "El Seibo", "Espaillat", "Hato Mayor", "Hermanas Mirabal", "Independencia", "La Altagracia", "La Romana", "La Vega", "María Trinidad Sánchez", "Monseñor Nouel", "Monte Cristi", "Monte Plata", "Pedernales", "Peravia", "Puerto Plata", "Samaná", "San Cristóbal", "San José de Ocoa", "San Juan", "San Pedro de Macorís", "Sánchez Ramírez", "Santiago", "Santiago Rodríguez", "Santo Domingo", "Valverde"], "🇩🇴", 2, ["809", "829", "849"]],
  DZ: ["Algeria (‫الجزائر‬‎)", "DZ", "213", "+...-..-...-....", "Regions", ["Adrar", "Chlef", "Laghouat", "Oum El Bouaghi", "Batna", "Béjaïa", "Biskra", "Béchar", "Blida", "Bouira", "Tamanrasset", "Tébessa", "Tlemcen", "Tiaret", "Tizi Ouzou", "Alger", "Djelfa", "Jijel", "Sétif", "Saïda", "Skikda", "Sidi Bel Abbès", "Annaba", "Guelma", "Constantine", "Médéa", "Mostaganem", "M'Sila", "Mascara", "Ouargla", "Oran", "El Bayadh", "Illizi", "Bordj Bou Arréridj", "Boumerdès", "El Tarf", "Tindouf", "Tissemsilt", "El Oued", "Khenchela", "Souk Ahras", "Tipaza", "Mila", "Aïn Defla", "Naâma", "Aïn Témouchent", "Ghardaïa", "Relizane"], '🇩🇿'] as ["Algeria (‫الجزائر‬‎)", "DZ", "213", "+...-..-...-....", "Regions", ["Adrar", "Chlef", "Laghouat", "Oum El Bouaghi", "Batna", "Béjaïa", "Biskra", "Béchar", "Blida", "Bouira", "Tamanrasset", "Tébessa", "Tlemcen", "Tiaret", "Tizi Ouzou", "Alger", "Djelfa", "Jijel", "Sétif", "Saïda", "Skikda", "Sidi Bel Abbès", "Annaba", "Guelma", "Constantine", "Médéa", "Mostaganem", "M'Sila", "Mascara", "Ouargla", "Oran", "El Bayadh", "Illizi", "Bordj Bou Arréridj", "Boumerdès", "El Tarf", "Tindouf", "Tissemsilt", "El Oued", "Khenchela", "Souk Ahras", "Tipaza", "Mila", "Aïn Defla", "Naâma", "Aïn Témouchent", "Ghardaïa", "Relizane"], '🇩🇿'],
  EC: ["Ecuador", "EC", "593", "+...-.-...-....", "Provinces", ["Azuay", "Bolivar", "Cañar", "Carchi", "Chimborazo", "Cotopaxi", "El Oro", "Esmeraldas", "Galapagos", "Guayas", "Imbabura", "Loja", "Los Rios", "Manabi", "Morona Santiago", "Napo", "Orellana", "Pastaza", "Pichincha", "Santa Elena", "Santo Domingo de los Tsachilas", "Sucumbios", "Tungurahua", "Zamora Chinchipe"], "🇪🇨"] as ["Ecuador", "EC", "593", "+...-.-...-....", "Provinces", ["Azuay", "Bolivar", "Cañar", "Carchi", "Chimborazo", "Cotopaxi", "El Oro", "Esmeraldas", "Galapagos", "Guayas", "Imbabura", "Loja", "Los Rios", "Manabi", "Morona Santiago", "Napo", "Orellana", "Pastaza", "Pichincha", "Santa Elena", "Santo Domingo de los Tsachilas", "Sucumbios", "Tungurahua", "Zamora Chinchipe"], "🇪🇨"],
  EE: ["Estonia (Eesti)", "EE", "372", "+...-...-....", "Counties", ["Harju County", "Hiiu County", "Ida-Viru County", "Järva County", "Jõgeva County", "Lääne County", "Lääne-Viru County", "Põlva County", "Pärnu County", "Rapla County", "Saare County", "Tartu County", "Valga County", "Viljandi County", "Võru County"], "🇪🇪"] as ["Estonia (Eesti)", "EE", "372", "+...-...-....", "Counties", ["Harju County", "Hiiu County", "Ida-Viru County", "Järva County", "Jõgeva County", "Lääne County", "Lääne-Viru County", "Põlva County", "Pärnu County", "Rapla County", "Saare County", "Tartu County", "Valga County", "Viljandi County", "Võru County"], "🇪🇪"],
  EG: ["Egypt (‫مصر‬‎)", "EG", "20", "+..(...)...-....", "Governorates", ["Alexandria", "Aswan", "Asyut", "Beheira", "Beni Suef", "Cairo", "Dakahlia", "Damietta", "Faiyum", "Gharbia", "Giza", "Ismailia", "Kafr El Sheikh", "Luxor", "Matruh", "Minya", "Monufia", "New Valley", "North Sinai", "Port Said", "Qalyubia", "Qena", "Red Sea", "Sharqia", "Sohag", "South Sinai", "Suez"], "🇪🇬"] as ["Egypt (‫مصر‬‎)", "EG", "20", "+..(...)...-....", "Governorates", ["Alexandria", "Aswan", "Asyut", "Beheira", "Beni Suef", "Cairo", "Dakahlia", "Damietta", "Faiyum", "Gharbia", "Giza", "Ismailia", "Kafr El Sheikh", "Luxor", "Matruh", "Minya", "Monufia", "New Valley", "North Sinai", "Port Said", "Qalyubia", "Qena", "Red Sea", "Sharqia", "Sohag", "South Sinai", "Suez"], "🇪🇬"],
  EH: ["Western Sahara", "EH", "212", "+...-..-....", "Provinces", ["Laayoune", "Dakhla", "Smara", "Boujdour", "Aousserd"], "🇪🇭"] as ["Western Sahara", "EH", "212", "+...-..-....", "Provinces", ["Laayoune", "Dakhla", "Smara", "Boujdour", "Aousserd"], "🇪🇭"],
  ER: ["Eritrea", "ER", "291", "+...-.-...-...", "Regions", ["Anseba", "Debub", "Gash-Barka", "Maekel", "Northern Red Sea", "Southern Red Sea"], "🇪🇷"] as ["Eritrea", "ER", "291", "+...-.-...-...", "Regions", ["Anseba", "Debub", "Gash-Barka", "Maekel", "Northern Red Sea", "Southern Red Sea"], "🇪🇷"],
  ET: ["Ethiopia", "ET", "251", "+...-..-...-....", "Regions", ["Addis Ababa", "Afar", "Amhara", "Benishangul-Gumuz", "Dire Dawa", "Gambela", "Harari", "Oromia", "Sidama", "Somali", "Southern Nations, Nationalities, and Peoples' Region", "Tigray"], "🇪🇹"] as ["Ethiopia", "ET", "251", "+...-..-...-....", "Regions", ["Addis Ababa", "Afar", "Amhara", "Benishangul-Gumuz", "Dire Dawa", "Gambela", "Harari", "Oromia", "Sidama", "Somali", "Southern Nations, Nationalities, and Peoples' Region", "Tigray"], "🇪🇹"],
  FI: ["Finland (Suomi)", "FI", "358", "+... .. .... ....", "Regions", ["Åland Islands", "Central Finland", "Central Ostrobothnia", "Eastern Finland", "Kainuu", "Kanta-Häme", "Kymenlaakso", "Lapland", "North Karelia", "Northern Ostrobothnia", "Northern Savonia", "Ostrobothnia", "Päijänne Tavastia", "Pirkanmaa", "Satakunta", "South Karelia", "Southern Ostrobothnia", "Southern Savonia", "Tavastia Proper", "Uusimaa", "Varsinais-Suomi"], "🇫🇮"] as ["Finland (Suomi)", "FI", "358", "+... .. .... ....", "Regions", ["Åland Islands", "Central Finland", "Central Ostrobothnia", "Eastern Finland", "Kainuu", "Kanta-Häme", "Kymenlaakso", "Lapland", "North Karelia", "Northern Ostrobothnia", "Northern Savonia", "Ostrobothnia", "Päijänne Tavastia", "Pirkanmaa", "Satakunta", "South Karelia", "Southern Ostrobothnia", "Southern Savonia", "Tavastia Proper", "Uusimaa", "Varsinais-Suomi"], "🇫🇮"],
  FJ: ["Fiji", "FJ", "679", "+...-..-.....", "Divisions", ["Central", "Eastern", "Northern", "Western"], "🇫🇯"] as ["Fiji", "FJ", "679", "+...-..-.....", "Divisions", ["Central", "Eastern", "Northern", "Western"], "🇫🇯"],
  FK: ["Falkland Islands (Islas Malvinas)", "FK", "500", "+...-.....", "Regions", ["East Falkland", "West Falkland", "Staten Island"], "🇫🇰"] as ["Falkland Islands (Islas Malvinas)", "FK", "500", "+...-.....", "Regions", ["East Falkland", "West Falkland", "Staten Island"], "🇫🇰"],
  FM: ["Micronesia", "FM", "691", "+...-...-....", "States", ["Chuuk", "Kosrae", "Pohnpei", "Yap"], "🇫🇲"] as ["Micronesia", "FM", "691", "+...-...-....", "States", ["Chuuk", "Kosrae", "Pohnpei", "Yap"], "🇫🇲"],
  FO: ["Faroe Islands (Føroyar)", "FO", "298", "+...-...-...", "Municipalities", ["Tórshavn", "Klaksvík", "Runavík", "Eystur", "Vágar"], "🇫🇴"] as ["Faroe Islands (Føroyar)", "FO", "298", "+...-...-...", "Municipalities", ["Tórshavn", "Klaksvík", "Runavík", "Eystur", "Vágar"], "🇫🇴"],
  FR: ["France", "FR", "33", "+.. . .. .. .. ..", "Regions", ["Auvergne-Rhône-Alpes", "Bourgogne-Franche-Comté", "Brittany", "Centre-Val de Loire", "Corsica", "Grand Est", "Hauts-de-France", "Île-de-France", "Normandy", "Nouvelle-Aquitaine", "Occitanie", "Pays de la Loire", "Provence-Alpes-Côte d'Azur"], "🇫🇷"] as ["France", "FR", "33", "+.. . .. .. .. ..", "Regions", ["Auvergne-Rhône-Alpes", "Bourgogne-Franche-Comté", "Brittany", "Centre-Val de Loire", "Corsica", "Grand Est", "Hauts-de-France", "Île-de-France", "Normandy", "Nouvelle-Aquitaine", "Occitanie", "Pays de la Loire", "Provence-Alpes-Côte d'Azur"], "🇫🇷"],
  GA: ["Gabon", "GA", "241", "+...-.-..-..-..", "Provinces", ["Estuaire", "Haut-Ogooué", "Moyen-Ogooué", "Ngounié", "Nyanga", "Ogooué-Ivindo", "Ogooué-Lolo", "Ogooué-Maritime", "Woleu-Ntem"], "🇬🇦"] as ["Gabon", "GA", "241", "+...-.-..-..-..", "Provinces", ["Estuaire", "Haut-Ogooué", "Moyen-Ogooué", "Ngounié", "Nyanga", "Ogooué-Ivindo", "Ogooué-Lolo", "Ogooué-Maritime", "Woleu-Ntem"], "🇬🇦"],
  GB: ["United Kingdom", "GB", "44", "+.. .... ......", "States", ["England", "Scotland", "Wales", "Northern Ireland"], "🇬🇧"] as ["United Kingdom", "GB", "44", "+.. .... ......", "States", ["England", "Scotland", "Wales", "Northern Ireland"], "🇬🇧"],
  GD: ["Grenada", "GD", "1473", "+.(...)...-....", "Parishes", ["Saint Andrew", "Saint David", "Saint George", "Saint John", "Saint Mark", "Saint Patrick"], "🇬🇩"] as ["Grenada", "GD", "1473", "+.(...)...-....", "Parishes", ["Saint Andrew", "Saint David", "Saint George", "Saint John", "Saint Mark", "Saint Patrick"], "🇬🇩"],
  GE: ["Georgia (საქართველო)", "GE", "995", "+...(...)...-...", "Regions", ["Abkhazia", "Adjara", "Guria", "Imereti", "Kakheti", "Kvemo Kartli", "Mtskheta-Mtianeti", "Racha-Lechkhumi and Kvemo Svaneti", "Samegrelo-Zemo Svaneti", "Samtskhe-Javakheti", "Shida Kartli", "Tbilisi"], "🇬🇪"] as ["Georgia (საქართველო)", "GE", "995", "+...(...)...-...", "Regions", ["Abkhazia", "Adjara", "Guria", "Imereti", "Kakheti", "Kvemo Kartli", "Mtskheta-Mtianeti", "Racha-Lechkhumi and Kvemo Svaneti", "Samegrelo-Zemo Svaneti", "Samtskhe-Javakheti", "Shida Kartli", "Tbilisi"], "🇬🇪"],
  GF: ["French Guiana (Guyane française)", "GF", "594", "+...-.....-....", ["Arrondissements", "Communes"], { "Arrondissements": ["Cayenne", "Saint-Laurent-du-Maroni"], "Communes": ["Matoury", "Kourou", "Remire-Montjoly"] }, "🇬🇫"] as ["French Guiana (Guyane française)", "GF", "594", "+...-.....-....", ["Arrondissements", "Communes"], { "Arrondissements": ["Cayenne", "Saint-Laurent-du-Maroni"], "Communes": ["Matoury", "Kourou", "Remire-Montjoly"] }, "🇬🇫"],
  GG: ["Guernsey", "GG", "44", "", "Parishes", ["Castel", "Forest", "St. Andrew", "St. Martin", "St. Peter Port", "St. Pierre du Bois", "St. Sampson", "St. Saviour", "Torteval", "Vale"], "🇬🇬"] as ["Guernsey", "GG", "44", "", "Parishes", ["Castel", "Forest", "St. Andrew", "St. Martin", "St. Peter Port", "St. Pierre du Bois", "St. Sampson", "St. Saviour", "Torteval", "Vale"], "🇬🇬"],
  GH: ["Ghana (Gaana)", "GH", "233", "+...(...)...-...", "Regions", ["Ashanti", "Brong-Ahafo", "Central", "Eastern", "Greater Accra", "Northern", "Upper East", "Upper West", "Volta", "Western"], "🇬🇭"] as ["Ghana (Gaana)", "GH", "233", "+...(...)...-...", "Regions", ["Ashanti", "Brong-Ahafo", "Central", "Eastern", "Greater Accra", "Northern", "Upper East", "Upper West", "Volta", "Western"], "🇬🇭"],
  GI: ["Gibraltar", "GI", "350", "+...-...-.....", "Districts", ["East Side", "North District", "South District", "Town Area", "Westside"], "🇬🇮"] as ["Gibraltar", "GI", "350", "+...-...-.....", "Districts", ["East Side", "North District", "South District", "Town Area", "Westside"], "🇬🇮"],
  GL: ["Greenland (Kalaallit Nunaat)", "GL", "299", "+...-..-..-..", "Municipalities", ["Kujalleq", "Qaasuitsup", "Qeqqata", "Sermersooq"], "🇬🇱"] as ["Greenland (Kalaallit Nunaat)", "GL", "299", "+...-..-..-..", "Municipalities", ["Kujalleq", "Qaasuitsup", "Qeqqata", "Sermersooq"], "🇬🇱"],
  GM: ["Gambia", "GM", "220", "+...(...)..-..", "Divisions", ["Banjul", "Lower River", "Central River", "North Bank", "Upper River", "West Coast"], "🇬🇲"] as ["Gambia", "GM", "220", "+...(...)..-..", "Divisions", ["Banjul", "Lower River", "Central River", "North Bank", "Upper River", "West Coast"], "🇬🇲"],
  GN: ["Guinea (Guinée)", "GN", "224", "+...-..-...-...", "Regions", ["Boké", "Conakry", "Faranah", "Kankan", "Kindia", "Labé", "Mamou", "Nzérékoré"], "🇬🇳"] as ["Guinea (Guinée)", "GN", "224", "+...-..-...-...", "Regions", ["Boké", "Conakry", "Faranah", "Kankan", "Kindia", "Labé", "Mamou", "Nzérékoré"], "🇬🇳"],
  GP: ["Guadeloupe", "GP", "590", "", ["Arrondissements", "Cantons", "Communes"], { "Arrondissements": ["Basse-Terre", "Pointe-à-Pitre"], "Cantons": [], "Communes": ["Les Abymes", "Baie-Mahault", "Le Gosier", "Petit-Bourg"] }, "🇬🇵", 0] as ["Guadeloupe", "GP", "590", "", ["Arrondissements", "Cantons", "Communes"], { "Arrondissements": ["Basse-Terre", "Pointe-à-Pitre"], "Cantons": [], "Communes": ["Les Abymes", "Baie-Mahault", "Le Gosier", "Petit-Bourg"] }, "🇬🇵", 0],
  GQ: ["Equatorial Guinea (Guinea Ecuatorial)", "GQ", "240", "+...-..-...-....", "Provinces", ["Annobón", "Bioko Norte", "Bioko Sur", "Centro Sur", "Kié-Ntem", "Litoral", "Wele-Nzas"], "🇬🇶"] as ["Equatorial Guinea (Guinea Ecuatorial)", "GQ", "240", "+...-..-...-....", "Provinces", ["Annobón", "Bioko Norte", "Bioko Sur", "Centro Sur", "Kié-Ntem", "Litoral", "Wele-Nzas"], "🇬🇶"],
  GR: ["Greece (Ελλάδα)", "GR", "30", "+..(...)...-....", "Regions", ["Attica", "Central Greece", "Central Macedonia", "Crete", "Eastern Macedonia and Thrace", "Epirus", "Ionian Islands", "North Aegean", "Peloponnese", "South Aegean", "Thessaly", "Western Greece", "Western Macedonia"], "🇬🇷"] as ["Greece (Ελλάδα)", "GR", "30", "+..(...)...-....", "Regions", ["Attica", "Central Greece", "Central Macedonia", "Crete", "Eastern Macedonia and Thrace", "Epirus", "Ionian Islands", "North Aegean", "Peloponnese", "South Aegean", "Thessaly", "Western Greece", "Western Macedonia"], "🇬🇷"],
  GS: ["South Georgia and the South Sandwich Islands", "GS", "500", "", "🇬🇸"] as ["South Georgia and the South Sandwich Islands", "GS", "500", "", "🇬🇸"],
  GT: ["Guatemala", "GT", "502", "+... ....-....", "Departments", ["Alta Verapaz", "Baja Verapaz", "Chimaltenango", "Chiquimula", "El Progreso", "Escuintla", "Guatemala", "Huehuetenango", "Izabal", "Jalapa", "Jutiapa", "Petén", "Quetzaltenango", "Quiché", "Retalhuleu", "Sacatepéquez", "San Marcos", "Santa Rosa", "Sololá", "Suchitepéquez", "Totonicapán", "Zacapa"], "🇬🇹"] as ["Guatemala", "GT", "502", "+... ....-....", "Departments", ["Alta Verapaz", "Baja Verapaz", "Chimaltenango", "Chiquimula", "El Progreso", "Escuintla", "Guatemala", "Huehuetenango", "Izabal", "Jalapa", "Jutiapa", "Petén", "Quetzaltenango", "Quiché", "Retalhuleu", "Sacatepéquez", "San Marcos", "Santa Rosa", "Sololá", "Suchitepéquez", "Totonicapán", "Zacapa"], "🇬🇹"],
  GU: ["Guam", "GU", "1671", "+.(...)...-....", "Villages", ["Agana Heights", "Agat", "Asan", "Barrigada", "Chalan Pago-Ordot", "Dededo", "Hagatna", "Inarajan", "Mangilao", "Merizo", "Mongmong-Toto-Maite", "Piti", "Santa Rita", "Sinajana", "Talofofo", "Tamuning", "Umatac", "Yigo", "Yona"], "🇬🇺"] as ["Guam", "GU", "1671", "+.(...)...-....", "Villages", ["Agana Heights", "Agat", "Asan", "Barrigada", "Chalan Pago-Ordot", "Dededo", "Hagatna", "Inarajan", "Mangilao", "Merizo", "Mongmong-Toto-Maite", "Piti", "Santa Rita", "Sinajana", "Talofofo", "Tamuning", "Umatac", "Yigo", "Yona"], "🇬🇺"],
  GW: ["Guinea-Bissau (Guiné Bissau)", "GW", "245", "+...-.-......", "Regions", ["Bafatá", "Biombo", "Bolama", "Cacheu", "Gabú", "Oio", "Quinara", "Tombali"], "🇬🇼"] as ["Guinea-Bissau (Guiné Bissau)", "GW", "245", "+...-.-......", "Regions", ["Bafatá", "Biombo", "Bolama", "Cacheu", "Gabú", "Oio", "Quinara", "Tombali"], "🇬🇼"],
  GY: ["Guyana", "GY", "592", "+...-...-....", "Regions", ["Barima-Waini", "Cuyuni-Mazaruni", "Demerara-Mahaica", "East Berbice-Corentyne", "Essequibo Islands-West Demerara", "Mahaica-Berbice", "Pomeroon-Supenaam", "Potaro-Siparuni", "Upper Demerara-Berbice", "Upper Takutu-Upper Essequibo"], "🇬🇾"] as ["Guyana", "GY", "592", "+...-...-....", "Regions", ["Barima-Waini", "Cuyuni-Mazaruni", "Demerara-Mahaica", "East Berbice-Corentyne", "Essequibo Islands-West Demerara", "Mahaica-Berbice", "Pomeroon-Supenaam", "Potaro-Siparuni", "Upper Demerara-Berbice", "Upper Takutu-Upper Essequibo"], "🇬🇾"],
  HK: ["Hong Kong (香港)", "HK", "852", "+... .... ....", "Districts", ["Central and Western", "Eastern", "Islands", "Kowloon City", "Kwai Tsing", "Kwun Tong", "North", "Sai Kung", "Sha Tin", "Sham Shui Po", "Southern", "Tai Po", "Tsuen Wan", "Tuen Mun", "Wan Chai", "Wong Tai Sin", "Yau Tsim Mong", "Yuen Long"], "🇭🇰"] as ["Hong Kong (香港)", "HK", "852", "+... .... ....", "Districts", ["Central and Western", "Eastern", "Islands", "Kowloon City", "Kwai Tsing", "Kwun Tong", "North", "Sai Kung", "Sha Tin", "Sham Shui Po", "Southern", "Tai Po", "Tsuen Wan", "Tuen Mun", "Wan Chai", "Wong Tai Sin", "Yau Tsim Mong", "Yuen Long"], "🇭🇰"],
  HM: ["Heard Island and McDonald Islands", "HM", "672", "", "🇭🇲"] as ["Heard Island and McDonald Islands", "HM", "672", "", "🇭🇲"],
  HN: ["Honduras", "HN", "504", "+...-....-....", "Departments", ["Atlántida", "Choluteca", "Colón", "Comayagua", "Copán", "Cortés", "El Paraíso", "Francisco Morazán", "Gracias a Dios", "Intibucá", "Islas de la Bahía", "La Paz", "Lempira", "Ocotepeque", "Olancho", "Santa Bárbara", "Valle", "Yoro"], "🇭🇳"] as ["Honduras", "HN", "504", "+...-....-....", "Departments", ["Atlántida", "Choluteca", "Colón", "Comayagua", "Copán", "Cortés", "El Paraíso", "Francisco Morazán", "Gracias a Dios", "Intibucá", "Islas de la Bahía", "La Paz", "Lempira", "Ocotepeque", "Olancho", "Santa Bárbara", "Valle", "Yoro"], "🇭🇳"],
  HR: ["Croatia (Hrvatska)", "HR", "385", "+...-..-...-...", "Counties", ["Zagreb County", "Krapina-Zagorje County", "Sisak-Moslavina County", "Karlovačka County", "Varaždin County", "Koprivnica-Križevci County", "Bjelovar-Bilogora County", "Primorje-Gorski Kotar County", "Lika-Senj County", "Virovitica-Podravina County", "Požega-Slavonia County", "Brod-Posavina County", "Zadar County", "Osijek-Baranja County", "Šibenik-Knin County", "Vukovar-Syrmia County", "Split-Dalmatia County", "Istria County", "Dubrovnik-Neretva County", "Međimurje County", "Grad Zagreb"], "🇭🇷"] as ["Croatia (Hrvatska)", "HR", "385", "+...-..-...-...", "Counties", ["Zagreb County", "Krapina-Zagorje County", "Sisak-Moslavina County", "Karlovačka County", "Varaždin County", "Koprivnica-Križevci County", "Bjelovar-Bilogora County", "Primorje-Gorski Kotar County", "Lika-Senj County", "Virovitica-Podravina County", "Požega-Slavonia County", "Brod-Posavina County", "Zadar County", "Osijek-Baranja County", "Šibenik-Knin County", "Vukovar-Syrmia County", "Split-Dalmatia County", "Istria County", "Dubrovnik-Neretva County", "Međimurje County", "Grad Zagreb"], "🇭🇷"],
  HT: ["Haiti", "HT", "509", "+... ....-....", "Departments", ["Artibonite", "Centre", "Grand'Anse", "Nippes", "Nord", "Nord-Est", "Nord-Ouest", "Ouest", "Sud", "Sud-Est"], "🇭🇹"] as ["Haiti", "HT", "509", "+... ....-....", "Departments", ["Artibonite", "Centre", "Grand'Anse", "Nippes", "Nord", "Nord-Est", "Nord-Ouest", "Ouest", "Sud", "Sud-Est"], "🇭🇹"],
  HU: ["Hungary (Magyarország)", "HU", "36", "+..(...)...-...", "Counties", ["Bács-Kiskun", "Baranya", "Békés", "Borsod-Abaúj-Zemplén", "Csongrád-Csanád", "Fejér", "Győr-Moson-Sopron", "Hajdú-Bihar", "Heves", "Jász-Nagykun-Szolnok", "Komárom-Esztergom", "Nógrád", "Pest", "Somogy", "Szabolcs-Szatmár-Bereg", "Tolna", "Vas", "Veszprém", "Zala"], "🇭🇺"] as ["Hungary (Magyarország)", "HU", "36", "+..(...)...-...", "Counties", ["Bács-Kiskun", "Baranya", "Békés", "Borsod-Abaúj-Zemplén", "Csongrád-Csanád", "Fejér", "Győr-Moson-Sopron", "Hajdú-Bihar", "Heves", "Jász-Nagykun-Szolnok", "Komárom-Esztergom", "Nógrád", "Pest", "Somogy", "Szabolcs-Szatmár-Bereg", "Tolna", "Vas", "Veszprém", "Zala"], "🇭🇺"],
  ID: ["Indonesia", "ID", "62", "+..-..-...-..", "Provinces", ["Aceh", "Bali", "Bangka Belitung", "Banten", "Bengkulu", "Central Java", "Central Kalimantan", "Central Sulawesi", "East Java", "East Kalimantan", "East Nusa Tenggara", "Gorontalo", "Jakarta", "Jambi", "Lampung", "Maluku", "North Kalimantan", "North Maluku", "North Sulawesi", "North Sumatra", "Papua", "Riau", "Riau Islands", "South Kalimantan", "South Sulawesi", "South Sumatra", "Southeast Sulawesi", "West Java", "West Kalimantan", "West Nusa Tenggara", "West Papua", "West Sulawesi", "West Sumatra", "Yogyakarta"], "🇮🇩"] as ["Indonesia", "ID", "62", "+..-..-...-..", "Provinces", ["Aceh", "Bali", "Bangka Belitung", "Banten", "Bengkulu", "Central Java", "Central Kalimantan", "Central Sulawesi", "East Java", "East Kalimantan", "East Nusa Tenggara", "Gorontalo", "Jakarta", "Jambi", "Lampung", "Maluku", "North Kalimantan", "North Maluku", "North Sulawesi", "North Sumatra", "Papua", "Riau", "Riau Islands", "South Kalimantan", "South Sulawesi", "South Sumatra", "Southeast Sulawesi", "West Java", "West Kalimantan", "West Nusa Tenggara", "West Papua", "West Sulawesi", "West Sumatra", "Yogyakarta"], "🇮🇩"],
  IE: ["Ireland", "IE", "353", "+... .. .......", "Counties", ["Carlow", "Cavan", "Clare", "Cork", "Donegal", "Dublin", "Galway", "Kerry", "Kildare", "Kilkenny", "Laois", "Leitrim", "Limerick", "Longford", "Louth", "Mayo", "Meath", "Monaghan", "Offaly", "Roscommon", "Sligo", "Tipperary", "Waterford", "Westmeath", "Wexford", "Wicklow"], "🇮🇪"] as ["Ireland", "IE", "353", "+... .. .......", "Counties", ["Carlow", "Cavan", "Clare", "Cork", "Donegal", "Dublin", "Galway", "Kerry", "Kildare", "Kilkenny", "Laois", "Leitrim", "Limerick", "Longford", "Louth", "Mayo", "Meath", "Monaghan", "Offaly", "Roscommon", "Sligo", "Tipperary", "Waterford", "Westmeath", "Wexford", "Wicklow"], "🇮🇪"],
  IL: ["Israel (‫ישראל‬‎)", "IL", "972", "+...-.-...-....", "Districts", ["Central", "Haifa", "Jerusalem", "Northern", "Southern", "Tel Aviv"], "🇮🇱"] as ["Israel (‫ישראל‬‎)", "IL", "972", "+...-.-...-....", "Districts", ["Central", "Haifa", "Jerusalem", "Northern", "Southern", "Tel Aviv"], "🇮🇱"],
  IM: ["Isle of Man", "IM", "44", "", ["Parishes", "Sheadings"], { "Parishes": ["Andreas", "Arbory", "Ballaugh", "Braddan", "Bride", "Castletown", "Douglas", "German", "Jurby", "Laxey", "Lezayre", "Lonan", "Malew", "Marown", "Maughold", "Michael", "Onchan", "Patrick", "Peel", "Port Erin", "Port St Mary", "Ramsey", "Rushen"], "Sheadings": ["Garff", "Glenfaba", "Middle", "Peel", "Rushen"] }, "🇮🇲"] as ["Isle of Man", "IM", "44", "", ["Parishes", "Sheadings"], { "Parishes": ["Andreas", "Arbory", "Ballaugh", "Braddan", "Bride", "Castletown", "Douglas", "German", "Jurby", "Laxey", "Lezayre", "Lonan", "Malew", "Marown", "Maughold", "Michael", "Onchan", "Patrick", "Peel", "Port Erin", "Port St Mary", "Ramsey", "Rushen"], "Sheadings": ["Garff", "Glenfaba", "Middle", "Peel", "Rushen"] }, "🇮🇲"],
  IN: ["India (भारत)", "IN", "91", "+.. .....-.....", "States", ["Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh", "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka", "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal"], "🇮🇳"] as ["India (भारत)", "IN", "91", "+.. .....-.....", "States", ["Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh", "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka", "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal"], "🇮🇳"],
  IO: ["British Indian Ocean Territory", "IO", "246", "+...-...-....", "🇮🇴"] as ["British Indian Ocean Territory", "IO", "246", "+...-...-....", "🇮🇴"],
  IQ: ["Iraq (‫العراق‬‎)", "IQ", "964", "+...(...)...-....", "Governorates", ["Al Anbar", "Babil", "Baghdad", "Basra", "Dhi Qar", "Diyala", "Dohuk", "Erbil", "Karbala", "Kirkuk", "Maysan", "Muthanna", "Najaf", "Nineveh", "Qadisiyyah", "Saladin", "Sulaymaniyah", "Wasit"], "🇮🇶"] as ["Iraq (‫العراق‬‎)", "IQ", "964", "+...(...)...-....", "Governorates", ["Al Anbar", "Babil", "Baghdad", "Basra", "Dhi Qar", "Diyala", "Dohuk", "Erbil", "Karbala", "Kirkuk", "Maysan", "Muthanna", "Najaf", "Nineveh", "Qadisiyyah", "Saladin", "Sulaymaniyah", "Wasit"], "🇮🇶"],
  IR: ["Iran (‫ایران‬‎)", "IR", "98", "+..(...)...-....", "Provinces", ["Alborz", "Ardabil", "Bushehr", "Chaharmahal and Bakhtiari", "East Azerbaijan", "Isfahan", "Fars", "Gilan", "Golestan", "Hamadan", "Hormozgan", "Ilam", "Kerman", "Kermanshah", "Khuzestan", "Kohgiluyeh and Boyer-Ahmad", "Kurdistan", "Lorestan", "Markazi", "Mazandaran", "North Khorasan", "Qazvin", "Qom", "Razavi Khorasan", "Semnan", "Sistan and Baluchestan", "South Khorasan", "Tehran", "West Azerbaijan", "Yazd", "Zanjan"], "🇮🇷"] as ["Iran (‫ایران‬‎)", "IR", "98", "+..(...)...-....", "Provinces", ["Alborz", "Ardabil", "Bushehr", "Chaharmahal and Bakhtiari", "East Azerbaijan", "Isfahan", "Fars", "Gilan", "Golestan", "Hamadan", "Hormozgan", "Ilam", "Kerman", "Kermanshah", "Khuzestan", "Kohgiluyeh and Boyer-Ahmad", "Kurdistan", "Lorestan", "Markazi", "Mazandaran", "North Khorasan", "Qazvin", "Qom", "Razavi Khorasan", "Semnan", "Sistan and Baluchestan", "South Khorasan", "Tehran", "West Azerbaijan", "Yazd", "Zanjan"], "🇮🇷"],
  IS: ["Iceland (Ísland)", "IS", "354", "+... ... ....", "Regions", ["Capital Region", "Southern Peninsula", "Western Region", "Westfjords", "Northwest Region", "Northeast Region", "East Region", "South Region"], "🇮🇸"] as ["Iceland (Ísland)", "IS", "354", "+... ... ....", "Regions", ["Capital Region", "Southern Peninsula", "Western Region", "Westfjords", "Northwest Region", "Northeast Region", "East Region", "South Region"], "🇮🇸"],
  IT: ["Italy (Italia)", "IT", "39", "+.. ... ......", "Regions", ["Abruzzo", "Basilicata", "Calabria", "Campania", "Emilia-Romagna", "Friuli-Venezia Giulia", "Lazio", "Liguria", "Lombardia", "Marche", "Molise", "Piemonte", "Puglia", "Sardegna", "Sicilia", "Toscana", "Trentino-Alto Adige", "Umbria", "Valle d'Aosta", "Veneto"], "🇮🇹", 0] as ["Italy (Italia)", "IT", "39", "+.. ... ......", "Regions", ["Abruzzo", "Basilicata", "Calabria", "Campania", "Emilia-Romagna", "Friuli-Venezia Giulia", "Lazio", "Liguria", "Lombardia", "Marche", "Molise", "Piemonte", "Puglia", "Sardegna", "Sicilia", "Toscana", "Trentino-Alto Adige", "Umbria", "Valle d'Aosta", "Veneto"], "🇮🇹", 0],
  JE: ["Jersey", "JE", "44", "", "Parishes", ["Grouville", "Saint Brelade", "Saint Clement", "Saint Helier", "Saint John", "Saint Lawrence", "Saint Martin", "Saint Mary", "Saint Ouen", "Saint Peter", "Saint Saviour", "Trinity"], "🇯🇪"] as ["Jersey", "JE", "44", "", "Parishes", ["Grouville", "Saint Brelade", "Saint Clement", "Saint Helier", "Saint John", "Saint Lawrence", "Saint Martin", "Saint Mary", "Saint Ouen", "Saint Peter", "Saint Saviour", "Trinity"], "🇯🇪"],
  JM: ["Jamaica", "JM", "1876", "+.(...)...-....", "Parishes", ["Clarendon", "Hanover", "Kingston", "Manchester", "Portland", "Saint Andrew", "Saint Ann", "Saint Catherine", "Saint Elizabeth", "Saint James", "Saint Mary", "Saint Thomas", "Trelawny", "Westmoreland"], "🇯🇲"] as ["Jamaica", "JM", "1876", "+.(...)...-....", "Parishes", ["Clarendon", "Hanover", "Kingston", "Manchester", "Portland", "Saint Andrew", "Saint Ann", "Saint Catherine", "Saint Elizabeth", "Saint James", "Saint Mary", "Saint Thomas", "Trelawny", "Westmoreland"], "🇯🇲"],
  JO: ["Jordan (‫الأردن‬‎)", "JO", "962", "+...-.-....-....", "Governorates", ["Ajloun", "Amman", "Aqaba", "Balqa", "Irbid", "Jarash", "Karak", "Ma'an", "Madaba", "Mafraq", "Tafilah", "Zarqa"], "🇯🇴"] as ["Jordan (‫الأردن‬‎)", "JO", "962", "+...-.-....-....", "Governorates", ["Ajloun", "Amman", "Aqaba", "Balqa", "Irbid", "Jarash", "Karak", "Ma'an", "Madaba", "Mafraq", "Tafilah", "Zarqa"], "🇯🇴"],
  JP: ["Japan (日本)", "JP", "81", "+.. ... .. ....", "Prefectures", ["Aichi", "Akita", "Aomori", "Chiba", "Ehime", "Fukui", "Fukuoka", "Fukushima", "Gifu", "Gunma", "Hiroshima", "Hokkaido", "Hyogo", "Ibaraki", "Ishikawa", "Iwate", "Kagawa", "Kagoshima", "Kanagawa", "Kochi", "Kumamoto", "Kyoto", "Mie", "Miyagi", "Miyazaki", "Nagano", "Nagasaki", "Nara", "Niigata", "Oita", "Okayama", "Okinawa", "Osaka", "Saga", "Saitama", "Shiga", "Shimane", "Shizuoka", "Tochigi", "Tokushima", "Tokyo", "Tottori", "Toyama", "Wakayama", "Yamagata", "Yamaguchi", "Yamanashi"], "🇯🇵"] as ["Japan (日本)", "JP", "81", "+.. ... .. ....", "Prefectures", ["Aichi", "Akita", "Aomori", "Chiba", "Ehime", "Fukui", "Fukuoka", "Fukushima", "Gifu", "Gunma", "Hiroshima", "Hokkaido", "Hyogo", "Ibaraki", "Ishikawa", "Iwate", "Kagawa", "Kagoshima", "Kanagawa", "Kochi", "Kumamoto", "Kyoto", "Mie", "Miyagi", "Miyazaki", "Nagano", "Nagasaki", "Nara", "Niigata", "Oita", "Okayama", "Okinawa", "Osaka", "Saga", "Saitama", "Shiga", "Shimane", "Shizuoka", "Tochigi", "Tokushima", "Tokyo", "Tottori", "Toyama", "Wakayama", "Yamagata", "Yamaguchi", "Yamanashi"], "🇯🇵"],
  KE: ["Kenya", "KE", "254", "+...-...-......", "Counties", ["Baringo", "Bomet", "Bungoma", "Busia", "Elgeyo-Marakwet", "Embu", "Garissa", "Homa Bay", "Isiolo", "Kajiado", "Kakamega", "Kericho", "Kiambu", "Kilifi", "Kirinyaga", "Kisii", "Kisumu", "Kitui", "Kwale", "Laikipia", "Lamu", "Machakos", "Makueni", "Mandera", "Marsabit", "Meru", "Migori", "Mombasa", "Murang'a", "Nairobi", "Nakuru", "Nandi", "Narok", "Nyamira", "Nyandarua", "Nyeri", "Samburu", "Siaya", "Taita-Taveta", "Tana River", "Tharaka-Nithi", "Trans-Nzoia", "Turkana", "Uasin Gishu", "Vihiga", "Wajir", "West Pokot"], "🇰🇪"] as ["Kenya", "KE", "254", "+...-...-......", "Counties", ["Baringo", "Bomet", "Bungoma", "Busia", "Elgeyo-Marakwet", "Embu", "Garissa", "Homa Bay", "Isiolo", "Kajiado", "Kakamega", "Kericho", "Kiambu", "Kilifi", "Kirinyaga", "Kisii", "Kisumu", "Kitui", "Kwale", "Laikipia", "Lamu", "Machakos", "Makueni", "Mandera", "Marsabit", "Meru", "Migori", "Mombasa", "Murang'a", "Nairobi", "Nakuru", "Nandi", "Narok", "Nyamira", "Nyandarua", "Nyeri", "Samburu", "Siaya", "Taita-Taveta", "Tana River", "Tharaka-Nithi", "Trans-Nzoia", "Turkana", "Uasin Gishu", "Vihiga", "Wajir", "West Pokot"], "🇰🇪"],
  KG: ["Kyrgyzstan (Кыргызстан)", "KG", "996", "+...(...)...-...", "Regions", ["Batken", "Chuy", "Issyk-Kul", "Jalal-Abad", "Naryn", "Osh", "Talas"], "🇰🇬"] as ["Kyrgyzstan (Кыргызстан)", "KG", "996", "+...(...)...-...", "Regions", ["Batken", "Chuy", "Issyk-Kul", "Jalal-Abad", "Naryn", "Osh", "Talas"], "🇰🇬"],
  KH: ["Cambodia (កម្ពុជា)", "KH", "855", "+...-..-...-...", "Provinces", ["Banteay Meanchey", "Battambang", "Kampong Cham", "Kampong Chhnang", "Kampong Speu", "Kampong Thom", "Kampot", "Kandal", "Kep", "Koh Kong", "Kratie", "Mondulkiri", "Oddar Meanchey", "Pailin", "Phnom Penh", "Preah Sihanouk", "Preah Vihear", "Pursat", "Ratanakiri", "Siem Reap", "Stung Treng", "Svay Rieng", "Takéo", "Tboung Khmum"], "🇰🇭"] as ["Cambodia (កម្ពុជា)", "KH", "855", "+...-..-...-...", "Provinces", ["Banteay Meanchey", "Battambang", "Kampong Cham", "Kampong Chhnang", "Kampong Speu", "Kampong Thom", "Kampot", "Kandal", "Kep", "Koh Kong", "Kratie", "Mondulkiri", "Oddar Meanchey", "Pailin", "Phnom Penh", "Preah Sihanouk", "Preah Vihear", "Pursat", "Ratanakiri", "Siem Reap", "Stung Treng", "Svay Rieng", "Takéo", "Tboung Khmum"], "🇰🇭"],
  KI: ["Kiribati", "KI", "686", "+...-..-...", "Islands", ["Banaba", "Gilbert Islands", "Line Islands", "Phoenix Islands"], "🇰🇮"] as ["Kiribati", "KI", "686", "+...-..-...", "Islands", ["Banaba", "Gilbert Islands", "Line Islands", "Phoenix Islands"], "🇰🇮"],
  KM: ["Comoros (‫جزر القمر‬‎)", "KM", "269", "+...-..-.....", "Regions", ["Grande Comore", "Anjouan", "Mohéli"], "🇰🇲"] as ["Comoros (‫جزر القمر‬‎)", "KM", "269", "+...-..-.....", "Regions", ["Grande Comore", "Anjouan", "Mohéli"], "🇰🇲"],
  KN: ["Saint Kitts and Nevis", "KN", "1869", "+.(...)...-....", "Parishes", ["Christ Church Nichola Town", "Saint Anne Sandy Point", "Saint George Basseterre", "Saint John Capisterre", "Saint Mary Cayon", "Saint Paul Capisterre", "Saint Peter Basseterre", "Saint Thomas Lowland", "Saint Thomas Middle Island", "Trinity Palmetto Point"], "🇰🇳"] as ["Saint Kitts and Nevis", "KN", "1869", "+.(...)...-....", "Parishes", ["Christ Church Nichola Town", "Saint Anne Sandy Point", "Saint George Basseterre", "Saint John Capisterre", "Saint Mary Cayon", "Saint Paul Capisterre", "Saint Peter Basseterre", "Saint Thomas Lowland", "Saint Thomas Middle Island", "Trinity Palmetto Point"], "🇰🇳"],
  KP: ["North Korea (조선 민주주의 인민 공화국)", "KP", "850", "+...-...-...", "Provinces", ["Chagang", "North Hamgyong", "South Hamgyong", "North Hwanghae", "South Hwanghae", "Kangwon", "North Pyongan", "South Pyongan", "Ryanggang"], "🇰🇵"] as ["North Korea (조선 민주주의 인민 공화국)", "KP", "850", "+...-...-...", "Provinces", ["Chagang", "North Hamgyong", "South Hamgyong", "North Hwanghae", "South Hwanghae", "Kangwon", "North Pyongan", "South Pyongan", "Ryanggang"], "🇰🇵"],
  KW: ["Kuwait (‫الكويت‬‎)", "KW", "965", "+...-....-....", "Governorates", ["Al Ahmadi", "Al Farwaniyah", "Al Jahra", "Capital", "Hawalli", "Mubarak Al-Kabeer"], "🇰🇼"] as ["Kuwait (‫الكويت‬‎)", "KW", "965", "+...-....-....", "Governorates", ["Al Ahmadi", "Al Farwaniyah", "Al Jahra", "Capital", "Hawalli", "Mubarak Al-Kabeer"], "🇰🇼"],
  KY: ["Cayman Islands", "KY", "1345", "+.(...)...-....", "Districts", ["Bodden Town", "Cayman Brac", "East End", "George Town", "Little Cayman", "North Side", "Sister Islands", "West Bay"], "🇰🇾"] as ["Cayman Islands", "KY", "1345", "+.(...)...-....", "Districts", ["Bodden Town", "Cayman Brac", "East End", "George Town", "Little Cayman", "North Side", "Sister Islands", "West Bay"], "🇰🇾"],
  KZ: ["Kazakhstan (Казахстан)", "KZ", "7", "+. ... ...-..-..", "Regions", ["Almaty", "Aqmola", "Aqtobe", "Atyrau", "East Kazakhstan", "Mangystau", "North Kazakhstan", "Nur-Sultan", "Pavlodar", "Qaragandy", "Qostanay", "Qyzylorda", "Shymkent", "Turkestan", "West Kazakhstan"], "🇰🇿", 1] as ["Kazakhstan (Казахстан)", "KZ", "7", "+. ... ...-..-..", "Regions", ["Almaty", "Aqmola", "Aqtobe", "Atyrau", "East Kazakhstan", "Mangystau", "North Kazakhstan", "Nur-Sultan", "Pavlodar", "Qaragandy", "Qostanay", "Qyzylorda", "Shymkent", "Turkestan", "West Kazakhstan"], "🇰🇿", 1],
  LA: ["Laos (ລາວ)", "LA", "856", "+...-..-...-...", "Provinces", ["Attapeu", "Bokeo", "Bolikhamsai", "Champasak", "Houaphanh", "Khammouane", "Luang Namtha", "Luang Prabang", "Oudomxay", "Phongsaly", "Sainyabuli", "Salavan", "Savannakhet", "Sekong", "Vientiane", "Vientiane Prefecture", "Xaisomboun", "Xaisomboun Special Zone", "Xiangkhouang", "Xekong", "Xiangkhouang"], "🇱🇦"] as ["Laos (ລາວ)", "LA", "856", "+...-..-...-...", "Provinces", ["Attapeu", "Bokeo", "Bolikhamsai", "Champasak", "Houaphanh", "Khammouane", "Luang Namtha", "Luang Prabang", "Oudomxay", "Phongsaly", "Sainyabuli", "Salavan", "Savannakhet", "Sekong", "Vientiane", "Vientiane Prefecture", "Xaisomboun", "Xaisomboun Special Zone", "Xiangkhouang", "Xekong", "Xiangkhouang"], "🇱🇦"],
  LB: ["Lebanon (‫لبنان‬‎)", "LB", "961", "+...-.-...-...", "Governorates", ["Akkar", "Baalbek-Hermel", "Beirut", "Beqaa", "Mount Lebanon", "Nabatieh", "North", "South"], "🇱🇧"] as ["Lebanon (‫لبنان‬‎)", "LB", "961", "+...-.-...-...", "Governorates", ["Akkar", "Baalbek-Hermel", "Beirut", "Beqaa", "Mount Lebanon", "Nabatieh", "North", "South"], "🇱🇧"],
  LC: ["Saint Lucia", "LC", "1758", "+.(...)...-....", "Districts", ["Anse-la-Raye", "Canaries", "Castries", "Choiseul", "Dennery", "Gros Islet", "Laborie", "Micoud", "Soufrière", "Vieux Fort"], "🇱🇨"] as ["Saint Lucia", "LC", "1758", "+.(...)...-....", "Districts", ["Anse-la-Raye", "Canaries", "Castries", "Choiseul", "Dennery", "Gros Islet", "Laborie", "Micoud", "Soufrière", "Vieux Fort"], "🇱🇨"],
  LI: ["Liechtenstein", "LI", "423", "+...(...)...-....", "Municipalities", ["Balzers", "Eschen", "Gamprin", "Mauren", "Planken", "Ruggell", "Schaan", "Schellenberg", "Triesen", "Triesenberg", "Vaduz"], "🇱🇮"] as ["Liechtenstein", "LI", "423", "+...(...)...-....", "Municipalities", ["Balzers", "Eschen", "Gamprin", "Mauren", "Planken", "Ruggell", "Schaan", "Schellenberg", "Triesen", "Triesenberg", "Vaduz"], "🇱🇮"],
  LR: ["Liberia", "LR", "231", "+...-..-...-...", "Counties", ["Bomi", "Bong", "Gbarpolu", "Grand Bassa", "Grand Cape Mount", "Grand Gedeh", "Grand Kru", "Lofa", "Margibi", "Maryland", "Montserrado", "Nimba", "River Cess", "River Gee", "Sinoe"], "🇱🇷"] as ["Liberia", "LR", "231", "+...-..-...-...", "Counties", ["Bomi", "Bong", "Gbarpolu", "Grand Bassa", "Grand Cape Mount", "Grand Gedeh", "Grand Kru", "Lofa", "Margibi", "Maryland", "Montserrado", "Nimba", "River Cess", "River Gee", "Sinoe"], "🇱🇷"],
  LS: ["Lesotho", "LS", "266", "+...-.-...-....", "Districts", ["Berea", "Butha-Buthe", "Leribe", "Mafeteng", "Maseru", "Mohale's Hoek", "Mokhotlong", "Qacha's Nek", "Quthing", "Thaba-Tseka"], "🇱🇸"] as ["Lesotho", "LS", "266", "+...-.-...-....", "Districts", ["Berea", "Butha-Buthe", "Leribe", "Mafeteng", "Maseru", "Mohale's Hoek", "Mokhotlong", "Qacha's Nek", "Quthing", "Thaba-Tseka"], "🇱🇸"],
  LT: ["Lithuania (Lietuva)", "LT", "370", "+...(...)..-...", "Counties", ["Alytus County", "Kaunas County", "Klaipeda County", "Marijampole County", "Panevezys County", "Siauliai County", "Taurage County", "Telsiai County", "Utena County", "Vilnius County"], "🇱🇹"] as ["Lithuania (Lietuva)", "LT", "370", "+...(...)..-...", "Counties", ["Alytus County", "Kaunas County", "Klaipeda County", "Marijampole County", "Panevezys County", "Siauliai County", "Taurage County", "Telsiai County", "Utena County", "Vilnius County"], "🇱🇹"],
  LU: ["Luxembourg", "LU", "352", "+...(...)...-...", "Cantons", ["Diekirch", "Grevenmacher", "Luxembourg"], "🇱🇺"] as ["Luxembourg", "LU", "352", "+...(...)...-...", "Cantons", ["Diekirch", "Grevenmacher", "Luxembourg"], "🇱🇺"],
  LV: ["Latvia (Latvija)", "LV", "371", "+...-..-...-...", "Regions", ["Aizkraukle", "Aluksne", "Balvi", "Bauska", "Cesis", "Daugavpils", "Dobele", "Gulbene", "Jekabpils", "Jelgava", "Jurmala", "Kraslava", "Kuldiga", "Liepaja", "Limbazi", "Ludza", "Madona", "Ogre", "Preili", "Rezekne", "Riga", "Saldus", "Talsi", "Tukums", "Valka", "Valmiera", "Ventspils"], "🇱🇻"] as ["Latvia (Latvija)", "LV", "371", "+...-..-...-...", "Regions", ["Aizkraukle", "Aluksne", "Balvi", "Bauska", "Cesis", "Daugavpils", "Dobele", "Gulbene", "Jekabpils", "Jelgava", "Jurmala", "Kraslava", "Kuldiga", "Liepaja", "Limbazi", "Ludza", "Madona", "Ogre", "Preili", "Rezekne", "Riga", "Saldus", "Talsi", "Tukums", "Valka", "Valmiera", "Ventspils"], "🇱🇻"],
  LY: ["Libya (‫ليبيا‬‎)", "LY", "218", "+...-..-...-...", "Regions", ["Al Wahat", "Benghazi", "Derna", "Ghat", "Jabal al Akhdar", "Jabal al Gharbi", "Jafara", "Jufra", "Kufra", "Marj", "Misrata", "Murqub", "Murzuq", "Nalut", "Nuqat al Khams", "Sabha", "Sirte", "Tripoli", "Wadi al Hayaa", "Wadi al Shatii", "Zawiya"], "🇱🇾"] as ["Libya (‫ليبيا‬‎)", "LY", "218", "+...-..-...-...", "Regions", ["Al Wahat", "Benghazi", "Derna", "Ghat", "Jabal al Akhdar", "Jabal al Gharbi", "Jafara", "Jufra", "Kufra", "Marj", "Misrata", "Murqub", "Murzuq", "Nalut", "Nuqat al Khams", "Sabha", "Sirte", "Tripoli", "Wadi al Hayaa", "Wadi al Shatii", "Zawiya"], "🇱🇾"],
  MA: ["Morocco (‫المغرب‬‎)", "MA", "212", "+...-..-....-...", "Regions", ["Tanger-Tétouan-Al Hoceïma", "Oriental", "Fès-Meknès", "Rabat-Salé-Kénitra", "Béni Mellal-Khénifra", "Casablanca-Settat", "Marrakesh-Safi", "Drâa-Tafilalet", "Souss-Massa", "Guelmim-Oued Noun", "Laâyoune-Sakia El Hamra", "Dakhla-Oued Ed-Dahab"], "🇲🇦"] as ["Morocco (‫المغرب‬‎)", "MA", "212", "+...-..-....-...", "Regions", ["Tanger-Tétouan-Al Hoceïma", "Oriental", "Fès-Meknès", "Rabat-Salé-Kénitra", "Béni Mellal-Khénifra", "Casablanca-Settat", "Marrakesh-Safi", "Drâa-Tafilalet", "Souss-Massa", "Guelmim-Oued Noun", "Laâyoune-Sakia El Hamra", "Dakhla-Oued Ed-Dahab"], "🇲🇦"],
  MC: ["Monaco", "MC", "377", "+...-..-...-...", "Districts", ["Monaco-Ville", "La Condamine", "Monte Carlo", "Fontvieille"], "🇲🇨"] as ["Monaco", "MC", "377", "+...-..-...-...", "Districts", ["Monaco-Ville", "La Condamine", "Monte Carlo", "Fontvieille"], "🇲🇨"],
  MD: ["Moldova (Republica Moldova)", "MD", "373", "+...-....-....", "Regions", ["Anenii Noi", "Basarabeasca", "Briceni", "Cahul", "Călărași", "Cantemir", "Căușeni", "Cimișlia", "Criuleni", "Dondușeni", "Drochia", "Dubăsari", "Edineț", "Fălești", "Florești", "Găgăuzia", "Glodeni", "Hîncești", "Ialoveni", "Leova", "Nisporeni", "Ocnița", "Orhei", "Rezina", "Rîșcani", "Sîngerei", "Șoldănești", "Soroca", "Strășeni", "Ștefan Vodă", "Taraclia", "Telenești", "Ungheni"], "🇲🇩"] as ["Moldova (Republica Moldova)", "MD", "373", "+...-....-....", "Regions", ["Anenii Noi", "Basarabeasca", "Briceni", "Cahul", "Călărași", "Cantemir", "Căușeni", "Cimișlia", "Criuleni", "Dondușeni", "Drochia", "Dubăsari", "Edineț", "Fălești", "Florești", "Găgăuzia", "Glodeni", "Hîncești", "Ialoveni", "Leova", "Nisporeni", "Ocnița", "Orhei", "Rezina", "Rîșcani", "Sîngerei", "Șoldănești", "Soroca", "Strășeni", "Ștefan Vodă", "Taraclia", "Telenești", "Ungheni"], "🇲🇩"],
  ME: ["Montenegro (Crna Gora)", "ME", "382", "+...-..-...-...", "Municipalities", ["Andrijevica", "Bar", "Berane", "Bijelo Polje", "Budva", "Cetinje", "Danilovgrad", "Gusinje", "Herceg Novi", "Kolašin", "Kotor", "Mojkovac", "Nikšić", "Petnjica", "Plav", "Pljevlja", "Plužine", "Podgorica", "Rožaje", "Šavnik", "Tivat", "Ulcinj", "Žabljak"], "🇲🇪"] as ["Montenegro (Crna Gora)", "ME", "382", "+...-..-...-...", "Municipalities", ["Andrijevica", "Bar", "Berane", "Bijelo Polje", "Budva", "Cetinje", "Danilovgrad", "Gusinje", "Herceg Novi", "Kolašin", "Kotor", "Mojkovac", "Nikšić", "Petnjica", "Plav", "Pljevlja", "Plužine", "Podgorica", "Rožaje", "Šavnik", "Tivat", "Ulcinj", "Žabljak"], "🇲🇪"],
  MF: ["Saint Martin (Sant-Martin (partie française))", "MF", "590", "", "Parishes", ["Marigot"], "🇲🇫", 2] as ["Saint Martin (Sant-Martin (partie française))", "MF", "590", "", "Parishes", ["Marigot"], "🇲🇫", 2],
  MG: ["Madagascar (Madagasikara)", "MG", "261", "+...-..-..-.....", "Provinces", ["Antananarivo", "Antsiranana", "Fianarantsoa", "Mahajanga", "Toamasina", "Toliara"], "🇲🇬"] as ["Madagascar (Madagasikara)", "MG", "261", "+...-..-..-.....", "Provinces", ["Antananarivo", "Antsiranana", "Fianarantsoa", "Mahajanga", "Toamasina", "Toliara"], "🇲🇬"],
  MH: ["Marshall Islands", "MH", "692", "+...-...-....", "Municipalities", ["Ailinglaplap", "Ailuk", "Arno", "Aur", "Bikini", "Ebon", "Enewetak", "Jabat", "Jaluit", "Kili", "Kwajalein", "Lae", "Lib", "Likiep", "Majuro", "Maloelap", "Mejit", "Mili", "Namdrik", "Namu", "Rongelap", "Ujae", "Ujelang", "Utirik", "Wotho", "Wotje"], "🇲🇭"] as ["Marshall Islands", "MH", "692", "+...-...-....", "Municipalities", ["Ailinglaplap", "Ailuk", "Arno", "Aur", "Bikini", "Ebon", "Enewetak", "Jabat", "Jaluit", "Kili", "Kwajalein", "Lae", "Lib", "Likiep", "Majuro", "Maloelap", "Mejit", "Mili", "Namdrik", "Namu", "Rongelap", "Ujae", "Ujelang", "Utirik", "Wotho", "Wotje"], "🇲🇭"],
  MK: ["Macedonia (FYROM) (Македонија)", "MK", "389", "+...-..-...-...", "Regions", ["Skopje", "Pelagonia", "Polog", "Vardar", "Eastern", "Southwestern", "Northeastern", "Southeastern"], "🇲🇰"] as ["Macedonia (FYROM) (Македонија)", "MK", "389", "+...-..-...-...", "Regions", ["Skopje", "Pelagonia", "Polog", "Vardar", "Eastern", "Southwestern", "Northeastern", "Southeastern"], "🇲🇰"],
  ML: ["Mali", "ML", "223", "+...-..-..-....", "Regions", ["Bamako", "Gao", "Kayes", "Kidal", "Koulikoro", "Mopti", "Segou", "Sikasso", "Tombouctou"], "🇲🇱"] as ["Mali", "ML", "223", "+...-..-..-....", "Regions", ["Bamako", "Gao", "Kayes", "Kidal", "Koulikoro", "Mopti", "Segou", "Sikasso", "Tombouctou"], "🇲🇱"],
  MM: ["Myanmar (Burma) (မြန်မာ)", "MM", "95", "+..-...-...", ["States", "Regions"], { "States": ["Ayeyarwady", "Bago", "Chin", "Kachin", "Kayah", "Kayin", "Magway", "Mandalay", "Mon", "Naypyidaw Union Territory", "Rakhine", "Sagaing", "Shan", "Tanintharyi", "Yangon"], "Regions": ["Sagaing", "Tanintharyi", "Bago", "Magway", "Mandalay", "Yangon", "Ayeyarwady", "Kachin", "Kayah", "Kayin", "Chin", "Mon", "Rakhine", "Shan"] }, "🇲🇲"] as ["Myanmar (Burma) (မြန်မာ)", "MM", "95", "+..-...-...", ["States", "Regions"], { "States": ["Ayeyarwady", "Bago", "Chin", "Kachin", "Kayah", "Kayin", "Magway", "Mandalay", "Mon", "Naypyidaw Union Territory", "Rakhine", "Sagaing", "Shan", "Tanintharyi", "Yangon"], "Regions": ["Sagaing", "Tanintharyi", "Bago", "Magway", "Mandalay", "Yangon", "Ayeyarwady", "Kachin", "Kayah", "Kayin", "Chin", "Mon", "Rakhine", "Shan"] }, "🇲🇲"],
  MN: ["Mongolia (Монгол)", "MN", "976", "+...-..-..-....", "Aimags", ["Arkhangai", "Bayan-Ölgii", "Bayankhongor", "Bulgan", "Darkhan-Uul", "Dornod", "Dornogovi", "Dundgovi", "Govi-Altai", "Govisümber", "Khentii", "Khovd", "Khövsgöl", "Ömnögovi", "Orkhon", "Övörkhangai", "Selenge", "Sükhbaatar", "Töv", "Uvs", "Zavkhan"], "🇲🇳"] as ["Mongolia (Монгол)", "MN", "976", "+...-..-..-....", "Aimags", ["Arkhangai", "Bayan-Ölgii", "Bayankhongor", "Bulgan", "Darkhan-Uul", "Dornod", "Dornogovi", "Dundgovi", "Govi-Altai", "Govisümber", "Khentii", "Khovd", "Khövsgöl", "Ömnögovi", "Orkhon", "Övörkhangai", "Selenge", "Sükhbaatar", "Töv", "Uvs", "Zavkhan"], "🇲🇳"],
  MO: ["Macau (澳門)", "MO", "853", "+...-....-....", "Freguesias", ["Nossa Senhora de Fátima", "Santo António", "São Lázaro", "São Lourenço", "São Francisco Xavier", "Sé", "Coloane", "Taipa"], "🇲🇴"] as ["Macau (澳門)", "MO", "853", "+...-....-....", "Freguesias", ["Nossa Senhora de Fátima", "Santo António", "São Lázaro", "São Lourenço", "São Francisco Xavier", "Sé", "Coloane", "Taipa"], "🇲🇴"],
  MP: ["Northern Mariana Islands", "MP", "1670", "+.(...)...-....", "Municipalities", ["Northern Islands", "Rota", "Saipan", "Tinian"], "🇲🇵"] as ["Northern Mariana Islands", "MP", "1670", "+.(...)...-....", "Municipalities", ["Northern Islands", "Rota", "Saipan", "Tinian"], "🇲🇵"],
  MQ: ["Martinique", "MQ", "596", "+...(...)..-..-..", ["Arrondissements", "Cantons", "Communes"], { "Arrondissements": ["Fort-de-France", "La Trinité", "Le Marin", "Le Robert", "Saint-Pierre"], "Cantons": ["Fort-de-France-1", "Fort-de-France-2", "Fort-de-France-3", "Fort-de-France-4", "Le François", "Le Lamentin-1", "Le Lamentin-2", "Le Marin", "Le Robert", "Sainte-Anne", "Sainte-Luce", "Saint-Esprit", "Saint-Joseph", "Saint-Pierre"], "Communes": ["Basse-Pointe", "Bellefontaine", "Case-Pilote", "Ducos", "Fonds-Saint-Denis", "Fort-de-France", "Grand'Rivière", "Gros-Morne", "Le Carbet", "Le Diamant", "Le François", "Le Lamentin", "Le Lorrain", "Le Marigot", "Le Marin", "Le Morne-Rouge", "Le Morne-Vert", "Le Prêcheur", "Le Robert", "Le Vauclin", "Les Anses-d'Arlet", "Les Trois-Îlets", "Macouba", "Rivière-Pilote", "Rivière-Salée", "Sainte-Anne", "Sainte-Luce", "Sainte-Marie", "Saint-Esprit", "Saint-Joseph", "Saint-Pierre", "Schœlcher", "Trinité", "Trois-Rivières"] }, "🇲🇶"] as ["Martinique", "MQ", "596", "+...(...)..-..-..", ["Arrondissements", "Cantons", "Communes"], { "Arrondissements": ["Fort-de-France", "La Trinité", "Le Marin", "Le Robert", "Saint-Pierre"], "Cantons": ["Fort-de-France-1", "Fort-de-France-2", "Fort-de-France-3", "Fort-de-France-4", "Le François", "Le Lamentin-1", "Le Lamentin-2", "Le Marin", "Le Robert", "Sainte-Anne", "Sainte-Luce", "Saint-Esprit", "Saint-Joseph", "Saint-Pierre"], "Communes": ["Basse-Pointe", "Bellefontaine", "Case-Pilote", "Ducos", "Fonds-Saint-Denis", "Fort-de-France", "Grand'Rivière", "Gros-Morne", "Le Carbet", "Le Diamant", "Le François", "Le Lamentin", "Le Lorrain", "Le Marigot", "Le Marin", "Le Morne-Rouge", "Le Morne-Vert", "Le Prêcheur", "Le Robert", "Le Vauclin", "Les Anses-d'Arlet", "Les Trois-Îlets", "Macouba", "Rivière-Pilote", "Rivière-Salée", "Sainte-Anne", "Sainte-Luce", "Sainte-Marie", "Saint-Esprit", "Saint-Joseph", "Saint-Pierre", "Schœlcher", "Trinité", "Trois-Rivières"] }, "🇲🇶"],
  MR: ["Mauritania (‫موريتانيا‬‎)", "MR", "222", "+...-..-..-....", "Regions", ["Adrar", "Assaba", "Brakna", "Dakhlet Nouadhibou", "Gorgol", "Guidimaka", "Hodh Ech Chargui", "Hodh El Gharbi", "Inchiri", "Nouakchott Nord", "Nouakchott Ouest", "Nouakchott Sud", "Tagant", "Tiris Zemmour", "Trarza"], "🇲🇷"] as ["Mauritania (‫موريتانيا‬‎)", "MR", "222", "+...-..-..-....", "Regions", ["Adrar", "Assaba", "Brakna", "Dakhlet Nouadhibou", "Gorgol", "Guidimaka", "Hodh Ech Chargui", "Hodh El Gharbi", "Inchiri", "Nouakchott Nord", "Nouakchott Ouest", "Nouakchott Sud", "Tagant", "Tiris Zemmour", "Trarza"], "🇲🇷"],
  MS: ["Montserrat", "MS", "1664", "+.(...)...-....", "Parishes", ["Saint Anthony", "Saint Georges", "Saint Peter"], "🇲🇸"] as ["Montserrat", "MS", "1664", "+.(...)...-....", "Parishes", ["Saint Anthony", "Saint Georges", "Saint Peter"], "🇲🇸"],
  MT: ["Malta", "MT", "356", "+...-....-....", "Districts", ["Gozo", "Malta"], "🇲🇹"] as ["Malta", "MT", "356", "+...-....-....", "Districts", ["Gozo", "Malta"], "🇲🇹"],
  MU: ["Mauritius (Moris)", "MU", "230", "+...-...-....", "Districts", ["Black River", "Flacq", "Grand Port", "Moka", "Pamplemousses", "Plaines Wilhems", "Port Louis", "Rivière du Rempart", "Savanne"], "🇲🇺"] as ["Mauritius (Moris)", "MU", "230", "+...-...-....", "Districts", ["Black River", "Flacq", "Grand Port", "Moka", "Pamplemousses", "Plaines Wilhems", "Port Louis", "Rivière du Rempart", "Savanne"], "🇲🇺"],
  MV: ["Maldives", "MV", "960", "+...-...-....", "Atolls", ["Ari Atoll", "Faafu Atoll", "Lhaviyani Atoll", "Malé Atoll", "Baa Atoll", "Dhaalu Atoll", "Gaafu Alif Atoll", "Haa Alif Atoll", "Kaafu Atoll", "Laamu Atoll", "Meemu Atoll", "Noonu Atoll", "Raa Atoll", "Seenu Atoll", "Thaa Atoll", "Vaavu Atoll"], "🇲🇻"] as ["Maldives", "MV", "960", "+...-...-....", "Atolls", ["Ari Atoll", "Faafu Atoll", "Lhaviyani Atoll", "Malé Atoll", "Baa Atoll", "Dhaalu Atoll", "Gaafu Alif Atoll", "Haa Alif Atoll", "Kaafu Atoll", "Laamu Atoll", "Meemu Atoll", "Noonu Atoll", "Raa Atoll", "Seenu Atoll", "Thaa Atoll", "Vaavu Atoll"], "🇲🇻"],
  MW: ["Malawi", "MW", "265", "+...-.-....-....", "Districts", ["Balaka", "Blantyre", "Chikwawa", "Chiradzulu", "Chitipa", "Dedza", "Dowa", "Karonga", "Kasungu", "Likoma", "Lilongwe", "Machinga", "Mangochi", "Mchinji", "Mulanje", "Mwanza", "Mzimba", "Neno", "Nkhata Bay", "Nkhotakota", "Nsanje", "Ntcheu", "Ntchisi", "Phalombe", "Rumphi", "Salima", "Thyolo", "Zomba"], "🇲🇼"] as ["Malawi", "MW", "265", "+...-.-....-....", "Districts", ["Balaka", "Blantyre", "Chikwawa", "Chiradzulu", "Chitipa", "Dedza", "Dowa", "Karonga", "Kasungu", "Likoma", "Lilongwe", "Machinga", "Mangochi", "Mchinji", "Mulanje", "Mwanza", "Mzimba", "Neno", "Nkhata Bay", "Nkhotakota", "Nsanje", "Ntcheu", "Ntchisi", "Phalombe", "Rumphi", "Salima", "Thyolo", "Zomba"], "🇲🇼"],
  MX: ["Mexico (México)", "MX", "52", "+..-..-..-....", "States", ["Aguascalientes", "Baja California", "Baja California Sur", "Campeche", "Chiapas", "Chihuahua", "Coahuila", "Colima", "Durango", "Guanajuato", "Guerrero", "Hidalgo", "Jalisco", "México", "Michoacán", "Morelos", "Nayarit", "Nuevo León", "Oaxaca", "Puebla", "Querétaro", "Quintana Roo", "San Luis Potosí", "Sinaloa", "Sonora", "Tabasco", "Tamaulipas", "Tlaxcala", "Veracruz", "Yucatán", "Zacatecas"], "🇲🇽"] as ["Mexico (México)", "MX", "52", "+..-..-..-....", "States", ["Aguascalientes", "Baja California", "Baja California Sur", "Campeche", "Chiapas", "Chihuahua", "Coahuila", "Colima", "Durango", "Guanajuato", "Guerrero", "Hidalgo", "Jalisco", "México", "Michoacán", "Morelos", "Nayarit", "Nuevo León", "Oaxaca", "Puebla", "Querétaro", "Quintana Roo", "San Luis Potosí", "Sinaloa", "Sonora", "Tabasco", "Tamaulipas", "Tlaxcala", "Veracruz", "Yucatán", "Zacatecas"], "🇲🇽"],
  MY: ["Malaysia", "MY", "60", "+.. ..-....-....", "States", ["Johor", "Kedah", "Kelantan", "Melaka", "Negeri Sembilan", "Pahang", "Perak", "Perlis", "Pulau Pinang", "Sabah", "Sarawak", "Selangor", "Terengganu", "Wilayah Persekutuan Kuala Lumpur", "Wilayah Persekutuan Labuan", "Wilayah Persekutuan Putrajaya"], "🇲🇾"] as ["Malaysia", "MY", "60", "+.. ..-....-....", "States", ["Johor", "Kedah", "Kelantan", "Melaka", "Negeri Sembilan", "Pahang", "Perak", "Perlis", "Pulau Pinang", "Sabah", "Sarawak", "Selangor", "Terengganu", "Wilayah Persekutuan Kuala Lumpur", "Wilayah Persekutuan Labuan", "Wilayah Persekutuan Putrajaya"], "🇲🇾"],
  MZ: ["Mozambique (Moçambique)", "MZ", "258", "+...-..-...-...", "Provinces", ["Cabo Delgado", "Gaza", "Inhambane", "Manica", "Maputo", "Nampula", "Niassa", "Sofala", "Tete", "Zambezia"], "🇲🇿"] as ["Mozambique (Moçambique)", "MZ", "258", "+...-..-...-...", "Provinces", ["Cabo Delgado", "Gaza", "Inhambane", "Manica", "Maputo", "Nampula", "Niassa", "Sofala", "Tete", "Zambezia"], "🇲🇿"],
  NA: ["Namibia (Namibië)", "NA", "264", "+...-..-...-....", "Regions", ["Erongo", "Hardap", "Karas", "Kavango East", "Kavango West", "Khomas", "Kunene", "Ohangwena", "Omaheke", "Omusati", "Oshana", "Oshikoto", "Otjozondjupa", "Zambezi"], "🇳🇦"] as ["Namibia (Namibië)", "NA", "264", "+...-..-...-....", "Regions", ["Erongo", "Hardap", "Karas", "Kavango East", "Kavango West", "Khomas", "Kunene", "Ohangwena", "Omaheke", "Omusati", "Oshana", "Oshikoto", "Otjozondjupa", "Zambezi"], "🇳🇦"],
  NC: ["New Caledonia (Nouvelle-Calédonie)", "NC", "687", "+...-..-....", ["Provinces", "Communes"], { "Provinces": ["South Province", "North Province", "Loyalty Islands Province"], "Communes": ["Nouméa", "Mont-Dore", "Dumbéa", "Païta", "Yaté", "Bouloupari", "La Foa", "Sarraméa", "Farino", "Moindou", "Bourail", "Poya", "Koné", "Voh", "Kaala-Gomen", "Pouembout", "Poum", "Belep", "Hienghène", "Ponérihouen", "Kouaoua", "Canala", "Thio", "Yaté", "Île des Pins", "Lifou", "Maré", "Ouvéa"] }, "🇳🇨"] as ["New Caledonia (Nouvelle-Calédonie)", "NC", "687", "+...-..-....", ["Provinces", "Communes"], { "Provinces": ["South Province", "North Province", "Loyalty Islands Province"], "Communes": ["Nouméa", "Mont-Dore", "Dumbéa", "Païta", "Yaté", "Bouloupari", "La Foa", "Sarraméa", "Farino", "Moindou", "Bourail", "Poya", "Koné", "Voh", "Kaala-Gomen", "Pouembout", "Poum", "Belep", "Hienghène", "Ponérihouen", "Kouaoua", "Canala", "Thio", "Yaté", "Île des Pins", "Lifou", "Maré", "Ouvéa"] }, "🇳🇨"],
  NE: ["Niger (Nijar)", "NE", "227", "+...-..-..-....", "Regions", ["Agadez", "Diffa", "Dosso", "Maradi", "Tahoua", "Tillabéri", "Zinder"], "🇳🇪"] as ["Niger (Nijar)", "NE", "227", "+...-..-..-....", "Regions", ["Agadez", "Diffa", "Dosso", "Maradi", "Tahoua", "Tillabéri", "Zinder"], "🇳🇪"],
  NF: ["Norfolk Island", "NF", "672", "+...-...-...", "🇳🇫"] as ["Norfolk Island", "NF", "672", "+...-...-...", "🇳🇫"],
  NG: ["Nigeria", "NG", "234", "+...-..-...-..", "States", ["Abia", "Adamawa", "Akwa Ibom", "Anambra", "Bauchi", "Bayelsa", "Benue", "Borno", "Cross River", "Delta", "Ebonyi", "Edo", "Ekiti", "Enugu", "Gombe", "Imo", "Jigawa", "Kaduna", "Kano", "Katsina", "Kebbi", "Kogi", "Kwara", "Lagos", "Nasarawa", "Niger", "Ogun", "Ondo", "Osun", "Oyo", "Plateau", "Rivers", "Sokoto", "Taraba", "Yobe", "Zamfara", "Federal Capital Territory"], "🇳🇬"] as ["Nigeria", "NG", "234", "+...-..-...-..", "States", ["Abia", "Adamawa", "Akwa Ibom", "Anambra", "Bauchi", "Bayelsa", "Benue", "Borno", "Cross River", "Delta", "Ebonyi", "Edo", "Ekiti", "Enugu", "Gombe", "Imo", "Jigawa", "Kaduna", "Kano", "Katsina", "Kebbi", "Kogi", "Kwara", "Lagos", "Nasarawa", "Niger", "Ogun", "Ondo", "Osun", "Oyo", "Plateau", "Rivers", "Sokoto", "Taraba", "Yobe", "Zamfara", "Federal Capital Territory"], "🇳🇬"],
  NI: ["Nicaragua", "NI", "505", "+...-....-....", "Departments", ["Boaco", "Carazo", "Chinandega", "Chontales", "Estelí", "Granada", "Jinotega", "León", "Madriz", "Managua", "Masaya", "Matagalpa", "Nueva Segovia", "Río San Juan", "Rivas", "Atlántico Norte", "Atlántico Sur"], "🇳🇮"] as ["Nicaragua", "NI", "505", "+...-....-....", "Departments", ["Boaco", "Carazo", "Chinandega", "Chontales", "Estelí", "Granada", "Jinotega", "León", "Madriz", "Managua", "Masaya", "Matagalpa", "Nueva Segovia", "Río San Juan", "Rivas", "Atlántico Norte", "Atlántico Sur"], "🇳🇮"],
  NL: ["Netherlands (Nederland)", "NL", "31", "+.. .. ........", "Provinces", ["Drenthe", "Flevoland", "Friesland", "Gelderland", "Groningen", "Limburg", "Noord-Brabant", "Noord-Holland", "Overijssel", "Utrecht", "Zeeland", "Zuid-Holland"], "🇳🇱"] as ["Netherlands (Nederland)", "NL", "31", "+.. .. ........", "Provinces", ["Drenthe", "Flevoland", "Friesland", "Gelderland", "Groningen", "Limburg", "Noord-Brabant", "Noord-Holland", "Overijssel", "Utrecht", "Zeeland", "Zuid-Holland"], "🇳🇱"],
  NO: ["Norway (Norge)", "NO", "47", "+.. ... .. ...", "Counties", ["Agder", "Innlandet", "Møre og Romsdal", "Nordland", "Oslo", "Rogaland", "Troms og Finnmark", "Trøndelag", "Vestfold og Telemark", "Vestland", "Viken"], "🇳🇴"] as ["Norway (Norge)", "NO", "47", "+.. ... .. ...", "Counties", ["Agder", "Innlandet", "Møre og Romsdal", "Nordland", "Oslo", "Rogaland", "Troms og Finnmark", "Trøndelag", "Vestfold og Telemark", "Vestland", "Viken"], "🇳🇴"],
  NP: ["Nepal (नेपाल)", "NP", "977", "+...-..-...-...", "Provinces", ["Province No. 1", "Province No. 2", "Bagmati Province", "Gandaki Province", "Lumbini Province", "Karnali Province", "Sudurpashchim Province"], "🇳🇵"] as ["Nepal (नेपाल)", "NP", "977", "+...-..-...-...", "Provinces", ["Province No. 1", "Province No. 2", "Bagmati Province", "Gandaki Province", "Lumbini Province", "Karnali Province", "Sudurpashchim Province"], "🇳🇵"],
  NR: ["Nauru", "NR", "674", "+...-...-....", "Districts", ["Aiwo", "Anabar", "Anetan", "Anibare", "Baiti", "Boe", "Buada", "Denigomodu", "Ewa", "Ijuw", "Meneng", "Nibok", "Uaboe", "Yaren"], "🇳🇷"] as ["Nauru", "NR", "674", "+...-...-....", "Districts", ["Aiwo", "Anabar", "Anetan", "Anibare", "Baiti", "Boe", "Buada", "Denigomodu", "Ewa", "Ijuw", "Meneng", "Nibok", "Uaboe", "Yaren"], "🇳🇷"],
  NU: ["Niue", "NU", "683", "+...-....", "Villages", ["Alofi", "Avatele", "Hakupu", "Hikutavake", "Lakepa", "Makefu", "Mutalau", "Namukulu", "Tamakautoga", "Toi", "Tuapa"], "🇳🇺"] as ["Niue", "NU", "683", "+...-....", "Villages", ["Alofi", "Avatele", "Hakupu", "Hikutavake", "Lakepa", "Makefu", "Mutalau", "Namukulu", "Tamakautoga", "Toi", "Tuapa"], "🇳🇺"],
  NZ: ["New Zealand", "NZ", "64", "+.. ...-...-....", "Regions", ["Northland", "Auckland", "Waikato", "Bay of Plenty", "Gisborne", "Hawke's Bay", "Taranaki", "Manawatu-Whanganui", "Wellington", "Tasman", "Nelson", "Marlborough", "West Coast", "Canterbury", "Otago", "Southland"], "🇳🇿"] as ["New Zealand", "NZ", "64", "+.. ...-...-....", "Regions", ["Northland", "Auckland", "Waikato", "Bay of Plenty", "Gisborne", "Hawke's Bay", "Taranaki", "Manawatu-Whanganui", "Wellington", "Tasman", "Nelson", "Marlborough", "West Coast", "Canterbury", "Otago", "Southland"], "🇳🇿"],
  OM: ["Oman (‫عُمان‬‎)", "OM", "968", "+...-..-...-...", "Governorates", ["Ad Dakhiliyah", "Ad Dhahirah", "Al Batinah North", "Al Batinah South", "Al Buraimi", "Al Wusta", "Ash Sharqiyah North", "Ash Sharqiyah South", "Dhofar", "Musandam", "Muscat"], "🇴🇲"] as ["Oman (‫عُمان‬‎)", "OM", "968", "+...-..-...-...", "Governorates", ["Ad Dakhiliyah", "Ad Dhahirah", "Al Batinah North", "Al Batinah South", "Al Buraimi", "Al Wusta", "Ash Sharqiyah North", "Ash Sharqiyah South", "Dhofar", "Musandam", "Muscat"], "🇴🇲"],
  PA: ["Panama (Panamá)", "PA", "507", "+...-...-....", "Provinces", ["Bocas del Toro", "Chiriquí", "Coclé", "Colón", "Darién", "Emberá-Wounaan", "Guna Yala", "Herrera", "Los Santos", "Ngäbe-Buglé", "Panamá", "Panamá Oeste", "Veraguas"], "🇵🇦"] as ["Panama (Panamá)", "PA", "507", "+...-...-....", "Provinces", ["Bocas del Toro", "Chiriquí", "Coclé", "Colón", "Darién", "Emberá-Wounaan", "Guna Yala", "Herrera", "Los Santos", "Ngäbe-Buglé", "Panamá", "Panamá Oeste", "Veraguas"], "🇵🇦"],
  PE: ["Peru (Perú)", "PE", "51", "+..(...)...-...", "Regions", ["Amazonas", "Áncash", "Apurímac", "Arequipa", "Ayacucho", "Cajamarca", "Callao", "Cusco", "Huancavelica", "Huánuco", "Ica", "Junín", "La Libertad", "Lambayeque", "Lima", "Loreto", "Madre de Dios", "Moquegua", "Pasco", "Piura", "Puno", "San Martín", "Tacna", "Tumbes", "Ucayali"], "🇵🇪"] as ["Peru (Perú)", "PE", "51", "+..(...)...-...", "Regions", ["Amazonas", "Áncash", "Apurímac", "Arequipa", "Ayacucho", "Cajamarca", "Callao", "Cusco", "Huancavelica", "Huánuco", "Ica", "Junín", "La Libertad", "Lambayeque", "Lima", "Loreto", "Madre de Dios", "Moquegua", "Pasco", "Piura", "Puno", "San Martín", "Tacna", "Tumbes", "Ucayali"], "🇵🇪"],
  PF: ["French Polynesia (Polynésie française)", "PF", "689", "+...-..-..-..", ["Communes", "Subdivisions"], { "Communes": ["Papeete", "Faaa", "Punaauia"], "Subdivisions": ["Marquesas Islands", "Tuamotu-Gambier", "Tubuai Islands"] }, "🇵🇫"] as ["French Polynesia (Polynésie française)", "PF", "689", "+...-..-..-..", ["Communes", "Subdivisions"], { "Communes": ["Papeete", "Faaa", "Punaauia"], "Subdivisions": ["Marquesas Islands", "Tuamotu-Gambier", "Tubuai Islands"] }, "🇵🇫"],
  PG: ["Papua New Guinea", "PG", "675", "+...(...)..-...", "Regions", ["Bougainville", "Central", "Chimbu", "Eastern Highlands", "East New Britain", "East Sepik", "Enga", "Gulf", "Hela", "Jiwaka", "Madang", "Manus", "Milne Bay", "Morobe", "New Ireland", "Northern", "Southern Highlands", "Western", "West New Britain", "West Sepik", "Western Highlands"], "🇵🇬"] as ["Papua New Guinea", "PG", "675", "+...(...)..-...", "Regions", ["Bougainville", "Central", "Chimbu", "Eastern Highlands", "East New Britain", "East Sepik", "Enga", "Gulf", "Hela", "Jiwaka", "Madang", "Manus", "Milne Bay", "Morobe", "New Ireland", "Northern", "Southern Highlands", "Western", "West New Britain", "West Sepik", "Western Highlands"], "🇵🇬"],
  PH: ["Philippines", "PH", "63", "+.. ... ....", "Regions", ["Ilocos Region", "Cagayan Valley", "Central Luzon", "Calabarzon", "Mimaropa", "Bicol Region", "Western Visayas", "Central Visayas", "Eastern Visayas", "Zamboanga Peninsula", "Northern Mindanao", "Davao Region", "Soccsksargen", "Caraga", "Bangsamoro Autonomous Region in Muslim Mindanao", "Cordillera Administrative Region", "National Capital Region"], "🇵🇭"] as ["Philippines", "PH", "63", "+.. ... ....", "Regions", ["Ilocos Region", "Cagayan Valley", "Central Luzon", "Calabarzon", "Mimaropa", "Bicol Region", "Western Visayas", "Central Visayas", "Eastern Visayas", "Zamboanga Peninsula", "Northern Mindanao", "Davao Region", "Soccsksargen", "Caraga", "Bangsamoro Autonomous Region in Muslim Mindanao", "Cordillera Administrative Region", "National Capital Region"], "🇵🇭"],
  PK: ["Pakistan (‫پاکستان‬‎)", "PK", "92", "+.. ...-.......", ["Provinces", "Territories"], { "Provinces": ["Balochistan", "Khyber Pakhtunkhwa", "Punjab", "Sindh"], "Territories": ["Islamabad Capital Territory", "Gilgit-Baltistan", "Azad Jammu and Kashmir"] }, "🇵🇰"] as ["Pakistan (‫پاکستان‬‎)", "PK", "92", "+.. ...-.......", ["Provinces", "Territories"], { "Provinces": ["Balochistan", "Khyber Pakhtunkhwa", "Punjab", "Sindh"], "Territories": ["Islamabad Capital Territory", "Gilgit-Baltistan", "Azad Jammu and Kashmir"] }, "🇵🇰"],
  PL: ["Poland (Polska)", "PL", "48", "+.. ...-...-...", "Provinces", ["Greater Poland", "Kuyavian-Pomeranian", "Lesser Poland", "Lodz", "Lower Silesian", "Lublin", "Lubusz", "Masovian", "Opole", "Podlasie", "Pomeranian", "Silesian", "Subcarpathian", "Swietokrzyskie", "Warmian-Masurian", "West Pomeranian"], "🇵🇱"] as ["Poland (Polska)", "PL", "48", "+.. ...-...-...", "Provinces", ["Greater Poland", "Kuyavian-Pomeranian", "Lesser Poland", "Lodz", "Lower Silesian", "Lublin", "Lubusz", "Masovian", "Opole", "Podlasie", "Pomeranian", "Silesian", "Subcarpathian", "Swietokrzyskie", "Warmian-Masurian", "West Pomeranian"], "🇵🇱"],
  PM: ["Saint Pierre and Miquelon (Saint-Pierre-et-Miquelon)", "PM", "508", "", "Communes", ["Saint-Pierre", "Miquelon-Langlade"], "🇵🇲"] as ["Saint Pierre and Miquelon (Saint-Pierre-et-Miquelon)", "PM", "508", "", "Communes", ["Saint-Pierre", "Miquelon-Langlade"], "🇵🇲"],
  PN: ["Pitcairn Islands", "PN", "64", "", "🇵🇳"] as ["Pitcairn Islands", "PN", "64", "", "🇵🇳"],
  PR: ["Puerto Rico", "PR", "1", "+. (...) ...-....", "Municipalities", ["Adjuntas", "Aguada", "Aguadilla", "Aguas Buenas", "Aibonito", "Añasco", "Arecibo", "Arroyo", "Barceloneta", "Barranquitas", "Bayamón", "Cabo Rojo", "Caguas", "Camuy", "Canóvanas", "Carolina", "Cataño", "Cayey", "Ceiba", "Ciales", "Cidra", "Coamo", "Comerío", "Corozal", "Culebra", "Dorado", "Fajardo", "Florida", "Guánica", "Guayama", "Guayanilla", "Guaynabo", "Gurabo", "Hatillo", "Hormigueros", "Humacao", "Isabela", "Jayuya", "Juana Díaz", "Juncos", "Lajas", "Lares", "Las Marías", "Las Piedras", "Loíza", "Luquillo", "Manatí", "Maricao", "Maunabo", "Mayagüez", "Moca", "Morovis", "Naguabo", "Naranjito", "Orocovis", "Patillas", "Peñuelas", "Ponce", "Quebradillas", "Rincón", "Río Grande", "Sabana Grande", "Salinas", "San Germán", "San Juan", "San Lorenzo", "San Sebastián", "Santa Isabel", "Toa Alta", "Toa Baja", "Trujillo Alto", "Utuado", "Vega Alta", "Vega Baja", "Vieques", "Villalba", "Yabucoa", "Yauco"], "🇵🇷", 3, ["787", "939"]] as ["Puerto Rico", "PR", "1", "+. (...) ...-....", "Municipalities", ["Adjuntas", "Aguada", "Aguadilla", "Aguas Buenas", "Aibonito", "Añasco", "Arecibo", "Arroyo", "Barceloneta", "Barranquitas", "Bayamón", "Cabo Rojo", "Caguas", "Camuy", "Canóvanas", "Carolina", "Cataño", "Cayey", "Ceiba", "Ciales", "Cidra", "Coamo", "Comerío", "Corozal", "Culebra", "Dorado", "Fajardo", "Florida", "Guánica", "Guayama", "Guayanilla", "Guaynabo", "Gurabo", "Hatillo", "Hormigueros", "Humacao", "Isabela", "Jayuya", "Juana Díaz", "Juncos", "Lajas", "Lares", "Las Marías", "Las Piedras", "Loíza", "Luquillo", "Manatí", "Maricao", "Maunabo", "Mayagüez", "Moca", "Morovis", "Naguabo", "Naranjito", "Orocovis", "Patillas", "Peñuelas", "Ponce", "Quebradillas", "Rincón", "Río Grande", "Sabana Grande", "Salinas", "San Germán", "San Juan", "San Lorenzo", "San Sebastián", "Santa Isabel", "Toa Alta", "Toa Baja", "Trujillo Alto", "Utuado", "Vega Alta", "Vega Baja", "Vieques", "Villalba", "Yabucoa", "Yauco"], "🇵🇷", 3, ["787", "939"]],
  PS: ["Palestine (‫فلسطين‬‎)", "PS", "970", "+...-..-...-....", "Governorates", ["Gaza Strip", "West Bank"], "🇵🇸"] as ["Palestine (‫فلسطين‬‎)", "PS", "970", "+...-..-...-....", "Governorates", ["Gaza Strip", "West Bank"], "🇵🇸"],
  PT: ["Portugal", "PT", "351", "+...-..-...-....", "Regions", ["Azores", "Alentejo", "Algarve", "Centro", "Lisbon", "Madeira", "Norte"], "🇵🇹"] as ["Portugal", "PT", "351", "+...-..-...-....", "Regions", ["Azores", "Alentejo", "Algarve", "Centro", "Lisbon", "Madeira", "Norte"], "🇵🇹"],
  PW: ["Palau", "PW", "680", "+...-...-....", "States", ["Aimeliik", "Airai", "Angaur", "Hatohobei", "Kayangel", "Koror", "Melekeok", "Ngaraard", "Ngarchelong", "Ngardmau", "Ngatpang", "Ngchesar", "Ngeremlengui", "Ngiwal", "Peleliu", "Sonsorol"], "🇵🇼"] as ["Palau", "PW", "680", "+...-...-....", "States", ["Aimeliik", "Airai", "Angaur", "Hatohobei", "Kayangel", "Koror", "Melekeok", "Ngaraard", "Ngarchelong", "Ngardmau", "Ngatpang", "Ngchesar", "Ngeremlengui", "Ngiwal", "Peleliu", "Sonsorol"], "🇵🇼"],
  PY: ["Paraguay", "PY", "595", "+...(...)...-...", "Departments", ["Alto Paraguay", "Alto Paraná", "Amambay", "Boquerón", "Caaguazú", "Caazapá", "Canindeyú", "Central", "Concepción", "Cordillera", "Guairá", "Itapúa", "Misiones", "Ñeembucú", "Paraguarí", "Presidente Hayes", "San Pedro"], "🇵🇾"] as ["Paraguay", "PY", "595", "+...(...)...-...", "Departments", ["Alto Paraguay", "Alto Paraná", "Amambay", "Boquerón", "Caaguazú", "Caazapá", "Canindeyú", "Central", "Concepción", "Cordillera", "Guairá", "Itapúa", "Misiones", "Ñeembucú", "Paraguarí", "Presidente Hayes", "San Pedro"], "🇵🇾"],
  QA: ["Qatar (‫قطر‬‎)", "QA", "974", "+...-....-....", "Municipalities", ["Doha", "Al Rayyan", "Umm Salal", "Al Khor", "Al Wakrah", "Al Daayen", "Madinat ash Shamal", "Al Shamal", "Al Ruwais"], "🇶🇦"] as ["Qatar (‫قطر‬‎)", "QA", "974", "+...-....-....", "Municipalities", ["Doha", "Al Rayyan", "Umm Salal", "Al Khor", "Al Wakrah", "Al Daayen", "Madinat ash Shamal", "Al Shamal", "Al Ruwais"], "🇶🇦"],
  RE: ["Réunion (La Réunion)", "RE", "262", "+...-.....-....", ["Arrondissements", "Cantons", "Communes"], { "Arrondissements": ["Saint-Denis", "Saint-Paul", "Saint-Pierre", "Saint-Benoit"], "Cantons": ["Bras-Panon", "La Chaloupe", "La Grande Montée", "L'Étang-Salé", "Entre-Deux", "Les Avirons", "Petite-Île", "Plaine-des-Palmistes", "Le Port", "La Possession", "Saint-André-1", "Saint-André-2", "Saint-André-3", "Saint-Benoît-1", "Saint-Benoît-2", "Saint-Denis-1", "Saint-Denis-2", "Saint-Denis-3", "Saint-Denis-4", "Saint-Denis-5", "Saint-Denis-6", "Saint-Denis-7", "Saint-Denis-8", "Saint-Denis-9", "Saint-Denis-10", "Saint-Joseph", "Saint-Leu-1", "Saint-Leu-2", "Saint-Louis-1", "Saint-Louis-2", "Saint-Louis-3", "Saint-Paul-1", "Saint-Paul-2", "Saint-Paul-3", "Saint-Paul-4", "Saint-Paul-5", "Saint-Pierre-1", "Saint-Pierre-2", "Saint-Pierre-3", "Saint-Pierre-4", "Sainte-Marie", "Sainte-Rose", "Sainte-Suzanne", "Saint-Philippe", "Salazie", "Le Tampon-1", "Le Tampon-2", "Le Tampon-3", "Le Tampon-4"], "Communes": ["Les Avirons", "Bras-Panon", "Cilaos", "Entre-Deux", "L'Étang-Salé", "Petite-Île", "La Plaine-des-Palmistes", "Le Port", "La Possession", "Saint-André", "Saint-Benoît", "Saint-Denis", "Sainte-Marie", "Sainte-Rose", "Sainte-Suzanne", "Saint-Joseph", "Saint-Leu", "Saint-Louis", "Saint-Paul", "Saint-Philippe", "Saint-Pierre", "Salazie", "Le Tampon", "Trois-Bassins"] }, "🇷🇪"] as ["Réunion (La Réunion)", "RE", "262", "+...-.....-....", ["Arrondissements", "Cantons", "Communes"], { "Arrondissements": ["Saint-Denis", "Saint-Paul", "Saint-Pierre", "Saint-Benoit"], "Cantons": ["Bras-Panon", "La Chaloupe", "La Grande Montée", "L'Étang-Salé", "Entre-Deux", "Les Avirons", "Petite-Île", "Plaine-des-Palmistes", "Le Port", "La Possession", "Saint-André-1", "Saint-André-2", "Saint-André-3", "Saint-Benoît-1", "Saint-Benoît-2", "Saint-Denis-1", "Saint-Denis-2", "Saint-Denis-3", "Saint-Denis-4", "Saint-Denis-5", "Saint-Denis-6", "Saint-Denis-7", "Saint-Denis-8", "Saint-Denis-9", "Saint-Denis-10", "Saint-Joseph", "Saint-Leu-1", "Saint-Leu-2", "Saint-Louis-1", "Saint-Louis-2", "Saint-Louis-3", "Saint-Paul-1", "Saint-Paul-2", "Saint-Paul-3", "Saint-Paul-4", "Saint-Paul-5", "Saint-Pierre-1", "Saint-Pierre-2", "Saint-Pierre-3", "Saint-Pierre-4", "Sainte-Marie", "Sainte-Rose", "Sainte-Suzanne", "Saint-Philippe", "Salazie", "Le Tampon-1", "Le Tampon-2", "Le Tampon-3", "Le Tampon-4"], "Communes": ["Les Avirons", "Bras-Panon", "Cilaos", "Entre-Deux", "L'Étang-Salé", "Petite-Île", "La Plaine-des-Palmistes", "Le Port", "La Possession", "Saint-André", "Saint-Benoît", "Saint-Denis", "Sainte-Marie", "Sainte-Rose", "Sainte-Suzanne", "Saint-Joseph", "Saint-Leu", "Saint-Louis", "Saint-Paul", "Saint-Philippe", "Saint-Pierre", "Salazie", "Le Tampon", "Trois-Bassins"] }, "🇷🇪"],
  RO: ["Romania (România)", "RO", "40", "+..-..-...-....", "Regions", ["Moldova", "Muntenia", "Transylvania", "Banat", "Crisana", "Dobrogea", "Maramures", "Oltenia", "Bucovina", "Mehedinti", "Craiova", "Pitesti", "Sibiu", "Targu Mures", "Timisoara", "Cluj-Napoca", "Iasi", "Bucharest"], "🇷🇴"] as ["Romania (România)", "RO", "40", "+..-..-...-....", "Regions", ["Moldova", "Muntenia", "Transylvania", "Banat", "Crisana", "Dobrogea", "Maramures", "Oltenia", "Bucovina", "Mehedinti", "Craiova", "Pitesti", "Sibiu", "Targu Mures", "Timisoara", "Cluj-Napoca", "Iasi", "Bucharest"], "🇷🇴"],
  RS: ["Serbia (Србија)", "RS", "381", "+...-..-...-....", "Districts", ["Belgrade", "Nišava", "Šumadija", "Zaječar", "Podunavlje", "Bor", "Braničevo", "Pomoravlje", "Zlatibor", "Moravica", "Raška", "Rasina", "Toplica", "Mačva", "Kolubara", "Jablanica", "Pčinja", "Pirot", "Branicevo", "Juzni Banat", "Srednji Banat", "Severni Banat", "Zapadna Bačka", "Južna Bačka", "Severna Bačka", "Srem", "Mačva", "Kolubara", "Podrinje", "Kosovo", "Kosovska Mitrovica", "Peć", "Prizren", "Kosovska Mitrovica", "Peć", "Prizren"], "🇷🇸"] as ["Serbia (Србија)", "RS", "381", "+...-..-...-....", "Districts", ["Belgrade", "Nišava", "Šumadija", "Zaječar", "Podunavlje", "Bor", "Braničevo", "Pomoravlje", "Zlatibor", "Moravica", "Raška", "Rasina", "Toplica", "Mačva", "Kolubara", "Jablanica", "Pčinja", "Pirot", "Branicevo", "Juzni Banat", "Srednji Banat", "Severni Banat", "Zapadna Bačka", "Južna Bačka", "Severna Bačka", "Srem", "Mačva", "Kolubara", "Podrinje", "Kosovo", "Kosovska Mitrovica", "Peć", "Prizren", "Kosovska Mitrovica", "Peć", "Prizren"], "🇷🇸"],
  RU: ["Russia (Россия)", "RU", "7", "+.-(...)-...-....", "Federal Subjects", ["Moscow", "Saint Petersburg", "Novosibirsk", "Yekaterinburg", "Nizhny Novgorod", "Kazan", "Chelyabinsk", "Omsk", "Samara", "Rostov-on-Don", "Ufa", "Krasnoyarsk", "Perm", "Voronezh", "Volgograd", "Krasnodar", "Saratov", "Tyumen", "Tolyatti", "Izhevsk"], "🇷🇺"] as ["Russia (Россия)", "RU", "7", "+.-(...)-...-....", "Federal Subjects", ["Moscow", "Saint Petersburg", "Novosibirsk", "Yekaterinburg", "Nizhny Novgorod", "Kazan", "Chelyabinsk", "Omsk", "Samara", "Rostov-on-Don", "Ufa", "Krasnoyarsk", "Perm", "Voronezh", "Volgograd", "Krasnodar", "Saratov", "Tyumen", "Tolyatti", "Izhevsk"], "🇷🇺"],
  RW: ["Rwanda", "RW", "250", "+...(...)...-...", "Provinces", ["Kigali", "Eastern", "Northern", "Southern", "Western"], "🇷🇼"] as ["Rwanda", "RW", "250", "+...(...)...-...", "Provinces", ["Kigali", "Eastern", "Northern", "Southern", "Western"], "🇷🇼"],
  SA: ["Saudi Arabia (‫المملكة العربية السعودية‬‎)", "SA", "966", "+...-..-...-....", "Regions", ["Riyadh", "Makkah", "Madinah", "Eastern Province", "Asir", "Tabuk", "Qassim", "Ha'il", "Jizan", "Najran", "Al Bahah", "Northern Borders", "Jawf", "Hail"], "🇸🇦"] as ["Saudi Arabia (‫المملكة العربية السعودية‬‎)", "SA", "966", "+...-..-...-....", "Regions", ["Riyadh", "Makkah", "Madinah", "Eastern Province", "Asir", "Tabuk", "Qassim", "Ha'il", "Jizan", "Najran", "Al Bahah", "Northern Borders", "Jawf", "Hail"], "🇸🇦"],
  SB: ["Solomon Islands", "SB", "677", "+...-.....", "Provinces", ["Central Province", "Choiseul", "Guadalcanal", "Honiara", "Isabel", "Makira-Ulawa", "Malaita", "Rennell and Bellona", "Temotu", "Western Province"], "🇸🇧"] as ["Solomon Islands", "SB", "677", "+...-.....", "Provinces", ["Central Province", "Choiseul", "Guadalcanal", "Honiara", "Isabel", "Makira-Ulawa", "Malaita", "Rennell and Bellona", "Temotu", "Western Province"], "🇸🇧"],
  SC: ["Seychelles", "SC", "248", "+...-.-...-...", ["Inner Islands", "Outer Islands"], { "Inner Islands": ["Mahé", "Praslin", "La Digue"], "Outer Islands": ["Alphonse", "Desroches", "Farquhar", "Aldabra"] }, "🇸🇨"] as ["Seychelles", "SC", "248", "+...-.-...-...", ["Inner Islands", "Outer Islands"], { "Inner Islands": ["Mahé", "Praslin", "La Digue"], "Outer Islands": ["Alphonse", "Desroches", "Farquhar", "Aldabra"] }, "🇸🇨"],
  SG: ["Singapore", "SG", "65", "+.. ....-....", "Regions", ["Central Region", "East Region", "North Region", "North-East Region", "West Region"], "🇸🇬"] as ["Singapore", "SG", "65", "+.. ....-....", "Regions", ["Central Region", "East Region", "North Region", "North-East Region", "West Region"], "🇸🇬"],
  SI: ["Slovenia (Slovenija)", "SI", "386", "+...-..-...-...", "Regions", ["Pomurska", "Podravska", "Koroška", "Savinjska", "Zasavska", "Posavska", "Jugovzhodna Slovenija", "Osrednjeslovenska", "Gorenjska", "Primorsko-notranjska", "Goriška", "Obalno-kraška"], "🇸🇮"] as ["Slovenia (Slovenija)", "SI", "386", "+...-..-...-...", "Regions", ["Pomurska", "Podravska", "Koroška", "Savinjska", "Zasavska", "Posavska", "Jugovzhodna Slovenija", "Osrednjeslovenska", "Gorenjska", "Primorsko-notranjska", "Goriška", "Obalno-kraška"], "🇸🇮"],
  SK: ["Slovakia (Slovensko)", "SK", "421", "+...(...)...-...", "Regions", ["Bratislava", "Trnava", "Trenčín", "Nitra", "Žilina", "Banská Bystrica", "Prešov", "Košice"], "🇸🇰"] as ["Slovakia (Slovensko)", "SK", "421", "+...(...)...-...", "Regions", ["Bratislava", "Trnava", "Trenčín", "Nitra", "Žilina", "Banská Bystrica", "Prešov", "Košice"], "🇸🇰"],
  SL: ["Sierra Leone", "SL", "232", "+...-..-......", "Provinces", ["Eastern Province", "Northern Province", "Southern Province", "Western Area"], "🇸🇱"] as ["Sierra Leone", "SL", "232", "+...-..-......", "Provinces", ["Eastern Province", "Northern Province", "Southern Province", "Western Area"], "🇸🇱"],
  SM: ["San Marino", "SM", "378", "+...-....-......", "Municipalities", ["Acquaviva", "Borgo Maggiore", "Chiesanuova", "Domagnano", "Faetano", "Fiorentino", "Montegiardino", "San Marino", "Serravalle"], "🇸🇲"] as ["San Marino", "SM", "378", "+...-....-......", "Municipalities", ["Acquaviva", "Borgo Maggiore", "Chiesanuova", "Domagnano", "Faetano", "Fiorentino", "Montegiardino", "San Marino", "Serravalle"], "🇸🇲"],
  SN: ["Senegal (Sénégal)", "SN", "221", "+...-..-...-....", "Regions", ["Dakar", "Thiès", "Diourbel", "Fatick", "Kaolack", "Kolda", "Louga", "Matam", "Saint-Louis", "Sédhiou", "Tambacounda", "Kaffrine", "Kédougou", "Kolda", "Ziguinchor"], "🇸🇳"] as ["Senegal (Sénégal)", "SN", "221", "+...-..-...-....", "Regions", ["Dakar", "Thiès", "Diourbel", "Fatick", "Kaolack", "Kolda", "Louga", "Matam", "Saint-Louis", "Sédhiou", "Tambacounda", "Kaffrine", "Kédougou", "Kolda", "Ziguinchor"], "🇸🇳"],
  SO: ["Somalia (Soomaaliya)", "SO", "252", "+...-.-...-...", "Regions", ["Awdal", "Bakool", "Banaadir", "Bari", "Bay", "Galguduud", "Gedo", "Hiiraan", "Jubbada Dhexe", "Jubbada Hoose", "Mudug", "Nugaal", "Sanaag", "Shabeellaha Dhexe", "Shabeellaha Hoose", "Sool", "Togdheer", "Woqooyi Galbeed"], "🇸🇴"] as ["Somalia (Soomaaliya)", "SO", "252", "+...-.-...-...", "Regions", ["Awdal", "Bakool", "Banaadir", "Bari", "Bay", "Galguduud", "Gedo", "Hiiraan", "Jubbada Dhexe", "Jubbada Hoose", "Mudug", "Nugaal", "Sanaag", "Shabeellaha Dhexe", "Shabeellaha Hoose", "Sool", "Togdheer", "Woqooyi Galbeed"], "🇸🇴"],
  ST: ["São Tomé and Príncipe (São Tomé e Príncipe)", "ST", "239", "+...-..-.....", "Provinces", ["Príncipe", "São Tomé"], "🇸🇹"] as ["São Tomé and Príncipe (São Tomé e Príncipe)", "ST", "239", "+...-..-.....", "Provinces", ["Príncipe", "São Tomé"], "🇸🇹"],
  SV: ["El Salvador", "SV", "503", "+... ....-....", "Departments", ["Ahuachapán", "Cabañas", "Chalatenango", "Cuscatlán", "La Libertad", "La Paz", "La Unión", "Morazán", "San Miguel", "San Salvador", "San Vicente", "Santa Ana", "Sonsonate", "Usulután"], "🇸🇻"] as ["El Salvador", "SV", "503", "+... ....-....", "Departments", ["Ahuachapán", "Cabañas", "Chalatenango", "Cuscatlán", "La Libertad", "La Paz", "La Unión", "Morazán", "San Miguel", "San Salvador", "San Vicente", "Santa Ana", "Sonsonate", "Usulután"], "🇸🇻"],
  SX: ["Sint Maarten", "SX", "1721", "+.(...)...-....", "Regions", ["Dutch Quarter", "French Quarter", "Little Bay", "Lowlands", "Maho", "Pelican Key", "Philipsburg", "Point Blanche", "Simpson Bay"], "🇸🇽"] as ["Sint Maarten", "SX", "1721", "+.(...)...-....", "Regions", ["Dutch Quarter", "French Quarter", "Little Bay", "Lowlands", "Maho", "Pelican Key", "Philipsburg", "Point Blanche", "Simpson Bay"], "🇸🇽"],
  TC: ["Turks and Caicos Islands", "TC", "1649", "+.(...)...-....", "Districts", ["Grand Turk", "Salt Cay", "South Caicos", "Providenciales", "North Caicos", "Middle Caicos"], "🇹🇨"] as ["Turks and Caicos Islands", "TC", "1649", "+.(...)...-....", "Districts", ["Grand Turk", "Salt Cay", "South Caicos", "Providenciales", "North Caicos", "Middle Caicos"], "🇹🇨"],
  TD: ["Chad (Tchad)", "TD", "235", "+...-..-..-..-..", "Regions", ["Batha", "Borkou", "Ennedi", "Ennedi-Est", "Ennedi-Ouest", "Guéra", "Hadjer-Lamis", "Kanem", "Lac", "Logone Occidental", "Logone Oriental", "Mandoul", "Mayo-Kebbi Est", "Mayo-Kebbi Ouest", "Moyen-Chari", "N'Djamena", "Ouaddaï", "Salamat", "Sila", "Tandjilé", "Tibesti", "Wadi Fira"], "🇹🇩"] as ["Chad (Tchad)", "TD", "235", "+...-..-..-..-..", "Regions", ["Batha", "Borkou", "Ennedi", "Ennedi-Est", "Ennedi-Ouest", "Guéra", "Hadjer-Lamis", "Kanem", "Lac", "Logone Occidental", "Logone Oriental", "Mandoul", "Mayo-Kebbi Est", "Mayo-Kebbi Ouest", "Moyen-Chari", "N'Djamena", "Ouaddaï", "Salamat", "Sila", "Tandjilé", "Tibesti", "Wadi Fira"], "🇹🇩"],
  TF: ["French Southern and Antarctic Lands", "TF", "262", "", "Districts", ["Kerguelen Islands", "Crozet Islands", "Amsterdam Island", "Saint-Paul Island"], "🇹🇫"] as ["French Southern and Antarctic Lands", "TF", "262", "", "Districts", ["Kerguelen Islands", "Crozet Islands", "Amsterdam Island", "Saint-Paul Island"], "🇹🇫"],
  TG: ["Togo", "TG", "228", "+...-..-...-...", "Regions", ["Centrale", "Kara", "Maritime", "Plateaux", "Savanes"], "🇹🇬"] as ["Togo", "TG", "228", "+...-..-...-...", "Regions", ["Centrale", "Kara", "Maritime", "Plateaux", "Savanes"], "🇹🇬"],
  TH: ["Thailand (ไทย)", "TH", "66", "+..-..-...-...", "Regions", ["Bangkok", "Central Thailand", "Eastern Thailand", "Northern Thailand", "Northeastern Thailand", "Southern Thailand", "Western Thailand"], "🇹🇭"] as ["Thailand (ไทย)", "TH", "66", "+..-..-...-...", "Regions", ["Bangkok", "Central Thailand", "Eastern Thailand", "Northern Thailand", "Northeastern Thailand", "Southern Thailand", "Western Thailand"], "🇹🇭"],
  TK: ["Tokelau", "TK", "690", "+...-....", "Villages", ["Atafu", "Fakaofo", "Nukunonu"], "🇹🇰"] as ["Tokelau", "TK", "690", "+...-....", "Villages", ["Atafu", "Fakaofo", "Nukunonu"], "🇹🇰"],
  TL: ["Timor-Leste", "TL", "670", "+...-...-....", "Districts", ["Aileu", "Ainaro", "Baucau", "Bobonaro", "Cova Lima", "Dili", "Ermera", "Lautem", "Liquiçá", "Manatuto", "Manufahi", "Oecusse", "Viqueque"], "🇹🇱"] as ["Timor-Leste", "TL", "670", "+...-...-....", "Districts", ["Aileu", "Ainaro", "Baucau", "Bobonaro", "Cova Lima", "Dili", "Ermera", "Lautem", "Liquiçá", "Manatuto", "Manufahi", "Oecusse", "Viqueque"], "🇹🇱"],
  TM: ["Turkmenistan", "TM", "993", "+...-.-...-....", "Regions", ["Ahal", "Balkan", "Daşoguz", "Lebap", "Mary"], "🇹🇲"] as ["Turkmenistan", "TM", "993", "+...-.-...-....", "Regions", ["Ahal", "Balkan", "Daşoguz", "Lebap", "Mary"], "🇹🇲"],
  TN: ["Tunisia (‫تونس‬‎)", "TN", "216", "+...-..-...-...", "Regions", ["Tunis", "Ariana", "Ben Arous", "Manouba", "Nabeul", "Zaghouan", "Bizerte", "Béja", "Jendouba", "Kef", "Siliana", "Kairouan", "Kasserine", "Sidi Bouzid", "Sousse", "Monastir", "Mahdia", "Sfax", "Gabès", "Medenine", "Tataouine", "Gafsa", "Tozeur", "Kebili"], "🇹🇳"] as ["Tunisia (‫تونس‬‎)", "TN", "216", "+...-..-...-...", "Regions", ["Tunis", "Ariana", "Ben Arous", "Manouba", "Nabeul", "Zaghouan", "Bizerte", "Béja", "Jendouba", "Kef", "Siliana", "Kairouan", "Kasserine", "Sidi Bouzid", "Sousse", "Monastir", "Mahdia", "Sfax", "Gabès", "Medenine", "Tataouine", "Gafsa", "Tozeur", "Kebili"], "🇹🇳"],
  TO: ["Tonga", "TO", "676", "+...-.....", "Regions", ["Eua", "Ha'apai", "Niuas", "Tongatapu", "Vava'u"], "🇹🇴"] as ["Tonga", "TO", "676", "+...-.....", "Regions", ["Eua", "Ha'apai", "Niuas", "Tongatapu", "Vava'u"], "🇹🇴"],
  TR: ["Turkey (Türkiye)", "TR", "90", "+.. ... ... .. ..", "Regions", ["Adana", "Adıyaman", "Afyonkarahisar", "Ağrı", "Amasya", "Ankara", "Antalya", "Artvin", "Aydın", "Balıkesir", "Bilecik", "Bingöl", "Bitlis", "Bolu", "Burdur", "Bursa", "Çanakkale", "Çankırı", "Çorum", "Denizli", "Diyarbakır", "Edirne", "Elazığ", "Erzincan", "Erzurum", "Eskişehir", "Gaziantep", "Giresun", "Gümüşhane", "Hakkâri", "Hatay", "Isparta", "Mersin", "İstanbul", "İzmir", "Kars", "Kastamonu", "Kayseri", "Kırklareli", "Kırşehir", "Kocaeli", "Konya", "Kütahya", "Malatya", "Manisa", "Kahramanmaraş", "Mardin", "Muğla", "Muş", "Nevşehir", "Niğde", "Ordu", "Rize", "Sakarya", "Samsun", "Siirt", "Sinop", "Sivas", "Tekirdağ", "Tokat", "Trabzon", "Tunceli", "Şanlıurfa", "Uşak", "Van", "Yozgat", "Zonguldak", "Aksaray", "Bayburt", "Karaman", "Kırıkkale", "Batman", "Şırnak", "Bartın", "Ardahan", "Iğdır", "Yalova", "Karabük", "Kilis", "Osmaniye", "Düzce"], "🇹🇷"] as ["Turkey (Türkiye)", "TR", "90", "+.. ... ... .. ..", "Regions", ["Adana", "Adıyaman", "Afyonkarahisar", "Ağrı", "Amasya", "Ankara", "Antalya", "Artvin", "Aydın", "Balıkesir", "Bilecik", "Bingöl", "Bitlis", "Bolu", "Burdur", "Bursa", "Çanakkale", "Çankırı", "Çorum", "Denizli", "Diyarbakır", "Edirne", "Elazığ", "Erzincan", "Erzurum", "Eskişehir", "Gaziantep", "Giresun", "Gümüşhane", "Hakkâri", "Hatay", "Isparta", "Mersin", "İstanbul", "İzmir", "Kars", "Kastamonu", "Kayseri", "Kırklareli", "Kırşehir", "Kocaeli", "Konya", "Kütahya", "Malatya", "Manisa", "Kahramanmaraş", "Mardin", "Muğla", "Muş", "Nevşehir", "Niğde", "Ordu", "Rize", "Sakarya", "Samsun", "Siirt", "Sinop", "Sivas", "Tekirdağ", "Tokat", "Trabzon", "Tunceli", "Şanlıurfa", "Uşak", "Van", "Yozgat", "Zonguldak", "Aksaray", "Bayburt", "Karaman", "Kırıkkale", "Batman", "Şırnak", "Bartın", "Ardahan", "Iğdır", "Yalova", "Karabük", "Kilis", "Osmaniye", "Düzce"], "🇹🇷"],
  TT: ["Trinidad and Tobago", "TT", "1868", "+.(...)...-....", "Regions", ["Couva-Tabaquite-Talparo", "Diego Martin", "Eastern Tobago", "Penal-Debe", "Princes Town", "Rio Claro-Mayaro", "San Fernando", "Sangre Grande", "San Juan-Laventille", "Siparia", "Tunapuna-Piarco", "Port of Spain", "Point Fortin", "Chaguanas", "Borough of Arima", "Borough of Point Fortin", "Borough of Chaguanas", "Borough of Couva-Tabaquite-Talparo", "Borough of Diego Martin", "Borough of Penal-Debe", "Borough of Princes Town", "Borough of Rio Claro-Mayaro", "Borough of San Fernando", "Borough of Sangre Grande", "Borough of San Juan-Laventille", "Borough of Siparia", "Borough of Tunapuna-Piarco"], "🇹🇹"] as ["Trinidad and Tobago", "TT", "1868", "+.(...)...-....", "Regions", ["Couva-Tabaquite-Talparo", "Diego Martin", "Eastern Tobago", "Penal-Debe", "Princes Town", "Rio Claro-Mayaro", "San Fernando", "Sangre Grande", "San Juan-Laventille", "Siparia", "Tunapuna-Piarco", "Port of Spain", "Point Fortin", "Chaguanas", "Borough of Arima", "Borough of Point Fortin", "Borough of Chaguanas", "Borough of Couva-Tabaquite-Talparo", "Borough of Diego Martin", "Borough of Penal-Debe", "Borough of Princes Town", "Borough of Rio Claro-Mayaro", "Borough of San Fernando", "Borough of Sangre Grande", "Borough of San Juan-Laventille", "Borough of Siparia", "Borough of Tunapuna-Piarco"], "🇹🇹"],
  TV: ["Tuvalu", "TV", "688", "+...-.....", "Islands", ["Funafuti", "Nanumea", "Nui", "Nukufetau", "Nukulaelae", "Vaitupu"], "🇹🇻"] as ["Tuvalu", "TV", "688", "+...-.....", "Islands", ["Funafuti", "Nanumea", "Nui", "Nukufetau", "Nukulaelae", "Vaitupu"], "🇹🇻"],
  UA: ["Ukraine (Україна)", "UA", "380", "+...(..)...-..-..", "Oblasts", ["Cherkasy Oblast", "Chernihiv Oblast", "Chernivtsi Oblast", "Dnipropetrovsk Oblast", "Donetsk Oblast", "Ivano-Frankivsk Oblast", "Kharkiv Oblast", "Kherson Oblast", "Khmelnytskyi Oblast", "Kiev Oblast", "Kirovohrad Oblast", "Luhansk Oblast", "Lviv Oblast", "Mykolaiv Oblast", "Odessa Oblast", "Poltava Oblast", "Rivne Oblast", "Sumy Oblast", "Ternopil Oblast", "Vinnytsia Oblast", "Volyn Oblast", "Zakarpattia Oblast", "Zaporizhzhia Oblast", "Zhytomyr Oblast", "Autonomous Republic of Crimea"], "🇺🇦"] as ["Ukraine (Україна)", "UA", "380", "+...(..)...-..-..", "Oblasts", ["Cherkasy Oblast", "Chernihiv Oblast", "Chernivtsi Oblast", "Dnipropetrovsk Oblast", "Donetsk Oblast", "Ivano-Frankivsk Oblast", "Kharkiv Oblast", "Kherson Oblast", "Khmelnytskyi Oblast", "Kiev Oblast", "Kirovohrad Oblast", "Luhansk Oblast", "Lviv Oblast", "Mykolaiv Oblast", "Odessa Oblast", "Poltava Oblast", "Rivne Oblast", "Sumy Oblast", "Ternopil Oblast", "Vinnytsia Oblast", "Volyn Oblast", "Zakarpattia Oblast", "Zaporizhzhia Oblast", "Zhytomyr Oblast", "Autonomous Republic of Crimea"], "🇺🇦"],
  UG: ["Uganda", "UG", "256", "+...(...)...-...", "Regions", ["Central Region", "Eastern Region", "Northern Region", "Western Region"], "🇺🇬"] as ["Uganda", "UG", "256", "+...(...)...-...", "Regions", ["Central Region", "Eastern Region", "Northern Region", "Western Region"], "🇺🇬"],
  UM: ["United States Minor Outlying Islands", "UM", "1", "", "Territories", ["Baker Island", "Howland Island", "Jarvis Island", "Johnston Atoll", "Kingman Reef", "Midway Atoll", "Navassa Island", "Palmyra Atoll", "Wake Island"], "🇺🇲", 2] as ["United States Minor Outlying Islands", "UM", "1", "", "Territories", ["Baker Island", "Howland Island", "Jarvis Island", "Johnston Atoll", "Kingman Reef", "Midway Atoll", "Navassa Island", "Palmyra Atoll", "Wake Island"], "🇺🇲", 2],
  US: ["United States", "US", "1", "+. (...) ...-....", "States", ["Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", "Delaware", "Florida", "Georgia", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland", "Massachusetts", "Michigan", "Minnesota", "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire", "New Jersey", "New Mexico", "New York", "North Carolina", "North Dakota", "Ohio", "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island", "South Carolina", "South Dakota", "Tennessee", "Texas", "Utah", "Vermont", "Virginia", "Washington", "West Virginia", "Wisconsin", "Wyoming"], "🇺🇸", 0] as ["United States", "US", "1", "+. (...) ...-....", "States", ["Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", "Delaware", "Florida", "Georgia", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland", "Massachusetts", "Michigan", "Minnesota", "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire", "New Jersey", "New Mexico", "New York", "North Carolina", "North Dakota", "Ohio", "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island", "South Carolina", "South Dakota", "Tennessee", "Texas", "Utah", "Vermont", "Virginia", "Washington", "West Virginia", "Wisconsin", "Wyoming"], "🇺🇸", 0],
  UY: ["Uruguay", "UY", "598", "+...-.-...-..-..", "Departments", ["Artigas", "Canelones", "Cerro Largo", "Colonia", "Durazno", "Flores", "Florida", "Lavalleja", "Maldonado", "Montevideo", "Paysandú", "Río Negro", "Rivera", "Rocha", "Salto", "San José", "Soriano", "Tacuarembó", "Treinta y Tres"], "🇺🇾"] as ["Uruguay", "UY", "598", "+...-.-...-..-..", "Departments", ["Artigas", "Canelones", "Cerro Largo", "Colonia", "Durazno", "Flores", "Florida", "Lavalleja", "Maldonado", "Montevideo", "Paysandú", "Río Negro", "Rivera", "Rocha", "Salto", "San José", "Soriano", "Tacuarembó", "Treinta y Tres"], "🇺🇾"],
  UZ: ["Uzbekistan (Oʻzbekiston)", "UZ", "998", "+...-..-...-....", "Regions", ["Andijan", "Bukhara", "Fergana", "Jizzakh", "Karakalpakstan", "Namangan", "Navoiy", "Qashqadaryo", "Samarqand", "Sirdaryo", "Surxondaryo", "Tashkent", "Tashkent City", "Xorazm"], "🇺🇿"] as ["Uzbekistan (Oʻzbekiston)", "UZ", "998", "+...-..-...-....", "Regions", ["Andijan", "Bukhara", "Fergana", "Jizzakh", "Karakalpakstan", "Namangan", "Navoiy", "Qashqadaryo", "Samarqand", "Sirdaryo", "Surxondaryo", "Tashkent", "Tashkent City", "Xorazm"], "🇺🇿"],
  VA: ["Vatican City (Città del Vaticano)", "VA", "39", "+.. .. .... ....", "🇻🇦", 1] as ["Vatican City (Città del Vaticano)", "VA", "39", "+.. .. .... ....", "🇻🇦", 1],
  VC: ["Saint Vincent and the Grenadines", "VC", "1784", "+.(...)...-....", "Parishes", ["Charlotte", "Grenadines", "Saint Andrew", "Saint David", "Saint George", "Saint Patrick"], "🇻🇨"] as ["Saint Vincent and the Grenadines", "VC", "1784", "+.(...)...-....", "Parishes", ["Charlotte", "Grenadines", "Saint Andrew", "Saint David", "Saint George", "Saint Patrick"], "🇻🇨"],
  VE: ["Venezuela", "VE", "58", "+..(...)...-....", "States", ["Amazonas", "Anzoátegui", "Apure", "Aragua", "Barinas", "Bolívar", "Carabobo", "Cojedes", "Delta Amacuro", "Falcón", "Guárico", "Lara", "Mérida", "Miranda", "Monagas", "Nueva Esparta", "Portuguesa", "Sucre", "Táchira", "Trujillo", "Vargas", "Yaracuy", "Zulia"], "🇻🇪"] as ["Venezuela", "VE", "58", "+..(...)...-....", "States", ["Amazonas", "Anzoátegui", "Apure", "Aragua", "Barinas", "Bolívar", "Carabobo", "Cojedes", "Delta Amacuro", "Falcón", "Guárico", "Lara", "Mérida", "Miranda", "Monagas", "Nueva Esparta", "Portuguesa", "Sucre", "Táchira", "Trujillo", "Vargas", "Yaracuy", "Zulia"], "🇻🇪"],
  VG: ["British Virgin Islands", "VG", "1284", "+.(...)...-....", "Districts", ["Tortola", "Virgin Gorda", "Anegada", "Jost Van Dyke"], "🇻🇬"] as ["British Virgin Islands", "VG", "1284", "+.(...)...-....", "Districts", ["Tortola", "Virgin Gorda", "Anegada", "Jost Van Dyke"], "🇻🇬"],
  VI: ["U.S. Virgin Islands", "VI", "1340", "+.(...)...-....", "Districts", ["Saint Croix", "Saint John", "Saint Thomas"], "🇻🇮"] as ["U.S. Virgin Islands", "VI", "1340", "+.(...)...-....", "Districts", ["Saint Croix", "Saint John", "Saint Thomas"], "🇻🇮"],
  VN: ["Vietnam (Việt Nam)", "VN", "84", "+..-..-....-...", "Regions", ["Hanoi", "Ho Chi Minh City", "Da Nang", "Hai Phong", "Can Tho", "Bien Hoa", "Hue", "Nha Trang", "Buon Ma Thuot", "Quy Nhon", "Vung Tau", "Nam Dinh", "Phan Thiet", "Long Xuyen", "Ha Long", "Thai Nguyen", "Thanh Hoa", "Rach Gia", "Cam Ranh", "Vinh", "My Tho", "Da Lat", "Bac Lieu", "Bien Hoa"], "🇻🇳"] as ["Vietnam (Việt Nam)", "VN", "84", "+..-..-....-...", "Regions", ["Hanoi", "Ho Chi Minh City", "Da Nang", "Hai Phong", "Can Tho", "Bien Hoa", "Hue", "Nha Trang", "Buon Ma Thuot", "Quy Nhon", "Vung Tau", "Nam Dinh", "Phan Thiet", "Long Xuyen", "Ha Long", "Thai Nguyen", "Thanh Hoa", "Rach Gia", "Cam Ranh", "Vinh", "My Tho", "Da Lat", "Bac Lieu", "Bien Hoa"], "🇻🇳"],
  VU: ["Vanuatu", "VU", "678", "+...-.....", "Provinces", ["Malampa", "Penama", "Sanma", "Shefa", "Tafea", "Torba"], "🇻🇺"] as ["Vanuatu", "VU", "678", "+...-.....", "Provinces", ["Malampa", "Penama", "Sanma", "Shefa", "Tafea", "Torba"], "🇻🇺"],
  WF: ["Wallis and Futuna", "WF", "681", "+...-..-....", "Kingdoms", ["Uvea", "Sigave", "Alo"], "🇼🇫"] as ["Wallis and Futuna", "WF", "681", "+...-..-....", "Kingdoms", ["Uvea", "Sigave", "Alo"], "🇼🇫"],
  WS: ["Samoa", "WS", "685", "+...-..-....", "Districts", ["A'ana", "Aiga-i-le-Tai", "Atua", "Fa'asaleleaga", "Gaga'emauga", "Gaga'ifomauga", "Palauli", "Satupa'itea", "Tuamasaga", "Va'a-o-Fonoti", "Vaisigano"], "🇼🇸"] as ["Samoa", "WS", "685", "+...-..-....", "Districts", ["A'ana", "Aiga-i-le-Tai", "Atua", "Fa'asaleleaga", "Gaga'emauga", "Gaga'ifomauga", "Palauli", "Satupa'itea", "Tuamasaga", "Va'a-o-Fonoti", "Vaisigano"], "🇼🇸"],
  XK: ["Kosovo", "XK", "383", "", "Districts", ["District of Pristina", "District of Mitrovica", "District of Peja", "District of Prizren", "District of Gjilan", "District of Ferizaj"], "🇽🇰"] as ["Kosovo", "XK", "383", "", "Districts", ["District of Pristina", "District of Mitrovica", "District of Peja", "District of Prizren", "District of Gjilan", "District of Ferizaj"], "🇽🇰"],
  YE: ["Yemen (‫اليمن‬‎)", "YE", "967", "+...-.-...-...", "Governorates", ["Sana'a", "Aden", "Taiz", "Al Hudaydah", "Ibb", "Dhamar", "Al Mukalla", "Hajjah", "Amran", "Saada", "Saywun", "Zinjibar", "Al Bayda", "Lahij", "Marib", "Al Ghaydah", "Al Mahwit", "Al Hazm", "Ataq", "Al Jawf", "Sadah", "Shabwah", "Al Dhalea", "Rida", "Al Mahrah"], "🇾🇪"] as ["Yemen (‫اليمن‬‎)", "YE", "967", "+...-.-...-...", "Governorates", ["Sana'a", "Aden", "Taiz", "Al Hudaydah", "Ibb", "Dhamar", "Al Mukalla", "Hajjah", "Amran", "Saada", "Saywun", "Zinjibar", "Al Bayda", "Lahij", "Marib", "Al Ghaydah", "Al Mahwit", "Al Hazm", "Ataq", "Al Jawf", "Sadah", "Shabwah", "Al Dhalea", "Rida", "Al Mahrah"], "🇾🇪"],
  YT: ["Mayotte", "YT", "262", "", ["Cantons", "Communes"], { "Cantons": ["Acoua", "Bandraboua", "Bandrélé", "Bouéni", "Chiconi", "Chirongui", "Dembeni", "Dzaoudzi", "Kani-Kéli", "Koungou", "Mamoudzou-1", "Mamoudzou-2", "Mamoudzou-3", "Mamoudzou-4", "Mtsamboro", "M'Tsangamouji", "Ouangani", "Pamandzi", "Sada", "Tsingoni"], "Communes": ["Acoua", "Bandraboua", "Bandrélé", "Bouéni", "Chiconi", "Chirongui", "Dembeni", "Dzaoudzi", "Kani-Kéli", "Koungou", "Mamoudzou", "Mtsamboro", "M'Tsangamouji", "Ouangani", "Pamandzi", "Sada", "Tsingoni"] }, "🇾🇹"] as ["Mayotte", "YT", "262", "", ["Cantons", "Communes"], { "Cantons": ["Acoua", "Bandraboua", "Bandrélé", "Bouéni", "Chiconi", "Chirongui", "Dembeni", "Dzaoudzi", "Kani-Kéli", "Koungou", "Mamoudzou-1", "Mamoudzou-2", "Mamoudzou-3", "Mamoudzou-4", "Mtsamboro", "M'Tsangamouji", "Ouangani", "Pamandzi", "Sada", "Tsingoni"], "Communes": ["Acoua", "Bandraboua", "Bandrélé", "Bouéni", "Chiconi", "Chirongui", "Dembeni", "Dzaoudzi", "Kani-Kéli", "Koungou", "Mamoudzou", "Mtsamboro", "M'Tsangamouji", "Ouangani", "Pamandzi", "Sada", "Tsingoni"] }, "🇾🇹"],
  ZA: ["South Africa", "ZA", "27", "+..-..-...-....", "Provinces", ["Eastern Cape", "Free State", "Gauteng", "KwaZulu-Natal", "Limpopo", "Mpumalanga", "North West", "Northern Cape", "Western Cape"], "🇿🇦"] as ["South Africa", "ZA", "27", "+..-..-...-....", "Provinces", ["Eastern Cape", "Free State", "Gauteng", "KwaZulu-Natal", "Limpopo", "Mpumalanga", "North West", "Northern Cape", "Western Cape"], "🇿🇦"],
  ZM: ["Zambia", "ZM", "260", "+...-..-...-....", "Provinces", ["Lusaka", "Copperbelt", "Central", "Eastern", "Luapula", "Northern", "North-Western", "Southern", "Western"], "🇿🇲"] as ["Zambia", "ZM", "260", "+...-..-...-....", "Provinces", ["Lusaka", "Copperbelt", "Central", "Eastern", "Luapula", "Northern", "North-Western", "Southern", "Western"], "🇿🇲"],
  ZW: ["Zimbabwe", "ZW", "263", "+...-.-......", "Provinces", ["Harare", "Bulawayo", "Manicaland", "Mashonaland Central", "Mashonaland East", "Mashonaland West", "Masvingo", "Matabeleland North", "Matabeleland South", "Midlands"], "🇿🇼"] as ["Zimbabwe", "ZW", "263", "+...-.-......", "Provinces", ["Harare", "Bulawayo", "Manicaland", "Mashonaland Central", "Mashonaland East", "Mashonaland West", "Masvingo", "Matabeleland North", "Matabeleland South", "Midlands"], "🇿🇼"],
};
export type AllCountries = typeof allCountries;

// allCountries = {
//   ...allCountries,
//   [Symbol.iterator]: function* () {
//     for (let key of regionCodes[Symbol.iterator]()) {
//       yield allCountries[key];
//     }
//   }
// } as AllCountries;
type RegionCodeIterator = () => Generator<RegionCode, void, unknown>;
type CountriesIterator = () => Generator<Country<RegionCode>, void, unknown>;
type IteratorCountries = () => Generator<[RegionCode, Countries[RegionCode]], void, unknown>;
/**
 * @type RegionCode - ISO 3166-1 alpha-2 country codes
 * @see https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2
 */
/**
 * @type {RegionCodes} - ISO 3166-1 alpha-2 country codes
 */
export type RegionCodes = ["AD", "AE", "AF", "AG", "AI", "AL", "AM", "AO", "AQ", "AR", "AS", "AT", "AU", "AW", "AX", "AZ", "BA", "BB", "BD", "BE", "BF", "BG", "BH", "BI", "BJ", "BL", "BM", "BN", "BO", "BQ", "BR", "BS", "BT", "BV", "BW", "BY", "BZ", "CA", "CC", "CD", "CF", "CG", "CI", "CK", "CL", "CM", "CN", "CO", "CR", "CU", "CV", "CW", "CX", "CY", "CZ", "DE", "DJ", "DK", "DM", "DO", "DZ", "EC", "EE", "EG", "EH", "ER", "ET", "FI", "FJ", "FK", "FM", "FO", "FR", "GA", "GB", "GD", "GE", "GF", "GG", "GH", "GI", "GL", "GM", "GN", "GP", "GQ", "GR", "GS", "GT", "GU", "GW", "GY", "HK", "HM", "HN", "HR", "HT", "HU", "ID", "IE", "IL", "IM", "IN", "IO", "IQ", "IR", "IS", "IT", "JE", "JM", "JO", "JP", "KE", "KG", "KH", "KI", "KM", "KN", "KP", "KW", "KY", "KZ", "LA", "LB", "LC", "LI", "LR", "LS", "LT", "LU", "LV", "LY", "MA", "MC", "MD", "ME", "MF", "MG", "MH", "MK", "ML", "MM", "MN", "MO", "MP", "MQ", "MR", "MS", "MT", "MU", "MV", "MW", "MX", "MY", "MZ", "NA", "NC", "NE", "NF", "NG", "NI", "NL", "NO", "NP", "NR", "NU", "NZ", "OM", "PA", "PE", "PF", "PG", "PH", "PK", "PL", "PM", "PN", "PR", "PS", "PT", "PW", "PY", "QA", "RE", "RO", "RS", "RU", "RW", "SA", "SB", "SC", "SG", "SI", "SK", "SL", "SM", "SN", "SO", "ST", "SV", "SX", "TC", "TD", "TF", "TG", "TH", "TK", "TL", "TM", "TN", "TO", "TR", "TT", "TV", "UA", "UG", "UM", "US", "UY", "UZ", "VA", "VC", "VE", "VG", "VI", "VN", "VU", "WF", "WS", "XK", "YE", "YT", "ZA", "ZM", "ZW"];

export const regionCodes = Object.keys(allCountries) as RegionCodes;
export type RegionCode = RegionCodes[number] extends keyof typeof allCountries ? RegionCodes[number] : never;
export type CountryFlags = ["🇦🇫", "🇦🇽", "🇦🇱", "🇩🇿", "🇦🇸", "🇦🇩", "🇦🇴", "🇦🇮", "🇦🇶", "🇦🇬", "🇦🇷", "🇦🇲", "🇦🇼", "🇦🇺", "🇦🇹", "🇦🇿", "🇧🇸", "🇧🇭", "🇧🇩", "🇧🇧", "🇧🇾", "🇧🇪", "🇧🇿", "🇧🇯", "🇧🇲", "🇧🇹", "🇧🇴", "🇧🇦", "🇧🇼", "🇧🇻", "🇨🇦", "🇧🇷", "🇮🇴", "🇻🇬", "🇧🇳", "🇧🇬", "🇧🇫", "🇧🇮", "🇰🇭", "🇨🇲", "🇹🇩", "🇨🇱", "🇨🇳", "🇨🇻", "🇧🇶", "🇰🇾", "🇨🇫", "🇨🇽", "🇨🇨", "🇨🇴", "🇰🇲", "🇨🇩", "🇨🇬", "🇨🇰", "🇨🇷", "🇨🇮", "🇭🇷", "🇨🇺", "🇨🇼", "🇨🇾", "🇨🇿", "🇩🇰", "🇩🇯", "🇩🇲", "🇩🇴", "🇪🇨", "🇪🇬", "🇸🇻", "🇬🇶", "🇪🇷", "🇪🇪", "🇪🇹", "🇫🇰", "🇫🇴", "🇫🇯", "🇫🇮", "🇫🇷", "🇬🇫", "🇵🇫", "🇹🇫", "🇬🇦", "🇬🇲", "🇬🇪", "🇩🇪", "🇬🇭", "🇬🇮", "🇬🇷", "🇬🇱", "🇬🇩", "🇬🇵", "🇬🇺", "🇬🇹", "🇬🇬", "🇬🇳", "🇬🇼", "🇬🇾", "🇭🇹", "🇭🇲", "🇭🇳", "🇰🇿", "🇮🇷", "🇮🇶", "🇮🇪", "🇮🇲", "🇮🇱", "🇭🇰", "🇭🇺", "🇮🇸", "🇮🇳", "🇮🇩", "🇮🇹", "🇯🇲", "🇯🇵", "🇯🇪", "🇯🇴", "🇰🇪", "🇰🇮", "🇽🇰", "🇰🇼", "🇰🇬", "🇱🇦", "🇱🇻", "🇱🇧", "🇱🇸", "🇱🇷", "🇱🇾", "🇱🇮", "🇱🇹", "🇱🇺", "🇲🇴", "🇲🇰", "🇲🇬", "🇲🇼", "🇲🇾", "🇲🇻", "🇲🇱", "🇲🇹", "🇲🇭", "🇲🇵", "🇳🇴", "🇵🇰", "🇲🇪", "🇲🇶", "🇲🇷", "🇲🇺", "🇾🇹", "🇲🇽", "🇫🇲", "🇲🇩", "🇲🇨", "🇲🇳", "🇰🇵", "🇴🇲", "🇲🇸", "🇲🇦", "🇲🇿", "🇲🇲", "🇳🇦", "🇳🇷", "🇳🇵", "🇳🇱", "🇳🇨", "🇳🇿", "🇳🇮", "🇳🇪", "🇳🇬", "🇳🇺", "🇳🇫", "🇵🇼", "🇵🇸", "🇵🇦", "🇵🇬", "🇵🇾", "🇷🇼", "🇧🇱", "🇰🇳", "🇵🇪", "🇵🇭", "🇵🇳", "🇷🇺", "🇶🇦", "🇷🇪", "🇵🇱", "🇵🇹", "🇵🇷", "🇷🇴", "🇱🇨", "🇲🇫", "🇵🇲", "🇻🇨", "🇼🇸", "🇸🇲", "🇸🇹", "🇸🇦", "🇸🇳", "🇷🇸", "🇸🇨", "🇸🇱", "🇸🇬", "🇸🇽", "🇸🇰", "🇸🇮", "🇸🇧", "🇸🇴", "🇿🇦", "🇬🇸", "🇹🇬", "🇹🇰", "🇹🇳", "🇹🇭", "🇹🇱", "🇹🇴", "🇹🇹", "🇹🇷", "🇹🇲", "🇹🇨", "🇹🇻", "🇻🇮", "🇺🇬", "🇺🇦", "🇦🇪", "🇬🇧", "🇺🇸", "🇺🇲", "🇺🇾", "🇺🇿", "🇻🇺", "🇻🇦", "🇻🇪", "🇻🇳", "🇼🇫", "🇪🇭", "🇾🇪", "🇿🇲", "🇿🇼"];
export type CountryFlag = CountryFlags[number];
function* getRC() { for (let key of regionCodes) yield key as RegionCode };
export const flags: CountryFlags = (() => { for (let value of getRC()) return Array.of<CountryFlag>(allCountries[value][6] as CountryFlag || allCountries[value][4] as CountryFlag) })() as CountryFlags;

function* getRegionCode(index?: number) {
  for (let key of regionCodes) yield key as RegionCode;
  for (let key of regionCodes) {
    regionCodes.indexOf(key) === index ? index = 0 : index++;
    while (true) yield key as RegionCode;
    if (key === undefined || null) return;
  }
}
function* indexer() {
  for (let key of regionCodes) {
    let index = 0;
    for (let i = 0; i < regionCodes.length; i++) {
      regionCodes.indexOf(key) === index ? index = 0 : index++;
      index = regionCodes.indexOf(key);
      yield [index, regionCodes[index]] as [number, RegionCode];
    }
  }
}

/**
 * @type CountryArray<R extends RegionCode> - All countries data in array format. This is the raw data used
 */
type CountryArray<R extends RegionCode> = AllCountries[R extends keyof AllCountries ? R : never];
type GetCountryArray = <R extends RegionCode>(regionCode: R) => CountryArray<R>;
type RegionIdentifier = `${string}${string}`;

/**
 * @type AllCountryData - All countries data in array format. This is the raw data used
 * to generate the `allCountries` object. It can be used to get the data as an array.
 */
type AllCountryData<R extends RegionCode> = CountryArray<R> extends ([infer N extends CountryArray<R>[0], R extends CountryArray<R>[1] ? R : never, infer DC extends CountryArray<R>[2], infer F extends CountryArray<R>[3], infer ZT extends CountryArray<R>[4], infer Z extends CountryArray<R>[5], infer CF extends CountryArray<R>[6], infer DP extends CountryArray<R>[7], infer AC extends CountryArray<R>[8]]) | ([infer N extends CountryArray<R>[0], R extends CountryArray<R>[1] ? R : never, infer DC extends CountryArray<R>[2], infer F extends CountryArray<R>[3], infer ZT extends CountryArray<R>[4], infer Z extends CountryArray<R>[5], infer CF extends CountryArray<R>[6], infer DP extends CountryArray<R>[7]]) | ([infer N extends CountryArray<R>[0], R extends CountryArray<R>[1] ? R : never, infer DC extends CountryArray<R>[2], infer F extends CountryArray<R>[3], infer ZT extends CountryArray<R>[4], infer Z extends CountryArray<R>[5], infer CF extends CountryArray<R>[6]]) | ([infer N extends CountryArray<R>[0], R extends CountryArray<R>[1] ? R : never, infer DC extends CountryArray<R>[2], infer F extends CountryArray<R>[3], infer CF4 extends CountryArray<R>[4], 1]) | ([infer N extends CountryArray<R>[0], R extends CountryArray<R>[1] ? R : never, infer DC extends CountryArray<R>[2], infer F extends CountryArray<R>[3], infer CF4 extends CountryArray<R>[4]]) ? CountryArray<R>['length'] extends 9 ? [N, R, DC, F, ZT, Z, CF, DP, AC] : CountryArray<R>['length'] extends 8 ? [N, R, DC, F, ZT, Z, CF, DP] : CountryArray<R>['length'] extends 7 ? [N, R, DC, F, ZT, Z, CF] : CountryArray<R>['length'] extends 6 ? [N, R, DC, F, CF4, 1] : CountryArray<R>['length'] extends 5 ? [N, R, DC, F, CF4] : never : never;
//   [CountryName, R, DialaCode, PhoneNumberFormat | "", ZoneType, Zones, CountryFlag, DialPriority] |
//   [CountryName, R, DialCode, PhoneNumberFormat | "", ZoneType, Zones, CountryFlag] |
//   [CountryName, R, DialCode, PhoneNumberFormat | "", CountryFlag, 1] |
//   [CountryName, R, DialCode, PhoneNumberFormat | "", CountryFlag]
// );
type tested = AllCountryData<'PS'>
export const getCountryArray = <R extends RegionCode, C extends AllCountries[keyof AllCountries]>(regionCode?: R) => {
  let result = [] as [AllCountries['AD'], ...AllCountries[AllCountriesKey][]];
  for (let key of allCountries) {
    result = [...result, allCountries[key]] as [...AllCountries[typeof Symbol.iterator][]]['length'] extends 235 ? [...AllCountries[typeof Symbol.iterator][]] : never;
  }
  function* getValue() {
    for (let key of regionCodes) {
      let num = Object.values(allCountries).indexOf(allCountries[key]);
      yield [num, key, allCountries[key]] as const;
    }
  }

  const ln = [] as AllCountries[RegionCode];
  for (let key of getRC()) {
    ln.push(allCountries[key]);
  }
  const tupleCountry = <T extends [...any[]]>(...args: T) => args;
  const val = tupleCountry(ln);
  if (regionCode && typeof regionCode === "string" && !Array.isArray(regionCode)) {
    if (regionCodes.some((key): key is R extends RegionCode ? R : never => key === regionCode)) {
      return allCountries[regionCode] as AllCountryData<R>;
    } else {
      throw new Error(`Invalid region code ${regionCode}`);
    }
  } else {
    for (let key of getValue()) {
      if (allCountries[key[1]] === key[2]) result = [...result, key[2]];
    }
    // result.push(Object.values(allCountries[getValue()]));
    return result;
  }
}
const valsss = getCountryArray('US');
export type CountriesPrototype = {
  [Key in RegionCode]: Country<Key>;
} & {
  name: 'Countries';
  prototype: Countries;
  getOwnPropertySymbols: () => typeof Symbol.iterator;
  getOwnPropertyNames: () => RegionCode[];
  getPrototypeOf: () => CountriesPrototype;
  setPrototypeOf: () => CountriesPrototype;
  isExtensible: () => boolean;
  isFrozen: () => boolean;
  isSealed: () => boolean;
  keys: () => RegionCode[];
  values: <R extends RegionCode>() => Country<R>[];
  entries: () => [RegionCode, Country<RegionCode>][];
  fromEntries: <R extends RegionCode>() => Record<R, Country<R>>;
  getOwnPropertyDescriptor: () => PropertyDescriptorMap;
  getOwnPropertyDescriptors: () => PropertyDescriptorMap;
  assign: () => Countries;
  defineProperties: () => Countries;
  defineProperty: () => Countries;
  preventExtensions: () => Countries;
  seal: () => Countries;
  freeze: () => Countries;
  create: () => Countries;
  is: () => boolean;
  hasOwnProperty: () => boolean;
  propertyIsEnumerable: () => boolean;
  toLocaleString: () => string;
  toString: () => string;
  valueOf: () => Countries;
};
/**
 * @var {CountriesPrototype} countriesPrototype - Country data - key is region code
 * @see {@link allCountries The allCountries variable} All countries data
 */
export const countriesPrototype = {} as CountriesPrototype;
regionCodes.forEach((r) => {//@ts-expect-error
  countriesPrototype[r] = {
    name: allCountries[r][0] as CountryArray<typeof r>[0],
    regionCode: r as RegionCode,
    dialCode: allCountries[r][2] as DialCode,
    flag: (allCountries[r][6] ? allCountries[r][6] : allCountries[r][4]) as CountryFlag,
    priority: (allCountries[r][7] ? allCountries[r][7] : r === 'VA' ? 1 : 0) as DialPriority,
    ...(allCountries[r][3] !== undefined && allCountries[r][3] !== "" && { format: allCountries[r][3] }),
    ...(allCountries[r][5] !== undefined && { zones: allCountries[r][5] }),
    ...(allCountries[r][4] !== undefined && isZoneType(allCountries[r][4]) && { zoneTypes: allCountries[r][4] }),
    ...(allCountries[r][8] !== undefined && { hasAreaCodes: true }),
    ...(allCountries[r][8] !== undefined && { areaCodes: allCountries[r][8] }),
    ...(nameRegex.test(allCountries[r][0]) && { foreignName: allCountries[r][0].replace(nameRegex, '$2') }),
    ...(nameRegex.test(allCountries[r][0]) && { localName: allCountries[r][0].replace(nameRegex, '$1') })
  } as Country<typeof r>;
});
countriesPrototype.prototype = countriesPrototype as Countries;
interface Countries extends CountriesPrototype {
  prototype: Countries;
  [Symbol.toStringTag]: "Countries";
  [Symbol.toPrimitive](hint: 'string'): string;
  [Symbol.toPrimitive](hint: 'default'): string;
  [Symbol.toPrimitive](hint: 'number', regionCode: RegionCode): number;
  [Symbol.iterator]: () => Generator<RegionCode, void, unknown>;
  <R extends RegionCode>(regionCode: R): Country<R>;
}
Object.setPrototypeOf(Countries, countriesPrototype);
const Countries = countriesPrototype.prototype as Countries;
Countries.prototype[Symbol.iterator] = getRC;
//Countries = Object.assign(Countries, countriesPrototype, {
Countries[Symbol.toStringTag] = "Countries";
Countries[Symbol.toPrimitive] = function (hint: 'string' | 'default' | 'number', regionCode?: RegionCode) {
  if (hint === 'number') {
    return Object.keys(Countries).indexOf(regionCode);
  }
  if (hint === 'string' || hint === 'default') {
    return "[object Countries]"
  }
};
Countries[Symbol.iterator] = function* () {
  for (let regionCode of regionCodes) {
    yield regionCode;
  }
},
  Countries.prototype = <R extends RegionCode>(regionCode: R): Country<R> => {
    if (regionCodes.some(key => key === regionCode)) {
      return Countries[regionCode] as Country<R>;
    } else {
      throw new Error(`Invalid region code ${regionCode}`);
    }
  };

type C<R extends RegionCode> = HasProperty<R, keyof CountryPrototype<R>>;
type Testes = Country<'AF'>;
/**
 * @type CountryData  allCountries - All countries data
 */
type HasProperty<R extends RegionCode, K extends keyof CountryPrototype<R>> = CountryPrototype<R>[K] extends CountryArray<R>[number] ? CountryPrototype<R>[K] : never;
type Country<R extends RegionCode> = {
  [P in keyof CountryPrototype<R> as HasProperty<R, P> extends never ? never : P]: HasProperty<R, P>;
};
type val = Country<'US'>;

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
  [Symbol.toPrimitive](hint: 'number'): number;
  [Symbol.toPrimitive](hint: 'string'): string;
};
const ignore = ["🇨🇽", "🇨🇨", "🇮🇴", "🇧🇻", "🇦🇼", "🇦🇶", "🇭🇲", "🇵🇳", "🇳🇫", "🇬🇸", "🇻🇦"];

export const handleZones = <R extends RegionCode, CA extends CountryArray<R>[5]>(zones: CA): CA extends Zones ? CA : never => {
  if (isZone(zones)) {
    return zones;
  } else {
    throw new Error(`Invalid zones: ${zones}`);
  }
}
export function handleZoneTypes<R extends RegionCode, CA extends CountryArray<R>[4]>(zoneType: CA): (CA extends ZoneType ? CA : never) {

  if (!isFlag(zoneType) && isZoneType(zoneType)) {
    return zoneType;
  } else {
    throw new Error(`Invalid zone type: ${zoneType}`);
  }
  //if (zoneType === undefined) throw new Error(`Zone Type not provided!`);
  // if (isFlag(zoneTypes)) throw new Error(`Invalid zone type: ${zoneTypes}`);
  // if (!isZoneType(zoneTypes)) throw new Error(`Invalid zone type: ${zoneTypes}`);
  // return zoneTypes;
}
export function isZoneType<R extends RegionCode, CA extends CountryArray<R>[4]>(zoneType: CA): zoneType is CA extends ZoneType ? CA : never {
  return Array.isArray(zoneType) || !isFlag(zoneType) && zoneType !== undefined;
}
type ZoneArray = [
  ["States", "Territories"],
  ["Parishes", "Municipalities"],
  ["Territories", "Provinces"],
  ["Provinces", "Municipalities", "Autonomous Regions", "Special Administrative Regions"],
  ["Islands", "Districts"],
  ["Arrondissements", "Communes"],
  ["Communes", "Subdivisions"],
  ["Arrondissements", "Cantons", "Communes"],
  ["Parishes", "Sheadings"],
  ["Provinces", "Territories"],
  ["Cantons", "Communes"],
  ["States", "Regions"],
  ["Provinces", "Communes"],
  ["Inner Islands", "Outer Islands"]
];
const zoneArray: ZoneArray;

export const isZone = <R extends RegionCode, CA extends AllCountries[R][5]>(zone: CA): zone is CA extends Zones ? CA : never => {
  if (zone === 1) return false;
  if (zone === undefined) return false;
  if (typeof zone === "object" && !Array.isArray(zone)) {
    return Object.values(zone as ObjectZones).every((value) => typeof value === "string" && value.length > 0);
  } else if (Array.isArray(zone)) {
    return (zone as ArrayOfZones).every((value) => typeof value === "string" && value.length > 0);
  } else {
    return Object.values(zone as ObjectZones).every((value) => Array.isArray(value));
  }
}
export const isAreaCode = <R extends RegionCode, CA extends CountryArray<R>[8]>(areaCode: CA): areaCode is CA extends AreaCodes ? CA : never => {
  return Array.isArray(areaCode);
}
export const isPhoneNumberFormat = <R extends RegionCode, CA extends CountryArray<R>[3]>(format: CA): format is CA extends PhoneNumberFormat ? CA : never => {
  return typeof format === "string" && format.length > 0;
}
export function isDialPriority<R extends RegionCode, CA extends CountryArray<R>[7] | CountryArray<R>[5]>(priority: CA): priority is CA extends DialPriority ? CA : never {
  return priority !== undefined && typeof priority === "number" && priority === 0 || priority === 1 || priority === 2 || priority === 3;
}
export function handleDialPriority<R extends RegionCode, CA extends CountryArray<R>[7] | CountryArray<R>[5] | undefined>(...priority: CA[]): CA extends DialPriority ? CA : 0 {
  let result: DialPriority;
  for (let p of priority) {
    if (isDialPriority(p)) {
      return result = p as CA extends DialPriority ? CA : 0;
    } else {
      if (p === undefined) {
        return result = 0 as CA extends DialPriority ? CA : 0;
      } else {
        throw new Error(`Invalid dial priority: ${priority}`);
      }
    }
  }//@ts-ignore
  return result as CA extends DialPriority ? CA : 0;
}
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
const nameRegex = /(.*)\s\((.*)\)/g;
function isMultiName<T extends CountryArray<R>[0], R extends RegionCode>(name: unknown): name is T extends MultiName<T> ? MultiName<T> : never {
  return typeof name === 'string' && nameRegex.test(name);
}
// function isLocalName<T extends CountryArray<R>[0] | MultiName<CountryArray<R>[0]>, R extends RegionCode, OF extends 'Local'>(name: T): name is T extends Local<T> ? T : never {
//   let local = name.replace(nameRegex, '$1') as ForeignLocal<T, 'Local'>;
//   return typeof local === 'string';
// }
function isCountryName<C extends CountryName, R extends RegionCode>(name: unknown, region: R): name is C {
  return name === allCountries[region][0];
}


function isForm<R extends RegionCode, C extends CountryArray<R>[0], OF extends 'Foreign' | 'Local' = 'Local'>(region: R, form: OF): ForeignLocal<C, OF> {
  if (form === 'Foreign') {
    return allCountries[region][0].replace(nameRegex, '$2') as ForeignLocal<C, OF>;
  } else if (form === 'Local') {
    return allCountries[region][0].replace(nameRegex, '$1') as ForeignLocal<C, OF>;
  } else {
    throw new Error(`Invalid form: ${form}`);
  }
}
const valse = isForm("AF", 'Local');
/**
 * @function isRegionCode - Check if a string is af valid region code
 * @param {string} code - The string to check
 */
export function isRegionCode<R>(code: R): code is R extends RegionCode ? R : never {
  return typeof code === "string" && code.length === 2 && regionCodes.some((value) => value === code);
}
/**
 * @function isFlag - Check if a string is a valid Flag
 * @param {string} flag - The string to check
 */
export function isFlag<T extends CountryArray<R>[6] | CountryArray<R>[4], R extends RegionCode>(flag: T): flag is T extends CountryFlag ? T : never {
  return flags.some((value): value is T extends CountryFlag ? T : never => value === flag);
}

export function handleFlag<T extends CountryArray<R>[6], R extends RegionCode>(flag: T) {
  if (isFlag(flag)) {
    return flag;
  } else {
    throw new Error(`Invalid flag: ${flag}`);
  }
};
export function getCountry<R extends RegionCode>(regionCode: R): Country<R> {
  return Countries[regionCode];
}
const CountryUS = getCountry("US");
console.log(CountryUS);
// const handleMultiName = <T extends CountryArray<R>[0], R extends RegionCode, E extends 'First' | 'Rest' | 'Both' = 'Both'>(name: T, form: E) => {
//   const msg = `Invalid name: ${name}` as const;
//   let first: FormOf<T, 'First'>;
//   let rest: FormOf<T, 'Rest'>;
//   return (() => {
//     if (!isMultiName(name)) {
//       return Util.notify<typeof msg>(msg) as Util.DevNote;
//     } else {
//       return form === 'First' ? `${name.replace(nameRegex, '$1') as FormOf<T, 'First'>}` :
//         form === 'Rest' ? `${name.replace(nameRegex, '$2') as FormOf<T, 'Rest'>}` :
//           form === 'Both' ? `${name.replace(nameRegex, '$1')}` + ' ' + `${name.replace(nameRegex, '$2')}` as `${FormOf<T, 'First'>} (${FormOf<T, 'Rest'>})` : null as never;
//     }
//   })() as T extends `${infer First} (${infer Rest})` ? (E extends 'Both' ? `${FormOf<T, 'First'>} (${FormOf<T, 'Rest'>})` : E extends 'First' ? `${FormOf<T, 'First'>}` : E extends 'Rest' ? `${FormOf<T, 'Rest'>}` : `${FormOf<T, 'First'>} (${FormOf<T, 'Rest'>})`) : Util.DevNote;
// }

//const ignoreList = ["🇨🇽", "🇨🇨", "🇮🇴", "🇧🇻", "🇦🇼", "🇦🇶", "🇭🇲", "🇵🇳", "🇳🇫", "🇬🇸", "🇻🇦", "🇦🇶", "🇦🇼"];
export type CountryName = AllCountries[keyof AllCountries][0];
export type DialCode = AllCountries[keyof AllCountries][2];
export type PhoneNumberFormat = Exclude<AllCountries[keyof AllCountries][3], "" | undefined>;
export type DialPriority = Exclude<AllCountries[keyof AllCountries][7], undefined>;
export type AreaCodes = Exclude<AllCountries[keyof AllCountries][8], undefined>;
export type Zones = Exclude<AllCountries[keyof AllCountries][5], undefined | 1>;
export type ArrayOfZones = Util.ArrayUnion<AllCountries[keyof AllCountries][5]>;
export type ObjectZones = Exclude<AllCountries[keyof AllCountries][5], ArrayOfZones | undefined | 1>;
export type ZoneType = Exclude<AllCountries[keyof AllCountries][4], CountryFlag>;
export type ZoneArray = Util.ArrayUnion<AllCountries[keyof AllCountries][4]>
export type SingleZone = Exclude<Exclude<AllCountries[keyof AllCountries][4], CountryFlag>, ZoneArray>;
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
  [Key in RegionCode]: AllCountries[Key];
}
/**
 * @var {AllCountryArrays} countryArray - All countries data individualized as each array
 */
export var countryArray = [] as unknown as typeof allCountries[keyof typeof allCountries] extends CountryArray<keyof typeof allCountries> ? [AllCountries[keyof AllCountries], ...AllCountries[keyof AllCountries][]] : never;
Object.values(allCountries).forEach((c) => countryArray.push(c));
export var allCountryCodes = {} as AllCountryCodes<RegionCode>;
export var iso2Lookup = {} as Iso2Lookup;
var addCountryCode = <RC extends RegionCode>(regionCode: RC, dialCode: DialCode | string, priority?: DialPriority) => {
  if (!(dialCode in allCountryCodes)) {
    allCountryCodes[dialCode] = [] as unknown as { [Key in DialPriority]: RegionCode };
  }
  var index = priority || 0 as DialPriority;
  allCountryCodes[dialCode][index] = regionCode;
};

// for (var i = 0; i < regionCodes.length; i++) {
//   // countries

//   var c = Object.values(allCountries)[i];
//   if (isRegionCode(c[1])) continue;
//   //@ts-ignore
//   countryData[c[1]] = {
//     name: c[0] as CountryName,
//     regionCode: c[1] as RegionCode,
//     dialCode: c[2] as DialCode,
//     priority: c[0] === "Vatican City (Città del Vaticano)" ? c[5] as DialPriority : c[7] as DialPriority || 0 as DialPriority,
//     flag: c[6] || c[4] as CountryArray<typeof c[1]>[6] extends CountryFlag ? CountryArray<typeof c[1]>[6] : CountryArray<typeof c[1]>[4] as CountryFlag,
//   } as Country<typeof c[1]>;


//   //@ts-ignore
//   allCountries[i] = {
//     name: c[0] as CountryName,
//     regionCode: c[1] as RegionCode,
//     dialCode: c[2] as DialCode,
//     priority: c[0] === "Vatican City (Città del Vaticano)" ? c[5] as DialPriority : c[7] as DialPriority || 0 as DialPriority,
//     flag: c[6] as CountryFlag || c[4] as CountryFlag
//   } as Country<typeof c[1]>;

//   // Flag = "🇨🇽" | "🇨🇨" | "🇮🇴" | "🇧🇻" | "🇦🇼" | "🇦🇶" | "🇭🇲" | "🇵🇳" | "🇳🇫"
//   // | "🇬🇸"
//   if (typeof c[5] !== 'number' && (typeof c[4] === 'string' || Array.isArray(c[4]))) {
//     if (typeof c[5] === 'object' || Array.isArray(c[5])) {
//       if (!isFlag(c[4]) && isZoneType(c[4])) {
//         countryData[c[1]].zoneTypes = c[4];
//         countryData[c[1]].zones = c[5];//@ts-ignore
//         allCountries[i].zoneTypes = c[4];//@ts-ignore
//         allCountries[i].zones = c[5];

//       }
//     }
//   }
//   if (nameRegex.test(c[0])) {
//     countryData[c[1]].foreignName = c[0].replace(nameRegex, '$2') as FormOf<CountryName, 'Rest'>;
//     countryData[c[1]].localName = c[0].replace(nameRegex, '$1') as FormOf<CountryName, 'First'>;
//     //@ts-ignore
//     allCountries[i].foreignName = c[0].replace(nameRegex, '$2') as FormOf<CountryName, 'Rest'>;
//     //@ts-ignore
//     allCountries[i].localName = c[0].replace(nameRegex, '$1') as FormOf<CountryName, 'First'>;
//   }
//   // format
//   if (c[3] && c[3] !== "" as never) {
//     countryData[c[1]].format = c[3];//@ts-ignore
//     allCountries[i].format = c[3];
//   }
//   // area codes
//   if (c[8]) {
//     countryData[c[1]].hasAreaCodes = true;
//     countryData[c[1]].areaCodes = c[8];//@ts-ignore
//     allCountries[i].hasAreaCodes = true;//@ts-ignore
//     allCountries[i].areaCodes = c[8];
//     for (var j = 0; j < c[8]!.length; j++) {
//       // full dial code is country code + dial code
//       var dialCode = c[2] + c[8][j];
//       addCountryCode(c[1], dialCode);
//     }
//   }

//   iso2Lookup[(allCountries[i] as unknown as Country).regionCode] = i;
//   // dial codes
//   addCountryCode(c[1], c[2], c[0] === "Vatican City (Città del Vaticano)" ? 1 : c[7] || 0);
// }
// Object.values(allCountries).forEach((country, i) => {
//   const regionCode = country[1] as RegionCode;
//   if (!isRegionCode(regionCode)) return;

//   const countryCodeData = {
//     name: country[0] as CountryName,
//     regionCode,
//     dialCode: country[2] as DialCode,
//     priority: country[0] === "Vatican City (Città del Vaticano)" ? 1 : country[7] || 0,
//     flag: country[6] as CountryFlag || country[4] as CountryFlag,
//   };

//   countryArray[regionCode] = country as AllCountries<typeof regionCode>[number];

//   if (country[8]) {
//     countryCodeData['hasAreaCodes'] = true;
//     countryCodeData['areaCodes'] = country[8];
//     country[8].forEach(areaCode => {
//       addCountryCode(regionCode, country[2] + areaCode);
//     });
//   }

//   iso2Lookup[regionCode] = i;
//   addCountryCode(regionCode, country[2], countryCodeData.priority);
// });
// console.log(allCountries);
// console.log(countryData);
console.log(countries);
