# lambdaTestPlaygroundSeleniumJS

Simple Selenium test suite on basic web shop functionality ( positive / negative test scenarios on: user account creation / login / logout, various product addition to / quantity update / removal from shopping cart, checkout, checkout confirmation) The test suite captures screenshots at the end of test case run (for logging purposes) -> create 'screenshots repository in 'tests' repository.

#Tech Requirements:
 1.Java JDK 8 or higher 
 
 2.Node.js

 3.Jest
 
 4.IntelliJ IDEA (or another IDE that supports Java and Maven)

#Setup

1. Clone this repository into IntelliJ(or other IDE) workspace folder (or wherever the project can be launched by IDE)
2. Open the IDE and open the project folder
3. Install Node.js
4. Make sure JavaScript/TypeScript plugins are enabled in the IDE.
5. Install and configure Jest (enter in IDE terminal: npm install --save-dev jest)
6. Run the test suite on the IDE

## Test Case List

1.	//Test 001 -> user navigation to register page test(non-registered)

// valid user account register test

1.	//Test 002 -> valid user account registration test

//invalid user account register tests - no singular input

1.	//Test 002a -> invalid user account registration test - no first name
2.	//Test 002b -> invalid user account registration test - no last name
3.	//Test 002c -> invalid user account registration test - no email address
4.	//Test 002d -> invalid user account registration test - no phone number
5.	//Test 002e -> invalid user account registration test - no password
6.	//Test 002f -> invalid user account registration test - no confirm password
7.	//Test 002g -> invalid user account registration test - no privacy checkbox click

//invalid user account register tests - too short singular input

1.	//Test 002h -> invalid user account registration test - too short first name
2.	//Test 002i -> invalid user account registration test - too short last name
3.	//Test 002j -> invalid user account registration test - too short email address
4.	//Test 002k -> invalid user account registration test - too short phone number
5.	//Test 002l -> invalid user account registration test - too short password / confirm password

//invalid user account register tests - too long singular input

1.	//Test 002m -> invalid user account registration test - too long first name
2.	//Test 002n -> invalid user account registration test - too long last name
3.	//Test 002o -> invalid user account registration test - too long email address
4.	//Test 002p -> invalid user account registration test - too long phone number
5.	//Test 002q -> invalid user account registration test - too long password / confirm password

//invalid user account register tests - invalid singular input

1.	//Test 002r -> invalid user account registration test - invalid first name (special symbols only)
2.	//Test 002s -> invalid user account registration test - invalid last name (special symbols only)
3.	//Test 002t -> invalid user account registration test - invalid email address (missing '@')
4.	//Test 002u -> invalid user account registration test - existing email address (used in manual testing beforehand)
5.	//Test 002v -> invalid user account registration test - invalid phone number (chars and special symbols)

//valid login and logout tests

1.	//Test 003 -> valid user logout test
2.	//Test 004 -> valid user login test

//invalid login tests - no singular input

1.	//Test 004a -> invalid user login test - no login email address
2.	//Test 004b -> invalid user login test - no login password

//invalid login tests - invalid singular input

1.	//Test 004c -> invalid user login test - invalid login email address
2.	//Test 004d -> invalid user login test - invalid login password

//Add Single Featured Product (HP LP3065) To Checkout Tests

1.	//Test 005 -> add single featured product (HP LP3065) test (as a guest)
2.	//Test 005a -> add single featured product (HP LP3065) test (as a registered user)

//Add Single "Shop By Category" Product To Cart Tests

1.	//Test 005b -> add single category product (MacBook) to cart test (as a guest)
2.	//Test 005c -> add single category product (MacBook) to cart test (as a registered user)


//Add Single Searched Product To Cart Tests

1.	//Test 005d -> add single searched product (HTC Touch HD) test (as a guest)
2.	//Test 005e -> add single searched product (HTC Touch HD) test (as a registered user)

//multiple products addition to cart tests

//Add Multiple Featured Products (HP LP3065) To Cart Tests

1.	//Test 005f -> add multiple featured products (HP LP3065) to cart test (as a guest)
2.	//Test 005g -> add multiple featured products (HP LP3065) test (as a registered user)

//Add Multiple "Shop By Category" Products To Cart Tests

1.	//Test 005h -> add multiple category products (MacBook) to cart test (as a guest)
2.	//Test 005i -> add multiple category products (MacBook) to cart test (as a registered user)

