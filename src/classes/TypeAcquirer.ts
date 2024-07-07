/**
 * @file TypeAcquirer.ts
 * @description
 * @author Matthew Allen Rackley
 * @copyright [Matthew Rackley's Github](https://www.github.com/matthewrackley "Matthew Rackley on github.com")
 */

type InstanceParameters<T, P extends new (...args: any) => T> = P extends new (...args: infer TP) => T ? TP : never;
class TypeAcquirer<T, P extends P[number][]> {
  public typeParameters!: InstanceParameters<T, typeof this.type>;
  constructor(public type: new (...args: P) => T) {
    this.instance = this.createInstance(...this.getTypeParameters());
  }
  instance: T;
  createInstance(...args: InstanceParameters<T, typeof this.type>): T {
    return new this.type(...args);
  }
  getTypeParameters(): InstanceParameters<T, typeof this.type> {
    this.typeParameters = this.type.arguments;
    return this.type.arguments;
  }
}
export default TypeAcquirer;
