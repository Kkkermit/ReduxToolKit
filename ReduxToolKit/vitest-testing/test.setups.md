
# Unit testing

`Vitest` is a next generation testing framework powered by Vite

You can learn more about the rationale behind the project in the [Why Vitest](https://vitest.dev/guide/why.html) section.

# Requirements -

`Vitest` 1.0 requires `Vite >=v5.0.0` and `Node >=v18.00`

# Setting up unit tests -

- Install `vitest` either as a normal dependency or as a dev dependency. We recommend using a dev dependency as this is what is encouraged by `vitest`. 

In terminal use command
```bash
npm install -D vitest
or
yarn add -D vitest
```
- It is recommended that you install a copy of `vitest` in your `package.json`, using one of the methods listed above. However, if you would prefer to run `vitest` directly, you can use `npx vitest`(the `npx` command comes with npm and Node.js).

- The `npx` command will execute the command either from a local `node_modules/.bin` installing any packages needed in order for the command to run. By default, npx will check whether command exists in $PATH, or in the local project binaries, and execute that. If command is not found, it will be installed prior to execution.

## Writing tests -

**Example:**

```js
// sum.js
export function sum(a, b) {
  return a + b
}
```

```js
// sum.test.js
import { expect, test } from 'vitest'
import { sum } from './sum'

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3)
})
```

 - By default, tests must contain ".test." or ".spec." in their file name.

## Executing tests -

- You will need to go into `package.json` and update the following:

```json
{
  "scripts": {
    "test": "vitest"
  }
}
```

 - This allows the tests to be ran as a script has been initiated in the package.json

- Finally, run **`npm run test`**, **`yarn test`**, or **`pnpm test`**, depending on your package manager, and `Vitest` will print this message:

```
✓ sum.test.js (1)
  ✓ adds 1 + 2 to equal 3

Test Files  1 passed (1)
    Tests  1 passed (1)
  Start at  02:15:44
  Duration  311ms (transform 23ms, setup 0ms, collect 16ms, tests 2ms, environment 0ms, prepare 106ms)
```

 - API docs for more usage - [DOCS](https://vitest.dev/api/)

# configuring Vitest - 

One of the main advantages of Vitest is its unified configuration with Vite. If present, `vitest` will read your root `vite.config.ts` to match with the plugins and setup as your Vite app. For example, your Vite [resolve.alias](https://vitejs.dev/config/shared-options.html#resolve-alias) and [plugins](https://vitejs.dev/guide/using-plugins.html) configuration will work out-of-the-box. If you want a different configuration during testing, you can:

 - Create `vitest.config.ts`, which will have the higher priority

 - Pass `--config option` to CLI, e.g. `vitest --config ./path/to/vitest.config.ts`

 - Use `process.env.VITEST` or `mode` property on `defineConfig` (will be set to `test` if not overridden) to conditionally apply different configuration in `vite.config.ts`

Vitest supports the same extensions for your configuration file as Vite does: **`.js, .mjs, .cjs, .ts, .cts, .mts. Vitest does not support .json extension.`**

If you are not using Vite as your build tool, you can configure Vitest using the test property in your config file:

```ts
import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    // ...
  },
})
```

If you are already using Vite, add `test` property in your Vite config. You'll also need to add a reference to Vitest types using a [triple slash directive](https://www.typescriptlang.org/docs/handbook/triple-slash-directives.html#-reference-types-) at the top of your config file.

```ts
/// <reference types="vitest" />
import { defineConfig } from 'vite'

export default defineConfig({
  test: {
    // ...
  },
})
```

# Workspace support - 

Run different project configurations inside the same project with [Vitest Workspaces](https://vitest.dev/guide/workspace.html). You can define a list of files and folders that define your workspace in **`vitest.workspace`** file. The file supports `js`/`ts`/`json` extensions. This feature works great with monorepo setups.

```ts
import { defineWorkspace } from 'vitest/config'

export default defineWorkspace([
  // you can use a list of glob patterns to define your workspaces
  // Vitest expects a list of config files
  // or directories where there is a config file
  'packages/*',
  'tests/*/vitest.config.{e2e,unit}.ts',
  // you can even run the same tests,
  // but with different configs in the same "vitest" process
  {
    test: {
      name: 'happy-dom',
      root: './shared_tests',
      environment: 'happy-dom',
      setupFiles: ['./setup.happy-dom.ts'],
    },
  },
  {
    test: {
      name: 'node',
      root: './shared_tests',
      environment: 'node',
      setupFiles: ['./setup.node.ts'],
    },
  },
])
```

# Command line interface - 

In a project where Vitest is installed, you can use the `vitest` binary in your npm scripts, or run it directly with `npx vitest`. Here are the default npm scripts in a scaffolded Vitest project:

```json
{
  "scripts": {
    "test": "vitest",
    "coverage": "vitest run --coverage"
  }
}
```

 - To run tests once without watching for file changes, use `vitest run`. You can specify additional CLI options like `--port` or `--https`. For a full list of CLI options, run `npx vitest --help` in your project.

 - More on [command line interface](https://vitest.dev/guide/cli.html)


# Vitest with React Testing Library 

# Installation - 

1. Run command in terminal: 

```bash
npm install jsdom --save-dev
```

2. Include it to the Vite configuration file `vite.config.ts`:

```ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
  + environment: 'jsdom',
  },
});
```

3. Install React Testing Library on the command line:

```bash
npm install @testing-library/react @testing-library/jest-dom --save-dev
```

4. Add a test setup file in `tests/setup.js` and give it the following implementation:

```ts
import { expect, afterEach } from 'vitest';
import { cleanup } from '@testing-library/react';
import * as matchers from "@testing-library/jest-dom/matchers";

expect.extend(matchers);

afterEach(() => {
  cleanup();
});
```

5. include this new test setup file in Vite's configuration file `vite.config.ts`. In addition, make all imports from **Vitest global**, so that you don't need to perform these imports (e.g. expect) in each file manually anymore:

```ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './tests/setup.js',
  },
});
```

- And thats it for the installation; Examples of usage:

```ts
import { render, screen } from '@testing-library/react';

import App from './App';

describe('App', () => {
  it('renders headline', () => {
    render(<App title="React" />);

    screen.debug();

    // check if App components renders headline
  });
});
```

 - More info on **Testing React Components with React Testing Library** found [here](https://www.robinwieruch.de/react-testing-library/)