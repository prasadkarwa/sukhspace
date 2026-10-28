// Sections shared by more than one page.
import { OFFERINGS, STAGES, TRIMESTERS, MODES, TESTIMONIALS, CITIES, FAQ, TEACHER, DIET_ASK, wa, WA_DEFAULT, SOURCE_TAG, PHONE } from "./content.mjs";
import { photo, waButton } from "./layout.mjs";
import { doodle, icon } from "./icons.mjs";

const byId = Object.fromEntries(OFFERINGS.map((o) => [o.id, o]));

const chips = (name, items, { checked } = {}) =>
  items.map((it) => `<label class="chip"><input type="radio" name="${name}" value="${it.id}"${it.id === checked ? " checked" : ""}><span>${it.label}</span></label>`).join("");

export const composer = ({ title = "Where are you right now?", intro = "Pick what fits. We’ll write your first message, so Pinki knows exactly how to help." } = {}) => `
<section class="begin" id="begin" aria-labelledby="begin-title" data-dock-hide>
  <div class="wrap">
    <div class="begin-head">
      <h2 id="begin-title">${title}</h2>
      <p>${intro}</p>
    </div>
    <div class="composer" data-composer data-phone="${PHONE}" data-tag="${SOURCE_TAG}">
      <div class="composer-choices">
        <fieldset>
          <legend>What brings you to Sukh Space?</legend>
          <div class="chips">${chips("stage", STAGES)}</div>
        </fieldset>
        <fieldset data-trimester hidden>
          <legend>Which trimester are you in?</legend>
          <div class="chips">${chips("trimester", TRIMESTERS)}</div>
        </fieldset>
        <fieldset>
          <legend>How would you like to practise?</legend>
          <div class="chips">${chips("mode", MODES)}</div>
        </fieldset>
        <div class="field">
          <label for="composer-name">Your first name <span>optional</span></label>
          <input id="composer-name" type="text" autocomplete="given-name" maxlength="40" data-name>
        </div>
      </div>
      <div class="composer-preview">
        <div class="chat">
          <div class="chat-head">
            <img src="/images/p/portrait-480.webp" alt="" width="40" height="40" loading="lazy">
            <div><strong>${TEACHER}</strong><span>Sukh Space on WhatsApp</span></div>
          </div>
          <div class="chat-body">
            <p class="bubble" data-preview aria-live="polite">Hi Pinki, I found Sukh Space online and I'd like to know more about your sessions. Could you share batch timings and fees?</p>
          </div>
          <div class="suggest" data-suggest-wrap hidden>
            <h3>Sessions that may suit you</h3>
            <ul data-suggest></ul>
          </div>
        </div>
        ${waButton(WA_DEFAULT, "Send this on WhatsApp", "btn btn-primary btn-large btn-block").replace("data-wa", "data-wa data-send")}
        <p class="fine">Opens WhatsApp with this message ready. You can change it before you press send.</p>
      </div>
    </div>
  </div>
  <script type="application/json" data-composer-data>${JSON.stringify({
    stages: STAGES.map(({ id, line, suggest }) => ({ id, line, suggest: suggest.map((s) => ({ id: s, name: byId[s].name })) })),
    trimesters: Object.fromEntries(TRIMESTERS.map((t) => [t.id, t.label.toLowerCase()])),
    modes: Object.fromEntries(MODES.map((m) => [m.id, m.line])),
  })}</script>
</section>`;

export const practicesIndex = ({ heading = "h2", title = "Practices for every stage", lead = "From hormonal health to pregnancy, recovery, weight and rest. Tap a practice to see who it’s for." } = {}) => `
<div class="practices-copy">
  <${heading}>${title}</${heading}>
  <p class="section-lead">${lead}</p>
  <ul class="index">
    ${OFFERINGS.map((o) => `<li id="${o.id}">
      <details>
        <summary>${doodle(o.icon)}<span class="index-text"><span class="index-name">${o.name}</span><span class="index-for">${o.forWhom}</span></span>${icon("chevron", "icon chev")}</summary>
        <div class="index-body">
          <p>${o.body}</p>
          ${waButton(wa(o.ask), "Ask about this session", "btn btn-line")}
        </div>
      </details>
    </li>`).join("\n    ")}
    <li class="index-addon">
      <a href="/diet">${doodle("diet")}<span class="index-text"><span class="index-name">Customised diet plans</span><span class="index-for">An optional add-on, from ₹3,500 a month</span></span></a>
    </li>
  </ul>
</div>`;

