export class SizeOfProduct {

    selectMediumSize() {

        return cy.get('[id="size-M"]').click();
    }

    
}

export const sizeOfProduct = new SizeOfProduct;