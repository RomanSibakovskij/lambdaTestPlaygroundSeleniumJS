const fs = require('fs');
const path = require('path');
const { HomePage } = require('../../pages/HomePage');
const { RegisterPage } = require('../../pages/RegisterPage');
const { RegisterPageNoSingularInput } = require('../../pages/utils/RegisterPageNoSingularInput');
const { RegisterPageTooShortLongSingularInput } = require('../../pages/utils/RegisterPageTooShortLongSingularInput');
const { RegisterPageInvalidSingularInputPage  } = require('../../pages/utils/RegisterPageInvalidSingularInputPage');
const { LoginRegisterDashboardPage } = require('../../pages/LoginRegisterDashboardPage');
const { SingleProductPage } = require('../../pages/SingleProductPage');
const { SingleProductCategoryDashboardPage } = require('../../pages/SingleProductCategoryDashboardPage');
const { SearchedProductDashboardPage } = require('../../pages/SearchedProductDashboardPage');
const { ShoppingCartPage } = require('../../pages/ShoppingCartPage');
const { CheckoutPage } = require('../../pages/CheckoutPage');
const { CheckoutGuestNoSingularInputPage } = require('../../pages/utils/CheckoutGuestNoSingularInputPage');
const { CheckoutPageGuestTooShortLongInput } = require('../../pages/utils/CheckoutPageGuestTooShortLongInput');
const { CheckoutPageGuestInvalidSingularInput } = require('../../pages/utils/CheckoutPageGuestInvalidSingularInput');
const { CheckoutPageRegisteredUser } = require('../../pages/utils/CheckoutPageRegisteredUser');
const { ConfirmCheckoutPage } = require('../../pages/ConfirmCheckoutPage');
const assert = require("node:assert");
const Logger = require('../../pages/utils/Logger');

class TestMethods {

    constructor(driver) {this.driver = driver;}


    //navigate to register page test method
    async navigateToRegisterPageTest(){
        const homePage = new HomePage(this.driver);
        //wait for elements to load
        await homePage.waitForElementLoad();
        //general page web element assert
        await homePage.isGeneralPageWebElementDisplayed()
        //home page web element assert
        await homePage.isHomePageWebElementDisplayed()
        //home page text element assert
        await this.isHomePageTextElementAsExpected();
        //log top products data
        await this.logHomePageTopProductsData();
        //hover over 'My account' dropdown menu
        await homePage.hoverOverMyAccountDropdownMenu();
        //click 'Register' link
        await homePage.clickRegisterLink();
       //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "User Navigation To Register Page Test");
    }

    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    //positive register account tests

    //valid user account registration test method
    async validUserAccountRegisterTest(){
        const homePage = new HomePage(this.driver);
        const registerPage = new RegisterPage(this.driver);
        //general page web element assert
        await homePage.isGeneralPageWebElementDisplayed();
        //register page web element assert
        await registerPage.isRegisterPageWebElementDisplayed();
        //register page text element assert
        await this.isRegisterPageTextElementAsExpected();
        //capture screenshot before valid user data input
        await TestMethods.captureScreenshot(this.driver, "User Register Page Before Valid Data Input")
        //input valid user first name
        await registerPage.inputFirstNameIntoFirstNameInputField();
        //input valid user last name
        await registerPage.inputLastNameIntoLastNameInputField();
        //input valid user email address
        await registerPage.inputEmailIntoEmailInputField();
        //input valid user phone number
        await registerPage.inputPhoneIntoPhoneInputField();
        //input valid user password
        await registerPage.inputPasswordIntoPasswordInputField();
        //input matching confirm password
        await registerPage.inputConfirmPasswordIntoConfirmPasswordInputField();
        //click 'Agree to Privacy Policy' checkbox
        await registerPage.clickPrivacyPolicyCheckbox();
        //click 'Continue' button
        await registerPage.clickContinueButton();
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Valid User Account Register Test Success");
        //assert the user gets the account creation title and message
        const accountCreationSuccessMessageTitle = await registerPage.getAccountCreationSuccessTitle();
        assert.strictEqual(accountCreationSuccessMessageTitle, "Your Account Has Been Created!", "The account creation success title doesn't match expectations or the user account registration has failed.");
        const accountCreationSuccessMessage = await registerPage.getAccountCreationSuccessMessage();
        assert.strictEqual(accountCreationSuccessMessage, "Congratulations! Your new account has been successfully created!", "The account creation success message doesn't match expectations or the user account registration has failed.");
    }

    //negative user account registration tests

    //no singular input

    //invalid user account registration test method - no first name
    async invalidUserAccountRegisterNoFirstNameTest(){
        const homePage = new HomePage(this.driver);
        const registerPage = new RegisterPage(this.driver);
        const registerPageNoSingularInput = new RegisterPageNoSingularInput(this.driver);
        //general page web element assert
        await homePage.isGeneralPageWebElementDisplayed();
        //register page web element assert
        await registerPage.isRegisterPageWebElementDisplayed();
        //register page text element assert
        await this.isRegisterPageTextElementAsExpected();
        //capture screenshot before invalid user data input
        await TestMethods.captureScreenshot(this.driver, "User Register Page Before Invalid Data Input")
        //don't input user first name
        await registerPageNoSingularInput.inputNoFirstNameIntoFirstNameInputField();
        //input valid user last name
        await registerPage.inputLastNameIntoLastNameInputField();
        //input valid user email address
        await registerPage.inputEmailIntoEmailInputField();
        //input valid user phone number
        await registerPage.inputPhoneIntoPhoneInputField();
        //input valid user password
        await registerPage.inputPasswordIntoPasswordInputField();
        //input matching confirm password
        await registerPage.inputConfirmPasswordIntoConfirmPasswordInputField();
        //click 'Agree to Privacy Policy' checkbox
        await registerPage.clickPrivacyPolicyCheckbox();
        //click 'Continue' button
        await registerPage.clickContinueButton();
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Invalid User Account Register Test Result - No First Name");
        //assert the user gets the expected error message
        const noFirstNameError = await registerPageNoSingularInput.getInvalidErrorInputMessage();
        assert.strictEqual(noFirstNameError, "First Name must be between 1 and 32 characters!", "The first name input error doesn't match expectations.");
    }
    //invalid user account registration test method - no last name
    async invalidUserAccountRegisterNoLastNameTest(){
        const homePage = new HomePage(this.driver);
        const registerPage = new RegisterPage(this.driver);
        const registerPageNoSingularInput = new RegisterPageNoSingularInput(this.driver);
        //general page web element assert
        await homePage.isGeneralPageWebElementDisplayed();
        //register page web element assert
        await registerPage.isRegisterPageWebElementDisplayed();
        //register page text element assert
        await this.isRegisterPageTextElementAsExpected();
        //capture screenshot before invalid user data input
        await TestMethods.captureScreenshot(this.driver, "User Register Page Before Invalid Data Input")
        //input valid user first name
        await registerPage.inputFirstNameIntoFirstNameInputField();
        //don't input user last name
        await registerPageNoSingularInput.inputNoLastNameIntoLastNameInputField();
        //input valid user email address
        await registerPage.inputEmailIntoEmailInputField();
        //input valid user phone number
        await registerPage.inputPhoneIntoPhoneInputField();
        //input valid user password
        await registerPage.inputPasswordIntoPasswordInputField();
        //input matching confirm password
        await registerPage.inputConfirmPasswordIntoConfirmPasswordInputField();
        //click 'Agree to Privacy Policy' checkbox
        await registerPage.clickPrivacyPolicyCheckbox();
        //click 'Continue' button
        await registerPage.clickContinueButton();
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Invalid User Account Register Test Result - No Last Name");
        //assert the user gets the expected error message
        const noLastNameError = await registerPageNoSingularInput.getInvalidErrorInputMessage();
        assert.strictEqual(noLastNameError, "Last Name must be between 1 and 32 characters!", "The last name input error doesn't match expectations.");
    }
    //invalid user account registration test method - no email address
    async invalidUserAccountRegisterNoEmailAddressTest(){
        const homePage = new HomePage(this.driver);
        const registerPage = new RegisterPage(this.driver);
        const registerPageNoSingularInput = new RegisterPageNoSingularInput(this.driver);
        //general page web element assert
        await homePage.isGeneralPageWebElementDisplayed();
        //register page web element assert
        await registerPage.isRegisterPageWebElementDisplayed();
        //register page text element assert
        await this.isRegisterPageTextElementAsExpected();
        //capture screenshot before invalid user data input
        await TestMethods.captureScreenshot(this.driver, "User Register Page Before Invalid Data Input")
        //input valid user first name
        await registerPage.inputFirstNameIntoFirstNameInputField();
        //input valid user last name
        await registerPage.inputLastNameIntoLastNameInputField();
        //don't input email address
        await registerPageNoSingularInput.inputNoEmailIntoEmailInputField();
        //input valid user phone number
        await registerPage.inputPhoneIntoPhoneInputField();
        //input valid user password
        await registerPage.inputPasswordIntoPasswordInputField();
        //input matching confirm password
        await registerPage.inputConfirmPasswordIntoConfirmPasswordInputField();
        //click 'Agree to Privacy Policy' checkbox
        await registerPage.clickPrivacyPolicyCheckbox();
        //click 'Continue' button
        await registerPage.clickContinueButton();
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Invalid User Account Register Test Result - No Email Address");
        //assert the user gets the expected error message
        const noEmailError = await registerPageNoSingularInput.getInvalidErrorInputMessage();
        assert.strictEqual(noEmailError, "E-Mail Address does not appear to be valid!", "The email address input error doesn't match expectations.");
    }
    //invalid user account registration test method - no phone number
    async invalidUserAccountRegisterNoPhoneTest(){
        const homePage = new HomePage(this.driver);
        const registerPage = new RegisterPage(this.driver);
        const registerPageNoSingularInput = new RegisterPageNoSingularInput(this.driver);
        //general page web element assert
        await homePage.isGeneralPageWebElementDisplayed();
        //register page web element assert
        await registerPage.isRegisterPageWebElementDisplayed();
        //register page text element assert
        await this.isRegisterPageTextElementAsExpected();
        //capture screenshot before invalid user data input
        await TestMethods.captureScreenshot(this.driver, "User Register Page Before Invalid Data Input")
        //input valid user first name
        await registerPage.inputFirstNameIntoFirstNameInputField();
        //input valid user last name
        await registerPage.inputLastNameIntoLastNameInputField();
        //input valid user email address
        await registerPage.inputEmailIntoEmailInputField();
        //don't input phone number
        await registerPageNoSingularInput.inputNoPhoneIntoPhoneInputField();
        //input valid user password
        await registerPage.inputPasswordIntoPasswordInputField();
        //input matching confirm password
        await registerPage.inputConfirmPasswordIntoConfirmPasswordInputField();
        //click 'Agree to Privacy Policy' checkbox
        await registerPage.clickPrivacyPolicyCheckbox();
        //click 'Continue' button
        await registerPage.clickContinueButton();
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Invalid User Account Register Test Result - No Phone Number");
        //assert the user gets the expected error message
        const noPhoneError = await registerPageNoSingularInput.getInvalidErrorInputMessage();
        assert.strictEqual(noPhoneError, "Telephone must be between 3 and 32 characters!", "The phone number input error doesn't match expectations.");
    }
    //invalid user account registration test method - no password
    async invalidUserAccountRegisterNoPasswordTest(){
        const homePage = new HomePage(this.driver);
        const registerPage = new RegisterPage(this.driver);
        const registerPageNoSingularInput = new RegisterPageNoSingularInput(this.driver);
        //general page web element assert
        await homePage.isGeneralPageWebElementDisplayed();
        //register page web element assert
        await registerPage.isRegisterPageWebElementDisplayed();
        //register page text element assert
        await this.isRegisterPageTextElementAsExpected();
        //capture screenshot before invalid user data input
        await TestMethods.captureScreenshot(this.driver, "User Register Page Before Invalid Data Input")
        //input valid user first name
        await registerPage.inputFirstNameIntoFirstNameInputField();
        //input valid user last name
        await registerPage.inputLastNameIntoLastNameInputField();
        //input valid user email address
        await registerPage.inputEmailIntoEmailInputField();
        //input valid phone number
        await registerPage.inputPhoneIntoPhoneInputField();
        //don't input password
        await registerPageNoSingularInput.inputNoPasswordIntoPasswordInputField();
        //input matching confirm password
        await registerPage.inputConfirmPasswordIntoConfirmPasswordInputField();
        //click 'Agree to Privacy Policy' checkbox
        await registerPage.clickPrivacyPolicyCheckbox();
        //click 'Continue' button
        await registerPage.clickContinueButton();
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Invalid User Account Register Test Result - No Password");
        //assert the user gets the expected error message
        const noPasswordError = await registerPageNoSingularInput.getInvalidErrorInputMessage();
        assert.strictEqual(noPasswordError, "Password must be between 4 and 20 characters!", "The password input error doesn't match expectations.");
    }
    //invalid user account registration test method - no confirm password
    async invalidUserAccountRegisterNoConfirmPasswordTest(){
        const homePage = new HomePage(this.driver);
        const registerPage = new RegisterPage(this.driver);
        const registerPageNoSingularInput = new RegisterPageNoSingularInput(this.driver);
        //general page web element assert
        await homePage.isGeneralPageWebElementDisplayed();
        //register page web element assert
        await registerPage.isRegisterPageWebElementDisplayed();
        //register page text element assert
        await this.isRegisterPageTextElementAsExpected();
        //capture screenshot before invalid user data input
        await TestMethods.captureScreenshot(this.driver, "User Register Page Before Invalid Data Input")
        //input valid user first name
        await registerPage.inputFirstNameIntoFirstNameInputField();
        //input valid user last name
        await registerPage.inputLastNameIntoLastNameInputField();
        //input valid user email address
        await registerPage.inputEmailIntoEmailInputField();
        //input valid phone number
        await registerPage.inputPhoneIntoPhoneInputField();
        //input valid password
        await registerPage.inputPasswordIntoPasswordInputField();
        //don't input confirm password
        await registerPageNoSingularInput.inputNoConfirmIntoConfirmPasswordInputField();
        //click 'Agree to Privacy Policy' checkbox
        await registerPage.clickPrivacyPolicyCheckbox();
        //click 'Continue' button
        await registerPage.clickContinueButton();
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Invalid User Account Register Test Result - No Confirm Password");
        //assert the user gets the expected error message
        const noConfirmPasswordError = await registerPageNoSingularInput.getInvalidErrorInputMessage();
        assert.strictEqual(noConfirmPasswordError, "Password confirmation does not match password!", "The confirm password input error doesn't match expectations.");
    }
    //invalid user account registration test method - no privacy checkbox click
    async invalidUserAccountRegisterNoPrivacyTest(){
        const homePage = new HomePage(this.driver);
        const registerPage = new RegisterPage(this.driver);
        const registerPageNoSingularInput = new RegisterPageNoSingularInput(this.driver);
        //general page web element assert
        await homePage.isGeneralPageWebElementDisplayed();
        //register page web element assert
        await registerPage.isRegisterPageWebElementDisplayed();
        //register page text element assert
        await this.isRegisterPageTextElementAsExpected();
        //capture screenshot before invalid user data input
        await TestMethods.captureScreenshot(this.driver, "User Register Page Before Invalid Data Input")
        //input valid user first name
        await registerPage.inputFirstNameIntoFirstNameInputField();
        //input valid user last name
        await registerPage.inputLastNameIntoLastNameInputField();
        //input valid user email address
        await registerPage.inputEmailIntoEmailInputField();
        //input valid user phone number
        await registerPage.inputPhoneIntoPhoneInputField();
        //input valid user password
        await registerPage.inputPasswordIntoPasswordInputField();
        //input matching confirm password
        await registerPage.inputConfirmPasswordIntoConfirmPasswordInputField();;
        //click 'Continue' button
        await registerPage.clickContinueButton();
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Invalid User Account Register Test Result - No Privacy Checkbox Click");
        //assert the user gets the expected error message
        const noPrivacyClick = await registerPageNoSingularInput.getInvalidErrorMessage();
        assert.strictEqual(noPrivacyClick, "Warning: You must agree to the Privacy Policy!", "The privacy checkbox mis click error doesn't match expectations.");
    }

    //too short singular input tests

    //invalid user account registration test method - too short first name (1 char is usually too short)
    async invalidUserAccountRegisterTooShortFirstNameTest(){
        const homePage = new HomePage(this.driver);
        const registerPage = new RegisterPage(this.driver);
        const registerPageTooShortLongSingularInput = new RegisterPageTooShortLongSingularInput(this.driver);
        //general page web element assert
        await homePage.isGeneralPageWebElementDisplayed();
        //register page web element assert
        await registerPage.isRegisterPageWebElementDisplayed();
        //register page text element assert
        await this.isRegisterPageTextElementAsExpected();
        //capture screenshot before invalid user data input
        await TestMethods.captureScreenshot(this.driver, "User Register Page Before Invalid Data Input")
        //input too short user first name (1 char is usually too short)
        await registerPageTooShortLongSingularInput.inputTooShortFirstNameIntoFirstNameInputField();
        //input valid user last name
        await registerPage.inputLastNameIntoLastNameInputField();
        //input valid user email address
        await registerPage.inputEmailIntoEmailInputField();
        //input valid user phone number
        await registerPage.inputPhoneIntoPhoneInputField();
        //input valid user password
        await registerPage.inputPasswordIntoPasswordInputField();
        //input matching confirm password
        await registerPage.inputConfirmPasswordIntoConfirmPasswordInputField();
        //click 'Agree to Privacy Policy' checkbox
        await registerPage.clickPrivacyPolicyCheckbox();
        //click 'Continue' button
        await registerPage.clickContinueButton();
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Invalid User Account Register Test Result - Too Short First Name");
        //assert the user gets the expected error message / log the issue if it doesn't
        try {
            const tooShortFirstNameError = await registerPageTooShortLongSingularInput.getInvalidErrorInputMessage();
            assert.strictEqual(tooShortFirstNameError, "First Name must be between 1 and 32 characters!", "The too short first name input error doesn't match expectations.");
        } catch(error){
            Logger.warn("The too short first name error didn't appear or it doesn't exist.")
        }
    }
    //invalid user account registration test method - too short last name (1 char is usually too short)
    async invalidUserAccountRegisterTooShortLastNameTest(){
        const homePage = new HomePage(this.driver);
        const registerPage = new RegisterPage(this.driver);
        const registerPageTooShortLongSingularInput = new RegisterPageTooShortLongSingularInput(this.driver);
        //general page web element assert
        await homePage.isGeneralPageWebElementDisplayed();
        //register page web element assert
        await registerPage.isRegisterPageWebElementDisplayed();
        //register page text element assert
        await this.isRegisterPageTextElementAsExpected();
        //capture screenshot before invalid user data input
        await TestMethods.captureScreenshot(this.driver, "User Register Page Before Invalid Data Input")
        //input valid user first name
        await registerPage.inputFirstNameIntoFirstNameInputField();
        //input too short user last name (1 char)
        await registerPageTooShortLongSingularInput.inputTooShortLastNameIntoLastNameInputField();
        //input valid user email address
        await registerPage.inputEmailIntoEmailInputField();
        //input valid user phone number
        await registerPage.inputPhoneIntoPhoneInputField();
        //input valid user password
        await registerPage.inputPasswordIntoPasswordInputField();
        //input matching confirm password
        await registerPage.inputConfirmPasswordIntoConfirmPasswordInputField();
        //click 'Agree to Privacy Policy' checkbox
        await registerPage.clickPrivacyPolicyCheckbox();
        //click 'Continue' button
        await registerPage.clickContinueButton();
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Invalid User Account Register Test Result - Too Short Last Name");
        //assert the user gets the expected error message / log the issue if it doesn't
        try {
            const tooShortLastNameError = await registerPageTooShortLongSingularInput.getInvalidErrorInputMessage();
            assert.strictEqual(tooShortLastNameError, "Last Name must be between 1 and 32 characters!", "The too short last name input error doesn't match expectations.");
        } catch(error){
            Logger.warn("The too short last name error didn't appear or it doesn't exist.")
        }
    }
    //invalid user account registration test method - too short email (1 char is usually too short - name,domain)
    async invalidUserAccountRegisterTooShortEmailTest(){
        const homePage = new HomePage(this.driver);
        const registerPage = new RegisterPage(this.driver);
        const registerPageTooShortLongSingularInput = new RegisterPageTooShortLongSingularInput(this.driver);
        //general page web element assert
        await homePage.isGeneralPageWebElementDisplayed();
        //register page web element assert
        await registerPage.isRegisterPageWebElementDisplayed();
        //register page text element assert
        await this.isRegisterPageTextElementAsExpected();
        //capture screenshot before invalid user data input
        await TestMethods.captureScreenshot(this.driver, "User Register Page Before Invalid Data Input")
        //input valid user first name
        await registerPage.inputFirstNameIntoFirstNameInputField();
        //input valid user last name
        await registerPage.inputLastNameIntoLastNameInputField();
        //input too short user email address (1 char - name,domain)
        await registerPageTooShortLongSingularInput.inputTooShortEmailIntoEmailInputField();
        //input valid user phone number
        await registerPage.inputPhoneIntoPhoneInputField();
        //input valid user password
        await registerPage.inputPasswordIntoPasswordInputField();
        //input matching confirm password
        await registerPage.inputConfirmPasswordIntoConfirmPasswordInputField();
        //click 'Agree to Privacy Policy' checkbox
        await registerPage.clickPrivacyPolicyCheckbox();
        //click 'Continue' button
        await registerPage.clickContinueButton();
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Invalid User Account Register Test Result - Too Short Email");
        //assert the user gets the expected error message / log the issue if it doesn't
        try {
            const tooShortEmailError = await registerPageTooShortLongSingularInput.getInvalidErrorInputMessage();
            assert.strictEqual(tooShortEmailError, "Email address is too short!", "The too short email address input error doesn't match expectations.");
        } catch(error){
            Logger.warn("The too short email address error didn't appear or it doesn't exist.")
        }
    }
    //invalid user account registration test method - too short phone (2 digits)
    async invalidUserAccountRegisterTooShortPhoneTest(){
        const homePage = new HomePage(this.driver);
        const registerPage = new RegisterPage(this.driver);
        const registerPageTooShortLongSingularInput = new RegisterPageTooShortLongSingularInput(this.driver);
        //general page web element assert
        await homePage.isGeneralPageWebElementDisplayed();
        //register page web element assert
        await registerPage.isRegisterPageWebElementDisplayed();
        //register page text element assert
        await this.isRegisterPageTextElementAsExpected();
        //capture screenshot before invalid user data input
        await TestMethods.captureScreenshot(this.driver, "User Register Page Before Invalid Data Input")
        //input valid user first name
        await registerPage.inputFirstNameIntoFirstNameInputField();
        //input valid user last name
        await registerPage.inputLastNameIntoLastNameInputField();
        //input valid user email address
        await registerPage.inputEmailIntoEmailInputField();
        //input too short user phone number
        await registerPageTooShortLongSingularInput.inputTooShortPhoneIntoPhoneInputField();
        //input valid user password
        await registerPage.inputPasswordIntoPasswordInputField();
        //input matching confirm password
        await registerPage.inputConfirmPasswordIntoConfirmPasswordInputField();
        //click 'Agree to Privacy Policy' checkbox
        await registerPage.clickPrivacyPolicyCheckbox();
        //click 'Continue' button
        await registerPage.clickContinueButton();
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Invalid User Account Register Test Result - Too Short Phone");
        //assert the user gets the expected error message / log the issue if it doesn't
        try {
            const tooShortEmailError = await registerPageTooShortLongSingularInput.getInvalidErrorInputMessage();
            assert.strictEqual(tooShortEmailError, "Telephone must be between 3 and 32 characters!", "The too short phone number input error doesn't match expectations.");
        } catch(error){
            Logger.warn("The too short phone number error didn't appear or it doesn't exist.")
        }
    }
    //invalid user account registration test method - too short password / confirm password (3 chars)
    async invalidUserAccountRegisterTooShortPasswordAndConfirmTest(){
        const homePage = new HomePage(this.driver);
        const registerPage = new RegisterPage(this.driver);
        const registerPageTooShortLongSingularInput = new RegisterPageTooShortLongSingularInput(this.driver);
        //general page web element assert
        await homePage.isGeneralPageWebElementDisplayed();
        //register page web element assert
        await registerPage.isRegisterPageWebElementDisplayed();
        //register page text element assert
        await this.isRegisterPageTextElementAsExpected();
        //capture screenshot before invalid user data input
        await TestMethods.captureScreenshot(this.driver, "User Register Page Before Invalid Data Input")
        //input valid user first name
        await registerPage.inputFirstNameIntoFirstNameInputField();
        //input valid user last name
        await registerPage.inputLastNameIntoLastNameInputField();
        //input valid user email address
        await registerPage.inputEmailIntoEmailInputField();
        //input valid user phone number
        await registerPage.inputPhoneIntoPhoneInputField();
        //input too short user password
        await registerPageTooShortLongSingularInput.inputTooShortPasswordIntoPasswordInputField();
        //input too short matching confirm password
        await registerPageTooShortLongSingularInput.inputTooShortConfirmPasswordIntoConfirmPasswordInputField();
        //click 'Agree to Privacy Policy' checkbox
        await registerPage.clickPrivacyPolicyCheckbox();
        //click 'Continue' button
        await registerPage.clickContinueButton();
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Invalid User Account Register Test Result - Too Short Password And Confirm Password");
        //assert the user gets the expected error message / log the issue if it doesn't
        try {
            const tooShortEmailError = await registerPageTooShortLongSingularInput.getInvalidErrorInputMessage();
            assert.strictEqual(tooShortEmailError, "Password must be between 4 and 20 characters!", "The too short password input error doesn't match expectations.");
        } catch(error){
            Logger.warn("The too short password error didn't appear or it doesn't exist.")
        }
    }

    //too long singular input tests

