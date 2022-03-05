

import React from "react";
import { render, fireEvent } from "@testing-library/react";
import TodoList from "./TodoList";

const addTodo = (todoList, task = "write tests") => {
  const taskInput = todoList.getByLabelText("TODO-LIST:");
  fireEvent.change(taskInput, { target: { value: task }});
  const submitButton = todoList.getByText("Add Todo-List:");
  fireEvent.click(submitButton);
}

it("renders without crashing", () => {
  render(<TodoList />);
});

it("matches snapshot", () => {
  const { asFragment } = render(<TodoList />);
  expect(asFragment()).toMatchSnapshot();
});

it("adds todo", () => {
  const list = render(<TodoList />);
  addTodo(list);
  expect(list.getByLabelText("TODO-LIST:")).toHaveValue("");
  expect(list.getByText("write tests")).toBeInTheDocument();
  expect(list.getByText("Edit.")).toBeInTheDocument();
  expect(list.getByText("X")).toBeInTheDocument();
});


it("deletes todo", () => {
  const list = render(<TodoList />);
  addTodo(list);

  fireEvent.click(list.getByText("X"));
  expect(list.queryByText("write tests")).not.toBeInTheDocument();
});
