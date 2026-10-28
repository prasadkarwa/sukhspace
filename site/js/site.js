// Sukh Space. Generated pages work without this file; it adds the message
// composer, the menu, the live schedule marker, the mobile dock and the lightbox.

// Message composer: builds the first WhatsApp message from the visitor's choices.
document.querySelectorAll("[data-composer]").forEach((root) => {
  const data = JSON.parse(root.closest("section").querySelector("[data-composer-data]").textContent);
  const preview = root.querySelector("[data-preview]");
  const send = root.querySelector("[data-send]");
  const trimesterSet = root.querySelector("[data-trimester]");
  const nameInput = root.querySelector("[data-name]");
  const suggestWrap = root.querySelector("[data-suggest-wrap]");
  const suggestList = root.querySelector("[data-suggest]");
  const { phone, tag } = root.dataset;

  const value = (name) => root.querySelector(`input[name="${name}"]:checked`)?.value;

  const compose = () => {
    const stage = data.stages.find((s) => s.id === value("stage"));
    const trimester = value("trimester");
    const mode = value("mode");
    const name = nameInput.value.trim().replace(/\s+/g, " ");
    const parts = ["Hi Pinki,"];
    if (name) parts.push(`I'm ${name}.`);
    if (!stage) parts.push("I found Sukh Space online and I'd like to know more about your sessions.");
    else if (stage.id === "pregnant" && trimester) parts.push(`I'm pregnant, in my ${data.trimesters[trimester]}, and I'd like to join pre-natal sessions.`);
    else parts.push(stage.line);
    if (mode) parts.push(data.modes[mode]);
    parts.push(stage?.id === "pregnant"
      ? "Could you share batch timings, fees, and whether a 1:1 session is possible?"
      : "Could you share batch timings and fees?");
    return { text: parts.join(" "), stage };
  };

  const update = (animate) => {
    const { text, stage } = compose();
    preview.textContent = text;
    send.href = `https://wa.me/${phone}?text=${encodeURIComponent(`${text} ${tag}`)}`;
    trimesterSet.hidden = stage?.id !== "pregnant";
    suggestWrap.hidden = !stage;
    if (stage) {
      suggestList.replaceChildren(...stage.suggest.map((s) => {
        const li = document.createElement("li");
        const a = document.createElement("a");
        a.href = `/offerings#${s.id}`;
        a.textContent = s.name;
        li.append(a);
        return li;
      }));
    }
    if (animate) {
      preview.classList.remove("pop");
      void preview.offsetWidth;
      preview.classList.add("pop");
    }
  };

  root.addEventListener("change", () => update(true));
  nameInput.addEventListener("input", () => update(false));
  update(false);
});

// Hero breathing animation can be paused.
document.querySelectorAll("[data-breath-toggle]").forEach((btn) => {
  const fig = btn.closest("[data-breath]");
  btn.addEventListener("click", () => {
    const paused = fig.classList.toggle("is-paused");
    btn.setAttribute("aria-pressed", String(paused));
    btn.setAttribute("aria-label", paused ? "Resume the breathing animation" : "Pause the breathing animation");
  });
});

// Menu
const menu = document.getElementById("menu");
const menuOpen = document.querySelector("[data-menu-open]");
if (menu && menuOpen) {
  menuOpen.addEventListener("click", () => {
    menu.showModal();
    menuOpen.setAttribute("aria-expanded", "true");
  });
  menu.addEventListener("close", () => menuOpen.setAttribute("aria-expanded", "false"));
  menu.querySelector("[data-menu-close]").addEventListener("click", () => menu.close());
  menu.querySelectorAll("a").forEach((a) => a.addEventListener("click", () => menu.close()));
}

