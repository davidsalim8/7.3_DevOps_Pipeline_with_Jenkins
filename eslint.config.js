// eslint.config.js
import js from "@eslint/js";
import globals from "globals";

export default [
    // Base rules
    js.configs.recommended,
    {
        languageOptions: {
            ecmaVersion: 2022,
            globals: {
                ...globals.node,
                ...globals.jest,
            },
        },
        linterOptions: {
            reportUnusedDisableDirectives: true,
        },
        rules: {
            "no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
            "no-undef": "error",
            "eqeqeq": "warn",
            "complexity": ["warn", 10],
            "max-lines-per-function": ["warn", { max: 60, skipBlankLines: true, skipComments: true }],
            "max-depth": ["warn", 4],
            "no-console": "off"
        },
        ignores: ["node_modules/", "coverage/", "dist/", "*.min.js"],
    },
];
