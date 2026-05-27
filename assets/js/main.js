/* =========================================================
   SSU · Main JavaScript
   ========================================================= */

(function () {
  'use strict';

  /* ----- Mobile menu toggle ----- */
  const menuToggle = document.getElementById('menuToggle');
  const nav = document.querySelector('.masthead__nav');

  if (menuToggle && nav) {
    menuToggle.addEventListener('click', () => {
      const isOpen = nav.classList.toggle('is-open');
      menuToggle.setAttribute('aria-expanded', String(isOpen));
    });

    // Close menu when a nav link is clicked (mobile)
    nav.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        nav.classList.remove('is-open');
        menuToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  /* ----- Newsletter form ----- */
  const form = document.getElementById('joinForm');
  const note = document.getElementById('joinNote');

  if (form && note) {
    form.addEventListener('submit', (event) => {
      event.preventDefault();

      const emailInput = form.querySelector('#email');
      const email = (emailInput?.value || '').trim();
      const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

      if (!isValid) {
        note.textContent = 'That does not look like a valid email address.';
        note.className = 'join__note is-error';
        return;
      }

      // Hook up to your real subscription endpoint here.
      // For now we just acknowledge.
      note.textContent = 'Thanks for subscribing. Check your inbox.';
      note.className = 'join__note is-success';
      form.reset();
    });
  }

  /* ----- Smooth scroll with offset for sticky header ----- */
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', (event) => {
      const targetId = anchor.getAttribute('href');
      if (!targetId || targetId === '#') return;

      const target = document.querySelector(targetId);
      if (!target) return;

      event.preventDefault();
      const headerOffset = 72;
      const targetPosition = target.getBoundingClientRect().top + window.scrollY - headerOffset;

      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    });
  });
})();
