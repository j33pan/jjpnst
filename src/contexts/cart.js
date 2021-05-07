import React from "react";

const CartContext = React.createContext();

const CartProvider = ({ children }) => {
  const [cart, setcart] = React.useState([]);

  const add = (product) => {
    const { id, name, price } = product;
    const item = cart.find((x) => x.id === id);
    let newcart = [];
    if (!item) newcart = [...cart, { id, name, price, amount: 1 }];
    else
      newcart = [...cart].map((x) => {
        return x.id !== id ? x : { ...x, amount: x.amount + 1 };
      });
    setcart(newcart);
  };

  const remove = (id) => {
    const item = cart.find((x) => x.id === id);
    let newcart = [];
    if (item) {
      if (item.amount === 1) newcart = [...cart].filter((x) => x.id !== id);
      else
        newcart = [...cart].map((x) => {
          return x.id !== id ? x : { ...x, amount: x.amount - 1 };
        });
      setcart(newcart);
    }
  };

  React.useEffect(() => {
    console.log(cart);
  }, [cart]);

  return (
    <CartContext.Provider value={{ cart, add, remove }}>
      {children}
    </CartContext.Provider>
  );
};

export { CartProvider, CartContext };
