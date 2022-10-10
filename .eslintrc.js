module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'airbnb',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    curly: ['error', 'all'],
    'jsx-quotes': ['error', 'prefer-single'],
    'max-len': [2, { code: 120 }],
    'react/forbid-prop-types': 0,
    'react/require-default-props': 0,
    semi: ['error', 'never'],
  },
  overrides: [
    {
      files: [
        '**/*.stories.js',
        '**/*.stories.jsx',
      ],
      rules: {
        'react/jsx-props-no-spreading': 0,
      },
    },
  ],
}
