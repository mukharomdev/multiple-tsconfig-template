import inquirer from 'inquirer';

import { Answers } from '../models/choice.js';

export async function providerQuestion(): Promise<Answers> {

    return await inquirer.prompt([{
        name: 'project',
        type: 'input',
        message: 'Silahkan buat nama project:',
    }]);
}
