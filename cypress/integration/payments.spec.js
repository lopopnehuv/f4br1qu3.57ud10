/// <reference types="cypress" />
context('checkingAllElements', () => {
  before(() => {
    cy.beforeEachPayments()
  })

  after(() => {
    cy.get('.widget__footer')
      .contains('Отмена')
      .click()
  })

  it ('checkingHeader', () => {
    // Header
    cy.get('.userInfo__avatar > .picture')
      .should('be.visible')

    cy.get('.userInfo__name')
      .should('be.visible')

    cy.get('.userInfo__group')
      .should('be.visible')

    // Page Layout
    cy.get('.breadcrumb__icon >> .icon')
      .should('be.visible')

    cy.get('[href="/"] > .breadcrumb__arrow >> .icon')
      .should('be.visible')

    cy.get('.breadcrumb__label')
      .contains('Платежи')
      .should('be.visible')

    cy.get('[href="/payments/"] > .breadcrumb__arrow >> .icon')
      .should('be.visible')

    cy.get('.breadcrumb__label')
      .contains('Добавление')
      .should('be.visible')

    cy.get('.pageLayout__header')
      .contains('Добавить платёж')
      .should('be.visible')
  })

  it ('checkingBody', () => {
    // Title
    cy.get('.widget__title')
      .contains('Добавить платёж')
      .should('be.visible')

    // Operation
    cy.get('[data-field-name="operation"]')
      .contains('Тип операции')
      .should('be.visible')

    cy.get('[data-field-name="operation"]')
      .contains('Доход/приход')
      .should('be.visible')
      .click()
      
    cy.get('[data-field-name="operation"]')
      .contains('Расход')
      .should('be.visible')
      .click()

    cy.get('[data-field-name="operation"]')
      .contains('Перевод средств')
      .should('be.visible')
      .click()

    // Description
    cy.get('[data-field-name="description"]')
      .contains('Описание')
      .should('be.visible')

    cy.get('[data-field-name="description"]')
      .find('.input__input')
      .should('be.visible')
      .type('0')

    // Statuses
    cy.get('[data-field-name="statuses"]')
      .contains('Статус')
      .should('be.visible')
      
    cy.get('[data-field-name="statuses"]')
      .contains('Активен')
      .should('be.visible')
      .click()
      .click()

    cy.get('[data-field-name="statuses"]')
      .contains('Проверен')
      .should('be.visible')
      .click()
      .click()

    // Amount Plan
    cy.get('[data-field-name="amount_plan"]')
      .contains('Сколько')
      .should('be.visible')

    cy.get('[data-field-name="amount_plan"]')
      .contains('Сумма план')
      .should('be.visible')

    cy.get('[data-field-name="amount_plan"]')
      .find('.input__input')
      .should('be.visible')
      .type('0')

    // Amount Fact
    cy.get('[data-field-name="amount_fact"]')
      .contains('Сумма факт')
      .should('be.visible')

    cy.get('[data-field-name="amount_fact"]')
      .find('.input__input')
      .should('be.visible')
      .type('0')

    // Commission
    cy.get('[data-field-name="commission"]')
      .contains('Комиссия')
      .should('be.visible')

    cy.get('[data-field-name="commission"]')
      .find('.input__input')
      .should('be.visible')

    // Payment State
    cy.get('[data-field-name="status"]')
      .contains('Статус оплаты')
      .should('be.visible')

    cy.get('[data-field-name="status"]')
      .contains('Не оплачен')
      .should('be.visible')
      .click()
      
    cy.get('[data-field-name="status"]')
      .contains('Оплачен')
      .should('be.visible')
      .click()

    cy.get('[data-field-name="status"]')
      .contains('Частично оплачен')
      .should('be.visible')
      .click()

    // Date Plan
    cy.get('[data-field-name="date_plan"]')
      .contains('Когда')

    cy.get('[data-field-name="date_plan"]')
    .contains('Дата план')

    cy.get('[data-field-name="date_plan"]')
      .find('.date')
      .should('be.visible')
      .click()

    cy.get('.dp-today')
      .should('be.visible')
      .click()

    cy.get('[data-field-name="date_plan"]')
      .find('.date')
      .should('be.visible')
      .click()

    cy.get('.dp-clear')
      .should('be.visible')
      .click()

    cy.get('[data-field-name="date_plan"]')
      .find('.date')
      .should('be.visible')
      .click()

    cy.get('.dp-close')
      .should('be.visible')
      .click()

    // Date Fact
    cy.get('[data-field-name="date_fact"]')
      .contains('Дата факт')
      .should('be.visible')

    cy.get('[data-field-name="date_fact"]')
      .find('.date')
      .should('be.visible')
      .click()

    cy.get('.dp-today')
      .should('be.visible')
      .click()

    cy.get('[data-field-name="date_fact"]')
      .find('.date')
      .should('be.visible')
      .click()

    cy.get('.dp-clear')
      .should('be.visible')
      .click()

    cy.get('[data-field-name="date_fact"]')
      .find('.date')
      .should('be.visible')
      .click()

    cy.get('.dp-close')
      .should('be.visible')
      .click()
    
    // Account Sender
    cy.get('[data-field-name="account_sender"]')
      .contains('Банковские данные')
      .should('be.visible')

    cy.get('[data-field-name="account_sender"]')
      .contains('Счет отправителя')
      .should('be.visible')

    cy.get('[data-field-name="account_sender"]')
      .find('.multiselect__placeholder')
      .should('be.visible')
      .click()
      
    cy.get('[data-field-name="account_sender"]')
      .find('.multiselect__option')
      .first()
      .should('be.visible')
      .click()

    // Account Recipient
    cy.get('[data-field-name="account_recipient"]')
      .contains('Счет получателя')
      .should('be.visible')

    cy.get('[data-field-name="account_recipient"]')
      .find('.multiselect__placeholder')
      .should('be.visible')
      .click()

    cy.get('[data-field-name="account_recipient"]')
      .find('.multiselect__option')
      .first()
      .should('be.visible')
      .click()

    // Tags
    cy.get('[data-field-name="tags"]')
    .contains('Тэги')
    .should('be.visible')

    cy.get('[data-field-name="tags"]')
      .find('.multiselect__placeholder')
      .should('be.visible')
      .click()

    cy.get('[data-field-name="tags"]')
      .find('.multiselect__option')
      .first()
      .should('be.visible')
      .click()

    // External Source Id
    cy.get('[data-field-name="external_source_id"]')
      .contains('ID в банке')
      .should('be.visible')

    cy.get('[data-field-name="external_source_id"]')
      .find('.input__input')
      .should('be.visible')
    })

    it ('checkingFooter', () => {
    // Widget Footer
    cy.get('.widget__footer')
      .contains('Отмена')
      .should('be.visible')

    cy.get('.widget__footer')
      .contains('Добавить')
      .should('be.visible')
    })
})