
import { test, expect, Page, Locator } from "@playwright/test"
import { inputMessageLog } from "../log.conf";

export abstract class BasePage {

    protected readonly page: Page;
    emailTxtLocator: string = "//input[contains(@placeholder,'e-mail')]";
    protected submitBtnLocator: string = "//button[@type='submit' and contains(@class,'auth-button')]";
    protected waiter: number = 4000;

    constructor(page: Page) {
        this.page = page;
    }

    public async inputEmail(email: string) {
        await test.step(`I input email ${email}`, async () => {
            inputMessageLog(this.emailTxtLocator, email);
            await this.page.locator(this.emailTxtLocator).type(email);
        })

    }


}