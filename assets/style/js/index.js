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
        const fromTop = window.scrollY + window.innerHeight / 2;

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
