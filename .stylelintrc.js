module.exports = {
  root: true,
  plugins: ['stylelint-prettier'],
  extends: ['stylelint-config-spaceninja', 'stylelint-config-prettier'],
  rules: {
    'prettier/prettier': true,
  },
};
