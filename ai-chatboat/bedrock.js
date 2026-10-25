const {BedrockRuntimeClient, ConverseCommand} = require("@aws-sdk/client-bedrock-runtime");

const client = new BedrockRuntimeClient({ region: "ap-south-1" });


const modelId = process.env.BEDROCK_MODEL_ID || "amazon.nova-micro-v1:0";

async function generateText(prompt) {
    const command = new ConverseCommand({
        modelId,
        messages: [
            {
                role: "user",
                content: [
                    {
                        type: "test/plain",
                        valye: prompt
                    }
                ]
            }
        ],
        inferenceConfig: {
            maxTokens: 1000,
            temperature: 0.2
        }
    })
    const response = await client.send(command);
    console.log("Response from Bedrock:", response);
     const text = response.output?.message?.content
    ?.filter((item) => item.text)
    .map((item) => item.text)
    .join("");
    console.log("text", text);
    
    return text;
}

module.exports = generateText