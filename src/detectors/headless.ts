import { logInfo } from "../utils/logger";

/**
 * Returns true if the browser appears to be headless or automated.
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
 * Blocks access if headless browser is detected.
 */
export function blockHeadlessBots() {
  if (isHeadlessBrowser()) {
    document.body.innerHTML = "<h1>Access Denied</h1>";
    logInfo("Blocked headless bot.");
  }
}
