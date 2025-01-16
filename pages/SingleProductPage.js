const { By, until} = require('selenium-webdriver');
const BasePage = require('./utils/BasePage');
const Logger = require("./utils/Logger");
const TestDataGenerator = require('./utils/TestDataGenerator');

class SingleProductPage extends BasePage{

    constructor(driver){
        super(driver);


        //single product page web elements
        this._singleProductPageBreadcrumb = By.xpath("//div[@class='entry-section container ']//ol/li");
        this._productName = By.xpath("//div[@class='entry-section container ']//h1");
        this._productMainImage = By.xpath("//div[@class='image-thumb d-flex']//a[@class='thumbnail mfp-image']");
        this._productAddToWishlistButton = By.xpath("//div[@id='image-gallery-216811']//button[@class='btn btn-wishlist wishlist-47']");
        this._productSlideImageElements = By.xpath("//div[@class='swiper swiper-initialized swiper-vertical swiper-pointer-events']/div[@id='swiper-wrapper-a22c0a78f4378ead']/div//img");
        this._productCode = By.xpath("//div[@id='entry_216820']//ul[@class='list-unstyled m-0']/li");
        this._productShortData = By.xpath("//div[@id='entry_216826']//ul");
        this._productUnitPrice = By.xpath("//div[@class='price']/h3");
        this._productPriceInfoButton = By.xpath("//div[@class='price']/span");
        this._productQtyDecreaseButton = By.xpath("//div[@id='entry_216835']//button[@aria-label='Decrease quantity']");
        this._productQtyInputField = By.xpath("//div[@id='entry_216835']//input");
        this._productQtyIncreaseButton = By.xpath("//div[@id='entry_216835']//button[@aria-label='Increase quantity']");
        this._productAddToCartButton = By.xpath("//div[@id='entry_216835']//button[@title='Add to Cart']");
        this._productBuyNowButton = By.xpath("//div[@id='entry_216835']//button[@title='Buy now']");
        this._productCompareButton = By.xpath("//button[@class='both btn btn-sm btn-default btn-compare compare-47 ']");
        //method elements
        this._productSizeChartLink = By.xpath("//div[@id='entry_216847']/div[1]/a");
        this._productPopupLink = By.xpath("//div[@id='entry_216847']/div[2]/a");
        this._productAskQuestionLink = By.xpath("//div[@id='entry_216847']/div[3]/a");
        this._onlinePaymentSubText = By.xpath("//div[@id='entry_216856']/div[1]//h5");
        this._onlineEasyReturnSubText = By.xpath("//div[@id='entry_216856']/div[2]//h5");
        this._online247ServiceSubText = By.xpath("//div[@id='entry_216856']/div[3]//h5");
        //review elements
        this._productReviewScore = By.xpath("//div[@id='entry_216860']//div[@class='rating-group']/span[1]");
        this._productReviewCount = By.xpath("//div[@id='entry_216860']//div[@class='rating-group']/span[2]");
        this._productReviewStarElements = By.xpath("//div[@id='entry_216860']//span[@class='start-form-check']//input");
        this._productWriteReviewSubtitle = By.xpath("//div[@id='entry_216860']//h5");
        this._productUserNameInputField = By.xpath("//div[@id='entry_216860']//input[@name='name']");
        this._productReviewInputField = By.xpath("//div[@id='entry_216860']//textarea");
        this._productSubmitReviewButton = By.xpath("//div[@id='entry_216860']//button");
        //description section elements
        this._productDescriptionLink = By.xpath("//div[@id='entry_216814']//ul/li[1]");
        this._productDescription = By.xpath("//div[@id='product-product']/div[2]/div/div[2]/div[1]/div[4]//div[@class='description text-collapsed']");
        this._productMacBookDescription = By.xpath("//div[@id='entry_216814']//div[@class='description text-collapsed expand']");
        this._productSpecificationLink = By.xpath("//div[@id='entry_216814']//ul/li[2]");
        this._productReviewsLink = By.xpath("//div[@id='entry_216814']//ul/li[3]");
        this._productCustomLink = By.xpath("//div[@id='entry_216814']//ul/li[4]");
        //FAQ section elements
        this._faqSectionTitle = By.xpath("//div[@id='entry_216862']//h3");
        this._shippingAddressQuestionDropdownLink = By.xpath("//div[@id='entry_216862']//div[@id='mz-widget-faq-216863']/div[1]");
        this._accountActivationQuestionDropdownLink = By.xpath("//div[@id='entry_216862']//div[@id='mz-widget-faq-216863']/div[3]");
        this._pointQuestionDropdownLink = By.xpath("//div[@id='entry_216862']//div[@id='mz-widget-faq-216863']/div[4]");
        this._checkoutLimitQuestionDropdownLink = By.xpath("//div[@id='entry_216862']//div[@id='mz-widget-faq-216863']/div[5]");
        this._immediateCheckoutPaymentQuestionDropdownLink = By.xpath("//div[@id='entry_216862']//div[@id='mz-widget-faq-216863']/div[6]");
        //shopping cart box elements
        this._shoppingCartBoxTitle = By.xpath("//div[@id='cart-total-drawer']/h5");
        this._shoppingCartBoxProductNameLinkElements = By.xpath("//div[@id='cart-total-drawer']//div[@id='entry_217846']//table[@class='table']//td[2]/a");
        this._shoppingCartBoxProductDescriptionElements = By.xpath("//div[@id='cart-total-drawer']//div[@id='entry_217846']//table[@class='table']//td[2]");
        this._shoppingCartBoxProductQtyElements = By.xpath("//div[@id='cart-total-drawer']//div[@id='entry_217846']//table[@class='table']//td[3]");
        this._shoppingCartBoxProductUnitPriceElements = By.xpath("//div[@id='cart-total-drawer']//div[@id='entry_217846']//table[@class='table']//td[4]");
        this._shoppingCartBoxProductSubtotalPrice = By.xpath("//div[@id='cart-total-drawer']//div[@id='entry_217846']//table[@class='table mb-0']//tr[1]/td[2]");
        this._shoppingCartBoxProductEcoTax = By.xpath("//div[@id='cart-total-drawer']//div[@id='entry_217846']//table[@class='table mb-0']//tr[2]/td[2]");
        this._shoppingCartBoxProductVATPrice = By.xpath("//div[@id='cart-total-drawer']//div[@id='entry_217846']//table[@class='table mb-0']//tr[3]/td[2]");
        this._shoppingCartBoxProductTotalPrice = By.xpath("//div[@id='cart-total-drawer']//div[@id='entry_217846']//table[@class='table mb-0']//tr[4]/td[2]");
        this._shoppingCartBoxEditCartButton = By.xpath("//div[@id='cart-total-drawer']//div[@id='entry_217850']/a");
        this._shoppingCartBoxCheckoutButton = By.xpath("//div[@id='cart-total-drawer']//div[@id='entry_217851']/a");

        //guest input data
        const testDataGenerator = new TestDataGenerator();
        const { firstName, lastName } = testDataGenerator.getRandomName();
        this._guestName = firstName;
        this._review = testDataGenerator.getRandomReview();
    }

