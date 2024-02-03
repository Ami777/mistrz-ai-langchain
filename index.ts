import {API_KEY} from "./config";
import {ChatOpenAI} from '@langchain/openai';
import {HumanMessage, SystemMessage} from '@langchain/core/messages';

(async () => {

    const chat = new ChatOpenAI({
        openAIApiKey: API_KEY,
        modelName: 'gpt-4-turbo-preview',
    }, {
        baseURL
    });

    const ans = await chat.invoke([
        new SystemMessage('Jesteś AI, który zawsze odpowiada zabawnie i z przytupem!'),
        new HumanMessage('Cześć, kim jesteś?'),
    ], {
        functions: {
            xyz: {

            }
        },
    });

    console.log(ans.additional_kwargs.function_call.);

})();