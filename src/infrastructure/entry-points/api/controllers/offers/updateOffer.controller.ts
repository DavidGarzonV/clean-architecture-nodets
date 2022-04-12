import { NextFunction, Response, Request } from 'express';
import { sequelize } from '../../../../driven-adapters/sequelize/connection/index';
import { UpdateOfferUseCase } from '../../../../../domain/usecase/offers/update-offer/updateOffer.usecase';
import { OfferRepositoryImpl } from '../../../../gateways/repositories/offerRepository.impl';

export const updateOfferController = async (req: Request, res: Response, next: NextFunction) => {
  const transaction = await sequelize.transaction();
  try {
    const updateOfferUseCase = new UpdateOfferUseCase(new OfferRepositoryImpl());

    const { id } = req.params;
    const data = { offerId: id, ...req.body };

    const updatedOffer = await updateOfferUseCase.run(data);

    res.json({ offer: updatedOffer });
    await transaction.commit();
  } catch (error) {
    await transaction.rollback();
    next(error);
  }
};
