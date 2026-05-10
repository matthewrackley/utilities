/**
 * @file handlePhoneNumber.ts
 * @description
 * @author Matthew Allen Rackley
 * @copyright [Matthew Rackley's Github](https://www.github.com/matthewrackley "Matthew Rackley on github.com")
 */
import { AsYouTypeFormatter } from 'google-libphonenumber';
import React, { useState } from 'react';

import { useCountryContext } from '@context/countryContext';
type PhoneNumber<R extends Exclude<RegionCode, "HM">> = {
  dialCode: `+${DialCode<R>}`;
  number: Telephone<R>;
}

type UsePhoneNumber = () => [PhoneNumber<Exclude<RegionCode, "HM">>, (event: React.ChangeEvent<HTMLInputElement>) => void];
export const usePhoneNumber: UsePhoneNumber = () => {
  const { country } = useCountryContext();
  const [phoneNumber, setPhoneNumber] = useState<Telephone<Exclude<RegionCode, "HM">>>('' as  Telephone<Exclude<RegionCode, "HM">>);
  const handlePhoneNumber = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputDigits = event.target.value.replace(/\D/g, '');
    const formatter = new AsYouTypeFormatter(country.regionCode);
    formatter.clear();

    const formattedNumber = inputDigits.split('').reduce((acc, digit) => {
      return formatter.inputDigit(digit);
    }, '');
    setPhoneNumber(formattedNumber as Telephone<Exclude<RegionCode, "HM">>);
  };
  const dialCode = country.phone.dialCode;
  const number = { dialCode, number: phoneNumber } as PhoneNumber<Exclude<RegionCode, "HM">>;
  return [number, handlePhoneNumber] as [PhoneNumber<Exclude<RegionCode, "HM">>, typeof handlePhoneNumber];

};

export default usePhoneNumber;
