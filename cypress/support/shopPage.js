export class ShopPage {

    searchForBrand(brand) {

        cy.get('[placeholder="Search"]').eq(1).type(brand);

        cy.wait(9500);
    }

    selectBrandFromSearch() {

        cy.get('[class="department-check-custom"]').find('[id="brandCheckbox"]', 'label').then( checkbox => {
            cy.wrap(checkbox).find('[type="checkbox"]')
            .first()
            .check({force: true})
        })
    }

    selectJumperOptionCheckBox() {

        cy.get('[class="brand-check-custom"]').first().then( checkbox => {
            cy.wrap(checkbox).find('[type="checkbox"]')
            .eq(23)
            .check({force: true})
        })
    }

    clickMediumSizeOption() {

        cy.get('[class="row left-size-custom-rw"]').first().then(checkboxSize => {
            cy.wrap(checkboxSize)
            .find('[class="col-lg-4 col-md-6 col-sm-6 col-6 left-size-custom"]')
            .eq(3)
            .click();
        })

        cy.wait(14000)
    }

    checkBrandNameIsPresentinFirstImage() {

        cy.get('[class="brand-name"]').first().should('contain', 'Burberry');
    }

    selectSort

    selectSortOnTheLowestPrice () {


    }



}

export const onShopPage = new ShopPage;