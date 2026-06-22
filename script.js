// Año en footer
document.getElementById('year').textContent = new Date().getFullYear();

// Slideshow del hero (transición cruzada + zoom Ken Burns)
(function(){
  const slides = Array.from(document.querySelectorAll('.hero__slide'));
  if (slides.length < 2) return;
  let i = 0;
  setInterval(() => {
    slides[i].classList.remove('is-active');
    i = (i + 1) % slides.length;
    slides[i].classList.add('is-active');
  }, 13000);
})();

// Nav: fondo al hacer scroll
const nav = document.getElementById('nav');
const onScroll = () => nav.classList.toggle('scrolled', window.scrollY > 60);
onScroll();
window.addEventListener('scroll', onScroll, { passive: true });

// Menú móvil
const toggle = document.getElementById('navToggle');
const links = document.getElementById('navLinks');
toggle.addEventListener('click', () => {
  links.classList.toggle('open');
  toggle.classList.toggle('open');
});
links.querySelectorAll('a').forEach(a =>
  a.addEventListener('click', () => {
    links.classList.remove('open');
    toggle.classList.remove('open');
  })
);

// Reveal on scroll
const io = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
  });
}, { threshold: 0.15 });
document.querySelectorAll('.reveal').forEach(el => io.observe(el));

// Lightbox de galería
const items = Array.from(document.querySelectorAll('.g-item'));
const sources = items.map(i => i.dataset.src);
const lb = document.getElementById('lightbox');
const lbImg = document.getElementById('lbImg');
let current = 0;

function openLb(i) {
  current = i;
  lbImg.src = sources[current];
  lb.classList.add('open');
  lb.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}
function closeLb() {
  lb.classList.remove('open');
  lb.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}
function step(dir) {
  current = (current + dir + sources.length) % sources.length;
  lbImg.src = sources[current];
}

items.forEach((item, i) => item.addEventListener('click', () => openLb(i)));
document.getElementById('lbClose').addEventListener('click', closeLb);
document.getElementById('lbPrev').addEventListener('click', e => { e.stopPropagation(); step(-1); });
document.getElementById('lbNext').addEventListener('click', e => { e.stopPropagation(); step(1); });
lb.addEventListener('click', e => { if (e.target === lb) closeLb(); });
document.addEventListener('keydown', e => {
  if (!lb.classList.contains('open')) return;
  if (e.key === 'Escape') closeLb();
  if (e.key === 'ArrowLeft') step(-1);
  if (e.key === 'ArrowRight') step(1);
});
