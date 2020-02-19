import React from "react";

const Todolist = ({ todos, DeleteTodo, handleCheckbox }) => {
  const list = todos.length ? (
    todos.map(todo => {
      return (
        <div className={`Collection-item ${todo.backlight}`} key={todo.id}>
          <div
            className="iconSelect"
            onClick={() => {
              handleCheckbox(todo.id);
            }}
          ></div>
          <p>{todo.content}</p>
          <div
            className="iconDelete"
            onClick={() => {
              DeleteTodo(todo.id);
            }}
          ></div>
        </div>
      );
    })
  ) : (
    <p className="center"> You don't have todo</p>
  );
  return <div className="todos collection">{list}</div>;
};

export default Todolist;
