import {render,fireEvent,waitFor,screen} from "@testing-library/react";
import CounterByDelay from "./CounterByDelay";
import "@testing-library/jest-dom";


test("Increment Count after delay", async () => {

  render(<CounterByDelay />);
  fireEvent.click(screen.getByTestId("count-button"));
  const counter = await waitFor(() => screen.getByText("1"));
  expect(counter).toHaveTextContent("1");

});
