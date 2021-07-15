import { render, fireEvent } from "@testing-library/react";

import Counter from "../Counter";

// test("caso de prueba")
// describe y test son funciones de jest (react-scripts)

describe("Counter", () => {
  test("on mount should render Counter Component with default values", () => {
    // render -> {getByText}
    const { getByText, getByRole, getByPlaceholderText } = render(<Counter />);
    getByText(/counter/i);
    getByText(/valor: 0/i);
    getByRole("button", { name: "+ 1" });
    getByRole("button", { name: "- 1" });
    getByPlaceholderText(/modificar intervalo/i);
  });

  test("+1 Button on click should increment with the assigned interval (1)", () => {
    const { getByText, getByRole } = render(<Counter />);
    fireEvent.click(getByRole("button", { name: "+ 1" }));
    getByText(/valor: 1/i);
  });

  test("-1 Button on click should decrement with the assigned interval (1)", () => {
    const { getByText, getByRole } = render(<Counter />);
    fireEvent.click(getByRole("button", { name: "- 1" }));
    getByText(/valor: -1/i);
  });
});
