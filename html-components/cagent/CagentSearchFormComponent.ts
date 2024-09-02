import {AbstractPage} from "../../pages/AbstractPage";
import {Locator, Page} from "@playwright/test";

/**
 * Class to work with the 'CagentSearchForm' component
 * This class contains methods to work with the fields of the 'CagentSearchForm' component
 */
export class CagentSearchFormComponent extends AbstractPage {

    // Button 'Create cagent'
    public readonly createCagentButton: Locator;

    constructor(page: Page) {
        super(page);
        this.createCagentButton = this.page.locator('a[id$=create]');
    }

    /**
     * Click on the 'Create cagent' button
     */
    public async clickCreateCagentButton() {
        await this.createCagentButton.click();
    }
}