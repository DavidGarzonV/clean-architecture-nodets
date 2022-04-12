import { Router } from 'express';
import { getOffersController, createOfferController, updateOfferController } from '../../controllers';
import { fileValidator, classValidator } from '../../middlewares';
import { createOfferDTO } from '../../dto/createOffer.dto';
import { updateOfferDTO } from '../../dto/updateOffer.dto';

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
router.put(
  '/:id',
  [classValidator(updateOfferDTO, 'params')],
  updateOfferController,
);

export default router;
