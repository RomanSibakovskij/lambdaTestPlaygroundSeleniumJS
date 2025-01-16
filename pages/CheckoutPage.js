const { By, until} = require('selenium-webdriver');
const BasePage = require('./utils/BasePage');
const TestDataGenerator = require('./utils/TestDataGenerator')
const Logger = require("./utils/Logger");

class CheckoutPage extends BasePage{

    constructor(driver){
        super(driver);

        //checkout page web elements
        this._checkoutPageBreadcrumb = By.xpath("//div[@id='maza-checkout']//ol/li");
        //input form elements
        this._inputFormAccountSectionTitle = By.xpath("//div[@class='sticky-top']/div[1]/h4[@class='card-title']");
        this._inputFormLoginRadioButton = By.xpath("//div[@class='sticky-top']/div[1]//input[@id='input-account-login']");
        this._inputFormRegisterRadioButton = By.xpath("//div[@class='sticky-top']/div[1]//input[@id='input-account-register']");
        this._inputFormGuestCheckoutRadioButton = By.xpath("//div[@class='sticky-top']/div[1]//input[@id='input-account-guest']");
        //personal details section
        this._personalDetailsSectionTitle = By.xpath("//div[@id='account-detail']/h4");
        this._checkoutFirstNameInputField = By.xpath("//div[@id='account-detail']//input[@id='input-payment-firstname']");
        this._checkoutLastNameInputField = By.xpath("//div[@id='account-detail']//input[@id='input-payment-lastname']");
        this._checkoutEmailInputField = By.xpath("//div[@id='account-detail']//input[@id='input-payment-email']");
        this._checkoutPhoneInputField = By.xpath("//div[@id='account-detail']//input[@id='input-payment-telephone']");
        this._checkoutPhoneInputFormatHint = By.xpath("//div[@id='account-detail']//small");
        //billing address section
        this._billingAddressSectionTitle = By.xpath("//div[@id='payment-address']/h4");
        this._checkoutCompanyInputField = By.xpath("//div[@id='payment-address']//input[@id='input-payment-company']");
        this._checkoutAddress1InputField = By.xpath("//div[@id='payment-address']//input[@id='input-payment-address-1']");
        this._checkoutAddress2InputField = By.xpath("//div[@id='payment-address']//input[@id='input-payment-address-2']");
        this._checkoutCityInputField = By.xpath("//div[@id='payment-address']//input[@id='input-payment-city']");
        this._checkoutPostCodeInputField = By.xpath("//div[@id='payment-address']//input[@id='input-payment-postcode']");
        this._checkoutCountryDropdownMenu = By.xpath("//div[@id='payment-address']//select[@id='input-payment-country']");
        this._checkoutUsCountryOption = By.xpath("//select[@id='input-payment-country']/option[@value='223']");
        this._checkoutRegionDropdownMenu = By.xpath("//div[@id='payment-address']//select[@id='input-payment-zone']");
        this._checkoutIllinoisRegionOption = By.xpath("//select[@id='input-payment-zone']/option[@value='3635']");
        this._checkoutBillingShippingAddressSameCheckbox = By.xpath("//div[@id='payment-address']//input[@id='input-shipping-address-same']");
        this._checkoutBillingShippingAddressSameSubtext = By.xpath("//div[@id='payment-address']//label[@class='custom-control-label']");
        //payment method section
        this._paymentMethodSectionTitle = By.xpath("//div[@id='payment-method']/h4");
        this._cashOnDeliveryRadioButton = By.xpath("//div[@id='payment-method']//input");
        //shipping method section
        this._shippingMethodSectionTitle = By.xpath("//div[@id='shipping-method']/h4");
        this._flatRateSubtitle = By.xpath("//div[@id='shipping-method']/p");
        this._flatShippingRadioButton = By.xpath("//div[@id='shipping-method']//input");
        //checkout section
        //table list elements
        this._checkoutTableProductImgLinkElements = By.xpath("//div[@class='cart-card mb-4']//table[@class='table']/tbody/tr/td[1]/a");
        this._checkoutTableProductNameLinkElements = By.xpath("//div[@class='cart-card mb-4']//table[@class='table']/tbody/tr/td[2]/a");
        this._checkoutTableProductDescriptionElements = By.xpath("//div[@class='cart-card mb-4']//table[@class='table']/tbody/tr/td[2]");
        this._checkoutTableProductQtyInputFieldElements = By.xpath("//div[@class='cart-card mb-4']//table[@class='table']/tbody/tr/td[3]//input");
        this._checkoutTableProductQtyUpdateButtonElements = By.xpath("//div[@class='cart-card mb-4']//table[@class='table']/tbody/tr/td[3]//button[1]");
        this._checkoutTableProductRemoveButtonElements = By.xpath("//div[@class='cart-card mb-4']//table[@class='table']/tbody/tr/td[3]//button[2]");
        this._checkoutTableProductUnitPriceElements = By.xpath("//div[@class='cart-card mb-4']//table[@class='table']/tbody/tr/td[4]");
        this._checkoutTableProductTotalPriceElements = By.xpath("//div[@class='cart-card mb-4']//table[@class='table']/tbody/tr/td[5]");
        //singular elements
        this._checkoutOrderSubtotalPrice = By.xpath("//table[@id='checkout-total']/tbody/tr[1]/td[2]");
        this._checkoutOrderFlatShippingRate = By.xpath("//table[@id='checkout-total']/tbody/tr[2]/td[2]");
        this._checkoutOrderTotalPrice = By.xpath("//table[@id='checkout-total']/tbody/tr[3]/td[2]");
        this._checkoutUseCouponDropdownMenu = By.xpath("//div[@id='accordion']/div[1]");
        this._checkoutUseCouponDropdownHeader = By.xpath("//div[@id='accordion']/div[1]/h5");
        this._checkoutGiftCertificateDropdownMenu = By.xpath("//div[@id='accordion']/div[2]");
        this._checkoutGiftCertificateDropdownHeader = By.xpath("//div[@id='accordion']/div[2]/h5");
        this._checkoutOrderCommentInputField = By.xpath("//textarea");
        this._checkoutAgreeToTermsCheckbox = By.xpath("//div[@class='custom-control custom-checkbox'][3]/input");
        this._checkoutAgreeToTermsSubtext = By.xpath("//div[@class='custom-control custom-checkbox'][3]/label");
        this._checkoutAgreeToTermsPageLink = By.xpath("//div[@class='custom-control custom-checkbox'][3]//a");
        this._checkoutContinueButton = By.xpath("//button[@id='button-save']");


        const testDataGenerator = new TestDataGenerator(this.driver);
        //valid guest input data
        const { firstName, lastName } = testDataGenerator.getRandomName();
        this._guestFirstName = firstName;
        this._guestLastName = lastName;
        this._guestEmail = testDataGenerator.generateRandomEmailAddress(9);
        this._guestPhone = testDataGenerator.generateUSPhoneNumber();
        this._guestAddress = testDataGenerator.generateRandomAddress(7);
        this._guestCity = testDataGenerator.getRandomCity();
        this._guestPostalCode = testDataGenerator.getRandomPostalOrderNumber();
    }

