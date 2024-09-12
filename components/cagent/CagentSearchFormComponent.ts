import {Locator, Page} from "@playwright/test";
import AbstractHtmlComponent from "../AbstractHtmlComponent";

/**
 * Class to work with the 'CagentSearchForm' component
 * This class contains methods to work with the fields of the 'CagentSearchForm' component
 */
export class CagentSearchFormComponent extends AbstractHtmlComponent {

    // Field full name
    public readonly searchName: Locator;

    // Field 'INN'
    public readonly searchInn: Locator

    // Field 'Phone number'
    public readonly phoneNumber: Locator;

    // Button 'Search'
    public readonly searchButton: Locator;

    // Button 'Create cagent'
    public readonly createCagentButton: Locator;

    constructor(page: Page) {
        super(page);
        this.searchName = this.page.locator(`#cagentForm\\:searchName`);
        this.searchInn = this.page.locator(`#cagentForm\\:innEgrpou`);
        this.phoneNumber = this.page.locator(`#cagentForm\\:phoneNumber`);
        this.searchButton = this.page.locator(`#cagentForm\\:search`);
        this.createCagentButton = this.page.locator('a[id$=create]');
    }

    /**
     * Fill in the fields of the "Cagent search form" and click the 'Search' button
     * @param fields
     */
    public async fillFormAndSearch(fields: {
        name?: string,
        inn?: string,
        phoneNumber?: string
    }) {
        if (fields.name) {
            await this.searchName.fill(fields.name);
        }
        if (fields.inn) {
            await this.searchInn.fill(fields.inn);
        }
        if (fields.phoneNumber) {
            await this.phoneNumber.fill(fields.phoneNumber);
        }
        await this.searchButton.click();
    }

    /**
     * Click on the 'Create cagent' button
     */
    public async clickCreateCagentButton() {
        await this.createCagentButton.click();
    }
}