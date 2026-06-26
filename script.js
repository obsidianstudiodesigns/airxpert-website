document.getElementById('year').textContent = new Date().getFullYear();

const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 40);
});

const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');
hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => navLinks.classList.remove('open'));
});

const form = document.getElementById('quoteForm');
const note = document.getElementById('formNote');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = form.name.value.trim();
  const phone = form.phone.value.trim();
  const service = form.service.value;
  const message = form.message.value.trim();
  const body = `Hi airXpert, my name is ${name}.%0APhone: ${phone}%0AService needed: ${service}%0A${message ? 'Details: ' + message : ''}`;
  window.location.href = `mailto:simonchipinda@gmail.com?subject=Quote Request - ${encodeURIComponent(service)}&body=${body}`;
  note.textContent = "Opening your email app to send the request...";
});
