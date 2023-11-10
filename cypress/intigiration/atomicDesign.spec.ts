// cypress/integration/atomicDesign.spec.ts

describe("Atomic Design Tests", () => {
  it("Tests Atoms", () => {
    cy.visit("/"); // Assuming your app starts at the home page
    // Test an atom like a Button
    cy.get("[data-cy=button]").should("be.visible"); // Assuming you have a data-cy attribute for your Button component
    // Add more tests for other atoms as needed
  });

  it("Tests Molecules", () => {
    cy.visit("/");
    // Test a molecule like a Card that uses atoms like Button
    cy.get("[data-cy=card]").should("be.visible"); // Assuming a data-cy attribute for your Card component
    // Add more tests for other molecules as needed
  });

  it("Tests Organisms", () => {
    cy.visit("/");
    // Test an organism like a Header that uses molecules or atoms
    cy.get("[data-cy=header]").should("be.visible"); // Assuming a data-cy attribute for your Header component
    // Add more tests for other organisms as needed
  });

  it("Tests Templates and Pages", () => {
    // Test a template or a page, which generally uses organisms and other components
    cy.visit("/blog"); // Assuming a route for the blog page
    cy.get("[data-cy=blog-template]").should("be.visible"); // Assuming a data-cy attribute for your BlogTemplate component
    // Add more tests for other templates and pages as needed
  });
});
