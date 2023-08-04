import { BasePage } from "./basePage";
import { CatalogPage } from "./catalogPage";
import { SignInPage } from "./signInPage";
import { test, expect, Page, Locator } from "@playwright/test"

export class MainPage extends BasePage {

    private catalogBtn: Locator | undefined;
    private signInBtn: Locator | undefined;


    constructor(page: Page) {
        super(page);
    }


    public async clickCatalogButtton() {
        this.catalogBtn = await this.page.locator('//a[@class="b-main-navigation__link"]//span[contains(text(),"Каталог")]');
        await this.catalogBtn.click();
    }

    public async clickSignInButtton() {
        this.signInBtn = await this.page.locator("//div[contains(text(),'Вход')]");
        await this.signInBtn.click();
    }

}