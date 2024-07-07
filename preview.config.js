/**
 * @file preview.config.js
 * @description
 * @author Matthew Allen Rackley
 * @copyright [Matthew Rackley's Github](https://www.github.com/matthewrackley "Matthew Rackley on github.com")
 */

import { defineConfig } from "@previewjs/config";

export default defineConfig({
  wrapper: {
    path: "src/react/wrapper.tsx",
    componentName: "default",
  },
  vite: {
    resolve: {
      alias: {
        "countries": "./src/modularized/countries",
        "@countries": "./src/modules/countries",
        "@utilities": "./src/modules/utilities",
        "@hooks": "./src/react/hooks",
        "@components": "./src/react/components",
        "@context": "./src/react/context",
        "@styles": "./src/react/styles",
        "@utilTypes": "./src/types",
        "@assets": "./src/react/app/assets",
        "@preview": "./src/react/preview",
        "@pages": "./src/react/pages",
        "@app": "./src/react/app",
        "@classes": "./src/classes",
      },
    },
  }
});
