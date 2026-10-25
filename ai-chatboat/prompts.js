

async function buildPrompt(prmpt){

    try {
        return `you are a helpful email writer assistance.
        your task is to provide optimised and professional email content.

        RULES:
        1. Use only facts supplied by the candidate.
        2. Improve clarity, grammar, and professional wording.
        3. provide a short email content with a maximum of 100 words.

        `
    } catch (error) {
        
    }
}
module.exports = buildPrompt