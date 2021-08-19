import {Given, When, Then} from "cypress-cucumber-preprocessor/steps"
import Login from '../../support/pages/login/index'

beforeEach(() => {
    Login.acessarPagina();
});

//Feature: Compra
//Scenario1

Given(/^que o usuário está na página de produto$/, () => {
    cy.get('[data-test=username]').type(`${Cypress.env('user')}`); 
    cy.get('[data-test=password]').type(`${Cypress.env('passwordOk')}`); 

    cy.get('[data-test=login-button]').click();  
});

When(/^o usuário coloca um produto no carrinho$/, () => {
    cy.get('[data-test=add-to-cart-sauce-labs-backpack]').click(); 
    cy.get('.shopping_cart_link').click(); 

});

And(/^procede para fechar a compra$/, () => {
    cy.get('[data-test=checkout]').click(); 

    cy.get('[data-test=firstName]').type('dois'); 
    cy.get('[data-test=lastName]').type('tres'); 
    cy.get('[data-test=postalCode]').type('0123654'); 

    cy.get('[data-test=continue]').click(); 
    cy.get('[data-test=finish]').click();
});

Then(/^a compra é realizada com sucesso$/, () => {
    cy.get('.complete-text').should('contain', 'Your order has been dispatched, and will arrive just as fast as the pony can get there!'); 

});


//Scenario2

Given(/^que o usuário está na página de produto 2$/, () => {
    cy.xpath('//*[@id="user-name"]').type(`${Cypress.env('user')}`); 
    cy.xpath('//*[@id="password"]').type(`${Cypress.env('passwordOk')}`); 

    cy.xpath('//*[@data-test="login-button"]').click();  
});

When(/^o usuário coloca um produto no carrinho 2$/, () => {
    cy.xpath('//*[@data-test="add-to-cart-sauce-labs-backpack"]').click(); 
    cy.xpath('//*[@class="shopping_cart_link"]').click(); 
    
});

And(/^procede para fechar a compra 2$/, () => {
    cy.xpath('//*[@data-test="checkout"]').click(); 

    cy.xpath('//*[@data-test="firstName"]').type('quatro'); 
    cy.xpath('//*[@data-test="lastName"]').type('cinco'); 
    cy.xpath('//*[@data-test="postalCode"]').type('0123654'); 

    cy.xpath('//*[@data-test="continue"]').click(); 
    cy.xpath('//*[@data-test="finish"]').click(); 

});

Then(/^a compra é realizada com sucesso 2$/, () => {
    cy.xpath('//*[@class="title"]').should('contain', 'Checkout: Complete!');
    cy.screenshot('compraComSucesso');
});
