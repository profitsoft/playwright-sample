import {Locator, Page} from "@playwright/test";
import {AbstractPage} from "./AbstractPage";

/**
 * Class with elements of the login page
 */
export class LoginPage extends AbstractPage {
    readonly loginButton: Locator;
    readonly username: Locator;
    readonly password: Locator;

    constructor(page: Page) {
        super(page, 'login');
        this.loginButton = this.page.locator('//button[contains(@onclick, \'submitLoginForm\')]');
        this.username = this.page.locator('#username');
        this.password = this.page.locator('#password');
    }

    /**
     * Method with pre-defined credentials for login
     */
    public async login(username: string = 'admin', password: string = 'admin1'): Promise<void> {
        await this.page.goto(process.env.STARTUP_URL);
        await this.username.fill(username);
        await this.password.fill(password);
        await this.loginButton.click();
    }
}