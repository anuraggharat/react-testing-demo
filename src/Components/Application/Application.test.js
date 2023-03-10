import { render, screen } from "@testing-library/react";
import Application from "./Application";
import "@testing-library/jest-dom";

describe("Application Component Testing", () => {

    test("Login Form Heading Present", () => {
      render(<Application />);
      const headingelement = screen.getByText("Login Form");
      expect(headingelement).toBeInTheDocument();
    });
    test("Button for Login present", () => {
      render(<Application />);
      //get by role
      const loginButton = screen.getByRole("button");
      expect(loginButton).toBeInTheDocument();
    });
    test("Check if Text Box for username and password is present", () => {
      render(<Application />);
      //get by role with parameters
      const usernameInput = screen.getByRole("textbox", {
        name: "Enter your Username",
      });
      expect(usernameInput).toBeInTheDocument();
      //get by placeholder text
      const passwordInput = screen.getByPlaceholderText("Password");
      expect(passwordInput).toBeInTheDocument();
    });
    test("Check if checkbox and label text is present", () => {
      render(<Application />);
      //get by test-id
      const checkbox = screen.getByTestId("test-checkbox");
      expect(checkbox).toBeInTheDocument();
      //get by label text
      const labeltext = screen.getByLabelText(/signed/i);
      expect(labeltext).toBeInTheDocument();
    });
    
});
