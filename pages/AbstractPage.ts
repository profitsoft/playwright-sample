import {Page} from "@playwright/test";

export class AbstractPage {
    protected readonly page: Page;
    protected readonly pageString: string;

    constructor(page: Page, pageString: string = '') {
        this.page = page;
        this.pageString = pageString;
    }

    public async isCurrentPage(pageString: string = ''): Promise<void> {
        const currentPage: string = await this.page.inputValue(`[id='org.springframework.webflow.CurrentPage']`);

        pageString = pageString || this.pageString;

        if (currentPage !== pageString) {
            throw new Error(`Page has not been downloaded in configured time or ${currentPage} not equals ${pageString}`);
        }
    }
}