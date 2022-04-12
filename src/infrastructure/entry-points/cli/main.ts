import { GetOffersUseCase } from '../../../domain/usecase/offers/get-offers/getOffers.usecase';
import { OfferRepositoryImpl } from '../../gateways/repositories/offerRepository.impl';
import { Offer } from '../../../domain/entities/offer.entity';
import { createOfferMenu } from './menu/offers/create-offer/actions/index';
import { CreateOfferUseCase } from '../../../domain/usecase/offers/create-offer/createOffer.usecase';
import { LocalFileUploader } from '../../helpers/localFileUploader.impl';
import logger from '../../../application/logger/winston';

export class Main {

	async createOffer(offer: Offer): Promise<Offer | null>{
		try {
			const createOfferUseCase = new CreateOfferUseCase(
				new OfferRepositoryImpl(),
				new LocalFileUploader(),
			);
	
			const offerCreated: Offer = await createOfferUseCase.run({ offer, files: []});
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