import "./App.css";
import Amplify, { API, graphqlOperation } from "aws-amplify";
import awsconfig from "./aws-exports";
import { createJJPOrder } from "./graphql/mutations";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Signin from "./pages/Signin";
import Products from "./pages/Products";
import Orders from "./pages/Orders";
import CreatProduct from "./pages/CreatProduct";
Amplify.configure(awsconfig);

function App() {
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
        <Link to="/products">Products </Link>
        <Link to="/orders">Orders </Link>
        <Link to="/createprod">Create Product </Link>
        <Link to="/signin">Sign in</Link>
        <hr />
        <Switch>
          <Route component={Home} path="/" exact />
          <Route component={Signin} path="/signin" exact />
          <Route component={Products} path="/products" exact />
          <Route component={Orders} path="/orders" exact />
          <Route component={CreatProduct} path="/createprod" exact />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
