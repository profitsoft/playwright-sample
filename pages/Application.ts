import {Page} from "@playwright/test";
import {MyDocsPage} from "./MyDocsPage";
import {LoginPage} from "./LoginPage";
import {MenuSelectModulePage} from "./modules/MenuSelectModulePage";
import {CagentCreatePage} from "./CagentCreatePage";
import {CagentSearchFormComponent} from "./components/CagentSearchFormComponent";
import {CagentComponent} from "./components/CagentComponent";
import {CagentEditPage} from "./CagentEditPage";

export class Application {
    public readonly page: Page;

    public readonly menuSelectModulePage: MenuSelectModulePage;

    public readonly cagentComponent: CagentComponent;
    public readonly cagentSearchFormComponent: CagentSearchFormComponent;

    public readonly myDocsPage: MyDocsPage;
    public readonly loginPage: LoginPage;
    public readonly cagentCreatePage: CagentCreatePage;
    public readonly cagentEditPage: CagentEditPage;

    constructor(page: Page) {
        this.page = page;
        this.menuSelectModulePage = new MenuSelectModulePage(this.page);
        this.cagentComponent = new CagentComponent(this.page);
        this.cagentSearchFormComponent = new CagentSearchFormComponent(this.page);
        this.myDocsPage = new MyDocsPage(this.page);
        this.loginPage = new LoginPage(this.page);
        this.cagentCreatePage = new CagentCreatePage(this.page);
        this.cagentEditPage = new CagentEditPage(this.page);
    }
}