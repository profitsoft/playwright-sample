import {test as baseTest} from "../fixture.playwright";
import {MyDocsPage} from "../pages/MyDocsPage";
import {LoginPage} from "../pages/LoginPage";

// Extend the test with the necessary pages
const test = baseTest.extend<{
    loginPage: LoginPage,
    myDocsPage: MyDocsPage
}>({
    page: async ({browser}, use) => {
        // this test requires a  manual login
        await use(await browser.newPage());
    },
    loginPage: async ({page}, use) => {
        await use(new LoginPage(page));
    },
    myDocsPage: async ({page}, use) => {
        await use(new MyDocsPage(page));
    }
});


test('Login test', async ({page, loginPage, myDocsPage}) => {
    await page.goto(process.env.STARTUP_URL);
    await loginPage.username.fill('admin');
    await loginPage.password.fill('admin1');
    await loginPage.loginButton.click();

    await myDocsPage.isCurrentPage();
});


