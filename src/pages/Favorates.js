import API, { graphqlOperation } from "@aws-amplify/api";
import React from "react";

const listJJPFavorates = /* GraphQL */ `
  query ListJJPFavorates(
    $filter: ModelJJPFavorateFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listJJPFavorates(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        productid
        createdAt
        updatedAt
        product {
          id
          name
          price
          createdAt
          updatedAt
        }
        owner
      }
      nextToken
    }
  }
`;

export const Favorates = () => {
  const [favs, setFavs] = React.useState([]);

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
    <div>
      {favs.map(({ id, product: { name, price } }) => (
        <div key={id}>
          {name}: ${price}
        </div>
      ))}
    </div>
  );
};
