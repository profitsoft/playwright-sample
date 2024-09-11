import {Locator, Page} from "@playwright/test";
import {AbstractPage} from "../../pages/AbstractPage";

export class ContractMenu extends AbstractPage {

    // Button 'Contracts' for navigation to the Contracts module
    public readonly contractMenu: Locator;

    // Button 'Search' for navigation to the Contracts module
    private readonly searchContractMenu: Locator;

    constructor(page: Page) {
        super(page);
        this.contractMenu = this.page.locator('#contractMenuLink');
        this.searchContractMenu = this.page.locator('#contractSearchMenuLink');
    }

    /**
     * Navigation to the Contracts module - Search
     */
    public async menuContractSearch() {
        await this.contractMenu.click();
        await this.searchContractMenu.click();
        await this.isCurrentPage('stSearch');
    }
}