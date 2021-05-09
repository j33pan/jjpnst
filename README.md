# JJPNST

- Building this project to practice integration of different technologies! Also in case I want to sell cakes in the future :laughing:
- I have a React client app that sends requests to a GraphQL API which reads and writes to a DynamoDB database.
- The product is integrated with Stripe API to handle payment.
- The product is protected by AWS Cognito authentication.

### Functionalities

###### List Products

```javascript
const response = await API.graphql({
  query: listJJPProducts,
  authMode: "AWS_IAM",
});
```

- API endpoint protected by AWS_IAM role
- Guests, authenticated users and admins has access to product list

###### Add to Cart

- all types of users can add to cart. This is purely frontend

###### Checkout

- API endpoint protected by AMAZON_COGNITO_USER_POOLS
- Guests does not have access to checkout
- Authenticated users can checkout
- It triggers a PipeLine Resolver, which executes 2 Lambda functions sequentially. The first Lambda function creates a stripe session. The second Lamda function creates a JJPOrder for the user.

```javascript
const response = await API.graphql(
  graphqlOperation(jjpprocessorder, { input: input })
);
```

- The pipeline accepts product ids and quantity, gets the product price from the database, and calculates the total amount to charge. When finished execution, it returns a session id to the client.
- The client uses the session id to redirect the customer to Stripe checkout

```javascript
const res = await stripe.redirectToCheckout({
  sessionId: sessionId,
});
```

- On success, Stripe redirects to the success page which we provided when creating a Stripe session

###### List Orders

```javascript
const response = await API.graphql({
  query: listJJPOrders,
});
```

- API endpoint protected by AMAZON_COGNITO_USER_POOLS
- Guests does not have access to order list
- Authenticated users can view their own orders (JJPOrder.owner stores username)
- Admins can view all orders

###### View Order Details

```javascript
const response = await API.graphql(graphqlOperation(getJJPOrder, { id: id }));
```

- API endpoint protected by AMAZON_COGNITO_USER_POOLS
- Guests does not have access to order list
- Authenticated users can view their own orders' details (JJPOrder.owner stores username)
- Admins can view all orders' details

### Schema Design

```
type JJPProduct
  @model
  @auth(
    rules: [
      { allow: public, provider: iam, operations: [read] }
      { allow: private, operations: [read] }
      { allow: groups, groups: ["Admin"] }
    ]
  ) {
  id: ID!
  name: String
  price: Float
  orders: [JJPOrderProduct] @connection(keyName: "byproduct", fields: ["id"])
}

type JJPOrder
  @model
  @auth(rules: [{ allow: owner }, { allow: groups, groups: ["Admin"] }]) {
  id: ID!
  code: String
  payable: Float
  address: String
  email: String
  products: [JJPOrderProduct] @connection(keyName: "byorder", fields: ["id"])
}

type JJPOrderProduct
  @model
  @auth(rules: [{ allow: owner }, { allow: groups, groups: ["Admin"] }])
  @key(name: "byorder", fields: ["orderid", "productid"])
  @key(name: "byproduct", fields: ["productid", "orderid"]) {
  id: ID!
  orderid: ID!
  productid: ID!
  amount: Int
  product: JJPProduct @connection(fields: ["productid"])
  order: JJPOrder @connection(fields: ["orderid"])
}

type JJPTest @model @auth(rules: [{ allow: owner }]) {
  id: ID!
  note: String
}

input JJPPO {
  cart: [CartItem]
  token: String
  address: String
}

input CartItem {
  id: ID
  amount: Int
}

type Mutation {
  jjpprocessorder(input: JJPPO!): String
    @function(name: "jjpstripepay-${env}")
    @function(name: "jjpcreateorder-${env}")
}
```
