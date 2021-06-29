// admin.spec.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test


describe('Login as admin', () => {
    it('Visit the site to test', () => {
      cy.visit('admin/')
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
     cy.wait(500)
    // configure the hotel first 
    })
   it('redirect to dashboard', () => {
    cy.get('[href="#Hotels"]').click()
    cy.wait(1000)
    cy.scrollTo('center')
    cy.wait(10000)
    cy.xpath('//*[@id="Hotels"]/li[1]/a').click()
    cy.waitFor(10000)
   })

   it('click the add button', () =>{
     cy.wait('//*[@id="Hotels"]/li[1]/a')
    cy.intercept('POST', 'https://www.phptravels.net/admin/hotels/add')
    //  try {
    //   cy.xpath('/html/body/div[3]/div/div[2]/form').click()
    //  } catch (error) {
    //   cy.find('.add_button > .btn').click()
    //  }

   })

 

})




