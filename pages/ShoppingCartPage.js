const { By, until} = require('selenium-webdriver');
const BasePage = require('./utils/BasePage');
const TestDataGenerator = require('./utils/TestDataGenerator')
const Logger = require("./utils/Logger");

class ShoppingCartPage extends BasePage{

    constructor(driver) {
        super(driver);

        //shopping cart page web elements
        this._shoppingCartPageBreadcrumb = By.xpath("//div[@id='checkout-cart']//ol/li");
        this._shoppingCartPageTitle = By.xpath("//div[@id='content']/h1");
        //shopping cart product table web (list) elements
        this._shoppingCartTableProductImageLinkElements = By.xpath("//table[@class='table table-bordered']//tbody/tr/td[1]/a");
        this._shoppingCartTableProductNameLinkElements = By.xpath("//table[@class='table table-bordered']//tbody/tr/td[2]/a");
        this._shoppingCartTableProductDescriptionElements = By.xpath("//table[@class='table table-bordered']//tbody/tr/td[2]");
        this._shoppingCartTableProductModelElements = By.xpath("//table[@class='table table-bordered']//tbody/tr/td[3]");
        this._shoppingCartTableProductQtyInputFieldElements = By.xpath("//table[@class='table table-bordered']//tbody/tr/td[4]//input");
        this._shoppingCartTableProductQtyUpdateButtonElements = By.xpath("//table[@class='table table-bordered']//tbody/tr/td[4]//button[@class='btn btn-primary']");
        this._shoppingCartTableProductRemoveButtonElements = By.xpath("//table[@class='table table-bordered']//tbody/tr/td[4]//button[@class='btn btn-danger']");
        this._shoppingCartTableProductUnitPriceElements = By.xpath("//table[@class='table table-bordered']//tbody/tr/td[5]");
        this._shoppingCartTableProductTotalPriceElements = By.xpath("//table[@class='table table-bordered']//tbody/tr/td[6]");
        //'what to do next' section elements
        this._whatToDoNextSectionTitle = By.xpath("//div[@class='col-md-8']/h4");
        this._whatToDoNextDescription = By.xpath("//div[@class='col-md-8']/p");
        //dropdown sections elements
        this._useCouponDropdownMenu = By.xpath("//div[@class='card'][1]");
        this._estimateShippingAndTaxesDropdownMenu = By.xpath("//div[@class='card'][2]");
        this._estimateShippingAndTaxesDropdownMenu = By.xpath("//div[@class='card'][2]");
        this._estimateShippingAndTaxesDropdownMenuHeader = By.xpath("//div[@class='card'][2]/h5");
        this._shippingCountryDropdownMenu = By.xpath("//div[@id='collapse-shipping']//select[@id='input-country']");
        this._usCounryOption = By.xpath("//select[@id='input-country']/option[@value='223']");
        this._shippingRegionDropdownMenu = By.xpath("//div[@id='collapse-shipping']//select[@id='input-zone']");
        this._illinoisRegionOption = By.css("select#input-zone > option[value='3635']");
        this._postCodeInputField = By.xpath("//div[@id='collapse-shipping']//input");
        this._getQuotesButton = By.xpath("//div[@id='collapse-shipping']//button");
        this._giftCertificatesDropdownMenu = By.xpath("//div[@class='card'][3]");
        //shopping cart summary section elements
        this._shoppingCartSummarySubtotalPrice = By.xpath("//table[@class='table table-bordered m-0']//tr[1]/td[2]");
        this._shoppingCartSummaryEcoTax = By.xpath("//table[@class='table table-bordered m-0']//tr[2]/td[2]");
        this._shoppingCartSummaryVATPrice = By.xpath("//table[@class='table table-bordered m-0']//tr[3]/td[2]");
        this._shoppingCartSummaryTotalPrice = By.xpath("//table[@class='table table-bordered m-0']//tr[4]/td[2]");
        //button elements
        this._continueShoppingButton = By.xpath("//div[@class='buttons d-flex']/a[1]");
        this._checkoutButton = By.xpath("//div[@class='buttons d-flex']/a[2]");
        //product quantity update success message web element
        this._productQtyUpdateSuccessMessage = By.xpath("//div[@class='alert alert-success alert-dismissible']")
        //product removal success message web element
        this._shoppingCartEmptyMessage = By.xpath("//div[@id='error-not-found']//p");
        //continue button web element (after product removal)
        this._continueOnwardButton = By.xpath("//div[@id='error-not-found']//a[@class='btn btn-primary']");

        const testDataGenerator = new TestDataGenerator(this.driver);
        //guest post code data
        this._guestPostCode = testDataGenerator.getRandomPostalOrderNumber();
    }

