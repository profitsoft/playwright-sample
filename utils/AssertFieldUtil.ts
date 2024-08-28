import {expect, Page} from "@playwright/test";

export class AssertFieldUtil {
    public readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    /**
     * Метод проверяет присутствие двух полей в одной строке, то есть, то, что на против названия поля verifiedField
     * указано значение valueField (полное совпадение). ValueField может находится в любом месте строки относительно
     * проверяемого поля - вторым, третим и т. д. Проверяется именно наличие значения в строке.
     * @param verifiedField - проверяемое поле;
     * @param valueField - значение (полное совпадение), из тойже строки, что и поле verifiedField.
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