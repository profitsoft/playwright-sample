import AbstractHtmlComponent from "../../AbstractHtmlComponent";
import {Locator, Page} from "@playwright/test";

/**
 * A component for working with the "Contact persons" tab in the counterparty card
 */
export default class ContactPersonsTab extends AbstractHtmlComponent {

    // Button for creating a responsible person
    public readonly createResponsiblePersonButton: Locator;

    // Responsible person name
    public readonly responsiblePersonName: Locator;

    constructor(page: Page) {
        super(page);
        this.createResponsiblePersonButton = this.page.locator(`#cagentForm\\:createRPButton`);
        this.responsiblePersonName = this.page.locator(`#cagentForm\\:respPersonName`);
    }

    /**
     * Click the button to create a responsible person
     */
    public async clickCreateResponsiblePersonButton() {
        await this.createResponsiblePersonButton.click();
    }

    /**
     * Get the responsible person name
     * @param index - index of the responsible person
     */
    public async getResponsiblePersonName(index: number = 1) {
        return await this.responsiblePersonName.nth(index).innerText();
    }

}