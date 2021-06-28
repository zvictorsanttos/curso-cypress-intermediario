/// <reference types="Cypress" />

const faker = require("faker");

describe("git clone", () => {
  const project = {
    name: `project-${faker.random.uuid()}`,
    description: faker.random.words(5),
  };

  beforeEach(() => cy.api_createProject(project)); //Cria um projeto via API

  it("successfully", () => {
    cy.cloneViaSSH(project);

    cy.readFile(`temp/${project.name}/README.md`) // readFile para ler o arquivo
      .should("contain", `# ${project.name}`)
      .and("contain", project.description);
  });
});
