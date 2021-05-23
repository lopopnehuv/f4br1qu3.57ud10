// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('loginAsAdmin', () => {
  cy.get('[placeholder="Электронная почта"]').type('admin@admin.ad')
  cy.get('[placeholder="Пароль"]').type('admin')
  cy.contains('Далее').click()
  cy.get('.userInfo__name').contains('admin@admin.ad')
  cy.url().should('eq', 'https://finance.dev.fabrique.studio/')
})

Cypress.Commands.add('checkingMenuSide', () => {
  cy.get('.logo >> .picture')
  cy.get('.side__label').contains('Платежи')
  cy.get('.side__label').contains('Контрагенты')
  cy.get('.side__label').contains('Счета')
  cy.get('.side__label').contains('Статьи расходов')
  cy.get('.side__label').contains('Юр. лица')
  cy.get('.side__label').contains('Пользователи')
})

Cypress.Commands.add('beforeEachPayments', () => {
  cy.visit('/accounts/login/')
  cy.url().should('eq', 'https://finance.dev.fabrique.studio/accounts/login/')
  cy.loginAsAdmin()
  cy.contains('Добавить платёж').click()
  cy.url().should('eq', 'https://finance.dev.fabrique.studio/payments/edit/')
  cy.checkingMenuSide()
})