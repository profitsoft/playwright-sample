import {AbstractPage} from "../../pages/AbstractPage";
import {Locator, Page} from "@playwright/test";

export class CagentSearchFormComponent extends AbstractPage {

    public readonly createCagentButton: Locator;

    constructor(page: Page) {
        super(page);
        this.createCagentButton = this.page.locator('a[id$=create]');
    }

    public async clickCreateCagentButton() {
        await this.createCagentButton.click();
    }
}