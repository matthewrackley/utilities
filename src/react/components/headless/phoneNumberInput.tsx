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
import countries, { regionCodes } from '@countries';
import useCountry from '@hooks/useCountry';
import styled, { css } from 'styled-components';
import { IStyledComponent, RuleSet } from 'styled-components/dist/types';
import { useCountryContext } from '@context/countryContext';

export interface PhoneNumberInputProps {
  regionCode?: RegionCode;
  className?: string;
  children?: React.ReactNode;
  Input?: IStyledComponent<"web", Substitute<React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, Variant>>;
  Select?: IStyledComponent<"web", Substitute<React.DetailedHTMLProps<React.SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>, StyledSelectProps>>;
  Option?: IStyledComponent<"web", Substitute<React.DetailedHTMLProps<React.OptionHTMLAttributes<HTMLOptionElement>, HTMLOptionElement>, StyledOptionProps>>;
  Container?: IStyledComponent<"web", Substitute<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, Variant>>;
};
export interface PhoneNumberCSS<T extends object = Variant> {
  container?: RuleSet<T>;
  input?: RuleSet<T>;
  select?: RuleSet<T>;
  option?: RuleSet<T>;
};
interface Variant {
  variant?: FullMap;
};
const defaultProps: Required<PhoneNumberInputProps> = {
  regionCode: 'US',
  className: 'x-0d',
  Container: styled.div<Variant>`
      display: flex;
      justify-content: space-between;
      align-items: center;
      background-color: ${(props) => props.theme.background({ variant: props.variant || 'default' })};
      border: 2px solid ${(props) => props.theme.background({ variant: props.variant || 'default' })};
    `,
  Input: styled.input<Variant>`
      background-color: ${(props) => props.theme.background({ variant: props.variant || 'inverse' })};
      border: 1px solid ${(props) => props.theme.accent({ variant: props.variant || 'border' })};
      width: 75%;
    `,
  Option: styled.option<StyledOptionProps>`
      background-color: ${(props) => props.theme.background({ variant: props.variant || 'inverse' })};
      border: 1px solid ${(props) => props.theme.accent({ variant: props.variant || 'border' })};
      text-align: center;
      width: 25%;
    `,
  Select: styled.select<StyledSelectProps>`
      background-color: ${(props) => props.theme.background({ variant: props.variant || 'inverse' })};
      border: 1px solid ${(props) => props.theme.accent({ variant: props.variant || 'border' })};
      text-align: center;
      width: 25%;
    `,
  children: null
}
interface StyledOptionProps {
  value: RegionCode;
  key: RegionCode;
  children?: React.ReactNode;
  variant?: FullMap;
}
interface StyledSelectProps extends StyledOptionProps {
  onChange: React.ChangeEventHandler<HTMLSelectElement>;
  variant?: FullMap;
}


export const PhoneNumberInput = React.forwardRef<HTMLDivElement, PhoneNumberInputProps>((props, ref) => {
  const { regionCode, Container, Input, Select, Option, className, children } = { ...defaultProps, ...props };
  const { country, handleCountry } = useCountryContext();
  const [phoneNumber, setPhoneNumber] = useState('');
  const handlePhoneChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputDigits = event.target.value.replace(/\D/g, '');
    const formatter = new AsYouTypeFormatter(country.regionCode);
    formatter.clear();

    const formattedNumber = inputDigits.split('').reduce((acc, digit) => {
      acc = formatter.inputDigit(digit);
      return acc;
    }, '');

    setPhoneNumber(formattedNumber);
  };

  return (
    <Container ref={ ref } className={`${className} locked`}>
      <Select className={'phone-number-select locked'} value={ country.regionCode } key={ country.regionCode } onChange={ handleCountry }>
        { regionCodes.map((r) => (
            <Option className={'phone-number-option locked'} key={ r } value={ r }>
            { countries(r).flag } { countries(r).phone.dialCode }
            </Option>
          ))}
      </Select>
      <Input
        type="tel"
        className={'phone-number-input'}
        value={phoneNumber}
        onChange={handlePhoneChange}
        placeholder="Phone number"
      />
    </Container>
  );
});

export default PhoneNumberInput;
