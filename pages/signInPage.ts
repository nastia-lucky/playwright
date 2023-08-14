import { BasePage } from "./basePage";
import { ForgotPasswordPage } from "./forgotPasswordPage";
import { test, expect, Page, Locator } from "@playwright/test"
import { clickMessageLog, inputMessageLog, isElementDisappearsLog, isEnabledMessageLog } from "../log.conf";


export class SignInPage extends BasePage {

    private passwordTxtLocator: string = "//input[@type='password']";
    private forgotPasswordBtnLocator: string = "//a[contains(text(),'не помню пароль')]";
    private signInFormLocator: string = "//div[@class='auth-form__body']";
    private incorrectLoginPswMessage: string = "//div[contains(text(),'Неверный логин или пароль')]";
    private indicatePasswordMessageLocator: string = "//div[contains(text(),'Укажите пароль')]";

    constructor(page: Page) {
        super(page)
    }

    public async inputPassword(password: string) {
        await test.step(`I input password ${password}`, async () => {
            inputMessageLog(this.passwordTxtLocator, password);
            await this.page.locator(this.passwordTxtLocator).type(password);
        })

    }

    public async clickSubmitButton() {
        await test.step("I click submit button", async () => {
            clickMessageLog(this.submitBtnLocator);
            await this.page.locator(this.submitBtnLocator).click();

        })

    }


    public async clickForgotPasswordButton() {
        await test.step("I click Forgot password button", async () => {
            clickMessageLog(this.forgotPasswordBtnLocator);
            await this.page.locator(this.forgotPasswordBtnLocator).click()
        })

    }

    public async isSignInFormDisappears() {
        let isDisappear;
        await test.step("I check Sign in form disappears", async () => {
            isElementDisappearsLog(this.signInFormLocator);
            isDisappear = await this.page.locator(this.signInFormLocator).count() == 0;
        })
        return isDisappear;

    }

    public async isIncorrectLoginPswMessageDisplayed() {
        let isDisplayed;
        await test.step("I check incorrect login message displayed", async () => {
            isEnabledMessageLog(this.incorrectLoginPswMessage);
            isDisplayed = await this.page.locator(this.incorrectLoginPswMessage).isEnabled();

        })
        return isDisplayed;
    }

    public async isIndicatePswMessageDisplayed() {
        let isDisplayed;
        await test.step("I check indicate password message displayed", async () => {
            isEnabledMessageLog(this.indicatePasswordMessageLocator);
            isDisplayed = await this.page.locator(this.indicatePasswordMessageLocator).isEnabled();
        })
        return isDisplayed;

    }

}