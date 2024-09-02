import {expect, Page} from "@playwright/test";

export class AssertFieldUtil {
    public readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    /**
     * Method checks the presence of two fields in the same row, i.e., verifies that the value next to the field named `verifiedField`
     * matches exactly the value specified in `valueField`. `ValueField` can be located anywhere in the row relative to the
     * `verifiedField` — as the second, third, etc. The method checks for the presence of the value in the row.
     * @param verifiedField - the field to be checked;
     * @param valueField - the value (exact match) expected in the same row as the `verifiedField`.
     */

    public async assertFieldsComplies(verifiedField: string, valueField: string) {
        const xPathes: string[] = [
            `//*[contains(text(), '${verifiedField}')]/ancestor-or-self::td[1]/parent::tr/child::td`,
            `//*[contains(text(), '${verifiedField}')]/ancestor-or-self::div[contains(@class, 'form-panel-row')]/child::div[contains(@class, 'form-panel-cell')]`
        ];
        if (!await this.hasTextValueByXPathes(xPathes, valueField)) {
            throw new Error(`Couldn't find text pair <'${verifiedField}', '${valueField}'>`);
        }
    }

    private async hasTextValueByXPathes(xPathes: string[], valueField: string): Promise<boolean> {
        for (const xPath of xPathes) {
            const elements = await this.page.locator(xPath).elementHandles();
            for (const elem of elements) {
                const text = await elem.textContent();
                console.log(text)
                if (text === valueField) {
                    return true;
                }
            }
        }
        return false;
    }

    public async assertFieldsCompliesDiv(verifiedField: string, valueField: string, index: number = 1): Promise<void> {
        const xPath = `//*[contains(text(), '${verifiedField}')]/ancestor-or-self::div[1]/parent::div/child::div`;
        await this.assertFieldStrictCompliance(xPath, verifiedField, valueField, index);
    }

    private async assertFieldStrictCompliance(xPath: string, verifiedField: string, valueField: string, index: number): Promise<void> {
        const elements = await this.page.$$(xPath);

        if (elements.length < 2) {
            throw new Error(`Selector: //*[contains(text(), '${verifiedField}')] - not found`);
        }

        const text = await elements[index].innerText();
        expect(text).toBe(valueField);
    }
}