import {Page} from "@playwright/test";
import {CagentMenu} from "./CagentMenu";


export class MenuSelectModulePage {
    readonly page: Page;
    readonly cagentMenu: CagentMenu;

    constructor(page: Page) {
        this.page = page;
        this.cagentMenu = new CagentMenu(this.page);
    }

}