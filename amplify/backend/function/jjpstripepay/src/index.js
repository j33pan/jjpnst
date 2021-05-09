/* Amplify Params - DO NOT EDIT
	API_JJPNST_GRAPHQLAPIIDOUTPUT
	API_JJPNST_JJPPRODUCTTABLE_ARN
	API_JJPNST_JJPPRODUCTTABLE_NAME
	AUTH_JJPNST1BF6237D_USERPOOLID
	ENV
	REGION
Amplify Params - DO NOT EDIT */
const { CognitoIdentityServiceProvider } = require("aws-sdk");
const cognitoIdentityServiceProvider = new CognitoIdentityServiceProvider();
const USER_POOL_ID = process.env.AUTH_JJPNST1BF6237D_USERPOOLID;
const stripe = require("stripe")(
  "sk_test_51InRYpETKhgF1UqhVfnrhLYqNBSfjk4ojpziYPFHaAXaEIZrGXpqhIcJTIWjdj4UNIuVsLvjmDFS4pDQETCJr0hd00pfhFuYLt"
);
const AWS = require("aws-sdk");
const docClient = new AWS.DynamoDB.DocumentClient();

exports.handler = async (event) => {
  const { cart, token, address } = event.arguments.input;
  const { username } = event.identity.claims;
  const email = await getUserEmail(event);
  const item = await getItem("0304f6d1-7f88-45db-9af3-cfef3fc4e8a9");
  const res = await getItems(cart);
  const items = res["Responses"][process.env.API_JJPNST_JJPPRODUCTTABLE_NAME];
  let payable = 0;
  const input = [...cart].map((x) => {
    const y = items.find((y) => y.id === x.id);
    payable += y.price * x.amount;
    return {
      price_data: {
        currency: "cad",
        product_data: { name: y.name },
        unit_amount: y.price * 100,
      },
      quantity: x.amount,
    };
  });
  const sessionId = await createsession(input);

  return { payable, cart, username, address, email, sessionId };
};

const getUserEmail = async (event) => {
  const params = {
    UserPoolId: process.env.AUTH_JJPNST1BF6237D_USERPOOLID,
    Username: event.identity.claims.username,
  };
  const user = await cognitoIdentityServiceProvider
    .adminGetUser(params)
    .promise();
  const { Value: email } = user.UserAttributes.find((attr) => {
    if (attr.Name === "email") {
      return attr.Value;
    }
  });
  return email;
};

const createsession = async (items) => {
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    line_items: items,
    mode: "payment",
    success_url: "http://localhost:3000/paymentsuccess",
    cancel_url: "http://localhost:3000",
  });
  return session.id;
};

async function getItem(id) {
  const params = {
    TableName: process.env.API_JJPNST_JJPPRODUCTTABLE_NAME,
    Key: { id: id },
  };
  try {
    const data = await docClient.get(params).promise();
    return data;
  } catch (err) {
    return err;
  }
}

async function getItems(cart) {
  let keys = [];
  for (let i = 0; i < cart.length; i++) keys.push({ id: cart[i].id });
  const params = { RequestItems: {} };
  params["RequestItems"][process.env.API_JJPNST_JJPPRODUCTTABLE_NAME] = {
    Keys: keys,
    AttributesToGet: ["id", "name", "price"],
  };
  try {
    const data = await docClient.batchGet(params).promise();
    return data;
  } catch (err) {
    return err;
  }
}
