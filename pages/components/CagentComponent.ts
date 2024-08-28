import {AbstractPage} from "../AbstractPage";
import {Locator, Page} from "@playwright/test";

export class CagentComponent extends AbstractPage {

    public readonly surname: Locator;
    public readonly name: Locator;
    public readonly patronymic: Locator;
    public readonly inn: Locator;
    public readonly birthDate: Locator;
    public readonly phoneNumber: Locator;
    public readonly cagentrelatedPersonAttributes: Locator;
    public readonly cagentTypeDetailed: Locator;

    constructor(page: Page) {
        super(page);
        this.surname = this.page.locator(`input[id$='surname']`);
        this.name = this.page.locator(`input[id$='name']:not([id$='surname']):not([id$='firmname'])`);
        this.patronymic = this.page.locator(`input[id$='patronymic']`);
        this.inn = this.page.locator(`input[id$='inn']`);
        this.birthDate = this.page.locator(`input[id$='birthDateInputDate']`);
        this.phoneNumber = this.page.locator(`input[id$='phoneFullNumber']`);
        this.cagentrelatedPersonAttributes = this.page.locator('#cagentForm\\:cagentrelatedPersonAttributes');
        this.cagentTypeDetailed = this.page.locator('#cagentForm\\:cagentcagentTypeDetailed');
    }

}