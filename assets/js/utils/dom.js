export function select(selector, parent = document) {
  return parent.querySelector(selector);
}

export function selectAll(selector, parent = document) {
  return [...parent.querySelectorAll(selector)];
}

export function setHTML(element, markup) {
  if (!element) {
    return null;
  }

  element.innerHTML = markup;
  return element;
}
