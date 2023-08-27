import { Page, test } from "@playwright/test";
import { isEnabledMessageLog } from "../log.conf";
import { BasePage } from "./basePage";

export class BasketPage extends BasePage{


    private completeOrderBtnLocator: string = "//a[contains(text(),'Перейти к оформлению')]";


    constructor(page: Page) {
        super(page);
    }


    public async isCompleteOrderButtonDisplayed() {
        let isDisplayed;
        await test.step("I check complete order button displayed", async () => {
            isEnabledMessageLog(this.completeOrderBtnLocator);
            isDisplayed = await this.page.locator(this.completeOrderBtnLocator).isEnabled;
        })
        return isDisplayed;
    }


    
}