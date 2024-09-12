import AbstractHtmlComponent from "./AbstractHtmlComponent";
import {expect, Locator, Page} from "@playwright/test";

export class Message extends AbstractHtmlComponent {

    readonly wrappedElement: Locator;

    constructor(page: Page, wrappedElement: Locator) {
        super(page);
        this.wrappedElement = wrappedElement;
    }

    /**
     * Asserts that the error messages on page match the expected ones
     */
    public async assertErrors(expectedErrors: string[]): Promise<void> {
        let actualErrors = await this.getMessages('errors');
        actualErrors = await Promise.all(actualErrors.map(async (error) => error.trim()));
        expectedErrors = expectedErrors.sort();

        expect(actualErrors).toEqual(expectedErrors);
    }

    /**
     * Asserts that the warning messages on page match the expected ones
     */
    public async assertWarnings(expectedWarnings: string[]): Promise<void> {
        let actualWarnings = await this.getMessages('warns');
        actualWarnings = await Promise.all(actualWarnings.map(async (warning) => warning.trim()));
        expectedWarnings = expectedWarnings.sort();

        expect(actualWarnings).toEqual(expectedWarnings);
    }

    /**
     * Asserts that the info messages on page match the expected ones
     */
    public async assertInfos(expectedInfos: string[]): Promise<void> {
        let actualInfos = await this.getMessages('infos');
        actualInfos = await Promise.all(actualInfos.map(async (info) => info.trim()));
        expectedInfos = expectedInfos.sort();

        expect(actualInfos).toEqual(expectedInfos);
    }

    private async getMessages(className: string): Promise<string[]> {
        try {
            await this.wrappedElement.locator(`.${className}`).first().waitFor({state: 'visible', timeout: 2000});
            return await this.wrappedElement.locator(`.${className}`).allTextContents();
        } catch (Error) {
            return [];
        }
    }
}