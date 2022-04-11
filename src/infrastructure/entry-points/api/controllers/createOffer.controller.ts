import { File } from './../../../../domain/entities/file.entity';
import { NextFunction, Request, Response } from 'express';
import { Offer } from '../../../../domain/entities/offer.entity';
import { CreateOfferUseCase } from '../../../../domain/usecase/create-offer/createOffer.usecase';
import { OfferRepositoryImpl } from '../../../gateways/repositories/offerRepository.impl';
import sequelize from '../../../driven-adapters/sequelize/connection/connection';
import { StatusCodes } from '../../../../application/config/constants/enums';
import { LocalFileUploader } from '../../../helpers/localFileUploader.impl';

export const createOfferController = async (req: Request, res: Response, next: NextFunction) => {
  const transaction = await sequelize.transaction();
  try {
    const createOfferUseCase = new CreateOfferUseCase(
      new OfferRepositoryImpl(),
      new LocalFileUploader(),
    );

    const offer: Offer = req.body;
    const files = (req.files as File[]) || [];

    const offerCreated: Offer = await createOfferUseCase.run(
      offer,
      files,
      transaction
    );
    await transaction.commit();

    res.status(StatusCodes.SUCCESS).json({ offer: offerCreated });
  } catch (error) {
    await transaction.rollback();
    next(error);
  }
};
