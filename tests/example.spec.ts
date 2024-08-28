import {test, expect} from '@playwright/test';
import {LoginPage} from "../pages/LoginPage";
import {MyDocsPage} from "../pages/MyDocsPage";

const host = 'http://localhost:8081/bo';

test('Login test', async ({page}) => {
    const loginPage = new LoginPage(page);
    const myDocsPage = new MyDocsPage(page);

    await page.goto(host);
    await loginPage.username.fill('admin');
    await loginPage.password.fill('admin1');
    await loginPage.loginButton.click();

    await myDocsPage.isCurrentPage();
});


