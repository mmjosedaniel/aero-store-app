import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";

import Login from "./index";

describe("Login", () => {
  test("should handle email input", async () => {
    render(<Login setIsUserLogged={() => {}} />);

    const emailImput = screen.getByPlaceholderText("test@test.test");

    await userEvent.type(emailImput, "test@test.test");

    expect(emailImput.value).toBe("test@test.test");
  });

  test("should handle password input", async () => {
    render(<Login setIsUserLogged={() => {}} />);

    const passwordImput = screen.getByPlaceholderText("test");

    await userEvent.type(passwordImput, "test");

    expect(passwordImput.value).toBe("test");
  });

  test("should log in when password and email are correct", async () => {
    const mockSetIsUserLogged = jest.fn();

    render(<Login setIsUserLogged={mockSetIsUserLogged} />);

    const emailImput = screen.getByPlaceholderText("test@test.test");
    const passwordImput = screen.getByPlaceholderText("test");
    const loginButton = screen.getByRole("button", { name: /login/i });

    await userEvent.type(emailImput, "test@test.test");
    await userEvent.type(passwordImput, "test");
    await userEvent.click(loginButton);

    expect(mockSetIsUserLogged).toHaveBeenCalledWith(true);
  });
});
