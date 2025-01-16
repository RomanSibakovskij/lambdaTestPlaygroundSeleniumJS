const TestMethods = require('./utils/TestMethods');
const BaseTest = require('./utils/BaseTest');

describe('HomePage Tests', () => {
    let testMethods; //testMethods initializer
    let baseTest; //baseTest initializer

    beforeEach(async function () {
        baseTest = new BaseTest();  //BaseTest initialization
        await baseTest.beforeEach();  //beforeEach caller for setup (from BaseTest)
        testMethods = new TestMethods(baseTest.driver);  //driver passage to TestMethods
    });

    jest.setTimeout(40000) //timer for the whole single test run, otherwise throws a timeout error
    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


    describe('Navigate To Register Page Test', () => {

        //Test 001 -> user navigation to register page test(non-registered)
        test("User Navigation To 'Create Account' Page Test", async function () {
            await testMethods.navigateToRegisterPageTest();
        });
    });


    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    //driver clean-up after each test run
    afterEach(async function() {
        await baseTest.afterEach();  //afterEach caller for cleanup (from BaseTest)
    });

});

