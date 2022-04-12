import { Router } from 'express';
import { getUsersController } from '../../controllers';

const router = Router();

router.get(
  '/',
  [],
  getUsersController,
);

export default router;
