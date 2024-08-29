import {AbstractPage} from "./AbstractPage";
import {Locator, Page} from "@playwright/test";

/**
 * Класс с елементами в режиме редактирования контрагентов
 */
export class CagentEditPage extends AbstractPage {

    public readonly saveButton: Locator;
    public readonly cagentType: Locator;

    constructor(page: Page) {
        super(page);
        this.saveButton = this.page.locator(`table[id='cagentForm:functionalButtonPanel'] a[id='cagentForm:saveButton']`);
        this.cagentType = this.page.locator(`select[id='cagentForm:clientCategory']`);
    }

}