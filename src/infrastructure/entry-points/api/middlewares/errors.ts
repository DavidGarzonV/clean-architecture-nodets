import { Request, Response, NextFunction } from 'express';
import { STATUS_CODE } from './../../../../application/config/constants/constants';
import * as DomainExceptions from '../../../../domain/exceptions';
import logger from '../../../../application/logger/winston';
import { Exception } from '../../../../domain/exceptions/exception';

export const handle = (error: Error, req: Request, res: Response, next: NextFunction) => {
  const isControlledError = Object.values(DomainExceptions).some((ex) => error instanceof ex);

  if (isControlledError) {
    const exception = error as Exception;
    /* Logging the error message and the exception. */
    logger.error('Controlled bug:', {
      message: exception.message,
      translatedMessage: exception.spanishMessage,
    });
    return res.status(STATUS_CODE.BAD_REQUEST).json({ error: exception.message });
  } else {
    logger.error('Unexpected error: ', error);
    return res.status(STATUS_CODE.INTERNAL_SERVER_ERROR).json({ error: 'unexpected error' });
  }
};
