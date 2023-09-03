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

//scroll botao voltar ao topo
const scrollup = document.querySelector(".link-header");

scrollup.addEventListener("click", () => {
  window.scroll({
    top: 0,
    behavior: "smooth",
  });
});
document.addEventListener('scroll', ()=> {
  if(window.scrollY > 500) {
    scrollup.style.display = 'block';
  }
  else {
    scrollup.style.display = 'none';
  }
});


//animacoes do site
if(window.SimpleAnime){
  new SimpleAnime();
}

// copiar email 
if(window.ClipboardJS) {
  new ClipboardJS(".footer-contato .email");
  new ClipboardJS(".footer-contato .tel");
}