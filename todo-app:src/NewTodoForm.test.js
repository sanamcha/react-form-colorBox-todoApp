
import React from "react";
import { render, fireEvent } from "@testing-library/react";
import NewTodoForm from "./NewTodoForm";

it("renders without crashing", () => {
  render(<NewTodoForm />);
});

it("matches snapshot", () => {
  const { asFragment } = render(<NewTodoForm />);
  expect(asFragment()).toMatchSnapshot();
});


it("adds todo", () =>  {

  const { getByText } = render(<NewTodoForm createTodo={  jest.fn() } />);
  const createButton = getByText("Add Todo-List:");
  fireEvent.click(createButton);
 
});
