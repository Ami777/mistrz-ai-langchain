import {HuggingFaceInference} from '@langchain/community/llms/hf';
import {HUGGING_FACE_API_KEY} from "./config";

(async () => {

    const model = new HuggingFaceInference({
        endpointUrl: 'https://n1s5wwh2896n0io6.us-east-1.aws.endpoints.huggingface.cloud',
        apiKey: HUGGING_FACE_API_KEY,
    });
    console.log('Asking...');
    const text = await model.invoke('What language model are you?');
    console.log(text);

})();