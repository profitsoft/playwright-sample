import {AbstractPage} from "../AbstractPage";
import {Page} from "@playwright/test";

/**
 * Page for the 'Counterparty' module - View
 * The class is used to work with the page of viewing the counterparty
 */
export class CagentViewPage extends AbstractPage {

    constructor(page: Page) {
        super(page, 'cagentView');
    }

}