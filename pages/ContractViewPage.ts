import {Locator, Page} from "@playwright/test";
import {AbstractPage} from "./AbstractPage";

/**
 * Contract viewing page
 */
export class ContractViewPage extends AbstractPage {

    public readonly cagentTabContract: Locator;
    public readonly fioLink: Locator;
    public readonly numberLink: Locator;

    constructor(page: Page) {
        super(page, 'stView');
        // Переход на вкладку "Контрагенты" на просмотре договора
        this.cagentTabContract = this.page.locator('#contractForm\\:cagentTab_lbl');
        // ФИО
        this.fioLink = this.page.locator('#contractForm\\:fio');
        // Номер договора
        this.numberLink = this.page.locator('#contractForm\\:numberLinkId');


    }

    /**
     * Method to navigate to the "Counterparties" tab on the contract viewing page
     */
    public async clickCagentTab(): Promise<void> {
        await this.cagentTabContract.click();
    }

    /**
     * Method to get the full name
     */
    public async getFullName(): Promise<string> {
        return await this.fioLink.innerText();
    }

    /**
     * Method to get the contract number
     */
    public async getContractNumber(): Promise<string> {
        return await this.numberLink.innerText();
    }
}