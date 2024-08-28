import {AbstractPage} from "../AbstractPage";
import {Locator, Page} from "@playwright/test";

export class CagentSearchFormComponent extends AbstractPage {

    readonly createCagentButton: Locator;

    constructor(page: Page) {
        super(page);
        this.createCagentButton = this.page.locator('a[id$=create]');
    }

}