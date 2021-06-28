// admin.spec.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test

describe('Login as admin', () => {
    it('Visit the site to test', () => {
      cy.visit('/admin')
    })

    it('insert email and password', () => {
    // get username
    cy.get(':nth-child(2) > input').
    type("admin@phptravels.com").should('have.value', 'admin@phptravels.com')
    
     // get password 
     cy.get(':nth-child(3) > input').
     type('demoadmin').should('have.value', 'demoadmin')
    // click button to login
     cy.get('.form-signin > .btn').click()
     cy.wait(1000)
    // configure the hotel first 
    })
   it('redirect to dashboard', () => {
    cy.get('#sidebar').scrollTo(500, 0).find('#social-sidebar-menu > :nth-child(3) > a > .fa').click()
    cy.wait(500)
    // cy.get(' #social-sidebar-menu > :nth-child(3) > a > .fa').click()
   })

})




