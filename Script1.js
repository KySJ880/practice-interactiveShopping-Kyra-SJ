const cartItem = document.getElementById("cart-item");
const addButton = document.getElementById("add-button");
addButton.addEventListener("click", addCartItem);
function addCartItem () {
    const newItem = cartItem.value;
    const listItem = document.createElement("li");
listItem.textContent = newItem;
}