    //product name getter
    async getProductName(){
        const productName = await this.driver.findElement(this._productName);
        return await productName.getText();
    }
    //product code getter
    async getProductCode(){
        const productCode = await this.driver.findElement(this._productCode);
        return await productCode.getText();
    }
    //product short data getter
    async getProductShortData(){
        const productShortData = await this.driver.findElement(this._productShortData);
        return await productShortData.getText();
    }
    //product unit price getter
    async getProductUnitPrice(){
        const productUnitPrice = await this.driver.findElement(this._productUnitPrice);
        return await productUnitPrice.getText();
    }
    //product quantity getter
    async getProductQuantity(){
        const productQuantity = await this.driver.findElement(this._productName);
        return await productQuantity.getText();
    }
    //product review score getter
    async getProductReviewScore(){
        const productReviewScore = await this.driver.findElement(this._productReviewScore);
        return await productReviewScore.getText();
    }
    //product review count getter
    async getProductReviewCount(){
        const productReviewCount = await this.driver.findElement(this._productReviewCount);
        return await productReviewCount.getText();
    }
    //product description getter
    async getProductDescription(){
        const productDescription = await this.driver.findElement(this._productDescription);
        return await productDescription.getText();
    }
    //product description getter (HP brand)
    async getProductMacBookDescription(){
        const productMacBookDescription = await this.driver.findElement(this._productMacBookDescription);
        return await productMacBookDescription.getText();
    }

