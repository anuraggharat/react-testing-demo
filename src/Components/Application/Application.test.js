import { render, screen } from "@testing-library/react";
import Application from "./Application";
import "@testing-library/jest-dom";

describe("Application Component Testing", () => {
  test("Login Form Heading Present", () => {
    render(<Application />);

    //get by text
    const headingelement = screen.getByText("Login Form");
    expect(headingelement).toBeInTheDocument();

    //get by role
    const loginButton = screen.getByRole("button");
    expect(loginButton).toBeInTheDocument();

    //get by role with parameters
    const usernameInput = screen.getByRole("textbox", {
      name: "Enter your Username",
    });
    expect(usernameInput).toBeInTheDocument();

    //get by placeholder text
    const passwordInput = screen.getByPlaceholderText("Password");
    expect(passwordInput).toBeInTheDocument();

    //get by test-id
    const checkbox = screen.getByTestId("test-checkbox");
    expect(checkbox).toBeInTheDocument();

    //get by label text
    const labeltext = screen.getByLabelText(/signed/i);
    expect(labeltext).toBeInTheDocument();
  });

  
});
