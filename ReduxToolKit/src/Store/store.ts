import { legacy_createStore as createStore } from 'redux';
import { todoReducer } from "../Reducers/taskReducer";

const store = createStore(todoReducer);

export default store;
