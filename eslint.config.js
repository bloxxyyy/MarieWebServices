import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import jsdoc from 'eslint-plugin-jsdoc';
import tsEslintPlugin from '@typescript-eslint/eslint-plugin';
import { defineConfig, globalIgnores } from 'eslint/config';
import tsParser from '@typescript-eslint/parser';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],

    plugins: {
      jsdoc,
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
      "@typescript-eslint": tsEslintPlugin,
    },

    languageOptions: {
      parser: tsParser,
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: __dirname,
      },
    },

    settings: {
      'import/resolver': {
        typescript: {
          project: ['./tsconfig.app.json'],
        },
      },
    },

    rules: {
      // Base JS rules
      ...js.configs.recommended.rules,

      // TypeScript rules
      ...tsEslintPlugin.configs['strict-type-checked'].rules,
      ...tsEslintPlugin.configs['stylistic-type-checked'].rules,

      // React Hooks rules
      ...reactHooks.configs['recommended-latest'].rules,

      // React Refresh rules
      ...reactRefresh.configs.vite.rules,

      // JSDoc rules
      ...jsdoc.configs.recommended.rules,

      // Your overrides
      semi: ['error', 'always'],
      'jsdoc/no-undefined-types': ['warn', { markVariablesAsUsed: true }],
      'jsdoc/tag-lines': 'off',
    },
  },
]);
