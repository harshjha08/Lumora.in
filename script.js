let loggedIn = false;
const SavedUserName = "harshjha08";
const SavedUserPassword = "user123";

window.addEventListener("load", () => {
    const preloader = document.querySelector(".preloader");
    setTimeout(() => {

        preloader.classList.add("hide");

    }, 2000);

});
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

// ---- Banner and Promo side bar Images Sliding
let Bannerimage = document.querySelector(".banner-container");
const ImageDot = document.querySelectorAll(".dot");
let sideBar = document.querySelector(".side-bar");
const bannerImages = [
    "Banners/Banner2.png",
    "Banners/Banner1.png",
    "Banners/Banner5.jpeg",
    "Banners/Banner7.jpeg"
];
const sideBarImages = [
    "sidePromoImg/promoimg1.jpeg",
    "sidePromoImg/promoimg2.jpeg",
    "sidePromoImg/promoimg3.jpeg",
    "sidePromoImg/promoimg4.jpeg"
];
let currImage = 0;
function BannerImageSliding() {

    if (currImage == bannerImages.length) {
        currImage = 0;
    }
    Bannerimage.style.backgroundImage = `url('${bannerImages[currImage]}')`;
    updatedot(currImage);
}
function promoImageSliding() {
    currImage++;
    if (currImage == sideBarImages.length) {
        currImage = 0;
    }
    sideBar.style.backgroundImage = `url('${sideBarImages[currImage]}')`;
    updatedot(currImage);
}
setInterval(() => {
    BannerImageSliding();
    promoImageSliding();
}, 3000);

// --- Banner Navigation dots
function updatedot(index) {
    ImageDot.forEach(dot => {
        dot.classList.remove("active");
    });
    ImageDot[index].classList.add("active");
};

// --- catogory Buttons
const catbtn = document.querySelectorAll(".catogory-btns");
let currentCategory = "all";
let currentQuery = "";

function matchesCategoryFilter(product, filter) {
    switch (filter) {
        case "deals":
            return Number(product.pDiscount) > 0 || product.pBadge === "Hot Deal";
        case "accessories":
            return ["Accessories", "Bags", "Jewellery", "Watches"].includes(product.pCategory);
        case "beauty":
            return product.pCategory === "Fragrance" || /beauty|fragrance/i.test([product.pName, product.pTag, product.pDesc].join(" "));
        case "trending":
            return product.pRiview >= 150 || Number(product.pDiscount) > 0 || product.pBadge === "Hot Deal";
        case "sports":
            return /sport|fitness|athle|active/i.test([product.pName, product.pCategory, product.pTag, product.pDesc].join(" "));
        default:
            return true;
    }
}

function getVisibleProducts() {
    let products = Data.HeroProducts.filter(product => matchesCategoryFilter(product, currentCategory));

    if (currentQuery.trim()) {
        const q = currentQuery.trim().toLowerCase();
        products = products.filter(product => getSearchableText(product).includes(q));
    }

    return shuffleArray(products).slice(0, DISPLAY_COUNT);
}

function renderProductGrid() {
    renderProducts(getVisibleProducts());
}

catbtn.forEach(btn => {
    btn.addEventListener("click", () => {
        catbtn.forEach(button => {
            button.classList.remove("active");
        });
        btn.classList.add("active");
        currentCategory = btn.getAttribute("data-filter") || "all";
        renderProductGrid();
    });
});


// ================= PRODUCT RENDERING (Shuffle + Limit) ================= //
const DISPLAY_COUNT = 30;
let wishListArray = [];

