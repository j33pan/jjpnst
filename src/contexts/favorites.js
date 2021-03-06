import API, { graphqlOperation } from "@aws-amplify/api";
import React from "react";
import { createJJPFavorate, deleteJJPFavorate } from "../graphql/mutations";
import { listJJPFavorates } from "../graphql/queries";

const FavoriteContext = React.createContext();

const FavoriteProvider = ({ children }) => {
  const [favs, setFavs] = React.useState([]);

  const favorite = async (productId) => {
    if (favs.find((x) => x.productid == productId)) return;

    const input = { productid: productId };
    try {
      const response = await API.graphql(
        graphqlOperation(createJJPFavorate, { input: input })
      );
      setFavs([...favs, response.data.createJJPFavorate]);
    } catch (error) {
      console.error(error);
    }
  };

  const unFavorite = async (productId) => {
    const item = favs.find((x) => x.productid == productId);
    const input = { id: item.id };

    try {
      const response = await API.graphql(
        graphqlOperation(deleteJJPFavorate, { input: input })
      );
      const newFavs = favs.filter((x) => x.id !== item.id);
      setFavs(newFavs);
    } catch (error) {
      console.error(error);
    }
  };

  const getfavs = async () => {
    try {
      const response = await API.graphql({ query: listJJPFavorates });
      setFavs(response.data.listJJPFavorates.items);
    } catch (error) {
      console.error(error);
    }
  };

  React.useEffect(() => {
    getfavs();
  }, []);

  return (
    <FavoriteContext.Provider value={{ favorite, unFavorite, favs }}>
      {children}
    </FavoriteContext.Provider>
  );
};

export { FavoriteProvider, FavoriteContext };
