const { By, until} = require('selenium-webdriver');
const BasePage = require('./utils/BasePage');
const Logger = require("./utils/Logger");
const TestDataGenerator = require('./utils/TestDataGenerator');

class RegisterPage extends BasePage{

    constructor(driver){
        super(driver)

        //register page web elements
        this._registerPageBreadcrumb = By.xpath("//ol[@class='breadcrumb']");
        this._registerPageTitle = By.xpath("//div[@class='row']//h1");
        this._registerPageDescription = By.xpath("//div[@id='content']//p");
        this._personalDetailsSubtitle = By.xpath("//div[@id='content']//fieldset[@id='account']/legend");
        this._firstNameInputField = By.xpath("//div[@id='content']//input[@name='firstname']");
        this._lastNameInputField = By.xpath("//div[@id='content']//input[@name='lastname']");
        this._emailAddressInputField = By.xpath("//div[@id='content']//input[@name='email']");
        this._phoneInputField = By.xpath("//div[@id='content']//input[@name='telephone']");
        this._passwordSubsectionTitle = By.xpath("//div[@id='content']//fieldset[2]/legend");
        this._passwordInputField = By.xpath("//div[@id='content']//input[@name='password']");
        this._confirmPasswordInputField = By.xpath("//div[@id='content']//input[@name='confirm']");
        this._newsletterSubtitle = By.xpath("//div[@id='content']//fieldset[3]/legend");
        this._subscribeCheckbox = By.css("#input-newsletter-yes");
        this._donotSubscribeCheckbox = By.css("#input-newsletter-no");
        this._privacyCheckbox = By.xpath("//div[@id='content']//input[@id='input-agree']");
        this._privacyPolicySubtext = By.xpath("//div[@id='content']//div[@class='float-right']//label");
        this._privacyPolicyLink = By.xpath("//div[@id='content']//div[@class='float-right']//a");
        this._continueButton = By.xpath("//div[@id='content']//input[@class='btn btn-primary']");
        //aside section web elements
        this._asideLoginLink = By.xpath("//div[@class='list-group mb-3']/a[1]");
        this._asideRegisterLink = By.xpath("//div[@class='list-group mb-3']/a[2]");
        this._asideForgottenPasswordLink = By.xpath("//div[@class='list-group mb-3']/a[3]");
        this._asideMyAccountLink = By.xpath("//div[@class='list-group mb-3']/a[4]");
        this._asideAddressBookLink = By.xpath("//div[@class='list-group mb-3']/a[5]");
        this._asideWishListLink = By.xpath("//div[@class='list-group mb-3']/a[6]");
        this._asideOrderHistoryLink = By.xpath("//div[@class='list-group mb-3']/a[7]");
        this._asideDownloadsLink = By.xpath("//div[@class='list-group mb-3']/a[8]");
        this._asidePaymentsLink = By.xpath("//div[@class='list-group mb-3']/a[9]");
        this._asideRewardPointsLink = By.xpath("//div[@class='list-group mb-3']/a[10]");
        this._asideReturnsLink = By.xpath("//div[@class='list-group mb-3']/a[11]");
        this._asideTransactionsLink = By.xpath("//div[@class='list-group mb-3']/a[12]");
        this._asideNewsletterLink = By.xpath("//div[@class='list-group mb-3']/a[13]");
        //account creation success elements
        this._accountCreationSuccessTitle = By.xpath("//div[@id='content']/h1");
        this._accountCreationSuccessMessage = By.xpath("//div[@id='content']/p[2]");
        //logout link
        this._asideLogOutLink = By.xpath("//aside[@id='column-right']//a[@href='https://ecommerce-playground.lambdatest.io/index.php?route=account/logout']");
        //continue button element (for logout)
        this._otherContinueButton = By.xpath("//div[@class='buttons mb-4']/a")

        const testDataGenerator = new TestDataGenerator();
        //valid user data
        const { firstName, lastName } = testDataGenerator.getRandomName();
        this._firstName = firstName;
        this._lastName = lastName;
        this._email = testDataGenerator.generateRandomEmailAddress(7);
        this._phone = testDataGenerator.generateUSPhoneNumber();
        this._password = testDataGenerator.generateRandomPassword();
    }

    //valid register data input methods
    async inputFirstNameIntoFirstNameInputField(){
        const firstNameInputField = await this.driver.findElement(this._firstNameInputField);
        const firstName = await this._firstName;
        Logger.info("Valid user first name: ", firstName);
        await firstNameInputField.sendKeys(firstName);
    }
    async inputLastNameIntoLastNameInputField(){
        const lastNameInputField = await this.driver.findElement(this._lastNameInputField);
        const lastName = await this._lastName;
        Logger.info("Valid user last name: ", lastName);
        await lastNameInputField.sendKeys(lastName);
    }
    async inputEmailIntoEmailInputField(){
        const emailInputField = await this.driver.findElement(this._emailAddressInputField);
        const email = this._email;
        await this.driver.executeScript("arguments[0].scrollIntoView({ behavior: 'smooth', block: 'center' });", emailInputField); //scroll into view for better visual display
        Logger.info("Valid user email address: ", email);
        await emailInputField.sendKeys(email);
    }
    async inputPhoneIntoPhoneInputField(){
        const phoneNumberInputField = await this.driver.findElement(this._phoneInputField);
        const phone = this._phone;
        Logger.info("Valid user phone number: ", phone);
        await phoneNumberInputField.sendKeys(phone);
    }
    async inputPasswordIntoPasswordInputField(){
        const passwordInputField = await this.driver.findElement(this._passwordInputField);
        const password = this._password;
        Logger.info("Valid user password: ", password);
        await passwordInputField.sendKeys(password);
    }
    async inputConfirmPasswordIntoConfirmPasswordInputField(){
        const confirmPassword = this._password;
        const confirmPasswordInputField = await this.driver.findElement(this._confirmPasswordInputField);
        Logger.info("Valid user confirm password: ", confirmPassword);
        await confirmPasswordInputField.sendKeys(confirmPassword);
    }

