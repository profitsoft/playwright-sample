import {Page} from "@playwright/test";
import {CagentMenu} from "./CagentMenu";
import {ContractMenu} from "./ContractMenu"


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