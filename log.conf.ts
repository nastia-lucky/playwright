import * as log4js from "log4js";
log4js.configure({
    appenders: { onlinerTests: { type: "file", filename: "onlinerTests.log" } },
    categories: { default: { appenders: ["onlinerTests"], level: "error" } },
});

const logger = log4js.getLogger();
logger.level = "debug";

export function inputMessageLog(locator: string, text: string) {
    logger.debug(`I input ${text} to element located ${locator}`)
}

export function isEnabledMessageLog(locator: string) {
    logger.debug(`I check element located ${locator} is Enabled`);

}

export function clickMessageLog(locator: string) {
    logger.debug(`I click element located ${locator}`);

}

export function isElementDisappearsLog(locator: string) {
    logger.debug(`I check element located ${locator} disappears`);

}

export {
    logger
}