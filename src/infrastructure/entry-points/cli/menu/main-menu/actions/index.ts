import inquirer from 'inquirer';
import questions from '../questions/index';

export const pauseMenu = () => {
	const question = [
		{
			type: 'input',
			name: 'enter',
			message: `Press 'enter' to continue`
		}
	];

	console.log('\n');
	return inquirer.prompt(question);
}

export const inquirerMenu = async () => {
	const { option } = await inquirer.prompt(questions);
	return option;
}