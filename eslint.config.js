import js from "@eslint/js";
import globals from "globals";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs}"],
    plugins: { js },
    extends: ["js/recommended"],
    languageOptions: {
      globals: globals.browser
    },
  },
  // Project-level override: enable Node env for Eleventy and other build/config files
  {
    files: ["**/eleventy.config.js", "**/*.config.js", "build/**", "scripts/**"],
    languageOptions: {
      globals: {
        ...globals.node,
      },
    },
  },
]);
