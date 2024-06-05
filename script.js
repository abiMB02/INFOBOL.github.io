let currentIndex = 0;

document.querySelector('.prev-button').addEventListener('click', () => {
   navigate(-1);
});

document.querySelector('.next-button').addEventListener('click', () => {
   navigate(1);
});

function navigate(direction) {
   const galleryContainer = document.querySelector('.gallery-container');
   const totalImages = document.querySelectorAll('.gallery-item').length;

   currentIndex = (currentIndex + direction + totalImages) % totalImages;
   const offset = -currentIndex * 100;

   galleryContainer.style.transform = `translateX(${offset}%)`;
}

let autoplayInterval = null;

function startAutoplay(interval) {
   stopAutoplay(); // Detiene cualquier autoplay anterior para evitar múltiples intervalos.
   autoplayInterval = setInterval(() => {
      navigate(1); // Navega a la siguiente imagen cada intervalo de tiempo.
   }, interval);
}

function stopAutoplay() {
   clearInterval(autoplayInterval);
}

// Iniciar autoplay con un intervalo de 3 segundos.
startAutoplay(3000);

// Opcional: Detener autoplay cuando el usuario interactúa con los botones de navegación.
document.querySelectorAll('.nav-button').forEach(button => {
   button.addEventListener('click', stopAutoplay);
});

//script para la barra activa

function initialize() {
   console.log("El script común se está ejecutando.");
   
   // Ejemplo de funcionalidad: cambiar el texto de elementos si existen
   const title = document.getElementById('title');
   const paragraph = document.getElementById('paragraph');

   if (title) {
       title.innerText = "¡Texto cambiado por JavaScript en todas las páginas!";
   }

   if (paragraph) {
       paragraph.innerText = "Este párrafo también ha sido cambiado en todas las páginas.";
   }

   // Nueva funcionalidad para el menú de navegación
   const barraNav = document.querySelector(".barra-nav");
   const navMenuLista = document.querySelector(".nav-menu-lista");

   if (barraNav && navMenuLista) {
       barraNav.addEventListener("click", () => {
           navMenuLista.classList.toggle("menu_visible");
       });
   }
}

if (document.readyState === 'loading') {
   document.addEventListener('DOMContentLoaded', initialize);
} else {
   initialize();
}