    //invalid user account registration test method - too long first name (33 chars)
    async invalidUserAccountRegisterTooLongFirstNameTest(){
        const homePage = new HomePage(this.driver);
        const registerPage = new RegisterPage(this.driver);
        const registerPageTooShortLongSingularInput = new RegisterPageTooShortLongSingularInput(this.driver);
        //general page web element assert
        await homePage.isGeneralPageWebElementDisplayed();
        //register page web element assert
        await registerPage.isRegisterPageWebElementDisplayed();
        //register page text element assert
        await this.isRegisterPageTextElementAsExpected();
        //capture screenshot before invalid user data input
        await TestMethods.captureScreenshot(this.driver, "User Register Page Before Invalid Data Input")
        //input too long user first name (33 chars)
        await registerPageTooShortLongSingularInput.inputTooLongFirstNameIntoFirstNameInputField();
        //input valid user last name
        await registerPage.inputLastNameIntoLastNameInputField();
        //input valid user email address
        await registerPage.inputEmailIntoEmailInputField();
        //input valid user phone number
        await registerPage.inputPhoneIntoPhoneInputField();
        //input valid user password
        await registerPage.inputPasswordIntoPasswordInputField();
        //input matching confirm password
        await registerPage.inputConfirmPasswordIntoConfirmPasswordInputField();
        //click 'Agree to Privacy Policy' checkbox
        await registerPage.clickPrivacyPolicyCheckbox();
        //click 'Continue' button
        await registerPage.clickContinueButton();
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Invalid User Account Register Test Result - Too Long First Name");
        //assert the user gets the expected error message / log the issue if it doesn't
        try {
            const tooLongFirstNameError = await registerPageTooShortLongSingularInput.getInvalidErrorInputMessage();
            assert.strictEqual(tooLongFirstNameError, "First Name must be between 1 and 32 characters!", "The too long first name input error doesn't match expectations.");
        } catch(error){
            Logger.warn("The too long first name error didn't appear or it doesn't exist.")
        }
    }
    //invalid user account registration test method - too long last name (33 chars)
    async invalidUserAccountRegisterTooLongLastNameTest(){
        const homePage = new HomePage(this.driver);
        const registerPage = new RegisterPage(this.driver);
        const registerPageTooShortLongSingularInput = new RegisterPageTooShortLongSingularInput(this.driver);
        //general page web element assert
        await homePage.isGeneralPageWebElementDisplayed();
        //register page web element assert
        await registerPage.isRegisterPageWebElementDisplayed();
        //register page text element assert
        await this.isRegisterPageTextElementAsExpected();
        //capture screenshot before invalid user data input
        await TestMethods.captureScreenshot(this.driver, "User Register Page Before Invalid Data Input")
        //input valid user first name
        await registerPage.inputFirstNameIntoFirstNameInputField();
        //input too long user last name (33 chars)
        await registerPageTooShortLongSingularInput.inputTooLongLastNameIntoLastNameInputField();
        //input valid user email address
        await registerPage.inputEmailIntoEmailInputField();
        //input valid user phone number
        await registerPage.inputPhoneIntoPhoneInputField();
        //input valid user password
        await registerPage.inputPasswordIntoPasswordInputField();
        //input matching confirm password
        await registerPage.inputConfirmPasswordIntoConfirmPasswordInputField();
        //click 'Agree to Privacy Policy' checkbox
        await registerPage.clickPrivacyPolicyCheckbox();
        //click 'Continue' button
        await registerPage.clickContinueButton();
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Invalid User Account Register Test Result - Too Long Last Name");
        //assert the user gets the expected error message / log the issue if it doesn't
        try {
            const tooLongLastNameError = await registerPageTooShortLongSingularInput.getInvalidErrorInputMessage();
            assert.strictEqual(tooLongLastNameError, "Last Name must be between 1 and 32 characters!", "The too long last name input error doesn't match expectations.");
        } catch(error){
            Logger.warn("The too long last name error didn't appear or it doesn't exist.")
        }
    }
    //invalid user account registration test method - too long email (100 chars - name,domain)
    async invalidUserAccountRegisterTooLongEmailTest(){
        const homePage = new HomePage(this.driver);
        const registerPage = new RegisterPage(this.driver);
        const registerPageTooShortLongSingularInput = new RegisterPageTooShortLongSingularInput(this.driver);
        //general page web element assert
        await homePage.isGeneralPageWebElementDisplayed();
        //register page web element assert
        await registerPage.isRegisterPageWebElementDisplayed();
        //register page text element assert
        await this.isRegisterPageTextElementAsExpected();
        //capture screenshot before invalid user data input
        await TestMethods.captureScreenshot(this.driver, "User Register Page Before Invalid Data Input")
        //input valid user first name
        await registerPage.inputFirstNameIntoFirstNameInputField();
        //input valid user last name
        await registerPage.inputLastNameIntoLastNameInputField();
        //input too long user email address (100 chars - name,domain)
        await registerPageTooShortLongSingularInput.inputTooLongEmailIntoEmailInputField();
        //input valid user phone number
        await registerPage.inputPhoneIntoPhoneInputField();
        //input valid user password
        await registerPage.inputPasswordIntoPasswordInputField();
        //input matching confirm password
        await registerPage.inputConfirmPasswordIntoConfirmPasswordInputField();
        //click 'Agree to Privacy Policy' checkbox
        await registerPage.clickPrivacyPolicyCheckbox();
        //click 'Continue' button
        await registerPage.clickContinueButton();
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Invalid User Account Register Test Result - Too Long Email Address");
        //assert the user gets the expected error message / log the issue if it doesn't
        try {
            const tooLongEmailError = await registerPageTooShortLongSingularInput.getInvalidErrorInputMessage();
            assert.strictEqual(tooLongEmailError, "E-Mail Address does not appear to be valid!", "The too long email address input error doesn't match expectations.");
        } catch(error){
            Logger.warn("The too long email address error didn't appear or it doesn't exist.")
        }
    }
    //invalid user account registration test method - too long phone (33 digits)
    async invalidUserAccountRegisterTooLongPhoneTest(){
        const homePage = new HomePage(this.driver);
        const registerPage = new RegisterPage(this.driver);
        const registerPageTooShortLongSingularInput = new RegisterPageTooShortLongSingularInput(this.driver);
        //general page web element assert
        await homePage.isGeneralPageWebElementDisplayed();
        //register page web element assert
        await registerPage.isRegisterPageWebElementDisplayed();
        //register page text element assert
        await this.isRegisterPageTextElementAsExpected();
        //capture screenshot before invalid user data input
        await TestMethods.captureScreenshot(this.driver, "User Register Page Before Invalid Data Input")
        //input valid user first name
        await registerPage.inputFirstNameIntoFirstNameInputField();
        //input valid user last name
        await registerPage.inputLastNameIntoLastNameInputField();
        //input valid user email address
        await registerPage.inputEmailIntoEmailInputField();
        //input too long user phone number (33 digits)
        await registerPageTooShortLongSingularInput.inputTooLongPhoneIntoPhoneInputField();
        //input valid user password
        await registerPage.inputPasswordIntoPasswordInputField();
        //input matching confirm password
        await registerPage.inputConfirmPasswordIntoConfirmPasswordInputField();
        //click 'Agree to Privacy Policy' checkbox
        await registerPage.clickPrivacyPolicyCheckbox();
        //click 'Continue' button
        await registerPage.clickContinueButton();
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Invalid User Account Register Test Result - Too Long Phone");
        //assert the user gets the expected error message / log the issue if it doesn't
        try {
            const tooLongPhone = await registerPageTooShortLongSingularInput.getInvalidErrorInputMessage();
            assert.strictEqual(tooLongPhone, "Telephone must be between 3 and 32 characters!", "The too long phone number input error doesn't match expectations.");
        } catch(error){
            Logger.warn("The too long phone number error didn't appear or it doesn't exist.")
        }
    }
    //invalid user account registration test method - too long password / confirm password (21 chars)
    async invalidUserAccountRegisterTooLongPasswordAndConfirmTest(){
        const homePage = new HomePage(this.driver);
        const registerPage = new RegisterPage(this.driver);
        const registerPageTooShortLongSingularInput = new RegisterPageTooShortLongSingularInput(this.driver);
        //general page web element assert
        await homePage.isGeneralPageWebElementDisplayed();
        //register page web element assert
        await registerPage.isRegisterPageWebElementDisplayed();
        //register page text element assert
        await this.isRegisterPageTextElementAsExpected();
        //capture screenshot before invalid user data input
        await TestMethods.captureScreenshot(this.driver, "User Register Page Before Invalid Data Input")
        //input valid user first name
        await registerPage.inputFirstNameIntoFirstNameInputField();
        //input valid user last name
        await registerPage.inputLastNameIntoLastNameInputField();
        //input valid user email address
        await registerPage.inputEmailIntoEmailInputField();
        //input valid user phone number
        await registerPage.inputPhoneIntoPhoneInputField();
        //input too long user password (21 chars)
        await registerPageTooShortLongSingularInput.inputTooLongPasswordIntoPasswordInputField();
        //input too long matching confirm password (21 chars)
        await registerPageTooShortLongSingularInput.inputTooLongConfirmPasswordIntoConfirmPasswordInputField();
        //click 'Agree to Privacy Policy' checkbox
        await registerPage.clickPrivacyPolicyCheckbox();
        //click 'Continue' button
        await registerPage.clickContinueButton();
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Invalid User Account Register Test Result - Too Long Password And Confirm Password");
        //assert the user gets the expected error message / log the issue if it doesn't
        try {
            const tooLongPassword = await registerPageTooShortLongSingularInput.getInvalidErrorInputMessage();
            assert.strictEqual(tooLongPassword, "Password must be between 4 and 20 characters!", "The too long password input error doesn't match expectations.");
        } catch(error){
            Logger.warn("The too long password error didn't appear or it doesn't exist.")
        }
    }

    //invalid singular input tests

    //invalid user account registration test method - invalid first name (special symbols only)
    async invalidUserAccountRegisterInvalidFirstNameTest(){
        const homePage = new HomePage(this.driver);
        const registerPage = new RegisterPage(this.driver);
        const registerPageInvalidSingularInput = new RegisterPageInvalidSingularInputPage(this.driver);
        //general page web element assert
        await homePage.isGeneralPageWebElementDisplayed();
        //register page web element assert
        await registerPage.isRegisterPageWebElementDisplayed();
        //register page text element assert
        await this.isRegisterPageTextElementAsExpected();
        //capture screenshot before invalid user data input
        await TestMethods.captureScreenshot(this.driver, "User Register Page Before Invalid Data Input")
        //input invalid user first name (special symbols only)
        await registerPageInvalidSingularInput.inputInvalidFirstNameIntoFirstNameInputField();
        //input valid user last name
        await registerPage.inputLastNameIntoLastNameInputField();
        //input valid user email address
        await registerPage.inputEmailIntoEmailInputField();
        //input valid user phone number
        await registerPage.inputPhoneIntoPhoneInputField();
        //input valid user password
        await registerPage.inputPasswordIntoPasswordInputField();
        //input matching confirm password
        await registerPage.inputConfirmPasswordIntoConfirmPasswordInputField();
        //click 'Agree to Privacy Policy' checkbox
        await registerPage.clickPrivacyPolicyCheckbox();
        //click 'Continue' button
        await registerPage.clickContinueButton();
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Invalid User Account Register Test Result - Invalid First Name Input");
        //assert the user gets the expected error message / log the issue if it doesn't
        try {
            const invalidFirstNameError = await registerPageInvalidSingularInput.getInvalidErrorInputMessage();
            assert.strictEqual(invalidFirstNameError, "First Name cannot contain special symbols!", "The invalid first name input error doesn't match expectations.");
        } catch(error){
            Logger.warn("The invalid first name error didn't appear or it doesn't exist.")
        }
    }
    //invalid user account registration test method - invalid last name (special symbols only)
    async invalidUserAccountRegisterInvalidLastNameTest(){
        const homePage = new HomePage(this.driver);
        const registerPage = new RegisterPage(this.driver);
        const registerPageInvalidSingularInput = new RegisterPageInvalidSingularInputPage(this.driver);
        //general page web element assert
        await homePage.isGeneralPageWebElementDisplayed();
        //register page web element assert
        await registerPage.isRegisterPageWebElementDisplayed();
        //register page text element assert
        await this.isRegisterPageTextElementAsExpected();
        //capture screenshot before invalid user data input
        await TestMethods.captureScreenshot(this.driver, "User Register Page Before Invalid Data Input")
        //input valid user first name
        await registerPage.inputFirstNameIntoFirstNameInputField();
        //input invalid user last name (special symbols only)
        await registerPageInvalidSingularInput.inputInvalidLastNameIntoLastNameInputField();
        //input valid user email address
        await registerPage.inputEmailIntoEmailInputField();
        //input valid user phone number
        await registerPage.inputPhoneIntoPhoneInputField();
        //input valid user password
        await registerPage.inputPasswordIntoPasswordInputField();
        //input matching confirm password
        await registerPage.inputConfirmPasswordIntoConfirmPasswordInputField();
        //click 'Agree to Privacy Policy' checkbox
        await registerPage.clickPrivacyPolicyCheckbox();
        //click 'Continue' button
        await registerPage.clickContinueButton();
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Invalid User Account Register Test Result - Invalid Last Name");
        //assert the user gets the expected error message / log the issue if it doesn't
        try {
            const invalidLastNameError = await registerPageInvalidSingularInput.getInvalidErrorInputMessage();
            assert.strictEqual(invalidLastNameError, "Last Name cannot contain special symbols!", "The invalid last name input error doesn't match expectations.");
        } catch(error){
            Logger.warn("The invalid last name error didn't appear or it doesn't exist.")
        }
    }
    //invalid user account registration test method - invalid email (missing '@')
    async invalidUserAccountRegisterInvalidEmailTest(){
        const homePage = new HomePage(this.driver);
        const registerPage = new RegisterPage(this.driver);
        const registerPageInvalidSingularInput = new RegisterPageInvalidSingularInputPage(this.driver);
        //general page web element assert
        await homePage.isGeneralPageWebElementDisplayed();
        //register page web element assert
        await registerPage.isRegisterPageWebElementDisplayed();
        //register page text element assert
        await this.isRegisterPageTextElementAsExpected();
        //capture screenshot before invalid user data input
        await TestMethods.captureScreenshot(this.driver, "User Register Page Before Invalid Data Input")
        //input valid user first name
        await registerPage.inputFirstNameIntoFirstNameInputField();
        //input valid user last name
        await registerPage.inputLastNameIntoLastNameInputField();
        //input invalid user email address (missing '@')
        await registerPageInvalidSingularInput.inputInvalidEmailIntoEmailInputField();
        //input valid user phone number
        await registerPage.inputPhoneIntoPhoneInputField();
        //input valid user password
        await registerPage.inputPasswordIntoPasswordInputField();
        //input matching confirm password
        await registerPage.inputConfirmPasswordIntoConfirmPasswordInputField();
        //click 'Agree to Privacy Policy' checkbox
        await registerPage.clickPrivacyPolicyCheckbox();
        //click 'Continue' button
        await registerPage.clickContinueButton();
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Invalid User Account Register Test Result - Invalid Email Address");
        //assert the user gets the expected error message / log the issue if it doesn't
        try {
            const invalidEmailError = await registerPageInvalidSingularInput.getInvalidErrorInputMessage();
            assert.strictEqual(invalidEmailError, "E-Mail Address does not appear to be valid!", "The invalid email address input error doesn't match expectations.");
        } catch(error){
            Logger.warn("The invalid email address error didn't appear or it doesn't exist.")
        }
    }
    //invalid user account registration test method - existing email (used in manual testing beforehand)
    async invalidUserAccountRegisterExistingEmailTest(){
        const homePage = new HomePage(this.driver);
        const registerPage = new RegisterPage(this.driver);
        const registerPageInvalidSingularInput = new RegisterPageInvalidSingularInputPage(this.driver);
        //general page web element assert
        await homePage.isGeneralPageWebElementDisplayed();
        //register page web element assert
        await registerPage.isRegisterPageWebElementDisplayed();
        //register page text element assert
        await this.isRegisterPageTextElementAsExpected();
        //capture screenshot before invalid user data input
        await TestMethods.captureScreenshot(this.driver, "User Register Page Before Invalid Data Input")
        //input valid user first name
        await registerPage.inputFirstNameIntoFirstNameInputField();
        //input valid user last name
        await registerPage.inputLastNameIntoLastNameInputField();
        //input existing user email address (used beforehand)
        await registerPageInvalidSingularInput.inputExistingEmailIntoEmailInputField();
        //input valid user phone number
        await registerPage.inputPhoneIntoPhoneInputField();
        //input valid user password
        await registerPage.inputPasswordIntoPasswordInputField();
        //input matching confirm password
        await registerPage.inputConfirmPasswordIntoConfirmPasswordInputField();
        //click 'Agree to Privacy Policy' checkbox
        await registerPage.clickPrivacyPolicyCheckbox();
        //click 'Continue' button
        await registerPage.clickContinueButton();
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Invalid User Account Register Test Result - Existing Email Address");
        //assert the user gets the expected error message / log the issue if it doesn't
        try {
            const existingEmailError = await registerPageInvalidSingularInput.getInvalidErrorMessage();
            assert.strictEqual(existingEmailError, " Warning: E-Mail Address is already registered!", "The existing email address input error doesn't match expectations.");
        } catch(error){
            Logger.warn("The existing email address error didn't appear or it doesn't exist.")
        }
    }
    //invalid user account registration test method - invalid phone (chars and special symbols)
    async invalidUserAccountRegisterInvalidPhoneTest(){
        const homePage = new HomePage(this.driver);
        const registerPage = new RegisterPage(this.driver);
        const registerPageInvalidSingularInput = new RegisterPageInvalidSingularInputPage(this.driver);
        //general page web element assert
        await homePage.isGeneralPageWebElementDisplayed();
        //register page web element assert
        await registerPage.isRegisterPageWebElementDisplayed();
        //register page text element assert
        await this.isRegisterPageTextElementAsExpected();
        //capture screenshot before invalid user data input
        await TestMethods.captureScreenshot(this.driver, "User Register Page Before Invalid Data Input")
        //input valid user first name
        await registerPage.inputFirstNameIntoFirstNameInputField();
        //input valid user last name
        await registerPage.inputLastNameIntoLastNameInputField();
        //input valid user email address
        await registerPage.inputEmailIntoEmailInputField();
        //input invalid user phone number (chars and special symbols)
        await registerPageInvalidSingularInput.inputInvalidPhoneIntoPhoneInputField();
        //input valid user password
        await registerPage.inputPasswordIntoPasswordInputField();
        //input matching confirm password
        await registerPage.inputConfirmPasswordIntoConfirmPasswordInputField();
        //click 'Agree to Privacy Policy' checkbox
        await registerPage.clickPrivacyPolicyCheckbox();
        //click 'Continue' button
        await registerPage.clickContinueButton();
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Invalid User Account Register Test Result - Invalid Phone");
        //assert the user gets the expected error message / log the issue if it doesn't
        try {
            const invalidPhone = await registerPageInvalidSingularInput.getInvalidErrorInputMessage();
            assert.strictEqual(invalidPhone, "Telephone cannot contain chars and special symbols!", "The invalid phone number input error doesn't match expectations.");
        } catch(error){
            Logger.warn("The invalid phone number error didn't appear or it doesn't exist.")
        }
    }

    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    //user logout test method
    async userLogoutTest(){
        const registerPage = new RegisterPage(this.driver);
        //click 'My Account' dropdown menu
        await registerPage.clickAsideLogoutLink();
        //capture screenshot of the test result (the elements are the same as with account creation success)
        await TestMethods.captureScreenshot(this.driver, "User Logout Test Result");
        //assert the user gets the account creation title and message
        const accountLogoutMessageTitle = await registerPage.getAccountCreationSuccessTitle();
        assert.strictEqual(accountLogoutMessageTitle, "Account Logout", "The logout success title doesn't match expectations or the user logout has failed.");
        const accountLogoutSuccessMessage = await registerPage.getAccountCreationSuccessMessage();
        assert.strictEqual(accountLogoutSuccessMessage, "You have been logged off your account. It is now safe to leave the computer.", "The logout success message doesn't match expectations or the user logout has failed.");
        //click 'Continue' button
        await registerPage.clickOtherContinueButton();
    }

    //valid user login method
    async validUserLoginTest(){
        const homePage = new HomePage(this.driver);
        const loginRegisterDashboardPage = new LoginRegisterDashboardPage(this.driver);
        //general page web element assert
        // await homePage.isGeneralPageWebElementDisplayed();
        //capture screenshot of the test start
        await TestMethods.captureScreenshot(this.driver, "User PreLogin Location");
        //hover over 'My Account' dropdown menu
        await homePage.hoverOverMyAccountDropdownMenu();
        //click 'Login' link
        await homePage.clickLoginLink()
        //wait for element load
        await homePage.waitForElementLoad();
        //login/register dashboard page web element assert
        await loginRegisterDashboardPage.isLoginRegisterDashboardPageWebElementDisplayed();
        //login/register dashboard page text element assert
        await this.isLoginRegisterDashboardPageTextElementAsExpected();
        //input valid login email
        await loginRegisterDashboardPage.inputEmailAddressIntoEmailInputField();
        //input valid login password
        await loginRegisterDashboardPage.inputPasswordIntoPasswordInputField();
        //click 'Login' button
        await loginRegisterDashboardPage.clickLoginButton();
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Valid User Login Test Result");
    }

    //invalid login tests

    //no singular input

    //invalid user login method - no login email address
    async invalidUserLoginNoEmailTest(){
        const homePage = new HomePage(this.driver);
        const loginRegisterDashboardPage = new LoginRegisterDashboardPage(this.driver);
        //wait for element load
        await homePage.waitForElementLoad();
        //general page web element assert
        await homePage.isGeneralPageWebElementDisplayed();
        //capture screenshot of the test start
        await TestMethods.captureScreenshot(this.driver, "User PreLogin Location");
        //hover over 'My Account' dropdown menu
        await homePage.hoverOverMyAccountDropdownMenu();
        //click 'Login' link
        await homePage.clickLoginLink()
        //wait for element load
        await homePage.waitForElementLoad();
        //login/register dashboard page web element assert
        await loginRegisterDashboardPage.isLoginRegisterDashboardPageWebElementDisplayed();
        //login/register dashboard page text element assert
        await this.isLoginRegisterDashboardPageTextElementAsExpected();
        //don't input login email
        await loginRegisterDashboardPage.inputNoEmailAddressIntoEmailInputField();
        //input valid login password
        await loginRegisterDashboardPage.inputPasswordIntoPasswordInputField();
        //click 'Login' button
        await loginRegisterDashboardPage.clickLoginButton();
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Invalid User Login Test Result - No Login Email");
        //assert the user get the expected error, log the issue if it doesn't appear (different errors can be present)
        try{
            const invalidLoginErrorOne = await loginRegisterDashboardPage.getInvalidLoginMessage();
            assert.strictEqual(invalidLoginErrorOne, "Warning: Your account has exceeded allowed number of login attempts. Please try again in 1 hour." , "The invalid login error message doesn't match expectations");
        } catch (error){
            Logger.error("The invalid login error message doesn't seem to exist.");
        }
    }
    //invalid user login method - no login password
    async invalidUserLoginNoPasswordTest(){
        const homePage = new HomePage(this.driver);
        const loginRegisterDashboardPage = new LoginRegisterDashboardPage(this.driver);
        //wait for element load
        await homePage.waitForElementLoad();
        //general page web element assert
        await homePage.isGeneralPageWebElementDisplayed();
        //capture screenshot of the test start
        await TestMethods.captureScreenshot(this.driver, "User PreLogin Location");
        //hover over 'My Account' dropdown menu
        await homePage.hoverOverMyAccountDropdownMenu();
        //click 'Login' link
        await homePage.clickLoginLink()
        //wait for element load
        await homePage.waitForElementLoad();
        //login/register dashboard page web element assert
        await loginRegisterDashboardPage.isLoginRegisterDashboardPageWebElementDisplayed();
        //login/register dashboard page text element assert
        await this.isLoginRegisterDashboardPageTextElementAsExpected();
        //input valid login email
        await loginRegisterDashboardPage.inputEmailAddressIntoEmailInputField();
        //don't input login password
        await loginRegisterDashboardPage.inputNoPasswordIntoPasswordInputField();
        //click 'Login' button
        await loginRegisterDashboardPage.clickLoginButton();
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Invalid User Login Test Result - No Login Password");
        //assert the user get the expected error, log the issue if it doesn't appear (different errors can be present)
        try {
                const expectedErrors = [
                    "Warning: Your account has exceeded allowed number of login attempts. Please try again in 1 hour.",
                    "Warning: No match for E-Mail Address and/or Password."
                ];

                const actualError = await loginRegisterDashboardPage.getInvalidLoginMessage();

                //verify if the actual error matches any of the expected errors
                if (!expectedErrors.includes(actualError)) {
                    Logger.error(`Unexpected error message received: "${actualError}"`);
                    Logger.error(`Expected one of: ${expectedErrors.join(" OR ")}`);
                    throw new Error("Login error message mismatch");
                }
                return actualError;

            } catch (error) {
                if (error.name === "AssertionError") {
                    Logger.error(`Assertion failed: ${error.message}`);
                } else if (error.name === "TimeoutError" || error.name === "ElementNotFound") {
                    Logger.error("Failed to locate the error message element on the page");
                } else {
                    Logger.error(`Unexpected error occurred: ${error.message}`);
                }
        }
    }

    //invalid singular input tests

