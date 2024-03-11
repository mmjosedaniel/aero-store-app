import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";

import ProductsCard from "./index";

describe("ProductsCard", () => {
  test("should call setCart when the button add to cart is clicked", async () => {
    const mockSetCart = jest.fn();

    const product = {
      name: test,
      description: "this is a description",
      image: "test.image",
    };

    render(<ProductsCard product={product} setCart={mockSetCart} />);

    const addButton = screen.getByRole("button", {
      name: /agregar al carrito/i,
    });

    await userEvent.click(addButton);

    expect(mockSetCart).toHaveBeenCalledTimes(1);
  });
});