    //input set quantity into product quantity input field method
    async inputProductQuantityIntoQuantityInputField(){
        const productQtyInputField = await this.driver.findElement(this._productQtyInputField);
        productQtyInputField.clear();
        await productQtyInputField.sendKeys("3");
    }

    //username input (guest) method
    async inputGuestUserName(){
        const userNameInputField = await this.driver.findElement(this._productUserNameInputField);
        const guestName = this._guestName
        Logger.info("Input guest name: " + guestName);
        await userNameInputField.sendKeys(guestName);
    }

    //review input method
    async inputProductReview(){
        const reviewInputField = await this.driver.findElement(this._productReviewInputField);
        const review = this._review
        Logger.info("Input review: " + review);
        await reviewInputField.sendKeys(review);
    }

    //online payments sub text getter
    async getOnlinePaymentSubtext(){
        const paymentSubText = await this.driver.findElement(this._onlinePaymentSubText);
        return await paymentSubText.getText();
    }
    //online easy returns sub text getter
    async getOnlineEasyReturnSubText(){
        const easyReturnSubText = await this.driver.findElement(this._onlineEasyReturnSubText);
        return await easyReturnSubText.getText();
    }
    //online 24/7 service sub text getter
    async getOnlineService247SubText(){
        const onlineServiceSubText = await this.driver.findElement(this._online247ServiceSubText);
        return await onlineServiceSubText.getText();
    }
    //product review subtitle getter
    async getProductReviewSubTitle(){
        const productReviewSubtitle = await this.driver.findElement(this._productWriteReviewSubtitle);
        return await productReviewSubtitle.getText();
    }

    //FAQ section title getter
    async getFAQSectionTitle(){
        const faqSectionTitle = await this.driver.findElement(this._faqSectionTitle);
        return await faqSectionTitle.getText();
    }

    //shopping cart box methods

