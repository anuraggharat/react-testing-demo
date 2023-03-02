import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Users } from "./Users";
import { rest } from "msw";
import { server } from "../../mocks/server";

describe("Users Component Testing", () => {

  test("Shows a list of 3 users", async () => {
    render(<Users />);
    const users = await screen.findAllByRole("listitem");
    expect(users).toHaveLength(3);
  });

  test("Shows error in case the API fails", async () => {
    server.use(
      rest.get(
        "https://jsonplaceholder.typicode.com/users",
        (req, res, ctx) => {
          return res(ctx.status(500));
        }
      )
    );
    render(<Users />);
    const error = await screen.findByText("Error while fetching users");
    expect(error).toBeInTheDocument();
  });
});
