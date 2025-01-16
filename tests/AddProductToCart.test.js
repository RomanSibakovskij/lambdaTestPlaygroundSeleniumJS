const TestMethods = require('./utils/TestMethods');
const BaseTest = require('./utils/BaseTest');

describe('Product Addition To Cart Tests', () => {
    let testMethods; //testMethods initializer
    let baseTest; //baseTest initializer

    beforeEach(async function () {
        baseTest = new BaseTest();  //BaseTest initialization
        await baseTest.beforeEach();  //beforeEach caller for setup (from BaseTest)
        testMethods = new TestMethods(baseTest.driver);  //driver passage to TestMethods
    });

    jest.setTimeout(60000) //timer for the whole single test run, otherwise throws a timeout error
    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    //due to webpage bug instead of HP25 Headphones the user now gets HP LP3065

    describe('Add Single Featured Product (HP LP3065) To Checkout Tests', () => {

        //Test 005 -> add single featured product (HP LP3065) test (as a guest)
        test("Add Single Featured Product (HP LP3065) To Cart Test - As A Guest", async function () {
            //add single featured product (HP LP3065) to cart test (as a guest)
            await testMethods.addSingleHP25HeadphonesSetToCartTest();
        });

        //Test 005a -> add single featured product (HP LP3065) test (as a registered user)
        test("Add Single Featured Product (HP LP3065) To Cart Test - As A Registered User", async function () {
            //user navigation to 'Register' page test
            await testMethods.navigateToRegisterPageTest();
            //valid user account registration test
            await testMethods.validUserAccountRegisterTest();
            //return to 'Homepage' test
            await testMethods.returnUserToHomePageTest();
            //add single featured product (HP LP3065) to cart test (as a registered user)
            await testMethods.addSingleHP25HeadphonesSetToCartRegUserTest();
        });

    });

    describe('Add Single "Shop By Category" Product To Cart Tests', () => {

        //Test 005b -> add single category product (MacBook) to cart test (as a guest)
        test("Add Single 'Shop By Category' Product (MacBook) To Cart Test - As A Guest", async function () {
            //add single category product (MacBook) to cart test (as a guest)
            await testMethods.addSingularCategoryProductToCartTest();
        });

        //Test 005c -> add single category product (MacBook) to cart test (as a registered user)
        test("Add Single 'Shop By Category' Product (MacBook) To Cart Test - As A Registered User", async function () {
            //user navigation to 'Register' page test
            await testMethods.navigateToRegisterPageTest();
            //valid user account registration test
            await testMethods.validUserAccountRegisterTest();
            //return to 'Homepage' test
            await testMethods.returnUserToHomePageTest();
            //add single category product (MacBook) to cart test (as a registered user - due to skipping review part, the methods are shared)
            await testMethods.addSingularCategoryProductToCartTest();
        });

    });

    describe('Add Single Searched Product To Cart Tests', () => {

        //Test 005d -> add single searched product (HTC Touch HD) test (as a guest)
        test("Add Single Searched Product (HTC Touch HD) To Cart Test - As A Guest", async function () {
            //add single featured product (HTC Touch HD) to cart test (as a guest)
            await testMethods.addSearchedHTCTouchProductToCartTest();
        });

        //Test 005e -> add single searched product (HTC Touch HD) test (as a registered user)
        test("Add Single 'Shop By Category' Product (HTC Touch HD) To Cart Test - As A Registered User", async function () {
            //user navigation to 'Register' page test
            await testMethods.navigateToRegisterPageTest();
            //valid user account registration test
            await testMethods.validUserAccountRegisterTest();
            //return to 'Homepage' test
            await testMethods.returnUserToHomePageTest();
            //add single featured product (HTC Touch HD) to cart test (as a registered user - due to skipping review part, the methods are shared)
            await testMethods.addSearchedHTCTouchProductToCartTest();
        });

    });

    //multiple products addition to cart tests

    describe('Add Multiple Featured Products (HP LP3065) To Cart Tests', () => {

        //Test 005f -> add multiple featured products (HP LP3065) to cart test (as a guest)
        test("Add Multiple Featured Products (HP LP3065) To Cart Test - As A Guest", async function () {
            //add multiple featured products (HP LP3065) to cart test (as a guest)
            await testMethods.addMultipleHP25HeadphonesSetsToCartTest();
        });

        //Test 005g -> add multiple featured products (HP LP3065) test (as a registered user)
        test("Add Multiple Featured Products (HP LP3065) To Cart Test - As A Registered User", async function () {
            //user navigation to 'Register' page test
            await testMethods.navigateToRegisterPageTest();
            //valid user account registration test
            await testMethods.validUserAccountRegisterTest();
            //return to 'Homepage' test
            await testMethods.returnUserToHomePageTest();
            //add multiple featured products (HP LP3065) to cart test (as a registered user)
            await testMethods.addMultipleHP25HeadphonesSetsToCartRegUserTest();
        });

    });

    describe('Add Multiple "Shop By Category" Products To Cart Tests', () => {

        //Test 005h -> add multiple category products (MacBook) to cart test (as a guest)
        test("Add Multiple 'Shop By Category' Products (MacBook) To Cart Test - As A Guest", async function () {
            //add multiple category products (MacBook) to cart test (as a guest)
            await testMethods.addSingularCategoryMultipleProductsToCartTest();
        });

        //Test 005i -> add multiple category products (MacBook) to cart test (as a registered user)
        test("Add Multiple 'Shop By Category' Products (MacBook) To Cart Test - As A Registered User", async function () {
            //user navigation to 'Register' page test
            await testMethods.navigateToRegisterPageTest();
            //valid user account registration test
            await testMethods.validUserAccountRegisterTest();
            //return to 'Homepage' test
            await testMethods.returnUserToHomePageTest();
            //add multiple category products (MacBook) to cart test (as a registered user - due to skipping review part, the methods are shared)
            await testMethods.addSingularCategoryMultipleProductsToCartTest();
        });

    });

    describe('Add Multiple Searched Products To Cart Tests', () => {

        //Test 005j -> add multiple searched products (HTC Touch HD) test (as a guest)
        test("Add Multiple Searched Products (HTC Touch HD) To Cart Test - As A Guest", async function () {
            //add multiple searched products (HTC Touch HD) to cart test (as a guest)
            await testMethods.addMultipleSearchedHTCTouchProductsToCartTest();
        });

        //Test 005k -> add multiple searched products (HTC Touch HD) test (as a registered user)
        test("Add Multiple Searched Products (HTC Touch HD) To Cart Test - As A Registered User", async function () {
            //user navigation to 'Register' page test
            await testMethods.navigateToRegisterPageTest();
            //valid user account registration test
            await testMethods.validUserAccountRegisterTest();
            //return to 'Homepage' test
            await testMethods.returnUserToHomePageTest();
            //add multiple searched products (HTC Touch HD) to cart test (as a registered user - due to skipping review part, the methods are shared)
            await testMethods.addMultipleSearchedHTCTouchProductsToCartTest();
        });

    });


    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    //driver clean-up after each test run
    afterEach(async function() {
        await baseTest.afterEach();  //afterEach caller for cleanup (from BaseTest)
    });

});

