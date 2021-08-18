class Login {
    
    acessarPagina() {
        cy.visit('https://www.saucedemo.com/')
    }

    clicaLoginButton() {
        cy.xpath('//*[@data-test="login-button"]').click();
    }

    usuarioESenhaValidos() {
        cy.xpath('//*[@data-test="username"]').type(`${Cypress.env('user')}`);
        cy.xpath('//*[@data-test="password"]').type(`${Cypress.env('passwordOk')}`);
        this.clicaLoginButton();
        cy.xpath('//*[@class="title"]').should('contain', 'Products');
    }

    usuarioBloqueado() {
        cy.xpath('//*[@data-test="username"]').type('locked_out_user');
        cy.xpath('//*[@data-test="password"]').type(`${Cypress.env('passwordOk')}`);
        this.clicaLoginButton();
        cy.xpath('//*[@data-test="error"]').should('contain', 'Epic sadface: Sorry, this user has been locked out.');
    }

    usuarioProblematico() {
        cy.xpath('//*[@data-test="username"]').type('problem_user');
        cy.xpath('//*[@data-test="password"]').type(`${Cypress.env('passwordOk')}`);
        this.clicaLoginButton();
        cy.xpath('//*[@class="title"]').should('contain', 'Products');
    }

    usuarioEmBranco() {
        cy.xpath('//*[@data-test="password"]').type(`${Cypress.env('passwordOk')}`);
        this.clicaLoginButton();
        cy.xpath('//*[@data-test="error"]').should('contain', 'Epic sadface: Username is required');
    }

    usuarioPreenchidoESenhaEmBranco() {
        cy.xpath('//*[@data-test="username"]').type(`${Cypress.env('user')}`);
        this.clicaLoginButton();
        cy.xpath('//*[@data-test="error"]').should('contain', 'Epic sadface: Password is required');
    }

    usuarioPreenchidoESenhaInvalida() {
        cy.xpath('//*[@data-test="username"]').type(`${Cypress.env('user')}`);
        cy.xpath('//*[@data-test="password"]').type('0@#@##as');
        this.clicaLoginButton();
        cy.xpath('//*[@data-test="error"]').should('contain', 'Epic sadface: Username and password do not match any user in this service');
    }

}

export default new Login()