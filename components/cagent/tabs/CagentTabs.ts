import AbstractHtmlComponent from "../../AbstractHtmlComponent";
import {Locator, Page} from "@playwright/test";
import ContactPersonsTab from "./ContactPersonsTab";

/**
 * A component for working with tabs in the counterparty card
 */
export default class CagentTabs extends AbstractHtmlComponent {

    // Tab with contact persons
    public readonly contactPersonsTab: ContactPersonsTab;

    // Button for switching to the "Contact persons" tab
    private readonly contactPersonsTabButton: Locator;

    constructor(page: Page) {
        super(page);
        this.contactPersonsTab = new ContactPersonsTab(page);
        this.contactPersonsTabButton = this.page.locator(`#cagentForm\\:contactPersons_lbl`);
    }

    /**
     * Go to the "Contact persons tab"
     */
    public async goToContactPersonsTab() {
        await this.contactPersonsTabButton.click();
    }
}