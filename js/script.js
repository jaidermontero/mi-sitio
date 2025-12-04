const menuToggle = document.querySelector('.menu-toggle');
const navbar = document.querySelector('.navbar');

menuToggle.addEventListener('click', () => {
  navbar.classList.toggle('active');
});
const sliderImg = document.getElementById('slider-img');
const dots = document.querySelectorAll('.dot');
const images = [
  "img/Napolitano.webp",
  "img/ensaladaverduras.webp",
  "img/platococido.webp"
];
let index = 0;
function changeImage() {
  index = (index + 1) % images.length;
  sliderImg.src = images[index];
  updateDots();
}
function updateDots() {
  dots.forEach(dot => dot.classList.remove('active'));
  dots[index].classList.add('active');
}
let interval = setInterval(changeImage, 5000);

dots.forEach((dot, i) => {
  dot.addEventListener('click', () => {
    index = i;
    sliderImg.src = images[index];
    updateDots();
    clearInterval(interval);
  });
});
window.addEventListener('DOMContentLoaded', () => {
  const overlay = document.querySelector('.overlay');
  const saludo = document.createElement('p');
  saludo.classList.add('saludo');

  const hora = new Date().getHours();
  let mensaje = "";

  if (hora < 12) mensaje = "¡Buongiorno! (Buenos días)";
  else if (hora < 18) mensaje = "¡Buon pomeriggio! (Buenas tardes)";
  else mensaje = "¡Buona sera! (Buenas noches)";

  saludo.textContent = mensaje;
  overlay.appendChild(saludo);
});
document.addEventListener('DOMContentLoaded', () => {
  const mapa = L.map('mapaItalia').setView([41.8719, 12.5674], 6);
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
  }).addTo(mapa);
  const lugares = [
    { nombre: 'Roma 🍕', coords: [41.9028, 12.4964], desc: 'Capital de Italia y corazón de la gastronomía romana.' },
    { nombre: 'Nápoles 🍅', coords: [40.8518, 14.2681], desc: 'Cuna de la pizza napolitana.' },
    { nombre: 'Florencia 🍷', coords: [43.7696, 11.2558], desc: 'Tierra del vino toscano y la historia renacentista.' },
  ];
  lugares.forEach((lugar) => {
    L.marker(lugar.coords)
      .addTo(mapa)
      .bindPopup(`<b>${lugar.nombre}</b><br>${lugar.desc}`);
  });
});
const btnEnviar = document.getElementById('btnEnviarComentario');
const lista = document.getElementById('listaComentarios');
const input = document.getElementById('nuevoComentario');

btnEnviar.addEventListener('click', () => {
  if (input.value.trim() !== '') {
    const nuevo = document.createElement('article');
    nuevo.classList.add('comentario');
    nuevo.innerHTML = `
      <img src="img/usuario.webp" alt="Nuevo usuario" />
      <p>"${input.value}"</p>
      <span>Nuevo usuario</span>
    `;
    lista.prepend(nuevo);
    input.value = '';
  }
});
AOS.init({
  duration: 1000,
  once: true,
}); 
