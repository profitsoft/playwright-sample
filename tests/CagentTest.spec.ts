import {expect, test} from "@playwright/test";
import {Application} from "../Application";

test.beforeEach('Auth', async ({page}) => {
    const app = new Application(page);
    await app.loginPage.login();
});

/**
 * Test navigates to the "Counterparties - Search" module, creates, and saves a counterparty
 */
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
    await app.cagentComponent.phoneNumber.fill('380577526492');
    await app.cagentComponent.cagentrelatedPersonAttributes.selectOption(`1 - Пов'язана особа`);
    await app.cagentComponent.cagentTypeDetailed.selectOption(`20 - Перестрахувальник`);
    await app.cagentEditPage.saveButton.click();

    await app.cagentEditPage.cagentType.selectOption('3- Базовий');
    await expect(app.cagentEditPage.cagentType.locator('option[selected="selected"]')).toHaveText('3- Базовий');
    await app.cagentEditPage.saveButton.click();

    await app.cagentViewPage.isCurrentPage();
    await app.assertFieldUtil.assertFieldsCompliesDiv('ФИО:', 'Кропевницкий Евгений Владимирович');
});