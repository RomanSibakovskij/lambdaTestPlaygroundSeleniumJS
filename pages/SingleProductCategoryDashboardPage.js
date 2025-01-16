const { By, until} = require('selenium-webdriver');
const BasePage = require('./utils/BasePage');
const Logger = require("./utils/Logger");

class SingleProductCategoryDashboardPage extends BasePage{

    constructor(driver){
        super(driver);

        //laptops and notebooks category dashboard page web elements
        this._headerProductLink = By.xpath("//div[@id='entry_212385']//a");
        this._laptopsNotebooksPageBreadcrumb = By.xpath("//div[@class='entry-content content-breadcrumbs ']//ol/li");
        //aside (filter section) elements
        this._asideFilterDropdownMenu = By.xpath("//div[@class='card-header']");
        this._asideFilterSectionTitle = By.xpath("//div[@class='card-header']/h3");
        this._asidePriceDropdownMenu = By.xpath("//div[@class='card mz-filter']/div[2]/div[1]/div[1]");
        this._asideManufacturerDropdownMenu = By.xpath("//div[@class='card mz-filter']/div[2]/div[2]/div[1]");
        this._asideSubcategoryDropdownMenu = By.xpath("//div[@class='card mz-filter']/div[2]/div[3]/div[1]");
        this._asideSearchDropdownMenu = By.xpath("//div[@class='card mz-filter']/div[2]/div[4]/div[1]");
        this._asideColorDropdownMenu = By.xpath("//div[@class='card mz-filter']/div[2]/div[5]/div[1]");
        this._asideAvailabilityDropdownMenu = By.xpath("//div[@class='card mz-filter']/div[2]/div[6]/div[1]");
        this._asideSizeDropdownMenu = By.xpath("//div[@class='card mz-filter']/div[2]/div[7]/div[1]");
        this._asideDiscountDropdownMenu = By.xpath("//div[@class='card mz-filter']/div[2]/div[8]/div[1]");
        this._asideRatingDropdownMenu = By.xpath("//div[@class='card mz-filter']/div[2]/div[9]/div[1]");
        //price subsection
        this._filterPriceSlider = By.xpath("//div[@id='mz-filter-panel-0-0']//div[@class='ui-slider-range ui-corner-all ui-widget-header']");
        this._filterPriceFromInputField = By.xpath("//div[@id='mz-filter-panel-0-0']//input[@aria-label='Minimum Price']");
        this._filterPriceToInputField = By.xpath("//div[@id='mz-filter-panel-0-0']//input[@aria-label='Maximum Price']");
        //manufacturer subsection
        this._manufacturerItemElements = By.xpath("//div[@class='mz-filter-group manufacturer ']//div[@id='mz-filter-panel-0-1']/div/div");
        this._manufacturerShowMoreLink = By.xpath("//div[@class='mz-filter-group manufacturer ']//div[@id='mz-filter-panel-0-1']/div/a");
        //sub category subsection
        this._subCategoryWindowsCheckbox = By.xpath("//div[@class='card mz-filter']/div[2]/div[3]/div[@class='collapse show']/div/div[2]");
        this._subCategoryMacCheckbox = By.xpath("//div[@class='card mz-filter']/div[2]/div[3]/div[@class='collapse show']/div/div[1]");
        //search subsection
        this._searchInputField = By.xpath("//div[@class='card mz-filter']/div[2]//input[@aria-label='Search']");
        //color subsection
        this._colorItemElements = By.xpath("//div[@id='mz-filter-panel-0-4']/div/div");
        //availability subsection
        this._inStockCheckbox = By.xpath("//div[@class='card mz-filter']/div[2]//div[@id='mz-filter-panel-0-5']//input[@id='mz-fss-0--1']");
        this._outOfStockCheckbox = By.xpath("//div[@class='card mz-filter']/div[2]//div[@id='mz-filter-panel-0-5']//input[@id='mz-fss-0-5']");
        this._twoThreeDaysCheckbox = By.xpath("//div[@class='card mz-filter']/div[2]//div[@id='mz-filter-panel-0-5']//input[@id='mz-fss-0-6']");
        this._preOrderCheckbox = By.xpath("//div[@class='card mz-filter']/div[2]//div[@id='mz-filter-panel-0-5']//input[@id='mz-fss-0-8']");
        //size subsection
        this._sizeLButton = By.xpath("//div[@class='card mz-filter']/div[2]/div[7]/div[@class='collapse show']/div/div[1]");
        this._sizeMButton = By.xpath("//div[@class='card mz-filter']/div[2]/div[7]/div[@class='collapse show']/div/div[2]");
        this._sizeSButton = By.xpath("//div[@class='card mz-filter']/div[2]/div[7]/div[@class='collapse show']/div/div[3]");
        this._sizeXLButton = By.xpath("//div[@class='card mz-filter']/div[2]/div[7]/div[@class='collapse show']/div/div[4]");
        this._sizeXXLButton = By.xpath("//div[@class='card mz-filter']/div[2]/div[7]/div[@class='collapse show']/div/div[5]");
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
        this._desktopsCategoryLink = By.xpath("//div[@id='entry_212412']//a[1]");
        this._laptopsCategoryLink = By.xpath("//div[@id='entry_212412']//div[@class='nav-link active']"); //when in laptops category, when not it's 'a[2]' and change the selected category selector
        this._componentsCategoryLink = By.xpath("//div[@id='entry_212412']//a[4]");
        this._tabletsCategoryLink = By.xpath("//div[@id='entry_212412']//a[5]");
        this._softwareCategoryLink = By.xpath("//div[@id='entry_212412']//a[6]");
        this._phonesCategoryLink = By.xpath("//div[@id='entry_212412']//a[7]");
        this._camerasCategoryLink = By.xpath("//div[@id='entry_212412']//a[8]");
        this._mp3PlayersCategoryLink = By.xpath("//div[@id='entry_212412']//a[9]");
        //selected category subcategory elements (laptops)
        this._macSubcategoryLink = By.xpath("//div[@id='entry_212412']//a[2]");
        this._windowsSubcategoryLink = By.xpath("//div[@id='entry_212412']//a[3]");
        //product dashboard section web elements
        this._categoryTitle = By.xpath("//h1");
        this._categoryImgPlaceholder = By.xpath("//div[@id='entry_212393']//img");
        this._categoryDescription = By.xpath("//div[@id='entry_212393']//p");
        this._categoryGridViewButton = By.xpath("//div[@id='entry_212397']//button[@id='grid-view']");
        this._categoryListViewButton = By.xpath("//div[@id='entry_212397']//button[@id='list-view']");
        this._categoryShowPerPageDisplay = By.xpath("//div[@id='entry_212402']//select");;
        this._categoryProductCompareLink = By.xpath("//div[@id='entry_212400']/a");
        this._categorySortByDropdownMenu = By.xpath("//div[@id='entry_212403']//select");
        //product card elements (as a list)
        this._productCardImageLinkElements = By.xpath("//div[@id='entry_212408']//div[@class='image']//a");
        this._productCardNameElements = By.xpath("//div[@id='entry_212408']//div[@class='caption']/h4[@class='title']");
        this._productCardUnitPriceElements = By.xpath("//div[@id='entry_212408']//div[@class='caption']/div[@class='price']");
        //macbook pro 'add to cart' button element
        this._productMacbookAddToCartButton = By.css("div:nth-of-type(12) > .product-thumb > .product-thumb-top > .product-action > button[title='Add to Cart']");
        //pagination elements
        this._paginationElements = By.xpath("//div[@id='entry_212409']//ul/li");
        this._bottomShowItemPerPageText = By.xpath("//div[@id='entry_212409']//div[@class='col-sm-6 text-right']");
    }

