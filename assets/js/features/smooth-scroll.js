import { selectAll } from "../utils/dom.js";

function prefersReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export function setupSmoothScroll() {
  const triggers = selectAll("a[href^=\"#\"], [data-scroll-target]");

  triggers.forEach((trigger) => {
    trigger.addEventListener("click", (event) => {
      const selector = trigger.dataset.scrollTarget || trigger.getAttribute("href");

      if (!selector || selector === "#") {
        return;
      }

      const target = document.querySelector(selector);

      if (!target) {
        return;
      }

      event.preventDefault();
      target.scrollIntoView({
        behavior: prefersReducedMotion() ? "auto" : "smooth",
        block: "start"
      });

      if (trigger.classList.contains("skip-link") && target instanceof HTMLElement) {
        target.focus({ preventScroll: true });
      }

      if (trigger.matches("a[href^=\"#\"]") && window.history?.replaceState) {
        window.history.replaceState(null, "", selector);
      }
    });
  });
}
