/**
 * @file typeguards.ts
 * @description
 * @author Matthew Allen Rackley
 * @copyright [Matthew Rackley's Github](https://www.github.com/matthewrackley "Matthew Rackley on github.com")
 */
import { Email, url } from "./specializedTypes.ts";
import Util from './utilityTypes';
export type EmailTypeGuard = (email: Email) => email is Email;
export declare const isValidEmail: (email: Email) => email is Email;
export type TypeOf = "string" | "number" | "bigint" | "boolean" | "symbol" | "undefined" | "object" | "function";
export type Shape<TO = undefined> = {
    [key: PropertyKey]: TypeOf | TO;
};
export declare function isMatchableArray<T>(array: T[], matcher: T[], typeOf?: TypeOf): array is T[];
export declare function matchesShape<T extends object, TO = undefined>(obj: T, shape: Shape<TO>): obj is T;
export declare function isUniqueArray<T>(array: T[], key?: keyof T): array is T[];
export declare function isObject<T extends object>(value: T): value is T;
export declare function isValidUrl(url: url): url is url;
export declare function isNumber(value: unknown): value is number;
export declare function isValidAlphanumeric<T extends string>(input: T): input is Util.AlphaNumeric<T>;
export declare function isValidKey<O extends object, T extends keyof O>(o: O, key: T): key is T;
