/**
 * @file DateFormatter.ts
 * @description
 * @author Matthew Allen Rackley
 * @copyright [Matthew Rackley's Github](https://www.github.com/matthewrackley "Matthew Rackley on github.com")
 */
import { StringLike } from '../types/utilityTypes.ts';
export declare namespace DateFormat {
    type Year = StringLike<4>;
    type Month = StringLike<2>;
    type Day = StringLike<2>;
    type Hour = StringLike<2>;
    type Minute = StringLike<2>;
    type Second = StringLike<2>;
    type DateString = `${Month}${'' | '-'}${Day}-${Year}`;
    type TimeString = `${Hour}${string}-${string}${Minute}${string}${Second}` | `${Hour}-${Minute}-${Second}`;
    type DatabaseOptions = typeof DatabaseOptions;
    const DatabaseOptions: {
        timeZone: "America/Chicago";
        hour12: false;
        year: "numeric";
        month: "2-digit";
        day: "2-digit";
        hour: "2-digit";
        minute: "2-digit";
        second: "2-digit";
    };
    type DisplayOptions = typeof DisplayOptions;
    const DisplayOptions: {
        timeZone: "America/Chicago";
        hour12: true;
        weekday: "long";
        year: "numeric";
        month: "short";
        day: "numeric";
        hour: "2-digit";
        minute: "2-digit";
        second: "2-digit";
        timeZoneName: "short";
    };
    const DatabaseFormat: Intl.DateTimeFormat;
    const DisplayFormat: Intl.DateTimeFormat;
    const PornovaLocale: Intl.DateTimeFormat;
    interface ForDatabase {
        full: string;
        year: Year;
        month: Month;
        day: Day;
        date: DateString;
        hour: Hour;
        minute: Minute;
        second: Second;
        time: TimeString;
    }
    class DateFormatter extends Date {
        static displayOptions: DisplayOptions;
        static databaseOptions: DatabaseOptions;
        static forDisplay: Intl.DateTimeFormat;
        static forDatabase: Intl.DateTimeFormat;
        static PornovaLocale: Intl.DateTimeFormat;
        private init;
        private cur;
        private format;
        private static dateRegex;
        private static timeRegex;
        constructor(date?: string | number | Date, format?: 'display' | 'Database' | Intl.DateTimeFormat);
        now(): string;
        createdAt(): {
            forDisplay: string;
            forDatabase: ForDatabase;
        };
    }
    interface DateParts extends Partial<Intl.DateTimeFormatPartTypesRegistry> {
        month: Month;
        day: Day;
        year: Year;
        hour: Hour;
        minute: Minute;
        second: Second;
        date: string;
        time: string;
        formattedDate: Date;
    }
    const enum Dated {
        YEAR = "year",
        MONTH = "month",
        DAY = "day",
        HOUR = "hour",
        MINUTE = "minute",
        SECOND = "second",
        DATE = "date",
        TIME = "time",
        DATE_STRING = "dateString",
        TIME_STRING = "timeString"
    }
    const DatabaseLocale: Intl.DateTimeFormat;
    const value: DateParts;
    interface ItemBase {
        _id: string;
        name: string;
        description: string;
        created: Date;
    }
}
