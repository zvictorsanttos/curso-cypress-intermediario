/// <reference types="Cypress" />

describe("Logout", () => {
  beforeEach(() => cy.login()); // Chamar o cy.login antes de cada teste da switch logout

  it("Realizar login com sucesso", () => {
    cy.logout();

    // Verificação se após o logout, usuario foi direcionado para pagina correta
    cy.url().should("be.equal", `${Cypress.config("baseUrl")}users/sign_in`);
  });
});
