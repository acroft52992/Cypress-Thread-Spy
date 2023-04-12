import { navigateTo } from "../support/navigationPage";
import { onHomePage } from "../support/homePage";

describe('Home Page Tests', () => {

    beforeEach('Should navigate to the network website', () => {

        navigateTo.threadSpyHomePage();
    })


    it('Should Navigate to Website and check the dropdowns are present', () => {

        onHomePage.confirmHomePageTitle();

        onHomePage.confirmDropDownHeadingsArePresent();

    })

})
