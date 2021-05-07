import React from "react";
import { CartContext } from "../contexts/cart";

function ShoppingCart() {
  const { cart } = React.useContext(CartContext);
  return (
    <div>
      {cart.length === 0 ? (
        <div>Empty Cart</div>
      ) : (
        cart.map(({ id, name, price, amount }) => (
          <div key={id}>
            {name}: ${price} x {amount}
          </div>
        ))
      )}
    </div>
  );
}

export default ShoppingCart;
