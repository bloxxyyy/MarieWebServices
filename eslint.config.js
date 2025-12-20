import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import { defineConfig, globalIgnores } from 'eslint/config'
import jsdoc from 'eslint-plugin-jsdoc';

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      js.configs.recommended,
      tseslint.configs.strictTypeChecked,
      tseslint.configs.stylisticTypeChecked,
      reactHooks.configs['recommended-latest'],
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
    },
    plugins: {jsdoc},
    rules: {
      semi: ['error', 'always'],
      // Optional overrides for stylistic preferences
      ...tseslint.configs.stylisticTypeChecked.rules,
      'jsdoc/no-undefined-types': [
        'warn',
        { markVariablesAsUsed: true } // marks imports in JSDoc as “used”
      ],
    },
  },
])
