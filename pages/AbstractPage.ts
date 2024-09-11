import {expect, Locator, Page} from "@playwright/test";
import {Message} from "../components/Message";

/**
 * Base class of objects
 */
export class AbstractPage {

    protected readonly page: Page;
    protected readonly pageString: string;

    // ERRORS
    protected readonly globalMessages: Message;

    constructor(page: Page, pageString: string = '') {
        this.page = page;
        this.pageString = pageString;
        this.globalMessages = new Message(page, page.locator("[id$='globalErrorMessages']"));
    }

    /**
     * Method that checks whether the current page is the expected one
     */
    public async isCurrentPage(pageString: string = ''): Promise<void> {
        pageString = pageString || this.pageString;
        let currentPage = '';

        await expect.poll(async () => {
            currentPage =  await this.page.inputValue(`[id='org.springframework.webflow.CurrentPage']`);
            return currentPage;
        }, {
            message: `Page has not been downloaded in configured time or ${currentPage} not equals ${pageString}`,
            timeout: 20000, // Maximum wait time (20 seconds)
            intervals: [500] // Intervals between checks (0.5 second)
        }).toBe(pageString);
    }

    /**
     * Get global messages on the page
     */
    public getGlobalMessages(): Message {
        return this.globalMessages;
    }
}