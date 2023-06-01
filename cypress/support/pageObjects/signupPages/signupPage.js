const { faker } = require( '@faker-js/faker' );

// faker.seed(123)

const user = {

    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    email: faker.internet.email(),
    randomPassword: faker.internet.password(),
}


export class SignUpPage
{

signUpWithDetails() {

        cy.get( '[name="name"]' ).first().type(user.firstName);
        cy.get( '[name="last_name"]' ).first().type(user.lastName);
        cy.get( '[name="email"]' ).first().type(user.email);
        cy.get( '[id="password"]' ).type(user.randomPassword);
        cy.get( '[id="confirm-password"]' ).type( user.randomPassword);
        cy.contains( "Create Account" ).click();
    }


    checkPasswordMissingException ()
    {
        cy.get( '[id="jq-toast-item-0"]' )
            .eq( 0 )
            .should( "contain", "The password field is required." );
    }

    checkConfirmPasswordMissingException ()
    {
        cy.get( '[id="jq-toast-item-0"]' )
            .eq( 1 )
            .should( "contain", "The confirm password field is required." );
    }

    clickSignUp ()
    {
        cy.contains( "Sign up" ).click();
    }

    clickLogin ()
    {
        cy.step( "Click Login" );
        cy.contains( "Log in" ).click();
    }

    enterSignInEmailAddress (emailAddress)
    {
        cy.step( "Enter email address" );
        cy.get( '[name="email"]' ).eq( 1 ).type(emailAddress);
    }

    enterSignUpPassword (password)
    {
        cy.step( "Enter password details" );
        cy.get( '[id="exampleInputPassword1"]' ).type(password);
    }

    selectRememberMeCheckBox ()
    {
        cy.step( "Select Remember me checkbox" );
        cy.get( '[type="checkbox"]' ).eq( 1 ).check({force: true });
    }

    clickSubmitSignInDetails ()
    {
        cy.step( "Submit Sign In Details" );
        cy.contains( "Submit" ).click();
    }

    confirmErrorIsPresentWithInvalidLoginDetails ()
    {
        cy.get( '[class="jq-toast-heading"]' ).should( "contain", "Error" );
    }

    selectFavouriteBrand ()
    {
        cy.get( '[placeholder="Choose your Fav Brands"]' ).click();

        cy.get(
            '[class="select2-results__option select2-results__option--selectable select2-results__option--highlighted"]'
        ).click();
    }

    checkFavouriteBrandIsSelected (brand)
    {
        cy.get( '[class="select2-selection__choice__display"]' ).should(
            "contain", brand );
    }
}


export const onSignUpWindow = new SignUpPage;