// admin.spec.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test

describe('Login as admin', () => {
    it('Visits the Kitchen Sink', () => {
      cy.visit('https://www.phptravels.net/admin')
    })

    it('insert email and password', () => {
    // get username
    cy.get(':nth-child(2) > input').
    type("adadad@email.com").should('have.value', 'adadad@email.com')
    
     // get password 
     cy.get(':nth-child(3) > input').
     type('123abcd').should('have.value', '123abcd')

     cy.get('.form-signin > .btn').click()
    })
   

})




