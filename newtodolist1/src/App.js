import React, { Component } from "react";
import Todolist from "./Todolist";
import AddinTodo from "./AddinTodo";
import Findintodo from "./Findintodo";
import "./App.css";

class App extends Component {
  state = {
    keyWord: "go",
    todos: [
      { content: "go home", id: 1, checked: false, backlight: "notselected" },
      { content: "avc", id: 2, checked: false, backlight: "notselected" }
    ]
  };

  DeleteTodo = id => {
    const todos = this.state.todos.filter(todo => {
      return todo.id !== id;
    });
    this.setState({
      todos
    });
  };
  Addnewtodo = todo => {
    todo.id = Math.random();
    todo.checked = false;
    const todos = [...this.state.todos, todo];
    this.setState({
      todos
    });
  };
  HandleChange = e => {
    this.setState({
      content: e.target.value
    });
  };

  handleCheckbox = id => {
    const todos = [...this.state.todos];
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
    this.setState({
      todos
    });
  };

  render() {
    /*const filteredTodo = this.state.todos.filter(todo => {
      return todo.content.inclides();
    });*/
    return (
      <div className="Allpage">
        <div className="container">
          <div className="header">
            <h1>Todos</h1>
          </div>
        </div>
        <div className="container">
          <Findintodo />
          <Todolist
            todos={this.state.todos}
            DeleteTodo={this.DeleteTodo}
            handleCheckbox={this.handleCheckbox}
          />
          <AddinTodo Addnewtodo={this.Addnewtodo} />
        </div>
      </div>
    );
  }
}

export default App;
