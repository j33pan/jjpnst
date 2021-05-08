import { withAuthenticator } from "@aws-amplify/ui-react";
import React from "react";
import { CartContext } from "../contexts/cart";

function Checkout() {
  const { setaddr, processorder } = React.useContext(CartContext);
  const handlesubmit = (e) => {
    e.preventDefault();
    processorder();
  };

  return (
    <div>
      <h3>Checkout</h3>
      <form onSubmit={handlesubmit} noValidate>
        <input
          type="text"
          placeholder="Enter address"
          onChange={(e) => setaddr(e.target.value)}
        />
        <button type="submit">Pay</button>
      </form>
    </div>
  );
}

export default withAuthenticator(Checkout);
