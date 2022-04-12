import { Request, Response, NextFunction } from 'express';
import { STATUS_CODE } from './../../../../application/config/constants/constants';
import * as DomainExceptions from '../../../../domain/exceptions';
import logger from '../../../../application/logger/winston';

export const handle = (error: Error, req: Request, res: Response, next: NextFunction) => {
  const isControlledError = Object.values(DomainExceptions).some((ex) => error instanceof ex);

  if (isControlledError) {
    logger.error('Controlled bug:', error.message);
    return res.status(STATUS_CODE.BAD_REQUEST).json({ error: error.message });
  } else {
    logger.error('Unexpected error: ', error);
    return res.status(STATUS_CODE.INTERNAL_SERVER_ERROR).json({ error: 'unexpected error' });
  }
};
