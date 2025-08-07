import { describe, it, expect, beforeAll, afterAll } from "bun:test";
import { isHeadlessBrowser } from "../src/detectors/headless";

describe("Headless detection", () => {
  const originalNavigator = globalThis.navigator;

  beforeAll(() => {
    globalThis.navigator = {
      userAgent: "Mozilla/5.0",
      languages: ["en-US"],
      plugins: [{}],
    } as any;
  });

  afterAll(() => {
    globalThis.navigator = originalNavigator;
  });

  it("should return false in normal mock environment", () => {
    const result = isHeadlessBrowser();
    expect(result).toBe(false);
  });

  it("should return true if navigator.webdriver is true", () => {
    globalThis.navigator = {
      ...globalThis.navigator,
      webdriver: true,
    } as any;

    const result = isHeadlessBrowser();
    expect(result).toBe(true);
  });
});
