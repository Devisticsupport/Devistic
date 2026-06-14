/* =========================================================
   DEVISTIC — Main JavaScript
   Handles: theme toggle, scroll animations, FAQ, counter,
            navbar, mobile menu, scroll-to-top
   ========================================================= */

'use strict';

/* ── Theme ──────────────────────────────────────────────── */
const themeToggle = document.getElementById('theme-toggle');
const root = document.documentElement;

function setTheme(theme) {
  root.setAttribute('data-theme', theme);
  localStorage.setItem('devistic-theme', theme);
  if (themeToggle) {
    themeToggle.setAttribute('aria-label', theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode');
  }
}

function initTheme() {
  const saved = localStorage.getItem('devistic-theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  setTheme(saved || (prefersDark ? 'dark' : 'light'));
}

if (themeToggle) {
  themeToggle.addEventListener('click', () => {
    const current = root.getAttribute('data-theme');
    setTheme(current === 'dark' ? 'light' : 'dark');
  });
}
initTheme();

/* ── Navbar ─────────────────────────────────────────────── */
const navbar = document.querySelector('.navbar');
const hamburger = document.querySelector('.nav-hamburger');
const navLinks = document.querySelector('.nav-links');

window.addEventListener('scroll', () => {
  if (navbar) {
    navbar.classList.toggle('scrolled', window.scrollY > 20);
  }
  scrollTopBtn && scrollTopBtn.classList.toggle('visible', window.scrollY > 400);
}, { passive: true });

if (hamburger) {
  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('open');
    const isOpen = navLinks.classList.contains('open');
    hamburger.setAttribute('aria-expanded', isOpen);
    // Animate bars
    const bars = hamburger.querySelectorAll('span');
    if (isOpen) {
      bars[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
      bars[1].style.opacity = '0';
      bars[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
    } else {
      bars.forEach(b => { b.style.transform = ''; b.style.opacity = ''; });
    }
  });
}

// Close mobile menu on link click
if (navLinks) {
  navLinks.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      navLinks.classList.remove('open');
      const bars = hamburger && hamburger.querySelectorAll('span');
      if (bars) bars.forEach(b => { b.style.transform = ''; b.style.opacity = ''; });
    });
  });
}

// Active nav link
(function markActiveNav() {
  const links = document.querySelectorAll('.nav-links a');
  const path = window.location.pathname.split('/').pop() || 'index.html';
  links.forEach(link => {
    const href = link.getAttribute('href');
    if (href === path || (path === 'index.html' && href === 'index.html') || href === path.replace('.html', '')) {
      link.classList.add('active', 'active-page');
    }
  });
})();

/* ── Scroll Reveal (IntersectionObserver) ───────────────── */
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -60px 0px' });

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

/* ── Animated Counter ───────────────────────────────────── */
function animateCounter(el, target, duration = 1800, suffix = '') {
  const start = performance.now();
  const isFloat = target % 1 !== 0;

  function step(now) {
    const elapsed = now - start;
    const progress = Math.min(elapsed / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3); // ease-out-cubic
    const value = eased * target;
    el.textContent = (isFloat ? value.toFixed(1) : Math.round(value)) + suffix;
    if (progress < 1) requestAnimationFrame(step);
  }
  requestAnimationFrame(step);
}

const counterObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const el = entry.target;
      const raw = el.getAttribute('data-target');
      const suffix = el.getAttribute('data-suffix') || '';
      const target = parseFloat(raw);
      animateCounter(el, target, 1800, suffix);
      counterObserver.unobserve(el);
    }
  });
}, { threshold: 0.5 });

document.querySelectorAll('[data-target]').forEach(el => counterObserver.observe(el));

/* ── FAQ ─────────────────────────────────────────────────── */
document.querySelectorAll('.faq-item').forEach(item => {
  const q = item.querySelector('.faq-q');
  q.addEventListener('click', () => {
    const isOpen = item.classList.contains('open');
    // Close all
    document.querySelectorAll('.faq-item.open').forEach(i => i.classList.remove('open'));
    // Open clicked if was closed
    if (!isOpen) item.classList.add('open');
  });
  // Keyboard support
  q.setAttribute('role', 'button');
  q.setAttribute('tabindex', '0');
  q.addEventListener('keydown', e => {
    if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); q.click(); }
  });
});

/* ── Scroll to Top ──────────────────────────────────────── */
const scrollTopBtn = document.getElementById('scroll-top');
if (scrollTopBtn) {
  scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

/* ── Contact Form ───────────────────────────────────────── */
const contactForm = document.getElementById('contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const btn = contactForm.querySelector('button[type="submit"]');
    const original = btn.textContent;
    btn.textContent = 'Sending…';
    btn.disabled = true;
    setTimeout(() => {
      btn.textContent = '✓ Message Sent!';
      btn.style.background = 'linear-gradient(135deg, #2ecc71, #27ae60)';
      contactForm.reset();
      setTimeout(() => {
        btn.textContent = original;
        btn.style.background = '';
        btn.disabled = false;
      }, 3000);
    }, 1500);
  });
}

/* ── Smooth hover tilt on service cards ─────────────────── */
document.querySelectorAll('.service-card, .price-card').forEach(card => {
  card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top)  / rect.height - 0.5;
    card.style.transform = `translateY(-6px) rotateY(${x * 4}deg) rotateX(${-y * 4}deg)`;
  });
  card.addEventListener('mouseleave', () => {
    card.style.transform = '';
  });
});

/* ── Pricing toggle (monthly/yearly) ────────────────────── */
const billingToggle = document.getElementById('billing-toggle');
if (billingToggle) {
  billingToggle.addEventListener('change', () => {
    const isYearly = billingToggle.checked;
    document.querySelectorAll('.price-amount').forEach(el => {
      const monthly = parseFloat(el.getAttribute('data-monthly'));
      const yearly  = parseFloat(el.getAttribute('data-yearly'));
      if (!isNaN(monthly) && !isNaN(yearly)) {
        el.textContent = '$' + (isYearly ? yearly : monthly);
      }
    });
    const label = document.getElementById('billing-label');
    if (label) label.textContent = isYearly ? 'per year' : 'one-time';
  });
}

/* ── Typing animation for hero subtitle ─────────────────── */
const typingEl = document.getElementById('typing-text');
if (typingEl) {
  const phrases = [
    'Web Development',
    'Speed Optimization',
    'SEO Strategies',
    'Cybersecurity',
    'Web Care Packages'
  ];
  let pi = 0, ci = 0, deleting = false;

  function type() {
    const phrase = phrases[pi];
    if (!deleting) {
      typingEl.textContent = phrase.slice(0, ++ci);
      if (ci === phrase.length) {
        setTimeout(() => { deleting = true; type(); }, 1800);
        return;
      }
    } else {
      typingEl.textContent = phrase.slice(0, --ci);
      if (ci === 0) {
        deleting = false;
        pi = (pi + 1) % phrases.length;
      }
    }
    setTimeout(type, deleting ? 45 : 85);
  }
  type();
}