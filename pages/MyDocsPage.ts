import {Page} from "@playwright/test";
import {AbstractPage} from "./AbstractPage";

/**
 * Page for the 'My Documents' module
 */
export class MyDocsPage extends AbstractPage {

    constructor(page: Page) {
        super(page, 'mydocs');
    }
}