export const journey = () => `
<section class="journey" aria-labelledby="journey-title">
  <div class="wrap">
    <div class="journey-head">
      <h2 id="journey-title">From the first trimester to the fourth</h2>
      <p>Pinki is a certified pre and postnatal yoga specialist, and pregnant women are the only students offered private 1:1 sessions. Here is how the practice changes as you do.</p>
    </div>
  </div>
  <ol class="journey-track" id="journey-rail" data-rail tabindex="0" aria-label="Pregnancy and postpartum practice, in order">
    <li>
      <div class="journey-photo">${photo("prenatal-ball", "A pregnant woman resting forward over a blue birthing ball", { sizes: "(min-width: 1100px) 22vw, 72vw", pos: "40% 78%" })}</div>
      <h3>Through each trimester</h3>
      <p>Safe, nurturing yoga matched to the weeks you’re in: pelvic strength, hip mobility and lower-back care.</p>
    </li>
    <li>
      <div class="journey-photo">${photo("prenatal-seated", "A pregnant woman seated on a jute mat beside a birthing ball", { sizes: "(min-width: 1100px) 22vw, 72vw", pos: "50% 82%" })}</div>
      <h3>Breath, mudras and chanting</h3>
      <p>Pre-natal breathing, mudras and chanting designed for the wellbeing of mother and child.</p>
    </li>
    <li>
      <div class="journey-photo">${photo("prenatal-stretch", "A pregnant woman in a gentle seated side stretch", { sizes: "(min-width: 1100px) 22vw, 72vw", pos: "50% 84%" })}</div>
      <h3>Preparing for birth</h3>
      <p>Labour visualisation and Yoga Nidra in the third trimester, so you meet birth calm and prepared.</p>
    </li>
    <li class="journey-quote">
      <blockquote><p>“The post-natal recovery program helped me regain my physical strength and emotional balance after delivery.”</p><footer>Ritu V., Pune</footer></blockquote>
      <h3>The fourth trimester</h3>
      <p>Postpartum recovery for the stress and pain that often go unheard, rebuilding your strength gently.</p>
    </li>
  </ol>
  <div class="wrap journey-nav">
    <div class="rail-nav" data-rail-nav="journey-rail">
      <button type="button" class="rail-btn" data-dir="-1" aria-controls="journey-rail" aria-label="Previous stage">${icon("chevron", "icon chev-prev")}</button>
      <button type="button" class="rail-btn" data-dir="1" aria-controls="journey-rail" aria-label="Next stage">${icon("chevron", "icon chev-next")}</button>
    </div>
  </div>
  <div class="wrap journey-cta">
    ${waButton(wa(byId.prenatal.ask), "Ask about pre-natal sessions")}
    <p class="fine">Please check with your doctor before you begin, and share anything they’ve flagged with Pinki.</p>
  </div>
</section>`;

export const quoteFigure = (t, cls = "quote") => `<figure class="${cls}">
  <blockquote><p>${t.quote}</p></blockquote>
  <figcaption><strong>${t.name}, ${t.place}</strong><span>${t.about}</span></figcaption>
</figure>`;

export const stories = () => {
  const [feature, ...rest] = TESTIMONIALS;
  return `
<section class="stories" aria-labelledby="stories-title">
  <div class="wrap">
    <h2 id="stories-title" class="sr">Stories from students</h2>
    ${quoteFigure(feature, "feature-quote")}
  </div>
  <div class="quote-rail" id="stories-rail" data-rail tabindex="0" role="region" aria-label="More stories from students">
    ${rest.map((t) => quoteFigure(t)).join("\n    ")}
  </div>
  <div class="wrap stories-foot">
    <a class="text-link" href="/testimonials">Read every story</a>
    <div class="rail-nav" data-rail-nav="stories-rail">
      <button type="button" class="rail-btn" data-dir="-1" aria-controls="stories-rail" aria-label="Previous story">${icon("chevron", "icon chev-prev")}</button>
      <button type="button" class="rail-btn" data-dir="1" aria-controls="stories-rail" aria-label="Next story">${icon("chevron", "icon chev-next")}</button>
    </div>
  </div>
</section>`;
};

