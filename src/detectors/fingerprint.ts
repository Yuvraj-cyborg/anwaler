/**
 * Generate a canvas fingerprint hash.
 * Returns a string hash or empty string on error.
 */
function getCanvasFingerprint(): string {
  try {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    if (!ctx) return "";

    // Draw some shapes/text to canvas
    ctx.textBaseline = "top";
    ctx.font = "14px 'Arial'";
    ctx.textBaseline = "alphabetic";
    ctx.fillStyle = "#f60";
    ctx.fillRect(125, 1, 62, 20);
    ctx.fillStyle = "#069";
    ctx.fillText("anwaler", 2, 15);
    ctx.fillStyle = "rgba(102, 204, 0, 0.7)";
    ctx.fillText("anwaler", 4, 17);

    const dataURL = canvas.toDataURL();

    // Simple hash fn — DJB2
    let hash = 5381;
    for (let i = 0; i < dataURL.length; i++) {
      hash = (hash * 33) ^ dataURL.charCodeAt(i);
    }

    return (hash >>> 0).toString(16);
  } catch {
    return "";
  }
}

/**
 * Returns a fingerprint string combining various browser attributes.
 */
export function getFingerprint(): string {
  if (typeof window === "undefined" || typeof navigator === "undefined") {
    return "no-window";
  }

  const components = [
    navigator.userAgent,
    navigator.language,
    JSON.stringify(navigator.languages),
    screen.width + "x" + screen.height,
    navigator.hardwareConcurrency?.toString() || "",
    (navigator as any).deviceMemory?.toString() || "",
    getCanvasFingerprint(),
  ];

  return components.join("||");
}
