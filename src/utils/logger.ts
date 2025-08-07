/**
 * Logs only in development mode.
 */
export function logInfo(...args: any[]) {
  if (process.env.NODE_ENV !== "production") {
    console.log("[anti-crawler]", ...args);
  }
}
