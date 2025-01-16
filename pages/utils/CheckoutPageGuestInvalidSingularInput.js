const { By, until} = require('selenium-webdriver');
const BasePage = require('./BasePage');
const Logger = require("./Logger");

class CheckoutPageGuestInvalidSingularInput extends BasePage {

    constructor(driver) {
        super(driver);

        //personal details section
        this._checkoutFirstNameInputField = By.xpath("//div[@id='account-detail']//input[@id='input-payment-firstname']");
        this._checkoutLastNameInputField = By.xpath("//div[@id='account-detail']//input[@id='input-payment-lastname']");
        this._checkoutEmailInputField = By.xpath("//div[@id='account-detail']//input[@id='input-payment-email']");
        this._checkoutPhoneInputField = By.xpath("//div[@id='account-detail']//input[@id='input-payment-telephone']");
        this._checkoutPhoneInputFormatHint = By.xpath("//div[@id='account-detail']//small");
        //billing address section
        this._checkoutCompanyInputField = By.xpath("//div[@id='payment-address']//input[@id='input-payment-company']");
        this._checkoutAddress1InputField = By.xpath("//div[@id='payment-address']//input[@id='input-payment-address-1']");
        this._checkoutAddress2InputField = By.xpath("//div[@id='payment-address']//input[@id='input-payment-address-2']");
        this._checkoutCityInputField = By.xpath("//div[@id='payment-address']//input[@id='input-payment-city']");
        this._checkoutCountryDropdownMenu = By.xpath("//div[@id='payment-address']//select[@id='input-payment-country']");
        this._checkoutNoCountryOption = By.xpath("//select[@id='input-payment-country']/option[1]");
        //invalid input error web element
        this._invalidInputErrorMessage = By.xpath("//div[@class='invalid-feedback d-block']");
    }

    //invalid guest check out data input methods - invalid singular input (by format (with email existing email too))

    async inputInvalidGuestFirstNameIntoFirstNameInputField() {
        const firstNameInputField = await this.driver.findElement(this._checkoutFirstNameInputField);
        const invalidGuestFirstName = "!@!$#%^$%^&$%^$#%";
        Logger.info("Invalid guest first name: ", invalidGuestFirstName);
        await firstNameInputField.sendKeys(invalidGuestFirstName);
    }

    async inputInvalidGuestLastNameIntoLastNameInputField() {
        const lastNameInputField = await this.driver.findElement(this._checkoutLastNameInputField);
        const invalidGuestLastName = "!!@@#$%$#^%&%^&%$#";
        Logger.info("Invalid guest last name: ", invalidGuestLastName);
        await lastNameInputField.sendKeys(invalidGuestLastName);
    }

    async inputInvalidGuestEmailIntoEmailInputField() {
        const emailInputField = await this.driver.findElement(this._checkoutEmailInputField);
        const tooShortGuestEmail = "crooker33fakemail.com";
        Logger.info("Invalid guest email address: ", tooShortGuestEmail);
        await emailInputField.sendKeys(tooShortGuestEmail);
    }

    async inputExistingGuestEmailIntoEmailInputField() {
        const emailInputField = await this.driver.findElement(this._checkoutEmailInputField);
        const existingGuestEmail = "mainer33@fakemail.com";
        Logger.info("Existing email address: ", existingGuestEmail);
        await emailInputField.sendKeys(existingGuestEmail);
    }

    async inputInvalidGuestPhoneIntoFirstPhoneInputField() {
        const phoneInputField = await this.driver.findElement(this._checkoutPhoneInputField);
        const invalidGuestPhone = "!#@#$%^%$^&$#$FSDGF";
        Logger.info("Invalid guest phone number: ", invalidGuestPhone);
        await phoneInputField.sendKeys(invalidGuestPhone);
    }

    async inputInvalidGuestAddressIntoAddressInputField() {
        const address1InputField = await this.driver.findElement(this._checkoutAddress1InputField);
        const invalidGuestAddress = "#!@$#@#%$%@#!#@#$#@%";
        Logger.info("Invalid guest address: ", invalidGuestAddress);
        await address1InputField.sendKeys(invalidGuestAddress);
    }

    async inputInvalidGuestCityIntoCityInputField() {
        const cityInputField = await this.driver.findElement(this._checkoutCityInputField);
        const actions = this.driver.actions({bridge: true});
        await actions.move({origin: cityInputField}).perform();
        const invalidGuestCity = "!#@$#$^%$&";
        Logger.info("Invalid guest city: ", invalidGuestCity);
        await cityInputField.sendKeys(invalidGuestCity);
    }

    //invalid input error message getter
    async getInvalidInputErrorMessage() {
        const invalidInputErrorMessage = await this.driver.findElement(this._invalidInputErrorMessage);
        await this.driver.executeScript(`
                    arguments[0].scrollIntoView({
                        behavior: 'instant',
                        block: 'center'
                    });
                `, invalidInputErrorMessage);
        return await invalidInputErrorMessage.getText();
    }

}

module.exports = {CheckoutPageGuestInvalidSingularInput}