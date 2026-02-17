import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import json from "@eslint/json";
import css from "@eslint/css";
import { defineConfig } from "eslint/config";

export default defineConfig(
    [
        {
            files: ["**/*.{js,mjs,cjs,ts,mts,cts}"],
            plugins: { js },
            extends: ["js/recommended"],
            languageOptions: { globals: { ...globals.browser, ...globals.node } }
        },
        tseslint.configs.recommended,
        {
            files: ["**/*.json"],
            ignores: [
                "package-lock.json", // 由 npm 生成
                "tsconfig.json" // 由 npx tsc --init 生成，我想她应该允许注释
            ],
            plugins: { json },
            language: "json/json",
            extends: ["json/recommended"]
        },
        {
            files: ["**/*.jsonc"],
            plugins: { json },
            language: "json/jsonc",
            extends: ["json/recommended"]
        },
        {
            files: ["**/*.css"],
            ignores: [
                "zh_cn/css/main_v4.826422d2b6a94eabfe21.bundle.css" // 外部 CSS
            ],
            plugins: { css },
            language: "css/css",
            extends: ["css/recommended"]
        },
    ]
);
