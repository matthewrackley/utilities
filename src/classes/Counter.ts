/**
 * @file Counter.ts
 * @description
 * @author Matthew Allen Rackley
 * @copyright [Matthew Rackley's Github](https://www.github.com/matthewrackley "Matthew Rackley on github.com")
 */
import { Add50 as Add, Subtract50 as Subtract, Fifty, addition, subtraction } from "@utilTypes/utilityTypes"
import { getIterableValue } from '../utilities/Util';

// & CC extends string ? {
type CountType<N extends Fifty, C extends string, CC extends string[] = []> = CC['length'] extends 0 | 1 ? CC['length'] extends 1 ? ChildCount<N, C, [CC[0]]> : ParentlessCount<N, C> : ParentCount<N, C, CC>;
type CounterType<N extends Fifty, C extends string, CC extends string[] = []> = CC['length'] extends 0 | 1 ? CC['length'] extends 1 ? Counter<N, C, [CC[0]]> : Counter<N, C> : Counter<N, C, CC>;


/**
 * Represents an instance of a counter with a specific category and count.
 * @template C - The category type.
 * @template CC - The array of child category types.
 */
interface ParentCount<N extends Fifty, C extends string, CC extends string[] = []> extends CounterEquations<N, C>, Counter<N, C, CC> {
  parent: CC['length'] extends 1 ? never : null;
  category: C;
  count: Count<N>;
  instance: CC['length'] extends 0 | 1 ? never : Counter<N, C, CC>;
  hasParent: CC['length'] extends 1 ? never : false;
  children: InstanceCounters<C, CC>;
};
interface CountHolder<N extends Fifty, T> {
  count: Count<N>;
  get num(): N;
  get up(): CountHolder<Add<N> extends Fifty ? Add<N> : never, T>;
  get down(): CountHolder<Subtract<N> extends Fifty ? Subtract<N> : never, T>;
}

/**
 * Represents the count of child elements in a category.
 * @template C - The type of the category.
 */
interface ChildCount<N extends Fifty, C extends string, CC extends string[] = []> extends CounterEquations<N, C>, Counter<N, C, [CC[0]]> {
  parent: CC[0];
  category: C;
  count: Count<N>;

  instance: CC['length'] extends 0 | 1 ? CC['length'] extends 1 ? Counter<N, C, [CC[0]]> : never : never;
  hasParent: CC['length'] extends 0 | 1 ? CC['length'] extends 1 ? true : never : never;
  children: null;
};

/**
 * Represents a count without a parent instance.
 * @template C - The type of the category.
 */
interface ParentlessCount<N extends Fifty, C extends string, CC extends string[] = []> extends CounterEquations<N, C>, Counter<N, C> {
  parent: null;
  category: C;
  count: Count<N>;
  instance: CC['length'] extends 0 | 1 ? CC['length'] extends 1 ? never : Counter<N, C> : never;
  hasParent: CC['length'] extends 0 | 1 ? CC['length'] extends 1 ? never : false : never;
  children: null;
}

class Count<N extends Fifty> {
  number: N;
  instance: Count<N>;
  constructor(count: N = 0 as N) {
    let instance: Count<N>;
    if (!count) {
      instance = new Count(0 as N);
      this.number = instance.number;
    } else {
      this.number = count as N;
      instance = this;
    }
    this.instance = instance;
  }

