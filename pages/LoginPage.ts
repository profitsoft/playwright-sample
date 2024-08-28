import {Locator, Page} from "@playwright/test";
import {AbstractPage} from "./AbstractPage";

export class LoginPage extends AbstractPage{
    readonly loginButton: Locator;
    readonly username: Locator;
    readonly password: Locator;

    constructor(page: Page) {
        super(page, 'login');
        this.loginButton = page.locator('//button[contains(@onclick, \'submitLoginForm\')]');
        this.username = page.locator('#username');
        this.password = page.locator('#password');
    }
}