    //hover over product image method
    async hoverOverMacBookImage() {
        const singleProductImage = await this.driver.findElement(By.xpath("//div[@id='product-category']//div[12]/div[@class='product-thumb']/div[@class='product-thumb-top']"));
        const actions = this.driver.actions({bridge: true});
        await actions.move({origin: singleProductImage}).perform();
    }
    //click MacBook's 'Add to Cart' button method
    async clickAddMacBookToCartButton() {
        const macBookAddToCart = await this.driver.findElement(this._productMacbookAddToCartButton);
        const actions = this.driver.actions({bridge: true});
        await actions.move({origin: macBookAddToCart}).click().perform();
    }

    //filter section title getter
    async getFilterSectionTitle(){
        const filterSectionTitle = await this.driver.findElement(this._asideFilterSectionTitle);
        return await filterSectionTitle.getText();
    }
    //product dashboard page title getter
    async getProductDashboardPageTitle(){
        const productDashboardPageTitle = await this.driver.findElement(this._categoryTitle);
        return await productDashboardPageTitle.getText();
    }
    //product dashboard page description getter
    async getProductDashboardDescription(){
        const productDashboardPageDescription = await this.driver.findElement(this._categoryDescription);
        return await productDashboardPageDescription.getText();
    }
    //show items per page count getter
    async getItemPerPageCount(){
        const itemPerPageCount = await this.driver.findElement(this._bottomShowItemPerPageText);
        return await itemPerPageCount.getText();
    }

