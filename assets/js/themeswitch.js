const checkbox = document.querySelector('input[name=theme_switch]');
const root = document.documentElement;
const savedTheme = localStorage.getItem('theme');
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

const initialTheme = savedTheme || (prefersDark ? 'dark' : 'light');
root.setAttribute('data-theme', initialTheme);
checkbox.checked = initialTheme === 'dark';

checkbox.addEventListener('change', (cb) => {
  const theme = cb.target.checked ? 'dark' : 'light';
  root.setAttribute('data-theme', theme);
  localStorage.setItem('theme', theme);
});