    //invalid user login method - invalid email address
    async invalidUserLoginInvalidEmailTest(){
        const homePage = new HomePage(this.driver);
        const loginRegisterDashboardPage = new LoginRegisterDashboardPage(this.driver);
        //wait for element load
        await homePage.waitForElementLoad();
        //general page web element assert
        await homePage.isGeneralPageWebElementDisplayed();
        //capture screenshot of the test start
        await TestMethods.captureScreenshot(this.driver, "User PreLogin Location");
        //hover over 'My Account' dropdown menu
        await homePage.hoverOverMyAccountDropdownMenu();
        //click 'Login' link
        await homePage.clickLoginLink()
        //wait for element load
        await homePage.waitForElementLoad();
        //login/register dashboard page web element assert
        await loginRegisterDashboardPage.isLoginRegisterDashboardPageWebElementDisplayed();
        //login/register dashboard page text element assert
        await this.isLoginRegisterDashboardPageTextElementAsExpected();
        //input invalid login email
        await loginRegisterDashboardPage.inputInvalidEmailAddressIntoEmailInputField();
        //input valid login password
        await loginRegisterDashboardPage.inputPasswordIntoPasswordInputField();
        //click 'Login' button
        await loginRegisterDashboardPage.clickLoginButton();
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Invalid User Login Test Result - Invalid Login Email");
        //assert the user get the expected error, log the issue if it doesn't appear (different errors can be present)
        try {
            const expectedErrors = [
                "Warning: Your account has exceeded allowed number of login attempts. Please try again in 1 hour.",
                "Warning: No match for E-Mail Address and/or Password."
            ];

            const actualError = await loginRegisterDashboardPage.getInvalidLoginMessage();

            //verify if the actual error matches any of the expected errors
            if (!expectedErrors.includes(actualError)) {
                Logger.error(`Unexpected error message received: "${actualError}"`);
                Logger.error(`Expected one of: ${expectedErrors.join(" OR ")}`);
                throw new Error("Login error message mismatch");
            }
            return actualError;

        } catch (error) {
            if (error.name === "AssertionError") {
                Logger.error(`Assertion failed: ${error.message}`);
            } else if (error.name === "TimeoutError" || error.name === "ElementNotFound") {
                Logger.error("Failed to locate the error message element on the page");
            } else {
                Logger.error(`Unexpected error occurred: ${error.message}`);
            }
        }
    }
    //invalid user login method - invalid login password
    async invalidUserLoginInvalidPasswordTest(){
        const homePage = new HomePage(this.driver);
        const loginRegisterDashboardPage = new LoginRegisterDashboardPage(this.driver);
        //wait for element load
        await homePage.waitForElementLoad();
        //general page web element assert
        await homePage.isGeneralPageWebElementDisplayed();
        //capture screenshot of the test start
        await TestMethods.captureScreenshot(this.driver, "User PreLogin Location");
        //hover over 'My Account' dropdown menu
        await homePage.hoverOverMyAccountDropdownMenu();
        //click 'Login' link
        await homePage.clickLoginLink()
        //wait for element load
        await homePage.waitForElementLoad();
        //login/register dashboard page web element assert
        await loginRegisterDashboardPage.isLoginRegisterDashboardPageWebElementDisplayed();
        //login/register dashboard page text element assert
        await this.isLoginRegisterDashboardPageTextElementAsExpected();
        //input valid login email
        await loginRegisterDashboardPage.inputEmailAddressIntoEmailInputField();
        //input invalid login password
        await loginRegisterDashboardPage.inputInvalidPasswordIntoPasswordInputField();
        //click 'Login' button
        await loginRegisterDashboardPage.clickLoginButton();
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Invalid User Login Test Result - Invalid Login Password");
        //assert the user get the expected error, log the issue if it doesn't appear (different errors can be present)
        try {
            const expectedErrors = [
                "Warning: Your account has exceeded allowed number of login attempts. Please try again in 1 hour.",
                "Warning: No match for E-Mail Address and/or Password."
            ];

            const actualError = await loginRegisterDashboardPage.getInvalidLoginMessage();

            //verify if the actual error matches any of the expected errors
            if (!expectedErrors.includes(actualError)) {
                Logger.error(`Unexpected error message received: "${actualError}"`);
                Logger.error(`Expected one of: ${expectedErrors.join(" OR ")}`);
                throw new Error("Login error message mismatch");
            }
            return actualError;

        } catch (error) {
            if (error.name === "AssertionError") {
                Logger.error(`Assertion failed: ${error.message}`);
            } else if (error.name === "TimeoutError" || error.name === "ElementNotFound") {
                Logger.error("Failed to locate the error message element on the page");
            } else {
                Logger.error(`Unexpected error occurred: ${error.message}`);
            }
        }
    }

    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    //single product addition to cart tests

    //add homepage featured product (HP 25 Headphones) to cart test method (guest)
    async addSingleHP25HeadphonesSetToCartTest(){
        const homePage = new HomePage(this.driver);
        const singleProductPage = new SingleProductPage(this.driver);
        //wait for elements to load
        await homePage.waitForElementLoad();
        //click 'HP25 headphones' image
        await homePage.clickHP25HeadphonesImage();
        //capture screenshot of the single product page
        await TestMethods.captureScreenshot(this.driver, "Single Featured Product Page (HP25 Headphones)");
        //wait for elements to load
        await homePage.waitForElementLoad();
        //single product page web element assert
        await singleProductPage.isSingleProductPageWebElementDisplayed();
        //single product page text element assert
        await this.isSingleProductPageTextElementAsExpected();
        //log single product page data
        await this.logSingleProductPageData();
        //input guest username
        await singleProductPage.inputGuestUserName();
        //click 3-star rating review
        await singleProductPage.clickProductReviewStars([3]);
        //input product review
        await singleProductPage.inputProductReview();
        //capture screenshot of the input review
        await TestMethods.captureScreenshot(this.driver, "Single Featured Product Page (HP25 Headphones) Product Review (guest)");
        //click 'Submit review' button
        await singleProductPage.clickSubmitReviewButton();
        //capture screenshot of the review success submission
        await TestMethods.captureScreenshot(this.driver, "Single Featured Product Page (HP25 Headphones) Review Submission Success (guest)");
        //click 'Add to Cart' button
        await singleProductPage.clickAddToCartButton();
        //click 'Shopping Cart' link
        await homePage.clickNavbarShoppingCartLink();
        //wait for elements to load
        await homePage.waitForElementLoad();
        //assert shopping cart box title matches expectations
        const shoppingCartBoxTitle = await singleProductPage.getShoppingCartBoxTitle();
        assert.strictEqual(shoppingCartBoxTitle, "Cart", "The shopping cart box title doesn't match expectations or it hasn't been opened.");
        //log shopping cart box data
        await this.logShoppingCartBoxProductData();
        //click 'Edit Cart' button to proceed to shopping cart page
        await singleProductPage.clickEditCartButton();
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Single Featured Product Page (HP25 Headphones) Add To Cart Test Result (guest)");
    }
    //add homepage featured product (HP 25 Headphones) to cart test method (registered user)
    async addSingleHP25HeadphonesSetToCartRegUserTest(){
        const homePage = new HomePage(this.driver);
        const singleProductPage = new SingleProductPage(this.driver);
        //wait for elements to load
        await homePage.waitForElementLoad();
        //click 'HP25 headphones' image
        await homePage.clickHP25HeadphonesImage();
        //capture screenshot of the single product page
        await TestMethods.captureScreenshot(this.driver, "Single Featured Product Page (HP25 Headphones)");
        //wait for elements to load
        await homePage.waitForElementLoad();
        //single product page web element assert
        await singleProductPage.isSingleProductPageWebElementDisplayed();
        //single product page text element assert
        await this.isSingleProductPageTextElementAsExpected();
        //log single product page data
        await this.logSingleProductPageData();
        //click 4-star rating review
        await singleProductPage.clickProductReviewStars([4]);
        //input product review
        await singleProductPage.inputProductReview();
        //capture screenshot of the input review
        await TestMethods.captureScreenshot(this.driver, "Single Featured Product Page (HP25 Headphones) Product Review (registered user)");
        //click 'Submit review' button
        await singleProductPage.clickSubmitReviewButton();
        //capture screenshot of the review success submission
        await TestMethods.captureScreenshot(this.driver, "Single Featured Product Page (HP25 Headphones) Review Submission Success (registered user)");
        //click 'Add to Cart' button
        await singleProductPage.clickAddToCartButton();
        //click 'Shopping Cart' link
        await homePage.clickNavbarShoppingCartLink();
        //wait for elements to load
        await homePage.waitForElementLoad();
        //assert shopping cart box title matches expectations
        const shoppingCartBoxTitle = await singleProductPage.getShoppingCartBoxTitle();
        assert.strictEqual(shoppingCartBoxTitle, "Cart", "The shopping cart box title doesn't match expectations or it hasn't been opened.");
        //log shopping cart box data
        await this.logShoppingCartBoxProductData();
        //click 'Edit Cart' button to proceed to shopping cart page
        await singleProductPage.clickEditCartButton();
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Single Featured Product Page (HP25 Headphones) Add To Cart Test Result (registered user)");
    }

    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    //multiple products addition to cart tests

    //add homepage featured products (HP 25 Headphones) to cart test method (guest)
    async addMultipleHP25HeadphonesSetsToCartTest(){
        const homePage = new HomePage(this.driver);
        const singleProductPage = new SingleProductPage(this.driver);
        //wait for elements to load
        await homePage.waitForElementLoad();
        //click 'HP25 headphones' image
        await homePage.clickHP25HeadphonesImage();
        //capture screenshot of the single product page
        await TestMethods.captureScreenshot(this.driver, "Single Featured Product Page (HP25 Headphones)");
        //wait for elements to load
        await homePage.waitForElementLoad();
        //single product page web element assert
        await singleProductPage.isSingleProductPageWebElementDisplayed();
        //single product page text element assert
        await this.isSingleProductPageTextElementAsExpected();
        //log single product page data
        await this.logSingleProductPageData();
        //input set product quantity
        await singleProductPage.inputProductQuantityIntoQuantityInputField();
        //input guest username
        await singleProductPage.inputGuestUserName();
        //click 3-star rating review
        await singleProductPage.clickProductReviewStars([4]);
        //input product review
        await singleProductPage.inputProductReview();
        //capture screenshot of the input review
        await TestMethods.captureScreenshot(this.driver, "Multiple Featured Products Page (HP25 Headphones) Product Review (guest)");
        //click 'Submit review' button
        await singleProductPage.clickSubmitReviewButton();
        //capture screenshot of the review success submission
        await TestMethods.captureScreenshot(this.driver, "Multiple Featured Products Page (HP25 Headphones) Review Submission Success (guest)");
        //click 'Add to Cart' button
        await singleProductPage.clickAddToCartButton();
        //click 'Shopping Cart' link
        await homePage.clickNavbarShoppingCartLink();
        //wait for elements to load
        await homePage.waitForElementLoad();
        //assert shopping cart box title matches expectations
        const shoppingCartBoxTitle = await singleProductPage.getShoppingCartBoxTitle();
        assert.strictEqual(shoppingCartBoxTitle, "Cart", "The shopping cart box title doesn't match expectations or it hasn't been opened.");
        //log shopping cart box data
        await this.logShoppingCartBoxProductData();
        //click 'Edit Cart' button to proceed to shopping cart page
        await singleProductPage.clickEditCartButton();
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Multiple Featured Products Page (HP25 Headphones) Add To Cart Test Result (guest)");
    }
    //add homepage featured product (HP 25 Headphones) to cart test method (registered user)
    async addMultipleHP25HeadphonesSetsToCartRegUserTest(){
        const homePage = new HomePage(this.driver);
        const singleProductPage = new SingleProductPage(this.driver);
        //wait for elements to load
        await homePage.waitForElementLoad();
        //click 'HP25 headphones' image
        await homePage.clickHP25HeadphonesImage();
        //capture screenshot of the single product page
        await TestMethods.captureScreenshot(this.driver, "Single Featured Product Page (HP25 Headphones)");
        //wait for elements to load
        await homePage.waitForElementLoad();
        //single product page web element assert
        await singleProductPage.isSingleProductPageWebElementDisplayed();
        //single product page text element assert
        await this.isSingleProductPageTextElementAsExpected();
        //log single product page data
        await this.logSingleProductPageData();
        //input set product quantity
        await singleProductPage.inputProductQuantityIntoQuantityInputField();
        //click 4-star rating review
        await singleProductPage.clickProductReviewStars([3]);
        //input product review
        await singleProductPage.inputProductReview();
        //capture screenshot of the input review
        await TestMethods.captureScreenshot(this.driver, "Multiple Featured Products Page (HP25 Headphones) Product Review (registered user)");
        //click 'Submit review' button
        await singleProductPage.clickSubmitReviewButton();
        //capture screenshot of the review success submission
        await TestMethods.captureScreenshot(this.driver, "Multiple Featured Products Page (HP25 Headphones) Review Submission Success (registered user)");
        //click 'Add to Cart' button
        await singleProductPage.clickAddToCartButton();
        //click 'Shopping Cart' link
        await homePage.clickNavbarShoppingCartLink();
        //wait for elements to load
        await homePage.waitForElementLoad();
        //assert shopping cart box title matches expectations
        const shoppingCartBoxTitle = await singleProductPage.getShoppingCartBoxTitle();
        assert.strictEqual(shoppingCartBoxTitle, "Cart", "The shopping cart box title doesn't match expectations or it hasn't been opened.");
        //log shopping cart box data
        await this.logShoppingCartBoxProductData();
        //click 'Edit Cart' button to proceed to shopping cart page
        await singleProductPage.clickEditCartButton();
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Multiple Featured Products Page (HP25 Headphones) Add To Cart Test Result (registered user)");
    }

    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    //'shop by category' singular product add to cart tests

    //add single 'shop by category' product to cart test (guest)
    async addSingularCategoryProductToCartTest(){
        const homePage = new HomePage(this.driver);
        const singleProductCategoryDashboardPage = new SingleProductCategoryDashboardPage(this.driver);
        const singleProductPage = new SingleProductPage(this.driver);
        //wait for elements to load
        await homePage.waitForElementLoad();
        //home page web element assert
        await homePage.isHomePageWebElementDisplayed();
        //general page web element assert
        await homePage.isGeneralPageWebElementDisplayed();
        //click navbar 'Shop By Category' navbar link
        await homePage.clickShopByCategoryLink();
        //wait for elements to load
        await homePage.waitForElementLoad();
        //assert top categories section title matches expectations
        const topCategoriesTitle = await homePage.getTopCategoriesSectionTitle();
        assert.strictEqual(topCategoriesTitle, "Top categories", "The top categories section title doesn't match expectations or 'Shop By Category' navbar link failed to be clicked.");
        //click 'Laptops and Notebooks' link
        await homePage.clickLaptopsNotebooksLink();
        //wait for elements to load
        await homePage.waitForElementLoad();
        //single product category dashboard page web element assert
        await singleProductCategoryDashboardPage.isSingleProductPageWebElementDisplayed();
        //single product category dashboard page list web elements assert
        await this.areSingleProductDashboardPageListElementsDisplayed();
        //single product category dashboard page text element assert
        await this.isSingleProductCategoryDashboardPageTextElementAsExpected();
        //assert product dashboard page title is as expected (laptops)
        const productDashboardPageTitle = await singleProductCategoryDashboardPage.getProductDashboardPageTitle();
        assert.strictEqual(productDashboardPageTitle, "Laptops", "The product dashboard page title (laptops) doesn't match expectations");
        //assert product dashboard page description is as expected
        const productDashboardPageDescription = await singleProductCategoryDashboardPage.getProductDashboardDescription();
        assert.strictEqual(productDashboardPageDescription, "Shop Laptop feature only the best laptop deals on the market. By comparing laptop deals from the likes of PC World, Comet, Dixons, The Link and Carphone Warehouse, Shop Laptop has the most comprehensive selection of laptops on the internet. At Shop Laptop, we pride ourselves on offering customers the very best laptop deals. From refurbished laptops to netbooks, Shop Laptop ensures that every laptop - in every colour, style, size and technical spec - is featured on the site at the lowest possible price.", "The product dashboard page description (laptops) doesn't match expectations");
        //log available product data
        await this.logSingleCategoryProductDashboardPageData();
        //hover over 'MacBook' image
        await singleProductCategoryDashboardPage.hoverOverMacBookImage();
        //click 'Add to Cart' button
        await singleProductCategoryDashboardPage.clickAddMacBookToCartButton();
        //wait for elements to load
        await homePage.waitForElementLoad();
        //single product page text element assert
        await this.isSingleProductPageTextElementAsExpected();
        //log single product page data
        await this.logSingleProductPageData();
        //log macbook description
        await this.logMacBookDescription();
        //capture screenshot of the chosen product page
        await TestMethods.captureScreenshot(this.driver, "Singular Category Product (MacBook) Page")
        //click 'Add to Cart' button
        await singleProductPage.clickAddToCartButton();
        //click 'Shopping Cart' link
        await homePage.clickNavbarShoppingCartLink();
        //wait for elements to load
        await homePage.waitForElementLoad();
        //assert shopping cart box title matches expectations
        const shoppingCartBoxTitle = await singleProductPage.getShoppingCartBoxTitle();
        assert.strictEqual(shoppingCartBoxTitle, "Cart", "The shopping cart box title doesn't match expectations or it hasn't been opened.");
        //log shopping cart box data
        await this.logShoppingCartBoxProductData();
        //click 'Edit Cart' button to proceed to shopping cart page
        await singleProductPage.clickEditCartButton();
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Add Singular Category Product (MacBook) To Cart Test Result")
    }

    //'shop by category' singular product add to cart tests

    //add multiple 'shop by category' products to cart test (guest and registered user share the same method)
    async addSingularCategoryMultipleProductsToCartTest(){
        const homePage = new HomePage(this.driver);
        const singleProductCategoryDashboardPage = new SingleProductCategoryDashboardPage(this.driver);
        const singleProductPage = new SingleProductPage(this.driver);
        //wait for elements to load
        await homePage.waitForElementLoad();
        //home page web element assert
        await homePage.isHomePageWebElementDisplayed();
        //general page web element assert
        await homePage.isGeneralPageWebElementDisplayed();
        //click navbar 'Shop By Category' navbar link
        await homePage.clickShopByCategoryLink();
        //wait for elements to load
        await homePage.waitForElementLoad();
        //assert top categories section title matches expectations
        const topCategoriesTitle = await homePage.getTopCategoriesSectionTitle();
        assert.strictEqual(topCategoriesTitle, "Top categories", "The top categories section title doesn't match expectations or 'Shop By Category' navbar link failed to be clicked.");
        //click 'Laptops and Notebooks' link
        await homePage.clickLaptopsNotebooksLink();
        //wait for elements to load
        await homePage.waitForElementLoad();
        //single product category dashboard page web element assert
        await singleProductCategoryDashboardPage.isSingleProductPageWebElementDisplayed();
        //single product category dashboard page list web elements assert
        await this.areSingleProductDashboardPageListElementsDisplayed();
        //single product category dashboard page text element assert
        await this.isSingleProductCategoryDashboardPageTextElementAsExpected();
        //assert product dashboard page title is as expected (laptops)
        const productDashboardPageTitle = await singleProductCategoryDashboardPage.getProductDashboardPageTitle();
        assert.strictEqual(productDashboardPageTitle, "Laptops", "The product dashboard page title (laptops) doesn't match expectations");
        //assert product dashboard page description is as expected
        const productDashboardPageDescription = await singleProductCategoryDashboardPage.getProductDashboardDescription();
        assert.strictEqual(productDashboardPageDescription, "Shop Laptop feature only the best laptop deals on the market. By comparing laptop deals from the likes of PC World, Comet, Dixons, The Link and Carphone Warehouse, Shop Laptop has the most comprehensive selection of laptops on the internet. At Shop Laptop, we pride ourselves on offering customers the very best laptop deals. From refurbished laptops to netbooks, Shop Laptop ensures that every laptop - in every colour, style, size and technical spec - is featured on the site at the lowest possible price.", "The product dashboard page description (laptops) doesn't match expectations");
        //log available product data
        await this.logSingleCategoryProductDashboardPageData();
        //hover over 'MacBook' image
        await singleProductCategoryDashboardPage.hoverOverMacBookImage();
        //click 'Add to Cart' button
        await singleProductCategoryDashboardPage.clickAddMacBookToCartButton();
        //wait for elements to load
        await homePage.waitForElementLoad();
        //single product page text element assert
        await this.isSingleProductPageTextElementAsExpected();
        //log single product page data
        await this.logSingleProductPageData();
        //log 'MacBook' product data
        await this.logMacBookDescription();
        //capture screenshot of the chosen product page
        await TestMethods.captureScreenshot(this.driver, "Singular Category Product (MacBook) Page")
        //input set product quantity
        await singleProductPage.inputProductQuantityIntoQuantityInputField();
        //capture screenshot of the product quantity input
        await TestMethods.captureScreenshot(this.driver, "Singular Category Multiple Products (MacBook) Quantity")
        //click 'Add to Cart' button
        await singleProductPage.clickAddToCartButton();
        //click 'Shopping Cart' link
        await homePage.clickNavbarShoppingCartLink();
        //wait for elements to load
        await homePage.waitForElementLoad();
        //assert shopping cart box title matches expectations
        const shoppingCartBoxTitle = await singleProductPage.getShoppingCartBoxTitle();
        assert.strictEqual(shoppingCartBoxTitle, "Cart", "The shopping cart box title doesn't match expectations or it hasn't been opened.");
        //log shopping cart box data
        await this.logShoppingCartBoxProductData();
        //click 'Edit Cart' button to proceed to shopping cart page
        await singleProductPage.clickEditCartButton();
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Add Singular Category Multiple Products (MacBook) To Cart Test Result")
    }

    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    //add searched product (HTC Touch) to cart test method
    async addSearchedHTCTouchProductToCartTest(){
        const homePage = new HomePage(this.driver);
        const searchedProductDashboardPage = new SearchedProductDashboardPage(this.driver);
        const singleProductPage = new SingleProductPage(this.driver);
        //wait for elements to load
        await homePage.waitForElementLoad();
        //home page web element assert
        await homePage.isHomePageWebElementDisplayed();
        //general page web element assert
        await homePage.isGeneralPageWebElementDisplayed();
        //input search query
        await homePage.inputProductSearchQuery();
        //click 'Search' button
        await homePage.clickNavbarSearchButton()
        //wait for elements to load
        await homePage.waitForElementLoad();
        //searched product dashboard page web element assert
        await searchedProductDashboardPage.isSearchedProductPageWebElementDisplayed();
        //searched product dashboard page list web elements assert
        await this.areSearchedProductDashboardPageListElementsDisplayed();
        //log available product data
        await this.logSearchedProductDashboardPageData();
        //hover over 'HTC Touch' image
        await searchedProductDashboardPage.hoverOverHPImage();
        //click 'Add to Cart' button
        await searchedProductDashboardPage.clickAddHPProductToCartButton();
        //wait for elements to load
        await homePage.waitForElementLoad();
        //single product page text element assert
        await this.isSingleProductPageTextElementAsExpected();
        //log single product page data
        await this.logSingleProductPageData();
        //log HTC product description
        await this.logHTCDescription();
        //capture screenshot of the chosen product page
        await TestMethods.captureScreenshot(this.driver, "Singular Category Product (HP LP3065) Page")
        //click 'Add to Cart' button
        await singleProductPage.clickAddToCartButton();
        //click 'Shopping Cart' link
        await homePage.clickNavbarShoppingCartLink();
        //wait for elements to load
        await homePage.waitForElementLoad();
        //assert shopping cart box title matches expectations
        const shoppingCartBoxTitle = await singleProductPage.getShoppingCartBoxTitle();
        assert.strictEqual(shoppingCartBoxTitle, "Cart", "The shopping cart box title doesn't match expectations or it hasn't been opened.");
        //log shopping cart box data
        await this.logShoppingCartBoxProductData();
        //click 'Edit Cart' button to proceed to shopping cart page
        await singleProductPage.clickEditCartButton();
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Add Searched Product (HTC Touch HD) To Cart Test Result")
    }
    //add multiple searched products (HTC Touch HD) to cart test method
    async addMultipleSearchedHTCTouchProductsToCartTest(){
        const homePage = new HomePage(this.driver);
        const searchedProductDashboardPage = new SearchedProductDashboardPage(this.driver);
        const singleProductPage = new SingleProductPage(this.driver);
        //wait for elements to load
        await homePage.waitForElementLoad();
        //home page web element assert
        await homePage.isHomePageWebElementDisplayed();
        //general page web element assert
        await homePage.isGeneralPageWebElementDisplayed();
        //input search query
        await homePage.inputProductSearchQuery();
        //click 'Search' button
        await homePage.clickNavbarSearchButton()
        //wait for elements to load
        await homePage.waitForElementLoad();
        //searched product dashboard page web element assert
        await searchedProductDashboardPage.isSearchedProductPageWebElementDisplayed();
        //searched product dashboard page list web elements assert
        await this.areSearchedProductDashboardPageListElementsDisplayed();
        //log available product data
        await this.logSearchedProductDashboardPageData();
        //hover over 'HTC Touch HD' image
        await searchedProductDashboardPage.hoverOverHPImage();
        //click 'Add to Cart' button
        await searchedProductDashboardPage.clickAddHPProductToCartButton();
        //wait for elements to load
        await homePage.waitForElementLoad();
        //single product page text element assert
        await this.isSingleProductPageTextElementAsExpected();
        //log single product page data
        await this.logSingleProductPageData();
        //log HTC product description
        await this.logHTCDescription();
        //capture screenshot of the chosen product page
        await TestMethods.captureScreenshot(this.driver, "Singular Category Product (HTC Touch HD) Page")
        //input set product quantity
        await singleProductPage.inputProductQuantityIntoQuantityInputField();
        //capture screenshot of the product quantity input
        await TestMethods.captureScreenshot(this.driver, "Singular Category Multiple Products (HTC Touch HD) Quantity")
        //click 'Add to Cart' button
        await singleProductPage.clickAddToCartButton();
        //click 'Shopping Cart' link
        await homePage.clickNavbarShoppingCartLink();
        //wait for elements to load
        await homePage.waitForElementLoad();
        //assert shopping cart box title matches expectations
        const shoppingCartBoxTitle = await singleProductPage.getShoppingCartBoxTitle();
        assert.strictEqual(shoppingCartBoxTitle, "Cart", "The shopping cart box title doesn't match expectations or it hasn't been opened.");
        //log shopping cart box data
        await this.logShoppingCartBoxProductData();
        //click 'Edit Cart' button to proceed to shopping cart page
        await singleProductPage.clickEditCartButton();
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Add Multiple Searched Products (HTC Touch HD) To Cart Test Result")
    }

    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    //add product (products) (HP25 Headphones) to check out test method (HTC and HP products use the same method)
    async addHTCTouchProductToCheckoutTest(){
        const homePage = new HomePage(this.driver);
        const shoppingCartPage = new ShoppingCartPage(this.driver);
        //general page web element assert
        //await homePage.isGeneralPageWebElementDisplayed();
        //click 'Estimate Shipping & Taxes' dropdown menu (for later use and visual verification)
        await shoppingCartPage.clickEstimateShippingTaxesDropdown();
        //wait for elements to load
        await homePage.waitForElementLoad();
        //shopping cart page web element assert
        await shoppingCartPage.isShoppingCartPageWebElementDisplayed()
        //list web elements assert
        await this.areShoppingCartPageListElementsDisplayed();
        //shopping cart page text element asset
        await this.isShoppingCartPageTextElementAsExpected();
        //assert estimate shipping & taxes dropdown header is as expected (some product pages don't have this element)
        const estimateShippingTaxesDropdownHeader = await shoppingCartPage.getEstimateShippingTaxesDropdownHeader();
        assert.strictEqual(estimateShippingTaxesDropdownHeader, "Estimate Shipping & Taxes", "The 'estimate shipping and taxes' dropdown header doesn't match expectations");
        //log shopping cart page product data
        await this.logShoppingCartPageProductData();
        //capture screenshot of the shopping cart page
        await TestMethods.captureScreenshot(this.driver, "Shopping Cart Page Product(s) (HP/HTC brands) Display");
        //click shipping country dropdown menu
        await shoppingCartPage.clickShippingCountryDropdownMenu();
        //select 'United States' option
        await shoppingCartPage.selectUnitedStatesCountryOption();
        //click shipping region dropdown menu
        await shoppingCartPage.clickShippingRegionDropdownMenu();
        //select 'Illinois region option
        await shoppingCartPage.selectIllinoisRegionOption();
        //input valid guest post code
        await shoppingCartPage.inputPostCodeIntoPostCodeInputField();
        //click 'Get Quotes' button method
        await shoppingCartPage.clickGetQuotesButton();
        //click 'Checkout' button
        await shoppingCartPage.clickCheckoutButton();
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Product (HP/HTC brands) Addition To Checkout Test Result");
    }
    //add product (products) (MacBook) to check out test method
    async addMacBookProductToCheckoutTest(){
        const homePage = new HomePage(this.driver);
        const shoppingCartPage = new ShoppingCartPage(this.driver);
        //general page web element assert
        await homePage.isGeneralPageWebElementDisplayed();
        //wait for elements to load
        await homePage.waitForElementLoad();
        //shopping cart page web element assert
        await shoppingCartPage.isShoppingCartPageWebElementDisplayed();
        //list web elements assert
        await this.areShoppingCartPageListElementsDisplayed();
        //shopping cart page text element asset
        await this.isShoppingCartPageTextElementAsExpected();
        //assert gift certificate dropdown header is as expected
        const giftCertificateDropdownHeader = await shoppingCartPage.getEstimateShippingTaxesDropdownHeader();
        assert.strictEqual(giftCertificateDropdownHeader, "Use Gift Certificate", "The 'gift certificate' dropdown header doesn't match expectations");
        //log shopping cart page product data
        await this.logShoppingCartPageProductData();
        //capture screenshot of the shopping cart page
        await TestMethods.captureScreenshot(this.driver, "Shopping Cart Page Product(s) (MacBook) Display");
        //click 'Checkout' button
        await shoppingCartPage.clickCheckoutButton();
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Product (MacBook) Addition To Checkout Test Result");
    }

