export default function initCoverHeaderScroll(headerLink) {
  const header = document.querySelector(headerLink);
  if (header) {
    document.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        header.classList.add("ativo");
      } else {
        header.classList.remove("ativo");
      }
    });
  }
}