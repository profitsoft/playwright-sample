import {CagentSearchFormComponent} from "../../html-components/cagent/CagentSearchFormComponent";
import {Page} from "@playwright/test";
import {AbstractPage} from "../AbstractPage";


/**
 * Class with elements in the counterparty list mode, especially for searching counterparties
 */
export class CagentListPage extends AbstractPage{

    // Component with fields for searching counterparties
    public readonly cagentSearchForm: CagentSearchFormComponent;

    constructor(page: Page) {
        super(page, 'cagentSearch');
        this.cagentSearchForm = new CagentSearchFormComponent(page);
    }

}