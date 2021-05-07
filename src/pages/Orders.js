import React from "react";
import Amplify, { API, graphqlOperation } from "aws-amplify";
import { listJJPOrders, listJJPProducts } from "../graphql/queries";
import { withAuthenticator } from "@aws-amplify/ui-react";

function Orders() {
  const [orders, setorders] = React.useState([]);
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
  React.useEffect(() => {
    getorders();
  }, []);
  return (
    <div>
      {orders.length === 0 ? (
        <div>No orders</div>
      ) : (
        orders.map((x) => (
          <div key={x.id}>
            {x.code}: ${x.payable}
          </div>
        ))
      )}
    </div>
  );
}

export default withAuthenticator(Orders);
