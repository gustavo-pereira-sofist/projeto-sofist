import Login from '../../support/pages/login/index'

beforeEach(() => {
    Login.acessarPagina();
});

describe('Teste de página de login', () => {

    it('Usuário e senha válidos', () => {

        Login.usuarioESenhaValidos();

    });

    it('Usuário bloqueado', () => {

        Login.usuarioBloqueado()

    });

    it('Usuário problemático', () => {

        Login.usuarioProblematico()

    });

    it('Usuário em branco', () => {

        Login.usuarioEmBranco()

    });

    it('Usuário preenchido e senha em branco', () => {

        Login.usuarioPreenchidoESenhaEmBranco()

    });

    it('Usuário preenchido e senha inválida', () => {

        Login.usuarioPreenchidoESenhaInvalida

    });
});


