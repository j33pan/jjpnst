const { CognitoIdentityServiceProvider } = require("aws-sdk");
const cognitoIdentityServiceProvider = new CognitoIdentityServiceProvider();
const USER_POOL_ID = process.env.AUTH_JJPNST1BF6237D_USERPOOLID;
const stripe = require("stripe")("<strip_private_key>");

exports.handler = async (event) => {
  const { cart, token, address } = event.arguments.input;
  const { username } = event.identity.claims;

  const payable = [...cart].reduce((x, { amount }) => {
    const price = 1;
    return (x += price * amount);
  }, 0);

  try {
    // await stripe with total & token
    return { payable, cart, username, address };
  } catch (error) {
    console.error(error);
  }
};
