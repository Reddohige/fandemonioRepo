module.exports = {
  semi: false,
  singleQuote: true,
  trailingComma: 'es5',
  printWidth: 100,
  tabWidth: 2,
  plugins: ['prettier-plugin-tailwindcss', 'prettier-plugin-css-order'],
  overrides: [
    {
      files: ['*.css', '*.scss'],
      options: {
        singleQuote: false,
      },
    },
  ],
}
