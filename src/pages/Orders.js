import React from "react";
import { API, graphqlOperation } from "aws-amplify";
import { listJJPOrders } from "../graphql/queries";
import { withAuthenticator } from "@aws-amplify/ui-react";

function Orders() {
  const [orders, setorders] = React.useState([]);
  const [orddetails, setorddetails] = React.useState([]);
  const getorders = async () => {
    try {
      const response = await API.graphql({
        query: listJJPOrders,
      });
      console.log(response);
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
      console.log(response.data.getJJPOrder.products.items);
      setorddetails(response.data.getJJPOrder.products.items);
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
        orders.map(({ id, payable }, index) => (
          <div key={id}>
            <button onClick={() => getorddetails(id)}>View</button> ORD {id}: $
            {payable}
          </div>
        ))
      )}
      <br />
      {orddetails.length > 0 && (
        <div>
          {orddetails.map((x, index) => (
            <div key={index}>
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
          amount
          product {
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
