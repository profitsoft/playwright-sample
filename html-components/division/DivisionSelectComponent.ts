import AbstractHtmlComponent from "../AbstractHtmlComponent";
import SaleNetworkFilterPage from "../../pages/SaleNetworkFilterPage";
import {Page} from "@playwright/test";

/**
 * A component for working with department selection fields. It can be used in various parts of the system,
 * for example, "Accounting-Contracts," "Reports" (here, a mechanism for selecting multiple departments is also added).
 * Methods for searching and selecting a department in a modal window are also available here.
 */
export default class DivisionSelectComponent extends AbstractHtmlComponent {

    public readonly saleNetworkTreeFilter: SaleNetworkFilterPage;

    constructor(page: Page) {
        super(page);
        this.saleNetworkTreeFilter = new SaleNetworkFilterPage(page);
    }

    /**
     * Selects a department under the root (where there is no need to open sub-departments). Example (BBS standard): "AutotestReport"
     * @param divisionFirst - the first-level subordinate department (under the root).
     */
    public async selectDivision(divisionFirst: string) {
         let firstDivision = await (await this.saleNetworkTreeFilter.getTreeNode()).getChildrenContainerByCaption(divisionFirst);
         await firstDivision.clickNode();
    }

}