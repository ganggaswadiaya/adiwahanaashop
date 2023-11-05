window.addEventListener('scroll', function() {
    const navbar = document.querySelector('nav');
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)'; // Tambahkan box-shadow
    } else {
        navbar.style.boxShadow = 'none'; // Hapus box-shadow saat kembali ke atas
    }
});

// Efek Scroll
const fadeElements = document.querySelectorAll('.fade-in-element');

function checkFade() {
    fadeElements.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top;
        const elementBottom = element.getBoundingClientRect().bottom;

        if (elementTop < window.innerHeight && elementBottom >= 0) {
            element.classList.add('fade-in-visible');
        } else {
            element.classList.remove('fade-in-visible');
        }
    });
}

// Jalankan `checkFade` saat halaman dimuat dan saat digulir
document.addEventListener('DOMContentLoaded', checkFade);
document.addEventListener('scroll', checkFade);

// Active pada menu navbar
document.addEventListener("DOMContentLoaded", () => {
    const navLinks = document.querySelectorAll("nav ul li a");

    function setActiveLink() {
        const fromTop = window.scrollY + window.innerHeight / 3;

        navLinks.forEach((link) => {
            const section = document.querySelector(link.getAttribute("href"));
            if (
                section.offsetTop <= fromTop &&
                section.offsetTop + section.offsetHeight >= fromTop
            ) {
                link.classList.add("active");
            } else {
                link.classList.remove("active");
            }
        });
    }

    setActiveLink();

    window.addEventListener("scroll", setActiveLink);
});

// Hamberger Menu 
const humberger = document.querySelector('.hamberger');
const navLink = document.querySelector('.nav-links');

humberger.addEventListener('click', () => {
  // Yang kita toggle bukan humberger, tapi navLink
  // Karena navLink yang kita hide dan show
  navLink.classList.toggle('active');
});


// Slider 
let slideIndex = 0;
showSlides();

function showSlides() {
  let slides = document.getElementsByClassName("slide");

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slideIndex++;

  if (slideIndex > slides.length) {
    slideIndex = 1;
  }

  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 2000); // Ganti gambar setiap 2 detik (sesuaikan dengan kebutuhan Anda).
}

