/* ============================================================
   LUMORA Cart Utilities
   Shared across index.html, productView.html and cart.html
   Cart is stored in localStorage as: { "P1201": 2, "P1210": 1 }
   ============================================================ */

const CART_KEY = "lumoraCart";

function getCart(){
    try{
        return JSON.parse(localStorage.getItem(CART_KEY)) || {};
    }catch(e){
        return {};
    }
}

function saveCart(cart){
    localStorage.setItem(CART_KEY, JSON.stringify(cart));
}

function addToCart(pId, qty = 1){
    const cart = getCart();
    cart[pId] = (cart[pId] || 0) + qty;
    saveCart(cart);
    return cart;
}

function setCartQty(pId, qty){
    const cart = getCart();
    if(qty <= 0){
        delete cart[pId];
    } else {
        cart[pId] = qty;
    }
    saveCart(cart);
    return cart;
}

function removeFromCart(pId){
    const cart = getCart();
    delete cart[pId];
    saveCart(cart);
    return cart;
}

function clearCart(){
    localStorage.removeItem(CART_KEY);
}

function getCartCount(){
    const cart = getCart();
    return Object.values(cart).reduce((sum, qty) => sum + qty, 0);
}

/* Call this on every page's load to keep the header cart badge in sync */
function refreshCartBadge(){
    const badge = document.getElementById('cartCount');
    if(badge) badge.textContent = getCartCount();
}