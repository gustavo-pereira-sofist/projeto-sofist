class Compra {

    adicionarUmProdutoNoCarrinhoEFecharPedido() {

        cy.get('[data-test=username]').type(`${Cypress.env('user')}`); 
        cy.get('[data-test=password]').type(`${Cypress.env('passwordOk')}`); 
    
        cy.get('[data-test=login-button]').click();  
        cy.get('[data-test=add-to-cart-sauce-labs-backpack]').click(); 
        cy.get('.shopping_cart_link').click(); 
        cy.get('[data-test=checkout]').click(); 
    
        cy.get('[data-test=firstName]').type('dois'); 
        cy.get('[data-test=lastName]').type('tres'); 
        cy.get('[data-test=postalCode]').type('0123654'); 
    
        cy.get('[data-test=continue]').click(); 
        cy.get('[data-test=finish]').click();

        cy.get('.complete-text').should('contain', 'Your order has been dispatched, and will arrive just as fast as the pony can get there!'); 

    }

    adicionarUmProdutoNoCarrinhoEFecharPedidoUsandoXpath() {
        
        cy.xpath('//*[@id="user-name"]').type(`${Cypress.env('user')}`); 
        cy.xpath('//*[@id="password"]').type(`${Cypress.env('passwordOk')}`); 

        cy.xpath('//*[@data-test="login-button"]').click();  
        cy.xpath('//*[@data-test="add-to-cart-sauce-labs-backpack"]').click(); 
        cy.xpath('//*[@class="shopping_cart_link"]').click(); 
        cy.xpath('//*[@data-test="checkout"]').click(); 

        cy.xpath('//*[@data-test="firstName"]').type('dois'); 
        cy.xpath('//*[@data-test="lastName"]').type('tres'); 
        cy.xpath('//*[@data-test="postalCode"]').type('0123654'); 

        cy.xpath('//*[@data-test="continue"]').click(); 
        cy.xpath('//*[@data-test="finish"]').click(); 

        cy.xpath('//*[@class="title"]').should('contain', 'Checkout: Complete!');

    }
}

export default new Compra()