import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Login from "..";
import userEvent from "@testing-library/user-event";
import { signIn } from "../../../service/user";

jest.mock("react-router", () => ({
  useHistory: () => ({
    push: jest.fn(),
  }),
}));

jest.mock("../../../service/user", () => ({
  signIn: jest.fn(),
}));

describe("When testing Login", () => {
  // given

  const renderLogin = () => render(<Login />);

  it("should properly render and match snapshot", () => {
    // when
    const { container } = renderLogin();
    // then
    expect(container.firstChild).toMatchSnapshot();
  });

  it("should all inputs contain proper value when they are filled", () => {
    // given
    const typedUsername = "username";
    const typedPassword = "password";

    // when
    renderLogin();
    const userNameInput = screen.getByLabelText("Username");
    const passwordInput = screen.getByLabelText("Password");

    userEvent.type(userNameInput, typedUsername);
    userEvent.type(passwordInput, typedPassword);

    // then
    expect(screen.getByDisplayValue(typedUsername)).toBeInTheDocument();
    expect(screen.getByDisplayValue(typedPassword)).toBeInTheDocument();
  });

  it("shoud password input not be filled", () => {
    // given
    const typedUsername = "username";
    const typedPassword = "password";

    // when
    renderLogin();
    const userNameInput = screen.getByLabelText("Username");

    userEvent.type(userNameInput, typedUsername);

    // then
    expect(screen.getByDisplayValue(typedUsername)).toBeInTheDocument();
    expect(screen.queryAllByDisplayValue(typedPassword)).toHaveLength(0);
  });

  it("should call signIn fn with proper username and password", () => {
    // given
    const typedUsername = "username";
    const typedPassword = "password";

    // when
    renderLogin();
    const userNameInput = screen.getByLabelText("Username");
    const passwordInput = screen.getByLabelText("Password");
    const button = screen.getByRole("button");

    userEvent.type(userNameInput, typedUsername);
    userEvent.type(passwordInput, typedPassword);
    userEvent.click(button);

    // then
    expect(signIn).toHaveBeenCalledWith(typedUsername, typedPassword);
  });
});