export const room = () => `
<section class="room" aria-labelledby="room-title">
  <div class="wrap room-head">
    <h2 id="room-title">A class that fits in your living room</h2>
    <div>
      <p>Most sessions run live online. You practise at home on your own mat while Pinki watches, guides and corrects in real time. Students join from</p>
      <ul class="cities">${CITIES.map((c) => `<li>${c}</li>`).join("")}</ul>
    </div>
  </div>
  <div class="room-wall">
    ${[1, 2, 3, 4, 5, 6, 7, 8].map((n) => `<figure class="tile tile-${n}">${photo(`online-${n}`, "A screen full of Sukh Space students practising together on a live online class", { sizes: "(min-width: 900px) 25vw, 50vw" })}</figure>`).join("\n    ")}
  </div>
  <div class="wrap room-local">
    <div class="room-local-photo">${photo("community", "A group of women from the Sukh Space community gathered together in Dhanbad", { sizes: "(min-width: 900px) 40vw, 100vw" })}</div>
    <div>
      <h3>And in Dhanbad, we gather in person.</h3>
      <p>Offline batches and weekend workshops bring the community into one room, for breathwork, meditation, labour visualisation and more.</p>
      ${waButton(wa("Hi Pinki, I live in Dhanbad and I'd like to join an in-person batch. Could you share timings and fees?"), "Ask about Dhanbad batches", "btn btn-line-light")}
    </div>
  </div>
</section>`;

export const schedule = ({ heading = "h2", title = "When we practise" } = {}) => `
<section class="schedule" aria-labelledby="schedule-title">
  <div class="wrap">
    <div class="schedule-head">
      <${heading} id="schedule-title">${title}</${heading}>
      <p>Batches run online and in Dhanbad. All times are India Standard Time.</p>
    </div>
    <figure class="day" data-day>
      <div class="day-track" aria-hidden="true">
        <span class="day-band morning" style="--from:8;--to:12"><span>Morning</span></span>
        <span class="day-band evening" style="--from:17;--to:19"><span>Evening</span></span>
        <span class="day-now" data-now hidden></span>
      </div>
      <div class="day-hours" aria-hidden="true"><span>6 AM</span><span>9 AM</span><span>12 PM</span><span>3 PM</span><span>6 PM</span><span>9 PM</span></div>
      <figcaption class="day-status" data-now-text>Morning batches run 8 AM to 12 PM, evening batches 5 PM to 7 PM.</figcaption>
    </figure>
    <ul class="slots">
      <li>${doodle("morning")}<div><h3>Morning batches</h3><p class="slot-time">8:00 AM to 12:00 PM</p><p>Three times a week, to ground the day before it begins.</p></div></li>
      <li>${doodle("evening")}<div><h3>Evening batches</h3><p class="slot-time">5:00 PM to 7:00 PM</p><p>To release the day, restore energy and settle the nervous system.</p></div></li>
      <li>${doodle("private")}<div><h3>Private 1:1</h3><p class="slot-time">By appointment</p><p>Reserved for pregnant women, so the practice follows your pregnancy week by week.</p></div></li>
    </ul>
    <div class="schedule-cta">
      ${waButton(wa("Hi Pinki, which batch timing would suit me? I'm usually free in the ___ (morning / evening)."), "Ask which batch suits you")}
    </div>
  </div>
</section>`;

export const faq = (items = FAQ, title = "Questions people ask first") => `
<section class="faq" aria-labelledby="faq-title">
  <div class="wrap faq-grid">
    <div class="faq-head">
      <h2 id="faq-title">${title}</h2>
      <p>Something else on your mind? Ask Pinki directly, she’s happy to talk it through.</p>
      ${waButton(wa("Hi Pinki, I have a question before I join:"), "Ask a question", "btn btn-line")}
    </div>
    <div class="faq-list">
      ${items.map((f) => `<details><summary>${f.q}${icon("chevron", "icon chev")}</summary><p>${f.a}</p></details>`).join("\n      ")}
    </div>
  </div>
</section>`;

export const faqSchema = (items = FAQ) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: items.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
});

export const partners = () => `
<section class="partners">
  <div class="wrap partners-row">
    <p><strong>For workplaces, wellness spaces, healthcare providers and retreat leaders.</strong> Pinki designs bespoke sessions and wellness experiences for groups.</p>
    ${waButton(wa("Hi Pinki, I'd like to discuss a partnership or group sessions for our organisation."), "Talk about a partnership", "btn btn-line")}
  </div>
</section>`;

export const pageHero = ({ title, lead, kicker = "", image }) => `
<section class="page-hero${image ? " has-photo" : ""}">
  <div class="wrap page-hero-grid">
    <div>
      ${kicker ? `<p class="kicker">${kicker}</p>` : ""}
      <h1>${title}</h1>
      ${lead ? `<p class="lead">${lead}</p>` : ""}
    </div>
    ${image ? `<div class="page-hero-photo"><div class="rings" aria-hidden="true"><span></span><span></span></div>${photo(image.name, image.alt, { sizes: "(min-width: 760px) 30vw, 160px", eager: true, pos: image.pos })}</div>` : ""}
  </div>
</section>`;

export { DIET_ASK };
