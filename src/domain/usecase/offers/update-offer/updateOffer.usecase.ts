import { Offer } from './../../../entities/offer.entity';
import { OfferRepository } from '../../../repositories/offer.repository';
import OfferNotFoundException from '../../../exceptions/offerNotFound.exception';

type Params = Omit<Offer, 'id'> & {
  offerId: string;
};

export class UpdateOfferUseCase {
  constructor(private _offerRepository: OfferRepository) {}

	async run(data: Params): Promise<Offer> {
		const { offerId, ...offer } = data;
    const existentOffer = await this._offerRepository.getById(offerId);
    if (!existentOffer) throw new OfferNotFoundException();

    await this._offerRepository.update(offerId, offer);
    return data;
	}
}