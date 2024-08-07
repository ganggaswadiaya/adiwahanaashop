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

  const url = "https://api.whatsapp.com/send?phone=628123605722&text=Hii%20AdiWahana...%0AI'm%20*"+ name +"*%0AMy%20email%20*"+ email +"*%0A%0A*"+ message +"*";

  window.open(url);
}