  up() {
    const count = new Count(addition(this.number as N));
    return [count.number, count] as [Add<N>, Count<Add<N>>];
  }
  down() {
    const count = new Count(subtraction(this.number as N));
    return [count.number, count] as [Subtract<N>, Count<Subtract<N>>];
  }
  reset() {
    return new Count(0 as N);
  }
  update<C extends string, CC extends string[], T extends 'up' | 'down'>(instance: CounterType<N, C, CC>, type: T = 'up' as T) {//@ts-ignore
    let count: T extends 'down' ? ReturnType<typeof this.down> : ReturnType<typeof this.up>;
    if (type === 'down') {
      count = this.down() as T extends 'down' ? ReturnType<typeof this.down> : never;
    } else {
      count = this.up() as T extends 'down' ? never : ReturnType<typeof this.up>;
    }
    Counter.counts[instance.parent || instance.category][instance.parent ? instance.category : 'count'] = count[1];
    instance.countInstance = count[1] as typeof count[1] extends Count<N> ? typeof count[1] : never;
    instance.number = count[0] as typeof count[0] extends N ? typeof count[0] : never;//@ts-ignore
    Counter.instances[instance.parent || instance.category][instance.parent ? instance.category : 'count'] = instance as DetermineCounter<N, C, CC>;
    return count;
  }
}
type CounterHolder<N extends Fifty, C extends string, CC extends string[] = []> = {
  [K in CC['length'] extends 1 ? CC[0] : C]: {
    [Key in CC['length'] extends 1 ? C : CC[number]]: Count<N>
  } & {
    count: Count<N>;
  }
};
type CountTypeHolder<N extends Fifty, C extends string, CC extends string[] = []> = {
  [K in CC[0] | C as CC['length'] extends 1 ? CC[0] : C]: {
    count: ParentlessCount<N, C> | ParentCount<N, C, CC>;
  } & {
    [Key in C | CC[number] as CC['length'] extends 1 ? C : CC[number]]: ChildCount<N, C, [CC[0]]> | ChildCount<N, Key, [C]>;
  } | {
    [K in 'count' | C | CC[number] as CC['length'] extends 1 ? C : CC[number] | 'count']: CC['length'] extends 0 | 1 ? CC['length'] extends 1 ? ChildCount<N, C, [CC[0]]> : ParentlessCount<N, C> : ParentCount<N, C, CC>;
  }
};
type InstanceHolder<N extends Fifty, C extends string, CC extends string[] = []> = {
  [K in CC[0] | C as CC['length'] extends 1 ? CC[0] : C]: {
    [Key in C | CC[number]as CC['length'] extends 1 ? C : CC[number]]:
    CC['length'] extends 1
    ? Counter<N, Key, [K]>
    : never;
  } & {
    count: InstanceHolder<N, C, CC>[C]['count'] extends Counter<N, K, infer KK> ? CC['length'] extends 0 | 1 ? CC['length'] extends 1 ? Counter<N, K, KK> : Counter<N, K> : Counter<N, K, CC> : never;
  }
};


type AcquireReturnType<N extends Fifty, S extends 'count' | 'instance' | 'counter', C extends string, CC extends string[]> = S extends 'count' | 'instance' | 'counter' ? S extends 'count' | 'counter' ? S extends 'counter' ? CountType<N, C, CC> : Count<N> : CounterType<N, C, CC> : never;
type ConstructorReturnType<F extends new (...args: any) => any> = F extends new (...args: any) => infer R ? R : never;
const ctrr = new Count(0).up();
/**
 * @class Counter<N, C> - A class for creating counters.
 * @description This class is used to create counters for tracking the number of times an event occurs.
 * @param category The category of the counter.
 * @returns A new instance of the Counter class.
 */
export class Counter<N extends Fifty, C extends string, CC extends string[] = []> {
  static getCounter<N extends Fifty, C extends string, P extends string, CC extends string[]>(category: C, parent: P): CC['length'] extends 0 | 1 ? CC['length'] extends 1 ? Counter<N, C, [CC[0]]> : Counter<N, C> : Counter<N, C, CC> {
    let counter = {} as CC['length'] extends 0 | 1 ? CC['length'] extends 1 ? Counter<N, C, [CC[0]]> : Counter<N, C> : Counter<N, C, CC>
    for (const key in Counter.instances) {
      if (key === category) {
        counter = Counter.instances[category].count as CC['length'] extends 0 | 1 ? CC['length'] extends 1 ? never : Counter<N, C> : Counter<N, C, CC>;
      } else {
        counter = Counter.instances[key as CC[0]][category] as CC['length'] extends 0 | 1 ? CC['length'] extends 1 ? Counter<N, C, [CC[0]]> : never : never;
      }
    }
    return counter;
  }
  public static counters = {} as CountTypeHolder<any, any, any>;
  /**
   * Handles the parent or lone instance of the counter.
   * @property {InstanceHolder<any,any,any>} instances - The instances of the counter.
   * @param {[category: string]} category The category of the counter.
   * @static instance
   */
  public static instances = {} as InstanceHolder<any, any, any>;

