import { Request, Response, NextFunction } from 'express';
import * as DomainExceptions from '../../../../domain/exceptions';
import { StatusCodes } from '../../../../application/config/constants/enums';
import logger from '../../../../application/logger/logger';

export const handle = (error: Error, req: Request, res: Response, next: NextFunction) => {
  const isControlledError = Object.values(DomainExceptions).some((ex) => error instanceof ex);

  if (isControlledError) {
    logger.error('Controlled bug:', error.message);
    return res.status(StatusCodes.BAD_REQUEST).json({ error: error.message });
  } else {
    logger.error('Unexpected error: ', error);
    return res.status(StatusCodes.SERVER_ERROR).json({ error: 'unexpected error' });
  }
};
