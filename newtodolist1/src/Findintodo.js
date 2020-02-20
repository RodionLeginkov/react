import React from "react";

const Findintodo = ({ compareWord }) => {
  function HandleChange(e) {
    e.preventDefault();
    console.log(e.target.value);
    compareWord(e.target.value);
  }

  return (
    <div>
      <form className="Form">
        <input
          className="FindStr"
          type="text"
          onChange={HandleChange}
          placeholder="Find here"
        />
      </form>
    </div>
  );
};
export default Findintodo;
