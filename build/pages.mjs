import { OFFERINGS, TESTIMONIALS, DHANBAD_TESTIMONIALS, FAQ, TEACHER, PHONE_DISPLAY, PHONE, EMAIL, INSTAGRAM, wa, WA_DEFAULT, DIET_ASK } from "./content.mjs";
import { photo, photoSrc, waButton } from "./layout.mjs";
import { doodle, icon } from "./icons.mjs";
import { composer, practicesIndex, journey, stories, room, schedule, faq, faqSchema, partners, pageHero, quoteFigure } from "./components.mjs";

const byId = Object.fromEntries(OFFERINGS.map((o) => [o.id, o]));
const preloadPhoto = (name, sizes, widths) =>
  `<link rel="preload" as="image" type="image/webp" imagesrcset="${widths.map((w) => `/images/p/${name}-${w}.webp ${w}w`).join(", ")}" imagesizes="${sizes}">`;

const teacher = () => `
<section class="teacher" aria-labelledby="teacher-title">
  <div class="wrap teacher-grid">
    <div class="arch">${photo("portrait", `${TEACHER}, founder of Sukh Space`, { sizes: "(min-width: 900px) 40vw, 88vw" })}</div>
    <div class="teacher-copy">
      <h2 id="teacher-title">Hello, I’m Pinki.</h2>
      <p class="teacher-lede">I’m passionate about guiding people toward strength, balance and inner calm.</p>
      <p>Through intentional movement, restorative breathwork and targeted maternal wellness, I help students, and especially expectant and new mothers, nurture their bodies, build resilience and feel fully supported through every stage of life.</p>
      <p>Whether you want to ground your everyday practice or navigate motherhood with confidence, I’m here to support your path.</p>
      <dl class="creds">
        <div><dt>Training</dt><dd>200-hour certified yoga trainer</dd></div>
        <div><dt>Specialism</dt><dd>Pre &amp; postnatal yoga</dd></div>
        <div><dt>Teaching</dt><dd>Dhanbad and live online</dd></div>
      </dl>
      <p class="signature">${TEACHER}</p>
      <a class="text-link" href="/about">More about Pinki</a>
    </div>
  </div>
</section>`;

const home = {
  key: "home",
  path: "/",
  hero: "dark",
  title: "Sukh Space | Prenatal Yoga, Breathwork & Women’s Health in Dhanbad & Online",
  description: "Creating space for your sukh through yoga, breathwork and wellness. Pre-natal, postpartum, PCOS and women’s health, men’s health and weight loss sessions with Pinki (Pankhuri), in Dhanbad and live online.",
  preload: preloadPhoto("garden", "(min-width: 900px) 40vw, 78vw", [480, 896]),
  schema: [faqSchema()],
  body: `
<section class="hero" aria-labelledby="hero-title">
  <p class="hero-word" aria-hidden="true">सुख</p>
  <div class="wrap hero-grid">
    <div class="hero-copy">
      <h1 id="hero-title">Creating space for your sukh</h1>
      <p class="lead">Through yoga, breathwork and wellness. Ancient yogic wisdom meets modern somatic practice, guided by Pinki in Dhanbad and online.</p>
      <div class="hero-actions">
        ${waButton(WA_DEFAULT, "Message Pinki on WhatsApp", "btn btn-haldi btn-large")}
        <a class="text-link light" href="#begin">Find the right session</a>
      </div>
      <ul class="hero-proof">
        <li>200-hour certified yoga trainer</li>
        <li>Pre &amp; postnatal specialist</li>
        <li>Live online across India</li>
      </ul>
    </div>
    <figure class="aperture" data-breath>
      <div class="rings" aria-hidden="true"><span></span><span></span><span></span></div>
      <div class="aperture-photo">${photo("garden", "Pinki leading an outdoor class in a green garden, students seated before her with palms joined", { sizes: "(min-width: 900px) 40vw, 78vw", eager: true, pos: "50% 30%" })}</div>
      <figcaption class="breath">
        <span class="breath-cue" aria-hidden="true"><span class="in">Breathe in</span><span class="out">Breathe out</span></span>
        <button type="button" class="breath-toggle" data-breath-toggle aria-pressed="false" aria-label="Pause the breathing animation">${icon("pause", "icon i-pause")}${icon("play", "icon i-play")}</button>
      </figcaption>
    </figure>
  </div>
</section>

<section class="meaning" aria-labelledby="meaning-title">
  <div class="wrap meaning-grid">
    <div class="etym" role="img" aria-label="Sukh, from su meaning good and kha meaning space">
      <div class="etym-part"><span class="deva">सु</span><span class="latin">su</span><span class="gloss">good</span></div>
      <span class="etym-plus" aria-hidden="true">+</span>
      <div class="etym-part"><span class="deva">ख</span><span class="latin">kha</span><span class="gloss">space</span></div>
    </div>
    <div class="meaning-copy">
      <h2 id="meaning-title">Sukh is, quite literally, good space.</h2>
      <p>In Sanskrit, <i>sukha</i> joins <i>su</i>, good, with <i>kha</i>, space: the smooth hub of a wheel that turns with ease. Modern life keeps our bodies in a perpetual state of high alert. Every practice here is about making room again, in the breath, in the body and in the day, so you can move beyond physical fitness into deeper rest, strength and calm.</p>
    </div>
  </div>
</section>

${composer()}

<section class="practices" aria-label="Practices">
  <div class="wrap practices-grid">
    <div class="practices-media">${photo("meditate", "Pinki seated cross-legged in meditation, eyes closed, hands resting in a mudra", { sizes: "(min-width: 900px) 38vw, 100vw", pos: "50% 35%" })}</div>
    ${practicesIndex()}
  </div>
</section>

${journey()}
${teacher()}
${room()}
${stories()}
${schedule()}
${faq()}
${partners()}
`,
};

