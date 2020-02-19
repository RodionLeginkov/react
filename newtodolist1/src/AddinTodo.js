import React, { Component } from "react";

class AddinTodo extends Component {
  state = {
    content: ""
  };

  HandleChange = e => {
    this.setState({
      content: e.target.value
    });
  };

  HandleSubmit = e => {
    e.preventDefault();
    const characters = /[A-Za-z0-9А-Яа-я]/;

    if (characters.test(this.state.content)) {
      this.props.Addnewtodo(this.state);
      this.setState({
        content: ""
      });
    } else {
      this.setState({
        content: ""
      });
    }
  };

  render() {
    return (
      <div>
        <form className="Form" onSubmit={this.HandleSubmit}>
          <input
            className="InputStr"
            type="text"
            onChange={this.HandleChange}
            value={this.state.content}
            placeholder="What needs to be done?..."
          />
        </form>
      </div>
    );
  }
}
export default AddinTodo;
