// Cookie banner
(function () {
  const banner = document.getElementById('cookie-banner');
  if (!banner) return;
  if (localStorage.getItem('cookies_accepted')) { banner.style.display = 'none'; return; }
  document.getElementById('cookie-accept').onclick = function () {
    localStorage.setItem('cookies_accepted', '1');
    banner.style.display = 'none';
  };
  document.getElementById('cookie-decline').onclick = function () {
    localStorage.setItem('cookies_accepted', '0');
    banner.style.display = 'none';
  };
})();

// ADA widget
(function () {
  const toggle = document.getElementById('ada-toggle');
  const panel = document.getElementById('ada-panel');
  if (!toggle || !panel) return;

  toggle.onclick = function () { panel.classList.toggle('open'); };

  // High contrast
  const hcBtn = document.getElementById('ada-hc');
  if (hcBtn) {
    if (localStorage.getItem('ada_hc') === '1') { document.body.classList.add('high-contrast'); hcBtn.classList.add('active'); }
    hcBtn.onclick = function () {
      document.body.classList.toggle('high-contrast');
      const on = document.body.classList.contains('high-contrast');
      localStorage.setItem('ada_hc', on ? '1' : '0');
      hcBtn.classList.toggle('active', on);
    };
  }

  // Reduce motion
  const rmBtn = document.getElementById('ada-rm');
  if (rmBtn) {
    if (localStorage.getItem('ada_rm') === '1') { document.body.classList.add('reduce-motion'); rmBtn.classList.add('active'); }
    rmBtn.onclick = function () {
      document.body.classList.toggle('reduce-motion');
      const on = document.body.classList.contains('reduce-motion');
      localStorage.setItem('ada_rm', on ? '1' : '0');
      rmBtn.classList.toggle('active', on);
    };
  }

  // Dyslexia font
  const dfBtn = document.getElementById('ada-df');
  if (dfBtn) {
    if (localStorage.getItem('ada_df') === '1') { document.body.classList.add('dyslexia'); dfBtn.classList.add('active'); }
    dfBtn.onclick = function () {
      document.body.classList.toggle('dyslexia');
      const on = document.body.classList.contains('dyslexia');
      localStorage.setItem('ada_df', on ? '1' : '0');
      dfBtn.classList.toggle('active', on);
    };
  }

  // Text size
  var currentSize = parseInt(localStorage.getItem('ada_fontsize') || '0');
  applyFontSize(currentSize);
  document.querySelectorAll('.ada-size button').forEach(function (btn) {
    if (parseInt(btn.dataset.size) === currentSize) btn.classList.add('active');
    btn.onclick = function () {
      currentSize = parseInt(btn.dataset.size);
      localStorage.setItem('ada_fontsize', currentSize);
      applyFontSize(currentSize);
      document.querySelectorAll('.ada-size button').forEach(function (b) { b.classList.remove('active'); });
      btn.classList.add('active');
    };
  });

  function applyFontSize(size) {
    var base = 16 + size * 2;
    document.documentElement.style.fontSize = base + 'px';
  }
})();

// Hamburger menu
(function () {
  const btn = document.getElementById('hamburger');
  const links = document.getElementById('nav-links');
  if (!btn || !links) return;
  btn.onclick = function () {
    links.classList.toggle('open');
    btn.setAttribute('aria-expanded', links.classList.contains('open'));
  };
})();

// Contact form
(function () {
  const form = document.getElementById('quote-form');
  if (!form) return;
  form.onsubmit = function (e) {
    e.preventDefault();
    var btn = form.querySelector('.form-submit');
    var orig = btn.textContent;
    btn.textContent = 'Sending...';
    btn.disabled = true;
    // Replace with real endpoint (Formspree, Netlify Forms, etc.)
    setTimeout(function () {
      btn.textContent = orig;
      btn.disabled = false;
      var success = document.getElementById('form-success');
      if (success) { success.style.display = 'block'; form.reset(); }
    }, 1200);
  };
})();