//Add Multiple Searched Products To Cart Tests

1.	//Test 005j -> add multiple searched products (HTC Touch HD) test (as a guest)
2.	//Test 005k -> add multiple searched products (HTC Touch HD) test (as a registered user)

//single product addition to check out tests

//Add Single Featured Product (HP LP3065) To Checkout Tests

1.	//Test 006 -> add single featured product (HP LP3065) to check out test (as a guest)
2.	//Test 006a -> add single featured product (HP LP3065) to check out test (as a registered user)

//Add Single "Shop By Category" Product To Checkout Tests

1.	//Test 006b -> add single 'Shop By Category' product (MacBook) to check out test (as a guest)
2.	//Test 006c -> add single 'Shop By Category' product (MacBook) to check out test (as a registered user)


//Add Single Searched Product To Checkout Tests

1.	//Test 006d -> add single searched product (HTC Touch HD) to check out test (as a guest)
2.	//Test 006e -> add single searched product (HTC Touch HD) to check out test (as a registered user)

//multiple products addition to check out tests

//Add Multiple Featured Products (HP LP3065) To Checkout Tests

1.	//Test 006f -> add multiple featured products (HP LP3065) to check out test (as a guest)
2.	//Test 006g -> add multiple featured products (HP LP3065) to check out test (as a registered user)

//Add Multiple "Shop By Category" Products To Checkout Tests

1.	//Test 006h -> add multiple category products (MacBook) to check out test (as a guest)
2.	//Test 006i -> add multiple category products (MacBook) to check out test (as a registered user)


//Add Multiple Searched Products To Checkout Tests

1.	//Test 006j -> add multiple searched products (HTC Touch HD) to check out test (as a guest)
2.	//Test 006k -> add multiple searched products (HTC Touch HD) to check out test (as a registered user)

//Update Featured Product Quantity During Addition (HP LP3065) To Checkout Test

1.	//Test 006l -> update featured product quantity during addition (HP LP3065) to check out test (as a guest)

//Remove Featured Product (HP LP3065) From Cart Test

1.	//Test 006l -> remove featured product (HP LP3065) from cart test (as a guest)

//invalid guest checkout tests

//Invalid Single Featured Product (HP LP3065) Checkout Tests - No Singular Input (guest)

1.	//Test 007a -> invalid single featured product (HP LP3065) check out test - no first name (as a guest)
2.	//Test 007b -> invalid single featured product (HP LP3065) check out test - no last name (as a guest)
3.	//Test 007c -> invalid single featured product (HP LP3065) check out test - no email address (as a guest)
4.	//Test 007d -> invalid single featured product (HP LP3065) check out test - no phone number (as a guest)
5.	//Test 007e -> invalid single featured product (HP LP3065) check out test - no address (as a guest)
6.	//Test 007f -> invalid single featured product (HP LP3065) check out test - no city (as a guest)
7.	//Test 007g -> invalid single featured product (HP LP3065) check out test - no country/state (as a guest)
8.	//Test 007h -> invalid single featured product (HP LP3065) check out test - no 'Agree to Terms' checkbox selection (as a guest)

//Invalid Single Featured Product (HP LP3065) Checkout Tests - Too Short Singular Input (guest)

1.	//Test 007i -> invalid single featured product (HP LP3065) check out test - too short first name (1 char is usually too short) (as a guest)
2.	//Test 007j -> invalid single featured product (HP LP3065) check out test - too short last name (1 char) (as a guest) 
3.	//Test 007k -> invalid single featured product (HP LP3065) check out test - too short email address (1 char - name,domain) (as a guest) 
4.	//Test 007l -> invalid single featured product (HP LP3065) check out test - too short phone number (2 digits)
5.	//Test 007m -> invalid single featured product (HP LP3065) check out test - too short address (2 chars)
6.	//Test 007n -> invalid single featured product (HP LP3065) check out test - too short city (1 char)

//Invalid Single Featured Product (HP LP3065) Checkout Tests - Too Long Singular Input (guest)

