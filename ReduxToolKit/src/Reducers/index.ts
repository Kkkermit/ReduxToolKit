// ActionTypes.ts
export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';

export interface AddTodoAction {
  type: typeof ADD_TODO;
  payload: string;
}

export interface ToggleTodoAction {
  type: typeof TOGGLE_TODO;
  payload: number;
}

export type TodoAction = AddTodoAction | ToggleTodoAction;
