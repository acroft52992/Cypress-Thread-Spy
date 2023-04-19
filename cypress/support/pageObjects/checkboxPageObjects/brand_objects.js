export class BrandCheckBoxObjects {

  getCPBrandCheckbox() 
  {
    return cy.get('[id="brand-cp-company"]');
  }

  getAPCBrandCheckBox() 
  {
    return cy.get('[id="brand-a-p-c"]');
  }

  getAdidasOriginalCheckBox() 
  {
    return cy.get('[id="brand-adidas-originals"]');
  }

  getAlphaIndCheckBox() 
  {
    return cy.get('[id="brand-alpha-industries"]');
  }

  getAMICheckBox() 
  {
    return cy.get('[id="brand-ami-paris"]');
  }

  getArmaniCheckBox() 
  {
    return cy.get('[id="brand-armani"]');
  }

  getBalmainCheckBox() 
  {
    return cy.get('[id="brand-balmain"]');
  }

  


  









}

export const onBrandScrollBar = new BrandCheckBoxObjects();
