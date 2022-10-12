module.exports = {
    env: {
      es2021: true,
      node: true
    },
   extends: ['plugin:@typescript-eslint/recommended', 'prettier'],
    parser: '@typescript-eslint/parser',
    parserOptions: {
      ecmaVersion: 2020,
      sourceType: 'module'
    },
   plugins: ['@typescript-eslint', 'prettier'],
    rules: {
      "@typescript-eslint/no-unused-vars": "off",
      "@typescript-eslint/no-var-requires": "off",
      "@typescript-eslint/no-expticit-any": "off",
      "semi": [2, "always"],
      "keyword-spacing": ["error", {"after": true}],
      "comma-spacing": ["error", { "before": false, "after": true }],
      "space-before-blocks": "error",
      "no-extra-boolean-cast": "off"
    }
};