(() => {
  const root = document.documentElement;
  const toggleBtn = document.querySelector('.theme-toggle');

  if (toggleBtn) {
    const setTheme = (theme) => {
      root.setAttribute('data-theme', theme);
      toggleBtn.setAttribute('aria-pressed', String(theme === 'dark'));
      toggleBtn.setAttribute('aria-label', theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme');
      toggleBtn.setAttribute('title', theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme');
    };

    setTheme(root.getAttribute('data-theme') === 'dark' ? 'dark' : 'light');
    toggleBtn.addEventListener('click', () => {
      const nextTheme = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
      setTheme(nextTheme);
      try {
        localStorage.setItem('theme', nextTheme);
      } catch (error) {
        console.warn('Unable to save the selected theme.', error);
      }
    });
  }

  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const revealItems = Array.from(document.querySelectorAll('[data-reveal]'));
  const sections = Array.from(document.querySelectorAll('main section[id]'));
  const navLinks = Array.from(document.querySelectorAll('.site-header nav a[href^="#"]'));

  if ('IntersectionObserver' in window) {
    if (!reducedMotion && revealItems.length) {
      const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const siblings = Array.from(entry.target.parentElement.children)
            .filter((element) => element.matches('[data-reveal]'));
          const index = siblings.indexOf(entry.target);
          entry.target.style.transitionDelay = `${Math.max(index, 0) * 55}ms`;
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        });
      }, { threshold: 0.12 });

      root.classList.add('js');
      revealItems.forEach((item) => revealObserver.observe(item));
      window.setTimeout(() => {
        revealItems.forEach((item) => item.classList.add('is-visible'));
      }, 3000);
    }

    if (sections.length && navLinks.length) {
      const linkById = new Map(navLinks.map((link) => [link.hash.slice(1), link]));
      const sectionObserver = new IntersectionObserver((entries) => {
        const visibleSections = entries
          .filter((entry) => entry.isIntersecting)
          .sort((first, second) => first.boundingClientRect.top - second.boundingClientRect.top);
        if (!visibleSections.length) {
          navLinks.forEach((link) => link.removeAttribute('aria-current'));
          return;
        }

        const activeId = visibleSections[0].target.id;
        navLinks.forEach((link) => {
          if (link === linkById.get(activeId)) link.setAttribute('aria-current', 'true');
          else link.removeAttribute('aria-current');
        });
      }, { rootMargin: '-40% 0px -50% 0px' });

      sections.forEach((section) => sectionObserver.observe(section));
    }
  }

  const setup = document.querySelector('.setup-inner');
  const specs = setup && setup.querySelector('.specs');
  const summary = setup && setup.querySelector('summary');
  if (setup && specs && summary && !reducedMotion && typeof specs.animate === 'function') {
    let animating = false;
    setup.addEventListener('toggle', () => {
      if (!setup.open) return;
      animating = true;
      const animation = specs.animate(
        [{ opacity: 0, transform: 'translateY(-8px)' }, { opacity: 1, transform: 'translateY(0)' }],
        { duration: 220, easing: 'ease-out' }
      );
      animation.onfinish = () => {
        animation.cancel();
        animating = false;
      };
    });

    summary.addEventListener('click', (event) => {
      if (!setup.open) return;
      event.preventDefault();
      if (animating) return;
      animating = true;
      const animation = specs.animate(
        [{ opacity: 1, transform: 'translateY(0)' }, { opacity: 0, transform: 'translateY(-8px)' }],
        { duration: 170, easing: 'ease-out' }
      );
      animation.onfinish = () => {
        setup.open = false;
        animation.cancel();
        animating = false;
      };
    });
  }
})();
