// Hamberger Menu 
const humberger = document.querySelector('.hamberger');
const navLink = document.querySelector('.nav-links');

humberger.addEventListener('click', () => {
  navLink.classList.toggle('active');
});