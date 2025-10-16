import { defineConfig } from "eslint/config";
import globals from "globals";
import js from "@eslint/js";
import json from "@eslint/json";

export default defineConfig([
  // lint JS files
  {
    files: ["**/*.{js,mjs,cjs}"],
    plugins: { js },
    extends: ["js/recommended"],
    languageOptions: {
      globals: globals.browser
    },
  },
  // lint JSON files
  {
    files: ["**/*.json"],
    ignores: ["package-lock.json"],
    plugins: { json },
    language: "json/json",
    extends: ["json/recommended"],
  },
  // lint JSONC files
  {
    files: ["**/*.jsonc"],
    plugins: { json },
    language: "json/jsonc",
    extends: ["json/recommended"],
  },
  // lint JSON5 files
  {
    files: ["**/*.json5"],
    plugins: { json },
    language: "json/json5",
    extends: ["json/recommended"],
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
