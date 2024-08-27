# Vue Composables Course

This repo provides the source code for the course [Vue Composables](https://vueschool.io/courses/vue-composables).

![Course image](https://vueschool.io/storage/media/8ced0a9a39f1b67ddb337980b5a1a5a4/vueschool-vue-composables-course.jpeg)

Composables are the BEST way of creating re-usable stateful logic within a Vue application. In this course, code along with me as we create a useCycleList composable together. Along the way, you’ll learn:

- The essential syntaxes of how to create a composable
- How to define reactive state outside of a component
- Some simple design patterns for making your composables easier to use
- How to provide the best DX with type-safe composable interfaces
- plus more!

---

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) to make the TypeScript language service aware of `.vue` types.

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
