

Cypress.Commands.add('login', (usuario, senha) => { 
    cy.get('[data-test="username"]').type(usuario)
    cy.get('[data-test="password"]').type(senha)
    cy.get('[data-test="login-button"]').click()
    cy.get('.shopping_cart_link').should('be.visible')


 })


Cypress.Commands.add('AdicionarProduto', (produto) => {
    cy.contains(produto).click()
    cy.get('.btn_primary').click()
    cy.get('[data-test="back-to-products"]').click()


})

Cypress.Commands.add('Cadastro', (Nome, Sobrenome, Cep) => {
    cy.get('[data-test="firstName"]').type(Nome)
    cy.get('[data-test="lastName"]').type(Sobrenome)
    cy.get('[data-test="postalCode"]').type(Cep)
    cy.get('[data-test="continue"]').click()


})

//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })