import {CagentSearchFormComponent} from "../../html-components/cagent/CagentSearchFormComponent";
import {Page} from "@playwright/test";


export class CagentListPage {

    public readonly cagentSearchForm: CagentSearchFormComponent;

    constructor(page: Page) {
        this.cagentSearchForm = new CagentSearchFormComponent(page);
    }

}