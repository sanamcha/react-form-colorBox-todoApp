import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Todo from "./Todo";

it("renders without crashing", () => {
  render(<Todo />);
});

it("matches snapshot", () => {
  const { asFragment } = render(<Todo />);
  expect(asFragment()).toMatchSnapshot();
});


it("matches snapshot when editing", () =>  {
  const { asFragment, getByText } = render(<Todo />);
  const editButton = getByText("Edit.");
  fireEvent.click(editButton);
  expect(asFragment()).toMatchSnapshot();
});

it("updates on form submit", () =>  {
  const { getByText } = render(<Todo update={jest.fn()} />);
  const editButton = getByText("Edit.");
  fireEvent.click(editButton);
  const updateButton = getByText("Update.");
  fireEvent.click(updateButton);

});

it("deletes on button click", () => {
  const { getByText } = render(<Todo remove={jest.fn()} />);
  const deleteButton = getByText("X");
  fireEvent.click(deleteButton);

});