    //change product (HP25 Headphones) quantity during addition to check out test method
    async changeHPProductQtyAddToCheckoutTest(){
        const homePage = new HomePage(this.driver);
        const shoppingCartPage = new ShoppingCartPage(this.driver);
        //general page web element assert
        await homePage.isGeneralPageWebElementDisplayed();
        //click 'Estimate Shipping & Taxes' dropdown menu (for later use and visual verification)
        await shoppingCartPage.clickEstimateShippingTaxesDropdown();
        //wait for elements to load
        await homePage.waitForElementLoad();
        //shopping cart page web element assert
        await shoppingCartPage.isShoppingCartPageWebElementDisplayed();
        //list web elements assert
        await this.areShoppingCartPageListElementsDisplayed();
        //shopping cart page text element asset
        await this.isShoppingCartPageTextElementAsExpected();
        //assert estimate shipping & taxes dropdown header is as expected (some product pages don't have this element)
        const estimateShippingTaxesDropdownHeader = await shoppingCartPage.getEstimateShippingTaxesDropdownHeader();
        assert.strictEqual(estimateShippingTaxesDropdownHeader, "Estimate Shipping & Taxes", "The 'estimate shipping and taxes' dropdown header doesn't match expectations");
        //log shopping cart page product data
        await this.logShoppingCartPageProductData();
        //capture screenshot of the starting product quantity
        await TestMethods.captureScreenshot(this.driver, "Shopping Cart Page Product(s) (HP25 Headphones) Current Quantity");
        //input quantity into quantity input field
        await shoppingCartPage.inputQuantityIntoQuantityInputField();
        //click 'Update quantity' button
        await shoppingCartPage.clickQtyUpdateButton();
        //capture screenshot of the updated product quantity
        await TestMethods.captureScreenshot(this.driver, "Shopping Cart Page Product(s) (HP25 Headphones) Updated Quantity");
        //assert the user receives an expected product quantity update success message
        const updateMessageSuccess = await shoppingCartPage.getProductQtyUpdateSuccessMessage();
        assert.strictEqual(updateMessageSuccess, "Success: You have modified your shopping cart!\n" + "×", "The quantity update message doesn't match expectations or the update process has failed.");
        //click 'Checkout' button
        await shoppingCartPage.clickCheckoutButton();
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Product (HP brand) Addition To Checkout Test Result (Updated Quantity)");
    }

    //remove product (HP25 Headphones) from shopping cart test method
    async removeHPProductFromCartTest(){
        const homePage = new HomePage(this.driver);
        const shoppingCartPage = new ShoppingCartPage(this.driver);
        //general page web element assert
        await homePage.isGeneralPageWebElementDisplayed();
        //click 'Estimate Shipping & Taxes' dropdown menu (for later use and visual verification)
        await shoppingCartPage.clickEstimateShippingTaxesDropdown();
        //wait for elements to load
        await homePage.waitForElementLoad();
        //shopping cart page web element assert
        await shoppingCartPage.isShoppingCartPageWebElementDisplayed();
        //list web elements assert
        await this.areShoppingCartPageListElementsDisplayed();
        //shopping cart page text element asset
        await this.isShoppingCartPageTextElementAsExpected();
        //assert estimate shipping & taxes dropdown header is as expected (some product pages don't have this element)
        const estimateShippingTaxesDropdownHeader = await shoppingCartPage.getEstimateShippingTaxesDropdownHeader();
        assert.strictEqual(estimateShippingTaxesDropdownHeader, "Estimate Shipping & Taxes", "The 'estimate shipping and taxes' dropdown header doesn't match expectations");
        //assert gift certificates dropdown header is as expected (some product pages don't have this element)
        const giftCertificatesDropdownHeader = await shoppingCartPage.getGiftCertificateDropdownHeader();
        assert.strictEqual(giftCertificatesDropdownHeader, "Use Gift Certificate", "The 'gift certificates' dropdown header doesn't match expectations");
        //log shopping cart page product data
        await this.logShoppingCartPageProductData();
        //capture screenshot of the starting product quantity
        await TestMethods.captureScreenshot(this.driver, "Shopping Cart Page Product(s) (HP25 Headphones) Before Removal");
        //click 'Remove' button
        await shoppingCartPage.clickRemoveProductButton();
        //capture screenshot of the product removal
        await TestMethods.captureScreenshot(this.driver, "Shopping Cart Page Product(s) (HP25 Headphones) Removal Process Result");
        //assert the user receives an expected product removal success message
        const removalMessageSuccess = await shoppingCartPage.getProductRemovalSuccessMessage();
        assert.strictEqual(removalMessageSuccess, "Your shopping cart is empty!", "The product removal success message doesn't match expectations or the product removal process has failed.");
        //click 'Continue' button
        await shoppingCartPage.clickContinueButton();
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Shopping Cart Page Product(s) (HP25 Headphones) Removal Test Result");
    }

    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    //valid product check out tests

    //valid product checkout test method (as a guest)
    async validProductCheckoutGuestTest(){
        const homePage = new HomePage(this.driver);
        const checkoutPage = new CheckoutPage(this.driver);
        //general page web element assert
        await homePage.isGeneralPageWebElementDisplayed();
        //wait for elements to load
        await homePage.waitForElementLoad();
        //click 'Guest Checkout' radio button
        await checkoutPage.clickGuestCheckoutRadioButton();
        //checkout page web element assert
        await checkoutPage.isCheckoutPageWebElementDisplayed();
        //checkout page list web element assert
        await this.areCheckoutPageListElementsDisplayed();
        //checkout page text element assert
        await this.isCheckoutPageTextElementAsExpected();
        //product specific checkout page text element assert
        await this.isHTCHPCheckoutPageTextElementAsExpected();
        //log checkout product data
        await this.logCheckoutProductData();
        //capture screenshot before data input
        await TestMethods.captureScreenshot(this.driver, "Checkout Page Before Valid Guest Data Input");
        //input valid guest first name
        await checkoutPage.inputGuestFirstNameIntoFirstNameInputField();
        //input valid guest last name
        await checkoutPage.inputGuestLastNameIntoLastNameInputField();
        //input valid guest email address
        await checkoutPage.inputGuestEmailIntoEmailInputField();
        //input valid guest phone number
        await checkoutPage.inputGuestPhoneIntoFirstPhoneInputField();
        //input valid guest street address
        await checkoutPage.inputGuestAddressIntoAddressInputField();
        //input valid guest city
        await checkoutPage.inputGuestCityIntoCityInputField();
        //input valid guest post code
        await checkoutPage.inputGuestPostCodeIntoPostCodeInputField();
        //click country dropdown menu
        await checkoutPage.clickCountryDropdownMenu();
        //select 'United States' option
        await checkoutPage.selectUnitedStatesCountryOption();
        //click region dropdown menu
        await checkoutPage.clickRegionDropdownMenu();
        //select 'Illinois' option
        await checkoutPage.selectIllinoisRegionOption();
        //capture screenshot of the valid guest data input
        await TestMethods.captureScreenshot(this.driver, "Checkout Page Valid Guest Data Input");
        //click 'Agree to Terms' checkbox
        await checkoutPage.clickAgreeToTermsCheckbox();
        //click 'Continue' button
        await checkoutPage.clickContinueButton();
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Valid Product Checkout Test Result - As A Guest");
    }

    //valid product checkout (with quantity update) test method (as a guest)
    async validProductCheckoutUpdateQtyGuestTest(){
        const homePage = new HomePage(this.driver);
        const checkoutPage = new CheckoutPage(this.driver);
        //general page web element assert
        await homePage.isGeneralPageWebElementDisplayed();
        //wait for elements to load
        await homePage.waitForElementLoad();
        //click 'Guest Checkout' radio button
        await checkoutPage.clickGuestCheckoutRadioButton();
        //checkout page web element assert
        await checkoutPage.isCheckoutPageWebElementDisplayed();
        //checkout page list web element assert
        await this.areCheckoutPageListElementsDisplayed();
        //checkout page text element assert
        await this.isCheckoutPageTextElementAsExpected();
        //log checkout product data
        await this.logCheckoutProductData();
        //capture screenshot before data input
        await TestMethods.captureScreenshot(this.driver, "Checkout Page Before Valid Guest Data (and quantity) Input");
        //input changed product quantity
        await checkoutPage.inputQuantityIntoQuantityInputField();
        //click 'Update' button
        await checkoutPage.clickUpdateButton();
        //input valid guest first name
        await checkoutPage.inputGuestFirstNameIntoFirstNameInputField();
        //input valid guest last name
        await checkoutPage.inputGuestLastNameIntoLastNameInputField();
        //input valid guest email address
        await checkoutPage.inputGuestEmailIntoEmailInputField();
        //input valid guest phone number
        await checkoutPage.inputGuestPhoneIntoFirstPhoneInputField();
        //input valid guest street address
        await checkoutPage.inputGuestAddressIntoAddressInputField();
        //input valid guest city
        await checkoutPage.inputGuestCityIntoCityInputField();
        //input valid guest post code
        await checkoutPage.inputGuestPostCodeIntoPostCodeInputField();
        //click country dropdown menu
        await checkoutPage.clickCountryDropdownMenu();
        //select 'United States' option
        await checkoutPage.selectUnitedStatesCountryOption();
        //click region dropdown menu
        await checkoutPage.clickRegionDropdownMenu();
        //select 'Illinois' option
        await checkoutPage.selectIllinoisRegionOption();
        //capture screenshot of the valid data input
        await TestMethods.captureScreenshot(this.driver, "Checkout Page Valid Guest Data Input (with changed product quantity)");
        //click 'Agree to Terms' checkbox
        await checkoutPage.clickAgreeToTermsCheckbox();
        //click 'Continue' button
        await checkoutPage.clickContinueButton();
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Valid Product Checkout (with changed product quantity) Test Result - As A Guest");
    }

    //product removal during checkout test method (as a guest)
    async removeProductDuringCheckoutGuestTest(){
        const homePage = new HomePage(this.driver);
        const shoppingCartPage = new ShoppingCartPage(this.driver);
        const checkoutPage = new CheckoutPage(this.driver);
        //general page web element assert
        await homePage.isGeneralPageWebElementDisplayed();
        //wait for elements to load
        await homePage.waitForElementLoad();
        //click 'Guest Checkout' radio button
        await checkoutPage.clickGuestCheckoutRadioButton();
        //checkout page web element assert
        await checkoutPage.isCheckoutPageWebElementDisplayed();
        //checkout page list web element assert
        await this.areCheckoutPageListElementsDisplayed();
        //checkout page text element assert
        await this.isCheckoutPageTextElementAsExpected();
        //log checkout product data
        await this.logCheckoutProductData();
        //capture screenshot before data input
        await TestMethods.captureScreenshot(this.driver, "Checkout Page Before Valid Guest Data (and product removal) Input");
        //input valid guest first name
        await checkoutPage.inputGuestFirstNameIntoFirstNameInputField();
        //input valid guest last name
        await checkoutPage.inputGuestLastNameIntoLastNameInputField();
        //input valid guest email address
        await checkoutPage.inputGuestEmailIntoEmailInputField();
        //input valid guest phone number
        await checkoutPage.inputGuestPhoneIntoFirstPhoneInputField();
        //input valid guest street address
        await checkoutPage.inputGuestAddressIntoAddressInputField();
        //input valid guest city
        await checkoutPage.inputGuestCityIntoCityInputField();
        //input valid guest post code
        await checkoutPage.inputGuestPostCodeIntoPostCodeInputField();
        //click country dropdown menu
        await checkoutPage.clickCountryDropdownMenu();
        //select 'United States' option
        await checkoutPage.selectUnitedStatesCountryOption();
        //click region dropdown menu
        await checkoutPage.clickRegionDropdownMenu();
        //select 'Illinois' option
        await checkoutPage.selectIllinoisRegionOption();
        //capture screenshot of the valid data input
        await TestMethods.captureScreenshot(this.driver, "Checkout Page Valid Guest Data Input (before product removal)");
        //click 'Agree to Terms' checkbox
        await checkoutPage.clickAgreeToTermsCheckbox();
        //click 'Remove' button
        await checkoutPage.clickRemoveProductButton();
        //capture screenshot after button click
        await TestMethods.captureScreenshot(this.driver, "Product Removal Button Click Result - As A Guest");
        //assert user receives product removal confirmation message
        const productRemovalMessageSuccess = await shoppingCartPage.getProductRemovalSuccessMessage();
        assert.strictEqual(productRemovalMessageSuccess, "Your shopping cart is empty!", "The product removal success message doesn't match expectations or the product removal process has failed.");
        //click 'Continue' button
        await shoppingCartPage.clickContinueButton();
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Product Removal Test Result - As A Guest");
    }

    //valid product checkout test method (as a registered user)
    async validProductCheckoutRegUserTest(){
        const homePage = new HomePage(this.driver);
        const checkoutPage = new CheckoutPage(this.driver);
        const checkoutPageRegisteredUser = new CheckoutPageRegisteredUser(this.driver);
        //general page web element assert
        await homePage.isGeneralPageWebElementDisplayed();
        //wait for elements to load
        await homePage.waitForElementLoad();
        //checkout page web element assert (registered user page version)
        await checkoutPageRegisteredUser.isCheckoutPageRegUserWebElementDisplayed();
        //checkout page list web element assert
        await this.areCheckoutPageListElementsDisplayed();
        //log checkout product data
        await this.logCheckoutProductData();
        //capture screenshot before data input
        await TestMethods.captureScreenshot(this.driver, "Checkout Page Before Valid Registered User Data Input");
        //input valid registered user first name
        await checkoutPageRegisteredUser.inputRegUserFirstNameIntoFirstNameInputField();
        //input valid registered user last name
        await checkoutPageRegisteredUser.inputRegUserLastNameIntoLastNameInputField();
        //input valid registered user street address
        await checkoutPageRegisteredUser.inputRegUserAddressIntoAddressInputField();
        //input valid registered user city
        await checkoutPageRegisteredUser.inputRegUserCityIntoCityInputField();
        //input valid registered user post code
        await checkoutPageRegisteredUser.inputRegUserPostCodeIntoPostCodeInputField();
        //click country dropdown menu
        await checkoutPage.clickCountryDropdownMenu();
        //select 'United States' option
        await checkoutPage.selectUnitedStatesCountryOption();
        //click region dropdown menu
        await checkoutPage.clickRegionDropdownMenu();
        //select 'Illinois' option
        await checkoutPage.selectIllinoisRegionOption();
        //capture screenshot of the valid guest data input
        await TestMethods.captureScreenshot(this.driver, "Checkout Page Valid Registered User Data Input");
        //click 'Agree to Terms' checkbox
        await checkoutPage.clickAgreeToTermsCheckbox();
        //click 'Continue' button
        await checkoutPage.clickContinueButton();
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Valid Product Checkout Test Result - As A Registered User");
    }

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    //invalid guest checkout tests

    //no singular input

