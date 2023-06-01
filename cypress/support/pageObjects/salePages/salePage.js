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
    cy.step('Check Brand Name is Present in First Image')
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
    cy.step('Check First Filtered Product Name');
    cy.get('[class="pb-1 d-inline-flex flex-wrap justify-content-start align-items-center mt-2"]')
       .first()
      .should("contain", name);
  }

  checkSecondFilteredProductName(nameSecond) 
  {
    cy.step('Check second filtered product name')
    cy.get('[class="button-custom btn-gold-view-selected  animated fadeInUp"]')
      .eq(2)
      .should("contain", nameSecond);
  }

  checkCPBrandCheckboxIsChecked() 
  {
    cy.step('Check CP Brand CheckBox is checked')
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