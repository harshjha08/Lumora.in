let loggedIn = true;

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
                    <span>(209)</span>
                </div>

                <div class="price">
                    $${product.pPrice}
                    <span>$3999</span>
                </div>
            </div>
        </div>
        
    `;
    counter++;

    productContainer.append(card);
    

});

// lucide.createIcons();

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
        }
        
    });
});


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
function showWishList(){
    console.log(wishListArray);
}


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