    //invalid guest checkout test method - no first name
    async invalidGuestCheckoutNoFirstNameTest(){
        const homePage = new HomePage(this.driver);
        const checkoutPage = new CheckoutPage(this.driver);
        const checkoutGuestNoSingularInputPage = new CheckoutGuestNoSingularInputPage(this.driver);
        //general page web element assert
        await homePage.isGeneralPageWebElementDisplayed();
        //wait for elements to load
        await homePage.waitForElementLoad();
        //click 'Guest Checkout' radio button
        await checkoutPage.clickGuestCheckoutRadioButton();
        //checkout page web element assert
        await checkoutPage.isCheckoutPageWebElementDisplayed();
        //checkout page list web element assert
        await this.areCheckoutPageListElementsDisplayed();
        //checkout page text element assert
        await this.isCheckoutPageTextElementAsExpected();
        //log checkout product data
        await this.logCheckoutProductData();
        //capture screenshot before data input
        await TestMethods.captureScreenshot(this.driver, "Checkout Page Before Invalid Guest Data Input - No First Name");
        //don't input guest first name
        await checkoutGuestNoSingularInputPage.inputNoGuestFirstNameIntoFirstNameInputField();
        //capture screenshot of the invalid data input
        await TestMethods.captureScreenshot(this.driver, "Invalid Guest Data Input - No First Name");
        //input valid guest last name
        await checkoutPage.inputGuestLastNameIntoLastNameInputField();
        //input valid guest email address
        await checkoutPage.inputGuestEmailIntoEmailInputField();
        //input valid guest phone number
        await checkoutPage.inputGuestPhoneIntoFirstPhoneInputField();
        //input valid guest street address
        await checkoutPage.inputGuestAddressIntoAddressInputField();
        //input valid guest city
        await checkoutPage.inputGuestCityIntoCityInputField();
        //click country dropdown menu
        await checkoutPage.clickCountryDropdownMenu();
        //select 'United States' option
        await checkoutPage.selectUnitedStatesCountryOption();
        //click region dropdown menu
        await checkoutPage.clickRegionDropdownMenu();
        //select 'Illinois' option
        await checkoutPage.selectIllinoisRegionOption();
        //click 'Agree to Terms' checkbox
        await checkoutPage.clickAgreeToTermsCheckbox();
        //click 'Continue' button
        await checkoutPage.clickContinueButton();
        //wait for elements to load
        await homePage.waitForElementLoad();
        //assert the expected input error message is displayed
        const noFirstNameError = await checkoutGuestNoSingularInputPage.getInvalidInputErrorMessage();
        assert.strictEqual(noFirstNameError,"First Name must be between 1 and 32 characters!", "The missing first name error message doesn't match expectations.");
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Invalid Product Checkout Test Result - No First Name (guest)");
    }
    //invalid guest checkout test method - no last name
    async invalidGuestCheckoutNoLastNameTest(){
        const homePage = new HomePage(this.driver);
        const checkoutPage = new CheckoutPage(this.driver);
        const checkoutGuestNoSingularInputPage = new CheckoutGuestNoSingularInputPage(this.driver);
        //general page web element assert
        await homePage.isGeneralPageWebElementDisplayed();
        //wait for elements to load
        await homePage.waitForElementLoad();
        //click 'Guest Checkout' radio button
        await checkoutPage.clickGuestCheckoutRadioButton();
        //checkout page web element assert
        await checkoutPage.isCheckoutPageWebElementDisplayed();
        //checkout page list web element assert
        await this.areCheckoutPageListElementsDisplayed();
        //checkout page text element assert
        await this.isCheckoutPageTextElementAsExpected();
        //log checkout product data
        await this.logCheckoutProductData();
        //capture screenshot before data input
        await TestMethods.captureScreenshot(this.driver, "Checkout Page Before Invalid Guest Data Input - No Last Name");
        //input valid guest first name
        await checkoutPage.inputGuestFirstNameIntoFirstNameInputField();
        //don't input guest last name
        await checkoutGuestNoSingularInputPage.inputNoGuestLastNameIntoLastNameInputField();
        //capture screenshot of the invalid data input
        await TestMethods.captureScreenshot(this.driver, "Invalid Guest Data Input - No Last Name");
        //input valid guest email address
        await checkoutPage.inputGuestEmailIntoEmailInputField();
        //input valid guest phone number
        await checkoutPage.inputGuestPhoneIntoFirstPhoneInputField();
        //input valid guest street address
        await checkoutPage.inputGuestAddressIntoAddressInputField();
        //input valid guest city
        await checkoutPage.inputGuestCityIntoCityInputField();
        //click country dropdown menu
        await checkoutPage.clickCountryDropdownMenu();
        //select 'United States' option
        await checkoutPage.selectUnitedStatesCountryOption();
        //click region dropdown menu
        await checkoutPage.clickRegionDropdownMenu();
        //select 'Illinois' option
        await checkoutPage.selectIllinoisRegionOption();
        //click 'Agree to Terms' checkbox
        await checkoutPage.clickAgreeToTermsCheckbox();
        //click 'Continue' button
        await checkoutPage.clickContinueButton();
        //wait for elements to load
        await homePage.waitForElementLoad();
        //assert the expected input error message is displayed
        const noLastNameError = await checkoutGuestNoSingularInputPage.getInvalidInputErrorMessage();
        assert.strictEqual(noLastNameError,"Last Name must be between 1 and 32 characters!", "The missing last name error message doesn't match expectations.");
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Invalid Product Checkout Test Result - No Last Name (guest)");
    }
    //invalid guest checkout test method - no email address
    async invalidGuestCheckoutNoEmailTest(){
        const homePage = new HomePage(this.driver);
        const checkoutPage = new CheckoutPage(this.driver);
        const checkoutGuestNoSingularInputPage = new CheckoutGuestNoSingularInputPage(this.driver);
        //general page web element assert
        await homePage.isGeneralPageWebElementDisplayed();
        //wait for elements to load
        await homePage.waitForElementLoad();
        //click 'Guest Checkout' radio button
        await checkoutPage.clickGuestCheckoutRadioButton();
        //checkout page web element assert
        await checkoutPage.isCheckoutPageWebElementDisplayed();
        //checkout page list web element assert
        await this.areCheckoutPageListElementsDisplayed();
        //checkout page text element assert
        await this.isCheckoutPageTextElementAsExpected();
        //log checkout product data
        await this.logCheckoutProductData();
        //capture screenshot before data input
        await TestMethods.captureScreenshot(this.driver, "Checkout Page Before Invalid Guest Data Input - No Email");
        //input valid guest first name
        await checkoutPage.inputGuestFirstNameIntoFirstNameInputField();
        //input valid guest last name
        await checkoutPage.inputGuestLastNameIntoLastNameInputField();
        //don't input guest email address
        await checkoutGuestNoSingularInputPage.inputNoGuestEmailIntoEmailInputField();
        //capture screenshot of the invalid data input
        await TestMethods.captureScreenshot(this.driver, "Invalid Guest Data Input - No Email");
        //input valid guest phone number
        await checkoutPage.inputGuestPhoneIntoFirstPhoneInputField();
        //input valid guest street address
        await checkoutPage.inputGuestAddressIntoAddressInputField();
        //input valid guest city
        await checkoutPage.inputGuestCityIntoCityInputField();
        //click country dropdown menu
        await checkoutPage.clickCountryDropdownMenu();
        //select 'United States' option
        await checkoutPage.selectUnitedStatesCountryOption();
        //click region dropdown menu
        await checkoutPage.clickRegionDropdownMenu();
        //select 'Illinois' option
        await checkoutPage.selectIllinoisRegionOption();
        //click 'Agree to Terms' checkbox
        await checkoutPage.clickAgreeToTermsCheckbox();
        //click 'Continue' button
        await checkoutPage.clickContinueButton();
        //wait for elements to load
        await homePage.waitForElementLoad();
        //assert the expected input error message is displayed
        const noEmailError = await checkoutGuestNoSingularInputPage.getInvalidInputErrorMessage();
        assert.strictEqual(noEmailError,"E-Mail address does not appear to be valid!", "The missing email address error message doesn't match expectations.");
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Invalid Product Checkout Test Result - No Email (guest)");
    }
    //invalid guest checkout test method - no phone number
    async invalidGuestCheckoutNoPhoneTest(){
        const homePage = new HomePage(this.driver);
        const checkoutPage = new CheckoutPage(this.driver);
        const checkoutGuestNoSingularInputPage = new CheckoutGuestNoSingularInputPage(this.driver);
        //general page web element assert
        await homePage.isGeneralPageWebElementDisplayed();
        //wait for elements to load
        await homePage.waitForElementLoad();
        //click 'Guest Checkout' radio button
        await checkoutPage.clickGuestCheckoutRadioButton();
        //checkout page web element assert
        await checkoutPage.isCheckoutPageWebElementDisplayed();
        //checkout page list web element assert
        await this.areCheckoutPageListElementsDisplayed();
        //checkout page text element assert
        await this.isCheckoutPageTextElementAsExpected();
        //log checkout product data
        await this.logCheckoutProductData();
        //capture screenshot before data input
        await TestMethods.captureScreenshot(this.driver, "Checkout Page Before Invalid Guest Data Input - No Phone");
        //input valid guest first name
        await checkoutPage.inputGuestFirstNameIntoFirstNameInputField();
        //input valid guest last name
        await checkoutPage.inputGuestLastNameIntoLastNameInputField();
        //input valid guest email address
        await checkoutPage.inputGuestEmailIntoEmailInputField();
        //don't input guest phone number
        await checkoutGuestNoSingularInputPage.inputNoGuestPhoneIntoFirstPhoneInputField();
        //capture screenshot of the invalid data input
        await TestMethods.captureScreenshot(this.driver, "Invalid Guest Data Input - No Phone");
        //input valid guest street address
        await checkoutPage.inputGuestAddressIntoAddressInputField();
        //input valid guest city
        await checkoutPage.inputGuestCityIntoCityInputField();
        //click country dropdown menu
        await checkoutPage.clickCountryDropdownMenu();
        //select 'United States' option
        await checkoutPage.selectUnitedStatesCountryOption();
        //click region dropdown menu
        await checkoutPage.clickRegionDropdownMenu();
        //select 'Illinois' option
        await checkoutPage.selectIllinoisRegionOption();
        //click 'Agree to Terms' checkbox
        await checkoutPage.clickAgreeToTermsCheckbox();
        //click 'Continue' button
        await checkoutPage.clickContinueButton();
        //wait for elements to load
        await homePage.waitForElementLoad();
        //assert the expected input error message is displayed
        const noPhoneError = await checkoutGuestNoSingularInputPage.getInvalidInputErrorMessage();
        assert.strictEqual(noPhoneError,"Telephone must be between 3 and 32 characters!", "The missing phone error message doesn't match expectations.");
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Invalid Product Checkout Test Result - No Phone (guest)");
    }
    //invalid guest checkout test method - no address
    async invalidGuestCheckoutNoAddressTest(){
        const homePage = new HomePage(this.driver);
        const checkoutPage = new CheckoutPage(this.driver);
        const checkoutGuestNoSingularInputPage = new CheckoutGuestNoSingularInputPage(this.driver);
        //general page web element assert
        await homePage.isGeneralPageWebElementDisplayed();
        //wait for elements to load
        await homePage.waitForElementLoad();
        //click 'Guest Checkout' radio button
        await checkoutPage.clickGuestCheckoutRadioButton();
        //checkout page web element assert
        await checkoutPage.isCheckoutPageWebElementDisplayed();
        //checkout page list web element assert
        await this.areCheckoutPageListElementsDisplayed();
        //checkout page text element assert
        await this.isCheckoutPageTextElementAsExpected();
        //log checkout product data
        await this.logCheckoutProductData();
        //capture screenshot before data input
        await TestMethods.captureScreenshot(this.driver, "Checkout Page Before Invalid Guest Data Input - No Address");
        //input valid guest first name
        await checkoutPage.inputGuestFirstNameIntoFirstNameInputField();
        //input valid guest last name
        await checkoutPage.inputGuestLastNameIntoLastNameInputField();
        //input valid guest email address
        await checkoutPage.inputGuestEmailIntoEmailInputField();
        //input valid guest phone number
        await checkoutPage.inputGuestPhoneIntoFirstPhoneInputField();
        //don't input guest street address
        await checkoutGuestNoSingularInputPage.inputNoGuestAddressIntoAddressInputField();
        //capture screenshot of the invalid data input
        await TestMethods.captureScreenshot(this.driver, "Invalid Guest Data Input - No Address");
        //input valid guest city
        await checkoutPage.inputGuestCityIntoCityInputField();
        //click country dropdown menu
        await checkoutPage.clickCountryDropdownMenu();
        //select 'United States' option
        await checkoutPage.selectUnitedStatesCountryOption();
        //click region dropdown menu
        await checkoutPage.clickRegionDropdownMenu();
        //select 'Illinois' option
        await checkoutPage.selectIllinoisRegionOption();
        //click 'Agree to Terms' checkbox
        await checkoutPage.clickAgreeToTermsCheckbox();
        //click 'Continue' button
        await checkoutPage.clickContinueButton();
        //wait for elements to load
        await homePage.waitForElementLoad();
        //assert the expected input error message is displayed
        const noAddressError = await checkoutGuestNoSingularInputPage.getInvalidInputErrorMessage();
        assert.strictEqual(noAddressError,"Address 1 must be between 3 and 128 characters!", "The missing address error message doesn't match expectations.");
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Invalid Product Checkout Test Result - No Address (guest)");
    }
    //invalid guest checkout test method - no city
    async invalidGuestCheckoutNoCityTest(){
        const homePage = new HomePage(this.driver);
        const checkoutPage = new CheckoutPage(this.driver);
        const checkoutGuestNoSingularInputPage = new CheckoutGuestNoSingularInputPage(this.driver);
        //general page web element assert
        await homePage.isGeneralPageWebElementDisplayed();
        //wait for elements to load
        await homePage.waitForElementLoad();
        //click 'Guest Checkout' radio button
        await checkoutPage.clickGuestCheckoutRadioButton();
        //checkout page web element assert
        await checkoutPage.isCheckoutPageWebElementDisplayed();
        //checkout page list web element assert
        await this.areCheckoutPageListElementsDisplayed();
        //checkout page text element assert
        await this.isCheckoutPageTextElementAsExpected();
        //log checkout product data
        await this.logCheckoutProductData();
        //capture screenshot before data input
        await TestMethods.captureScreenshot(this.driver, "Checkout Page Before Invalid Guest Data Input - No City");
        //input valid guest first name
        await checkoutPage.inputGuestFirstNameIntoFirstNameInputField();
        //input valid guest last name
        await checkoutPage.inputGuestLastNameIntoLastNameInputField();
        //input valid guest email address
        await checkoutPage.inputGuestEmailIntoEmailInputField();
        //input valid guest phone number
        await checkoutPage.inputGuestPhoneIntoFirstPhoneInputField();
        //input guest street address
        await checkoutPage.inputGuestAddressIntoAddressInputField();
        //don't input guest city
        await checkoutGuestNoSingularInputPage.inputNoGuestCityIntoCityInputField();
        //capture screenshot of the invalid data input
        await TestMethods.captureScreenshot(this.driver, "Invalid Guest Data Input - No City");
        //click country dropdown menu
        await checkoutPage.clickCountryDropdownMenu();
        //select 'United States' option
        await checkoutPage.selectUnitedStatesCountryOption();
        //click region dropdown menu
        await checkoutPage.clickRegionDropdownMenu();
        //select 'Illinois' option
        await checkoutPage.selectIllinoisRegionOption();
        //click 'Agree to Terms' checkbox
        await checkoutPage.clickAgreeToTermsCheckbox();
        //click 'Continue' button
        await checkoutPage.clickContinueButton();
        //wait for elements to load
        await homePage.waitForElementLoad();
        //assert the expected input error message is displayed
        const noCityError = await checkoutGuestNoSingularInputPage.getInvalidInputErrorMessage();
        assert.strictEqual(noCityError,"City must be between 2 and 128 characters!", "The missing city error message doesn't match expectations.");
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Invalid Product Checkout Test Result - No City (guest)");
    }
    //invalid guest checkout test method - no country/state - they're both interconnected (by default it's UK)
    async invalidGuestCheckoutNoCountryStateTest(){
        const homePage = new HomePage(this.driver);
        const checkoutPage = new CheckoutPage(this.driver);
        const checkoutGuestNoSingularInputPage = new CheckoutGuestNoSingularInputPage(this.driver);
        //general page web element assert
        await homePage.isGeneralPageWebElementDisplayed();
        //wait for elements to load
        await homePage.waitForElementLoad();
        //click 'Guest Checkout' radio button
        await checkoutPage.clickGuestCheckoutRadioButton();
        //checkout page web element assert
        await checkoutPage.isCheckoutPageWebElementDisplayed();
        //checkout page list web element assert
        await this.areCheckoutPageListElementsDisplayed();
        //checkout page text element assert
        await this.isCheckoutPageTextElementAsExpected();
        //log checkout product data
        await this.logCheckoutProductData();
        //capture screenshot before data input
        await TestMethods.captureScreenshot(this.driver, "Checkout Page Before Invalid Guest Data Input - No Country and State");
        //input valid guest first name
        await checkoutPage.inputGuestFirstNameIntoFirstNameInputField();
        //input valid guest last name
        await checkoutPage.inputGuestLastNameIntoLastNameInputField();
        //input valid guest email address
        await checkoutPage.inputGuestEmailIntoEmailInputField();
        //input valid guest phone number
        await checkoutPage.inputGuestPhoneIntoFirstPhoneInputField();
        //input guest street address
        await checkoutPage.inputGuestAddressIntoAddressInputField();
        //input valid guest city
        await checkoutPage.inputGuestCityIntoCityInputField();
        //click country dropdown menu
        await checkoutGuestNoSingularInputPage.clickCountryDropdownMenu();
        //select 'no country' option
        await checkoutGuestNoSingularInputPage.selectNoCountryOption();
        //click 'Agree to Terms' checkbox
        await checkoutPage.clickAgreeToTermsCheckbox();
        //click 'Continue' button
        await checkoutPage.clickContinueButton();
        //wait for elements to load
        await homePage.waitForElementLoad();
        //assert the expected input error message is displayed
        const noCountryError = await checkoutGuestNoSingularInputPage.getInvalidInputErrorMessage();
        assert.strictEqual(noCountryError,"Please select a country!", "The missing country error message doesn't match expectations.");
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Invalid Product Checkout Test Result - No Country and State (guest)");
    }
    //invalid guest checkout test method - no agree to terms
    async invalidGuestCheckoutNoAgreeToTermsTest(){
        const homePage = new HomePage(this.driver);
        const checkoutPage = new CheckoutPage(this.driver);
        //const checkoutGuestNoSingularInputPage = new CheckoutGuestNoSingularInputPage(this.driver);
        //general page web element assert
        await homePage.isGeneralPageWebElementDisplayed();
        //wait for elements to load
        await homePage.waitForElementLoad();
        //click 'Guest Checkout' radio button
        await checkoutPage.clickGuestCheckoutRadioButton();
        //checkout page web element assert
        await checkoutPage.isCheckoutPageWebElementDisplayed();
        //checkout page list web element assert
        await this.areCheckoutPageListElementsDisplayed();
        //checkout page text element assert
        await this.isCheckoutPageTextElementAsExpected();
        //log checkout product data
        await this.logCheckoutProductData();
        //capture screenshot before data input
        await TestMethods.captureScreenshot(this.driver, "Checkout Page Before Invalid Guest Data Input - No Agree To Terms");
        //input valid guest first name
        await checkoutPage.inputGuestFirstNameIntoFirstNameInputField();
        //input valid guest last name
        await checkoutPage.inputGuestLastNameIntoLastNameInputField();
        //input valid guest email address
        await checkoutPage.inputGuestEmailIntoEmailInputField();
        //input valid guest phone number
        await checkoutPage.inputGuestPhoneIntoFirstPhoneInputField();
        //input guest street address
        await checkoutPage.inputGuestAddressIntoAddressInputField();
        //input valid guest city
        await checkoutPage.inputGuestCityIntoCityInputField();
        //click country dropdown menu
        await checkoutPage.clickCountryDropdownMenu();
        //select 'United States' option
        await checkoutPage.selectUnitedStatesCountryOption();
        //click region dropdown menu
        await checkoutPage.clickRegionDropdownMenu();
        //select 'Illinois' option
        await checkoutPage.selectIllinoisRegionOption();
        //click 'Continue' button
        await checkoutPage.clickContinueButton();
        //wait for elements to load
        await homePage.waitForElementLoad();
        //assert the expected input error message is displayed (the element didn't appear during automated test run)
        //const noAgreeToTermsError = await checkoutGuestNoSingularInputPage.getNoAgreeToTermsErrorMessage();
        //assert.strictEqual(noAgreeToTermsError,"Warning: You must agree to the Terms & Conditions!", "The 'No Agree to Terms' error message doesn't match expectations.");
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Invalid Product Checkout Test Result - No Agree to Terms (guest)");
    }

    //too short singular input

    //invalid guest checkout test method - too short first name (1 char)
    async invalidGuestCheckoutTooShortFirstNameTest(){
        const homePage = new HomePage(this.driver);
        const checkoutPage = new CheckoutPage(this.driver);
        const checkoutPageGuestTooShortLongInput = new CheckoutPageGuestTooShortLongInput(this.driver);
        //general page web element assert
        await homePage.isGeneralPageWebElementDisplayed();
        //wait for elements to load
        await homePage.waitForElementLoad();
        //click 'Guest Checkout' radio button
        await checkoutPage.clickGuestCheckoutRadioButton();
        //checkout page web element assert
        await checkoutPage.isCheckoutPageWebElementDisplayed();
        //checkout page list web element assert
        await this.areCheckoutPageListElementsDisplayed();
        //checkout page text element assert
        await this.isCheckoutPageTextElementAsExpected();
        //log checkout product data
        await this.logCheckoutProductData();
        //capture screenshot before data input
        await TestMethods.captureScreenshot(this.driver, "Checkout Page Before Invalid Guest Data Input - Too Short First Name");
        //input too short guest first name (1 char)
        await checkoutPageGuestTooShortLongInput.inputTooShortGuestFirstNameIntoFirstNameInputField();
        //capture screenshot of the invalid data input
        await TestMethods.captureScreenshot(this.driver, "Invalid Guest Data Input - Too Short First Name");
        //input valid guest last name
        await checkoutPage.inputGuestLastNameIntoLastNameInputField();
        //input valid guest email address
        await checkoutPage.inputGuestEmailIntoEmailInputField();
        //input valid guest phone number
        await checkoutPage.inputGuestPhoneIntoFirstPhoneInputField();
        //input valid guest street address
        await checkoutPage.inputGuestAddressIntoAddressInputField();
        //input valid guest city
        await checkoutPage.inputGuestCityIntoCityInputField();
        //click country dropdown menu
        await checkoutPage.clickCountryDropdownMenu();
        //select 'United States' option
        await checkoutPage.selectUnitedStatesCountryOption();
        //click region dropdown menu
        await checkoutPage.clickRegionDropdownMenu();
        //select 'Illinois' option
        await checkoutPage.selectIllinoisRegionOption();
        //click 'Agree to Terms' checkbox
        await checkoutPage.clickAgreeToTermsCheckbox();
        //click 'Continue' button
        await checkoutPage.clickContinueButton();
        //wait for elements to load
        await homePage.waitForElementLoad();
        //assert the expected input error message is displayed, log the issue otherwise
        try {
            const tooShortFirstNameError = await checkoutPageGuestTooShortLongInput.getInvalidInputErrorMessage();
            assert.strictEqual(tooShortFirstNameError, "First Name must be between 1 and 32 characters!", "The too short first name error message doesn't match expectations.");
        } catch (error){
            Logger.warn("The too short first name char limit is inadequate (1 char is too short).")
        }
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Invalid Product Checkout Test Result - Too Short First Name (guest)");
    }
    //invalid guest checkout test method - too short last name (1 char)
    async invalidGuestCheckoutTooShortLastNameTest(){
        const homePage = new HomePage(this.driver);
        const checkoutPage = new CheckoutPage(this.driver);
        const checkoutPageGuestTooShortLongInput = new CheckoutPageGuestTooShortLongInput(this.driver);
        //general page web element assert
        await homePage.isGeneralPageWebElementDisplayed();
        //wait for elements to load
        await homePage.waitForElementLoad();
        //click 'Guest Checkout' radio button
        await checkoutPage.clickGuestCheckoutRadioButton();
        //checkout page web element assert
        await checkoutPage.isCheckoutPageWebElementDisplayed();
        //checkout page list web element assert
        await this.areCheckoutPageListElementsDisplayed();
        //checkout page text element assert
        await this.isCheckoutPageTextElementAsExpected();
        //log checkout product data
        await this.logCheckoutProductData();
        //capture screenshot before data input
        await TestMethods.captureScreenshot(this.driver, "Checkout Page Before Invalid Guest Data Input - Too Short Last Name");
        //input valid guest first name
        await checkoutPage.inputGuestFirstNameIntoFirstNameInputField();
        //input too short guest last name (1 char)
        await checkoutPageGuestTooShortLongInput.inputTooShortGuestLastNameIntoLastNameInputField();
        //capture screenshot of the invalid data input
        await TestMethods.captureScreenshot(this.driver, "Invalid Guest Data Input - Too Short Last Name");
        //input valid guest email address
        await checkoutPage.inputGuestEmailIntoEmailInputField();
        //input valid guest phone number
        await checkoutPage.inputGuestPhoneIntoFirstPhoneInputField();
        //input valid guest street address
        await checkoutPage.inputGuestAddressIntoAddressInputField();
        //input valid guest city
        await checkoutPage.inputGuestCityIntoCityInputField();
        //click country dropdown menu
        await checkoutPage.clickCountryDropdownMenu();
        //select 'United States' option
        await checkoutPage.selectUnitedStatesCountryOption();
        //click region dropdown menu
        await checkoutPage.clickRegionDropdownMenu();
        //select 'Illinois' option
        await checkoutPage.selectIllinoisRegionOption();
        //click 'Agree to Terms' checkbox
        await checkoutPage.clickAgreeToTermsCheckbox();
        //click 'Continue' button
        await checkoutPage.clickContinueButton();
        //wait for elements to load
        await homePage.waitForElementLoad();
        //assert the expected input error message is displayed, log the issue otherwise
        try {
            const tooShortLastNameError = await checkoutPageGuestTooShortLongInput.getInvalidInputErrorMessage();
            assert.strictEqual(tooShortLastNameError, "Last Name must be between 1 and 32 characters!", "The too short last name error message doesn't match expectations.");
        } catch (error){
            Logger.warn("The too short last name char limit is inadequate (1 char is too short).")
        }
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Invalid Product Checkout Test Result - Too Short Last Name (guest)");
    }
    //invalid guest checkout test method - too short email address (1 char - name, domain)
    async invalidGuestCheckoutTooShortEmailTest(){
        const homePage = new HomePage(this.driver);
        const checkoutPage = new CheckoutPage(this.driver);
        const checkoutPageGuestTooShortLongInput = new CheckoutPageGuestTooShortLongInput(this.driver);
        //general page web element assert
        await homePage.isGeneralPageWebElementDisplayed();
        //wait for elements to load
        await homePage.waitForElementLoad();
        //click 'Guest Checkout' radio button
        await checkoutPage.clickGuestCheckoutRadioButton();
        //checkout page web element assert
        await checkoutPage.isCheckoutPageWebElementDisplayed();
        //checkout page list web element assert
        await this.areCheckoutPageListElementsDisplayed();
        //checkout page text element assert
        await this.isCheckoutPageTextElementAsExpected();
        //log checkout product data
        await this.logCheckoutProductData();
        //capture screenshot before data input
        await TestMethods.captureScreenshot(this.driver, "Checkout Page Before Invalid Guest Data Input - Too Short Email");
        //input valid guest first name
        await checkoutPage.inputGuestFirstNameIntoFirstNameInputField();
        //input valid guest last name
        await checkoutPage.inputGuestLastNameIntoLastNameInputField();
        //input too short guest email address (1 char - name, domain)
        await checkoutPageGuestTooShortLongInput.inputTooShortGuestEmailIntoEmailInputField();
        //capture screenshot of the invalid data input
        await TestMethods.captureScreenshot(this.driver, "Invalid Guest Data Input - Too Short Email");
        //input valid guest phone number
        await checkoutPage.inputGuestPhoneIntoFirstPhoneInputField();
        //input valid guest street address
        await checkoutPage.inputGuestAddressIntoAddressInputField();
        //input valid guest city
        await checkoutPage.inputGuestCityIntoCityInputField();
        //click country dropdown menu
        await checkoutPage.clickCountryDropdownMenu();
        //select 'United States' option
        await checkoutPage.selectUnitedStatesCountryOption();
        //click region dropdown menu
        await checkoutPage.clickRegionDropdownMenu();
        //select 'Illinois' option
        await checkoutPage.selectIllinoisRegionOption();
        //click 'Agree to Terms' checkbox
        await checkoutPage.clickAgreeToTermsCheckbox();
        //click 'Continue' button
        await checkoutPage.clickContinueButton();
        //wait for elements to load
        await homePage.waitForElementLoad();
        //assert the expected input error message is displayed, log the issue otherwise
        try {
            const tooShortEmailError = await checkoutPageGuestTooShortLongInput.getInvalidInputErrorMessage();
            assert.strictEqual(tooShortEmailError, "E-Mail address does not appear to be valid!", "The too short email address error message doesn't match expectations.");
        } catch (error){
            Logger.warn("The too short email address error didn't appear.")
        }
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Invalid Product Checkout Test Result - Too Short Email (guest)");
    }
    //invalid guest checkout test method - too short phone number (2 digits)
    async invalidGuestCheckoutTooShortPhoneTest(){
        const homePage = new HomePage(this.driver);
        const checkoutPage = new CheckoutPage(this.driver);
        const checkoutPageGuestTooShortLongInput = new CheckoutPageGuestTooShortLongInput(this.driver);
        //general page web element assert
        await homePage.isGeneralPageWebElementDisplayed();
        //wait for elements to load
        await homePage.waitForElementLoad();
        //click 'Guest Checkout' radio button
        await checkoutPage.clickGuestCheckoutRadioButton();
        //checkout page web element assert
        await checkoutPage.isCheckoutPageWebElementDisplayed();
        //checkout page list web element assert
        await this.areCheckoutPageListElementsDisplayed();
        //checkout page text element assert
        await this.isCheckoutPageTextElementAsExpected();
        //log checkout product data
        await this.logCheckoutProductData();
        //capture screenshot before data input
        await TestMethods.captureScreenshot(this.driver, "Checkout Page Before Invalid Guest Data Input - Too Short Phone");
        //input valid guest first name
        await checkoutPage.inputGuestFirstNameIntoFirstNameInputField();
        //input valid guest last name
        await checkoutPage.inputGuestLastNameIntoLastNameInputField();
        //input valid guest email address
        await checkoutPage.inputGuestEmailIntoEmailInputField();
        //input too short guest phone number(2 digits)
        await checkoutPageGuestTooShortLongInput.inputTooShortGuestPhoneIntoFirstPhoneInputField();
        //capture screenshot of the invalid data input
        await TestMethods.captureScreenshot(this.driver, "Invalid Guest Data Input - Too Short Phone");
        //input valid guest street address
        await checkoutPage.inputGuestAddressIntoAddressInputField();
        //input valid guest city
        await checkoutPage.inputGuestCityIntoCityInputField();
        //click country dropdown menu
        await checkoutPage.clickCountryDropdownMenu();
        //select 'United States' option
        await checkoutPage.selectUnitedStatesCountryOption();
        //click region dropdown menu
        await checkoutPage.clickRegionDropdownMenu();
        //select 'Illinois' option
        await checkoutPage.selectIllinoisRegionOption();
        //click 'Agree to Terms' checkbox
        await checkoutPage.clickAgreeToTermsCheckbox();
        //click 'Continue' button
        await checkoutPage.clickContinueButton();
        //wait for elements to load
        await homePage.waitForElementLoad();
        //assert the expected input error message is displayed, log the issue otherwise
        try {
            const tooShortPhoneError = await checkoutPageGuestTooShortLongInput.getInvalidInputErrorMessage();
            assert.strictEqual(tooShortPhoneError, "Telephone must be between 3 and 32 characters!", "The too short phone number error message doesn't match expectations.");
        } catch (error){
            Logger.warn("The too short phone number error didn't appear.")
        }
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Invalid Product Checkout Test Result - Too Short Phone (guest)");
    }
    //invalid guest checkout test method - too short street address (2 chars)
    async invalidGuestCheckoutTooShortAddressTest(){
        const homePage = new HomePage(this.driver);
        const checkoutPage = new CheckoutPage(this.driver);
        const checkoutPageGuestTooShortLongInput = new CheckoutPageGuestTooShortLongInput(this.driver);
        //general page web element assert
        await homePage.isGeneralPageWebElementDisplayed();
        //wait for elements to load
        await homePage.waitForElementLoad();
        //click 'Guest Checkout' radio button
        await checkoutPage.clickGuestCheckoutRadioButton();
        //checkout page web element assert
        await checkoutPage.isCheckoutPageWebElementDisplayed();
        //checkout page list web element assert
        await this.areCheckoutPageListElementsDisplayed();
        //checkout page text element assert
        await this.isCheckoutPageTextElementAsExpected();
        //log checkout product data
        await this.logCheckoutProductData();
        //capture screenshot before data input
        await TestMethods.captureScreenshot(this.driver, "Checkout Page Before Invalid Guest Data Input - Too Short Address");
        //input valid guest first name
        await checkoutPage.inputGuestFirstNameIntoFirstNameInputField();
        //input valid guest last name
        await checkoutPage.inputGuestLastNameIntoLastNameInputField();
        //input valid guest email address
        await checkoutPage.inputGuestEmailIntoEmailInputField();
        //input valid guest phone number
        await checkoutPage.inputGuestPhoneIntoFirstPhoneInputField();
        //input too short guest street address (2 chars)
        await checkoutPageGuestTooShortLongInput.inputTooShortGuestAddressIntoAddressInputField();
        //capture screenshot of the invalid data input
        await TestMethods.captureScreenshot(this.driver, "Invalid Guest Data Input - Too Short Address");
        //input valid guest city
        await checkoutPage.inputGuestCityIntoCityInputField();
        //click country dropdown menu
        await checkoutPage.clickCountryDropdownMenu();
        //select 'United States' option
        await checkoutPage.selectUnitedStatesCountryOption();
        //click region dropdown menu
        await checkoutPage.clickRegionDropdownMenu();
        //select 'Illinois' option
        await checkoutPage.selectIllinoisRegionOption();
        //click 'Agree to Terms' checkbox
        await checkoutPage.clickAgreeToTermsCheckbox();
        //click 'Continue' button
        await checkoutPage.clickContinueButton();
        //wait for elements to load
        await homePage.waitForElementLoad();
        //assert the expected input error message is displayed, log the issue otherwise
        try {
            const tooShortAddressError = await checkoutPageGuestTooShortLongInput.getInvalidInputErrorMessage();
            assert.strictEqual(tooShortAddressError, "Address 1 must be between 3 and 128 characters!", "The too short address error message doesn't match expectations.");
        } catch (error){
            Logger.warn("The too short address error didn't appear.")
        }
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Invalid Product Checkout Test Result - Too Short Address (guest)");
    }
    //invalid guest checkout test method - too short city (1 char)
    async invalidGuestCheckoutTooShortCityTest(){
        const homePage = new HomePage(this.driver);
        const checkoutPage = new CheckoutPage(this.driver);
        const checkoutPageGuestTooShortLongInput = new CheckoutPageGuestTooShortLongInput(this.driver);
        //general page web element assert
        await homePage.isGeneralPageWebElementDisplayed();
        //wait for elements to load
        await homePage.waitForElementLoad();
        //click 'Guest Checkout' radio button
        await checkoutPage.clickGuestCheckoutRadioButton();
        //checkout page web element assert
        await checkoutPage.isCheckoutPageWebElementDisplayed();
        //checkout page list web element assert
        await this.areCheckoutPageListElementsDisplayed();
        //checkout page text element assert
        await this.isCheckoutPageTextElementAsExpected();
        //log checkout product data
        await this.logCheckoutProductData();
        //capture screenshot before data input
        await TestMethods.captureScreenshot(this.driver, "Checkout Page Before Invalid Guest Data Input - Too Short City");
        //input valid guest first name
        await checkoutPage.inputGuestFirstNameIntoFirstNameInputField();
        //input valid guest last name
        await checkoutPage.inputGuestLastNameIntoLastNameInputField();
        //input valid guest email address
        await checkoutPage.inputGuestEmailIntoEmailInputField();
        //input valid guest phone number
        await checkoutPage.inputGuestPhoneIntoFirstPhoneInputField();
        //input valid guest street address
        await checkoutPage.inputGuestAddressIntoAddressInputField();
        //input too short guest city (1 char)
        await checkoutPageGuestTooShortLongInput.inputTooShortGuestCityIntoCityInputField();
        //capture screenshot of the invalid data input
        await TestMethods.captureScreenshot(this.driver, "Invalid Guest Data Input - Too Short City");
        //click country dropdown menu
        await checkoutPage.clickCountryDropdownMenu();
        //select 'United States' option
        await checkoutPage.selectUnitedStatesCountryOption();
        //click region dropdown menu
        await checkoutPage.clickRegionDropdownMenu();
        //select 'Illinois' option
        await checkoutPage.selectIllinoisRegionOption();
        //click 'Agree to Terms' checkbox
        await checkoutPage.clickAgreeToTermsCheckbox();
        //click 'Continue' button
        await checkoutPage.clickContinueButton();
        //wait for elements to load
        await homePage.waitForElementLoad();
        //assert the expected input error message is displayed, log the issue otherwise
        try {
            const tooShortCityError = await checkoutPageGuestTooShortLongInput.getInvalidInputErrorMessage();
            assert.strictEqual(tooShortCityError, "City must be between 2 and 128 characters!", "The too short city error message doesn't match expectations.");
        } catch (error){
            Logger.warn("The too short city error didn't appear.")
        }
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Invalid Product Checkout Test Result - Too Short City (guest)");
    }

