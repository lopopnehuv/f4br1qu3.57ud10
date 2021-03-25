/// <reference types="cypress" />
context('authorisationTests (examples)', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.url().should('eq', 'https://finance.dev.fabrique.studio/accounts/login/')
  })

  it('linked logo', () => {

    cy.get('[href="/"]')
      .should('be.visible')
      .and('have.class', 'logo')
      .and('have.class', 'nuxt-link-active')
      .and('have.class', 'logo--is-link')

      .find('img')
      .should('be.visible')
      .and('have.class', 'picture')
      .and('have.class', 'picture--type-image')
      .click()

    cy.url().should('eq', 'https://finance.dev.fabrique.studio/accounts/login/')
  })

  it('widget with users filling form', () => {
    cy.contains('Вход в систему')
      .should('be.visible')
      .and('have.class', 'widget__title')

    cy.get('[placeholder="Электронная почта"]')
      .should('be.visible')
      .and('have.class', 'input__input')
      .and('have.class', 'input__input--is-centered')
      .and('have.attr', 'type', 'email')
      .click().should('have.focus')

    cy.get('[placeholder="Пароль"]')
      .should('be.visible')
      .and('have.class', 'input__input')
      .and('have.class', 'input__input--is-centered')
      .and('have.attr', 'type', 'password')
      .click().should('have.focus')

    cy.contains('Далее')
      .should('be.visible')
      .and('have.class', 'button')
      .and('have.class', 'button--size-md')
      .and('have.class', 'button--is-rounded')
      .and('have.class', 'button--is-block')
      .and('have.class', 'button--is-centered')
      .and('have.class', 'button--state-filled')
      .and('have.attr', 'type', 'submit')
      .click().should('have.focus')

    cy.contains('Авторизация')
      .should('be.visible')
      .and('have.class', 'notification__body')
    cy.contains('Авторизация')
      .should('have.css', 'cursor', 'default')
  })

  it('authorisation with available users', () => {
    cy.fixture('users').then((users) => {
      for (let i = 0; i < users.length; i++) {
        cy.get('[placeholder="Электронная почта"]').type(users[i].email)
        cy.get('[placeholder="Пароль"]').type(users[i].password)
        cy.contains('Далее').click()
        cy.url().should('eq', 'https://finance.dev.fabrique.studio/')
        cy.contains(users[i].email).click()
        cy.contains('Выйти из системы').click()
      }
    })
  })

context('negativeTests (examples)', () => {
  it('email without password', () => {
    cy.get('[placeholder="Электронная почта"]').type('temp@test.email')
    cy.contains('Далее').click()
    cy.contains('Это поле не может быть пустым.')
      .should('be.visible')
      .and('have.css', 'color', 'rgb(255, 48, 36)')
  })

  it('password without email', () => {
    cy.get('[placeholder="Пароль"]').type('password')
    cy.contains('Далее').click()
    cy.contains('Это поле не может быть пустым.')
      .should('be.visible')
      .and('have.css', 'color', 'rgb(255, 48, 36)')
  })

  it('empty filling form', () => {
    cy.contains('Далее').click()
    cy.contains('Это поле не может быть пустым.').first()
      .should('be.visible')
      .and('have.css', 'color', 'rgb(255, 48, 36)')
    cy.contains('Это поле не может быть пустым.').last()
      .should('be.visible')
      .and('have.css', 'color', 'rgb(255, 48, 36)')
  })
  })

  context('apiTests (examples)', () => {
    it('api login correct', () => {
      cy.request(
        'POST', 
        'https://finance.dev.fabrique.studio/rest-auth/login/', 
        '{username: "admin@admin.ad", password: "admin"}'
        ).then((response) => {
          expect(response.status).to.eq(200)
        })
      })
  })
})