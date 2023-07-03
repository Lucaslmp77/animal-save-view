describe('Register', () => {

    beforeEach(() => {
        cy.viewport('macbook-15');
        cy.visit('http://localhost:3000/register');
    });

    context('Quando acessar tela de registrar', () => {

        it('Deve exibir a tela de registrar associado corretamente', () => {

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

        it('Deve voltar para a landing page ao clicar em "voltar"', () => {

            cy.get('#voltar').click()

            cy.url().should('contain', 'http://localhost:3000')
            cy.url().should('not.contain', '/register')

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
            cy.get(':nth-child(2) > :nth-child(2) > .control > .input').should('be.visible').type('603.016.296-92') //CPF válido gerado aleatóriamente
            cy.get(':nth-child(3) > .control > .input').should('be.visible').type('joaojhonas@gmail.com')
            cy.get(':nth-child(4) > :nth-child(1) > .control > .input').should('be.visible').type('69900050')
            cy.get(':nth-child(4) > :nth-child(2) > .control > .input').should('be.disabled', 'contain', 'Centro')
            cy.get(':nth-child(5) > :nth-child(1) > .control > .input').should('be.disabled', 'contain', 'Avenida Epaminondas Jácome')
            cy.get(':nth-child(5) > :nth-child(2) > .control > .input').should('be.visible').type('453')

            cy.get('#cadastrar').should('be.visible').click()

            cy.get('.message-body').should('be.visible')

        })
    })

    context('Quando acessar o registro de Fornecedor', () => {

        it('Deve exibir a tela de registrar fornecedor corretamente', () => {

            cy.get('#selectProfileType').select('2')

            cy.get('#selectProfileType').should('be.visible', 'exist')
            cy.get('main').should('be.visible', 'exist')
            cy.get('.section_register').should('be.visible', 'exist')
            cy.get('.container_form > :nth-child(1) > .label').should('be.visible', 'exist')
            cy.get('#selectProfileType').should('be.visible', 'exist')
            cy.get(':nth-child(2) > :nth-child(1) > :nth-child(1) > .label').should('be.visible', 'exist')
            cy.get(':nth-child(1) > :nth-child(1) > .control > .input').should('be.visible', 'exist')
            cy.get(':nth-child(1) > :nth-child(2) > .label').should('be.visible', 'exist')
            cy.get(':nth-child(1) > :nth-child(2) > .control > .input').should('be.visible', 'exist')
            cy.get(':nth-child(2) > :nth-child(1) > .label').should('be.visible', 'exist')
            cy.get(':nth-child(2) > :nth-child(1) > .control > .input').should('be.visible', 'exist')
            cy.get(':nth-child(2) > :nth-child(2) > .label').should('be.visible', 'exist')
            cy.get(':nth-child(2) > :nth-child(2) > .control > .input').should('be.visible', 'exist')
            cy.get(':nth-child(3) > .label').should('be.visible', 'exist')
            cy.get(':nth-child(3) > .control > .input').should('be.visible', 'exist')
            cy.get(':nth-child(4) > :nth-child(1) > .label').should('be.visible', 'exist')
            cy.get(':nth-child(4) > :nth-child(1) > .control > .input').should('be.visible', 'exist')
            cy.get(':nth-child(4) > :nth-child(2) > .label').should('be.visible', 'exist')
            cy.get(':nth-child(4) > :nth-child(2) > .control > .input').should('be.visible', 'exist')
            cy.get(':nth-child(5) > :nth-child(1) > .label').should('be.visible', 'exist')
            cy.get(':nth-child(5) > :nth-child(1) > .control > .input').should('be.visible', 'exist')
            cy.get(':nth-child(5) > :nth-child(2) > .label').should('be.visible', 'exist')
            cy.get(':nth-child(5) > :nth-child(2) > .control > .input').should('be.visible', 'exist')

            cy.get('#voltar').should('be.visible', 'exist')
            cy.get('#cadastrar').should('be.visible', 'exist')

        });

        it('Deve voltar para a landing page ao clicar no botão de "voltar"', () => {

            cy.get('#voltar').click()

            cy.url().should('contain', 'http://localhost:3000')
            cy.url().should('not.contain', '/register')

        });

        it('Não deve cadastrar inserindo informações erradas no formulário', () => {

            cy.intercept('POST', '/api/provider/register', (req) => {
                req.reply({
                    statusCode: 400,
                    body: {
                        status: 'error',
                        message: 'Erro no cadastro!'
                    }
                });
            }).as('submitRequest');

            cy.get('#selectProfileType').select('2')

            cy.get(':nth-child(1) > :nth-child(1) > .control > .input').should('be.visible').type('Ab')
            cy.get(':nth-child(1) > :nth-child(2) > .control > .input').should('be.visible').type('Ab')
            cy.get(':nth-child(2) > :nth-child(1) > .control > .input').should('be.visible').type('123456789')
            cy.get(':nth-child(2) > :nth-child(2) > .control > .input').should('be.visible').type('00.000.000/0001-00')
            cy.get(':nth-child(3) > .control > .input').should('be.visible').type('asdjnasjd@.com')
            cy.get(':nth-child(4) > :nth-child(1) > .control > .input').should('be.visible').type('00000000')
            cy.get(':nth-child(4) > :nth-child(2) > .control > .input').should('be.visible', 'be.disabled')
            cy.get(':nth-child(5) > :nth-child(1) > .control > .input').should('be.visible', 'be.disabled')
            cy.get(':nth-child(5) > :nth-child(2) > .control > .input').should('be.visible').type('0')

            cy.get('#cadastrar').click()

        });

        it('Deve cadastrar inserindo informações corretas no formulário, verificar se a mensagem de sucesso aparece e fechar ela', () => {

            cy.intercept('POST', '/api/provider/register', {
                statusCode: 200,
                body: {
                    status: 'success',
                    message: 'Cadastro realizado com sucesso!'
                }
            }).as('submitRequest');

            cy.get('#selectProfileType').select('2')

            cy.get(':nth-child(1) > :nth-child(1) > .control > .input').should('be.visible').type('Fornecedor')
            cy.get(':nth-child(1) > :nth-child(2) > .control > .input').should('be.visible').type('Fornecedor')
            cy.get(':nth-child(2) > :nth-child(1) > .control > .input').should('be.visible').type('45 9 1234-5678')
            cy.get(':nth-child(2) > :nth-child(2) > .control > .input').should('be.visible').type('75.945.864/0001-85') //CNPJ válido gerado aleatóriamente
            cy.get(':nth-child(3) > .control > .input').should('be.visible').type('fornecedor@gmail.com')
            cy.get(':nth-child(4) > :nth-child(1) > .control > .input').should('be.visible').type('69900050')
            cy.get(':nth-child(4) > :nth-child(2) > .control > .input').should('be.disabled', 'contain', 'Centro')
            cy.get(':nth-child(5) > :nth-child(1) > .control > .input').should('be.disabled', 'contain', 'Avenida Epaminondas Jácome')
            cy.get(':nth-child(5) > :nth-child(2) > .control > .input').should('be.visible').type('345')

            cy.get('#cadastrar').click()

            cy.get('.message-body').should('be.visible')

            cy.get('.delete').click()

            cy.get('.message-body').should('not.exist')

        });
    })

    context('Quando acessar o registro de protetor', () => {

        it('Deve exibir a tela de registrar protetor corretamente', () => {

            cy.get('#selectProfileType').select('3')

            cy.get('main').should('exist', 'be.visible')
            cy.get('.section_register').should('exist', 'be.visible')
            cy.get('.container_form > :nth-child(1) > .label').should('exist', 'be.visible')
            cy.get('#selectProfileType').should('exist', 'be.visible')
            cy.get(':nth-child(2) > :nth-child(1) > :nth-child(1) > .label').should('exist', 'be.visible')
            cy.get(':nth-child(1) > :nth-child(1) > .control > .input').should('exist', 'be.visible')
            cy.get(':nth-child(1) > :nth-child(2) > .label').should('exist', 'be.visible')
            cy.get(':nth-child(1) > :nth-child(2) > .control > .input').should('exist', 'be.visible')
            cy.get(':nth-child(2) > :nth-child(1) > .label').should('exist', 'be.visible')
            cy.get(':nth-child(2) > :nth-child(1) > .control > .input').should('exist', 'be.visible')
            cy.get(':nth-child(2) > :nth-child(2) > .label').should('exist', 'be.visible')
            cy.get(':nth-child(2) > :nth-child(2) > .control > .input').should('exist', 'be.visible')
            cy.get(':nth-child(3) > :nth-child(1) > .label').should('exist', 'be.visible')
            cy.get(':nth-child(3) > :nth-child(1) > .control > .input').should('exist', 'be.visible')
            cy.get(':nth-child(3) > :nth-child(2) > .label').should('exist', 'be.visible')
            cy.get(':nth-child(3) > :nth-child(2) > .control > .input').should('exist', 'be.visible')
            cy.get(':nth-child(4) > :nth-child(1) > .label').should('exist', 'be.visible')
            cy.get(':nth-child(4) > :nth-child(1) > .control > .input').should('exist', 'be.visible')
            cy.get(':nth-child(4) > :nth-child(2) > .label').should('exist', 'be.visible')
            cy.get(':nth-child(4) > :nth-child(2) > .control > .input').should('exist', 'be.visible')
            cy.get(':nth-child(5) > :nth-child(1) > .label').should('exist', 'be.visible')
            cy.get(':nth-child(5) > :nth-child(1) > .control > .input').should('exist', 'be.visible')
            cy.get(':nth-child(5) > :nth-child(2) > .label').should('exist', 'be.visible')
            cy.get(':nth-child(5) > :nth-child(2) > .control > .input').should('exist', 'be.visible')
            cy.get(':nth-child(6) > :nth-child(1) > .label').should('exist', 'be.visible')
            cy.get(':nth-child(6) > :nth-child(2) > .label').should('exist', 'be.visible')

            cy.get('#voltar').should('exist', 'be.visible')
            cy.get('#cadastrar').should('exist', 'be.visible')

        });

        it('Deve voltar para a landing page ao clicar no botão "voltar"', () => {

            cy.get('#voltar').click()

            cy.url().should('contain', 'http://localhost:3000')
            cy.url().should('not.contain', '/register')
        });

        it('Não deve cadastrar inserindo informações erradas no formulário', () => {
            cy.intercept('POST', '/api/caregiver/register', (req) => {
                req.reply({
                    statusCode: 400,
                    body: {
                        status: 'error',
                        message: 'Erro no cadastro!'
                    }
                });
            }).as('submitRequest');

            cy.get('#selectProfileType').select('3')

            cy.get(':nth-child(1) > :nth-child(1) > .control > .input').type('ab')
            cy.get(':nth-child(1) > :nth-child(2) > .control > .input').type('ab')
            cy.get(':nth-child(2) > :nth-child(1) > .control > .input').type('000000')
            cy.get(':nth-child(2) > :nth-child(2) > .control > .input').type('000.000.000-00')
            cy.get(':nth-child(3) > :nth-child(1) > .control > .input').type('0')
            cy.get(':nth-child(3) > :nth-child(2) > .control > .input').type('0')
            cy.get(':nth-child(4) > :nth-child(1) > .control > .input').type('0')
            cy.get(':nth-child(4) > :nth-child(2) > .control > .input').type('asjdn@.com')
            cy.get(':nth-child(5) > :nth-child(1) > .control > .input').type('00000000')
            cy.get(':nth-child(5) > :nth-child(2) > .control > .input').should('be.disabled')
            cy.get(':nth-child(6) > :nth-child(1) > .control > .input').should('be.disabled')
            cy.get(':nth-child(6) > :nth-child(2) > .control > .input').type('0')

            cy.get('#cadastrar').click()

        });

        it('Deve cadastrar inserindo informações corretas no formulário, verificar se a mensagem de sucesso aparece e fechar ela', () => {

            cy.intercept('POST', '/api/caregiver/register', {
                statusCode: 200,
                body: {
                    status: 'success',
                    message: 'Cadastro realizado com sucesso!'
                }
            }).as('submitRequest');

            cy.get('#selectProfileType').select('3')

            cy.get(':nth-child(1) > :nth-child(1) > .control > .input').type('Protetora')
            cy.get(':nth-child(1) > :nth-child(2) > .control > .input').type('Protetora')
            cy.get(':nth-child(2) > :nth-child(1) > .control > .input').type('45 9 00000000')
            cy.get(':nth-child(2) > :nth-child(2) > .control > .input').type('322.864.597-54') //CPF válido gerado aleatóriamente
            cy.get(':nth-child(3) > :nth-child(1) > .control > .input').type('500')
            cy.get(':nth-child(3) > :nth-child(2) > .control > .input').type('100,60')
            cy.get(':nth-child(4) > :nth-child(1) > .control > .input').type('5')
            cy.get(':nth-child(4) > :nth-child(2) > .control > .input').type('protetora@gmail.com')
            cy.get(':nth-child(5) > :nth-child(1) > .control > .input').type('69900050')
            cy.get(':nth-child(5) > :nth-child(2) > .control > .input').should('be.disabled', 'contain', 'Centro')
            cy.get(':nth-child(6) > :nth-child(1) > .control > .input').should('be.disabled', 'contain', 'Avenida Epaminondas Jácome')
            cy.get(':nth-child(6) > :nth-child(2) > .control > .input').type('432')

            cy.get('#cadastrar').click()

            cy.get('.message-body').should('be.visible')

            cy.get('.delete').click()

            cy.get('.message-body').should('not.exist')

        });
    })
})