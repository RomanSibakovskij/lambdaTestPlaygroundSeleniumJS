const { By, until} = require('selenium-webdriver');
const BasePage = require('./utils/BasePage');
const Logger = require("./utils/Logger");

class HomePage extends BasePage {

    constructor(driver) {
        super(driver);

        //header web elements
        this._homePageLogoLink = By.xpath("//div[@id='entry_217821']//a");
        this._homePageCategoriesDropdownMenu = By.xpath("//div[@id='entry_217822']//button[@class='btn dropdown-toggle']");
        this._homePageSearchBar = By.xpath("//div[@id='entry_217822']//input[@name='search']");
        this._homePageSearchButton = By.xpath("//div[@id='entry_217822']//button[@type='submit']");
        this._homePageHeaderCompareListButton = By.xpath("//div[@id='entry_217823']/a");
        this._homePageHeaderWishListButton = By.xpath("//div[@id='entry_217824']/a");
        this._homePageHeaderShoppingCartLink = By.xpath("//div[@id='entry_217825']/a");
        //navbar web elements
        this._homePageNavbarShopByCategoryLink = By.xpath("//div[@id='entry_217831']//div[@id='entry_217832']/a");
        this._homePageNavbarHomeLink = By.xpath("//div[@id='entry_217831']//div[@id='entry_217834']//ul[@class='navbar-nav horizontal']/li[1]/a");
        this._homePageNavbarSpecialLink = By.xpath("//div[@id='entry_217831']//div[@id='entry_217834']//ul[@class='navbar-nav horizontal']/li[2]/a");
        this._homePageNavbarBlogLink = By.xpath("//div[@id='entry_217831']//div[@id='entry_217834']//ul[@class='navbar-nav horizontal']/li[3]/a");
        this._homePageNavbarMegaMenuDropdownMenu = By.xpath("//div[@id='entry_217831']//div[@id='entry_217834']//ul[@class='navbar-nav horizontal']/li[4]/a");
        this._homePageNavbarAddonsDropdownMenu = By.xpath("//div[@id='entry_217831']//div[@id='entry_217834']//ul[@class='navbar-nav horizontal']/li[5]");
        this._homePageNavbarMyAccountDropdownMenu = By.xpath("//div[@id='entry_217834']//ul[@class='navbar-nav horizontal']/li[6]");
        this._myAccountDropdowmnRegisterLink = By.css(".dropdown-menu.mz-sub-menu-96 > li:nth-of-type(2) > .both.dropdown-item.icon-left");
        this._myAccountDropdownLoginLink = By.css(".dropdown-menu.mz-sub-menu-96 > li:nth-of-type(1) > .both.dropdown-item.icon-left");
        //image carousel web elements
        this._homePageCarouselImage = By.xpath("//div[@id='common-home']//div[@id='mz-carousel-217960']");
        this._homePageCarouselButtonElements = By.xpath("//div[@id='common-home']//div[@id='mz-carousel-217960']/ul/li");
        this._homePageCarouselPreviousButton = By.xpath("//div[@id='common-home']//div[@id='mz-carousel-217960']/a[@class='carousel-control-prev']");
        this._homePageCarouselNextButton = By.xpath("//div[@id='common-home']//div[@id='mz-carousel-217960']/a[@class='carousel-control-next']");
        this._homePageWashingMachineImage = By.xpath("//div[@id='entry_217961']//div[@id='entry_217963']//img");
        this._homePageWashingMachineDescription = By.xpath("//div[@id='entry_217961']//div[@id='entry_217963']//div[@class='mb-4 mb-lg-0']");
        this._homePageWashingMachineShopNowButton = By.xpath("//div[@id='entry_217961']//div[@id='entry_217963']//a");
        this._homePageLumixPanasonicImageLink = By.xpath("//div[@id='entry_217965']//div[1]/a");
        this._homePageMPowHeadphonesImageLink = By.xpath("//div[@id='entry_217965']//div[2]/a");
        //top trending categories web elements
        this._homePageTopTrendingSectionTitle = By.xpath("//div[@id='entry_217969']/h3");
        this._homePageDesktopsCategoryImageLink = By.xpath("//div[@id='mz-category-wall74217970']/div[@class='swiper-wrapper']/div[1]/a");
        this._homePageLaptopsCategoryImageLink = By.xpath("//div[@id='mz-category-wall74217970']/div[@class='swiper-wrapper']/div[2]/a");
        this._homePageComponentsCategoryImageLink = By.xpath("//div[@id='mz-category-wall74217970']/div[@class='swiper-wrapper']/div[3]/a");
        this._homePageTabletsCategoryImageLink = By.xpath("//div[@id='mz-category-wall74217970']/div[@class='swiper-wrapper']/div[4]/a");
        this._homePageSoftwareCategoryImageLink = By.xpath("//div[@id='mz-category-wall74217970']/div[@class='swiper-wrapper']/div[5]/a");
        this._homePagePhonesCategoryImageLink = By.xpath("//div[@id='mz-category-wall74217970']/div[@class='swiper-wrapper']/div[6]/a");
        this._homePageEntryModule = By.xpath("//div[@id='entry_217971']//div[@id='entry_217974']");
        this._homePageHP25HeadphonesImage = By.xpath("//div[@id='entry_217971']//div[@id='entry_217975']//a");
        //top products section web elements
        this._homePageTopProductsSectionTitle = By.xpath("//div[@id='entry_217977']//h3");
        this._homePageTopProductsImageElements = By.xpath("//div[@id='entry_217977']//div[@class='image']");
        this._homePageTopProductsNameElements = By.xpath("//div[@id='entry_217977']//div[@class='caption']/h4");
        this._homePageTopProductsPriceElements = By.xpath("//div[@id='entry_217977']//div[@class='caption']/div");

        //footer copyright web element
        this._homePageFooterCopyrightText = By.xpath("//footer//div[@id='entry_217560']");

        //top categories section title web element
        this._topCategoriesSectionTitle = By.xpath("//div[@id='mz-component-1626147655']/h5");
        //laptops/notebooks category web element
        this._laptopsNotebooksCategoryLink = By.xpath("//div[@id='mz-component-1626147655']//ul/li[6]");
    }

