const TestMethods = require('./utils/TestMethods');
const BaseTest = require('./utils/BaseTest');

describe('Shopping Cart Page Tests', () => {
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

    //single product addition to check out tests

    describe('Add Single Featured Product (HP LP3065) To Checkout Tests', () => {

        //Test 006 -> add single featured product (HP LP3065) to check out test (as a guest)
        test("Add Single Featured Product (HP LP3065) To Checkout Test - As A Guest", async function () {
            //add single featured product (HP LP3065) to cart test (as a guest)
            await testMethods.addSingleHP25HeadphonesSetToCartTest();
            //add single featured product (HP LP3065) to check out test (as a guest - both guest and registered user share the same shopping cart method)
            await testMethods.addHTCTouchProductToCheckoutTest();
        });

        //Test 006a -> add single featured product (HP LP3065) to check out test (as a registered user)
        test("Add Single Featured Product (HP LP3065) To Checkout Test - As A Registered User", async function () {
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
        });

    });

    describe('Add Single "Shop By Category" Product To Checkout Tests', () => {

        //Test 006b -> add single 'Shop By Category' product (MacBook) to check out test (as a guest)
        test("Add Single 'Shop By Category' Product (MacBook) To Checkout Test - As A Guest", async function () {
            //add single 'Shop By Category' product (MacBook) to cart test (as a guest)
            await testMethods.addSingularCategoryProductToCartTest();
            //add single 'Shop By Category' product (MacBook) to check out test (as a guest)
            await testMethods.addMacBookProductToCheckoutTest();
        });

        //Test 006c -> add single 'Shop By Category' product (MacBook) to check out test (as a registered user)
        test("Add Single 'Shop By Category' Product (MacBook) To Checkout Test - As A Registered User", async function () {
            //user navigation to 'Register' page test
            await testMethods.navigateToRegisterPageTest();
            //valid user account registration test
            await testMethods.validUserAccountRegisterTest();
            //return to 'Homepage' test
            await testMethods.returnUserToHomePageTest();
            //add single 'Shop By Category' product (MacBook) to cart test (as a registered user - due to skipping review part, the methods are shared)
            await testMethods.addSingularCategoryProductToCartTest();
            //add single 'Shop By Category' product (MacBook) to check out test (as a registered user)
            await testMethods.addMacBookProductToCheckoutTest();
        });

    });

    describe('Add Single Searched Product To Checkout Tests', () => {

        //Test 006d -> add single searched product (HTC Touch HD) to check out test (as a guest)
        test("Add Single Searched Product (HTC Touch HD) To Checkout Test - As A Guest", async function () {
            //add single featured product (HTC Touch HD) to cart test (as a guest)
            await testMethods.addSearchedHTCTouchProductToCartTest();
            //add single featured product (HTC Touch HD) to check out test (as a guest - both guest and registered user share the same shopping cart method)
            await testMethods.addHTCTouchProductToCheckoutTest();
        });

        //Test 006e -> add single searched product (HTC Touch HD) to check out test (as a registered user)
        test("Add Single Searched Product (HTC Touch HD) To Checkout Test - As A Registered User", async function () {
            //user navigation to 'Register' page test
            await testMethods.navigateToRegisterPageTest();
            //valid user account registration test
            await testMethods.validUserAccountRegisterTest();
            //return to 'Homepage' test
            await testMethods.returnUserToHomePageTest();
            //add single featured product (HTC Touch HD) to cart test (as a registered user - due to skipping review part, the methods are shared)
            await testMethods.addSearchedHTCTouchProductToCartTest();
            //add single featured product (HTC Touch HD) to check out test (as a registered user - both guest and registered user share the same shopping cart method)
            await testMethods.addHTCTouchProductToCheckoutTest();
        });

    });

    //multiple products addition to check out tests

    describe('Add Multiple Featured Products (HP LP3065) To Checkout Tests', () => {

        //Test 006f -> add multiple featured products (HP LP3065) to check out test (as a guest)
        test("Add Multiple Featured Products (HP LP3065) To Checkout Test - As A Guest", async function () {
            //add multiple featured products (HP LP3065) to cart test (as a guest)
            await testMethods.addMultipleHP25HeadphonesSetsToCartTest();
            //add multiple featured products (HP LP3065) to check out test (as a guest - both guest and registered user share the same shopping cart method) (HTC and HP products share the same checkout method)
            await testMethods.addHTCTouchProductToCheckoutTest();
        });

        //Test 006g -> add multiple featured products (HP LP3065) to check out test (as a registered user)
        test("Add Multiple Featured Products (HP LP3065) To Checkout Test - As A Registered User", async function () {
            //user navigation to 'Register' page test
            await testMethods.navigateToRegisterPageTest();
            //valid user account registration test
            await testMethods.validUserAccountRegisterTest();
            //return to 'Homepage' test
            await testMethods.returnUserToHomePageTest();
            //add multiple featured products (HP LP3065) to cart test (as a registered user)
            await testMethods.addMultipleHP25HeadphonesSetsToCartRegUserTest();
            //add multiple featured products (HP LP3065) to check out test (as a registered user - both guest and registered user share the same shopping cart method) (HTC and HP products share the same checkout method)
            await testMethods.addHTCTouchProductToCheckoutTest();
        });

    });

    describe('Add Multiple "Shop By Category" Products To Checkout Tests', () => {

        //Test 006h -> add multiple category products (MacBook) to check out test (as a guest)
        test("Add Multiple 'Shop By Category' Products (MacBook) To Checkout Test - As A Guest", async function () {
            //add multiple category products (MacBook) to cart test (as a guest)
            await testMethods.addSingularCategoryMultipleProductsToCartTest();
            //add multiple category products (MacBook) to check out test (as a guest)
            await testMethods.addMacBookProductToCheckoutTest();
        });

        //Test 006i -> add multiple category products (MacBook) to check out test (as a registered user)
        test("Add Multiple 'Shop By Category' Products (MacBook) To Checkout Test - As A Registered User", async function () {
            //user navigation to 'Register' page test
            await testMethods.navigateToRegisterPageTest();
            //valid user account registration test
            await testMethods.validUserAccountRegisterTest();
            //return to 'Homepage' test
            await testMethods.returnUserToHomePageTest();
            //add multiple category products (MacBook) to cart test (as a registered user - due to skipping review part, the methods are shared)
            await testMethods.addSingularCategoryMultipleProductsToCartTest();
            //add multiple category products (MacBook) to check out test (as a registered user)
            await testMethods.addMacBookProductToCheckoutTest();
        });

    });

    describe('Add Multiple Searched Products To Checkout Tests', () => {

        //Test 006j -> add multiple searched products (HTC Touch HD) to check out test (as a guest)
        test("Add Multiple Searched Products (HTC Touch HD) To Checkout Test - As A Guest", async function () {
            //add multiple searched products (HTC Touch HD) to cart test (as a guest)
            await testMethods.addMultipleSearchedHTCTouchProductsToCartTest();
            //add multiple searched products (HTC Touch HD) to check out test (as a guest - both guest and registered user share the same shopping cart method)
            await testMethods.addHTCTouchProductToCheckoutTest();
        });

        //Test 006k -> add multiple searched products (HTC Touch HD) to check out test (as a registered user)
        test("Add Multiple Searched Products (HTC Touch HD) To Checkout Test - As A Registered User", async function () {
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
        });

    });

    //update product quantity test (guest and registered user have the same output therefore only guest branch is being run here)

    describe('Update Featured Product Quantity During Addition (HP LP3065) To Checkout Test', () => {

        //Test 006l -> update featured product quantity during addition (HP LP3065) to check out test (as a guest)
        test("Update Featured Product Quantity During Addition (HP LP3065) To Checkout Test - As A Guest", async function () {
            //add single featured product (HP LP3065) to cart test (as a guest)
            await testMethods.addSingleHP25HeadphonesSetToCartTest();
            //update featured product quantity during addition (HP LP3065) to check out test (as a guest)
            await testMethods.changeHPProductQtyAddToCheckoutTest();
        });

    });

    //product removal from cart test (guest and registered user have the same output therefore only guest branch is being run here)

    describe('Remove Featured Product (HP LP3065) From Cart Test', () => {

        //Test 006l -> remove featured product (HP LP3065) from cart test (as a guest)
        test("Remove Featured Product (HP LP3065) From Cart Test - As A Guest", async function () {
            //add single featured product (HP LP3065) to cart test (as a guest)
            await testMethods.addSingleHP25HeadphonesSetToCartTest();
            //remove featured product (HP LP3065) from cart test (as a guest)
            await testMethods.removeHPProductFromCartTest();
        });

    });


    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    //driver clean-up after each test run
    afterEach(async function() {
        await baseTest.afterEach();  //afterEach caller for cleanup (from BaseTest)
    });

});

