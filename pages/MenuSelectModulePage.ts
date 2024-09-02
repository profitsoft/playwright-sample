import {Page} from "@playwright/test";
import {CagentMenu} from "../html-components/menu/CagentMenu";
import {ContractMenu} from "../html-components/menu/ContractMenu"


export class MenuSelectModulePage {
    readonly page: Page;
    readonly cagentMenu: CagentMenu;
    readonly contractMenu: ContractMenu;

    constructor(page: Page) {
        this.page = page;
        this.cagentMenu = new CagentMenu(this.page);
        this.contractMenu = new ContractMenu(this.page);
    }
}