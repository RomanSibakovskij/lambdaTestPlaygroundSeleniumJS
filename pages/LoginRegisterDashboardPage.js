const { By, until} = require('selenium-webdriver');
const BasePage = require('./utils/BasePage');
const Logger = require("./utils/Logger");
const { RegisterPage } = require('./RegisterPage');

class LoginRegisterDashboardPage extends BasePage{

    constructor(driver){
        super(driver);

        //login/register dashboard page web elements

        //new customer section
        this._newCustomerSectionTitle = By.xpath("//div[@class='col-lg-6'][1]//h2");
        this._newCustomerSectionSubtitle = By.xpath("//div[@class='col-lg-6'][1]//p[1]");
        this._newCustomerSectionDescription = By.xpath("//div[@class='col-lg-6'][1]//p[2]");
        this._newCustomerSectionContinueButton = By.xpath("//div[@class='col-lg-6'][1]//a");
        //login section
        this._loginSectionTitle = By.xpath("//div[@class='col-lg-6'][2]//h2");
        this._loginSectionSubtitle = By.xpath("//div[@class='col-lg-6'][2]//p");
        this._loginSectionEmailInputField = By.xpath("//div[@class='col-lg-6'][2]//input[@id='input-email']");
        this._loginSectionPasswordInputField = By.xpath("//div[@class='col-lg-6'][2]//input[@id='input-password']");
        this._loginSectionForgotPasswordInputField = By.xpath("//div[@class='col-lg-6'][2]//a");
        this._loginSectionLoginButton = By.xpath("//div[@class='col-lg-6'][2]//input[@class='btn btn-primary']");
        //aside section
        this._loginAsideLoginLink = By.xpath("//div[@class='list-group mb-3']/a[1]");
        this._loginAsideRegisterLink = By.xpath("//div[@class='list-group mb-3']/a[2]");
        this._loginAsideForgottenPasswordLink = By.xpath("//div[@class='list-group mb-3']/a[3]");
        this._loginAsideMyAccountLink = By.xpath("//div[@class='list-group mb-3']/a[4]");
        this._loginAsideAddressBookLink = By.xpath("//div[@class='list-group mb-3']/a[5]");
        this._loginAsideWishListLink = By.xpath("//div[@class='list-group mb-3']/a[6]");
        this._loginAsideOrderHistoryLink = By.xpath("//div[@class='list-group mb-3']/a[7]");
        this._loginAsideDownloadsLink = By.xpath("//div[@class='list-group mb-3']/a[8]");
        this._loginAsidePaymentsLink = By.xpath("//div[@class='list-group mb-3']/a[9]");
        this._loginAsideRewardPointsLink = By.xpath("//div[@class='list-group mb-3']/a[10]");
        this._loginAsideReturnsLink = By.xpath("//div[@class='list-group mb-3']/a[11]");
        this._loginAsideTransactionsLink = By.xpath("//div[@class='list-group mb-3']/a[12]");
        this._loginAsideNewsletterLink = By.xpath("//div[@class='list-group mb-3']/a[13]");
        //invalid login error message box element
        this._invalidLoginBoxMessage = By.xpath("//div[@class='alert alert-danger alert-dismissible']");
    }

    //valid login data input methods
    async inputEmailAddressIntoEmailInputField(){
        const emailInputField = await this.driver.findElement(this._loginSectionEmailInputField);
        const registerPage = new RegisterPage(this.driver);
        const emailAddress = registerPage.email;
        Logger.info("Valid user login email: ", emailAddress);
        await emailInputField.sendKeys(emailAddress);
    }
    async inputPasswordIntoPasswordInputField(){
        const passwordInputField = await this.driver.findElement(this._loginSectionPasswordInputField);
        const registerPage = new RegisterPage(this.driver);
        const password = registerPage.password;
        Logger.info("Valid user login password: ", password);
        await passwordInputField.sendKeys(password);
    }

    //invalid login data input methods

    //no singular input

