describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000/heroes')
    cy.get('nav').click()
  })
})