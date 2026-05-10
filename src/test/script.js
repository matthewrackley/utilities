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


const { AsYouTypeFormatter, PhoneNumberUtil } = require('google-libphonenumber');

var formatter = new AsYouTypeFormatter("US");
/**
 * @function handleSelectChange
 * @param {Event} event
 */
function handleSelectChange (event) {
  event.preventDefault()
  const regionCodes = new PhoneNumberUtil().getSupportedRegions() //@ts-ignore
  if (event.target instanceof HTMLSelectElement && regionCodes.includes(event.target.value)) {//@ts-ignore
    updateFormatter(event.target.value);
  }
}
/**
 * @function updateFormatter
 * @param {import('google-libphonenumber').RegionCode} region
 */
function updateFormatter (region) {
  formatter = new AsYouTypeFormatter(region)
}
function getInputElementValue () {
  const inputElement = document.getElementById('formattable-number');
  let phoneNumber = '';
  if (inputElement instanceof HTMLInputElement) {
    phoneNumber = inputElement.innerText;
  }
  return phoneNumber;
}
/**
 * @function formatNumber
 * @param {Event} event
 */
function formatNumber (event) {
  event.preventDefault()
  let number = '';
  if (event.target instanceof HTMLInputElement) {
    number += formatter.inputDigit(event.target.value);
    event.target.innerText = number;
  }
}
