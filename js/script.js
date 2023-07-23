//scroll suave do menu interno
const menuItems = document.querySelectorAll(".header-menu a");

menuItems.forEach((item) => {
  item.addEventListener("click", scrollToIdOnClick);
});

function getScrollTopByHref(element) {
  const id = element.getAttribute("href");
  return document.querySelector(id).offsetTop;
}

function scrollToIdOnClick(event) {
  event.preventDefault();
  const to = getScrollTopByHref(event.target);
  scrollToPosition(to);
}

function scrollToPosition(to) {
  window.scroll({
    top: to,
    behavior: "smooth",
  });
}

//animacoes do site
if(window.SimpleAnime){
  new SimpleAnime();
}

// copiar email 
if(window.ClipboardJS) {
  new ClipboardJS(".footer-contato .email");
  new ClipboardJS(".footer-contato .tel");
}