const offerings = {
  key: "offerings",
  path: "/offerings",
  title: "Offerings | Prenatal, Postpartum, PCOS & Weight Loss Yoga | Sukh Space",
  description: "Women’s health, men’s health, pre-natal, postpartum recovery, weight loss, meditation and breathwork, chanting and weekend workshops with Sukh Space, in Dhanbad and online.",
  body: `
${pageHero({ title: "Offerings", lead: "Each session is held with care, from hormonal health to pregnancy, recovery, weight management, breath and ritual. Every one can be joined online or in Dhanbad.", image: { name: "prenatal-seated", alt: "A pregnant woman seated on a jute mat beside a birthing ball", pos: "50% 80%" } })}
<section class="offer-list">
  <div class="wrap">
    ${OFFERINGS.map((o) => `<article class="offer" id="${o.id}" aria-labelledby="${o.id}-t">
      ${doodle(o.icon, "doodle doodle-lg")}
      <div class="offer-copy">
        <h2 id="${o.id}-t">${o.name}</h2>
        <p class="offer-for">${o.forWhom}</p>
        <p>${o.body}</p>
        ${waButton(wa(o.ask), "Ask about this session", "btn btn-line")}
      </div>
    </article>`).join("\n    ")}
    <p class="health-note">Yoga complements medical care and never replaces it. Please consult your doctor before starting, especially during pregnancy, after birth, or if you are managing a health condition.</p>
  </div>
</section>
${journey()}
${composer({ title: "Not sure which one fits?", intro: "Tell us where you are. We’ll write the first message for you and Pinki will suggest a session." })}
`,
};

const about = {
  key: "about",
  path: "/about",
  title: "About Pinki (Pankhuri) | Pre & Postnatal Yoga Specialist | Sukh Space",
  description: "Meet Pinki (Pankhuri), 200-hour certified yoga trainer and pre and postnatal yoga specialist, and the heart behind Sukh Space in Dhanbad.",
  body: `
${pageHero({ title: "The heart behind Sukh Space", lead: "Pinki (Pankhuri) is a 200-hour certified yoga trainer and a pre and postnatal yoga specialist, teaching in Dhanbad and live online.", image: { name: "meditate", alt: "Pinki seated in meditation, eyes closed", pos: "50% 28%" } })}
${teacher().replace("Hello, I’m Pinki.</h2>", "Hello, I’m Pinki.</h2>").replace(/<a class="text-link" href="\/about">More about Pinki<\/a>/, waButton(wa("Hi Pinki, I'd love to practise with you. Could you tell me about your batches and fees?"), "Say hello to Pinki", "btn btn-haldi"))}
<section class="wide-photo" aria-label="Practice in the garden">
  ${photo("garden", "Pinki leading a class in a garden, students seated before her", { sizes: "100vw", pos: "50% 35%" })}
</section>
<section class="meaning">
  <div class="wrap meaning-grid">
    <div class="meaning-copy">
      <h2>Beyond fitness, into deep rest</h2>
      <p>Modern life keeps our bodies in a perpetual state of high alert. Sukh Space blends ancient yogic wisdom with modern somatic practices, so students can move beyond physical fitness into deeper healing, rest and resilience.</p>
    </div>
    <div class="meaning-copy">
      <h2>Held with care</h2>
      <p>Students describe the sessions as personal, patient and warm. Practices are adapted to where you are, whether that is the second trimester, the weeks after birth, or a long stretch of stress and poor sleep.</p>
    </div>
  </div>
</section>
<section class="stories">
  <div class="wrap quotes-two">
    ${quoteFigure(TESTIMONIALS.find((t) => t.name === "Kartika"))}
    ${quoteFigure(DHANBAD_TESTIMONIALS[0])}
  </div>
</section>
${partners()}
`,
};

