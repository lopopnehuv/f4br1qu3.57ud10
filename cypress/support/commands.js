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
  cy.get('[placeholder="Электронная почта"]')
    .should('be.visible')
    .type('admin@admin.ad')

  cy.get('[placeholder="Пароль"]')
    .should('be.visible')
    .type('admin')

  cy.contains('Далее')
    .should('be.visible')
    .click()

  cy.get('.userInfo__name')
    .should('be.visible')
    .contains('admin@admin.ad')

  cy.url()
    .should('eq', 'https://finance.dev.fabrique.studio/')
})

Cypress.Commands.add('checkingMenuSide', () => {
  cy.get('.logo >> .picture')
    .should('be.visible')

  cy.get('.side__label')
    .contains('Платежи')
    .should('be.visible')

  cy.get('.side__label')
    .contains('Контрагенты')
    .should('be.visible')

  cy.get('.side__label')
    .contains('Счета')
    .should('be.visible')

  cy.get('.side__label')
    .contains('Статьи расходов')
    .should('be.visible')

  cy.get('.side__label')
    .contains('Юр. лица')
    .should('be.visible')

  cy.get('.side__label')
    .contains('Пользователи')
    .should('be.visible')
})

Cypress.Commands.add('paymentsPath', () => {
  cy.visit('/accounts/login/')
  
  cy.url()
    .should('eq', 'https://finance.dev.fabrique.studio/accounts/login/')
  
  cy.loginAsAdmin()

  cy.contains('Добавить платёж')
    .should('be.visible')
    .click()

  cy.url()
    .should('eq', 'https://finance.dev.fabrique.studio/payments/edit/')
  
  cy.checkingMenuSide()
})

Cypress.Commands.add('deletePayment', () => {
  cy.visit('/payments/')

  cy.contains('span', 'testPayment')
    .first()
    .click()

  cy.wait(2000)

  cy.get('.layout__container')
    .should('be.visible')
    .scrollTo('bottom')

  cy.get('.widget__footer')
    .contains('Удалить')
    .should('be.visible')
    .click()

  cy.get('.swal2-confirm')
    .contains('Да')
    .should('be.visible')
    .click()
})

Cypress.Commands.add('clearAllPayments', () => {
  while (
    cy.get('[data-field="0"] > :nth-child(1)')
    ) {
      cy.deleteFirstPayment()
  }
})

Cypress.Commands.add('deleteFirstPayment', () => {
  cy.get('[data-field="0"] > :nth-child(1)')
    .should('be.visible')
    .click()

  cy.get('.layout__container')
    .should('be.visible')
    .scrollTo('bottom')

  cy.get('.widget__footer')
    .contains('Удалить')
    .should('be.visible')
    .click()

  cy.get('.swal2-confirm')
    .contains('Да')
    .should('be.visible')
    .click()
})