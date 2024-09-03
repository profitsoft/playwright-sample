import {Page} from "@playwright/test";

export default class AbstractHtmlComponent {

    protected readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

}