import {Given, When, Then} from "cypress-cucumber-preprocessor/steps"
import Login from '../../support/pages/login/index'

//Feature: Login
//Scenario1 - Login com usuario e senha validos

Given(/^que o usuário está na página de login$/, () => {
    Login.acessarPagina();

});

When(/^o usuário tenta realizar o login com usuário e senha válidos$/, () => {
    cy.xpath('//*[@data-test="username"]').type(`${Cypress.env('user')}`);
    cy.xpath('//*[@data-test="password"]').type(`${Cypress.env('passwordOk')}`);
    cy.xpath('//*[@data-test="login-button"]').click();

});

//And(/^clicar no botão login$/, () => {
//    cy.xpath('//*[@data-test="login-button"]').click();
//
//});

Then(/^será direcionado para a página de produtos$/, () => {
    cy.xpath('//*[@class="title"]').should('contain', 'Products');

});

//Scenario2 - Login com usuario bloqueado e senha valida

When(/^o usuário tenta realizar o login com usuário bloqueado e senha válida$/, () => {
    cy.xpath('//*[@data-test="username"]').type('locked_out_user');
    cy.xpath('//*[@data-test="password"]').type(`${Cypress.env('passwordOk')}`);
    cy.xpath('//*[@data-test="login-button"]').click();

});

//And(/^clicar no botão login$/, () => {
//    cy.xpath('//*[@data-test="login-button"]').click();
//
//});

Then(/^será exibida uma mensagem de erro 1$/, () => {
    cy.xpath('//*[@data-test="error"]').should('contain', 'Epic sadface: Sorry, this user has been locked out.');

});


//Scenario3 - Login com usuario problematico e senha valida

When(/^o usuário tenta realizar o login com usuário problemático e senha válida$/, () => {
    cy.xpath('//*[@data-test="username"]').type('problem_user');
    cy.xpath('//*[@data-test="password"]').type(`${Cypress.env('passwordOk')}`);
    cy.xpath('//*[@data-test="login-button"]').click();

});

//And(/^clicar no botão login$/, () => {
//    cy.xpath('//*[@data-test="login-button"]').click();
//});

Then(/^será direcionado para a página de produtos$/, () => {
    cy.xpath('//*[@class="title"]').should('contain', 'Products');

});

//Scenario4 - Login com usuario em branco

When(/^o usuário tenta realizar o login com usuário em branco$/, () => {
    cy.xpath('//*[@data-test="password"]').type(`${Cypress.env('passwordOk')}`);
    cy.xpath('//*[@data-test="login-button"]').click();

});

//And(/^clicar no botão login$/, () => {
//    cy.xpath('//*[@data-test="login-button"]').click();
//
//});

Then(/^será exibida uma mensagem de erro 2$/, () => {
    cy.xpath('//*[@data-test="error"]').should('contain', 'Epic sadface: Username is required');

});

//Scenario5 - Login com senha em branco e usuario preenchido

When(/^o usuário tenta realizar o login com senha em branco e usuário preenchido$/, () => {
    cy.xpath('//*[@data-test="username"]').type(`${Cypress.env('user')}`);
    cy.xpath('//*[@data-test="login-button"]').click();

});

//And(/^clicar no botão login$/, () => {
 //   cy.xpath('//*[@data-test="login-button"]').click();
//
//});

Then(/^será exibida uma mensagem de erro 3$/, () => {
    cy.xpath('//*[@data-test="error"]').should('contain', 'Epic sadface: Password is required');
});

//Scenario6 - Login com senha invalida e usuario preenchido

When(/^o usuário tenta realizar o login com senha inválida e usuário preenchido$/, () => {
    cy.xpath('//*[@data-test="username"]').type(`${Cypress.env('user')}`);
    cy.xpath('//*[@data-test="password"]').type('0@#@##as');
    cy.xpath('//*[@data-test="login-button"]').click();

});

//And(/^clicar no botão login$/, () => {
//    cy.xpath('//*[@data-test="login-button"]').click();
//
//});

Then(/^será exibida uma mensagem de erro 4$/, () => {
    cy.xpath('//*[@data-test="error"]').should('contain', 'Epic sadface: Username and password do not match any user in this service');

});