    //product name getter method (as a list)
    async getProductName() {
        const elements = await this.driver.findElements(this._productCardNameElements);

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
        const elementsArray = await this.driver.findElements(this._productCardUnitPriceElements);
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

    //single product page web element assert (Selenium fails to see commented out elements even though they're present in the DOM)
    async isSingleProductPageWebElementDisplayed(){
        const elementsToCheck = [
            //this._headerProductLink,
            this._laptopsNotebooksPageBreadcrumb,
            this._asideFilterDropdownMenu,
            this._asideFilterSectionTitle,
            this._asidePriceDropdownMenu,
            this._asideManufacturerDropdownMenu,
            this._asideSubcategoryDropdownMenu,
            this._asideSearchDropdownMenu,
            this._asideColorDropdownMenu,
            this._asideAvailabilityDropdownMenu,
            this._asideSizeDropdownMenu,
            this._asideDiscountDropdownMenu,
            this._asideRatingDropdownMenu,
            this._filterPriceSlider,
            this._filterPriceFromInputField,
            this._filterPriceToInputField,
            this._manufacturerItemElements,
            this._manufacturerShowMoreLink,
            this._subCategoryMacCheckbox,
            this._subCategoryWindowsCheckbox,
            this._searchInputField,
            this._colorItemElements,
            //this._inStockCheckbox,
            //this._outOfStockCheckbox,
            //this._twoThreeDaysCheckbox,
            //this._preOrderCheckbox,
            this._sizeLButton,
            this._sizeMButton,
            this._sizeSButton,
            this._sizeXLButton,
            this._sizeXXLButton,
            //this._10PercentDiscountRadioButton,
            //this._20PercentDiscountRadioButton,
            //this._30PercentDiscountRadioButton,
            //this._40PercentDiscountRadioButton,
            //this._50PercentDiscountRadioButton,
            //this._4StarRatingAndUpRadioButton,
            //this._3StarRatingAndUpRadioButton,
            //this._2StarRatingAndUpRadioButton,
            //this._1StarRatingAndUpRadioButton,
            this._desktopsCategoryLink,
            this._laptopsCategoryLink,
            this._componentsCategoryLink,
            this._tabletsCategoryLink,
            this._softwareCategoryLink,
            this._phonesCategoryLink,
            this._camerasCategoryLink,
            this._mp3PlayersCategoryLink,
            this._macSubcategoryLink,
            this._windowsSubcategoryLink,
            this._categoryTitle,
            this._categoryImgPlaceholder,
            this._categoryDescription,
            this._categoryGridViewButton,
            this._categoryListViewButton,
            this._categoryShowPerPageDisplay,
            this._categoryProductCompareLink,
            this._categorySortByDropdownMenu,
            this._bottomShowItemPerPageText
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

module.exports = {SingleProductCategoryDashboardPage}