import initCoverHeaderScroll from "./modules/init-cover-header-scroll.js";
import initScrollSuaveMenu from "./modules/init-scroll-suave-menu.js";
import initScrolltoTop from "./modules/init-scroll-to-top.js";
import SimpleAnime from "./modules/simple-anime.js";

initCoverHeaderScroll(".header");
initScrollSuaveMenu(".header-menu a");
initScrolltoTop(".link-header");

//animacoes do site
if (window.SimpleAnime) {
  new SimpleAnime();
}

// copiar email
if (window.ClipboardJS) {
  new ClipboardJS(".footer-contato .email");
  new ClipboardJS(".footer-contato .tel");
}
