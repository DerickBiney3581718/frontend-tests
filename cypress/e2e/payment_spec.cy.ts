describe("payment", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });
  it("user can make payments", () => {
    //create bank account
    // check balance
    let oldBalance;
    cy.get("[data-test=sidenav-user-balance]").then(($balance) => (oldBalance = $balance.text()));
    // click on new button
    cy.contains("button", /new/i).click();
    // click pay
    // searvh for user
    // add amt and note and click pay
    // return to transactions
    // go to personal payments
    // click on payment
    // verify if payment was made
    // verify if deductions were made
  });
});
