const processApiRequest = require('./api-operations');
exports.handler = async (event) => {
  console.log("Lambda invoked:", JSON.stringify(event));

  const response = await processApiRequest(event);

  return {
    statusCode: 200,
    body: JSON.stringify({
      message: "here is the email!",
      data: response
    }),
  };
};