    //click 'Homepage' logo method
    async clickHomePageLogo(){
        const homePageLogo = await this.driver.findElement(this._homePageLogoLink);
        homePageLogo.click();
    }

    //hover over 'My account' dropdown menu method
    async hoverOverMyAccountDropdownMenu() {
        const myAccountDropdownMenu = await this.driver.findElement(this._homePageNavbarMyAccountDropdownMenu);
        const actions = this.driver.actions({bridge: true});
        await actions.move({origin: myAccountDropdownMenu}).perform();
    }

    //click 'Register' link
    async clickRegisterLink(){
        const registerLink = await this.driver.findElement(this._myAccountDropdowmnRegisterLink)
        registerLink.click();
    }

    //click 'Login' link
    async clickLoginLink(){
        const loginLink = await this.driver.findElement(this._myAccountDropdownLoginLink)
        loginLink.click();
    }

    //click navbar 'Shopping Cart' button
    async clickNavbarShoppingCartLink(){
        const shoppingCartLink = await this.driver.findElement(this._homePageHeaderShoppingCartLink)
        shoppingCartLink.click();
    }

    //input product search query method
    async inputProductSearchQuery(){
        const navbarSearchBar = await this.driver.findElement(this._homePageSearchBar);
        const searchQuery = "HTC Touch HD"
        Logger.info("Input product search query: " + searchQuery);
        await navbarSearchBar.sendKeys(searchQuery);
    }

    //click 'Search' button
    async clickNavbarSearchButton(){
        const navbarSearchButton = await this.driver.findElement(this._homePageSearchButton)
        navbarSearchButton.click();
    }

    //general wait for element load method
    async waitForElementLoad() {
        const elementLoadTime = 1700;
        return new Promise(resolve => setTimeout(resolve, elementLoadTime));
    }

    //click 'HP25 headphones' image method
    async clickHP25HeadphonesImage(){
        const hp25HeadphonesImage = await this.driver.findElement(this._homePageHP25HeadphonesImage);
        hp25HeadphonesImage.click();
    }

