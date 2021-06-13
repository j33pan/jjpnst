import React from "react";
import { API, graphqlOperation } from "aws-amplify";
import { listJJPProducts } from "../graphql/queries";
import { CartContext } from "../contexts/cart";
import { createJJPFavorate } from "../graphql/mutations";

function Products() {
  const [prods, setprods] = React.useState([]);
  const getprods = async () => {
    try {
      const response = await API.graphql({
        query: listJJPProducts,
        authMode: "AWS_IAM",
      });
      // console.log(response);
      setprods(response.data.listJJPProducts.items);
    } catch (error) {
      console.error(error);
    }
  };

  const createfav = async (productId) => {
    const input = { productid: productId };
    try {
      const response = await API.graphql(
        graphqlOperation(createJJPFavorate, { input: input })
      );
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

  React.useEffect(() => {
    getprods();
  }, []);

  const { add, remove } = React.useContext(CartContext);
  return (
    <div>
      {prods.map((x) => (
        <div key={x.id}>
          <button onClick={() => createfav(x.id)}>Star</button>
          {x.name}: ${x.price}
          <button onClick={() => remove(x.id)}>-</button>
          <button onClick={() => add(x)}>+</button>
        </div>
      ))}
    </div>
  );
}

export default Products;
