import { Router } from 'express';
import { createOfferController } from '../../controllers/createOffer.controller';
import { classValidator } from '../../middlewares/validator';
import { createOfferDTO } from '../../dto/createOffer.dto';
import { getOffersController } from '../../controllers/getOffers.controller';

const router = Router();
router.post(
  '/',
  [classValidator(createOfferDTO)],
  createOfferController
);
router.get(
  '/',
  [],
  getOffersController,
);

export default router;
