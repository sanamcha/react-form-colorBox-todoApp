import React, { useState } from "react";


const Todo = ({ list = "todo", id = "1", remove, update }) => {
    const [editList, setEditList] = useState(list);
    const [isEditing, setIsEditing] = useState(false);
  
    const toggleEdit = () => {
      setIsEditing(edit => !edit);
    };
  
    const handleChange = e => {
      setEditList(e.target.value);
    };
  
    const handleDelete = () => remove(id);
  
    const handleUpdate = e => {
      e.preventDefault();
      update(id, editList);
      setIsEditing(false);
    };
  

    let result = (
      <div>
        <li>{list}</li>
        <button onClick={toggleEdit}>Edit.</button>
        <button onClick={handleDelete}>X</button>
      </div>
    );
  

    if (isEditing) {
      result = (
        <div>
          <form onSubmit={ handleUpdate }>
            <input type="text" value={ editList } onChange={ handleChange } />
            <button>Update.</button>
          </form>
        </div>
      );
    }
  
    return result;
  }
  
  export default Todo;