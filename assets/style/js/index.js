// Hamberger Menu 
const humberger = document.querySelector('.hamberger');
const navLink = document.querySelector('.nav-links');

humberger.addEventListener('click', () => {
  navLink.classList.toggle('active');
});

// message
function sendMessage() {
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  const url = "https://api.whatsapp.com/send?phone=628123605722&text=Hai%20" + name + ",%0A%0ATerima%20kasih%20telah%20menghubungi%20kami!%0ASaya%20Adiwahana%2C%20dan%20saya%20ingin%20mengonfirmasi%20bahwa%20kami%20telah%20menerima%20pesan%20Anda.%0A%0AEmail%20Anda%3A%20" + email + "%0A%0APesan%20Anda%3A%20" + message + "%0A%0AKami%20akan%20segera%20membalas%20pesan%20Anda%20dan%20memberikan%20informasi%20yang%20Anda%20butuhkan.%0A%0ATerima%20kasih%20telah%20menghubungi%20kami%2C%20dan%20kami%20akan%20segera%20menghubungi%20Anda%20kembali!";

  window.open(url);
}