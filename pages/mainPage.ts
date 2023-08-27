import { BasePage } from "./basePage";
import { CatalogPage } from "./catalogPage";
import { SignInPage } from "./signInPage";
import { test, expect, Page, Locator } from "@playwright/test"
import {  clickMessageLog, logger } from "../log.conf";

export class MainPage extends BasePage {

    private catalogBtnLocator: string = "//a[@class='b-main-navigation__link']//span[contains(text(),'Каталог')]";
    private signInBtnLocator: string = "//div[contains(text(),'Вход')]";


    constructor(page: Page) {
        super(page);
    }


    public async clickCatalogButtton() {
        await test.step("I click catalog button", async () => {
            clickMessageLog(this.catalogBtnLocator);
            await this.page.locator(this.catalogBtnLocator).click();
        })
    }


    public async clickSignInButtton() {
        await test.step("I click Sign In button", async () => {
            clickMessageLog(this.signInBtnLocator);
            await this.page.locator(this.signInBtnLocator).click();
        })

    }

}