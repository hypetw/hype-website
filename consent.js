/* HYPE cookie banner + GA4 Consent Mode v2 (basic).
   Default: ALL analytics denied. No cookies, no pings, no gtag.js load.
   On Accept: load gtag.js, set analytics_storage=granted, config GA4.
   On Reject: do nothing (nothing was loaded). Remember the choice. */
(function () {
  var STORE_KEY = 'hype_consent_v1';
  var GA_ID = 'G-FT9LPT3CB9';

  function getChoice() {
    try { return localStorage.getItem(STORE_KEY); } catch (e) { return null; }
  }
  function setChoice(v) {
    try { localStorage.setItem(STORE_KEY, v); } catch (e) {}
  }
  function clearChoice() {
    try { localStorage.removeItem(STORE_KEY); } catch (e) {}
  }

  function loadGA() {
    window.dataLayer = window.dataLayer || [];
    function gtag() { dataLayer.push(arguments); }
    window.gtag = gtag;
    gtag('consent', 'default', {
      ad_storage: 'denied',
      ad_user_data: 'denied',
      ad_personalization: 'denied',
      analytics_storage: 'granted',
      functionality_storage: 'granted',
      personalization_storage: 'denied',
      security_storage: 'granted'
    });
    gtag('js', new Date());
    gtag('config', GA_ID, { anonymize_ip: true });
    var s = document.createElement('script');
    s.async = true;
    s.src = 'https://www.googletagmanager.com/gtag/js?id=' + GA_ID;
    document.head.appendChild(s);
  }

  function removeBanner() {
    var el = document.getElementById('hype-consent');
    if (el && el.parentNode) el.parentNode.removeChild(el);
  }

  function showBanner() {
    if (document.getElementById('hype-consent')) return;
    var wrap = document.createElement('div');
    wrap.id = 'hype-consent';
    wrap.className = 'hype-consent';
    wrap.setAttribute('role', 'dialog');
    wrap.setAttribute('aria-label', 'Cookie preferences');
    wrap.setAttribute('aria-live', 'polite');
    wrap.innerHTML =
      '<div class="hype-consent__inner">' +
        '<p class="hype-consent__text">' +
          'We use <a href="/cookies">cookies</a> for Google Analytics only — to see which pages are read and where visitors come from. No ads. No profiles.' +
        '</p>' +
        '<div class="hype-consent__actions">' +
          '<button type="button" class="hype-consent__btn hype-consent__btn--reject" data-hype-consent="reject">Reject</button>' +
          '<button type="button" class="hype-consent__btn hype-consent__btn--accept" data-hype-consent="accept">Accept</button>' +
        '</div>' +
      '</div>';
    document.body.appendChild(wrap);
    wrap.addEventListener('click', function (e) {
      var t = e.target;
      if (!t || !t.getAttribute) return;
      var action = t.getAttribute('data-hype-consent');
      if (action === 'accept') { setChoice('accepted'); removeBanner(); loadGA(); }
      else if (action === 'reject') { setChoice('rejected'); removeBanner(); }
    });
  }

  // Public API for the "Cookie settings" link in the footer.
  window.HypeConsent = {
    reopen: function () { clearChoice(); removeBanner(); showBanner(); }
  };

  function init() {
    // Wire up any "Cookie settings" links on the page
    var links = document.querySelectorAll('[data-hype-cookie-settings]');
    for (var i = 0; i < links.length; i++) {
      links[i].addEventListener('click', function (e) {
        e.preventDefault();
        window.HypeConsent.reopen();
      });
    }
    var choice = getChoice();
    if (choice === 'accepted') loadGA();
    else if (!choice) showBanner();
    // 'rejected' → nothing to do; nothing loads.
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
