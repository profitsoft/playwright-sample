import {test, expect} from '@playwright/test';
import {Application} from "../pages/Application";


test('Login test', async ({page}) => {
    const app: Application = new Application(page);

    await page.goto(process.env.STARTUP_URL);
    await app.loginPage.username.fill('admin');
    await app.loginPage.password.fill('admin1');
    await app.loginPage.loginButton.click();

    await app.myDocsPage.isCurrentPage();
});


