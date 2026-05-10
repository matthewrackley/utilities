/**
 * @file useCountry.ts
 * @description
 * @author Matthew Allen Rackley
 * @copyright [Matthew Rackley's Github](https://www.github.com/matthewrackley "Matthew Rackley on github.com")
 */
import React, { useState } from 'react';
import countries, { isRegionCode } from '@countries';

export const useCountry: UseCountry = (initialCountry: RegionCode = "US"): [Country<RegionCode>, HandleCountry] => {
  const ctry = countries(initialCountry );
  const [country, setCountry] = useState(ctry);

  const handleCountry: HandleCountry = <E extends HTMLSelectElement | HTMLInputElement>(event: React.ChangeEvent<E>) => {
    if (isRegionCode(event.target.value)) {
      const ctry = countries(event.target.value);
      setCountry(ctry);
    }
  };//@ts-ignore
  return [country, handleCountry];
}

export default useCountry;
