
import { test, expect, Page, Locator } from "@playwright/test"
import { clickMessageLog, inputMessageLog } from "../log.conf";
import { BasketPage } from "./basketPage";

export abstract class BasePage {

    protected readonly page: Page;
    emailTxtLocator: string = "//input[contains(@placeholder,'e-mail')]";
    protected submitBtnLocator: string = "//button[@type='submit' and contains(@class,'auth-button')]";
    protected waiter: number = 4000;
    protected cartLocator:string ="//a[@title='Корзина']";

    constructor(page: Page) {
        this.page = page;
    }

    public async inputEmail(email: string) {
        await test.step(`I input email ${email}`, async () => {
            inputMessageLog(this.emailTxtLocator, email);
            await this.page.locator(this.emailTxtLocator).type(email);
        })

    }

    public async clickLink() {
        let linkLocator = "//div[contains(text(), 'суперцены')]";
        await test.step(`I click link`, async () => {
            clickMessageLog(linkLocator);
            await this.page.locator(linkLocator).click();
        })

    }

    public async openBasket()  {
        await test.step(`I open basket`, async () => {
            clickMessageLog(this.cartLocator);
            await this.page.locator(this.cartLocator).click();
        })

    }


}