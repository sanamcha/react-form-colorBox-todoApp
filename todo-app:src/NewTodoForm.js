import React, { useState } from "react";
import {v1 as uuid} from "uuid";

const NewTodoForm = ({ createTodo }) => {
  const [list, setList] = useState("");

  const handleChange = e => {
    setList(e.target.value);
  };

  const input = e => {
    e.preventDefault();
    createTodo({ list, id: uuid() });
    setList("");
  };

  return (
    <div>
      <form onSubmit={ input }>
        <label htmlFor="list">TODO-LIST:</label>
        <input
          id="list"
          name="list"
          type="text"
          onChange={ handleChange }
          value={ list }
        />
        <button>Add Todo-List:</button>
      </form>
    </div>
  );
}

export default NewTodoForm;