export class ShopPage {

    searchForBrand(brand) {

        cy.get('[placeholder="Search"]').eq(1).type(brand);

        cy.wait(1000);
    }

    selectFirstBrandFromSearch() {

        cy.get('[class="department-check-custom"]').find('[id="brandCheckbox"]', 'label').then( checkbox => {
            cy.wrap(checkbox).find('[type="checkbox"]')
            .first()
            .check({force: true})
        })
    }

    checkBrandNameIsPresentinFirstImage() {
        
        cy.wait(2000);

        cy.get('[class="brand-name"]').first().should('contain', 'Burberry');
    }

    selectSortDropDownArrow () {

        cy.get('[class="nav-item nav-item-shop dropdown "]').click();
    }

    selectAndSortOnTheLowestPrice () {

        cy.get('[class="col-md-10 tickmark-set"]').eq(1).click();
    }
}

export const onShopPage = new ShopPage;