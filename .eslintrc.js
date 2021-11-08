module.exports = {
  env: {
    node: true,
  },
  extends: ['eslint:recommended', 'plugin:vue/vue3-recommended', 'prettier'],
  rules: {
    // this shouldn't be needed: https://github.com/vuejs/eslint-plugin-vue/issues/1635
    'vue/v-on-event-hyphenation': [
      'warn',
      'always',
      { ignore: ['update:modelValue'] },
    ],
  },
  overrides: [
    {
      // HACK: https://github.com/vuejs/eslint-plugin-vue/issues/1355
      files: ['**/*.html'],
      rules: { 'vue/comment-directive': 'off' },
    },
  ],
};
