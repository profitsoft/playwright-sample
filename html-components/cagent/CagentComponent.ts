import {AbstractPage} from "../../pages/AbstractPage";
import {Locator, Page} from "@playwright/test";

/**
 * Class to work with the 'Counterparty' component
 * This class contains methods to work with the fields of the 'Counterparty' component
 */
export class CagentComponent extends AbstractPage {

    // Field 'Surname
    public readonly surname: Locator;

    // Field 'Name'
    public readonly name: Locator;

    // Field 'Patronymic'
    public readonly patronymic: Locator;

    // Field 'INN'
    public readonly inn: Locator;

    // Field 'Birth date'
    public readonly birthDate: Locator;

    // Field 'Phone number'
    public readonly phoneNumber: Locator;

    // Field 'Cagent related person attributes'
    public readonly cagentRelatedPersonAttributes: Locator;

    // Field 'Cagent type detailed'
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
     * Fill in the fields of the "Counterparty" form
     *
     * @param fields.surname - surname of the counterparty
     * @param fields.name - name of the counterparty
     * @param fields.patronymic - patronymic of the counterparty
     * @param fields.inn - INN of the counterparty
     * @param fields.birthDate - birth date of the counterparty
     * @param fields.phoneNumber - phone number of the counterparty
     * @param fields.cagentRelatedPersonAttributes - related person attributes of the counterparty
     * @param fields.cagentTypeDetailed - detailed type of the counterparty
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