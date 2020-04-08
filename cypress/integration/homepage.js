describe('Visiting home', () => {
  it('does not kick off webpack compilation', () => {
    cy.visit('/')
  })
})
