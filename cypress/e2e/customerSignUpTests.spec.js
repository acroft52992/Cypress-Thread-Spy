import { navigateTo } from "../support/main_page_objects/navigationPage";
import { onHomePage } from "../support/main_page_objects/homePage";
import { onSignUpWindow } from "../support/main_page_objects/signupPage";

describe('Sign Up Tests', () => {

    beforeEach('Should navigate to the network website', () => {

        navigateTo.threadSpyHomePage();

        onHomePage.clickSignUp();
    
    })

    it('Should not be able to sign up a member, if password is missing', () => {

        onSignUpWindow.enterFirstName('Test');

        onSignUpWindow.enterSecondName('Tester');

        onSignUpWindow.enterEmailAddress('test123@test.com');

        onSignUpWindow.selectCreateAccount();

        onSignUpWindow.checkPasswordMissingException();

        onSignUpWindow.checkConfirmPasswordMissingException();

    })

    it('Should attempt to sign in without being a member', () => {

        onSignUpWindow.clickSignIn();

        onSignUpWindow.enterSignInEmailAddress('test123@test.com');

        onSignUpWindow.enterSignUpPassword('Testing_1234');

        onSignUpWindow.selectRememberMeCheckBox();

        onSignUpWindow.clickSubmitSignInDetails();

        onSignUpWindow.confirmErrorIsPresentWithInvalidLoginDetails();

   })
})