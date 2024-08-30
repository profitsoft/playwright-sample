import {AbstractPage} from "../AbstractPage";
import {Locator, Page} from "@playwright/test";

export class ContractSearchFormComponent extends AbstractPage {

    public readonly contractNumber: Locator;
    public readonly client: Locator;
    public readonly dateSignStart: Locator;
    public readonly findButton: Locator;


    constructor(page: Page) {
        super(page);
        this.contractNumber = this.page.locator(`input[id$='contract:contractInputNumberc']`);
        this.client = this.page.locator(`input[id$='contract:client']`);
        this.dateSignStart = this.page.locator(`input[id='contract:dateSignStartInputDate']`);
        this.findButton = this.page.locator(`a[id='contract:search']`);
    }

    /**
     * Method to click on the first element in the table by ID in the contract search
     */
    public async clickFirstElementInTable(selector: string): Promise<void> {
        const element = this.page.locator(selector).first();
        await element.click();
    }
}