const schedulePage = {
  key: "schedule",
  path: "/schedule",
  title: "Class Schedule | Morning & Evening Yoga Batches | Sukh Space Dhanbad",
  description: "Sukh Space batch timings: morning batches 8 AM to 12 PM three times a week, evening batches 5 PM to 7 PM, and private 1:1 sessions for pregnant women. Online and in Dhanbad.",
  body: `
${pageHero({ title: "Schedule", lead: "Weekly classes run online and offline, in morning and evening windows. Message Pinki to confirm batch days for the session that fits you.", image: { name: "community", alt: "The Sukh Space community gathered in Dhanbad", pos: "50% 45%" } })}
${schedule({ title: "Batch timings" })}
<section class="wide-photo short" aria-label="Pre-natal practice">
  ${photo("prenatal-wall", "A pregnant woman seated on a birthing ball, hand on her belly", { sizes: "100vw", pos: "50% 30%" })}
</section>
${faq(FAQ.filter((f, i) => [1, 2, 3].includes(i)), "About batches")}
`,
};

const testimonialsPage = {
  key: "testimonials",
  path: "/testimonials",
  title: "Client Stories | Sukh Space Prenatal & Wellness Yoga",
  description: "Words of gratitude from Sukh Space students in Dhanbad, Delhi, Mumbai, Bangalore, Hyderabad, Pune and Kolkata: pre-natal, post-natal, Yoga Nidra and everyday practice.",
  body: `
${pageHero({ title: "Stories of gratitude", lead: "From mothers preparing for birth to students finding calm after long days, in Dhanbad and across India.", image: { name: "garden", alt: "Pinki leading a class in a garden", pos: "50% 35%" } })}
<section class="stories">
  <div class="wrap">
    ${quoteFigure(TESTIMONIALS[0], "feature-quote")}
    <div class="quote-columns">
      ${TESTIMONIALS.slice(1).map((t) => quoteFigure(t)).join("\n      ")}
    </div>
  </div>
</section>
<section class="stories home-stories">
  <div class="wrap">
    <div class="section-head">
      <h2>Stories from home, in Dhanbad</h2>
      <p>For years, finding certified pre-natal and postnatal guidance in Dhanbad was hard. These students found it close to home.</p>
    </div>
    <div class="quotes-two">
      ${DHANBAD_TESTIMONIALS.map((t) => quoteFigure(t)).join("\n      ")}
    </div>
    <p class="fine">Individual experiences, shared with permission. Every body is different.</p>
  </div>
</section>
`,
};

const GALLERY = [
  ["garden", "Pinki leading an outdoor class in a garden"],
  ["online-1", "A screen full of students on a live Sukh Space class"],
  ["prenatal-wall", "Pre-natal practice on a birthing ball"],
  ["community", "The Sukh Space community gathered in Dhanbad"],
  ["online-2", "Students practising together on a live online class"],
  ["prenatal-ball", "Resting forward over a birthing ball"],
  ["online-3", "Students in a reclining pose on a live online class"],
  ["meditate", "Pinki seated in meditation"],
  ["online-4", "A live online class seen on a tablet"],
  ["prenatal-seated", "Seated pre-natal practice"],
  ["online-5", "Students joining a live online session"],
  ["online-6", "A smaller online batch in session"],
  ["prenatal-stretch", "A gentle seated side stretch"],
  ["online-7", "Students following Pinki on a live online class"],
  ["online-8", "A tablet on a stand showing a live online class"],
  ["portrait", "Pinki (Pankhuri), founder of Sukh Space"],
];

