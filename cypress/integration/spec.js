/// <reference types="cypress" />

// using small delays can make the video a lot more useful
Cypress.Commands.add('delay', (ms = 500) => {
  cy.wait(ms, { log: false })
})

describe('Pokemon', () => {
  it('shows a card', () => {
    cy.visit('/')
    cy.title().should('equal', 'Home').delay()
    cy.contains('Go to Pokes').click()

    cy.title().should('equal', 'PokeList')
    cy.delay()
    // the list is fetched from the API
    cy.get('[data-testid="poke-card"]')
      .should('have.length', 20)
      .first()
      .click()

    cy.title().should('equal', 'Pokemon')
    cy.get('[data-testid=pokemon-name]').should('be.visible').delay()

    cy.log('**go back to Home screen**')
    cy.get('[aria-label="PokeList, back"]').click().delay()
    cy.title().should('equal', 'PokeList').delay()
    cy.get('[aria-label="Home, back"]').click()
    cy.title().should('equal', 'Home').delay()
  })
})
