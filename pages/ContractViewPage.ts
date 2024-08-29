import {Locator, Page} from "@playwright/test";
import {AbstractPage} from "./AbstractPage";

/**
 * Страница просмотра договоров
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
     * Метод для перехода на вкладку "Контрагенты" на просмотре договора
     */
    public async clickCagentTab(): Promise<void> {
        await this.cagentTabContract.click();
    }

    /**
     * Метод для получения полного ФИО
     */
    public async getFullName(): Promise<string> {
        return await this.fioLink.innerText();
    }

    /**
     * Метод для получения номера договора
     */
    public async getContractNumber(): Promise<string> {
        return await this.numberLink.innerText();
    }
}