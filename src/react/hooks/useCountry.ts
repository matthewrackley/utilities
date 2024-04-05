/**
 * @file useCountry.ts
 * @description
 * @author Matthew Allen Rackley
 * @copyright [Matthew Rackley's Github](https://www.github.com/matthewrackley "Matthew Rackley on github.com")
 */
import React, { SetStateAction, useState } from 'react';

import countries from '@countries/countries.ts';
import { Countries, CountriesData, Country, RegionCode } from '@countries/countries.types';

type Params<R extends RegionCode = 'US'> = [initCountry?: R];
type ParamChoices = RegionCode | React.ChangeEvent<HTMLSelectElement> | CountriesData[RegionCode] | Country<RegionCode>;
type UseCountry = <R extends RegionCode = "US">(initialCountry?: R) => [Countries[R], React.HandleSelect];

export const useCountry: UseCountry = <R extends RegionCode>(initialCountry: R = "US" as R) => {
  const [country, setCountry] = useState(countries[initialCountry]);
  const handleCountry: React.HandleSelect = (event) => {
    if (event.target.value in countries)
      setCountry(countries[event.target.value as R]);
  };
  return [country, handleCountry];
}

export default useCountry;
