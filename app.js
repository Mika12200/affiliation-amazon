// ===== HELPERS =====
function stars(rating) {
  const full = Math.floor(rating);
  const half = rating % 1 >= 0.5 ? 1 : 0;
  const empty = 5 - full - half;
  return "★".repeat(full) + (half ? "½" : "") + "☆".repeat(empty);
}

// ===== TOP PICKS =====
function renderTopPicks() {
  const grid = document.getElementById("topPicksGrid");
  grid.innerHTML = topPicks.map(p => `
    <div class="top-card">
      <div class="top-card-rank">
        <div class="rank-num">${p.rank}</div>
        <span>${p.label}</span>
      </div>
      <div class="top-card-body">
        <div class="top-card-img">
          ${p.img ? `<img src="${p.img}" alt="${p.name}" style="width:100%;height:100%;object-fit:contain;padding:8px;" onerror="this.style.display='none';this.nextElementSibling.style.display='flex'"/><span style="display:none;align-items:center;justify-content:center;width:100%;height:100%;font-size:5rem">${p.emoji}</span>` : `<span style="display:flex;align-items:center;justify-content:center;width:100%;height:100%;font-size:5rem">${p.emoji}</span>`}
        </div>
        <div class="top-card-name">${p.name}</div>
        <div class="top-card-sub">${p.sub}</div>
        <div class="stars">
          <span class="stars-icons">${stars(p.rating)}</span>
          <span class="stars-score">${p.rating}/5</span>
          <span class="stars-count">(${p.reviews.toLocaleString("fr-FR")} avis)</span>
        </div>
        <div class="pros-cons">
          ${p.pros.map(x => `<div class="pro">${x}</div>`).join("")}
          ${p.cons.map(x => `<div class="con">${x}</div>`).join("")}
        </div>
      </div>
      <div class="top-card-footer" style="display:flex;flex-direction:column;">
        <a href="${amzLink(p.asin)}" class="btn-amazon" target="_blank" rel="noopener">
          <img src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" height="16" alt="Amazon" style="filter:brightness(0)"/>
          ${p.priceOld ? 'Vérifier la promo 🔥' : 'Voir le prix sur Amazon'}
        </a>
        ${p.aliLink ? `
        <a href="${p.aliLink}" class="btn-aliexpress" target="_blank" rel="noopener">
          <svg width="17" height="17" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5 7 C5 17 19 17 19 7" stroke="white" stroke-width="2.5" stroke-linecap="round"/></svg> Voir sur AliExpress
        </a>` : ''}
      </div>
    </div>
  `).join("");
}

// ===== PRODUCTS =====
function renderProductCard(p) {
  const imgHtml = p.img
    ? `<img src="${p.img}" alt="${p.name}" style="width:100%;height:100%;object-fit:contain;padding:8px;" onerror="this.style.display='none';this.nextElementSibling.style.display='flex'"/><span style="display:none;align-items:center;justify-content:center;width:100%;height:100%;font-size:4rem">${p.emoji}</span>`
    : `<span style="display:flex;align-items:center;justify-content:center;width:100%;height:100%;font-size:4rem">${p.emoji}</span>`;
  return `
    <div class="product-card">
      <div class="product-img">
        ${imgHtml}
        ${p.badge ? `<div class="product-badge ${p.badge === 'Nouveau' ? 'new' : p.badge === 'Top' ? 'top' : ''}">${p.badge}</div>` : ""}
      </div>
      <div class="product-body">
        <div class="product-brand">${p.brand}</div>
        <div class="product-name">${p.name}</div>
        <div class="stars">
          <span class="stars-icons" style="font-size:0.8rem">${stars(p.rating)}</span>
          <span class="stars-score" style="font-size:0.78rem">${p.rating}/5</span>
        </div>
        <div class="product-desc">${p.desc}</div>
      </div>
      <div class="product-footer" style="display:flex;flex-direction:column;">
        <a href="${amzLink(p.asin)}" class="btn-amazon" target="_blank" rel="noopener">
          <img src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" height="14" alt="Amazon" style="filter:brightness(0)"/>
          ${p.priceOld ? 'Vérifier la promo 🔥' : 'Voir le prix sur Amazon'}
        </a>
        ${p.aliLink ? `
        <a href="${p.aliLink}" class="btn-aliexpress" target="_blank" rel="noopener">
          <svg width="17" height="17" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5 7 C5 17 19 17 19 7" stroke="white" stroke-width="2.5" stroke-linecap="round"/></svg> Voir sur AliExpress
        </a>` : ''}
      </div>
    </div>
  `;
}

