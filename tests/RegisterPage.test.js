const TestMethods = require('./utils/TestMethods');
const BaseTest = require('./utils/BaseTest');

describe('Register Page Tests', () => {
    let testMethods; //testMethods initializer
    let baseTest; //baseTest initializer

    beforeEach(async function () {
        baseTest = new BaseTest();  //BaseTest initialization
        await baseTest.beforeEach();  //beforeEach caller for setup (from BaseTest)
        testMethods = new TestMethods(baseTest.driver);  //driver passage to TestMethods
    });

    jest.setTimeout(40000) //timer for the whole single test run, otherwise throws a timeout error
    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


    describe('Valid User Account Register Test', () => {

        //Test 002 -> valid user account registration test
        test("Valid User Account Registration Test", async function () {
            //user navigation to 'Register' page test
            await testMethods.navigateToRegisterPageTest();
            //valid user account registration test
            await testMethods.validUserAccountRegisterTest();
        });
    });

    describe('Invalid User Account Register Tests - No Singular Input', () => {

        //Test 002a -> invalid user account registration test - no first name
        test("Invalid User Account Registration Test - No First Name", async function () {
            //user navigation to 'Register' page test
            await testMethods.navigateToRegisterPageTest();
            //invalid user account registration test - no first name
            await testMethods.invalidUserAccountRegisterNoFirstNameTest();
        });

        //Test 002b -> invalid user account registration test - no last name
        test("Invalid User Account Registration Test - No Last Name", async function () {
            //user navigation to 'Register' page test
            await testMethods.navigateToRegisterPageTest();
            //invalid user account registration test - no last name
            await testMethods.invalidUserAccountRegisterNoLastNameTest();
        });

        //Test 002c -> invalid user account registration test - no email address
        test("Invalid User Account Registration Test - No Email Address", async function () {
            //user navigation to 'Register' page test
            await testMethods.navigateToRegisterPageTest();
            //invalid user account registration test - no email address
            await testMethods.invalidUserAccountRegisterNoEmailAddressTest();
        });

        //Test 002d -> invalid user account registration test - no phone number
        test("Invalid User Account Registration Test - No Phone Number", async function () {
            //user navigation to 'Register' page test
            await testMethods.navigateToRegisterPageTest();
            //invalid user account registration test - no phone number
            await testMethods.invalidUserAccountRegisterNoPhoneTest();
        });

        //Test 002e -> invalid user account registration test - no password
        test("Invalid User Account Registration Test - No Password", async function () {
            //user navigation to 'Register' page test
            await testMethods.navigateToRegisterPageTest();
            //invalid user account registration test - no password
            await testMethods.invalidUserAccountRegisterNoPasswordTest();
        });

        //Test 002f -> invalid user account registration test - no confirm password
        test("Invalid User Account Registration Test - No Confirm Password", async function () {
            //user navigation to 'Register' page test
            await testMethods.navigateToRegisterPageTest();
            //invalid user account registration test - no confirm password
            await testMethods.invalidUserAccountRegisterNoConfirmPasswordTest();
        });

        //Test 002g -> invalid user account registration test - no privacy checkbox click
        test("Invalid User Account Registration Test - No Privacy Checkbox Click", async function () {
            //user navigation to 'Register' page test
            await testMethods.navigateToRegisterPageTest();
            //invalid user account registration test - no privacy checkbox click
            await testMethods.invalidUserAccountRegisterNoPrivacyTest();
        });

    });

    describe('Invalid User Account Register Test - Too Short Singular Input', () => {

        //Test 002h -> invalid user account registration test - too short first name (the account gets created - test has failed)
        test("Invalid User Account Registration Test - Too Short First Name", async function () {
            //user navigation to 'Register' page test
            await testMethods.navigateToRegisterPageTest();
            //invalid user account registration test - too short first name (1 char)
            await testMethods.invalidUserAccountRegisterTooShortFirstNameTest();
        });

        //Test 002i -> invalid user account registration test - too short last name (the account gets created - test has failed)
        test("Invalid User Account Registration Test - Too Short Last Name", async function () {
            //user navigation to 'Register' page test
            await testMethods.navigateToRegisterPageTest();
            //invalid user account registration test - too short last name (1 char)
            await testMethods.invalidUserAccountRegisterTooShortLastNameTest();
        });

        //Test 002j -> invalid user account registration test - too short email address (the account gets created - test has failed)
        test("Invalid User Account Registration Test - Too Short Email", async function () {
            //user navigation to 'Register' page test
            await testMethods.navigateToRegisterPageTest();
            //invalid user account registration test - too short email address (1 char - name, domain)
            await testMethods.invalidUserAccountRegisterTooShortEmailTest();
        });

        //Test 002k -> invalid user account registration test - too short phone number
        test("Invalid User Account Registration Test - Too Short Phone Number", async function () {
            //user navigation to 'Register' page test
            await testMethods.navigateToRegisterPageTest();
            //invalid user account registration test - too short phone number (2 digits)
            await testMethods.invalidUserAccountRegisterTooShortPhoneTest();
        });

        //Test 002l -> invalid user account registration test - too short password / confirm password
        test("Invalid User Account Registration Test - Too Short Password / Confirm Password", async function () {
            //user navigation to 'Register' page test
            await testMethods.navigateToRegisterPageTest();
            //invalid user account registration test - too short password / confirm password (3 chars)
            await testMethods.invalidUserAccountRegisterTooShortPasswordAndConfirmTest();
        });

    });

    describe('Invalid User Account Register Test - Too Long Singular Input', () => {

        //Test 002m -> invalid user account registration test - too long first name
        test("Invalid User Account Registration Test - Too Long First Name", async function () {
            //user navigation to 'Register' page test
            await testMethods.navigateToRegisterPageTest();
            //invalid user account registration test - too long first name (33 char)
            await testMethods.invalidUserAccountRegisterTooLongFirstNameTest();
        });

        //Test 002n -> invalid user account registration test - too long last name
        test("Invalid User Account Registration Test - Too Long Last Name", async function () {
            //user navigation to 'Register' page test
            await testMethods.navigateToRegisterPageTest();
            //invalid user account registration test - too long last name (33 chars)
            await testMethods.invalidUserAccountRegisterTooLongLastNameTest();
        });

        //Test 002o -> invalid user account registration test - too long email address
        test("Invalid User Account Registration Test - Too Long Email", async function () {
            //user navigation to 'Register' page test
            await testMethods.navigateToRegisterPageTest();
            //invalid user account registration test - too long email address (100 chars - name, domain)
            await testMethods.invalidUserAccountRegisterTooLongEmailTest();
        });

        //Test 002p -> invalid user account registration test - too long phone number
        test("Invalid User Account Registration Test - Too Long Phone Number", async function () {
            //user navigation to 'Register' page test
            await testMethods.navigateToRegisterPageTest();
            //invalid user account registration test - too long phone number (33 digits)
            await testMethods.invalidUserAccountRegisterTooLongPhoneTest();
        });

        //Test 002q -> invalid user account registration test - too long password / confirm password (the upper limit doesn't apply - test has failed - with 21 chars it fails too)
        test("Invalid User Account Registration Test - Too Long Password / Confirm Password", async function () {
            //user navigation to 'Register' page test
            await testMethods.navigateToRegisterPageTest();
            //invalid user account registration test - too long password / confirm password (22 chars)
            await testMethods.invalidUserAccountRegisterTooLongPasswordAndConfirmTest();
        });

    });

    describe('Invalid User Account Register Test - Invalid Singular Input', () => {

        //Test 002r -> invalid user account registration test - invalid first name (special symbols only) (the account has been created - test has failed)
        test("Invalid User Account Registration Test - Invalid First Name", async function () {
            //user navigation to 'Register' page test
            await testMethods.navigateToRegisterPageTest();
            //invalid user account registration test - invalid first name (special symbols only)
            await testMethods.invalidUserAccountRegisterInvalidFirstNameTest();
        });

        //Test 002s -> invalid user account registration test - invalid last name (special symbols only) (the account has been created - test has failed)
        test("Invalid User Account Registration Test - Invalid Last Name", async function () {
            //user navigation to 'Register' page test
            await testMethods.navigateToRegisterPageTest();
            //invalid user account registration test - invalid last name (special symbols only)
            await testMethods.invalidUserAccountRegisterInvalidLastNameTest();
        });

        //Test 002t -> invalid user account registration test - invalid email address (missing '@')
        test("Invalid User Account Registration Test - Too Long Email", async function () {
            //user navigation to 'Register' page test
            await testMethods.navigateToRegisterPageTest();
            //invalid user account registration test - invalid email address (missing '@')
            await testMethods.invalidUserAccountRegisterInvalidEmailTest();
        });

        //Test 002u -> invalid user account registration test - existing email address (used in manual testing beforehand)
        test("Invalid User Account Registration Test - Existing Email", async function () {
            //user navigation to 'Register' page test
            await testMethods.navigateToRegisterPageTest();
            //invalid user account registration test - existing email address (used in manual testing beforehand)
            await testMethods.invalidUserAccountRegisterExistingEmailTest();
        });

        //Test 002v -> invalid user account registration test - invalid phone number (chars and special symbols) (the account has been created - test has failed)
        test("Invalid User Account Registration Test - Invalid Phone Number", async function () {
            //user navigation to 'Register' page test
            await testMethods.navigateToRegisterPageTest();
            //invalid user account registration test - invalid phone number (chars and special symbols)
            await testMethods.invalidUserAccountRegisterInvalidPhoneTest();
        });

    });


    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    //driver clean-up after each test run
    afterEach(async function() {
        await baseTest.afterEach();  //afterEach caller for cleanup (from BaseTest)
    });

});