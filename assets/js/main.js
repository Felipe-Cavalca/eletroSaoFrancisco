import { brandItems, serviceItems } from "./config/site-data.js";
import { setupRevealOnScroll } from "./features/reveal-on-scroll.js";
import { setupScrollProgress } from "./features/scroll-progress.js";
import { setupSmoothScroll } from "./features/smooth-scroll.js";
import { renderServices } from "./sections/atendimento.js";
import { renderBrands } from "./sections/marcas.js";

document.documentElement.classList.add("js-enabled");

renderServices(serviceItems);
renderBrands(brandItems);
setupSmoothScroll();
setupRevealOnScroll();
setupScrollProgress();
