describe('Thread Spy Test Suite', () => {


    beforeEach('Should navigate to the network website', () => {

        cy.visit('/');
    
    })

    it('Should Navigate to Website and check the dropdowns are present', () => {

        cy.get('[class="logo-brand"]').should('contain', 'THREADSPY');

        
        cy.get('[id="header-section"]').then( input => {
            cy.wrap(input).find('[class="mega-drop-down"]').should('contain', 'Brands');
            cy.wrap(input).find('[class="mega-drop-down"]').should('contain', 'Clothing');
            cy.wrap(input).find('[class="mega-drop-down"]').should('contain', 'Footwear');
            cy.wrap(input).find('[class="mega-drop-down"]').should('contain', 'Accessories');
            cy.wrap(input).find('[class="mega-drop-down"]').should('contain', 'Latest');
        })

    })

    it('Should click Shop Now and search for an item', () => {

        cy.get('[class="button-custom btn-gold-view animated fadeInUp"]').click();

        cy.wait(9000);

        cy.get('[placeholder="Search"]').eq(1).type('Burb');

        cy.wait(5000);

        cy.get('[id="brand-burberry"]').invoke('val').should('contain', 'Burberry');

        cy.get('[id="brand-burberry"]').check({force: true});

        cy.get('[id="category-checkbox-jumpers"]').check({force: true});

        cy.get('[id="size-M"]').click();

        cy.wait(14000);

        cy.get('[class="brand-name"]').first().should('contain', 'Burberry');
    
    })

    it('Should search for an item and sort product on lowest price', () => {

        cy.get('[class="button-custom btn-gold-view animated fadeInUp"]').click();

        cy.wait(9500);

        cy.get('[placeholder="Search"]').eq(1).type('arm');

        cy.get('[id="brand-armani"]').check({force: true});

        cy.get('[class="nav-item nav-item-shop dropdown "]').click();

        cy.get('[class="col-md-10 tickmark-set"]').eq(1).click();

    })

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