    async inputNoEmailAddressIntoEmailInputField(){
        const emailInputField = await this.driver.findElement(this._loginSectionEmailInputField);
        const noEmailAddress = "";
        Logger.info("No user login email: ", noEmailAddress);
        await emailInputField.sendKeys(noEmailAddress);
    }
    async inputNoPasswordIntoPasswordInputField(){
        const passwordInputField = await this.driver.findElement(this._loginSectionPasswordInputField);
        const noPassword = "";
        Logger.info("No user login password: ", noPassword);
        await passwordInputField.sendKeys(noPassword);
    }

    //invalid singular input

    async inputInvalidEmailAddressIntoEmailInputField(){
        const emailInputField = await this.driver.findElement(this._loginSectionEmailInputField);
        const invalidEmailAddress = "hammerk3456@yahoo.com";
        Logger.info("Invalid user login email: ", invalidEmailAddress);
        await emailInputField.sendKeys(invalidEmailAddress);
    }
    async inputInvalidPasswordIntoPasswordInputField(){
        const passwordInputField = await this.driver.findElement(this._loginSectionPasswordInputField);
        const invalidPassword = "QEQWE43343#$@#";
        Logger.info("Invalid user login password: ", invalidPassword);
        await passwordInputField.sendKeys(invalidPassword);
    }

    //click 'Login' button method
    async clickLoginButton(){
        const loginButton = await this.driver.findElement(this._loginSectionLoginButton);
        loginButton.click();
    }

    //new customer section title getter
    async getNewCustomerSectionTitle(){
        const newCustomerSectionTitle = await this.driver.findElement(this._newCustomerSectionTitle);
        return await newCustomerSectionTitle.getText();
    }
    //new customer section subtitle getter
    async getNewCustomerSectionSubtitle(){
        const newCustomerSectionSubtitle = await this.driver.findElement(this._newCustomerSectionSubtitle);
        return await newCustomerSectionSubtitle.getText();
    }
    //new customer description getter
    async getNewCustomerDescription(){
        const newCustomerDescription = await this.driver.findElement(this._newCustomerSectionDescription);
        return await newCustomerDescription.getText();
    }
    //login section title getter
    async getLoginSectionTitle(){
        const loginSectionTitle = await this.driver.findElement(this._loginSectionTitle);
        return await loginSectionTitle.getText();
    }
    //login section subtitle getter
    async getLoginSectionSubtitle(){
        const loginSectionSubtitle = await this.driver.findElement(this._loginSectionSubtitle);
        return await loginSectionSubtitle.getText();
    }

    //invalid login message box message getter
    async getInvalidLoginMessage(){
        const invalidLoginMessage = await this.driver.findElement(this._invalidLoginBoxMessage);
        return await invalidLoginMessage.getText();
    }

    async isElementDisplayed(locator) {
        const element = await this.driver.findElement(locator);
        return await element.isDisplayed();
    }

    //register page web element assert
    async isLoginRegisterDashboardPageWebElementDisplayed(){
        const elementsToCheck = [
            this._newCustomerSectionTitle,
            this._newCustomerSectionSubtitle,
            this._newCustomerSectionDescription,
            this._newCustomerSectionContinueButton,
            this._loginSectionTitle,
            this._loginSectionSubtitle,
            this._loginSectionEmailInputField,
            this._loginSectionPasswordInputField,
            this._loginSectionForgotPasswordInputField,
            this._loginSectionLoginButton,
            this._loginAsideLoginLink,
            this._loginAsideRegisterLink,
            this._loginAsideForgottenPasswordLink,
            this._loginAsideMyAccountLink,
            this._loginAsideAddressBookLink,
            this._loginAsideWishListLink,
            this._loginAsideOrderHistoryLink,
            this._loginAsideDownloadsLink,
            this._loginAsidePaymentsLink,
            this._loginAsideRewardPointsLink,
            this._loginAsideReturnsLink,
            this._loginAsideTransactionsLink,
            this._loginAsideNewsletterLink
        ];

        for (let element of elementsToCheck) {
            const isDisplayed = await this.isElementDisplayed(element);
            if (!isDisplayed) {
                throw new Error(`Element ${element} is not displayed.`);
            }
        }
    }

}

module.exports = {LoginRegisterDashboardPage}