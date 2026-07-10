let loggedIn = false;

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
function BannerImageSliding(){
    
    if(currImage == bannerImages.length){
        currImage = 0;
    }
    Bannerimage.style.backgroundImage = `url('${bannerImages[currImage]}')`;
    updatedot(currImage);
}
function promoImageSliding(){
    currImage++;
    if(currImage == sideBarImages.length){
        currImage = 0;
    }
    sideBar.style.backgroundImage = `url('${sideBarImages[currImage]}')`;
    updatedot(currImage);
}
setInterval(() => {
    BannerImageSliding();
    promoImageSliding();
},3000);
// --- Banner Navigation dots
function updatedot(index){
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



// Rendering Products on UI
const productContainer = document.querySelector(".products-display");
let counter = 1;
Data.HeroProducts.forEach((product, index) => {
    
   
    let card = document.createElement("div");
    card.classList.add("product-box");
    // calculateDiscount(product.pDiscount);
    let originalPrice = calculateDiscount(product);
    card.innerHTML = `
        <div class="product-image-box">
            <div class="supporting-images">
                <div class="supporting-image">
                    <img class="supporting-image-div" id="${'SPImage.'+counter+'.1'}" src="${product.pImage1}">
                </div>
                <div class="supporting-image">
                    <img class="supporting-image-div" id="${'SPImage.'+counter+'.2'}" src="${product.pImage2}">
                </div>
                <div class="supporting-image">
                    <img class="supporting-image-div" id="${'SPImage.'+counter+'.3'}" src="${product.pImage3}">
                </div>
                <div class="supporting-image">
                    <img class="supporting-image-div" id="${'SPImage.'+counter+'.4'}" src="${product.pImage4}">
                </div>
            </div>

            <div class="wishlist-btn" id="${product.pId}">
                <i data-lucide="heart"></i>
            </div>

            <img class="product-image" id="${'product' + counter}" src="${product.pMainImage}">
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
                <button id="buy-btn">Buy Now</button>
                <button class="Cart-btn" id="cart-btn"><i data-lucide="shopping-cart"></i></button>
            </div>
        </div>
        
    `;
    counter++;

    productContainer.prepend(card);
    

});

function calculateDiscount(product){
    if(product.pDiscount === "NA"){
        return null; 
    }
    let finalPrice = Number(product.pPrice.replaceAll(",", ""));
    let discountPercent = Number(product.pDiscount);
    let originalPrice = finalPrice / (1 - discountPercent / 100);
    return Math.floor(originalPrice);
}



// --- wish list btn
let wishListBtn = document.querySelectorAll(".wishlist-btn");
let wishListArray = [];
wishListBtn.forEach(btn => {
    btn.addEventListener("click", () => {
        
        let wishListProductId = btn.getAttribute("id");
        if(!loggedIn){
            openAuthModal();
        }else{
            btn.classList.toggle("active");
            showPopup("added to wishlist");
        }
    });
});
function showWishList(){
    console.log(wishListArray);
};

// add to cart btn
let cartBtn = document.querySelectorAll(".Cart-btn");
cartBtn.forEach(btn => {
    btn.addEventListener("click", () => {
        
        let prductIdCart = btn.getAttribute("id");
        if(!loggedIn){
            openAuthModal();
        }else{
            showPopup("added to Cart");
        }
    });
});


// is code ki baat kar raha hu mein claude please solve this 
// --- Supporting image click: swap it with the currently shown main image
let supportingImageDiv = document.querySelectorAll(".supporting-image-div");
supportingImageDiv.forEach(div => {
    div.addEventListener("click", () => {
    
        // id looks like "SPImage.3.2" -> we only need the product number ("3")
        let [ , productNumber ] = div.id.split(".");
        let mainImage = document.getElementById("product" + productNumber);

        // swap srcs: clicked image becomes main, old main takes its spot
        let oldMainSrc = mainImage.src;
        mainImage.src = div.src;
        div.src = oldMainSrc;
    });
});



// ==============================
// Elements
// ==============================



const authOverlay = document.querySelector(".auth-overlay");

const closeBtn = document.querySelector(".close-auth");



// ==============================
// Open Modal
// ==============================
function openAuthModal(){ 
    authOverlay.classList.add("active");
    document.body.style.overflow = "hidden";
}
// ==============================
// Close Modal
// ==============================

closeBtn.addEventListener("click", closeModal);

function closeModal(){
    authOverlay.classList.remove("active");
    document.body.style.overflow = "auto";

}

let popupContainer = document.querySelector(".popup-msg-box");
function showPopup(msg){
    console.log("popup function" + msg);
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
const authRight  = document.querySelector('.auth-right');
const authTabs   = document.querySelectorAll('.auth-tab');
const authSubmit = document.getElementById('authSubmitBtn');
const authFooter = document.getElementById('authFooterText');

function setAuthMode(mode){
    authTabs.forEach(b => b.classList.toggle('active', b.dataset.mode === mode));

    if(mode === 'signup'){
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
const authPwInput  = document.getElementById('authPasswordInput');
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