import { navigateTo } from "../support/pageObjects/navigationPage/navigationPage";
import { onHomePage } from "../support/pageObjects/homePages/homePage";
import { onSalesPage, onShopPage } from "../support/pageObjects/salePages/salePage";
import { departmentCheckBox } from "../support/pageObjects/checkboxPageObjects/department_objects";
import { SizeOfProduct, sizeOfProduct } from "../support/pageObjects/sizePageObjects/size_product_objects";

describe('Shop And Search For Products Tests', () => {

    beforeEach('Should navigate to the network website', () => {

        navigateTo.threadSpyHomePage();
    
    })

    it('Should click Shop Now and search for an item', () => {

       onHomePage.selectShopNowButton();

       onSalesPage.searchForBrand('Burb');

       onSalesPage.selectFirstBrandFromSearch();

       departmentCheckBox.selectBackPackCheckBox();

       sizeOfProduct.selectMediumSize();

       onSalesPage.checkBrandNameIsPresentinFirstImage('Burberry');

    })

    it('Should search for an item and sort product on lowest price', () => {

        onHomePage.selectShopNowButton();

        onSalesPage.searchForBrand('Arm');

        onSalesPage.selectFirstBrandFromSearch();

        onSalesPage.selectSortDropDownArrow();

        onSalesPage.selectAndSortOnTheLowestPrice();
    })

    it('Should click CP brand on home page and check brand is checked and present on the sale page', () => {

        onHomePage.clickCPCompanyButton();

        onSalesPage.checkFirstFilteredProductName('CPcompany');

        onSalesPage.checkCPBrandCheckboxIsChecked();
        
        onSalesPage.checkBrandNameIsPresentinFirstImage('CP Company');

        departmentCheckBox.selectHatCheckboxAndAssertItsChecked();

        onSalesPage.checkSecondFilteredProductName('hats');
    })

    it('Should check all Brands and Departments and ensure they are all checked', () => 
    {

        onHomePage.selectShopNowButton();

        onSalesPage.checkAllBrandsOnSalesPage();

        onSalesPage.checkAmountOfAllSelectedBrands('75');
        
    })


})