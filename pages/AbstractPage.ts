import {expect, Page} from "@playwright/test";

/**
 * Base class of objects
 */
export class AbstractPage {
    protected readonly page: Page;
    protected readonly pageString: string;

    constructor(page: Page, pageString: string = '') {
        this.page = page;
        this.pageString = pageString;
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
            timeout: 100000, // Maximum wait time (10 seconds)
            intervals: [1000] // Intervals between checks (1 second)
        }).toBe(pageString);
    }
}