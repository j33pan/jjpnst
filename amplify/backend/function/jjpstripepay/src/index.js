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
const stripe = require("stripe")("<strip_private_key>");
const AWS = require("aws-sdk");
const docClient = new AWS.DynamoDB.DocumentClient();

exports.handler = async (event) => {
  const { cart, token, address } = event.arguments.input;
  const { username } = event.identity.claims;

  try {
    // await stripe with total & token

    let payable = 0;
    for (let i = 0; i < cart.length; i++) {
      let data = await getItem(cart[i].id);
      payable += data.Item.price * cart[i].amount;
    }

    return { payable, cart, username, address };
  } catch (error) {
    console.error(error);
  }
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
