import {AbstractPage} from "../../pages/AbstractPage";
import {Locator, Page} from "@playwright/test";

export class ContractSearchFormComponent extends AbstractPage {

    public readonly contractNumber: Locator;
    public readonly client: Locator;
    public readonly dateSignStart: Locator;
    public readonly searchButton: Locator;


    constructor(page: Page) {
        super(page);
        this.contractNumber = this.page.locator(`input[id$='contract:contractInputNumberc']`);
        this.client = this.page.locator(`input[id$='contract:client']`);
        this.dateSignStart = this.page.locator(`input[id='contract:dateSignStartInputDate']`);
        this.searchButton = this.page.locator(`a[id='contract:search']`);
    }

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

    /**
     * Method to click on the first element in the table by ID in the contract search
     */
    public async clickElementInTable(index : number = 1): Promise<void> {
        await this.page.locator('td.TABELLEFIRST a')
            .nth(index)
            .click();
    }
}