function shuffleArray(array) {
    let arr = [...array];
    for (let i = arr.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}

function calculateDiscount(product) {
    if (product.pDiscount === "NA") {
        return null;
    }
    let finalPrice = Number(product.pPrice.replaceAll(",", ""));
    let discountPercent = Number(product.pDiscount);
    let originalPrice = finalPrice / (1 - discountPercent / 100);
    return Math.floor(originalPrice);
}

function buildProductCard(product, counter) {
    let originalPrice = calculateDiscount(product);
    return `
        <div class="product-box" data-pid="${product.pId}">
            <div class="product-image-box">
                <div class="supporting-images">
                    <div class="supporting-image">
                        <img class="supporting-image-div" id="SPImage.${counter}.1" src="${product.pImage1}">
                    </div>
                    <div class="supporting-image">
                        <img class="supporting-image-div" id="SPImage.${counter}.2" src="${product.pImage2}">
                    </div>
                    <div class="supporting-image">
                        <img class="supporting-image-div" id="SPImage.${counter}.3" src="${product.pImage3}">
                    </div>
                    <div class="supporting-image">
                        <img class="supporting-image-div" id="SPImage.${counter}.4" src="${product.pImage4}">
                    </div>
                </div>
                <div class="wishlist-btn" id="${product.pId}">
                    <i data-lucide="heart"></i>
                </div>
                <img class="product-image" id="product${counter}" src="${product.pMainImage}">
            </div>
            <div class="product-detail-box">
                <span class="product-tag">${product.pTag}</span>
                <h3 class="product-title">${product.pName}</h3>
                <p class="product-desc">${product.pDesc}</p>
                <div class="product-rating-price">
                    
                    <div class="rating">
                        ⭐⭐⭐⭐⭐
                        <span>(${product.pRiview})</span>
                    </div>
                    <div class="price">
                        ₹${product.pPrice}
                        <span>₹${originalPrice}</span>
                    </div>
                </div>
                <div class="product-btns">
                    <button class="buy-btn">Buy Now</button>
                    <button class="Cart-btn" id="cart-btn"><i data-lucide="shopping-cart"></i></button>
                </div>
            </div>
        </div>
    `;
}

const productContainer = document.querySelector(".products-display");

function renderProducts(productList) {
    let counter = 1;
    let html = "";

    if (!productList.length) {
        productContainer.innerHTML = `
            <div class="no-products">
                <h3>No products found</h3>
                <p>Try another category or search term to explore more.</p>
            </div>
        `;
        return;
    }

    // reversed so it visually matches the original "prepend" order
    [...productList].reverse().forEach(product => {
        html += buildProductCard(product, counter);
        counter++;
    });
    productContainer.innerHTML = html;
    lucide.createIcons();
}

// ---- Initial load: show a curated first set of products ----
renderProductGrid();

// ================= EVENT DELEGATION (works for any rendered card, old or new) ================= //
productContainer.addEventListener("click", (e) => {

    // ---- Wishlist ----
    let wishBtn = e.target.closest(".wishlist-btn");
    if (wishBtn) {
        if (!loggedIn) {
            openAuthModal();
        } else {
            wishBtn.classList.toggle("active");
            showToast('added to Wishlist', 'bag');
        }
        return;
    }

    // ---- Cart ----
    let cartBtn = e.target.closest(".Cart-btn");
    if (cartBtn) {
        if (!loggedIn) {
            openAuthModal();
        } else {
            showToast('added to Cart', 'bag');
        }
        return;
    }

    // ---- Supporting image swap ----
    let suppImg = e.target.closest(".supporting-image-div");
    if (suppImg) {
        let [, productNumber] = suppImg.id.split(".");
        let mainImage = document.getElementById("product" + productNumber);
        let oldMainSrc = mainImage.src;
        mainImage.src = suppImg.src;
        suppImg.src = oldMainSrc;
        return;
    }

    // ---- Main image click -> product view ----
    let mainImgClick = e.target.closest(".product-image");
    if (mainImgClick) {
        let pid = mainImgClick.closest(".product-box").getAttribute("data-pid");
        window.location.href = "productView.html?id=" + pid;
        return;
    }

    // ---- Buy Now ----
    let buyBtn = e.target.closest(".buy-btn");
    if (buyBtn) {
        let pid = buyBtn.closest(".product-box").getAttribute("data-pid");
        window.location.href = "productView.html?id=" + pid;
        return;
    }
});

function showWishList() {
    console.log(wishListArray);
}


// ==============================
// Auth Modal Elements
// ==============================

const authOverlay = document.querySelector(".auth-overlay");
const closeBtn = document.querySelector(".close-auth");

function openAuthModal() {
    authOverlay.classList.add("active");
    document.body.style.overflow = "hidden";
}

closeBtn.addEventListener("click", closeModal);

function closeModal() {
    authOverlay.classList.remove("active");
    document.body.style.overflow = "auto";
}

let popupContainer = document.querySelector(".popup-msg-box");
function showPopup(msg) {
    let popupBox = document.createElement("div");
    popupBox.classList.add("popupmsg");
    popupBox.innerHTML = `
     <div class="popupmsg">
         <p>${msg}</p>
    </div>
    `;
    popupContainer.append(popupBox);
    setTimeout(() => {
        popupBox.remove();
    }, 2000);
}

// login signup box
const userNameInput = document.getElementById("userNameInput");
const authPwInput = document.getElementById('authPasswordInput');
const authRight = document.querySelector('.auth-right');
const authTabs = document.querySelectorAll('.auth-tab');
const authSubmit = document.getElementById('authSubmitBtn');
const authFooter = document.getElementById('authFooterText');

authSubmit.addEventListener("click", () => {
    let userName = userNameInput.value;
    let userPass = authPwInput.value;
    if (userName == SavedUserName && userPass == SavedUserPassword) {
        userNameInput.value = "";
        authPwInput.value = "";
        closeModal();
        showToast("Login Successfully");
        loggedIn = "true";
    } else {
        showToast("Invalid User Or Password")
    }
});
let alertMsgBox = document.querySelector(".alert-msg");
function showInvalidMsg(msg) {
    alertMsgBox.innerHTML = msg;
    alertMsgBox.style.display = "flex";
    setTimeout(() => {
        alertMsgBox.style.display = "none";
    }, 2000);
}
function setAuthMode(mode) {
    authTabs.forEach(b => b.classList.toggle('active', b.dataset.mode === mode));

    if (mode === 'signup') {
        authRight.classList.add('mode-signup');
        authSubmit.textContent = 'Signup';
        authFooter.innerHTML = 'Already have an account? <a id="authSwitchLink">Login</a>';
    } else {
        authRight.classList.remove('mode-signup');
        authSubmit.textContent = 'Login';
        authFooter.innerHTML = "Don't have an account? <a id=\"authSwitchLink\">Signup</a>";
    }

    // link har baar innerHTML replace hone par nayi id ke saath bind karo
    document.getElementById('authSwitchLink').addEventListener('click', () => {
        setAuthMode(mode === 'signup' ? 'login' : 'signup');
    });
}

authTabs.forEach(btn => btn.addEventListener('click', () => setAuthMode(btn.dataset.mode)));
document.getElementById('authSwitchLink').addEventListener('click', () => setAuthMode('signup'));

// password show/hide

const authPwToggle = document.getElementById('authTogglePassword');

authPwToggle.addEventListener('click', () => {
    const isHidden = authPwInput.type === 'password';
    authPwInput.type = isHidden ? 'text' : 'password';
    authPwToggle.innerHTML = isHidden
        ? '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17.94 17.94A10.94 10.94 0 0 1 12 19c-7 0-11-7-11-7a21.6 21.6 0 0 1 5.06-5.94M9.9 4.24A10.4 10.4 0 0 1 12 4c7 0 11 7 11 7a21.6 21.6 0 0 1-2.34 3.24M14.12 14.12a3 3 0 1 1-4.24-4.24"/><line x1="1" y1="1" x2="23" y2="23"/></svg>'
        : '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7-11-7-11-7z"/><circle cx="12" cy="12" r="3"/></svg>';
});

// submit par page reload rukwane ke liye — real auth logic yahan lagao
document.getElementById('authForm').addEventListener('submit', e => e.preventDefault());


// ================= LIVE SEARCH ================= //
const MAX_HISTORY = 6;
const MAX_SUGGESTIONS = 6;

function getSearchHistory() {
    return JSON.parse(localStorage.getItem('lumoraSearchHistory') || '[]');
}
function saveSearchHistory(term) {
    term = term.trim();
    if (!term) return;
    let history = getSearchHistory().filter(h => h.toLowerCase() !== term.toLowerCase());
    history.unshift(term);
    localStorage.setItem('lumoraSearchHistory', JSON.stringify(history.slice(0, MAX_HISTORY)));
}
function clearSearchHistory() {
    localStorage.removeItem('lumoraSearchHistory');
}

function getSearchableText(product) {
    return [
        product.pName, product.pCategory, product.pTag, product.pDesc,
        product.pColorName, ...(product.pKeywords || [])
    ].join(' ').toLowerCase();
}

function searchProducts(query) {
    let q = query.trim().toLowerCase();
    if (!q) return [];
    return Data.HeroProducts.filter(p => getSearchableText(p).includes(q));
}

// Renders matched/default products into the grid (searches full 100, not just the displayed 30)
function filterDisplayedProducts(query) {
    currentQuery = query || "";
    renderProductGrid();
}

function resetCategoryToAll() {
    currentCategory = "all";
    catbtn.forEach(button => {
        button.classList.toggle("active", button.getAttribute("data-filter") === "all");
    });
    renderProductGrid();
}

// ---- NEW: scroll page to the products section ----
function scrollToProducts() {
    // productContainer is already defined above as document.querySelector(".products-display")
    const productsSection = productContainer.closest('section') || productContainer;
    productsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function renderDropdown(dropdown, query) {
    dropdown.innerHTML = "";

    if (!query.trim()) {
        let history = getSearchHistory();
        if (history.length === 0) {
            dropdown.classList.remove('active');
            return;
        }
        let header = document.createElement('div');
        header.classList.add('search-dropdown-header');
        header.innerHTML = `<span>Recent Searches</span><button class="clear-history-btn">Clear</button>`;
        dropdown.appendChild(header);

        history.forEach(term => {
            let item = document.createElement('div');
            item.classList.add('search-dropdown-item', 'history-item');
            item.innerHTML = `<i data-lucide="history"></i><span>${term}</span>`;
            item.addEventListener('click', () => selectSearchTerm(term, dropdown));
            dropdown.appendChild(item);
        });

        header.querySelector('.clear-history-btn').addEventListener('click', (e) => {
            e.stopPropagation();
            clearSearchHistory();
            renderDropdown(dropdown, query);
        });

        dropdown.classList.add('active');
        lucide.createIcons();
        return;
    }

    let results = searchProducts(query).slice(0, MAX_SUGGESTIONS);

    if (results.length === 0) {
        let empty = document.createElement('div');
        empty.classList.add('search-dropdown-empty');
        empty.textContent = `No results found for "${query}"`;
        dropdown.appendChild(empty);
        dropdown.classList.add('active');
        return;
    }

    results.forEach(product => {
        let item = document.createElement('div');
        item.classList.add('search-dropdown-item', 'suggestion-item');
        item.innerHTML = `
            <img src="${product.pMainImage}" alt="${product.pName}">
            <div class="suggestion-info">
                <span class="suggestion-name">${product.pName}</span>
                <span class="suggestion-category">${product.pCategory}</span>
            </div>
            <span class="suggestion-price">₹${product.pPrice}</span>
        `;
        item.addEventListener('click', () => {
            saveSearchHistory(product.pName);
            window.location.href = "productView.html?id=" + product.pId;
        });
        dropdown.appendChild(item);
    });

    let viewAll = document.createElement('div');
    viewAll.classList.add('search-dropdown-viewall');
    viewAll.textContent = `View all results for "${query}"`;
    viewAll.addEventListener('click', () => selectSearchTerm(query, dropdown));
    dropdown.appendChild(viewAll);

    dropdown.classList.add('active');
}

function selectSearchTerm(term, dropdown) {
    saveSearchHistory(term);
    let input = dropdown.parentElement.querySelector('input');
    input.value = term;
    filterDisplayedProducts(term);
    dropdown.classList.remove('active');
}

// Attach a dropdown container to every .search-box (mobile + desktop)
document.querySelectorAll('.search-box').forEach(box => {
    let dropdown = document.createElement('div');
    dropdown.classList.add('search-dropdown');
    box.appendChild(dropdown);

    let input = box.querySelector('input');

    input.addEventListener('focus', () => {
        box.classList.add('active');
        resetCategoryToAll();
        renderDropdown(dropdown, input.value);
        scrollToProducts(); // ---- NEW: jaise hi search box par focus/click ho, products section tak scroll ----
    });

    input.addEventListener('input', () => {
        resetCategoryToAll();
        renderDropdown(dropdown, input.value);
        filterDisplayedProducts(input.value);
    });

    input.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            selectSearchTerm(input.value, dropdown);
            input.blur();
        }
        if (e.key === 'Escape') {
            dropdown.classList.remove('active');
            box.classList.remove('active');
            input.blur();
        }
    });
});

// Close dropdown on outside click
document.addEventListener('click', (e) => {
    document.querySelectorAll('.search-box').forEach(box => {
        if (!box.contains(e.target)) {
            box.querySelector('.search-dropdown')?.classList.remove('active');
            box.classList.remove('active');
        }
    });
});

// navbar side panel
let sidePanelBtn = document.querySelector(".menu-box");
let sidePanel = document.querySelector(".nav-side-panel");
sidePanelBtn.addEventListener("click", () => {
    sidePanel.classList.toggle("active");
    sidePanelBtn.classList.toggle("active");
});

let loadBtn = document.getElementById("loadBtn");
loadBtn.addEventListener("click", () => {
    let currentCount = productContainer.querySelectorAll(".product-box").length;
    let nextProducts = shuffleArray(Data.HeroProducts).slice(currentCount, currentCount + DISPLAY_COUNT);   
});


/* ---------------- Toast ---------------- */
  const toast = document.getElementById('toast');
  let toastTimer;
  function showToast(msg, icon){
    const iconMarkupHtml = icon ? iconMarkup(icon) : iconMarkup('heart');
    toast.innerHTML = iconMarkupHtml + '<span>' + msg + '</span>';
    toast.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toast.classList.remove('show'), 2200);
  }