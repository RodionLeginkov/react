import React, { Component } from "react";
import Todolist from "./Todolist";
import AddinTodo from "./AddinTodo";
import Findintodo from "./Findintodo";
import Menubutton from "./Menubutton";
import "./App.css";

class App extends Component {
  state = {
    checkbutton: "",
    keyWord: "",
    todos: [
      {
        content: "go home",
        id: 1,
        checked: false,
        backlight: "notselected",
        status: "active"
      },
      {
        content: "avc",
        id: 2,
        checked: false,
        backlight: "notselected",
        status: "active"
      }
    ]
  };

  compareWord = word => {
    this.setState({
      keyWord: word
    });
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
    todo.backlight = "notselected";
    todo.status = "active";
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

  complitedButton = () => {
    //this.state.checkbutton = "complite";
    this.setState(prevState => ({ ...prevState, checkbutton: "complite" }));
  };
  activeButton = () => {
    // this.state.checkbutton = "active";
    this.setState(prevState => ({ ...prevState, checkbutton: "active" }));
  };

  allButton = () => {
    // this.state.checkbutton = "";
    this.setState(prevState => ({ ...prevState, checkbutton: "" }));
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
    let FilteredTodo = this.state.todos.filter(todo => {
      //console.log(this.state.keyWord);

      return todo.content.includes(this.state.keyWord);
    });
    if (this.state.checkbutton === "complite") {
      FilteredTodo = this.state.todos.filter(todo => todo.checked === true);
    } else if (this.state.checkbutton === "active") {
      FilteredTodo = this.state.todos.filter(todo => todo.checked === false);
    }

    return (
      <div className="Allpage">
        <div className="container">
          <div className="header">
            <h1>Todos</h1>
          </div>
        </div>
        <div className="container">
          <Findintodo compareWord={this.compareWord} />
          <Todolist
            todos={FilteredTodo}
            DeleteTodo={this.DeleteTodo}
            handleCheckbox={this.handleCheckbox}
          />

          <AddinTodo Addnewtodo={this.Addnewtodo} />
          <Menubutton
            complitedButton={this.complitedButton}
            activeButton={this.activeButton}
            allButton={this.allButton}
          />
        </div>
      </div>
    );
  }
}

export default App;