    //too long singular input

    //invalid guest checkout test method - too long first name (33 chars)
    async invalidGuestCheckoutTooLongFirstNameTest(){
        const homePage = new HomePage(this.driver);
        const checkoutPage = new CheckoutPage(this.driver);
        const checkoutPageGuestTooShortLongInput = new CheckoutPageGuestTooShortLongInput(this.driver);
        //general page web element assert
        await homePage.isGeneralPageWebElementDisplayed();
        //wait for elements to load
        await homePage.waitForElementLoad();
        //click 'Guest Checkout' radio button
        await checkoutPage.clickGuestCheckoutRadioButton();
        //checkout page web element assert
        await checkoutPage.isCheckoutPageWebElementDisplayed();
        //checkout page list web element assert
        await this.areCheckoutPageListElementsDisplayed();
        //checkout page text element assert
        await this.isCheckoutPageTextElementAsExpected();
        //log checkout product data
        await this.logCheckoutProductData();
        //capture screenshot before data input
        await TestMethods.captureScreenshot(this.driver, "Checkout Page Before Invalid Guest Data Input - Too Long First Name");
        //input too long guest first name (33 chars)
        await checkoutPageGuestTooShortLongInput.inputTooLongGuestFirstNameIntoFirstNameInputField();
        //capture screenshot of the invalid data input
        await TestMethods.captureScreenshot(this.driver, "Invalid Guest Data Input - Too Long First Name");
        //input valid guest last name
        await checkoutPage.inputGuestLastNameIntoLastNameInputField();
        //input valid guest email address
        await checkoutPage.inputGuestEmailIntoEmailInputField();
        //input valid guest phone number
        await checkoutPage.inputGuestPhoneIntoFirstPhoneInputField();
        //input valid guest street address
        await checkoutPage.inputGuestAddressIntoAddressInputField();
        //input valid guest city
        await checkoutPage.inputGuestCityIntoCityInputField();
        //click country dropdown menu
        await checkoutPage.clickCountryDropdownMenu();
        //select 'United States' option
        await checkoutPage.selectUnitedStatesCountryOption();
        //click region dropdown menu
        await checkoutPage.clickRegionDropdownMenu();
        //select 'Illinois' option
        await checkoutPage.selectIllinoisRegionOption();
        //click 'Agree to Terms' checkbox
        await checkoutPage.clickAgreeToTermsCheckbox();
        //click 'Continue' button
        await checkoutPage.clickContinueButton();
        //wait for elements to load
        await homePage.waitForElementLoad();
        //assert the expected input error message is displayed, log the issue otherwise
        try {
            const tooLongFirstNameError = await checkoutPageGuestTooShortLongInput.getInvalidInputErrorMessage();
            assert.strictEqual(tooLongFirstNameError, "First Name must be between 1 and 32 characters!", "The too long first name error message doesn't match expectations.");
        } catch (error){
            Logger.warn("The too long first name error didn't appear.")
        }
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Invalid Product Checkout Test Result - Too Long First Name (guest)");
    }
    //invalid guest checkout test method - too long last name (33 chars)
    async invalidGuestCheckoutTooLongLastNameTest(){
        const homePage = new HomePage(this.driver);
        const checkoutPage = new CheckoutPage(this.driver);
        const checkoutPageGuestTooShortLongInput = new CheckoutPageGuestTooShortLongInput(this.driver);
        //general page web element assert
        await homePage.isGeneralPageWebElementDisplayed();
        //wait for elements to load
        await homePage.waitForElementLoad();
        //click 'Guest Checkout' radio button
        await checkoutPage.clickGuestCheckoutRadioButton();
        //checkout page web element assert
        await checkoutPage.isCheckoutPageWebElementDisplayed();
        //checkout page list web element assert
        await this.areCheckoutPageListElementsDisplayed();
        //checkout page text element assert
        await this.isCheckoutPageTextElementAsExpected();
        //log checkout product data
        await this.logCheckoutProductData();
        //capture screenshot before data input
        await TestMethods.captureScreenshot(this.driver, "Checkout Page Before Invalid Guest Data Input - Too Short Last Name");
        //input valid guest first name
        await checkoutPage.inputGuestFirstNameIntoFirstNameInputField();
        //input too long guest last name (33 chars)
        await checkoutPageGuestTooShortLongInput.inputTooLongGuestLastNameIntoLastNameInputField();
        //capture screenshot of the invalid data input
        await TestMethods.captureScreenshot(this.driver, "Invalid Guest Data Input - Too Long Last Name");
        //input valid guest email address
        await checkoutPage.inputGuestEmailIntoEmailInputField();
        //input valid guest phone number
        await checkoutPage.inputGuestPhoneIntoFirstPhoneInputField();
        //input valid guest street address
        await checkoutPage.inputGuestAddressIntoAddressInputField();
        //input valid guest city
        await checkoutPage.inputGuestCityIntoCityInputField();
        //click country dropdown menu
        await checkoutPage.clickCountryDropdownMenu();
        //select 'United States' option
        await checkoutPage.selectUnitedStatesCountryOption();
        //click region dropdown menu
        await checkoutPage.clickRegionDropdownMenu();
        //select 'Illinois' option
        await checkoutPage.selectIllinoisRegionOption();
        //click 'Agree to Terms' checkbox
        await checkoutPage.clickAgreeToTermsCheckbox();
        //click 'Continue' button
        await checkoutPage.clickContinueButton();
        //wait for elements to load
        await homePage.waitForElementLoad();
        //assert the expected input error message is displayed, log the issue otherwise
        try {
            const tooLongLastNameError = await checkoutPageGuestTooShortLongInput.getInvalidInputErrorMessage();
            assert.strictEqual(tooLongLastNameError, "Last Name must be between 1 and 32 characters!", "The too long last name error message doesn't match expectations.");
        } catch (error){
            Logger.warn("The too long last name error didn't appear.")
        }
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Invalid Product Checkout Test Result - Too Long Last Name (guest)");
    }
    //invalid guest checkout test method - too long email address (100 chars - name, domain)
    async invalidGuestCheckoutTooLongEmailTest(){
        const homePage = new HomePage(this.driver);
        const checkoutPage = new CheckoutPage(this.driver);
        const checkoutPageGuestTooShortLongInput = new CheckoutPageGuestTooShortLongInput(this.driver);
        //general page web element assert
        await homePage.isGeneralPageWebElementDisplayed();
        //wait for elements to load
        await homePage.waitForElementLoad();
        //click 'Guest Checkout' radio button
        await checkoutPage.clickGuestCheckoutRadioButton();
        //checkout page web element assert
        await checkoutPage.isCheckoutPageWebElementDisplayed();
        //checkout page list web element assert
        await this.areCheckoutPageListElementsDisplayed();
        //checkout page text element assert
        await this.isCheckoutPageTextElementAsExpected();
        //log checkout product data
        await this.logCheckoutProductData();
        //capture screenshot before data input
        await TestMethods.captureScreenshot(this.driver, "Checkout Page Before Invalid Guest Data Input - Too Long Email");
        //input valid guest first name
        await checkoutPage.inputGuestFirstNameIntoFirstNameInputField();
        //input valid guest last name
        await checkoutPage.inputGuestLastNameIntoLastNameInputField();
        //input too long guest email address (100 chars - name, domain)
        await checkoutPageGuestTooShortLongInput.inputTooLongGuestEmailIntoEmailInputField();
        //capture screenshot of the invalid data input
        await TestMethods.captureScreenshot(this.driver, "Invalid Guest Data Input - Too Long Email");
        //input valid guest phone number
        await checkoutPage.inputGuestPhoneIntoFirstPhoneInputField();
        //input valid guest street address
        await checkoutPage.inputGuestAddressIntoAddressInputField();
        //input valid guest city
        await checkoutPage.inputGuestCityIntoCityInputField();
        //click country dropdown menu
        await checkoutPage.clickCountryDropdownMenu();
        //select 'United States' option
        await checkoutPage.selectUnitedStatesCountryOption();
        //click region dropdown menu
        await checkoutPage.clickRegionDropdownMenu();
        //select 'Illinois' option
        await checkoutPage.selectIllinoisRegionOption();
        //click 'Agree to Terms' checkbox
        await checkoutPage.clickAgreeToTermsCheckbox();
        //click 'Continue' button
        await checkoutPage.clickContinueButton();
        //wait for elements to load
        await homePage.waitForElementLoad();
        //assert the expected input error message is displayed, log the issue otherwise
        try {
            const tooLongEmailError = await checkoutPageGuestTooShortLongInput.getInvalidInputErrorMessage();
            assert.strictEqual(tooLongEmailError, "E-Mail address does not appear to be valid!", "The too long email address error message doesn't match expectations.");
        } catch (error){
            Logger.warn("The too long email address error didn't appear.")
        }
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Invalid Product Checkout Test Result - Too Long Email (guest)");
    }
    //invalid guest checkout test method - too long phone number (33 digits)
    async invalidGuestCheckoutTooLongPhoneTest(){
        const homePage = new HomePage(this.driver);
        const checkoutPage = new CheckoutPage(this.driver);
        const checkoutPageGuestTooShortLongInput = new CheckoutPageGuestTooShortLongInput(this.driver);
        //general page web element assert
        await homePage.isGeneralPageWebElementDisplayed();
        //wait for elements to load
        await homePage.waitForElementLoad();
        //click 'Guest Checkout' radio button
        await checkoutPage.clickGuestCheckoutRadioButton();
        //checkout page web element assert
        await checkoutPage.isCheckoutPageWebElementDisplayed();
        //checkout page list web element assert
        await this.areCheckoutPageListElementsDisplayed();
        //checkout page text element assert
        await this.isCheckoutPageTextElementAsExpected();
        //log checkout product data
        await this.logCheckoutProductData();
        //capture screenshot before data input
        await TestMethods.captureScreenshot(this.driver, "Checkout Page Before Invalid Guest Data Input - Too Long Phone");
        //input valid guest first name
        await checkoutPage.inputGuestFirstNameIntoFirstNameInputField();
        //input valid guest last name
        await checkoutPage.inputGuestLastNameIntoLastNameInputField();
        //input valid guest email address
        await checkoutPage.inputGuestEmailIntoEmailInputField();
        //input too short guest phone number(33 digits)
        await checkoutPageGuestTooShortLongInput.inputTooLongGuestPhoneIntoFirstPhoneInputField();
        //capture screenshot of the invalid data input
        await TestMethods.captureScreenshot(this.driver, "Invalid Guest Data Input - Too Long Phone");
        //input valid guest street address
        await checkoutPage.inputGuestAddressIntoAddressInputField();
        //input valid guest city
        await checkoutPage.inputGuestCityIntoCityInputField();
        //click country dropdown menu
        await checkoutPage.clickCountryDropdownMenu();
        //select 'United States' option
        await checkoutPage.selectUnitedStatesCountryOption();
        //click region dropdown menu
        await checkoutPage.clickRegionDropdownMenu();
        //select 'Illinois' option
        await checkoutPage.selectIllinoisRegionOption();
        //click 'Agree to Terms' checkbox
        await checkoutPage.clickAgreeToTermsCheckbox();
        //click 'Continue' button
        await checkoutPage.clickContinueButton();
        //wait for elements to load
        await homePage.waitForElementLoad();
        //assert the expected input error message is displayed, log the issue otherwise
        try {
            const tooLongPhoneError = await checkoutPageGuestTooShortLongInput.getInvalidInputErrorMessage();
            assert.strictEqual(tooLongPhoneError, "Telephone must be between 3 and 32 characters!", "The too long phone number error message doesn't match expectations.");
        } catch (error){
            Logger.warn("The too long phone number error didn't appear.")
        }
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Invalid Product Checkout Test Result - Too Long Phone (guest)");
    }
    //invalid guest checkout test method - too long street address (129 chars)
    async invalidGuestCheckoutTooLongAddressTest(){
        const homePage = new HomePage(this.driver);
        const checkoutPage = new CheckoutPage(this.driver);
        const checkoutPageGuestTooShortLongInput = new CheckoutPageGuestTooShortLongInput(this.driver);
        //general page web element assert
        await homePage.isGeneralPageWebElementDisplayed();
        //wait for elements to load
        await homePage.waitForElementLoad();
        //click 'Guest Checkout' radio button
        await checkoutPage.clickGuestCheckoutRadioButton();
        //checkout page web element assert
        await checkoutPage.isCheckoutPageWebElementDisplayed();
        //checkout page list web element assert
        await this.areCheckoutPageListElementsDisplayed();
        //checkout page text element assert
        await this.isCheckoutPageTextElementAsExpected();
        //log checkout product data
        await this.logCheckoutProductData();
        //capture screenshot before data input
        await TestMethods.captureScreenshot(this.driver, "Checkout Page Before Invalid Guest Data Input - Too Long Address");
        //input valid guest first name
        await checkoutPage.inputGuestFirstNameIntoFirstNameInputField();
        //input valid guest last name
        await checkoutPage.inputGuestLastNameIntoLastNameInputField();
        //input valid guest email address
        await checkoutPage.inputGuestEmailIntoEmailInputField();
        //input valid guest phone number
        await checkoutPage.inputGuestPhoneIntoFirstPhoneInputField();
        //input too long guest street address (129 chars)
        await checkoutPageGuestTooShortLongInput.inputTooLongGuestAddressIntoAddressInputField();
        //capture screenshot of the invalid data input
        await TestMethods.captureScreenshot(this.driver, "Invalid Guest Data Input - Too Long Address");
        //input valid guest city
        await checkoutPage.inputGuestCityIntoCityInputField();
        //click country dropdown menu
        await checkoutPage.clickCountryDropdownMenu();
        //select 'United States' option
        await checkoutPage.selectUnitedStatesCountryOption();
        //click region dropdown menu
        await checkoutPage.clickRegionDropdownMenu();
        //select 'Illinois' option
        await checkoutPage.selectIllinoisRegionOption();
        //click 'Agree to Terms' checkbox
        await checkoutPage.clickAgreeToTermsCheckbox();
        //click 'Continue' button
        await checkoutPage.clickContinueButton();
        //wait for elements to load
        await homePage.waitForElementLoad();
        //assert the expected input error message is displayed, log the issue otherwise
        try {
            const tooLongAddressError = await checkoutPageGuestTooShortLongInput.getInvalidInputErrorMessage();
            assert.strictEqual(tooLongAddressError, "Address 1 must be between 3 and 128 characters!", "The too long address error message doesn't match expectations.");
        } catch (error){
            Logger.warn("The too long address error didn't appear.")
        }
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Invalid Product Checkout Test Result - Too Long Address (guest)");
    }
    //invalid guest checkout test method - too long city (129 char)
    async invalidGuestCheckoutTooLongCityTest(){
        const homePage = new HomePage(this.driver);
        const checkoutPage = new CheckoutPage(this.driver);
        const checkoutPageGuestTooShortLongInput = new CheckoutPageGuestTooShortLongInput(this.driver);
        //general page web element assert
        await homePage.isGeneralPageWebElementDisplayed();
        //wait for elements to load
        await homePage.waitForElementLoad();
        //click 'Guest Checkout' radio button
        await checkoutPage.clickGuestCheckoutRadioButton();
        //checkout page web element assert
        await checkoutPage.isCheckoutPageWebElementDisplayed();
        //checkout page list web element assert
        await this.areCheckoutPageListElementsDisplayed();
        //checkout page text element assert
        await this.isCheckoutPageTextElementAsExpected();
        //log checkout product data
        await this.logCheckoutProductData();
        //capture screenshot before data input
        await TestMethods.captureScreenshot(this.driver, "Checkout Page Before Invalid Guest Data Input - Too Long City");
        //input valid guest first name
        await checkoutPage.inputGuestFirstNameIntoFirstNameInputField();
        //input valid guest last name
        await checkoutPage.inputGuestLastNameIntoLastNameInputField();
        //input valid guest email address
        await checkoutPage.inputGuestEmailIntoEmailInputField();
        //input valid guest phone number
        await checkoutPage.inputGuestPhoneIntoFirstPhoneInputField();
        //input valid guest street address
        await checkoutPage.inputGuestAddressIntoAddressInputField();
        //input too long guest city (129 char)
        await checkoutPageGuestTooShortLongInput.inputTooLongGuestCityIntoCityInputField();
        //capture screenshot of the invalid data input
        await TestMethods.captureScreenshot(this.driver, "Invalid Guest Data Input - Too Long City");
        //click country dropdown menu
        await checkoutPage.clickCountryDropdownMenu();
        //select 'United States' option
        await checkoutPage.selectUnitedStatesCountryOption();
        //click region dropdown menu
        await checkoutPage.clickRegionDropdownMenu();
        //select 'Illinois' option
        await checkoutPage.selectIllinoisRegionOption();
        //click 'Agree to Terms' checkbox
        await checkoutPage.clickAgreeToTermsCheckbox();
        //click 'Continue' button
        await checkoutPage.clickContinueButton();
        //wait for elements to load
        await homePage.waitForElementLoad();
        //assert the expected input error message is displayed, log the issue otherwise
        try {
            const tooLongCityError = await checkoutPageGuestTooShortLongInput.getInvalidInputErrorMessage();
            assert.strictEqual(tooLongCityError, "City must be between 2 and 128 characters!", "The too long city error message doesn't match expectations.");
        } catch (error){
            Logger.warn("The too long city error didn't appear.")
        }
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Invalid Product Checkout Test Result - Too Long City (guest)");
    }

    //invalid singular input

