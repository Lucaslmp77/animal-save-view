import axios from "axios";

describe('Administrator Page', () => {

    context('Quando acessar a página de login', () => {


        it('Deve fazer login como administrador', () => {
            cy.viewport("macbook-15")
            cy.visit('http://localhost:3000/login')
            cy.get(':nth-child(1) > .control > .input').type('admin@admin.com')
            cy.get(':nth-child(2) > .control > .input').type('admin')
            cy.get('#button-login').click()
            cy.wait(1000)
        })
        it('Deve aparecer mensagem de erro caso usuário erra os dados de login',() =>{
            cy.viewport("macbook-15")
            cy.visit('http://localhost:3000/login')
            cy.get(':nth-child(1) > .control > .input').type('admin@admin.com')
            cy.get(':nth-child(2) > .control > .input').type('123')
            cy.get('#button-login').click()
            cy.get('.notification').should('exist')
            cy.wait(1000)
        })
        it('Deve levar a tela de cadastro ao clicar em CADASTRE-SE',() =>{
            cy.viewport("macbook-15")
            cy.visit('http://localhost:3000/login')
            cy.get('#not-register').click()
            cy.url('include', '/register')
        })
        it('Deve voltar para landing page ao clicar em VOLTAR',() =>{
            cy.viewport("macbook-15")
            cy.visit('http://localhost:3000/login')
            cy.get('#button-voltar').click()
            cy.url('include', 'http://localhost:3000/login')
        })
    })

    context('Quando acessar a página inicial do administrador',() => {

        beforeEach(() => {
            cy.viewport("macbook-15")
            cy.visit('http://localhost:3000/login')
            cy.get(':nth-child(1) > .control > .input').type('admin@admin.com')
            cy.get(':nth-child(2) > .control > .input').type('admin')
            cy.get('#button-login').click()
            cy.wait(1000)
        })
        it('Deve estar na aba de "Usuários pendentes" ao carregar a página', () => {
            cy.get('.is-active > span').should('exist')
        })
        it('Deve aparecer uma lista de usuários pendentes caso exista',() =>{
            cy.get(':nth-child(1) > :nth-child(2) > .content').should('exist')
        })
        it('Deve aparecer Modal com detalhes do usuário ao clicar em detalhar', () => {
            cy.get('#button-detalhar').click()
        })
        it('Deve sair do modal ao apertar no botão "Voltar"',() =>{
            cy.get('#button-detalhar').click()
            cy.get('#button-voltar').click()
        })
        it('Deve aprovar um usuários ao clicar no botão APROVAR',() => {
            cy.get('#button-aprovar').click()
            cy.wait(axios.HttpStatusCode.Ok)
        })
        it('Deve aparecer o container "Nenhum usuário pendente!" caso não existe usuários pendentes', () =>{
            cy.get('#notOccurrence').should('exist')
        })
        it('Deve ir a aba Usuários aprovados ao clicar',() =>{
            cy.get(':nth-child(2) > span').click()
        })
        it('Deve ir a aba Usuários rejeitados ao clicar',() =>{
            cy.get(':nth-child(3) > span').click()
        })
        it('Deve ir a aba Registro Público ao clicar',() =>{
            cy.get(':nth-child(4) > span').click()
        })
        it('Deve ir a aba Gerenciar Usuários ao clicar',() =>{
            cy.get(':nth-child(5) > span').click()
        })
    })
    context('Na aba Gerenciar usuários e na TAB Protetor(a)', () =>{

        beforeEach(() => {
            cy.viewport("macbook-15")
            cy.visit('http://localhost:3000/login')
            cy.get(':nth-child(1) > .control > .input').type('admin@admin.com')
            cy.get(':nth-child(2) > .control > .input').type('admin')
            cy.get('#button-login').click()
            cy.wait(1000)
            cy.get(':nth-child(5) > span').click()
        })

        it('deve expandir detalhes do usuário ao clicar em DETALHAR',() =>{
            cy.get(':nth-child(1) > .card-header > .card-header-icon').click()
            cy.get('.card-content').should('exist')
        })
        it('deve fechar detalhes do usuário ao clicar novamente em DETALHAR',() =>{
            cy.get(':nth-child(1) > .card-header > .card-header-icon').click()
            cy.get('.card-content').should('exist')
            cy.wait(1000)
            cy.get(':nth-child(1) > .card-header > .card-header-icon').click()
            cy.get('.card-content').should('not.exist')
        })
        it('Deve abrir modal de editar usuário ao clicar em EDITAR',() => {
            cy.get(':nth-child(1) > .card-footer > .card-footer-item').click()
            cy.get('.modal-container').should('exist')
        })
        it('deve editar um dado do usuários, salvar e fechar a modal',() =>{
            cy.get(':nth-child(1) > .card-footer > .card-footer-item').click()
            cy.get('.modal-container').should('exist')
            cy.get('[placeholder="Nome"]').clear()
            cy.get('[placeholder="Nome"]').type('editado')
            cy.get('#button-aprovar').click()
            cy.wait(2000)
            cy.get('#button-voltar').click()
        })
        it('deve aparecer um toast dizendo que usuário foi editado ao editar o usuário',() =>{
            cy.get(':nth-child(1) > .card-footer > .card-footer-item').click()
            cy.get('.modal-container').should('exist')
            cy.get('[placeholder="Nome"]').clear()
            cy.get('[placeholder="Nome"]').type('editado')
            cy.get('#button-aprovar').click()
            cy.wait(2000)
            cy.get('.notification').should('exist')
            cy.get('#button-voltar').click()
        })
    })
    context('Na aba Gerenciar usuários e na TAB ASSOCIADO(A)',() =>{
        beforeEach(() => {
            cy.viewport("macbook-15")
            cy.visit('http://localhost:3000/login')
            cy.get(':nth-child(1) > .control > .input').type('admin@admin.com')
            cy.get(':nth-child(2) > .control > .input').type('admin')
            cy.get('#button-login').click()
            cy.wait(1000)
            cy.get(':nth-child(5) > span').click()
        })
        it('deve expandir detalhes do usuário ao clicar em DETALHAR',() =>{
            cy.get('#container-principal > .panel-tabs > :nth-child(2) > span').click()
            cy.get(':nth-child(1) > .card-header > .card-header-icon').click()
            cy.get('.card-content').should('exist')
        })
        it('deve fechar detalhes do usuário ao clicar novamente em DETALHAR',() =>{
            cy.get('#container-principal > .panel-tabs > :nth-child(2) > span').click()
            cy.get(':nth-child(1) > .card-header > .card-header-icon').click()
            cy.get('.card-content').should('exist')
            cy.wait(1000)
            cy.get(':nth-child(1) > .card-header > .card-header-icon').click()
            cy.get('.card-content').should('not.exist')
        })
        it('Deve abrir modal de editar usuário ao clicar em EDITAR',() => {
            cy.get('#container-principal > .panel-tabs > :nth-child(2) > span').click()
            cy.get(':nth-child(1) > .card-footer > .card-footer-item').click()
            cy.get('.modal-container').should('exist')
        })
        it('deve editar um dado do usuários, salvar e fechar a modal',() =>{
            cy.get('#container-principal > .panel-tabs > :nth-child(2) > span').click()
            cy.get(':nth-child(1) > .card-footer > .card-footer-item').click()
            cy.get('.modal-container').should('exist')
            cy.get('[placeholder="Nome"]').clear()
            cy.get('[placeholder="Nome"]').type('editado')
            cy.get('#button-aprovar').click()
            cy.wait(2000)
            cy.get('#button-voltar').click()
        })
    })
    context('Na aba USUÁRIOS APROVADOS',() =>{

        beforeEach(() => {
            cy.viewport("macbook-15")
            cy.visit('http://localhost:3000/login')
            cy.get(':nth-child(1) > .control > .input').type('admin@admin.com')
            cy.get(':nth-child(2) > .control > .input').type('admin')
            cy.get('#button-login').click()
            cy.wait(1000)
            cy.get(':nth-child(2) > span').click()
        })

        it('Deve abrir uma modal com detalhes do usuários ao clicar em detalhar',() =>{
            cy.get('#button-detalhar').click()
        })
        it('Deve fechar a modal de detalhes do usuários ao clicar em voltar',() =>{
            cy.get('#button-detalhar').click()
            cy.get('#button-voltar').click()
        })
        it('Deve desaprovar o usuário ao clicar no botão DESAPROVAR',() =>{
            cy.get('#button-detalhar').click()
            cy.get(':nth-child(2) > #button-rejeitar').click()
            cy.get('.notification').should('exist')
            cy.wait(1000)
        })
    })
    context('Na aba USUÁRIOS REJEITADOS',() =>{

        beforeEach(() => {
            cy.viewport("macbook-15")
            cy.visit('http://localhost:3000/login')
            cy.get(':nth-child(1) > .control > .input').type('admin@admin.com')
            cy.get(':nth-child(2) > .control > .input').type('admin')
            cy.get('#button-login').click()
            cy.wait(1000)
            cy.get(':nth-child(3) > span').click()
        })

        it('Deve abrir uma modal com detalhes do usuários ao clicar em detalhar',() =>{
            cy.get(':nth-child(1) > .container_buttons > #button-detalhar').click()
        })
        it('Deve fechar a modal de detalhes do usuários ao clicar em voltar',() =>{
            cy.get(':nth-child(1) > .container_buttons > #button-detalhar').click()
            cy.get('#button-voltar').click()
        })
        it('Deve aprovar o usuário ao clicar no botão APROVAR',() =>{
            cy.get(':nth-child(1) > .container_buttons > #button-aprovar').click()
            cy.get('.notification').should('exist')
            cy.wait(1000)
        })
    })
    context('Na aba REGISTRO PÚBLICO',() =>{
        beforeEach(() => {
            cy.viewport("macbook-15")
            cy.visit('http://localhost:3000/login')
            cy.get(':nth-child(1) > .control > .input').type('admin@admin.com')
            cy.get(':nth-child(2) > .control > .input').type('admin')
            cy.get('#button-login').click()
            cy.wait(1000)
            cy.get(':nth-child(4) > span').click()
        })

        it('Deve aparecer elemento dizendo que não existe ocorrências',() =>{
            cy.get('#notOccurrence').should('exist')
        })
    })
})