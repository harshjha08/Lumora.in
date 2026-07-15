

document.addEventListener('DOMContentLoaded', () => {

  /* ---------------- Icon library ---------------- */
  const ICONS = {
    search: '<circle cx="11" cy="11" r="7"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>',
    user: '<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>',
    heart: '<path d="M20.8 4.9a5.4 5.4 0 0 0-7.6 0L12 6l-1.2-1.1a5.4 5.4 0 1 0-7.6 7.6l1.2 1.1L12 21l7.6-7.4 1.2-1.1a5.4 5.4 0 0 0 0-7.6z"/>',
    bag: '<path d="M6.5 7h11l1 13h-13z"/><path d="M9 7a3 3 0 0 1 6 0"/>',
    tag: '<path d="M20 12.5 12.5 20 3 10.5V4h6.5z"/><circle cx="7.5" cy="7.5" r="1.3"/>',
    minus: '<line x1="5" y1="12" x2="19" y2="12"/>',
    plus: '<line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/>',
    share: '<circle cx="18" cy="5.5" r="2.6"/><circle cx="6" cy="12" r="2.6"/><circle cx="18" cy="18.5" r="2.6"/><line x1="8.4" y1="10.7" x2="15.6" y2="7"/><line x1="8.4" y1="13.3" x2="15.6" y2="17"/>',
    chevronLeft: '<polyline points="15 18 9 12 15 6"/>',
    chevronRight: '<polyline points="9 18 15 12 9 6"/>',
    truck: '<rect x="1.5" y="7" width="13" height="9.5" rx="1"/><path d="M14.5 10h4l3.5 3.2v3.3h-7.5z"/><circle cx="6" cy="18.5" r="1.6"/><circle cx="17.5" cy="18.5" r="1.6"/>',
    wallet: '<rect x="2" y="6" width="20" height="13" rx="2"/><path d="M2 10.5h20"/><circle cx="17" cy="14.5" r="1.1"/>',
    refresh: '<path d="M21 12a9 9 0 1 1-3.1-6.8"/><polyline points="21 3 21 9 15 9"/>',
    shield: '<path d="M12 3.2 20 6.4v5.6c0 5.1-3.4 8-8 9-4.6-1-8-3.9-8-9V6.4z"/>',
    lock: '<rect x="4.5" y="10.5" width="15" height="9.5" rx="2"/><path d="M8 10.5V7.8a4 4 0 0 1 8 0v2.7"/>',
    award: '<circle cx="12" cy="8.3" r="5"/><path d="M8.6 12.7 7 21l5-2.6L17 21l-1.6-8.3"/>',
    headset: '<path d="M4 13.5a8 8 0 0 1 16 0"/><rect x="2" y="13.5" width="4" height="6" rx="1.5"/><rect x="18" y="13.5" width="4" height="6" rx="1.5"/>',
    spool: '<circle cx="12" cy="12" r="3.2"/><path d="M12 2v4M12 18v4M2 12h4M18 12h4"/>',
    gem: '<path d="M4.5 9 8 4h8l3.5 5-7.5 11z"/><path d="M4.5 9h15M8 4l-3.5 5 7.5 11 7.5-11L16 4"/>',
    wave: '<path d="M2.5 9c2-3 4-3 6 0s4 3 6 0 4-3 6.5 0"/><path d="M2.5 16c2-3 4-3 6 0s4 3 6 0 4-3 6.5 0"/>',
    hanger: '<path d="M12 3.2a1.9 1.9 0 1 1 1.9 1.9c-.7.4-1.9 1.1-1.9 2.3"/><path d="M12 7.4 2.5 13.5h19z"/><line x1="2.5" y1="17" x2="21.5" y2="17"/>',
    hand: '<path d="M8.2 12.2V5.6a1.4 1.4 0 0 1 2.8 0v5.8"/><path d="M11 11.4V4.4a1.4 1.4 0 0 1 2.8 0v6.7"/><path d="M13.8 11V6.2a1.4 1.4 0 0 1 2.8 0v8.4c0 3.3-1.9 5.6-5.6 5.6h-.9c-2.8 0-4.2-.9-5.6-2.8l-2.3-3.7A1.4 1.4 0 0 1 4.6 12.1L6.6 14.6"/>',
    leaf: '<path d="M5 21c8.5 0 13-4.7 13-13V5h-1.9C8.3 5 3.6 9.7 3.6 18.1V21z"/><path d="M5 21c4.6-4.6 7.4-8.3 11-13"/>',
    globe: '<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c3 4.2 3 13.8 0 18M12 3c-3 4.2-3 13.8 0 18"/>',
    gift: '<rect x="3.5" y="9" width="17" height="12" rx="1"/><path d="M3.5 13h17"/><path d="M12 9v12"/><path d="M12 9c-1.6 0-3.2-1-3.2-2.6S10.4 4 12 5c1.6-1 3.7-.5 3.7 1.4S13.6 9 12 9z"/>',
    menu: '<line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/>',
    starFill: '<polygon points="12 2.5 15 9 22 9.7 16.8 14.6 18.2 21.5 12 18 5.8 21.5 7.2 14.6 2 9.7 9 9"/>'
  };

  function iconMarkup(name, extraClass){
    const body = ICONS[name] || '';
    return '<svg class="icon' + (extraClass ? ' ' + extraClass : '') + '" viewBox="0 0 24 24">' + body + '</svg>';
  }

  const formatINR = n => '₹' + n.toLocaleString('en-IN');

  function calcOriginalPrice(product){
    if(product.pDiscount === "NA") return null;
    const finalPrice = Number(String(product.pPrice).replaceAll(",", ""));
    const discountPercent = Number(product.pDiscount);
    return Math.floor(finalPrice / (1 - discountPercent / 100));
  }

  /* ---------------- Elements shared across functions ---------------- */
  const mainImage = document.getElementById('mainImage');
  const mainPhotoPanel = document.getElementById('mainPhotoPanel');
  const thumbnailList = document.getElementById('thumbnailList');

  /* ---------------- Resolve current product from URL ---------------- */
  const urlParams = new URLSearchParams(window.location.search);
  const productId = urlParams.get('id');
  const currentProduct = (typeof Data !== 'undefined' && productId)
    ? Data.HeroProducts.find(p => p.pId === productId)
    : null;

  function buildGallery(product){
    const images = [product.pMainImage, product.pImage1, product.pImage2, product.pImage3, product.pImage4];

    mainPhotoPanel.className = 'photo-panel';
    mainPhotoPanel.innerHTML = '<img src="' + images[0] + '" alt="' + product.pName + '" style="width:100%;height:100%;object-fit:cover;">';

    thumbnailList.innerHTML = '';
    images.forEach((src, i) => {
      const btn = document.createElement('button');
      btn.className = 'thumb' + (i === 0 ? ' active' : '');
      btn.innerHTML = '<img src="' + src + '" alt="thumb" style="width:100%;height:100%;object-fit:cover;">';
      btn.addEventListener('click', () => {
        document.querySelectorAll('.thumb').forEach(t => t.classList.remove('active'));
        btn.classList.add('active');
        mainPhotoPanel.innerHTML = '<img src="' + src + '" alt="' + product.pName + '" style="width:100%;height:100%;object-fit:cover;">';
      });
      thumbnailList.appendChild(btn);
    });
  }

  function populateProductDetails(product){
    document.title = product.pName + " | LUMORA";
    document.getElementById('breadcrumbCategory').textContent = product.pCategory;
    document.getElementById('breadcrumbProduct').textContent = product.pName;

    document.querySelector('.eyebrow').textContent = product.pTag;
    document.querySelector('.product-info h1').textContent = product.pName;
    document.querySelector('.subtitle').textContent = product.pFabric + " in " + product.pColorName;

    const ratingRow = document.querySelector('.rating-row');
    ratingRow.querySelectorAll('span')[2].textContent = "| " + product.pRiview + " Reviews";

    // Badge (Best Seller / Trending / Hot Deal / New Arrival)
    const badgeEl = document.getElementById('productBadge');
    if(product.pBadge){
      badgeEl.textContent = product.pBadge;
      badgeEl.style.display = "";
    } else {
      badgeEl.style.display = "none";
    }

    // Price
    document.querySelector('.price-current').textContent = "₹" + product.pPrice;
    const original = calcOriginalPrice(product);
    const priceOriginalEl = document.querySelector('.price-original');
    const priceOffEl = document.querySelector('.price-off');
    const currentNumeric = Number(String(product.pPrice).replaceAll(",", ""));
    if(original){
      priceOriginalEl.textContent = "₹" + original.toLocaleString('en-IN');
      priceOffEl.textContent = product.pDiscount + "% OFF";
      priceOriginalEl.style.display = "";
      priceOffEl.style.display = "";
    } else {
      priceOriginalEl.style.display = "none";
      priceOffEl.style.display = "none";
    }

    // Prepaid banner (extra 10% off, rounded down)
    const prepaidPrice = Math.floor(currentNumeric * 0.9);
    document.getElementById('prepaidText').innerHTML = 'Get it for <strong>' + formatINR(prepaidPrice) + '</strong> with Prepaid Order';

    // Color swatch
    document.getElementById('colorNameLabel').textContent = product.pColorName;
    const swatchWrap = document.getElementById('colorSwatches');
    swatchWrap.innerHTML = '<button class="swatch active" style="--swatch-color:' + product.pColorHex + '" aria-label="' + product.pColorName + '"><span></span></button>';

    // Highlights
    const highlightsList = document.getElementById('highlightsList');
    highlightsList.innerHTML = '';
    product.pHighlights.forEach(h => {
      const li = document.createElement('li');
      li.innerHTML = iconMarkup(h.icon) + ' ' + h.text;
      highlightsList.appendChild(li);
    });

    // Dimension boxes
    document.getElementById('dim1Label').textContent = product.pDim1Label;
    document.getElementById('dim1Value').textContent = product.pDim1Value;
    document.getElementById('dim2Label').textContent = product.pDim2Label;
    document.getElementById('dim2Value').textContent = product.pDim2Value;

    // Description tab
    const descTab = document.getElementById('descriptionTab');
    descTab.querySelectorAll('p').forEach(p => p.remove());
    const p1 = document.createElement('p');
    p1.textContent = product.pDesc;
    const p2 = document.createElement('p');
    p2.textContent = "Crafted from " + product.pFabric + " in " + product.pColorName + ", perfect for " + product.pOccasion + ".";
    descTab.insertBefore(p2, descTab.firstChild);
    descTab.insertBefore(p1, descTab.firstChild);

    // Feature icons row inside description tab (first 5 highlights reused as quick icons)
    const featureIconsRow = document.getElementById('featureIconsRow');
    featureIconsRow.innerHTML = '';
    product.pHighlights.slice(0, 5).forEach(h => {
      const fi = document.createElement('div');
      fi.className = 'fi';
      fi.innerHTML = iconMarkup(h.icon) + '<span>' + h.text + '</span>';
      featureIconsRow.appendChild(fi);
    });

    // Details tab
    const detailsList = document.getElementById('detailsList');
    detailsList.innerHTML =
      '<li><span>Category</span><span>' + product.pCategory + '</span></li>' +
      '<li><span>Fabric / Material</span><span>' + product.pFabric + '</span></li>' +
      '<li><span>Color</span><span>' + product.pColorName + '</span></li>' +
      '<li><span>' + product.pDim1Label + '</span><span>' + product.pDim1Value + '</span></li>' +
      '<li><span>' + product.pDim2Label + '</span><span>' + product.pDim2Value + '</span></li>' +
      '<li><span>Occasion</span><span>' + product.pOccasion + '</span></li>' +
      '<li><span>Country of Origin</span><span>India</span></li>';

    // Fabric & Care tab
    const careTab = document.getElementById('fabricCareTab');
    careTab.innerHTML = '';
    product.pCareInstructions.forEach(line => {
      const p = document.createElement('p');
      p.textContent = line;
      careTab.appendChild(p);
    });
  }

  /* ---------------- Related products (same category, real data) ---------------- */
  const relatedGrid = document.getElementById('relatedGrid');

  function buildRelatedProducts(product){
    relatedGrid.innerHTML = '';
    const pool = (typeof Data !== 'undefined') ? Data.HeroProducts : [];
    let related = pool.filter(p => p.pId !== product.pId && p.pCategory === product.pCategory);

    // If fewer than 5 in the same category, fill up with other products
    if(related.length < 5){
      const extras = pool.filter(p => p.pId !== product.pId && !related.includes(p));
      related = related.concat(extras).slice(0, 5);
    } else {
      related = related.slice(0, 5);
    }

    related.forEach(p => {
      const originalPrice = calcOriginalPrice(p);
      const currentPrice = Number(String(p.pPrice).replaceAll(",", ""));

      const card = document.createElement('article');
      card.className = 'product-card';
      card.innerHTML =
        '<div class="card-image">' +
          '<button class="wishlist-heart" aria-label="Add ' + p.pName + ' to wishlist">' + iconMarkup('heart') + '</button>' +
          '<img src="' + p.pMainImage + '" alt="' + p.pName + '">' +
        '</div>' +
        '<div class="card-info">' +
          '<h3>' + p.pName + '</h3>' +
          '<div class="card-price">' +
            '<span class="current">' + formatINR(currentPrice) + '</span>' +
            (originalPrice ? '<span class="original">' + formatINR(originalPrice) + '</span><span class="off">' + p.pDiscount + '% OFF</span>' : '') +
          '</div>' +
          '<div class="card-rating"><span class="stars">★★★★★</span><span>' + Number(p.pRating).toFixed(1) + '</span><span>(' + p.pRiview + ')</span></div>' +
        '</div>';

      card.addEventListener('click', (e) => {
        if(e.target.closest('.wishlist-heart')) return;
        window.location.href = 'productView.html?id=' + p.pId;
      });

      const heartBtn = card.querySelector('.wishlist-heart');
      let active = false;
      heartBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        active = !active;
        heartBtn.classList.toggle('active', active);
        wishlistCount += active ? 1 : -1;
        updateCounters();
        showToast(active ? p.pName + ' added to wishlist' : p.pName + ' removed from wishlist', 'heart');
      });

      relatedGrid.appendChild(card);
    });
  }

  if(currentProduct){
    buildGallery(currentProduct);
    populateProductDetails(currentProduct);
    buildRelatedProducts(currentProduct);
  }

  /* Convert any remaining static data-icon spans (e.g. features strip, tabs, trust bar) */
  document.querySelectorAll('[data-icon]').forEach(el => {
    const name = el.getAttribute('data-icon');
    const extra = el.getAttribute('class') && el.getAttribute('class').replace('icon','').trim();
    el.outerHTML = iconMarkup(name, extra);
  });

  /* ---------------- Toast ---------------- */
  const toast = document.getElementById('toast');
  let toastTimer;
  function showToast(msg, icon){
    toast.innerHTML = (icon ? iconMarkup(icon) : '') + '<span>' + msg + '</span>';
    toast.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toast.classList.remove('show'), 2200);
  }

  /* ---------------- Mobile nav ---------------- */
  const hamburgerBtn = document.getElementById('hamburgerBtn');
  const mainNav = document.getElementById('mainNav');
  hamburgerBtn.addEventListener('click', () => mainNav.classList.toggle('open'));

  /* Cursor-follow zoom on main image */
  mainImage.addEventListener('mousemove', e => {
    const rect = mainImage.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    mainPhotoPanel.style.transformOrigin = x + '% ' + y + '%';
  });

  /* ---------------- Header counters ---------------- */
  let wishlistCount = 1;
  let cartCount = 3;
  const wishlistCountEl = document.getElementById('wishlistCount');
  const cartCountEl = document.getElementById('cartCount');
  function updateCounters(){
    wishlistCountEl.textContent = wishlistCount;
    cartCountEl.textContent = cartCount;
  }

  /* ---------------- Quantity stepper ---------------- */
  let qty = 1;
  const qtyValue = document.getElementById('qtyValue');
  const qtyMinus = document.getElementById('qtyMinus');
  const qtyPlus = document.getElementById('qtyPlus');
  function renderQty(){
    qtyValue.textContent = qty;
    qtyMinus.disabled = qty <= 1;
    qtyPlus.disabled = qty >= 10;
  }
  qtyMinus.addEventListener('click', () => { if (qty > 1) { qty--; renderQty(); } });
  qtyPlus.addEventListener('click', () => { if (qty < 10) { qty++; renderQty(); } });
  renderQty();

  /* ---------------- Add to cart / Buy now ---------------- */
  document.getElementById('addCartBtn').addEventListener('click', () => {
    cartCount += qty;
    updateCounters();
    showToast(qty + ' item' + (qty > 1 ? 's' : '') + ' added to cart', 'bag');
  });
  document.getElementById('buyNowBtn').addEventListener('click', () => {
    showToast('Redirecting to secure checkout…', 'lock');
  });

  /* ---------------- Wishlist toggle (main button) ---------------- */
  const wishlistToggleBtn = document.getElementById('wishlistToggleBtn');
  const wishlistToggleLabel = document.getElementById('wishlistToggleLabel');
  let wishlisted = false;
  wishlistToggleBtn.addEventListener('click', () => {
    wishlisted = !wishlisted;
    wishlistToggleBtn.classList.toggle('active', wishlisted);
    wishlistToggleLabel.textContent = wishlisted ? 'Added to Wishlist' : 'Add to Wishlist';
    wishlistCount += wishlisted ? 1 : -1;
    updateCounters();
    showToast(wishlisted ? 'Added to your wishlist' : 'Removed from wishlist', 'heart');
  });

  /* ---------------- Share ---------------- */
  document.getElementById('shareBtn').addEventListener('click', async () => {
    const shareTitle = currentProduct ? currentProduct.pName : 'Heritage Banarasi Silk Saree';
    const shareText = currentProduct ? currentProduct.pDesc : 'Pure Banarasi Silk with Antique Gold Zari';
    const shareData = { title: shareTitle, text: shareText, url: window.location.href };
    if (navigator.share) {
      try { await navigator.share(shareData); } catch (e) { /* cancelled */ }
    } else {
      try {
        await navigator.clipboard.writeText(window.location.href);
        showToast('Link copied to clipboard', 'share');
      } catch (e) {
        showToast('Unable to copy link', 'share');
      }
    }
  });

  /* ---------------- Tabs ---------------- */
  const tabBtns = document.querySelectorAll('.tab-btn');
  const tabContents = document.querySelectorAll('.tab-content');
  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      tabBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const target = btn.dataset.tab;
      tabContents.forEach(c => { c.hidden = c.dataset.content !== target; });
    });
  });

  /* Carousel arrows */
  const carouselPrev = document.getElementById('carouselPrev');
  const carouselNext = document.getElementById('carouselNext');
  function scrollByCard(direction){
    const card = relatedGrid.querySelector('.product-card');
    const gap = 22;
    const distance = card ? (card.getBoundingClientRect().width + gap) * 2 : 300;
    relatedGrid.scrollBy({ left: direction * distance, behavior:'smooth' });
  }
  carouselPrev.addEventListener('click', () => scrollByCard(-1));
  carouselNext.addEventListener('click', () => scrollByCard(1));

  /* Header icon buttons */
  document.getElementById('headerCartBtn').addEventListener('click', () => showToast(cartCount + ' item' + (cartCount === 1 ? '' : 's') + ' in your cart', 'bag'));
  document.getElementById('headerWishlistBtn').addEventListener('click', () => showToast(wishlistCount + ' item' + (wishlistCount === 1 ? '' : 's') + ' in your wishlist', 'heart'));

  updateCounters();
});
