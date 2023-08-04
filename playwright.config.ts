import { PlaywrightTestConfig, devices } from '@playwright/test';
import BrowserFactory from './utils/browserFactory';
import * as dotenv from 'dotenv';

dotenv.config();

const config: PlaywrightTestConfig = {

    use: {
        viewport: { width: 1280, height: 1024 },
        actionTimeout: 10 * 1000,
        navigationTimeout: 15 * 1000
    },

    timeout: 30 * 1000,

    expect: {
        timeout: 10 * 1000,
    },

    projects: [
        BrowserFactory.getBrowserObject()
    ],
    workers: 1,
    fullyParallel: true,
    reporter: 'html'

}

export default config;