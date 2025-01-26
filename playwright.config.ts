import {defineConfig, devices} from '@playwright/test';
import * as dotenv from 'dotenv';

dotenv.config();

export default defineConfig({
    testDir: './tests',
    fullyParallel: false,
    forbidOnly: !!process.env.CI,
    retries: process.env.CI ? 2 : 0,
    workers: process.env.CI ? 1 : undefined,
    reporter: [["allure-playwright"]],
    timeout: 45_000,
    use: {
        trace: 'on',
        video: 'on',
    },

    projects: [
        {
            name: 'chromium',
            use: {...devices['Desktop Chrome'], headless: true},
        },
    ],
});
