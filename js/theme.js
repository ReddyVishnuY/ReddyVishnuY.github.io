// Theme toggle logic
(() => {
  const toggleBtn = document.querySelector('.theme-toggle');
  if (!toggleBtn) return;
  const root = document.documentElement;
  const current = root.getAttribute('data-theme') || 'light';
  const setTheme = (theme) => {
    root.setAttribute('data-theme', theme);
    toggleBtn.setAttribute('aria-pressed', theme === 'dark' ? 'true' : 'false');
    toggleBtn.textContent = theme === 'dark' ? 'Light mode' : 'Dark mode';
  };
  // Initialize button state
  setTheme(current);
  toggleBtn.addEventListener('click', () => {
    const newTheme = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    try {
      localStorage.setItem('theme', newTheme);
    } catch (e) {}
  });
})();