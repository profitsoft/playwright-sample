import {expect} from "@playwright/test";
import {test as baseTest} from "../fixture.playwright"
import {CagentCreatePage} from "../pages/cagent/CagentCreatePage";
import {CagentEditPage} from "../pages/cagent/CagentEditPage";
import {CagentListPage} from "../pages/cagent/CagentListPage";
import {CagentViewPage} from "../pages/cagent/CagentViewPage";

// Extend the test with the necessary pages
const test = baseTest.extend<
    {
        cagentCreatePage: CagentCreatePage,
        cagentEditPage: CagentEditPage,
        cagentListPage: CagentListPage,
        cagentViewPage: CagentViewPage
    }
>({
    cagentCreatePage: async ({page}, use) => {
        await use(new CagentCreatePage(page));
    },
    cagentEditPage: async ({page}, use) => {
        await use(new CagentEditPage(page));
    },
    cagentListPage: async ({page}, use) => {
        await use(new CagentListPage(page));
    },
    cagentViewPage: async ({page}, use) => {
        await use(new CagentViewPage(page));
    }
});


/**
 * Test navigates to the "Counterparties - Search" module, creates, and saves a counterparty
 */
test('Create counterparty', async ({
                                       menuSelectModulePage,
                                       cagentListPage,
                                       cagentCreatePage,
                                       cagentEditPage,
                                       cagentViewPage,
                                       assertFieldUtil
                                   }) => {
    // Navigate to the "Counterparties - Search" module
    await menuSelectModulePage.cagentMenu.menuCagentSearch();

    // Click the "Create" button and select the counterparty type
    await cagentListPage.cagentSearchForm.clickCreateCagentButton();
    await cagentCreatePage.selectCagentType('Клиент');
    await cagentCreatePage.clickNext();

    // Fill in the fields of the counterparty card and save
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

    // Select Counterparty type
    await cagentEditPage.selectCagentType('3- Базовий');
    await expect(cagentEditPage.getSelectedCagentType()).toHaveText('3- Базовий');
    await cagentEditPage.clickSave();

    // Check the data of the created counterparty
    await cagentViewPage.isCurrentPage();
    await assertFieldUtil.assertFieldsCompliesDiv('ФИО:', 'Кропевницкий Евгений Владимирович');
});

/**
 * Written based on the feature: BO-6185F PRODBUG BBS-82626 CASCO: error when selecting the superior department
 * when creating a person authorized to operate a vehicle.
 * The error was that if you first entered data about the counterparty (for example, full name), and then changed
 * the superior department, the department was not selected, and an Exception was thrown in the console.
 */
test('Check responsible person', async ({
                                            menuSelectModulePage,
                                            cagentListPage,
                                            cagentViewPage,
                                            cagentEditPage
                                        }) => {
    // Transition to a counterparty with the "Partner" relationship
    await menuSelectModulePage.cagentMenu.menuCagentSearch();
    await cagentListPage.cagentSearchForm.fillFormAndSearch({name: "Акціонерне товариство `Градобанк`"});
    await cagentListPage.clickElementInTable(1);


    // Navigate to the "Contact Persons" tab, edit the counterparty's card
    await cagentViewPage.cagentTabs.goToContactPersonsTab();
    await cagentViewPage.clickEdit();

    // Create a responsible person
    await cagentViewPage.cagentTabs.contactPersonsTab.clickCreateResponsiblePersonButton();

    // On the counterparty editing page, in the "General" tab, enter the counterparty's full name, then select the superior department
    await cagentEditPage.cagentComponent.fillFields({
        surname: 'Евтушенко',
        name: 'Петр',
        patronymic: 'Иванович',
        inn: '7742894123',
        birthDate: '25.12.1980',
        phoneNumber: '380957526492',
        cagentRelatedPersonAttributes: `1 - Пов'язана особа`,
        cagentTypeDetailed: `20 - Перестрахувальник`
    });

    // Select the superior element
    await cagentEditPage.clickChangeParent();

    // Changing the sales network element
    await cagentEditPage.divisionSelectComponent.selectDivision('Pizza "Mari"');
    expect(await cagentEditPage.getNameBelowElementCagent()).toBe('Pizza "Mari"');

    // Check the data of the created responsible person
    await cagentEditPage.clickSave();
    expect(await cagentViewPage.cagentTabs.contactPersonsTab.getResponsiblePersonName()).toBe('Евтушенко Петр Иванович',);

    // Save the counterparty, check the data of the created responsible person
    await cagentEditPage.clickSave();
    await cagentViewPage.isCurrentPage();
    expect(await cagentViewPage.cagentTabs.contactPersonsTab.getResponsiblePersonName()).toBe('Евтушенко Петр Иванович');
});

