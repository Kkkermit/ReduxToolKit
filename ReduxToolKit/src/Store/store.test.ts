import { describe, it, expect } from 'vitest'; 
import { legacy_createStore as createStore } from 'redux';
import { todoReducer } from '../Reducers/taskReducer';
import store from './store';

describe('store', () => {
  it('should crate a store with todoReducer', () => {
    const testStore = createStore(todoReducer);
    const initialState = testStore.getState();
    expect(initialState).toEqual({ todos: [] })
  })
})