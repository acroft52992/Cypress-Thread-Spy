import {onSignUpWindow} from "../support/pageObjects/signupPages/signupPage";            
import { navigateTo } from "../support/pageObjects/navigationPage/navigationPage";
import { onHomePage } from "../support/pageObjects/homePages/homePage";
import { onMemberDropDown } from "../support/pageObjects/memberDropDownPage/memberDropDownPage";




describe('Sign Up Tests', () => {

    beforeEach('Should navigate to the network website', () => {

        navigateTo.threadSpyHomePage();
    
    })


   it.only('Should sign up a user to the ThreadSpy', () => {

        onHomePage.clickSignUp();

        onSignUpWindow.signUpWithDetails();
})


     it('Should login with user details', () => {

        onSignUpWindow.clickLogin();

        onSignUpWindow.enterSignInEmailAddress('Aurore.Wisoky@gmail.com');

        onSignUpWindow.enterSignUpPassword('294DWNnANpRA8C6');

        onSignUpWindow.selectRememberMeCheckBox();

        onSignUpWindow.clickSubmitSignInDetails();

        onMemberDropDown.clickDropDownMenuButton();

        onMemberDropDown.checkDropDownOptionsArePresent();

    })

    it('Should not be able to sign up a member, if password is missing', () => {

        onSignUpWindow.enterFirstName();

        onSignUpWindow.enterSecondName('Tester');

        onSignUpWindow.enterEmailAddress('test123@test.com');

        onSignUpWindow.selectCreateAccount();

        onSignUpWindow.checkPasswordMissingException();

        onSignUpWindow.checkConfirmPasswordMissingException();

    })

    it('Should attempt to sign in without being a member', () => {

        onSignUpWindow.clickLogin();

        onSignUpWindow.enterSignInEmailAddress('test123@test.com');

        onSignUpWindow.enterSignUpPassword('Testing_1234');

        onSignUpWindow.selectRememberMeCheckBox();

        onSignUpWindow.clickSubmitSignInDetails();

        onSignUpWindow.confirmErrorIsPresentWithInvalidLoginDetails();

   })

 

})