    //click 'Estimate Shipping & Taxes' dropdown method
    async clickEstimateShippingTaxesDropdown(){
        const estimateShippingTaxesDropdown = await this.driver.findElement(this._estimateShippingAndTaxesDropdownMenu);
        const actions = this.driver.actions({bridge: true});
        await actions.move({origin: estimateShippingTaxesDropdown}).click().perform();
    }

    //click shipping country dropdown menu method
    async clickShippingCountryDropdownMenu(){
        const countryDropdownMenu = await this.driver.findElement(this._shippingCountryDropdownMenu);
        countryDropdownMenu.click();
    }
    //select 'United States' option
    async selectUnitedStatesCountryOption(){
        const usCountryOption = await this.driver.findElement(this._usCounryOption);
        usCountryOption.click();
    }

    //click shipping region dropdown menu method
    async clickShippingRegionDropdownMenu(){
        const regionDropdownMenu = await this.driver.findElement(this._shippingRegionDropdownMenu);
        await this.driver.executeScript("arguments[0].scrollIntoView(true);", regionDropdownMenu);
        regionDropdownMenu.click();
    }
    //select 'Illinois' region option
    async selectIllinoisRegionOption() {
        try {
            //wait for element's presence
            const illinoisRegionOption = await this.driver.wait(
                until.elementLocated(this._illinoisRegionOption),
                2000,
                "Illinois region option not found within the timeout period"
            );
            await this.driver.executeScript("arguments[0].scrollIntoView(true);", illinoisRegionOption);

            //second wait to assert it's clickable
            await this.driver.wait(
                until.elementIsVisible(illinoisRegionOption),
                2000,
                "Illinois region option not visible within the timeout period"
            );
            await illinoisRegionOption.click();
        } catch (error) {
            console.error("Error selecting Illinois region option:", error.message);
            throw error;
        }
    }

    //input post code method
    async inputPostCodeIntoPostCodeInputField(){
        const postCodeInputField = await this.driver.findElement(this._postCodeInputField);
        const postCode = this._guestPostCode
        Logger.info("Input guest post code: " + postCode);
        await postCodeInputField.sendKeys(postCode);
    }

    //click 'Get quotes' button method
    async clickGetQuotesButton(){
        const getQuotesButton = await this.driver.findElement(this._getQuotesButton);
        getQuotesButton.click();
    }

    //input quantity into quantity input field method
    async inputQuantityIntoQuantityInputField(){
        const quantityInputField = await this.driver.findElement(this._shoppingCartTableProductQtyInputFieldElements);
        const productQuantity = "5"
        Logger.info("Input changed product quantity: " + productQuantity);
        quantityInputField.clear();
        await quantityInputField.sendKeys(productQuantity);
    }

    //click 'Update' button method
    async clickQtyUpdateButton(){
        const updateButton = await this.driver.findElement(this._shoppingCartTableProductQtyUpdateButtonElements);
        updateButton.click();
    }

    //click 'Remove' product button method
    async clickRemoveProductButton(){
        const removeButton = await this.driver.findElement(this._shoppingCartTableProductRemoveButtonElements);
        removeButton.click();
    }