  static acquire<N extends Fifty, S extends 'count' | 'instance' | 'counter', Category extends string, SC extends string[]>(type: S, category: Category, ...children: SC['length'] extends 1 ? [parent: SC[0]] : SC): AcquireReturnType<N, S, Category, SC>;
  static acquire<N extends Fifty, S extends 'count' | 'instance' | 'counter', Category extends string, SC extends string[]>(type: S, category: Category, parent: SC[0]): AcquireReturnType<N, S, Category, SC>;
  static acquire<N extends Fifty, S extends 'count' | 'instance' | 'counter', Category extends string, SC extends string[]>(type: S, category: Category, ...children: SC): AcquireReturnType<N, S, Category, SC>;
  static acquire<N extends Fifty, S extends 'count' | 'instance' | 'counter', Category extends string, SC extends string[]>(type: S, category: Category, ...children: SC['length'] extends 1 ? [parent: SC[0]] : SC): AcquireReturnType<N, S, Category, SC> {
    const parent = children.length === 1 ? children[0] as SC[0] : null;
    if (type === 'count') {
      return Counter.counts[parent || category][parent ? category : 'count'] as AcquireReturnType<N, S, Category, SC>;
    } else if (type === 'counter') {
      return Counter.counters[parent || category][parent ? category : 'count'] as AcquireReturnType<N, S, Category, SC>;
    } else {
      return Counter.instances[parent || category][parent ? category : 'count'] as AcquireReturnType<N, S, Category, SC>;
    }
  }
  instances = {} as Instances<C, CC> | null;
  counter = {} as CountType<N, C, CC>;
  instance = this as unknown as CounterType<N, C, CC>;
  private counterType() {
    if (!this.counter) {
      if (!Counter.counters[this.parent || this.category][this.parent ? this.category : 'count']) {
        this.updateStatic("counter");
      }
      this.counter = Counter.counters[this.parent || this.category][this.parent ? this.category : 'count'] as typeof this.counter;
    }
    return this.counter;
  }
  updateStatic<T extends 'count' | 'counter' | 'instance'>(type: T) {
    if (type === 'count') {
      Counter.counts[this.parent || this.category][this.parent ? this.category : 'count'] = this.count as Count<N>;
    } else if (type === 'counter') {
      Counter.counters[this.parent || this.category][this.parent ? this.category : 'count'] = this.counter || (this.isParent ? this.handleParent() : this.handleChildren()) as CountType<N, C, CC>;
    } else {
      Counter.instances[this.parent || this.category][this.parent ? this.category : 'count'] = this.instance as CounterType<N, C, CC>;
    }
  }

  array: [Count<N>, CounterType<N,C,CC>, CountType<N, C, CC>];
  static counts = {} as CounterHolder<any, any, any>
  keys!: CC | [...CC] | [...CC, ...string[]] | [...CC, string] | null;
  isParent = false as CC['length'] extends 0 | 1 ? false : true;
  hasParent = false as CC['length'] extends 1 ? true : false;
  parent = null as CC['length'] extends 1 ? CC[0] : null;
  initialized: boolean = false;
  number: N = 0 as N;
  init = false;
  children = {} as InstanceCounters<C, CC> | null;
  countInstance!: Count<N>;
  get count() {
    if (!this.countInstance) {
      if (!Counter.counts[this.parent || this.category][this.parent ? this.category : 'count']) {
        Counter.counts[this.parent || this.category][this.parent ? this.category : 'count'] = new Count(0) as typeof this.countInstance;
      }
      this.countInstance = Counter.counts[this.parent || this.category][this.parent ? this.category : 'count'] as typeof this.countInstance;
    }
    this.number = this.countInstance.number;
    return this.countInstance;
  }
  /**
   * @property {Increment<N, C>} up
   * @description This method is used to increment the counter for the category.
   * @param {C} [category=this.category] The key for the counter.
   * @returns {[Add<N>, Count<Add<N>>]} The new value of the counter and the counter.
   */
  up: Increment<N, C> = (category = this.category as typeof this.category) => {
    //const result = this.count.up();
    const result = this.count.update(this.instance, 'up');
    this.number = result[0] as typeof result[0] extends N ? typeof result[0] : never;
    this.countInstance = result[1] as typeof result[1] extends Count<N> ? typeof result[1] : never;
    this.updateStatic('count');
    Counter.persist(category, this.number);
    return [this.number, this.countInstance] as [Add<N>, Count<Add<N>>] extends [N, Count<N>] ? [Add<N>, Count<Add<N>>] : never;
  }
  /**
   * @property {Decrement<N, C>} down
   * @description This method is used to decrement the counter for the category.
   * @param {C} [category=this.category] The key for the counter.
   * @returns {[Subtract<N>, Count<Subtract<N>>]} The new value of the counter.
   */
  down: Decrement<N, C> = (category = this.category as typeof this.category) => {
    const result = this.count.update(this.instance, 'down');
    this.number = result[0] as typeof result[0] extends N ? typeof result[0] : never;
    this.countInstance = result[1] as typeof result[1] extends Count<N> ? typeof result[1] : never;
    this.updateStatic('count');
    Counter.persist(category, this.number);
    return [this.number, this.countInstance] as [Subtract<N>, Count<Subtract<N>>] extends [N, Count<N>] ? [Subtract<N>, Count<Subtract<N>>] : never;
  }

