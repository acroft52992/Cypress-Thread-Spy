import { navigateTo } from "../support/main_page_objects/navigationPage";
import { onHomePage } from "../support/main_page_objects/homePage";

describe('Home Page Tests', () => {

    beforeEach('Should navigate to the network website', () => {

        navigateTo.threadSpyHomePage();
    })


    it('Should Navigate to Website and check the dropdowns are present', () => {

        onHomePage.confirmHomePageTitle();

        onHomePage.confirmDropDownHeadingsArePresent();

    })

})
