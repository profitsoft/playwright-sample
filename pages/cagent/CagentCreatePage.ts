import {AbstractPage} from "../AbstractPage";
import {Locator, Page} from "@playwright/test";

/**
 * Class with elements for creating counterparties
 */
export class CagentCreatePage extends AbstractPage {

    // Dropdown 'Cagent type'
    public readonly cagentType: Locator;

    // Button 'Next'
    public readonly next: Locator;

    constructor(page: Page) {
        super(page, 'cagentCreateStep1');
        this.cagentType = this.page.locator('#cagentForm\\:cagentType');
        this.next = this.page.locator('#cagentForm\\:next');
    }

    /**
     * Click the 'Next' button
     */
    public async clickNext() {
        await this.next.click();
    }

    /**
     * Select the cagent type
     * @param option - cagent type
     */
    public async selectCagentType(option: string) {
        await this.cagentType.selectOption(option);
    }

}