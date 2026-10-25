const buildPrompt = require('./prompts');
const generateText = require('./bedrock');


function processApiRequest(req){

    try {
        const body = request.body
        console.log("body", body)
    } catch (error) {
        console.error("error processing request", error)
    }
}

module.exports = {processApiRequest}