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
    'import/extensions': ['error', {
      jsx: 'always',
      json: 'always',
    }]
  },
};
