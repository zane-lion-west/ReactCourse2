# React Skeleton App

## React Typescript base project built with Vite

Setup: 

* [Vite](https://vitejs.dev/) - Tool used to create and serve application
* [React](https://reactrouter.com/en/main) - Main Framework
* [Typescript](https://www.typescriptlang.org/) - Base Language
* [SASS](https://sass-lang.com/) - Styling
* [SASS modules](https://github.com/css-modules/css-modules) - Styling
* [ESLint](https://eslint.org/) - Linting & Checking for problems
* [Prettier](https://prettier.io/) - Linting & Code Formatting
* [React Router DOM](https://reactrouter.com/en/main) - Routing


ESLint Setup
* [Import Resolver](https://github.com/import-js/eslint-import-resolver-typescript) - Import resolving, makes imports look cleaner
* [Typescript ESLint Parser](https://github.com/typescript-eslint/typescript-eslint/tree/main/packages/parser)
* [Typescript ESLint Plugin](https://github.com/typescript-eslint/typescript-eslint/tree/main/packages/eslint-plugin)
* [ESLint Plugin React](https://github.com/jsx-eslint/eslint-plugin-react)
* [ESLint Plugin React Hooks](https://www.npmjs.com/package/eslint-plugin-react-hooks)
* [ESLint Plugin Import](https://github.com/import-js/eslint-plugin-import)
* [ESLint Plugin JSX a11y](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y)

## Description

This is a skeleton repository that should be used to start frontend React Projects.

To start your project clone this repo using:

```bash
git clone --bare <url> <target folder>
```
To run linting & formatting checks:
```bash
npm run check-types
```
```bash
npm run lint
```
```bash
npm run format
```
To run fix linting & formatting:
```bash
npm run lint:fix
```
```bash
npm run format:fix
```
To run the localhost environment:
```bash
npm run dev
```

## Import Resolving
To add a new import alias you need to update 2 things:
```{ paths }``` in the [Typescript Config](./tsconfig.json) and ```{ alias }``` in the [Vite Config](./vite.config.ts).

Then if you follow the format set out the imports at the top of your files should look like:
```typescript
import { Hello } from '#components';
```
To make use of the "object destructuring" type of importing, you should make use of an index.ts file in the root of every folder (as shown in the [components folder](./src/components/index.ts)).