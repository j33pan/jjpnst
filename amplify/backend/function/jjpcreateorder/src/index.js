/* Amplify Params - DO NOT EDIT
	API_JJPNST_GRAPHQLAPIIDOUTPUT
	API_JJPNST_JJPORDERPRODUCTTABLE_ARN
	API_JJPNST_JJPORDERPRODUCTTABLE_NAME
	API_JJPNST_JJPORDERTABLE_ARN
	API_JJPNST_JJPORDERTABLE_NAME
	ENV
	REGION
Amplify Params - DO NOT EDIT */

const AWS = require("aws-sdk");
const docClient = new AWS.DynamoDB.DocumentClient();
const { v4: uuidv4 } = require("uuid");

exports.handler = async (event) => {
  const { payable, cart, username, address } = event.prev.result;
  const id = uuidv4();
  try {
    await cerateorder(id, username, payable, address);
    await createorderprod(id, cart);
    return "SUCCESS";
  } catch (err) {
    return "FAIL";
  }
};

async function cerateorder(id, user, payable, address) {
  const params = {
    TableName: process.env.API_JJPNST_JJPORDERTABLE_NAME,
    Item: {
      id: id,
      // code: "from appsync",
      payable: payable,
      __typename: "JJPOrder",
      address: address,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      owner: user,
    },
  };
  try {
    await docClient.put(params).promise();
  } catch (err) {
    return err;
  }
}

async function createorderprod(id, cart) {
  let ops = [];
  for (let i = 0; i < cart.length; i++) {
    ops.push({
      PutRequest: {
        Item: {
          id: uuidv4(),
          orderid: id,
          productid: cart[i].id,
          amount: cart[i].amount,
          __typename: "JJPOrderProduct",
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
        },
      },
    });
  }
  let params = { RequestItems: {} };
  params["RequestItems"][
    process.env.API_JJPNST_JJPORDERPRODUCTTABLE_NAME
  ] = ops;

  try {
    await docClient.batchWrite(params).promise();
  } catch (err) {
    return err;
  }
}
