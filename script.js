(() => {
  const root = document.documentElement;
  const body = document.body;
  root.classList.add('js');

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const preloader = document.getElementById('preloader');
  if (preloader) {
    const loaderStarted = performance.now();
    body.classList.add('is-loading');

    const hidePreloader = () => {
      if (preloader.classList.contains('is-hidden')) return;
      preloader.classList.add('is-hidden');
      body.classList.remove('is-loading');
    };

    // The hand-drawn welcome runs on the home page on each fresh visit or refresh.
    const loaderDuration = reduceMotion ? 350 : 1800;
    window.setTimeout(hidePreloader, Math.max(0, loaderDuration - (performance.now() - loaderStarted)));
    window.setTimeout(hidePreloader, reduceMotion ? 1200 : 5000);
  }

  // Keep locally designed image fallbacks until each remote photograph is ready.
  document.querySelectorAll('[data-image-frame], .project-image').forEach((frame) => {
    const image = frame.querySelector('img');
    if (!image) return;

    const markImageState = () => {
      if (image.naturalWidth > 0) frame.classList.add('image-ready');
      else frame.classList.add('image-failed');
    };

    if (image.complete) {
      markImageState();
    } else {
      image.addEventListener('load', markImageState, { once: true });
      image.addEventListener('error', markImageState, { once: true });
    }
  });

  // Reveal content as it enters the viewport; leave it visible on older browsers.
  const revealItems = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -35px 0px' });
    revealItems.forEach((item) => revealObserver.observe(item));
  } else {
    revealItems.forEach((item) => item.classList.add('is-visible'));
  }

  // Accessible mobile navigation.
  const header = document.getElementById('site-header');
  const menuToggle = document.querySelector('.menu-toggle');
  const mobileNav = document.getElementById('mobile-nav');

  const closeMenu = (returnFocus = false) => {
    if (!header || !menuToggle || !mobileNav) return;
    header.classList.remove('menu-open');
    body.classList.remove('menu-open');
    menuToggle.setAttribute('aria-expanded', 'false');
    menuToggle.setAttribute('aria-label', 'Open navigation menu');
    mobileNav.setAttribute('aria-hidden', 'true');
    if (returnFocus) menuToggle.focus();
  };

  if (header && menuToggle && mobileNav) {
    menuToggle.addEventListener('click', () => {
      const willOpen = menuToggle.getAttribute('aria-expanded') !== 'true';
      header.classList.toggle('menu-open', willOpen);
      body.classList.toggle('menu-open', willOpen);
      menuToggle.setAttribute('aria-expanded', String(willOpen));
      menuToggle.setAttribute('aria-label', willOpen ? 'Close navigation menu' : 'Open navigation menu');
      mobileNav.setAttribute('aria-hidden', String(!willOpen));
    });

    mobileNav.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => closeMenu());
    });

    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape' && header.classList.contains('menu-open')) closeMenu(true);
    });

    document.addEventListener('click', (event) => {
      if (header.classList.contains('menu-open') && !header.contains(event.target)) closeMenu();
    });

    window.addEventListener('resize', () => {
      if (window.innerWidth > 780) closeMenu();
    }, { passive: true });
  }

  // Project filter chips.
  const filterButtons = document.querySelectorAll('[data-filter]');
  const projectCards = document.querySelectorAll('.project-card[data-category]');

  filterButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const selectedFilter = button.dataset.filter;
      filterButtons.forEach((item) => {
        const active = item === button;
        item.classList.toggle('is-active', active);
        item.setAttribute('aria-pressed', String(active));
      });

      projectCards.forEach((card) => {
        const shouldShow = selectedFilter === 'all' || card.dataset.category === selectedFilter;
        card.hidden = !shouldShow;
        card.classList.toggle('is-hidden', !shouldShow);
      });
    });
  });

  // A quiet sticky-header detail and a current footer year.
  const updateHeader = () => {
    if (header) header.classList.toggle('has-scrolled', window.scrollY > 18);
  };
  updateHeader();
  window.addEventListener('scroll', updateHeader, { passive: true });

  const year = document.getElementById('current-year');
  if (year) year.textContent = String(new Date().getFullYear());
})();
