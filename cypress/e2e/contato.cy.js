///<reference types="cypress"/>


describe('Funcionalidade: contato', () => {

  beforeEach(() => {
     cy.visit('index.html')
  });

  it('Deve Preencher o Formulario com sucesso', () =>{
    cy.get('[name="name"]').type('Nayara Ferreira')
    cy.get('[name="email"]').type('nayara.ferreira@gmail.com')
    cy.get('[name="subject"]').select('Sugestões')
    cy.get('[name="message"]').type('Aula Teste Ebac')
    cy.get('#btn-submit').click()
    //Resultado esperado
    cy.contains('Contato enviado com sucesso!').should('exist')
  });

  it('Deve validar mensagem de erro enviar sem preencher nome', () => {
    cy.get('[name="name"]').clear()
    cy.get('[name="email"]').type('nayara.ferreira@gmail.com')
    cy.get('[name="subject"]').select('Sugestões')
    cy.get('[name="message"]').type('Aula Teste Ebac')
    cy.get('#btn-submit').click()
    //Resultado esperado
    cy.get('#alert-container').should('contain', 'Por favor, preencha o campo Nome')

  });

  it('Deve validar mensagem de erro enviar sem preencher email', () => {
    cy.get('[name="name"]').type('Nayara Ferreira')
    cy.get('[name="email"]').clear()
    cy.get('[name="subject"]').select('Sugestões')
    cy.get('[name="message"]').type('Aula Teste Ebac')
    cy.get('#btn-submit').click()
    //Resultado esperado
    cy.get('#alert-container').should('contain', 'Por favor, preencha o campo E-mail')
    
  });

  it('Deve validar mensagem de erro enviar sem preencher assunto', () => {
    cy.get('[name="name"]').type('Nayara Ferreira')
    cy.get('[name="email"]').type('nayara@teste.com')
    //cy.get('[name="subject"]').clear()
    cy.get('[name="message"]').type('Aula Teste Ebac')
    cy.get('#btn-submit').click()
    //Resultado esperado
    cy.get('#alert-container').should('contain', 'Por favor, selecione o Assunto')

  });

  it('Deve validar mensagem de erro enviar sem preencher a mensagem', () => {
    cy.get('[name="name"]').type('Nayara Ferreira')
    cy.get('[name="email"]').type('nayara@teste.com')
    cy.get('[name="subject"]').select('Parcerias')
    //cy.get('[name="message"]').type('Aula Teste Ebac')
    cy.get('#btn-submit').click()
    //Resultado esperado
    cy.get('#alert-container').should('contain', 'Por favor, escreva sua Mensagem')
  });

});