import {AbstractPage} from "../AbstractPage";
import {Locator, Page} from "@playwright/test";
import CagentTabs from "../../html-components/cagent/tabs/CagentTabs";

/**
 * Page for the 'Counterparty' module - View
 * The class is used to work with the page of viewing the counterparty
 */
export class CagentViewPage extends AbstractPage {

    // All tabs on the page
    public readonly cagentTabs: CagentTabs

    // Button 'Edit'
    public readonly editButton: Locator;

    constructor(page: Page) {
        super(page, 'cagentView');
        this.cagentTabs = new CagentTabs(page);
        this.editButton = this.page.locator(`#cagentForm\\:editButton`);
    }

    /**
     * Click the 'Edit' button
     */
    public async clickEdit() {
        await this.editButton.click();
    }

}