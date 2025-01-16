const { By, until} = require('selenium-webdriver');
const BasePage = require('./utils/BasePage');
const Logger = require("./utils/Logger");

class ConfirmCheckoutPage extends BasePage{

    constructor(driver) {
        super(driver);

        //confirm checkout page web elements
        this._confirmCheckoutPageBreadcrumb = By.xpath("//div[@id='maza-checkout-confirm']//ol/li");
        this._confirmCheckoutPageTitle = By.xpath("//div[@id='maza-checkout-confirm']//h1");
        //product table list web elements
        this._confirmCheckoutTableProductNameElements = By.xpath("//table[@class='table table-bordered table-hover mb-0']//tbody/tr/td[1]");
        this._confirmCheckoutTableProductModelElements = By.xpath("//table[@class='table table-bordered table-hover mb-0']//tbody/tr/td[2]");
        this._confirmCheckoutTableProductQtyElements = By.xpath("//table[@class='table table-bordered table-hover mb-0']//tbody/tr/td[3]");
        this._confirmCheckoutTableProductUnitPriceElements = By.xpath("//table[@class='table table-bordered table-hover mb-0']//tbody/tr/td[4]");
        this._confirmCheckoutTableProductTotalPriceElements = By.xpath("//table[@class='table table-bordered table-hover mb-0']//tbody/tr/td[5]");
        //order summary web elements
        this._confirmCheckoutSummaryProductSubtotalPrice = By.xpath("//table[@class='table table-bordered table-hover mb-0']//tfoot/tr[1]/td[2]");
        this._confirmCheckoutSummaryProductFlatShippingPrice = By.xpath("//table[@class='table table-bordered table-hover mb-0']//tfoot/tr[2]/td[2]");
        this._confirmCheckoutSummaryProductTotalPrice = By.xpath("//table[@class='table table-bordered table-hover mb-0']//tfoot/tr[3]/td[2]");
        //payment address section
        this._confirmCheckoutPaymentAddressSectionTitle = By.xpath("//div[@id='content']//div[@class='col-sm-6'][1]/h4");
        this._confirmCheckoutPaymentAddressData = By.xpath("//div[@id='content']//div[@class='col-sm-6'][1]//div[@class='card-body']");
        //shipping address section
        this._confirmCheckoutShippingAddressSectionTitle = By.xpath("//div[@id='content']//div[@class='col-sm-6'][2]/h4");
        this._confirmCheckoutShippingAddressData = By.xpath("//div[@id='content']//div[@class='col-sm-6'][2]//div[@class='card-body']");
        //shipping method section
        this._confirmCheckoutShippingMethodSectionTitle = By.xpath("//div[@id='content']/h4");
        this._confirmCheckoutShippingMethodData = By.xpath("//div[@id='content']/div[@class='card mb-4']/div[@class='card-body']");
        //button web elements
        this._confirmCheckoutEditButton = By.xpath("//div[@class='buttons d-flex justify-content-between']/a");
        this._confirmCheckoutContinueButton = By.xpath("//div[@class='buttons d-flex justify-content-between']/button");
        //order placement confirmation web elements
        this._orderConfirmationSuccessMessageTitle = By.xpath("//div[@id='common-success']//h1");
        this._orderConfirmationSuccessMessage = By.xpath("//div[@id='common-success']//p[2]");
        this._continueAfterConfirmationButton = By.xpath("//div[@id='common-success']//a[@class='btn btn-primary']");
    }

    //confirm checkout page title getter
    async getConfirmCheckoutPageTitle(){
        const confirmCheckoutPageTitle = await this.driver.findElement(this._confirmCheckoutPageTitle);
        return await confirmCheckoutPageTitle.getText();
    }
    //confirm checkout payment address section title getter
    async getPaymentAddressSectionTitle(){
        const paymentAddressSectionTitle = await this.driver.findElement(this._confirmCheckoutPaymentAddressSectionTitle);
        return await paymentAddressSectionTitle.getText();
    }
    //confirm checkout shipping address section title getter
    async getShippingAddressSectionTitle(){
        const shippingAddressSectionTitle = await this.driver.findElement(this._confirmCheckoutShippingAddressSectionTitle);
        return await shippingAddressSectionTitle.getText();
    }
    //confirm checkout shipping method section title getter
    async getShippingMethodSectionTitle(){
        const shippingMethodSectionTitle = await this.driver.findElement(this._confirmCheckoutShippingMethodSectionTitle);
        return await shippingMethodSectionTitle.getText();
    }

