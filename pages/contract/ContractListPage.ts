import {AbstractPage} from "../AbstractPage";
import {ContractSearchFormComponent} from "../../html-components/contracts/ContractSearchFormComponent";
import {Page} from "@playwright/test";

export class ContractListPage extends AbstractPage {

    public contractSearchForm: ContractSearchFormComponent;

    constructor(page: Page) {
        super(page);
        this.contractSearchForm = new ContractSearchFormComponent(this.page);
    }
}