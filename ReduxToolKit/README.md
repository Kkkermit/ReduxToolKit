This `README.md` provides an overview of Redux Toolkit, how to install it, how to get started with it, an example, links to official documentation and the GitHub repository, information on contributing, and the license. You can further expand and customize it based on your specific project needs.

# Redux Toolkit

Redux Toolkit is an opinionated, batteries-included tool-set for efficient Redux development. It is designed to simplify common Redux use cases, streamline your Redux code, and eliminate unnecessary boilerplate.

## Features

- **Redux State Management**: Redux Toolkit provides a powerful state management solution based on the Redux library, offering a single source of truth for your application state.

- **Simplified Syntax**: It offers simplified APIs for common Redux tasks, such as creating slices, defining reducers, and dispatching actions, reducing the amount of boilerplate code needed.

- **Immutability Helpers**: Redux Toolkit includes utility functions that simplify working with immutable data, such as `createSlice`, `createReducer`, and `createAction`.

- **Built-in Thunk Support**: Redux Toolkit comes with built-in support for Redux Thunks, allowing you to write asynchronous logic and side effects in your Redux applications.

- **DevTools Integration**: It integrates seamlessly with Redux DevTools Extension, providing advanced debugging capabilities for your Redux application.

## Installation

To install Redux Toolkit in your project, you can use npm or yarn:

```bash
npm install @reduxjs/toolkit
or
yarn add @reduxjs/toolkit
```

## Getting Started

1. Create a Redux Store: Initialize your Redux store using configureStore from Redux Toolkit.

2. Define Slices: Define Redux state slices using createSlice to encapsulate related logic for managing state.

3. Write Reducers: Write reducer functions to handle state updates based on dispatched actions.

4. Dispatch Actions: Dispatch actions to update the state using the dispatch function provided by Redux Toolkit.

5. Access State: Access the application state using useSelector hook or getState method from the Redux store.

### Example:

```js
import { configureStore, createSlice } from "@reduxjs/toolkit";

// Define a slice
const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 0,
  },
  reducers: {
    increment(state) {
      state.value += 1;
    },
    decrement(state) {
      state.value -= 1;
    },
  },
});

// Create a Redux store
const store = configureStore({
  reducer: counterSlice.reducer,
});

// Export actions for use in components
export const { increment, decrement } = counterSlice.actions;

export default store;
```

- Documentation
  For more detailed documentation and usage examples, refer to the [official Redux Toolkit documentation.](https://redux-toolkit.js.org/)

- Contributing
  If you find any issues or have suggestions for improvements, feel free to open an issue or submit a pull request on the [Redux Toolkit GitHub repository.](https://github.com/reduxjs/redux-toolkit) Contributions are welcome!

- License
  Redux Toolkit is open-source software licensed under the [MIT License.](https://opensource.org/license/mit)

# Setting up the repo 

In order to setup this repository and run the code for you self, you will need to: 

- Either `clone` or `fork` the repo to your device. 

- Run command in terminal **``cd ReduxToolKit``** to go into the file.

- Run **``npm i``** in order to install `node_modules`.

- Run **`npm run dev`** to launch the app in [localhost](http://localhost:5173/) : `http://localhost:5173/`

To edit the text on page, visit **`index.tsx`** found in `components` folder.

## Running -

When using script command `npm run dev`, it will launch the app on [localhost](http://localhost:5173/) on port 5173 unless otherwise specified. If port 5173 is already in use, Vite will automatically launch the local host on port `5174`. If that port is taken up, the end number will increase in increments of 1 **``i++``**

## Scripts -

List of all scripts runnable; found in `package.json`

**`npm run dev`** [Initializes local host on machine on port 5173]

**`npm run build`** [Runs the build script, creates dist file ready for deployment]

**`npm run lint`** [Runs the lint function editable in `.eslintrc.cjs`]

**`npm run preview`** [Creates preview in terminal, fake launch port 4173]

**`npm run test`** [Runs unit testing on files that include `.test.ts?(x)`]

## Testing -

Unit testing on this repo is done with [vitest](https://vitest.dev/), vite's own testing framework. Along with vitest, unit testing is also run with [@testing-library/react](https://testing-library.com/docs/react-testing-library/intro/). To configure more tests, please use either docs, or pre-existing testing file found in this repo as a template.

- Example of unit testing using `vitest`

```js
import { todoReducer } from './taskReducer';
import { describe, it, expect } from 'vitest'; 
import { ADD_TODO, TOGGLE_TODO, AddTodoAction, ToggleTodoAction } from './index';

describe('todoReducer', () => {
  it('should handle ADD_TODO', () => {
    const initialState = { todos: [] };
    const action: AddTodoAction = { type: ADD_TODO, payload: 'Test todo' };
    const newState = todoReducer(initialState, action);
    expect(newState.todos).toHaveLength(1);
    expect(newState.todos[0].text).toEqual('Test todo');
    expect(newState.todos[0].completed).toBeFalsy();
  });

  it('should handle TOGGLE_TODO', () => {
    const initialState = {
      todos: [
        { id: 1, text: 'Test todo', completed: false }
      ]
    };
    const action: ToggleTodoAction = { type: TOGGLE_TODO, payload: 1 };
    const newState = todoReducer(initialState, action);
    expect(newState.todos[0].completed).toBeTruthy();
  });

  it('should return the same state for unknown action types', () => {
    const initialState = { todos: [] };
    const action = { type: 'UNKNOWN_ACTION', payload: 'Test todo' } as any;
    const newState = todoReducer(initialState, action);
    expect(newState).toEqual(initialState);
  });
});
```

## Versions -

All code was produced on Node v18.13.0 -
**The code has not been tested on older/ newer Node versions. If you want to use this repo, we suggest using v18.13.0 for minimal errors**

## Troubleshooting -

For troubleshooting the code, please use docs [official Redux Toolkit documentation.](https://redux-toolkit.js.org/). For issues with package, try using Node v18.13.0 or uninstalling/ deleting `node_modules` and re-installing with `npm i`. If all else fails and you haven't edited any of the base code, open an issue on the repo [here](https://github.com/Kkkermit/ReduxToolKit/issues). If you've updated the code and changed, that's on you, you must figure out the issue, try looking through docs. **DO NOT OPEN AN ISSUE ON THE REPO!!!!**

## Got stuck or need help ##

- Contact me on discord: [Kkermit.](https://discord.com/users/526853643962679323) or create a discussion on main repository found [here](https://github.com/Kkkermit/ReduxToolKit/discussions)

### If you are a fan of the repo and want to support it, please feel free to leave a star :) 