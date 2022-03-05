import React, { useState } from "react";
import Todo from "./Todo";
import NewTodoForm from "./NewTodoForm";

const TodoList = () => {
  const [todos, setTodos] = useState([ ]);

  // create new
  const create = newTodo => {
    setTodos(todos => [...todos, newTodo]);
  };

//update
  const update = (id, updatedList) => {
    setTodos(todos =>
      todos.map(todo =>
        todo.id === id ? { ...todo, list: updatedList } : todo
      )
      
    );
  };

  // delete 
  const remove = id => {
    setTodos(todos => todos.filter(todo => todo.id !== id));
  };

  const todoArr = todos.map(todo => (
    <Todo
      remove={remove}
      key={todo.id}
      id={todo.id}
      list={todo.list}
      update={update}
    />
   
  )); 
 

  return (
    <div>
      <NewTodoForm createTodo={ create } />
      <ul>{ todoArr }</ul>
    </div>
  );
}

export default TodoList;
