/// <reference types="cypress" />
context('checkingAllElements', () => {
  before(() => {
    cy.paymentsPath()
    // Неоткомиччивать! Машина ляжет!
    // cy.clearAllPayments()
  })

  it ('header', () => {
    // User Avater
    cy.get('.userInfo__avatar > .picture')
      .should('be.visible')

    // User Name
    cy.get('.userInfo__name')
      .should('be.visible')

    // User Group
    cy.get('.userInfo__group')
      .should('be.visible')
    })

  it ('layout', () => {
    // Home Icon
    cy.get('.breadcrumb__icon >> .icon')
      .should('be.visible')

    // Home Arrow
    cy.get('[href="/"] > .breadcrumb__arrow >> .icon')
      .should('be.visible')

    // Current Page Name
    cy.get('.breadcrumb__label')
      .contains('Платежи')
      .should('be.visible')

    // Current Page Arrow
    cy.get('[href="/payments/"] > .breadcrumb__arrow >> .icon')
      .should('be.visible')

    // Current Operation Name
    cy.get('.breadcrumb__label')
      .contains('Добавление')
      .should('be.visible')

    // Add Payment Button
    cy.get('.pageLayout__header')
      .contains('Добавить платёж')
      .should('be.visible')
  })

  it ('widgetTitle', () => {
    // Widget Text
    cy.get('.widget__title')
      .contains('Добавить платёж')
      .should('be.visible')
    })

  it ('operation', () => {
    // Title Text
    cy.get('[data-field-name="operation"]')
      .contains('Тип операции')
      .should('be.visible')

    // Income Text & Check
    cy.get('[data-field-name="operation"]')
      .contains('Доход/приход')
      .should('be.visible')
      .click()
    
    // Outcome Text & Check
    cy.get('[data-field-name="operation"]')
      .contains('Расход')
      .should('be.visible')
      .click()

    // Transit Text & Check
    cy.get('[data-field-name="operation"]')
      .contains('Перевод средств')
      .should('be.visible')
      .click()
    })

  it ('description', () => {
    // Description Title
    cy.get('[data-field-name="description"]')
      .contains('Описание')
      .should('be.visible')

    // Description Input
    cy.get('[data-field-name="description"]')
      .find('.input__input')
      .should('be.visible')
      .type('0')
    })

  it ('statuses', () => {
    // Statuses Title
    cy.get('[data-field-name="statuses"]')
      .contains('Статус')
      .should('be.visible')
      
    // Stateses Active Check && Uncheck
    cy.get('[data-field-name="statuses"]')
      .contains('Активен')
      .should('be.visible')
      .click()
      .click()

    // Stateses Verified Check && Uncheck
    cy.get('[data-field-name="statuses"]')
      .contains('Проверен')
      .should('be.visible')
      .click()
      .click()
    })

  it ('amount', () => {
    // Amount Title
    cy.get('[data-field-name="amount_plan"]')
      .contains('Сколько')
      .should('be.visible')

    // Amount Plan Text
    cy.get('[data-field-name="amount_plan"]')
      .contains('Сумма план')
      .should('be.visible')

    // Amount Plan Input
    cy.get('[data-field-name="amount_plan"]')
      .find('.input__input')
      .should('be.visible')
      .type('0')

    // Amount Fact Text
    cy.get('[data-field-name="amount_fact"]')
      .contains('Сумма факт')
      .should('be.visible')

    // Amount Fact Input
    cy.get('[data-field-name="amount_fact"]')
      .find('.input__input')
      .should('be.visible')
      .type('0')
    })

  it ('commission', () => {
    // Commission Text
    cy.get('[data-field-name="commission"]')
      .contains('Комиссия')
      .should('be.visible')

    // Commission Input
    cy.get('[data-field-name="commission"]')
      .find('.input__input')
      .should('be.visible')
    })

  it ('status', () => {
    // Status Title
    cy.get('[data-field-name="status"]')
      .contains('Статус оплаты')
      .should('be.visible')

    // Status Not Paid Text & Check
    cy.get('[data-field-name="status"]')
      .contains('Не оплачен')
      .should('be.visible')
      .click()
      
    // Status Paid Text & Check
    cy.get('[data-field-name="status"]')
      .contains('Оплачен')
      .should('be.visible')
      .click()

    // Status Part Paid Text & Check
    cy.get('[data-field-name="status"]')
      .contains('Частично оплачен')
      .should('be.visible')
      .click()
    })

  it ('date', () => {
    // Date Title text
    cy.get('[data-field-name="date_plan"]')
      .contains('Когда')

    // Date Plan Text
    cy.get('[data-field-name="date_plan"]')
    .contains('Дата план')

    // Date Box - Today
    cy.get('[data-field-name="date_plan"]')
      .find('.date')
      .should('be.visible')
      .click()

    cy.get('.dp-today')
      .should('be.visible')
      .click()

    // Date Box - Clear
    cy.get('[data-field-name="date_plan"]')
      .find('.date')
      .should('be.visible')
      .click()

    cy.get('.dp-clear')
      .should('be.visible')
      .click()

    // Date Box - Close
    cy.get('[data-field-name="date_plan"]')
      .find('.date')
      .should('be.visible')
      .click()

    cy.get('.dp-close')
      .should('be.visible')
      .click()

    // Date Fact Text
    cy.get('[data-field-name="date_fact"]')
      .contains('Дата факт')
      .should('be.visible')

    // Date Box - Today
    cy.get('[data-field-name="date_fact"]')
      .find('.date')
      .should('be.visible')
      .click()

    cy.get('.dp-today')
      .should('be.visible')
      .click()

    // Date Box - Clear
    cy.get('[data-field-name="date_fact"]')
      .find('.date')
      .should('be.visible')
      .click()

    cy.get('.dp-clear')
      .should('be.visible')
      .click()

    // Date Box - Close
    cy.get('[data-field-name="date_fact"]')
      .find('.date')
      .should('be.visible')
      .click()

    cy.get('.dp-close')
      .should('be.visible')
      .click()
    })

  it ('source', () => {
    // Prescript
    cy.get('.layout__container')
      .should('be.visible')
      .scrollTo('top')

    cy.get('[data-field-name="operation"]')
      .contains('Доход/приход')
      .should('be.visible')
      .click()

    // Source Title Text
    cy.get('[data-field-name="source"]')
      .contains('За что')
      .should('be.visible')
      .click()

    // Source Text
    cy.get('[data-field-name="source"]')
      .contains('Источник')
      .should('be.visible')

    // Source Selector
    cy.get('[data-field-name="source"]')
      .find('.multiselect__placeholder')
      .should('be.visible')
      .click()

    cy.get('[data-field-name="source"]')
      .find('.multiselect__option')
      .first()
      .should('be.visible')
      .click()

    // Source Additional ID Text
    cy.get('[data-field-name="source_additional_id"]')
      .contains('Источник, уточнение')
      .should('be.visible')

    // Source Additional ID Input
    cy.get('[data-field-name="source_additional_id"]')
      .find('.input')
      .should('be.visible')
      .type('0')

    // Source Status Text
    cy.get('[data-field-name="source_status"]')
      .contains('Статус документов')
      .should('be.visible')

    // Source Status Selector
    cy.get('[data-field-name="source_status"]')
      .find('.multiselect__placeholder')
      .should('be.visible')
      .click()

    cy.get('[data-field-name="source_status"]')
      .find('.multiselect__option')
      .first()
      .should('be.visible')
      .click()
    })  

  it ('company', () => {
    // Prescript 
    cy.get('.layout__container')
    .should('be.visible')
    .scrollTo('bottom')

    // Company Title Text
    cy.get('[data-field-name="company_own"]')
      .contains('Банковские данные')
      .should('be.visible')

    // Company Own Text
    cy.get('[data-field-name="company_own"]')
      .contains('Юридическое лицо')
      .should('be.visible')

    // Company Own Selector
    cy.get('[data-field-name="company_own"]')
      .find('.multiselect__placeholder')
      .should('be.visible')
      .click()

    cy.get('[data-field-name="company_own"]')
      .find('.multiselect__option')
      .first()
      .should('be.visible')
      .click()

    // Company Client Text
    cy.get('[data-field-name="company_client"]')
      .contains('Контрагент')
      .should('be.visible')

    // Company Client Selector
    cy.get('[data-field-name="company_client"]')
      .find('.multiselect__placeholder')
      .should('be.visible')
      .click()

    cy.get('[data-field-name="company_client"]')
      .find('.multiselect__option')
      .first()
      .should('be.visible')
      .click()
    })

    it ('account', () => {
    // Account Sender Text
    cy.get('[data-field-name="account_sender"]')
      .contains('Счет отправителя')
      .should('be.visible')

    // Account Sender Selector
    cy.get('[data-field-name="account_sender"]')
      .find('.multiselect__placeholder')
      .should('be.visible')
      .click()
      
    cy.get('[data-field-name="account_sender"]')
      .find('.multiselect__option')
      .first()
      .should('be.visible')
      .click()

    // Account Recipient Text
    cy.get('[data-field-name="account_recipient"]')
      .contains('Счет получателя')
      .should('be.visible')

    // Account Recipient Selector
    cy.get('[data-field-name="account_recipient"]')
      .find('.multiselect__placeholder')
      .should('be.visible')
      .click()

    cy.get('[data-field-name="account_recipient"]')
      .find('.multiselect__option')
      .first()
      .should('be.visible')
      .click()
    })

    it ('tags', () => {
    // Tags Text
    cy.get('[data-field-name="tags"]')
    .contains('Тэги')
    .should('be.visible')
    
    // Tags Selector
    cy.get('[data-field-name="tags"]')
      .find('.multiselect__placeholder')
      .should('be.visible')
      .click()

    cy.get('[data-field-name="tags"]')
      .find('.multiselect__option')
      .first()
      .should('be.visible')
      .click()
    })

    it ('externalSourceID', () => {
    // External Source Id Text
    cy.get('[data-field-name="external_source_id"]')
      .contains('ID в банке')
      .should('be.visible')
    
    // External Source Id Input
    cy.get('[data-field-name="external_source_id"]')
      .find('.input__input')
      .should('be.visible')
    })

    it ('footer', () => {
    // Footer Button - Cancel
    cy.get('.widget__footer')
      .contains('Отмена')
      .should('be.visible')

    // Footer Button - Add
    cy.get('.widget__footer')
      .contains('Добавить')
      .should('be.visible')
      .click()

    cy.wait(3000)

    // Footer Button - Delete
    cy.get('.widget__footer')
      .contains('Удалить')
      .should('be.visible')

    // Footer Button - Update
    cy.get('.widget__footer')
      .contains('Обновить')
      .should('be.visible')
    })
  })

