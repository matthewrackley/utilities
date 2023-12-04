/**
 * @file phoneNumberInput.tsx
 * @description
 * @author Matthew Allen Rackley
 * @copyright [Matthew Rackley's Github](https://www.github.com/matthewrackley "Matthew Rackley on github.com")
 */

import countryData from 'country-telephone-data';
import { AsYouTypeFormatter, RegionCode } from 'google-libphonenumber';
import React, { useState } from 'react';

import { CountryData } from '../../../namespaced/countries.ts';

const PhoneNumberInput = () => {
  const [selectedCountry, setSelectedCountry] = useState<keyof typeof CountryData>('US');
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleCountryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCountry(event.target.value as RegionCode);
  };

  const handlePhoneNumberChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const formatter = new AsYouTypeFormatter(selectedCountry);
    const formattedNumber = formatter.inputDigit(event.target.value);
    setPhoneNumber(formattedNumber);
  };

  return (
    <div>
      <select value={selectedCountry} onChange={handleCountryChange}>
        {countryData.allCountries.map((country) => (
          <option key={country.iso2} value={country.iso2 as RegionCode}>
            {country.name} ({country.dialCode})
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