1.	//Test 007o -> invalid single featured product (HP LP3065) check out test - too long first name (33 chars) (as a guest)
2.	//Test 007p -> invalid single featured product (HP LP3065) check out test - too long last name (33 chars) (as a guest)
3.	//Test 007q -> invalid single featured product (HP LP3065) check out test - too long email address (100 chars - name,domain) (as a guest)
4.	//Test 007r -> invalid single featured product (HP LP3065) check out test - too long phone number (33 digits) (as a guest)
5.	//Test 007s -> invalid single featured product (HP LP3065) check out test - too long address (129 chars) (as a guest)
6.	//Test 007t -> invalid single featured product (HP LP3065) check out test - too long city (129 chars) (as a guest)

//Invalid Single Featured Product (HP LP3065) Checkout Tests - Invalid Singular Input (guest)

1.	//Test 007u -> invalid single featured product (HP LP3065) check out test - invalid first name (special symbols only) (as a guest)
2.	//Test 007v -> invalid single featured product (HP LP3065) check out test - invalid last name (special symbols only) (as a guest)
3.	//Test 007w -> invalid single featured product (HP LP3065) check out test - invalid email address (missing '@')
4.	//Test 007x -> invalid single featured product (HP LP3065) check out test - existing email address (used in manual testing beforehand)
5.	//Test 007y -> invalid single featured product (HP LP3065) check out test - invalid phone number (chars and special symbols) (as a guest)
6.	//Test 007z -> invalid single featured product (HP LP3065) check out test - invalid address (special symbols only) (as a guest)
7.	//Test 007aa -> invalid single featured product (HP LP3065) check out test - invalid city (special symbols only) (as a guest)

//valid single product check out tests

//Single Featured Product (HP LP3065) Checkout Tests

1.	//Test 007 -> valid single featured product (HP LP3065) check out test (as a guest)
2.	//Test 007ab -> single featured product (HP LP3065) check out test (as a registered user)

//Single "Shop By Category" Product Checkout Tests

1.	//Test 007ac -> single 'shop by category' product (MacBook) check out test (as a guest)
2.	//Test 007ad -> single 'shop by category' product (MacBook) to check out test (as a registered user)

//Single Searched Product Checkout Tests

1.	//Test 007ae -> single searched product (HTC Touch HD) check out test (as a guest)
2.	//Test 007af -> single searched product (HTC Touch HD) check out test (as a registered user)


//Update Featured Product Quantity During  (HP LP3065) Checkout Test

1.	//Test 007ag -> update featured product quantity (HP LP3065) during check out test

//Remove Featured Product (HP LP3065) From Checkout Test

1.	//Test 007ah -> remove featured product (HP LP3065) from check out test (as a guest)

//multiple products checkout tests

//Multiple Featured Products (HP LP3065) Checkout Tests

1.	//Test 007ai -> multiple featured products (HP LP3065) to check out test (as a guest)
2.	//Test 007aj -> multiple featured products (HP LP3065) check out test (as a registered user)

//Multiple "Shop By Category" Products Checkout Tests

1.	//Test 007ak -> multiple 'shop by category' products (MacBook) check out test (as a guest)
2.	//Test 007al -> multiple 'shop by category' products (MacBook) check out test (as a registered user)

//Multiple Searched Products Checkout Tests

1.	//Test 007am -> multiple searched products (HTC Touch HD) check out test (as a guest)
2.	//Test 007an -> multiple searched products (HTC Touch HD) check out test (as a registered user)

//single product check out confirmation tests

//Single Featured Product (HP LP3065) Checkout Confirmation Tests

1.	//Test 008 -> valid single featured product (HP LP3065) check out test (as a guest)
2.	//Test 008a -> single featured product (HP LP3065) check out test (as a registered user)

//Single Searched Product Checkout Confirmation Tests

1.	//Test 008b -> single searched product (HTC Touch HD) check out confirmation test (as a guest)
2.	//Test 008c -> single searched product (HTC Touch HD) check out confirmation test (as a registered user)

//multiple products check out confirmation tests

//Multiple Featured Products (HP LP3065) Checkout Confirmation Tests

1.	//Test 008d -> multiple featured products (HP LP3065) to check out confirmation test (as a guest)
2.	//Test 008e -> multiple featured products (HP LP3065) check out confirmation test (as a registered user)

//Multiple Searched Products Checkout Confirmation Tests

1.	//Test 008f -> multiple searched products (HTC Touch HD) check out confirmation test (as a guest)
2.	//Test 008g -> multiple searched products (HTC Touch HD) check out confirmation test (as a registered user)
