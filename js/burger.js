//script para la barra activa
const barraNav = document.querySelector(".barra-nav");
const navMenuLista = document.querySelector(".nav-menu-lista")

   barraNav.addEventListener("click", () => {
      navMenuLista.classList.toggle("menu_visible");
   });
