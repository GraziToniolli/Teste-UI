/// <reference types="cypress" />

describe('Teste de ponta a ponta em Saucelabs', () => {
    beforeEach(() => {
        cy.visit('/')
        
    });

    it('Deve fazer o pedido do início ao fim', () => {
        

        //Login
        cy.login('standard_user','secret_sauce')


        //Adicionar item
        cy.AdicionarProduto('Sauce Labs Backpack')
        cy.AdicionarProduto('Test.allTheThings() T-Shirt (Red)')
        cy.AdicionarProduto('Sauce Labs Bike Light')

        //Finalizar compra - cadastro
        cy.get('.shopping_cart_link').click()
        cy.get('[data-test="checkout"]').click()

        //cadastro
        cy.Cadastro('Graziela', 'Toniolli', '89050-065')

        //Finalizar compra
        cy.get('[data-test="finish"]').click()
        cy.get('.complete-header').should('contain', 'Thank you for your order')



   


    })


})