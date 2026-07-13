(() => {
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  if (reduceMotion.matches) return;

  const body = document.body;
  const revealTargets = [
    document.querySelector('.post-header'),
    document.querySelector('.profile'),
    document.querySelector('.about-motion-intro'),
    ...document.querySelectorAll('.about-panel'),
    ...document.querySelectorAll('.about-links'),
  ].filter(Boolean);

  const cardTargets = [...document.querySelectorAll('.glance-card, .strength-card, .route-stop')];
  const manifesto = document.querySelector('.about-motion-intro__manifesto');

  if (manifesto && manifesto.dataset.split !== 'true') {
    const words = manifesto.textContent.trim().split(/\s+/);
    manifesto.setAttribute('aria-label', manifesto.textContent.trim());
    manifesto.dataset.split = 'true';
    manifesto.innerHTML = words
      .map((word, index) => `<span class="about-word" style="--word-index: ${index}" aria-hidden="true">${word}</span>`)
      .join(' ');
  }

  revealTargets.forEach((element, index) => {
    element.classList.add('about-reveal');
    element.style.setProperty('--reveal-order', index);
  });

  cardTargets.forEach((card, index) => {
    card.classList.add('about-card-reveal');
    card.style.setProperty('--card-order', index % 4);
  });

  body.classList.add('about-motion-ready');

  if (!('IntersectionObserver' in window)) {
    [...revealTargets, ...cardTargets].forEach((target) => target.classList.add('is-visible'));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.14, rootMargin: '0px 0px -8% 0px' }
  );

  revealTargets.forEach((target, index) => {
    if (index < 3) {
      window.setTimeout(() => target.classList.add('is-visible'), 100 + index * 130);
    } else {
      observer.observe(target);
    }
  });

  cardTargets.forEach((target) => observer.observe(target));

  const interactiveCards = [...document.querySelectorAll('.glance-card, .strength-card')];
  interactiveCards.forEach((card) => {
    card.addEventListener('pointermove', (event) => {
      const bounds = card.getBoundingClientRect();
      const x = (event.clientX - bounds.left) / bounds.width - 0.5;
      const y = (event.clientY - bounds.top) / bounds.height - 0.5;
      card.style.setProperty('--tilt-x', `${(-y * 3.2).toFixed(2)}deg`);
      card.style.setProperty('--tilt-y', `${(x * 4).toFixed(2)}deg`);
    });

    card.addEventListener('pointerleave', () => {
      card.style.removeProperty('--tilt-x');
      card.style.removeProperty('--tilt-y');
    });
  });

  const profile = document.querySelector('.profile');
  if (profile) {
    let framePending = false;
    const updateProfileOffset = () => {
      const offset = Math.max(-12, Math.min(12, window.scrollY * 0.022));
      profile.style.setProperty('--profile-parallax', `${offset.toFixed(2)}px`);
      framePending = false;
    };
    window.addEventListener(
      'scroll',
      () => {
        if (!framePending) {
          framePending = true;
          window.requestAnimationFrame(updateProfileOffset);
        }
      },
      { passive: true }
    );
    updateProfileOffset();
  }
})();
