import { todoReducer } from "./taskReducer";
import { describe, it, expect } from "vitest";
import { ADD_TODO, TOGGLE_TODO, AddTodoAction, ToggleTodoAction } from "./index";

describe('toDoReducer', () => {
  it("Should handler ADD_TODO", () => {
    const initialState = { todos: [] };
    const action: AddTodoAction = { type: ADD_TODO, payload: "Test todo" };
    const newState = todoReducer(initialState, action);
    expect(newState.todos).toHaveLength(1);
    expect(newState.todos[0].text).toEqual("Test todo");
    expect(newState.todos[0].completed).toBeFalsy();
  });

  it("Should Handle TOGGLE_TODO", () => {
    const initialState ={
      todos: [
        { id: 1, text: 'Test todo', completed: false }
      ]
    };
    const action: ToggleTodoAction = { type: TOGGLE_TODO, payload: 1 };
    const newState = todoReducer(initialState, action);
    expect(newState.todos[0].completed).toBeTruthy();
  });

  it("Should return the same state for the unknown action types", () => {
    const initialState = { todos: [] };
    const action = { type: 'UNKNOWN_ACTION', payload: "Test todo" } as any;
    const newState = todoReducer(initialState, action);
    expect(newState).toEqual(initialState);
  });
});