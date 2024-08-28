import {expect, test} from "@playwright/test";
import {Application} from "../Application";

test.beforeEach('Auth', async ({page}) => {
    const app = new Application(page);
    await app.loginPage.login();
});

/**
 * Договора - Поиск. Ввод значений на фильтр, переход к найденому договору, проверка полей на соответствие введенных в фильтр поиска
 */
test('Find_contract', async ({page}) => {
    const app: Application = new Application(page);

    await app.menuSelectModulePage.contractMenu.menuContractSearch();
    await app.contractSearchFormComponents.contractNumber.fill('АС-0000076');
    await app.contractSearchFormComponents.client.fill('Донченко Владимир Дмитриевич');
    await app.contractSearchFormComponents.dateSignStart.fill('21.08.2024');
    await app.contractSearchFormComponents.findButton.click();
    await app.contractSearchFormComponents.clickFirstElementInTable('td.TABELLEFIRST a');
    await app.contractViewPage.isCurrentPage();
    const contractNumber = await app.contractViewPage.getContractNumber();
    expect(contractNumber).toBe('АС-0000076');
    await app.assertFieldUtil.assertFieldsComplies('Дата и место подписания договора:', '21.08.2024');
    await app.contractViewPage.clickCagentTab();
    const fullName = await app.contractViewPage.getFullName();
    expect(fullName).toBe('Донченко Владимир Дмитриевич');
})



