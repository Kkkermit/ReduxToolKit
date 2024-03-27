import "../Styles/index.css";
import { useDispatch, useSelector } from "react-redux";
import { Todo, TodoState } from "../Reducers/taskReducer";
import { ADD_TODO, TOGGLE_TODO } from "../Reducers/index";
import ReduxLogo from "../Assets/redux.svg";
import config from "../Config/index.json";
import alt from "../Config/altText.json";
import { useState } from "react";
import { Action } from "@reduxjs/toolkit/react";

const Header = config.header;
const ReduxLogoAlt = alt.index.reduxlogo;

const Index: React.FC = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state: TodoState) => state.todos);
  const [text, setText] = useState("");

  const handleAddTodo = () => {
    if (text.trim()) {
      dispatch({ type: ADD_TODO, payload: text });
      setText("");
    }
  };

  const handleToggleTodo = (id: number) => {
    dispatch({ type: TOGGLE_TODO, payload: id });
  };
  return (
    <>
      <div className="container">
        <div className="header-container">
          <header className="header">{Header}</header>
        </div>
        <div className="logo-container">
          <img className="redux-logo" src={ReduxLogo} alt={ReduxLogoAlt[0]} />
        </div>
        <div>
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <button onClick={handleAddTodo}>Add Todo</button>
          <ul>
            {todos.map((todo: Todo) => (
              <li
                key={todo.id}
                onClick={() => handleToggleTodo(todo.id)}
                style={{
                  textDecoration: todo.completed ? "line-through" : "none",
                }}
              >
                {todo.text}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Index;
function rootReducer(_state: unknown, _action: Action<string>): unknown {
throw new Error("Function not implemented.");
}

