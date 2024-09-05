import {AbstractPage} from "./AbstractPage";
import {Locator, Page} from "@playwright/test";
import {TreeNode} from "../components/TreeNode";

export default class SaleNetworkFilterPage extends AbstractPage {

    // Tree panel in the modal window
    public readonly saleNetWorkModalTreePanel: Locator;

    constructor(page: Page) {
        super(page);
        this.saleNetWorkModalTreePanel = this.page.locator(`div.rich-modalpanel:not([style*=display]) table[id*=modalTreePanel]`);
    }

    /**
     * Get the tree node from the modal window
     */
    public async getTreeNode(): Promise<TreeNode> {
        await this.saleNetWorkModalTreePanel.waitFor({state: 'visible', timeout: 25000});
        return new TreeNode(this.page, {treeContainer: this.saleNetWorkModalTreePanel});
    }
}