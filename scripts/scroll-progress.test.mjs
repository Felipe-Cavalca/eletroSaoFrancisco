import assert from "node:assert/strict";
import test from "node:test";

import {
  calculateMotionValues,
  calculateScrollProgress,
  clamp
} from "../assets/js/features/scroll-progress.js";

test("clamp keeps values inside the configured range", () => {
  assert.equal(clamp(-0.5), 0);
  assert.equal(clamp(0.45), 0.45);
  assert.equal(clamp(1.5), 1);
  assert.equal(clamp(8, 2, 6), 6);
});

test("calculateScrollProgress returns stable viewport progress", () => {
  assert.equal(calculateScrollProgress({ top: 1000, height: 1000 }, 1000), 0);
  assert.equal(calculateScrollProgress({ top: 0, height: 1000 }, 1000), 0.5);
  assert.equal(calculateScrollProgress({ top: -1000, height: 1000 }, 1000), 1);
});

test("calculateMotionValues converts progress to css custom property values", () => {
  assert.deepEqual(calculateMotionValues(0, 100), {
    progress: "0.000",
    shift: "-50px",
    scale: "1.000"
  });

  assert.deepEqual(calculateMotionValues(1, 100), {
    progress: "1.000",
    shift: "50px",
    scale: "1.045"
  });
});
