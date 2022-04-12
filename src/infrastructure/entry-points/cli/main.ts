import { GetOffersUseCase } from '../../../domain/usecase/offers/get-offers/getOffers.usecase';
import { OfferRepositoryImpl } from '../../gateways/repositories/offerRepository.impl';
import { Offer } from '../../../domain/entities/offer.entity';
import { createOfferMenu } from './menu/offers/create-offer/actions/index';
import { CreateOfferUseCase } from '../../../domain/usecase/offers/create-offer/createOffer.usecase';
import logger from '../../../application/logger/logger';

export class Main {

	async createOffer(offer: Offer): Promise<Offer | null>{
		try {
			const createOfferUseCase = new CreateOfferUseCase(
				new OfferRepositoryImpl(),
			);
	
			const offerCreated: Offer = await createOfferUseCase.run(offer);
			return offerCreated;
		} catch (error) {
			logger.error('Error creating offer', error)
		}

		return null;
	}

	async createOfferMenu() {
		const data = await createOfferMenu();
		return this.createOffer(data);
	}

	async getOffers() {
		try {
			const getOffersUseCase = new GetOffersUseCase(
				new OfferRepositoryImpl(),
			);

			const offers: Offer[] = await getOffersUseCase.run();

			return offers;
		} catch (error) {
			logger.error('Error getting offers')
		}
	}
}