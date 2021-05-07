import React from "react";

function Checkout() {
  const handlesubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <h3>Checkout</h3>
      <form onSubmit={handlesubmit} noValidate>
        <button type="submit">Pay</button>
      </form>
    </div>
  );
}

export default Checkout;
