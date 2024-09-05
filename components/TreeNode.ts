import AbstractHtmlComponent from "../html-components/AbstractHtmlComponent";
import {Locator, Page} from "@playwright/test";

/**
 * A component for working with the tree structure of the system. It can be used in various parts of the system,
 * for example, "Accounting-Contracts," "Reports" (here, a mechanism for selecting multiple departments is also added).
 */
export class TreeNode extends AbstractHtmlComponent {

    private childrenContainerId: Promise<string>;
    private readonly collapsibleElement: Locator;
    private readonly nodeElement: Locator

    constructor(page: Page, opt: {
        collapsibleElement?: Locator,
        nodeElement?: Locator,
        childrenContainerId?: string,
        treeContainer?: Locator,
    }) {
        super(page);

        if (opt.treeContainer !== null) {
            this.collapsibleElement = null;
            this.nodeElement = opt.treeContainer.locator(`a`).first();
            this.childrenContainerId = opt.treeContainer.locator(`div[id$=thetree]`).first().getAttribute('id');
        } else {
            this.nodeElement = opt.nodeElement;
            this.collapsibleElement = opt.collapsibleElement;
            this.childrenContainerId = Promise.resolve(opt.childrenContainerId);
        }

    }

    /**
     * Get the children container by caption
     * @param caption - caption of the children container
     */
    public async getChildrenContainerByCaption(caption: string): Promise<TreeNode> {
        const currentChildrenNode: Locator = this.page.locator(`#${(await this.childrenContainerId).replace(':', '\\:')}`).first();
        let tableWithHref: Locator = currentChildrenNode.locator(`//table[.//a/text() = '${caption}']`);

        let collapsibleElement = tableWithHref.locator(`a[id$=handle]`).first();
        let nodeElement = tableWithHref.locator(`a[id$=nodeLink]`);
        let childrenContainerId = await tableWithHref.locator(`xpath=//following-sibling::div[1]`).getAttribute('id');
        return new TreeNode(this.page, {
            collapsibleElement: collapsibleElement,
            nodeElement: nodeElement,
            childrenContainerId: childrenContainerId,
            treeContainer: null
        });
    }

    /**
     * Expand the node
     */
    public async expandNope() {
        await this.collapsibleElement.click();
    }

    /**
     * Click on the node
     */
    public async clickNode() {
        await this.nodeElement.click();
        await this.nodeElement.waitFor({state: "hidden", timeout: 20000})
    }
}