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
            cy.wrap(input).find('[class="mega-drop-down"]').should('contain', 'Latest');
        })
    }

    selectShopNowButton() {

        cy.get('[class="button-custom btn-gold-view animated fadeInUp"]').click();

        cy.wait(10000);

    }



}

export const onHomePage = new HomePage;