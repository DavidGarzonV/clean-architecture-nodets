import { Router } from 'express';
import { getUsersController } from '../../controllers/getUsersController';

const router = Router();

router.get(
  '/',
  [],
  getUsersController,
);

export default router;
