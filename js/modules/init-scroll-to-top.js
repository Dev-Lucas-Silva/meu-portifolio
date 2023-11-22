export default function initScrollToTop(button) {
  const scrollup = document.querySelector(button);

  if (scrollup) {
    scrollup.addEventListener("click", () => {
      window.scroll({
        top: 0,
        behavior: "smooth",
      });
    });
    document.addEventListener("scroll", () => {
      if (window.scrollY > 150) {
        scrollup.style.display = "block";
      } else {
        scrollup.style.display = "none";
      }
    });
  }
}