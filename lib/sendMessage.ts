import { CreateChatCompletionRequestMessage } from "openai/resources";

export const sendMessage = async (message: CreateChatCompletionRequestMessage[]) => {
    try {
        const response = await fetch('/api/createMessage', { method: 'POST', headers: { 'content-type': 'application/json' }, body: JSON.stringify({ message }) }

        )
        return await response.json()
    }
    catch (error) {
        console.log(error)
    }

}