const { By, until} = require('selenium-webdriver');
const BasePage = require('./BasePage');
const Logger = require("./Logger");
const TestDataGenerator = require('./TestDataGenerator');

class RegisterPageNoSingularInput extends BasePage{

    constructor(driver){
        super(driver);

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

    //no first name input method
    async inputNoFirstNameIntoFirstNameInputField(){
        const firstNameInputField = await this.driver.findElement(this._firstNameInputField);
        const noFirstName = "";
        Logger.info("No user first name: ", noFirstName);
        await firstNameInputField.sendKeys(noFirstName);
    }
    //no last name input method
    async inputNoLastNameIntoLastNameInputField(){
        const lastNameInputField = await this.driver.findElement(this._lastNameInputField);
        const noLastName = "";
        Logger.info("No user last name: ", noLastName);
        await lastNameInputField.sendKeys(noLastName);
    }
    //no last name input method
    async inputNoEmailIntoEmailInputField(){
        const emailInputField = await this.driver.findElement(this._emailAddressInputField);
        const noEmail = "";
        Logger.info("No user email address: ", noEmail);
        await emailInputField.sendKeys(noEmail);
    }
    //no phone input method
    async inputNoPhoneIntoPhoneInputField(){
        const phoneInputField = await this.driver.findElement(this._phoneInputField);
        const noPhone = "";
        Logger.info("No user phone number: ", noPhone);
        await phoneInputField.sendKeys(noPhone);
    }
    //no password input method
    async inputNoPasswordIntoPasswordInputField(){
        const passwordInputField = await this.driver.findElement(this._passwordInputField);
        const noPassword = "";
        Logger.info("No user password: ", noPassword);
        await passwordInputField.sendKeys(noPassword);
    }
    //no confirm password input method
    async inputNoConfirmIntoConfirmPasswordInputField(){
        const confirmPasswordInputField = await this.driver.findElement(this._confirmPasswordInputField);
        const noConfirmPassword = "";
        Logger.info("No user confirm password: ", noConfirmPassword);
        await confirmPasswordInputField.sendKeys(noConfirmPassword);
    }
}

module.exports = {RegisterPageNoSingularInput}