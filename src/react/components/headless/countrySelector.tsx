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

import React, { useState } from 'react';
import useCountry from '@hooks/useCountry';
import styled, { DefaultTheme, isStyledComponent, IStyledComponent } from 'styled-components';
import countries, { isZoneRegions, regionCodes } from '@countries';
import Theme from '@theme';
import { useCountryContext } from '@context/countryContext';
import useZones from '@hooks/useZones';


const defaultSelectProps: StyledSelectProps = {
  variant: 'primary',
  value: 'US',
  key: 'US',
  theme: Theme,
  children: null
}
const defaultOptionProps: Partial<StyledOptionProps> = {
  variant: 'default',
  theme: Theme,
  children: null
}
const defaultContainerProps: StyledContainerProps = {
  variant: 'fallback',
  children: null,
}

const Select = styled.select.attrs<StyledSelectProps>((attr) => ({
  variant: attr.variant || 'primary',
  value: attr.value || 'US',
  key: attr.key || 'US',
  theme: attr.theme || Theme,
  children: attr.children
}))<StyledSelectProps>`
  width: 100%;
  padding: 8px 12px;
  margin-bottom: 16px;
  border: 1px solid #ced4da;
  border-radius: 4px;
  background-color: #fff;
  font-size: 16px;
  color: #495057;
  outline: none;
  &:focus {
    border-color: ${(props) => props.theme.utilities(props) || '#80bdff'};
    box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.25);
  }
`;
Select.defaultProps = {
  ...defaultSelectProps
};

const Option = styled.option.attrs<StyledOptionProps>((attr) => ({
  variant: attr.variant || 'default',
}))<StyledOptionProps>`
  padding: 8px;
  background-color: ${(props) => props.theme.utilities(props) || '#fff'};
  color: #495057;
  &:hover {
    background-color: #f8f9fa;
  }
`;
Option.defaultProps = {
  ...defaultOptionProps
}
const Container = styled.div.attrs<StyledContainerProps>((attr) => ({
    variant: attr.variant || 'primaryFallback',
    ref: attr.ref,
    children: attr.children,
  }))<StyledContainerProps>`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 16px;
    background-color: ${(props) => props.theme.utilities(props) || "#f8f9fa"};
    border-color: ${(props) => props.theme.accent(props) || '#000'};
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    max-width: 400px;
    margin: 0 auto;
  `;
Container.defaultProps = {
  ...defaultContainerProps
}
const defaultProps: DefaultPropsCountrySelector = {
  className: 'country-selector-container locked',
  region: 'US',
  children: null,
  Select: Select,
  Option: Option,
  Container: Container,
};

const MappedOptions = (props) => {
  return regionCodes.map((r) => (
    <Option className='country-selector-option locked' key={ r } value={ r } variant='default'>
      { countries(r).flag } { countries(r).foreign || countries(r).name }
    </Option>
  ));
}

const countryDisplay = (region: RegionCode, displayArray: CDisplay[]) => {
  let display = '';
  let lastIndex = displayArray.length - 1;
  for (let i = 0; i < displayArray.length; i++) {
    switch (displayArray[i]) {
      case CDisplay.Flag:
        display += countries(region).flag;
        display += i === lastIndex ? '' : ' ';
        break;
      case CDisplay.Name:
        display += countries(region).name;
        display += i === lastIndex ? '' : ' ';
        break;
      case CDisplay.Local:
        display += countries(region).local || countries(region).name;
        display += i === lastIndex ? '' : ' ';
        break;
      case CDisplay.Foreign:
        display += countries(region).foreign || countries(region).name;
        display += i === lastIndex ? '' : ' ';
        break;
      case CDisplay.Context:
        display += countries(region).context;
        display += i === lastIndex ? '' : ' ';
        break;
      case CDisplay.DialCode:
        display += countries(region).phone.dialCode;
        display += i === lastIndex ? '' : ' ';
        break;
      case CDisplay.RegionCode:
        display += region;
        display += i === lastIndex ? '' : ' ';
        break;
      case CDisplay.Seperator:
        display += CDisplay.Seperator;
        display += i === lastIndex ? '' : ' ';
        break;
      case CDisplay.Dash:
        display += CDisplay.Dash;
        display += i === lastIndex ? '' : ' ';
      default:
        display += countries(region).name;
        display += i === lastIndex ? '' : ' ';
        break;
    }
  }
  return display;
};

