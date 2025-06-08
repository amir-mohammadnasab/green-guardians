var heroSwiper = new Swiper(".heroSwiper", {
    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

// Articles Slider
var articlesSwiper = new Swiper(".articlesSwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true 
    },
    navigation: {
        nextEl: ".articles-swiper-button-next",
        prevEl: ".articles-swiper-button-prev",
    },
    breakpoints: {
        640: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        },
    },
});

// Scroll animations
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.main-header');
    if (window.scrollY > 100) {
        navbar.style.boxShadow = '0 5px 20px rgba(0,0,0,0.1)';
    } else {
        navbar.style.boxShadow = '0 2px 5px rgba(0,0,0,0.1)';
    }
});


// Modal
document.querySelectorAll('.read-more').forEach(function(btn) {
    btn.addEventListener('click', function(e) {
      e.preventDefault();
      document.getElementById('articleModalLabel').textContent = btn.getAttribute('data-title');
      document.getElementById('articleModalImg').src = btn.getAttribute('data-img');
      document.getElementById('articleModalContent').textContent = btn.getAttribute('data-content');
      var modal = new bootstrap.Modal(document.getElementById('articleModal'));
      modal.show();
    });
  });