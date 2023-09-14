it('Schwarzenegger search', () => {
    cy.visit('https://en.wikipedia.org/wiki/Main_Page')
    cy.get('.cdx-text-input__input').type('Schwarzenegger')
    cy.get('.cdx-search-input > .cdx-button').click()
    cy.contains('Arnold Schwarzenegger').should('be.visible')
    cy.contains("July 30, 1947")
})