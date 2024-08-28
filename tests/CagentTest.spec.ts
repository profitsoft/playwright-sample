import {test} from "@playwright/test";
import {Application} from "../pages/Application";

test.beforeEach('Auth', async ({page}) => {
    const app = new Application(page);
    await app.loginPage.login();
});

test('Cagent test', async ({page}) => {
    const app: Application = new Application(page);

    await app.menuSelectModulePage.cagentMenu.menuCagentSearch();

    await app.cagentSearchFormComponent.createCagentButton.click();
    await app.cagentCreatePage.cagentType.selectOption('Клиент');
    await app.cagentCreatePage.next.click();

    await app.cagentComponent.name.fill('Евгений');
    await app.cagentComponent.surname.fill('Кропевницкий');
    await app.cagentComponent.patronymic.fill('Владимирович');
    await app.cagentComponent.birthDate.fill('29.11.1979')
    await app.cagentComponent.inn.fill('5642894563');
    await app.cagentComponent.phoneNumber.fill('380577526492')
    await app.cagentEditPage.saveButton.click();
});