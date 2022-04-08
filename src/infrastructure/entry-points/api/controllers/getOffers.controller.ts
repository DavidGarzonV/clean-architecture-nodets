import { NextFunction, Request, Response } from 'express';
import sequelize from '../../../driven-adapters/sequelize/connection/connection';
import { GetOffersUseCase } from '../../../../domain/usecase/get-offers/getOffers.usecase';
import { OfferRepositoryImpl } from '../../../gateways/repositories/offerRepository.impl';
import { Offer } from '../../../../domain/entities/offer.entity';
import { StatusCodes } from '../../../../application/config/constants/enums';

export const getOffersController = async (req: Request, res: Response, next: NextFunction) => {
	const transaction = await sequelize.transaction();
	try {
		const getOffersUseCase = new GetOffersUseCase(
			new OfferRepositoryImpl(),
		);

		const offers: Offer[] = await getOffersUseCase.run(transaction);
		await transaction.commit();

		res.status(StatusCodes.SUCCESS).json({ offers });
	} catch (error) {
		await transaction.rollback();
		next(error);
	}
};
