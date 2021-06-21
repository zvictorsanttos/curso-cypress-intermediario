/// <reference types="Cypress" />

const faker = require("faker");

describe("Create Project", () => {
  beforeEach(() => cy.login());

  it("Criar Projeto com sucesso", () => {
    const project = {
      name: `project-${faker.random.uuid()}`, // Funcionalidade Faker que gera um ID random
      description: faker.random.words(5), // Funcionalidade Fake que gera descrição (5) que indica que será utilizado 5 palavras
    };
    cy.gui_createProject(project);

    cy.url().should(
      "be.equal",
      `${Cypress.config("baseUrl")}${Cypress.env("user_name")}/${project.name}`
    );
    cy.contains(project.name).should("be.visible");
    cy.contains(project.description).should("be.visible");
  });
});
