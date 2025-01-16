const { By, until} = require('selenium-webdriver');
const BasePage = require('./utils/BasePage');
const Logger = require("./utils/Logger");

class SearchedProductDashboardPage extends BasePage{

    constructor(driver) {
        super(driver);

        //searched product dashboard page web elements
        this._searchDashboardPageBreadcrumb = By.xpath("//div[@class='entry-content content-breadcrumbs ']//ol/li");
        //aside (filter section) elements
        this._searchPageAsideFilterDropdownMenu = By.xpath("//div[@class='card-header']");
        this._searchPageAsideFilterSectionTitle = By.xpath("//div[@class='card-header']/h3");
        this._searchPageAsidePriceDropdownMenu = By.xpath("//div[@class='card mz-filter']/div[2]/div[1]/div[1]");
        this._searchPageAsideManufacturerDropdownMenu = By.xpath("//div[@class='card mz-filter']/div[2]/div[2]/div[1]");
        this._searchPageAsideSearchDropdownMenu = By.xpath("//div[@class='card mz-filter']/div[2]/div[3]/div[1]");
        this._searchPageAsideColorDropdownMenu = By.xpath("//div[@class='card mz-filter']/div[2]/div[4]/div[1]");
        this._searchPageAsideAvailabilityDropdownMenu = By.xpath("//div[@class='card mz-filter']/div[2]/div[5]/div[1]");
        this._searchPageAsideDiscountDropdownMenu = By.xpath("//div[@class='card mz-filter']/div[2]/div[6]/div[1]");
        this._searchPageAsideRatingDropdownMenu = By.xpath("//div[@class='card mz-filter']/div[2]/div[7]/div[1]");
        //price subsection
        this._searchFilterPriceSlider = By.xpath("//div[@id='mz-filter-panel-0-0']//div[@data-role='rangeslider']");
        this._searchFilterPriceFromInputField = By.xpath("//div[@id='mz-filter-panel-0-0']//input[@aria-label='Minimum Price']");
        this._searchFilterPriceToInputField = By.xpath("//div[@id='mz-filter-panel-0-0']//input[@aria-label='Maximum Price']");
        //manufacturer subsection
        this._searchManufacturerItemElements = By.xpath("//div[@class='mz-filter-group manufacturer ']//div[@id='mz-filter-panel-0-1']/div/div");
        //search subsection
        this._searchPageAsideSearchInputField = By.xpath("//div[@class='card mz-filter']/div[2]//input[@aria-label='Search']");
        //color subsection
        this._searchColorItemElements = By.xpath("//div[@id='mz-filter-panel-0-4']/div/div");
        //availability subsection
        this._inStockCheckbox = By.xpath("//div[@class='card mz-filter']/div[2]//div[@id='mz-filter-panel-0-5']//input[@id='mz-fss-0--1']");
        //discount subsection
        this._10PercentDiscountRadioButton = By.xpath("//div[@class='card mz-filter']/div[2]/div[8]//div[@id='mz-filter-panel-0-7']//input[@id='mz-fd-0-10']");
        this._20PercentDiscountRadioButton = By.xpath("//div[@class='card mz-filter']/div[2]/div[8]//div[@id='mz-filter-panel-0-7']//input[@id='mz-fd-0-20']");
        this._30PercentDiscountRadioButton = By.xpath("//div[@class='card mz-filter']/div[2]/div[8]//div[@id='mz-filter-panel-0-7']//input[@id='mz-fd-0-30']");
        this._40PercentDiscountRadioButton = By.xpath("//div[@class='card mz-filter']/div[2]/div[8]//div[@id='mz-filter-panel-0-7']//input[@id='mz-fd-0-40']");
        this._50PercentDiscountRadioButton = By.xpath("//div[@class='card mz-filter']/div[2]/div[8]//div[@id='mz-filter-panel-0-7']//input[@id='mz-fd-0-50']");
        //rating subsection
        this._4StarRatingAndUpRadioButton = By.xpath("//div[@class='card mz-filter']/div[2]/div[9]//div[@id='mz-filter-panel-0-8']//input[@id='mz-fr-0-4']");
        this._3StarRatingAndUpRadioButton = By.xpath("//div[@class='card mz-filter']/div[2]/div[9]//div[@id='mz-filter-panel-0-8']//input[@id='mz-fr-0-3']");
        this._2StarRatingAndUpRadioButton = By.xpath("//div[@class='card mz-filter']/div[2]/div[9]//div[@id='mz-filter-panel-0-8']//input[@id='mz-fr-0-2']");
        this._1StarRatingAndUpRadioButton = By.xpath("//div[@class='card mz-filter']/div[2]/div[9]//div[@id='mz-filter-panel-0-8']//input[@id='mz-fr-0-1']");
        //aside section elements (other categories)
        this._searchDesktopsCategoryLink = By.xpath("//div[@id='entry_212473']//a[1]");
        this._searchLaptopsCategoryLink = By.xpath("//div[@id='entry_212473']//a[2]");
        this._searchComponentsCategoryLink = By.xpath("//div[@id='entry_212473']//a[3]");
        this._searchTabletsCategoryLink = By.xpath("//div[@id='entry_212473']//a[4]");
        this._searchSoftwareCategoryLink = By.xpath("//div[@id='entry_212473']//a[5]");
        this._searchPhonesCategoryLink = By.xpath("//div[@id='entry_212473']//a[6]");
        this._searchCamerasCategoryLink = By.xpath("//div[@id='entry_212473']//a[7]");
        this._searchMP3PlayersCategoryLink = By.xpath("//div[@id='entry_212473']//a[8]");
        //product dashboard section web elements
        this._searchDashboardPageTitle = By.xpath("//h1");
        this._searchDashboardPageSearchBar = By.xpath("//div[@id='entry_212457']//input[@name='search']");
        this._searchDashboardPageCategoryDropdownMenu = By.xpath("//div[@id='entry_212457']//select[@name='category_id']");
        this._searchDashboardPageSearchButton = By.xpath("//div[@id='entry_212457']//input[@id='button-search']");
        this._searchDashboardPageSubcategoriesSearchCheckbox = By.xpath("//div[@id='entry_212457']//input[@id='sub_category']");
        this._searchDashboardPageSearchProductDescCheckbox = By.xpath("//div[@id='entry_212457']//input[@id='description']");
        this._searchDashboardPageGridViewButton = By.xpath("//div[@id='entry_212455']//button[@id='grid-view']");
        this._searchDashboardPageListViewButton = By.xpath("//div[@id='entry_212455']//button[@id='list-view']");
        this._searchDashboardPageShowPerPageDisplay = By.xpath("//div[@id='entry_212463']//select");
        this._searchDashboardPageProductCompareLink = By.xpath("//div[@id='entry_212461']/a");
        this._searchDashboardPageSortByDropdownMenu = By.xpath("//div[@id='entry_212464']//select");
        //product card elements (as a list)
        this._searchDashboardPageProductCardImageLinkElements = By.xpath("//div[@id='entry_212469']//div[@class='image']//a");
        this._searchDashboardPageProductCardNameElements = By.xpath("//div[@id='entry_212469']//div[@class='caption']/h4[@class='title']");
        this._searchDashboardPageProductCardUnitPriceElements = By.xpath("//div[@id='entry_212469']//div[@class='caption']/div[@class='price']");
        //macbook pro 'add to cart' button element
        this._searchProductHPAddToCartButton = By.css("div:nth-of-type(1) > .product-thumb > .product-thumb-top > .product-action > button[title='Add to Cart']");
        //pagination elements
        this._searchBottomShowItemPerPageText = By.xpath("//div[@id='entry_212455']//div[@class='col-sm-6 text-right']");
    }

