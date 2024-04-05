/**
 * @file handlePhoneNumber.ts
 * @description
 * @author Matthew Allen Rackley
 * @copyright [Matthew Rackley's Github](https://www.github.com/matthewrackley "Matthew Rackley on github.com")
 */
import { AsYouTypeFormatter } from 'google-libphonenumber';
import React, { useState } from 'react';

import { useCountryContext } from '@context/countryContext';
import { PhoneNumber } from '@utilTypes/specializedTypes.ts';

type UsePhoneNumber = () => [PhoneNumber, React.HandleInput];
export const usePhoneNumber: UsePhoneNumber = () => {
  const { country } = useCountryContext();
  const [phoneNumber, setPhoneNumber] = useState('');
  const handlePhoneNumber: React.HandleInput = (event) => {
    const inputDigits = event.target.value.replace(/\D/g, '');
    const formatter = new AsYouTypeFormatter(country.regionCode);
    formatter.clear();

    const formattedNumber = inputDigits.split('').reduce((acc, digit) => {
      return formatter.inputDigit(digit);
    }, '');
    setPhoneNumber(formattedNumber);
  };
  const dialCode = `+${country.dialCode}` as const;
  const number = { dialCode, phoneNumber } as PhoneNumber;
  return [number, handlePhoneNumber] as [PhoneNumber, typeof handlePhoneNumber];
};

export default usePhoneNumber;
