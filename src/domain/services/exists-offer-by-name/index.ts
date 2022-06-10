import { OfferRepository } from '../../repositories/offer.repository';

export class ExistsOfferByUserName{

	constructor(
		private offerRepository: OfferRepository,
	) { }

	async run(name: string): Promise<boolean>{
		const existentOffer = await this.offerRepository.getByName(name);
		return existentOffer !== undefined;
	}
}