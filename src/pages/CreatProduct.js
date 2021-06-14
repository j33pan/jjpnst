import React from "react";
import { API, graphqlOperation } from "aws-amplify";
import { createJJPProduct } from "../graphql/mutations";
import { withAuthenticator } from "@aws-amplify/ui-react";

function CreatProduct() {
  const [input, setinput] = React.useState({
    name: "",
    price: 0,
  });

  const creatprods = async () => {
    try {
      const response = await API.graphql(
        graphqlOperation(createJJPProduct, { input: input })
      );
    } catch (error) {
      console.error(error);
    }
  };

  const handlesubmit = (e) => {
    e.preventDefault();
    creatprods();
  };
  return (
    <div>
      <form onSubmit={handlesubmit} noValidate>
        <input
          type="text"
          placeholder="Product name"
          onChange={(e) => setinput({ ...input, name: e.target.value })}
        />
        <input
          type="number"
          placeholder="Price"
          onChange={(e) =>
            setinput({ ...input, price: e.target.valueAsNumber })
          }
        />
        <button type="submit">Create</button>
      </form>
    </div>
  );
}

export default withAuthenticator(CreatProduct);