    //valid guest check out data input methods
    async inputGuestFirstNameIntoFirstNameInputField(){
        const firstNameInputField = await this.driver.findElement(this._checkoutFirstNameInputField);
        const guestFirstName = await this._guestFirstName;
        Logger.info("Valid guest first name: ", guestFirstName);
        await firstNameInputField.sendKeys(guestFirstName);
    }
    async inputGuestLastNameIntoLastNameInputField(){
        const lastNameInputField = await this.driver.findElement(this._checkoutLastNameInputField);
        const guestLastName = await this._guestLastName;
        Logger.info("Valid guest last name: ", guestLastName);
        await lastNameInputField.sendKeys(guestLastName);
    }
    async inputGuestEmailIntoEmailInputField(){
        const emailInputField = await this.driver.findElement(this._checkoutEmailInputField);
        const guestEmail = await this._guestEmail;
        Logger.info("Valid guest email address: ", guestEmail);
        await emailInputField.sendKeys(guestEmail);
    }
    async inputGuestPhoneIntoFirstPhoneInputField(){
        const phoneInputField = await this.driver.findElement(this._checkoutPhoneInputField);
        const guestPhone = await this._guestPhone;
        Logger.info("Valid guest phone number: ", guestPhone);
        await phoneInputField.sendKeys(guestPhone);
    }
    async inputGuestAddressIntoAddressInputField(){
        const address1InputField = await this.driver.findElement(this._checkoutAddress1InputField);
        const guestAddress = await this._guestAddress;
        Logger.info("Valid guest address: ", guestAddress);
        await address1InputField.sendKeys(guestAddress);
    }
    async inputGuestCityIntoCityInputField(){
        const cityInputField = await this.driver.findElement(this._checkoutCityInputField);
        const actions = this.driver.actions({bridge: true});
        await actions.move({origin: cityInputField}).perform();
        const guestCity = await this._guestCity;
        Logger.info("Valid guest city: ", guestCity);
        await cityInputField.sendKeys(guestCity);
    }
    async inputGuestPostCodeIntoPostCodeInputField(){
        const postCodeInputField = await this.driver.findElement(this._checkoutPostCodeInputField);
        const guestPostCode = await this._guestPostalCode;
        Logger.info("Valid guest post code: ", guestPostCode);
        await postCodeInputField.sendKeys(guestPostCode);
    }

