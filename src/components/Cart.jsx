const cart = [];

function addToCart(item) {
    cart.push(item);
    updateCart();
}

function removeFromCart(index) {
    cart.splice(index, 1);
    updateCart();
}

function updateCart() {
    const cartItems = document.getElementById('cart-items');
    cartItems.innerHTML = '';
    let total = 0;

    cart.forEach((item, index) => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - $${item.price}`;
        li.classList.add('cart-item');
        const removeBtn = document.createElement('button');
        removeBtn.textContent = 'Remove';
        removeBtn.addEventListener('click', () => removeFromCart(index));
        li.appendChild(removeBtn);
        cartItems.appendChild(li);
        total += item.price;
    });

    document.getElementById('cart-total').textContent = `Total: $${total.toFixed(2)}`;
}

document.getElementById('checkout-btn').addEventListener('click', () => {
    // Add checkout functionality
});