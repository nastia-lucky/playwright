
import { test, expect } from "@playwright/test"
import { CatalogPage } from "../pages/catalogPage";
import { ForgotPasswordPage } from "../pages/forgotPasswordPage";
import { MainPage } from "../pages/mainPage";
import { Pages } from "../pages/factory/pageEnums";
import { PageFactory } from "../pages/factory/pageFactory";
import { SignInPage } from "../pages/signInPage";
import { ProductPage } from "../pages/productPage";
import { BasketPage } from "../pages/basketPage";

test.describe('Check main page', async () => {

    let url = process.env.BASE_URL as string;
    let email = process.env.EMAIL as string;
    let password = process.env.PASSWORD as string;
    let incorrectEmail: string = "klepatskahhbhyanastia@gmail.com";
    let incorrectPassword: string = "nastusbhghhghja1213";


    test.beforeEach(async ({ page }) => {
        await page.goto(url);
    })

    test("Check user can open Catalog", async ({ page }) => {
        const mainPage = PageFactory.getPage(page, Pages.MAIN) as MainPage;
        await mainPage.clickCatalogButtton();
        const catalogPage = PageFactory.getPage(page, Pages.CATALOG) as CatalogPage;
        expect(await catalogPage.isClassifierDisplayed()).toBeTruthy();
    })

    test("Check user can sign in to onliner", async ({ page }) => {
        const mainPage = PageFactory.getPage(page, Pages.MAIN) as MainPage;
        await mainPage.clickSignInButtton();
        const signInPage = PageFactory.getPage(page, Pages.SIGNIN) as SignInPage;
        await signInPage.inputEmail(email)
        await signInPage.inputPassword(password);
        await signInPage.clickSubmitButton();
        expect(await signInPage.isSignInFormDisappears).toBeTruthy();
    })

    test("Check user send forgot password form", async ({ page }) => {
        const mainPage = PageFactory.getPage(page, Pages.MAIN) as MainPage;
        await mainPage.clickSignInButtton();
        const signInPage = PageFactory.getPage(page, Pages.SIGNIN) as SignInPage;
        await signInPage.clickForgotPasswordButton();
        const forgotPasswordPage = PageFactory.getPage(page, Pages.FORGOTPASSSWORD) as ForgotPasswordPage;
        await forgotPasswordPage.inputEmail(email);
        await forgotPasswordPage.clickSubmitButton();
        expect(await forgotPasswordPage.isRestorePasswordFormDisappears).toBeTruthy();
    })

    test("Check correct message appears upon inputting not correct credentials", async ({ page }) => {
        const mainPage = PageFactory.getPage(page, Pages.MAIN) as MainPage;
        await mainPage.clickSignInButtton();
        const signInPage = PageFactory.getPage(page, Pages.SIGNIN) as SignInPage;
        await signInPage.inputEmail(incorrectEmail)
        await signInPage.inputPassword(incorrectPassword)
        await signInPage.clickSubmitButton();
        expect(await signInPage.isIncorrectLoginPswMessageDisplayed()).toBeTruthy();
    })

    test("Check correct message appears if user clicks Submit button without password provided", async ({ page }) => {
        const mainPage = PageFactory.getPage(page, Pages.MAIN) as MainPage;
        await mainPage.clickSignInButtton();
        const signInPage = PageFactory.getPage(page, Pages.SIGNIN) as SignInPage;
        await signInPage.inputEmail(incorrectEmail);
        await signInPage.clickSubmitButton();
        expect(await signInPage.isIndicatePswMessageDisplayed()).toBeTruthy();
    })

    test("Check user can put product to basket", async ({ page }) => {
        const mainPage = PageFactory.getPage(page, Pages.MAIN) as MainPage;
        await mainPage.clickCatalogButtton();
        const catalogPage = PageFactory.getPage(page, Pages.CATALOG) as CatalogPage;
        await catalogPage.clickClassifier("Электроника")
        await catalogPage.clickSideMenu("Мобильные");
        catalogPage.clickLink();
        await catalogPage.clickOffersButton();
        const productPage = PageFactory.getPage(page, Pages.PRODUCT) as ProductPage;
        await productPage.putProductToBasket();
        await productPage.goToBasket();
        const basketPage = PageFactory.getPage(page, Pages.BASKET) as BasketPage;
        expect(await basketPage.isCompleteOrderButtonDisplayed).toBeTruthy();
    })




})

