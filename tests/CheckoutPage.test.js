const TestMethods = require('./utils/TestMethods');
const BaseTest = require('./utils/BaseTest');

describe('Checkout Page Tests', () => {
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

    //valid single product check out tests

    describe('Single Featured Product (HP LP3065) Checkout Tests', () => {

        //Test 007 -> valid single featured product (HP LP3065) check out test (as a guest)
        test("Valid Single Featured Product (HP LP3065) Checkout Test - As A Guest", async function () {
            //add single featured product (HP LP3065) to cart test (as a guest)
            await testMethods.addSingleHP25HeadphonesSetToCartTest();
            //add single featured product (HP LP3065) to check out test (as a guest - both guest and registered user share the same shopping cart method)
            await testMethods.addHTCTouchProductToCheckoutTest();
            //valid single featured product (HP LP3065) check out test (as a guest)
            await testMethods.validProductCheckoutGuestTest();
        });


        //Test 007ab -> single featured product (HP LP3065) check out test (as a registered user)
        test("Single Featured Product (HP LP3065) Checkout Test - As A Registered User", async function () {
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
        });

    });

    describe('Single "Shop By Category" Product Checkout Tests', () => {

        //Test 007ac -> single 'shop by category' product (MacBook) check out test (as a guest) (checkout fails due to unavailability of payment method)
        test("Single 'Shop By Category' Product (MacBook) Checkout Test - As A Guest", async function () {
            //add single 'shop by category' product (MacBook) to cart test (as a guest)
            await testMethods.addSingularCategoryProductToCartTest();
            //add single 'shop by category' product (MacBook) to check out test (as a guest)
            await testMethods.addMacBookProductToCheckoutTest();
            //valid single 'shop by category' product (MacBook) check out test (as a guest)
            await testMethods.validProductCheckoutGuestTest();
        });

        //Test 007ad -> single 'shop by category' product (MacBook) to check out test (as a registered user) (checkout fails due to unavailability of payment method)
        test("Add Single 'Shop By Category' Product (MacBook) To Checkout Test - As A Registered User", async function () {
            //user navigation to 'Register' page test
            await testMethods.navigateToRegisterPageTest();
            //valid user account registration test
            await testMethods.validUserAccountRegisterTest();
            //return to 'Homepage' test
            await testMethods.returnUserToHomePageTest();
            //add single 'shop by category' product (MacBook) to cart test (as a registered user - due to skipping review part, the methods are shared)
            await testMethods.addSingularCategoryProductToCartTest();
            //add single 'shop by category' product (MacBook) to check out test (as a registered user)
            await testMethods.addMacBookProductToCheckoutTest();
            //valid single 'shop by category' product (MacBook) check out test  (as a registered user)
            await testMethods.validProductCheckoutRegUserTest();
        });

    });

    describe('Single Searched Product Checkout Tests', () => {

        //Test 007ae -> single searched product (HTC Touch HD) check out test (as a guest)
        test("Single Searched Product (HTC Touch HD) Checkout Test - As A Guest", async function () {
            //add single featured product (HTC Touch HD) to cart test (as a guest)
            await testMethods.addSearchedHTCTouchProductToCartTest();
            //add single searched product (HTC Touch HD) to check out test (as a guest - both guest and registered user share the same shopping cart method)
            await testMethods.addHTCTouchProductToCheckoutTest();
            //valid single searched product (HTC Touch HD) check out test (as a guest)
            await testMethods.validProductCheckoutGuestTest();
        });

        //Test 007af -> single searched product (HTC Touch HD) check out test (as a registered user)
        test("Single Searched Product (HTC Touch HD) Checkout Test - As A Registered User", async function () {
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
        });

    });

    //update product quantity during checkout test (guest and registered user have the same output therefore only guest branch is being run here)

    describe('Update Featured Product Quantity During  (HP LP3065) Checkout Test', () => {

        //Test 007ag -> update featured product quantity (HP LP3065) during check out test (as a guest)
        test("Valid Featured Product (Update Quantity) (HP LP3065) Checkout Test - As A Guest", async function () {
            //add single featured product (HP LP3065) to cart test (as a guest)
            await testMethods.addSingleHP25HeadphonesSetToCartTest();
            //add single featured product (HP LP3065) to check out test (as a guest - both guest and registered user share the same shopping cart method)
            await testMethods.addHTCTouchProductToCheckoutTest();
            //valid product (with product quantity change) (HP LP3065) check out test (as a guest)
            await testMethods.validProductCheckoutUpdateQtyGuestTest();
        });

    });

    //product removal from checkout test (guest and registered user have the same output therefore only guest branch is being run here)

    describe('Remove Featured Product (HP LP3065) From Checkout Test', () => {

        //Test 007ah -> remove featured product (HP LP3065) from check out test (as a guest)
        test("Remove Featured Product (HP LP3065) From Checkout Test - As A Guest", async function () {
            //add single featured product (HP LP3065) to cart test (as a guest)
            await testMethods.addSingleHP25HeadphonesSetToCartTest();
            //add single featured product (HP LP3065) to check out test (as a guest - both guest and registered user share the same shopping cart method)
            await testMethods.addHTCTouchProductToCheckoutTest();
            //remove featured product (HP LP3065) from check out test (as a guest)
            await testMethods.removeProductDuringCheckoutGuestTest();
        });

    });

    //multiple products checkout tests

    describe('Multiple Featured Products (HP LP3065) Checkout Tests', () => {

        //Test 007ai -> multiple featured products (HP LP3065) to check out test (as a guest)
        test("Multiple Featured Products (HP LP3065) Checkout Test - As A Guest", async function () {
            //add multiple featured products (HP LP3065) to cart test (as a guest)
            await testMethods.addMultipleHP25HeadphonesSetsToCartTest();
            //add multiple featured products (HP LP3065) to check out test (as a guest - both guest and registered user share the same shopping cart method)
            await testMethods.addHTCTouchProductToCheckoutTest();
            //valid multiple featured products (HP LP3065) check out test (as a guest)
            await testMethods.validProductCheckoutGuestTest();
        });

        //Test 007aj -> multiple featured products (HP LP3065) check out test (as a registered user)
        test("Multiple Featured Products (HP LP3065) Checkout Test - As A Registered User", async function () {
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
        });

    });

    describe('Multiple "Shop By Category" Products Checkout Tests', () => {

        //Test 007ak -> multiple 'shop by category' products (MacBook) check out test (as a guest) (checkout fails due to unavailability of payment method)
        test("Multiple 'Shop By Category' Products (MacBook) Checkout Test - As A Guest", async function () {
            //add multiple 'shop by category' products (MacBook) to cart test (as a guest)
            await testMethods.addSingularCategoryMultipleProductsToCartTest();
            //add multiple 'shop by category' products (MacBook) to check out test (as a guest)
            await testMethods.addMacBookProductToCheckoutTest();
            //valid multiple 'shop by category' products (MacBook) check out test (as a guest)
            await testMethods.validProductCheckoutGuestTest();
        });

        //Test 007al -> multiple 'shop by category' products (MacBook) check out test (as a registered user) (checkout fails due to unavailability of payment method)
        test("Multiple 'Shop By Category' Products (MacBook) Checkout Test - As A Registered User", async function () {
            //user navigation to 'Register' page test
            await testMethods.navigateToRegisterPageTest();
            //valid user account registration test
            await testMethods.validUserAccountRegisterTest();
            //return to 'Homepage' test
            await testMethods.returnUserToHomePageTest();
            //add multiple 'shop by category' products (MacBook) to cart test (as a registered user - due to skipping review part, the methods are shared)
            await testMethods.addSingularCategoryMultipleProductsToCartTest();
            //add multiple 'shop by category' products (MacBook) to check out test (as a registered user)
            await testMethods.addMacBookProductToCheckoutTest();
            //valid multiple 'shop by category' products (MacBook) check out test  (as a registered user)
            await testMethods.validProductCheckoutRegUserTest();
        });

    });

    describe('Multiple Searched Products Checkout Tests', () => {

        //Test 007am -> multiple searched products (HTC Touch HD) check out test (as a guest)
        test("Multiple Searched Products (HTC Touch HD) Checkout Test - As A Guest", async function () {
            //add multiple searched products (HTC Touch HD) to cart test (as a guest)
            await testMethods.addMultipleSearchedHTCTouchProductsToCartTest();
            //add multiple searched products (HTC Touch HD) to check out test (as a guest - both guest and registered user share the same shopping cart method)
            await testMethods.addHTCTouchProductToCheckoutTest();
            //valid multiple searched products (HTC Touch HD) check out test (as a guest)
            await testMethods.validProductCheckoutGuestTest();
        });

        //Test 007an -> multiple searched products (HTC Touch HD) check out test (as a registered user)
        test("Multiple Searched Products (HTC Touch HD) Checkout Test - As A Registered User", async function () {
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
        });

    });


    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    //driver clean-up after each test run
    afterEach(async function() {
        await baseTest.afterEach();  //afterEach caller for cleanup (from BaseTest)
    });

});

