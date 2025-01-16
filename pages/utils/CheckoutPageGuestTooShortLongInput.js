const { By, until} = require('selenium-webdriver');
const BasePage = require('./BasePage');
const Logger = require("./Logger");

class CheckoutPageGuestTooShortLongInput extends BasePage{

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

    //invalid guest check out data input methods - too short singular input

    async inputTooShortGuestFirstNameIntoFirstNameInputField(){
        const firstNameInputField = await this.driver.findElement(this._checkoutFirstNameInputField);
        const tooShortGuestFirstName = "N";
        Logger.info("Too short guest first name: ", tooShortGuestFirstName);
        await firstNameInputField.sendKeys(tooShortGuestFirstName);
    }
    async inputTooShortGuestLastNameIntoLastNameInputField(){
        const lastNameInputField = await this.driver.findElement(this._checkoutLastNameInputField);
        const tooShortGuestLastName = "G";
        Logger.info("Too short guest last name: ", tooShortGuestLastName);
        await lastNameInputField.sendKeys(tooShortGuestLastName);
    }
    async inputTooShortGuestEmailIntoEmailInputField(){
        const emailInputField = await this.driver.findElement(this._checkoutEmailInputField);
        const tooShortGuestEmail = "a@d.com";
        Logger.info("Too short guest email address: ", tooShortGuestEmail);
        await emailInputField.sendKeys(tooShortGuestEmail);
    }
    async inputTooShortGuestPhoneIntoFirstPhoneInputField(){
        const phoneInputField = await this.driver.findElement(this._checkoutPhoneInputField);
        const tooShortGuestPhone = "34";
        Logger.info("Too short guest phone number: ", tooShortGuestPhone);
        await phoneInputField.sendKeys(tooShortGuestPhone);
    }
    async inputTooShortGuestAddressIntoAddressInputField(){
        const address1InputField = await this.driver.findElement(this._checkoutAddress1InputField);
        const tooShortGuestAddress = "3B";
        Logger.info("Too short guest address: ", tooShortGuestAddress);
        await address1InputField.sendKeys(tooShortGuestAddress);
    }
    async inputTooShortGuestCityIntoCityInputField(){
        const cityInputField = await this.driver.findElement(this._checkoutCityInputField);
        const actions = this.driver.actions({bridge: true});
        await actions.move({origin: cityInputField}).perform();
        const tooShortGuestCity = "R";
        Logger.info("Too short guest city: ", tooShortGuestCity);
        await cityInputField.sendKeys(tooShortGuestCity);
    }

    //invalid guest check out data input methods - too long singular input

    async inputTooLongGuestFirstNameIntoFirstNameInputField(){
        const firstNameInputField = await this.driver.findElement(this._checkoutFirstNameInputField);
        const tooLongGuestFirstName = "Ddfdghfgjhfvxbvmhkjhkjgfghdfdfdfs";
        Logger.info("Too long guest first name: ", tooLongGuestFirstName);
        await firstNameInputField.sendKeys(tooLongGuestFirstName);
    }
    async inputTooLongGuestLastNameIntoLastNameInputField(){
        const lastNameInputField = await this.driver.findElement(this._checkoutLastNameInputField);
        const tooLongGuestLastName = "Ddfdghfgjhfvxbvmhkjhkjgfghdfdfdfs";
        Logger.info("Too long guest last name: ", tooLongGuestLastName);
        await lastNameInputField.sendKeys(tooLongGuestLastName);
    }
    async inputTooLongGuestEmailIntoEmailInputField(){
        const emailInputField = await this.driver.findElement(this._checkoutEmailInputField);
        const tooLongGuestEmail = "Ddfdghfgjhfvxbvmhkjhkjgfghdfdfdfssadafsdgfdgfdsfsdcxcvxcvbghjggyjtyrteradssfsdgfdfghfjfjgfgfsdadwerw@ddfdghfgjhfvxbvmhkjhkjgfghdfdfdfssadafsdgfdgfdsfsdcxcvxcvbghjggyjtyrteradssfsdgfdfghfjfjgfgfsdadwerw.com";
        Logger.info("Too long guest email address: ", tooLongGuestEmail);
        await emailInputField.sendKeys(tooLongGuestEmail);
    }
    async inputTooLongGuestPhoneIntoFirstPhoneInputField(){
        const phoneInputField = await this.driver.findElement(this._checkoutPhoneInputField);
        const tooLongGuestPhone = "322345457453423453456879687544653";
        Logger.info("Too long guest phone number: ", tooLongGuestPhone);
        await phoneInputField.sendKeys(tooLongGuestPhone);
    }
    async inputTooLongGuestAddressIntoAddressInputField(){
        const address1InputField = await this.driver.findElement(this._checkoutAddress1InputField);
        const tooLongGuestAddress = "23 St. asdfghfafrujkuykmjnsfdasffdgjmyuhuyujhrgfsfdsgfgjukyyhggfsfdjgkyuoitrtweqeqwetryiydsfgjfgfsaadsafdfgfjhgjkhfgsfdsdfgfdhfgj";
        Logger.info("Too long guest address: ", tooLongGuestAddress);
        await address1InputField.sendKeys(tooLongGuestAddress);
    }
    async inputTooLongGuestCityIntoCityInputField(){
        const cityInputField = await this.driver.findElement(this._checkoutCityInputField);
        const actions = this.driver.actions({bridge: true});
        await actions.move({origin: cityInputField}).perform();
        const tooLongGuestCity = "Asddsadwsdfghfafrujkuykmjnsfdasffdgjmyuhuyujhrgfsfdsgfgjukyyhggfsfdjgkyuoitrtweqeqwetryiydsfgjfgfsaadsafdfgfjhgjkhfgsfdsdfgfdhfgj";
        Logger.info("Too long guest city: ", tooLongGuestCity);
        await cityInputField.sendKeys(tooLongGuestCity);
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

}

module.exports = {CheckoutPageGuestTooShortLongInput}