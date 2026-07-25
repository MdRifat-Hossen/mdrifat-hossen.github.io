/* ==========================================================================
   Rendering, search/filter, and theme logic.
   Resource DATA lives in resources.js — nothing here should hardcode
   resource content, so the data file can be edited independently.
   ========================================================================== */

const SECTIONS = [
  {
    id: "getting-started",
    stageLabel: "Stage 1",
    title: "Getting Started",
    icon: "①",
    blurb: "Work out whether graduate study is right for you, and start narrowing down where and what to study.",
    intro: "Before you write a single application, it helps to understand your own motivations and get a feel for the landscape — fields, formats, countries, and costs. This stage is about orientation, not commitment.",
    recommendedPath: ["Reflect on your interests", "Take a free course", "Shortlist programs", "Check the cost of living", "Compare your shortlist"],
    tips: [
      "Treat the personality tests and guides as a starting conversation with yourself, not a verdict — use them to generate questions, not final answers.",
      "Free OpenLearn-style courses are a low-risk way to test whether postgraduate study suits your working style before you commit time to applications.",
      "Cost-of-living comparisons matter as much as tuition — factor a program's city into your shortlist early, not after you're admitted."
    ]
  },
  {
    id: "application-prep",
    stageLabel: "Stage 2–4",
    title: "Preparing Your Application",
    icon: "②",
    blurb: "Standardized tests, statements of purpose, and interviews — the core components most graduate applications share.",
    intro: "Most graduate applications share a common skeleton: a qualifying exam or English test, a written statement, and often an interview. Tackling each piece early gives you room to revise.",
    recommendedPath: ["Confirm which tests you need", "Register & prepare (GRE/GMAT/IELTS/TOEFL)", "Draft your SOP", "Get feedback and revise", "Prepare for interviews"],
    tips: [
      "Register for GRE/GMAT/IELTS/TOEFL earlier than you think you need to — official test dates fill up, especially close to application deadlines.",
      "Read a program's own SOP guidance (several official ones are linked below) before drafting — expectations differ noticeably by university and department.",
      "Practice interviews out loud, not just in your head — the AI mock-interview tools below are a low-stakes way to rehearse before the real thing."
    ]
  },
  {
    id: "funding",
    stageLabel: "Stage 5",
    title: "Funding & Scholarships",
    icon: "③",
    blurb: "Reduce upfront costs, understand your aid options, and find scholarships worth applying for.",
    intro: "Funding rarely comes from one source. Fee waivers reduce the cost of applying; scholarships and assistantships fund the degree itself. Start this search in parallel with your applications, not after.",
    recommendedPath: ["Request fee waivers where eligible", "Understand your aid options", "Search scholarship databases", "Draft a financial aid letter if needed"],
    tips: [
      "Apply for fee waivers before you pay any application fee — most institutions won't refund it retroactively.",
      "Search scholarship databases by both country of study and your own nationality — many scholarships are nationality-specific.",
      "A financial aid appeal letter is strongest when it's specific: cite an actual competing offer or a documented change in circumstances."
    ]
  },
  {
    id: "research",
    stageLabel: "Stage 6",
    title: "Research Proposal & Methodology",
    icon: "④",
    blurb: "Move from a general interest to a defined research question, proposal, and methodology.",
    intro: "A strong research proposal narrows a broad interest into a specific, answerable question, and commits to a method for answering it. This is often the single most scrutinized document in a PhD or research-masters application.",
    recommendedPath: ["Identify your research interest", "Survey existing literature", "Find the gap", "Draft your research question", "Choose a methodology", "Write the proposal"],
    tips: [
      "A good research proposal is judged on the clarity of the question and the fit of the method — not on how ambitious the topic sounds.",
      "Read a few recent proposals or theses from your target department if you can find them; conventions vary by field.",
      "Methodology is a choice you defend, not a checkbox — be ready to explain why your method suits your specific question."
    ]
  },
  {
    id: "publishing",
    stageLabel: "Stage 7",
    title: "Publishing Your Research",
    icon: "⑤",
    blurb: "Share your findings through preprints, open-access journals, and conferences.",
    intro: "Publishing turns research into a contribution others can build on. Where you publish, and how you fund travel to present it, are worth planning for early rather than scrambling at the end of a project.",
    recommendedPath: ["Consider a preprint", "Choose a suitable open-access venue", "Prepare your manuscript", "Look into travel grants for conferences"],
    tips: [
      "A preprint (e.g. via arXiv) can establish priority and invite feedback before formal peer review — check your field's norms first.",
      "Weigh a journal's scope and audience fit as heavily as its prestige — a well-matched venue reaches the readers who'll actually use your work.",
      "Conference travel grants (like ISA's) are often under-applied-for relative to their availability — it's worth checking even if the odds feel uncertain."
    ]
  }
];

