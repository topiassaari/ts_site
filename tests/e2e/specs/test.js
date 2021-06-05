describe("see pages", () => {
  it("visits home", () => {
    cy.visit("/");
    cy.get("#face").should("have.attr", "src").should("include", "ts_2021");
  });
  it("visits gallery", () => {
    cy.visit("/gallery");
    cy.get('[alt="art1"]')
      .should("have.attr", "src")
      .should(
        "include",
        "https://topias.kuvat.fi/kuvat/website%20gallery/P058.jpg?img=medium"
      );
  });
  it("visit projects", () => {
    cy.visit("/projects");
    cy.contains(
      "Creating a Design Token Library for ABB’s CommonUX Design System"
    );
  });
});
