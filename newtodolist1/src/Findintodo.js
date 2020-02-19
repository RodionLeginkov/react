import React from "react";

const Findintodo = () => {
  const HandleChange = e => {
    e.preventDefault();
    this.setState({
      content: e.target.value
    });
  };
  return (
    <div>
      <form className="Form">
        <input
          className="FindStr"
          type="text"
          onChange={HandleChange}
          //value={this.state.content}
          placeholder="Find here"
        />
      </form>
    </div>
  );
};

export default Findintodo;
