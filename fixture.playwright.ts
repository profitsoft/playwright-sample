import {test as baseTest} from "@playwright/test";
import {MenuSelectModulePage} from "./pages/MenuSelectModulePage";
import {LoginPage} from "./pages/LoginPage";
import {AssertFieldUtil} from "./components/AssertFieldUtil";

/**
 * Basic playwright fixture with login
 */
const test = baseTest.extend<
    {
        assertFieldUtil: AssertFieldUtil
        menuSelectModulePage: MenuSelectModulePage
    }
>({
    page: async ({page}, use) => {
        let loginPage = new LoginPage(page);
        await loginPage.login();
        await use(page);
    },
    assertFieldUtil: async ({page}, use) => {
        await use(new AssertFieldUtil(page));
    },
    menuSelectModulePage: async ({page}, use) => {
        await use(new MenuSelectModulePage(page));
    }
});

export {test};