  private initialize(category: C, parent: CC[0]): [Count<N>, CounterType<N,C,CC>, CountType<N, C, CC>];
  private initialize(category: C, ...children: CC): [Count<N>, CounterType<N,C,CC>, CountType<N, C, CC>];
  private initialize(category: C, ...children: []): [Count<N>, CounterType<N,C,CC>, CountType<N, C, CC>];
  private initialize(category: C, ...children: any[]): [Count<N>, CounterType<N,C,CC>, CountType<N, C, CC>] {
    const parent = children.length === 1 ? children[0] as CC[0] : null;
    this.keys = (children && children.length > 1 ? children as CC : null) as CC['length'] extends 0 | 1 ? null : CC;
    this.parent = parent as CC['length'] extends 1 ? CC[0] : null;
    this.hasParent = (parent ? true : false) as CC['length'] extends 1 ? true : false;
    this.isParent = (children && children.length > 1 ? true : false) as CC['length'] extends 0 | 1 ? false : true;
    this.instances = (children && children.length > 1 ? {} : null) as CC['length'] extends 0 | 1 ? null : Instances<C, CC>;
    this.counter = this.counterType();
    this.instance = (Counter.instances[parent || category][parent ? category : 'count'] || this.instance) as CC['length'] extends 0 | 1 ? CC['length'] extends 1 ? Counter<N, C, [CC[0]]> : Counter<N, C> : Counter<N, C, CC>;
    this.updateStatic('instance');
    if (children && children.length > 1) {
      for (const child of [...children as CC]) {
        const childCounter = new Counter(child, category);
        this.counter.children![child] = childCounter.counter as InstanceCounters<C, CC>[keyof InstanceCounters<C, CC>];
        this.instances![child] = childCounter as Instances<C, CC>[keyof Instances<C, CC>]
        this.children![child] = childCounter as InstanceCounters<C, CC>[keyof InstanceCounters<C, CC>];
      }
    }
    return [this.count, this.instance, this.counter] as [Count<N>, CounterType<N,C,CC>, CountType<N, C, CC>];
  }


  /**
   * @constructor
   * @param {C} category The category of the counter.
   * @param {CC[0]} parent The parent of the counter.
   * @param {CC} keys The keys of the counter.
   */
  private constructor(...children: [category: C, ...children: CC['length'] extends 1 ? [parent: CC[0]] : CC]);
  private constructor(category: C, ...children: CC['length'] extends 1 ? [parent?: CC[0]] : CC);
  private constructor(category: C, parent: CC[0]);
  private constructor(category: C, ...children: CC);

  private constructor(public category: C, ...children: any[]) {
    this.category = category;
    if (children.length === 0) {
      this.array = this.initialize(category) as [Count<N>, CounterType<N,C,CC>, CountType<N, C, CC>];
    } else if (children.length === 1) {
      const parent = children[0] as CC[0];
      this.array = this.initialize(category, parent) as [Count<N>, CounterType<N,C,CC>, CountType<N, C, CC>];
    } else {
      const keys = children as CC;
      this.array = this.initialize(category, ...keys) as [Count<N>, CounterType<N,C,CC>, CountType<N, C, CC>];
    }
  }


