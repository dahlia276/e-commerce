import { defineConfig } from 'eslint-define-config';
import vue from 'eslint-plugin-vue';
import prettier from 'eslint-plugin-prettier';
import tsParser from '@typescript-eslint/parser';
import tsPlugin from '@typescript-eslint/eslint-plugin';

export default defineConfig([
    {
        files: ['src/**/*.ts', 'src/**/*.vue'],
        languageOptions: {
            ecmaVersion: 2020,
            sourceType: 'module',
            parser: tsParser,
            parserOptions: {
                ecmaVersion: 2020,
                sourceType: 'module'
            }
        },
        plugins: {
            vue,
            prettier,
            '@typescript-eslint': tsPlugin
        },
        rules: {
            'semi': ['error', 'always'],
            'quotes': ['error', 'single'],
            'no-console': 'warn',
            'vue/multi-word-component-names': 'off',
            '@typescript-eslint/no-unused-vars': 'error',
            'prettier/prettier': 'error'
        }
    }
]);
