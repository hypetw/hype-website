// HYPE — enhancement script
// - Tagline typing animation (hero)
// - Mobile menu
// - Scroll reveal (reduced-motion friendly)

(function () {
  'use strict';

  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // ═══════════════════════════════════════════════════════════════
  // CONTACT FORM → MAILTO
  // Any <form class="contact__form" data-mailto="…" data-subject="…">
  // opens the user's email client pre-filled with the recipient, subject,
  // and a friendly body containing the visitor's email address.
  // ═══════════════════════════════════════════════════════════════
  document.querySelectorAll('form.contact__form').forEach((form) => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const to = form.dataset.mailto || 'hello@hypedigital.ie';
      const subject = form.dataset.subject || 'New enquiry';
      const input = form.querySelector('input[type="email"]');
      const visitorEmail = input ? input.value.trim() : '';

      const body =
        'Hi HYPE,\n\n' +
        "I'd like to talk about a project.\n\n" +
        (visitorEmail ? `My email: ${visitorEmail}\n\n` : '') +
        'Cheers.';

      const mailtoUrl =
        'mailto:' + encodeURIComponent(to) +
        '?subject=' + encodeURIComponent(subject) +
        '&body=' + encodeURIComponent(body);

      // Open the user's email client
      window.location.href = mailtoUrl;
    });
  });

  // ═══════════════════════════════════════════════════════════════
  // MARQUEE SEAMLESS-LOOP OFFSET CALIBRATION
  // Measures the exact pixel offset of the first duplicate item so the
  // scroll animation translates by exactly one primary-set width.
  // Avoids the half-gap stutter you get with translateX(-50%).
  // ═══════════════════════════════════════════════════════════════
  (function calibrateMarquee() {
    const track = document.querySelector('.marquee__track');
    if (!track) return;

    function update() {
      const items = track.querySelectorAll('.marquee__item');
      if (items.length < 2) return;
      // First duplicate is at index = items.length / 2 (primary and dup are identical halves)
      const half = items.length / 2;
      if (half !== Math.floor(half)) return;
      const firstDup = items[half];
      const offset = firstDup.offsetLeft;
      if (offset > 0) {
        track.style.setProperty('--marquee-offset', `-${offset}px`);
      }
    }

    // Wait for all images in the marquee to load before measuring — widths can
    // shift as images settle into their natural size.
    const imgs = track.querySelectorAll('img');
    let remaining = imgs.length;
    if (remaining === 0) {
      update();
      return;
    }
    imgs.forEach((img) => {
      if (img.complete && img.naturalWidth > 0) {
        if (--remaining === 0) update();
      } else {
        const done = () => {
          if (--remaining === 0) update();
        };
        img.addEventListener('load', done, { once: true });
        img.addEventListener('error', done, { once: true });
      }
    });
    // Recalculate on resize
    let resizeRaf = 0;
    window.addEventListener('resize', () => {
      cancelAnimationFrame(resizeRaf);
      resizeRaf = requestAnimationFrame(update);
    });
  })();

  // ═══════════════════════════════════════════════════════════════
  // INTRO LOADER — first-visit H-build animation
  // ═══════════════════════════════════════════════════════════════
  (function initIntro() {
    const loader = document.getElementById('intro-loader');
    if (!loader) return;

    // Skip on return visits (sessionStorage persists only for this tab session)
    if (sessionStorage.getItem('hype_intro_seen') === '1') {
      loader.remove();
      return;
    }

    document.documentElement.classList.add('intro-active');

    // NOTE: The intro plays for all users, including those with prefers-reduced-motion.
    // It's a slow, deliberate brand element (not vestibular-triggering parallax or
    // flashing), consistent with our hero video policy. The block pops themselves
    // become instant under the reduced-motion CSS override, but the phase timing
    // and holds still run so users get the full narrative, just snappier transitions.

    // Full sequence (~5 seconds — deliberate, cinematic pacing):
    //   0 ms      : build starts
    //              (L1 @200, L2 @380, L3 @560, R1 @900, R2 @1080, R3 @1260; each 260ms)
    //   1520 ms   : build complete — bi-color H (3 red left + 3 white right)
    //   1820 ms   : 300ms HOLD to register bi-color state → transformation starts
    //              (R1 flips, R2 +90ms, R3 +180ms; flip 560ms; center appears +260/520ms)
    //   2600 ms   : transformation complete — full brand mark (6 red + 1 white center)
    //   3300 ms   : 700ms HOLD on brand mark → wordmark fades in (700ms fade)
    //   4000 ms   : wordmark fully visible
    //   4900 ms   : 900ms HOLD on complete logo → exit starts (600ms fade-up + scale)
    //   5500 ms   : exit complete, loader removed
    loader.classList.add('is-building');

    setTimeout(() => loader.classList.add('is-transforming'),     1820);
    setTimeout(() => loader.classList.add('is-showing-wordmark'), 3300);
    setTimeout(() => loader.classList.add('is-exiting'),          4900);
    setTimeout(() => {
      loader.remove();
      document.documentElement.classList.remove('intro-active');
      sessionStorage.setItem('hype_intro_seen', '1');
    }, 5500);
  })();

  // ---------- Tagline typewriter ----------
  const tagline = document.getElementById('hero-tagline');
  if (tagline) {
    const text = tagline.dataset.text || tagline.textContent || '';
    tagline.textContent = '';
    const caret = document.createElement('span');
    caret.className = 'caret';
    caret.setAttribute('aria-hidden', 'true');

    if (reduced) {
      tagline.textContent = text;
    } else {
      // Delay so it starts after logo reveal (~1.9s)
      setTimeout(() => {
        tagline.appendChild(caret);
        let i = 0;
        const step = () => {
          if (i <= text.length) {
            // Insert next char before caret
            caret.before(document.createTextNode(text.charAt(i - 1) || ''));
            if (i > 0) {
              // Remove the empty first pass
              tagline.childNodes.forEach((n) => {
                if (n.nodeType === 3 && n.textContent === '') tagline.removeChild(n);
              });
            }
            i++;
            setTimeout(step, 55 + Math.random() * 40);
          } else {
            // Stop the caret after 2s
            setTimeout(() => caret.remove(), 2400);
          }
        };
        // Rewrite with a cleaner approach: build string progressively
        let shown = '';
        tagline.textContent = '';
        tagline.appendChild(caret);
        const loop = () => {
          if (shown.length < text.length) {
            shown += text.charAt(shown.length);
            caret.before(document.createTextNode(text.charAt(shown.length - 1)));
            setTimeout(loop, 55 + Math.random() * 40);
          } else {
            setTimeout(() => caret.remove(), 2400);
          }
        };
        // reset and run the cleaner loop
        while (tagline.firstChild) tagline.removeChild(tagline.firstChild);
        tagline.appendChild(caret);
        loop();
      }, 1900);
    }
  }

  // ---------- Mobile menu ----------
  const burger = document.getElementById('burger');
  const burgerClose = document.getElementById('burger-close');
  const menu = document.getElementById('mobile-menu');

  function openMenu() {
    if (!menu) return;
    menu.classList.add('is-open');
    menu.setAttribute('aria-hidden', 'false');
    burger && burger.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  }
  function closeMenu() {
    if (!menu) return;
    menu.classList.remove('is-open');
    menu.setAttribute('aria-hidden', 'true');
    burger && burger.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }

  burger && burger.addEventListener('click', openMenu);
  burgerClose && burgerClose.addEventListener('click', closeMenu);
  if (menu) {
    menu.querySelectorAll('a').forEach((a) => a.addEventListener('click', closeMenu));
  }

  // ---------- Video modal (YouTube lightbox) ----------
  const videoModal = document.getElementById('video-modal');
  const videoFrame = document.getElementById('video-modal-iframe');
  const videoClose = document.getElementById('video-modal-close');

  function openVideo(id) {
    if (!videoModal || !videoFrame || !id) return;
    videoFrame.src = `https://www.youtube.com/embed/${id}?autoplay=1&rel=0&modestbranding=1&playsinline=1`;
    videoModal.classList.add('is-open');
    videoModal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }
  function closeVideo() {
    if (!videoModal || !videoFrame) return;
    videoModal.classList.remove('is-open');
    videoModal.setAttribute('aria-hidden', 'true');
    videoFrame.src = '';
    document.body.style.overflow = '';
  }

  document.querySelectorAll('.reel[data-video]').forEach((el) => {
    el.addEventListener('click', (e) => {
      e.preventDefault();
      openVideo(el.dataset.video);
    });
  });
  videoClose && videoClose.addEventListener('click', closeVideo);
  videoModal && videoModal.addEventListener('click', (e) => {
    if (e.target === videoModal) closeVideo();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') { closeMenu(); closeVideo(); }
  });

  // ---------- Stats count-up animation ----------
  // Animates each .stat__num from 0 to its target value when scrolled into view.
  // Preserves the original formatting: "22+" → counts to 22, keeps the "+";
  // "07" → counts to 7 with leading zero. Plays for all users — it's a slow,
  // deliberate UI flourish, not a vestibular-triggering effect.
  const statNums = document.querySelectorAll('.stat__num');
  if (statNums.length && 'IntersectionObserver' in window) {
    statNums.forEach((el) => {
      const text = el.textContent.trim();
      const m = text.match(/^(\d+)(.*)$/);
      if (!m) return;
      el.dataset.countTarget = m[1];
      el.dataset.countSuffix = m[2];
      el.dataset.countPad = String(m[1].length);
      el.textContent = '0'.repeat(m[1].length) + m[2];
    });

    function animateCountUp(el) {
      const target = parseInt(el.dataset.countTarget, 10);
      const suffix = el.dataset.countSuffix || '';
      const pad = parseInt(el.dataset.countPad, 10);
      if (isNaN(target)) return;
      const duration = 1800;
      const start = performance.now();
      function tick(now) {
        const t = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - t, 3); // ease-out cubic
        el.textContent = String(Math.round(eased * target)).padStart(pad, '0') + suffix;
        if (t < 1) requestAnimationFrame(tick);
      }
      requestAnimationFrame(tick);
    }

    const countObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateCountUp(entry.target);
          countObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.45, rootMargin: '0px 0px -40px 0px' });

    statNums.forEach((el) => countObserver.observe(el));
  }

  // ---------- Scroll reveal ----------
  if (reduced || !('IntersectionObserver' in window)) return;

  const targets = document.querySelectorAll(
    '.tile, .world, .project, .reel, .quote, .post, .pt-stat, .stat, .how__step, .pricing__card, .pricing__notes'
  );
  targets.forEach((el) => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(24px)';
    el.style.transition = 'opacity 700ms cubic-bezier(0.22, 1, 0.36, 1), transform 700ms cubic-bezier(0.22, 1, 0.36, 1)';
  });

  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const el = entry.target;
          const delay = Math.min(parseInt(el.dataset.delay || '0', 10), 400);
          setTimeout(() => {
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
          }, delay);
          io.unobserve(el);
        }
      });
    },
    { threshold: 0.1, rootMargin: '0px 0px -80px 0px' }
  );

  targets.forEach((el, i) => {
    // stagger by small amount within a single section
    el.dataset.delay = String((i % 4) * 80);
    io.observe(el);
  });
})();
