import "./App.css";
import Amplify, { API, graphqlOperation, input } from "aws-amplify";
import awsconfig from "./aws-exports";
import { listJJPOrders, listJJPProducts } from "./graphql/queries";
import { createJJPOrder, createJJPProduct } from "./graphql/mutations";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Signin from "./pages/Signin";
Amplify.configure(awsconfig);

function App() {
  const getprods = async () => {
    try {
      const response = await API.graphql({
        query: listJJPProducts,
        authMode: "AWS_IAM",
      });
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };
  const getorders = async () => {
    try {
      const response = await API.graphql(graphqlOperation(listJJPOrders));
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
  const creatprods = async () => {
    try {
      const input = { name: "prod000000002admin" };
      const response = await API.graphql(
        graphqlOperation(createJJPProduct, { input: input })
      );
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
  const createorders = async () => {
    try {
      const input = { code: "ord00000000002admin" };
      const response = await API.graphql(
        graphqlOperation(createJJPOrder, { input: input })
      );
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <Router>
        <Link to="/">Home </Link>
        <Link to="/signin">Sign in</Link>

        <Switch>
          <Route component={Home} path="/" exact />
          <Route component={Signin} path="/signin" exact />
        </Switch>
      </Router>
      <button onClick={getprods}>get prods</button>
      <button onClick={getorders}>get orders</button>
      <button onClick={creatprods}>create prod</button>
      <button onClick={createorders}>create order</button>
      <br />
      <br />
    </div>
  );
}

export default App;
