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
import ShoppingCart from "./pages/ShoppingCart";
import Checkout from "./pages/Checkout";
import PaymentSuccess from "./pages/PaymentSuccess";
import { Favorates } from "./pages/Favorates";
import { NavBar } from "./components/NavBar";
Amplify.configure(awsconfig);

function App() {
  const createorders = async () => {
    try {
      const input = { code: "ord00000000002admin" };
      const response = await API.graphql(
        graphqlOperation(createJJPOrder, { input: input })
      );
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <Router>
        <NavBar />
        <br />
        <Switch>
          <Route component={Home} path="/" exact />
          <Route component={Signin} path="/signin" exact />
          <Route component={Products} path="/products" exact />
          <Route component={Orders} path="/orders" exact />
          <Route component={CreatProduct} path="/createprod" exact />
          <Route component={ShoppingCart} path="/cart" exact />
          <Route component={Checkout} path="/checkout" exact />
          <Route component={PaymentSuccess} path="/paymentsuccess" exact />
          <Route component={Favorates} path="/favorates" exact />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