  private handleChildren(): CC['length'] extends 1 ? ChildCount<N, C, [CC[0]]> : ParentlessCount<N, C> {
    const counter = {
      category: this.category,
      count: this.count,
      instance: this.instance as CC['length'] extends 1 ? Counter<N, C, [CC[0]]> : Counter<N, C>,
      hasParent: this.hasParent,
      parent: this.parent,
      children: null,
      up: this.instance.up.bind(this.instance),
      down: this.instance.down.bind(this.instance),
    } as unknown as CC['length'] extends 1 ? ChildCount<N, C, [CC[0]]> : ParentlessCount<N, C>;
    if (this.parent) {
      Counter.counters[this.parent][this.category] = counter as CC['length'] extends 1 ? ChildCount<N, C, [CC[0]]> : never;
      Counter.counters[this.parent].count.children![this.category] = counter as ChildCount<N, C, [CC[0]]>;
      Counter.instances[this.parent][this.category] = counter as CC['length'] extends 1 ? ChildCount<N, C, [CC[0]]> : never;
      return counter as CC['length'] extends 1 ? ChildCount<N, C, [CC[0]]> : never;
    } else {
      Counter.counters[this.category].count = counter as CC['length'] extends 1 ? never : ParentlessCount<N, C>;
      Counter.instances[this.category].count = this.instance as Counter<N, C>;
      return counter as CC['length'] extends 1 ? never : ParentlessCount<N, C>;
    }
  }
  private handleParent() {
    // Assign the parent counter to the class.
    const counter = {
      parent: null,
      category: this.category,
      count: this.count,
      instance: this.instance as Counter<N, C, CC>,
      hasParent: this.hasParent,
      up: this.instance.up.bind(this.instance),
      down: this.instance.down.bind(this.instance),
      children: {} as InstanceCounters<C, CC>
    } as unknown as ParentCount<N, C, CC>;
    // Assign the class to the static instances object.
    Counter.counters[this.category].count = counter;
    Counter.instances[this.category].count = this.instance;
    return counter;
  }
  appendToKeys = <Child extends CC[number] | string>(key: Child) => {
    let keys: [...CC, Child] extends [...CC] ? [...CC, Child] : never;
    if (!this.keys) {
      keys = [key] as [...CC, Child] extends [...CC] ? [...CC, Child] : never;
    } else {
      keys = [...this.keys, key] as [...CC, Child] extends [...CC] ? [...CC, Child] : never;
    }
    return keys;
  }

  updateInstance = <Children extends CC | string[], UpdateType extends 'keys'>(updateType: UpdateType, ...params: Children) => {
    if (updateType === 'keys') {
      if (!this.keys && params.length > 1) {
        this.keys = [...params as Children] as CC['length'] extends 0 | 1 ? never : [...CC, ...Children];
      } else if (this.keys && this.keys.length > 1 && params.length > 1) {
        const keys = this.keys.length >= 1 ? [...this.keys, ...params] as [...CC, ...Children] : null as never;
        this.keys = keys as [...CC, ...Children] extends [...CC, ...string[]] ? [...CC, ...Children]['length'] extends 0 | 1 ? null : [...CC, ...Children] : never;
      } else if (params.length === 1) {
        this.keys = this.appendToKeys(params[0] as Children[0]);
        throw new Error("Cannot update the keys of a parentless counter.");
      }
    }
  }
  /**
   * @method newChild
   * @description This method is used to create a child counter for the parent counter.
   * @param {Child} category The category of the child counter.
   * @param {C} parent The parent of the child counter.
   * @returns {Counter<N, Child, [C]>} The new instance of the child counter.
   */
  newChild<Num extends Fifty, Child extends string extends CC[number] ? string : string>(category: Child, parent: C): Counter<Num, Child, [C]> {
    if (!this.isParent) throw new Error("Cannot create an instance of a parentless counter.");
    this.keys = this.appendToKeys(category);
    const newInstance = new Counter<Num, Child, [C]>(category, parent as C);
    this.instances![category] = newInstance as Counter<Num, Child, [C]> extends Instances<C, CC>[Child] ? Counter<Num, Child, [C]> : never;
    return newInstance;
  }

  /**
   * @method create
   * @description This method is used to create a new instance of the Counter class.
   * @param {C} category The category of the counter.
   * @param {CC} [children=[]] The keys of the counter.
   */
  static create<N extends Fifty, C extends string, CC extends string[] = []>(category: C, ...children: CC['length'] extends 1 ? [parent: CC[0]] : CC): CounterType<N, C, CC>;
  static create<N extends Fifty, C extends string, CC extends string[] = []>(category: C, parent: CC[0]): CounterType<N, C, CC>;
  static create<N extends Fifty, C extends string, CC extends string[] = []>(category: C, ...children: CC): CounterType<N, C, CC>;
  static create<N extends Fifty, C extends string, CC extends string[] = []>(category: C, ...children: any[]): CounterType<N, C, CC> {
    if (children.length === 1) {
      return new Counter<N, C, [CC[0]]>(category, children[0] as CC[0]) as CC['length'] extends 0 | 1 ? CC['length'] extends 1 ? Counter<N, C, [CC[0]]> : never : never;
    } else if (children.length === 0) {
      return new Counter<N, C>(category) as CC['length'] extends 0 | 1 ? CC['length'] extends 1 ? never : Counter<N, C> : never;
    } else {
      return new Counter<N, C, CC>(category, ...children as CC) as CC['length'] extends 0 | 1 ? never : Counter<N, C, CC>;
    }
  }
  static persist<N extends Fifty, C extends string>(category: C, count: N) {
    const domData = handleJSONParse(category, count);
    localStorage.setItem("dom-component-counter", JSON.stringify(domData));
  }
  static getPersistent<C extends string>(category: C) {
    return handleJSONParse(category)
  }
}

