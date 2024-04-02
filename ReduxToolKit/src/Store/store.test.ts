import { todoReducer } from '../Reducers/taskReducer';
import { ADD_TODO, TOGGLE_TODO, AddTodoAction, ToggleTodoAction } from '../Reducers/index';

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
    const action = { type: 'UNKNOWN_ACTION', payload: 'Test todo' } as any; // Casting to any to suppress type error
    const newState = todoReducer(initialState, action);
    expect(newState).toEqual(initialState);
  });
});
