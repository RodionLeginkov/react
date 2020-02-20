import React, { useState } from "react";
import Todolist from "./Todolist";
import AddinTodo from "./AddinTodo";
import Findintodo from "./Findintodo";
import Menubutton from "./Menubutton";
import "./App.css";

function App() {
  const [checkbutton, setCheckbutton] = useState("");
  const [keyWord, setKeyWord] = useState("");
  const [todolist, setTodolist] = useState([
    {
      content: "go home",
      id: 1,
      checked: false,
      backlight: "notselected",
      status: "active"
    }
  ]);

  const compareWord = word => {
    setKeyWord(word);
  };

  const DeleteTodo = id => {
    const todos = todolist.filter(todo => {
      return todo.id !== id;
    });
    setTodolist(todos);
  };
  const Addnewtodo = todo => {
    const newTodo = {
      content: todo,
      id: Math.random(),
      status: "active",
      checked: false,
      backlight: "notselected"
    };

    setTodolist(prevState => [...prevState, newTodo]);
  };
  const HandleChange = e => {
    setTodolist(prevState => [...prevState, e.target.value]);
  };

  const complitedButton = () => {
    //todolist.checkbutton = "complite";
    //setCheckbutton(prevState => ({ ...prevState, checkbutton: "complite" }));
    setCheckbutton("complite");
  };
  const activeButton = () => {
    // todolist.checkbutton = "active";
    //setCheckbutton(prevState => ({ ...prevState, checkbutton: "active" }));
    setCheckbutton("active");
  };

  const allButton = () => {
    // todolist.checkbutton = "";
    //setCheckbutton(prevState => ({ ...prevState, checkbutton: "" }));
    setCheckbutton("");
  };

  const handleCheckbox = id => {
    const todos = [...todolist];
    todos.forEach(todo => {
      if (todo.id === id) {
        if (todo.checked === false) {
          todo.checked = true;
          todo.backlight = "selected";
        } else {
          todo.checked = false;
          todo.backlight = "unselected";
        }
      }
    });
    setTodolist(todos);
  };

  let FilteredTodo = todolist.filter(todo => todo.content.includes(keyWord));
  console.log({ checkbutton });
  if (checkbutton === "complite") {
    FilteredTodo = todolist.filter(todo => todo.checked === true);
  } else if (checkbutton === "active") {
    FilteredTodo = todolist.filter(todo => todo.checked === false);
  }

  return (
    <div className="Allpage">
      <div className="container">
        <div className="header">
          <h1>Todos</h1>
        </div>
      </div>
      <div className="container">
        <Findintodo compareWord={compareWord} />
        <Todolist
          todos={FilteredTodo}
          DeleteTodo={DeleteTodo}
          handleCheckbox={handleCheckbox}
        />

        <AddinTodo Addnewtodo={Addnewtodo} />
        {
          <Menubutton
            complitedButton={complitedButton}
            activeButton={activeButton}
            allButton={allButton}
          />
        }
      </div>
    </div>
  );
}
export default App;
