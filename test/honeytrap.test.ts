import { describe, it, expect, beforeEach } from "bun:test";
import { setupHoneytrap } from "../src/detectors/honeytrap";

describe("Honeytrap detection", () => {
  let checkHoneytrap: () => boolean;
  let trapElement: any;
  let listeners: Record<string, ((...args: any[]) => void)[]>;

  beforeEach(() => {
    listeners = {};
    trapElement = {
      style: {},
      setAttribute: () => {},
      addEventListener: (event: string, cb: any) => {
        listeners[event] = listeners[event] || [];
        listeners[event].push(cb);
      },
      id: "",
      href: "",
      tabIndex: 0
    };

    (globalThis as any).document = {
      createElement: () => trapElement,
      body: { appendChild: () => {}, innerHTML: "" }
    };

    checkHoneytrap = setupHoneytrap();
  });

  it("should not be triggered initially", () => {
    expect(checkHoneytrap()).toBe(false);
  });

  it("should trigger when clicked", () => {
    listeners["click"]?.forEach(cb => cb());
    expect(checkHoneytrap()).toBe(true);
  });

  it("should trigger when focused", () => {
    listeners["focus"]?.forEach(cb => cb());
    expect(checkHoneytrap()).toBe(true);
  });
});
