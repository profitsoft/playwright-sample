import {AbstractPage} from "../AbstractPage";
import {Locator, Page} from "@playwright/test";
import {CagentComponent} from "../../html-components/cagent/CagentComponent";

/**
 * Class with elements in the counterparty editing mode
 */
export class CagentEditPage extends AbstractPage {

    public readonly cagentComponent: CagentComponent;

    public readonly saveButton: Locator;
    public readonly cagentType: Locator;

    constructor(page: Page) {
        super(page);
        this.cagentComponent = new CagentComponent(this.page);
        this.saveButton = this.page.locator(`table[id='cagentForm:functionalButtonPanel'] a[id='cagentForm:saveButton']`);
        this.cagentType = this.page.locator(`select[id='cagentForm:clientCategory']`);
    }

    public async selectCagentType(option: string) {
        await this.cagentType.selectOption(option);
    }

    public getSelectedCagentType(): Locator {
        return this.cagentType.locator('option[selected="selected"]');
    }

    public async clickSave() {
        await this.saveButton.click();
    }

}