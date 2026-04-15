import { select, setHTML } from "../utils/dom.js";

export function renderBrands(items) {
  const container = select("#brand-grid");

  if (!container) {
    return;
  }

  const markup = items
    .map(
      (brand, index) => `
        <li class="brand-pill" data-reveal style="--delay: ${index % 6};">
          <span>${brand}</span>
        </li>
      `
    )
    .join("");

  setHTML(container, markup);
}
