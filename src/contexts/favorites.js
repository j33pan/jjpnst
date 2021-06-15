import API, { graphqlOperation } from "@aws-amplify/api";
import React from "react";
import { createJJPFavorate, deleteJJPFavorate } from "../graphql/mutations";
import { listJJPFavorates } from "../graphql/queries";

const FavoriteContext = React.createContext();

const FavoriteProvider = ({ children }) => {
  const key = "JJPNST_FAVORITE";
  const [favs, setFavs] = React.useState([]);

  const favorite = (product) => {
    if (favs.find((x) => x.id === product.id)) return;

    const data = [...favs, product];
    setFavs(data);
    localStorage.setItem(key, JSON.stringify(data));
  };

  const unFavorite = (id) => {
    if (!favs.find((x) => x.id === id)) return;

    const data = favs.filter((x) => x.id !== id);
    setFavs(data);
    localStorage.setItem(key, JSON.stringify(data));
  };

  React.useEffect(() => {
    const data = JSON.parse(localStorage.getItem(key));
    if (data) setFavs(data);
  }, []);

  return (
    <FavoriteContext.Provider value={{ favorite, unFavorite, favs }}>
      {children}
    </FavoriteContext.Provider>
  );
};

export { FavoriteProvider, FavoriteContext };
