/**
 * Call this function early to start listening for user activity.
 * Returns a Promise that resolves to true if human interaction detected within timeout,
 * otherwise false.
 * 
 * @param timeoutMs - How long to wait for interaction before flagging (default 5000 ms)
 */
export function detectHumanBehavior(timeoutMs = 5000): Promise<boolean> {
  let humanInteracted = false;

  return new Promise((resolve) => {
    function onInteraction() {
      humanInteracted = true;
      cleanup();
      resolve(true);
    }

    function cleanup() {
      window.removeEventListener("mousemove", onInteraction);
      window.removeEventListener("scroll", onInteraction);
      window.removeEventListener("keydown", onInteraction);
      window.removeEventListener("touchstart", onInteraction);
    }

    // If interaction happens, resolve true
    window.addEventListener("mousemove", onInteraction);
    window.addEventListener("scroll", onInteraction);
    window.addEventListener("keydown", onInteraction);
    window.addEventListener("touchstart", onInteraction);

    // Timeout: no interaction → resolve false
    setTimeout(() => {
      cleanup();
      if (!humanInteracted) resolve(false);
    }, timeoutMs);
  });
}
