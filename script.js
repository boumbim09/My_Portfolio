const toggle = document.getElementById('theme-toggle');
const html = document.documentElement;

const saved = localStorage.getItem('theme') || 'dark';
html.setAttribute('data-theme', saved);
toggle.textContent = saved === 'dark' ? '☀' : '☾';

toggle.addEventListener('click', () => {
  const next = html.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
  html.setAttribute('data-theme', next);
  toggle.textContent = next === 'dark' ? '☀' : '☾';
  localStorage.setItem('theme', next);
});

// Navbar scroll effect
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 20) {
    navbar.style.borderBottomColor = 'var(--border)';
  }
});