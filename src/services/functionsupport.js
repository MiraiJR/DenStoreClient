function showNavigateItemSP(element) {
  if (!element.classList.contains("fa-caret-active")) {
    element.classList.remove("fa-caret-down");
    element.classList.add("fa-caret-up");
    element.classList.add("fa-caret-active");
    element.parentElement.parentElement.parentElement.querySelector(
      ".navigation__products-item-content"
    ).style.display = "flex";
  } else {
    element.classList.remove("fa-caret-active");
    element.classList.remove("fa-caret-up");
    element.classList.add("fa-caret-down");
    element.parentElement.parentElement.parentElement.querySelector(
      ".navigation__products-item-content"
    ).style.display = "none";
  }
}

module.exports = { showNavigateItemSP };
