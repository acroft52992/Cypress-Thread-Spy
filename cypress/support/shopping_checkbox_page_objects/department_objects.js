export class DepartmentCheckBoxObjects {

    selectBackPackCheckBox() {

        return cy.get('[id="category-checkbox-backpacks"]')
        .check({force: true});
    }

    selectBeltCheckBox() {

        return cy.get('[id="category-checkbox-belts"]')
        .check({force: true});
    }

}

export const departmentCheckBox = new DepartmentCheckBoxObjects;