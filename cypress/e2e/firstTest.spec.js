const { onHomePage } = require("../support/homePage");

describe('Thread Spy Test Suite', () => {



    it('Should use the open search bar to find an item', () => {

        cy.get('[class="search-product"]').click().type('Trainers');
        
        cy.get('[class="ui-menu-item"]').first().click();

        cy.wait(10000);

        cy.contains('Filling Pieces Sale');
        
    })

    it('Should not be able to sign up a member, if password is missing', () => {

        cy.get('[class="dropdown dropdown-account"]').first().click();
        
        cy.contains('Sign In/Sign Up').click();

        cy.wait(2000);

        cy.get('[name="name"]').first().type('Alex');

        cy.get('[name="last_name"]').first().type('Croft');

        cy.get('[name="email"]').first().type('test@test.com');

        cy.contains('Create Account').click();

        cy.get('[id="jq-toast-item-0"]').eq(0).should('contain', 'The password field is required.');

        cy.get('[id="jq-toast-item-0"]').eq(1).should('contain', 'The confirm password field is required.');
    })

    it('Should attempt to sign in without being a member', () => {

        cy.get('[class="dropdown dropdown-account"]').first().click();
        
        cy.contains('Sign In/Sign Up').click();

        cy.get('[id="pills-login-tab"]').first().click();

        cy.get('[name="email"]').eq(1).type('test@test.com');

        cy.get('[id="exampleInputPassword1"]').type('Testing123');

        cy.get('[type="checkbox"]').eq(1).check({force: true});

        cy.contains('Submit').click();

        cy.get('[class="jq-toast-heading"]').should('contain', 'Error');

   })

})