const gallery = {
  key: "gallery",
  path: "/gallery",
  title: "Gallery | Sukh Space Yoga in Dhanbad & Online",
  description: "Moments from Sukh Space classes, community gatherings and everyday practice, online and in Dhanbad.",
  body: `
${pageHero({ title: "Gallery", lead: "Classes, community and everyday practice, online and in Dhanbad. Tap any photo to see it larger." })}
<section class="gallery">
  <div class="wrap gallery-grid">
    ${GALLERY.map(([n, alt]) => `<a href="${photoSrc(n)}" data-lightbox>${photo(n, alt, { sizes: "(min-width: 1000px) 30vw, (min-width: 600px) 45vw, 100vw" })}</a>`).join("\n    ")}
  </div>
</section>
<dialog class="lightbox" data-lightbox-dialog aria-label="Photo">
  <figure tabindex="-1" autofocus>
    <img alt="">
    <figcaption data-lightbox-caption></figcaption>
  </figure>
  <div class="lightbox-bar">
    <button type="button" class="rail-btn light" data-lightbox-step="-1" aria-label="Previous photo">${icon("chevron", "icon chev-prev")}</button>
    <button type="button" class="rail-btn light" data-lightbox-step="1" aria-label="Next photo">${icon("chevron", "icon chev-next")}</button>
    <button type="button" class="rail-btn light" data-lightbox-close aria-label="Close photo">${icon("close")}</button>
  </div>
</dialog>
`,
};

const diet = {
  key: "diet",
  path: "/diet",
  title: "Customised Diet Plans | ₹3,500 a Month | Sukh Space",
  description: "Customised vegetarian and non-vegetarian diet plans from Sukh Space, delivered within 5 days of registration. Monthly ₹3,500 or 3 months ₹9,999 with progress tracking and check-ins.",
  body: `
${pageHero({ title: "Customised diet plans", lead: "An optional add-on to your practice. Your plan is written for you and delivered within 5 days of registration." })}
<section class="pricing">
  <div class="wrap price-grid">
    <article class="price">
      <h2>Monthly plan</h2>
      <p class="amount">₹3,500</p>
      <p>Ideal for personalised nutrition setup, custom meal mapping and goal alignment.</p>
      ${waButton(wa("Hi Pinki, I'm interested in the monthly diet plan (₹3,500). My main goal is ___."), "Ask about the monthly plan", "btn btn-line")}
    </article>
    <article class="price featured">
      <p class="badge">Best value</p>
      <h2>3-month plan</h2>
      <p class="amount">₹9,999</p>
      <p>Includes continuous progress tracking, regular check-ins and closer interaction for better results.</p>
      ${waButton(wa("Hi Pinki, I'm interested in the 3-month diet plan (₹9,999). My main goal is ___."), "Ask about the 3-month plan")}
    </article>
  </div>
</section>
<section class="diet-detail">
  <div class="wrap diet-grid">
    <div>
      <h2>What to expect</h2>
      <dl class="expect">
        <div><dt>Tailored to you</dt><dd>Meal plans built around your health goals, daily routine and food preferences, with vegetarian and non-vegetarian options.</dd></div>
        <div><dt>Sustainable and wholesome</dt><dd>Easy-to-prepare meals, seasonal and nourishing foods, and eating habits you can keep for the long term.</dd></div>
        <div><dt>Built around your goals</dt><dd>Designed to support weight management, glowing skin, better digestion and overall wellness.</dd></div>
        <div><dt>Regular check-ins</dt><dd>On the 3-month plan, to track progress and refine your targets.</dd></div>
        <div><dt>Bonus guidance</dt><dd>Mindful eating, healthy habit building and small changes to your daily routine.</dd></div>
      </dl>
    </div>
    <div class="arch">${photo("diet", "A wholesome vegetarian bowl", { sizes: "(min-width: 900px) 36vw, 88vw" })}</div>
  </div>
</section>
`,
  cta: { title: "Pair your practice with a plan.", text: "Tell Pinki your goal and preferences, and she’ll explain how the plan works with your sessions.", href: wa(DIET_ASK), label: "Ask about diet plans" },
};

