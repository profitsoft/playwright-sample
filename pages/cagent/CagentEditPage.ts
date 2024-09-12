import {AbstractPage} from "../AbstractPage";
import {Locator, Page} from "@playwright/test";
import {CagentComponent} from "../../components/cagent/CagentComponent";
import DivisionSelectComponent from "../../components/division/DivisionSelectComponent";

/**
 * Class with elements in the counterparty editing mode
 */
export class CagentEditPage extends AbstractPage {

    // Component with fields for editing the counterparty
    public readonly cagentComponent: CagentComponent;

    // Component with the division selection
    public readonly divisionSelectComponent: DivisionSelectComponent;

    // Name below the element
    public readonly nameBelowElementCagent: Locator;

    // Button 'Change parent'
    public readonly changeParentButton: Locator;

    // Button 'Save'
    public readonly saveButton: Locator;

    // Button 'Edit'
    public readonly editButton: Locator;

    // Dropdown 'Cagent type'
    public readonly cagentType: Locator;

    constructor(page: Page) {
        super(page, 'cagentEdit');
        this.cagentComponent = new CagentComponent(this.page);
        this.divisionSelectComponent = new DivisionSelectComponent(this.page);
        this.saveButton = this.page.locator(`table[id='cagentForm:functionalButtonPanel'] a[id='cagentForm:saveButton']`);
        this.cagentType = this.page.locator(`select[id='cagentForm:clientCategory']`);
        this.changeParentButton = this.page.locator(`#cagentForm\\:changeParentButton`);
        this.nameBelowElementCagent = this.page.locator(`#cagentForm\\:parentHelementVal`);
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
        await this.saveButton.click({delay: 800});
    }

    /**
     * Click the 'Edit' button
     */
    public async clickEdit() {
        await this.editButton.click();
    }

    /**
     * Click the 'Change parent' button
     */
    public async clickChangeParent() {
        await this.changeParentButton.click({delay: 1000});
    }

    /**
     * Get the name below the element
     */
    public async getNameBelowElementCagent(): Promise<string> {
        return await this.nameBelowElementCagent.innerText();
    }
}