    //hover over product (HP LP3065) image method
    async hoverOverHPImage() {
        const singleSearchedProductImage = await this.driver.findElement(By.xpath("//div[@id='product-search']/div[2]/div/div[1]/div[5]/div/div[1]/div[@class='product-thumb']/div[@class='product-thumb-top']"));
        const actions = this.driver.actions({bridge: true});
        await actions.move({origin: singleSearchedProductImage}).perform();
    }
    //click HP product 'Add to Cart' button method
    async clickAddHPProductToCartButton() {
        const hpAddToCart = await this.driver.findElement(this._searchProductHPAddToCartButton);
        const actions = this.driver.actions({bridge: true});
        await actions.move({origin: hpAddToCart}).click().perform();
    }

    //show items per page count getter
    async getItemPerPageCount(){
        const itemPerPageCount = await this.driver.findElement(this._searchBottomShowItemPerPageText);
        return await itemPerPageCount.getText();
    }

    //product name getter method (as a list)
    async getProductName() {
        const elements = await this.driver.findElements(this._searchDashboardPageProductCardNameElements);

        return await Promise.all(
            elements.map(async (element) => {
                if (!element) {
                    console.warn('Element is undefined');
                    return '';
                }

                const text = await element.getText();
                return text.trim();
            })
        );
    }
    //product dashboard product unit price getter (as a list)
    async getProductUnitPrice() {
        const elementsArray = await this.driver.findElements(this._searchDashboardPageProductCardUnitPriceElements);
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

    async isElementDisplayed(locator) {
        const element = await this.driver.findElement(locator);
        return await element.isDisplayed();
    }

    //searched product dashboard page web element assert (Selenium fails to see commented out elements even though they're present in the DOM)
    async isSearchedProductPageWebElementDisplayed(){
        const elementsToCheck = [
            this._searchDashboardPageBreadcrumb,
            this._searchPageAsideFilterDropdownMenu,
            this._searchPageAsideFilterSectionTitle,
            this._searchPageAsidePriceDropdownMenu,
            this._searchPageAsideManufacturerDropdownMenu,
            this._searchPageAsideSearchDropdownMenu,
            this._searchPageAsideColorDropdownMenu,
            this._searchPageAsideAvailabilityDropdownMenu,
            this._searchPageAsideDiscountDropdownMenu,
            this._searchPageAsideRatingDropdownMenu,
            this._searchFilterPriceSlider,
            this._searchFilterPriceFromInputField,
            this._searchFilterPriceToInputField,
            this._searchManufacturerItemElements,
            this._searchPageAsideSearchInputField,
            this._searchColorItemElements,
            this._searchDesktopsCategoryLink,
            this._searchLaptopsCategoryLink,
            this._searchComponentsCategoryLink,
            this._searchTabletsCategoryLink,
            this._searchSoftwareCategoryLink,
            this._searchPhonesCategoryLink,
            this._searchCamerasCategoryLink,
            this._searchMP3PlayersCategoryLink,
            this._searchDashboardPageTitle,
            this._searchDashboardPageSearchBar,
            this._searchDashboardPageCategoryDropdownMenu,
            this._searchDashboardPageSearchButton,
            //this._searchDashboardPageSubcategoriesSearchCheckbox, -> it's disabled
            //this._searchDashboardPageSearchProductDescCheckbox,
            this._searchDashboardPageGridViewButton,
            this._searchDashboardPageListViewButton,
            this._searchDashboardPageShowPerPageDisplay,
            this._searchDashboardPageProductCompareLink,
            this._searchDashboardPageSortByDropdownMenu,
            this._searchBottomShowItemPerPageText
            //this._inStockCheckbox,
            //this._outOfStockCheckbox,
            //this._twoThreeDaysCheckbox,
            //this._preOrderCheckbox,
            //this._10PercentDiscountRadioButton,
            //this._20PercentDiscountRadioButton,
            //this._30PercentDiscountRadioButton,
            //this._40PercentDiscountRadioButton,
            //this._50PercentDiscountRadioButton,
            //this._4StarRatingAndUpRadioButton,
            //this._3StarRatingAndUpRadioButton,
            //this._2StarRatingAndUpRadioButton,
            //this._1StarRatingAndUpRadioButton,
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

module.exports = {SearchedProductDashboardPage}