/** The test navigates to the "Directories - Contractors - Search" module and adds a new client with an 11-digit INN,
 *  checking the validation. It then adds another client with a 9-digit INN and also checks the validation.
 *  Finally, it adds a client with a 10-digit INN and checks the checksum validation during saving. */

test('Check inn validation', async ({
                                        menuSelectModulePage,
                                        cagentListPage,
                                        cagentCreatePage,
                                        cagentEditPage,
                                    }) => {
    // Navigate to the "Counterparties - Search" module
    await menuSelectModulePage.cagentMenu.menuCagentSearch();

    // Click the "Create" button and select the counterparty type
    await cagentListPage.cagentSearchForm.clickCreateCagentButton();
    await cagentCreatePage.selectCagentType('Клиент');
    await cagentCreatePage.clickNext();

    // Fill 11-digit INN to check validation
    await cagentEditPage.cagentComponent.fillFields({
        surname: 'Кропевницкий',
        name: 'Евгений',
        patronymic: 'Семенович',
        inn: '56428945636',
        birthDate: '29.11.1979',
        phoneNumber: '380577526492',
        cagentRelatedPersonAttributes: `1 - Пов'язана особа`,
        cagentTypeDetailed: `20 - Перестрахувальник`
    });
    await cagentEditPage.clickSave();

    // Get the error message about the INN
    await cagentEditPage.getGlobalMessages().assertErrors([`Введите, пожалуйста, значение поля 'ИНН' для контрагента правильно. Номер должен состоять из 10 цифр.`]);

    // Fill 9-digit INN to check validation
    await cagentEditPage.cagentComponent.fillFields({inn: '428945636'});
    await cagentEditPage.clickSave();

    // Get the error message about the INN
    await cagentEditPage.getGlobalMessages().assertErrors([`Введите, пожалуйста, значение поля 'ИНН' для контрагента правильно. Номер должен состоять из 10 цифр.`]);

    // Enter 10-digit INN and check the checksum validation
    await cagentEditPage.cagentComponent.fillFields({inn: '5642894333'});
    await cagentEditPage.clickSave();

    await cagentEditPage.getGlobalMessages().assertWarnings([`Введенный ИНН не является действительным налоговым номером (проверка контрольной суммы не пройдена).`]);
});

/** The test creates an employee with a non-corporate email and checks the validation. */
test('Create company member email validation', async ({
                                                          menuSelectModulePage,
                                                          cagentListPage,
                                                          cagentCreatePage,
                                                          cagentEditPage,
                                                      }) => {
    // Navigate to the "Counterparties - Search" module
    await menuSelectModulePage.cagentMenu.menuCagentSearch();

    // Click the "Create" button and select the counterparty type
    await cagentListPage.cagentSearchForm.clickCreateCagentButton();
    await cagentCreatePage.selectCagentType('Сотрудник компании');
    await cagentCreatePage.clickNext();

    // Fill 11-digit INN to check validation
    await cagentEditPage.cagentComponent.fillFields({
        surname: 'Кропевницкий',
        name: 'Евгений',
        patronymic: 'Семенович',
        inn: '5642894333',
        birthDate: '29.11.1979',
        phoneNumber: '380577526492',
        cagentRelatedPersonAttributes: `1 - Пов'язана особа`,
        cagentTypeDetailed: `20 - Перестрахувальник`,
        email: 'valed@gmail.com'
    });
    await cagentEditPage.clickSave();

    await cagentEditPage.getGlobalMessages().assertErrors([`Необходимо использовать корпоративный e-mail.`]);
});