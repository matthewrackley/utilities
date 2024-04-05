import countries, { regionCodes } from '@countries/countries.ts';
import { type CountriesData, type RegionCode, type Country } from '@countries/countries.types.ts';
/**
 * @file phoneNumberInput.tsx
 * @description
 * @author Matthew Allen Rackley
 * @copyright [Matthew Rackley's Github](https://www.github.com/matthewrackley "Matthew Rackley on github.com")
 */
import { AsYouTypeFormatter } from 'google-libphonenumber';
import React, { useState } from 'react';
type CountryShortName = {
  [K in keyof CountriesData]: Country<K>['local'] extends undefined ? Country<K>['name'] : Exclude<Country<K>['local'], undefined>;
}
interface Props {
  regionCode?: RegionCode;
}
export const PhoneNumberInput: React.FC<Props> = (props) => {
  const [selectedCountry, setSelectedCountry] = useState(countries[props.regionCode || 'US']);
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleCountryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCountry(<R extends keyof CountriesData>() => {
      return countries[event.target.value as R];
    });
  };

  const handlePhoneNumberChange: React.HandleInput = (event) => {
    const inputDigits = event.target.value.replace(/\D/g, '');
    const formatter = new AsYouTypeFormatter(selectedCountry.regionCode);<
    formatter.clear();

    const formattedNumber = inputDigits.split('').reduce((acc, digit) => {
      return formatter.inputDigit(digit);
    }, '');

    setPhoneNumber(formattedNumber);
  };

  return (
    <div>
      <select value={ selectedCountry.regionCode } onChange={ handleCountryChange }>
        { regionCodes.map((r) => (
            <option key={ r } value={ r }>
            { countries[r].flag } { countries[r].local || countries[r].name } +{ countries[r].dialCode }
            </option>
          ))}
      </select>
      <input
        type="tel"
        value={phoneNumber}
        onChange={handlePhoneNumberChange}
        placeholder="Phone number"
      />
    </div>
  );
};

export default PhoneNumberInput;
