const { By, until} = require('selenium-webdriver');
const BasePage = require('./BasePage');
const Logger = require("./Logger");
const TestDataGenerator = require('./TestDataGenerator');

class RegisterPageTooShortLongSingularInput extends BasePage{

    constructor(driver){
        super(driver)

        this._firstNameInputField = By.xpath("//div[@id='content']//input[@name='firstname']");
        this._lastNameInputField = By.xpath("//div[@id='content']//input[@name='lastname']");
        this._emailAddressInputField = By.xpath("//div[@id='content']//input[@name='email']");
        this._phoneInputField = By.xpath("//div[@id='content']//input[@name='telephone']");
        this._passwordInputField = By.xpath("//div[@id='content']//input[@name='password']");
        this._confirmPasswordInputField = By.xpath("//div[@id='content']//input[@name='confirm']");
        //invalid input error message web element
        this._invalidSingularInputError = By.xpath("//div[@class='text-danger']");
        //invalid error message
        this._invalidErrorMessage = By.xpath("//div[@class='alert alert-danger alert-dismissible']");

        const testDataGenerator = new TestDataGenerator();
        //valid user data (for rest inputs)
        const { firstName, lastName } = testDataGenerator.getRandomName();
        this._firstName = firstName;
        this._lastName = lastName;
        this._email = testDataGenerator.generateRandomEmailAddress(7);
        this._phone = testDataGenerator.generateUSPhoneNumber();
        this._password = testDataGenerator.generateRandomPassword();
    }

    //invalid input error message getter
    async getInvalidErrorInputMessage(){
        const invalidInputMessage = await this.driver.findElement(this._invalidSingularInputError);
        return await invalidInputMessage.getText();
    }
    //invalid error message getter
    async getInvalidErrorMessage(){
        const invalidErrorMessage = await this.driver.findElement(this._invalidErrorMessage);
        return await invalidErrorMessage.getText();
    }

    //too short singular input methods

    //too short first name input method (1 char)
    async inputTooShortFirstNameIntoFirstNameInputField(){
        const firstNameInputField = await this.driver.findElement(this._firstNameInputField);
        const tooShortFirstName = "K";
        Logger.info("Too short user first name: ", tooShortFirstName);
        await firstNameInputField.sendKeys(tooShortFirstName);
    }
    //too short last name input method (1 char)
    async inputTooShortLastNameIntoLastNameInputField(){
        const lastNameInputField = await this.driver.findElement(this._lastNameInputField);
        const tooShortLastName = "K";
        Logger.info("Too short user last name: ", tooShortLastName);
        await lastNameInputField.sendKeys(tooShortLastName);
    }
    //too short email input method (1 char - name, domain)
    async inputTooShortEmailIntoEmailInputField(){
        const emailInputField = await this.driver.findElement(this._emailAddressInputField);
        const tooShortEmail = "v@d.com";
        Logger.info("Too short user email: ", tooShortEmail);
        await emailInputField.sendKeys(tooShortEmail);
    }

    //too short phone input method (2 digits)
    async inputTooShortPhoneIntoPhoneInputField(){
        const phoneInputField = await this.driver.findElement(this._phoneInputField);
        const tooShortPhone = "78";
        Logger.info("Too short user phone: ", tooShortPhone);
        await phoneInputField.sendKeys(tooShortPhone);
    }
    //too short password input method (3 chars)
    async inputTooShortPasswordIntoPasswordInputField(){
        const passwordInputField = await this.driver.findElement(this._passwordInputField);
        const tooShortPassword = "AkG";
        Logger.info("Too short user password: ", tooShortPassword);
        await passwordInputField.sendKeys(tooShortPassword);
    }
    //too short confirm password input method (3 chars)
    async inputTooShortConfirmPasswordIntoConfirmPasswordInputField(){
        const confirmPasswordInputField = await this.driver.findElement(this._confirmPasswordInputField);
        const tooShortConfirmPassword = "AkG";
        Logger.info("Too short user confirm password: ", tooShortConfirmPassword);
        await confirmPasswordInputField.sendKeys(tooShortConfirmPassword);
    }

    //too long singular input methods

    //too long first name input method (33 chars)
    async inputTooLongFirstNameIntoFirstNameInputField(){
        const firstNameInputField = await this.driver.findElement(this._firstNameInputField);
        const tooLongFirstName = "Adfghfgjghjnbfgdvxvxcbchgfjhgjkjk";
        Logger.info("Too long user first name: ", tooLongFirstName);
        await firstNameInputField.sendKeys(tooLongFirstName);
    }
    //too long last name input method (33 chars)
    async inputTooLongLastNameIntoLastNameInputField(){
        const lastNameInputField = await this.driver.findElement(this._lastNameInputField);
        const tooLongLastName = "Adfghfgjghjnbfgdvxvxcbchgfjhgjkjk";
        Logger.info("Too long user last name: ", tooLongLastName);
        await lastNameInputField.sendKeys(tooLongLastName);
    }
    //too long email input method (100 chars - name, domain)
    async inputTooLongEmailIntoEmailInputField(){
        const emailInputField = await this.driver.findElement(this._emailAddressInputField);
        const tooLongEmail = "AdfghfgjghjnbfgdvxvxcbchgfjhgjkjkAFSDGERRsdfdghgjhhjkyhdfsfdsfsdfdhgfbcxvxzczxxcxgfhghj2323sdvdcxbsd@AdfghfgjghjnbfgdvxvxcbchgfjhgjkjkAFSDGERRsdfdghgjhhjkyhdfsfdsfsdfdhgfbcxvxzczxxcxgfhghj2323sdvdcxbsd.com";
        Logger.info("Too long user email: ", tooLongEmail);
        await emailInputField.sendKeys(tooLongEmail);
    }

    //too long phone input method (33 digits)
    async inputTooLongPhoneIntoPhoneInputField(){
        const phoneInputField = await this.driver.findElement(this._phoneInputField);
        const tooLongPhone = "235645342324346457687979756545345";
        Logger.info("Too long user phone: ", tooLongPhone);
        await phoneInputField.sendKeys(tooLongPhone);
    }
    //too long password input method (22 chars)
    async inputTooLongPasswordIntoPasswordInputField(){
        const passwordInputField = await this.driver.findElement(this._passwordInputField);
        const tooLongPassword = "Hfdrtrtr%^$%&35435342E";
        Logger.info("Too long user password: ", tooLongPassword);
        await passwordInputField.sendKeys(tooLongPassword);
    }
    //too long confirm password input method (22 chars)
    async inputTooLongConfirmPasswordIntoConfirmPasswordInputField(){
        const confirmPasswordInputField = await this.driver.findElement(this._confirmPasswordInputField);
        const tooLongConfirmPassword = "Hfdrtrtr%^$%&35435342E";
        Logger.info("Too long user confirm password: ", tooLongConfirmPassword);
        await confirmPasswordInputField.sendKeys(tooLongConfirmPassword);
    }

}

module.exports = {RegisterPageTooShortLongSingularInput}