let cuisineFilter = "all";
let maisonFilter = "all";

function renderCuisine() {
  const list = cuisineFilter === "all"
    ? cuisineProducts
    : cuisineProducts.filter(p => p.subcat === cuisineFilter);
  document.getElementById("cuisineGrid").innerHTML = list.map(renderProductCard).join("");
}

function renderMaison() {
  const list = maisonFilter === "all"
    ? maisonProducts
    : maisonProducts.filter(p => p.subcat === maisonFilter);
  document.getElementById("maisonGrid").innerHTML = list.map(renderProductCard).join("");
}

function filterCat(btn, section, subcat) {
  const parent = btn.closest(".cat-filters");
  parent.querySelectorAll(".cat-btn").forEach(b => b.classList.remove("active"));
  btn.classList.add("active");
  if (section === "cuisine") { cuisineFilter = subcat; renderCuisine(); }
  else { maisonFilter = subcat; renderMaison(); }
}

// ===== GUIDES =====
function goToGuide(section, subcat) {
  // Activate the correct filter button
  const container = document.querySelector(`#${section} .cat-filters`) || document.querySelector(`#${section}`).closest('.section')?.querySelector('.cat-filters');
  if (container) {
    container.querySelectorAll('.cat-btn').forEach(b => b.classList.remove('active'));
    const target = [...container.querySelectorAll('.cat-btn')].find(b => b.textContent.toLowerCase().includes(subcat) || (subcat === 'all' && b.textContent === 'Tous'));
    if (target) target.classList.add('active');
  }
  // Apply filter
  if (section === 'cuisine') { cuisineFilter = subcat; renderCuisine(); }
  else { maisonFilter = subcat; renderMaison(); }
  // Scroll to section
  document.getElementById(section).scrollIntoView({ behavior: 'smooth' });
}

function renderGuides() {
  document.getElementById("guidesGrid").innerHTML = guides.map(g => `
    <div class="guide-card" onclick="goToGuide('${g.section}','${g.subcat}')" style="cursor:pointer">
      <div class="guide-icon">${g.icon}</div>
      <div class="guide-cat">${g.cat}</div>
      <div class="guide-title">${g.title}</div>
      <div class="guide-desc">${g.desc}</div>
      <span class="guide-link">Voir les produits</span>
    </div>
  `).join("");
}

// ===== PROMOS =====
function renderPromos() {
  const allProducts = [...cuisineProducts, ...maisonProducts];
  const promos = allProducts.filter(p => p.priceOld);
  document.getElementById("promoGrid").innerHTML = promos.length
    ? promos.map(renderProductCard).join("")
    : `<p style="color:#6b7280;padding:20px">Aucune promo en cours.</p>`;
}

// ===== SEARCH =====
function filterProducts() {
  const q = document.getElementById("headerSearch").value.toLowerCase().trim();
  if (!q) { renderCuisine(); renderMaison(); return; }

  const matchC = cuisineProducts.filter(p =>
    p.name.toLowerCase().includes(q) || p.brand.toLowerCase().includes(q) || p.desc.toLowerCase().includes(q)
  );
  const matchM = maisonProducts.filter(p =>
    p.name.toLowerCase().includes(q) || p.brand.toLowerCase().includes(q) || p.desc.toLowerCase().includes(q)
  );

  document.getElementById("cuisineGrid").innerHTML = matchC.length
    ? matchC.map(renderProductCard).join("")
    : `<p style="color:#6b7280;padding:20px">Aucun résultat dans Cuisine.</p>`;

  document.getElementById("maisonGrid").innerHTML = matchM.length
    ? matchM.map(renderProductCard).join("")
    : `<p style="color:#6b7280;padding:20px">Aucun résultat dans Maison connectée.</p>`;

  // Scroll vers les résultats
  const target = matchC.length ? "cuisine" : matchM.length ? "maison" : "cuisine";
  document.getElementById(target).scrollIntoView({ behavior: "smooth" });
}

// ===== INIT =====
document.addEventListener("DOMContentLoaded", () => {
  renderTopPicks();
  renderCuisine();
  renderMaison();
  renderGuides();
  renderPromos();
});

