import {Page} from "@playwright/test";

export class AbstractPage {
    protected readonly page: Page;
    protected readonly pageString: string;

    constructor(page: Page, pageString: string) {
        this.page = page;
        this.pageString = pageString;
    }

    public async isCurrentPage() {
        const currentPage: string = await this.page.inputValue(`[id='org.springframework.webflow.CurrentPage']`);

        if (currentPage !== this.pageString) {
            throw new Error(`Page has not been downloaded in configured time or ${currentPage} not equals ${this.pageString}`);
        }
    }
}