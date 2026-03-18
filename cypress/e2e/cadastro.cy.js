///<reference types="cypress"/>
import { faker } from '@faker-js/faker';

describe('Funcionalidade: Cadastro no Hub de Leitura', () => {

    beforeEach(() => {
        cy.visit('register.html')
    });

    it('Deve fazer cadastro com sucesso - Usando JS', () => {

        let email = `teste${Date.now()}@teste.com`

        cy.get('#name').type('Nayara Ferreira')
        cy.get('#email').type(email)
        cy.get('#phone').type('11985281622')
        cy.get('#password').type('123456')
        cy.get('#confirm-password').type('123456')
        cy.get('#terms-agreement').check()

        cy.get('#register-btn').click()

        cy.url({ timeout: 10000 }).should('include', 'dashboard')
    });

    it('Deve fazer cadastro com sucesso - usando Faker', () => {

        let name = faker.person.fullName()
        let email = faker.internet.email()

        cy.get('#name').type(name)
        cy.get('#email').type(email)
        cy.get('#phone').type('11985281622')
        cy.get('#password').type('123456')
        cy.get('#confirm-password').type('123456')
        cy.get('#terms-agreement').check()

        cy.get('#register-btn').click()

        cy.url({ timeout: 10000 }).should('include', 'dashboard')
        cy.get('#user-name').should('contain', name)
    });

});