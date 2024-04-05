/**
 * @file countryContext.tsx
 * @description
 * @author Matthew Allen Rackley
 * @copyright [Matthew Rackley's Github](https://www.github.com/matthewrackley "Matthew Rackley on github.com")
 */
import { type Countries, type RegionCode} from '@countries/countries.types.ts';
import React, { createContext, useContext } from 'react';
import useCountry from '@hooks/useCountry.ts';

//___=============================>                 <============================___\\
//___|| ==================== ||      CONTEXT SETUP      || =================== ||___\\
//___=============================>                 <============================___\\
/**
 * @interface CountryContextType
 * @description - The context type for the country context
 * @property {Countries[RegionCode]} country
 * @property {React.HandleSelect} handleCountry
 */
export interface CountryContextType {
  country: Countries[RegionCode];
  handleCountry: React.HandleSelect;
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
    throw new Error('useMyContext must be used within a MyProvider');
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
  children: React.ReactNode;
}
export const CountryProvider: React.FC<Props> = ({ children }) => {
  const [country, handleCountry] = useCountry();

  return (
    <CountryContext.Provider value={{ country, handleCountry }}>
      { children }
    </CountryContext.Provider>
  );
};

export default CountryProvider;
