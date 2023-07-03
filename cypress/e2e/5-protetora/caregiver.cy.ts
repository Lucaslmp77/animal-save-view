describe("Caregiver View", () => {
  beforeEach(() => {
    cy.viewport("macbook-15");
    cy.visit("http://localhost:3000/login");
    cy.get(":nth-child(1) > .control > .input").type("caregiver@caregiver.com");
    cy.get(":nth-child(2) > .control > .input").type("caregiver");
    cy.get("#button-login").click();
    cy.wait(50);
  });

  context("Quando acessar a página de protetora(a)", () => {
    it("Deve exibir a tela do protetor(a) corretamente", () => {
      cy.get(".title").should("exist");
      cy.get(".title").should("be.visible");
    });

    it("Deve exibir a logo corretamente", () => {
      cy.get("#container-title").should("be.visible");
      cy.get("#container-title").should("exist");
    });

    it("Deve conseguir mudar de abas corretamente", () => {
      // Acessa a aba "Ocorrências"
      cy.get("a").contains("Ocorrências").click();
      cy.get("a")
        .should("have.class", "is-active")
        .and("contain", "Ocorrências");

      // Acessa a aba "Meus animais"
      cy.get("a").contains("Meus animais").click();
      cy.get("a")
        .should("have.class", "is-active")
        .and("contain", "Meus animais");

      // Acessa a aba "Cadastrar Animal"
      cy.get("a").contains("Cadastrar Animal").click();
      cy.get("a")
        .should("have.class", "is-active")
        .and("contain", "Cadastrar Animal");
    });

    it("Deve voltar para a landing page ao clicar na logo do sistema", () => {
      cy.get("img").click();
      cy.url().should("include", "http://localhost:3000/");
      cy.url().should("not.include", "/protetora");
    });

    describe("Dentro do Cadastrar Animal", () => {
      beforeEach(() => {
        cy.get("a").contains("Cadastrar Animal").click();
      });
      it("Todos os campos de Cadastrar Animal devem estar existir ", () => {
        cy.get(".formGrid > :nth-child(1)").should("exist");
        cy.get(".formGrid > :nth-child(2)").should("exist");
        cy.get(".formGrid > :nth-child(3)").should("exist");
        cy.get(".formGrid > :nth-child(4)").should("exist");
        cy.get(".formGrid > :nth-child(5)").should("exist");
        cy.get(".formGrid > :nth-child(6)").should("exist");
        cy.get(".formGrid > :nth-child(7)").should("exist");
        cy.get(".formGrid > :nth-child(8)").should("exist");
      });

      it("Todos os campos de Cadastrar Animal devem estar visíveis ", () => {
        cy.get(".formGrid > :nth-child(1)").should("be.visible");
        cy.get(".formGrid > :nth-child(2)").should("be.visible");
        cy.get(".formGrid > :nth-child(3)").should("be.visible");
        cy.get(".formGrid > :nth-child(4)").should("be.visible");
        cy.get(".formGrid > :nth-child(5)").should("be.visible");
        cy.get(".formGrid > :nth-child(6)").should("be.visible");
        cy.get(".formGrid > :nth-child(7)").should("be.visible");
        cy.get(".formGrid > :nth-child(8)").should("be.visible");
      });

      it("Preencher o campo de Tipo com GATO ", () => {
        cy.get("#vs1__combobox > .vs__selected-options > .vs__search")
          .eq(0)
          .click();
        cy.get("#vs1__option-0").contains("GATO").click();
      });
      it("Preencher o campo de Tipo com CACHORRO", () => {
        cy.get("#vs1__combobox > .vs__selected-options > .vs__search")
          .eq(0)
          .click();
        cy.get("#vs1__option-1").contains("CACHORRO").click();
      });
      it("Preencher o campo de tamanho com PEQUENO ", () => {
        cy.get("#vs2__combobox > .vs__selected-options > .vs__search")
          .eq(0)
          .click();
        cy.get("#vs2__option-0").contains("PEQUENO").click();
      });
      it("Preencher o campo de tamanho com MEDIO", () => {
        cy.get("#vs2__combobox > .vs__selected-options > .vs__search")
          .eq(0)
          .click();
        cy.get("#vs2__option-1").contains("MEDIO").click();
      });
      it("Preencher o campo de tamanho com GRANDE", () => {
        cy.get("#vs2__combobox > .vs__selected-options > .vs__search")
          .eq(0)
          .click();
        cy.get("#vs2__option-2").contains("GRANDE").click();
      });
      it("Preencher o campo de nome com Bino", () => {
        cy.get(":nth-child(3) > .input").type("Bino");
      });
      it("Preencher o campo de raça com Labrador ", () => {
        cy.get(":nth-child(4) > .input").type("Labrador");
      });
      it("Preencher o campo de idade com 3 ", () => {
        cy.get(":nth-child(5) > .input").type(3);
      });
      it("Preencher o campo de vacinas tomadas com Raiva ", () => {
        cy.get("#vs3__combobox > .vs__selected-options > .vs__search").click();
        cy.get("#vs3__option-0").click();
      });
      it("Apagar o 'Raiva' do campo de vacinas tomadas ", () => {
        cy.get("#vs3__combobox > .vs__selected-options > .vs__search").click();
        cy.get("#vs3__option-0").click();
        const vaccineToDeselect = "Raiva";
        cy.get(".vs__selected")
          .contains(vaccineToDeselect)
          .parent()
          .find(".vs__deselect")
          .click();
      });
      it("Preencher o campo de cor com Amarelo ", () => {
        cy.get(":nth-child(7) > .input").type("Amarelo");
      });
      it("Preencher o campo de observação com timido ", () => {
        cy.get(":nth-child(8) > .input").type("timido");
      });

      it("Enviar o formulário", () => {
        cy.get("#vs1__combobox > .vs__selected-options > .vs__search")
          .eq(0)
          .click();
        cy.get("#vs1__option-1").contains("CACHORRO").click();
        cy.get("#vs2__combobox > .vs__selected-options > .vs__search")
          .eq(0)
          .click();
        cy.get("#vs2__option-2").contains("GRANDE").click();
        cy.get(":nth-child(3) > .input").type("Bino");
        cy.get(":nth-child(4) > .input").type("Labrador");
        cy.get(":nth-child(5) > .input").type(3);
        cy.get("#vs3__combobox > .vs__selected-options > .vs__search").click();
        cy.get("#vs3__option-0").click();
        cy.get("#vs3__combobox > .vs__selected-options > .vs__search").click();
        cy.get(":nth-child(7) > .input").type("Amarelo");
        cy.get(":nth-child(8) > .input").type("timido");
        cy.get("#registerButton").click();
      });
    });
    describe("Dentro do Ocorrências", () => {
      beforeEach(() => {
        cy.get("a").contains("Ocorrências").click();
      });
      it("A tabela deve existir", () => {
        cy.get(".containerFlex").should("exist");
      });
      it("A tabela deve estar visível", () => {
        cy.get(".containerFlex").should("be.visible");
      });
    });
    describe("Dentro do Meus Animais", () => {
      beforeEach(() => {
        cy.get("a").contains("Meus animais").click();
      });
      it("A tabela deve existir", () => {
        cy.get(".containerFlex").should("exist");
      });
      it("A tabela deve estar visível", () => {
        cy.get(".containerFlex").should("be.visible");
      });
      it("O botão de editar deve estar visível", () => {
        cy.get(":nth-child(1) > :nth-child(7) > #button-editar").should(
          "be.visible"
        );
      });
      it("O botão de editar deve existir", () => {
        cy.get(":nth-child(1) > :nth-child(7) > #button-editar").should(
          "exist"
        );
      });
      it("O botão de editar deve ser clicável", () => {
        cy.get(":nth-child(1) > :nth-child(7) > #button-editar").should(
          "not.be.disabled"
        );
      });
      it("O botão de editar deve abrir um modal ao ser clicado", () => {
        cy.get(":nth-child(1) > :nth-child(7) > #button-editar").click();
        cy.get(".modal-container").should("exist");
        cy.get(".modal-container").should("be.visible");
      });
      it("Os dados dentro do modal podem ser editados", () => {
        cy.get(":nth-child(1) > :nth-child(7) > #button-editar").click();
        cy.get('[placeholder="Nome"]').clear();
        cy.get('[placeholder="Nome"]').type("Neo-Bino");
        cy.get('[placeholder="Nome"]').should("have.value", "Neo-Bino");
        cy.get('[placeholder="Raça"]').clear();
        cy.get('[placeholder="Raça"]').type("Retriever");
        cy.get('[placeholder="Raça"]').should("have.value", "Retriever");

        cy.get(".field > :nth-child(1) > :nth-child(3)").select(1);
        cy.get(".field > :nth-child(1) > :nth-child(3)").should(
          "have.value",
          "GATO"
        );
        cy.get(".field > :nth-child(1) > :nth-child(3)").select(2);
        cy.get(".field > :nth-child(1) > :nth-child(3)").should(
          "have.value",
          "CACHORRO"
        );
        cy.get(".field > :nth-child(1) > :nth-child(4)").select(1);
        cy.get(".field > :nth-child(1) > :nth-child(4)").should(
          "have.value",
          "PEQUENO"
        );
        cy.get(".field > :nth-child(1) > :nth-child(4)").select(2);
        cy.get(".field > :nth-child(1) > :nth-child(4)").should(
          "have.value",
          "MEDIO"
        );
        cy.get(".field > :nth-child(1) > :nth-child(4)").select(3);
        cy.get(".field > :nth-child(1) > :nth-child(4)").should(
          "have.value",
          "GRANDE"
        );

        cy.get('[placeholder="Cor"]').clear();
        cy.get('[placeholder="Cor"]').type("Preto");
        cy.get('[placeholder="Cor"]').should("have.value", "Preto");

        cy.get("#button-aprovar").click();
        cy.wait(200);
        cy.get("tbody > :nth-child(1) > :nth-child(1)").should(
          "contain",
          "Neo-Bino"
        );
      });
    });
  });
});
