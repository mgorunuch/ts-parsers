import antfu from '@antfu/eslint-config'

export default antfu(
  {
    stylistic: {
      indent: 2, // 4, or 'tab'
      quotes: 'single', // or 'double'
    },
  },
  {
    rules: {
      'regexp/no-unused-capturing-group': 'off',
      'regexp/no-potentially-useless-backreference': 'off',
      'no-prototype-builtins': 'off',
    }
  },
)
