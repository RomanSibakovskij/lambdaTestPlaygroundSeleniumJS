const TestMethods = require('./utils/TestMethods');
const BaseTest = require('./utils/BaseTest');

describe('Confirm Checkout Page Tests', () => {
    let testMethods; //testMethods initializer
    let baseTest; //baseTest initializer

    beforeEach(async function () {
        baseTest = new BaseTest();  //BaseTest initialization
        await baseTest.beforeEach();  //beforeEach caller for setup (from BaseTest)
        testMethods = new TestMethods(baseTest.driver);  //driver passage to TestMethods
    });

    jest.setTimeout(100000) //timer for the whole single test run, otherwise throws a timeout error
    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    //due to webpage bug instead of HP25 Headphones the user now gets HP LP3065

    //single product check out confirmation tests

    describe('Single Featured Product (HP LP3065) Checkout Confirmation Tests', () => {

        //Test 008 -> valid single featured product (HP LP3065) check out test (as a guest)
        test("Single Featured Product (HP LP3065) Checkout Confirmation Test - As A Guest", async function () {
            //add single featured product (HP LP3065) to cart test (as a guest)
            await testMethods.addSingleHP25HeadphonesSetToCartTest();
            //add single featured product (HP LP3065) to check out test (as a guest - both guest and registered user share the same shopping cart method)
            await testMethods.addHTCTouchProductToCheckoutTest();
            //valid single product (HP LP3065) check out test (as a guest)
            await testMethods.validProductCheckoutGuestTest();
            //valid single product (HP LP3065) check out confirmation test (as a guest)
            await testMethods.confirmCheckoutPageTest();
        });


        //Test 008a -> single featured product (HP LP3065) check out test (as a registered user)
        test("Single Featured Product (HP LP3065) Checkout Confirmation Test - As A Registered User", async function () {
            //user navigation to 'Register' page test
            await testMethods.navigateToRegisterPageTest();
            //valid user account registration test
            await testMethods.validUserAccountRegisterTest();
            //return to 'Homepage' test
            await testMethods.returnUserToHomePageTest();
            //add single featured product (HP LP3065) to cart test (as a registered user)
            await testMethods.addSingleHP25HeadphonesSetToCartRegUserTest();
            //add single featured product (HP LP3065) to check out test (as a registered user - both guest and registered user share the same shopping cart method)
            await testMethods.addHTCTouchProductToCheckoutTest();
            //single featured product (HP LP3065) check out test  (as a registered user)
            await testMethods.validProductCheckoutRegUserTest();
            //single featured product (HP LP3065) check out confirmation test  (as a registered user)
            await testMethods.confirmCheckoutPageTest();
        });

    });

    describe('Single Searched Product Checkout Confirmation Tests', () => {

        //Test 008b -> single searched product (HTC Touch HD) check out confirmation test (as a guest)
        test("Single Searched Product (HTC Touch HD) Checkout Confirmation Test - As A Guest", async function () {
            //add single featured product (HTC Touch HD) to cart test (as a guest)
            await testMethods.addSearchedHTCTouchProductToCartTest();
            //add single searched product (HTC Touch HD) to check out test (as a guest - both guest and registered user share the same shopping cart method)
            await testMethods.addHTCTouchProductToCheckoutTest();
            //valid single searched product (HTC Touch HD) check out test (as a guest)
            await testMethods.validProductCheckoutGuestTest();
            //valid single searched product (HTC Touch HD) check out confirmation test (as a guest)
            await testMethods.confirmCheckoutPageTest();
        });

        //Test 008c -> single searched product (HTC Touch HD) check out confirmation test (as a registered user)
        test("Single Searched Product (HTC Touch HD) Checkout Confirmation Test - As A Registered User", async function () {
            //user navigation to 'Register' page test
            await testMethods.navigateToRegisterPageTest();
            //valid user account registration test
            await testMethods.validUserAccountRegisterTest();
            //return to 'Homepage' test
            await testMethods.returnUserToHomePageTest();
            //add single searched product (HTC Touch HD) to cart test (as a registered user - due to skipping review part, the methods are shared)
            await testMethods.addSearchedHTCTouchProductToCartTest();
            //add single searched product (HTC Touch HD) to check out test (as a registered user - both guest and registered user share the same shopping cart method)
            await testMethods.addHTCTouchProductToCheckoutTest();
            //valid single searched product (HTC Touch HD) check out test  (as a registered user)
            await testMethods.validProductCheckoutRegUserTest();
            //valid single product (HTC Touch HD) check out confirmation test (as a registered user)
            await testMethods.confirmCheckoutPageTest();
        });

    });

    //multiple products check out confirmation tests

    describe('Multiple Featured Products (HP LP3065) Checkout Confirmation Tests', () => {

        //Test 008d -> multiple featured products (HP LP3065) to check out confirmation test (as a guest)
        test("Multiple Featured Products (HP LP3065) Checkout Confirmation Test - As A Guest", async function () {
            //add multiple featured products (HP LP3065) to cart test (as a guest)
            await testMethods.addMultipleHP25HeadphonesSetsToCartTest();
            //add multiple featured products (HP LP3065) to check out test (as a guest - both guest and registered user share the same shopping cart method)
            await testMethods.addHTCTouchProductToCheckoutTest();
            //valid multiple featured products (HP LP3065) check out test (as a guest)
            await testMethods.validProductCheckoutGuestTest();
            //valid multiple featured products (HP LP3065) check out confirmation test (as a guest)
            await testMethods.confirmCheckoutPageTest();
        });

        //Test 008e -> multiple featured products (HP LP3065) check out confirmation test (as a registered user)
        test("Multiple Featured Products (HP LP3065) Checkout Confirmation Test - As A Registered User", async function () {
            //user navigation to 'Register' page test
            await testMethods.navigateToRegisterPageTest();
            //valid user account registration test
            await testMethods.validUserAccountRegisterTest();
            //return to 'Homepage' test
            await testMethods.returnUserToHomePageTest();
            //add multiple featured products (HP LP3065) to cart test (as a registered user)
            await testMethods.addMultipleHP25HeadphonesSetsToCartRegUserTest();
            //add multiple featured products (HP LP3065) to check out test (as a registered user - both guest and registered user share the same shopping cart method)
            await testMethods.addHTCTouchProductToCheckoutTest();
            //valid multiple featured products (HP LP3065) check out test  (as a registered user)
            await testMethods.validProductCheckoutRegUserTest();
            //valid multiple featured products (HP LP3065) check out confirmation test (as a registered user)
            await testMethods.confirmCheckoutPageTest();
        });

    });

    describe('Multiple Searched Products Checkout Confirmation Tests', () => {

        //Test 008f -> multiple searched products (HTC Touch HD) check out confirmation test (as a guest)
        test("Multiple Searched Products (HTC Touch HD) Checkout Confirmation Test - As A Guest", async function () {
            //add multiple searched products (HTC Touch HD) to cart test (as a guest)
            await testMethods.addMultipleSearchedHTCTouchProductsToCartTest();
            //add multiple searched products (HTC Touch HD) to check out test (as a guest - both guest and registered user share the same shopping cart method)
            await testMethods.addHTCTouchProductToCheckoutTest();
            //valid multiple searched products (HTC Touch HD) check out test (as a guest)
            await testMethods.validProductCheckoutGuestTest();
            //valid multiple searched products (HTC Touch HD) check out confirmation test (as a guest)
            await testMethods.confirmCheckoutPageTest();
        });

        //Test 008g -> multiple searched products (HTC Touch HD) check out confirmation test (as a registered user)
        test("Multiple Searched Products (HTC Touch HD) Checkout Confirmation Test - As A Registered User", async function () {
            //user navigation to 'Register' page test
            await testMethods.navigateToRegisterPageTest();
            //valid user account registration test
            await testMethods.validUserAccountRegisterTest();
            //return to 'Homepage' test
            await testMethods.returnUserToHomePageTest();
            //add multiple searched products (HTC Touch HD) to cart test (as a registered user - due to skipping review part, the methods are shared)
            await testMethods.addMultipleSearchedHTCTouchProductsToCartTest();
            //add multiple searched products (HTC Touch HD) to check out test (as a guest - both guest and registered user share the same shopping cart method)
            await testMethods.addHTCTouchProductToCheckoutTest();
            //valid multiple searched products (HTC Touch HD) check out test  (as a registered user)
            await testMethods.validProductCheckoutRegUserTest();
            //valid multiple searched products (HTC Touch HD) check out confirmation test (as a registered user)
            await testMethods.confirmCheckoutPageTest();
        });

    });

    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    //driver clean-up after each test run
    afterEach(async function() {
        await baseTest.afterEach();  //afterEach caller for cleanup (from BaseTest)
    });

});

