/// <reference types="Cypress" />

Cypress.Commands.add("cloneViaSSH", (project) => {
  const domain = Cypress.config("baseUrl")
    .replace("https://", "")
    .replace("/", "");

  // Acessar pasta temp e executar o git clone
  cy.exec(
    `cd temp/ && git clone git@${domain}:${Cypress.env("user_name")}/${
      project.name
    }.git`
  );
});
