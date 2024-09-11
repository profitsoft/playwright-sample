import {AbstractPage} from "../AbstractPage";
import {ContractSearchFormComponent} from "../../components/contracts/ContractSearchFormComponent";
import {Page} from "@playwright/test";

/**
 * Class represents the Contract List page.
 */
export class ContractListPage extends AbstractPage {

    // Contract search form component
    public contractSearchForm: ContractSearchFormComponent;

    constructor(page: Page) {
        super(page, 'stSearch');
        this.contractSearchForm = new ContractSearchFormComponent(this.page);
    }

    /**
     * Click on the element in the table by index
     * @param index - index of the element in the table
     */
    public async clickElementInTable(index: number = 0) {
        await this.page.locator(`td.TABELLEFIRST a`)
            .nth(index)
            .click({timeout: 5000});
    }
}