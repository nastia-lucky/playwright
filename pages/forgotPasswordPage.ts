import { BasePage } from "./basePage";
import { test, expect, Page, Locator } from "@playwright/test"

export class ForgotPasswordPage extends BasePage {

    private restorePasswordForm: Locator | undefined;


    constructor(page: Page) {
        super(page);
    }

    public async clickSubmitButton() {
        this.submitBtn = await this.page.locator("//button[@type='submit' and contains(@class,'auth-button')]");
        await this.submitBtn.click();
    }

    public async isRestorePasswordFormDisappears() {
        this.restorePasswordForm = this.page.locator("//form[@novalidate]");
        return await this.restorePasswordForm.count() == 0;
    }

}