    //washing machine description getter
    async getWashingMachineDescription(){
        const washingMachineDescription = await this.driver.findElement(this._homePageWashingMachineDescription);
        return await washingMachineDescription.getText();
    }
    //top trending section title getter
    async getTopTrendingSectionTitle(){
        const topTrendingSectionTitle = await this.driver.findElement(this._homePageTopTrendingSectionTitle);
        return await topTrendingSectionTitle.getText();
    }
    //top products section title getter
    async getTopProductsSectionTitle(){
        const topProductsSectionTitle = await this.driver.findElement(this._homePageTopProductsSectionTitle);
        return await topProductsSectionTitle.getText();
    }

    //top products data getter methods (homepage content)
    async getProductName() {
        const elementsArray = await this.driver.findElements(this._homePageTopProductsNameElements);

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

    async getProductPrice() {
        const elementsArray = await this.driver.findElements(this._homePageTopProductsPriceElements);

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

    //click 'Shop By Category' link method
    async clickShopByCategoryLink(){
        const shopByCategoryLink = await this.driver.findElement(this._homePageNavbarShopByCategoryLink);
        shopByCategoryLink.click();
    }
    //top categories (navbar) section title getter
    async getTopCategoriesSectionTitle(){
        const topCategoriesSectionTitle = await this.driver.findElement(this._topCategoriesSectionTitle);
        return await topCategoriesSectionTitle.getText();
    }
    //click 'Laptops and Notebooks' link method
    async clickLaptopsNotebooksLink(){
        const laptopsNotebooksLink = await this.driver.findElement(this._laptopsNotebooksCategoryLink);
        laptopsNotebooksLink.click();
    }


    async isElementDisplayed(locator) {
        const element = await this.driver.findElement(locator);
        return await element.isDisplayed();
    }

    //general page web element assert (elements all pages share - except shipping/checkout pages)
    async isGeneralPageWebElementDisplayed(){
        const elementsToCheck = [
            this._homePageLogoLink,
            this._homePageCategoriesDropdownMenu,
            this._homePageSearchBar,
            this._homePageSearchButton,
            this._homePageHeaderCompareListButton,
            this._homePageHeaderWishListButton,
            this._homePageHeaderShoppingCartLink,
            this._homePageNavbarShopByCategoryLink,
            this._homePageNavbarHomeLink,
            this._homePageNavbarSpecialLink,
            this._homePageNavbarBlogLink,
            this._homePageNavbarMegaMenuDropdownMenu,
            this._homePageNavbarAddonsDropdownMenu,
            this._homePageNavbarMyAccountDropdownMenu,
            this._homePageFooterCopyrightText
        ];

        for (let element of elementsToCheck) {
            const isDisplayed = await this.isElementDisplayed(element);
            if (!isDisplayed) {
                throw new Error(`Element ${element} is not displayed.`);
            }
        }
    }

    //home page web element assert
    async isHomePageWebElementDisplayed(){
        const elementsToCheck = [
            this._homePageCarouselImage,
            this._homePageCarouselButtonElements,
            //this._homePageCarouselPreviousButton,
            //this._homePageCarouselNextButton,
            this._homePageWashingMachineImage,
            this._homePageWashingMachineDescription,
            this._homePageWashingMachineShopNowButton,
            this._homePageLumixPanasonicImageLink,
            this._homePageMPowHeadphonesImageLink,
            this._homePageTopTrendingSectionTitle,
            //this._homePageDesktopsCategoryImageLink,
            ///this._homePageLaptopsCategoryImageLink,
            // this._homePageComponentsCategoryImageLink,
            // this._homePageTabletsCategoryImageLink,
            // this._homePageSoftwareCategoryImageLink,
            // this._homePagePhonesCategoryImageLink,
            this._homePageEntryModule,
            this._homePageHP25HeadphonesImage,
            this._homePageTopProductsSectionTitle,
            this._homePageTopProductsImageElements,
            this._homePageTopProductsNameElements,
            this._homePageTopProductsPriceElements
        ];

        for (let element of elementsToCheck) {
            const isDisplayed = await this.isElementDisplayed(element);
            if (!isDisplayed) {
                throw new Error(`Element ${element} is not displayed.`);
            }
        }
    }


}

module.exports = {HomePage};
