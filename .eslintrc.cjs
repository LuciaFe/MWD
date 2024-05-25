module.exports = {
  root: true,
  extends: [
    '@nuxt/eslint-config',
    'prettier',
    'plugin:prettier/recommended',
    'plugin:storybook/recommended',
  ],
  plugins: ['prettier'],
  rules: {
    'vue/max-attributes-per-line': [
      'warn',
      {
        singleline: {
          max: 3,
        },
      },
    ],
  },
}
