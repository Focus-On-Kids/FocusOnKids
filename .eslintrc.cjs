module.exports = {
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended'
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  settings: { react: { version: '18.2' } },
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': 'warn',
    'react/prop-types': 'off',
    'react/no-array-index-key': 'warn',
    'react/react-in-jsx-scope': 'off',
    'semi': 'error',
    'quotes': ['error', 'single'],
    'jsx-quotes': ['error', 'prefer-double'],
    'eol-last': 'error',
    'keyword-spacing': 'error',
    'space-before-blocks': 'error',
    'object-curly-spacing': ['error', 'always'],
    'indent': ['error', 2]
  },
};
