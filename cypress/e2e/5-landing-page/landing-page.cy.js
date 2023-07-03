describe('Landing Page', () => {
  beforeEach(() => {
    cy.viewport('macbook-15');
    cy.visit('http://localhost:3000/');
  });

  it('Deve exibir o Header corretamente', () => {
    cy.get('.navbar').should('exist');
    cy.get('.navbar-item > img').should('exist');
    cy.get('[href="/register-occurences"]').should('exist');
    cy.get('[href="/register"] > button').should('exist');
    cy.get('[href="/login"] > button').should('exist');
  });

  it('Deve navegar corretamente', () => {
    cy.get('a[href="/register-occurences"]').click();
    cy.url().should('include', '/register-occurences');
    cy.get('.butt').click();
    cy.get('[href="/register"] > button').click();
    cy.url().should('include', '/register');
    cy.get('#voltar').click();
    cy.get('[href="/login"] > button').click();
    cy.url().should('include', '/login');
    cy.get('#button-voltar').click();
  });

  it('Deve exibir a tela Home corretamente', () => {
    cy.get('.containerHome').should('exist');
    cy.get('.containerHome > .containerText').should('exist');
    cy.get('.TextNA').should('have.text', 'NA');
    cy.get('.TextNA').should('exist');
    cy.get('.containerDuvidaSpan').should('have.text', ' DUVIDA AJUDE');
    cy.get('.containerDuvidaSpan').should('exist');
    cy.get('.containerDuvidaCerteza > :nth-child(2)').should('have.text', ' CERTEZA ADOTE');
    cy.get('.containerDuvidaCerteza > :nth-child(2)').should('exist');
    cy.get('.TextP > :nth-child(1)').should('have.text', ' Nós da Animal Save somos bons em organização e arrecadação de recursos. ');
    cy.get('.TextP > :nth-child(1)').should('exist');
    cy.get('.TextP > :nth-child(2)').should('have.text', ' Nosso objetivo é prestar ajuda qualificada a quem já ajuda os animais. ');
    cy.get('.TextP > :nth-child(2)').should('exist');
    cy.get('.containerB').should('exist');
    cy.get('.containerB > :nth-child(1)').should('exist');
    cy.get('.containerB > :nth-child(2)').should('exist');
    cy.get('.Rectangle > img').should('exist');
    cy.get('.Pegada1 > img').should('exist');
    cy.get('.dogLeao > img').should('exist');
  });

  it('Deve exibir a tela About Us corretamente', () => {
    cy.get('.containerQuemSomos').scrollIntoView();
    cy.get('.containerQuemSomos').should('be.visible');
    cy.get('.containerQuemSomos').should('exist');
    cy.get('.Pegadas2 > img').should('exist');
    cy.get('.containerImage > img').should('exist');
    cy.get('.containerText > p').should('exist');
    cy.get('.containerText > p').should('have.text', 'Juntos pela felicidade dos animais! Seja parte da nossa equipe, lutando por um mundo onde nenhum animal seja deixado para trás.');
  });

  it('Deve exibir a tela Partners corretamente', () => {
    cy.get('.containerParceiros').scrollIntoView();
    cy.get('.containerParceiros').should('be.visible');
    cy.get('.containerParceiros').should('exist');
    cy.get('.containerParceiros > :nth-child(1)').should('exist');
    cy.get(':nth-child(1) > :nth-child(1) > .ImgCachorro').should('exist');
    cy.get(':nth-child(1) > .containerImageParceiros').should('exist');
    cy.get(':nth-child(1) > .containerImageParceiros > .containerImg').should('exist');
    cy.get(':nth-child(2) > :nth-child(1) > .ImgCachorro').should('exist');
    cy.get(':nth-child(2) > .containerImageParceiros').should('exist');
    cy.get(':nth-child(2) > .containerImageParceiros > .containerImg').should('exist');
    cy.get(':nth-child(3) > :nth-child(1) > .ImgCachorro').should('exist');
    cy.get(':nth-child(3) > .containerImageParceiros').should('exist');
    cy.get(':nth-child(3) > .containerImageParceiros > .containerImg').should('exist');
  });

  it('Deve exibir a tela Footes corretamente', () => {
    cy.get('.containerFooter').should('exist');
    cy.get('.Logo').should('exist');
    cy.get('.retaCentral').should('exist');
    cy.get('.celular').should('exist');
    cy.get('.telefone > h2').should('exist');
    cy.get('.telefone > h2').should('have.text', '(45) 98413-5559');
    cy.get('div.email > .email').should('exist');
    cy.get('[src="/img/Facebook.dc5675c3.svg"]').should('exist');
    cy.get('[src="/img/Instagram.f3fe2f41.svg"]').should('exist');
  });
});

