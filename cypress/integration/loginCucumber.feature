Feature: Login

    Como usuario, desejo realizar login no site da Swag Labs
    Para que possa acessar os produtos

Scenario: Realizar login na plataforma com sucesso 

    Given que o usuário está na página de login 
    When o usuário tenta realizar o login com usuário e senha válidos 
    Then será direcionado para a página de produtos 

Scenario: Realizar login na plataforma com usuário bloqueado

    Given que o usuário está na página de login 
    When o usuário tenta realizar o login com usuário bloqueado e senha válida 
    Then será exibida uma mensagem de erro com usuario bloqueado

Scenario: Realizar login na plataforma com usuário problemático

    Given que o usuário está na página de login 
    When o usuário tenta realizar o login com usuário problemático e senha válida 
    Then será direcionado para a página de produtos com problema

Scenario: Realizar login na plataforma com usuário em branco

    Given que o usuário está na página de login 
    When o usuário tenta realizar o login com usuário em branco 
    Then será exibida uma mensagem de erro com usuario nao preenchido

Scenario: Realizar login na plataforma com senha em branco e usuário preenchido

    Given que o usuário está na página de login 
    When o usuário tenta realizar o login com senha em branco e usuário preenchido 
    Then será exibida uma mensagem de erro com senha em branco

Scenario: Realizar login na plataforma com senha inválida e usuário preenchido

    Given que o usuário está na página de login 
    When o usuário tenta realizar o login com senha inválida e usuário preenchido 
    Then será exibida uma mensagem de erro de senha invalida