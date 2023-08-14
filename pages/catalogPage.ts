
import { BasePage } from "./basePage";
import { test, expect, Page, Locator } from "@playwright/test"
import { isEnabledMessageLog } from "../log.conf";


export class CatalogPage extends BasePage {

    private classifierLblLocator: string = "//ul[@class='catalog-navigation-classifier ']";

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

}