    //shopping cart box title getter
    async getShoppingCartBoxTitle(){
        const shoppingCartBoxTitle = await this.driver.findElement(this._shoppingCartBoxTitle);
        return await shoppingCartBoxTitle.getText();
    }
    //shopping cart box product name link getter (as a list)
    async getShoppingCartBoxProductNameLink() {
        const elementsArray = await this.driver.findElements(this._shoppingCartBoxProductNameLinkElements);

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
    //shopping cart box product description getter (as a list)
    async getShoppingCartBoxProductDescription() {
        const elementsArray = await this.driver.findElements(this._shoppingCartBoxProductDescriptionElements);

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

    //shopping cart box product quantity getter (as a list)
    async getShoppingCartBoxProductQuantity() {
        const elementsArray = await this.driver.findElements(this._shoppingCartBoxProductQtyElements);

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
    //shopping cart box product unit price getter (as a list)
    async getShoppingCartBoxProductUnitPrice() {
        const elementsArray = await this.driver.findElements(this._shoppingCartBoxProductUnitPriceElements);

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
    //shopping cart box product subtotal price getter
    async getShoppingCartBoxProductSubtotalPrice(){
        const shoppingCartBoxProductSubtotalPrice = await this.driver.findElement(this._shoppingCartBoxProductSubtotalPrice);
        return await shoppingCartBoxProductSubtotalPrice.getText();
    }
    //shopping cart box product eco tax getter
    async getShoppingCartBoxProductEcoTax(){
        const shoppingCartBoxProductEcoTax = await this.driver.findElement(this._shoppingCartBoxProductEcoTax);
        return await shoppingCartBoxProductEcoTax.getText();
    }
    //shopping cart box product VAT price getter
    async getShoppingCartBoxProductVATPrice(){
        const shoppingCartBoxProductVATPrice = await this.driver.findElement(this._shoppingCartBoxProductVATPrice);
        return await shoppingCartBoxProductVATPrice.getText();
    }
    //shopping cart box product total price getter
    async getShoppingCartBoxProductTotalPrice(){
        const shoppingCartBoxProductTotalPrice = await this.driver.findElement(this._shoppingCartBoxProductTotalPrice);
        return await shoppingCartBoxProductTotalPrice.getText();
    }
    //click 'Edit Cart' button method (shopping cart box - to proceed to shopping cart page)
    async clickEditCartButton(){
        const editCartButton = await this.driver.findElement(this._shoppingCartBoxEditCartButton);
        editCartButton.click();
    }


    //product review stars click method
    async clickProductReviewStars(starNumbers = [5]) {
        try {
            const baseSelector = `input[id='rating-{star}-216860']`;

            // star numbers input validation
            const validStarNumbers = starNumbers.filter(num => num >= 1 && num <= 5);

            if (validStarNumbers.length === 0) {
                throw new Error("Invalid star numbers provided. Please provide numbers between 1 and 5.");
            }

            //specified stars click loop
            for (const starNumber of validStarNumbers) {
                const selector = baseSelector.replace('{star}', starNumber);

                //JS click works here, common click doesn't work
                await this.driver.executeScript(`
                document.querySelector("${selector}").click();
            `);

                await this.driver.sleep(300);
            }

            Logger.info(`Successfully clicked stars: ${validStarNumbers.join(', ')}`);
        } catch (error) {
            Logger.error(`Failed to click star rating(s): ${error.message}`);
            throw error;
        }
    }

    //click 'Submit Review' button method
    async clickSubmitReviewButton(){
        const submitReviewButton = await this.driver.findElement(this._productSubmitReviewButton);
        submitReviewButton.click();
    }

    //click 'Add to Cart' button method
    async clickAddToCartButton(){
        const addToCartButton = await this.driver.findElement(this._productAddToCartButton);
        const actions = this.driver.actions({ bridge: true });
        await actions.move({ origin: addToCartButton }).click().perform();
    }

    async isElementDisplayed(locator) {
        const element = await this.driver.findElement(locator);
        return await element.isDisplayed();
    }

    //single product page web element assert
    async isSingleProductPageWebElementDisplayed(){
        const elementsToCheck = [
            this._singleProductPageBreadcrumb,
            this._productName,
            this._productMainImage,
            this._productAddToWishlistButton,
            //this._productSlideImageElements,
            this._productCode,
            this._productShortData,
            this._productUnitPrice,
            this._productPriceInfoButton,
            this._productQtyDecreaseButton,
            this._productQtyInputField,
            this._productQtyIncreaseButton,
            //this._productAddToCartButton,
            this._productBuyNowButton,
            this._productCompareButton,
            this._productSizeChartLink,
            this._productPopupLink,
            this._productAskQuestionLink,
            this._onlinePaymentSubText,
            this._onlineEasyReturnSubText,
            this._online247ServiceSubText,
            this._productReviewScore,
            this._productReviewCount,
            //this._productReviewStarElements,
            this._productWriteReviewSubtitle,
            this._productUserNameInputField,
            this._productReviewInputField,
            this._productSubmitReviewButton,
            this._productDescriptionLink,
            //this._productDescription,
            this._productSpecificationLink,
            this._productReviewsLink,
            this._productCustomLink,
            this._faqSectionTitle,
            this._shippingAddressQuestionDropdownLink,
            this._accountActivationQuestionDropdownLink,
            this._pointQuestionDropdownLink,
            this._checkoutLimitQuestionDropdownLink,
            this._immediateCheckoutPaymentQuestionDropdownLink
        ];

        for (let element of elementsToCheck) {
            const isDisplayed = await this.isElementDisplayed(element);
            if (!isDisplayed) {
                throw new Error(`Element ${element} is not displayed.`);
            }
        }
    }

}

module.exports = {SingleProductPage}