describe("login", () => {
  // eslint-disable-next-line cypress/no-async-tests
  it("user must log in", () => {
    // login
    const sentArgs = { username: "johndoe", password: "s3cret" };
    cy.origin(
      "http://localhost:3000/",
      // Send the args here...
      { args: sentArgs },
      // ...and receive them at the other end here!
      ({ username, password }) => {
        cy.visit("http://localhost:3000/signin");
        cy.get("input#username").type(username);
        cy.get("input#password").type(password);
        cy.contains("button", /sign in/i).click();
      }
    );
    cy.get("[data-test=main]").should("exist");
  });
  // eslint-disable-next-line cypress/no-async-tests
  //   it("user must log in", () => {
  //     // login
  //     const sentArgs = { username: "", password: "" };
  //     cy.origin(
  //       "http://localhost:3000/",
  //       // Send the args here...
  //       { args: sentArgs },
  //       // ...and receive them at the other end here!
  //       ({ username, password }) => {
  //         cy.visit("http://localhost:3000/signin");
  //         cy.get("input#username").type(username);
  //         cy.get("input#password").type(password);
  //         cy.contains("button", /sign in/i).click();
  //       }
  //     );
  //     cy.get("[data-test=main]").should("not.exist");
  //   });
  // eslint-disable-next-line cypress/no-async-tests
});

// eslint-disable-next-line cypress/no-async-tests
