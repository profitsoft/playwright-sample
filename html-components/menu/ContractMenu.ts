import {Locator, Page} from "@playwright/test";
import {AbstractPage} from "../../pages/AbstractPage";

export class ContractMenu extends AbstractPage {

    public readonly contractMenu: Locator;
    private readonly searchContractMenu: Locator;

    constructor(page: Page) {
        super(page);
        this.contractMenu = this.page.locator('#contractMenuLink');
        this.searchContractMenu = this.page.locator('#contractSearchMenuLink');
    }

    /**
     * Navigation to the Contracts module - Search
     */
    public async menuContractSearch(): Promise<void> {
        await this.contractMenu.click();
        await this.searchContractMenu.click();
        await this.isCurrentPage('stSearch');
    }
}