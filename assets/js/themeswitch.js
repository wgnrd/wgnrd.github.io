let checkbox = document.querySelector('input[name=theme_switch]');

// get the prefered color scheme from user to initially load a theme
if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
  document.documentElement.setAttribute('data-theme', 'dark');
  checkbox.checked = true;
} else {
  document.documentElement.setAttribute('data-theme', 'light');
  checkbox.checked = false;
}

// add listener to switch theme if checkbox is engaged
checkbox.addEventListener('change', (cb) => {
  document.documentElement.setAttribute(
    'data-theme',
    cb.target.checked ? 'dark' : 'light'
  );
});
