
export type RequireProp<T, K extends keyof T> = { [P in K]-?: T[P] } & Omit<T, K>;
export type RequirePartialProp<T, K extends keyof T> = { [P in K]-?: T[P] } & Partial<Omit<T, K>>;
export type MakeRequired<T, K extends keyof T> = Omit<T, K> & Required<Pick<T, K>>;
export interface ELDisposable<T extends HTMLElement, K extends keyof HTMLElementEventMap> {
  type: K;
  element: T;
  handler: EventListenerObj<T, K>;
  dispose(): void;
}


/**
 * @type EventListenerFn<T, K>
 * @description A function that takes an event and an optional options object and returns any value.
 * @template {HTMLElement} T - The type of the element that the event listener is attached to.
 * @template {keyof HTMLElementEventMap} K - The type of the event that the event listener listens for.
 * @param {T} this - The element that the event listener is attached to.
 * @param {E} event - The event that the event listener listens for.
 * @param {AddEventListenerOptions} [options] - The options object that is passed to the addEventListener method.
 * @returns {any} - Any value.
 */
export type EventListenerFn<
  T extends HTMLElement,
  K extends keyof HTMLElementEventMap = keyof HTMLElementEventMap
> = <E extends HTMLElementEventMap[K]>(this: T, event: E, options?: AddEventListenerOptions) => any;

/**
 * @interface EventListenerObj<T,K>
 * @description An object that has a handleEvent method that takes an event and an optional options object and returns any value.
 * @template {HTMLElement} T - The type of the element that the event listener is attached to.
 * @template {keyof HTMLElementEventMap} K - The type of the event that the event listener listens for.
 */
export interface EventListenerObj<T extends HTMLElement, K extends keyof HTMLElementEventMap> {
  /**
   * @property {EventListenerFn<T,K>} handleEvent - A function that takes an event and an optional options object and returns any value.
   */
  handleEvent: EventListenerFn<T, K>;
}

/**
 * @type ELFunctionOrObject<T,K>
 * @description An alias type to represent either an eventListener handler or it's related object.
 * @template {HTMLElement} T - The type of the element that the event listener is attached to.
 * @template {keyof HTMLElementEventMap} K - The type of the event that the event listener listens for.
 * @returns {EventListenerFn<T,K> | EventListenerObj<T,K>} A function that takes an event and an optional options object and returns any value or an object that has a handleEvent method that takes an event and an optional options object and returns any value.
 */
export type ELFunctionOrObject<
  T extends HTMLElement,
  K extends keyof HTMLElementEventMap = keyof HTMLElementEventMap
> = EventListenerFn<T, K> | EventListenerObj<T, K>;

/**
 * @interface HTMLElementMaker
 * @description An interface that has a function that creates an HTML element with the specified tag name and attributes.
 * @returns {HTMLElementTagNameMap[K]} - The HTML element that was created.
 */
export interface HTMLElementMaker {
  /**
   * @function htmlElement
   * @description A function that either:
   * - A. Creates an HTML element with the specified tag name and attributes, or;
   * - B. Gets it from the DOM it's executing in via it's ID.
   * @template K - The type of the tag name of the HTML element to create.
   * @param {K} tagName - The tag name of the HTML element to create or capture.
   * @param {RequirePartialProp<HTMLElementTagNameMap[K], 'id'>} attributes - The attributes of the HTML element to create or capture.
   * [NOTE]: the `id` property is required.
   * @returns {HTMLElementTagNameMap[K]} - The HTML element that was created or captured.
   */
  <K extends keyof HTMLElementTagNameMap>(tagName: K, attributes: RequirePartialProp<HTMLElementTagNameMap[K], 'id'>): HTMLElementTagNameMap[K];
  /**
   * @description A function that either:
   * - A. Creates an HTML element with the specified tag name and attributes, or;
   * - B. Gets it from the DOM it's executing in via it's ID.
   * @template K - The type of the tag name of the HTML element to create.
   * @template E - The type of the event that the event listener listens for.
   * @template D - Whether to set dispose to true or null.
   * @param {K} tagName - The tag name of the HTML element to create or capture.
   * @param {RequirePartialProp<HTMLElementTagNameMap[K], 'id'>} attributes - The attributes of the HTML element to create or capture.
   * [NOTE]: the `id` property is required.
   * @param {E} eventType - The type of the event that the event listener listens for.
   * @param {EventListenerFn<HTMLElementTagNameMap[K], E>} eventListener - The event listener function that listens for the event.
   * @param {D} dispose - Whether to set dispose to true or null.
   * @returns {D extends true ? void : HTMLElementTagNameMap[K]} Disposes of the event listener or returns the Element.
   */
  <K extends keyof HTMLElementTagNameMap, E extends keyof HTMLElementEventMap, D extends true | null>(tagName: K, attributes: RequirePartialProp<HTMLElementTagNameMap[K], 'id'>, eventType: E, eventListener: EventListenerFn<HTMLElementTagNameMap[K], E>, dispose: D): D extends true ? void : HTMLElementTagNameMap[K];
  /**
   * @template K - The type of the tag name of the HTML element to create.
   * @template E - The type of the event that the event listener listens for.
   * @template A - The type of the arguments that the function takes.
   * @template D - Whether to set dispose to true or null.
   * @param {K} tagName - The tag name of the HTML element to create.
   * @param {RequirePartialProp<HTMLElementTagNameMap[K], 'id'>} attributes - The attributes of the HTML element to create.
   * @param {A} args - The type of the event, the event listener, and an optional dispose.
   */
  <K extends keyof HTMLElementTagNameMap, E extends keyof HTMLElementEventMap, A extends [] | [E, EventListenerFn<HTMLElementTagNameMap[K], E>, D?], D extends true | null>(tagName: K, attributes: RequirePartialProp<HTMLElementTagNameMap[K], 'id'>, ...args: A extends [E, EventListenerFn<HTMLElementTagNameMap[K], E>, D?] ? D extends true ? [eventType: A[0], eventListener: A[1], dispose: D] : [eventType: A[0], eventListener: A[1]] : []): D extends true ? void : HTMLElementTagNameMap[K]
}
/**
 * @function createNewListener
 * @description A function that creates a new event listener for the specified element.
 */
