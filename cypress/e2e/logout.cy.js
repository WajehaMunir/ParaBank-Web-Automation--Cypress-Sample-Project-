describe('ParaBank Logout', () => {
  it('logs out successfully', () => {
    cy.visit('https://parabank.parasoft.com/parabank/index.htm')

    // Login first
    cy.get('input[name="username"]').type('john')
    cy.get('input[name="password"]').type('demo')
    cy.get('input[value="Log In"]').click()

    cy.contains('Welcome John').should('be.visible')

    // Click Log Out link
    cy.get('a').contains('Log Out').click()

    // Verify redirected back to login page
    cy.get('input[name="username"]').should('be.visible')
    cy.get('input[name="password"]').should('be.visible')
  })
})