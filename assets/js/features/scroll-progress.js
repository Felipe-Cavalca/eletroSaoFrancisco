import { selectAll } from "../utils/dom.js";

export function clamp(value, min = 0, max = 1) {
  return Math.min(Math.max(value, min), max);
}

export function calculateScrollProgress(rect, viewportHeight) {
  if (!rect || viewportHeight <= 0) {
    return 0;
  }

  const travelDistance = viewportHeight + rect.height;

  if (travelDistance <= 0) {
    return 0;
  }

  return clamp((viewportHeight - rect.top) / travelDistance);
}

export function calculateMotionValues(progress, depth = 90) {
  const normalizedProgress = clamp(progress);
  const centeredProgress = normalizedProgress - 0.5;

  return {
    progress: normalizedProgress.toFixed(3),
    shift: `${Math.round(centeredProgress * depth)}px`,
    scale: (1 + normalizedProgress * 0.045).toFixed(3)
  };
}

function prefersReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export function setupScrollProgress() {
  const progressNodes = selectAll("[data-scroll-progress]");

  if (!progressNodes.length || prefersReducedMotion()) {
    return;
  }

  let frame = 0;

  const updateNode = (node) => {
    const depth = Number(node.dataset.scrollDepth || 90);
    const values = calculateMotionValues(
      calculateScrollProgress(node.getBoundingClientRect(), window.innerHeight),
      Number.isFinite(depth) ? depth : 90
    );

    node.style.setProperty("--scroll-progress", values.progress);
    node.style.setProperty("--scroll-shift", values.shift);
    node.style.setProperty("--scroll-scale", values.scale);
  };

  const update = () => {
    frame = 0;
    progressNodes.forEach(updateNode);
  };

  const requestUpdate = () => {
    if (frame) {
      return;
    }

    frame = window.requestAnimationFrame(update);
  };

  update();
  window.addEventListener("scroll", requestUpdate, { passive: true });
  window.addEventListener("resize", requestUpdate);
}
