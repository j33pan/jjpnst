import React from "react";
import { API, graphqlOperation } from "aws-amplify";
import { listJJPOrders } from "../graphql/queries";
import { withAuthenticator } from "@aws-amplify/ui-react";
import { createJJPComment } from "../graphql/mutations";

function Orders() {
  const [orders, setorders] = React.useState([]);
  const [orddetails, setorddetails] = React.useState([]);

  const getorders = async () => {
    try {
      const response = await API.graphql({
        query: listJJPOrders,
      });
      setorders(response.data.listJJPOrders.items);
    } catch (error) {
      console.error(error);
    }
  };

  const getorddetails = async (id) => {
    try {
      const response = await API.graphql(
        graphqlOperation(getJJPOrder, { id: id })
      );
      console.log(response.data);
      setorddetails(response.data.getJJPOrder.products.items);
    } catch (error) {
      console.error(error);
    }
  };

  const comment = async (productId) => {
    const input = { productid: productId, content: "this is test content 2" };

    try {
      const response = await API.graphql(
        graphqlOperation(createJJPComment, { input: input })
      );
      // console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

  React.useEffect(() => {
    getorders();
  }, []);

  return (
    <div>
      {orders.length === 0 ? (
        <div>No orders</div>
      ) : (
        orders.map(({ id, payable, email }, index) => (
          <div key={id}>
            <button onClick={() => getorddetails(id)}>View</button>
            Order-{id}: ${payable}, {email}
          </div>
        ))
      )}
      <br />
      {orddetails.length > 0 && (
        <div>
          {orddetails.map((x, index) => (
            <div key={index}>
              <input />
              <button onClick={() => comment(x.product.id)}>Comment</button>
              {x.product.name}: ${x.product.price} x{x.amount}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export const getJJPOrder = /* GraphQL */ `
  query GetJJPOrder($id: ID!) {
    getJJPOrder(id: $id) {
      id
      code
      payable
      address
      products {
        items {
          id
          amount
          product {
            id
            name
            price
          }
        }
      }
      createdAt
      updatedAt
      owner
    }
  }
`;

export default withAuthenticator(Orders);
