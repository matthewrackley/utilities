/**
 * @file typeguards.ts
 * @description
 * @author Matthew Allen Rackley
 * @copyright [Matthew Rackley's Github](https://www.github.com/matthewrackley "Matthew Rackley on github.com")
 */

export type EmailTypeGuard = (email: Email) => email is Email;
export const isValidEmail = (email: Email): email is Email => {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email.toLowerCase());
}
export type TypeOf = "string" | "number" | "bigint" | "boolean" | "symbol" | "undefined" | "object" | "function";
export type Shape<TO = undefined> = {
  [key: PropertyKey]: TypeOf | TO;
};
export function isMatchableArray<T>(array: T[], matcher: T[], typeOf: TypeOf = 'string'): array is T[] {
  if (array && matcher && Array.isArray(array) && Array.isArray(matcher)) {
    for (let n = 0; n < array.length; n++) {
      if (typeof array[n] !== typeOf) return false;
      if (!matcher.includes(array[n])) return false;
    }
    return true;
  }
  return false;
}
export function matchesShape<T extends object, TO = undefined>(obj: T, shape: Shape<TO>): obj is T {
  for (const key in shape) {
    if (!(key in obj) || typeof obj[key as keyof T] !== shape[key]) {
      return false;
    }
  }
  return true;
}
export function isUniqueArray<T>(array: T[], key?: keyof T): array is T[] {
  const seen = new Set();
  for (const element of array) {
    const identifier = key ? element[key] : element;
    if (seen.has(identifier)) {
      return false;
    }
    seen.add(identifier);
  }
  return true;
}

export function isObject<T extends object>(value: T): value is T {
  return typeof value === 'object' && value !== null;
}

export function isValidUrl(url: Url): url is Url {
  const re = /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([\/\w .-]*)*\/?$/;
  return re.test(url);
};
export function isNumber(value: unknown): value is number {
  return typeof value === 'number' && !Number.isNaN(value);
}
export function isValidAlphanumeric<T extends string>(input: T): input is Util.AlphaNumeric<T> {
  if (typeof input !== 'string') return false;
  return /^[a-zA-Z0-9\.\-]+$/.test(input);
}

export function isValidKey<O extends object, T extends keyof O>(o: O, key: T): key is T {
  const keys = Object.keys(o) as (keyof O)[];
  return keys.every((oKey): oKey is T => {
    if (typeof oKey === 'object') {
      if (oKey === key) return true;
      isValidKey(oKey, key);
    }
    return oKey === key;
  });
}
