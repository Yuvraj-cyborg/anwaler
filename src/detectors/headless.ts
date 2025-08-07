import { logInfo } from "../utils/logger";

/**
 * Returns true if the browser appears to be headless or automated.
 * This checks for signs like `navigator.webdriver` and plugins.
 */
export function isHeadlessBrowser(): boolean {
  const isHeadless =
    navigator.webdriver ||
    !navigator.plugins.length ||
    !navigator.languages ||
    /HeadlessChrome/.test(navigator.userAgent);

  logInfo("Headless detection result:", isHeadless);
  return isHeadless;
}

/**
 * If a headless browser is detected, replaces the page body with a denial message.
 */
export function blockHeadlessBots() {
  if (isHeadlessBrowser()) {
    document.body.innerHTML = "<h1>Access Denied</h1>";
    logInfo("Blocked headless bot.");
  }
}
