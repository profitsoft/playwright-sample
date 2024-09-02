import {test as baseTest} from "@playwright/test";
import {MenuSelectModulePage} from "./pages/MenuSelectModulePage";
import {CagentCreatePage} from "./pages/cagent/CagentCreatePage";
import {CagentEditPage} from "./pages/cagent/CagentEditPage";
import {CagentListPage} from "./pages/cagent/CagentListPage";
import {CagentViewPage} from "./pages/cagent/CagentViewPage";
import {LoginPage} from "./pages/LoginPage";
import {AssertFieldUtil} from "./components/AssertFieldUtil";
import {ContractListPage} from "./pages/contract/ContractListPage";
import {ContractViewPage} from "./pages/contract/ContractViewPage";
import {MyDocsPage} from "./pages/MyDocsPage";

const test = baseTest.extend<
    {
        loginPage: LoginPage,
        assertFieldUtil: AssertFieldUtil
        menuSelectModulePage: MenuSelectModulePage,
        cagentCreatePage: CagentCreatePage,
        cagentEditPage: CagentEditPage,
        cagentListPage: CagentListPage,
        cagentViewPage: CagentViewPage,
        contractListPage: ContractListPage,
        contractViewPage: ContractViewPage,
        myDocsPage: MyDocsPage
    }
>({
    loginPage: async ({page}, use) => {
        await use(new LoginPage(page));
    },
    assertFieldUtil: async ({page}, use) => {
        await use(new AssertFieldUtil(page));
    },
    menuSelectModulePage: async ({page}, use) => {
        await use(new MenuSelectModulePage(page));
    },
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
    },
    contractListPage: async ({page}, use) => {
        await use(new ContractListPage(page));
    },
    contractViewPage: async ({page}, use) => {
        await use(new ContractViewPage(page));
    },
    myDocsPage: async ({page}, use) => {
        await use(new MyDocsPage(page));
    }
});

export {test};