document.querySelectorAll(".doi-button").forEach((button) => {
  button.addEventListener("click", () => {
    const doi = button.dataset.doi;

    if (doi) {
      window.open(`https://doi.org/${doi}`, "_blank", "noopener");
    }
  });
});
const siteHeader = document.querySelector(".site-header");

if (siteHeader) {
  const updateStickyHeaderHeight = () => {
    document.documentElement.style.setProperty(
      "--sticky-header-height",
      `${siteHeader.offsetHeight}px`
    );
  };

  updateStickyHeaderHeight();

  if ("ResizeObserver" in window) {
    new ResizeObserver(updateStickyHeaderHeight).observe(siteHeader);
  } else {
    window.addEventListener("resize", updateStickyHeaderHeight);
  }

  window.addEventListener("load", () => {
    updateStickyHeaderHeight();

    if (window.location.hash) {
      const target = document.querySelector(window.location.hash);
      target?.scrollIntoView();
    }
  });
}