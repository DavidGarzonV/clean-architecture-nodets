import { Router } from 'express';
import { createOfferController } from '../../controllers/createOffer.controller';
import { classValidator } from '../../middlewares/validator';
import { createOfferDTO } from '../../dto/createOffer.dto';
import { getOffersController } from '../../controllers/getOffers.controller';
import { fileValidator } from '../../middlewares/fileValidator';

const router = Router();
router.post(
  '/',
  [classValidator(createOfferDTO), fileValidator('image')],
  createOfferController
);
router.get(
  '/',
  [],
  getOffersController,
);

export default router;
