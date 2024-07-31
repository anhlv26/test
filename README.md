# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json', './tsconfig.app.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list

1. Install
  yarn add -D vite
  yarn install
  yarn add @mui/material @emotion/react @emotion/styled @mui/styled-engine-sc styled-components @mui/icons-material
  yarn add @reduxjs/toolkit react-redux
  yarn add react-router-dom

2. Config eslint
  "@typescript-eslint/no-unused-vars": ["warn"],
    "no-console": 1,
    "no-trailing-spaces": 1,
    "no-multi-spaces": 1,
    "no-multiple-empty-lines": 1,
    "space-before-blocks": ["error", "always"],
    "object-curly-spacing": [1, "always"],
    "indent": ["warn", 2],
    "semi": [1, "always"],
    "quotes": ["error", "double"],
    "array-bracket-spacing": 1,
    "linebreak-style": 0,
    "keyword-spacing": 1,
    "comma-dangle": 1,
    "comma-spacing": 1,
    "arrow-spacing": 1,

3. Delete files and add cssbaseline into app.tsx

4. Config import: enter the file vite.config.ts and add codes: resolve: { alias: [ { find: '~', replacement: '/src' } ] }

enter the file tsconfig.app.json and add code: "paths": { "~/": ["./src/"] },