// Stage 8 has no workbook resources yet — represented honestly as upcoming.
const FINAL_STAGE = {
  stageLabel: "Stage 8",
  title: "Building a Research Career",
  blurb: "Academic networking, ORCID, career pathways, and long-term research identity — resources for this stage are still being curated."
};

const CATEGORY_LIST = ["Explore", "Application", "Writing", "Funding", "Research", "Publication"];

function bySection(id) {
  return RESOURCES.filter(r => r.section === id);
}

function bySubsection(items) {
  const map = new Map();
  items.forEach(r => {
    if (!map.has(r.subsection)) map.set(r.subsection, []);
    map.get(r.subsection).push(r);
  });
  return map;
}

function cardHTML(r) {
  const cats = r.category.map(c => `<span>${c}</span>`).join("");
  return `
  <article class="res-card" data-title="${r.title.toLowerCase()}" data-provider="${r.provider.toLowerCase()}"
       data-desc="${r.description.toLowerCase()}" data-cats="${r.category.join(" ").toLowerCase()}"
       data-cats-list="${r.category.join(",")}">
    <div class="card-top">
      <span class="call-no">${r.id}</span>
      <span class="type-tag ${r.type}">${r.type}</span>
    </div>
    <h4>${r.title}</h4>
    <div class="provider">${r.provider}</div>
    <p class="desc">${r.description}</p>
    <div class="cats">${cats}</div>
    <a class="visit" href="${r.url}" target="_blank" rel="noopener noreferrer">Visit resource →</a>
  </article>`;
}

function renderHeroStageCards() {
  const grid = document.getElementById("stage-grid");
  grid.innerHTML = SECTIONS.map((s, i) => `
    <a class="stage-card" href="#${s.id}">
      <span class="num">${s.icon} ${s.stageLabel}</span>
      <h3>${s.title}</h3>
      <p>${s.blurb}</p>
      <span class="go">Explore resources →</span>
    </a>`).join("") + `
    <div class="stage-card" style="opacity:.7">
      <span class="num">⑥ ${FINAL_STAGE.stageLabel}</span>
      <h3>${FINAL_STAGE.title}</h3>
      <p>${FINAL_STAGE.blurb}</p>
    </div>`;
}

function getCheckedStages() {
  try {
    return JSON.parse(localStorage.getItem("herp-checked-stages") || "[]");
  } catch (e) { return []; }
}

function setCheckedStages(arr) {
  try { localStorage.setItem("herp-checked-stages", JSON.stringify(arr)); } catch (e) { /* ignore */ }
}

function renderRoadmap() {
  const rail = document.getElementById("roadmap-rail");
  const all = [...SECTIONS, FINAL_STAGE];
  const checked = getCheckedStages();
  rail.innerHTML = all.map((s, i) => {
    const isLast = i === all.length - 1;
    const stageKey = s.id || `stage-${i}`;
    const isChecked = checked.includes(stageKey);
    return `
    <div class="rr-item reveal ${isChecked ? "checked" : ""}" data-stage-key="${stageKey}">
      <div class="rail-track"><div class="rr-tab" data-stage-key="${stageKey}" role="button" tabindex="0" aria-pressed="${isChecked}" aria-label="Mark ${s.title} as ${isChecked ? "not done" : "done"}">${isChecked ? "✓" : i + 1}</div></div>
      <div class="rr-body">
        <h3>${s.stageLabel} — ${s.title}</h3>
        <p>${s.blurb}</p>
        ${isLast ? '<span class="rr-note">Resources coming soon</span>' : `<a class="rr-note" href="#${s.id}" style="text-decoration:none;">Jump to section →</a>`}
      </div>
    </div>`;
  }).join("");

  rail.querySelectorAll(".rr-tab").forEach(tab => {
    const toggle = () => {
      const key = tab.dataset.stageKey;
      let checked = getCheckedStages();
      if (checked.includes(key)) checked = checked.filter(k => k !== key);
      else checked.push(key);
      setCheckedStages(checked);
      renderRoadmap();
      updateProgressBar();
      initRevealObserver();
    };
    tab.addEventListener("click", toggle);
    tab.addEventListener("keydown", e => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); toggle(); } });
  });

  updateProgressBar();
}