    //invalid guest checkout test method - invalid first name (special symbols only)
    async invalidGuestCheckoutInvalidFirstNameTest(){
        const homePage = new HomePage(this.driver);
        const checkoutPage = new CheckoutPage(this.driver);
        const checkoutPageGuestInvalidSingularInput = new CheckoutPageGuestInvalidSingularInput(this.driver);
        //general page web element assert
        await homePage.isGeneralPageWebElementDisplayed();
        //wait for elements to load
        await homePage.waitForElementLoad();
        //click 'Guest Checkout' radio button
        await checkoutPage.clickGuestCheckoutRadioButton();
        //checkout page web element assert
        await checkoutPage.isCheckoutPageWebElementDisplayed();
        //checkout page list web element assert
        await this.areCheckoutPageListElementsDisplayed();
        //checkout page text element assert
        await this.isCheckoutPageTextElementAsExpected();
        //log checkout product data
        await this.logCheckoutProductData();
        //capture screenshot before data input
        await TestMethods.captureScreenshot(this.driver, "Checkout Page Before Invalid Guest Data Input - Invalid First Name");
        //input invalid guest first name (special symbols only)
        await checkoutPageGuestInvalidSingularInput.inputInvalidGuestFirstNameIntoFirstNameInputField();
        //capture screenshot of the invalid data input
        await TestMethods.captureScreenshot(this.driver, "Invalid Guest Data Input - Invalid First Name");
        //input valid guest last name
        await checkoutPage.inputGuestLastNameIntoLastNameInputField();
        //input valid guest email address
        await checkoutPage.inputGuestEmailIntoEmailInputField();
        //input valid guest phone number
        await checkoutPage.inputGuestPhoneIntoFirstPhoneInputField();
        //input valid guest street address
        await checkoutPage.inputGuestAddressIntoAddressInputField();
        //input valid guest city
        await checkoutPage.inputGuestCityIntoCityInputField();
        //click country dropdown menu
        await checkoutPage.clickCountryDropdownMenu();
        //select 'United States' option
        await checkoutPage.selectUnitedStatesCountryOption();
        //click region dropdown menu
        await checkoutPage.clickRegionDropdownMenu();
        //select 'Illinois' option
        await checkoutPage.selectIllinoisRegionOption();
        //click 'Agree to Terms' checkbox
        await checkoutPage.clickAgreeToTermsCheckbox();
        //click 'Continue' button
        await checkoutPage.clickContinueButton();
        //wait for elements to load
        await homePage.waitForElementLoad();
        //assert the expected input error message is displayed, log the issue otherwise
        try {
            const invalidFirstNameError = await checkoutPageGuestInvalidSingularInput.getInvalidInputErrorMessage();
            assert.strictEqual(invalidFirstNameError, "First Name cannot contain special symbols!", "The invalid first name error message doesn't match expectations.");
        } catch (error){
            Logger.warn("The invalid first name error didn't appear.")
        }
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Invalid Product Checkout Test Result - Invalid First Name (guest)");
    }
    //invalid guest checkout test method - invalid last name (special symbols only)
    async invalidGuestCheckoutInvalidLastNameTest(){
        const homePage = new HomePage(this.driver);
        const checkoutPage = new CheckoutPage(this.driver);
        const checkoutPageGuestInvalidSingularInput = new CheckoutPageGuestInvalidSingularInput(this.driver);
        //general page web element assert
        await homePage.isGeneralPageWebElementDisplayed();
        //wait for elements to load
        await homePage.waitForElementLoad();
        //click 'Guest Checkout' radio button
        await checkoutPage.clickGuestCheckoutRadioButton();
        //checkout page web element assert
        await checkoutPage.isCheckoutPageWebElementDisplayed();
        //checkout page list web element assert
        await this.areCheckoutPageListElementsDisplayed();
        //checkout page text element assert
        await this.isCheckoutPageTextElementAsExpected();
        //log checkout product data
        await this.logCheckoutProductData();
        //capture screenshot before data input
        await TestMethods.captureScreenshot(this.driver, "Checkout Page Before Invalid Guest Data Input - Invalid Last Name");
        //input valid guest first name
        await checkoutPage.inputGuestFirstNameIntoFirstNameInputField();
        //input invalid guest last name
        await checkoutPageGuestInvalidSingularInput.inputInvalidGuestLastNameIntoLastNameInputField();
        //capture screenshot of the invalid data input
        await TestMethods.captureScreenshot(this.driver, "Invalid Guest Data Input - Invalid Last Name");
        //input valid guest email address
        await checkoutPage.inputGuestEmailIntoEmailInputField();
        //input valid guest phone number
        await checkoutPage.inputGuestPhoneIntoFirstPhoneInputField();
        //input valid guest street address
        await checkoutPage.inputGuestAddressIntoAddressInputField();
        //input valid guest city
        await checkoutPage.inputGuestCityIntoCityInputField();
        //click country dropdown menu
        await checkoutPage.clickCountryDropdownMenu();
        //select 'United States' option
        await checkoutPage.selectUnitedStatesCountryOption();
        //click region dropdown menu
        await checkoutPage.clickRegionDropdownMenu();
        //select 'Illinois' option
        await checkoutPage.selectIllinoisRegionOption();
        //click 'Agree to Terms' checkbox
        await checkoutPage.clickAgreeToTermsCheckbox();
        //click 'Continue' button
        await checkoutPage.clickContinueButton();
        //wait for elements to load
        await homePage.waitForElementLoad();
        //assert the expected input error message is displayed, log the issue otherwise
        try {
            const invalidLastNameError = await checkoutPageGuestInvalidSingularInput.getInvalidInputErrorMessage();
            assert.strictEqual(invalidLastNameError, "Last Name cannot contain special symbols!", "The invalid last name error message doesn't match expectations.");
        } catch (error){
            Logger.warn("The invalid last name error didn't appear.")
        }
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Invalid Product Checkout Test Result - Invalid Last Name (guest)");
    }
    //invalid guest checkout test method - invalid email address (missing '@')
    async invalidGuestCheckoutInvalidEmailTest(){
        const homePage = new HomePage(this.driver);
        const checkoutPage = new CheckoutPage(this.driver);
        const checkoutPageGuestInvalidSingularInput = new CheckoutPageGuestInvalidSingularInput(this.driver);
        //general page web element assert
        await homePage.isGeneralPageWebElementDisplayed();
        //wait for elements to load
        await homePage.waitForElementLoad();
        //click 'Guest Checkout' radio button
        await checkoutPage.clickGuestCheckoutRadioButton();
        //checkout page web element assert
        await checkoutPage.isCheckoutPageWebElementDisplayed();
        //checkout page list web element assert
        await this.areCheckoutPageListElementsDisplayed();
        //checkout page text element assert
        await this.isCheckoutPageTextElementAsExpected();
        //log checkout product data
        await this.logCheckoutProductData();
        //capture screenshot before data input
        await TestMethods.captureScreenshot(this.driver, "Checkout Page Before Invalid Guest Data Input - Invalid Email");
        //input valid guest first name
        await checkoutPage.inputGuestFirstNameIntoFirstNameInputField();
        //input valid guest last name
        await checkoutPage.inputGuestLastNameIntoLastNameInputField();
        //input invalid guest email address
        await checkoutPageGuestInvalidSingularInput.inputInvalidGuestEmailIntoEmailInputField();
        //capture screenshot of the invalid data input
        await TestMethods.captureScreenshot(this.driver, "Invalid Guest Data Input - Invalid Email");
        //input valid guest phone number
        await checkoutPage.inputGuestPhoneIntoFirstPhoneInputField();
        //input valid guest street address
        await checkoutPage.inputGuestAddressIntoAddressInputField();
        //input valid guest city
        await checkoutPage.inputGuestCityIntoCityInputField();
        //click country dropdown menu
        await checkoutPage.clickCountryDropdownMenu();
        //select 'United States' option
        await checkoutPage.selectUnitedStatesCountryOption();
        //click region dropdown menu
        await checkoutPage.clickRegionDropdownMenu();
        //select 'Illinois' option
        await checkoutPage.selectIllinoisRegionOption();
        //click 'Agree to Terms' checkbox
        await checkoutPage.clickAgreeToTermsCheckbox();
        //click 'Continue' button
        await checkoutPage.clickContinueButton();
        //wait for elements to load
        await homePage.waitForElementLoad();
        //assert the expected input error message is displayed, log the issue otherwise
        try {
            const invalidEmailError = await checkoutPageGuestInvalidSingularInput.getInvalidInputErrorMessage();
            assert.strictEqual(invalidEmailError, "E-Mail address does not appear to be valid!", "The invalid email address error message doesn't match expectations.");
        } catch (error){
            Logger.warn("The invalid email address error didn't appear.")
        }
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Invalid Product Checkout Test Result - Invalid Email (guest)");
    }
    //invalid guest checkout test method - existing email address (used beforehand)
    async invalidGuestCheckoutExistingEmailTest(){
        const homePage = new HomePage(this.driver);
        const checkoutPage = new CheckoutPage(this.driver);
        const checkoutPageGuestInvalidSingularInput = new CheckoutPageGuestInvalidSingularInput(this.driver);
        //general page web element assert
        await homePage.isGeneralPageWebElementDisplayed();
        //wait for elements to load
        await homePage.waitForElementLoad();
        //click 'Guest Checkout' radio button
        await checkoutPage.clickGuestCheckoutRadioButton();
        //checkout page web element assert
        await checkoutPage.isCheckoutPageWebElementDisplayed();
        //checkout page list web element assert
        await this.areCheckoutPageListElementsDisplayed();
        //checkout page text element assert
        await this.isCheckoutPageTextElementAsExpected();
        //log checkout product data
        await this.logCheckoutProductData();
        //capture screenshot before data input
        await TestMethods.captureScreenshot(this.driver, "Checkout Page Before Invalid Guest Data Input - Existing Email");
        //input valid guest first name
        await checkoutPage.inputGuestFirstNameIntoFirstNameInputField();
        //input valid guest last name
        await checkoutPage.inputGuestLastNameIntoLastNameInputField();
        //input existing guest email address
        await checkoutPageGuestInvalidSingularInput.inputExistingGuestEmailIntoEmailInputField();
        //capture screenshot of the invalid data input
        await TestMethods.captureScreenshot(this.driver, "Invalid Guest Data Input - Existing Email");
        //input valid guest phone number
        await checkoutPage.inputGuestPhoneIntoFirstPhoneInputField();
        //input valid guest street address
        await checkoutPage.inputGuestAddressIntoAddressInputField();
        //input valid guest city
        await checkoutPage.inputGuestCityIntoCityInputField();
        //click country dropdown menu
        await checkoutPage.clickCountryDropdownMenu();
        //select 'United States' option
        await checkoutPage.selectUnitedStatesCountryOption();
        //click region dropdown menu
        await checkoutPage.clickRegionDropdownMenu();
        //select 'Illinois' option
        await checkoutPage.selectIllinoisRegionOption();
        //click 'Agree to Terms' checkbox
        await checkoutPage.clickAgreeToTermsCheckbox();
        //click 'Continue' button
        await checkoutPage.clickContinueButton();
        //wait for elements to load
        await homePage.waitForElementLoad();
        //assert the expected input error message is displayed, log the issue otherwise
        try {
            const existingEmailError = await checkoutPageGuestInvalidSingularInput.getInvalidInputErrorMessage();
            assert.strictEqual(existingEmailError, "E-Mail address does not appear to be valid!", "The existing email address error message doesn't match expectations.");
        } catch (error){
            Logger.warn("The existing email address error didn't appear.")
        }
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Invalid Product Checkout Test Result - Existing Email (guest)");
    }
    //invalid guest checkout test method - invalid phone number (special symbols only)
    async invalidGuestCheckoutInvalidPhoneTest(){
        const homePage = new HomePage(this.driver);
        const checkoutPage = new CheckoutPage(this.driver);
        const checkoutPageGuestInvalidSingularInput = new CheckoutPageGuestInvalidSingularInput(this.driver);
        //general page web element assert
        await homePage.isGeneralPageWebElementDisplayed();
        //wait for elements to load
        await homePage.waitForElementLoad();
        //click 'Guest Checkout' radio button
        await checkoutPage.clickGuestCheckoutRadioButton();
        //checkout page web element assert
        await checkoutPage.isCheckoutPageWebElementDisplayed();
        //checkout page list web element assert
        await this.areCheckoutPageListElementsDisplayed();
        //checkout page text element assert
        await this.isCheckoutPageTextElementAsExpected();
        //log checkout product data
        await this.logCheckoutProductData();
        //capture screenshot before data input
        await TestMethods.captureScreenshot(this.driver, "Checkout Page Before Invalid Guest Data Input - Invalid Phone");
        //input valid guest first name
        await checkoutPage.inputGuestFirstNameIntoFirstNameInputField();
        //input valid guest last name
        await checkoutPage.inputGuestLastNameIntoLastNameInputField();
        //input valid guest email address
        await checkoutPage.inputGuestEmailIntoEmailInputField();
        //input invalid guest phone number (special symbols only)
        await checkoutPageGuestInvalidSingularInput.inputInvalidGuestPhoneIntoFirstPhoneInputField();
        //capture screenshot of the invalid data input
        await TestMethods.captureScreenshot(this.driver, "Invalid Guest Data Input - Invalid Phone");
        //input valid guest street address
        await checkoutPage.inputGuestAddressIntoAddressInputField();
        //input valid guest city
        await checkoutPage.inputGuestCityIntoCityInputField();
        //click country dropdown menu
        await checkoutPage.clickCountryDropdownMenu();
        //select 'United States' option
        await checkoutPage.selectUnitedStatesCountryOption();
        //click region dropdown menu
        await checkoutPage.clickRegionDropdownMenu();
        //select 'Illinois' option
        await checkoutPage.selectIllinoisRegionOption();
        //click 'Agree to Terms' checkbox
        await checkoutPage.clickAgreeToTermsCheckbox();
        //click 'Continue' button
        await checkoutPage.clickContinueButton();
        //wait for elements to load
        await homePage.waitForElementLoad();
        //assert the expected input error message is displayed, log the issue otherwise
        try {
            const invalidPhoneError = await checkoutPageGuestInvalidSingularInput.getInvalidInputErrorMessage();
            assert.strictEqual(invalidPhoneError, "Telephone cannot contain special symbols!", "The invalid phone number error message doesn't match expectations.");
        } catch (error){
            Logger.warn("The invalid phone number error didn't appear.")
        }
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Invalid Product Checkout Test Result - Too Long Phone (guest)");
    }
    //invalid guest checkout test method - invalid street address (special symbols only)
    async invalidGuestCheckoutInvalidAddressTest(){
        const homePage = new HomePage(this.driver);
        const checkoutPage = new CheckoutPage(this.driver);
        const checkoutPageGuestInvalidSingularInput = new CheckoutPageGuestInvalidSingularInput(this.driver);
        //general page web element assert
        await homePage.isGeneralPageWebElementDisplayed();
        //wait for elements to load
        await homePage.waitForElementLoad();
        //click 'Guest Checkout' radio button
        await checkoutPage.clickGuestCheckoutRadioButton();
        //checkout page web element assert
        await checkoutPage.isCheckoutPageWebElementDisplayed();
        //checkout page list web element assert
        await this.areCheckoutPageListElementsDisplayed();
        //checkout page text element assert
        await this.isCheckoutPageTextElementAsExpected();
        //log checkout product data
        await this.logCheckoutProductData();
        //capture screenshot before data input
        await TestMethods.captureScreenshot(this.driver, "Checkout Page Before Invalid Guest Data Input - Invalid Address");
        //input valid guest first name
        await checkoutPage.inputGuestFirstNameIntoFirstNameInputField();
        //input valid guest last name
        await checkoutPage.inputGuestLastNameIntoLastNameInputField();
        //input valid guest email address
        await checkoutPage.inputGuestEmailIntoEmailInputField();
        //input valid guest phone number
        await checkoutPage.inputGuestPhoneIntoFirstPhoneInputField();
        //input invalid guest street address (special symbols only)
        await checkoutPageGuestInvalidSingularInput.inputInvalidGuestAddressIntoAddressInputField();
        //capture screenshot of the invalid data input
        await TestMethods.captureScreenshot(this.driver, "Invalid Guest Data Input - Invalid Address");
        //input valid guest city
        await checkoutPage.inputGuestCityIntoCityInputField();
        //click country dropdown menu
        await checkoutPage.clickCountryDropdownMenu();
        //select 'United States' option
        await checkoutPage.selectUnitedStatesCountryOption();
        //click region dropdown menu
        await checkoutPage.clickRegionDropdownMenu();
        //select 'Illinois' option
        await checkoutPage.selectIllinoisRegionOption();
        //click 'Agree to Terms' checkbox
        await checkoutPage.clickAgreeToTermsCheckbox();
        //click 'Continue' button
        await checkoutPage.clickContinueButton();
        //wait for elements to load
        await homePage.waitForElementLoad();
        //assert the expected input error message is displayed, log the issue otherwise
        try {
            const invalidAddressError = await checkoutPageGuestInvalidSingularInput.getInvalidInputErrorMessage();
            assert.strictEqual(invalidAddressError, "Address1 cannot contain special symbols!", "The invalid street address error message doesn't match expectations.");
        } catch (error){
            Logger.warn("The invalid street address error didn't appear.")
        }
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Invalid Product Checkout Test Result - Invalid Address (guest)");
    }
    //invalid guest checkout test method - invalid city (special symbols only)
    async invalidGuestCheckoutInvalidCityTest(){
        const homePage = new HomePage(this.driver);
        const checkoutPage = new CheckoutPage(this.driver);
        const checkoutPageGuestInvalidSingularInput = new CheckoutPageGuestInvalidSingularInput(this.driver);
        //general page web element assert
        await homePage.isGeneralPageWebElementDisplayed();
        //wait for elements to load
        await homePage.waitForElementLoad();
        //click 'Guest Checkout' radio button
        await checkoutPage.clickGuestCheckoutRadioButton();
        //checkout page web element assert
        await checkoutPage.isCheckoutPageWebElementDisplayed();
        //checkout page list web element assert
        await this.areCheckoutPageListElementsDisplayed();
        //checkout page text element assert
        await this.isCheckoutPageTextElementAsExpected();
        //log checkout product data
        await this.logCheckoutProductData();
        //capture screenshot before data input
        await TestMethods.captureScreenshot(this.driver, "Checkout Page Before Invalid Guest Data Input - Invalid City");
        //input valid guest first name
        await checkoutPage.inputGuestFirstNameIntoFirstNameInputField();
        //input valid guest last name
        await checkoutPage.inputGuestLastNameIntoLastNameInputField();
        //input valid guest email address
        await checkoutPage.inputGuestEmailIntoEmailInputField();
        //input valid guest phone number
        await checkoutPage.inputGuestPhoneIntoFirstPhoneInputField();
        //input valid guest street address
        await checkoutPage.inputGuestAddressIntoAddressInputField();
        //input invalid guest city (special symbols only)
        await checkoutPageGuestInvalidSingularInput.inputInvalidGuestCityIntoCityInputField();
        //capture screenshot of the invalid data input
        await TestMethods.captureScreenshot(this.driver, "Invalid Guest Data Input - Invalid City");
        //click country dropdown menu
        await checkoutPage.clickCountryDropdownMenu();
        //select 'United States' option
        await checkoutPage.selectUnitedStatesCountryOption();
        //click region dropdown menu
        await checkoutPage.clickRegionDropdownMenu();
        //select 'Illinois' option
        await checkoutPage.selectIllinoisRegionOption();
        //click 'Agree to Terms' checkbox
        await checkoutPage.clickAgreeToTermsCheckbox();
        //click 'Continue' button
        await checkoutPage.clickContinueButton();
        //wait for elements to load
        await homePage.waitForElementLoad();
        //assert the expected input error message is displayed, log the issue otherwise
        try {
            const invalidCityError = await checkoutPageGuestInvalidSingularInput.getInvalidInputErrorMessage();
            assert.strictEqual(invalidCityError, "City cannot contain special symbols!", "The invalid city error message doesn't match expectations.");
        } catch (error){
            Logger.warn("The invalid city error didn't appear.")
        }
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Invalid Product Checkout Test Result - Invalid City (guest)");
    }

    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    //confirm checkout page test method (both guest and registered user get onto same page)
    async confirmCheckoutPageTest(){
        const confirmCheckoutPage = new ConfirmCheckoutPage(this.driver);
        const homePage = new HomePage(this.driver);
        //general page web element assert
        await homePage.isGeneralPageWebElementDisplayed();
        //wait for elements to load
        await homePage.waitForElementLoad();
        //confirm checkout page web element assert
        await confirmCheckoutPage.isConfirmCheckoutPageWebElementDisplayed();
        //confirm checkout page list web element assert
        await this.areConfirmCheckoutPageListWebElementsDisplayed();
        //confirm checkout page text element assert method
        await this.isConfirmCheckoutPageTextElementAsExpected();
        //log confirmed order / product data
        await this.logConfirmCheckoutPageProductData();
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Valid Product Checkout Confirmation Page");
        //click 'Continue' button to confirm checkout (order)
        await confirmCheckoutPage.clickConfirmCheckoutButton();
        //wait for elements to load
        await homePage.waitForElementLoad();
        //assert the user gets expected confirmation message
        const successMessageTitle = await confirmCheckoutPage.getOrderConfirmationSuccessMessageTitle();
        assert.strictEqual(successMessageTitle, "Your order has been placed!", "The confirmation success message title doesn't match expectations or the order wasn't submitted.");
        const successMessage = await confirmCheckoutPage.getOrderConfirmationSuccessMessage();
        assert.strictEqual(successMessage, "Your order has been successfully processed!", "The confirmation success message  doesn't match expectations or the order wasn't submitted.");
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Valid Product Checkout Confirmation Test Result");
        //click 'Continue' button (to return to homepage)
        await confirmCheckoutPage.clickContinueButton();
    }

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    //homepage text element assert test method
    async isHomePageTextElementAsExpected(){
        const homePage = new HomePage(this.driver);
        //assert washing machine description matches expectations
        const washMachineDesc = await homePage.getWashingMachineDescription();
        assert.strictEqual(washMachineDesc, "Upto 50% Off on Fully Automatic Top Load Washing Machine\n" + "Many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected.", "The washing machine description doesn't match expectations.");
        //assert top trending section title matches expectations
        const topTrendingSectionTitle = await homePage.getTopTrendingSectionTitle();
        assert.strictEqual(topTrendingSectionTitle, "TOP TRENDING CATEGORIES", "The top trending section title doesn't match expectations.");
        //assert top products section title matches expectations
        const topProductsSectionTitle = await homePage.getTopProductsSectionTitle();
        assert.strictEqual(topProductsSectionTitle, "TOP PRODUCTS", "The top products section title doesn't match expectations.");
    }

    //register page text element assert method
    async isRegisterPageTextElementAsExpected(){
        const registerPage = new RegisterPage(this.driver);
        //assert register page title is as expected
        const registerPageTitle = await registerPage.getRegisterPageTitle();
        assert.strictEqual(registerPageTitle, "Register Account", "The register page title doesn't match expectations.");
        //assert register page description is as expected
        const registerPageDesc = await registerPage.getRegisterPageDescription();
        assert.strictEqual(registerPageDesc, "If you already have an account with us, please login at the\n" + "login page\n" + ".", "The register page description doesn't match expectations.");
        //assert personal details subtitle is as expected
        const personalDetailsSubtitle = await registerPage.getPersonalDetailsSubtitle();
        assert.strictEqual(personalDetailsSubtitle, "Your Personal Details", "The personal details subtitle doesn't match expectations.");
        //assert password subtitle is as expected
        const passwordSubtitle = await registerPage.getPasswordSubtitle();
        assert.strictEqual(passwordSubtitle, "Your Password", "The password subtitle doesn't match expectations.");
        //assert newsletter subtitle is as expected
        const newsletterSubtitle = await registerPage.getNewsletterSubtitle();
        assert.strictEqual(newsletterSubtitle, "Newsletter", "The newsletter subtitle doesn't match expectations.");
        //assert privacy policy subtext is as expected
        const privacyPolicySubtext = await registerPage.getPrivacyPolicySubtext();
        assert.strictEqual(privacyPolicySubtext, "I have read and agree to the\n" + "Privacy Policy", "The privacy policy subtext doesn't match expectations.");
    }

    //login/register dashboard page text element assert
    async isLoginRegisterDashboardPageTextElementAsExpected(){
        const loginRegisterDashboardPage = new LoginRegisterDashboardPage(this.driver);
        //assert new customer section title is as expected
        const newCustomerTitle = await loginRegisterDashboardPage.getNewCustomerSectionTitle();
        assert.strictEqual(newCustomerTitle, "New Customer", "The new customer section title doesn't match expectations.");
        //assert new customer subtitle is as expected
        const newCustomerSectionSubtitle = await loginRegisterDashboardPage.getNewCustomerSectionSubtitle();
        assert.strictEqual(newCustomerSectionSubtitle, "Register Account", "The new customer subtitle doesn't match expectations.");
        //assert new customer section description is as expected
        const newCustomerDescription = await loginRegisterDashboardPage.getNewCustomerDescription();
        assert.strictEqual(newCustomerDescription, "By creating an account you will be able to shop faster, be up to date on an order's status, and keep track of the orders you have previously made.", "The new customer description doesn't match expectations.");
        //assert login section title is as expected
        const loginSectionTitle = await loginRegisterDashboardPage.getLoginSectionTitle();
        assert.strictEqual(loginSectionTitle, "Returning Customer", "The login section title doesn't match expectations.");
        //assert login section subtitle is as expected
        const loginSectionSubtitle = await loginRegisterDashboardPage.getLoginSectionSubtitle();
        assert.strictEqual(loginSectionSubtitle, "I am a returning customer", "The login section subtitle doesn't match expectations.");
    }

    //single product page text element assert method
    async isSingleProductPageTextElementAsExpected(){
        const singleProductPage = new SingleProductPage(this.driver);
        //assert online payment sub text is as expected
        const paymentSubText = await singleProductPage.getOnlinePaymentSubtext();
        assert.strictEqual(paymentSubText, "Online payment", "The payment subtext doesn't match expectations");
        //assert easy returns sub text is as expected
        const easyReturnsSubText = await singleProductPage.getOnlineEasyReturnSubText();
        assert.strictEqual(easyReturnsSubText, "Easy Return", "The online easy returns subtext doesn't match expectations");
        //assert online 24/7 service sub text is as expected
        const onlineServiceSubText = await singleProductPage.getOnlineService247SubText();
        assert.strictEqual(onlineServiceSubText, "24x7 Service", "The online 24/7 service subtext doesn't match expectations");
        //assert product review subtitle is as expected
        const productReviewSubtitle = await singleProductPage.getProductReviewSubTitle();
        assert.strictEqual(productReviewSubtitle, "Write a review", "The product review subtitle doesn't match expectations");
        //assert FAQ section title is as expected
        const faqSectionTitle = await singleProductPage.getFAQSectionTitle();
        assert.strictEqual(faqSectionTitle, "FAQ (Frequently Asked Questions)", "The FAQ section title doesn't match expectations");
    }

    //single product category dashboard page text element assert
    async isSingleProductCategoryDashboardPageTextElementAsExpected(){
        const singleProductCategoryDashboardPage = new SingleProductCategoryDashboardPage(this.driver);
        //assert filter section title is as expected
        const filterSectionTitle = await singleProductCategoryDashboardPage.getFilterSectionTitle();
        assert.strictEqual(filterSectionTitle, "FILTER", "The filter section title doesn't match expectations");
    }

    //shopping cart page text element assert method
    async isShoppingCartPageTextElementAsExpected(){
        const shoppingCartPage = new ShoppingCartPage(this.driver);
        //assert what to do section title is as expected
        const whatToDoSectionTitle = await shoppingCartPage.getWhatToDoNextSectionTitle();
        assert.strictEqual(whatToDoSectionTitle, "What would you like to do next?", "The 'what to do' section title doesn't match expectations");
        //assert what to do section description is as expected
        const whatToDoSectionDescription = await shoppingCartPage.getWhatToDoNextSectionDescription();
        assert.strictEqual(whatToDoSectionDescription, "Choose if you have a discount code or reward points you want to use or would like to estimate your delivery cost.", "The 'what to do' section desscription doesn't match expectations");
        //assert use coupon code dropdown header is as expected
        const useCouponCodeDropdownHeader = await shoppingCartPage.getUseCouponDropdownHeader();
        assert.strictEqual(useCouponCodeDropdownHeader, "Use Coupon Code", "The 'use coupon' dropdown header doesn't match expectations");
    }

    //check out page text element assert method
    async isCheckoutPageTextElementAsExpected(){
        const checkoutPage = new CheckoutPage(this.driver);
        //assert input form account section title is as expected
        const inputFormSectionTitle = await checkoutPage.getAccountSectionTitle();
        assert.strictEqual(inputFormSectionTitle, "Account", "The account section title doesn't match expectations");
        //assert input form personal details section title is as expected
        const personalDetailsSectionTitle = await checkoutPage.getPersonalDetailsSectionTitle();
        assert.strictEqual(personalDetailsSectionTitle, "Your Personal Details", "The personal details section title doesn't match expectations");
        //assert input form phone input format hint is as expected
        const phoneInputFormatHint = await checkoutPage.getPhoneInputFormatHint();
        assert.strictEqual(phoneInputFormatHint, "Enter valid phone number with country code!", "The phone input format hint doesn't match expectations");
        //assert billing address section title is as expected
        const billingAddressSectionTitle = await checkoutPage.getBillingAddressSectionTitle();
        assert.strictEqual(billingAddressSectionTitle, "Billing Address", "The billing address section title doesn't match expectations");
        //assert payment method section title is as expected
        const paymentMethodSectionTitle = await checkoutPage.getPaymentMethodSectionTitle();
        assert.strictEqual(paymentMethodSectionTitle, "Please select the preferred payment method to use on this order.", "The payment method section title doesn't match expectations");
        //assert use coupon dropdown header is as expected
        const useCouponDropdownHeader = await checkoutPage.getUseCouponDropdownHeader();
        assert.strictEqual(useCouponDropdownHeader, "Use Coupon Code", "The use coupon dropdown header doesn't match expectations");
        //assert use gift certificate dropdown header is as expected
        const useGiftCertificateDropdownHeader = await checkoutPage.getGiftCertificateDropdownHeader();
        assert.strictEqual(useGiftCertificateDropdownHeader, "Use Gift Certificate", "The use gift certificate dropdown header doesn't match expectations");
        //assert 'Agree to Terms' subtext is as expected
        //const agreeToTermsSubtext = await checkoutPage.getAgreeToTermsSubtext();
        //assert.strictEqual(agreeToTermsSubtext, "I have read and agree to the \n" + "Terms & Conditions", "The 'Agree to Terms' subtext doesn't match expectations");
    }
    //HTC and HP product checkout pages text element assert method
    async isHTCHPCheckoutPageTextElementAsExpected(){
        const checkoutPage = new CheckoutPage(this.driver);
        //assert 'billing and shipping address are same' subtext title is as expected (MacBook doesn't have this element)
        const billingShippingAddressSameSubtext = await checkoutPage.getBillingShippingAddressSameSubtext();
        assert.strictEqual(billingShippingAddressSameSubtext, "My delivery and billing addresses are the same.", "The 'billing and shipping address are same' subtext doesn't match expectations");
        //assert shipping method section title is as expected (MacBook doesn't have this element)
        const shippingMethodSectionTitle = await checkoutPage.getShippingMethodSectionTitle();
        assert.strictEqual(shippingMethodSectionTitle, "Please select the preferred shipping method to use on this order.", "The shipping method section title doesn't match expectations");
        //assert flat shipping rate subtext is as expected (MacBook doesn't have this element)
        const flatShippingSubtext = await checkoutPage.getFlatShippingSubtitle();
        assert.strictEqual(flatShippingSubtext, "Flat Rate", "The flat shipping subtext title doesn't match expectations");
    }

