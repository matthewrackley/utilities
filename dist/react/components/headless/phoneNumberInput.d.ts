/**
 * @file phoneNumberInput.tsx
 * @description
 * @author Matthew Allen Rackley
 * @copyright [Matthew Rackley's Github](https://www.github.com/matthewrackley "Matthew Rackley on github.com")
 */
import React from 'react';
import { type RegionCode } from '@countries/countries';
interface Props {
    regionCode?: RegionCode;
    children?: React.ReactNode;
}
export declare const PhoneNumberInput: React.FC<Props>;
export default PhoneNumberInput;
