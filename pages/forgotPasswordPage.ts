import { BasePage } from "./basePage";
import { test, expect, Page, Locator } from "@playwright/test"
import { clickMessageLog, isElementDisappearsLog } from "../log.conf";

export class ForgotPasswordPage extends BasePage {

    private restorePasswordFormLocator: string = "//form[@novalidate]";


    constructor(page: Page) {
        super(page);
    }

    public async clickSubmitButton() {
        await test.step("I click submit button", async () => {
            clickMessageLog(this.submitBtnLocator);
            await this.page.locator(this.submitBtnLocator).click();
        })
    }


    public async isRestorePasswordFormDisappears() {
        let isDisappear;
        await test.step("I check restore password form disappears", async () => {
            isElementDisappearsLog(this.restorePasswordFormLocator);
            isDisappear = await this.page.locator(this.restorePasswordFormLocator).count() == 0;
        })
        return isDisappear;

    }

}