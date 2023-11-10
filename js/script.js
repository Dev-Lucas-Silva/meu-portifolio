function initScrollSuaveMenu() {
  const menuItems = document.querySelectorAll(".header-menu a");

  if (menuItems) {
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
  }
}
initScrollSuaveMenu();

function initScrollButtonTop() {
  const scrollup = document.querySelector(".link-header");

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
initScrollButtonTop();

function initCoverHeaderScroll() {
  const header = document.querySelector(".header");
  const logo = document.querySelector(".logo-content");
  const logoImg = document.querySelector(".logo-img");
  const headerMenu = document.querySelector(".header-menu");

  if (header) {
    document.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        header.classList.add("ativo");
      } else {
        header.classList.remove("ativo");
      }
    });
  }
  if (logo && logoImg && headerMenu) {
    document.addEventListener("scroll", () => {
      if (window.scrollY > 100 && window.innerWidth < 700) {
        logo.style.display = "none";
        logoImg.style.display = "block";
        headerMenu.classList.add("ativo");
      } else {
        logo.style.display = "flex";
        logoImg.style.display = "none";
        headerMenu.classList.remove("ativo");
      }
    });
  }
}
initCoverHeaderScroll();

//animacoes do site
if (window.SimpleAnime) {
  new SimpleAnime();
}

// copiar email
if (window.ClipboardJS) {
  new ClipboardJS(".footer-contato .email");
  new ClipboardJS(".footer-contato .tel");
}
