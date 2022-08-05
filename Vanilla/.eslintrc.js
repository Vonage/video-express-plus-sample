module.exports = {
  root: true,
  env: {
    browser: true,
    es6: true,
  },
  extends: ['airbnb-base'],
  parserOptions: {
    ecmaVersion: '2018',
    sourceType: 'module'
  },
  ignorePatterns: ['**/*.html', 'assets/**/*.js)'],
  rules: {
    'object-shorthand': ['error', 'always'],
    'no-console': 'off'
  },
};
