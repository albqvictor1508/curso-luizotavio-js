module.exports = {
  "env": {
    "es6": true,
    "node": true,
  },
  "extends": [
    "airbnb-base",
  ],
  "globals": {
    "Atomics": "readonly",
    "SharedArrayBuffer": "readonly",
  },
  "parserOptions": {
    "ecmaVersion": 2018,
    "sourceType": "module",
  },
  "rules": {
    "no-console": "off",
    'quotes': "off",
    'quote-props': 'off',
    "class-methods-use-this": "off",
    "no-extraneous-dependencies": "off",
    'import/newline-after-import': 'off',
    'import/first': 'off',
  },
};
