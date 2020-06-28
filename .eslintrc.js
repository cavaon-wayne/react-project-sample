module.exports = {
  env: {
    browser: true,
    es2020: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'airbnb',
    'plugin:prettier/recommended',
    'plugin:jest/all',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 11,
    sourceType: 'module',
  },
  plugins: ['react', 'jest'],
  rules: {
    'import/no-unresolved': 0,
    'react/destructuring-assignment': [1, 'always'],
    'react/prefer-stateless-function': 0,
    'react/prefer-es6-class': [1, 'always'],
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'jest/prefer-expect-assertions': 0,
    'jest/expect-expect': 0,
    'jest/consistent-test-it': 0,
  },
  settings: {
    'import/resolver': 'webpack',
  },
};
