import { navigateTo } from "../support/pageObjects/navigationPage/navigationPage";
import { onHomePage } from "../support/pageObjects/homePages/homePage";

describe('Home Page Tests', () => {

    beforeEach('Should navigate to the network website', () => {

        navigateTo.threadSpyHomePage();
    })


    it('Should Navigate to Website and check the dropdowns are present', () => {

        onHomePage.confirmHomePageTitle();

        onHomePage.confirmDropDownHeadingsArePresent();

    })

    it('Should check headings on the Home page', () => {

        onHomePage.checkHeadingOneOnHomePage();

        onHomePage.clickRightArrowOnHomePage();

        onHomePage.checkHeadingTwoOnHomePage();
    })
})
