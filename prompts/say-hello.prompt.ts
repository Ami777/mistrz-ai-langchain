import {PromptTemplate} from '@langchain/core/prompts';

export const sayHelloPrompt = PromptTemplate.fromTemplate(`Say hello to user.

Tell him/her something interesting about their name. User's name is {name}.`);