    //click 'Continue' button method (after product removal)
    async clickContinueButton(){
        const continueButton = await this.driver.findElement(this._continueOnwardButton);
        continueButton.click();
    }

    //click 'Checkout' button method
    async clickCheckoutButton(){
        const checkoutButton = await this.driver.findElement(this._checkoutButton);
        checkoutButton.click();
    }

    //shopping cart page title getter
    async getShoppingCartPageTitle(){
        const shoppingCartPageTitle = await this.driver.findElement(this._shoppingCartPageTitle);
        return await shoppingCartPageTitle.getText();
    }
    //what to do next section title getter
    async getWhatToDoNextSectionTitle(){
        const whatToDoNextSectionTitle = await this.driver.findElement(this._whatToDoNextSectionTitle);
        return await whatToDoNextSectionTitle.getText();
    }
    //what to do next section description getter
    async getWhatToDoNextSectionDescription(){
        const whatToDoNextSectionDescription = await this.driver.findElement(this._whatToDoNextDescription);
        return await whatToDoNextSectionDescription.getText();
    }
    //use coupon dropdown header getter
    async getUseCouponDropdownHeader(){
        const useCouponDropdownHeader = await this.driver.findElement(this._useCouponDropdownMenu);
        return await useCouponDropdownHeader.getText();
    }
    //estimate shipping & taxes header getter
    async getEstimateShippingTaxesDropdownHeader(){
        const estimateShippingTaxesDropdownHeader = await this.driver.findElement(this._estimateShippingAndTaxesDropdownMenuHeader);
        return await estimateShippingTaxesDropdownHeader.getText();
    }
    //gift certificate dropdown header getter
    async getGiftCertificateDropdownHeader(){
        const giftCertificateDropdownHeader = await this.driver.findElement(this._giftCertificatesDropdownMenu);
        return await giftCertificateDropdownHeader.getText();
    }

    //product data getters

    //list elements

    //shopping cart product name(s) getter
    async getProductName() {
        const elementsArray = await this.driver.findElements(this._shoppingCartTableProductNameLinkElements);

        return await Promise.all(
            elementsArray.map(async (element) => {
                if (!element) {
                    console.warn('Element is undefined');
                    return '';
                }

                const text = await element.getText();
                return text.trim();
            })
        );
    }
    //shopping cart product description(s) getter
    async getProductDescription() {
        const elementsArray = await this.driver.findElements(this._shoppingCartTableProductDescriptionElements);

        return await Promise.all(
            elementsArray.map(async (element) => {
                if (!element) {
                    console.warn('Element is undefined');
                    return '';
                }

                const text = await element.getText();
                return text.trim();
            })
        );
    }
    //shopping cart product model(s) getter
    async getProductModel() {
        const elementsArray = await this.driver.findElements(this._shoppingCartTableProductModelElements);

        return await Promise.all(
            elementsArray.map(async (element) => {
                if (!element) {
                    console.warn('Element is undefined');
                    return '';
                }

                const text = await element.getText();
                return text.trim();
            })
        );
    }
    //shopping cart product quantity(s) getter
    async getProductQuantity() {
        const elementsArray = await this.driver.findElements(this._shoppingCartTableProductQtyInputFieldElements);

        return await Promise.all(
            elementsArray.map(async (element) => {
                if (!element) {
                    console.warn('Element is undefined');
                    return '';
                }

                const text = await element.getText();
                return text.trim();
            })
        );
    }
    //shopping cart product unit price(s) getter
    async getProductUnitPrice() {
        const elementsArray = await this.driver.findElements(this._shoppingCartTableProductUnitPriceElements);

        return await Promise.all(
            elementsArray.map(async (element) => {
                if (!element) {
                    console.warn('Element is undefined');
                    return '';
                }

                const text = await element.getText();
                return text.trim();
            })
        );
    }
    //shopping cart product total price(s) getter
    async getProductTotalPrice() {
        const elementsArray = await this.driver.findElements(this._shoppingCartTableProductTotalPriceElements);

        return await Promise.all(
            elementsArray.map(async (element) => {
                if (!element) {
                    console.warn('Element is undefined');
                    return '';
                }

                const text = await element.getText();
                return text.trim();
            })
        );
    }

