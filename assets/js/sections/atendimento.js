import { select, setHTML } from "../utils/dom.js";

export function renderServices(items) {
  const container = select("#services-grid");

  if (!container) {
    return;
  }

  const markup = items
    .map(
      (item, index) => `
        <article class="service-card" data-reveal style="--delay: ${index};">
          <div class="service-glyph" aria-hidden="true">${item.glyph}</div>
          <div>
            <h3 class="service-title">${item.title}</h3>
            <p class="service-description">${item.description}</p>
          </div>
        </article>
      `
    )
    .join("");

  setHTML(container, markup);
}
