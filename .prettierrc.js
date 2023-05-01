module.exports = {
  bracketSpacing: false,
  bracketSameLine: true,
  singleQuote: true,
  jsxSingleQuote: true,
  trailingComma: 'all',
  printWidth: 120,
  tabWidth: 2,
  jsxBracketSameLine: true,
  semi: true,
  useTabs: false,
  arrowParens: 'always',
  proseWrap: 'never',
  overrides: [
    {
      files: '*.tsx',
      options: {
        parser: 'typescript',
        semi: true,
        trailingComma: 'all',
        jsxBracketSameLine: false,
        singleQuote: true,
        printWidth: 120,
        tabWidth: 2,
        bracketSpacing: true,
        arrowParens: 'always',
        proseWrap: 'never',
        useTabs: false,
        importSpacing: true,
        jsxAttributeSpacing: true,
      },
    },
  ],
};
