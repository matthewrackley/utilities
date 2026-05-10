function temp<R = string>(this: Array<string>, value: string, validator?: ((value: string | unknown) => value is R)): R {
  const val = this[this.findIndex((p) => p === value) + 1];
  return validator && validator(val) ? val as R : val as any;
}
function ExtendedArray<P extends PrimType>(...items: P[]): ExtendedArray<P> {
  const extendedArray = [...items] as ExtendedArray<P>;
  extendedArray.exists = function <V extends any[]>(...values: V): this is (V[number] | P)[] {
    const bools = [false];
    for (let i = 0; i < values.length; i++) {
      bools[i] = this.includes(values[i]);
    }
    return bools.includes(true);
  };
  extendedArray.isVal = function (value, ...searchValues): value is typeof searchValues[number] {
    return this.some(val => searchValues.includes(val)) && searchValues.includes(value);
  };
  extendedArray.nextVal = function <R = P>(value: P, validator?: ((value: P | unknown) => value is R)): R {
    const val = this[this.findIndex((p) => p === value) + 1];
    return validator && validator(val) ? val as R : val as any;
  };
  extendedArray.prevVal = function <R = P>(value: P, validator?: ((value: P | unknown) => value is R)): R {
    const val = this[this.findIndex((p) => p === value) - 1];
    return validator && validator(val) ? val as R : val as any;
  };
  extendedArray.curIndex = function (value: P): number {
    return this.findIndex((p) => p === value);
  };
  function getVal<R extends P, A extends [validator: (value: P) => value is R, ...values: P[]] | P[]>(...values: A[0] extends ((value: P) => value is R) ? [validator?: ((value: P) => value is R), ...values: P[]] : A): A[0] extends ((value: P) => value is R) ? (R | null) : P;
  function getVal<R extends P, A extends [validator: (value: P) => value is R, ...values: P[]] | P[]>(validator: (value: P) => R, ...values: P[]): R | null;
  function getVal<R extends P, A extends [validator: (value: P) => value is R, ...values: P[]] | P[]>(...values: P[]): P;
  function getVal<R extends P, A extends [validator: (value: P) => value is R, ...values: P[]] | P[]>(...args: any): A[0] extends ((value: P) => value is R) ? (R | null) : P {
    const value = extendedArray[extendedArray.findIndex((v): v is P => args.includes(v)) + 1];
    const values = args as [<R extends P>(value: P) => value is R, ...P[]] | P[];
    const validator = values.pop() as typeof values[number];
    return (validator instanceof Function ? validator(value) ? value as R : null : value as P) as A[0] extends ((value: P) => value is R) ? (R | null) : P;
  };
  extendedArray.getVal = getVal;
  extendedArray.iStartsWith = function (index, searchString, atPosition): boolean {
    let value = this.at(index) && typeof this.at(index) === 'string' ? this.at(index)! as P & string : null;
    return value ? value.startsWith(searchString, atPosition) : false;
  };
  extendedArray.iEndsWith = function (index, searchString, atPosition): boolean {
    let value = this.at(index) && typeof this.at(index) === 'string' ? this.at(index)! as P & string : null;
    return value ? value.endsWith(searchString, atPosition) : false;
  };
  extendedArray.includes = Array.prototype.includes as ExtendedArray<P>['includes'];
  return new.target ? new.target(...items) : extendedArray;
};
