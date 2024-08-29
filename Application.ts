import { Page } from "@playwright/test";
import { MyDocsPage } from "./pages/MyDocsPage";
import { LoginPage } from "./pages/LoginPage";
import { MenuSelectModulePage } from "./pages/modules/MenuSelectModulePage";
import { CagentCreatePage } from "./pages/CagentCreatePage";
import { CagentSearchFormComponent } from "./pages/components/CagentSearchFormComponent";
import { CagentComponent } from "./pages/components/CagentComponent";
import { CagentEditPage } from "./pages/CagentEditPage";
import { AssertFieldUtil } from "./utils/AssertFieldUtil";
import { CagentViewPage } from "./pages/CagentViewPage";
import { ContractSearchFormComponent } from "./pages/components/ContractSearchFormComponent";
import { ContractViewPage } from "./pages/ContractViewPage";

export class Application {
    public readonly page: Page;
    public readonly menuSelectModulePage: MenuSelectModulePage;
    public readonly cagentComponent: CagentComponent;
    public readonly cagentSearchFormComponent: CagentSearchFormComponent;
    public readonly contractSearchFormComponents: ContractSearchFormComponent;
    public readonly myDocsPage: MyDocsPage;
    public readonly loginPage: LoginPage;
    public readonly cagentCreatePage: CagentCreatePage;
    public readonly cagentViewPage: CagentViewPage;
    public readonly cagentEditPage: CagentEditPage;
    public readonly contractViewPage: ContractViewPage;
    public readonly assertFieldUtil: AssertFieldUtil;

    constructor(page: Page) {
        this.page = page;
        this.menuSelectModulePage = new MenuSelectModulePage(this.page);
        this.cagentComponent = new CagentComponent(this.page);
        this.cagentSearchFormComponent = new CagentSearchFormComponent(this.page);
        this.contractSearchFormComponents = new ContractSearchFormComponent(this.page);
        this.myDocsPage = new MyDocsPage(this.page);
        this.loginPage = new LoginPage(this.page);
        this.cagentCreatePage = new CagentCreatePage(this.page);
        this.cagentEditPage = new CagentEditPage(this.page);
        this.cagentViewPage = new CagentViewPage(this.page);
        this.contractViewPage = new ContractViewPage(this.page);
        this.assertFieldUtil = new AssertFieldUtil(this.page);
    }
}