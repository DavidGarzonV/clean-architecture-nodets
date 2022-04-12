import { NextFunction, Request, Response } from 'express';
import { Offer } from './../../../../../domain/entities/offer.entity';
import { GetOffersUseCase } from '../../../../../domain/usecase/offers/get-offers/getOffers.usecase';
import { sequelize } from './../../../../driven-adapters/sequelize/connection/index';
import { OfferRepositoryImpl } from '../../../../gateways/repositories/offerRepository.impl';

export const getOffersController = async (req: Request, res: Response, next: NextFunction) => {
	const transaction = await sequelize.transaction();
	try {
		const getOffersUseCase = new GetOffersUseCase(
			new OfferRepositoryImpl(),
		);

		const offers: Offer[] = await getOffersUseCase.run(transaction);
		await transaction.commit();

		res.json({ offers });
	} catch (error) {
		await transaction.rollback();
		next(error);
	}
};
