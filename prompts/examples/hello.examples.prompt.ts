import {PromptTemplate} from '@langchain/core/prompts';

export const helloExamplesPrompt = PromptTemplate.fromExamples(
    [
        'My name is {name}!',
        'I am {name}!',
        '{name} here!',
    ],
    'Say hello in format of examples.',
    ['name'],
    '\n\n---------\n\n',
    'Take a look at examples:',
);
