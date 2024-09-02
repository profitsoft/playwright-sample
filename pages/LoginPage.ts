import {Locator, Page} from "@playwright/test";
import {AbstractPage} from "./AbstractPage";

const {STARTUP_URL} = process.env;

/**
 * Class with elements of the login page
 */
export class LoginPage extends AbstractPage {

    // Button 'Login'
    readonly loginButton: Locator;

    // Field 'Username'
    readonly username: Locator;

    // Field 'Password'
    readonly password: Locator;

    constructor(page: Page) {
        super(page, 'login');
        this.loginButton = this.page.locator('//button[contains(@onclick, \'submitLoginForm\')]');
        this.username = this.page.locator('#username');
        this.password = this.page.locator('#password');
    }

    /**
     * Method to log in to the system
     * @param username - username
     * @param password - password
     */
    public async login(username: string = 'admin', password: string = 'admin1'): Promise<void> {
        await this.page.goto(STARTUP_URL);
        await this.username.fill(username);
        await this.password.fill(password);
        await this.loginButton.click();
    }
}