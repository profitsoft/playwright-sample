import {expect, Page} from "@playwright/test";

/**
 * Базовый класс объектов
 */
export class AbstractPage {
    protected readonly page: Page;
    protected readonly pageString: string;

    constructor(page: Page, pageString: string = '') {
        this.page = page;
        this.pageString = pageString;
    }

    /**
     * Метод, который проверяет, является ли текущая страница той, которая ожидается
     */
    public async isCurrentPage(pageString: string = ''): Promise<void> {
        pageString = pageString || this.pageString;
        let currentPage = '';

        await expect.poll(async () => {
            currentPage =  await this.page.inputValue(`[id='org.springframework.webflow.CurrentPage']`);
            return currentPage;
        }, {
            message: `Page has not been downloaded in configured time or ${currentPage} not equals ${pageString}`,
            timeout: 100000, // Максимальний час очікування (10 секунд)
            intervals: [1000] // Інтервали між перевірками (1 секунда)
        }).toBe(pageString);
    }
}