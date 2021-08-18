import Compra from '../../support/pages/compra/index';
import Login from '../../support/pages/login';

beforeEach(() => { 
    Login.acessarPagina()
}); 

describe('Caminho feliz compra de um produto', () => { 

    it('Adicionar um produto no carrinho e fechar pedido', () => {

        Compra.adicionarUmProdutoNoCarrinhoEFecharPedido()

    }); 

    it('Adicionar um produto no carrinho e fechar o pedido - usando xpath', () => {

        Compra.adicionarUmProdutoNoCarrinhoEFecharPedidoUsandoXpath()

    }); 
});