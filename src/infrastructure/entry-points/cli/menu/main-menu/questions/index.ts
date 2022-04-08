
const questions = [
	{
		type: 'list',
		name: 'option',
		message: 'What do you want to do?',
		choices: [
			{
				value: '1',
				name: `1. Create Offer`
			},
			{
				value: '2',
				name: `2. Get Offers`
			},
		]
	}
];

export default questions;