type Counters<C extends string, CC extends string[] = []> = {
  [K in C]: {
    [Key in CC[number]]: Counters<C, CC>[K][Key] extends infer N extends Fifty ? N : never;
  } & {
    count: Counters<C, CC>[C]['count'] extends infer N extends Fifty ? N : never;
  }
};
export type Increment<N extends Fifty, C extends string> = (category?: C) => [Add<N>, Count<Add<N>>] extends [N, Count<N>] ? [Add<N>, Count<Add<N>>] : never;
export type Decrement<N extends Fifty, C extends string> = (category?: C) => [Subtract<N>, Count<Subtract<N>>] extends [N, Count<N>] ? [Subtract<N>, Count<Subtract<N>>] : never;
function isRestKeys<CC extends string[]>(keys: CC): keys is CC {
  if (!keys) return false;
  if (keys.length === 0) return false;
  return [...keys].length > 0 && [...keys].every((key): key is CC[number] extends string ? CC[number] : never => typeof key === 'string');
}

interface CounterEquations<N extends Fifty, C extends string> { up: Increment<N, C>; down: Decrement<N, C>; };

/**
 * @function createCounter
 * @description This function is used to get the counter for a category.
 * @param {C} category The category of the counter.
 * @param {CC[0]} parent The parent of the counter.
 * @param {CC} keys The keys of the counter.
 * @returns {Counter<N, C, CC>} The counter for the category.
 */
export function createCounter<N extends Fifty, C extends string, CC extends string[]>(category: C, ...children: CC['length'] extends 1 ? [parent: CC[0]] : CC): CounterType<N, C, CC>;
export function createCounter<N extends Fifty, C extends string, CC extends string[]>(category: C, parent: CC[0]): CounterType<N, C, CC>;
export function createCounter<N extends Fifty, C extends string, CC extends string[]>(category: C, ...children: CC): CounterType<N, C, CC>;
export function createCounter<N extends Fifty, C extends string, CC extends string[] = []>(category: C, ...children: any[]): CounterType<N, C, CC> {
  if (children.length === 0) {
    return Counter.create(category) as CounterType<N, C, CC>;
  } else if (children.length === 1) {
    return Counter.create(category, children[0] as CC[0]) as CounterType<N, C, CC>;
  } else {
    return Counter.create(category, ...children) as CounterType<N, C, CC>;
  }
}

type InstanceCounters<C extends string, CC extends string[]> = {
  [K in CC[number]]: InstanceCounters<C, CC>[K] extends ChildCount<infer N, K, [C]> ? ChildCount<any, K, [C]> : never;
};

type Instances<C extends string, CC extends string[] = []> = {
  [K in CC[number]]: Instances<C, CC>[K] extends Counter<infer N extends Fifty, K, [C]> ? Counter<N, K, [C]> : never;
};
export default createCounter;

function handleJSONParse<N extends Fifty, C extends string, CC extends string[]>(value: C, count?: N): Counters<C, CC> {
  return JSON.parse(localStorage.getItem("dom-component-counter") as string, reviverHandler(value as string, count));
}
function reviverHandler<N extends Fifty, C extends string>(category: C, count?: N) {
  return function reviver(key: C, value: ({ [Key in C]: N; } & { count: N; }) | N,) {
    let data;
    let newValue = {} as {
      [Key in C]: N;
    } & {
      count: N;
    };
    if (typeof value === 'number') {
      if (count) {
        data = {
          [key]: count
        }
      } else {
        data = {
          [key]: value
        }
      }
    }
    if (typeof value === 'object' && value !== null) {
      for (const [innerkey, innerValue] of Object.entries(value)) {
        if (category === innerkey || innerkey === 'count') {
          if (count) {
            newValue[innerkey as keyof typeof newValue] = count as typeof newValue[keyof typeof newValue];
          } else {
            newValue[innerkey as keyof typeof newValue] = innerValue as typeof newValue[keyof typeof newValue];;
          }
        } else {
          newValue[innerkey as keyof typeof newValue] = innerValue as typeof newValue[keyof typeof newValue];;
        };
      }
      data = newValue;
    }
    return data!;
  }
}
