import React, { useState } from "react";

function AddinTodo({ Addnewtodo }) {
  const [content, setContent] = useState("");

  const HandleChang = e => {
    setContent(e.target.value);
  };

  const HandleSubmit = e => {
    e.preventDefault();
    const characters = /[A-Za-z0-9А-Яа-я]/;

    if (characters.test(content)) {
      Addnewtodo(content);
      setContent("");
    } else {
      setContent("");
    }
  };

  return (
    <div>
      <form className="Form" onSubmit={HandleSubmit}>
        <input
          className="InputStr"
          type="text"
          onChange={HandleChang}
          value={content}
          placeholder="What needs to be done?..."
        />
      </form>
    </div>
  );
}

export default AddinTodo;
