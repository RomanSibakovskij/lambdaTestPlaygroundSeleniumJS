const { By, until} = require('selenium-webdriver');
const BasePage = require('./BasePage');
const Logger = require("./Logger");

class CheckoutGuestNoSingularInputPage extends BasePage{

    constructor(driver){
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
        //no agree to terms error element
        this._noAgreeToTermsErrorMessage = By.xpath("//div[@class='alert alert-warning alert-dismissible']");
    }

    //invalid guest check out data input methods - no singular input

    async inputNoGuestFirstNameIntoFirstNameInputField(){
        const firstNameInputField = await this.driver.findElement(this._checkoutFirstNameInputField);
        const noGuestFirstName = "";
        Logger.info("No guest first name: ", noGuestFirstName);
        await firstNameInputField.sendKeys(noGuestFirstName);
    }
    async inputNoGuestLastNameIntoLastNameInputField(){
        const lastNameInputField = await this.driver.findElement(this._checkoutLastNameInputField);
        const noGuestLastName = "";
        Logger.info("No guest last name: ", noGuestLastName);
        await lastNameInputField.sendKeys(noGuestLastName);
    }
    async inputNoGuestEmailIntoEmailInputField(){
        const emailInputField = await this.driver.findElement(this._checkoutEmailInputField);
        const noGuestEmail = "";
        Logger.info("No guest email address: ", noGuestEmail);
        await emailInputField.sendKeys(noGuestEmail);
    }
    async inputNoGuestPhoneIntoFirstPhoneInputField(){
        const phoneInputField = await this.driver.findElement(this._checkoutPhoneInputField);
        const noGuestPhone = "";
        Logger.info("No guest phone number: ", noGuestPhone);
        await phoneInputField.sendKeys(noGuestPhone);
    }
    async inputNoGuestAddressIntoAddressInputField(){
        const address1InputField = await this.driver.findElement(this._checkoutAddress1InputField);
        const noGuestAddress = "";
        Logger.info("No guest address: ", noGuestAddress);
        await address1InputField.sendKeys(noGuestAddress);
    }
    async inputNoGuestCityIntoCityInputField(){
        const cityInputField = await this.driver.findElement(this._checkoutCityInputField);
        const actions = this.driver.actions({bridge: true});
        await actions.move({origin: cityInputField}).perform();
        const noGuestCity = "";
        Logger.info("No guest city: ", noGuestCity);
        await cityInputField.sendKeys(noGuestCity);
    }

    //invalid input error message getter
    async getInvalidInputErrorMessage(){
        const invalidInputErrorMessage = await this.driver.findElement(this._invalidInputErrorMessage);
        await this.driver.executeScript(`
                    arguments[0].scrollIntoView({
                        behavior: 'instant',
                        block: 'center'
                    });
                `, invalidInputErrorMessage);
        return await invalidInputErrorMessage.getText();
    }
    //'No agree to terms' error message getter
    async getNoAgreeToTermsErrorMessage(){
        const noAgreeToTermsErrorMessage = await this.driver.findElement(this._noAgreeToTermsErrorMessage);
        await this.driver.executeScript(`
                    arguments[0].scrollIntoView({
                        behavior: 'instant',
                        block: 'center'
                    });
                `, noAgreeToTermsErrorMessage);
        return await noAgreeToTermsErrorMessage.getText();
    }

    //click country dropdown menu
    async clickCountryDropdownMenu(){
        const countryDropdownMenu = await this.driver.findElement(this._checkoutCountryDropdownMenu);
        const actions = this.driver.actions({bridge: true});
        await actions.move({origin: countryDropdownMenu}).click().perform();
    }
    //select 'no country' option
    async selectNoCountryOption(){
        const noCountryOption = await this.driver.findElement(this._checkoutNoCountryOption );
        noCountryOption.click();
    }
}

module.exports = {CheckoutGuestNoSingularInputPage}