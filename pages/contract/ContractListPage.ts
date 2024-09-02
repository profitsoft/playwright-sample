import {AbstractPage} from "../AbstractPage";
import {ContractSearchFormComponent} from "../../html-components/contracts/ContractSearchFormComponent";
import {Page} from "@playwright/test";

/**
 * Class represents the Contract List page.
 */
export class ContractListPage extends AbstractPage {

    public contractSearchForm: ContractSearchFormComponent;

    constructor(page: Page) {
        super(page, 'stSearch');
        this.contractSearchForm = new ContractSearchFormComponent(this.page);
    }
}