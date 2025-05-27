describe('ParaBank Incorrect Password', () => {
  it('shows error on incorrect password', () => {
    cy.visit('https://parabank.parasoft.com/parabank/index.htm')

    cy.get('input[name="username"]').type('john')
    cy.get('input[name="password"]').type('wrongPassword')
    cy.get('input[value="Log In"]').click()

    cy.contains('The username and password could not be verified.').should('be.visible')
  })
})