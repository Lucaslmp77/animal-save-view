describe('Associate View', () => {
    beforeEach(() => {
        cy.viewport('macbook-15');
        cy.visit('http://localhost:3000/login');
        cy.get('input[type="email"]').type('associate@associate.com');
        cy.get('input[type="password"]').type('associate');
        cy.get('#button-login').click();
        cy.url().should('include', '/associado/3');
        cy.setCookie('providerLoggedIn', 'true');
    });

    context('Quando acessar a página de associado', () => {

        it('Deve exibir a tela do associado corretamente', () => {

            cy.get('img').should('exist', 'be.visible')
            cy.get('#container-title').should('exist', 'be.visible')
            cy.get('.navbar-link').should('exist', 'be.visible')
            cy.get('.container-content').should('exist', 'be.visible')
            cy.get('.card-diamond > .card-content').should('exist', 'be.visible')
            cy.get('.card-gold > .card-content').should('exist', 'be.visible')
            cy.get('.card-silver > .card-content').should('exist', 'be.visible')

        });

        it('Deve navegar para associado/update ao dar hover em "Minha conta" e clicar em "Meus dados"', () => {

            cy.get('#dropdown').trigger('mouseover');

            cy.get('#dropdown')
                .find('a')
                .contains('Meus dados')
                .click({ force: true });

            cy.url().should('contain', '/update')

        });
    })

    context('Quando acessar a página de atualizar perfil do associado', () => {

        it('Deve exibir a tela de atualizar perfil do associado corretamente', () => {

            cy.get('#dropdown').trigger('mouseover');

            cy.get('#dropdown')
                .find('a')
                .contains('Meus dados')
                .click({ force: true });

            cy.url().should('contain', '/update')

            cy.get('main').should('exist', 'be.visible')
            cy.get('.section_register').should('exist', 'be.visible')
            cy.get(':nth-child(1) > :nth-child(1) > .label').should('exist', 'be.visible')
            cy.get(':nth-child(1) > :nth-child(1) > .control > .input').should('exist', 'be.visible')
            cy.get(':nth-child(1) > :nth-child(2) > .label').should('exist', 'be.visible')
            cy.get(':nth-child(1) > :nth-child(2) > .control > .input').should('exist', 'be.visible')
            cy.get(':nth-child(2) > :nth-child(1) > .label').should('exist', 'be.visible')
            cy.get(':nth-child(2) > :nth-child(1) > .control > .input').should('exist', 'be.visible')
            cy.get(':nth-child(2) > :nth-child(2) > .label').should('exist', 'be.visible')
            cy.get(':nth-child(2) > :nth-child(2) > .control > .input').should('exist', 'be.visible')
            cy.get(':nth-child(3) > .label').should('exist', 'be.visible')
            cy.get(':nth-child(3) > .control > .input').should('exist', 'be.visible')
            cy.get(':nth-child(4) > :nth-child(1) > .label').should('exist', 'be.visible')
            cy.get(':nth-child(4) > :nth-child(1) > .control > .input').should('exist', 'be.visible')
            cy.get(':nth-child(4) > :nth-child(2) > .label').should('exist', 'be.visible')
            cy.get(':nth-child(4) > :nth-child(2) > .control > .input').should('exist', 'be.visible')
            cy.get(':nth-child(5) > :nth-child(1) > .label').should('exist', 'be.visible')
            cy.get(':nth-child(5) > :nth-child(1) > .control > .input').should('exist', 'be.visible')
            cy.get(':nth-child(5) > :nth-child(2) > .label').should('exist', 'be.visible')
            cy.get(':nth-child(5) > :nth-child(2) > .control > .input').should('exist', 'be.visible')

            cy.get('#button-back').should('exist', 'be.visible')
            cy.get('#button-update-password').should('exist', 'be.visible')
            cy.get('#cadastrar').should('exist', 'be.visible')

        });

        it('Deve exibir a tela de alterar senha ao clicar no botão "alterar senha"', () => {

            cy.get('#dropdown').trigger('mouseover');

            cy.get('#dropdown')
                .find('a')
                .contains('Meus dados')
                .click({ force: true });

            cy.url().should('contain', '/update')

            cy.get('#button-update-password').click()

            cy.get('.section_register').should('exist', 'be.visible')
            cy.get(':nth-child(1) > .label').should('exist', 'be.visible')
            cy.get(':nth-child(1) > .control > .input').should('exist', 'be.visible')
            cy.get(':nth-child(2) > .label').should('exist', 'be.visible')
            cy.get(':nth-child(2) > .control > .input').should('exist', 'be.visible')

            cy.get('#button-back-previous-pag').should('exist', 'be.visible')
            cy.get('#cadastrar').should('exist', 'be.visible')

        });

        it('Não deve conseguir atualizar o perfil preenchendo as informações incorretamente', () => {

            cy.get('#dropdown').trigger('mouseover');

            cy.get('#dropdown')
                .find('a')
                .contains('Meus dados')
                .click({ force: true });

            cy.url().should('contain', '/update')

            cy.intercept('PUT', '/api/associate/update', {
                statusCode: 400,
                body: {
                    error: 'Falha ao atualizar o perfil.'
                }
            }).as('atualizarPerfil');

            cy.get(':nth-child(1) > :nth-child(1) > .control > .input').type('Ab')
            cy.get(':nth-child(1) > :nth-child(2) > .control > .input').type('Ab')
            cy.get(':nth-child(2) > :nth-child(1) > .control > .input').type('0000000')
            cy.get(':nth-child(2) > :nth-child(2) > .control > .input').type('000.000.000-00')
            cy.get(':nth-child(3) > .control > .input').type('aaaaaa@.com')
            cy.get(':nth-child(4) > :nth-child(1) > .control > .input').type('00000000')
            cy.get(':nth-child(4) > :nth-child(2) > .control > .input').should('be.disabled')
            cy.get(':nth-child(5) > :nth-child(1) > .control > .input').should('be.disabled')
            cy.get(':nth-child(5) > :nth-child(2) > .control > .input').type('0')

            cy.get('#cadastrar').click()

        });
    })
})