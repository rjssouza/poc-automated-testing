
import { Before, BeforeAll, AfterAll, After, setDefaultTimeout } from '@cucumber/cucumber';
import { chromium } from 'playwright';
import validateScenarioResult from './test/acceptance/helpers/bug-reporter'

setDefaultTimeout(90000)

// launch the browser
BeforeAll(async function () {
    global.browser = await chromium.launch({
        headless: true, //to browser silent true
        slowMo: 500, //timing mais proximo do usuário
    });
});

// close the browser
AfterAll(async function () {
    await global.browser.close();
});

// Create a new browser context and page per scenario
Before(async function () {
    global.context = await global.browser.newContext();
    global.page = await global.context.newPage();
});

// Cleanup after each scenario
After(async function (scenario) {
    await validateScenarioResult(scenario);
    await global.page.close();
    await global.context.close();
});