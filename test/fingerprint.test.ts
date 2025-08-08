import { describe, it, expect, beforeEach } from "bun:test";
import { getFingerprint } from "../src/detectors/fingerprint";

describe("Fingerprint Detection", () => {
  beforeEach(() => {
    (globalThis as any).navigator = {
      userAgent: "TestAgent/1.0",
      language: "en-US",
      languages: ["en-US", "fr-FR"],
      plugins: [{ name: "FakePlugin" }]
    };

    (globalThis as any).screen = {
      width: 1920,
      height: 1080
    };
  });

  it("should return a string fingerprint", () => {
    const fp = getFingerprint();
    expect(typeof fp).toBe("string");
  });

  it("should return consistent results for same environment", () => {
    const fp1 = getFingerprint();
    const fp2 = getFingerprint();
    expect(fp1).toBe(fp2);
  });
});
