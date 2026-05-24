// Nav scroll
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 40);
});

// Mobile menu
const ham = document.getElementById('hamburger');
const links = document.getElementById('navLinks');
ham.addEventListener('click', () => {
  ham.classList.toggle('open');
  links.classList.toggle('open');
  ham.setAttribute('aria-expanded', links.classList.contains('open'));
});
links.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => {
    ham.classList.remove('open');
    links.classList.remove('open');
    ham.setAttribute('aria-expanded', 'false');
  });
});

// Reveal on scroll
const reveals = document.querySelectorAll('.reveal');
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((e, i) => {
    if (e.isIntersecting) {
      setTimeout(() => e.target.classList.add('in'), i * 80);
      revealObserver.unobserve(e.target);
    }
  });
}, { threshold: 0.12 });
reveals.forEach(el => revealObserver.observe(el));

// Counter animation — triggers when stats section enters viewport
function animateCounter(el) {
  const target = +el.dataset.count;
  const suffix = el.dataset.suffix || '';
  const duration = 2000;
  let startTime = null;

  function easeOutExpo(t) {
    return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
  }

  function tick(timestamp) {
    if (!startTime) startTime = timestamp;
    const elapsed = timestamp - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const easedProgress = easeOutExpo(progress);
    el.textContent = Math.floor(easedProgress * target) + suffix;
    if (progress < 1) requestAnimationFrame(tick);
    else el.textContent = target + suffix; // ensure exact final value
  }

  requestAnimationFrame(tick);
}

const countUpEls = document.querySelectorAll('.count-up[data-count]');
const counterObserver = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      animateCounter(e.target);
      counterObserver.unobserve(e.target);
    }
  });
}, { threshold: 0.6 });
countUpEls.forEach(el => counterObserver.observe(el));

// ── WhatsApp Quick Contact Form ──────────────────────────────
(function () {
  // Chip group (urgency) — removed

  // Service scroll list — single-select
  document.querySelectorAll('.fc-service-item').forEach(item => {
    item.addEventListener('click', () => {
      document.querySelectorAll('.fc-service-item').forEach(i => i.classList.remove('active'));
      item.classList.add('active');
      updateWaLink();
    });
  });

  // Name input live update
  const nameInput = document.getElementById('waName');
  if (nameInput) nameInput.addEventListener('input', updateWaLink);

  function updateWaLink() {
    const service = (document.querySelector('.fc-service-item.active') || {}).dataset?.value || '';
    const name    = nameInput ? nameInput.value.trim() : '';

    // Build the pre-filled WhatsApp message
    const parts = ['Hi Ngiyabuya Plumbing!'];
    if (name)    parts.push('My name: ' + name);
    if (service) parts.push('Service needed: ' + service);
    parts.push('Please get back to me. Thank you.');

    const msg = encodeURIComponent(parts.join('\n'));
    const btn = document.getElementById('waSendBtn');
    if (btn) btn.href = 'https://wa.me/27785300714?text=' + msg;
  }

  // Initialise on load
  updateWaLink();
})();
