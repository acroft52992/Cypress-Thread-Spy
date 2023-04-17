import { navigateTo } from "../support/main_page_objects/navigationPage";
import { onHomePage } from "../support/main_page_objects/homePage";
import { onShopPage } from "../support/main_page_objects/shopPage";
import { departmentCheckBox } from "../support/shopping_checkbox_page_objects/department_objects";
import { SizeOfProduct, sizeOfProduct } from "../support/shopping_checkbox_page_objects/size_product_objects";

describe('Shop And Search For Products Tests', () => {

    beforeEach('Should navigate to the network website', () => {

        navigateTo.threadSpyHomePage();
    
    })

    it('Should click Shop Now and search for an item', () => {

       onHomePage.selectShopNowButton();

       onShopPage.searchForBrand('Burb');

       onShopPage.selectFirstBrandFromSearch();

       departmentCheckBox.selectBackPackCheckBox();

       sizeOfProduct.selectMediumSize();

       onShopPage.checkBrandNameIsPresentinFirstImage();

    })

    it('Should search for an item and sort product on lowest price', () => {

        onHomePage.selectShopNowButton();

        onShopPage.searchForBrand('Arm');

        onShopPage.selectFirstBrandFromSearch();

        onShopPage.selectSortDropDownArrow();

        onShopPage.selectAndSortOnTheLowestPrice();
    })

})