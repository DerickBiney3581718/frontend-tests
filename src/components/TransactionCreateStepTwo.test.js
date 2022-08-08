import { render, screen } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import TransactionCreateStepTwo from "./TransactionCreateStepTwo";

test("on first render, button is disabled", () => {
  render(<TransactionCreateStepTwo sender={{ id: 5 }} receiver={{ id: 7 }} />);
  screen.debug();
});
test("on first render, button is disabled", async () => {
  render(<TransactionCreateStepTwo sender={{ id: 5 }} receiver={{ id: 7 }} />);
  //   expect(screen.getByRole("button", { name: /pay/i })).toBeEnabled();
  expect(await screen.findByRole("button", { name: /pay/i })).toBeEnabled();
});
test("on first render, button is disabled", async () => {
  render(<TransactionCreateStepTwo sender={{ id: 5 }} receiver={{ id: 7 }} />);
  //   expect(screen.getByRole("button", { name: /pay/i })).toBeEnabled();
  expect(await screen.findByRole("button", { name: /pay/i })).toBeDisabled();
});
test("if fields are filled , enable button", async () => {
  render(<TransactionCreateStepTwo sender={{ id: 5 }} receiver={{ id: 7 }} />);
  userEvent.type(screen.getByLabelText(/amount/i), 50);
  userEvent.type(screen.getByLabelText(/add a note/i), "dinner");

  expect(await screen.findByRole("button", { name: /pay/i })).toBeEnabled();
});
