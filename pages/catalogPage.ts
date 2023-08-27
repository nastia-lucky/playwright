
import { BasePage } from "./basePage";
import { test, expect, Page, Locator } from "@playwright/test"
import { clickMessageLog, isEnabledMessageLog } from "../log.conf";
import { ProductPage } from "./productPage";


export class CatalogPage extends BasePage {

    private classifierLblLocator: string = "//ul[@class='catalog-navigation-classifier ']";
    private offersButtonClassfier: string = "//div[@class='schema-product__offers']";



    constructor(page: Page) {
        super(page);
    }


    public async isClassifierDisplayed() {
        let isDisplayed;
        await test.step("I check classifier label is displayed", async () => {
            isEnabledMessageLog(this.classifierLblLocator);
            isDisplayed = await this.page.locator(this.classifierLblLocator).isEnabled;
        })
        return isDisplayed;
    }

    public async clickClassifier (classifier: string)  {
        let classifierLblLocator: string = `//span[contains(@class,'catalog-navigation') and contains(text(), "${classifier}")]`;
        await test.step(`I click classifier ${classifier}`, async () => {
            clickMessageLog(classifierLblLocator);
            await this.page.locator(classifierLblLocator).first().click();
        })
    }

    public async clickSideMenu(item: string) {
        let classifierLblLocator: string = `//div[contains(@class,'catalog-navigation') and contains(text(), "${item}")]`;
        await test.step(`I click classifier ${item}`, async () => {
            clickMessageLog(classifierLblLocator);
            await this.page.locator(classifierLblLocator).click();
        })
    }

    public async clickOffersButton() {
        await test.step(`I click Offers button`, async () => {
            clickMessageLog(this.offersButtonClassfier);
            await this.page.locator(this.offersButtonClassfier).first().click();
        })
    }


    public async setFilter(filter: string) {
        let checkBoxLocator = `//input[@type='checkbox' and @value="${filter.toLowerCase()}"]`;
        await test.step(`I set filter ${filter}`, async () => {
            clickMessageLog(checkBoxLocator);
            await this.page.locator(checkBoxLocator).check();
        })
    }





}