const StyledSelectZone = styled.select.attrs<StyledSelectZoneProps>((attr) => ({
  variant: attr.variant || 'primary',
  value: attr.value,
  key: attr.key,
  theme: attr.theme || Theme,
  children: attr.children
}))<StyledSelectZoneProps>`
  width: 100%;
  padding: 8px 12px;
  margin-bottom: 16px;
  border: 1px solid #ced4da;
  border-radius: 4px;
  background-color: #fff;
  font-size: 16px;
  color: #495057;
  outline: none;
  &:focus {
    border-color: ${(props) => props.theme.utilities(props) || '#80bdff'};
    box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.25);
  }
`;
StyledSelectZone.defaultProps = {
  variant: 'primary',
  theme: Theme
}
const StyledOptionZone = styled.option.attrs<StyledOptionZoneProps>((attr) => ({
  variant: attr.variant || 'default',
}))<StyledOptionZoneProps>`
  padding: 8px;
  background-color: ${(props) => props.theme.utilities(props) || '#fff'};
  color: #495057;
  &:hover {
    background-color: #f8f9fa;
  }
`;
StyledOptionZone.defaultProps = {
  variant: 'default'
}
const StyledH3 = styled.h3.attrs<StyledH3Props>((attr) => ({
  variant: attr.variant || 'primary',
  children: attr.children
}))<StyledH3Props>`
  font-size: 24px;
  font-weight: 700;
  color: #000;
  margin-bottom: 16px;
`;

const defaultPropsZone: DefaultPropsZone = {
  Select: StyledSelectZone,
  Option: StyledOptionZone,
  H3: StyledH3,
};
interface UseZoneProps {
  zones: ZonesOf<ZoneRegions>;
  region: RegionCode;
}
const useZone = (props: UseZoneProps) => {
  const { region, zones } = props;
  const [zone, setZone] = useState<ZonesOf<ZoneRegions>[number]>(zones[0]);
  let zoneType: ZoneTypes<ZoneRegions>, setZoneType: React.Dispatch<React.SetStateAction<ZoneTypes<ZoneRegions>>>;
  if (isZoneRegions(region)) {
    [zoneType, setZoneType] = useState<ZoneTypes<ZoneRegions>>(countries.zoneLookup(region, zones[0]));
  } else {
    throw new TypeError(`Incorrect Region Code used, must be of type: ZoneRegions`)
  }
  const handleZoneType = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedZone = e.target.value as Zones<ZoneRegions>;
    setZoneType(countries.zoneLookup(region, selectedZone));
    setZone(selectedZone);
  }
  return [zone, zoneType, handleZoneType] as [typeof zone, typeof zoneType, typeof handleZoneType];
}
const ZoneMap: React.FC<ZoneProps> = (props) => {
  const { zones, region, Option, Select, H3 } = { ...defaultPropsZone, ...props };
  const zoneProps = { zones, region };
  const [zone, zoneType, handleZoneType] = useZone(zoneProps);
  return (
    <>
      <H3 className='country-selector-h3 locked' variant='primary'>{ zoneType }</H3>
      <Select className='country-selector-select locked' value={ zone } key={ zone } variant='primary' onChange={handleZoneType}>
      { zones.map((z) => (
        <Option className='country-selector-option locked' key={ z } value={ z } variant='default'>
          { z }
        </Option>
      )) }
      </Select>
    </>
  );
}
export const CountrySelector = React.forwardRef<HTMLDivElement, CountrySelectorProps>((props, ref) => {
  const { Select, Option, Container, children, className } = { ...defaultProps, ...props };
  const { zones, handleZones, country, handleCountry } = useCountryContext();
  return (
    <Container ref={ ref } variant='default' className={className}>
      <Select className='country-selector-select locked' value={ country.regionCode } key={ country.regionCode } onChange={ handleZones } variant='primary'>
        { regionCodes.map((r) => (
          <Option className='country-selector-option locked' key={ r } value={ r } variant='default'>
            { countries(r).flag } { countries(r).foreign || countries(r).name }
          </Option>
        )) }
      </Select>
      <ZoneMap region={country.regionCode} zones={zones}/>
    </Container>
  );
});

export default CountrySelector;
