import {Locator, Page} from "@playwright/test";
import {AbstractPage} from "../AbstractPage";

export class CagentMenu extends AbstractPage {

    // Селектор главного меню "Контрагенты"
    public readonly cagentMenu: Locator;
    private readonly searchCagentMenu: Locator;

    constructor(page: Page) {
        super(page);
        this.cagentMenu = this.page.locator('#cagentMenuLink');
        this.searchCagentMenu = this.page.locator('#cagentSearchMenuLink');
    }

    public async menuCagentSearch(): Promise<void> {
        await this.cagentMenu.click();
        await this.searchCagentMenu.click();
        await this.isCurrentPage('cagentSearch');
    }
}