// Schedule: mark the current time in Dhanbad on the day track.
document.querySelectorAll("[data-day]").forEach((day) => {
  const marker = day.querySelector("[data-now]");
  const status = day.querySelector("[data-now-text]");
  const tick = () => {
    const now = new Date();
    const parts = Object.fromEntries(
      new Intl.DateTimeFormat("en-GB", { timeZone: "Asia/Kolkata", hour: "numeric", minute: "numeric", hourCycle: "h23" })
        .formatToParts(now).map((p) => [p.type, p.value]),
    );
    const t = Number(parts.hour) + Number(parts.minute) / 60;
    const clock = new Intl.DateTimeFormat("en-IN", { timeZone: "Asia/Kolkata", hour: "numeric", minute: "2-digit", hour12: true })
      .format(now).toUpperCase();
    marker.hidden = t < 6 || t > 21;
    marker.style.setProperty("--at", `${((t - 6) / 15) * 100}%`);
    let where;
    if (t >= 8 && t < 12) where = "inside the morning batch window.";
    else if (t >= 17 && t < 19) where = "inside the evening batch window.";
    else if (t < 8) where = "morning batches start at 8 AM.";
    else if (t < 17) where = "evening batches start at 5 PM.";
    else where = "the next morning window opens at 8 AM.";
    status.textContent = `It’s ${clock} in Dhanbad, ${where}`;
  };
  tick();
  setInterval(tick, 60000);
});

// Mobile dock: show past the first screen, but step aside wherever the page
// already offers its own WhatsApp action (the composer, the closing call).
const dock = document.querySelector("[data-dock]");
if (dock) {
  const covering = new Set();
  const sync = () => dock.classList.toggle("is-shown", window.scrollY > window.innerHeight * 0.7 && covering.size === 0);
  if ("IntersectionObserver" in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => (e.isIntersecting ? covering.add(e.target) : covering.delete(e.target)));
      sync();
    });
    document.querySelectorAll("[data-dock-hide]").forEach((el) => io.observe(el));
  }
  window.addEventListener("scroll", sync, { passive: true });
  sync();
}

// Horizontal rails: step buttons, and edge fades only where there is more to see.
document.querySelectorAll("[data-rail]").forEach((rail) => {
  const buttons = document.querySelectorAll(`[aria-controls="${rail.id}"]`);
  const step = () => {
    const item = rail.children[0];
    const gap = parseFloat(getComputedStyle(rail).columnGap) || 0;
    return item ? item.getBoundingClientRect().width + gap : rail.clientWidth * 0.8;
  };
  const sync = () => {
    const max = rail.scrollWidth - rail.clientWidth;
    const scrollable = max > 2;
    rail.classList.toggle("can-prev", scrollable && rail.scrollLeft > 2);
    rail.classList.toggle("can-next", scrollable && rail.scrollLeft < max - 2);
    buttons.forEach((b) => {
      b.disabled = !scrollable || (b.dataset.dir === "-1" ? rail.scrollLeft <= 2 : rail.scrollLeft >= max - 2);
    });
  };
  buttons.forEach((b) => b.addEventListener("click", () => rail.scrollBy({ left: step() * Number(b.dataset.dir), behavior: "smooth" })));
  let frame;
  rail.addEventListener("scroll", () => { cancelAnimationFrame(frame); frame = requestAnimationFrame(sync); }, { passive: true });
  window.addEventListener("resize", sync);
  sync();
});

// Gallery lightbox, with previous/next and arrow keys.
const lightbox = document.querySelector("[data-lightbox-dialog]");
if (lightbox) {
  const img = lightbox.querySelector("img");
  const caption = lightbox.querySelector("[data-lightbox-caption]");
  const links = [...document.querySelectorAll("[data-lightbox]")];
  let index = 0;
  const show = (i) => {
    index = (i + links.length) % links.length;
    const link = links[index];
    img.src = link.getAttribute("href");
    img.alt = link.querySelector("img")?.alt || "";
    caption.textContent = `${img.alt} (${index + 1} of ${links.length})`;
  };
  links.forEach((link, i) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      show(i);
      lightbox.showModal();
    });
  });
  lightbox.querySelectorAll("[data-lightbox-step]").forEach((b) => b.addEventListener("click", () => show(index + Number(b.dataset.lightboxStep))));
  lightbox.addEventListener("keydown", (e) => {
    if (e.key === "ArrowRight") show(index + 1);
    if (e.key === "ArrowLeft") show(index - 1);
  });
  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox || e.target.closest("[data-lightbox-close]")) lightbox.close();
  });
}
