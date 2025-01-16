const TestMethods = require('./utils/TestMethods');
const BaseTest = require('./utils/BaseTest');

describe('Checkout Page Invalid Tests', () => {
    let testMethods; //testMethods initializer
    let baseTest; //baseTest initializer

    beforeEach(async function () {
        baseTest = new BaseTest();  //BaseTest initialization
        await baseTest.beforeEach();  //beforeEach caller for setup (from BaseTest)
        testMethods = new TestMethods(baseTest.driver);  //driver passage to TestMethods
    });

    jest.setTimeout(60000) //timer for the whole single test run, otherwise throws a timeout error
    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    //due to webpage issue instead of HP25 Headphones (it can't be found anymore), HP LP3065 is being added. It's irrelevant since the checkout process is the same

    //invalid guest checkout tests (registered user would have the same output for the respective fields so guest branch is tested)

    describe('Invalid Single Featured Product (HP LP3065) Checkout Tests - No Singular Input (guest)', () => {

        //Test 007a -> invalid single featured product (HP LP3065) check out test - no first name (as a guest)
        test("Invalid Single Featured Product (HP LP3065) Checkout Test - No First Name (guest)", async function () {
            //add single featured product (HP LP3065) to cart test (as a guest)
            await testMethods.addSingleHP25HeadphonesSetToCartTest();
            //add single featured product (HP LP3065) to check out test (as a guest - both guest and registered user share the same shopping cart method)
            await testMethods.addHTCTouchProductToCheckoutTest();
            //invalid single product (HP LP3065) check out test - no first name (as a guest)
            await testMethods.invalidGuestCheckoutNoFirstNameTest();
        });

        //Test 007b -> invalid single featured product (HP LP3065) check out test - no last name (as a guest)
        test("Invalid Single Featured Product (HP LP3065) Checkout Test - No Last Name (guest)", async function () {
            //add single featured product (HP LP3065) to cart test (as a guest)
            await testMethods.addSingleHP25HeadphonesSetToCartTest();
            //add single featured product (HP LP3065) to check out test (as a guest - both guest and registered user share the same shopping cart method)
            await testMethods.addHTCTouchProductToCheckoutTest();
            //invalid single product (HP LP3065) check out test - no last name (as a guest)
            await testMethods.invalidGuestCheckoutNoLastNameTest();
        });

        //Test 007c -> invalid single featured product (HP LP3065) check out test - no email address (as a guest)
        test("Invalid Single Featured Product (HP LP3065) Checkout Test - No Email (guest)", async function () {
            //add single featured product (HP LP3065) to cart test (as a guest)
            await testMethods.addSingleHP25HeadphonesSetToCartTest();
            //add single featured product (HP LP3065) to check out test (as a guest - both guest and registered user share the same shopping cart method)
            await testMethods.addHTCTouchProductToCheckoutTest();
            //invalid single product (HP LP3065) check out test - no email (as a guest)
            await testMethods.invalidGuestCheckoutNoEmailTest();
        });

        //Test 007d -> invalid single featured product (HP LP3065) check out test - no phone number (as a guest)
        test("Invalid Single Featured Product (HP LP3065) Checkout Test - No Phone (guest)", async function () {
            //add single featured product (HP LP3065) to cart test (as a guest)
            await testMethods.addSingleHP25HeadphonesSetToCartTest();
            //add single featured product (HP LP3065) to check out test (as a guest - both guest and registered user share the same shopping cart method)
            await testMethods.addHTCTouchProductToCheckoutTest();
            //invalid single product (HP LP3065) check out test - no phone number (as a guest)
            await testMethods.invalidGuestCheckoutNoPhoneTest();
        });

        //Test 007e -> invalid single featured product (HP LP3065) check out test - no address (as a guest)
        test("Invalid Single Featured Product (HP LP3065) Checkout Test - No Address (guest)", async function () {
            //add single featured product (HP LP3065) to cart test (as a guest)
            await testMethods.addSingleHP25HeadphonesSetToCartTest();
            //add single featured product (HP LP3065) to check out test (as a guest - both guest and registered user share the same shopping cart method)
            await testMethods.addHTCTouchProductToCheckoutTest();
            //invalid single product (HP LP3065) check out test - no address (as a guest)
            await testMethods.invalidGuestCheckoutNoAddressTest();
        });

        //Test 007f -> invalid single featured product (HP LP3065) check out test - no city (as a guest)
        test("Invalid Single Featured Product (HP LP3065) Checkout Test - No City (guest)", async function () {
            //add single featured product (HP LP3065) to cart test (as a guest)
            await testMethods.addSingleHP25HeadphonesSetToCartTest();
            //add single featured product (HP LP3065) to check out test (as a guest - both guest and registered user share the same shopping cart method)
            await testMethods.addHTCTouchProductToCheckoutTest();
            //invalid single product (HP LP3065) check out test - no city (as a guest)
            await testMethods.invalidGuestCheckoutNoCityTest();
        });

        //Test 007g -> invalid single featured product (HP LP3065) check out test - no country/state (as a guest)
        test("Invalid Single Featured Product (HP LP3065) Checkout Test - No Country and State (guest)", async function () {
            //add single featured product (HP LP3065) to cart test (as a guest)
            await testMethods.addSingleHP25HeadphonesSetToCartTest();
            //add single featured product (HP LP3065) to check out test (as a guest - both guest and registered user share the same shopping cart method)
            await testMethods.addHTCTouchProductToCheckoutTest();
            //invalid single product (HP LP3065) check out test - no country/state (as a guest)
            await testMethods.invalidGuestCheckoutNoCountryStateTest();
        });

        //Test 007h -> invalid single featured product (HP LP3065) check out test - no 'Agree to Terms' checkbox selection (as a guest)
        test("Invalid Single Featured Product (HP LP3065) Checkout Test - No 'Agree to Terms' (guest)", async function () {
            //add single featured product (HP LP3065) to cart test (as a guest)
            await testMethods.addSingleHP25HeadphonesSetToCartTest();
            //add single featured product (HP LP3065) to check out test (as a guest - both guest and registered user share the same shopping cart method)
            await testMethods.addHTCTouchProductToCheckoutTest();
            //invalid single product (HP LP3065) check out test - no 'Agree to Terms' checkbox selection (as a guest)
            await testMethods.invalidGuestCheckoutNoAgreeToTermsTest();
        });

    });

    describe('Invalid Single Featured Product (HP LP3065) Checkout Tests - Too Short Singular Input (guest)', () => {

        //Test 007i -> invalid single featured product (HP LP3065) check out test - too short first name (1 char is usually too short) (as a guest) (checkout doesn't get aborted - test has failed)
        test("Invalid Single Featured Product (HP LP3065) Checkout Test - Too Short First Name (guest)", async function () {
            //add single featured product (HP LP3065) to cart test (as a guest)
            await testMethods.addSingleHP25HeadphonesSetToCartTest();
            //add single featured product (HP LP3065) to check out test (as a guest - both guest and registered user share the same shopping cart method)
            await testMethods.addHTCTouchProductToCheckoutTest();
            //invalid single product (HP LP3065) check out test - too short first name (1 char is usually too short) (as a guest)
            await testMethods.invalidGuestCheckoutTooShortFirstNameTest();
        });

        //Test 007j -> invalid single featured product (HP LP3065) check out test - too short last name (1 char) (as a guest)  (checkout doesn't get aborted - test has failed)
        test("Invalid Single Featured Product (HP LP3065) Checkout Test - Too Short Last Name (guest)", async function () {
            //add single featured product (HP LP3065) to cart test (as a guest)
            await testMethods.addSingleHP25HeadphonesSetToCartTest();
            //add single featured product (HP LP3065) to check out test (as a guest - both guest and registered user share the same shopping cart method)
            await testMethods.addHTCTouchProductToCheckoutTest();
            //invalid single product (HP LP3065) check out test - too short last name (1 char) (as a guest)
            await testMethods.invalidGuestCheckoutTooShortLastNameTest();
        });

        //Test 007k -> invalid single featured product (HP LP3065) check out test - too short email address (1 char - name,domain) (as a guest)  (checkout doesn't get aborted - test has failed)
        test("Invalid Single Featured Product (HP LP3065) Checkout Test - Too Short Email (guest)", async function () {
            //add single featured product (HP LP3065) to cart test (as a guest)
            await testMethods.addSingleHP25HeadphonesSetToCartTest();
            //add single featured product (HP LP3065) to check out test (as a guest - both guest and registered user share the same shopping cart method)
            await testMethods.addHTCTouchProductToCheckoutTest();
            //invalid single product (HP LP3065) check out test - too short email address (1 char - name,domain) (as a guest)
            await testMethods.invalidGuestCheckoutTooShortEmailTest();
        });

        //Test 007l -> invalid single featured product (HP LP3065) check out test - too short phone number (2 digits) (as a guest)
        test("Invalid Single Featured Product (HP LP3065) Checkout Test - Too Short Phone (guest)", async function () {
            //add single featured product (HP LP3065) to cart test (as a guest)
            await testMethods.addSingleHP25HeadphonesSetToCartTest();
            //add single featured product (HP LP3065) to check out test (as a guest - both guest and registered user share the same shopping cart method)
            await testMethods.addHTCTouchProductToCheckoutTest();
            //invalid single product (HP LP3065) check out test - too short phone number (2 digits) (as a guest)
            await testMethods.invalidGuestCheckoutTooShortPhoneTest();
        });

        //Test 007m -> invalid single featured product (HP LP3065) check out test - too short address (2 chars) (as a guest)
        test("Invalid Single Featured Product (HP LP3065) Checkout Test - Too Short Address (guest)", async function () {
            //add single featured product (HP LP3065) to cart test (as a guest)
            await testMethods.addSingleHP25HeadphonesSetToCartTest();
            //add single featured product (HP LP3065) to check out test (as a guest - both guest and registered user share the same shopping cart method)
            await testMethods.addHTCTouchProductToCheckoutTest();
            //invalid single product (HP LP3065) check out test - too short address (2 chars) (as a guest)
            await testMethods.invalidGuestCheckoutTooShortAddressTest();
        });

        //Test 007n -> invalid single featured product (HP LP3065) check out test - too short city (1 char) (as a guest)
        test("Invalid Single Featured Product (HP LP3065) Checkout Test - Too Short City (guest)", async function () {
            //add single featured product (HP LP3065) to cart test (as a guest)
            await testMethods.addSingleHP25HeadphonesSetToCartTest();
            //add single featured product (HP LP3065) to check out test (as a guest - both guest and registered user share the same shopping cart method)
            await testMethods.addHTCTouchProductToCheckoutTest();
            //invalid single product (HP LP3065) check out test - too short city (1 char) (as a guest)
            await testMethods.invalidGuestCheckoutTooShortCityTest();
        });

    });

    describe('Invalid Single Featured Product (HP LP3065) Checkout Tests - Too Long Singular Input (guest)', () => {

        //Test 007o -> invalid single featured product (HP LP3065) check out test - too long first name (33 chars) (as a guest)
        test("Invalid Single Featured Product (HP LP3065) Checkout Test - Too Long First Name (guest)", async function () {
            //add single featured product (HP LP3065) to cart test (as a guest)
            await testMethods.addSingleHP25HeadphonesSetToCartTest();
            //add single featured product (HP LP3065) to check out test (as a guest - both guest and registered user share the same shopping cart method)
            await testMethods.addHTCTouchProductToCheckoutTest();
            //invalid single product (HP LP3065) check out test - too long first name (33 chars) (as a guest)
            await testMethods.invalidGuestCheckoutTooLongFirstNameTest();
        });

        //Test 007p -> invalid single featured product (HP LP3065) check out test - too long last name (33 chars) (as a guest)
        test("Invalid Single Featured Product (HP LP3065) Checkout Test - Too Long Last Name (guest)", async function () {
            //add single featured product (HP LP3065) to cart test (as a guest)
            await testMethods.addSingleHP25HeadphonesSetToCartTest();
            //add single featured product (HP LP3065) to check out test (as a guest - both guest and registered user share the same shopping cart method)
            await testMethods.addHTCTouchProductToCheckoutTest();
            //invalid single product (HP LP3065) check out test - too long last name (33 chars) (as a guest)
            await testMethods.invalidGuestCheckoutTooLongLastNameTest();
        });

        //Test 007q -> invalid single featured product (HP LP3065) check out test - too long email address (100 chars - name,domain) (as a guest)
        test("Invalid Single Featured Product (HP LP3065) Checkout Test - Too Long Email (guest)", async function () {
            //add single featured product (HP LP3065) to cart test (as a guest)
            await testMethods.addSingleHP25HeadphonesSetToCartTest();
            //add single featured product (HP LP3065) to check out test (as a guest - both guest and registered user share the same shopping cart method)
            await testMethods.addHTCTouchProductToCheckoutTest();
            //invalid single product (HP LP3065) check out test - too short email address (100 chars - name,domain) (as a guest)
            await testMethods.invalidGuestCheckoutTooLongEmailTest();
        });

        //Test 007r -> invalid single featured product (HP LP3065) check out test - too long phone number (33 digits) (as a guest)
        test("Invalid Single Featured Product (HP LP3065) Checkout Test - Too Long Phone (guest)", async function () {
            //add single featured product (HP LP3065) to cart test (as a guest)
            await testMethods.addSingleHP25HeadphonesSetToCartTest();
            //add single featured product (HP LP3065) to check out test (as a guest - both guest and registered user share the same shopping cart method)
            await testMethods.addHTCTouchProductToCheckoutTest();
            //invalid single product (HP LP3065) check out test - too long phone number (33 digits) (as a guest)
            await testMethods.invalidGuestCheckoutTooLongPhoneTest();
        });

        //Test 007s -> invalid single featured product (HP LP3065) check out test - too long address (129 chars) (as a guest)
        test("Invalid Single Featured Product (HP LP3065) Checkout Test - Too Long Address (guest)", async function () {
            //add single featured product (HP LP3065) to cart test (as a guest)
            await testMethods.addSingleHP25HeadphonesSetToCartTest();
            //add single featured product (HP LP3065) to check out test (as a guest - both guest and registered user share the same shopping cart method)
            await testMethods.addHTCTouchProductToCheckoutTest();
            //invalid single product (HP LP3065) check out test - too long address (129 chars) (as a guest)
            await testMethods.invalidGuestCheckoutTooLongAddressTest();
        });

        //Test 007t -> invalid single featured product (HP LP3065) check out test - too long city (129 chars) (as a guest)
        test("Invalid Single Featured Product (HP LP3065) Checkout Test - Too Long City (guest)", async function () {
            //add single featured product (HP LP3065) to cart test (as a guest)
            await testMethods.addSingleHP25HeadphonesSetToCartTest();
            //add single featured product (HP LP3065) to check out test (as a guest - both guest and registered user share the same shopping cart method)
            await testMethods.addHTCTouchProductToCheckoutTest();
            //invalid single product (HP LP3065) check out test - too long city (129 chars) (as a guest)
            await testMethods.invalidGuestCheckoutTooLongCityTest();
        });

    });

    describe('Invalid Single Featured Product (HP LP3065) Checkout Tests - Invalid Singular Input (guest)', () => {

        //Test 007u -> invalid single featured product (HP LP3065) check out test - invalid first name (special symbols only) (as a guest) (checkout doesn't get aborted - test has failed)
        test("Invalid Single Featured Product (HP LP3065) Checkout Test - Invalid First Name (guest)", async function () {
            //add single featured product (HP LP3065) to cart test (as a guest)
            await testMethods.addSingleHP25HeadphonesSetToCartTest();
            //add single featured product (HP LP3065) to check out test (as a guest - both guest and registered user share the same shopping cart method)
            await testMethods.addHTCTouchProductToCheckoutTest();
            //invalid single product (HP LP3065) check out test - invalid first name (special symbols only) (as a guest)
            await testMethods.invalidGuestCheckoutInvalidFirstNameTest();
        });

        //Test 007v -> invalid single featured product (HP LP3065) check out test - invalid last name (special symbols only) (as a guest) (checkout doesn't get aborted - test has failed)
        test("Invalid Single Featured Product (HP LP3065) Checkout Test - Invalid Last Name (guest)", async function () {
            //add single featured product (HP LP3065) to cart test (as a guest)
            await testMethods.addSingleHP25HeadphonesSetToCartTest();
            //add single featured product (HP LP3065) to check out test (as a guest - both guest and registered user share the same shopping cart method)
            await testMethods.addHTCTouchProductToCheckoutTest();
            //invalid single product (HP LP3065) check out test - invalid last name (special symbols only) (as a guest)
            await testMethods.invalidGuestCheckoutInvalidLastNameTest();
        });

        //Test 007w -> invalid single featured product (HP LP3065) check out test - invalid email address (missing '@') (as a guest)
        test("Invalid Single Featured Product (HP LP3065) Checkout Test - Invalid Email (guest)", async function () {
            //add single featured product (HP LP3065) to cart test (as a guest)
            await testMethods.addSingleHP25HeadphonesSetToCartTest();
            //add single featured product (HP LP3065) to check out test (as a guest - both guest and registered user share the same shopping cart method)
            await testMethods.addHTCTouchProductToCheckoutTest();
            //invalid single product (HP LP3065) check out test - invalid email address (missing '@') (as a guest)
            await testMethods.invalidGuestCheckoutInvalidEmailTest();
        });

        //Test 007x -> invalid single featured product (HP LP3065) check out test - existing email address (used in manual testing beforehand) (as a guest) (checkout doesn't get aborted - test has failed)
        test("Invalid Single Featured Product (HP LP3065) Checkout Test - Existing Email (guest)", async function () {
            //add single featured product (HP LP3065) to cart test (as a guest)
            await testMethods.addSingleHP25HeadphonesSetToCartTest();
            //add single featured product (HP LP3065) to check out test (as a guest - both guest and registered user share the same shopping cart method)
            await testMethods.addHTCTouchProductToCheckoutTest();
            //invalid single product (HP LP3065) check out test - existing email address (used in manual testing beforehand) (as a guest)
            await testMethods.invalidGuestCheckoutExistingEmailTest();
        });

        //Test 007y -> invalid single featured product (HP LP3065) check out test - invalid phone number (chars and special symbols) (as a guest) (checkout doesn't get aborted - test has failed)
        test("Invalid Single Featured Product (HP LP3065) Checkout Test - Invalid Phone (guest)", async function () {
            //add single featured product (HP LP3065) to cart test (as a guest)
            await testMethods.addSingleHP25HeadphonesSetToCartTest();
            //add single featured product (HP LP3065) to check out test (as a guest - both guest and registered user share the same shopping cart method)
            await testMethods.addHTCTouchProductToCheckoutTest();
            //invalid single product (HP LP3065) check out test - invalid phone number (chars and special symbols) (as a guest)
            await testMethods.invalidGuestCheckoutInvalidPhoneTest();
        });

        //Test 007z -> invalid single featured product (HP LP3065) check out test - invalid address (special symbols only) (as a guest) (checkout doesn't get aborted - test has failed)
        test("Invalid Single Featured Product (HP LP3065) Checkout Test - Invalid Address (guest)", async function () {
            //add single featured product (HP LP3065) to cart test (as a guest)
            await testMethods.addSingleHP25HeadphonesSetToCartTest();
            //add single featured product (HP LP3065) to check out test (as a guest - both guest and registered user share the same shopping cart method)
            await testMethods.addHTCTouchProductToCheckoutTest();
            //invalid single product (HP LP3065) check out test - invalid address (special symbols only) (as a guest)
            await testMethods.invalidGuestCheckoutInvalidAddressTest();
        });

        //Test 007aa -> invalid single featured product (HP LP3065) check out test - invalid city (special symbols only) (as a guest) (checkout doesn't get aborted - test has failed)
        test("Invalid Single Featured Product (HP LP3065) Checkout Test - Invalid City (guest)", async function () {
            //add single featured product (HP LP3065) to cart test (as a guest)
            await testMethods.addSingleHP25HeadphonesSetToCartTest();
            //add single featured product (HP LP3065) to check out test (as a guest - both guest and registered user share the same shopping cart method)
            await testMethods.addHTCTouchProductToCheckoutTest();
            //invalid single product (HP LP3065) check out test - invalid city (special symbols only) (as a guest)
            await testMethods.invalidGuestCheckoutInvalidCityTest();
        });

    });


    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    //driver clean-up after each test run
    afterEach(async function() {
        await baseTest.afterEach();  //afterEach caller for cleanup (from BaseTest)
    });

});

