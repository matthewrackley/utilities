/**
 * @file countryContext.tsx
 * @description
 * @author Matthew Allen Rackley
 * @copyright [Matthew Rackley's Github](https://www.github.com/matthewrackley "Matthew Rackley on github.com")
 */
import countries, { isZoneRegions } from '@countries';
import React, { createContext, useContext, useState } from 'react';
import useCountry from '@hooks/useCountry';

//___=============================>                 <============================___\\
//___|| ==================== ||      CONTEXT SETUP      || =================== ||___\\
//___=============================>                 <============================___\\

type HandleZones = (e: React.ChangeEvent<HTMLSelectElement>) => void;
type UseZones = (props: Omit<Props, 'children'>) => [Country<RegionCode>, HandleCountry, ZonesOf<ZoneRegions>, HandleZones];
type HandleCountry = (event: React.ChangeEvent<HTMLSelectElement>) => void;
/**
 * @interface CountryContextType
 * @description - The context type for the country context
 * @property {Countries[RegionCode]} country
 * @property {React.HandleSelect} handleCountry
 */
export interface CountryContextType {
  zones: ZonesOf<ZoneRegions>
  handleZones: HandleZones;
  country: Country<RegionCode>;
  handleCountry: HandleCountry;
}
/**
 * @constant CountryContext
 * @description - The context for the country context
 * @type {React.Context<CountryContextType | undefined>}
 */
export const CountryContext = createContext<CountryContextType | undefined>(undefined);
/**
 * @function useCountryContext
 * @description - The hook for the country context
 * @returns {CountryContextType}
 */
export const useCountryContext = () => {
  const context = useContext(CountryContext);
  if (context === undefined) {
    throw new Error('useCountryContext must be used within a CountryProvider');
  }
  return context;
};

//___=============================>                            <============================___\\
//___|| ==================== ||      COUNTRY CONTEXT PROVIDER      || =================== ||___\\
//___=============================>                            <============================___\\
/**
 * @constant CountryProvider
 *
 * @description - The provider for the country context
 * @param {Props} props
 * @returns {JSX.Element}
 */

interface Props {
  initialCountry: RegionCode;
  children: React.ReactNode;
}
const useZones: UseZones = (props) => {
  const [country, handleCountry] = useCountry(props.initialCountry);
  let zones: ZonesOf<ZoneRegions>, setZones: React.Dispatch<React.SetStateAction<ZonesOf<ZoneRegions>>>;
  if (isZoneRegions(country.regionCode)) {
    [zones, setZones] = useState<ZonesOf<ZoneRegions>>(countries.getZones(country.regionCode) as ZonesOf<ZoneRegions>);
  } else {
    throw new TypeError(`RegionCode must be of type: ZoneRegions`)
  }
  const handleZones: HandleZones = (e: React.ChangeEvent<HTMLSelectElement>) => {
    handleCountry(e);
    if (isZoneRegions(e.target.value)) {
      setZones(countries.getZones(e.target.value));
    }
  };
  return [country, handleCountry, zones, handleZones] as [Country<RegionCode>, HandleCountry, ZonesOf<ZoneRegions>, HandleZones]
}
export const CountryProvider: React.FC<Props> = (props) => {
  const [country, handleCountry, zones, handleZones] = useZones(props);
  return (
    <CountryContext.Provider value={{ zones, handleZones, country, handleCountry }}>
      { props.children }
    </CountryContext.Provider>
  );
};

export default CountryProvider;
