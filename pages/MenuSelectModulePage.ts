import {Page} from "@playwright/test";
import {CagentMenu} from "../components/menu/CagentMenu";
import {ContractMenu} from "../components/menu/ContractMenu"
import {AbstractPage} from "./AbstractPage";


export class MenuSelectModulePage extends AbstractPage {

    // Menu for Counterparties
    public readonly cagentMenu: CagentMenu;

    // Menu Contracts
    public readonly contractMenu: ContractMenu;

    constructor(page: Page) {
        super(page);
        this.cagentMenu = new CagentMenu(this.page);
        this.contractMenu = new ContractMenu(this.page);
    }
}