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
    currImage++;
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


let supportingImageDiv = document.querySelectorAll(".supporting-image-div");
let product1MainImage = document.getElementById("product1");
let product2MainImage = document.getElementById("product2");
let product3MainImage = document.getElementById("product3");
let product4MainImage = document.getElementById("product4");
let product5MainImage = document.getElementById("product5");
let product6MainImage = document.getElementById("product6");
let product7MainImage = document.getElementById("product7");
let product8MainImage = document.getElementById("product8");
let product9MainImage = document.getElementById("product9");
let product10MainImage = document.getElementById("product10");
let product11MainImage = document.getElementById("product11");
let product12MainImage = document.getElementById("product12");
supportingImageDiv.forEach(div => {
    
    div.addEventListener("click", () => {
        let clickedDivId = div.getAttribute("id");//SPImage1,2,3
        console.log(clickedDivId);
        if(clickedDivId === "SPImage.1.1"){
            product1MainImage.src = Data.HeroProducts[0].pImage1;
        }else if(clickedDivId === "SPImage.1.2"){
            product1MainImage.src = Data.HeroProducts[0].pImage2;
        }else if(clickedDivId === "SPImage.1.3"){
            product1MainImage.src = Data.HeroProducts[0].pImage3;
        }else if(clickedDivId === "SPImage.1.4"){
            product1MainImage.src = Data.HeroProducts[0].pImage4;
        }else if(clickedDivId === "SPImage.2.1"){
            product2MainImage.src = Data.HeroProducts[1].pImage1;
        }else if(clickedDivId === "SPImage.2.2"){
            product2MainImage.src = Data.HeroProducts[1].pImage2;
        }else if(clickedDivId === "SPImage.2.3"){
            product2MainImage.src = Data.HeroProducts[1].pImage3;
        }else if(clickedDivId === "SPImage.2.4"){
            product2MainImage.src = Data.HeroProducts[1].pImage4;
        }else if(clickedDivId === "SPImage.3.1"){
            product3MainImage.src = Data.HeroProducts[2].pImage1;
        }else if(clickedDivId === "SPImage.3.2"){
            product3MainImage.src = Data.HeroProducts[2].pImage2;
        }else if(clickedDivId === "SPImage.3.3"){
            product3MainImage.src = Data.HeroProducts[2].pImage3;
        }else if(clickedDivId === "SPImage.3.4"){
            product3MainImage.src = Data.HeroProducts[2].pImage4;
        }else if(clickedDivId === "SPImage.4.1"){
            product4MainImage.src = Data.HeroProducts[3].pImage1;
        }else if(clickedDivId === "SPImage.4.2"){
            product4MainImage.src = Data.HeroProducts[3].pImage2;
        }else if(clickedDivId === "SPImage.4.3"){
            product4MainImage.src = Data.HeroProducts[3].pImage3;
        }else if(clickedDivId === "SPImage.4.4"){
            product4MainImage.src = Data.HeroProducts[3].pImage4;
        }else if(clickedDivId === "SPImage.5.1"){
            product5MainImage.src = Data.HeroProducts[4].pImage1;
        }else if(clickedDivId === "SPImage.5.2"){
            product5MainImage.src = Data.HeroProducts[4].pImage2;
        }else if(clickedDivId === "SPImage.5.3"){
            product5MainImage.src = Data.HeroProducts[4].pImage3;
        }else if(clickedDivId === "SPImage.5.4"){
            product5MainImage.src = Data.HeroProducts[4].pImage4;
        }else if(clickedDivId === "SPImage.6.1"){
            product6MainImage.src = Data.HeroProducts[5].pImage1;
        }else if(clickedDivId === "SPImage.6.2"){
            product6MainImage.src = Data.HeroProducts[5].pImage2;
        }else if(clickedDivId === "SPImage.6.3"){
            product6MainImage.src = Data.HeroProducts[5].pImage3;
        }else if(clickedDivId === "SPImage.6.4"){
            product6MainImage.src = Data.HeroProducts[5].pImage4;
        }else if(clickedDivId === "SPImage.7.1"){
            product7MainImage.src = Data.HeroProducts[6].pImage1;
        }else if(clickedDivId === "SPImage.7.2"){
            product7MainImage.src = Data.HeroProducts[6].pImage2;
        }else if(clickedDivId === "SPImage.7.3"){
            product7MainImage.src = Data.HeroProducts[6].pImage3;
        }else if(clickedDivId === "SPImage.7.4"){
            product7MainImage.src = Data.HeroProducts[6].pImage4;
        }else if(clickedDivId === "SPImage.8.1"){
            product8MainImage.src = Data.HeroProducts[7].pImage1;
        }else if(clickedDivId === "SPImage.8.2"){
            product8MainImage.src = Data.HeroProducts[7].pImage2;
        }else if(clickedDivId === "SPImage.8.3"){
            product8MainImage.src = Data.HeroProducts[7].pImage3;
        }else if(clickedDivId === "SPImage.8.4"){
            product8MainImage.src = Data.HeroProducts[7].pImage4;
        }else if(clickedDivId === "SPImage.9.1"){
            product9MainImage.src = Data.HeroProducts[8].pImage1;
        }else if(clickedDivId === "SPImage.9.2"){
            product9MainImage.src = Data.HeroProducts[8].pImage2;
        }else if(clickedDivId === "SPImage.9.3"){
            product9MainImage.src = Data.HeroProducts[8].pImage3;
        }else if(clickedDivId === "SPImage.9.4"){
            product9MainImage.src = Data.HeroProducts[8].pImage4;
        }else if(clickedDivId === "SPImage.10.1"){
            product10MainImage.src = Data.HeroProducts[9].pImage1;
        }else if(clickedDivId === "SPImage.10.2"){
            product10MainImage.src = Data.HeroProducts[9].pImage2;
        }else if(clickedDivId === "SPImage.10.3"){
            product10MainImage.src = Data.HeroProducts[9].pImage3;
        }else if(clickedDivId === "SPImage.10.4"){
            product10MainImage.src = Data.HeroProducts[9].pImage4;
        }else if(clickedDivId === "SPImage.11.1"){
            product11MainImage.src = Data.HeroProducts[10].pImage1;
        }else if(clickedDivId === "SPImage.11.2"){
            product11MainImage.src = Data.HeroProducts[10].pImage2;
        }else if(clickedDivId === "SPImage.11.3"){
            product11MainImage.src = Data.HeroProducts[10].pImage3;
        }else if(clickedDivId === "SPImage.11.4"){
            product11MainImage.src = Data.HeroProducts[10].pImage4;
        }else if(clickedDivId === "SPImage.12.1"){
            product12MainImage.src = Data.HeroProducts[11].pImage1;
        }else if(clickedDivId === "SPImage.12.2"){
            product12MainImage.src = Data.HeroProducts[11].pImage2;
        }else if(clickedDivId === "SPImage.12.3"){
            product12MainImage.src = Data.HeroProducts[11].pImage3;
        }else if(clickedDivId === "SPImage.12.4"){
            product12MainImage.src = Data.HeroProducts[11].pImage4;
        }
        
    })
})
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

