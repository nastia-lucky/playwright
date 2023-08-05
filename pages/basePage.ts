
import { test, expect, Page, Locator } from "@playwright/test"

export abstract class BasePage {

    protected readonly page: Page;
    protected emailTxt: Locator | undefined;
    protected submitBtn: Locator | undefined;
    protected waiter: number = 4000;

    constructor(page: Page) {
        this.page = page;
    }

    public async inputEmail(email: string) {
        this.emailTxt = await this.page.locator("//input[contains(@placeholder,'e-mail')]");
        await this.emailTxt.type(email);
    }

}