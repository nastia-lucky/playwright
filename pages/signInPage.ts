import { BasePage } from "./basePage";
import { ForgotPasswordPage } from "./forgotPasswordPage";
import { test, expect, Page, Locator } from "@playwright/test"


export class SignInPage extends BasePage {

    private passwordTxt: Locator | undefined;
    private forgotPasswordBtn: Locator | undefined;
    private signInForm: Locator | undefined;
    private incorrectLoginPswMessage: Locator | undefined;
    private indicatePasswordMessageLocator: Locator | undefined;

    constructor(page: Page) {
        super(page)
    }

    public async inputPassword(password: string) {
        this.passwordTxt = await this.page.locator("//input[@type='password']");
        await this.passwordTxt.type(password);
    }

    public async clickSubmitButton() {
        this.submitBtn = await this.page.locator("//button[@type='submit' and contains(@class,'auth-button')]");
        await this.submitBtn.click();

    }

    public async clickForgotPasswordButton() {
        this.forgotPasswordBtn = await this.page.locator("//a[contains(text(),'не помню пароль')]")
        await this.forgotPasswordBtn.click();
    }

    public async isSignInFormDisappears() {
        this.signInForm = await this.page.locator("//div[@class='auth-form__body']");
        return await this.signInForm.count() == 0;
    }

    public async isIncorrectLoginPswMessageDisplayed() {
        this.incorrectLoginPswMessage = await this.page.locator("//div[contains(text(),'Неверный логин или пароль')]");
        return await this.incorrectLoginPswMessage.isEnabled();
    }

    public async isIndicatePswMessageDisplayed() {
        this.indicatePasswordMessageLocator = await this.page.locator("//div[contains(text(),'Укажите пароль')]");
        return await this.indicatePasswordMessageLocator.isEnabled();
    }


}