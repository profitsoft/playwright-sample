import {AbstractPage} from "../AbstractPage";
import {Page} from "@playwright/test";

export class CagentViewPage extends AbstractPage {

    constructor(page: Page) {
        super(page, 'cagentView');
    }

}