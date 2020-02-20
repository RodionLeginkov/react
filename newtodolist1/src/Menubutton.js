import React from "react";

const Menubutton = ({ complitedButton, activeButton, allButton }) => {
  return (
    <div className="optionButton">
      <ul>
        <li
          onClick={() => {
            allButton();
          }}
        >
          <a href="#/" onClick={() => {}}>
            All
          </a>
        </li>
        <li
          onClick={() => {
            activeButton();
          }}
        >
          <a href="#/Active">Active</a>
        </li>
        <li
          onClick={() => {
            complitedButton();
          }}
        >
          <a href="#/Complited">Complited</a>
        </li>
      </ul>
    </div>
  );
};
export default Menubutton;
