import { PlaywrightTestConfig, devices } from '@playwright/test';
import BrowserFactory from './utils/browserFactory';
import * as dotenv from 'dotenv';

dotenv.config();

const config: PlaywrightTestConfig = {

    use: {
        viewport: { width: 1280, height: 1024 },
        actionTimeout: 10 * 1000,
        navigationTimeout: 15 * 1000, 
        screenshot : "only-on-failure"
    },

    timeout: 30 * 1000,

    expect: {
        timeout: 10 * 1000,
    },

    projects: [
        BrowserFactory.getBrowserObject()
    ],
    workers: 2,
    fullyParallel: true,
    reporter: [
        [
            "allure-playwright",
            {
              detail: true,
              outputFolder: "allure-report",
              suiteTitle: true,
            },
          ]
    ]

}

export default config;