function updateProgressBar() {
  const all = [...SECTIONS, FINAL_STAGE];
  const total = all.length;
  const checked = getCheckedStages().length;
  const pct = Math.round((checked / total) * 100);
  const fill = document.getElementById("progress-fill");
  const label = document.getElementById("progress-label");
  if (fill) fill.style.width = pct + "%";
  if (label) label.textContent = `${checked} of ${total} stages checked off`;
}

function renderSections() {
  const root = document.getElementById("sections-root");
  root.innerHTML = SECTIONS.map((s, idx) => {
    const items = bySection(s.id);
    const groups = bySubsection(items);
    let subsectionsHTML = "";
    groups.forEach((cards, subName) => {
      subsectionsHTML += `
      <div class="subsection">
        <h3>${subName}</h3>
        <div class="card-grid">${cards.map(cardHTML).join("")}</div>
      </div>`;
    });

    return `
    <section class="pathway-section" id="${s.id}" aria-labelledby="${s.id}-heading">
      <div class="wrap">
        <div class="section-head">
          <span class="stage-index">${s.icon} ${s.stageLabel}</span>
          <h2 id="${s.id}-heading">${s.title}</h2>
        </div>
        <p class="section-intro">${s.intro}</p>
        <p class="section-intro" style="margin-top:6px;"><strong>Recommended path:</strong> ${s.recommendedPath.join(" → ")}</p>
        ${subsectionsHTML}
        <div class="tips-box">
          <h4>Practical tips</h4>
          <ul>${s.tips.map(t => `<li>${t}</li>`).join("")}</ul>
        </div>
      </div>
    </section>`;
  }).join("") + `
    <section class="pathway-section" id="research-career" style="border-bottom:none;">
      <div class="wrap">
        <div class="section-head">
          <span class="stage-index">⑥ ${FINAL_STAGE.stageLabel}</span>
          <h2>${FINAL_STAGE.title}</h2>
        </div>
        <p class="section-intro">${FINAL_STAGE.blurb} Once resources on academic networking, ORCID, and long-term career planning are curated, they'll appear here in the same format as the sections above.</p>
        <div class="coming-soon">This section is intentionally left without resource cards for now, rather than filled with placeholder links.</div>
      </div>
    </section>`;
}

/* ---------- Search & filter ---------- */
function renderFilterChips() {
  const row = document.getElementById("filter-row");
  row.innerHTML = CATEGORY_LIST.map(c =>
    `<button type="button" class="filter-chip" data-cat="${c}" aria-pressed="false">${c}</button>`
  ).join("");
  row.querySelectorAll(".filter-chip").forEach(chip => {
    chip.addEventListener("click", () => {
      const pressed = chip.getAttribute("aria-pressed") === "true";
      chip.setAttribute("aria-pressed", pressed ? "false" : "true");
      applyFilters();
    });
  });
}

function activeCategories() {
  return Array.from(document.querySelectorAll(".filter-chip[aria-pressed='true']")).map(c => c.dataset.cat);
}

function applyFilters() {
  const q = document.getElementById("resource-search").value.trim().toLowerCase();
  const activeCats = activeCategories();
  const cards = document.querySelectorAll(".res-card");
  let visibleCount = 0;

  cards.forEach(card => {
    const haystack = card.dataset.title + " " + card.dataset.provider + " " + card.dataset.desc + " " + card.dataset.cats;
    const matchesQuery = !q || haystack.includes(q);
    const cardCats = card.dataset.catsList.split(",");
    const matchesCat = activeCats.length === 0 || activeCats.some(c => cardCats.includes(c));
    const show = matchesQuery && matchesCat;
    card.style.display = show ? "" : "none";
    if (show) visibleCount++;
  });

  // Hide empty subsections / sections
  document.querySelectorAll(".subsection").forEach(sub => {
    const anyVisible = Array.from(sub.querySelectorAll(".res-card")).some(c => c.style.display !== "none");
    sub.style.display = anyVisible ? "" : "none";
  });

  const countEl = document.getElementById("result-count");
  countEl.textContent = `${visibleCount} resource${visibleCount === 1 ? "" : "s"} shown`;
}