    get firstName() {
        console.log("Generated email: " + this._firstName)
        return this._firstName;
    }

    get lastName() {
        console.log("Generated email: " + this._lastName)
        return this._lastName;
    }

    get password() {
        console.log("Generated password: " + this._password)
        return this._password;
    }
    get email() {
        console.log("Generated email: " + this._email)
        return this._email;
    }

    //click 'Agree to Privacy Policy' checkbox method
    async clickPrivacyPolicyCheckbox(){
        const privacyCheckbox = await this.driver.findElement(this._privacyCheckbox);
        const actions = this.driver.actions({ bridge: true });
        await actions.move({ origin: privacyCheckbox }).click().perform();
    }

    //click 'Continue' button method
    async clickContinueButton(){
        const continueButton = await this.driver.findElement(this._continueButton);
        continueButton.click();
    }

    //click 'Logout' aside link method
    async clickAsideLogoutLink(){
        const asideLink = await this.driver.findElement(this._asideLogOutLink);
        asideLink.click();
    }

    //click other 'Continue' button method
    async clickOtherContinueButton(){
        const otherContinueButton = await this.driver.findElement(this._otherContinueButton);
        otherContinueButton.click();
    }

    //register page title getter
    async getRegisterPageTitle(){
        const registerPageTitle = await this.driver.findElement(this._registerPageTitle);
        return await registerPageTitle.getText();
    }
    //register page description getter
    async getRegisterPageDescription(){
        const registerPageDescription = await this.driver.findElement(this._registerPageDescription);
        return await registerPageDescription.getText();
    }
    //personal details subtitle getter
    async getPersonalDetailsSubtitle(){
        const personalDetailsSubtitle = await this.driver.findElement(this._personalDetailsSubtitle);
        return await personalDetailsSubtitle.getText();
    }
    //password subtitle getter
    async getPasswordSubtitle(){
        const passwordSubtitle = await this.driver.findElement(this._passwordSubsectionTitle);
        return await passwordSubtitle.getText();
    }
    //newsletter subtitle getter
    async getNewsletterSubtitle(){
        const newsletterSubtitle = await this.driver.findElement(this._newsletterSubtitle);
        return await newsletterSubtitle.getText();
    }
    //privacy policy subtext getter
    async getPrivacyPolicySubtext(){
        const privacyPolicySubtext = await this.driver.findElement(this._privacyPolicySubtext);
        return await privacyPolicySubtext.getText();
    }
    //account creation success title getter
    async getAccountCreationSuccessTitle(){
        const accountCreationSuccessTitle = await this.driver.findElement(this._accountCreationSuccessTitle);
        return await accountCreationSuccessTitle.getText();
    }
    //account creation success message getter
    async getAccountCreationSuccessMessage(){
        const accountCreationSuccessMessage = await this.driver.findElement(this._accountCreationSuccessMessage);
        return await accountCreationSuccessMessage.getText();
    }

    async isElementDisplayed(locator) {
        const element = await this.driver.findElement(locator);
        return await element.isDisplayed();
    }

    //register page web element assert
    async isRegisterPageWebElementDisplayed(){
        const elementsToCheck = [
            this._registerPageBreadcrumb,
            this._registerPageTitle,
            this._registerPageDescription,
            this._personalDetailsSubtitle,
            this._firstNameInputField,
            this._lastNameInputField,
            this._emailAddressInputField,
            this._phoneInputField,
            this._passwordSubsectionTitle,
            this._passwordInputField,
            this._confirmPasswordInputField,
            this._newsletterSubtitle,
            //this._subscribeCheckbox, //Selenium can't find visual display on the element, it IS present in the DOM
            //this._donotSubscribeCheckbox, //Selenium can't find visual display on the element, it IS present in the DOM
            //this._privacyCheckbox, //Selenium can't find visual display on the element, it IS present in the DOM
            this._privacyPolicySubtext,
            this._privacyPolicyLink,
            this._continueButton,
            this._asideLoginLink,
            this._asideRegisterLink,
            this._asideForgottenPasswordLink,
            this._asideMyAccountLink,
            this._asideAddressBookLink,
            this._asideWishListLink,
            this._asideOrderHistoryLink,
            this._asideDownloadsLink,
            this._asidePaymentsLink,
            this._asideRewardPointsLink,
            this._asideReturnsLink,
            this._asideTransactionsLink,
            this._asideNewsletterLink
        ];

        for (let element of elementsToCheck) {
            const isDisplayed = await this.isElementDisplayed(element);
            if (!isDisplayed) {
                throw new Error(`Element ${element} is not displayed.`);
            }
        }
    }
}

module.exports = {RegisterPage}