    //click country dropdown menu
    async clickCountryDropdownMenu(){
        const countryDropdownMenu = await this.driver.findElement(this._checkoutCountryDropdownMenu);
        const actions = this.driver.actions({bridge: true});
        await actions.move({origin: countryDropdownMenu}).click().perform();
    }
    //select 'United States' option
    async selectUnitedStatesCountryOption(){
        const usCountryOption = await this.driver.findElement(this._checkoutUsCountryOption );
        usCountryOption.click();
    }

    //click region dropdown menu
    async clickRegionDropdownMenu(){
        const regionDropdownMenu = await this.driver.findElement(this._checkoutRegionDropdownMenu);
        const actions = this.driver.actions({bridge: true});
        await actions.move({origin: regionDropdownMenu}).click().perform();
    }
    //select 'Illinois' region option
    async selectIllinoisRegionOption() {
        try {
            //wait for element's presence
            const illinoisRegionOption = await this.driver.wait(
                until.elementLocated(this._checkoutIllinoisRegionOption),
                2000,
                "Illinois region option not found within the timeout period"
            );
            await this.driver.executeScript("arguments[0].scrollIntoView(true);", illinoisRegionOption);

            //second wait to assert it's clickable
            await this.driver.wait(
                until.elementIsVisible(illinoisRegionOption),
                2000,
                "Illinois region option not visible within the timeout period"
            );
            await illinoisRegionOption.click();
        } catch (error) {
            console.error("Error selecting Illinois region option:", error.message);
            throw error;
        }
    }

    //input changed product quantity
    async inputQuantityIntoQuantityInputField(){
        const quantityInputField = await this.driver.findElement(this._checkoutTableProductQtyInputFieldElements);
        const quantity = "6";
        Logger.info("Altered product quantity: ", quantity);
        quantityInputField.clear();
        await quantityInputField.sendKeys(quantity);
    }

    //click 'Update' product quantity button
    async clickUpdateButton(){
        const updateButton = await this.driver.findElement(this._checkoutTableProductQtyUpdateButtonElements);
        updateButton.click();
    }

    //click 'Remove' product button
    async clickRemoveProductButton(){
        const removeButton = await this.driver.findElement(this._checkoutTableProductRemoveButtonElements);
        removeButton.click();
    }

    //click 'Agree to Terms' checkbox (due to the element not being centered with visual element, Actions API click is being used)
    async clickAgreeToTermsCheckbox() {
            const checkbox = await this.driver.findElement(this._checkoutAgreeToTermsCheckbox);
            await this.driver.executeScript("arguments[0].scrollIntoView(true);", checkbox);
            //wait for animations
            await this.driver.sleep(500);
            const actions = this.driver.actions({bridge: true});
            await actions.move({origin: checkbox, x: 5, y: 5}).click().perform();
    }

    //click 'Continue' button
    async clickContinueButton(){
        const continueButton = await this.driver.findElement(this._checkoutContinueButton);
        continueButton.click();
    }

    //click 'Guest Checkout' radio button
    async clickGuestCheckoutRadioButton(){
        const guestCheckoutRadioButton = await this.driver.findElement(this._inputFormGuestCheckoutRadioButton);
        const actions = this.driver.actions({bridge: true});
        await actions.move({origin: guestCheckoutRadioButton}).click().perform();
    }