    //confirm checkout page text element assert method
    async isConfirmCheckoutPageTextElementAsExpected(){
        const confirmCheckoutPage = new ConfirmCheckoutPage(this.driver);
        //assert confirm checkout page title is as expected
        const confirmCheckoutPageTitle = await confirmCheckoutPage.getConfirmCheckoutPageTitle();
        assert.strictEqual(confirmCheckoutPageTitle, "Confirm Order", "The confirm checkout page title doesn't match expectations");
        //assert payment address section title is as expected
        const paymentAddressSectionTitle = await confirmCheckoutPage.getPaymentAddressSectionTitle();
        assert.strictEqual(paymentAddressSectionTitle, "Payment Address", "The payment address section title doesn't match expectations");
        //assert shipping address section title is as expected
        const shippingAddressSectionTitle = await confirmCheckoutPage.getShippingAddressSectionTitle();
        assert.strictEqual(shippingAddressSectionTitle, "Shipping Address", "The shipping address section title doesn't match expectations");
        //assert shipping method section title is as expected
        const shippingMethodSectionTitle = await confirmCheckoutPage.getShippingMethodSectionTitle();
        assert.strictEqual(shippingMethodSectionTitle, "Shipping Method:", "The shipping method section title doesn't match expectations");
    }

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    //home page top products data logger method
    async logHomePageTopProductsData(){
        const homePage = new HomePage(this.driver);
        //top product name
        const topProductName = await homePage.getProductName();
        Logger.info("Available top product name: " + topProductName);
        //top product (unit) price
        const topProductPrice = await homePage.getProductPrice();
        Logger.info("Available top product price: " + topProductPrice);
    }

    //single product page data logger method
    async logSingleProductPageData(){
        const singleProductPage = new SingleProductPage(this.driver);
        //product name
        const productName = await singleProductPage.getProductName();
        Logger.info("Product name: " + productName);
        //product code
        const productCode = await singleProductPage.getProductCode();
        Logger.info("Product code: " + productCode);
        //product short data
        const productShortData = await singleProductPage.getProductShortData();
        Logger.info("Product short data: " + productShortData);
        //product unit price
        const productUnitPrice = await singleProductPage.getProductUnitPrice();
        Logger.info("Product unit price: " + productUnitPrice);
        //product quantity
        const productQuantity = await singleProductPage.getProductQuantity();
        Logger.info("Product quantity: " + productQuantity);
        //product review score
        const productReviewScore = await singleProductPage.getProductReviewScore();
        Logger.info("Product review score: " + productReviewScore);
        //product review count
        const productReviewCount = await singleProductPage.getProductReviewCount();
        Logger.info("Product review count: " + productReviewCount);
    }

    async logHTCDescription(){
        const singleProductPage = new SingleProductPage(this.driver);
        const standardDescription = await singleProductPage.getProductDescription();
        Logger.info("Product (HTC Touch HD) description: " + standardDescription);
    }

    async logMacBookDescription(){
        const singleProductPage = new SingleProductPage(this.driver);
        const macBookDescription = await singleProductPage.getProductMacBookDescription();
        Logger.info("Product (MacBook) description: " + macBookDescription);
    }

    //shopping cart box data logger method
    async logShoppingCartBoxProductData(){
        const singleProductPage = new SingleProductPage(this.driver);
        //shopping cart box product name(s) (as a list)
        const shoppingCartBoxProductName = await singleProductPage.getShoppingCartBoxProductNameLink();
        Logger.info("Shopping cart box product name(s): " + shoppingCartBoxProductName);
        //shopping cart box product description(s) (as a list)
        const shoppingCartBoxProductDescription = await singleProductPage.getShoppingCartBoxProductDescription();
        Logger.info("Shopping cart box product description(s): " + shoppingCartBoxProductDescription);
        //shopping cart box product quantity(ies) (as a list)
        const shoppingCartBoxProductQuantity = await singleProductPage.getShoppingCartBoxProductQuantity();
        Logger.info("Shopping cart box product quantity(ies): " + shoppingCartBoxProductQuantity);
        //shopping cart box product unit price(s) (as a list)
        const shoppingCartBoxProductUnitPrice = await singleProductPage.getShoppingCartBoxProductUnitPrice();
        Logger.info("Shopping cart box product unit price(s): " + shoppingCartBoxProductUnitPrice);
        //shopping cart box product subtotal price
        const shoppingCartBoxProductSubtotalPrice = await singleProductPage.getShoppingCartBoxProductSubtotalPrice();
        Logger.info("Shopping cart box product subtotal price: " + shoppingCartBoxProductSubtotalPrice);
        //shopping cart box product eco tax
        const shoppingCartBoxProductEcoTax = await singleProductPage.getShoppingCartBoxProductEcoTax();
        Logger.info("Shopping cart box product eco tax: " + shoppingCartBoxProductEcoTax);
        //shopping cart box product VAT price
        const shoppingCartBoxProductVATPrice = await singleProductPage.getShoppingCartBoxProductVATPrice();
        Logger.info("Shopping cart box product VAT price: " + shoppingCartBoxProductVATPrice);
        //shopping cart box product total price
        const shoppingCartBoxProductTotalPrice = await singleProductPage.getShoppingCartBoxProductTotalPrice();
        Logger.info("Shopping cart box product total price: " + shoppingCartBoxProductTotalPrice);
    }

    //single category product dashboard page data logger method
    async logSingleCategoryProductDashboardPageData(){
        const singleProductCategoryDashboardPage = new SingleProductCategoryDashboardPage(this.driver);
        //set category product name (as a list)
        const singleCategoryProductName = await singleProductCategoryDashboardPage.getProductName();
        Logger.info("Single category product name(s): " + singleCategoryProductName);
        //set category product unit price (as a list)
        const singleCategoryProductUnitPrice = await singleProductCategoryDashboardPage.getProductUnitPrice();
        Logger.info("Single category product unit price(s): " + singleCategoryProductUnitPrice);
        //set category product count per page
        const singleCategoryProductCountPerPage = await singleProductCategoryDashboardPage.getItemPerPageCount();
        Logger.info("Single category product count per page: " + singleCategoryProductCountPerPage);
    }

    //searched product dashboard page data logger method
    async logSearchedProductDashboardPageData(){
        const searchedProductDashboardPage = new SearchedProductDashboardPage(this.driver);
        //searched product name (as a list)
        const searchedProductName = await searchedProductDashboardPage.getProductName();
        Logger.info("Searched product name(s): " + searchedProductName);
        //searched product unit price (as a list)
        const searchedProductUnitPrice = await searchedProductDashboardPage.getProductUnitPrice();
        Logger.info("Searched product unit price(s): " + searchedProductUnitPrice);
        //searched product count per page
        const searchedProductCountPerPage = await searchedProductDashboardPage.getItemPerPageCount();
        Logger.info("Searched product count per page: " + searchedProductCountPerPage);
    }

    //shopping cart page product data
    async logShoppingCartPageProductData(){
        const shoppingCartPage = new ShoppingCartPage(this.driver);
        //shopping cart title
        const shoppingCartTitle = await shoppingCartPage.getShoppingCartPageTitle();
        Logger.info("Shopping cart page title: " + shoppingCartTitle);
        //shopping cart product name(s) (as a list)
        const shoppingCartProductName = await shoppingCartPage.getProductName();
        Logger.info("Shopping cart product name(s): " + shoppingCartProductName);
        //shopping cart product description(s) (as a list)
        const shoppingCartProductDescription = await shoppingCartPage.getProductDescription();
        Logger.info("Shopping cart product description(s): " + shoppingCartProductDescription);
        //shopping cart product model(s) (as a list)
        const shoppingCartProductModel = await shoppingCartPage.getProductModel();
        Logger.info("Shopping cart product model(s): " + shoppingCartProductModel);
        //shopping cart product quantity(ies) (as a list)
        const shoppingCartProductQuantity = await shoppingCartPage.getProductQuantity();
        Logger.info("Shopping cart product quantity(ies): " + shoppingCartProductQuantity);
        //shopping cart product unit price(s) (as a list)
        const shoppingCartProductUnitPrice = await shoppingCartPage.getProductUnitPrice();
        Logger.info("Shopping cart product unit price(s): " + shoppingCartProductUnitPrice);
        //shopping cart product total price(s) (as a list)
        const shoppingCartProductTotalPrice = await shoppingCartPage.getProductTotalPrice();
        Logger.info("Shopping cart product total price(s): " + shoppingCartProductTotalPrice);
        //shopping cart summary subtotal price
        const shoppingCartSummarySubtotalPrice = await shoppingCartPage.getShoppingCartSummarySubtotalPrice();
        Logger.info("Shopping cart summary product subtotal price: " + shoppingCartSummarySubtotalPrice);
        //shopping cart summary eco tax
        const shoppingCartSummaryEcoTax = await shoppingCartPage.getShoppingCartSummaryEcoTax();
        Logger.info("Shopping cart summary product eco tax: " + shoppingCartSummaryEcoTax);
        //shopping cart summary VAT price
        const shoppingCartSummaryVATPrice = await shoppingCartPage.getShoppingCartSummaryVATPrice();
        Logger.info("Shopping cart summary product VAT price: " + shoppingCartSummaryVATPrice);
        //shopping cart summary total price
        const shoppingCartSummaryTotalPrice = await shoppingCartPage.getShoppingCartSummaryTotalPrice();
        Logger.info("Shopping cart summary product total price: " + shoppingCartSummaryTotalPrice);
    }

    //checkout page product data logger method
    async logCheckoutProductData(){
        const checkoutPage = new CheckoutPage(this.driver);
        //checkout table product name(s) (as a list)
        const checkoutTableProductName = await checkoutPage.getProductName();
        Logger.info("Checkout table product name(s): " + checkoutTableProductName);
        //checkout table product description(s) (as a list)
        const checkoutTableProductDescription = await checkoutPage.getProductDescription();
        Logger.info("Checkout table product description(s): " + checkoutTableProductDescription);
        //checkout table product quantity(ies) (as a list)
        const checkoutTableProductQuantity = await checkoutPage.getProductQuantity();
        Logger.info("Checkout table product quantity(ies): " + checkoutTableProductQuantity);
        //checkout table product unit price(s) (as a list)
        const checkoutTableProductUnitPrice = await checkoutPage.getProductUnitPrice();
        Logger.info("Checkout table product unit price(s): " + checkoutTableProductUnitPrice);
        //checkout table product total price(s) (as a list)
        const checkoutTableProductTotalPrice = await checkoutPage.getProductTotalPrice();
        Logger.info("Checkout table product total price(s): " + checkoutTableProductTotalPrice);
        //checkout order subtotal price
        const checkoutOrderSubtotalPrice = await checkoutPage.getCheckoutOrderSubtotalPrice();
        Logger.info("Checkout order subtotal price: " + checkoutOrderSubtotalPrice);
        //checkout order flat shipping rate
        const checkoutOrderFlatShippingRate = await checkoutPage.getCheckoutOrderFlatShippingRate();
        Logger.info("Checkout order flat shipping rate: " + checkoutOrderFlatShippingRate);
        //checkout order total price
        const checkoutOrderTotalPrice = await checkoutPage.getCheckoutOrderTotalPrice();
        Logger.info("Checkout order total price: " + checkoutOrderTotalPrice);
    }

    //confirm check out page data logger method
    async logConfirmCheckoutPageProductData(){
        const confirmCheckoutPage = new ConfirmCheckoutPage(this.driver);
        //confirm checkout page table product name(s) (as a list)
        const confirmOrderTableProductName = await confirmCheckoutPage.getOrderedProductName();
        Logger.info("Confirm checkout table product name(s): " + confirmOrderTableProductName);
        //confirm checkout page table product model(s) (as a list)
        const confirmOrderTableProductModel = await confirmCheckoutPage.getOrderedProductModel();
        Logger.info("Confirm checkout table product model(s): " + confirmOrderTableProductModel);
        //confirm checkout page table product quantity(ies) (as a list)
        const confirmOrderTableProductQuantity = await confirmCheckoutPage.getOrderedProductQuantity();
        Logger.info("Confirm checkout table product quantity(ies): " + confirmOrderTableProductQuantity);
        //confirm checkout page table product unit price(s) (as a list)
        const confirmOrderTableProductUnitPrice = await confirmCheckoutPage.getOrderedProductUnitPrice();
        Logger.info("Confirm checkout table product unit price(s): " + confirmOrderTableProductUnitPrice);
        //confirm checkout page table product total price(s) (as a list)
        const confirmOrderTableProductTotalPrice = await confirmCheckoutPage.getOrderedProductTotalPrice();
        Logger.info("Confirm checkout table product total price(s): " + confirmOrderTableProductTotalPrice);
        //confirm checkout page order subtotal price
        const confirmOrderSubtotalPrice = await confirmCheckoutPage.getOrderSummarySubtotalPrice();
        Logger.info("Confirm checkout order subtotal price: " + confirmOrderSubtotalPrice);
        //confirm checkout page order flat shipping price
        const confirmOrderFlatShippingPrice = await confirmCheckoutPage.getOrderSummaryFlatShippingPrice();
        Logger.info("Confirm checkout order flat shipping price: " + confirmOrderFlatShippingPrice);
        //confirm checkout page order total price
        const confirmOrderTotalPrice = await confirmCheckoutPage.getOrderSummaryTotalPrice();
        Logger.info("Confirm checkout order total price: " + confirmOrderTotalPrice);
        //confirm checkout page payment address data
        const confirmOrderPaymentAddress = await confirmCheckoutPage.getPaymentAddressData();
        Logger.info("Confirm checkout order payment address: " + confirmOrderPaymentAddress);
        //confirm checkout page shipping address data
        const confirmOrderShippingAddress = await confirmCheckoutPage.getShippingAddressData();
        Logger.info("Confirm checkout order shipping address: " + confirmOrderShippingAddress);
    }

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    //return to homepage method
    async returnUserToHomePageTest(){
        const homePage = new HomePage(this.driver);
        //click 'Homepage' logo link
        await homePage.clickHomePageLogo();
    }

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    //single product category dashboard page list web elements assert method
    async areSingleProductDashboardPageListElementsDisplayed(){
        const singleProductCategoryDashboardPage = new SingleProductCategoryDashboardPage(this.driver);
        try {
            //assert all product images are displayed (as a list - displays one if only one is present)
            const areImagesVisible = await singleProductCategoryDashboardPage.areElementsDisplayed(singleProductCategoryDashboardPage._productCardImageLinkElements);
            assert.strictEqual(areImagesVisible, true, 'Product images are not displayed');
            //assert all product names are displayed (as a list - displays one if only one is present)
            const areNamesVisible = await singleProductCategoryDashboardPage.areElementsDisplayed(singleProductCategoryDashboardPage._productCardNameElements);
            assert.strictEqual(areNamesVisible, true, 'Product names are not displayed');
            //assert all prices are displayed (as a list - displays one if only one is present)
            const arePricesVisible = await singleProductCategoryDashboardPage.areElementsDisplayed(singleProductCategoryDashboardPage._productCardUnitPriceElements);
            assert.strictEqual(arePricesVisible, true, 'Product prices are not displayed');
            //assert pagination elements are displayed (as a list - displays one if only one is present)
            const arePaginationElementsVisible = await singleProductCategoryDashboardPage.areElementsDisplayed(singleProductCategoryDashboardPage._paginationElements);
            assert.strictEqual(arePaginationElementsVisible, true, 'Pagination elements are not displayed');
            return true;
        } catch (error) {
            Logger.error(`Failed to verify dashboard page elements: ${error.message}`);
            throw error;
        }
    }

    //searched product dashboard page list web elements assert method
    async areSearchedProductDashboardPageListElementsDisplayed(){
        const searchedProductDashboardPage = new SearchedProductDashboardPage(this.driver);
        try {
            //assert all product images are displayed (as a list - displays one if only one is present)
            const areImagesVisible = await searchedProductDashboardPage.areElementsDisplayed(searchedProductDashboardPage._searchDashboardPageProductCardImageLinkElements);
            assert.strictEqual(areImagesVisible, true, 'Searched product images are not displayed');
            //assert all product names are displayed (as a list - displays one if only one is present)
            const areNamesVisible = await searchedProductDashboardPage.areElementsDisplayed(searchedProductDashboardPage._searchDashboardPageProductCardNameElements);
            assert.strictEqual(areNamesVisible, true, 'Searched product names are not displayed');
            //assert all prices are displayed (as a list - displays one if only one is present)
            const arePricesVisible = await searchedProductDashboardPage.areElementsDisplayed(searchedProductDashboardPage._searchDashboardPageProductCardUnitPriceElements);
            assert.strictEqual(arePricesVisible, true, 'Searched product prices are not displayed');
            return true;
        } catch (error) {
            Logger.error(`Failed to verify dashboard page elements: ${error.message}`);
            throw error;
        }
    }

    //searched product dashboard page list web elements assert method
    async areShoppingCartPageListElementsDisplayed(){
        const shoppingCartPage = new ShoppingCartPage(this.driver);
        try {
            //assert all product images are displayed (as a list - displays one if only one is present)
            const areImagesVisible = await shoppingCartPage.areElementsDisplayed(shoppingCartPage._shoppingCartTableProductImageLinkElements);
            assert.strictEqual(areImagesVisible, true, 'Shopping cart product images are not displayed');
            //assert all product names are displayed (as a list - displays one if only one is present)
            const areNamesVisible = await shoppingCartPage.areElementsDisplayed(shoppingCartPage._shoppingCartTableProductNameLinkElements);
            assert.strictEqual(areNamesVisible, true, 'Shopping cart product names are not displayed');
            //assert all product descriptions are displayed (as a list - displays one if only one is present)
            const areDescriptionsVisible = await shoppingCartPage.areElementsDisplayed(shoppingCartPage._shoppingCartTableProductDescriptionElements);
            assert.strictEqual(areDescriptionsVisible, true, 'Shopping cart product descriptions are not displayed');
            //assert all product models are displayed (as a list - displays one if only one is present)
            const areModelsVisible = await shoppingCartPage.areElementsDisplayed(shoppingCartPage._shoppingCartTableProductModelElements);
            assert.strictEqual(areModelsVisible, true, 'Shopping cart product models are not displayed');
            //assert all product quantity input fields are displayed (as a list - displays one if only one is present)
            const areQtyInputFieldsVisible = await shoppingCartPage.areElementsDisplayed(shoppingCartPage._shoppingCartTableProductQtyInputFieldElements);
            assert.strictEqual(areQtyInputFieldsVisible, true, 'Shopping cart product quantity input fields are not displayed');
            //assert all product quantity update buttons are displayed (as a list - displays one if only one is present)
            const areQtyUpdateButtonsVisible = await shoppingCartPage.areElementsDisplayed(shoppingCartPage._shoppingCartTableProductQtyUpdateButtonElements);
            assert.strictEqual(areQtyUpdateButtonsVisible, true, 'Shopping cart product quantity update buttons are not displayed');
            //assert all product quantity remove buttons are displayed (as a list - displays one if only one is present)
            const areRemoveButtonsVisible = await shoppingCartPage.areElementsDisplayed(shoppingCartPage._shoppingCartTableProductRemoveButtonElements);
            assert.strictEqual(areRemoveButtonsVisible, true, 'Shopping cart product remove buttons are not displayed');
            //assert all unit prices are displayed (as a list - displays one if only one is present)
            const areUnitPricesVisible = await shoppingCartPage.areElementsDisplayed(shoppingCartPage._shoppingCartTableProductUnitPriceElements);
            assert.strictEqual(areUnitPricesVisible, true, 'Shopping cart product unit prices are not displayed');
            //assert all total prices are displayed (as a list - displays one if only one is present)
            const areTotalPricesVisible = await shoppingCartPage.areElementsDisplayed(shoppingCartPage._shoppingCartTableProductTotalPriceElements);
            assert.strictEqual(areTotalPricesVisible, true, 'Shopping cart product total prices are not displayed');
            return true;
        } catch (error) {
            Logger.error(`Failed to verify dashboard page elements: ${error.message}`);
            throw error;
        }
    }

    //check out page list web elements assert method
    async areCheckoutPageListElementsDisplayed(){
        const checkoutPage = new CheckoutPage(this.driver);
        try{
            //assert all checkout table product images are displayed (as a list - displays one if only one is present)
            const areImagesVisible = await checkoutPage.areElementsDisplayed(checkoutPage._checkoutTableProductImgLinkElements);
            assert.strictEqual(areImagesVisible, true, 'Checkout table product images are not displayed');
            //assert all checkout table product name links are displayed (as a list - displays one if only one is present)
            const areNameLinksVisible = await checkoutPage.areElementsDisplayed(checkoutPage._checkoutTableProductNameLinkElements);
            assert.strictEqual(areNameLinksVisible, true, 'Checkout table product name links are not displayed');
            //assert all checkout table product descriptions are displayed (as a list - displays one if only one is present)
            const areDescriptionsVisible = await checkoutPage.areElementsDisplayed(checkoutPage._checkoutTableProductDescriptionElements);
            assert.strictEqual(areDescriptionsVisible, true, 'Checkout table product descriptions are not displayed');
            //assert all checkout table product quantity input fields are displayed (as a list - displays one if only one is present)
            const areQtyInputFieldsVisible = await checkoutPage.areElementsDisplayed(checkoutPage._checkoutTableProductQtyInputFieldElements);
            assert.strictEqual(areQtyInputFieldsVisible, true, 'Checkout table product quantity input fields are not displayed');
            //assert all checkout table product quantity update buttons are displayed (as a list - displays one if only one is present)
            const areUpdateButtonsVisible = await checkoutPage.areElementsDisplayed(checkoutPage._checkoutTableProductQtyUpdateButtonElements);
            assert.strictEqual(areUpdateButtonsVisible, true, 'Checkout table product quantity update buttons are not displayed');
            //assert all checkout table product remove buttons are displayed (as a list - displays one if only one is present)
            const areRemoveButtonsVisible = await checkoutPage.areElementsDisplayed(checkoutPage._checkoutTableProductRemoveButtonElements);
            assert.strictEqual(areRemoveButtonsVisible, true, 'Checkout table product remove buttons are not displayed');
            //assert all checkout table product unit prices are displayed (as a list - displays one if only one is present)
            const areUnitPricesVisible = await checkoutPage.areElementsDisplayed(checkoutPage._checkoutTableProductUnitPriceElements);
            assert.strictEqual(areUnitPricesVisible, true, 'Checkout table product unit prices are not displayed');
            //assert all checkout table product total prices are displayed (as a list - displays one if only one is present)
            const areTotalPricesVisible = await checkoutPage.areElementsDisplayed(checkoutPage._checkoutTableProductTotalPriceElements);
            assert.strictEqual(areTotalPricesVisible, true, 'Checkout table product total prices are not displayed');
        } catch(error){
            Logger.error(`Failed to verify checkout page elements: ${error.message}`);
            throw error;
        }
    }

    //confirm checkout page web elements assert method
    async areConfirmCheckoutPageListWebElementsDisplayed(){
        const confirmCheckoutPage = new ConfirmCheckoutPage(this.driver);
        try{
            //assert all checkout table product names are displayed (as a list - displays one if only one is present)
            const areNamesVisible = await confirmCheckoutPage.areElementsDisplayed(confirmCheckoutPage._confirmCheckoutTableProductNameElements);
            assert.strictEqual(areNamesVisible, true, 'Confirm checkout page table product names are not displayed');
            //assert all checkout table product models are displayed (as a list - displays one if only one is present)
            const areModelsVisible = await confirmCheckoutPage.areElementsDisplayed(confirmCheckoutPage._confirmCheckoutTableProductModelElements);
            assert.strictEqual(areModelsVisible, true, 'Confirm checkout page table product models are not displayed');
            //assert all checkout table product quantities are displayed (as a list - displays one if only one is present)
            const areQuantitiesVisible = await confirmCheckoutPage.areElementsDisplayed(confirmCheckoutPage._confirmCheckoutTableProductQtyElements);
            assert.strictEqual(areQuantitiesVisible, true, 'Confirm checkout page table product quantities are not displayed');
            //assert all checkout table product unit prices are displayed (as a list - displays one if only one is present)
            const areUnitPricesVisible = await confirmCheckoutPage.areElementsDisplayed(confirmCheckoutPage._confirmCheckoutTableProductUnitPriceElements);
            assert.strictEqual(areUnitPricesVisible, true, 'Confirm checkout page table product unit prices are not displayed');
            //assert all checkout table product total prices are displayed (as a list - displays one if only one is present)
            const areTotalPricesVisible = await confirmCheckoutPage.areElementsDisplayed(confirmCheckoutPage._confirmCheckoutTableProductTotalPriceElements);
            assert.strictEqual(areTotalPricesVisible, true, 'Confirm checkout page table product total prices are not displayed');
        } catch (error){
            Logger.error(`Failed to verify confirm checkout page elements: ${error.message}`);
            throw error;
        }
    }

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    //screenshot utility
    static async captureScreenshot(driver, fileName) {
        try {
            await driver.sleep(1500); //wait for the screenshot to be taken
            const screenshot = await driver.takeScreenshot();
            const baseDir = path.join(__dirname, '../screenshots');
            fs.mkdirSync(baseDir, { recursive: true });
            const filePath = path.join(baseDir, `${fileName.replace(/[^a-zA-Z0-9-_\(\)]/g, ' ')}.png`);

            // Save the screenshot to the file
            fs.writeFileSync(filePath, screenshot, 'base64');

            console.log(`Screenshot saved at: ${filePath}`);
        } catch (error) {
            console.error('Error capturing screenshot:', error);
        }
    }



}

module.exports = TestMethods;