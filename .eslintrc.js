module.exports = {
  env: {
    browser: true,
    node: true,
  },
  extends: [
    'airbnb',
    'eslint:recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'prettier/react',
    'last',
    'plugin:vue/recommended',
  ],
  rules: {
    'no-console': 'off',
    'no-underscore-dangle': 'off',
    'consistent-return': 'warn',
    'global-require': 'off',
    'import-order-autofix/order': 'warn',
    'prefer-destructuring': 'warn',
    'import/no-extraneous-dependencies': 'off',
    'import/no-dynamic-require': 'off',
    'prettier/prettier': ['error', null, {
      'trailing-commas': 'es5'
    }]
  },
  parser: 'vue-eslint-parser',
  plugins: ['vue', 'json', 'import', 'prettier', 'import-order-autofix'],
};