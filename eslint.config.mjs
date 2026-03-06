import tseslint from 'typescript-eslint';

export default tseslint.config(
  { ignores: ['node_modules', '.next', 'tailwind.config.ts'] },
  ...tseslint.configs.recommended,
  {
    linterOptions: { reportUnusedDisableDirectives: 'off' },
    rules: {
      '@typescript-eslint/no-explicit-any': 'off',
    },
  },
);
