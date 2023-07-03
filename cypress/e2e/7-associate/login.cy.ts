describe('Login', () => {

    context('Quando acessar a página de login', () => {

        it('Deve exibir a tela de login corretamente', () => {
            cy.viewport('macbook-15')
            cy.visit('http://localhost:3000/login')
            cy.get('main').should('exist');
            cy.get('#form-login').should('exist')
            cy.get('.box').should('exist')
            cy.get('img').should('exist')
            cy.get(':nth-child(1) > .control > .input').should('exist')
            cy.get(':nth-child(2) > .control > .input').should('exist')
            cy.get('#container-button').should('exist')
            cy.get('#button-voltar').should('exist')
            cy.get('#button-login').should('exist')
            cy.get('#not-register').should('exist')
        });

        it('Deve redirecionar para a página de registro ao clicar em "Não é Cadastrado?"', () => {
            cy.viewport('macbook-15')
            cy.visit('http://localhost:3000/login')
            cy.get('#not-register').click()
            cy.url().should('include', '/register')
        });

        it('Deve redirecionar para a página inicial ao clicar em "Voltar"', () => {
            cy.viewport('macbook-15')
            cy.visit('http://localhost:3000/login')
            cy.get('#button-voltar').click()
            cy.url().should('include', '/')
        });

        it('Deve exibir uma mensagem de erro ao fornecer credenciais inválidas', () => {
            cy.viewport('macbook-15')
            cy.visit('http://localhost:3000/login')
            cy.get('input[type="email"]').type('email@exemplo.com')
            cy.get('input[type="password"]').type('senhaerrada')
            cy.get('#button-login').click()
            cy.get('.notification.is-danger').should('exist')
            cy.get('.notification.is-danger').should(
                'contain.text',
                'Usuário ou senha incorreto'
            );
        });
    })
})