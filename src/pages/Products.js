import React from "react";
import Amplify, { API, graphqlOperation } from "aws-amplify";
import { listJJPProducts } from "../graphql/queries";

function Products() {
  const [prods, setprods] = React.useState([]);
  const getprods = async () => {
    try {
      const response = await API.graphql({
        query: listJJPProducts,
        authMode: "AWS_IAM",
      });
      console.log(response);
      setprods(response.data.listJJPProducts.items);
    } catch (error) {
      console.error(error);
    }
  };
  React.useEffect(() => {
    getprods();
  }, []);
  return (
    <div>
      {/* <button onClick={getprods}>get prods</button> */}
      {prods.map((x) => (
        <div key={x.id}>
          {x.name}: ${x.price}
        </div>
      ))}
    </div>
  );
}

export default Products;
