export class DepartmentCheckBoxObjects {

    selectBackPackCheckBox() {

        return cy.get('[id="category-checkbox-backpacks"]')
        .check({force: true});
    }

    selectBeltCheckBox() {

        return cy.get('[id="category-checkbox-belts"]')
        .check({force: true});
    }

    selectHatCheckboxAndAssertItsChecked() {
        cy.step('Select Had CheckBox and Assert it\s Checked');
        return cy.get('[id="category-checkbox-hats"]')
        .check({force: true})
        .should('be.checked');
    }

}

export const departmentCheckBox = new DepartmentCheckBoxObjects;