    //singular elements

    //shopping cart summary subtotal price getter
    async getShoppingCartSummarySubtotalPrice(){
        const shoppingCartSummarySubtotalPrice = await this.driver.findElement(this._shoppingCartSummarySubtotalPrice);
        return await shoppingCartSummarySubtotalPrice.getText();
    }
    //shopping cart summary eco tax getter
    async getShoppingCartSummaryEcoTax(){
        const shoppingCartSummaryEcoTax = await this.driver.findElement(this._shoppingCartSummaryEcoTax);
        return await shoppingCartSummaryEcoTax.getText();
    }
    //shopping cart summary VAT price getter
    async getShoppingCartSummaryVATPrice(){
        const shoppingCartSummaryVATPrice = await this.driver.findElement(this._shoppingCartSummaryVATPrice);
        return await shoppingCartSummaryVATPrice.getText();
    }
    //shopping cart summary total price getter
    async getShoppingCartSummaryTotalPrice(){
        const shoppingCartSummaryTotalPrice = await this.driver.findElement(this._shoppingCartSummaryTotalPrice);
        return await shoppingCartSummaryTotalPrice.getText();
    }

    //product quantity update success message getter
    async getProductQtyUpdateSuccessMessage(){
        const updateSuccessMessage = await this.driver.findElement(this._productQtyUpdateSuccessMessage);
        return await updateSuccessMessage.getText();
    }

    //product removal success message getter
    async getProductRemovalSuccessMessage(){
        const removalSuccessMessage = await this.driver.findElement(this._shoppingCartEmptyMessage);
        return await removalSuccessMessage.getText();
    }

    async isElementDisplayed(locator) {
        const element = await this.driver.findElement(locator);
        return await element.isDisplayed();
    }

    //shopping cart page web element assert method
    async isShoppingCartPageWebElementDisplayed(){
        const elementsToCheck = [
            this._shoppingCartPageBreadcrumb,
            this._shoppingCartPageTitle,
            this._whatToDoNextSectionTitle,
            this._whatToDoNextDescription,
            this._useCouponDropdownMenu,
            this._estimateShippingAndTaxesDropdownMenu, //for some products it replaces 'Gift Certificates' dropdown locator
            this._shoppingCartSummarySubtotalPrice,
            this._shoppingCartSummaryEcoTax,
            this._shoppingCartSummaryVATPrice,
            this._shoppingCartSummaryTotalPrice,
            this._continueShoppingButton,
            this._checkoutButton
        ];

        for (let element of elementsToCheck) {
            const isDisplayed = await this.isElementDisplayed(element);
            if (!isDisplayed) {
                throw new Error(`Element ${element} is not displayed.`);
            }
        }
    }

    //list web elements assert function
    async areElementsDisplayed(listLocator) {
        try {
            const elements = await this.driver.findElements(listLocator);

            if (elements.length === 0) {
                Logger.info(`No elements found for locator: ${listLocator}`);
                return false;
            }
            //assert all elements are displayed
            const visibilityResults = await Promise.all(
                elements.map(async (element) => {
                    try {
                        return await element.isDisplayed();
                    } catch (error) {
                        return false;
                    }
                })
            );

            //return true only if all elements are visible
            const allVisible = visibilityResults.every(result => result === true);
            // Logger.info(`Found ${elements.length} elements, all visible: ${allVisible}`);
            return allVisible;

        } catch (error) {
            Logger.error(`Error checking elements visibility: ${error.message}`);
            return false;
        }
    }

}

module.exports = {ShoppingCartPage}