    //input form account section title getter
    async getAccountSectionTitle(){
        const accountSectionTitle = await this.driver.findElement(this._inputFormAccountSectionTitle);
        return await accountSectionTitle.getText();
    }
    //personal details section title getter
    async getPersonalDetailsSectionTitle(){
        const personalDetailsSectionTitle = await this.driver.findElement(this._personalDetailsSectionTitle);
        return await personalDetailsSectionTitle.getText();
    }
    //phone input format hint getter
    async getPhoneInputFormatHint(){
        const phoneFormatInputHint = await this.driver.findElement(this._checkoutPhoneInputFormatHint);
        return await phoneFormatInputHint.getText();
    }
    //billing address section title getter
    async getBillingAddressSectionTitle(){
        const billingAddressSectionTitle = await this.driver.findElement(this._billingAddressSectionTitle);
        return await billingAddressSectionTitle.getText();
    }
    //billing address and shipping address same subtext getter
    async getBillingShippingAddressSameSubtext(){
        const billingShippingAddressSameSubtext = await this.driver.findElement(this._checkoutBillingShippingAddressSameSubtext);
        return await billingShippingAddressSameSubtext.getText();
    }
    //payment method section title getter
    async getPaymentMethodSectionTitle(){
        const paymentMethodSectionTitle = await this.driver.findElement(this._paymentMethodSectionTitle);
        return await paymentMethodSectionTitle.getText();
    }
    //shipping method section title getter
    async getShippingMethodSectionTitle(){
        const shippingMethodSectionTitle = await this.driver.findElement(this._shippingMethodSectionTitle);
        return await shippingMethodSectionTitle.getText();
    }
    //flat shipping rate subtitle getter
    async getFlatShippingSubtitle(){
        const flatShippingSubtitle = await this.driver.findElement(this._flatRateSubtitle);
        return await flatShippingSubtitle.getText();
    }
    //use coupon dropdown header getter
    async getUseCouponDropdownHeader(){
        const useCouponDropdownHeader = await this.driver.findElement(this._checkoutUseCouponDropdownHeader);
        return await useCouponDropdownHeader.getText();
    }
    //checkout gift certificate dropdown header getter
    async getGiftCertificateDropdownHeader(){
        const giftCertificateDropdownHeader = await this.driver.findElement(this._checkoutGiftCertificateDropdownHeader);
        return await giftCertificateDropdownHeader.getText();
    }
    //'Agree to Terms' subtext getter
    async getAgreeToTermsSubtext(){
        const agreeToTermsSubtext = await this.driver.findElement(this._checkoutAgreeToTermsSubtext);
        return await agreeToTermsSubtext.getText();
    }

    //checkout product data getters

    //shopping cart product name(s) getter
    async getProductName() {
        const elementsArray = await this.driver.findElements(this._checkoutTableProductNameLinkElements);

        return await Promise.all(
            elementsArray.map(async (element) => {
                if (!element) {
                    console.warn('Element is undefined');
                    return '';
                }

                const text = await element.getText();
                return text.trim();
            })
        );
    }
    //shopping cart product description(s) getter
    async getProductDescription() {
        const elementsArray = await this.driver.findElements(this._checkoutTableProductDescriptionElements);

        return await Promise.all(
            elementsArray.map(async (element) => {
                if (!element) {
                    console.warn('Element is undefined');
                    return '';
                }

                const text = await element.getText();
                return text.trim();
            })
        );
    }
    //shopping cart product quantity(ies) getter
    async getProductQuantity() {
        const elementsArray = await this.driver.findElements(this._checkoutTableProductQtyInputFieldElements);

        return await Promise.all(
            elementsArray.map(async (element) => {
                if (!element) {
                    console.warn('Element is undefined');
                    return '';
                }

                const text = await element.getDomAttribute("value");
                return text.trim();
            })
        );
    }
    //shopping cart product unit price(s) getter
    async getProductUnitPrice() {
        const elementsArray = await this.driver.findElements(this._checkoutTableProductUnitPriceElements);

        return await Promise.all(
            elementsArray.map(async (element) => {
                if (!element) {
                    console.warn('Element is undefined');
                    return '';
                }

                const text = await element.getText();
                return text.trim();
            })
        );
    }
    //shopping cart product total price(s) getter
    async getProductTotalPrice() {
        const elementsArray = await this.driver.findElements(this._checkoutTableProductTotalPriceElements);

        return await Promise.all(
            elementsArray.map(async (element) => {
                if (!element) {
                    console.warn('Element is undefined');
                    return '';
                }

                const text = await element.getText();
                return text.trim();
            })
        );
    }

