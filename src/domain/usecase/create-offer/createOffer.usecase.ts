import { OfferRepository } from '../../repositories/offer.repository';
import { Offer } from '../../entities/offer.entity';
import { ThereIsAlreadyAnOffer } from '../../exceptions';

export class CreateOfferUseCase {

	constructor(private offerRepository: OfferRepository) { }

	async run(offer: Offer, transaction?: any): Promise<Offer> {
		const existentOffer = await this.offerRepository.getByName(offer.name);
		if (existentOffer) throw new ThereIsAlreadyAnOffer();

		return this.offerRepository.create(offer, transaction);
	}
}