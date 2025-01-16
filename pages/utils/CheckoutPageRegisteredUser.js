const { By, until} = require('selenium-webdriver');
const BasePage = require('./BasePage');
const Logger = require("./Logger");
const TestDataGenerator = require('./TestDataGenerator');
const { RegisterPage } = require('../RegisterPage');

class CheckoutPageRegisteredUser extends BasePage{

    constructor(driver){
        super(driver);

        //personal details section
        this._checkoutRegUserPhoneSectionTitle = By.xpath("//div[@id='account-edit']/h4");
        this._checkoutRegUserPhoneInputField = By.xpath("//div[@id='account-edit']//input[@id='input-telephone']");
        this._checkoutRegUserPhoneInputHint = By.xpath("//div[@id='account-edit']//small");
        this._checkoutRegUserBillingAddressSectionTitle = By.xpath("//div[@id='payment-address']/h4");
        this._checkoutRegUserFirstNameInputField = By.xpath("//div[@id='payment-address']//input[@id='input-payment-firstname']");
        this._checkoutRegUserLastNameInputField = By.xpath("//div[@id='payment-address']//input[@id='input-payment-lastname']");
        this._checkoutRegUserCompanyInputField = By.xpath("//div[@id='payment-address']//input[@id='input-payment-company']");
        this._checkoutRegUserAddress1InputField = By.xpath("//div[@id='payment-address']//input[@id='input-payment-address-1']");
        this._checkoutRegUserAddress2InputField = By.xpath("//div[@id='payment-address']//input[@id='input-payment-address-2']");
        this._checkoutRegUserCityInputField = By.xpath("//div[@id='payment-address']//input[@id='input-payment-city']");
        this._checkoutRegUserPostCodeInputField = By.xpath("//div[@id='payment-address']//input[@id='input-payment-postcode']");
        this._checkoutRegUserCountryDropdownMenu = By.xpath("//div[@id='payment-address']//select[@id='input-payment-country']");
        this._checkoutRegUserUsCountryOption = By.xpath("//select[@id='input-payment-country']/option[@value='223']");
        this._checkoutRegUserRegionDropdownMenu = By.xpath("//div[@id='payment-address']//select[@id='input-payment-zone']");
        this._checkoutRegUserIllinoisRegionOption = By.xpath("//select[@id='input-payment-zone']/option[@value='3635']");
        this._checkoutRegUserBillingShippingAddressSameCheckbox = By.xpath("//div[@id='payment-address']//input[@id='input-shipping-address-same']");
        this._checkoutRegUserBillingShippingAddressSameSubtext = By.xpath("//div[@id='payment-address']//label[@class='custom-control-label']");
        //payment method section
        this._paymentMethodRegUserSectionTitle = By.xpath("//div[@id='payment-method']/h4");
        //invalid input error web element
        this._invalidRegUserInputErrorMessage = By.xpath("//div[@class='invalid-feedback d-block']");

        const testDataGenerator = new TestDataGenerator();
        //valid user data
        this._regUserAddress = testDataGenerator.generateRandomAddress(9);
        this._regUserCity = testDataGenerator.generateUSPhoneNumber();
        this._regUserPostCode = testDataGenerator.getRandomPostalOrderNumber();
    }

    //valid registered user check out data input methods

    async inputRegUserFirstNameIntoFirstNameInputField(){
        const firstNameInputField = await this.driver.findElement(this._checkoutRegUserFirstNameInputField);
        const registerPage = new RegisterPage(this.driver);
        const regUserFirstName = registerPage.firstName;
        Logger.info("Valid registered user checkout first name: ", regUserFirstName);
        await firstNameInputField.sendKeys(regUserFirstName);
    }
    async inputRegUserLastNameIntoLastNameInputField(){
        const lastNameInputField = await this.driver.findElement(this._checkoutRegUserLastNameInputField);
        const registerPage = new RegisterPage(this.driver);
        const regUserLastName = registerPage.lastName;
        Logger.info("Valid registered user checkout last name: ", regUserLastName);
        await lastNameInputField.sendKeys(regUserLastName);
    }
    async inputRegUserAddressIntoAddressInputField(){
        const address1InputField = await this.driver.findElement(this._checkoutRegUserAddress1InputField);
        const regUserAddress = this._regUserAddress;
        Logger.info("Valid registered user checkout address: ", regUserAddress);
        await address1InputField.sendKeys(regUserAddress);
    }
    async inputRegUserCityIntoCityInputField(){
        const cityInputField = await this.driver.findElement(this._checkoutRegUserCityInputField);
        const actions = this.driver.actions({bridge: true});
        await actions.move({origin: cityInputField}).perform();
        const regUserCity = this._regUserCity;
        Logger.info("Valid registered user checkout city: ", regUserCity);
        await cityInputField.sendKeys(regUserCity);
    }
    async inputRegUserPostCodeIntoPostCodeInputField(){
        const address1InputField = await this.driver.findElement(this._checkoutRegUserPostCodeInputField);
        const regUserPostCode = this._regUserPostCode;
        Logger.info("Valid registered user checkout post code: ", regUserPostCode);
        await address1InputField.sendKeys(regUserPostCode);
    }

    async isElementDisplayed(locator) {
        const element = await this.driver.findElement(locator);
        return await element.isDisplayed();
    }

    //check out page (registered user side) web element assert method (commented out elements are present in DOM and clickable, Selenium fails to tag them as displayed)
    async isCheckoutPageRegUserWebElementDisplayed(){
        const elementsToCheck = [
            this._checkoutRegUserPhoneSectionTitle,
            this._checkoutRegUserPhoneInputField,
            this._checkoutRegUserPhoneInputHint,
            this._checkoutRegUserBillingAddressSectionTitle,
            this._checkoutRegUserFirstNameInputField,
            this._checkoutRegUserLastNameInputField,
            this._checkoutRegUserCompanyInputField,
            this._checkoutRegUserAddress1InputField,
            this._checkoutRegUserAddress2InputField,
            this._checkoutRegUserCityInputField,
            this._checkoutRegUserPostCodeInputField,
            this._checkoutRegUserCountryDropdownMenu,
            this._checkoutRegUserUsCountryOption,
            this._checkoutRegUserRegionDropdownMenu,
            //this._checkoutRegUserBillingShippingAddressSameSubtext,
            this._paymentMethodRegUserSectionTitle
        ];

        for (let element of elementsToCheck) {
            const isDisplayed = await this.isElementDisplayed(element);
            if (!isDisplayed) {
                throw new Error(`Element ${element} is not displayed.`);
            }
        }
    }

}

module.exports = {CheckoutPageRegisteredUser}