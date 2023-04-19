import { onBrandScrollBar } from "../checkboxPageObjects/brand_objects";

export class SalesPage {
    
  searchForBrand(brand) 
  {
    cy.get('[placeholder="Search"]').eq(1).type(brand);

    cy.wait(1000);
  }

  selectFirstBrandFromSearch() 
  {
    cy.get('[class="department-check-custom"]')
      .find('[id="brandCheckbox"]', "label")
      .then((checkbox) => {
        cy.wrap(checkbox)
          .find('[type="checkbox"]')
          .first()
          .check({ force: true });
      });
  }

  checkBrandNameIsPresentinFirstImage(brand) 
  {
    cy.wait(2000);

    cy.get('[class="brand-name"]')
    .first()
    .should("contain", brand);
  }

  selectSortDropDownArrow() 
  {
    cy.get('[class="nav-item nav-item-shop dropdown "]')
    .click();
  }

  selectAndSortOnTheLowestPrice() 
  {
    cy.get('[class="col-md-10 tickmark-set"]')
    .eq(1)
    .click();
  }

  checkFirstFilteredProductName(name) 
  {
    cy.get('[class="button-custom btn-gold-view-selected animated fadeInUp"]')
      .first()
      .should("contain", name);
  }

  checkSecondFilteredProductName(nameSecond) 
  {
    cy.get('[class="button-custom btn-gold-view-selected  animated fadeInUp"]')
      .eq(1)
      .should("contain", nameSecond);
  }

  checkCPBrandCheckboxIsChecked() 
  {
    onBrandScrollBar.getCPBrandCheckbox()
      .check({ force: true })
      .should("be.checked");
  }

  checkAllBrandsOnSalesPage() 
  {
    cy.get('#brandCheckbox input[type="checkbox"]')
      .as('brandCheckboxes')
      .check({force: true})

    cy.get('@brandCheckboxes')
    .should('be.checked');
      
}


checkAmountOfAllSelectedBrands(countOfBrand) 
{
  cy.get('[class="cat-products-tp"]')
  .first()
  .should('contain' , countOfBrand);
}


}



export const onSalesPage = new SalesPage;