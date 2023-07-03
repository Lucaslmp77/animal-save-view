describe('Register', () => {

    beforeEach(() => {
        cy.viewport('macbook-15');
        cy.visit('http://localhost:3000/register');
    });

    context('Quando acessar tela de registrar', () => {

        it('Deve exibir a tela de registrar corretamente', () => {

            cy.get('main').should('be.visible')
            cy.get('.section_register').should('be.visible')
            cy.get('.container_form > :nth-child(1) > .label').should('be.visible')
            cy.get('#selectProfileType').should('be.visible')
            cy.get(':nth-child(2) > :nth-child(1) > :nth-child(1) > .label').should('be.visible')
            cy.get(':nth-child(1) > :nth-child(1) > .control > .input').should('be.visible')
            cy.get(':nth-child(1) > :nth-child(2) > .label').should('be.visible')
            cy.get(':nth-child(1) > :nth-child(2) > .control > .input').should('be.visible')
            cy.get(':nth-child(2) > :nth-child(1) > .label').should('be.visible')
            cy.get(':nth-child(2) > :nth-child(1) > .control > .input').should('be.visible')
            cy.get(':nth-child(2) > :nth-child(2) > .label').should('be.visible')
            cy.get(':nth-child(2) > :nth-child(2) > .control > .input').should('be.visible')
            cy.get(':nth-child(3) > .label').should('be.visible')
            cy.get(':nth-child(3) > .control > .input').should('be.visible')
            cy.get(':nth-child(4) > :nth-child(1) > .label').should('be.visible')
            cy.get(':nth-child(4) > :nth-child(1) > .control > .input').should('be.visible')
            cy.get(':nth-child(4) > :nth-child(2) > .label').should('be.visible')
            cy.get(':nth-child(4) > :nth-child(2) > .control > .input').should('be.visible')
            cy.get(':nth-child(5) > :nth-child(1) > .label').should('be.visible')
            cy.get(':nth-child(5) > :nth-child(1) > .control > .input').should('be.visible')
            cy.get(':nth-child(5) > :nth-child(2) > .label').should('be.visible')
            cy.get(':nth-child(5) > :nth-child(2) > .control > .input').should('be.visible')

            cy.get('#voltar').should('be.visible')
            cy.get('#cadastrar').should('be.visible')

        });
    })

    context('Quando acessar o registro de Associado', () => {

        it('Não deve cadastrar inserindo informações erradas no formulário', () => {
            cy.intercept('POST', '/api/associate/register', (req) => {
                req.reply({
                    statusCode: 400,
                    body: {
                        status: 'error',
                        message: 'Erro no cadastro!'
                    }
                });
            }).as('submitRequest');

            cy.get(':nth-child(1) > :nth-child(1) > .control > .input').should('be.visible').type('Ab');
            cy.get(':nth-child(1) > :nth-child(2) > .control > .input').should('be.visible').type('Ab');
            cy.get(':nth-child(2) > :nth-child(1) > .control > .input').should('be.visible').type('1234567');
            cy.get(':nth-child(2) > :nth-child(2) > .control > .input').should('be.visible').type('123.456.789-10');
            cy.get(':nth-child(3) > .control > .input').should('be.visible').type('aksalks@.com');
            cy.get(':nth-child(4) > :nth-child(1) > .control > .input').should('be.visible').type('00000-000');
            cy.get(':nth-child(4) > :nth-child(2) > .control > .input').should('be.visible', 'be.disabled');
            cy.get(':nth-child(5) > :nth-child(1) > .control > .input').should('be.visible', 'be.disabled');
            cy.get(':nth-child(5) > :nth-child(2) > .control > .input').should('be.visible').type('0');

            cy.get('#cadastrar').should('be.visible').click();
        });


        it('Deve cadastrar inserindo informações corretas no formulário', () => {

            cy.intercept('POST', '/api/associate/register', {
                statusCode: 200,
                body: {
                    status: 'success',
                    message: 'Cadastro realizado com sucesso!'
                }
            }).as('submitRequest');

            cy.get(':nth-child(1) > :nth-child(1) > .control > .input').should('be.visible').type('João')
            cy.get(':nth-child(1) > :nth-child(2) > .control > .input').should('be.visible').type('Jhonas')
            cy.get(':nth-child(2) > :nth-child(1) > .control > .input').should('be.visible').type('45 9 1234-5678')
            cy.get(':nth-child(2) > :nth-child(2) > .control > .input').should('be.visible').type('603.016.296-92') //Cpf válido gerado aleatóriamente
            cy.get(':nth-child(3) > .control > .input').should('be.visible').type('joaojhonas@gmail.com')
            cy.get(':nth-child(4) > :nth-child(1) > .control > .input').should('be.visible').type('69900050')
            cy.get(':nth-child(4) > :nth-child(2) > .control > .input').should('be.disabled', 'contain', 'Centro')
            cy.get(':nth-child(5) > :nth-child(1) > .control > .input').should('be.disabled', 'contain', 'Avenida Epaminondas Jácome')
            cy.get(':nth-child(5) > :nth-child(2) > .control > .input').should('be.visible').type('453')

            cy.get('#cadastrar').should('be.visible').click()

            cy.get('.message-body').should('be.visible', 'contain', '')

        })
    })
})