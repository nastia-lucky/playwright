
import { BasePage } from "./basePage";
import { test, expect, Page, Locator } from "@playwright/test"


export class CatalogPage extends BasePage {

    private classifierLbl: Locator | undefined;

    constructor(page: Page) {
        super(page);
    }


    public async isClassifierDisplayed() {
        this.classifierLbl = await this.page.locator("//ul[@class='catalog-navigation-classifier ']")
        return await this.classifierLbl.isEnabled();
    }



}