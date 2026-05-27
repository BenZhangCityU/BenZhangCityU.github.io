document.querySelectorAll(".doi-button").forEach((button) => {
  button.addEventListener("click", () => {
    const doi = button.dataset.doi;

    if (doi) {
      window.open(`https://doi.org/${doi}`, "_blank", "noopener");
    }
  });
});
