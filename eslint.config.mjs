import { defineConfig, globalIgnores } from 'eslint/config';
import eslint from '@eslint/js';
import tseslint from '@typescript-eslint/eslint-plugin';
import tsparser from '@typescript-eslint/parser';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// ESLint flat configuration
export default defineConfig([
  // Exclude test-related files and build artifacts from linting
  globalIgnores(['test/*']), // Ignore all files in test directories
  globalIgnores(['**/*.spec.ts']), // Ignore all test specification files
  globalIgnores(['node_modules/*']), // Ignore all dependencies
  globalIgnores(['dist/*']), // Ignore build output
  globalIgnores(['docs/*']), // Ignore documentation files
  {
    // Apply these rules to all TypeScript files
    files: ['**/*.ts', '**/*.tsx'],

    // Configure TypeScript parser and environment
    languageOptions: {
      parser: tsparser,
      parserOptions: {
        ecmaVersion: 'latest', // Use latest ECMAScript features
        sourceType: 'module', // Treat files as ES modules
        project: './tsconfig.json', // Use project's TypeScript configuration
        tsconfigRootDir: __dirname, // Resolve tsconfig.json from this directory
      },
      // Define global variables available in the codebase
      globals: {
        console: 'readonly', // Allow console usage but prevent overwrites
        window: 'readonly', // Allow window access but prevent overwrites
        document: 'readonly', // Allow DOM access but prevent overwrites
      },
    },

    // Enable TypeScript-specific linting
    plugins: {
      '@typescript-eslint': tseslint,
    },

    // Linting rules configuration
    rules: {
      // Include recommended rules from ESLint and TypeScript ESLint
      ...eslint.configs.recommended.rules,
      ...tseslint.configs.recommended.rules,

      // Custom rule configurations
      // Only allow console.error and console.warn, prohibit other console methods
      'no-console': ['error', { allow: ['error', 'warn'] }],

      // Allow 'any' type usage when necessary
      // This can be useful for gradual typing or complex scenarios
      '@typescript-eslint/no-explicit-any': 'off',

      // Allow empty functions
      // Useful for event handlers, callbacks, or intentionally empty implementations
      '@typescript-eslint/no-empty-function': 'off',

      // Configure unused variables checking
      // Allow variables/parameters starting with underscore to be unused
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
          caughtErrorsIgnorePattern: 'error',
        },
      ],
      // Allow empty blocks (like try/catch with empty catch)
      'no-empty': 'off',

      // Allow double boolean casting (!!variable)
      // This is a common pattern for converting values to boolean
      'no-extra-boolean-cast': 'off',

      // Allow escapes in strings even when not strictly necessary
      // This can make regular expressions more readable
      'no-useless-escape': 'off',

      // Allow empty object type declarations
      // Useful for placeholder types or future extensions
      '@typescript-eslint/no-empty-object-type': 'off',
    },
  },
]);
