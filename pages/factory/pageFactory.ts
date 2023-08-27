import { BasePage } from "../basePage";
import { CatalogPage } from "../catalogPage";
import { ForgotPasswordPage } from "../forgotPasswordPage";
import { MainPage } from "../mainPage";
import { SignInPage } from "../signInPage";
import { test, expect, Page, Locator } from "@playwright/test"
import { Pages } from "./pageEnums";
import { ProductPage } from "../productPage";
import { BasketPage } from "../basketPage";


export class PageFactory {

    public static getPage(page: Page, pageType: Pages) {
        switch (pageType) {
            case Pages.MAIN:
                return new MainPage(page);
            case Pages.FORGOTPASSSWORD:
                return new ForgotPasswordPage(page);
            case Pages.CATALOG:
                return new CatalogPage(page);
            case Pages.SIGNIN:
                return new SignInPage(page);
            case Pages.PRODUCT:
                return new ProductPage(page);
            case Pages.BASKET:
                return new BasketPage(page);
            default: console.log("I don't know such page")
        }
    }
}