describe('RegisterOccurences', () => {
  beforeEach(() => {
    cy.viewport('macbook-15');
    cy.visit('http://localhost:3000/register-occurences');
  });

  it('Deve exibir o formulario Registro Público', () => {
    cy.get('.container_occurences').should('exist');
    cy.get('.text').should('exist');
    cy.get('h1').should('exist');
    cy.get('h1').should('have.text', 'CADASTRO DE OCORRÊNCIAS');
    cy.get('.column').should('exist');
    cy.get('.column > :nth-child(1)').should('exist');
    cy.get(':nth-child(1) > .label').should('exist');
    cy.get(':nth-child(1) > .label').should('have.text', 'Nome');
    cy.get(':nth-child(1) > .control > .input').should('exist');
    cy.get('.column > :nth-child(2)').should('exist');
    cy.get(':nth-child(2) > .label').should('exist');
    cy.get(':nth-child(2) > .label').should('have.text', 'Contato');
    cy.get(':nth-child(2) > .control > .input').should('exist');
    cy.get('.column > :nth-child(3)').should('exist');
    cy.get(':nth-child(3) > .label').should('exist');
    cy.get(':nth-child(3) > .label').should('have.text', 'Descrição');
    cy.get(':nth-child(3) > .control > .input').should('exist');
    cy.get('.column > :nth-child(4)').should('exist');
    cy.get(':nth-child(4) > .label').should('exist');
    cy.get(':nth-child(4) > .label').should('have.text', 'Ponto de referência');
    cy.get(':nth-child(4) > .control > .input').should('exist');
    cy.get('.column > :nth-child(5)').should('exist');
    cy.get(':nth-child(5) > .label').should('exist');
    cy.get(':nth-child(5) > .label').should('have.text', 'Situação do Animal');
    cy.get('select').should('exist');
    cy.get('.controlButt').should('exist');
    cy.get('.butt').should('exist');
    cy.get('.butt2').should('exist');
  });

  it('Deve preencher o formulário corretamente', () => {
    cy.get(':nth-child(1) > .control > .input').clear().type('Joao');
    cy.get(':nth-child(2) > .control > .input').clear().type('45 998216130');
    cy.get(':nth-child(3) > .control > .input').clear().type('O animal é branco, porte pequeno, está mancando');
    cy.get(':nth-child(4) > .control > .input').clear().type('Proximo ao mercado muffato, no centro');
    cy.get('select').select('Emergência');
    cy.get('.butt2').click();
    cy.get('.notification').should('be.visible');
  });

  it('Deve retornar erro ao preencher o formulário errado', () => {
    cy.get(':nth-child(1) > .control > .input').clear().type('Na');
    cy.get(':nth-child(2) > .control > .input').click();
    cy.get(':nth-child(1) > .control > p > ul > li').should('be.visible');

    cy.get(':nth-child(2) > .control > .input').clear().type('497846');
    cy.get(':nth-child(3) > .control > .input').click();
    cy.get(':nth-child(2) > .control > p > ul > li').should('be.visible');

    cy.get(':nth-child(3) > .control > .input').click();
    cy.get(':nth-child(4) > .control > .input').click();
    cy.get(':nth-child(3) > .control > p > ul > li').should('be.visible');

    cy.get(':nth-child(4) > .control > .input').click();
    cy.get(':nth-child(3) > .control > .input').click();
    cy.get(':nth-child(4) > .control > p > ul > li').should('be.visible');


    cy.get('.butt2').click();
    cy.get('.select > p > ul > li').should('be.visible');
  });

  it('Deve retornar os erro ao clicar imediatamente quando clicar no cadastrar', () => {
    cy.get('.butt2').click();
    cy.get(':nth-child(1) > .control > p > ul > li').should('be.visible');
    cy.get(':nth-child(2) > .control > p > ul > li').should('be.visible');
    cy.get(':nth-child(3) > .control > p > ul > li').should('be.visible');
    cy.get(':nth-child(4) > .control > p > ul > li').should('be.visible');
    cy.get('.select > p > ul > li').should('be.visible');
  });
});