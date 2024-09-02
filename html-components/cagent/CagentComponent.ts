import {AbstractPage} from "../../pages/AbstractPage";
import {Locator, Page} from "@playwright/test";

export class CagentComponent extends AbstractPage {

    type

    public readonly surname: Locator;
    public readonly name: Locator;
    public readonly patronymic: Locator;
    public readonly inn: Locator;
    public readonly birthDate: Locator;
    public readonly phoneNumber: Locator;
    public readonly cagentRelatedPersonAttributes: Locator;
    public readonly cagentTypeDetailed: Locator;

    constructor(page: Page) {
        super(page);
        this.surname = this.page.locator(`input[id$='surname']`);
        this.name = this.page.locator(`input[id$='name']:not([id$='surname']):not([id$='firmname'])`);
        this.patronymic = this.page.locator(`input[id$='patronymic']`);
        this.inn = this.page.locator(`input[id$='inn']`);
        this.birthDate = this.page.locator(`input[id$='birthDateInputDate']`);
        this.phoneNumber = this.page.locator(`input[id$='phoneFullNumber']`);
        this.cagentRelatedPersonAttributes = this.page.locator('#cagentForm\\:cagentrelatedPersonAttributes');
        this.cagentTypeDetailed = this.page.locator('#cagentForm\\:cagentcagentTypeDetailed');
    }

    /**
     * Method to fill in the fields of the "Counterparty" component
     *
     * @param fields
     */
    public async fillFields(fields: {
        surname: string,
        name: string,
        patronymic: string,
        inn: string,
        birthDate: string,
        phoneNumber: string,
        cagentRelatedPersonAttributes: string,
        cagentTypeDetailed: string
    }) {
        await this.surname.fill(fields.surname || '');
        await this.name.fill(fields.name || '');
        await this.patronymic.fill(fields.patronymic || '');
        await this.inn.fill(fields.inn || '');
        await this.birthDate.fill(fields.birthDate || '');
        await this.phoneNumber.fill(fields.phoneNumber || '');
        await this.cagentRelatedPersonAttributes.selectOption(fields.cagentRelatedPersonAttributes || 'Выберите');
        await this.cagentTypeDetailed.selectOption(fields.cagentTypeDetailed || 'Выберите');
    };
}