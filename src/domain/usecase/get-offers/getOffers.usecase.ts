import { OfferRepository } from '../../repositories/offer.repository';
import { Offer } from '../../entities/offer.entity';

export class GetOffersUseCase {

	constructor(private offerRepository: OfferRepository) { }

	async run(transaction?: any): Promise<Offer[]> {
		return this.offerRepository.get(transaction);
	}
}