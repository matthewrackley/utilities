/**
 * @file DateFormatter.ts
 * @description
 * @author Matthew Allen Rackley
 * @copyright [Matthew Rackley's Github](https://www.github.com/matthewrackley "Matthew Rackley on github.com")
 */

import { StringLike } from '../types/utilityTypes.ts';
export namespace DateFormat {
  export type Year = StringLike<4>;
  export type Month = StringLike<2>;
  export type Day = StringLike<2>;
  export type Hour = StringLike<2>;
  export type Minute = StringLike<2>;
  export type Second = StringLike<2>;
  //@ts-expect-error
  export type DateString = `${Month}${'' | '-'}${Day}-${Year}`;
  //@ts-expect-error
  export type TimeString = `${Hour}${string}-${string}${Minute}${string}${Second}` | `${Hour}-${Minute}-${Second}`;

  export type DatabaseOptions = typeof DatabaseOptions;
  export const DatabaseOptions = {
    timeZone: "America/Chicago" as const,
    hour12: false as const,
    year: "numeric" as const,
    month: "2-digit" as const,
    day: "2-digit" as const,
    hour: "2-digit" as const,
    minute: "2-digit" as const,
    second: "2-digit" as const,
  }
  export type DisplayOptions = typeof DisplayOptions;
  export const DisplayOptions = {
    timeZone: "America/Chicago" as const,
    hour12: true as const,
    weekday: "long" as const,
    year: "numeric" as const,
    month: "short" as const,
    day: "numeric" as const,
    hour: "2-digit" as const,
    minute: "2-digit" as const,
    second: "2-digit" as const,
    timeZoneName: "short" as const,
  };
  export const DatabaseFormat = new Intl.DateTimeFormat('en-US', DatabaseOptions);
  export const DisplayFormat = new Intl.DateTimeFormat('en-US', DisplayOptions);
  export const PornovaLocale = new Intl.DateTimeFormat('en-US', {
    timeZone: 'America/Chicago',
    hour12: true,
    weekday: 'long',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  });
  export interface ForDatabase {
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
  export class DateFormatter extends Date {
    static displayOptions: DisplayOptions = DisplayOptions;
    static databaseOptions: DatabaseOptions = DatabaseOptions;
    static forDisplay = DisplayFormat;
    static forDatabase = DatabaseFormat;
    static PornovaLocale = PornovaLocale;
    private init = new Date();
    private cur = Date.now();
    private format: Intl.DateTimeFormat['format'];
    private static dateRegex = /.*(?<month>\d{2})\/(?<day>\d{2})\/(?<year>\d{4}).*/;
    private static timeRegex = /.*(?<hour>\d{2}):(?<minute>\d{2}):(?<second>\d{2}).*/;
    constructor(date: string | number | Date = new Date(), format?: 'display' | 'Database' | Intl.DateTimeFormat) {
      super(date);
      this.format = format === 'Database' ? DateFormatter.forDatabase.format : format === 'display' ? DateFormatter.forDisplay.format : format?.format || DateFormatter.forDisplay.format;
      this.cur = Date.now();
      this.init = new Date();
      type CreationDate = string;
    }
    now() {
      return this.format(new Date());
    }
    public createdAt() {
      const forDisplay = DateFormatter.forDisplay.format(this.init);
      const database = DateFormatter.forDatabase.format(this.init);
      const forDatabase: ForDatabase = {
        full: database,
        year: database.replace(DateFormatter.dateRegex, '$3') as Year,
        month: database.replace(DateFormatter.dateRegex, '$1') as Month,
        day: database.replace(DateFormatter.dateRegex, '$2') as Day,
        date: database.replace(DateFormatter.dateRegex, '$1-$2-$3') as DateString,
        hour: database.replace(DateFormatter.timeRegex, '$1') as Hour,
        minute: database.replace(DateFormatter.timeRegex, '$2') as Minute,
        second: database.replace(DateFormatter.timeRegex, '$3') as Second,
        time: database.replace(DateFormatter.timeRegex, '$1:$2:$3') as TimeString,
      };
      return { forDisplay, forDatabase };
    }
  };
  export interface DateParts extends Partial<Intl.DateTimeFormatPartTypesRegistry> {
    month: Month;
    day: Day;
    year: Year;
    hour: Hour;
    minute: Minute;
    second: Second;
    date: string;
    time: string;
    formattedDate: Date;
  };
  export const enum Dated {
    YEAR = 'year',
    MONTH = 'month',
    DAY = 'day',
    HOUR = 'hour',
    MINUTE = 'minute',
    SECOND = 'second',
    DATE = 'date',
    TIME = 'time',
    DATE_STRING = 'dateString',
    TIME_STRING = 'timeString',
  }

  export const DatabaseLocale = new Intl.DateTimeFormat('en-US', {
    timeZone: 'America/Chicago',
    hour12: false,
    weekday: 'long',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hourCycle: 'h24',
    timeZoneName: 'long',
    formatMatcher: 'best fit',
    dayPeriod: 'long',
  });

  function createDate(as?: 'Database' | 'relative'): DateParts {
    const textEncoder = new TextEncoder();
    console.log(PornovaLocale.resolvedOptions().locale);
    const formattedDate = PornovaLocale.formatToParts(new Date()).reduce((acc, part) => {
      //@ts-ignore
      acc[part.type] = part.value;
      return acc;
    }, new Date());
    const month = `${(formattedDate.getMonth() + 1).toString().padStart(2, '0')}` as Month;
    const day = `${formattedDate.getDate().toString().padStart(2, '0')}` as Day;
    const year = `${formattedDate.getFullYear()}` as Year;
    const date = formattedDate.toDateString();
    const hour = `${formattedDate.getHours().toString().padStart(2, '0')}` as Hour;
    const minute = `${formattedDate.getMinutes().toString().padStart(2, '0')}` as Minute;
    const second = `${formattedDate.getSeconds().toString().padStart(2, '0')}` as Second;
    const time = formattedDate.toTimeString() as Intl.RelativeTimeFormatPart['value'];
    return { month, day, year, hour, minute, second, date, time, formattedDate };
  };
  export const value = createDate();

  console.log(value);

  export interface ItemBase {
    _id: string;
    name: string;
    description: string;
    created: Date;
  }
}
