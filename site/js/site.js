const WA = "https://wa.me/918340334846";
const PHONE_DISPLAY = "+91 83403 34846";
const PHONE_TEL = "+918340334846";
const EMAIL = "sukhspace5@gmail.com";

const headerHTML = `
  <div class="topbar">Online &amp; Offline Sessions<br><a href="${WA}" target="_blank" rel="noopener">WhatsApp ${PHONE_DISPLAY}</a></div>
  <header class="site-header">
    <div class="wrap nav">
      <a class="brand" href="index.html">
        <img src="images/logo-mark.png" alt="Sukh Space logo">
        <span>SUKH <em>SPACE</em></span>
      </a>
      <button class="menu-toggle" aria-label="Open menu">☰</button>
      <ul class="nav-links">
        <li><a href="index.html" data-nav="home">Home</a></li>
        <li><a href="offerings.html" data-nav="offerings">Offerings</a></li>
        <li><a href="about.html" data-nav="about">About</a></li>
        <li><a href="schedule.html" data-nav="schedule">Schedule</a></li>
        <li><a href="testimonials.html" data-nav="testimonials">Stories</a></li>
        <li><a href="gallery.html" data-nav="gallery">Gallery</a></li>
        <li><a href="diet.html" data-nav="diet">Diet Plans</a></li>
        <li><a href="contact.html" data-nav="contact">Contact</a></li>
        <li><a class="btn btn-primary" href="${WA}" target="_blank" rel="noopener">Book a Session</a></li>
      </ul>
    </div>
  </header>
`;

const footerHTML = `
  <section class="cta-wrap">
    <div class="wrap">
      <div class="cta-band">
        <div>
          <h2>Begin in a space that holds you.</h2>
          <p>Join a class, book a prenatal 1:1, or message Pinki with where you are in your journey.</p>
        </div>
        <a class="btn btn-peach" href="${WA}" target="_blank" rel="noopener">Chat on WhatsApp</a>
      </div>
    </div>
  </section>
  <footer class="site-footer">
    <div class="wrap footer-grid">
      <div>
        <h4>SUKH SPACE</h4>
        <p>Creating Space for Your Sukh through yoga, breathwork and wellness. Ancient yogic wisdom with modern somatic practices — in Dhanbad and online.</p>
      </div>
      <div>
        <h4>Explore</h4>
        <ul>
          <li><a href="offerings.html">Offerings</a></li>
          <li><a href="about.html">The heart behind Sukh Space</a></li>
          <li><a href="schedule.html">Weekly schedule</a></li>
          <li><a href="gallery.html">Gallery</a></li>
          <li><a href="diet.html">Customized diet plans</a></li>
        </ul>
      </div>
      <div>
        <h4>Practice</h4>
        <ul>
          <li><a href="offerings.html#womens">Women’s health</a></li>
          <li><a href="offerings.html#prenatal">Pre-natal sessions</a></li>
          <li><a href="offerings.html#postpartum">Postpartum recovery</a></li>
          <li><a href="offerings.html#weightloss">Weight loss sessions</a></li>
        </ul>
      </div>
      <div>
        <h4>Reach us</h4>
        <ul>
          <li><a href="tel:${PHONE_TEL}">${PHONE_DISPLAY}</a></li>
          <li><a href="mailto:${EMAIL}">${EMAIL}</a></li>
          <li><a href="https://www.instagram.com/sukhspace_/" target="_blank" rel="noopener">Instagram @sukhspace_</a></li>
          <li>Dhanbad, Jharkhand</li>
          <li><a href="terms.html">Terms &amp; refunds</a></li>
        </ul>
      </div>
    </div>
    <div class="wrap tiny">© ${new Date().getFullYear()} Sukh Space. All rights reserved.</div>
  </footer>
  <a class="wa-float" href="${WA}" target="_blank" rel="noopener" aria-label="WhatsApp">
    <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.86 9.86 0 0 0 12.04 2zm0 1.8c4.47 0 8.11 3.64 8.11 8.11 0 4.47-3.64 8.11-8.11 8.11-1.41 0-2.79-.36-4.01-1.05l-.29-.17-3.11.82.83-3.04-.18-.31a8.07 8.07 0 0 1-1.24-4.36c0-4.47 3.64-8.11 8.11-8.11zm-2.7 4.4c-.17 0-.44.06-.67.32-.23.27-.87.85-.87 2.07 0 1.22.89 2.4 1.01 2.57.12.17 1.72 2.76 4.25 3.76 2.1.83 2.53.67 2.99.62.46-.04 1.48-.6 1.69-1.18.21-.58.21-1.08.15-1.18-.06-.1-.23-.17-.48-.29-.25-.12-1.48-.73-1.71-.81-.23-.08-.4-.12-.56.12-.17.25-.65.81-.8.98-.15.17-.3.19-.55.06-.25-.12-1.06-.39-2.02-1.25-.75-.67-1.25-1.49-1.4-1.74-.15-.25-.02-.39.11-.51.12-.12.25-.3.38-.44.12-.15.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.12-.56-1.35-.77-1.85-.2-.48-.4-.42-.56-.42z"/></svg>
  </a>
`;

document.getElementById("site-chrome-start").innerHTML = headerHTML;
document.getElementById("site-chrome-end").innerHTML = footerHTML;

const page = document.body.dataset.page;
document.querySelectorAll("[data-nav]").forEach((link) => {
  if (link.dataset.nav === page) link.classList.add("active");
});

const toggle = document.querySelector(".menu-toggle");
const links = document.querySelector(".nav-links");
toggle.addEventListener("click", () => links.classList.toggle("open"));

const form = document.getElementById("enquire-form");
if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const data = new FormData(form);
    const text = [
      "Hello Pinki, I would like to enquire about Sukh Space.",
      `Name: ${data.get("name")}`,
      `Interest: ${data.get("interest")}`,
      `Message: ${data.get("message")}`,
    ].join("\n");
    window.open(`${WA}?text=${encodeURIComponent(text)}`, "_blank");
  });
}

const lightbox = document.createElement("div");
lightbox.className = "lightbox";
lightbox.innerHTML = '<button class="lightbox-close" type="button" aria-label="Close">×</button><img alt="">';
document.body.appendChild(lightbox);
const lightboxImg = lightbox.querySelector("img");
const closeLightbox = () => lightbox.classList.remove("open");
lightbox.addEventListener("click", (e) => {
  if (e.target === lightbox || e.target.classList.contains("lightbox-close")) closeLightbox();
});
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeLightbox();
});
document.querySelectorAll("[data-gallery]").forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    lightboxImg.src = link.getAttribute("href");
    lightboxImg.alt = link.querySelector("img")?.alt || "";
    lightbox.classList.add("open");
  });
});
