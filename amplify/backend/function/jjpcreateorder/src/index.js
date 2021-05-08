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

const params = {
  TableName: process.env.API_JJPNST_JJPORDERPRODUCTTABLE_NAME,
  /* Item properties will depend on your application concerns */
  Item: {
    id: uuidv4(),
    code: "some code...",
  },
};

async function createItem() {
  try {
    await docClient.put(params).promise();
  } catch (err) {
    return err;
  }
}

exports.handler = async (event) => {
  try {
    await createItem();
    return { body: "Successfully created item!" };
  } catch (err) {
    return { error: err };
  }
  //   // TODO implement
  //   const response = {
  //     statusCode: 200,
  //     //  Uncomment below to enable CORS requests
  //     headers: {
  //       "Access-Control-Allow-Origin": "*",
  //       "Access-Control-Allow-Headers": "*",
  //     },
  //     body: JSON.stringify("Hello from Lambda!"),
  //   };
  //   return response;
};
