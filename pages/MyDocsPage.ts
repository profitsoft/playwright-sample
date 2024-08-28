import {Page} from "@playwright/test";
import {AbstractPage} from "./AbstractPage";

export class MyDocsPage extends AbstractPage {

    constructor(page: Page) {
        super(page, 'mydocs');
    }
}