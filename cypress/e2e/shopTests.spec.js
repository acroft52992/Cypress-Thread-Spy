import { navigateTo } from "../support/navigationPage";
import { onHomePage } from "../support/homePage";
import { onShopPage } from "../support/shopPage";

describe('Shop And Search For Products Tests', () => {

    beforeEach('Should navigate to the network website', () => {

        navigateTo.threadSpyHomePage();
    
    })

    it('Should click Shop Now and search for an item', () => {

       onHomePage.selectShopNowButton();

       onShopPage.searchForBrand('Burb');

       onShopPage.selectBrandFromSearch();

       onShopPage.selectJumperOptionCheckBox();

       onShopPage.clickMediumSizeOption();

       onShopPage.checkBrandNameIsPresentinFirstImage();

    })

    it('Should search for an item and sort product on lowest price', () => {

        onHomePage.selectShopNowButton();

        onShopPage.searchForBrand('Arm');

        onShopPage.selectBrandFromSearch();

        onShopPage.selectSortDropDownArrow();

        onShopPage.selectSortOnTheLowestPrice();
    })

})