const ENV_MODE = process.env.NODE_ENV === 'production' ? 'error' : 'off';

module.exports = {
  root: true,
  env: {
    node: true,
    browser: true,
  },
  extends: [
    'eslint:recommended',
    '@nuxt/eslint-config',
    'plugin:prettier/recommended',
  ],
  rules: {
    'vue/component-name-in-template-casing': ['error', 'kebab-case'],
    'vue/multi-word-component-names': ENV_MODE,
    'no-console': ENV_MODE,
    'no-debugger': ENV_MODE,
    'prettier/prettier': 0,
  },
  globals: {
    $nuxt: true,
  },
};
