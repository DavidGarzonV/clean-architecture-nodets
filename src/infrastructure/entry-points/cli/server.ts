import { inquirerMenu, pauseMenu } from './menu/main-menu/actions/index';
import { Main } from './main';

class ConsoleApp {
	async start() {
		try {
			console.clear();
			console.log('==========================');
			console.log('Select an option');
			console.log('==========================\n');

			const mainClass = new Main();

			let option = '';
			do {
				option = await inquirerMenu();
				switch (option) {
					case '1':
						const offer = await mainClass.createOfferMenu();
						console.log('[POST] Offers', offer);
						break;
					case '2':
						const offers = await mainClass.getOffers();
						console.log('[GET] Offers', offers);
						break;
					default:
						break;
				}

				await pauseMenu();
			} while (option !== '0');

		} catch (err) {
			console.error('Fail while executing cli application');
			throw err;
		}
	}
}

export default ConsoleApp;