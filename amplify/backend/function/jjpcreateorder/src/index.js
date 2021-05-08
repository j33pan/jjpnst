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

async function createItem(id, user, payable, address) {
  const params = {
    TableName: process.env.API_JJPNST_JJPORDERTABLE_NAME,
    Item: {
      id: id,
      // code: "from appsync",
      payable: payable,
      _typename: "JJPOrder",
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

exports.handler = async (event) => {
  const { total, cart, user, payable, address } = event.prev.result;
  const id = uuidv4();
  try {
    await createItem(id, user, payable, address);
    return "SUCCESS";
  } catch (err) {
    return "FAIL";
  }
};
