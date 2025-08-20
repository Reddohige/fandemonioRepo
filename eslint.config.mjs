import withNuxt from '@nuxt/eslint-config/flat'

export default withNuxt(
  {
    files: ['**/*.{js,ts,vue}'],
    ignores: ['.nuxt', 'dist', '.output', 'node_modules'],
    rules: {
      semi: ['error', 'never'],
      quotes: ['error', 'single'],
      'no-unused-vars': ['warn'],
      'vue/multi-word-component-names': 'off',
    },
  },
  {
    rules: {
      'prettier/prettier': 'error',
    },
  }
)
