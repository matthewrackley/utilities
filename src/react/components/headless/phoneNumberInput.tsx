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
 * @file phoneNumberInput.tsx
 * @description
 * @author Matthew Allen Rackley
 * @copyright [Matthew Rackley's Github](https://www.github.com/matthewrackley "Matthew Rackley on github.com")
 */
import React, { useState } from 'react';
import { AsYouTypeFormatter } from 'google-libphonenumber';
import { Countries, regionCodes, type RegionCode } from '@countries/countries';
import useCountry from '@hooks/useCountry';

export interface Props {
  regionCode?: RegionCode;
  children?: React.ReactNode;
}
export const PhoneNumberInput: React.FC<Props> = (props = { regionCode: 'US' }) => {
  const [country, handleCountry] = useCountry(props.regionCode);
  const [phoneNumber, setPhoneNumber] = useState('');
  const handlePhoneNumberChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputDigits = event.target.value.replace(/\D/g, '');
    const formatter = new AsYouTypeFormatter(country.regionCode);
    formatter.clear();

    const formattedNumber = inputDigits.split('').reduce((acc, digit) => {
      return formatter.inputDigit(digit);
    }, '');

    setPhoneNumber(formattedNumber);
  };

  return (
    <div>
      <select value={ country.regionCode } key={ country.regionCode } onChange={ handleCountry }>
        { regionCodes.map((r) => (
            <option key={ r } value={ r }>
            { Countries(r).flag } +{ Countries(r).dialCode } | { Countries(r).local || Countries(r).name }
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
