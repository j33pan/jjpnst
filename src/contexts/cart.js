import API, { graphqlOperation } from "@aws-amplify/api";
import React from "react";
import { jjpprocessorder } from "../graphql/mutations";
import { loadStripe } from "@stripe/stripe-js";
// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe(
  "pk_test_51InRYpETKhgF1UqhaXOYOg7AY9mYMbSoKjjpJEfZG6bvVEQwjpywJI1rEY8EMSmYcrMkh5U8gC4sDHPTBqjcfMSU00CdKJUuKP"
);
const CartContext = React.createContext();

const CartProvider = ({ children }) => {
  const key = "JJPNST_SHOPPING_CART";
  const [cart, setcart] = React.useState([]);
  const [total, settotal] = React.useState(0);
  const [addr, setaddr] = React.useState("");

  const add = (product) => {
    const { id, name, price } = product;
    const item = cart.find((x) => x.id === id);
    let newcart = [];
    let newAmount = 1;

    if (!item) newcart = [...cart, { id, name, price, amount: 1 }];
    else {
      newAmount = item.amount + 1;
      newcart = [...cart].map((x) => {
        return x.id !== id ? x : { ...x, amount: newAmount };
      });
    }

    setcart(newcart);
    localStorage.setItem(key, JSON.stringify(newcart));
    return newAmount;
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
      localStorage.setItem(key, JSON.stringify(newcart));
    }
  };

  const getItemInCart = (id) => {
    const item = cart.find((x) => x.id === id);
    if (!item) return 0;
    return item.amount;
  };

  React.useEffect(() => {
    const newtotal = [...cart].reduce((x, { amount, price }) => {
      return (x += amount * price);
    }, 0);
    settotal(newtotal);
  }, [cart]);

  React.useEffect(() => {
    const data = JSON.parse(localStorage.getItem(key));
    if (data) setcart(data);
  }, []);

  const processorder = () => {
    const input = {
      address: addr,
      token: "12345623",
      cart: [...cart].map((x) => {
        return { id: x.id, amount: x.amount };
      }),
    };
    process(input);
  };

  const process = async (input) => {
    try {
      const stripe = await stripePromise;
      const response = await API.graphql(
        graphqlOperation(jjpprocessorder, { input: input })
      );
      const sessionId = response.data.jjpprocessorder;
      const res = await stripe.redirectToCheckout({ sessionId: sessionId });
      if (res.error) console.error(res.error);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <CartContext.Provider
      value={{ cart, add, remove, getItemInCart, total, setaddr, processorder }}
    >
      {children}
    </CartContext.Provider>
  );
};

export { CartProvider, CartContext };
