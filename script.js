const products = [
  {
    id: 1,
    name: "Oversized Hoodie",
    price: 89,
    img: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=600",
  },
  {
    id: 2,
    name: "Premium Denim Jacket",
    price: 129,
    img: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=600",
  },
  {
    id: 3,
    name: "Classic White Sneakers",
    price: 79,
    img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=600",
  },
  {
    id: 4,
    name: "Minimal Tote Bag",
    price: 45,
    img: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=600",
  },
  {
    id: 5,
    name: "Streetwear Cap",
    price: 35,
    img: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?q=80&w=600",
  },
  {
    id: 6,
    name: "Cargo Pants",
    price: 99,
    img: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?q=80&w=600",
  },
];
let cart = [];
const grid = document.getElementById("productGrid");
products.forEach((p) => {
  grid.innerHTML += `
    <div class="card">
      <img src="${p.img}" loading="lazy">
      <div class="card-body">
        <h4>${p.name}</h4>
        <p>$${p.price}</p>
        <button class="add-btn" onclick="addToCart(${p.id})">Add to Cart +</button>
      </div>
    </div>`;
});
function addToCart(id) {
  const prod = products.find((x) => x.id === id);
  cart.push(prod);
  updateCart();
  document.getElementById("cartModal").classList.add("active");
}
function updateCart() {
  document.getElementById("cartCount").innerText = cart.length;
  const total = cart.reduce((s, i) => s + i.price, 0);
  document.getElementById("cartTotal").innerText = total;
  const itemsDiv = document.getElementById("cartItems");
  itemsDiv.innerHTML = "";
  cart.forEach((c, i) => {
    itemsDiv.innerHTML += `<div class="cart-item"><img src="${c.img}"><div><b>${c.name}</b><br>$${c.price}</div><span style="margin-left:auto;cursor:pointer" onclick="removeItem(${i})">✕</span></div>`;
  });
  if (cart.length === 0)
    itemsDiv.innerHTML =
      "<p style='color:#888;text-align:center;margin-top:30px'>Cart is empty</p>";
}
function removeItem(i) {
  cart.splice(i, 1);
  updateCart();
}
function toggleCart() {
  document.getElementById("cartModal").classList.toggle("active");
}
function scrollToProducts() {
  document.getElementById("products").scrollIntoView({ behavior: "smooth" });
}
function checkout() {
  if (cart.length === 0) {
    alert("Cart empty!");
    return;
  }
  alert(
    "Success! Order placed - $" +
      document.getElementById("cartTotal").innerText +
      " - This is a demo project by MRK Official",
  );
  cart = [];
  updateCart();
  toggleCart();
}
