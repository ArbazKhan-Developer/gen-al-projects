const buildPrompt = require('./prompts');
const generateText = require('./bedrock');


async function processApiRequest(req){

    try {
        const prompt = await buildPrompt(req);
        const response = await generateText(prompt);
        console.log("response", response)
        return response;
    } catch (error) {
        console.error("error processing request", error)
    }
}

module.exports = {processApiRequest}