
// Example usage:
const regions = {
  States: ['Juarez', 'Chihuahua', 'Ciudad de Mexico'],
  Provinces: ['Ontario', 'Alberta', 'British Columbia']
};
// Utility function using generics
export function reverseLookup<
  A extends O[keyof O] extends Array<infer U extends string> ? U : never, //#T[keyof T][number]
  O extends { [Key in keyof O]: Array<A extends infer U extends string ? U : never> }, // ! T
  InvObj extends { [Key in keyof O as A extends O[Key][number] ? A : never]: Key }, // ! { [K in T[keyof T][number]]: Array<keyof T> }
  Findable extends A
>(obj: O, find?: Findable) {
  const invObj = {} as { [Key in keyof O as A extends O[Key][number] ? A : never]: Key };
  let value;
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      const valuesArray = obj[key];
      for (const value of valuesArray) {
        invObj[value as A & keyof typeof invObj] = key as unknown as typeof invObj[A & keyof typeof invObj];
      }
    }
  }
  if (!find || find === undefined) {
    value = invObj;
  } else if (find && find !== undefined) {
    if (find === undefined) return null as never;
    for (let key of Object.keys(invObj)) {
      value = ({
        [find]: invObj[find as Findable & keyof typeof invObj]
      })
    }
  }//@ts-ignore
  return value as { [Key in keyof O as Findable extends O[Key][number] ? Findable : never]: Key };
}


const val3 = reverseLookup(regions); // Without filter, returns full map
const val4 = reverseLookup(regions, 'Juarez'); // With filter, returns only Juarez