function createNewListener<
  T extends HTMLElement,
  K extends keyof HTMLElementEventMap,
  F extends EventListenerFn<T, K>
>(
  element: T,
  type: K,
  func: F,
  options?: EventListenerOptions | AddEventListenerOptions
) {
  const handler: EventListenerObj<T, K> = {
    handleEvent: function (e) {
      return func.call(element, e, options);
    }
  };
  element.removeEventListener(type, handler, options);
  element.addEventListener(type, handler, options);
  return {
    element,
    type,
    handler,
    dispose: () => {
      element.removeEventListener(type, handler, options);
    }
  } as ELDisposable<T, K>;
};

/**
 * @function htmlElement
 * @description A function that either:
 * - A. Creates an HTML element with the specified tag name and attributes, or;
 * - B. Gets it from the DOM it's executing in via it's ID.
 * @template K - The type of the tag name of the HTML element to create.
 * @param {K} tagName - The tag name of the HTML element to create or capture.
 * @param {RequirePartialProp<HTMLElementTagNameMap[K], 'id'>} attributes - The attributes of the HTML element to create or capture.
 * [NOTE]: the `id` property is required.
 * @returns {HTMLElementTagNameMap[K]} - The HTML element that was created or captured.
 */
function htmlElementMaker<K extends keyof HTMLElementTagNameMap>(tagName: K, attributes: RequirePartialProp<HTMLElementTagNameMap[K], 'id'>, ...args: any): HTMLElementTagNameMap[K];
/**
 * @description A function that either:
 * - A. Creates an HTML element with the specified tag name and attributes, or;
 * - B. Gets it from the DOM it's executing in via it's ID.
 * @template K - The type of the tag name of the HTML element to create.
 * @template E - The type of the event that the event listener listens for.
 * @template D - Whether to set dispose to true or null.
 * @param {K} tagName - The tag name of the HTML element to create or capture.
 * @param {RequirePartialProp<HTMLElementTagNameMap[K], 'id'>} attributes - The attributes of the HTML element to create or capture.
 * [NOTE]: the `id` property is required.
 * @param {E} eventType - The type of the event that the event listener listens for.
 * @param {EventListenerFn<HTMLElementTagNameMap[K], E>} eventListener - The event listener function that listens for the event.
 * @param {D} dispose - Whether to set dispose to true or null.
 * @returns {D extends true ? void : HTMLElementTagNameMap[K]} Disposes of the event listener or returns the Element.
 */
function htmlElementMaker<K extends keyof HTMLElementTagNameMap, E extends keyof HTMLElementEventMap, D extends true | null>(tagName: K, attributes: RequirePartialProp<HTMLElementTagNameMap[K], 'id'>, eventType: E, eventListener: EventListenerFn<HTMLElementTagNameMap[K], E>, dispose: D): D extends true ? void : HTMLElementTagNameMap[K];
/**
   * @template K - The type of the tag name of the HTML element to create.
   * @template E - The type of the event that the event listener listens for.
   * @template A - The type of the arguments that the function takes.
   * @template D - Whether to set dispose to true or null.
   * @param {K} tagName - The tag name of the HTML element to create.
   * @param {RequirePartialProp<HTMLElementTagNameMap[K], 'id'>} attributes - The attributes of the HTML element to create.
   * @param {A} args - The type of the event, the event listener, and an optional dispose.
   */
function htmlElementMaker<K extends keyof HTMLElementTagNameMap, E extends keyof HTMLElementEventMap, A extends [] | [E, EventListenerFn<HTMLElementTagNameMap[K], E>, D?], D extends true | null>(
  tagName: K,
  attributes: RequirePartialProp<HTMLElementTagNameMap[K], 'id'>,
  ...args: A extends [E, EventListenerFn<HTMLElementTagNameMap[K], E>, D?] ? [eventType: E, eventListener: EventListenerFn<HTMLElementTagNameMap[K], E>, dispose?: D] : []): D extends true ? void : HTMLElementTagNameMap[K] {
  const id = attributes.id;

  let element = document.getElementById(id) as HTMLElementTagNameMap[typeof tagName] | null;
  if (element) {
    if (args.length === 2 || args.length === 3) {
      const [eventType, eventListener, dispose] = args as [E, EventListenerFn<HTMLElementTagNameMap[K], E>, D];
      const disposable = createNewListener(element, eventType, eventListener);
      if (dispose) return disposable.dispose() as A[2] extends true ? void : never;
      return disposable.element as A[2] extends true ? never : HTMLElementTagNameMap[K];
    }
    return element as A[2] extends true ? never : HTMLElementTagNameMap[K];
  } else {
    element = document.createElement(tagName);
    for (const key in attributes) {//@ts-ignore
      element[key] = attributes[key];
    }
    if (args.length === 2) {
      const [eventType, eventListener] = args;
      return createNewListener(element, eventType, eventListener).element as A[2] extends true ? never : HTMLElementTagNameMap[K];;
    }
    return element as A[2] extends true ? never : HTMLElementTagNameMap[K];;
  }
}
const htmlElement: HTMLElementMaker = htmlElementMaker;
export default htmlElement;

/**
 * Create a new event listener that can be disposed of.
 */

/**
 * Create or Obtain an HTML Element.
 */
