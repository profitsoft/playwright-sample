import {expect} from "@playwright/test";
import {test as baseTest} from "../fixture.playwright";
import {ContractViewPage} from "../pages/contract/ContractViewPage";
import {ContractListPage} from "../pages/contract/ContractListPage";

// Extend the test with the necessary pages
const test = baseTest.extend<{
    contractListPage: ContractListPage,
    contractViewPage: ContractViewPage
}>({
    contractListPage: async ({page}, use) => {
        await use(new ContractListPage(page));
    },
    contractViewPage: async ({page}, use) => {
        await use(new ContractViewPage(page));
    }
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

    await contractListPage.clickElementInTable(0);
    await contractViewPage.isCurrentPage();
    expect(contractViewPage.getContractNumber()).toBe('АС-0000076');
    await assertFieldUtil.assertFieldsComplies('Дата и место подписания договора:', '21.08.2024');
    await contractViewPage.clickCagentTab();
    expect(contractViewPage.getFullName()).toBe('Донченко Владимир Дмитриевич');
})



