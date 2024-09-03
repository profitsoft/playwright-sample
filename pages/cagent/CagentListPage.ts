import {CagentSearchFormComponent} from "../../html-components/cagent/CagentSearchFormComponent";
import {Locator, Page} from "@playwright/test";
import {AbstractPage} from "../AbstractPage";


/**
 * Class with elements in the counterparty list mode, especially for searching counterparties
 */
export class CagentListPage extends AbstractPage {

    // Component with fields for searching counterparties
    public readonly cagentSearchForm: CagentSearchFormComponent;

    // Table with counterparties
    public readonly cagentsTable: Locator;

    constructor(page: Page) {
        super(page, 'cagentSearch');
        this.cagentSearchForm = new CagentSearchFormComponent(page);
        this.cagentsTable = page.locator(`#cagentForm\\:cagents`);
    }


    /**
     * Click on the element in the table
     * @param index - index of the element in the table
     */
    async clickElementInTable(index: number = 1): Promise<void> {
        await this.cagentsTable.locator(`//tbody[last()]/tr[${index}]//td/a`)
            .first()
            .click();
    }
}