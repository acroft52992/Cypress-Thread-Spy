export class HomePage{

    confirmHomePageTitle() {

        cy.get('[class="logo-brand"]').should('contain', 'THREADSPY');
    }

    confirmDropDownHeadingsArePresent() {

        cy.get('[id="header-section"]').then( input => {
            cy.wrap(input).find('[class="mega-drop-down"]').should('contain', 'Brands');
            cy.wrap(input).find('[class="mega-drop-down"]').should('contain', 'Clothing');
            cy.wrap(input).find('[class="mega-drop-down"]').should('contain', 'Footwear');
            cy.wrap(input).find('[class="mega-drop-down"]').should('contain', 'Accessories');
        })
    }

    selectShopNowButton() {

        cy.get('[class="button-custom btn-gold-view animated fadeInUp"]').click();

        cy.wait(4000);

    }

    clickSignUp() {
        
        cy.contains('Sign up').click();

        cy.wait(2000);

    }

    checkHeadingOneOnHomePage() {

        cy.wait(1000);

        cy.contains('Luxury Shopping Re-Invented');
    }

    clickRightArrowOnHomePage() {

        cy.get('[class="slick-nav next-arrow slick-arrow"]').click();
    }

    checkHeadingTwoOnHomePage() {

        cy.wait(1000);

        cy.contains('Premium Brands Exceptional Prices');
    }

    clickCPCompanyButton() {

        cy.step('Click CP Company');
        cy.get('[href="sale/cp-company"]').first().click();

    }

    clickNorthFaceButton() {

        cy.get('[href="sale/the-north-face"]').eq(1).click();
    }

    clickDropDownMenuButton() {
        
        cy.get('[id="dropdownMenuButton1"]').first().click();
    }

}

export const onHomePage = new HomePage;