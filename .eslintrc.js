module.exports = {
  root: true,
  extends: [
    '@react-native-community',
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  plugins: ['react', 'react-native'],
  rules: {
    'jsx-quotes': ['error', 'prefer-single'],
    'prettier/prettier': 0,
  },
};
