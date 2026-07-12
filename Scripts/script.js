let loggedIn = false;
const SavedUserName = "harshjha08";
const SavedUserPassword = "user123";

window.addEventListener("load", () => {

    const preloader = document.querySelector(".preloader");

    setTimeout(() => {

        preloader.classList.add("hide");

    }, 2000);

});

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
catbtn.forEach(btn => {
    btn.addEventListener("click", () => {
        catbtn.forEach(button => {
            button.classList.remove("active");
        });
        let id = btn.getAttribute("id");
        btn.classList.add("active");
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
    // reversed so it visually matches the original "prepend" order
    [...productList].reverse().forEach(product => {
        html += buildProductCard(product, counter);
        counter++;
    });
    productContainer.innerHTML = html;
    lucide.createIcons();
}

// ---- Initial load: shuffle ALL products, show only first 30 ----
let displayedProducts = shuffleArray(Data.HeroProducts).slice(0, DISPLAY_COUNT);
renderProducts(displayedProducts);

// ================= EVENT DELEGATION (works for any rendered card, old or new) ================= //
productContainer.addEventListener("click", (e) => {

    // ---- Wishlist ----
    let wishBtn = e.target.closest(".wishlist-btn");
    if (wishBtn) {
        if (!loggedIn) {
            openAuthModal();
        } else {
            wishBtn.classList.toggle("active");
            showPopup("added to wishlist");
        }
        return;
    }

    // ---- Cart ----
    let cartBtn = e.target.closest(".Cart-btn");
    if (cartBtn) {
        if (!loggedIn) {
            openAuthModal();
        } else {
            showPopup("added to Cart");
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
        showPopup("Login Sucessfully");
        loggedIn = "true";
    } else {
        showInvalidMsg("Invalid User Or Password");
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
    if (!query.trim()) {
        renderProducts(displayedProducts); // wapas original shuffled 30
        return;
    }
    let results = searchProducts(query); // full Data.HeroProducts search
    renderProducts(results);
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
        renderDropdown(dropdown, input.value);
        scrollToProducts(); // ---- NEW: jaise hi search box par focus/click ho, products section tak scroll ----
    });

    input.addEventListener('input', () => {
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
});