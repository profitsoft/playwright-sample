import {Locator, Page} from "@playwright/test";
import AbstractHtmlComponent from "../AbstractHtmlComponent";

/**
 * Class to work with the 'ContractSearchForm' component
 * This class contains methods to work with the fields of the 'ContractSearchForm' component
 */
export class ContractSearchFormComponent extends AbstractHtmlComponent {

    // Field 'Contract number'
    public readonly contractNumber: Locator;

    // Field 'Client'
    public readonly client: Locator;

    // Field 'Date sign start'
    public readonly dateSignStart: Locator;

    // Button 'Search'
    public readonly searchButton: Locator;

    constructor(page: Page) {
        super(page);
        this.contractNumber = this.page.locator(`input[id$='contract:contractInputNumberc']`);
        this.client = this.page.locator(`input[id$='contract:client']`);
        this.dateSignStart = this.page.locator(`input[id='contract:dateSignStartInputDate']`);
        this.searchButton = this.page.locator(`a[id='contract:search']`);
    }

    /**
     * Fill in the fields of the "Contract" form
     * @param fields.contractNumber - contract number
     * @param fields.client - client
     * @param fields.dateSignStart - date sign start
     */
    public async fillForm(fields: {
        contractNumber: string,
        client: string,
        dateSignStart: string
    }) {
        await this.contractNumber.fill(fields.contractNumber || '');
        await this.client.fill(fields.client || '');
        await this.dateSignStart.fill(fields.dateSignStart || '');
    }

    public async clickSearch() {
        await this.searchButton.click();
    }
}

