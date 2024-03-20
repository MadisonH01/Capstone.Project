import React, { useState } from "react";

function CartItemCounter({ id, addProductToCart }) {
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (event) => {
    const newQuantity = parseInt(event.target.value);
    setQuantity(newQuantity);
    addProductToCart(id, newQuantity);
  };

  return (
    <div>
      <input
        type="number"
        min="0"
        max="10"
        value={quantity}
        onChange={handleQuantityChange}
      />
    </div>
  );
}

export default CartItemCounter;
