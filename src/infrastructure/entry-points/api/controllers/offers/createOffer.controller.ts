import { NextFunction, Request, Response } from 'express';
import { Offer } from './../../../../../domain/entities/offer.entity';
import { File } from './../../../../../domain/entities/file.entity';
import { CreateOfferUseCase } from '../../../../../domain/usecase/offers/create-offer/createOffer.usecase';
import { sequelize } from '../../../../driven-adapters/sequelize/connection';
import { OfferRepositoryImpl } from '../../../../gateways/repositories/offerRepository.impl';
import { LocalFileUploader } from '../../../../helpers';

export const createOfferController = async (req: Request, res: Response, next: NextFunction) => {
  const transaction = await sequelize.transaction();
  try {
    const createOfferUseCase = new CreateOfferUseCase(
      new OfferRepositoryImpl(),
      new LocalFileUploader(),
    );

    const offer = req.body;
    const files = (req.files as File[]) || [];

    const offerCreated: Offer = await createOfferUseCase.run({
      offer,
      files,
      transaction
    });
    await transaction.commit();

    res.json({ offer: offerCreated });
  } catch (error) {
    await transaction.rollback();
    next(error);
  }
};
