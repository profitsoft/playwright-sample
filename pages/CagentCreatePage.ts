import {AbstractPage} from "./AbstractPage";
import {Locator, Page} from "@playwright/test";

export class CagentCreatePage extends AbstractPage {

    public readonly cagentType: Locator;
    public readonly next: Locator;

    constructor(page: Page) {
        super(page);
        this.cagentType = this.page.locator('#cagentForm\\:cagentType');
        this.next = this.page.locator('#cagentForm\\:next');
    }

}