    //ordered product table data getters
    //product name
    async getOrderedProductName() {
        const elementsArray = await this.driver.findElements(this._confirmCheckoutTableProductNameElements);

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
    //product model
    async getOrderedProductModel() {
        const elementsArray = await this.driver.findElements(this._confirmCheckoutTableProductModelElements);

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
    //product quantity
    async getOrderedProductQuantity() {
        const elementsArray = await this.driver.findElements(this._confirmCheckoutTableProductQtyElements);

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
    //product unit price
    async getOrderedProductUnitPrice() {
        const elementsArray = await this.driver.findElements(this._confirmCheckoutTableProductUnitPriceElements);

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
    //
    async getOrderedProductTotalPrice() {
        const elementsArray = await this.driver.findElements(this._confirmCheckoutTableProductTotalPriceElements);

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
    //confirm order summary section subtotal price getter
    async getOrderSummarySubtotalPrice(){
        const orderSummarySubtotalPrice = await this.driver.findElement(this._confirmCheckoutSummaryProductSubtotalPrice);
        return await orderSummarySubtotalPrice.getText();
    }
    //confirm order summary section flat shipping price getter
    async getOrderSummaryFlatShippingPrice(){
        const orderSummaryFlatShippingPrice = await this.driver.findElement(this._confirmCheckoutSummaryProductFlatShippingPrice);
        return await orderSummaryFlatShippingPrice.getText();
    }
    //confirm order summary section total price getter
    async getOrderSummaryTotalPrice(){
        const orderSummaryTotalPrice = await this.driver.findElement(this._confirmCheckoutSummaryProductTotalPrice);
        return await orderSummaryTotalPrice.getText();
    }
    //confirm order summary payment address data getter
    async getPaymentAddressData(){
        const paymentAddressData = await this.driver.findElement(this._confirmCheckoutPaymentAddressData);
        return await paymentAddressData.getText();
    }
    //confirm order summary shipping address data getter
    async getShippingAddressData(){
        const shippingAddressData = await this.driver.findElement(this._confirmCheckoutShippingAddressData);
        return await shippingAddressData.getText();
    }

    //click 'Continue' button method
    async clickConfirmCheckoutButton(){
        const continueButton = await this.driver.findElement(this._confirmCheckoutContinueButton);
        continueButton.click();
    }

    //order confirmation success message title getter
    async getOrderConfirmationSuccessMessageTitle(){
        const confirmationMessageSuccessTitle = await this.driver.findElement(this._orderConfirmationSuccessMessageTitle);
        return await confirmationMessageSuccessTitle.getText();
    }
    //order confirmation success message getter
    async getOrderConfirmationSuccessMessage(){
        const confirmationMessageSuccess = await this.driver.findElement(this._orderConfirmationSuccessMessage);
        return await confirmationMessageSuccess.getText();
    }
    //click 'Continue' button method (to return to homepage)
    async clickContinueButton(){
        const continueButton = await this.driver.findElement(this._continueAfterConfirmationButton);
        continueButton.click();
    }

    async isElementDisplayed(locator) {
        const element = await this.driver.findElement(locator);
        return await element.isDisplayed();
    }

    //confirm check out page web element assert method (commented out elements are present in DOM and clickable, Selenium fails to tag them as displayed)
    async isConfirmCheckoutPageWebElementDisplayed(){
        const elementsToCheck = [
            this._confirmCheckoutPageBreadcrumb,
            this._confirmCheckoutPageTitle,
            this._confirmCheckoutSummaryProductSubtotalPrice,
            this._confirmCheckoutSummaryProductFlatShippingPrice,
            this._confirmCheckoutSummaryProductTotalPrice,
            this._confirmCheckoutPaymentAddressSectionTitle,
            this._confirmCheckoutPaymentAddressData,
            this._confirmCheckoutShippingAddressSectionTitle,
            this._confirmCheckoutShippingAddressData,
            this._confirmCheckoutShippingMethodSectionTitle,
            this._confirmCheckoutShippingMethodData,
            this._confirmCheckoutEditButton,
            this._confirmCheckoutContinueButton
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

module.exports = {ConfirmCheckoutPage}