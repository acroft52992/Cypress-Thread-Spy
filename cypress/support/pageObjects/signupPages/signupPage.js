export class SignUpPage {

    enterFirstName(firstName) {

        cy.get('[name="name"]').first().type(firstName);
    }

    enterSecondName(secondName) {

        cy.get('[name="last_name"]').first().type(secondName);
    }

    enterEmailAddress(emailAddress) {

        cy.get('[name="email"]').first().type(emailAddress);
    }

    selectCreateAccount() {

        cy.contains('Create Account').click();
    }

    checkPasswordMissingException() {

        cy.get('[id="jq-toast-item-0"]').eq(0).should('contain', 'The password field is required.');
    }

    checkConfirmPasswordMissingException() {

        cy.get('[id="jq-toast-item-0"]').eq(1).should('contain', 'The confirm password field is required.');
    }

    clickSignIn() {

        cy.get('[id="pills-login-tab"]').first().click();
    }

    enterSignInEmailAddress(emailAddress) {

        cy.get('[name="email"]').eq(1).type(emailAddress);
    }

    enterSignUpPassword(password) {

        cy.get('[id="exampleInputPassword1"]').type(password);
    }

    selectRememberMeCheckBox() {

        cy.get('[type="checkbox"]').eq(1).check({force: true});
    }

    clickSubmitSignInDetails() {

        cy.contains('Submit').click();
    }

    confirmErrorIsPresentWithInvalidLoginDetails() {

        cy.get('[class="jq-toast-heading"]').should('contain', 'Error');
    }
}


export const onSignUpWindow = new SignUpPage;