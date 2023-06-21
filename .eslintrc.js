module.exports = {
    root: true,
    env: {
        node: true,
        browser: true,
    },
    extends: [
        'eslint:recommended',
        'plugin:vue/vue3-essential',
        '@nuxt/eslint-config',
        'plugin:prettier/recommended',
    ],
    rules: {
        'vue/component-name-in-template-casing': ['error', 'kebab-case'],
        'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    },
    globals: {
        $nuxt: true,
    },
};