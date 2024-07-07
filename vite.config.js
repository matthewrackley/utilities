/**
 * @file vite.config.js
 * @description
 * @author Matthew Allen Rackley
 * @copyright [Matthew Rackley's Github](https://www.github.com/matthewrackley "Matthew Rackley on github.com")
 */

export default {
  resolve: {
    alias: {
      "countries": "/src/modularized/countries/countries.ts",
      "countries.types": "/src/modularized/countries/countries.types.ts",
    },
  },
};
