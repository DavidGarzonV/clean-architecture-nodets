import { NextFunction, Request, Response } from 'express';
import { File } from './../../../../domain/entities/file.entity';
import {
	STATUS_CODE,
	VALIDATION_ERRORS,
	fileTypes,
	imageMimeTypes,
	maxImageFileSize
} from '../../../../application/config/constants/constants';

export const fileValidator = (type: fileTypes) => async (req: Request, res: Response, next: NextFunction) => {
	if (req.files) {
		if (type === 'image') {
			const files = (req.files as File[]) || [];
			const isImage = files.every(f => imageMimeTypes.includes(f.mimetype))
			if (!isImage) {
				return res.status(STATUS_CODE.BAD_REQUEST).json({ error: VALIDATION_ERRORS.invalidImage })
			}

			const isInValidSize = files.every(f => f.size <= maxImageFileSize);
			if (!isInValidSize) {
				return res.status(STATUS_CODE.BAD_REQUEST).json({ error: VALIDATION_ERRORS.uploadMax })
			}
		}
	}

	next();
}