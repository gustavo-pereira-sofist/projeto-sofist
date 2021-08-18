Feature: Compra

    Como usuario logado no site da Swag Labs desejo adicionar produto no carrinho
    Para que possa finalizar uma comprar

Scenario: Adicionar um produto no carrinho e fechar pedido

    Given que o usuário está na página de produto 
    When o usuário coloca um produto no carrinho 
    And procede para fechar a compra  
    Then a compra é realizada com sucesso 
 
Scenario: Adicionar um produto no carrinho e fechar o pedido - usando xpath

    Given que o usuário está na página de produto 2
    When o usuário coloca um produto no carrinho 2
    And procede para fechar a compra 2
    Then a compra é realizada com sucesso 2