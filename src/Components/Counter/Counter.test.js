import { fireEvent, logRoles, render, screen } from "@testing-library/react";
import Counter from "./Counter";
import "@testing-library/jest-dom";

test("Check if Initial Count is 0", () => {
  render(<Counter />);
  const countText = screen.getByText("0");
  expect(countText).toBeInTheDocument();
});

test("Check if Button is present", () => {
  render(<Counter />);
  const button = screen.getByRole("button");
  expect(button).toBeInTheDocument();
});

test("Check if Count is incremented", () => {
  render(<Counter />);
  //screen.debug()
  const countText = screen.getByTestId("count");
  const button = screen.getByRole("button");
  fireEvent.click(button);
  expect(countText).toHaveTextContent(1);
});

