import {AbstractPage} from "../AbstractPage";
import {Locator, Page} from "@playwright/test";
import {CagentComponent} from "../../html-components/cagent/CagentComponent";

/**
 * Class with elements in the counterparty editing mode
 */
export class CagentEditPage extends AbstractPage {

    // Component with fields for editing the counterparty
    public readonly cagentComponent: CagentComponent;

    // Button 'Save'
    public readonly saveButton: Locator;

    // Dropdown 'Cagent type'
    public readonly cagentType: Locator;

    constructor(page: Page) {
        super(page, 'cagentEdit');
        this.cagentComponent = new CagentComponent(this.page);
        this.saveButton = this.page.locator(`table[id='cagentForm:functionalButtonPanel'] a[id='cagentForm:saveButton']`);
        this.cagentType = this.page.locator(`select[id='cagentForm:clientCategory']`);
    }

    /**
     * Select the cagent type
     * @param option - cagent type
     */
    public async selectCagentType(option: string) {
        await this.cagentType.selectOption(option);
    }

    /**
     * Get the selected cagent
     */
    public getSelectedCagentType(): Locator {
        return this.cagentType.locator('option[selected="selected"]');
    }

    /**
     * Click the 'Save' button
     */
    public async clickSave() {
        await this.saveButton.click();
    }

}