/* ---------- Theme (persisted) ---------- */
function initTheme() {
  const btn = document.getElementById("theme-toggle");
  let stored = null;
  try { stored = localStorage.getItem("herp-theme"); } catch (e) { /* ignore */ }
  let dark = stored ? stored === "dark" : (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches);
  const apply = () => {
    document.documentElement.setAttribute("data-theme", dark ? "dark" : "light");
    btn.textContent = dark ? "☀ Light mode" : "🌙 Dark mode";
    btn.setAttribute("aria-pressed", dark ? "true" : "false");
    try { localStorage.setItem("herp-theme", dark ? "dark" : "light"); } catch (e) { /* ignore */ }
  };
  apply();
  btn.addEventListener("click", () => { dark = !dark; apply(); });
}

/* ---------- Reveal-on-scroll ---------- */
const prefersReducedMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
let revealObserver = null;

function initRevealObserver() {
  const targets = document.querySelectorAll(".reveal:not(.visible)");
  if (prefersReducedMotion) {
    targets.forEach(t => t.classList.add("visible"));
    return;
  }
  if (!revealObserver) {
    revealObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
  }
  targets.forEach(t => revealObserver.observe(t));
}

function tagRevealTargets() {
  document.querySelectorAll(".stage-card, .res-card, .subsection").forEach(el => el.classList.add("reveal"));
}

/* ---------- Animated stat counters ---------- */
function animateCounters() {
  const els = document.querySelectorAll(".stat-num[data-target]");
  const run = () => {
    els.forEach(el => {
      const target = parseInt(el.dataset.target, 10);
      if (prefersReducedMotion) { el.textContent = target; return; }
      const duration = 900;
      const start = performance.now();
      const step = now => {
        const progress = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        el.textContent = Math.round(eased * target);
        if (progress < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    });
  };
  const statRow = document.getElementById("stat-row");
  if (!statRow) return run();
  const obs = new IntersectionObserver(entries => {
    entries.forEach(entry => { if (entry.isIntersecting) { run(); obs.disconnect(); } });
  }, { threshold: 0.4 });
  obs.observe(statRow);
}

/* ---------- Shuffle-a-resource ---------- */
function initShuffle() {
  const btn = document.getElementById("shuffle-btn");
  const modal = document.getElementById("shuffle-modal");
  const closeBtn = document.getElementById("shuffle-close");
  const content = document.getElementById("shuffle-content");

  const openModal = () => {
    const r = RESOURCES[Math.floor(Math.random() * RESOURCES.length)];
    content.innerHTML = `
      <span class="call-no">${r.id}</span>
      <h4>${r.title}</h4>
      <div class="provider">${r.provider} · <span class="type-tag ${r.type}">${r.type}</span></div>
      <p class="desc">${r.description}</p>
      <a class="visit" href="${r.url}" target="_blank" rel="noopener noreferrer">Visit resource →</a>`;
    modal.hidden = false;
    closeBtn.focus();
  };
  const closeModal = () => { modal.hidden = true; btn.focus(); };

  btn.addEventListener("click", openModal);
  closeBtn.addEventListener("click", closeModal);
  modal.addEventListener("click", e => { if (e.target === modal) closeModal(); });
  document.addEventListener("keydown", e => { if (e.key === "Escape" && !modal.hidden) closeModal(); });
}

/* ---------- Floating buttons (show on scroll) ---------- */
function initFloatingButtons() {
  const shuffleBtn = document.getElementById("shuffle-btn");
  const topBtn = document.getElementById("top-btn");
  const onScroll = () => {
    const show = window.scrollY > 420;
    shuffleBtn.classList.toggle("show", show);
    topBtn.classList.toggle("show", show);
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
  topBtn.addEventListener("click", () => window.scrollTo({ top: 0, behavior: prefersReducedMotion ? "auto" : "smooth" }));
}

/* ---------- Mobile nav ---------- */
function initMobileNav() {
  const toggle = document.getElementById("mobile-nav-toggle");
  const nav = document.getElementById("topnav");
  toggle.addEventListener("click", () => {
    nav.classList.toggle("open");
    const expanded = nav.classList.contains("open");
    toggle.setAttribute("aria-expanded", expanded ? "true" : "false");
  });
  nav.querySelectorAll("a").forEach(a => a.addEventListener("click", () => nav.classList.remove("open")));
}

document.addEventListener("DOMContentLoaded", () => {
  renderHeroStageCards();
  renderRoadmap();
  renderSections();
  renderFilterChips();
  document.getElementById("resource-search").addEventListener("input", applyFilters);
  applyFilters();
  initTheme();
  initMobileNav();
  tagRevealTargets();
  initRevealObserver();
  animateCounters();
  initShuffle();
  initFloatingButtons();
  document.getElementById("year").textContent = new Date().getFullYear();
});
