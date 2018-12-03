/// <reference types="Cypress" />

context("home", () => {
  beforeEach(() => {
    cy.visit("http://localhost:8000");
  });

  it("renders", function() {
    cy.contains("Automated dependency updates");
  });
});
