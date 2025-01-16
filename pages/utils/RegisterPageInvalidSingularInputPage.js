const { By, until} = require('selenium-webdriver');
const BasePage = require('./BasePage');
const Logger = require("./Logger");
const TestDataGenerator = require('./TestDataGenerator');

class RegisterPageInvalidSingularInputPage extends BasePage{

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

    //invalid singular input methods

    //invalid first name input method (special symbols only)
    async inputInvalidFirstNameIntoFirstNameInputField(){
        const firstNameInputField = await this.driver.findElement(this._firstNameInputField);
        const invalidFirstName = "!@$#$%^$%&%^*^**()*()(&^";
        Logger.info("Invalid user first name: ", invalidFirstName);
        await firstNameInputField.sendKeys(invalidFirstName);
    }
    //invalid last name input method (special symbols only)
    async inputInvalidLastNameIntoLastNameInputField(){
        const lastNameInputField = await this.driver.findElement(this._lastNameInputField);
        const invalidLastName = ")*(&*^&%$^$%#$@#$@$#$%$";
        Logger.info("Invalid user last name: ", invalidLastName);
        await lastNameInputField.sendKeys(invalidLastName);
    }
    //invalid email input method (missing '@')
    async inputInvalidEmailIntoEmailInputField(){
        const emailInputField = await this.driver.findElement(this._emailAddressInputField);
        const invalidEmail = "brainer44yahoo.com";
        Logger.info("Invalid user email: ", invalidEmail);
        await emailInputField.sendKeys(invalidEmail);
    }
    //existing email input method (missing '@')
    async inputExistingEmailIntoEmailInputField(){
        const emailInputField = await this.driver.findElement(this._emailAddressInputField);
        const existingEmail = "mainer33@fakemail.com";
        Logger.info("Existing user email: ", existingEmail);
        await emailInputField.sendKeys(existingEmail);
    }
    //invalid phone input method (chars and special symbols only instead of digits)
    async inputInvalidPhoneIntoPhoneInputField(){
        const phoneInputField = await this.driver.findElement(this._phoneInputField);
        const invalidPhone = "ASFDFGdfsdsdsdgfL:UY!@$#";
        Logger.info("Invalid user phone: ", invalidPhone);
        await phoneInputField.sendKeys(invalidPhone);
    }


}

module.exports = {RegisterPageInvalidSingularInputPage}