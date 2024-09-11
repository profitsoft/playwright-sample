import {Locator, Page} from "@playwright/test";
import {AbstractPage} from "../../pages/AbstractPage";

export class CagentMenu extends AbstractPage {

    // Button 'Counterparties' for navigation to the Counterparties module
    public readonly cagentMenu: Locator;

    // Button 'Search' for navigation to the Counterparties module - Search
    private readonly searchCagentMenu: Locator;

    constructor(page: Page) {
        super(page);
        this.cagentMenu = this.page.locator('#cagentMenuLink');
        this.searchCagentMenu = this.page.locator('#cagentSearchMenuLink');
    }

    /**
     * Navigation to the Counterparties module - Search.
     */
    public async menuCagentSearch(): Promise<void> {
        await this.cagentMenu.click();
        await this.searchCagentMenu.click();
        await this.isCurrentPage('cagentSearch');
    }
}