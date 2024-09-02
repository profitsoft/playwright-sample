import {expect, test as baseTest} from "@playwright/test";
import {test} from "../setup.playwright";

test.beforeEach('Auth', async ({loginPage}) => {
    await loginPage.login();
});

/**
 * Test navigates to the "Counterparties - Search" module, creates, and saves a counterparty
 */
test('Cagent test', async ({
                               menuSelectModulePage,
                               cagentListPage,
                               cagentCreatePage,
                               cagentEditPage,
                               cagentViewPage,
                               assertFieldUtil
                           }) => {

    await menuSelectModulePage.cagentMenu.menuCagentSearch();

    await cagentListPage.cagentSearchForm.clickCreateCagentButton();
    await cagentCreatePage.selectCagentType('Клиент');
    await cagentCreatePage.clickNext();

    await cagentEditPage.cagentComponent.fillFields({
        surname: 'Кропевницкий',
        name: 'Евгений',
        patronymic: 'Владимирович',
        inn: '5642894563',
        birthDate: '29.11.1979',
        phoneNumber: '380577526492',
        cagentRelatedPersonAttributes: `1 - Пов'язана особа`,
        cagentTypeDetailed: `20 - Перестрахувальник`
    });
    await cagentEditPage.clickSave();

    await cagentEditPage.selectCagentType('3- Базовий');
    await expect(cagentEditPage.getSelectedCagentType()).toHaveText('3- Базовий');
    await cagentEditPage.clickSave();

    await cagentViewPage.isCurrentPage();
    await assertFieldUtil.assertFieldsCompliesDiv('ФИО:', 'Кропевницкий Евгений Владимирович');
});