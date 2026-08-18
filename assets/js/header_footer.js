/* =========================================================
   SSU · Header/Footer Layout
   ========================================================= */


const isSubPage = window.location.pathname.includes("/pages/");


const HOME = isSubPage ? "../index.html" : "index.html";
const PAGES = isSubPage ? "" : "pages/";




const MASTHEAD = `
<header class="masthead">
  <div class="container masthead__inner">
    <a href="${HOME}" class="masthead__logo">
      <span class="logo-mark">SSU</span>
      <span class="logo-tag">est. 2024</span>
    </a>


    <nav class="masthead__nav" aria-label="Primary">
      <a href="${HOME}#about">About</a>
      <a href="${PAGES}team.html">Team</a>
      <!-- <a href="${PAGES}resources.html">Resources</a> -->
      <a href="${HOME}#contact">Contact</a>
      <a href="${HOME}#join" class="btn btn--primary">Join</a>
    </nav>


    <button
      class="masthead__menu"
      aria-label="Open menu"
      aria-expanded="false"
      id="menuToggle">
      <span></span><span></span><span></span>
    </button>
  </div>
</header>
`;




const FOOTER = `
<footer class="footer" id="contact">
  <div class="container footer__inner">


    <div class="footer__col">
      <p class="logo-mark logo-mark--footer">SSU</p>
      <p class="footer__about">
        Statistical Sciences Union<br>
        University of Toronto
      </p>
    </div>


    <div class="footer__col">
      <p class="footer__label">Contact</p>
      <p><a href="mailto:hello@ssu-uoft.ca">hello@ssu-uoft.ca</a></p>
      <p><a href="https://instagram.com">Instagram</a></p>
      <p><a href="https://linkedin.com">LinkedIn</a></p>
    </div>


    <div class="footer__col">
      <p class="footer__label">Navigate</p>
      <p><a href="${HOME}#about">About</a></p>
      <p><a href="${PAGES}team.html">Team</a></p>
      <!-- <p><a href="${PAGES}resources.html">Resources</a></p> -->
    </div>


  </div>


  <div class="container footer__base">
    <span>&copy; 2026 Statistical Sciences Union</span>
    <span>Made with care in Toronto</span>
  </div>
</footer>
`;




document.addEventListener("DOMContentLoaded", () => {
  const masthead = document.getElementById("masthead");
  if (masthead) masthead.innerHTML = MASTHEAD;


  const footer = document.getElementById("footer");
  if (footer) footer.innerHTML = FOOTER;
});