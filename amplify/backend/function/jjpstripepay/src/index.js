/* Amplify Params - DO NOT EDIT
	AUTH_JJPNST1BF6237D_USERPOOLID
	ENV
	REGION
Amplify Params - DO NOT EDIT */

const { CognitoIdentityServiceProvider } = require("aws-sdk");
const cognitoIdentityServiceProvider = new CognitoIdentityServiceProvider();
const USER_POOL_ID = process.env.AUTH_JJPNST1BF6237D_USERPOOLID;
const stripe = require("stripe")("<strip_private_key>");

exports.handler = async (event) => {
  // TODO implement
  const response = {
    statusCode: 200,
    //  Uncomment below to enable CORS requests
    //  headers: {
    //      "Access-Control-Allow-Origin": "*",
    //      "Access-Control-Allow-Headers": "*"
    //  },
    body: JSON.stringify("Hello from Lambda!"),
  };
  return response;
};
