import {expect} from "@playwright/test";
import {test} from "../setup.playwright";


test.beforeEach('Auth', async ({loginPage}) => {
    await loginPage.login();
});

/**
 * Contracts - Search. Enter filter values, navigate to the found contract,
 * and verify that the fields match the entered search filter values
 */
test('Find_contract', async ({
                                 menuSelectModulePage,
                                 contractListPage,
                                 contractViewPage,
                                 assertFieldUtil
                             }) => {
    await menuSelectModulePage.contractMenu.menuContractSearch();

    await contractListPage.contractSearchForm.fillForm(
        {
            contractNumber: 'АС-0000076',
            client: 'Донченко Владимир Дмитриевич',
            dateSignStart: '21.08.2024'
        }
    );
    await contractListPage.contractSearchForm.clickSearch();

    await contractListPage.clickElementInTable(1);
    await contractViewPage.isCurrentPage();
    expect(contractViewPage.getContractNumber()).toBe('АС-0000076');
    await assertFieldUtil.assertFieldsComplies('Дата и место подписания договора:', '21.08.2024');
    await contractViewPage.clickCagentTab();
    expect(contractViewPage.getFullName()).toBe('Донченко Владимир Дмитриевич');
})



