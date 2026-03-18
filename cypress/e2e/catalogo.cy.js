/// <reference types="cypress" />

describe('Funcionalidade catálogo de livros', () => {
  beforeEach(() => {
    cy.visit('catalog.html')
  })

  it('Deve clicar no botão adicionar à cesta', () => {
    cy.contains('Adicionar à Cesta').click()

    cy.contains('Adicionar à Cesta').should('exist')
  })
})