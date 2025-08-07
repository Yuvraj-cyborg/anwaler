let honeytrapTriggered = false;

/**
 * Injects an invisible honeytrap element into the page.
 * Returns a function that returns true if the trap was triggered.
 */
export function setupHoneytrap(): () => boolean {
  const trap = document.createElement("a");
  trap.href = "#";
  trap.style.position = "absolute";
  trap.style.left = "-9999px";
  trap.style.width = "1px";
  trap.style.height = "1px";
  trap.style.opacity = "0";
  trap.setAttribute("aria-hidden", "true");
  trap.tabIndex = -1;
  trap.id = "anti-crawler-honeytrap";

  function onTrapActivated() {
    honeytrapTriggered = true;
  }

  trap.addEventListener("click", onTrapActivated);
  trap.addEventListener("focus", onTrapActivated);

  document.body.appendChild(trap);

  return () => honeytrapTriggered;
}
