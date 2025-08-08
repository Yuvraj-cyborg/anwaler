import { describe, it, expect, beforeEach, afterEach } from "bun:test";
import { detectHumanBehavior } from "../src/detectors/behavioral";

describe("Behavioral Detection", () => {
  let listeners: Record<string, Function[]>;

  beforeEach(() => {
    listeners = {};

    globalThis.window = {
      addEventListener: (event: string, cb: Function) => {
        listeners[event] = listeners[event] || [];
        listeners[event].push(cb);
      },
      removeEventListener: (event: string, cb: Function) => {
        if (!listeners[event]) return;
        listeners[event] = listeners[event].filter((fn) => fn !== cb);
      },
      dispatchEvent: (event: Event) => {
        const eventName = event.type;
        if (!listeners[eventName]) return;
        listeners[eventName].forEach((cb) => cb(event));
      },
      setTimeout: globalThis.setTimeout.bind(globalThis),
      clearTimeout: globalThis.clearTimeout.bind(globalThis),
    } as any;
  });

  afterEach(() => {
    delete (globalThis as any)?.window;
  });

  it("should resolve true when user interaction happens before timeout", async () => {
    // Trigger a mousemove event after 50ms
    setTimeout(() => {
      window.dispatchEvent(new Event("mousemove"));
    }, 50);

    const result = await detectHumanBehavior(500);
    expect(result).toBe(true);
  });

  it("should resolve false when no interaction happens within timeout", async () => {
    const result = await detectHumanBehavior(100);
    expect(result).toBe(false);
  });
});
