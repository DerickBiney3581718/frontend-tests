describe("payment", () => {
  it("user can make payments", () => {
    // login
    cy.visit("http://10.76.81.197:3000");
    cy.get("input").filter("#username").first().type("johndoe");
    cy.get("input").filter("#password").type("s3cret");
    cy.contains("button", /sign in/i).click();

    // check balance
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
