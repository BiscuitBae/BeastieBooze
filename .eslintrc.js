module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  parser: '@babel/eslint-parser',
  plugins: [
    'import',
    'jsx-ally',
    'react',
    'react-hooks',
  ],
  rules: {
     /* Indentation */
     'no-mixed-spaces-and-tabs': 2,
     'indent': [2, 2],
     /* Variable camelCase */
     'camelcase': 2,
     /* Language constructs */
     'curly': 2,
     'eqeqeq': [2, 'smart'],
     'func-style': [2, 'expression'],
     'no-var': 2,
     'prefer-const': 2,
     /* Semicolons */
     'semi': 2,
     'no-extra-semi': 2,
     /* Padding & additional whitespace (preferred but optional) */
     'brace-style': [2, '1tbs', { 'allowSingleLine': true }],
     'semi-spacing': 1,
     'key-spacing': 1,
     'block-spacing': 1,
     'comma-spacing': 1,
     'no-multi-spaces': 1,
     'space-before-blocks': 1,
     'keyword-spacing': [1, { 'before': true, 'after': true }],
     'space-infix-ops': 1,
     /* Minutia */
     'comma-style': [2, 'last'],
     'quotes': [1, 'single'],
    'import/extensions': ['error', {
      jsx: 'always',
      json: 'always',
    }],
  },
};
