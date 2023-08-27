import { clickMessageLog, isEnabledMessageLog } from "../log.conf";
import { BasePage } from "./basePage";
import { test, expect, Page, Locator } from "@playwright/test"


export class ProductPage extends BasePage{


    private inBasketLocator: string = "//a[contains(@class,'button') and contains(text(),'В корзину')]";


    constructor(page: Page) {
        super(page);
    }


    public async putProductToBasket() {
        await test.step("I put my product to basket", async () => {
            clickMessageLog(this.inBasketLocator);
            await this.page.locator(this.inBasketLocator).last().click();
        })
    }


}