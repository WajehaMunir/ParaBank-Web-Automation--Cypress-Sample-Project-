describe('ParaBank Login Test', () => {
  it('logs in successfully with valid credentials', () => {
    // Visit the ParaBank login page
    cy.visit('https://parabank.parasoft.com/parabank/index.htm')

    // Enter username
    cy.get('input[name="username"]').type('john')

    // Enter password
    cy.get('input[name="password"]').type('demo')

    // Click the Login button
    cy.get('input[value="Log In"]').click()

    // Verify that the login was successful by checking for a welcome message or element on the page
    cy.contains('Welcome John').should('be.visible')
  })
})