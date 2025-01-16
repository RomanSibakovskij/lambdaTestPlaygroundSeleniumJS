const TestMethods = require('./utils/TestMethods');
const BaseTest = require('./utils/BaseTest');

describe('Login And Register Dashboard Page Tests', () => {
    let testMethods; //testMethods initializer
    let baseTest; //baseTest initializer

    beforeEach(async function () {
        baseTest = new BaseTest();  //BaseTest initialization
        await baseTest.beforeEach();  //beforeEach caller for setup (from BaseTest)
        testMethods = new TestMethods(baseTest.driver);  //driver passage to TestMethods
    });

    jest.setTimeout(40000) //timer for the whole single test run, otherwise throws a timeout error
    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


    describe('Valid User Login And Logout Tests', () => {

        //Test 003 -> valid user logout test
        test("Valid User Logout Test", async function () {
            //user navigation to 'Register' page test
            await testMethods.navigateToRegisterPageTest();
            //valid user account registration test
            await testMethods.validUserAccountRegisterTest();
            //user logout test
            await testMethods.userLogoutTest();
        });

        //Test 004 -> valid user login test
        test("Valid User Login Test", async function () {
            //user navigation to 'Register' page test
            await testMethods.navigateToRegisterPageTest();
            //valid user account registration test
            await testMethods.validUserAccountRegisterTest();
            //user logout test
            await testMethods.userLogoutTest();
            //user login test
            await testMethods.validUserLoginTest();
        });
    });


    describe('Invalid User Login Tests - No Singular Input', () => {

        //Test 004a -> invalid user login test - no login email address
        test("Invalid User Login Test - No Login Email", async function () {
            //user navigation to 'Register' page test
            await testMethods.navigateToRegisterPageTest();
            //valid user account registration test
            await testMethods.validUserAccountRegisterTest();
            //user logout test
            await testMethods.userLogoutTest();
            //invalid user login test - no email address
            await testMethods.invalidUserLoginNoEmailTest();
        });

        //Test 004b -> invalid user login test - no login password
        test("Invalid User Login Test - No Login Password", async function () {
            //user navigation to 'Register' page test
            await testMethods.navigateToRegisterPageTest();
            //valid user account registration test
            await testMethods.validUserAccountRegisterTest();
            //user logout test
            await testMethods.userLogoutTest();
            //invalid user login test - no password
            await testMethods.invalidUserLoginNoPasswordTest();
        });

    });

    describe('Invalid User Login Tests - Invalid Singular Input', () => {

        //Test 004c -> invalid user login test - invalid login email address
        test("Invalid User Login Test - Invalid Login Email", async function () {
            //user navigation to 'Register' page test
            await testMethods.navigateToRegisterPageTest();
            //valid user account registration test
            await testMethods.validUserAccountRegisterTest();
            //user logout test
            await testMethods.userLogoutTest();
            //invalid user login test - invalid email address
            await testMethods.invalidUserLoginInvalidEmailTest();
        });

        //Test 004d -> invalid user login test - invalid login password
        test("Invalid User Login Test - Invalid Login Password", async function () {
            //user navigation to 'Register' page test
            await testMethods.navigateToRegisterPageTest();
            //valid user account registration test
            await testMethods.validUserAccountRegisterTest();
            //user logout test
            await testMethods.userLogoutTest();
            //invalid user login test - invalid password
            await testMethods.invalidUserLoginInvalidPasswordTest();
        });

    });


    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    //driver clean-up after each test run
    afterEach(async function() {
        await baseTest.afterEach();  //afterEach caller for cleanup (from BaseTest)
    });

});