const contact = {
  key: "contact",
  path: "/contact",
  title: "Contact Sukh Space | WhatsApp Pinki | Dhanbad & Online Yoga",
  description: "Message Pinki on WhatsApp at +91 83403 34846 for batch timings and fees, or email sukhspace5@gmail.com. Online yoga across India and offline sessions in Dhanbad, Jharkhand.",
  body: `
${pageHero({ title: "Begin a conversation", lead: "The quickest way to reach Pinki is WhatsApp. Choose what fits below and your first message is written for you.", image: { name: "portrait", alt: "Pinki (Pankhuri), founder of Sukh Space", pos: "50% 18%" } })}
${composer({ title: "Write your first message", intro: "A few taps, and Pinki will know how to help when she replies." })}
<section class="contact-detail">
  <div class="wrap contact-grid">
    <div>
      <h2>Other ways to reach us</h2>
      <ul class="contact-list">
        <li>${icon("whatsapp")}<div><strong>WhatsApp</strong><a href="${WA_DEFAULT}" target="_blank" rel="noopener" data-wa>${PHONE_DISPLAY}</a></div></li>
        <li>${icon("phone")}<div><strong>Phone</strong><a href="tel:+${PHONE}">${PHONE_DISPLAY}</a></div></li>
        <li>${icon("mail")}<div><strong>Email</strong><a href="mailto:${EMAIL}">${EMAIL}</a></div></li>
        <li>${icon("instagram")}<div><strong>Instagram</strong><a href="${INSTAGRAM}" target="_blank" rel="noopener">@sukhspace_</a></div></li>
        <li>${icon("pin")}<div><strong>Where</strong><span>Offline sessions in Dhanbad, Jharkhand. Online classes across India.</span></div></li>
      </ul>
    </div>
    <div class="arch">${photo("garden", "Pinki guiding students in a garden class", { sizes: "(min-width: 900px) 36vw, 88vw" })}</div>
  </div>
</section>
`,
  cta: { title: "Prefer to just say hello?", text: "Send a short message and Pinki will take it from there." },
};

const terms = {
  key: "terms",
  path: "/terms",
  title: "Terms & Refund Policy | Sukh Space",
  description: "Sukh Space terms and conditions, health disclaimer, and refund and cancellation policy.",
  body: `
${pageHero({ title: "Terms &amp; refunds" })}
<section class="legal">
  <div class="wrap legal-body">
    <h2>Terms &amp; conditions</h2>
    <h3>1. Introduction</h3>
    <p>Welcome to Sukh Space. By accessing or using our website and services, you agree to be bound by these Terms &amp; Conditions. Please read them carefully.</p>
    <h3>2. Services</h3>
    <p>Sukh Space provides online &amp; offline yoga classes, wellness programs, and related services focused on individuals’ health, fertility, prenatal, and postnatal wellness. Private 1:1 sessions are available for pregnant women only.</p>
    <h3>3. Eligibility</h3>
    <p>You must be at least 18 years of age to use our services. By using the services, you represent that you meet this requirement.</p>
    <h3>4. Health disclaimer</h3>
    <p>Our yoga classes and wellness programs are not a substitute for professional medical advice, diagnosis, or treatment. Always consult your physician or qualified health provider before starting any new exercise or wellness program, especially during pregnancy or postpartum.</p>
    <h3>5. Payments &amp; refunds</h3>
    <p>Please refer to our Refund &amp; Cancellation Policy below for details on payments, subscriptions, and refunds.</p>
    <h3>6. Intellectual property</h3>
    <p>All content on this website, including videos, images, text, and branding, is the property of Sukh Space and is protected under Indian copyright law. Unauthorized reproduction or distribution is prohibited.</p>
    <h3>7. User conduct</h3>
    <p>You agree not to misuse the platform, share login credentials, redistribute content, or engage in any activity that violates applicable Indian laws.</p>
    <h3>8. Limitation of liability</h3>
    <p>Sukh Space shall not be liable for any injury, health issue, or damage arising from participation in yoga classes or following any content on this platform.</p>
    <h3>9. Contact</h3>
    <p>For questions regarding these terms, please use our <a href="/contact">contact page</a>.</p>
    <h2>Refund &amp; cancellation policy</h2>
    <h3>1. Subscription cancellation</h3>
    <p>You may cancel your subscription at any time. Upon cancellation, you will retain access to your plan until the end of the current billing cycle.</p>
    <h3>2. Refund eligibility</h3>
    <p>A refund can be initiated only if you have attended 1 live session. If more than 1 session has been attended, no refund will be initiated.</p>
    <h3>3. Non-refundable items</h3>
    <p>One-on-one consultation fees, workshop fees, and partially used subscriptions are non-refundable.</p>
  </div>
</section>
`,
};

const notFound = {
  key: "404",
  path: "/404",
  title: "Page not found | Sukh Space",
  description: "This page isn’t here.",
  body: `
${pageHero({ title: "This page isn’t here.", lead: "Take a breath. You can head back home, or message Pinki if you were looking for a class." })}
<section class="legal"><div class="wrap"><a class="btn btn-line" href="/">Back to the home page</a></div></section>
`,
};

export const PAGES = [
  ["index.html", home],
  ["offerings.html", offerings],
  ["about.html", about],
  ["schedule.html", schedulePage],
  ["testimonials.html", testimonialsPage],
  ["gallery.html", gallery],
  ["diet.html", diet],
  ["contact.html", contact],
  ["terms.html", terms],
  ["404.html", notFound],
];
