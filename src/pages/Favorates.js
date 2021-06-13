import API, { graphqlOperation } from "@aws-amplify/api";
import React from "react";
import { createJJPFavorate } from "../graphql/mutations";
import { listJJPFavorates } from "../graphql/queries";

export const Favorates = () => {
  const [favs, setFavs] = React.useState([]);

  const getfavs = async () => {
    try {
      const response = await API.graphql({ query: listJJPFavorates });
      setFavs(response.data.listJJPFavorates.items);
      console.log(response.data.listJJPFavorates.items);
    } catch (error) {
      console.error(error);
    }
  };

  React.useEffect(() => {
    getfavs();
  }, []);

  return (
    <div>
      {favs.map(({ id, product: { name, price } }) => (
        <div key={id}>
          {name}: ${price}
        </div>
      ))}
    </div>
  );
};
