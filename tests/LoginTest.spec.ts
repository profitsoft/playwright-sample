import {test} from "../setup.playwright";


test('Login test', async ({page, loginPage, myDocsPage}) => {
    await page.goto(process.env.STARTUP_URL);
    await loginPage.username.fill('admin');
    await loginPage.password.fill('admin1');
    await loginPage.loginButton.click();

    await myDocsPage.isCurrentPage();
});