    //checkout order subtotal price getter
    async getCheckoutOrderSubtotalPrice(){
        const checkoutOrderSubtotalPrice = await this.driver.findElement(this._checkoutOrderSubtotalPrice);
        return await checkoutOrderSubtotalPrice.getText();
    }
    //checkout order flat shipping rate getter
    async getCheckoutOrderFlatShippingRate(){
        const checkoutOrderFlatShippingRate = await this.driver.findElement(this._checkoutOrderFlatShippingRate);
        return await checkoutOrderFlatShippingRate.getText();
    }
    //checkout order total price getter
    async getCheckoutOrderTotalPrice(){
        const checkoutOrderTotalPrice = await this.driver.findElement(this._checkoutOrderTotalPrice);
        return await checkoutOrderTotalPrice.getText();
    }

    async isElementDisplayed(locator) {
        const element = await this.driver.findElement(locator);
        return await element.isDisplayed();
    }

    //check out page web element assert method (commented out elements are present in DOM and clickable, Selenium fails to tag them as displayed)
    async isCheckoutPageWebElementDisplayed(){
        const elementsToCheck = [
            this._checkoutPageBreadcrumb,
            this._inputFormAccountSectionTitle,
            //this._inputFormLoginRadioButton,
            //this._inputFormRegisterRadioButton,
            //this._inputFormGuestCheckoutRadioButton,
            this._personalDetailsSectionTitle,
            this._checkoutFirstNameInputField,
            this._checkoutLastNameInputField,
            this._checkoutEmailInputField,
            this._checkoutPhoneInputField,
            this._checkoutPhoneInputFormatHint,
            this._billingAddressSectionTitle,
            this._checkoutCompanyInputField,
            this._checkoutAddress1InputField,
            this._checkoutAddress2InputField,
            this._checkoutCityInputField,
            this._checkoutPostCodeInputField,
            this._checkoutCountryDropdownMenu,
            this._checkoutRegionDropdownMenu,
            //this._checkoutBillingShippingAddressSameCheckbox,
            this._paymentMethodSectionTitle,
            //this._cashOnDeliveryRadioButton, (MacBook doesn't have this element)
            //this._shippingMethodSectionTitle, (MacBook doesn't have this element)
            //this._flatRateSubtitle, (MacBook doesn't have this element)
            //this._flatShippingRadioButton, (MacBook doesn't have this element)
            this._checkoutOrderSubtotalPrice,
            this._checkoutOrderFlatShippingRate,
            this._checkoutOrderTotalPrice,
            this._checkoutUseCouponDropdownMenu,
            this._checkoutUseCouponDropdownHeader,
            this._checkoutGiftCertificateDropdownMenu,
            this._checkoutGiftCertificateDropdownHeader,
            this._checkoutOrderCommentInputField,
            //this._checkoutAgreeToTermsCheckbox,
            this._checkoutAgreeToTermsSubtext,
            this._checkoutAgreeToTermsPageLink,
            this._checkoutContinueButton
        ];

        for (let element of elementsToCheck) {
            const isDisplayed = await this.isElementDisplayed(element);
            if (!isDisplayed) {
                throw new Error(`Element ${element} is not displayed.`);
            }
        }
    }

    //list web elements assert function
    async areElementsDisplayed(listLocator) {
        try {
            const elements = await this.driver.findElements(listLocator);

            if (elements.length === 0) {
                Logger.info(`No elements found for locator: ${listLocator}`);
                return false;
            }
            //assert all elements are displayed
            const visibilityResults = await Promise.all(
                elements.map(async (element) => {
                    try {
                        return await element.isDisplayed();
                    } catch (error) {
                        return false;
                    }
                })
            );

            //return true only if all elements are visible
            const allVisible = visibilityResults.every(result => result === true);
            // Logger.info(`Found ${elements.length} elements, all visible: ${allVisible}`);
            return allVisible;

        } catch (error) {
            Logger.error(`Error checking elements visibility: ${error.message}`);
            return false;
        }
    }

}

module.exports = {CheckoutPage}