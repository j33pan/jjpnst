import React from "react";
import { API, graphqlOperation } from "aws-amplify";
import { listJJPComments, listJJPProducts } from "../graphql/queries";
import { CartContext } from "../contexts/cart";
import { createJJPFavorate } from "../graphql/mutations";
import { ProductOverview } from "../components/ProductOverview";
import { Grid } from "@material-ui/core";

function Products() {
  const [prods, setprods] = React.useState([]);
  const [comments, setComments] = React.useState([]);

  const getJJPProduct = /* GraphQL */ `
    query GetJJPProduct($id: ID!) {
      getJJPProduct(id: $id) {
        id
        name
        price
        orders {
          nextToken
        }
        createdAt
        updatedAt
        comments {
          items {
            id
            productid
            content
          }
        }
      }
    }
  `;

  const getprods = async () => {
    try {
      const response = await API.graphql({
        query: listJJPProducts,
        authMode: "AWS_IAM",
      });
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
    } catch (error) {
      console.error(error);
    }
  };

  const getComments = async (id) => {
    try {
      const response = await API.graphql(
        graphqlOperation(getJJPProduct, { id: id })
      );
      setComments(response.data.getJJPProduct.comments.items);
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
      {/* {prods.map((x) => (
        <div key={x.id}>
          <button onClick={() => createfav(x.id)}>Star</button>
          <button onClick={() => getComments(x.id)}>Comments</button>
          {x.name}: ${x.price}
          <button onClick={() => remove(x.id)}>-</button>
          <button onClick={() => add(x)}>+</button>
        </div>
      ))}
      <br />
      {comments.length > 0 && (
        <div>
          {comments.map(({ id, productid, content }) => (
            <div key={id}>{content}</div>
          ))}
        </div>
      )} */}

      <Grid container spacing={3}>
        {prods.map((x) => (
          <Grid item key={x.id} xs={3}>
            <ProductOverview info={x} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default Products;
