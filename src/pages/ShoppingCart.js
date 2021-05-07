import React from "react";
import { CartContext } from "../contexts/cart";

function ShoppingCart() {
  const { cart, total, add, remove } = React.useContext(CartContext);

  return (
    <div>
      {cart.length === 0 ? (
        <div>Empty Cart</div>
      ) : (
        cart.map(({ id, name, price, amount }) => (
          <div key={id}>
            {name}: ${price} x {amount}
            <button onClick={() => remove(id)}>-</button>
            <button onClick={() => add({ id, name, price, amount })}>+</button>
          </div>
        ))
      )}
      <hr />
      <div>Total: ${total}</div>
      <button disabled={cart.length === 0}>Checkout</button>
    </div>
  );
}

export default ShoppingCart;