context('creatingPayments', () => {
  beforeEach(() => {
    cy.paymentsPath()
  })

  afterEach(() => {
    cy.deletePayment()
  })

  context('operationType', () => {
    it('creatingIncomePayment', () => {
      cy.get('[data-field-name="description"]')
        .find('.input__input')
        .should('be.visible')
        .type('testPayment')
      
      cy.get('.layout__container')
        .should('be.visible')
        .scrollTo('bottom')

      cy.get('.widget__footer')
        .contains('Добавить')
        .should('be.visible')
        .click()
    })

    it('creatingOutcomePayment', () => {
      cy.get('[data-field-name="operation"]')
        .contains('Расход')
        .should('be.visible')
        .click()
    
      cy.get('[data-field-name="description"]')
        .find('.input__input')
        .should('be.visible')
        .type('testPayment')
      
      cy.get('.layout__container')
        .scrollTo('bottom')
        .should('be.visible')

      cy.get('.widget__footer')
        .contains('Добавить')
        .should('be.visible')
        .click()
    })

    it('creatingTransferPayment', () => {
      cy.get('[data-field-name="operation"]')
        .contains('Перевод средств')
        .should('be.visible')
        .click()

      cy.get('[data-field-name="description"]')
        .find('.input__input')
        .should('be.visible')
        .type('testPayment')

      cy.get('.layout__container')
        .scrollTo('bottom')
        .should('be.visible')

      cy.get('.widget__footer')
        .contains('Добавить')
        .should('be.visible')
        .click()
    })
  })
})