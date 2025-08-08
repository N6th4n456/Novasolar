let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove('active');
    if (i === index) {
      slide.classList.add('active');
    }
  });
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

function prevSlide() {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  showSlide(currentSlide);
}

// Cambio automático cada 5 segundos
setInterval(nextSlide, 5000);




  function abrirLightbox(src) {
    document.getElementById('lightbox').style.display = 'flex';
    document.getElementById('lightbox-img').src = src;
  }

  function cerrarLightbox() {
    document.getElementById('lightbox').style.display = 'none';
  }

        function crearLogoDrop() {
          const logo = document.createElement("div");
          logo.classList.add("logo-drop");
          logo.style.left = Math.random() * window.innerWidth + "px";
          logo.style.animationDuration = (3 + Math.random() * 3) + "s"; // velocidad variable
          document.getElementById("lluvia-logo").appendChild(logo);
      
          // Eliminar logo después de animación
          setTimeout(() => logo.remove(), 6000);
        }
      
        setInterval(crearLogoDrop, 300); // caen cada 300ms
