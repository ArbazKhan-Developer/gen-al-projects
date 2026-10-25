const processApiRequest = require('./api-operations');
exports.handler = async (event) => {
  console.log("Lambda invoked:", JSON.stringify(event));

  await processApiRequest(event);

  return {
    statusCode: 200,
    body: JSON.stringify({
      message: "Hello from handler.js!",
    }),
  };
};